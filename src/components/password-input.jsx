import { memo, useCallback, useContext, useState } from "react";
import usePassword from "../customHooks/usePassword";
import Regenerate from "/img/regenerate.png";
import Copy from "/img/copy.png";
import LengthContext from "../Contexts/length-contex";
import { ToastContainer, toast } from "react-toastify";
import ActionButton from "./action-button";
import SecutiryText from "./security-text";

const PasswordInputComponent = () => {
  const [rotate, setRotate] = useState(false);
  const { length } = useContext(LengthContext);
  const { password, generatePassword } = usePassword();
  const handleCopyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    toast.success("Contraseña copiada al portapapeles", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }, [password]);

  const handleGeneratePassword = useCallback(() => {
    setRotate(true);
    generatePassword();
    setTimeout(() => {
      setRotate(false);
    }, 1000);
  }, [generatePassword]);

  return (
    <div className="input">
      <ToastContainer />
      <div className="container-input-password">
        <div className="input-alone">
          <span>{password}</span>
        </div>
        <div className="action-buttons-container">
          <ActionButton
            handleClick={handleGeneratePassword}
            icon={Regenerate}
            className={`regenerate ${rotate ? "rotated" : null}`}
          />

          <ActionButton
            handleClick={handleCopyPassword}
            icon={Copy}
            className="copy"
          />
        </div>
      </div>
      <SecutiryText length={length} />
    </div>
  );
};

const PasswordInput = memo(PasswordInputComponent);
export default PasswordInput;

import { memo, useCallback, useContext, useState } from "react";
import usePassword from "../customHooks/usePassword";
import Regenerate from "/img/regenerate.png";
import Copy from "/img/copy.png";
import LengthContext from "../Contexts/length-contex";
import { ToastContainer, toast } from "react-toastify";

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

  const setSecurityColor = useCallback(() => {
    if (length < 5) return "red";
    if (length < 8) return "orange";
    if (length < 10) return "yellow";
    if (length < 12) return "green";
    return "blue";
  }, [length]);

  const setSecurityText = useCallback(() => {
    if (length < 5) return "Muy débil";
    if (length < 8) return "Débil";
    if (length < 10) return "Normal";
    if (length < 12) return "Fuerte";
    return "Muy fuerte";
  }, [length]);

  return (
    <div className="input">
      <ToastContainer />
      <div className="container-input-password">
        <div className="input-alone">
          <span>{password}</span>
        </div>
        <div className="action-buttons-container">
          <button onClick={handleGeneratePassword} className="button">
            <img
              src={Regenerate}
              className={`regenerate ${rotate ? "rotated" : null}`}
            />
          </button>
          <button onClick={handleCopyPassword} className="button">
            <img src={Copy} className="copy" />
          </button>
        </div>
      </div>
      <span className="color" style={{ backgroundColor: setSecurityColor() }}>
        <p>{setSecurityText()}</p>
      </span>
    </div>
  );
};

const PasswordInput = memo(PasswordInputComponent);
export default PasswordInput;

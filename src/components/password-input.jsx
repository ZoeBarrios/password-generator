import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Regenerate from "/img/regenerate.png";
import Copy from "/img/copy.png";
import LengthContext from "../Contexts/length-contex";
import { ToastContainer, toast } from "react-toastify";
import ActionButton from "./action-button";
import SecutiryText from "./security-text";
import usePassword from "../customHooks/usePassword";
import ChecksContext from "../Contexts/checks-context";
import PasswordInputContext from "../Contexts/password-user";

const PasswordInputComponent = () => {
  const [rotate, setRotate] = useState(false);
  const { length, setLength } = useContext(LengthContext);
  const { state } = useContext(ChecksContext);

  const { password, generatePassword, setPassword } = usePassword(
    length,
    state
  );
  const { passwordUser, setPasswordUser } = useContext(PasswordInputContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (passwordUser) {
      inputRef.current.value = passwordUser;
      setLength(passwordUser.length);
      setPassword("");
    } else {
      setPasswordUser("");
      inputRef.current.value = password;
    }
  }, [password, passwordUser, length, setPassword, setPasswordUser, setLength]);

  const handleCopyPassword = useCallback(() => {
    navigator.clipboard.writeText(inputRef.current.value);
    toast.success("Contraseña copiada al portapapeles", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }, []);

  const handleGeneratePassword = useCallback(() => {
    setPasswordUser("");
    setRotate(true);
    generatePassword();
    setTimeout(() => {
      setRotate(false);
    }, 200);
  }, [generatePassword, setPasswordUser]);

  const handleChange = (e) => {
    setPasswordUser(e.target.value);
  };

  return (
    <div className="input">
      <ToastContainer />
      <div className="container-input-password">
        <input
          type="text"
          className="input-alone"
          onChange={handleChange}
          ref={inputRef}
        />
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
      <SecutiryText length={length} password={passwordUser} />
    </div>
  );
};

const PasswordInput = memo(PasswordInputComponent);
export default PasswordInput;

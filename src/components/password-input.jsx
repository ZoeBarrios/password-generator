import { memo, useCallback } from "react";
import usePassword from "../customHooks/usePassword";
import Regenerate from "/img/regenerate.png";
import Copy from "/img/copy.png";

const PasswordInputComponent = () => {
  const { password, generatePassword } = usePassword();
  const handleCopyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    alert("Copiado");
  }, [password]);

  const handleGeneratePassword = useCallback(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="password-container">
      <div className="input">
        <input
          type="text"
          readOnly={true}
          value={password}
          className="input-alone"
        />
        <div className="action-buttons-container">
          <button onClick={handleGeneratePassword} className="button">
            <img src={Regenerate} className="regenerate" />
          </button>
          <button onClick={handleCopyPassword} className="button">
            <img src={Copy} className="copy" />
          </button>
        </div>
      </div>
    </div>
  );
};

const PasswordInput = memo(PasswordInputComponent);
export default PasswordInput;

import { memo, useCallback } from "react";
import usePassword from "../customHooks/usePassword";
import Regenerate from "/public/img/regenerate.png";

const PasswordInputComponent = () => {
  const { password, generatePassword } = usePassword();
  const handleCopyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    alert("Copiado");
  }, [password]);

  const handleGeneratePassword = useCallback(() => {
    generatePassword();
  }, [generatePassword]);

  const showPassword = useCallback(() => {
    if (password.length > 20) {
      return password.slice(0, 20) + "...";
    }
    return password;
  }, [password]);

  return (
    <div className="password-container">
      <div className="input">
        <input
          type="text"
          readOnly={true}
          value={showPassword()}
          className="input-alone"
        />
        <button onClick={handleGeneratePassword} className="button">
          <img src={Regenerate} className="regenerate" />
        </button>
      </div>

      <button onClick={handleCopyPassword} className="real-button">
        Copiar
      </button>
    </div>
  );
};

const PasswordInput = memo(PasswordInputComponent);
export default PasswordInput;

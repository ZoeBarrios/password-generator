import { memo, useCallback } from "react";
import usePassword from "../customHooks/usePassword";

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
    <div>
      <input type="text" readOnly={true} value={password}></input>
      <button onClick={handleGeneratePassword}>Otra</button>
      <button onClick={handleCopyPassword}>Copiar</button>
    </div>
  );
};

const PasswordInput = memo(PasswordInputComponent);
export default PasswordInput;

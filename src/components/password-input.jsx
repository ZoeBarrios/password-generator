import { memo, useCallback } from "react";

const PasswordInputComponent = ({ password, handleGeneratePassword }) => {
  const handleCopyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    alert("Copiado");
  }, [password]);

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

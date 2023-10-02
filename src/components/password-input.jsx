import { memo, useCallback } from "react";

const PasswordInputComponent = ({ password, handleRegeneratePassword }) => {
  const handleCopyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    alert("Copiado");
  }, []);

  return (
    <div>
      <input type="text" readOnly={true} value={password}></input>
      <button onClick={handleRegeneratePassword}>Otra</button>
      <button onClick={handleCopyPassword}>Copiar</button>
    </div>
  );
};

const PasswordInput = memo(PasswordInputComponent);
export default PasswordInput;

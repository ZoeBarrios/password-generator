import { memo, useCallback, useEffect } from "react";
import usePassword from "../customHooks/usePassword";
import LongitudInput from "./longitud-input";

const PasswordInputComponent = ({ state, length, setLength }) => {
  const { password, generatePassword } = usePassword();
  const handleCopyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    alert("Copiado");
  }, [password]);

  useEffect(() => {
    generatePassword(state, length);
  }, [generatePassword, length, state]);

  const handleGeneratePassword = useCallback(() => {
    generatePassword(state, length);
  }, [generatePassword, length, state]);

  return (
    <div>
      <input type="text" readOnly={true} value={password}></input>
      <button onClick={handleGeneratePassword}>Otra</button>
      <button onClick={handleCopyPassword}>Copiar</button>
      <LongitudInput setLength={setLength} longitud={length} />
    </div>
  );
};

const PasswordInput = memo(PasswordInputComponent);
export default PasswordInput;

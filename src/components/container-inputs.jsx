import { useCallback, useEffect, useReducer } from "react";
import { passwordReducer, INITIAL_STATE } from "../../Utils";
import usePassword from "../customHooks/usePassword";
import PasswordInput from "./password-input";
import LongitudInput from "./longitud-input";
import CheckInputs from "./check-inputs";

export default function ContainerInputs({ length, setLength }) {
  const [state, dispatch] = useReducer(passwordReducer, INITIAL_STATE);
  const { password, generatePassword } = usePassword();

  useEffect(() => {
    generatePassword(state, length);
  }, [generatePassword, length, state]);

  const handleGeneratePassword = useCallback(() => {
    generatePassword(state, length);
  }, [generatePassword, length, state]);

  return (
    <>
      <PasswordInput
        password={password}
        handleGeneratePassword={handleGeneratePassword}
      />
      <LongitudInput setLength={setLength} longitud={length} />
      <CheckInputs dispatch={dispatch} state={state} />
    </>
  );
}

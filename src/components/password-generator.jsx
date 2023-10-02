import { useCallback, useEffect, useReducer, useState } from "react";
import LongitudInput from "./longitud-input";
import CheckInputs from "./check-inputs";
import PassworInput from "./password-input";
import { INITIAL_STATE, generatePassword, passwordReducer } from "../../Utils";
import MessageSecurity from "./message-security";

export default function PasswordGenerator() {
  const [state, dispatch] = useReducer(passwordReducer, INITIAL_STATE);
  const [length, setLength] = useState(1);
  const [password, setPassword] = useState("");
  useEffect(() => {
    setPassword(generatePassword(state, length));
  }, [length, state]);

  const handleRegeneratePassword = useCallback(() => {
    setPassword(generatePassword(state, length));
  }, [state, length]);

  return (
    <div>
      <MessageSecurity length={length} />
      <PassworInput
        password={password}
        handleRegeneratePassword={handleRegeneratePassword}
      />
      <LongitudInput setLength={setLength} longitud={length} />
      <CheckInputs dispatch={dispatch} state={state} />
    </div>
  );
}

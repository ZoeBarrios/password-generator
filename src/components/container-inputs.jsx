import { useReducer } from "react";
import { passwordReducer, INITIAL_STATE } from "../../Utils";
import PasswordInput from "./password-input";
import CheckInputs from "./check-inputs";

export default function ContainerInputs({ length, setLength }) {
  const [state, dispatch] = useReducer(passwordReducer, INITIAL_STATE);

  return (
    <>
      <PasswordInput state={state} length={length} setLength={setLength} />
      <CheckInputs dispatch={dispatch} state={state} />
    </>
  );
}

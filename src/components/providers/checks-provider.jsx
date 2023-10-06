import { useReducer } from "react";
import { INITIAL_STATE, checksReducer } from "../../../Utils";
import ChecksContext from "../../Contexts/checks-context";

export default function ChecksProvider({ children }) {
  const [state, dispatch] = useReducer(checksReducer, INITIAL_STATE);
  return (
    <ChecksContext.Provider value={{ state, dispatch }}>
      {children}
    </ChecksContext.Provider>
  );
}

import { useCallback, useContext, useEffect } from "react";
import CheckBox from "./check-box";
import ChecksContext from "../Contexts/checks-context";
import PasswordUserContext from "../Contexts/password-user";
import { ACTIONS, options } from "../../Utils";

export default function CheckInputs() {
  const { state, dispatch } = useContext(ChecksContext);
  const { passwordUser } = useContext(PasswordUserContext);
  const checkInputsFalse = useCallback((state) => {
    return Object.values(state).filter((value) => value === true).length;
  }, []);

  useEffect(() => {
    const checkIfExist = (array) => {
      return passwordUser.split("").some((char) => array.includes(char));
    };
    if (passwordUser) {
      const newState = {
        mayusculas: checkIfExist(options.mayusculas),
        minusculas: checkIfExist(options.minusculas),
        numeros: checkIfExist(options.numeros),
        simbolos: checkIfExist(options.simbolos),
      };
      dispatch({
        type: ACTIONS.SET_STATE,
        payload: newState,
      });
    }
  }, [dispatch, passwordUser]);

  const handleChanges = useCallback(
    ({ target }) => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const checksFalse = checkInputsFalse(state);

      if (checksFalse == 1 && !target.checked) {
        return;
      }

      checkboxes.forEach((checkbox) => {
        if (
          checksFalse == 2 &&
          !target.checked &&
          checkbox.checked &&
          checkbox.name != target.name
        ) {
          checkbox.classList.add("disabled");
        } else {
          checkbox.classList.remove("disabled");
        }
      });

      dispatch({
        type: `SET_${target.name.toUpperCase()}`,
        payload: target.checked,
      });
    },
    [checkInputsFalse, dispatch, state]
  );

  return (
    <div className="checks-container">
      <div className="checks">
        {Object.entries(state).map(([key]) => {
          return (
            <CheckBox
              key={key}
              handleChanges={handleChanges}
              name={key}
              checked={state[key]}
            />
          );
        })}
      </div>
    </div>
  );
}

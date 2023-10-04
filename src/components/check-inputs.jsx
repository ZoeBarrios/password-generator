import { memo, useCallback, useContext } from "react";
import CheckBox from "./check-box";
import ChecksContext from "../Contexts/checks-context";

function CheckInputsComponent() {
  const { state, dispatch } = useContext(ChecksContext);

  const checkInputsFalse = useCallback((state) => {
    return Object.values(state).filter((value) => value === true).length;
  }, []);

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
      <p>Caracteres usados</p>
      <div className="checks">
        {Object.entries(state).map(([key, value]) => {
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

const CheckInputs = memo(CheckInputsComponent);
export default CheckInputs;

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
      if (checkInputsFalse(state) == 1 && target.checked == false) return;
      dispatch({
        type: `SET_${target.name.toUpperCase()}`,
        payload: target.checked,
      });
    },
    [checkInputsFalse, dispatch, state]
  );
  return (
    <>
      <div>
        <p>Caracteres usados</p>
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
    </>
  );
}

const CheckInputs = memo(CheckInputsComponent);
export default CheckInputs;

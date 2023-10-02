import { useCallback } from "react";
import CheckBox from "./check-box";

export default function CheckInputs({ state, dispatch }) {
  const checkInputsFalse = (state) => {
    return Object.values(state).filter((value) => value === true).length;
  };

  const handleChanges = useCallback(
    ({ target }) => {
      if (checkInputsFalse(state) == 1 && target.checked == false) return;
      dispatch({
        type: `SET_${target.name.toUpperCase()}`,
        payload: target.checked,
      });
    },
    [dispatch, state]
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

import { useCallback, useContext, useId, useRef } from "react";
import LengthContext from "../../Contexts/length-contex";
import PasswordInputContext from "../../Contexts/password-user";
import { TYPE_INPUT } from "../../../Utils";

export default function LongitudInputComponent() {
  const { length, setLength } = useContext(LengthContext);
  const { setPasswordUser } = useContext(PasswordInputContext);
  const inputId = useId();
  const rangeRef = useRef(null);
  const handleSetLongitud = useCallback(
    ({ target }) => {
      switch (target.name) {
        case TYPE_INPUT.SUMA:
          setLength((prev) => {
            if (prev < 50) {
              rangeRef.current.value = prev + 1;
              return prev + 1;
            }

            return prev;
          });
          break;
        case TYPE_INPUT.RESTA:
          setLength((prev) => {
            if (prev > 1) {
              rangeRef.current.value = prev - 1;
              return prev - 1;
            }
            return prev;
          });
          break;
        case TYPE_INPUT.RANGE:
          setLength(Number(target.value));
          break;
        default:
          break;
      }
      setPasswordUser("");
    },
    [setLength, setPasswordUser]
  );

  return (
    <div className="container-input-length">
      <div className="show-longitud">
        <p>Longitud de la contraseña: {length}</p>
      </div>
      <div className="container-input-range">
        <button
          onClick={handleSetLongitud}
          name={TYPE_INPUT.RESTA}
          className={length == 1 ? "disabled" : null}
        >
          -
        </button>
        <input
          id={inputId}
          ref={rangeRef}
          type="range"
          onChange={handleSetLongitud}
          value={length}
          name={TYPE_INPUT.RANGE}
          min={1}
          max={50}
          className="input-range"
        ></input>
        <button
          onClick={handleSetLongitud}
          name={TYPE_INPUT.SUMA}
          className={length == 50 ? "disabled" : null}
        >
          +
        </button>
      </div>
    </div>
  );
}

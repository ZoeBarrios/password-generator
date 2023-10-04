import { memo, useCallback, useContext, useRef } from "react";
import LengthContext from "../Contexts/length-contex";

const TYPE_INPUT = {
  SUMA: "SUMA",
  RESTA: "RESTA",
  RANGE: "RANGE",
};

function LongitudInputComponent() {
  const { length, setLength } = useContext(LengthContext);
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
    },
    [setLength]
  );

  return (
    <>
      <div className="show-longitud">
        <label>Longitud de la contraseña: </label>
        <span>{length}</span>
      </div>
      <div className="container-input-range">
        <button onClick={handleSetLongitud} name={TYPE_INPUT.RESTA}>
          -
        </button>
        <input
          ref={rangeRef}
          type="range"
          onChange={handleSetLongitud}
          defaultValue={length}
          name={TYPE_INPUT.RANGE}
          min={1}
          max={50}
          className="input-range"
        ></input>
        <button onClick={handleSetLongitud} name={TYPE_INPUT.SUMA}>
          +
        </button>
      </div>
    </>
  );
}

const LongitudInput = memo(LongitudInputComponent);
export default LongitudInput;

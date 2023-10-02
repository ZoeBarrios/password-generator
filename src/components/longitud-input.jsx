import { memo, useCallback, useRef } from "react";

const TYPE_INPUT = {
  SUMA: "SUMA",
  RESTA: "RESTA",
  RANGE: "RANGE",
};

function LongitudInputComponent({ longitud, setLength }) {
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
      <div>
        <label>Longitud de la contraseña</label>
        <span>{longitud}</span>
      </div>

      <button onClick={handleSetLongitud} name={TYPE_INPUT.RESTA}>
        -
      </button>
      <input
        ref={rangeRef}
        type="range"
        onChange={handleSetLongitud}
        defaultValue={longitud}
        name={TYPE_INPUT.RANGE}
        min={1}
        max={50}
      ></input>
      <button onClick={handleSetLongitud} name={TYPE_INPUT.SUMA}>
        +
      </button>
    </>
  );
}

const LongitudInput = memo(LongitudInputComponent);
export default LongitudInput;

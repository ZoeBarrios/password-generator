import { memo } from "react";
const NAMES = {
  numeros: "Números",
  simbolos: "Símbolos",
  minusculas: "Minúsculas",
  mayusculas: "Mayúsculas",
};
function CheckBoxComponent({ handleChanges, name, checked }) {
  return (
    <div>
      <label htmlFor={name}>{NAMES[name]}</label>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChanges}
        checked={checked}
      />
    </div>
  );
}

const CheckBox = memo(CheckBoxComponent);
export default CheckBox;

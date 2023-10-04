import { memo } from "react";
const NAMES = {
  numeros: "123",
  simbolos: "!@#",
  minusculas: "abc",
  mayusculas: "ABC",
};
function CheckBoxComponent({ handleChanges, name, checked }) {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChanges}
        checked={checked}
      />
      <label htmlFor={name}>{NAMES[name]}</label>
    </div>
  );
}

const CheckBox = memo(CheckBoxComponent);
export default CheckBox;

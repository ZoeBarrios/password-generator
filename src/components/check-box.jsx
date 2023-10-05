import { memo } from "react";
import { NAMES } from "../../Utils";

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

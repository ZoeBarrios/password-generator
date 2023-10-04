import { memo } from "react";

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
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

const CheckBox = memo(CheckBoxComponent);
export default CheckBox;

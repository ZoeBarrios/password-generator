import { memo } from "react";

function CheckBoxComponent({ handleChanges, name, checked }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChanges}
        checked={checked}
      />
    </>
  );
}

const CheckBox = memo(CheckBoxComponent);
export default CheckBox;

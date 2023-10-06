import { NAMES } from "../../Utils";

export function CheckBoxComponent({ handleChanges, name, checked }) {
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

import { memo } from "react";

function ActionButtonComponent({ handleClick, icon, className }) {
  return (
    <button onClick={handleClick} className="button">
      <img src={icon} className={className} />
    </button>
  );
}

const ActionButton = memo(ActionButtonComponent);
export default ActionButton;

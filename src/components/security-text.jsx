import { memo, useCallback } from "react";

function SecutiryText({ length }) {
  const setSecurityColor = useCallback(() => {
    if (length < 5) return "red";
    if (length < 8) return "orange";
    if (length < 10) return "yellow";
    if (length < 12) return "green";
    return "blue";
  }, [length]);

  const setSecurityText = useCallback(() => {
    if (length < 5) return "Muy débil";
    if (length < 8) return "Débil";
    if (length < 10) return "Normal";
    if (length < 12) return "Fuerte";
    return "Muy fuerte";
  }, [length]);
  return (
    <span className="color" style={{ backgroundColor: setSecurityColor() }}>
      <p>{setSecurityText()}</p>
    </span>
  );
}

const SecurityText = memo(SecutiryText);
export default SecurityText;

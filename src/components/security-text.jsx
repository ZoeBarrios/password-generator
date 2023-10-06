import { memo, useCallback, useEffect, useRef } from "react";

function SecutiryText({ length, password }) {
  const spanRef = useRef(null);
  const textRef = useRef(null);

  const setSecurityColor = useCallback(() => {
    let longitud = length;
    if (password) {
      longitud = password.length;
    }
    let color = "blue";
    if (longitud < 5) {
      color = "red";
    } else if (longitud < 8) {
      color = "orange";
    } else if (longitud < 10) {
      color = "#a2c11c";
    } else if (longitud < 12) {
      color = "green";
    }

    spanRef.current.style.backgroundColor = color;
  }, [length, password]);

  const setSecurityText = useCallback(() => {
    let longitud = length;
    if (password) {
      longitud = password.length;
    }
    let text = "Muy segura";
    if (longitud < 5) {
      text = "Muy débil";
    } else if (longitud < 8) {
      text = "Débil";
    } else if (longitud < 10) {
      text = "Normal";
    } else if (longitud < 12) {
      text = "Segura";
    }
    textRef.current.textContent = text;
  }, [length, password]);

  useEffect(() => {
    setSecurityColor();
    setSecurityText();
  }, [length, password, setSecurityColor, setSecurityText]);
  return (
    <span className="color" ref={spanRef}>
      <p ref={textRef}></p>
    </span>
  );
}

const SecurityText = memo(SecutiryText);
export default SecurityText;

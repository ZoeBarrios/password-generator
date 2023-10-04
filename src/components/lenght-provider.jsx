import { useState } from "react";
import LengthContext from "../Contexts/length-contex";
export default function LengthProvider({ children }) {
  const [length, setLength] = useState(1);
  return (
    <LengthContext.Provider value={{ length, setLength }}>
      {children}
    </LengthContext.Provider>
  );
}

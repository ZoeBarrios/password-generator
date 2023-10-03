import { useState } from "react";
import MessageSecurity from "./message-security";
import ContainerInputs from "./container-inputs";
export default function PasswordGenerator() {
  const [length, setLength] = useState(1);

  return (
    <div>
      <MessageSecurity length={length} />
      <ContainerInputs length={length} setLength={setLength} />
    </div>
  );
}

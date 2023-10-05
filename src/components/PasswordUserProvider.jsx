import { useState } from "react";
import PasswordUserContext from "../Contexts/password-user";
export default function PasswordUserProvider({ children }) {
  const [passwordUser, setPasswordUser] = useState("");
  return (
    <PasswordUserContext.Provider value={{ passwordUser, setPasswordUser }}>
      {children}
    </PasswordUserContext.Provider>
  );
}

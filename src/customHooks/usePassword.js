import { useCallback, useState } from "react";
import { options } from "../../Utils";

export default function usePassword() {
  const [password, setPassword] = useState("");

  const generatePassword = useCallback((state, longitud) => {
    const password = [];

    for (let i = 0; i < longitud; i++) {
      const keys = Object.keys(state);
      let randomArray = keys[Math.floor(Math.random() * 4)];

      if (state[randomArray]) {
        const randomCharacter =
          options[randomArray][
            Math.floor(Math.random() * options[randomArray].length)
          ];
        password.push(randomCharacter);
      } else {
        i--;
      }
    }

    setPassword(password.join(""));
  }, []);

  return { password, generatePassword };
}

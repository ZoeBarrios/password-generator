import { useCallback, useContext, useEffect, useState } from "react";
import { options } from "../../Utils";
import ChecksContext from "../Contexts/checks-context";
import LengthContext from "../Contexts/length-contex";

export default function usePassword() {
  const [password, setPassword] = useState("");
  const { length } = useContext(LengthContext);
  const { state } = useContext(ChecksContext);

  const generatePassword = useCallback(() => {
    const password = [];

    for (let i = 0; i < length; i++) {
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
  }, [length, state]);

  useEffect(generatePassword, [generatePassword, state, length]);

  return { password, generatePassword };
}

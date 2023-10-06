export const options = Object.freeze({
  minusculas: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  mayusculas: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  numeros: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  simbolos: ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "."],
});

export const TYPE_INPUT = {
  SUMA: "SUMA",
  RESTA: "RESTA",
  RANGE: "RANGE",
};

export const NAMES = {
  numeros: "Números",
  simbolos: "Símbolos",
  minusculas: "Minúsculas",
  mayusculas: "Mayúsculas",
};

export const INITIAL_STATE = {
  mayusculas: false,
  minusculas: true,
  numeros: false,
  simbolos: false,
};

export const ACTIONS = {
  SET_MAYUSCULAS: "SET_MAYUSCULAS",
  SET_MINUSCULAS: "SET_MINUSCULAS",
  SET_NUMEROS: "SET_NUMEROS",
  SET_SIMBOLOS: "SET_SIMBOLOS",
  SET_STATE: "SET_STATE",
};

export const checksReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SET_MAYUSCULAS:
      return { ...state, mayusculas: payload };
    case ACTIONS.SET_MINUSCULAS:
      return { ...state, minusculas: payload };
    case ACTIONS.SET_NUMEROS:
      return { ...state, numeros: payload };
    case ACTIONS.SET_SIMBOLOS:
      return { ...state, simbolos: payload };
    case ACTIONS.SET_STATE:
      return payload;
    default:
      return state;
  }
};

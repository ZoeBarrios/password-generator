import CheckInputs from "./check-inputs";
import LongitudInput from "./inputs/longitud-input";

export default function InputsContainer() {
  return (
    <div className="container-inputs">
      <h2>Personalice su contraseña</h2>
      <span className="borde"></span>
      <div className="inputs-control">
        <LongitudInput />
        <CheckInputs />
      </div>
    </div>
  );
}

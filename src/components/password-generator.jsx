import MessageSecurity from "./message-security";
import ChecksProvider from "./checks-provider";
import LengthProvider from "./lenght-provider";
import PasswordInput from "./password-input";
import CheckInputs from "./check-inputs";
import LongitudInput from "./longitud-input";
export default function PasswordGenerator() {
  return (
    <div className="container">
      <LengthProvider>
        <MessageSecurity />
        <ChecksProvider>
          <PasswordInput />
          <CheckInputs />
        </ChecksProvider>
        <LongitudInput />
      </LengthProvider>
    </div>
  );
}

import MessageSecurity from "./message-security";
import ChecksProvider from "./providers/checks-provider";
import LengthProvider from "./providers/lenght-provider";
import PasswordInput from "./inputs/password-input";
import InputsContainer from "./inputs-container";
import PasswordUserProvider from "./providers/PasswordUserProvider";

export default function PasswordGenerator() {
  return (
    <div className="container">
      <LengthProvider>
        <MessageSecurity />
        <PasswordUserProvider>
          <ChecksProvider>
            <PasswordInput />
            <InputsContainer />
          </ChecksProvider>
        </PasswordUserProvider>
      </LengthProvider>
    </div>
  );
}

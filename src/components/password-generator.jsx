import MessageSecurity from "./message-security";
import ChecksProvider from "./checks-provider";
import LengthProvider from "./lenght-provider";
import PasswordInput from "./password-input";
import InputsContainer from "./inputs-container";
import PasswordUserProvider from "./PasswordUserProvider";

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

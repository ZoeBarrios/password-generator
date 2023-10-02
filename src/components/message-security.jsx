import { memo, useCallback } from "react";

const MessageSecurityComponent = ({ length }) => {
  const setSecurityMessage = useCallback(() => {
    if (length < 5) return "Muy poco segura";
    if (length < 8) return "Poco segura";
    if (length < 10) return "Buena";
    if (length < 12) return "Segura";
    return "Muy segura";
  }, [length]);

  return <h1>{setSecurityMessage()}</h1>;
};

const MessageSecurity = memo(MessageSecurityComponent);
export default MessageSecurity;

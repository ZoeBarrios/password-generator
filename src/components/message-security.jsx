import { memo, useCallback, useContext } from "react";
import LengthContext from "../Contexts/length-contex";
import ImgMuyPoco from "/img/muy-poco.png";
import ImgPoco from "/img/poco.png";
import ImgBuena from "/img/buena.png";
import ImgSegura from "/img/segura.png";
import ImgMuySegura from "/img/muy-segura.png";

const MessageSecurityComponent = () => {
  const { length } = useContext(LengthContext);
  const setSecurityMessage = useCallback(() => {
    if (length < 5) return "Muy poco segura";
    if (length < 8) return "Poco segura";
    if (length < 10) return "Buena";
    if (length < 12) return "Segura";
    return "Muy segura";
  }, [length]);

  const setImgSource = useCallback(() => {
    if (length < 5) return ImgMuyPoco;
    if (length < 8) return ImgPoco;
    if (length < 10) return ImgBuena;
    if (length < 12) return ImgSegura;
    return ImgMuySegura;
  }, [length]);

  return (
    <div className="messages-container">
      <img src={setImgSource()} className="emoji-img" />
      <h1>{setSecurityMessage()}</h1>
    </div>
  );
};

const MessageSecurity = memo(MessageSecurityComponent);
export default MessageSecurity;

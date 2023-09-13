import ReactDOM from "react-dom";
import errorIcon from "../../assets/icons/error.svg";
import successIcon from "../../assets/icons/success.svg";
import "./ContactModal.scss";

interface IContactModalProps {
  isSuccess: boolean;
}

const ContactModalPortal = ({isSuccess}:IContactModalProps) => {
  const modalMessage = isSuccess ? "Enviado com sucesso!" : "Erro no envio.";
  return (
    <div id="contact-modal">
      <img src={isSuccess ? successIcon : errorIcon} alt={isSuccess ? "Sucesso" : "Erro"} />
      <p>{modalMessage}</p>
    </div>
  );
};

const ContactModal = ({isSuccess}:IContactModalProps) => {
  const modalRoot = document.getElementById("modal-root")!;
  return <>{ReactDOM.createPortal(<ContactModalPortal isSuccess={isSuccess}/>, modalRoot)}</>;
};

export default ContactModal;

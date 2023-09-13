import { useState } from "react";
import { send } from "@emailjs/browser";
import ContactModal from "../ContactModal";
import useInputValidator from "../../hooks/use-inputValidator";
import contactImage from "../../assets/images/drawn3.png";
import keyboardImage from "../../assets/images/keyboard.svg";
import mailImage from "../../assets/images/mail.svg";
import sendIcon from "../../assets/icons/send.svg";
import Button from "../Ui/Button";
import "./Contact.scss";

const Contact = () => {
  //? Modal
  const [showModal, setShowModal] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  //? Form validation
  const [nameInput, setNameInput] = useState("");
  const nameErrorCondition = nameInput.length >= 2 && nameInput.length < 100;
  const name = useInputValidator({ errorCondition: nameErrorCondition, setInput: setNameInput });

  const [emailInput, setEmailInput] = useState("");
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const emailErrorCondition = emailRegex.test(emailInput) && emailInput.length <= 150;
  const email = useInputValidator({ errorCondition: emailErrorCondition, setInput: setEmailInput });

  const [messageInput, setMessageInput] = useState("");
  const messageErrorCondition = messageInput.length >= 10 && messageInput.length <= 2000;
  const message = useInputValidator({
    errorCondition: messageErrorCondition,
    setInput: setMessageInput,
  });

  const formIsInvalid = name.isInvalid && email.isInvalid && message.isInvalid;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formIsInvalid) return;

    send(
      "port_mail_service",
      "port_template",
      { user_name: nameInput, user_email: emailInput, message: messageInput },
      "w8Uj9kvQdVnLY9UR6"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSucess(true);
      })
      .catch(() => {
        setIsSucess(false);
      })
      .finally(() => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 5000);
      });

    name.resetHandler();
    email.resetHandler();
    message.resetHandler();
  };

  return (
    <>
      {showModal ? <ContactModal isSuccess={isSucess} /> : null}

      <section id="contact">
        <article>
          <h2>
            Tem um projeto em <span className="accent-text">mente?</span>
          </h2>

          <img src={contactImage} alt="Homem subindo degrais de um gráfico" />
        </article>

        <form id="contact-form" onSubmit={submitHandler}>
          <fieldset>

            <div id="name-container">
              <label htmlFor="name">Seu nome</label>
              <br />
              <input
                onChange={name.changeHandler}
                onBlur={name.blurHandler}
                className={name.borderColor}
                type="text"
                name="user_name"
                placeholder="Name"
                value={nameInput}
              />
            </div>

            <div id="email-container">
              <label htmlFor="email">Seu email</label>
              <br />
              <input
                onChange={email.changeHandler}
                onBlur={email.blurHandler}
                className={email.borderColor}
                type="text"
                name="user_email"
                placeholder="example@email.com"
                value={emailInput}
              />
            </div>
          </fieldset>

          <div className="message-cotainer">
            <label htmlFor="message">Sua mensagem</label>
            <br />
            <textarea
              onChange={message.changeHandler}
              onBlur={message.blurHandler}
              className={message.borderColor}
              placeholder="Message"
              name="message"
              form="contact-form"
              value={messageInput}
            />
          </div>

          <br />
          <Button>
            <p>Enviar</p>
            <img src={sendIcon} />
          </Button>
        </form>
        
        <img src={keyboardImage} id="keyboard" />
        <img src={mailImage} id="mail" />
      </section>
    </>
  );
};

export default Contact;

import contactImage from "../../assets/images/drawn3.png";
import keyboardImage from "../../assets/images/keyboard.svg";
import mailImage from "../../assets/images/mail.svg";
import sendIcon from "../../assets/icons/send.svg";
import Button from "../Ui/Button";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact">
      <article>
        <h2>
          Tem um projeto em <span className="accent-text">mente?</span>
        </h2>
        <img src={contactImage} alt="Homem subindo degrais de um gráfico" />
      </article>

      <form id="contact-form">
        <fieldset>
          <div id="name-container">
            <label htmlFor="name">Seu nome</label>
            <br />
            <input type="text" placeholder="Name" />
          </div>

          <div id="email-container">
            <label htmlFor="email">Seu email</label>
            <br />
            <input type="text" placeholder="Email" />
          </div>
        </fieldset>

        <div className="message-cotainer">
          <label htmlFor="message">Sua mensagem</label>
          <br />
          <textarea placeholder="Message" form="contact-form" />
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
  );
};

export default Contact;

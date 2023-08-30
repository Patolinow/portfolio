import aboutMeImg from "../../assets/images/drawn2.png";
import musicalNote from "../../assets/images/musicalNote.svg";
import lightBulb from "../../assets/images/lightbulb.svg";
import "./AboutMe.scss"
// TODO: Animar o zzz e adicionar parallax ao lightbulb e musical note

const AboutMe = () => {
  return (
    <section id="about-me">
      <img
        src={aboutMeImg}
        alt="Homem sentado em uma cadeira de escritório enquanto dorme com notebook em cima da mesa em frente a ele"
      />

      <article>
        <h2>
          Sobre <span className="accent-text">mim</span>
        </h2>
        <p>
          Olá, meu nome é Fábio e sou um estudante de Engenharia de Software na UNOPAR, fiz curso
          técnico integrado ao ensino médio na instituição IFBaiano Campus Governador Mangabeira. Eu
          desenvolvo soluções em React.js utilizando Typescript como linguagem principal, Redux para
          controle de estado global, CSS Modules, Styled Components, SASS ou Tailwind para
          estilização dos projetos e atualmente estou aprimorando minhas habilidades em Next.js,
          aprendendo a utilizar SSR, SSG e ISR de forma Eficiente.
        </p>
      </article>

      <img src={musicalNote} id="musical-note" />
      <img src={lightBulb} id="light-bulb" />
    </section>
  );
};

export default AboutMe;

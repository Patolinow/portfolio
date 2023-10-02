import aboutMeImg from "../../assets/images/drawn2.png";

import "./AboutMe.scss"
// TODO: Animar o zzz e adicionar parallax ao lightbulb e musical note

const AboutMe = () => {
  return (
    <section id="about-me">
      <article>
        <h2>
          Sobre <span className="accent-text">mim</span>
        </h2>
        <p>
        Olá! Meu nome é Fábio, tenho 20 anos e sou um estudante de Engenharia de Software na UNOPAR, já fiz curso técnico integrado ao ensino médio pelo IFBaiano Campus Governador Mangabeira. Eu atualmente desenvolvo soluções em React utilizando frameworks como NextJS e linguagens como Typescript e Javascript, assim como diversas outras bibliotecas que constam nas minhas skills. 
        </p>
        
      </article>

      <img
        src={aboutMeImg}
        alt="Homem sentado em uma cadeira de escritório enquanto dorme com notebook em cima da mesa em frente a ele"
      />

      
    </section>
  );
};

export default AboutMe;

import { useEffect, useRef } from "react";
import heroImage from "../../assets/images/drawn1.png";
import arrowImage from "../../assets/images/arrow1.svg";
import downArrow from "../../assets/images/downArrow.json";
import downloadIcon from "../../assets/icons/download.svg";
import currriculumPdf from "../../assets/pdfs/fabio-neves-front-end.pdf";
import { Player } from "@lottiefiles/react-lottie-player";
import { AnimationItem } from "lottie-web";
import Button from "../Ui/Button";
import "./HeroSection.scss"

const HeroSection = () => {
  const arrowRef = useRef() as React.MutableRefObject<AnimationItem>;
  useEffect(() => {
    setTimeout(() => {
      arrowRef.current.play();
    }, 1500);
  }, []);

  return (
    <section id="home">
      <article>
        <div>
          <img src={arrowImage} alt="Seta apontando para botão 'contratar'" />
          <div>
            <h1>FRONTEND</h1>
            <h1 className="accent-text">DEVELOPER</h1>
            <menu className="buttons">
              <a href="#contact"><Button>Contratar</Button></a>
              <a href={currriculumPdf} download={currriculumPdf}>
                <Button className="secondary">
                  <p>Baixar CV</p> <img src={downloadIcon} />
                </Button>
              </a>
            </menu>
          </div>
        </div>

        
      </article>
      <img src={heroImage} alt="Homem sentado no chão usando um notebook apoiado em seu joelho" />

      <Player
        id="down-arrow"
        src={downArrow}
        keepLastFrame
        lottieRef={(lottieRef) => {
          arrowRef.current = lottieRef;
        }}
      />
    </section>
  );
};

export default HeroSection;

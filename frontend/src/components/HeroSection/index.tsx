import heroImage from "../../assets/images/drawn1.png";
import downloadImage from "../../assets/icons/download.svg";
import arrowImage from "../../assets/images/arrow1.svg";
import styles from "./HeroSection.module.scss";
import Button from "../Ui/Button";
import { Player } from "@lottiefiles/react-lottie-player";
import { AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";
import downArrow from "../../assets/images/downArrow.json";

const HeroSection = () => {
  const arrowRef = useRef() as React.MutableRefObject<AnimationItem>;

useEffect(() => {
  setTimeout(() => {
    arrowRef.current.play();
  }, 1500);
}, []);

  return (
    <section className={styles.home}>
      <article>
        <img src={arrowImage} alt="Seta apontando para botão 'contratar'" />

        <div>
          <h1>FRONTEND</h1>
          <h1 className="accent-text">DEVELOPER</h1>

          <div className={styles.buttons}>
            <Button>Contratar</Button>

            <Button className="secondary">
              <p>Baixar CV</p> <img src={downloadImage} />
            </Button>
          </div>
        </div>

        <img src={heroImage} alt="Homem sentado no chão usando um notebook apoiado em seu joelho" />
      </article>

      <Player
        id={styles["down-arrow"]}
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

import heroImage from "../../assets/images/drawn1.png";
import downloadImage from "../../assets/icons/download.svg";
import arrowImage from "../../assets/images/arrow1.svg";
import styles from "./HeroSection.module.scss";
import Button from "../Ui/Button";

// 

const HeroSection = () => {
  return (
    <section className={styles.home}>
      <article>
        <img src={arrowImage} alt="Seta apontando para botão 'contratar'" />

        <div>
          <h1>FRONTEND</h1>
          <h1 className="accent-text">DEVELOPER</h1>

          <div className={styles.buttons}>
            <Button>Contratar</Button>
            <Button className="secondary"><p>Baixar CV</p> <img src={downloadImage}/></Button>
          </div>
        </div>
        

      </article>

      <img src={heroImage} alt="Imagem de um homem sentado no chão usando um notebook" />

    </section>
  );
};

export default HeroSection;

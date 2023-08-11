import heroImage from "../../assets/images/drawn1.png"
import Button from "../Ui/Button";

const HeroSection = () => {
  return (<section>
    <article>
      <h1>FRONTEND</h1>
      <h1>DEVELOPER</h1>

      <div>
        <Button>Contratar</Button>
        <Button className="secondary">Baixar CV</Button>
      </div>
    </article>
    <img src={heroImage} alt="" />
  </section>);
}

export default HeroSection;
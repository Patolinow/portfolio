import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import SkillsAndProjects from "../SkillsAndProjects";
import Contact from './../Contact/index';
import musicalNote from "../../assets/images/musicalNote.svg";
import lightBulb from "../../assets/images/lightbulb.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
import "./Main.scss";


const Main = () => {
  return (
    <main>
      <HeroSection />
      <img src={musicalNote} id="musical-note" />
      <AboutMe />
      <img src={lightBulb} id="light-bulb" />
      <SkillsAndProjects />
      <Contact />
      <a href="#" id="return-top">
        <img src={arrowUp} alt="retornar ao topo" />
        
      </a>
    </main>
  );
};

export default Main;

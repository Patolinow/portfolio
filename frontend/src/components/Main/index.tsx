import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import "./Main.scss";
import SkillsAndProjects from "../SkillsAndProjects";
import Contact from './../Contact/index';
import musicalNote from "../../assets/images/musicalNote.svg";
import lightBulb from "../../assets/images/lightbulb.svg";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <img src={musicalNote} id="musical-note" />
      <AboutMe />
      <img src={lightBulb} id="light-bulb" />
      <SkillsAndProjects />
      <Contact />
    </main>
  );
};

export default Main;

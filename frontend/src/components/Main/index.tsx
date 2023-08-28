import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import "./Main.scss";
import SkillsAndProjects from "../SkillsAndProjects";
import Contact from './../Contact/index';

const Main = () => {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <SkillsAndProjects />
      <Contact />
    </main>
  );
};

export default Main;

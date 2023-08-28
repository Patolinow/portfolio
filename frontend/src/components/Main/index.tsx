import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import "./Main.scss";
import SkillsAndProjects from "../SkillsAndProjects";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <SkillsAndProjects />
    </main>
  );
};  

export default Main;

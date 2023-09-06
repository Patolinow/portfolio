import "./SkillsAndProjects.scss";
import Skills from "../Skills";
import Projects from "../Projects";

const SkillsAndProjects = () => {
  return (
    <section id="skills-and-projects">
      <article>
        <h2>
          Minhas <span className="accent-text">Skills</span>
        </h2>


          <div className="bg-container">
            <Skills />
          </div>
        
      </article>

      <article>
        <h2>
          <span className="accent-text">Projetos</span> Recentes
        </h2>

        
          <div className="bg-container">
            <Projects />
          </div>
        
      </article>
    </section>
  );
};

export default SkillsAndProjects;

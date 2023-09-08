import { useRef } from "react";
import useImageSlider from "../../hooks/use-ImageSlider";
import Button from "../Ui/Button";
import ListItemCard from "./../Ui/ListItemCard";
import styles from "./Projects.module.scss";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = [
    {
      name: "dt money",
      image: new URL(`../../assets/images/dt-money.png`, import.meta.url).href,
      techs: ["React", "Typescript", "Tailwind"],
      preview: "https://dt-money-b8fe9.web.app/",
      code: "https://github.com/Patolinow/estudos/tree/master/desafios/d-016-rocket-expenses/bank",
    }
  ]
  const slider = useImageSlider(containerRef);

  return (
    <div
      className="ul-wrapper"
      ref={containerRef}
      onMouseDown={slider.mouseDownHandler}
      onMouseMove={slider.mouseMoveHandler}
      onMouseUp={slider.mouseUpHandler}
      onMouseLeave={slider.mouseLeaveHandler}
    >
      <ul id={styles.projects}>
        {projects.map((project) => ( 
        <ListItemCard key={project.name}>
        <img src={project.image} draggable={false}/>
        <ul>
          {project.techs.map((tech) => (
            <li key={`${project.name} ${tech}`}>{tech}</li>
          ))}
        </ul>
        <menu>
          <a href={project.preview} target="_blank"><Button>Preview</Button></a>
          <a href={project.code} target="_blank"><Button className="tertiary">Code</Button></a>
        </menu>
      </ListItemCard>
      ))}
      </ul>
    </div>
  );
};

export default Projects;

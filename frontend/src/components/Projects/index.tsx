import { useRef } from "react";
import useImageSlider from "../../hooks/use-ImageSlider";
import ListItemCard from "./../Ui/ListItemCard";
import Button from "../Ui/Button";
import reactMealsImage from "../../assets/images/react-meals.jpg";
import dtMoneyImage from "../../assets/images/dt-money.jpg";
import healthyFoodImage from "../../assets/images/healthy-food.jpg";
import styles from "./Projects.module.scss";

interface IProject {
  name: string;
  image: string;
  techs: string[];
  preview: string;
  code: string;
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projects: IProject[] = [
    {
      name: "healthy-food",
      image: healthyFoodImage,
      techs: ["HTML", "Tailwind"],
      preview: "https://patolinow.github.io/healthy-food-mail/dist/index.html",
      code: "https://github.com/Patolinow/healthy-food-mail",
    },
    {
      name: "react-meals",
      image: reactMealsImage,
      techs: ["React", "Typescript", "Firebase"],
      preview: "https://food-app-three-lac.vercel.app/",
      code: "https://github.com/Patolinow/estudos/tree/master/desafios/d-015-food-order-app/food-app",
    },
    {
      name: "dt-money",
      image: dtMoneyImage,
      techs: ["React", "Typescript", "Tailwind"],
      preview: "https://dt-money-b8fe9.web.app/",
      code: "https://github.com/Patolinow/estudos/tree/master/desafios/d-016-rocket-expenses/bank",
    },
  ];
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
            <img src={project.image} draggable={false} />
            <ul>
              {project.techs.map((tech) => (
                <li key={`${project.name} ${tech}`}>{tech}</li>
              ))}
            </ul>
            <menu>
              <a href={project.preview} target="_blank">
                <Button>Preview</Button>
              </a>
              <a href={project.code} target="_blank">
                <Button className="tertiary">Código</Button>
              </a>
            </menu>
          </ListItemCard>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

import Button from "../Ui/Button";
import ListItemCard from "./../Ui/ListItemCard";
import testImg from "./../../assets/images/dt-money.png";
import styles from "./Projects.module.scss";
import { useRef } from "react";
import useImageSlider from "../../hooks/use-ImageSlider";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slider = useImageSlider(containerRef);

  return (
    <div
      className="ul-wrapper"
      ref={containerRef}
      onTouchStart={slider.touchstartHandler}
      onMouseDown={slider.mouseDownHandler}
      onMouseMove={slider.mouseMoveHandler}
      onMouseUp={slider.mouseUpHandler}
      onMouseLeave={slider.mouseLeaveHandler}
    >
      <ul id={styles.projects}>
        <ListItemCard>
          <img src={testImg} draggable={false}/>
          <ul>
            <li>React</li> <li>Typescript</li> <li>Tailwind</li>
          </ul>
          <menu>
            <Button>Preview</Button>
            <Button className="tertiary">Code</Button>
          </menu>
        </ListItemCard>
        <ListItemCard>
          <img src={testImg} draggable={false}/>
          <ul>
            <li>React</li> <li>Typescript</li> <li>Tailwind</li>
          </ul>
          <menu>
            <Button>Preview</Button>
            <Button className="tertiary">Code</Button>
          </menu>
        </ListItemCard>
        <ListItemCard>
          <img src={testImg} draggable={false}/>
          <ul>
            <li>React</li> <li>Typescript</li> <li>Tailwind</li>
          </ul>
          <menu>
            <Button>Preview</Button>
            <Button className="tertiary">Code</Button>
          </menu>
        </ListItemCard>
      </ul>
    </div>
  );
};

export default Projects;

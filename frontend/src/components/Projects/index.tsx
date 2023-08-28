import Button from "../Ui/Button";
import ListItemCard from "./../Ui/ListItemCard";
import testImg from "./../../assets/images/dt-money.png";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <ul id={styles.projects}>
      <ListItemCard>
        <img src={testImg} />

        <ul>
          <li>React</li> <li>Typescript</li> <li>Tailwind</li>
        </ul>

        <menu>
          <Button>Preview</Button>

          <Button className="tertiary">Code</Button>
        </menu>
      </ListItemCard>
      <ListItemCard>
        <img src={testImg} />

        <ul>
          <li>React</li> <li>Typescript</li> <li>Tailwind</li>
        </ul>

        <menu>
          <Button>Preview</Button>

          <Button className="tertiary">Code</Button>
        </menu>
      </ListItemCard>
      <ListItemCard>
        <img src={testImg} />

        <ul>
          <li>React</li> <li>Typescript</li> <li>Tailwind</li>
        </ul>

        <menu>
          <Button>Preview</Button>

          <Button className="tertiary">Code</Button>
        </menu>
      </ListItemCard>
    </ul>
  );
};

export default Projects;

import styles from "./Footer.module.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import githubAnimation from "../../assets/icons/github.json";
import linkedinAnimation from "../../assets/icons/linkedin.json";
import homeIcon from "../../assets/icons/home.svg";
import aboutMeIcon from "../../assets/icons/about-me.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import contactIcon from "../../assets/icons/contact.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <a href="#">
          <li>
            <img src={homeIcon} /> <p>Home</p>
          </li>
        </a>

        <a href="#">
          <li>
            <img src={aboutMeIcon} /> <p>Sobre mim</p>
          </li>
        </a>

        <a href="#">
          <li>
            <img src={projectsIcon} />
            <p>Skills & Projetos</p>
          </li>
        </a>

        <a href="#">
          <li>
            <img src={contactIcon} />
            <p>Contato</p>
          </li>
        </a>
      </ul>

      <ul>
        <a href="https://github.com/Patolinow" target="_blank">
          <li>
            <Player src={githubAnimation} hover style={{padding: "4px", paddingTop: "8px"}}/>
          </li>
        </a>

        <a href="https://www.linkedin.com/in/fabio--neves/" target="_blank">
          <li>
            <Player src={linkedinAnimation} hover style={{padding: "6px"}}/>
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;

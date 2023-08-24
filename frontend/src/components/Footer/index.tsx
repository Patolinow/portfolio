import styles from "./Footer.module.scss";
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
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
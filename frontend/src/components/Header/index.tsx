import styles from "./Header.module.scss";
import duckLogo from "../../assets/icons/fav-duck.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={duckLogo} alt="duck" />

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-me">Sobre mim</a>
          </li>
          <li>
            <a href="#skills-and-projects">Skills & Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

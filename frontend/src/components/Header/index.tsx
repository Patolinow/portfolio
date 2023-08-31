import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h3>TempLogo</h3>

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

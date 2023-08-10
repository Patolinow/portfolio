import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Logo</h2>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre mim</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

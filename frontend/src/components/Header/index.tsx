import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Logo</h2>

      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

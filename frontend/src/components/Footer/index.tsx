import styles from "./Footer.module.scss";

const Footer = () => {



  return (
    <footer className={styles.footer}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre mim</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <ul>
        <a href="#">
          <li><Lottie animationData={githubAnimation}/></li>
        </a>
        <a href="#">
          <li><Lottie animationData={linkedinAnimation}/></li>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
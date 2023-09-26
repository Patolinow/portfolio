import styles from "./Header.module.scss";
import duckLogo from "../../assets/icons/fav-duck.svg";
import menuIcon from "../../assets/icons/menu.svg";
import { useRef, useLayoutEffect } from "react";

const Header = () => {
  //? open/close menu 
  const menuButtonRef = useRef<HTMLImageElement>(null);

  const toggleMenuHandler = () => {
      menuButtonRef.current?.classList.toggle(styles.active);
   }  

  //?  menu scroll
  const headerRef = useRef<HTMLElement>(null);
  const bodyWidth = document.body.clientWidth;
  let lastScrollTop = document.documentElement.scrollTop;

  const scrollHandler = () => {
    const html = document.documentElement;
    const currentScrollTop = html.scrollTop;

    if (lastScrollTop  < currentScrollTop) {
      scrollDown(currentScrollTop);
    } else {
      scrollUp();
    }

    lastScrollTop = currentScrollTop;
  };

  const scrollUp = () => {
    headerRef.current!.style.top = "0";
  };

  const scrollDown = (scrollTop: number) => {
    if (scrollTop > 96) {
      const negativeHeaderMobileHeight = "-" + window.getComputedStyle(headerRef.current!)
      .getPropertyValue("--header-mobile-height");
      headerRef.current!.style.top = negativeHeaderMobileHeight
      menuButtonRef.current?.classList.remove(styles.active);
      

    }
  };

  useLayoutEffect(() => {
    if (bodyWidth < 768) {
      document.addEventListener("scroll", scrollHandler);
    }

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    }
  });
  return (
    <header id={styles.header} ref={headerRef}>
      
      <a href="#">
        <img src={duckLogo} alt="duck logo" />
      </a>

      <nav>
      <img id={styles["menu-icon"]} src={menuIcon} alt="menu" ref={menuButtonRef} onClick={toggleMenuHandler} draggable={"false"}/>
      
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

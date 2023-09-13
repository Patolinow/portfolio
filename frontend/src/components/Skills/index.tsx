import styles from "./Skills.module.scss";
import ListItemCard from "../Ui/ListItemCard";
import { useRef } from "react";
import useImageSlider from "../../hooks/use-ImageSlider";

interface ILanguage {
  name: string;
  image: string;
  isUpperCase: boolean;
}

const Skills = () => {
  //? languages displayer
  const languagesArray: ILanguage[] = [];
  const languages = [
    "nextJS",
    "react",
    "tailwind",
    "typescript",
    "sass",
    "redux",
    "vitest",
    "jest",
    "git",
    "javascript",
    "html",
    "css",
  ];

  languages.forEach((language) => {
    const upperCaseLanguages = ["css", "html", "sass"];
    languagesArray.push({
      name: language,
      image: new URL(`../../assets/icons/${language}.svg`, import.meta.url).href,
      isUpperCase: upperCaseLanguages.includes(language),
    });
  });

  //? item animation
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLUListElement>(null);
  const slider = useImageSlider(containerRef, itemRef);

  return (
    <div
      className="ul-wrapper"
      ref={containerRef}
      onTouchStart={slider.touchStartHandler}
      onMouseDown={slider.mouseDownHandler}
      onMouseLeave={slider.mouseLeaveHandler}
      onMouseMove={slider.mouseMoveHandler}
      onMouseUp={slider.mouseUpHandler}
    >
      <ul id={styles.skills} className={styles["not-touched"]} ref={itemRef}>
        {languagesArray.map((language) => (
          <ListItemCard key={language.name}>
            <img draggable="false" src={language.image} alt={language.name} />
            <p>{language.isUpperCase ? language.name.toUpperCase() : language.name}</p>
          </ListItemCard>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

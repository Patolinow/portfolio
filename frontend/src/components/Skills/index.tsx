import styles from "./Skills.module.scss";
import ListItemCard from "../Ui/ListItemCard";

interface ILanguage {
  name: string;
  image: string;
  isUpperCase: boolean;
}

const Skills = () => {
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

  const languagesArray: ILanguage[] = [];

  languages.forEach((language) => {
    const upperCaseLanguages = ["css", "html", "sass"];
    languagesArray.push({
      name: language,
      image: new URL(`../../assets/icons/${language}.svg`, import.meta.url).href,
      isUpperCase: upperCaseLanguages.includes(language),
    });
  });

  return (
    <ul id={styles.skills}>
      {languagesArray.map((language) => (
        <ListItemCard>
          <img src={language.image} alt={language.name} />
          <p>{language.isUpperCase ? language.name.toUpperCase() : language.name}</p>
        </ListItemCard>
      ))}
    </ul>
  );
};

export default Skills;

import { PropsWithChildren } from "react";
import styles from "./ListItemCard.module.scss";

const ListItemCard = (props: PropsWithChildren<JSX.IntrinsicElements["li"]>) => {
  return <li className={`${styles.Card} ${props.className ?? ""}`}>{props.children}</li>;
};

export default ListItemCard;

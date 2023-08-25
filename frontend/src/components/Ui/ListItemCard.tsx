import { PropsWithChildren, HTMLAttributes } from "react";
import styles from "./ListItemCard.module.scss";

const ListItemCard = (props: PropsWithChildren<HTMLAttributes<HTMLUListElement>>) => {
  return <li className={`${styles.Card} ${props.className ?? ""}`}>{props.children}</li>;
};

export default ListItemCard;

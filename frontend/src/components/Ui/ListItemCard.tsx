import { forwardRef, PropsWithChildren, ComponentPropsWithoutRef } from "react";
import styles from "./ListItemCard.module.scss";

type LiProps = ComponentPropsWithoutRef<'li'>
const ListItemCard = forwardRef<HTMLLIElement | null, PropsWithChildren<LiProps>>((props, ref) => {
  return <li ref={ref} className={`${styles.Card} ${props.className ?? ""}`} onMouseDown={props.onMouseDown}>{props.children}</li>;
});

export default ListItemCard;

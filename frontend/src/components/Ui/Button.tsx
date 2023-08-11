import {PropsWithChildren, ButtonHTMLAttributes} from 'react'
import styles from './Button.module.scss'

const Button = (props:PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  const buttonClass = props.className ? props.className : ''
    return (
        <button className={`${styles.button} ${styles[buttonClass]}`}>{props.children}</button>
    )
}

export default Button
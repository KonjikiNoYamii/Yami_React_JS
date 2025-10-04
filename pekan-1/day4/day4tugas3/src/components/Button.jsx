import styles from "./Button.module.css"
function Button({type, children}) {
    const buttonClass = type === "primary"? styles.primary : styles.default
    return(
        <button className={buttonClass}>{children}</button>
    )
}
export default Button
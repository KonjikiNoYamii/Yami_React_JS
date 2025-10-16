import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ChangeThemeButton() {
    const {theme, toggle} = useContext(ThemeContext)

    const btnStyle= {
        backgroundColor:theme === "light"? "white":"black",
        color:theme === "light"? "black":"white",
    }
    return(
        <button style={btnStyle} onClick={toggle}>{theme}</button>
    )
}
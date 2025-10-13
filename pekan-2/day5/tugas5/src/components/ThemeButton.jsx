import { useContext } from "react";
import { themeContextt } from "../context/ThemeContext";
import { createContext } from "react";

export default function ThemeButton() {
    const {theme, toggleTheme} = useContext(themeContextt)

    const style = {
        backgroundColor: theme === "dark" ? "black": "white",
        color: theme === "dark" ? "white":"black",
        border: theme === "dark"? "white 2px solid":"black 2px solid"
    }
    return(
        <button style={style} onClick={toggleTheme}>{theme}</button>
    )
}
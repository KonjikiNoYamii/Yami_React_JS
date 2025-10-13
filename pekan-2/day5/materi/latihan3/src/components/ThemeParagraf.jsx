import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeParagraf() {
    const {theme} = useContext(ThemeContext)
    const style ={
        backgroundColor: theme === "dark"? "black" :"white",
        color: theme === "dark" ? "white": "black",
        border: theme === "dark" ? "white 2px solid":"black 2px solid"
    }
    return(
        <div>
            <p style={style}>berubah jadi {theme}</p>
        </div>
    )
}
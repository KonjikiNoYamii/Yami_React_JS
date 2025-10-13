import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButton() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const style ={
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" :"black",
        width:"500px",
        height:"500px"
    }
    return(
        <button style={style} onClick={toggleTheme}>ganti tema jadi {theme}</button>
    )
}
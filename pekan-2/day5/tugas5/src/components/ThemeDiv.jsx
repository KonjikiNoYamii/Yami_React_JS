import { useContext } from "react";
import { themeContextt } from "../context/ThemeContext";
import { createContext } from "react";

export default function ThemeDiv() {
    const {theme} = useContext(themeContextt)

    const style = {
        backgroundColor: theme === "dark"? "black":"white",
        border: theme === "dark"? "white 2px solid":"black 2px solid",
        height:"800px",
        width:"800px"
    }
    return(
        <div style={style}>
            {theme}
        </div>
    )
}
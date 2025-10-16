import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ChangeThemeText() {
    const {theme} = useContext(ThemeContext)

    const pStyle ={
        backgroundColor:theme === "light"? "white":"black",
        color:theme ==="light"? "black":"white"
    }
return(
    <div>
        <p style={pStyle}>ini iseteri pas mode {theme}</p>
    </div>
)
}
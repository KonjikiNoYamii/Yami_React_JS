import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ChangeThemeCard() {
    const {theme} = useContext(ThemeContext)

    return(
        <div>
            <img src={theme === "light"? "/light.jpg":"/dark.jpeg"} alt=""  style={{width:"200px", height:"300px"}}/>
        </div>
    )
}
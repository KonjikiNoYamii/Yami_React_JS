import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function Settings() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return(
        <div style={{display:"flex", justifyContent:"center",backgroundColor:theme === "light"?"white":"black", height:"91vh"}}>
            <button onClick={toggleTheme} style={{marginTop:"200px",textAlign:"center", width:"300px", height:"300px",fontSize:"200px", borderRadius:"30px"}}>{theme === "light"?"𖤓":"☽"}</button>
        </div>
    )
}
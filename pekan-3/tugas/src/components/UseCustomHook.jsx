import { useThemeContext } from "../context/CustomHook";

export default function UseCustomHook() {
    const {theme, toggle} = useThemeContext()

    return(
        <div style={{backgroundColor:theme === "light"?"white":"black",  width:"500px",height:"500px",border:theme === "light"? "black 2px solid":"white 2px solid"}} onClick={toggle}>
            <p style={{color:theme === "light"?"black":"white", textAlign:"center", }}>ubah tema</p>
        </div>
    )
}
import { useLocalStorage } from "../hook/useLocalStorage";

export default function ThemeSwitcher() {
    const [ theme, setTheme ] = useLocalStorage("theme", "light")

    const toggle = () =>{
        setTheme(prev => prev === "light"? "dark":"light")
    }
    return(
        <div style={{backgroundColor:theme === "light"? "white":"black", color:theme ==="light"?"black":"white", width:"300px",height:"300px"}}>
            menggunakan useLocalStorage

            <button onClick={toggle}>ubah warna</button>
        </div>
    )
}
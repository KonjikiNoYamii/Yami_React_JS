import { createContext } from "react";
import { useState } from "react";

export const themeContextt = createContext(null)
export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () =>{
        setTheme(prev => (prev === 'dark' ? "light": "dark"))
    }

    const value = {theme, toggleTheme}

    return(
        <themeContextt.Provider value={value}>
            {children}
        </themeContextt.Provider>
    )
}
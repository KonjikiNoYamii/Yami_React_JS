import { createContext, useState } from "react";

export const LanguageContext = createContext()

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState("english")

    const languageToggle = (lang) => (
        setLanguage(lang)
    )

    return(
        <LanguageContext.Provider value={{language,languageToggle}}>
            {children}
        </LanguageContext.Provider>
    )
}
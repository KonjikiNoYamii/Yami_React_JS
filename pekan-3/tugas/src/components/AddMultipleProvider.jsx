import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NotificationContext } from "../context/NotificationContext";

export default function AddMultipleProvider() {
    const {language,languageToggle } = useContext(LanguageContext)
    const {notification, addNotif,resetNotif} = useContext(NotificationContext)

    return(
        <div>
            {language === "english" ?
            ( <p>i want money</p> ):(
                <p>aku ingin uang</p>
            )}
            <button onClick={() => languageToggle(language === "english" ?"indonesia":"english")}>{language === "english"?"change to ":"diubah ke "}{language}</button>

            
            <p>notif saat ini {notification}</p>
            <button onClick={addNotif}>tambah notif</button>
            <button onClick={resetNotif}>reset notif</button>
        </div>
    )
}
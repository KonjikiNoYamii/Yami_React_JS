import { createContext, useState } from "react";

export const NotificationContext = createContext()

export function NotificationProvider({children}) {
    const[notification, setNotification] = useState(0)

    const addNotif = () => (
        setNotification((prev) => prev + 1)
    )
    const resetNotif = () => (
        setNotification(0)
    )

    return(
        <NotificationContext.Provider value={{notification,addNotif,resetNotif}}>
            {children}
        </NotificationContext.Provider>
    )
}
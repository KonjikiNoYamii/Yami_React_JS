import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        name:"",
        email:"",
        isLoggin:false
        
    })

    const login = (name, email) =>{
        setUser({name,email, isLoggin:true})
    }

    const logout = () =>{
        setUser({name:"",email:"", isLoggin:false})
    }

    const updateProfile = (newName, newEmail) =>{
        setUser(prev =>({
            ...prev,
            name:newName || prev.name,
            email:newEmail || prev.email

        }))
    }
    return(
        <UserContext.Provider value={{user,login,logout,updateProfile}}>
            {children}
        </UserContext.Provider>
    )
}
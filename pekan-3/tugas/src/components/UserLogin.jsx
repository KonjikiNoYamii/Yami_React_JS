import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function UserLogin() {
    const {user,login,logout,updateProfile} = useContext(UserContext)

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")

    const [loginName, setLoginName] = useState('')
    const [loginEmail, setLoginEmail] = useState("")

    return(
        <div style={{
        border: "2px solid pink",
        borderRadius: "10px",
        padding: "20px",
        width: "350px",
        margin: "auto",
        textAlign: "center",
      }}>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <p>name</p>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <p>email</p>
            <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

            <button onClick={() => updateProfile(newName,newEmail)}>Update</button> <br /><br />

            <button onClick={logout}>logout</button>
            <p>name</p>
            <input type="text" value={loginName}  onChange={(e) => setLoginName(e.target.value)}/>
            <p>email</p>
            <input type="text" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />

            <button onClick={() => login(loginName,loginEmail)}>loging</button>
        </div>
    )
}
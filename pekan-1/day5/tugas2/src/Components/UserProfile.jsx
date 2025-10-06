import { useState } from "react";

export default function UserProfile() {
    const [getName, setName] = useState("")
    const [getAge, setAge] = useState(0)
    const [isEditing, setIsEditing] = useState(false)
    return(
        <div>
            {isEditing?(
               <div>
                <label htmlFor="Username">Username</label>
                <input type="text" value={getName} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={getAge} onChange={(e) => setAge(Number(e.target.value))} />
                <button onClick={() => setIsEditing(false)}>Simpan Edit</button>
               </div> 
            ):(
                <div>
                    <p>Nama Anda{getName}</p>
                    <p>Umur Anda{getAge}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    )
}
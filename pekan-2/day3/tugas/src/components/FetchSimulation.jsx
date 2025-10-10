import { useEffect } from "react";
import { useState } from "react";

export default function FetchSimulation() {
    const [userId, setUserId] =useState(1)
    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() =>{
        setLoading(true)
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        .then((res) => res.json())
        .then((data) =>{
            setUser(data)
            setLoading(false)
        })
        .catch((err) =>{
            console.error(err);
            
        })
    },[userId])

    if (loading) return <p>sedang memuat.....</p>
    if (!user) return <p>pengguna tidak ditemukan</p>

    return(
        <div>
            <h2>data pengguna</h2>
            <p>{userId}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>

            <button onClick={() => setUserId(prev => prev +1)}>see next user</button>
        </div>
    )
}
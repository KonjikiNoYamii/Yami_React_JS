import { useEffect, useState } from "react";

export default function PrintFetchAPI() {
    const [data , setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{
        async function fetchData() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")

                if(!res.ok){
                    throw new Error(`http error! ${res.status}`)
                }
                const result = await res.json()
                setData(result)
            } catch (err) {
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    if (loading) return <p>sedang memuat...</p>
    if(error) return <p>data tidak ditemukan</p>
    
    return(
        <div>
            <h2>data API async biasa tidak mencolok NPC shadowgarden Lord Cid</h2>
            <p>id API: {data.id}</p>
            <p>title API: {data.title}</p>
            <p>body API: {data.body}</p>
        </div>
    )
}
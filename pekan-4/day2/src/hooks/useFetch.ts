import { useEffect, useState } from "react";

export function useFetch <T>(url:string) {
    const [data, setData] = useState <T | null> (null)
    const [loading, setLoading] = useState <boolean> (true)
    const [error, setError] = useState <string | null> (null)

    useEffect(() =>{
        const fetchData = async() =>{
            try {
                const res = await fetch(url)
                if(!res.ok) throw new Error("http error")
                    const result = await res.json()
                setData(result as T)
            } catch (err:any) {
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url])

    return { data,loading,error }
}
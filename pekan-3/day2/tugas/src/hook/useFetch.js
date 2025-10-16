import { useState } from "react";
import { useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error("HTTP ERROR")
                }
                const result = await res.json()
                setData(result)
            } catch (err) {
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
  ,[url]})
  return {data, loading, error}
}
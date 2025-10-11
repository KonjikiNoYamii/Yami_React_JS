import { useEffect, useState } from "react";

export default function AbortControl() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const controller = new AbortController()
        const signal = controller.signal

        const fetchData = async () =>{
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {signal})

                if (!res.ok) {
                    throw new Error("data tidak ditemukan")
                }
                const data = await res.json()
                setData(data)
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("pengambilan data dibatalkan");
                    
                } else {
                    console.error(err);
                    setError("terjadi kesalahan dalam pengambilan data")
                    
                }
            }
        }
        fetchData()
        return () =>{
            controller.abort()
            console.log("cleanup");
            
        }
    },[])
    if(error) return <p>{error}</p>
    if(!data) return <p>memuat data...</p>
    return(
        <div>
            <h2>menggunakan Abort Controllerr</h2>
            <p>{data.name}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
        </div>
    )
}
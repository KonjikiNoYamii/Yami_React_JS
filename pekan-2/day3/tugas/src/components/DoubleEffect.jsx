import { useEffect } from "react";
import { useState } from "react";

export default function DoubleEffect() {
    const [nama , setNama] = useState("")


    useEffect(() =>{
        document.title = `${nama} web`
    },[nama])
    const ubahNama = (e) =>{
        setNama(e.target.value)
    }
    return(
        <div>
            <p>masukan nama Web anda</p>
            <input type="text" value={nama} onChange={ubahNama} />
        </div>
    )
}
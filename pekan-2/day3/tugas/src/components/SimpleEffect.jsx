import { useEffect } from "react";
import { useState } from "react";

export default function SimpleEffect() {

    const[count, setCount] = useState(0)

    useEffect(() =>{
        console.log(`renderan pada hitungan ke ${count}`);
    })

    const tambah = () =>{
        setCount(prev => prev + 1)
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={tambah}>tambah</button>
        </div>
    )
}
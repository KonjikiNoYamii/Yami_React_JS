import { useState } from "react"

export default function SimpleEvent() {
    const [color, setColor] = useState("white")
    const klik = ()=>{
        alert("anda mengklik tombol")
    }
    const luar = () =>{
        setColor("red")
    }
    const dalam = () =>{
        setColor("green")
    }
    return(
        <div>
            <button onClick={klik}>klik</button>
            <p style={{color:color}} onMouseEnter={dalam} onMouseLeave={luar}>warna tergantung mouse</p>
        </div>
    )
}
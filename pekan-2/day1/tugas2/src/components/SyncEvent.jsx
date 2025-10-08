import { useState } from "react";

export default function SyncEvent() {
    const [input, setInput] = useState("")

    const blokLink = (e) =>{
        alert("anda mengklik")
        e.preventDefault()
    }
    const realTimeInput = (e) =>{
        setInput(e.target.value)
    }

    return(
        <div>
            <button onClick={blokLink}><a href="https://otakudesu.best/">klik</a></button>

            <input type="text" value={input}  onChange={realTimeInput}/>

            <h1>yg anda ketik {input}</h1>
        </div>
    )
}
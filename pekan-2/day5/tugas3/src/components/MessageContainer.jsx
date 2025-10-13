import { useState } from "react";
import InputMessage from "./InputMessage";
import DisplayMessage from "./DisplayMessage";

export default function MessageContainer() {
    const [message, setMessage] = useState("Hawwoo!!")
    const handleChangeInput = (pesan) =>{
        setMessage(pesan)
    }
    return(
        <div>
            <InputMessage message={message} onMessageChange={handleChangeInput}/>
            <DisplayMessage message={message} />
        </div>
    )
}
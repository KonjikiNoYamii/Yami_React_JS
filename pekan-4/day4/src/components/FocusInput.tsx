import { useRef } from "react";

export default function FocusInput() {
    const inputRef = useRef <HTMLInputElement | null>(null)
    const paragrafRef = useRef <HTMLParagraphElement | null>(null)

    const handleFocus = () =>{
        if(inputRef.current){
            inputRef.current.focus()
            inputRef.current.style.backgroundColor = "black"
            inputRef.current.style.border = "2px solid red"
            inputRef.current.style.color = "red"
            
        }
    }
    const handleParagraf = () =>{
        if (paragrafRef.current) {
            paragrafRef.current.textContent = "sudah berubah"
        }
    }
    return(
        <div>
        <h2>Manipulaso DOM</h2>
        <input type="text" ref={inputRef} placeholder="teks ini bewarna merah"/>
        <p ref={paragrafRef}>belum berubah</p>
        <button onClick={handleParagraf}>klik</button>
        <button onClick={handleFocus}>klik</button>
        </div>
    )
}
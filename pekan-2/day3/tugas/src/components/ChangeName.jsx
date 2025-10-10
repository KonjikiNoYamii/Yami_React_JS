import { useEffect } from "react"
import { useState } from "react"

export default function ChangeName() {
    const namaList = ["Yue","Yami","Herta","Atri"]
    const [index, setIndex] = useState(0)
    const [nama, setNama] = useState("Yue")

    useEffect(() =>{
        setNama(namaList[index])
        console.log(`nama dirubah menjadi ${namaList[index]}`);
    },[index])
    const changeName = () =>{
        setIndex((prev)=> (prev+1) % namaList.length)
    }
    return(
        <div>
            <h2>nama saat ini {nama}</h2>
            <button onClick={changeName}>ganti nama</button>
        </div>
    )
}
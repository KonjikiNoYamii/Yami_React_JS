import { useState } from "react";

export default function WaifuProfile() {
    const [getName, setName] = useState("")
    const [getAge, setAge] =useState("")
    const [getImg, setImg] = useState("")
    const [isEditing, setIsEditing] =useState(false)
    return(
        <div>
            <h2>waifu profile</h2>
            {isEditing?(
                <div>
            <input type="text" value={getName} onChange={(e) => setName(e.target.value)} /> <br />
            <input type="text" value={getAge} onChange={(e) => setAge(e.target.value)} /> <br />
            <input type="file" accept="image/*" onChange={(e) =>{const file = e.target.files[0]
                if(file){
                    setImg(URL.createObjectURL(file))
                }
            }} />
            <button onClick={() => setIsEditing(false)}>Simpan</button>
                </div>
            ):(
                <div>
                    <p>nama:{getName}</p>
                    <p>age:{getAge}</p>
                    {getImg && <img src={getImg} alt={getName} width="200" />}
                    <button onClick={()=> setIsEditing(true)}>edit</button>
                </div>
            )}
        </div>
    )

}
import { useState } from "react";

export default function App() {
  const [nama, setNama] =useState("")
  const [pesan,  setPesan] =useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

    setPesan(`halo ${nama} ntmy`)
  }

  const handleInput = (e)=>{
    setNama(e.target.value)
  }
  return(
    <div>
      <form action="" onSubmit={handleSubmit}>
        masukan nama:
        <input type="text" value={nama} onChange={handleInput}/>

        <button type="submit">submit</button>
      </form>
      <p>nilai input {nama}</p>
      {pesan && <p>{pesan}</p> }
    </div>
  )
}

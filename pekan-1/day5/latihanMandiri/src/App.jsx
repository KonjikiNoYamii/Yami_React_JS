import { useState } from "react";

export default function App() {
  const waifus = ["Yami","Herta","Atri","Yue"]
  const [waifu, setWaifu] = useState(0)
  const nextWaifu = () =>{
    setWaifu((prevIndex) => (prevIndex +1) % waifus.length)
  }
  const prevWaifu =() =>{
    setWaifu((prevIndex) => (prevIndex -1 + waifus.length)% waifus.length) 
  }

  return(
    <div>
      <div>
        <h1>waifu saat ini {waifus[waifu]}</h1>
        <button onClick={(nextWaifu)}>berikutnya</button>
        <button onClick={(prevWaifu)}>sebelumnya</button>
      </div>
    </div>
  )
}
import { useState } from "react";
import Status from "./components/Status";

export default function App() {
  const [online, setOnline] = useState(false)

  const togel = () => {
    setOnline((prev) => !prev)
  }
  return(
    <div>
      <Status isOnline={online}/>
      <button onClick={togel}>pencet</button>
    </div>
  )
}
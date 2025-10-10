import { useState } from "react";
import StatusMessage from "./components/StatusMessage";
export default function App() {
  const [status, setStatus] = useState("")

  const changeStatus = () => {
    const allStatus = ["error","succes","loading"]

    const nextIndex = (allStatus.indexOf(status)+1) % allStatus.length

    setStatus(allStatus[nextIndex])
  }
  return(
    <div>
      <StatusMessage status={status}/>
      <button onClick={changeStatus}>Ubah Status</button>
    </div>
  )
}
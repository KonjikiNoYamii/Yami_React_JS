import { useState } from "react";
import { ChildMemo } from "./components/ChildMemo";

export default function App() {
  const [themeParents, setThemeParents] = useState("light")
  const [count , setCount] = useState(0)

  const handleThemeChange = () =>{
    setThemeParents((prev) => prev === "light" ?"dark":"light")
  }
  const handleCountChange = () =>{
    setCount((prev) => prev + 1)
  }
  console.log("merender parent");
  
  return(
    <div>
      <button onClick={handleThemeChange}>ubah tema</button>
      <button onClick={handleCountChange}>tambah angka</button>

      <h3>{count}</h3>
      <ChildMemo theme={themeParents}/>
    </div>
  )
}
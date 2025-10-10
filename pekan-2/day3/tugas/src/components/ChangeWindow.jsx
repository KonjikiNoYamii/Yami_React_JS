import { useEffect } from "react";
import { useState } from "react";

export default function ChangeWindow() {
  const [windowSize, setWindow] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindow({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log("size berubah!");
      
    };


    window.addEventListener("resize", handleResize)
    console.log("size berubah");
    

    return () =>{
        window.removeEventListener("resize", handleResize)        
    }
  },[]);

  
  return(
    <div>
        <h1>{windowSize.width}</h1>
        <h1>{windowSize.height}</h1>
    </div>
  )
}

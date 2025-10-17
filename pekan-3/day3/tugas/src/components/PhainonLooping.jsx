import { useMemo, useState } from "react";

export default function PhainonLooping() {
  const [loop, setloop] = useState(1);
  const [theme, setTheme] = useState("light");

  const phainonLoopingSimulation = useMemo(() => {
    console.log("Phainon kembali ke masa lalu");

    let result = 0;

    for (let i = 0; i < 33550336; i++) {
      result += Math.sin(i % 100) * Math.sqrt(loop);
    }
    return result.toFixed(2);
  }, [loop]);
  
  return(
    <div style={{backgroundColor:theme === "light"?"white":"black", color:theme === "light"?"black":"white"}}>
        <h2>{phainonLoopingSimulation}</h2>
        <button onClick={() => setloop(loop + 1)}>tambah loop</button>
        <button onClick={() => setTheme(prev => prev === "light"?"dark":"light")}>ganti warna</button>
    </div>
  )
}

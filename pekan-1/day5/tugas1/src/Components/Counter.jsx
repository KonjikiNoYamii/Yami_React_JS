import { useState } from "react";

export default function Counter() {
  const [getCounter, setCounter] = useState(0);

  const Tambah = () => {
    setCounter(getCounter + 1);
  };
  const Kurang = () => {
    if (getCounter > 0) setCounter(getCounter - 1);
  };
  const Reset = () => {
    setCounter(0);
  };
  return (
    <div style={{ display: "grid", fontSize:"30px"}}>
      <h1 style={{textAlign:"center"}}>{getCounter}</h1>
      <button onClick={Tambah} style={{outline:"none"}}>Tambah</button>
      <button onClick={Kurang} style={{outline:"none"}}>Kurang</button>
      <button onClick={Reset} style={{outline:"none"}}>Reset</button>
    </div>
  );
}

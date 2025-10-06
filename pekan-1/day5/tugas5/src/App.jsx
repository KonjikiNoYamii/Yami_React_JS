import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const Tambah = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const Kurang = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };
  const TambahDua = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const KurangDua = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={Tambah}>tambah</button>
      <button onClick={Kurang}>kurang</button>
      <button onClick={TambahDua}>tambah dua</button>
      <button onClick={KurangDua}>kurang dua</button>
    </div>
  );
}

export default App;

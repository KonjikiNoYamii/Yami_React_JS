import { useEffect, useState } from "react";
import axios from "axios";

export default function LoadAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      setTimeout(async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setData(res.data);
        setLoading(false); 
      }, 1000);
    } catch (err) {
      setError("Gagal menemukan data!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Memuat data user...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2> Data Pengguna </h2>
      <p><strong>Nama:</strong> {data.name}</p>
      <p><strong>Telepon:</strong> {data.phone}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <button onClick={fetchData}>muat ulang</button>
    </div>
  );
}

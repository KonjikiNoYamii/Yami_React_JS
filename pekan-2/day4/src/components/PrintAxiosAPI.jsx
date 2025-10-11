import { useEffect, useState } from "react";
import axios from "axios";

export default function PrintAxiosAPI() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setUser(res.data);
      } catch (err) {
        console.error(err);
        setError("Gagal mengambil data pengguna!");
      }
    };
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Memuat data pengguna...</p>;

  return (
    <div>
      <h2>Data Pengguna menggunakan Axios</h2>
      <p>Nama: {user.name}</p>
      <p>Nomor HP: {user.phone}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

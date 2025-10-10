import { useEffect, useState } from "react";

export default function App() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect dengan dependency array
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [userId]);

  // kondisi loading
  if (loading) return <p>⏳ Sedang memuat data pengguna...</p>;

  // kondisi jika user belum ada
  if (!user) return <p>Pengguna tidak ditemukan.</p>;

  // tampilan utama
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👤 Data Pengguna</h2>
      <p><strong>ID:</strong> {userId}</p>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button onClick={() => setUserId((prev) => prev + 1)}>
        🔁 Lihat Pengguna Berikutnya
      </button>
    </div>
  );
}

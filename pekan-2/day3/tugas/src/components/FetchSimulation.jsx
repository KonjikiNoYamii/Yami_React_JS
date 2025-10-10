import { useEffect, useState } from "react";

export default function FetchSimulation() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, [userId]);

  if (loading) return <p>sedang memuat...</p>;
  if (!user) return <p>pengguna tidak ditemukan!</p>;

  return (
    <div>
      <h2>Data Pengguna</h2>
      <p>
        <b>ID:</b> {user.id}
      </p>
      <p>
        <b>Nama:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>

      <button onClick={() => setUserId((prev) => prev + 1)}>
        Lihat Pengguna Selanjutnya
      </button>
    </div>
  );
}

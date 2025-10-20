import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";

export default function Character() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/Character.json");
        if (!res.ok) throw new Error("HTTP Error");
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {});
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Memuat karakter...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "50px" }}>Ada kesalahan: {error.message}</p>;
  if (data.length === 0) return <p style={{ textAlign: "center", marginTop: "50px" }}>Tidak ada karakter</p>;

  const filteredData = data.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <CharacterList data={filteredData} />
    </div>
  );
}

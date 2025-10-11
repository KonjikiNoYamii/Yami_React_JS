import { useEffect, useState } from "react";

export default function DataFilter() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("pengambilan data gagal");
        const data = await res.json();
        const filterData = data.map((item) =>({
            id:item.id,
            nama:item.name,
            address:item.address.city
      }))
        setUser(filterData)
      } catch (err) {
        setError(err.message)
      }
    };
    fetchData()
  },[]);
  return(
    <div>
        <h2>print sebagian data</h2>

        {user.map((item) =>(
            <p key={item.id}>{item.nama}-
            {item.address}</p>
            
        ))}
    </div>
  )
}

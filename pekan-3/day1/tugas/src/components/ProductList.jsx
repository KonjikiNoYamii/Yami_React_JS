import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";

export default function ProductList() {
  const { addCart } = useCart();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        
      }finally{
        setLoading(false)
      }
    }
    fetchData();
  }, []);

  if(loading) return <p>sedang memuat produk</p>

  return(
    <div>
        {product.map((p) =>{
            return <div key={p.id}>
                <span>{p.title} - {p.price}</span>
                <button onClick={()=> addCart(p)}>add to cart</button>
            </div>
        })}
    </div>
  )
}

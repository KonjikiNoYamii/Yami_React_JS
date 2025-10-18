import { NavLink } from "react-router-dom";
import "../style/Home.css"; // tambahkan file CSS terpisah biar rapi~

export default function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Pilih Kategori Produk</h2>
      <nav className="home-nav">
        <NavLink to="/products/weapon" className="home-link">
          Weapon
        </NavLink>
        <NavLink to="/products/armor" className="home-link">
          Armor
        </NavLink>
        <NavLink to="/products/accessories" className="home-link">
          Accessories
        </NavLink>
        <NavLink to="/products/potion" className="home-link">
          Potion
        </NavLink>
      </nav>
    </div>
  );
}

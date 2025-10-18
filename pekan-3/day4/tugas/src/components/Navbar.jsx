import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const {theme} = useContext(ThemeContext)
  return (
    <nav className="navbar" style={{backgroundColor:theme === "light" ?"white":"black", borderBottom:theme === "light"?"black 2px solid":"white 2px solid"}}>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/dashboard" className="nav-link">
        Dashboard
      </NavLink>
    </nav>
  );
}

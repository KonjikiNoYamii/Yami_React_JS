import { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggIn, setIsLoggIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggIn") === "bjorka jangan mencuri";
    setIsLoggIn(status);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggIn");
    setIsLoggIn(false);
    navigate("/login", { replace: true });
  };

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "#0077cc",
    fontWeight: "500",
    padding: "5px 10px",
    border: "1px solid #0077cc",
    borderRadius: "5px",
  };

  const activeStyle = {
    backgroundColor: "#0077cc",
    color: "#fff",
  };

  return (
    <nav style={{ display: "flex", justifyContent: "center", padding: "20px", gap: "10px", backgroundColor: "#e0f0ff" }}>
      <NavLink to="/" style={linkStyle} activeStyle={activeStyle}>Home</NavLink>
      <NavLink to="/character" style={linkStyle} activeStyle={activeStyle}>Character</NavLink>
      <NavLink to="/dashboard" style={linkStyle} activeStyle={activeStyle}>Dashboard</NavLink>

      {isLoggIn ? (
        <button 
          onClick={handleLogout} 
          style={{ ...linkStyle, backgroundColor: "#fff", color: "#0077cc", border: "1px solid #0077cc" }}
        >
          Logout
        </button>
      ) : (
        <NavLink to="/login" style={linkStyle} activeStyle={activeStyle}>Login</NavLink>
      )}
    </nav>
  );
}

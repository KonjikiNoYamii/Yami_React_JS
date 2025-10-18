import { NavLink, Outlet } from "react-router-dom";
import "../../style/Dashboard.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Dashboard() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="dashboard" style={{background:theme === "light"?"white":"black"}}>
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-nav" style={{background:theme === "light"?"white":"black"}}>
        <NavLink to="profile" className="dash-link">
            profile
        </NavLink>
        <NavLink to="settings" className="dash-link">
            settings
        </NavLink>
      </div>
    </div>
  );
}

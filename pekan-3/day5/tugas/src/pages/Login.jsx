import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "johny" && password === "admin123#") {
      localStorage.setItem("isLoggIn", "bjorka jangan mencuri");
      alert("Login Berhasil!");
      navigate("/dashboard", { replace: true });
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #0077cc", borderRadius: "8px", backgroundColor: "#e0f7ff" }}>
      <h2 style={{ textAlign: "center", color: "#0077cc" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "15px 0" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#0077cc" }}>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            style={{ width: "100%", padding: "8px", border: "1px solid #0077cc", borderRadius: "5px", outline: "none" }}
          />
        </div>
        <div style={{ margin: "15px 0" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#0077cc" }}>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ width: "100%", padding: "8px", border: "1px solid #0077cc", borderRadius: "5px", outline: "none" }}
          />
        </div>
        <button 
          type="submit"
          style={{ width: "100%", padding: "10px", border: "1px solid #0077cc", borderRadius: "5px", backgroundColor: "#0077cc", color: "#fff", cursor: "pointer" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

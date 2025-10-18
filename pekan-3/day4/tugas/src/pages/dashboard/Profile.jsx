import { useContext, useState } from "react";
import "../../style/Profile.css"; 
import { ThemeContext } from "../../context/ThemeContext";

export default function Profile() {
  const  {theme} = useContext(ThemeContext)
  const [inputNama, setInputNama] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNama(inputNama);
    setEmail(inputEmail);
  };

  return (
    <div className="profile-container" style={{backgroundColor:theme === "light"?"white":"black"}}>
      <div className="profile-card">
        <img src="/pp.jpeg" alt="" className="profile-img" />
        <div className="profile-info">
          <p className="label">Username</p>
          <p className="value">{nama}</p><br />
          <p className="label">Email</p>
          <p className="value">{email}</p><br />
        </div>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={inputNama}
          onChange={(e) => setInputNama(e.target.value)}
          placeholder="Masukkan username..."
        />

        <label>Email</label>
        <input
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder="Masukkan email..."
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

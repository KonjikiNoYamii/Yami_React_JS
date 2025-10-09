import { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState({
    nama: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState({
    nama: "",
    password: "",
    email: "",
  });

  const formRef = useRef(null); // untuk referensi form (drag)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = {};

    if (input.nama.trim() === "") newError.nama = "username tidak boleh kosong";
    if (input.password.length < 6)
      newError.password = "password tidak boleh kurang dari 6 karakter";
    if (!input.email.includes("@")) newError.email = "email tidak valid";

    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert("Login berhasil!");
      setInput({ nama: "", password: "", email: "" });
    }
  };

  // Fungsi untuk menggeser form (drag)
  const handleMouseDown = (e) => {
    const form = formRef.current;
    let shiftX = e.clientX - form.getBoundingClientRect().left;
    let shiftY = e.clientY - form.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      form.style.left = pageX - shiftX + "px";
      form.style.top = pageY - shiftY + "px";
    };

    const onMouseMove = (event) => {
      moveAt(event.pageX, event.pageY);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.onmouseup = null;
    };
  };

  return (
    <div className="main">
      <form
        ref={formRef}
        className="formContainer"
        onMouseDown={handleMouseDown}
        onSubmit={handleSubmit}
      >
        <p style={{ textAlign: "end", color: "black" }}>&gt; &lt;</p>
        <h2 style={{ letterSpacing: "2px" }}>FORM LOGIN</h2>

        <label htmlFor="namaUser">Username</label>
        <input
          id="namaUser"
          type="text"
          name="nama"
          onChange={handleChange}
          value={input.nama}
        />
        <p>{error.nama}</p>

        <label htmlFor="passwordUser">Password</label>
        <input
          id="passwordUser"
          type="password"
          name="password"
          onChange={handleChange}
          value={input.password}
        />
        <p>{error.password}</p>

        <label htmlFor="emailUser">Email</label>
        <input
          id="emailUser"
          type="text"
          name="email"
          onChange={handleChange}
          value={input.email}
        />
        <p>{error.email}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

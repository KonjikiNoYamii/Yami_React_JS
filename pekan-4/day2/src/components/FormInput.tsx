import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

export function FormInput() {
  const { form, handleChange } = useFormContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Nama dan email wajib diisi!");
      return;
    }
    navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "250px", gap: "10px" }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nama" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Umur" />
      <button type="submit">Kirim</button>
    </form>
  );
}

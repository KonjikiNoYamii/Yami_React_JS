import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

export function ResultPage() {
  const { form } = useFormContext();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hasil Form</h2>
      <p>Nama: {form.name}</p>
      <p>Email: {form.email}</p>
      <p>Umur: {form.age}</p>
      <button onClick={handleBack}>Kembali</button>
    </div>
  );
}

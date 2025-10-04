import AlertBox from "./components/alert";

function App() {
  return (
    <div>
      <h1>Contoh Inline Style AlertBox</h1>
      <AlertBox type="success" message="Data berhasil disimpan!" />
      <AlertBox type="warning" message="Periksa kembali input Anda!" />
      <AlertBox type="error" message="Terjadi kesalahan sistem!" />
      <AlertBox message="Ini adalah alert default." />
    </div>
  );
}

export default App;

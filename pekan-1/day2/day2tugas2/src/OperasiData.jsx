function Data() {
  const nama = "Joko";
  const uangJoko = 50000;
  const hutang = 100000;
  const kurangiHutang = 50000;

  function Operasi() {
    const bayarhutang = uangJoko - hutang;
    const total = bayarhutang + kurangiHutang;
    return total;
  }

  function Sapa(nama) {
    return nama;
  }
  return (
    <div>
      <p>
        jadi sisa hutang {Sapa(nama)} adalah {Operasi()}
      </p>
    </div>
  );
}
export default Data;

import "../style/About.css";

export default function About() {
  return (
    <div className="about-container" >
      <h2 className="about-title">Yami Market</h2>

      <p className="about-desc">
        Selamat datang di <span className="highlight">Yami Market</span> —
        tempat terbaik bagi para petualang untuk membeli perlengkapan tempur,
        ramuan penyembuh, dan aksesoris ajaib sebelum memulai perjalanan berbahaya!
      </p>

      <div className="about-section">
        <h3>Tipe Barang yang Kami Jual</h3>
        <ul>
          <li><b>Weapon:</b> Pedang, busur, tombak, dan senjata kuno berkualitas tinggi.</li>
          <li><b>Armor:</b> Perisai dan zirah yang melindungi dari serangan musuh.</li>
          <li><b>Accessories:</b> Kalung, cincin, dan jimat dengan kekuatan mistik.</li>
          <li><b>Potion:</b> Ramuan penyembuh, stamina, dan buff kekuatan magis.</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Tujuan Yami Market</h3>
        <p>
          Kami berdiri untuk membantu para hero seperti Master menyiapkan diri sebelum
          bertempur di dunia penuh naga, iblis, dan sihir hitam.  
          Semua produk kami dijamin <span className="highlight">authentic dan berkekuatan magis</span>~
        </p>
      </div>

      <div className="about-footer">
        <p>Versi 1.0 | © 2025 Yami Project</p>
      </div>
    </div>
  );
}

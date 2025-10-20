export default function Dashboard() {
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "50px 20px", 
      backgroundColor: "#e0f7ff", 
      minHeight: "80vh", 
      color: "#0077cc", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Dashboard Master
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
        Selamat datang di dashboard, Master! Di sini Anda bisa mengelola akun, melihat ringkasan aktivitas, 
        dan mengakses semua fitur eksklusif yang tersedia untuk pengguna terdaftar. Gunakan navigasi di atas 
        untuk menjelajahi halaman karakter atau melakukan pencarian karakter favorit Anda.
      </p>
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ 
          border: "2px solid #0077cc", 
          borderRadius: "8px", 
          padding: "20px", 
          minWidth: "200px"
        }}>
          <h3>Profil</h3>
          <p>Periksa dan perbarui informasi akun Anda.</p>
        </div>
        <div style={{ 
          border: "2px solid #0077cc", 
          borderRadius: "8px", 
          padding: "20px", 
          minWidth: "200px"
        }}>
          <h3>Karakter Favorit</h3>
          <p>Lihat dan kelola karakter yang Anda sukai.</p>
        </div>
        <div style={{ 
          border: "2px solid #0077cc", 
          borderRadius: "8px", 
          padding: "20px", 
          minWidth: "200px"
        }}>
          <h3>Pengaturan</h3>
          <p>Sesuaikan preferensi dan keamanan akun Anda.</p>
        </div>
      </div>
    </div>
  );
}

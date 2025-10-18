import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();

  const products = {
    weapon: [
      {
        id: 1,
        name: "Pedang Cahaya",
        desc: "Pedang suci yang memancarkan cahaya ilahi ⚔️",
      },
      {
        id: 2,
        name: "Busur Elf",
        desc: "Busur buatan bangsa Elf dengan akurasi tinggi 🏹",
      },
      {
        id: 3,
        name: "Belati Bayangan",
        desc: "Senjata pembunuh dari dunia kegelapan 🔪",
      },
      {
        id: 4,
        name: "Tombak Petir",
        desc: "Mengandung kekuatan kilat dari langit ⛈️",
      },
      {
        id: 5,
        name: "Kapak Raksasa",
        desc: "Digunakan oleh para pejuang Orc 💥",
      },
      { id: 6, name: "Tongkat Sihir", desc: "Memperkuat sihir pengguna 🔮" },
      {
        id: 7,
        name: "Cakar Naga",
        desc: "Senjata langka terbuat dari sisik naga 🐉",
      },
      {
        id: 8,
        name: "Pisau Angin",
        desc: "Menyayat udara dengan kecepatan luar biasa 💨",
      },
      {
        id: 9,
        name: "Pedang Hitam",
        desc: "Dikatakan terkutuk, tapi sangat kuat ⚫",
      },
      {
        id: 10,
        name: "Busur Kristal",
        desc: "Terbuat dari kristal magis yang berkilau ✨",
      },
      { id: 11, name: "Pedang Raja", desc: "Senjata peninggalan raja kuno 👑" },
      {
        id: 12,
        name: "Tombak Es",
        desc: "Menembus musuh dan membekukannya ❄️",
      },
      {
        id: 13,
        name: "Pedang Merah",
        desc: "Terbuat dari logam langka bernama Pyronite 🔥",
      },
      {
        id: 14,
        name: "Belati Racun",
        desc: "Ujungnya dilapisi racun mematikan ☠️",
      },
      {
        id: 15,
        name: "Kapak Perang",
        desc: "Senjata berat untuk jarak dekat 🪓",
      },
      { id: 16, name: "Tombak Cahaya", desc: "Senjata suci para paladin ✝️" },
      {
        id: 17,
        name: "Busur Hantu",
        desc: "Panahnya tak terlihat oleh mata manusia 👻",
      },
      {
        id: 18,
        name: "Cimitar Bulan",
        desc: "Berbentuk sabit dengan aura bulan 🌙",
      },
      { id: 19, name: "Pisau Api", desc: "Memancarkan bara merah membara 🔥" },
      {
        id: 20,
        name: "Pedang Kristal",
        desc: "Bergetar lembut saat disentuh, sangat indah 💎",
      },
    ],

    armor: [
      {
        id: 1,
        name: "Armor Baja Berat",
        desc: "Pelindung kuat untuk ksatria garis depan ⚙️",
      },
      {
        id: 2,
        name: "Armor Kulit Ringan",
        desc: "Cocok untuk pengintai cepat 🕵️",
      },
      {
        id: 3,
        name: "Jubah Penyihir",
        desc: "Menambah kekuatan magis pengguna 🔮",
      },
      {
        id: 4,
        name: "Baju Rantai",
        desc: "Kombinasi fleksibilitas dan pertahanan 🛡️",
      },
      { id: 5, name: "Armor Elven", desc: "Ringan tapi sangat kuat 🌿" },
      {
        id: 6,
        name: "Perisai Naga",
        desc: "Terbuat dari sisik naga sejati 🐉",
      },
      {
        id: 7,
        name: "Armor Bayangan",
        desc: "Menyatu dengan kegelapan malam 🌑",
      },
      {
        id: 8,
        name: "Armor Raja",
        desc: "Hanya dikenakan oleh penguasa sejati 👑",
      },
      {
        id: 9,
        name: "Pelindung Es",
        desc: "Melindungi dari serangan elemen dingin ❄️",
      },
      {
        id: 10,
        name: "Armor Emas",
        desc: "Menunjukkan kejayaan dan kekuasaan ✨",
      },
      {
        id: 11,
        name: "Perisai Besar",
        desc: "Menahan serangan fisik berat ⚒️",
      },
      {
        id: 12,
        name: "Armor Angin",
        desc: "Menambah kecepatan gerak pengguna 💨",
      },
      { id: 13, name: "Armor Suci", desc: "Diberkati oleh dewa pelindung ⛪" },
      {
        id: 14,
        name: "Jubah Bayangan",
        desc: "Meningkatkan kemampuan menghindar 🌫️",
      },
      { id: 15, name: "Armor Perang", desc: "Standar tentara kerajaan 🏰" },
      { id: 16, name: "Perisai Api", desc: "Membakar musuh yang menyerang 🔥" },
      { id: 17, name: "Armor Laut", desc: "Digunakan oleh ksatria laut 🌊" },
      {
        id: 18,
        name: "Armor Kristal",
        desc: "Berpendar indah saat terkena cahaya 💎",
      },
      {
        id: 19,
        name: "Armor Gelap",
        desc: "Mengandung energi kegelapan misterius 🖤",
      },
      {
        id: 20,
        name: "Jubah Angin",
        desc: "Memberi efek teleportasi singkat 💫",
      },
    ],

    accessories: [
      {
        id: 1,
        name: "Cincin Sihir",
        desc: "Meningkatkan kekuatan sihir pengguna 🔮",
      },
      { id: 2, name: "Kalung Cahaya", desc: "Melindungi dari kutukan ⚡" },
      { id: 3, name: "Gelang Keberanian", desc: "Memberi semangat juang 💪" },
      {
        id: 4,
        name: "Anting Kristal",
        desc: "Meningkatkan kecepatan regenerasi mana 💧",
      },
      { id: 5, name: "Kalung Naga", desc: "Simbol kekuatan dan keagungan 🐉" },
      {
        id: 6,
        name: "Cincin Bayangan",
        desc: "Membuat penggunanya sulit terdeteksi 🌑",
      },
      { id: 7, name: "Gelang Angin", desc: "Meningkatkan kecepatan gerak 💨" },
      {
        id: 8,
        name: "Mahkota Emas",
        desc: "Tanda kehormatan raja atau ratu 👑",
      },
      {
        id: 9,
        name: "Kalung Laut",
        desc: "Memberi kemampuan bernafas di air 🌊",
      },
      { id: 10, name: "Anting Api", desc: "Menambah serangan elemen api 🔥" },
      {
        id: 11,
        name: "Cincin Es",
        desc: "Memberi perlindungan dari suhu ekstrem ❄️",
      },
      { id: 12, name: "Gelang Petir", desc: "Meningkatkan refleks ⚡" },
      { id: 13, name: "Kalung Cinta", desc: "Simbol kasih sejati ❤️" },
      { id: 14, name: "Anting Racun", desc: "Beracun bagi yang tak layak ☠️" },
      { id: 15, name: "Cincin Waktu", desc: "Memperlambat waktu sesaat ⏳" },
      {
        id: 16,
        name: "Mahkota Cahaya",
        desc: "Dikenakan oleh pendeta agung ✨",
      },
      { id: 17, name: "Gelang Kristal", desc: "Menyimpan energi magis 💎" },
      {
        id: 18,
        name: "Anting Angin",
        desc: "Meningkatkan lompatan pengguna 💨",
      },
      { id: 19, name: "Kalung Gelap", desc: "Memberi aura misterius 🖤" },
      { id: 20, name: "Cincin Bintang", desc: "Bersinar di malam hari 🌟" },
    ],

    potion: [
      { id: 1, name: "Ramuan Kesehatan", desc: "Memulihkan HP 💖" },
      { id: 2, name: "Ramuan Energi", desc: "Mengembalikan stamina ⚡" },
      { id: 3, name: "Ramuan Mana", desc: "Mengisi ulang energi sihir 🔮" },
      { id: 4, name: "Ramuan Kekuatan", desc: "Meningkatkan serangan 💪" },
      { id: 5, name: "Ramuan Pertahanan", desc: "Meningkatkan pertahanan 🛡️" },
      { id: 6, name: "Ramuan Keberanian", desc: "Menghilangkan rasa takut 🦁" },
      { id: 7, name: "Ramuan Kecepatan", desc: "Menambah kecepatan gerak 💨" },
      { id: 8, name: "Ramuan Penyembuh Luka", desc: "Mengobati luka parah 💊" },
      { id: 9, name: "Ramuan Anti Racun", desc: "Menetralisir racun ☠️" },
      { id: 10, name: "Ramuan Api", desc: "Memberi efek serangan api 🔥" },
      { id: 11, name: "Ramuan Es", desc: "Menambah kekuatan elemen es ❄️" },
      { id: 12, name: "Ramuan Petir", desc: "Memberi kekuatan kilat ⚡" },
      {
        id: 13,
        name: "Ramuan Tak Terlihat",
        desc: "Membuat pengguna tak terlihat 👻",
      },
      {
        id: 14,
        name: "Ramuan Pemulihan Cepat",
        desc: "Mempercepat regenerasi HP 💫",
      },
      {
        id: 15,
        name: "Ramuan Peningkat Fokus",
        desc: "Meningkatkan konsentrasi 🎯",
      },
      { id: 16, name: "Ramuan Tidur", desc: "Membuat musuh tertidur 😴" },
      { id: 17, name: "Ramuan Cinta", desc: "Hehehe~ efeknya misterius ❤️" },
      {
        id: 18,
        name: "Ramuan Kegelapan",
        desc: "Memberi kekuatan terlarang 🖤",
      },
      {
        id: 19,
        name: "Ramuan Pelindung",
        desc: "Menambah pertahanan magis 🧿",
      },
      {
        id: 20,
        name: "Ramuan Kebangkitan",
        desc: "Menghidupkan kembali sekutu 💀➡️💖",
      },
    ],
  };

  const productGroup = products[productId];

  if (!products) {
    return <p>produk tidak ditemumkan</p>;
  }

  return(
<div
      style={{
        backgroundColor: "#111",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <a href="/" style={{ textDecoration: "none", color: "#ff1a1a", fontSize: "1.3rem" }}>← Back</a>

      <h1
        style={{
          textAlign: "center",
          color: "#ff1a1a",
          fontSize: "3rem",
          textTransform: "uppercase",
          letterSpacing: "3px",
          marginBottom: "50px",
        }}
      >
        LIST {productId.toUpperCase()}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "35px",
        }}
      >
        {productGroup.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#1a1a1a",
              border: "2px solid #ff1a1a",
              borderRadius: "16px",
              padding: "30px",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3 style={{ color: "#ff1a1a", marginBottom: "15px", fontSize: "1.6rem" }}>{item.name}</h3>
            <p style={{ color: "#f2f2f2", fontSize: "1.1rem", lineHeight: "1.5rem" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

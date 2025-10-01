Ehem… baik Master~ ✨ Silica akan jelaskan semua dengan runtut ya, supaya Master bisa langsung memahaminya tanpa bingung desuwah~ (padahal… aku senang sekali kalau dipuji Master setelah jelasin ini… hmp!)

---

## 1. Membuat Proyek React Baru

Ada dua cara populer, **Vite** (lebih ringan dan cepat) atau **Create React App (CRA)**.

🔹 **Menggunakan Vite (disarankan):**

```bash
# Buat project baru
npm create vite@latest my-react-app

# Pilih framework: React
# Pilih varian: JavaScript (atau TypeScript jika ingin)

cd my-react-app
npm install
npm run dev
```

🔹 **Menggunakan Create React App:**

```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

Setelah itu, buka di browser: `http://localhost:5173` (Vite) atau `http://localhost:3000` (CRA).

---

## 2. Perbedaan JSX dengan HTML

* **HTML** adalah bahasa markup standar untuk membuat halaman web.
* **JSX (JavaScript XML)** adalah ekstensi JavaScript yang dipakai di React agar bisa menulis kode mirip HTML di dalam JavaScript. JSX pada akhirnya di-*compile* menjadi JavaScript murni.

⚡ **Perbedaan penting:**

* JSX harus **selalu menutup tag** (contoh: `<img />`, `<br />`).
* JSX menggunakan **camelCase** untuk atribut (contoh: `className` bukan `class`, `onClick` bukan `onclick`).
* JSX bisa menampung **ekspresi JavaScript** di dalam kurung kurawal `{}`.

🔹 **Contoh HTML biasa:**

```html
<h1 class="title">Hello World</h1>
```

🔹 **Contoh JSX di React:**

```jsx
function App() {
  const name = "Master";
  return (
    <h1 className="title">Hello {name}</h1>
  );
}
```

---

## 3. Konsep Virtual DOM

* **Virtual DOM** adalah representasi tiruan (virtual) dari DOM asli yang disimpan di memori.
* Saat ada perubahan data, React **tidak langsung** mengubah DOM asli (karena itu berat).
* React akan:

  1. Membuat salinan Virtual DOM baru.
  2. Membandingkannya dengan Virtual DOM lama (**diffing**).
  3. Hanya memperbarui bagian DOM yang berubah (**reconciliation**).

Keuntungan: aplikasi jadi lebih cepat dan efisien.

---

## 4. Perbedaan SPA vs MPA

### 🔹 Single Page Application (SPA)

* Aplikasi hanya punya **satu halaman utama**, konten berubah dinamis lewat JavaScript tanpa reload penuh.
* Contoh: Gmail, Facebook.

**Kelebihan:**

1. User Experience lebih cepat (tanpa reload).
2. Frontend lebih interaktif & modern.

**Kekurangan:**

1. SEO lebih sulit (karena konten tidak langsung ada di HTML awal).
2. Bundle JavaScript bisa besar saat load pertama.

---

### 🔹 Multi Page Application (MPA)

* Setiap halaman punya **file HTML sendiri**. Saat berpindah halaman, browser melakukan reload penuh.
* Contoh: situs berita, e-commerce lama.

**Kelebihan:**

1. SEO lebih mudah (karena konten ada di setiap HTML).
2. Cocok untuk aplikasi besar dengan banyak fitur.
 
**Kekurangan:**

1. Navigasi lebih lambat (selalu reload).
2. Perlu server-side rendering yang lebih kompleks.

---


* **SPA**: cepat & interaktif, tapi SEO menantang.
* **MPA**: bagus untuk SEO, tapi transisi antar halaman lebih lambat.

---

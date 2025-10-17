# 🧾 Laporan Performance Profiling React

## 🧩 Nama Komponen yang Diuji
Aplikasi React dengan beberapa komponen:
- `ParentTheme` & `ChildTheme`
- `PhainonLooping` (simulasi perhitungan berat)
- `ParentButton` & `ChildButton`
- `LazySimulation` (lazy loading)

---

## ⚙️ Langkah-langkah Pengujian
1. Menjalankan aplikasi React di mode development.
2. Membuka **React DevTools** di tab **Profiler**.
3. Menekan tombol **Start profiling and record performance**.
4. Melakukan beberapa interaksi seperti:
   - Mengubah tema.
   - Menekan tombol looping.
   - Menambah angka.
5. Melihat hasil waktu render tiap komponen di tampilan **Flamegraph**.

---

## 📊 Hasil Profiling

| Komponen | Waktu Render | Keterangan |
|-----------|---------------|-------------|
| **PhainonLooping** | ±1850 ms | Proses berat karena ada looping besar (simulasi 33 juta kali). |
| **App** | ±6.7 ms | Normal, hanya membungkus semua komponen. |
| **ParentTheme** | ±2.9 ms | Cepat dan efisien. |
| **ChildTheme (Memo)** | ±1.4 ms | Tidak render ulang berkat `React.memo`. |
| **LazySimulation** | ±1.1 ms | Ringan dan efisien. |
| **ParentButton** & **ChildButton (Memo)** | <1 ms | Sangat cepat, berkat `useCallback` dan `React.memo`. |

---

## 💡 Analisis
Dari hasil profiling, komponen **`PhainonLooping`** menjadi penyebab utama lambatnya performa karena melakukan perhitungan berat di dalam render.

Komponen lainnya sudah optimal karena menggunakan teknik **memoization** seperti:
- `React.memo` → mencegah re-render komponen anak yang tidak perlu.
- `useMemo` → menyimpan hasil perhitungan agar tidak dihitung ulang setiap render.
- `useCallback` → menjaga referensi fungsi agar tidak berubah setiap render.

---

## 🚀 Saran Optimasi
1. Bungkus proses looping di `useMemo` agar hanya dihitung ketika dependensi berubah.
2. Batasi jumlah iterasi looping jika hanya untuk simulasi.
3. Gunakan **Web Worker** untuk memisahkan proses berat dari UI thread.
4. Terapkan `React.memo` dan `useCallback` untuk semua komponen dengan props.


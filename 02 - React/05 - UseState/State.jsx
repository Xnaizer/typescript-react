// 📌 useState di React: Penjelasan Detail & Lengkap
// 🔹 Apa Itu useState?
// useState adalah Hook dalam React yang digunakan untuk menyimpan dan mengelola state dalam komponen fungsional.

// 📌 Mengapa useState Penting?
// ✅ Sebelum React Hooks, hanya Class Component yang bisa memiliki state.
// ✅ Dengan useState, Functional Component bisa menggunakan state tanpa harus menggunakan Class Component.
// ✅ Memudahkan pengelolaan data dinamis dalam komponen.

// 📌 Ciri-ciri useState:

// Menyediakan state dan fungsi untuk mengubah state dalam komponen.
// State yang dikelola bisa berupa string, number, boolean, array, object, atau function.
// Saat state berubah, komponen akan re-render otomatis.
// 🔹 Cara Menggunakan useState
// Kita perlu mengimpor useState dari React sebelum menggunakannya:


import { useState } from "react";

// 📌 Contoh Dasar useState (Counter)

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};

export default Counter;

// 📌 Penjelasan:

const [count, setCount] = useState(0);

// count → Nilai state awalnya adalah 0.
// setCount → Fungsi untuk mengubah nilai state.
// setCount(count + 1) → Setiap kali tombol diklik, nilai count bertambah 1.
// 📌 Hasilnya:
// Tombol yang ketika diklik akan menambah angka di layar.
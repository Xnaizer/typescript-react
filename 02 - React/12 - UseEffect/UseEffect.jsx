// 📌 useEffect di React: Panduan Lengkap dan Detail
// 🔹 Apa Itu useEffect?
// useEffect adalah hook bawaan React yang digunakan untuk mengelola efek samping dalam komponen fungsi. Efek samping ini bisa berupa:
// ✅ Mengambil data dari API (fetching data)
// ✅ Mengubah title halaman (DOM manipulation)
// ✅ Menjalankan interval atau timeout (setInterval, setTimeout)
// ✅ Menyinkronkan state lokal dengan sesuatu dari luar (event listener, localStorage)

// useEffect menggantikan fungsi componentDidMount, componentDidUpdate, dan componentWillUnmount dari komponen kelas dalam React versi sebelumnya.


// 🔹 Cara Menggunakan useEffect

import { useEffect } from "react";

useEffect(() => {
  // Kode efek samping ditulis di sini
});

// 👆 Kode di dalam useEffect akan dijalankan setiap kali komponen dirender ulang (default behavior).



// 🔹 Struktur useEffect

useEffect(() => {
  // 1️⃣ Efek samping dijalankan di sini

  return () => {
    // 2️⃣ Cleanup function (opsional)
  };
}, [/* 3️⃣ Dependency array */]);

// 📌 Penjelasan:
// 1️⃣ Efek Samping → Fungsi yang akan dijalankan setelah render selesai.
// 2️⃣ Cleanup Function → Opsional. Digunakan untuk membersihkan efek ketika komponen di-unmount atau dependency berubah.
// 3️⃣ Dependency Array ([]) → Opsional. Berisi daftar nilai yang akan menentukan kapan efek harus dijalankan ulang.



// 🔹 Contoh Penggunaan useEffect
// 1️⃣ Tanpa Dependency Array (Dijalankan pada Setiap Render)

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Komponen dirender ulang!");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default App;

// ✅ Efek akan dijalankan setiap kali komponen dirender ulang (termasuk saat state berubah).



// 2️⃣ Dengan Dependency Array Kosong [] (Dijalankan Hanya Sekali)

useEffect(() => {
  console.log("Efek ini hanya dijalankan sekali!");
}, []);

// ✅ Efek hanya dijalankan sekali saat komponen pertama kali dimount (seperti componentDidMount).


// 3️⃣ Dengan Dependency Tertentu (Dijalankan Saat Dependency Berubah)

useEffect(() => {
  console.log(`Count berubah menjadi: ${count}`);
}, [count]);

// ✅ Efek hanya akan dijalankan ketika count berubah.



// 🔹 Contoh Kasus Penggunaan useEffect
// 1️⃣ Fetch Data dari API

import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

// ✅ Mengambil data dari API saat komponen pertama kali dirender ([] dependency array kosong).


// 2️⃣ Mengupdate Title Halaman

import { useState, useEffect } from "react";

function TitleChanger() {
  const [title, setTitle] = useState("React App");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

export default TitleChanger;

// ✅ Mengubah title halaman saat title berubah.


// 3️⃣ Event Listener dengan Cleanup Function

import { useEffect, useState } from "react";

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <p>Mouse Position: {position.x}, {position.y}</p>
  );
}

export default MouseTracker;

// ✅ Menambahkan event listener saat komponen dimount dan menghapusnya saat komponen di-unmount untuk mencegah memory leak.




// 4️⃣ Interval dan Timeout dengan Cleanup Function

import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Waktu: {count} detik</p>;
}

export default Timer;


// ✅ Menggunakan setInterval dan membersihkannya saat komponen di-unmount.


// 🔹 Kesalahan Umum dalam useEffect

// 1️⃣ Tidak Menyediakan Dependency Array

useEffect(() => {
  console.log("Efek ini berjalan setiap render!");
});

// ❌ Akan berjalan setiap kali komponen dirender ulang (boros performa).

// ✅ Solusi: Tambahkan dependency array jika hanya ingin dijalankan sekali:

useEffect(() => {
  console.log("Efek hanya berjalan sekali!");
}, []);




// 2️⃣ Tidak Membersihkan Efek (Memory Leak)

useEffect(() => {
  window.addEventListener("resize", () => {
    console.log("Resize event!");
  });
}, []);

// ❌ Event listener tidak dihapus saat komponen di-unmount, menyebabkan memory leak.

// ✅ Solusi: Tambahkan cleanup function:

useEffect(() => {
  const handleResize = () => console.log("Resize event!");
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);



// 🚀 Kesimpulan
// ✅ useEffect digunakan untuk mengelola efek samping dalam komponen React.
// ✅ Dapat dijalankan sekali ([]), setiap kali render ulang (tanpa dependency array), atau saat dependency berubah ([var]).
// ✅ Gunakan cleanup function untuk membersihkan efek yang tidak dibutuhkan agar menghindari memory leak.
// ✅ Penting untuk memahami dependency array agar efek tidak berjalan secara berlebihan.

// 🔹 Dengan memahami useEffect, kita bisa membangun aplikasi React yang lebih efisien dan responsif! 🚀
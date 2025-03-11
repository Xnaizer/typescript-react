// React Components: Penjelasan Lengkap dan Detail
// Apa Itu Components di React?
// Component adalah elemen fundamental dalam React yang memungkinkan kita membangun UI dengan cara yang modular, reusable, dan terstruktur.

// Sebuah component bisa berupa elemen kecil seperti tombol (Button) atau bisa juga berupa bagian besar seperti navbar, sidebar, atau halaman penuh.

// 1️⃣ Jenis-Jenis Components di React
// React memiliki dua jenis utama components:

// Functional Component (Modern, lebih sering digunakan)
// Class Component (Versi lama, masih digunakan dalam beberapa kasus)

// 2️⃣ Functional Component (Komponen Fungsional)
// ✅ Definisi:
// Functional Component adalah komponen berbasis fungsi yang hanya berupa fungsi JavaScript yang mengembalikan JSX.

// 📌 Ciri-ciri Functional Component:

// Ditulis sebagai fungsi JavaScript biasa
// Menggunakan arrow function atau function biasa
// Mengembalikan JSX
// Bisa menggunakan React Hooks seperti useState dan useEffect
// 📌 Contoh Functional Component

function Greeting() {
    return <h1>Hello, React!</h1>;
  }
  
  export default Greeting;


//   Atau dengan Arrow Function:

const Greeting = () => {
    return <h1>Hello, React!</h1>;
  };
  
  export default Greeting;

//   💡 Cara Menggunakan di Komponen Lain:
//   Kita bisa memanggil Greeting dalam komponen lain seperti ini:

import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;



// 3️⃣ Class Component (Komponen Kelas)
// ✅ Definisi:
// Class Component adalah komponen berbasis kelas (OOP) yang menggunakan ES6 Class.

// 📌 Ciri-ciri Class Component:

// Ditulis dengan class
// Harus memiliki render() method untuk mengembalikan JSX
// Menggunakan state berbasis objek
// Harus menggunakan this untuk mengakses properti dan metode
// 📌 Contoh Class Component

import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Greeting;

// 💡 Cara Menggunakan di Komponen Lain:


import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
// 🚀 Class Component mulai jarang digunakan setelah React Hooks diperkenalkan di React 16.8.



// Penjelasan Class Component
// 1️⃣ Struktur Class Component

import React, { Component } from "react"; // Mengimpor React dan Component

// Membuat Class Component
class Greeting extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

export default Greeting;
📌 Penjelasan:

// class Greeting extends Component → Membuat komponen dengan class ES6 yang mewarisi (extends) fitur Component dari React.
// render() → Method wajib yang harus ada dalam Class Component untuk mengembalikan JSX.
// export default Greeting; → Agar bisa digunakan di komponen lain.
// 💡 Cara Menggunakannya:


import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;


// ! class components sekarang jarang digunakan, gunakan hooks dan functional components!!
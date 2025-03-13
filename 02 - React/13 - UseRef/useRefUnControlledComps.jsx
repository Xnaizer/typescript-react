// 📌 Uncontrolled Components di React (Panduan Lengkap)
// Selain Controlled Components, ada juga Uncontrolled Components dalam React. Uncontrolled Components adalah elemen form yang dikelola langsung oleh DOM, bukan oleh state React.

// 🏆 1. Apa Itu Uncontrolled Components?
// Dalam Uncontrolled Components, nilai input tidak dikontrol oleh state React, melainkan langsung diakses dari DOM menggunakan useRef.

// 💡 Perbedaan dengan Controlled Components:

// Perbandingan	Controlled Components	Uncontrolled Components
// Data Disimpan di	State React (useState)	DOM langsung (useRef)
// Cara Mengakses Data	state dan onChange handler	ref.current.value
// Performa	Bisa lebih lambat, karena setiap perubahan state menyebabkan re-render	Bisa lebih cepat karena tidak menyebabkan re-render

// Cocok Untuk	Input yang sering berubah, validasi real-time	Form besar atau elemen yang jarang diakses


// 🎯 2. Contoh Uncontrolled Component
// Dalam Uncontrolled Components, kita menggunakan useRef untuk mengambil nilai input saat dibutuhkan.

// 💡 Contoh Uncontrolled Component dengan Input Text


import { useRef } from "react";

function App() {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nama yang dimasukkan:", nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Masukkan nama" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;


// 🔹 Penjelasan:

// useRef(null) digunakan untuk membuat referensi ke input.
// ref={nameRef} menghubungkan input dengan referensi.
// Saat form dikirim, kita mengambil nilai dengan nameRef.current.value.


// 🏆 3. Mengelola Banyak Input dengan Uncontrolled Components
// Jika form memiliki banyak input, kita bisa menggunakan beberapa useRef.

// 💡 Contoh Form dengan Banyak Input


import { useRef } from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nama:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Nama" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;


// 🔹 Penjelasan:

// Setiap input memiliki ref yang berbeda.
// Saat form dikirim, nilai diambil dari ref.current.value.

// 🎯 4. Checkbox & Radio dalam Uncontrolled Components
// 💡 Contoh Checkbox Uncontrolled


import { useRef } from "react";

function App() {
  const agreeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkbox dipilih:", agreeRef.current.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" ref={agreeRef} /> Saya setuju
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;


// 🔹 Penjelasan:

// agreeRef.current.checked digunakan untuk mendapatkan status checkbox (true atau false).

// 💡 Contoh Radio Button Uncontrolled


import { useRef } from "react";

function App() {
  const genderRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gender yang dipilih:", genderRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="radio" name="gender" value="Laki-laki" ref={genderRef} /> Laki-laki
      </label>
      <label>
        <input type="radio" name="gender" value="Perempuan" ref={genderRef} /> Perempuan
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

// 🔹 Masalah: Pada contoh di atas, ref hanya akan menangkap nilai terakhir dari radio button, sehingga tidak berfungsi dengan benar.

// 🔹 Solusi: Kita bisa menggunakan document.querySelector untuk menangkap radio button yang dipilih.


const handleSubmit = (e) => {
  e.preventDefault();
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  console.log("Gender yang dipilih:", selectedGender ? selectedGender.value : "Tidak ada");
};


// 🏆 5. Select (Dropdown) dalam Uncontrolled Components
// Dropdown juga bisa dikendalikan tanpa state React.

// 💡 Contoh Select Uncontrolled


import { useRef } from "react";

function App() {
  const fruitRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buah yang dipilih:", fruitRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select ref={fruitRef}>
        <option value="Apel">Apel</option>
        <option value="Mangga">Mangga</option>
        <option value="Jeruk">Jeruk</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;


// 🔹 Penjelasan:

// fruitRef.current.value menangkap nilai yang dipilih saat submit.


// 🎯 6. Reset Form dengan Uncontrolled Components
// Jika ingin mereset form, kita bisa mengakses ref.current.value dan mengosongkannya.

// 💡 Contoh Reset Form


import { useRef } from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nama:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    
    // Reset nilai input
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Nama" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;


// 🔹 Penjelasan:
// nameRef.current.value = "" menghapus input setelah submit.



// ✅ Gunakan Uncontrolled Components jika ingin performa lebih cepat dan form yang hanya digunakan sekali (seperti form pencarian atau login). 🚀
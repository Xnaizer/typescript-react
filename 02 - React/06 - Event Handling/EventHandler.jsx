// 📌 Event Handling di React: Panduan Lengkap
// Event handling di React mirip dengan event handling di JavaScript biasa, tetapi memiliki beberapa perbedaan penting. Di React, event ditangani menggunakan sintaks JSX dan mengikuti pola tertentu.

// 🔥 1. Perbedaan Event Handling di React vs JavaScript Murni
// Fitur	JavaScript Murni	React
// Menambahkan Event	element.addEventListener("click", function)	onClick={() => {}}
// Penulisan Nama Event	"onclick" (huruf kecil semua)	onClick (CamelCase)
// Menggunakan this	Harus menggunakan .bind(this) dalam class component	Tidak perlu .bind(this) jika menggunakan arrow function
// Default Behavior	Harus panggil event.preventDefault() manual	Tetap harus panggil event.preventDefault(), tapi event React adalah synthetic event


// 🎯 2. Event Handling Dasar di React
// Di React, kita bisa menggunakan event handler dengan cara berikut:

// ✨ Contoh: Event Handling dengan onClick

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default App;

// 🔹 Penjelasan:

// Event onClick dipanggil dengan fungsi panah.
// setCount(count + 1) memperbarui state count.


// 🚀 3. Jenis-Jenis Event di React
// React mendukung berbagai event yang mirip dengan DOM Events di JavaScript, seperti:

// Event	Keterangan	Contoh
// onClick	Ketika elemen diklik	<button onClick={handleClick}>Click</button>
// onChange	Ketika input berubah	<input onChange={handleChange} />
// onSubmit	Saat form dikirim	<form onSubmit={handleSubmit}>
// onMouseEnter	Saat mouse masuk ke elemen	<div onMouseEnter={handleHover}>
// onMouseLeave	Saat mouse keluar dari elemen	<div onMouseLeave={handleLeave}>
// onKeyDown	Saat tombol keyboard ditekan	<input onKeyDown={handleKeyPress} />
// onKeyUp	Saat tombol keyboard dilepas	<input onKeyUp={handleKeyUp} />
// onFocus	Saat input mendapatkan fokus	<input onFocus={handleFocus} />
// onBlur	Saat input kehilangan fokus	<input onBlur={handleBlur} />



// 🔥 4. Menggunakan Event Handler dengan Fungsi
// Kita bisa menggunakan fungsi terpisah untuk event handler agar kode lebih bersih.

// ✨ Contoh: Fungsi Terpisah

function App() {
    const handleClick = () => {
      alert("Button diklik!");
    };
  
    return (
      <button onClick={handleClick}>Klik Saya</button>
    );
  }
  
  export default App;

  


//   💡 Keuntungan:

// Kode lebih rapi.
// Bisa digunakan ulang.
// 🎭 5. Menggunakan Parameter dalam Event Handler
// Kadang kita butuh meneruskan parameter ke event handler.

// ✨ Contoh: Meneruskan Parameter

function App() {
    const handleClick = (name) => {
      alert(`Halo, ${name}!`);
    };
  
    return (
      <button onClick={() => handleClick("Alice")}>Klik Saya</button>
    );
  }
  
  export default App;
  


//   🔹 Penjelasan:

// Menggunakan arrow function di dalam onClick agar bisa meneruskan parameter.
// 🎯 6. Event onChange pada Input
// Event onChange sering digunakan dalam form untuk mendapatkan nilai input.

// ✨ Contoh: Input Text

import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Input: {text}</p>
    </div>
  );
}

export default App;



// Penjelasan:

// e.target.value mengambil nilai input saat berubah.
// 🔄 7. Mencegah Default Behavior (event.preventDefault)
// Kadang kita ingin mencegah perilaku bawaan browser, seperti submit form.

// ✨ Contoh: Mencegah Refresh Saat Submit Form



function App() {
    const handleSubmit = (e) => {
      e.preventDefault(); // Mencegah reload halaman
      alert("Form berhasil dikirim!");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default App;

  


//   🎭 8. Event onKeyDown untuk Tangkap Keyboard Input
//   Event onKeyDown berguna untuk menangkap tombol keyboard yang ditekan.
  
//   ✨ Contoh: Menangkap Tombol Enter'


function App() {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        alert("Tombol Enter ditekan!");
      }
    };
  
    return <input type="text" onKeyDown={handleKeyDown} placeholder="Tekan Enter" />;
  }
  
  export default App;
  

//   Penjelasan:

//   e.key === "Enter" akan memeriksa apakah tombol yang ditekan adalah Enter.
//   📌 9. Event onMouseEnter dan onMouseLeave
//   Event ini digunakan untuk menangkap saat mouse masuk atau keluar dari elemen.
  
//   ✨ Contoh: Hover Efek
  
  import { useState } from "react";
  
  function App() {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`p-4 w-48 text-center ${isHovered ? "bg-green-500" : "bg-gray-300"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover saya!
      </div>
    );
  }
  
  export default App;


//   Penjelasan:

//   onMouseEnter → Saat mouse masuk, ubah state jadi true.
//   onMouseLeave → Saat mouse keluar, ubah state jadi false.
//   📝 Kesimpulan
//   Event di React ditulis dalam CamelCase (onClick, onChange, dll).
//   Handler bisa dibuat langsung dalam JSX atau menggunakan fungsi terpisah.
//   Bisa meneruskan parameter ke event handler dengan arrow function.
//   Gunakan e.preventDefault() untuk mencegah perilaku default browser.
//   Gunakan e.target.value untuk mengambil nilai dari input.
//   Ada banyak event lain seperti onMouseEnter, onKeyDown, dll.

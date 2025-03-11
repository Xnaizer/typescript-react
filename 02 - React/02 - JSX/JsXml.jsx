// Apa Itu JSX?
// JSX (JavaScript XML) adalah ekstensi sintaks untuk JavaScript yang digunakan dalam React. JSX memungkinkan kita menulis kode yang mirip dengan HTML di dalam file JavaScript.

// JSX bukan bagian dari JavaScript itu sendiri, tetapi dikompilasi oleh Babel menjadi kode JavaScript murni sebelum dieksekusi oleh browser.



// 1️⃣ Mengapa Menggunakan JSX?
// JSX digunakan karena beberapa alasan utama:
// ✅ Lebih Mudah Dibaca → Kode lebih bersih dan mirip dengan HTML.
// ✅ Lebih Deklaratif → Struktur UI terlihat lebih jelas.
// ✅ Meningkatkan Performa → React mengoptimalkan rendering dengan JSX.
// ✅ Mencegah XSS (Cross-Site Scripting) → JSX secara default aman dari injeksi script.


// 2️⃣ Sintaks Dasar JSX
// 📌 Contoh JSX Dasar

const element = <h1>Hello, World!</h1>;

// Di atas, element adalah sebuah elemen React yang menggunakan JSX. JSX ini nantinya akan dikonversi menjadi JavaScript murni seperti berikut:


const element = React.createElement("h1", null, "Hello, World!");

// Hasil akhirnya adalah elemen <h1> yang ditampilkan di halaman web.



// 3️⃣ JSX vs. JavaScript Murni
// Tanpa JSX, kita harus menulis kode seperti ini:


const element = React.createElement("h1", null, "Hello, World!");

// ReactDOM.render(element, document.getElementById("root"));
// Sedangkan dengan JSX, kode menjadi lebih ringkas dan mudah dibaca:


const element = <h1>Hello, World!</h1>;

// ReactDOM.render(element, document.getElementById("root"));
// JSX memungkinkan kita menulis kode yang lebih mirip HTML, tetapi tetap dalam lingkungan JavaScript.



// 4️⃣ Aturan Penulisan JSX
// 1. JSX Harus Menggunakan Satu Elemen Pembungkus (Parent Element)
// JSX hanya dapat mengembalikan satu elemen utama. Jika kita ingin mengembalikan beberapa elemen, kita harus membungkusnya dalam satu elemen div atau Fragment.

// ✅ Benar:


return (
  <div>
    <h1>Halo</h1>
    <p>Selamat datang di React!</p>
  </div>
);
// Atau menggunakan Fragment (lebih ringan dari div):


return (
  <>
    <h1>Halo</h1>
    <p>Selamat datang di React!</p>
  </>
);


// ❌ Salah:


return (
  <h1>Halo</h1>
  <p>Selamat datang di React!</p>
);
// (JSX hanya boleh mengembalikan satu elemen utama)



// 2. JSX Menggunakan camelCase untuk Atribut HTML
// JSX menggunakan camelCase untuk menulis atribut HTML karena JSX tetap berada di dalam JavaScript.

// ✅ Benar:

<input type="text" className="input-field" />
<button onClick={handleClick}>Klik Saya</button>

// ❌ Salah:

<input type="text" class="input-field" />
<button onclick="handleClick()">Klik Saya</button>

// class menjadi className
// onclick menjadi onClick



// 3. Menyisipkan JavaScript di Dalam JSX
// Kita bisa menggunakan {} untuk menyisipkan JavaScript di dalam JSX.

// ✅ Contoh:


const name = "React";
return <h1>Halo, {name}!</h1>;

// (JSX akan menggantikan {name} dengan isi variabelnya)

// Kita juga bisa melakukan operasi langsung di dalam {}:


const angka = 5;
return <p>Hasil: {angka * 2}</p>;

// (JSX akan menggantikan {angka * 2} dengan hasil perhitungannya)



// 4. JSX Bisa Menggunakan Ternary Operator untuk Kondisional
// JSX tidak bisa menggunakan if langsung, tetapi bisa menggunakan ternary operator (? :).

// ✅ Contoh:


const isLoggedIn = true;
return <h1>{isLoggedIn ? "Selamat Datang!" : "Silakan Login"}</h1>;

// ❌ Salah:

if (isLoggedIn) {
  return <h1>Selamat Datang!</h1>;
} else {
  return <h1>Silakan Login</h1>;
}
// (JSX tidak bisa menggunakan if langsung)



// 5. JSX Bisa Menggunakan Array untuk Menampilkan List
// Jika ingin menampilkan daftar elemen, kita bisa menggunakan .map().

// ✅ Contoh:


const users = ["Alice", "Bob", "Charlie"];
return (
  <ul>
    {users.map((user, index) => (
      <li key={index}>{user}</li>
    ))}
  </ul>
);
// key={index} → Setiap elemen dalam daftar harus memiliki key unik untuk menghindari masalah rendering.

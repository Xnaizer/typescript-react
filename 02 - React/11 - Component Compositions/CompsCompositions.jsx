// 📌 Component Composition di React: Konsep, Manfaat, dan Implementasi Lengkap
// 🔹 Apa Itu Component Composition?
// Component Composition dalam React adalah teknik menggabungkan beberapa komponen kecil untuk membentuk komponen yang lebih kompleks. Konsep ini mengikuti prinsip komposisi dibandingkan pewarisan (Composition Over Inheritance).

// Dalam pendekatan ini, kita menggunakan kembali komponen yang sudah ada dengan menyusunnya secara fleksibel, sehingga kode lebih modular, mudah dipahami, dan dikelola.


// 🔹 Kenapa Component Composition Penting?
// ✅ Reusability (Dapat Digunakan Kembali) → Menghindari duplikasi kode dengan membuat komponen yang bisa digunakan di berbagai bagian aplikasi.
// ✅ Modularity (Modularitas) → Setiap komponen memiliki tanggung jawab spesifik, sehingga lebih mudah diperbaiki dan diperbarui.
// ✅ Flexibility (Fleksibilitas) → Komponen bisa digunakan dengan berbagai cara tanpa harus mengubah strukturnya.
// ✅ Easier to Maintain (Lebih Mudah Dikelola) → Aplikasi lebih terorganisir karena terdiri dari komponen kecil yang terpisah daripada satu komponen besar.


// 🔹 Cara Menggunakan Component Composition
// Ada beberapa teknik utama dalam Component Composition di React:

// Menggunakan Props untuk Komposisi
// Children Props untuk Menyusun Elemen Secara Fleksibel
// Render Props untuk Komposisi yang Dinamis
// Higher-Order Components (HOC) untuk Komposisi Reusable
// Context API untuk Komposisi State Global


// 1️⃣ Menggunakan Props untuk Komposisi
// Kita bisa membuat komponen reusable dengan meneruskan data melalui props.

// 🛑 Tanpa Component Composition (Duplikasi Kode)

function CardUserA() {
    return (
      <div className="p-4 border">
        <h3>Nama: Alice</h3>
        <p>Umur: 25</p>
      </div>
    );
  }
  
  function CardUserB() {
    return (
      <div className="p-4 border">
        <h3>Nama: Bob</h3>
        <p>Umur: 30</p>
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        <CardUserA />
        <CardUserB />
      </div>
    );
  }
  
  export default App;

// ❌ Masalah:

// Terlalu banyak kode yang duplikatif karena kita menulis dua komponen yang hampir sama.
// ✅ Dengan Component Composition (Menggunakan Props)
function CardUser({ name, age }) {
    return (
      <div className="p-4 border">
        <h3>Nama: {name}</h3>
        <p>Umur: {age}</p>
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        <CardUser name="Alice" age={25} />
        <CardUser name="Bob" age={30} />
      </div>
    );
  }
  
  export default App;

//   ✅ Keuntungan:

//   Komponen CardUser lebih fleksibel karena menerima data dari props.
//   Lebih sedikit kode duplikatif, sehingga lebih mudah dirawat dan digunakan kembali.

  
//   2️⃣ Menggunakan children Props untuk Menyusun Elemen Secara Fleksibel
//   Kadang, kita ingin membuat komponen yang bisa berisi elemen lain yang tidak kita tentukan sebelumnya. Untuk ini, kita bisa menggunakan props.children.
  
//   ✅ Contoh: Menggunakan children
function Card({ children }) {
    return <div className="p-4 border">{children}</div>;
  }
  
  function App() {
    return (
      <div>
        <Card>
          <h3>Nama: Alice</h3>
          <p>Umur: 25</p>
        </Card>
        <Card>
          <h3>Nama: Bob</h3>
          <p>Umur: 30</p>
        </Card>
      </div>
    );
  }
  
  export default App;

//   ✅ Keuntungan:

//   Fleksibel → Kita bisa memasukkan elemen apa saja ke dalam Card.
//   Tidak terbatas hanya pada teks atau angka, tetapi juga bisa berisi komponen lain, gambar, tombol, dll.\


//   3️⃣ Menggunakan Render Props untuk Komposisi yang Dinamis
//   Render Props memungkinkan kita untuk mengirimkan fungsi sebagai prop ke komponen lain, yang kemudian dipanggil untuk menentukan bagaimana UI harus dirender.
  
//   ✅ Contoh: Menggunakan Render Props

function DataFetcher({ render }) {
    const data = ["Alice", "Bob", "Charlie"];
    return <div>{render(data)}</div>;
  }
  
  function App() {
    return (
      <DataFetcher
        render={(data) => (
          <ul>
            {data.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
      />
    );
  }
  
  export default App;

//   ✅ Keuntungan:

//   Sangat fleksibel → Komponen bisa berubah tergantung fungsi yang diberikan.
//   Tidak terikat pada satu cara tampilan tertentu.


//   4️⃣ Higher-Order Components (HOC) untuk Komposisi Reusable
//   Higher-Order Components (HOC) adalah fungsi yang menerima komponen dan mengembalikan komponen baru dengan tambahan fitur.
  
//   ✅ Contoh: Higher-Order Component (HOC)

function withBorder(WrappedComponent) {
    return function EnhancedComponent(props) {
      return (
        <div className="p-4 border">
          <WrappedComponent {...props} />
        </div>
      );
    };
  }
  
  function User({ name }) {
    return <h3>Nama: {name}</h3>;
  }
  
  const UserWithBorder = withBorder(User);
  
  function App() {
    return <UserWithBorder name="Alice" />;
  }
  
  export default App;

  ✅ Keuntungan:

//   Menghindari kode duplikatif saat ingin menambahkan fitur ke banyak komponen.
//   Komponen tetap reusable dan modular.


//   5️⃣ Context API untuk Komposisi State Global
//   Jika kita perlu berbagi state ke banyak komponen tanpa harus meneruskan props secara manual, kita bisa menggunakan Context API.
  
//   ✅ Contoh: Menggunakan Context API


import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Tombol</button>;
}

function App() {
  const [theme, setTheme] = useState("bg-blue-500 text-white");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

export default App;



// ✅ Keuntungan:

// Menghindari props drilling (meneruskan props terlalu dalam ke banyak komponen).
// State bisa digunakan oleh banyak komponen tanpa harus dikirim satu per satu.
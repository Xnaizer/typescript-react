// 📌 Panduan Lengkap Conditional Rendering di React
// Conditional Rendering di React adalah teknik untuk menampilkan elemen atau komponen berdasarkan kondisi tertentu. Dengan kata lain, kita bisa menentukan apakah suatu elemen atau komponen ditampilkan atau tidak, bergantung pada nilai dari suatu state atau prop.


// 🔥 1. Cara Conditional Rendering di React
// Ada beberapa cara utama untuk melakukan Conditional Rendering di React:

// Menggunakan if Statement
// Menggunakan Ternary Operator (? :)
// Menggunakan Logical AND (&&)
// Menggunakan Logical OR (||)
// Menggunakan IIFE (Immediately Invoked Function Expression)
// Menggunakan Short Circuit (?? - Nullish Coalescing)
// Menggunakan Switch Case
// Menggunakan Component Khusus



// 🎯 2. Menggunakan if Statement
// Kita bisa menggunakan if untuk menentukan apakah sebuah elemen harus ditampilkan atau tidak.

// Contoh 1: Menggunakan if dalam fungsi

function App() {
    const isLoggedIn = false;
  
    if (isLoggedIn) {
      return <h1>Selamat datang, Pengguna!</h1>;
    } else {
      return <h1>Silakan Login</h1>;
    }
  }
  
  export default App;
  


//   🔹 Penjelasan:

//   Jika isLoggedIn bernilai true, maka akan menampilkan "Selamat datang, Pengguna!".
//   Jika isLoggedIn bernilai false, akan menampilkan "Silakan Login".
//   🏆 3. Menggunakan Ternary Operator (? :)
//   Ternary operator (? :) adalah cara yang lebih ringkas dibandingkan dengan if-else.
  
//   Contoh 2: Menggunakan Ternary Operator


function App() {
    const isLoggedIn = true;
  
    return (
      <div>
        <h1>{isLoggedIn ? "Selamat datang!" : "Silakan Login"}</h1>
      </div>
    );
  }
  
  export default App;

  
//   🎯 4. Menggunakan Logical AND (&&)
//   Jika kita hanya ingin menampilkan sesuatu saat kondisi true, kita bisa menggunakan &&.
  
//   Contoh 3: Menggunakan Logical AND (&&)


function App() {
    const isAdmin = true;
  
    return (
      <div>
        <h1>Dashboard</h1>
        {isAdmin && <button>Manage Users</button>}
      </div>
    );
  }
  
  export default App;

  
//   🔹 Penjelasan:

//   Jika isAdmin bernilai true, maka tombol "Manage Users" akan muncul.
//   Jika isAdmin false, maka tombol tidak akan ditampilkan.
//   🎭 5. Menggunakan Logical OR (||)
//   Logical OR (||) bisa digunakan untuk menampilkan default value jika kondisi false.
  
//   Contoh 4: Menggunakan Logical OR (||)

function App() {
    const username = "";
  
    return (
      <h1>Halo, {username || "Guest"}</h1>
    );
  }
  
  export default App;


//   🔹 Penjelasan:

//   Jika username kosong (""), maka akan menampilkan "Halo, Guest".
//   Jika username berisi nilai, maka akan menampilkan nama pengguna.
//   ⚡ 6. Menggunakan Immediately Invoked Function Expression (IIFE)
//   Kadang kita butuh kondisi yang lebih kompleks. Bisa gunakan IIFE.
  
//   Contoh 5: Menggunakan IIFE

function App() {
    const isLoggedIn = true;
  
    return (
      <div>
        {(() => {
          if (isLoggedIn) {
            return <h1>Selamat datang!</h1>;
          } else {
            return <h1>Silakan Login</h1>;
          }
        })()}
      </div>
    );
  }
  
  export default App;

  
//   🔹 Penjelasan:

//   Kita membuat fungsi anonim (IIFE) untuk menangani kondisi yang lebih kompleks.


// 🔥 7. Menggunakan Short Circuit (?? - Nullish Coalescing)
// Short Circuit ?? mirip dengan ||, tetapi hanya bekerja pada null atau undefined.

// Contoh 6: Menggunakan Nullish Coalescing (??)

function App() {
    const username = null;
  
    return (
      <h1>Halo, {username ?? "Guest"}</h1>
    );
  }
  
  export default App;

  
//   🔹 Penjelasan:

//   Jika username adalah null atau undefined, maka akan menampilkan "Halo, Guest".
//   Jika username ada nilainya, maka akan menampilkan nama pengguna. 


// 🎯 8. Menggunakan Switch Case
// Jika ada banyak kondisi, kita bisa menggunakan switch-case.

// Contoh 7: Menggunakan switch-case

function App() {
    const status = "loading"; // loading, success, error
  
    function renderMessage() {
      switch (status) {
        case "loading":
          return <p>Loading...</p>;
        case "success":
          return <p>Data berhasil dimuat!</p>;
        case "error":
          return <p>Terjadi kesalahan!</p>;
        default:
          return <p>Tidak ada status</p>;
      }
    }
  
    return (
      <div>
        {renderMessage()}
      </div>
    );
  }
  
export default App;


// 🔹 Penjelasan:

// switch-case menangani beberapa kondisi dengan lebih rapi dibanding if-else.


// 🎯 9. Menggunakan Component Khusus
// Kita bisa memecah conditional rendering ke dalam komponen terpisah.

// Contoh 8: Menggunakan Komponen Khusus


function Message({ isLoggedIn }) {
    if (isLoggedIn) {
      return <h1>Selamat Datang!</h1>;
    }
    return <h1>Silakan Login</h1>;
  }
  
  function App() {
    return <Message isLoggedIn={true} />;
  }
  
  export default App;

  
  
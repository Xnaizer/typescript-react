// Props & Children di React: Penjelasan Lengkap dan Detail
// 1️⃣ Apa Itu Props di React?
// Props (singkatan dari "properties") adalah data yang dikirim dari parent component ke child component.

// 📌 Ciri-ciri Props:
// ✅ Bersifat read-only (tidak bisa diubah oleh child component)
// ✅ Bisa berupa string, number, boolean, object, array, function, atau bahkan komponen lain
// ✅ Membantu membuat komponen menjadi reusable dan dinamis

// 💡 Analogi Props:
// Bayangkan props seperti kotak hadiah yang dikirim dari parent component ke child component. Isi kotak bisa berbeda-beda tergantung pengirimnya.


// 2️⃣ Cara Menggunakan Props
// 📌 Contoh Props dalam Functional Component

const Greeting = (props) => {
    return <h1>Hello, {props.name}!</h1>;
  };
  
  export default Greeting;

// 📌 Penjelasan:

// props.name → Mengakses nilai name yang dikirim oleh parent component.
// 💡 Cara Memanggil Komponen dengan Props:

import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default App;

// 📌 Output:

Hello, Alice!
Hello, Bob!



// 3️⃣ Destructuring Props
// Kita bisa menggunakan destructuring untuk mengambil props dengan lebih rapi.

// 🔹 Tanpa Destructuring:


const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// 🔹 Dengan Destructuring:

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// 💡 Hasilnya tetap sama, tetapi lebih singkat dan bersih!


// 4️⃣ Props dengan Default Value
// Terkadang, kita ingin memberikan nilai default jika props tidak dikirim dari parent.

// 🔹 Menggunakan Default Props


const Greeting = ({ name = "Guest" }) => {
  return <h1>Hello, {name}!</h1>;
};

// 📌 Jika tidak ada name, maka Guest akan digunakan sebagai default.



// 4️⃣ Props dengan Default Value
// Terkadang, kita ingin memberikan nilai default jika props tidak dikirim dari parent.

// 🔹 Menggunakan Default Props


const Greeting = ({ name = "Guest" }) => {
  return <h1>Hello, {name}!</h1>;
};

// 📌 Jika tidak ada name, maka Guest akan digunakan sebagai default.



// 5️⃣ Props dengan Tipe Data Berbeda
// Props bisa menerima berbagai tipe data, seperti string, number, boolean, object, array, function, atau bahkan komponen lain.

// 🔹 Menggunakan Props dengan Object & Array


const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
};
// 💡 Cara Menggunakannya:


const userInfo = { name: "Alice", age: 25 };

function App() {
  return <UserProfile user={userInfo} />;
}

// 📌 Output:


Alice
Age: 25




// 🔹 Children di React
// 1️⃣ Apa Itu children di React?
// children adalah isi yang ditempatkan di antara tag pembuka dan penutup sebuah komponen.

// 📌 Kapan Menggunakan children?
// ✅ Jika kita ingin menyisipkan elemen dinamis ke dalam sebuah komponen
// ✅ Memungkinkan komponen menjadi lebih fleksibel
// ✅ Berguna untuk membungkus elemen lain, seperti modal, card, layout, atau button dengan konten variatif



// 2️⃣ Contoh Penggunaan children
// 🔹 Tanpa children (Menggunakan Props Biasa)

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// 💡 Dipanggil seperti ini:

<Card title="React" description="Library JavaScript untuk UI" />
// 📌 Masalah:
// Komponen ini hanya bisa menerima teks melalui props, tidak bisa menerima elemen lain.








// 🔹 Dengan children (Lebih Fleksibel)


const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};


// 💡 Cara Menggunakannya:

<Card>
  <h2>React</h2>
  <p>Library JavaScript untuk UI</p>
</Card>

// 📌 Keuntungan children:
// ✅ Bisa menyisipkan HTML, JSX, atau komponen lain
// ✅ Tidak terbatas pada teks saja



// 3️⃣ children dengan Komponen Dinamis
// Kita bisa menggunakan children untuk membungkus elemen apapun dengan lebih fleksibel.

// 🔹 Contoh: Membuat Wrapper (Container Component)


const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

// 💡 Cara Menggunakannya:

<Container>
  <h1>Halo!</h1>
  <p>Ini adalah konten di dalam Container.</p>
</Container>

// 📌 Container bisa berisi elemen apapun!



// 4️⃣ children dengan Button (Contoh Praktis)
// 🔹 Tanpa children (Menggunakan Props Biasa)


const Button = ({ text }) => {
  return <button>{text}</button>;
};

// 💡 Dipanggil seperti ini:


<Button text="Click Me" />
// 📌 Masalah:

// Tidak bisa menyisipkan elemen tambahan seperti ikon.
// 🔹 Dengan children (Lebih Fleksibel)


const Button = ({ children }) => {
  return <button>{children}</button>;
};


// 💡 Cara Menggunakannya:

<Button>
  <span>🚀</span> Click Me
</Button>

// 📌 Keuntungan children:
// ✅ Bisa menambahkan ikon, gambar, atau elemen lainnya





// 🔹 Kesimpulan
// ✅ Props digunakan untuk mengirim data dari parent ke child component
// ✅ Props bersifat read-only dan dapat berupa berbagai tipe data
// ✅ Children digunakan untuk menyisipkan elemen di antara tag pembuka dan penutup sebuah komponen
// ✅ Children membuat komponen lebih fleksibel dan reusable

// 🔹 Gunakan props untuk mengirim data spesifik (seperti teks atau angka)
// 🔹 Gunakan children untuk menyisipkan elemen dinamis atau konten kompleks

// 🚀 Sekarang kamu bisa membangun komponen React yang lebih dinamis dan reusable! 🚀








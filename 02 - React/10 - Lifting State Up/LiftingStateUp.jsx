// 📌 Lifting State Up di React: Konsep, Manfaat, dan Implementasi Lengkap
// 🔹 Apa Itu Lifting State Up?
// Lifting State Up adalah konsep dalam React di mana kita memindahkan (mengangkat) state dari komponen anak ke komponen induk agar dapat dibagikan ke beberapa komponen anak lainnya.

// React bekerja dalam satu arah (one-way data flow), yaitu dari parent (induk) ke child (anak). Namun, terkadang kita membutuhkan komunikasi antar komponen anak yang berbeda. Untuk mengatasi ini, kita mengangkat state ke komponen induk agar dapat dikelola di satu tempat dan dibagikan ke banyak komponen anak.



// 🔹 Kapan Kita Membutuhkan Lifting State Up?
// Ketika dua atau lebih komponen anak perlu berbagi data yang sama.
// Jika sebuah komponen induk harus mengontrol data yang berubah di dalam beberapa komponen anak.
// Saat sebuah komponen membutuhkan data dari anaknya untuk mengambil keputusan atau memperbarui UI.



// 📌 Contoh Kasus: Menghubungkan Dua Input dengan Lifting State Up
// Kita akan membuat contoh di mana ada dua input di dua komponen anak yang perlu berbagi nilai yang sama.

// 🛑 Tanpa Lifting State Up (State di dalam Child)


import { useState } from "react";

function InputA() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Input A</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Value: {text}</p>
    </div>
  );
}

function InputB() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Input B</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Value: {text}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <InputA />
      <InputB />
    </div>
  );
}

export default App;


// ❌ Masalah:

// Kedua input memiliki state masing-masing, sehingga nilai tidak sinkron antar komponen.
// Jika kita mengetik di Input A, Input B tidak tahu perubahan tersebut.



// ✅ Dengan Lifting State Up (State di Parent)
// Sekarang, kita akan memindahkan useState ke komponen induk (App) dan membagikannya ke InputA dan InputB.

import { useState } from "react";

function App() {
    const [text, setText] = useState("");
  
    return (
      <div>
        <InputA text={text} setText={setText} />
        <InputB text={text} setText={setText} />
      </div>
    );
}


function InputA({ text, setText }) {
  return (
    <div>
      <h3>Input A</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Value: {text}</p>
    </div>
  );
}

function InputB({ text, setText }) {
  return (
    <div>
      <h3>Input B</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Value: {text}</p>
    </div>
  );
}



export default App;

// ✅ Keuntungan:

// State text sekarang terpusat di komponen App.
// InputA dan InputB menggunakan state yang sama, jadi ketika kita mengetik di salah satu input, input lainnya juga akan terupdate secara otomatis.
// Ini mempermudah sinkronisasi data antar komponen anak.




// 📌 Studi Kasus Lain: Checkbox yang Memengaruhi Beberapa Komponen
// Misalkan kita punya checkbox untuk menampilkan atau menyembunyikan teks di dua komponen anak.

// ✅ Dengan Lifting State Up

import { useState } from "react";

function ChildA({ isVisible }) {
  return <p>{isVisible ? "Teks dari Child A" : ""}</p>;
}

function ChildB({ isVisible }) {
  return <p>{isVisible ? "Teks dari Child B" : ""}</p>;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isVisible}
          onChange={() => setIsVisible(!isVisible)}
        />
        Tampilkan Teks
      </label>
      <ChildA isVisible={isVisible} />
      <ChildB isVisible={isVisible} />
    </div>
  );
}

export default App;


// ✅ Keuntungan:

// Checkbox di App bisa mengontrol beberapa komponen anak.
// State isVisible hanya ada di satu tempat (komponen induk), sehingga lebih mudah dikelola.


// 🔹 Alternatif: Menggunakan Context API untuk State Global
// Jika aplikasi semakin besar dan kita harus berbagi state antar banyak komponen, kita bisa menggunakan Context API alih-alih lifting state up.

// Menggunakan Context API

import { createContext, useContext, useState } from "react";

const TextContext = createContext();

function Input() {
  const { text, setText } = useContext(TextContext);
  return (
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  );
}

function Display() {
  const { text } = useContext(TextContext);
  return <p>Hasil Input: {text}</p>;
}

function App() {
  const [text, setText] = useState("");

  return (
    <TextContext.Provider value={{ text, setText }}>
      <Input />
      <Display />
    </TextContext.Provider>
  );
}

export default App;


// ✅ Keuntungan Context API:

// Tidak perlu meneruskan props secara manual di setiap komponen.
// State bisa diakses dari komponen mana saja dalam Provider.
// Namun, jika hanya beberapa komponen yang berbagi state, lifting state up tetap lebih sederhana dan ringan dibanding Context API.



// 📢 Kapan Harus Menggunakan Lifting State Up?
// ✅ Jika dua atau lebih komponen membutuhkan state yang sama.
// ✅ Jika komponen induk perlu mengontrol data yang digunakan oleh komponen anak.
// ✅ Jika ingin mempermudah sinkronisasi antar komponen.

// Namun, jika banyak komponen perlu berbagi state, gunakan Context API atau state management seperti Redux/Zustand.

// 🚀 Lifting State Up membantu kita menjaga struktur kode lebih bersih, efisien, dan lebih mudah dipahami.
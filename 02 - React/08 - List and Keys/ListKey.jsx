// 📌 Panduan Lengkap List dan Key di React
// List dan Key di React adalah fitur yang digunakan untuk menampilkan data dalam bentuk daftar (array) dan memastikan React dapat mengelola perubahan elemen daftar secara efisien.

// 🔥 1. Apa Itu List di React?
// Dalam React, list adalah kumpulan elemen yang dibuat dengan menggunakan array map() atau metode lain yang bisa mengembalikan daftar elemen JSX.

// 💡 Contoh: Menampilkan daftar item di React

function App() {
    const names = ["Alice", "Bob", "Charlie"];
  
    return (
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    );
  }
  
  export default App;

  
//   ❌ Kesalahan di atas:

//   Tidak ada key dalam elemen <li>, yang akan menyebabkan warning di React.
//   ✅ Perbaikan dengan Key:

function App() {
    const names = ["Alice", "Bob", "Charlie"];
  
    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
  
  export default App;



//   🎯 2. Apa Itu Key di React?
//   Key adalah atribut spesial yang digunakan oleh React untuk mengidentifikasi elemen dalam daftar. Key membantu React menentukan elemen mana yang berubah, ditambahkan, atau dihapus.
  
//   🔹 Mengapa Key Penting?
//   Meningkatkan efisiensi render di React.
//   Menghindari kesalahan dalam list yang berubah.
//   React menggunakan key untuk membandingkan elemen lama dan baru.
//   🏆 3. Cara Menggunakan Key dengan Benar
//   ✅ Gunakan ID yang Unik
//   Jika data memiliki id unik, gunakan itu sebagai key.

function App() {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
    ];
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
  
  export default App;
  

//   🔹 Penjelasan:

// Menggunakan id sebagai key lebih aman dibandingkan index karena id bersifat tetap.
// ❌ 4. Kesalahan yang Harus Dihindari
// ❌ Menggunakan Index sebagai Key (Jika Data Bisa Berubah)


function App() {
    const names = ["Alice", "Bob", "Charlie"];
  
    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
  
  export default App;

  
//   🔴 Masalah:

//   Jika data berubah (misalnya diurutkan ulang atau dihapus), React bisa salah dalam membandingkan elemen.
//   Gunakan index hanya jika daftar statis dan tidak akan berubah.
//   ✅ Gunakan ID jika tersedia.
  
//   🔥 5. Menggunakan Key dalam Component
//   Kadang, kita perlu merender komponen dalam daftar.
  
//   💡 Contoh: List dalam Komponen


function User({ name }) {
    return <li>{name}</li>;
  }
  
  function App() {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
    ];
  
    return (
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  }
  
  export default App;
  

//   🔹 Penjelasan:

// Key harus diberikan di elemen luar (User component), bukan di dalamnya.
// 🎯 6. Menggunakan Key dalam List dengan useState
// Ketika kita menambahkan atau menghapus elemen, key sangat penting untuk memastikan React tidak salah dalam mengelola perubahan.

// 💡 Contoh: Menambah Item ke List dengan useState


import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
  ]);

  const addItem = () => {
    const newItem = { id: Date.now(), text: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={addItem}>Tambah Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// 🔹 Penjelasan:

// Gunakan ID unik (Date.now()) untuk memastikan key selalu berbeda.
// React akan tahu elemen mana yang ditambahkan, dihapus, atau diubah.
// 🏆 7. Menghapus Item dari List dengan useState
// 💡 Contoh: Hapus Item dengan Key

import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" }
  ]);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text} 
            <button onClick={() => removeItem(item.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



// 🔹 Penjelasan:

// Menghapus item berdasarkan id, bukan index untuk menghindari masalah re-render.
// 🔥 8. Key dalam Fragment (<> </>)
// Jika tidak ingin membungkus elemen dalam <div>, gunakan Fragment (<> </>).

// 💡 Contoh: List dalam Fragment


function App() {
    const items = ["Satu", "Dua", "Tiga"];
  
    return (
      <>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </>
    );
  }
  
  export default App;

  
//   🔹 Penjelasan:

//   Fragment (<> </>) digunakan agar tidak menambahkan node ekstra dalam DOM.
//   🎯 Kesimpulan
//   Kesalahan	Solusi
//   Tidak menggunakan key dalam list	Gunakan key unik
//   Menggunakan index sebagai key dalam list yang bisa berubah	Gunakan id unik jika tersedia
//   Memberikan key di dalam component	Key harus diberikan pada elemen luar
//   Tidak menggunakan key saat menambah/menghapus elemen	Gunakan key unik untuk memastikan elemen dikenali dengan benar
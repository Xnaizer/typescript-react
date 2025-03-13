// 📌 Forms dan Controlled Components di React (Panduan Lengkap)
// Dalam React, Forms digunakan untuk menangani input dari pengguna. Ada dua cara utama dalam menangani form:

// Controlled Components → Data dihandle oleh state React.
// Uncontrolled Components → Data dihandle oleh DOM langsung.
// Di sini, kita akan fokus pada Controlled Components, karena ini adalah cara yang lebih direkomendasikan dalam React.



// 🏆 1. Apa Itu Controlled Components?
// Controlled Components adalah input form yang nilainya dikontrol oleh state di React. Artinya, setiap perubahan pada input akan mengupdate state, dan nilai input akan selalu sesuai dengan state React.

// 💡 Contoh Sederhana Controlled Component:


import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <p>Hasil Input: {inputValue}</p>
    </div>
  );
}

export default App;


// 🔹 Penjelasan:

// value={inputValue} → Nilai input dikendalikan oleh state.
// onChange={(e) => setInputValue(e.target.value)} → Saat ada perubahan input, state diperbarui.



// 🎯 2. Mengelola Beberapa Input dalam Form
// Saat membuat form dengan banyak input, kita bisa menggunakan satu state untuk semua input.

// 💡 Contoh: Form dengan Banyak Input

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input 
        type="text" 
        name="name" 
        placeholder="Nama"
        value={formData.name} 
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email"
        value={formData.email} 
        onChange={handleChange} 
      />
      <p>Nama: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default App;

// 🔹 Penjelasan:

// Menggunakan satu state (formData) untuk mengelola banyak input.
// [e.target.name] → Menentukan properti mana yang diperbarui dalam state.



// 🏆 3. Menangani Submit Form
// Saat form dikirim (onSubmit), kita harus mencegah perilaku bawaan browser dengan event.preventDefault().

// 💡 Contoh: Submit Form dengan React

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

// 🔹 Penjelasan:

// handleSubmit digunakan untuk menangani pengiriman form.
// e.preventDefault() mencegah reload halaman.




// 🎯 4. Menangani Input Checkbox
// Checkbox sering digunakan untuk memilih opsi atau menyetujui sesuatu.

// 💡 Contoh: Checkbox dengan Controlled Component


import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Saya setuju dengan syarat dan ketentuan.
      </label>
      <p>Status: {isChecked ? "Disetujui" : "Belum disetujui"}</p>
    </div>
  );
}

export default App;


// 🔹 Penjelasan:

// checked={isChecked} memastikan input dikendalikan oleh state.
// onChange={(e) => setIsChecked(e.target.checked)} memperbarui state saat checkbox diubah.


// 🏆 5. Menangani Input Radio
// Radio button digunakan untuk memilih satu opsi dari beberapa pilihan.

// 💡 Contoh: Radio Button dalam React

import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="Laki-laki"
          checked={gender === "Laki-laki"}
          onChange={(e) => setGender(e.target.value)}
        />
        Laki-laki
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Perempuan"
          checked={gender === "Perempuan"}
          onChange={(e) => setGender(e.target.value)}
        />
        Perempuan
      </label>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default App;



// 🔹 Penjelasan:

// Hanya satu radio button yang bisa dipilih dalam satu name.
// checked={gender === "Laki-laki"} memastikan radio button aktif sesuai state.


// 🎯 6. Menangani Select Dropdown
// Dropdown sering digunakan untuk memilih satu opsi dari banyak pilihan.

// 💡 Contoh: Select Dropdown di React

import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("");

  return (
    <div>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="">Pilih Buah</option>
        <option value="Apel">Apel</option>
        <option value="Jeruk">Jeruk</option>
        <option value="Mangga">Mangga</option>
      </select>
      <p>Buah yang dipilih: {fruit}</p>
    </div>
  );
}

export default App;


// 🔹 Penjelasan:

// value={fruit} mengikat state dengan elemen <select>.
// onChange memperbarui state berdasarkan pilihan.


// 🎯 7. Reset Form setelah Submit
// Kita bisa mengosongkan form setelah submit dengan mengatur ulang state.

// 💡 Contoh: Reset Form di React

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Terkirim:", formData);
    setFormData({ name: "", email: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nama" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Kirim</button>
    </form>
  );
}

export default App;







// ✅ Gunakan Controlled Components jika ingin validasi real-time dan UI yang selalu sinkron dengan data.

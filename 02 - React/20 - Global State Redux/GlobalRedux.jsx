// 📌 Global State Management dengan Redux di React (Penjelasan Lengkap)
// Redux adalah state management library yang digunakan dalam React untuk mengelola state aplikasi secara global. Dengan Redux, kita dapat menyimpan data di store global, sehingga dapat diakses oleh berbagai komponen dalam aplikasi tanpa perlu melakukan prop drilling.

// 📍 Konsep Dasar Redux
// Redux bekerja berdasarkan tiga prinsip utama:

// Single Source of Truth (Satu Sumber Data)

// Semua state global disimpan dalam satu store yang menjadi sumber utama data.
// State Hanya Bisa Diubah dengan Action

// Data dalam store hanya bisa diperbarui dengan mengirimkan action, bukan dengan langsung mengubahnya.
// Reducers Harus Pure Function

// Reducer adalah fungsi murni (pure function) yang menerima state lama dan action, lalu mengembalikan state baru tanpa merubah state lama.
// 🔹 Struktur Redux di React
// Redux memiliki 5 komponen utama:

// Store 📦 → Penyimpanan global yang menyimpan seluruh state aplikasi.
// Actions 🎯 → Objek yang mendeskripsikan perubahan data.
// Reducers 🔄 → Fungsi yang menangani perubahan state berdasarkan action.
// Dispatch 🚀 → Fungsi yang digunakan untuk mengirimkan action ke reducer.
// Selectors 🔍 → Fungsi untuk mengambil data dari store.
// ⚡ Implementasi Redux di React (Step by Step)



// 1️⃣ Instalasi Redux Toolkit dan React Redux

// npm install @reduxjs/toolkit react-redux
// atau jika menggunakan Yarn:


// yarn add @reduxjs/toolkit react-redux


// 2️⃣ Buat Store Global
// Buat file store.js di folder redux:


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

// configureStore() digunakan untuk membuat store dengan mudah.
// Store ini akan menyimpan state dari berbagai reducer.
// 3️⃣ Buat Reducer (Slice)
// Buat file counterSlice.js di dalam folder redux:


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

// createSlice() digunakan untuk membuat reducer dengan lebih sederhana.
// increment, decrement, dan incrementByAmount adalah action yang bisa dipanggil dari komponen.
// 4️⃣ Hubungkan Store ke Aplikasi
// Di main.jsx atau index.js, bungkus aplikasi dengan <Provider> agar store tersedia di seluruh aplikasi.


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Provider memastikan bahwa store tersedia di semua komponen React.
// 5️⃣ Menggunakan Redux di Komponen
// Buka App.jsx dan gunakan Redux untuk membaca dan memperbarui state:


import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>
    </div>
  );
}

export default App;

// ✅ Penjelasan:

// useSelector() digunakan untuk mengambil state dari Redux Store.
// useDispatch() digunakan untuk mengirimkan action ke reducer.
// 📍 Keuntungan Menggunakan Redux
// ✅ State Tersentralisasi → Semua state global disimpan dalam satu tempat.
// ✅ Mempermudah Pengelolaan Data → Tidak perlu meneruskan props ke banyak komponen (menghindari prop drilling).
// ✅ Debugging Lebih Mudah → Dengan Redux DevTools, kita bisa melihat perubahan state secara real-time.

// 📌 Kapan Harus Menggunakan Redux?
// Redux cocok digunakan ketika: ✅ Aplikasi memiliki banyak state yang digunakan di berbagai komponen.
// ✅ Banyak komponen yang perlu berkomunikasi dengan data yang sama.
// ✅ Ingin memisahkan logika state dari UI, agar kode lebih bersih.
// ✅ Menghindari prop drilling yang membuat kode sulit dipahami.

// 🔥 Kesimpulan
// Redux memungkinkan pengelolaan state global dalam React.
// Menggunakan store, reducer, action, dan dispatch untuk mengontrol state.
// Redux Toolkit mempermudah implementasi dibanding Redux versi lama.
// Cocok untuk aplikasi skala besar yang memiliki banyak komponen berbagi data.
// 🚀 Dengan Redux, state management menjadi lebih terstruktur dan efisien!

// Jika ada pertanyaan, silakan tanyakan! 🎯
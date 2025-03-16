// Reducer Pattern di React (useReducer) – Penjelasan Lengkap
// 1. Apa Itu Reducer Pattern?
// Reducer Pattern adalah sebuah pola dalam manajemen state yang digunakan untuk menangani perubahan state secara lebih terstruktur. Pola ini sangat berguna saat:

// State memiliki banyak kondisi (contoh: cart di e-commerce).
// State harus diperbarui berdasarkan aksi tertentu (contoh: increment, decrement, toggle).
// Ada banyak aksi yang mempengaruhi satu state.
// Di React, Reducer Pattern biasanya diimplementasikan dengan useReducer, yang merupakan alternatif dari useState dalam mengelola state yang kompleks.

// 2. Bagaimana Reducer Pattern Bekerja?
// Reducer Pattern terdiri dari tiga bagian utama:

// State Awal → State yang akan dikelola.
// Reducer Function → Fungsi yang menangani perubahan state berdasarkan aksi.
// Dispatch → Cara untuk memicu perubahan state dengan mengirimkan aksi.
// 3. Struktur useReducer

const [state, dispatch] = useReducer(reducer, initialState);
// state → Nilai state saat ini.
// dispatch → Fungsi untuk mengirim aksi (mirip setState di useState).
// reducer → Fungsi yang menentukan bagaimana state berubah.
// initialState → State awal sebelum ada perubahan.
// 4. Contoh Dasar: Counter dengan useReducer
// Langkah 1: Buat Reducer Function
// Reducer function menerima state lama dan action, lalu mengembalikan state baru.


function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
// Langkah 2: Gunakan di Komponen

import { useReducer } from "react";

// 1️⃣ Definisikan state awal
const initialState = { count: 0 };

function Counter() {
  // 2️⃣ Gunakan useReducer
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="p-4">
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
// ✅ Penjelasan:
// state.count menyimpan nilai counter.
// dispatch({ type: "increment" }) → Memicu perubahan state dengan reducer.
// switch (action.type) pada reducer menentukan bagaimana state diperbarui.
// 5. Contoh Lanjutan: Manajemen Todo List
// useReducer juga sangat berguna untuk manajemen daftar tugas (todo list).

// Langkah 1: Buat Reducer Function

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
// Langkah 2: Gunakan di Komponen

import { useReducer, useState } from "react";

const initialTodos = [];

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "add", payload: input })}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "remove", payload: todo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
// ✅ Penjelasan:
// add → Menambah todo baru ke dalam state.
// toggle → Mengubah status todo (selesai/belum).
// remove → Menghapus todo berdasarkan id.
// 6. Kapan Menggunakan useReducer?
// Gunakan useReducer ketika: ✅ State kompleks → Banyak aksi dan kondisi yang mengubah state.
// ✅ Terdapat banyak kondisi if/switch di dalam useState.
// ✅ State berasal dari berbagai event dalam satu komponen.
// ✅ Menghindari prop drilling dengan menggabungkan useReducer dan useContext.

// Gunakan useState ketika: ❌ State sederhana → Seperti boolean isOpen, angka count, atau string.
// ❌ Hanya ada satu aksi yang mempengaruhi state.

// 7. Kesimpulan
// ✅ Reducer Pattern membantu mengelola state yang kompleks secara lebih terstruktur.
// ✅ Membantu menghindari kebingungan dalam perubahan state karena semuanya dikendalikan dalam reducer function.
// ✅ Mempermudah debugging karena perubahan state dikelola secara eksplisit berdasarkan action type.
// ✅ Dapat digunakan bersama useContext untuk global state management (mirip Redux).

// 🔥 Sekarang kamu bisa menggunakan useReducer untuk membuat aplikasi React yang lebih terstruktur! 🚀
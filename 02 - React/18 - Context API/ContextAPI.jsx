// 📌 Context API di React: Penjelasan Lengkap
// 🔹 Apa Itu Context API?
// Context API adalah fitur bawaan React yang memungkinkan kita mengelola dan berbagi state global di dalam aplikasi tanpa harus meneruskan props secara manual ke setiap komponen (prop drilling).

// ✨ Fungsi utama Context API:

// Menyediakan state global yang bisa digunakan di banyak komponen.
// Menghindari prop drilling (mengirim props dari parent ke child berulang kali).
// Alternatif ringan dibandingkan dengan Redux untuk state management.
// 🔹 Cara Kerja Context API
// Context API terdiri dari tiga bagian utama:

// createContext() → Membuat context global.
// Provider → Menyediakan data ke seluruh komponen.
// useContext() → Mengambil data dari context di dalam komponen.
// 🔹 Contoh Implementasi Context API
// 📌 1. Membuat Context
// Buat file AuthContext.js untuk mengelola status autentikasi pengguna.


import { createContext, useContext, useState } from "react";

// 1️⃣ Buat Context
const AuthContext = createContext();

// 2️⃣ Custom hook agar mudah digunakan di komponen lain
export function useAuth() {
  return useContext(AuthContext);
}

// 3️⃣ Provider yang membungkus seluruh aplikasi
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Fungsi untuk login
  const login = (userData) => setUser(userData);

  // Fungsi untuk logout
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
// ✅ Penjelasan:

// Membuat AuthContext dengan createContext().
// AuthProvider sebagai penyedia state (user, login, logout).
// useAuth() adalah custom hook agar lebih mudah menggunakan context.
// 📌 2. Menggunakan Provider di App.js
// Bungkus aplikasi dengan AuthProvider agar seluruh komponen bisa mengakses context.


import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
      <HomePage />
      <LoginPage />
    </AuthProvider>
  );
}

export default App;
// ✅ Penjelasan:

// AuthProvider membungkus aplikasi supaya semua komponen bisa mengakses state global user.
// 📌 3. Menggunakan Context di Komponen
// Sekarang, gunakan useAuth() untuk mengambil data dari AuthContext.

📍 Contoh: Halaman Login

import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { login } = useAuth();

  function handleLogin() {
    login({ username: "JohnDoe" });
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
// ✅ Penjelasan:

// Mengambil fungsi login dari AuthContext.
// Saat tombol ditekan, pengguna login dan state user diperbarui.
// 📍 Contoh: Dashboard (Menampilkan Data User)

import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
// ✅ Penjelasan:

// Mengambil user dan logout dari AuthContext.
// Menampilkan username jika sudah login.
// Tombol logout akan menghapus data user dari state global.
// 🔹 Kapan Menggunakan Context API?
// Gunakan Context API jika: ✅ State yang ingin dibagikan digunakan di banyak komponen.
// ✅ Ingin menghindari prop drilling (mengoper props terlalu dalam).
// ✅ Data yang dikelola bersifat global, misalnya:

// Status login pengguna (seperti contoh di atas).
// Tema (Dark Mode / Light Mode).
// Bahasa yang dipilih pengguna.
// Data keranjang belanja dalam aplikasi e-commerce.
// 🚨 Jangan gunakan Context API jika state hanya digunakan di beberapa komponen saja. Gunakan useState di dalam komponen yang membutuhkannya.

// 🔹 Perbandingan Context API vs Redux
// Fitur	Context API	Redux
// Kompleksitas	Sederhana	Lebih kompleks
// Ukuran Paket	Bawaan React	Harus install redux
// Performa	Bisa lambat jika context besar	Optimal dengan redux-toolkit
// State Global	Ya, mudah digunakan	Ya, lebih fleksibel
// 🔹 Gunakan Context API jika aplikasi kecil-menengah.
// 🔹 Gunakan Redux jika aplikasi besar dengan data yang sering berubah.

// 🔹 Kesimpulan
// 🚀 Context API adalah cara mudah untuk mengelola state global tanpa prop drilling.
// 💡 Gunakan createContext(), Provider, dan useContext() untuk membagikan data ke seluruh komponen.
// ⚡ Sederhana dan cocok untuk state global seperti autentikasi, tema, dan pengaturan pengguna.

// ✅ Sekarang kamu bisa mengelola state global dengan Context API di React! 🎉
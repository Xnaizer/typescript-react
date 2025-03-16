// 📌 Protected Routes di React
// Protected Routes digunakan untuk membatasi akses ke halaman tertentu dalam aplikasi React berdasarkan kondisi tertentu, seperti status login pengguna atau izin akses. Jika pengguna belum memenuhi syarat, mereka akan diarahkan ke halaman lain, seperti halaman login.

// 1️⃣ Cara Kerja Protected Routes
// Cek apakah pengguna sudah terautentikasi (misalnya, ada token atau informasi user di state/context).
// Jika sudah login, izinkan akses ke halaman yang dilindungi.
// Jika belum login, redirect pengguna ke halaman login.
// 2️⃣ Implementasi Protected Routes
// Untuk membuat Protected Routes, kita menggunakan React Router dan state global seperti Context API atau Redux untuk menyimpan status login pengguna.

// 📌 Langkah 1: Membuat AuthContext untuk Menyimpan Status Login
// Buat file AuthContext.js untuk mengelola autentikasi pengguna.


import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// Hook untuk menggunakan AuthContext dengan mudah
export function useAuth() {
  return useContext(AuthContext);
}

// Provider untuk menyimpan status autentikasi
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fungsi untuk login
  function login(userData) {
    setUser(userData);
    navigate("/dashboard"); // Redirect ke dashboard setelah login
  }

  // Fungsi untuk logout
  function logout() {
    setUser(null);
    navigate("/login"); // Redirect ke login setelah logout
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Penjelasan:

// AuthContext menyimpan data pengguna (user).
// login() → Simpan informasi pengguna & arahkan ke dashboard.
// logout() → Hapus data pengguna & arahkan ke login.
// useAuth() → Hook untuk mengakses autentikasi di komponen lain.


// 📌 Langkah 2: Membuat Protected Route
// Buat file ProtectedRoute.js untuk membatasi akses ke halaman tertentu.


import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;

// ✅ Penjelasan:

// Jika user ada, tampilkan halaman yang diminta (children).
// Jika belum login (user = null), alihkan ke halaman login dengan <Navigate to="/login" />.
// 📌 Langkah 3: Menggunakan ProtectedRoute di Router
// Sekarang, gunakan ProtectedRoute di dalam router.


import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);


// ✅ Penjelasan:

// Halaman /dashboard hanya bisa diakses jika user sudah login.
// Jika belum login, pengguna akan diarahkan ke /login.
// Gunakan <ProtectedRoute> untuk membungkus halaman yang dilindungi.
// 📌 Langkah 4: Membuat Halaman Login
// Buat halaman LoginPage.jsx yang memanggil login() dari AuthContext.


import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { login } = useAuth();

  function handleLogin() {
    // Simulasi login (seharusnya pakai API)
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

// Setelah pengguna menekan tombol login, fungsi login() dipanggil.
// user akan disimpan dalam AuthContext dan pengguna diarahkan ke /dashboard.
// 📌 Langkah 5: Membuat Logout
// Tambahkan tombol logout di Dashboard.jsx.


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

// Jika user sudah login, tampilkan nama pengguna (user.username).
// Tombol logout akan menghapus data pengguna dan mengalihkan ke halaman login.
// 3️⃣ Kesimpulan
// 🔹 Protected Routes digunakan untuk membatasi akses ke halaman tertentu berdasarkan status login pengguna.
// 🔹 Gunakan AuthContext untuk menyimpan status login.
// 🔹 Gunakan ProtectedRoute untuk membatasi akses ke halaman.
// 🔹 Redirect ke /login jika pengguna belum login.
// 🔹 Navigasi pengguna setelah login/logout menggunakan useNavigate().

// ✅ Sekarang aplikasi React-mu lebih aman dengan sistem autentikasi dan proteksi halaman! 🚀
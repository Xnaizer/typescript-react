// 📌 React Router: Panduan Lengkap dan Detail
// 🔹 Apa Itu React Router?
// React Router adalah library untuk mengelola navigasi dan routing dalam aplikasi React tanpa perlu memuat ulang halaman.

// 🔹 Mengapa Menggunakan React Router?
// ✅ Single Page Application (SPA) → React bekerja tanpa reload halaman.
// ✅ Navigasi Dinamis → Mengubah tampilan berdasarkan URL.
// ✅ Parameter dan Query String → Mendukung dynamic routing.
// ✅ Protected Routes → Bisa membatasi akses berdasarkan autentikasi.



// 🔹 Instalasi React Router

npm install react-router-dom

// 📌 React Router hanya untuk aplikasi berbasis web, untuk React Native gunakan react-router-native.



// 🔹 Konsep Dasar React Router
// 🔹 1. BrowserRouter
// Wrapper utama untuk aplikasi React yang menggunakan routing.

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Semua Routes ditempatkan di sini */}
    </BrowserRouter>
  );
}

// ✅ Wajib ada dalam root komponen aplikasi.



// 🔹 2. Routes dan Route
// 📌 Digunakan untuk menentukan daftar rute dalam aplikasi.


import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Halaman Home</h1>;
}

function About() {
  return <h1>Halaman About</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ✅ Hanya satu <Route> yang akan ditampilkan berdasarkan URL.

// 🔹 3. Link dan Navigasi
// Gunakan <Link> atau <NavLink> untuk berpindah halaman tanpa reload.


import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

// ✅ Tidak seperti <a href="..." /> yang melakukan reload halaman.

// 🔹 4. Dynamic Routing (Parameter dalam URL)
// Gunakan parameter dinamis dalam URL untuk mengambil data berdasarkan ID atau nama.


import { useParams } from "react-router-dom";

function Profile() {
  let { username } = useParams();
  return <h1>Halo, {username}!</h1>;
}
Gunakan :param dalam path:


<Routes>
  <Route path="/profile/:username" element={<Profile />} />
</Routes>

// 📌 Jika pengguna mengakses /profile/Alex, output: "Halo, Alex!".

// 🔹 5. Query String (useSearchParams)
// Mengambil query string dari URL.


import { useSearchParams } from "react-router-dom";

function SearchPage() {
  let [searchParams] = useSearchParams();
  let query = searchParams.get("query");

  return <h1>Hasil pencarian untuk: {query}</h1>;
}

// 📌 Jika URL adalah /search?query=React, output: "Hasil pencarian untuk: React".

// 🔹 6. Programmatic Navigation (useNavigate)
// Mengubah halaman melalui kode.


import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  function handleLogin() {
    // Setelah login, redirect ke halaman dashboard
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}

// 📌 Setelah tombol diklik, pengguna diarahkan ke /dashboard.

// 🔹 7. Protected Routes (Autentikasi)
// Menampilkan halaman hanya jika pengguna sudah login.


import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Gunakan dalam Routes:


<Routes>
  <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={true}><Dashboard /></ProtectedRoute>} />
</Routes>

// ✅ Jika tidak login, pengguna diarahkan ke /login.

// 🔹 8. Nested Routes (Routing Bersarang)
// Mengatur route yang ada di dalam route lain.


<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>


// 📌 URL /dashboard/profile akan merender Profile dalam Dashboard.

// Gunakan <Outlet> dalam Dashboard untuk menampilkan nested route.


import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}




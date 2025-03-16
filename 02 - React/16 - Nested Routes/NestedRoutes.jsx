// 📌 Nested Routes di React Router
// 🔍 Apa itu Nested Routes?
// Nested Routes (Routing Bertingkat) di React Router digunakan untuk membuat struktur rute yang bersarang di dalam suatu rute utama. Dengan pendekatan ini, kita bisa merancang komponen yang lebih modular dan struktur URL yang lebih rapi.

// 🛠 Contoh Kasus: Dashboard dengan Submenu
// Misalkan kita memiliki dashboard dengan beberapa bagian seperti:

// /dashboard → Halaman utama
// /dashboard/profile → Halaman profil
// /dashboard/settings → Halaman pengaturan
// Alih-alih mendefinisikan setiap rute secara terpisah, kita bisa membuatnya bersarang (nested) di dalam dashboard.

// 1️⃣ Cara Membuat Nested Routes
// React Router memungkinkan definisi nested routes menggunakan properti children dalam createBrowserRouter() atau <Routes>.

// 📌 Contoh: Struktur Routing

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      { path: "profile", element: <Profile /> }, // /dashboard/profile
      { path: "settings", element: <Settings /> }, // /dashboard/settings
    ],
  },
]);

// 📌 Struktur URL yang Dihasilkan:

// /dashboard          → Menampilkan Dashboard.jsx
// /dashboard/profile  → Menampilkan Profile.jsx
// /dashboard/settings → Menampilkan Settings.jsx
// 📌 Perhatikan bahwa kita tidak perlu menulis /dashboard/profile, cukup profile dalam path nested route.

// 2️⃣ Menggunakan Outlet untuk Menampilkan Child Components
// Pada komponen Dashboard.jsx, kita perlu menggunakan <Outlet /> agar React Router tahu di mana nested component akan dirender.

// 📌 Contoh: Dashboard.jsx

import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> | 
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet /> {/* Tempat untuk menampilkan komponen child */}
    </div>
  );
}

export default Dashboard;

// 📌 Saat pengguna mengklik link "Profile" atau "Settings", komponen tersebut akan ditampilkan di dalam <Outlet />.

// 3️⃣ Menangani URL Dinamis dalam Nested Routes
// Kita juga bisa menggunakan params dalam nested routes, misalnya:

// /dashboard/user/:userId → Menampilkan profil pengguna berdasarkan userId
// 📌 Tambahkan Rute Dinamis

import UserDetail from "../pages/UserDetail";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "user/:userId", element: <UserDetail /> }, // /dashboard/user/:userId
    ],
  },
]);

// 📌 Ambil userId dalam UserDetail.jsx

import { useParams } from "react-router-dom";

function UserDetail() {
  const { userId } = useParams();

  return <h2>Profil Pengguna dengan ID: {userId}</h2>;
}

export default UserDetail;

// 📌 Jika pengguna mengakses /dashboard/user/10, maka userId = 10.

// 4️⃣ Navigasi di dalam Nested Routes
// Untuk berpindah halaman dalam nested routes, kita bisa menggunakan:

<Link to="relative_path"> → Path relatif
<Link to="/absolute_path"> → Path absolut
📌 Contoh Navigasi dalam Dashboard.jsx

<nav>
  <Link to="profile">Profile</Link> | 
  <Link to="settings">Settings</Link> | 
  <Link to="user/5">User 5</Link>
</nav>

{/* 📌 Dengan path relatif, "Profile" akan menuju /dashboard/profile, bukan /profile.

5️⃣ Nested Layouts: Menggunakan Komponen Pembungkus
Kadang kita ingin menampilkan sidebar atau navbar hanya pada halaman tertentu, misalnya pada halaman dashboard.

📌 Contoh: Menggunakan Layout untuk Nested Routes */}

function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <nav>
        <Link to="profile">Profile</Link> |
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet /> {/* Menampilkan halaman yang sedang aktif */}
    </div>
  );
}

{/* 📌 Kita bisa mengganti <Dashboard /> dengan <DashboardLayout /> dalam routing.

6️⃣ Menggunakan useNavigate() untuk Navigasi Programatik
Selain <Link>, kita bisa berpindah halaman dengan useNavigate().

📌 Contoh Redirect ke Profile setelah Login */}

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard/profile");
  }

  return <button onClick={handleLogin}>Login</button>;
}
{/* 
📌 Setelah login, pengguna langsung diarahkan ke /dashboard/profile.

📌 Kesimpulan
Nested Routes memungkinkan kita membuat rute yang lebih terstruktur dan modular.
Gunakan children dalam createBrowserRouter() untuk mendefinisikan nested routes.
Gunakan <Outlet /> dalam komponen utama untuk menampilkan konten dari child routes.
Gunakan params (:userId) dalam nested routes untuk menangani URL dinamis.
Gunakan path relatif dalam <Link to="profile">Profile</Link> agar rute tetap berada di dalam parent.
Bisa menggunakan Layouts untuk mengelola tampilan navigasi secara terstruktur.
✅ Dengan memahami Nested Routes, kamu bisa membangun aplikasi React dengan struktur navigasi yang lebih baik! 🚀 */}
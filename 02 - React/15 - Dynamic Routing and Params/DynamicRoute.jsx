// 🔍 Dynamic Routing & Params di React Router
// Dalam React Router, dynamic routing memungkinkan kita membuat jalur (routes) yang bisa menangani data yang berubah-ubah, seperti ID pengguna, slug artikel, atau kategori produk.

// 💡 Contoh:

// /user/:userId → Menampilkan profil pengguna berdasarkan userId
// /post/:slug → Menampilkan artikel berdasarkan slug
// /products/:category → Menampilkan produk berdasarkan category


// 1️⃣ Memahami Dynamic Routing
// Dynamic routing dibuat menggunakan path parameter (params) yang ditandai dengan : (titik dua) dalam path.

// 📌 Contoh Routing Dinamis

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserProfile from "../pages/UserProfile";
import PostDetail from "../pages/PostDetail";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/user/:userId", element: <UserProfile /> }, // Dynamic Route
  { path: "/post/:slug", element: <PostDetail /> }, // Dynamic Route
]);

// Di sini:

// /user/:userId → Akan menangkap nilai userId
// /post/:slug → Akan menangkap nilai slug



// 2️⃣ Mengakses Params dalam Komponen
// React Router menyediakan useParams() untuk mengambil nilai params yang dikirim melalui URL.

// 📌 Contoh Mengambil userId dalam UserProfile.jsx

import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams(); // Mengambil nilai userId dari URL

  return (
    <div>
      <h1>Profil Pengguna</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default UserProfile;

// 📌 Jika pengguna mengakses /user/123, maka userId = 123.


// 3️⃣ Dynamic Routing dengan Data API
// Kita bisa menggunakan useEffect untuk mengambil data berdasarkan params.

// 📌 Contoh: Fetch Data dalam PostDetail.jsx


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [slug]);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostDetail;


// 📌 Jika pengguna mengakses /post/2, maka akan mengambil data dari API berdasarkan slug=2.



// 4️⃣ Nested Dynamic Routes
// Kita bisa menggabungkan dynamic routes dengan nested routes untuk membuat URL yang lebih kompleks.

// 📌 Contoh Struktur Routing

export const router = createBrowserRouter([
    {
      path: "/user/:userId",
      element: <UserProfile />,
      children: [
        { path: "posts", element: <UserPosts /> }, // /user/:userId/posts
        { path: "settings", element: <UserSettings /> }, // /user/:userId/settings
      ],
    },
  ]);

//   📌 Jika pengguna mengakses /user/10/posts, maka userId = 10 dan akan menampilkan UserPosts.


//   5️⃣ Menggunakan useNavigate() untuk Navigasi Dinamis
//   Selain menangkap params, kita bisa mengarahkan pengguna ke route lain secara dinamis dengan useNavigate().
  
//   📌 Contoh: Redirect ke Profil Setelah Login

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    const userId = 123; // Misalnya ID didapat dari backend
    navigate(`/user/${userId}`); // Redirect ke profil pengguna
  }

  return <button onClick={handleLogin}>Login</button>;
}

export default LoginPage;


// 📌 Saat tombol diklik, pengguna akan diarahkan ke /user/123.

// 6️⃣ Menggunakan useSearchParams (Query Parameters)
// Selain path parameters, kita juga bisa menggunakan query parameters seperti:

/search?q=React


// 📌 Contoh: Ambil Query Params dalam SearchPage.jsx

import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return <p>Hasil pencarian untuk: {query}</p>;
}

export default SearchPage;



// 📌 Jika pengguna mengakses /search?q=React, maka akan menampilkan Hasil pencarian untuk: React.


// 📌 Kesimpulan
// Dynamic Routing digunakan untuk menangani data yang berubah-ubah dalam URL.
// Gunakan :params dalam path untuk menangkap nilai dinamis.
// Gunakan useParams() untuk mengambil nilai params dalam komponen.
// Bisa dikombinasikan dengan API Fetching untuk menampilkan data berdasarkan params.
// Gunakan useNavigate() untuk redirect secara dinamis.
// Bisa menggunakan useSearchParams() untuk menangani query string dalam URL.
// ✅ Dengan pemahaman ini, kamu bisa membuat navigasi dinamis yang lebih fleksibel di aplikasi React! 🚀
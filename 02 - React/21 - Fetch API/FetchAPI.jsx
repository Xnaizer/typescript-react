// 🔍 Penjelasan Lengkap Fetch API di React

// 📌 Apa Itu Fetch API?

// Fetch API adalah fitur JavaScript yang digunakan untuk melakukan permintaan HTTP ke server, mengambil data dari API, dan menampilkan data tersebut di aplikasi React. Fetch API menggantikan metode lama seperti XMLHttpRequest (XHR) dengan pendekatan yang lebih modern berbasis Promise.


// 📌 Cara Kerja Fetch API di React

// Di React, Fetch API biasanya digunakan di dalam useEffect() untuk mengambil data ketika komponen pertama kali dimuat atau ketika ada perubahan dependensi. Fetch juga sering dikombinasikan dengan state menggunakan useState() agar data yang diterima bisa di-render ulang secara otomatis.



// 📌 1. Fetch API di dalam useEffect()
// Ketika kita ingin mengambil data saat komponen pertama kali dirender, kita bisa menggunakan useEffect().

// 📌 Contoh: Fetch API untuk Mengambil Data

import { useState, useEffect } from "react";

function FetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Dependensi kosong berarti hanya dijalankan sekali saat komponen dimuat

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default FetchExample;


// Penjelasan:

// State data, loading, dan error digunakan untuk menyimpan data yang diambil.
// useEffect() digunakan untuk menjalankan fetch() hanya saat komponen pertama kali dimuat.
// fetch() digunakan untuk mengambil data dari API.
// Error handling dilakukan dengan catch() jika terjadi kesalahan.
// Rendering data setelah berhasil diambil.




// 📌 2. Fetch API dengan Async/Await
// Menggunakan async/await membuat kode lebih mudah dibaca dan dikelola.

// 📌 Contoh: Fetch API dengan Async/Await


import { useState, useEffect } from "react";

function FetchAsyncAwait() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default FetchAsyncAwait;


// Perbedaan dengan contoh pertama:

// Menggunakan async/await dalam fungsi fetchData().
// Try-catch-finally digunakan untuk menangani error dengan lebih rapi.
// Kode lebih mudah dibaca.




// 📌 3. Fetch API dengan HTTP POST (Mengirim Data ke API)
// Selain GET, kita juga bisa menggunakan Fetch API untuk mengirim data ke server menggunakan metode POST.

// 📌 Contoh: Fetch API dengan POST Request


import { useState } from "react";

function PostData() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title,
      body,
      userId: 1, // ID user dummy
    };

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error("Gagal mengirim data");
      }

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Kirim Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Isi Postingan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Kirim</button>
      </form>

      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PostData;



// 🔍 Penjelasan
// Menggunakan useState() untuk menyimpan input dari formulir.
// handleSubmit() dipanggil ketika formulir dikirim.
// Data dikirim dengan metode POST ke API.
// headers digunakan untuk menyatakan bahwa kita mengirimkan JSON.
// Setelah berhasil, data dari respons API ditampilkan.



// 📌 4. Fetch API dengan Token Authorization (Bearer Token)
// Dalam aplikasi nyata, kita sering kali membutuhkan token authorization saat melakukan request ke API.

// 📌 Contoh: Fetch API dengan Token Authorization

const fetchDataWithToken = async () => {
    const token = "YOUR_ACCESS_TOKEN_HERE";
  
    try {
      const response = await fetch("https://api.example.com/protected-data", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
fetchDataWithToken();


// 🔍 Penjelasan
// Menambahkan header Authorization menggunakan token.
// Token ini biasanya diperoleh setelah login.
// API akan memvalidasi token sebelum memberikan respons.


// 📌 5. Fetch API dengan AbortController (Membatalkan Request)
// Kadang kita ingin membatalkan permintaan API jika komponen tidak lagi diperlukan.

// 📌 Contoh: Membatalkan Fetch Request


import { useState, useEffect } from "react";

function FetchWithAbort() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts/1", { signal })
      .then(response => response.json())
      .then(setData)
      .catch(error => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted!");
        }
      });

    return () => controller.abort();
  }, []);

  return <div>{data ? <h1>{data.title}</h1> : "Loading..."}</div>;
}

export default FetchWithAbort;


// 📌 Kesimpulan
// Fetch API digunakan untuk mengambil atau mengirim data.
// Bisa digunakan dengan useEffect() agar berjalan otomatis.
// Bisa dikombinasikan dengan useState() untuk menyimpan data.
// Async/Await membuat kode lebih bersih.
// Bisa menangani POST request, token authorization, dan pembatalan request.
// Itu dia penjelasan lengkap Fetch API di React! 🚀
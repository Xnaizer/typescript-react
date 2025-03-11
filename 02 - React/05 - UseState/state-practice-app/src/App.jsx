import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  return (
    <div className={`min-h-screen ${isDarkMode? "bg-gray-900": "bg-gray-100" }`}>
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8 bg-linear-45/oklch text-transparent bg-clip-text from-blue-500 to-pink-500">UseState Practices</h1>

        <div className="flex justify-end mb-4">
          <button className={`px-4 py-2 ${isDarkMode? "bg-white" : "bg-slate-700 text-white" } font-semibold rounded shadow`} onClick={() => setIsDarkMode(!isDarkMode)}>
            Dark Mode
          </button>
        </div>

        <div className="grid gap-6">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2>Count: 0</h2>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Tambah</button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <h2>Hello, Alice!</h2>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Ubah Nama</button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <h2>Umur: 20</h2>
            <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded">Tambah Umur</button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <h2>Nama: Alice</h2>
            <h2>Umur: 25</h2>
            <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded">Tambah Umur</button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <input className="border p-2 w-full" type="text" />
            <p className="mt-2">Input: </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <h2>Halo, saya terlihat!</h2>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Toggle Tampilkan</button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <input className="border p-2 w-full mb-2" type="text" placeholder="Nama" />
            <input className="border p-2 w-full" type="email" placeholder="Email" />
            <p className="mt-2">Nama: </p>
            <p>Email: </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <input className="mr-2" type="checkbox" />
            <span>Belum dicentang</span>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <input className="border p-2 w-full" type="text" placeholder="Cari..." />
            <ul className="mt-2">
              <li className="border-b py-1">Apple</li>
              <li className="border-b py-1">Banana</li>
              <li className="border-b py-1">Cherry</li>
              <li className="border-b py-1">Date</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

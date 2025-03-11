// Pengenalan React: Instalasi & Setup React (Vite atau CRA)
// Sebelum mulai membangun aplikasi dengan React, kita perlu menginstal dan mengatur proyek React terlebih dahulu. Ada dua cara utama yang umum digunakan untuk menginstal React:

// Create React App (CRA) → Pendekatan tradisional, lebih lambat tetapi sudah siap pakai.

// Vite → Pendekatan modern, lebih cepat dan ringan dibandingkan CRA.


// 1️⃣ Instalasi React dengan Create React App (CRA)
// Create React App (CRA) adalah tool resmi dari tim React untuk membuat proyek React dengan cepat tanpa perlu konfigurasi awal yang kompleks.

// 🔹 Langkah-langkah Instalasi dengan CRA
// 1. Pastikan Node.js Terinstal
// Sebelum mulai, pastikan kamu sudah menginstal Node.js di komputer. Kamu bisa cek dengan perintah berikut:

node -v

// Jika belum terinstal, unduh dari Node.js Official Website.

// 2. Buat Proyek React dengan CRA
// Gunakan perintah berikut untuk membuat proyek React:

npx create-react-app nama-proyek

// Contoh:

npx create-react-app my-app

// Catatan: npx adalah tool bawaan dari Node.js yang memungkinkan kita menjalankan paket tanpa harus menginstalnya secara global.

// Alternatif lain jika npx tidak berfungsi:


npm install -g create-react-app
create-react-app my-app

// 3. Masuk ke Folder Proyek
// Setelah instalasi selesai, masuk ke folder proyek:

cd my-app

// 4. Jalankan Proyek React
// Jalankan server pengembangan dengan perintah:

npm start

// Setelah berhasil, React akan berjalan di http://localhost:3000/ secara otomatis di browser.




// 2️⃣ Instalasi React dengan Vite (Rekomendasi untuk Proyek Modern)
// Vite adalah build tool yang lebih ringan dan cepat dibandingkan CRA.

// 🔹 Langkah-langkah Instalasi dengan Vite
// 1. Pastikan Node.js Sudah Terinstal
// Cek versi Node.js dengan:

node -v

// Vite membutuhkan Node.js 14.18+ atau 16+.

// 2. Buat Proyek React dengan Vite
// Gunakan perintah berikut untuk membuat proyek React dengan Vite:

npm create vite@latest nama-proyek --template react

// Contoh:

npm create vite@latest my-app --template react

// Saat menjalankan perintah ini, Vite akan meminta konfirmasi untuk memilih framework dan template. Pilih React.

// 3. Masuk ke Folder Proyek
// Setelah instalasi selesai, masuk ke folder proyek:

cd my-app

// 4. Install Dependencies
// Jalankan perintah berikut untuk menginstal dependensi proyek:

npm install

// 5. Jalankan Server Development
// Gunakan perintah berikut untuk menjalankan proyek:

npm run dev

// Setelah berhasil, server akan berjalan di http://localhost:5173/ secara default.


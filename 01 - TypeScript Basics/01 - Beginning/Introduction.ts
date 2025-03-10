// Pada bagian ini, kita akan membahas dasar-dasar penting TypeScript yang diperlukan untuk kursus ini dan penggunaan umum. 
// Kita akan mempelajari cara menginstal dan menggunakan TypeScript, Type Annotations, Type Inference, serta tipe dan fitur utama yang sering digunakan. 
// Fondasi ini akan membantu saat menggabungkan TypeScript dengan React. Setelah itu, kita akan membangun aplikasi React dengan TypeScript.


// Mari kita mulai dengan TypeScript sebelum menggunakannya dengan React. TypeScript adalah ekstensi JavaScript yang tidak bisa langsung dijalankan di browser, sehingga perlu dikompilasi ke JavaScript terlebih dahulu.

// Untuk menggunakannya, Anda perlu menginstal TypeScript. Bisa secara lokal di proyek atau global di sistem. Cara menginstalnya:

// Secara global:


// npm install -g typescript
// Ini memungkinkan Anda menjalankan kompiler TypeScript dari mana saja.

// Secara lokal di proyek:


// npm install typescript --save-dev
// Anda juga bisa menggunakan npx tsc tanpa instalasi global. Pastikan Node.js terinstal di sistem Anda sebelum memulai.


// Mari mulai dengan TypeScript! Kita akan menggunakannya dalam proyek baru di Visual Studio Code. Untuk itu, buat file first-app.ts. Ekstensi .ts memberi tahu IDE bahwa ini adalah file TypeScript, sehingga kita mendapatkan bantuan seperti error checking otomatis.

// TypeScript tetap menggunakan JavaScript, tetapi dengan fitur tambahan seperti type checking. Misalnya:


// let userName = "Max";
// userName = 34; // ❌ Error: Type 'number' is not assignable to type 'string'
// Jika ini file .js, error tidak muncul karena JavaScript tidak memiliki pemeriksaan tipe yang ketat. Namun, TypeScript menjaga konsistensi tipe untuk menghindari bug.

// Jika kita tidak memberikan nilai awal, TypeScript tidak dapat menebak tipe variabel dan akan menganggapnya sebagai any:


// let userName; // TypeScript menganggap tipe 'any'
// userName = "Max"; // ✅
// userName = 34; // ✅ Tidak ada error karena tipe 'any'
// Untuk menghindari ini, kita bisa menentukan tipe secara eksplisit:


// let userName: string;
// userName = "Max"; // ✅
// userName = 34; // ❌ Error: Type 'number' is not assignable to type 'string'
// Explicit type assignment ini berguna jika TypeScript tidak bisa menentukan tipe yang diinginkan.

// Kesimpulannya, TypeScript membantu dengan inference (menebak tipe) dan explicit type assignment (menentukan tipe secara langsung). Sekarang, mari kita jelajahi tipe data dasar dalam TypeScript! 🚀
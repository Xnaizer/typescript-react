// Setelah memahami tipe data dasar di TypeScript, langkah berikutnya adalah menjalankan kode TypeScript.

// Karena TypeScript tidak berjalan langsung di browser atau Node.js, kita harus mengompilasinya ke JavaScript menggunakan perintah:


// tsc nama_file.ts

// Atau jika TypeScript tidak diinstal secara global, gunakan:


// npx tsc nama_file.ts

// Proses ini akan menghapus fitur spesifik TypeScript, seperti anotasi tipe, dan mengonversinya ke JavaScript standar. Secara default, TypeScript juga akan mengubah sintaks agar kompatibel dengan browser lama.

// Namun, dalam pengembangan, kita jarang menjalankan kompiler secara manual karena IDE seperti VS Code sudah memberikan error dan peringatan langsung saat kita menulis kode. Oleh karena itu, kita bisa fokus memahami fitur TypeScript di dalam IDE sebelum menggunakannya dalam proyek nyata.


let userName: string = 'xnaizer';
let age: number = 34;
let isMarried: boolean = false;
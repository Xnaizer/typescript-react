// Type Guards & Type Narrowing di TypeScript
// Type Guards adalah teknik untuk mempersempit tipe data (Type Narrowing) menggunakan if-checks, sehingga TypeScript dapat mengidentifikasi tipe yang lebih spesifik dalam suatu blok kode.

// Contoh

// function combine(a: number | string, b: number | string) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   return `${a} ${b}`;
// }
// ✅ TypeScript mempersempit tipe (number | string) menjadi number di dalam if-statement.
// ✅ Di luar if-statement, tipe kembali menjadi number | string.

// Jenis Type Guards
// typeof → Mengecek tipe primitif (string, number, boolean, dll.).

// if (typeof value === "string") { /* ... */ }
// instanceof → Mengecek apakah objek dibuat dari kelas tertentu.

// if (obj instanceof Date) { /* ... */ }
// in → Mengecek apakah properti ada dalam objek.

// if ("permissions" in user) { /* Admin-specific logic */ }
// ⚠ Penting: Tidak bisa mengecek type alias atau interface langsung karena TypeScript tidak ada di runtime.

// ❌ Salah:


// if (typeof u === User) { /* Tidak bisa dilakukan */ }
// ✅ Benar:


// if ("permissions" in u) { /* Bisa dilakukan */ }
// Kesimpulan
// Type Guards membantu TypeScript mempersempit tipe data.
// Gunakan typeof, instanceof, dan in untuk validasi tipe di runtime.
// Tidak bisa mengecek type alias atau interface secara langsung di runtime.
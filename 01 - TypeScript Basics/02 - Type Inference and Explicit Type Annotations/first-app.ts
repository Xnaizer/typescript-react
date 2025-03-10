/*

Mari mulai dengan TypeScript! Kita akan menggunakannya dalam proyek baru di Visual Studio Code. Untuk itu, buat file first-app.ts. Ekstensi .ts memberi tahu IDE bahwa ini adalah file TypeScript, sehingga kita mendapatkan bantuan seperti error checking otomatis.

TypeScript tetap menggunakan JavaScript, tetapi dengan fitur tambahan seperti type checking. Misalnya:


let userName = "Max";
userName = 34; // ❌ Error: Type 'number' is not assignable to type 'string'
Jika ini file .js, error tidak muncul karena JavaScript tidak memiliki pemeriksaan tipe yang ketat. Namun, TypeScript menjaga konsistensi tipe untuk menghindari bug.

Jika kita tidak memberikan nilai awal, TypeScript tidak dapat menebak tipe variabel dan akan menganggapnya sebagai any:


let userName; // TypeScript menganggap tipe 'any'
userName = "Max"; // ✅
userName = 34; // ✅ Tidak ada error karena tipe 'any'
Untuk menghindari ini, kita bisa menentukan tipe secara eksplisit:


let userName: string;
userName = "Max"; // ✅
userName = 34; // ❌ Error: Type 'number' is not assignable to type 'string'
Explicit type assignment ini berguna jika TypeScript tidak bisa menentukan tipe yang diinginkan.

Kesimpulannya, TypeScript membantu dengan inference (menebak tipe) dan explicit type assignment (menentukan tipe secara langsung). Sekarang, mari kita jelajahi tipe data dasar dalam TypeScript! 🚀
*/

let userName = 'Xnaizer'; // TypeScript menganggap tipe 'any'

// userName = 34; // ini menjadi error karna kita sudah mendefinisikan userName pertama kali menggunakan string, oleh karnanya setelahnya juga akan string.

// namun ketika hanya ada let userName, tidak ada error karena tipe 'any'

let userName2;

userName2 = 'xnaizer';
userName2 = 34;

// ini tidak error karna let userName2 tidak didefinisikan dan menerima semua tipe data, jika di definisikan dengan let userName2 = 'xnaizer' diawal maka akan error karna menggunakan tipe data string.

let userName3: string; //tipe data harus string

userName3 = 'xnaizer';
// userName3 = 34; // ini akan error karna kita sudah mendefinisikan userName3 menggunakan string, oleh karnanya setelahnya juga akan string.

let userName4: string = 'xnaizer';
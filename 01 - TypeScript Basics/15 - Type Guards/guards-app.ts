// Union Types & Type Guards di TypeScript
// Saat menggunakan union types, sering kali kita perlu menjalankan kode hanya untuk tipe tertentu.

// Contoh Kasus
// Misalnya, kita punya fungsi performAction yang menerima aksi dan peran pengguna (admin, user, atau editor).


// type Role = "admin" | "user" | "editor";

// function performAction(action: string | number, role: Role) {
//   if (role === "admin" && typeof action === "string") {
//     console.log(`Executing action: ${action}`);
//   }
// }
// Penjelasan
// Gunakan type untuk menyimpan union type → agar lebih rapi dan reusable.
// Gunakan if-checks sebagai "type guards" → memastikan kode hanya berjalan untuk tipe yang diizinkan.
// Gunakan typeof untuk membedakan tipe primitif → dalam kasus ini, hanya string yang diizinkan untuk dieksekusi.
// Kesimpulan
// Type guards membantu memastikan kita menangani tipe data dengan benar.
// Union types + type guards adalah pola umum dalam TypeScript untuk menangani variasi data dengan aman.


// dari ini 

// let role: "admin" | "user" | "editor";

// role = "admin";
// role = "user";
// role = "editor";
// // role = "random"; // Error



// menjadi : 

type Role = "admin" | "user" | "editor";
let role: Role;

function performAction(action: string | number, role: Role) {
    if (role === "admin" && typeof action === "string") {
        console.log(`Executing action: ${action}`);
    }
}




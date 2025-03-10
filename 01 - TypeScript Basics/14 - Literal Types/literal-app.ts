// Literal Types di TypeScript
// Literal types memungkinkan kita membatasi nilai variabel hanya ke beberapa opsi tertentu.

// Contoh Kasus
// Misalnya, kita ingin variabel role hanya bisa berisi "admin", "user", atau "editor", bukan string lainnya.

// Tanpa literal types:


// let role: string; 
// role = "admin"; // Benar
// role = "random"; // Tidak diinginkan
// Dengan literal types:


// let role: "admin" | "user" | "editor"; 
// role = "admin"; // ✅ Valid
// role = "manager"; // ❌ Error
// Literal types juga bisa digunakan dengan angka:


// let statusCode: 200 | 404 | 500;
// statusCode = 200; // ✅ Valid
// statusCode = 403; // ❌ Error
// Kesimpulan
// Literal types membatasi nilai ke pilihan tertentu.
// Digunakan dengan string atau number.
// Membantu menangkap kesalahan lebih awal di TypeScript.

// let role: string;

// role = "admin";
// role = "user";
// role = "editor";



let role: "admin" | "user" | "editor";

role = "admin";
role = "user";
role = "editor";
// role = "random"; // Error


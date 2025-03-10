// Terkadang dalam TypeScript, kita membutuhkan variabel yang bisa menyimpan lebih dari satu tipe data. Misalnya, variabel userID bisa berupa string ("abc1") atau number (123).

// Secara default, TypeScript akan menginferr userID sebagai string, sehingga memberikan error jika kita mencoba menyimpan angka. Untuk mengatasi ini, kita dapat menggunakan union type, yang memungkinkan sebuah variabel memiliki beberapa tipe:


// let userID: string | number;
// userID = "abc1"; // Valid
// userID = 123;    // Valid
// userID = true;   // Error (boolean tidak diperbolehkan)
// Simbol | berfungsi sebagai operator "OR" untuk mendeklarasikan beberapa tipe. Fitur ini sangat berguna dan sering digunakan dalam TypeScript.


// Union Types

let uniqueID: string | number;

uniqueID = "abc1asdw233sa";
uniqueID = 122315495603;

// uniqueID = true; // ❌ Error


let userId: string | number;
userId = 123;  // ✅
userId = "ABC123"; // ✅

// userId = true; // ❌ Error: Type 'boolean' is not assignable to type 'string | number'
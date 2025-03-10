// Dalam TypeScript, kita bisa menentukan tipe data untuk variabel, konstanta, dan fungsi.

// 1. Tipe pada Variabel & Konstanta

// let apiKey: string = "12345"; // Variabel dengan tipe string
// const API_KEY = "abc123"; // Konstanta, tipe otomatis diinfer
// Pada konstanta (const), TypeScript secara otomatis menganggap nilainya konstan dan lebih spesifik, sehingga tidak perlu eksplisit menulis tipe.

// 2. Tipe pada Parameter Fungsi
// Kita dapat menambahkan tipe pada parameter fungsi untuk memastikan input yang diterima sesuai.


// function add(a: number, b: number) {
//   return a + b;
// }
// Fungsi add hanya menerima dua angka sebagai parameter.

// 3. Tipe pada Return Value Fungsi
// Kita juga bisa menentukan tipe dari nilai yang dikembalikan:


// function add(a: number, b: number): number {
//   return a + b;
// }
// Namun, TypeScript dapat menginfer tipe return secara otomatis, sehingga menuliskan tipe return tidak selalu diperlukan.

// Jika fungsi tidak mengembalikan nilai, gunakan void:


// function logMessage(message: string): void {
//   console.log(message);
// }
// void menunjukkan bahwa fungsi tidak memiliki return statement atau hanya mengembalikan undefined.

// Dengan fitur ini, TypeScript memberikan keamanan tipe dalam kode, terutama dalam pengelolaan fungsi.


const API_KEY = "abc123"; // tidak perlu eksplisit menulis tipe.
// karna value dari const tidak akan berubah

function gabungkan(namaAwal: string, namaAkhir: string){
    return `${namaAwal} ${namaAkhir}`
} // karna tipe ini tidak return value apa apa maka kita akan menambahkannya dengan : 


function add(a: number, b: number): number {
    return a + b;
} // function (params): "tipe data return disini" { body }


function komplexFungsi(paramA: string, paramB: {name: string, age: number}): string {
    const returnValue = `${paramA} ${paramB.name} ${paramB.age}`
    return returnValue
}

console.log(komplexFungsi("hello", {name: "xnaizer", age: 34})) // "hello xnaizer 34"



function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello, world!"); // Output: "Hello, world!"


// Function dengan Type Annotation
// function add(a: number, b: number): number {
//     return a + b;
//   }
  
//   // console.log(add(5, "10")); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
  

function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greet()); // Output: Hello, Guest!
  console.log(greet("Alice")); // Output: Hello, Alice!
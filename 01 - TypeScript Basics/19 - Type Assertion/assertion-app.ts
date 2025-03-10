// Type Assertion di TypeScript
// Type Assertion adalah fitur di TypeScript yang memungkinkan kita memberi tahu compiler bahwa kita yakin suatu nilai memiliki tipe tertentu, meskipun TypeScript tidak dapat menentukannya secara otomatis.

// 📌 Apa Itu Type Assertion dalam TypeScript?
// Type Assertion adalah fitur di TypeScript yang memungkinkan kita memberi tahu kompiler bahwa kita yakin terhadap tipe suatu nilai, meskipun TypeScript tidak bisa secara otomatis mengetahuinya.

// 🛠 Analogi Sederhana:
// Bayangkan TypeScript seperti seorang penjaga keamanan yang ingin memastikan barang di tasmu sudah benar. Jika dia ragu, kamu bisa berkata:

// "Tenang, aku yakin ini adalah laptop, bukan buku!"
// (Itulah Type Assertion dalam TypeScript)


// 1️⃣ Kapan Menggunakan Type Assertion?
// ✅ Ketika TypeScript tidak bisa secara otomatis menentukan tipe yang benar.
// ✅ Saat mengambil data dari API, DOM, atau sumber lain dengan tipe unknown atau any.
// ✅ Untuk menghindari error ketika kita yakin akan tipe data yang digunakan.



// 2️⃣ Bentuk Penulisan Type Assertion
// Ada dua cara menuliskan Type Assertion:


let someValue: unknown = "This is a string";

// // Cara 1: Menggunakan "as"
let strLength1: number = (someValue as string).length;

// // Cara 2: Menggunakan "<>"
let strLength2: number = (<string>someValue).length;

// ⚠️ Catatan:

// Gunakan as jika bekerja dengan TypeScript + JSX (React).
// Gunakan <Type> jika tidak menggunakan JSX.



// 3️⃣ Contoh Advanced Type Assertion
// Mari kita lihat beberapa contoh lebih kompleks di mana Type Assertion sangat berguna.

// 📌 Contoh 1: Mengambil Data dari API (Tipe any)
// Ketika kita mengambil data dari API, kita sering bekerja dengan tipe any, sehingga Type Assertion dapat membantu.


type User = {
  id: number;
  name: string;
  email: string;
};

// Simulasi data dari API
const fetchUser = (): any => {
  return { id: 1, name: "Alice", email: "alice@email.com" };
};

const user = <User>fetchUser();
// const user = fetchUser() as User;

console.log(user.name); // Alice
console.log(user.email); // alice@email.com

// ✅ Tanpa Type Assertion, TypeScript tidak bisa tahu bahwa data API memiliki struktur User.
// ✅ Dengan as User, kita memberi tahu TypeScript bahwa fetchUser() akan mengembalikan objek User.



// 📌 Contoh 2: Mengakses Properti dari DOM
// Saat bekerja dengan DOM, TypeScript sering tidak bisa menentukan elemen HTML secara otomatis.


// Mengambil elemen HTML dengan ID "myInput"
const inputElement = document.getElementById("myInput") as HTMLInputElement;
// const inputElement = <HTMLInputElement>document.getElementById("myInput");

inputElement.value = "Hello, TypeScript!";

// ✅ Tanpa Type Assertion, getElementById hanya mengembalikan HTMLElement, yang tidak memiliki properti value.
// ✅ Dengan as HTMLInputElement, kita memberi tahu TypeScript bahwa elemen ini adalah <input>.


// 📌 Contoh 3: Konversi unknown ke Tipe yang Diketahui
// Ketika menggunakan unknown, TypeScript tidak tahu tipe yang tepat, sehingga kita perlu Type Assertion.


function processData(data: unknown) {
  if (typeof data === "string") {
    let strData = data as string;
    // let strData = <string>data;
    console.log("String length:", strData.length);
  } else if (typeof data === "number") {
    // let numData = data as number;
    let numData = <number>data;
    console.log("Doubled number:", numData * 2);
  }
}

processData("Hello"); // Output: String length: 5
processData(42);      // Output: Doubled number: 84

// ✅ Dengan Type Assertion, kita bisa menggunakan properti atau operasi spesifik untuk tipe data tertentu.



// 📌 Contoh 4: Konversi Tipe dengan Interface
// Jika kita menerima objek generik tetapi tahu strukturnya, kita bisa menggunakan Type Assertion.


interface Car {
  brand: string;
  model: string;
  year: number;
}

const vehicle: any = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

const myCar = vehicle as Car;
console.log(myCar.brand); // Toyota
console.log(myCar.year);  // 2022

// ✅ Tanpa Type Assertion, TypeScript tidak tahu bahwa vehicle cocok dengan Car.

// singkatnya type Assertion ini berguna ketika kamu mendapatkan suatu hal yang tidak diketahui oleh TypeScript, namun kamu yakin bahwa tipe data tersebut cocok. contoh ada fungsi vehicle yang me return tipe any, namun karna kamu tau tipe tipe didalamnya, maka kamu buat klasifikasi sendiri di Car, yang mana myCar menyatakan kalo vehicle ini bertipe sama dengan Car, kalo ada yang beda nanti maka akan erorr.
// TypeScript memungkinkan kita untuk membuat type alias menggunakan keyword type. Ini berguna untuk menyederhanakan kode, terutama ketika mendefinisikan tipe yang panjang atau kompleks, seperti function types, union types, dan object types.

// 📌 Contoh Penggunaan Type Alias
// Function Type Alias
// Jika kita memiliki tipe fungsi yang panjang, kita bisa mendefinisikannya sebagai alias:


// type CalcFn = (x: number, y: number) => number;

// function calculate(a: number, b: number, calcFn: CalcFn) {
//     return calcFn(a, b);
// }
// Dengan ini, kita bisa menggunakan CalcFn di berbagai tempat tanpa menulis ulang tipe panjang.

// Union Type Alias


// type StringOrNum = string | number;

// let userID: StringOrNum = 123; // Bisa string atau number
// Object Type Alias


// type User = {
//     id: number;
//     name: string;
// };

// let user: User = { id: 1, name: "Alice" };
// 💡 Manfaat Type Alias: ✔ Mempermudah pembacaan kode
// ✔ Menghindari penulisan ulang tipe yang panjang
// ✔ Memudahkan penggunaan ulang tipe di berbagai bagian kode

// Fitur ini sangat penting dalam TypeScript karena meningkatkan keterbacaan dan pemeliharaan kode. 🚀

type StringOrNum = string | number;


type person1 = {
    name: string;
    age: number;
    isMarried: boolean;
    id: StringOrNum;   
}

function printPerson(person: person1, message: string) {
    console.log(`${person.name} ${message}`);
}

console.log(printPerson({name: "xnaizer", age: 34, isMarried: true, id: 123}, "hello")) // "xnaizer hello"

// Jika kita menjalankan:

// console.log(printPerson({name: "xnaizer"}, "hello"));


// Maka TypeScript akan memberikan error karena objek yang kita berikan tidak sesuai dengan tipe person1.
// Tipe person1 mengharuskan setiap objek memiliki properti berikut:

// name (string) ✅
// age (number) ❌ (tidak ada dalam input)
// isMarried (boolean) ❌ (tidak ada dalam input)
// id (string | number) ❌ (tidak ada dalam input)

// Error yang akan muncul di TypeScript:

// Argument of type '{ name: string; }' is not assignable to parameter of type 'person1'.
// Property 'age' is missing in type '{ name: string; }' but required in type 'person1'.
// Karena properti age, isMarried, dan id tidak ada, TypeScript akan menolak kode ini.



// Solusi jika ingin properti opsional
// Jika ingin agar beberapa properti tidak wajib diisi, kita bisa menggunakan tanda ? di depan properti opsional:


// type person1 = {
//     name: string;
//     age?: number;
//     isMarried?: boolean;
//     id?: string | number;    
// }

// function printPerson(person: person1, message: string) {
//     console.log(`${person.name} ${message}`);
// }

// console.log(printPerson({name: "xnaizer"}, "hello")); // ✅ Tidak error lagi
// Dengan cara ini, TypeScript tidak akan memunculkan error jika properti age, isMarried, atau id tidak ada dalam objek.



// ini

// function calculate(
//     a: number,
//     b: number,
//     calcFn: (x: number, y: number) => number
// ) {
//     return calcFn(a, b);
// }


// menjadi 
type CalcFnType = (x: number, y: number) => number;

function calculate(
    a: number,
    b: number,
    calcFn: CalcFnType // gunakan type alias untuk menghindari penulisan ulang
) {
    return calcFn(a, b);
}



// atau contoh lainnya 

type UserObject = {
    name: string;
    age: number;
}
let user: UserObject;
user = {name: "John", age: 30}


let users: UserObject[];

users = [
    {name: "John", age: 30},
    {name: "Jane", age: 25}
];
// Selain tipe objek, TypeScript juga menyediakan tipe array. Misalnya, kita ingin menyimpan daftar hobi dalam sebuah variabel:


// let hobbies: string[] = ["sports", "cooking", "reading"];
// Di sini, kita menggunakan string[] untuk menentukan bahwa hobbies harus berupa array yang berisi string. Alternatif lainnya, kita bisa menuliskan tipe array menggunakan Array<T>:


// let hobbies: Array<string> = ["sports", "cooking", "reading"];
// Cara ini lebih panjang tetapi memiliki fungsi yang sama. Selain string[], kita juga bisa menggunakan number[], boolean[], atau bahkan array berisi objek:


// let users: { name: string; age: number }[] = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 }
// ];

// Dengan array dan tipe objek, TypeScript memberikan struktur data yang lebih aman untuk digunakan dalam pengembangan, termasuk dalam proyek React.


// let hobbies;
// let hobbies: Array<string>; // ini bentuk lebih panjang
let hobbies: string[]; // ini bentuk lebih singkat
// let hobbies: number[]; // number
// let hobbies: boolean[]; // boolean
// let hobbies: { name: string; age: number }[]; // objek

hobbies = ["sports", "cooking", "reading"];
// hobbies = [1, 2, 3]; // ❌ Error


// let users: {name: string; age: number}[] = [
//     {name: "John", age: 30},
//     {name: "Jane", age: 25}
// ];

let users: {name: string; age: number}[] 

users = [
    {name: "John", age: 30},
    {name: "Jane", age: 25}
];
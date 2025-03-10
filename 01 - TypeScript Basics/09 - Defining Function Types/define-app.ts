// Dalam JavaScript, fungsi adalah nilai, sehingga dapat digunakan sebagai argumen dalam fungsi lain. Misalnya, kita bisa membuat fungsi calculate yang menerima dua angka dan sebuah fungsi perhitungan sebagai parameter ketiga:


// function calculate(a: number, b: number, calcFn: (x: number, y: number) => number): number {
//     return calcFn(a, b);
// }
// Di TypeScript, kita dapat menentukan tipe untuk fungsi sebagai parameter menggunakan function type, yang dituliskan dalam bentuk arrow function di dalam tipe:


// (x: number, y: number) => number
// Tipe ini menunjukkan bahwa calcFn harus menerima dua angka dan mengembalikan angka.

// Karena fungsi juga merupakan nilai, kita dapat meneruskan fungsi lain yang memiliki tanda tangan yang cocok:


// function add(x: number, y: number): number {
//     return x + y;
// }

// console.log(calculate(5, 3, add)); // Output: 8
// Di sini, add memiliki parameter dan return type yang sesuai dengan calcFn, sehingga dapat digunakan dalam calculate. Dengan demikian, TypeScript memastikan bahwa hanya fungsi dengan tanda tangan yang cocok yang dapat digunakan, meningkatkan keamanan tipe dan kejelasan kode. 🚀


function calculate2(a: number, b: number, calcFn){
    calcFn(a, b);
}// disini kita perlu mendefinisikan function calcFn dengan cara

// calcFn: (x: number, y: number) => number

// maka : 

function calculate1(
    a: number, 
    b: number, 
    calcFn: (x: number, y: number) => number
){
    calcFn(a, b);
}


// mari kita mencoba hal yang lebih kompleks

function calculate(
    a: number,
    b: number,
    calcFn: (x: number, y: number) => number
) {
    return calcFn(a, b);
}

// Definisi fungsi operasi matematika
const add = (x: number, y: number) => x + y;
const subtract = (x: number, y: number) => x - y;
const multiply = (x: number, y: number) => x * y;
const divide = (x: number, y: number) => x / y;

// Contoh pemanggilan
console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, subtract)); // Output: 2
console.log(calculate(5, 3, multiply)); // Output: 15
console.log(calculate(6, 3, divide)); // Output: 2





// Kata kunci interface dalam TypeScript menyediakan cara lain untuk mendefinisikan tipe objek, mirip dengan type.

// Perbedaan Utama
// interface digunakan khusus untuk objek dan mendukung pewarisan (extends).
// type lebih fleksibel, bisa digunakan untuk union, intersection, dan tipe fungsi.
// Membuat Interface
// Daripada menggunakan type, kita bisa mendefinisikan struktur objek dengan interface:


// interface Credentials {
//     email: string;
//     password: string;
// }
// Objek yang sesuai dengan interface ini harus memiliki properti yang ditentukan:


// const creds: Credentials = {
//     email: "user@example.com",
//     password: "123456"
// };
// TypeScript akan memberikan autocompletion dan pengecekan tipe, memastikan semua properti yang diperlukan ada.

// Kenapa Menggunakan interface?
// Lebih baik untuk OOP & pewarisan: Interface dapat dengan mudah diperluas dengan extends.
// Lebih direkomendasikan untuk tipe objek karena sintaksnya lebih jelas.
// Jika membutuhkan fleksibilitas lebih (seperti union atau tipe fungsi), type bisa menjadi pilihan yang lebih baik.

// type Person1 = {
//     name: string;
//     age: number;
//     isMarried: boolean;
//     id: StringOrNum;   
// }

// jika kita ingin membuat objek maka pake interface
type StringOrNum = string | number;
interface Person1 {
    name: string;
    age: number;
    isMarried: boolean;
    id: StringOrNum;   
}


// Interface untuk Object
interface Car {
    brand: string;
    model: string;
    year: number;
  }
  
  let myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
  };
  
  // myCar.year = "2022"; // ❌ Error: Type 'string' is not assignable to type 'number'



//   Function dengan Interface

interface Student {
    name: string;
    age: number;
}
  
function printStudent(student: Student): void {
    console.log(`Student: ${student.name}, Age: ${student.age}`);
}
  
printStudent({ name: "Eve", age: 21 });
  
// Selain tipe data dasar, TypeScript memungkinkan kita menggabungkan tipe-tipe tersebut dalam objek. Misalnya, kita ingin menyimpan data pengguna dalam satu variabel:


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   id: "abc"
// };

// Secara default, TypeScript akan menginferr tipe data ini, tetapi jika kita ingin menentukan struktur yang lebih ketat, kita bisa mendefinisikan tipe objek secara eksplisit:


// let user: { 
//   name: string; 
//   age: number; 
//   isAdmin: boolean; 
//   id: string | number; 
// };

// Dengan cara ini, TypeScript memastikan objek memiliki struktur yang benar, sehingga kita tidak bisa menyimpan objek kosong atau menambahkan properti yang tidak sesuai.

// Fitur ini meningkatkan keamanan tipe dalam TypeScript saat bekerja dengan objek.




// let user: object;
// user = {} ini bisa karna objek
// namun kedua hal diatas tidaklah bagus ketika kita ingin mengisi sebuah objek, karna kita harus menentukan struktur objeknya terlebih dahulu didalamnya

// oleh karnanya kita akan gunakan : 

let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

user = {
    name: "Xnaizer",
    age: 34,
    isAdmin: false,
    id: "abc"
}


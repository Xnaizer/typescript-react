// Generic Types di TypeScript
// Generic Types memungkinkan tipe yang fleksibel dan dapat beradaptasi dengan tipe lain. Contohnya adalah Array<T>, di mana T menentukan jenis data dalam array:


// const roles: Array<string> = ["admin", "user"];
// Membuat Generic Type Sendiri
// Kita bisa membuat tipe generik sendiri, misalnya DataStorage<T> untuk menyimpan data dalam array:


// class DataStorage<T> {
//   private storage: T[] = [];

//   add(item: T) {
//     this.storage.push(item);
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.add("Hello");

// const userStorage = new DataStorage<{ name: string; age: number }>();
// userStorage.add({ name: "Alice", age: 25 });
// ✅ DataStorage<string> hanya menerima string.
// ✅ DataStorage<{ name: string; age: number }> hanya menerima objek user.

// Generic Function
// Kita juga bisa membuat fungsi generik:


// function merge<T, U>(a: T, b: U) {
//   return { ...a, ...b };
// }

// const newUser = merge({ name: "Bob" }, { age: 30 });
// console.log(newUser.name, newUser.age);
// ✅ TypeScript secara otomatis menginfokan tipe parameter.
// ✅ Bisa digunakan dengan berbagai kombinasi tipe.

// Kesimpulan
// Generic Types memberikan fleksibilitas dalam menentukan tipe data.
// Dapat digunakan pada class, fungsi, dan interface.
// TypeScript mampu menginfer tipe secara otomatis.
// 🚀 Fitur ini sangat berguna untuk membangun kode yang reusable dan type-safe!



// Tidak harus T dan U, itu hanya konvensi. Kamu bisa menggunakan nama lain seperti A, B, atau nama yang lebih deskriptif seperti ItemType, KeyType, dll.

// Contoh dengan nama yang lebih deskriptif:


// function merge<ObjectType1, ObjectType2>(a: ObjectType1, b: ObjectType2) {
//   return { ...a, ...b };
// }

// const result = merge({ firstName: "Alice" }, { age: 25 });
// console.log(result.firstName, result.age);
// ✅ ObjectType1 dan ObjectType2 menggantikan T dan U.
// ✅ Bisa digunakan dengan berbagai jenis objek.

// Jadi, nama parameter generik bebas, yang penting konsisten dan mudah dipahami! 🚀


// Tipe data yang digunakan dalam generic types bisa berupa tipe bawaan TypeScript (seperti string, number, boolean), tipe objek, array, atau bahkan tipe kustom (seperti interface atau type).

// Contoh Tipe Data dalam Generic Types
// 1. Menggunakan Tipe Bawaan

// function identity<T>(value: T): T {
//   return value;
// }

// console.log(identity<number>(42)); // Output: 42
// console.log(identity<string>("Hello")); // Output: Hello
// ✅ T bisa berupa number atau string tergantung dari inputnya.

// 2. Menggunakan Array

// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }

// console.log(getFirst<number>([1, 2, 3])); // Output: 1
// console.log(getFirst<string>(["a", "b", "c"])); // Output: "a"
// ✅ T[] menunjukkan bahwa T adalah tipe elemen dalam array.

// 3. Menggunakan Object atau Interface

// interface User {
//   name: string;
//   age: number;
// }

// function getUserInfo<T extends User>(user: T): string {
//   return `Name: ${user.name}, Age: ${user.age}`;
// }

// console.log(getUserInfo({ name: "Alice", age: 25 })); 
// ✅ T extends User memastikan bahwa T memiliki properti name dan age.

// 4. Menggunakan Union Type

// function combine<T extends string | number>(a: T, b: T): string {
//   return `${a} ${b}`;
// }

// console.log(combine(10, 20)); // Output: "10 20"
// console.log(combine("Hello", "World")); // Output: "Hello World"
// ✅ T extends string | number membatasi T agar hanya bisa berupa string atau number.

// Kesimpulan
// Generic bisa menerima berbagai tipe data.
// Bisa digunakan dengan tipe bawaan, array, object, dan custom types.
// Bisa dibatasi dengan extends agar hanya menerima tipe tertentu.
// Kalau masih bingung, bisa coba buat contoh sendiri! 🚀




// let roles: Array<Role>;
// let roles: Role[];
// roles = ["admin", "user"];


// ketika kita ingin membuat storage yang bisa menampung data dengan tipe yang berbeda, kita bisa menggunakan generic types.

// type namaGenericTypes<placeholderTipeData> = { 
// storage: placeholderTipeData[] 
// }
type StringOrNum = string | number;
interface Person1 {
    name: string;
    age: number;
    isMarried: boolean;
    id: StringOrNum;   
}

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}


const stringStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
} 

const userStorage: DataStorage<Person1> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}


function merge<T, U>(a: T, b: U) {
    return { ...a, ...b };
}

const user = merge<{name: string}, {age: number}>({name: "John"}, {age: 30});

const test1 = merge<string, number>("Hello", 10);


// Generic Function

function identity<T>(value: T): T {
    return value;
}
  
console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello")); // Output: Hello
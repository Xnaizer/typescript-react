// 📌 Class dengan Generic di TypeScript
// Generic pada class memungkinkan kita untuk membuat struktur data yang fleksibel tanpa menentukan tipe data secara spesifik. Dengan Generic (<T>), kita bisa menggunakan class yang sama untuk berbagai tipe data.

// 📌 Contoh Dasar: DataStorage dengan Generic
// Kita punya class DataStorage<T> yang bisa menyimpan berbagai tipe data dalam bentuk array:


class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data = this.data.filter(i => i !== item);
  }

  getItems() {
    return [...this.data];
  }
}

// Menggunakan DataStorage untuk menyimpan string
let textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.removeItem("Hello");
console.log(textStorage.getItems()); // Output: ["World"]

// ✔ Penjelasan:

// DataStorage<T> adalah class generic yang bisa menerima tipe apa saja.
// addItem(item: T): Menambahkan item ke dalam storage.
// removeItem(item: T): Menghapus item dari storage.
// getItems(): Mengembalikan array data.
// 📌 Contoh Lanjutan: Menggunakan Number dan Object
// Generic membuat class lebih fleksibel, kita bisa gunakan dengan tipe data yang berbeda:

// 1️⃣ DataStorage untuk angka (number)

let numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems()); // Output: [20]

// ✔ DataStorage bisa digunakan untuk menyimpan angka.

// 2️⃣ DataStorage untuk objek

let objectStorage = new DataStorage<{ id: number; name: string }>();

objectStorage.addItem({ id: 1, name: "Alice" });
objectStorage.addItem({ id: 2, name: "Bob" });

// Mencoba menghapus item
objectStorage.removeItem({ id: 1, name: "Alice" });

console.log(objectStorage.getItems()); 

// ⛔ Masalah: removeItem() tidak akan menghapus objek, karena dalam JavaScript, objek dibandingkan berdasarkan referensi, bukan nilai.

// ✔ Solusi: Gunakan pencocokan berdasarkan id:


class ObjectStorage<T extends { id: number }> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(itemId: number) {
    this.data = this.data.filter(i => i.id !== itemId);
  }

  getItems() {
    return [...this.data];
  }
}

let objectStorage = new ObjectStorage<{ id: number; name: string }>();

objectStorage.addItem({ id: 1, name: "Alice" });
objectStorage.addItem({ id: 2, name: "Bob" });

// Menghapus berdasarkan id
objectStorage.removeItem(1);
console.log(objectStorage.getItems()); // Output: [{ id: 2, name: "Bob" }]
// ✔ Perbaikan: Sekarang kita menghapus berdasarkan id, bukan seluruh objek.

// 📌 Contoh Lebih Advance: Membatasi Generic dengan Extends
// Kita bisa membatasi tipe data dengan extends, misalnya hanya memperbolehkan tipe data yang memiliki id: number.


interface Identifiable {
  id: number;
}

class DataStorage<T extends Identifiable> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(id: number) {
    this.data = this.data.filter(item => item.id !== id);
  }

  getItems() {
    return [...this.data];
  }
}

let userStorage = new DataStorage<{ id: number; name: string }>();
userStorage.addItem({ id: 1, name: "Alice" });
userStorage.addItem({ id: 2, name: "Bob" });
userStorage.removeItem(1);

console.log(userStorage.getItems()); // Output: [{ id: 2, name: "Bob" }]
// ✔ Penjelasan:

// T extends Identifiable → Hanya menerima tipe yang memiliki id: number.
// removeItem(id: number) → Menghapus item berdasarkan ID.
// 📌 Menggunakan Beberapa Generic dalam Satu Class
// Kita bisa menggunakan lebih dari satu generic (<T, U>) untuk meningkatkan fleksibilitas.


class KeyValueStorage<K, V> {
  private data = new Map<K, V>();

  setItem(key: K, value: V) {
    this.data.set(key, value);
  }

  getItem(key: K): V | undefined {
    return this.data.get(key);
  }

  removeItem(key: K) {
    this.data.delete(key);
  }
}

// Contoh dengan string sebagai key, dan number sebagai value
let numberMap = new KeyValueStorage<string, number>();
numberMap.setItem("age", 25);
console.log(numberMap.getItem("age")); // Output: 25

// Contoh dengan number sebagai key, dan string sebagai value
let userMap = new KeyValueStorage<number, string>();
userMap.setItem(1, "Alice");
userMap.setItem(2, "Bob");

console.log(userMap.getItem(1)); // Output: Alice
// ✔ Keuntungan:

// Memungkinkan penyimpanan Key-Value dengan tipe data yang berbeda.
// Menggunakan Map<K, V> agar lebih efisien.
// 📌 Apa Itu Intersection Types di TypeScript?
// Intersection types (&) digunakan untuk menggabungkan dua atau lebih tipe (interface atau type alias) menjadi satu. Ini berguna saat kita ingin menggabungkan properti dari beberapa tipe ke dalam satu objek.

// 📌 Contoh Sederhana Intersection Types
// Mari kita lihat contoh dasar bagaimana intersection bekerja:


interface Employee {
    name: string;
    position: string;
  }
  
  interface Freelancer {
    hourlyRate: number;
  }
  
  type Developer = Employee & Freelancer;
  
  let dev: Developer = {
    name: "Charlie",
    position: "Full-Stack Developer",
    hourlyRate: 50,
  };

console.log(dev.name);       // Charlie
console.log(dev.position);   // Full-Stack Developer
console.log(dev.hourlyRate); // 50



// 📌 Contoh Lebih Advance
// Mari kita buat contoh yang lebih kompleks dengan tiga tipe berbeda.


interface Person {
  name: string;
  age: number;
}

interface Worker {
  company: string;
  jobTitle: string;
}

interface Coder {
  programmingLanguages: string[];
}

// Menggabungkan ketiga interface
type SoftwareEngineer = Person & Worker & Coder;

const engineer1: SoftwareEngineer = {
  name: "Alice",
  age: 30,
  company: "TechCorp",
  jobTitle: "Backend Developer",
  programmingLanguages: ["TypeScript", "Go", "Rust"],
};

console.log(engineer1); // Output: { name: 'Alice', age: 30, company: 'TechCorp', jobTitle: 'Backend Developer', programmingLanguages: [ 'TypeScript', 'Go', 'Rust' ] }
// ✔ Penjelasan:

// SoftwareEngineer menggabungkan Person, Worker, dan Coder.
// engineer harus memiliki semua properti dari tiga interface.



// 📌 Menggunakan Intersection dengan Fungsi
// Intersection juga berguna saat kita ingin membuat fungsi yang menerima gabungan tipe data.


interface HasID {
  id: number;
}

interface HasTimestamp {
  createdAt: Date;
}

// Menggabungkan kedua interface
type Entity = HasID & HasTimestamp;

function logEntity(entity: Entity) {
  console.log(`Entity ID: ${entity.id}, Created At: ${entity.createdAt}`);
}

const myEntity: Entity = { id: 101, createdAt: new Date() };
logEntity(myEntity);
// Output: Entity ID: 101, Created At: 2025-03-09T12:00:00.000Z

// ✔ Penjelasan:

// Fungsi logEntity menerima objek yang memiliki id dan createdAt.
// Jika salah satu properti hilang, TypeScript akan memberikan error.



// 📌 Intersection vs Union Type
// Intersection (&) menggabungkan properti, sedangkan Union (|) memilih salah satu tipe.

// 🟢 Intersection (&)

interface A {
  propA: string;
}

interface B {
  propB: number;
}

type C = A & B;

const obj: C = { propA: "Hello", propB: 123 }; // Harus memiliki semua properti
// ✔ Harus memiliki semua properti dari A dan B.

// 🔴 Union (|)

type D = A | B;

const obj1: D = { propA: "Hello" };  // ✅ Boleh hanya `propA`
const obj2: D = { propB: 123 };      // ✅ Boleh hanya `propB`
const obj3: D = { propA: "Hello", propB: 123 }; // ✅ Bisa keduanya
// ✔ Bisa memiliki salah satu properti, tidak wajib semua.


// 📌 Intersection dengan Class
// Intersection juga bisa digunakan dengan class, seperti contoh berikut:


class Animal {
  species: string;
  constructor(species: string) {
    this.species = species;
  }
}

class Pet {
  owner: string;
  constructor(owner: string) {
    this.owner = owner;
  }
}

// Menggunakan Intersection
type PetAnimal = Animal & Pet;

const myPet: PetAnimal = {
  species: "Dog",
  owner: "John",
};

console.log(myPet);

// ✔ Penjelasan:

// PetAnimal harus memiliki properti dari Animal (species) dan Pet (owner).
// Namun, Class tidak bisa langsung di-merge, hanya Type Alias yang bisa.

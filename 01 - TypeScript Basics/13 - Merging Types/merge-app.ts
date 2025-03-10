// Menggabungkan Tipe dengan & dan extends
// Di TypeScript, kita bisa menggabungkan beberapa tipe objek menggunakan & (intersection) atau extends (interface).

// Menggunakan & dengan type

// type Admin = { permissions: string[] };
// type AppUser = { username: string };

// type AppAdmin = Admin & AppUser; // Gabungan kedua tipe
// Sekarang, AppAdmin harus memiliki permissions dan username:


// const admin: AppAdmin = { permissions: ["read"], username: "admin123" };
// Menggunakan extends dengan interface
// Jika menggunakan interface, kita pakai extends:


// interface Admin { permissions: string[]; }
// interface AppUser { username: string; }

// interface AppAdmin extends Admin, AppUser {}
// Sama seperti tipe sebelumnya, AppAdmin harus memiliki kedua properti.

// Kesimpulan
// Gunakan & untuk menggabungkan type objek.
// Gunakan extends jika menggunakan interface untuk memperluas tipe.
// Keduanya berfungsi sama, pilih sesuai kebutuhan proyek.




type Admin = {
    name: string;
    privileges: string[];
};

type AppUser = {
    name: string;
    startDate: Date;
};

type AdminUser = Admin & AppUser;

interface Admin1 {
    name: string;
    privileges: string[];
}

interface AppUser1 {
    name: string;    
    startDate: Date;    
}

interface AdminUser1 extends Admin1, AppUser1 {}

let admin = {
    name: "Xnaizer",
    privileges: ["read", "write"],
    startDate: new Date()
}



// 1️⃣ implements → Bisa Menambah Properti Baru
// Ketika sebuah class mengimplementasikan (implements) sebuah interface, class tersebut harus menyediakan metode dan properti yang didefinisikan dalam interface, tetapi boleh menambahkan properti atau metode tambahan yang tidak ada dalam interface.

// Contoh: implements bisa menambah properti baru

interface Identifiable {
  id: number;
}

interface Repository<T extends Identifiable> {
  findById(id: number): T | undefined;
  add(item: T): void;
}

class UserRepo implements Repository<{ id: number; name: string }> {
  private users: { id: number; name: string; email?: string }[] = []; // Tambahan properti email

  add(user: { id: number; name: string; email?: string }) {
    this.users.push(user);
  }

  findById(id: number) {
    return this.users.find(user => user.id === id);
  }

  getAllUsers() {
    return this.users; // Metode tambahan yang tidak ada di Repository<T>
  }
}

// ✅ Boleh menambahkan properti baru (email & getAllUsers()) tanpa masalah
// ✅ Tidak harus sepenuhnya sesuai dengan T, asalkan T tetap bisa diterapkan

// 2️⃣ extends → Harus Sesuai dengan Struktur Parent
// Ketika sebuah class mewarisi (extends) dari class lain, class tersebut mendapatkan seluruh properti dan metode dari parent-nya dan bisa menambahkan metode/properti baru, tetapi tidak bisa mengubah properti yang sudah ada tanpa override.

// Contoh: extends harus sesuai dengan struktur parent

class BaseUser {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class AdminUser extends BaseUser {
  role: string; // Properti tambahan diperbolehkan

  constructor(id: number, name: string, role: string) {
    super(id, name); // Wajib memanggil constructor parent
    this.role = role;
  }
}

const admin = new AdminUser(1, "Alice", "admin");
console.log(admin); // Output: { id: 1, name: "Alice", role: "admin" }
// ✅ Bisa menambahkan properti (role)
// ❌ Tidak bisa mengubah id dan name dari BaseUser, karena mereka sudah ditetapkan

// Jika kita mencoba mengganti tipe name dengan number, akan error:


// class WrongAdmin extends BaseUser {
//   name: number; // ❌ ERROR: Property 'name' must be of type 'string'
// }
// Karena extends berarti harus sesuai dengan class parent-nya.

// Kesimpulan
// ✔ implements (pada interface) hanya memeriksa apakah class memiliki metode dan properti yang diwajibkan, tetapi tidak membatasi class untuk menambahkan lebih banyak properti atau metode.
// ✔ extends (pada class) mewarisi semua properti dan metode dari parent dan harus sesuai dengan struktur yang sudah ditetapkan dalam parent-nya.
// ✔ Jadi benar, dengan implements, kita bisa menambahkan properti tambahan seperti name, sementara dengan extends, kita harus mengikuti tipe data yang sudah ada. 🚀
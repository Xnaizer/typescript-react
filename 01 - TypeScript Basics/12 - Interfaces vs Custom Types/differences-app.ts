// Kita bisa menggunakan type dan interface untuk mendefinisikan tipe objek di TypeScript.

// Kapan Menggunakan type vs interface?
// Gunakan type jika:
// ✅ Membutuhkan tipe selain objek, seperti union atau function type.
// ✅ Menggunakan intersection (&) untuk menggabungkan tipe.

// Gunakan interface jika:
// ✅ Bekerja dengan kelas (class) karena bisa menggunakan implements.
// ✅ Membutuhkan ekstensi yang mudah (declaration merging) tanpa error.
// ✅ Membuat library yang bisa diperluas oleh developer lain.

// Contoh interface dengan Kelas
// Interface bisa menjadi "kontrak" bagi kelas:


// interface Credentials {
//     email: string;
//     password: string;
// }

// class AuthCredentials implements Credentials {
//     email: string;
//     password: string;

//     constructor(email: string, password: string) {
//         this.email = email;
//         this.password = password;
//     }
// }
// Sekarang kita bisa menggunakan AuthCredentials dalam fungsi yang menerima Credentials:


// function login(creds: Credentials) {
//     console.log(`Logging in with ${creds.email}`);
// }

// login(new AuthCredentials("user@example.com", "123456"));
// TypeScript tahu bahwa AuthCredentials memenuhi Credentials, jadi bisa digunakan tanpa masalah.

// Kesimpulan
// Gunakan interface untuk objek & kelas yang perlu diperluas.
// Gunakan type untuk fleksibilitas lebih, seperti union dan function type.
// Di kebanyakan kasus, pilihan antara type dan interface tergantung preferensi dan kebutuhan proyek.
interface Credentials {
    email: string;
    password: string;
}

interface Credentials {
    mode: string;
}

let creds: Credentials 

creds = {
    email: "user@example.com",
    password: "123456",
    mode: "mode"
}

class AuthCredentials implements Credentials {
    email: string;
    password: string;
    mode: string
    userName: string // tambahan

    constructor(email: string, password: string, mode: string, userName: string) {
        this.email = email;
        this.password = password;
        this.mode = mode;
        this.userName = userName
    }
}

function login(creds: Credentials) {
    console.log(`Logging in with ${creds.email}`);
}

login(new AuthCredentials("user@example.com", "123456", "mode", "username"));
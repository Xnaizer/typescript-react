// 📌 Apa Itu Enum dalam TypeScript?
// Enum (Enumerations) di TypeScript digunakan untuk mendefinisikan kumpulan nilai yang memiliki nama dan representasi yang tetap. Enum membantu kita membuat kode lebih terstruktur, mudah dibaca, dan mencegah kesalahan akibat penggunaan string atau angka secara langsung.

// 📌 Jenis Enum dalam TypeScript
// 1️⃣ String Enum (Enum dengan String)
// String Enum cocok digunakan jika kita ingin setiap nilai direpresentasikan dengan string yang lebih deskriptif.

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let move: Direction = Direction.Up;
console.log(move); // Output: UP

// ✔ Kelebihan:

// Lebih mudah dibaca dalam log/debugging.
// Menghindari kemungkinan kesalahan saat menggunakan angka.



// 2️⃣ Numeric Enum (Enum dengan Angka)
// Secara default, TypeScript menggunakan angka sebagai nilai Enum, dimulai dari 0 dan bertambah +1 secara otomatis.

enum Status {
    Pending,   // 0
    Approved,  // 1
    Rejected,  // 2
}

let myStatus: Status = Status.Approved;
console.log(myStatus); // Output: 1

// ✔ Kelebihan:

// Lebih ringan dibandingkan string.
// Bisa digunakan untuk perhitungan matematis.


// 3️⃣ Custom Numeric Enum
// Kita juga bisa menentukan nilai awal dan membiarkan TypeScript meneruskan nilai berikutnya.

enum ResponseCode {
    Success = 200,
    NotFound = 404,
    InternalError = 500,
}

console.log(ResponseCode.Success);     // Output: 200
console.log(ResponseCode.InternalError); // Output: 500

// ✔ Kelebihan:

// Bisa digunakan untuk representasi kode HTTP atau lainnya.


// 4️⃣ Heterogeneous Enum (Campuran String dan Angka)
// Kita bisa mencampur string dan angka, tetapi ini jarang digunakan.


enum MixedEnum {
  Yes = "YES",
  No = 0,
}

console.log(MixedEnum.Yes); // Output: YES
console.log(MixedEnum.No);  // Output: 0

// ✔ Kelebihan:

// Bisa fleksibel, tetapi lebih sulit dipahami.


// 📌 Contoh Lanjutan (Advanced)
// 🛠 Menggunakan Enum dalam Function

enum LogLevel {
  Info = "INFO",
  Warning = "WARNING",
  Error = "ERROR",
}

function logMessage(level: LogLevel, message: string) {
  console.log(`[${level}] ${message}`);
}

logMessage(LogLevel.Info, "Application started");
// Output: [INFO] Application started
logMessage(LogLevel.Error, "Something went wrong!");
// Output: [ERROR] Something went wrong!

// ✔ Kelebihan:

// Mencegah kesalahan akibat penggunaan string secara langsung ("INFO", "WARNING").
// Kode lebih mudah dipahami.



// 🛠 Menggunakan Enum dalam Switch Case

enum Status {
  Pending1,
  Approved1,
  Rejected1,
}

function getStatusMessage(status: Status) {
  switch (status) {
    case Status.Pending1:
      return "Your request is still pending.";
    case Status.Approved1:
      return "Your request has been approved.";
    case Status.Rejected1:
      return "Your request was rejected.";
    default:
      return "Unknown status.";
  }
}

console.log(getStatusMessage(Status.Pending)); // Output: Your request is still pending.

// ✔ Kelebihan:

// Mempermudah pengelolaan status.
// Tidak perlu menggunakan string literal yang rentan typo.



// 🛠 Enum dengan Key dan Value
// Kita bisa mendapatkan key dan value dari Enum:

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

console.log(Color.Red);        // Output: RED
console.log(Color["Green"]);   // Output: GREEN
console.log(Object.keys(Color)); // Output: [ 'Red', 'Green', 'Blue' ]
console.log(Object.values(Color)); // Output: [ 'RED', 'GREEN', 'BLUE' ]

// ✔ Kelebihan:

// Bisa digunakan untuk iterasi melalui enum.




// 📌 Enum vs Union Type
// Terkadang, Union Type lebih direkomendasikan daripada Enum karena lebih fleksibel dan lebih ringan.


// Menggunakan Enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Alternatif dengan Union Type (Lebih ringan)
type DirectionType = "UP" | "DOWN" | "LEFT" | "RIGHT";

function move(direction: DirectionType) {
  console.log(`Moving ${direction}`);
}

move("UP");   // ✅ Valid
// move("FORWARD"); // ❌ Error: Type '"FORWARD"' is not assignable

// ✔ Kelebihan Union Type dibanding Enum:

// Lebih ringan karena tidak menghasilkan objek tambahan dalam JavaScript.

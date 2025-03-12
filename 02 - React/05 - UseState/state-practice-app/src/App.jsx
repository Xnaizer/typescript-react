import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCount, setIsCount] = useState(0);
  const [isWordChange, setIsWordChange] = useState("Alice");
  const [isAgeChange, setIsAgeChange] = useState(20);
  const [isVisible, setIsVisible] = useState(true);
  const [isTypeWrite, setIsTypeWrite] = useState("")
  const [isFormChange, setIsFormChange] = useState({name: "", email:""})
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={`min-h-screen ${isDarkMode? "bg-gray-900" : "bg-gray-100"} text-gray-900`}>
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8 bg-linear-45/oklch text-transparent bg-clip-text from-blue-500 to-pink-500">UseState Practices</h1>

        <div className="flex justify-end mb-4">
          <button className={`px-4 py-2  rounded shadow font-semibold ${isDarkMode? "bg-slate-300 text-black": "bg-slate-700 text-white"}`}  onClick={() => setIsDarkMode(!isDarkMode)}>
            Dark Mode
          </button>
        </div>

        <div className="grid gap-6">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2>Count: {isCount}</h2>
            <button className="mt-2 px-4 py-2 mr-4 bg-green-500 text-white rounded" onClick={() => setIsCount(isCount + 1)}>Tambah</button>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setIsCount(0)}>Reset</button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <h2>Hello, {isWordChange}!</h2>
            <button className="mt-2 px-4 py-2 bg-blue-500 mr-4 text-white rounded" onClick={() => setIsWordChange("Bobi")}>Ubah Nama</button>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setIsWordChange("Alice")}>Reset</button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <h2>Umur: {isAgeChange}</h2>
            <button className="mt-2 px-4 mr-4 py-2 bg-slate-700 text-white rounded" onClick={() => isAgeChange >= 0 && setIsAgeChange(isAgeChange + 1)}>( + )</button>
            <button className="mt-2 px-4 py-2 bg-slate-700 mr-4 text-white rounded" onClick={() => isAgeChange > 0 && setIsAgeChange(isAgeChange - 1)}>( - )</button>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setIsAgeChange(0)}>Reset</button>
          </div>


          <div className="p-4 bg-white shadow-md rounded-md">
            <input className="border p-2 w-full" type="text" onChange={(e) => setIsTypeWrite(e.target.value)}/>
            <p className="mt-2">Input: {isTypeWrite} </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            {isVisible? <h2>Halo, saya terlihat!</h2> : ""}
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setIsVisible(!isVisible)}>Toggle Tampilkan</button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <input 
            className="border p-2 w-full mb-2" 
            type="text" 
            name="name" 
            placeholder="Nama" 
            value={isFormChange.name} 
            onChange={(e) => setIsFormChange({...isFormChange, [e.target.name]: e.target.value })}
            />
            <input 
            className="border p-2 w-full" 
            type="email" 
            name="email"
            placeholder="Email" 
            value={isFormChange.email}
            onChange={(e) => setIsFormChange({...isFormChange, [e.target.name]: e.target.value})}
            />
            <p className="mt-2">Nama: {isFormChange.name}</p>
            <p>Email: {isFormChange.email}</p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <input className="mr-2" type="checkbox" id="checbox-id-1"  />
            <label htmlFor="checbox-id-1"> Dicentang </label>
          </div>

          <div className="p-4 bg-white shadow-md rounded-md">
            <input className="border p-2 w-full" type="text" placeholder="Cari..." />
            <ul className="mt-2">
              <li className="border-b py-1">Apple</li>
              <li className="border-b py-1">Banana</li>
              <li className="border-b py-1">Cherry</li>
              <li className="border-b py-1">Date</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

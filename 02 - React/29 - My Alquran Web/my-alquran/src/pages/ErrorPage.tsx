import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-body dark:bg-body-dark text-gray-900 dark:text-white px-6 text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold">404</h1>
            <h2 className="text-2xl md:text-4xl font-semibold mt-4">Halaman Tidak Ditemukan!</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-lg">
                Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            </p>
            <button 
                onClick={() => navigate("/")} 
                className="px-6 py-3 bg-slate-500 text-white rounded-lg shadow-lg hover:bg-slate-600 transition mt-6 text-sm md:text-base"
            >
                Kembali ke Home
            </button>
        </div>
    );
}

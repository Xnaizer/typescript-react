import { useEffect, useState } from "react";
import axios from "axios";
import ThemeCard from "../components/ThemeCard";
import LoadingSpinner from "./LoadingSpinner";

interface ThemeResponse {
    status: boolean;
    request: { path: string; tema: string };
    info: { tema: { id: string; name: string }; max: number };
    data: ThemeData[];
}

interface ThemeData {
    arab: string;
    asbab: string;
    audio: string;
    ayah: string;
    hizb: string;
    id: string;
    juz: string;
    latin: string;
    notes: string | null;
    page: string;
    surah: string;
    text: string;
    theme: string;
}

export default function QuranThemes() {
    const [theme, setTheme] = useState<ThemeResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchTheme = async () => {
            setLoading(true);
            try {
                const response = await axios.get<ThemeResponse>(`https://api.myquran.com/v2/quran/ayat/tema/${currentPage}`);
                setTheme(response.data);
            } catch (error) {
                console.error("Error fetching theme:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTheme();
    }, [currentPage]);

    return (
        <div className="min-h-screen bg-body dark:bg-body-dark p-4 flex flex-col items-center">
            <h1 className="text-3xl lg:text-5xl font-subtitle text-text dark:text-text-dark pt-8 pb-10 lg:pt-14 lg:pb-16">
                Quran Themes
            </h1>

            
            <div className="flex items-center gap-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-gray-400" : "bg-blue-500 text-white"}`}
                >
                    Previous
                </button>
                <select
                    value={currentPage}
                    onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                    {Array.from({ length: 1121 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
                <button
                    disabled={currentPage === 1121}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 1121))}
                    className={`px-4 py-2 rounded-lg ${currentPage === 1121 ? "bg-gray-400" : "bg-blue-500 text-white"}`}
                >
                    Next
                </button>
            </div>

            
            {loading ? (
                <LoadingSpinner />
            ) : theme ? (
                <div className="w-full max-w-3xl mt-6">
                    <ThemeCard
                        key={theme.info.tema.id}
                        title={theme.info.tema.name}
                        description={theme.data.length > 0 ? theme.data[0].text : "No description available."}
                    />
                </div>
            ) : (
                <p className="mt-6 text-red-500">Theme not found.</p>
            )}
        </div>
    );
}

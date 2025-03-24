import { useEffect, useState } from "react";
import SurahCard from "../components/SurahCard";
import axios from "axios";

interface Surah {
    status: boolean;
    request: {
      path: string;
    };
    data: SurahItem[];
}

interface SurahItem {
    audio_url: string;
    name_en: string;
    name_id: string;
    name_long: string;
    name_short: string;
    number: string;
    number_of_verses: string;
    revelation: string;
    revelation_en: string;
    revelation_id: string;
    sequence: string;
    tafsir: string;
    translation_en: string;
    translation_id: string;
}

export default function Quran() {
    const [dataSurah, setDataSurah] = useState<Surah | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getSurah = async () => {
            try {
                const { data } = await axios.get<Surah>("https://api.myquran.com/v2/quran/surat/semua");
                setDataSurah(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        getSurah();
    }, []);

    return (
        <>
            <div className="bg-body dark:bg-body-dark flex flex-col items-center px-4 max-w-full">
                <h1 className="text-3xl lg:text-5xl  font-subtitle text-text dark:text-text-dark pt-8 pb-10 lg:pt-14 lg:pb-16">Read Al - Quran</h1>
            </div>
            
            <div className="bg-body dark:bg-body-dark flex flex-col items-center px-4 max-w-full">
                
                <div className="flex gap-5 pt-2 max-w-5xl w-full justify-start items-start">
                    <button className="text-lg  font-title text-text dark:text-text-dark hover:text-first dark:hover:text-first-dark">
                        Surah
                    </button>
                    <button className="text-lg   font-title text-text dark:text-text-dark hover:text-first dark:hover:text-first-dark">
                        Juz
                    </button>
                    <button className="text-lg   font-title text-text dark:text-text-dark hover:text-first dark:hover:text-first-dark">
                        Pages
                    </button>
                </div>

                
                <div className="h-0.5 bg-text dark:bg-text-light w-full max-w-6xl my-4" />
            </div>



            <div className="min-h-screen bg-body dark:bg-body-dark p-4 flex flex-col items-center">
                
                {loading && <p aria-live="polite" className="text-center text-lg">Loading...</p>}

                
                {!loading && dataSurah && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl mx-auto">
                        {dataSurah.data.map((surah) => (
                            <SurahCard
                                key={surah.number}
                                nomor={surah.number} 
                                namaLatin={surah.name_id}
                                nama={surah.name_short}
                                jumlahAyat={surah.number_of_verses}
                            />
                        ))}
                    </ul>
                )}

                
                {!loading && !dataSurah && (
                    <p className="text-center text-lg text-red-500">Data tidak ditemukan</p>
                )}
            </div>

        </>

    );
}

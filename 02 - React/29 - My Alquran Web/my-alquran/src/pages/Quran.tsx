import { useEffect, useState } from "react";
import SurahCard from "../components/SurahCard";
import axios from "axios";
import JuzCard from "../components/JuzCard";
import PageCard from "../components/PageCard";
// import ThemeCard from "../components/ThemeCard";
import { useNavigate } from "react-router-dom";

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

interface JuzResponse {
    status: boolean;
    request: {
        path: string;
    };
    data: JuzItem[];
}

interface JuzItem {
    ayat_arab: string;
    ayat_indo: string;
    ayat_latin: string;
    name: string;
    name_end_arab: string;
    name_end_id: string;
    name_start_arab: string;
    name_start_id: string;
    number: string;
    surah_id_end: string;
    surah_id_start: string;
    verse_end: string;
    verse_start: string;
}

export default function Quran() {
    const [dataSurah, setDataSurah] = useState<Surah | null>(null);
    const [dataJuz, setDataJuz] = useState<JuzResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<"surah" | "juz" | "page" | "theme">("surah");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [surahResponse, juzResponse] = await Promise.all([
                    axios.get<Surah>("https://api.myquran.com/v2/quran/surat/semua"),
                    axios.get<JuzResponse>("https://api.myquran.com/v2/quran/juz/semua"),
                ]);

                setDataSurah(surahResponse.data);
                setDataJuz(juzResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleTabChange = (tab: "surah" | "juz" | "page" | "theme") => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="bg-body dark:bg-body-dark flex flex-col items-center px-4 max-w-full">
                <h1 className="text-3xl lg:text-5xl font-subtitle text-text dark:text-text-dark pt-8 pb-10 lg:pt-14 lg:pb-16">
                    Read Al-Quran
                </h1>
            </div>

            <div className="bg-body dark:bg-body-dark flex flex-col items-center px-4 max-w-full">
                <div className="flex gap-5 pt-2 max-w-5xl w-full justify-start items-start">
                    {["surah", "juz", "page", "theme"].map((tab) => (
                        <button
                            key={tab}
                            className={`text-lg font-title transition-all duration-200 ${
                                activeTab === tab
                                    ? "text-first dark:text-first-dark font-bold"
                                    : "text-text dark:text-text-dark"
                            } hover:text-first dark:hover:text-first-dark`}
                            onClick={() => handleTabChange(tab as "surah" | "juz" | "page" | "theme")}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="h-0.5 bg-text dark:bg-text-light w-full max-w-6xl my-4" />
            </div>

            <div className="min-h-screen bg-body dark:bg-body-dark p-4 flex flex-col items-center">
                {loading && <p aria-live="polite" className="text-center text-lg">Loading...</p>}

                {!loading && (
                    <>
                        {activeTab === "surah" && dataSurah && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl mx-auto">
                                {dataSurah.data.map((surah) => (
                                    <li
                                        key={surah.number}
                                        onClick={() => navigate(`/surah/${surah.number}`)} 
                                        className="cursor-pointer"
                                    >
                                        <SurahCard
                                            nomor={surah.number}
                                            namaLatin={surah.name_id}
                                            nama={surah.name_short}
                                            jumlahAyat={surah.number_of_verses}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}


                        {activeTab === "juz" && dataJuz && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl mx-auto">
                                {dataJuz.data.map((juz) => (
                                   <li
                                   key={juz.number}
                                   onClick={() => navigate(`/juz/${juz.number}`)}
                                   className="cursor-pointer"
                                   >
                                     <JuzCard
                                        key={juz.number}
                                        nomor={juz.number}
                                        nama={juz.name}
                                        namaStart={juz.name_start_id}
                                        ayatStart={juz.verse_start}
                                        namaEnd={juz.name_end_id}
                                        ayatEnd={juz.verse_end}
                                    />
                                   </li>
                                ))}
                            </ul>
                        )}

                        {activeTab === "page" && <PageCard />}
                        {activeTab === "theme" && ""}
                    </>
                )}

                {!loading && !dataSurah && !dataJuz && (
                    <p className="text-center text-lg text-red-500">Data tidak ditemukan</p>
                )}
            </div>
        </>
    );
}

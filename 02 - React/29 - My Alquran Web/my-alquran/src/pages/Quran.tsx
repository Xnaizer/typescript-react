import { useEffect, useState } from "react";
import SurahCard from "../components/SurahCard";
import axios from "axios";
import JuzCard from "../components/JuzCard";
import PageCard from "../components/PageSection";
import ThemeCard from "../components/ThemeCard";
import { useNavigate } from "react-router-dom";

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

interface Surah {
    status: boolean;
    request: { path: string };
    data: SurahItem[];
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

interface JuzResponse {
    status: boolean;
    request: { path: string };
    data: JuzItem[];
}

interface ThemeItem {
    id: string;
    name: string;
}

interface Theme {
    status: boolean;
    request: { path: string };
    data: ThemeItem[];
}

export default function Quran() {
    const [dataSurah, setDataSurah] = useState<Surah | null>(null);
    const [dataJuz, setDataJuz] = useState<JuzResponse | null>(null);
    const [dataTheme, setDataTheme] = useState<Theme | null>(null);
    const [searchTheme, setSearchTheme] = useState<string>("");
    const [filteredThemes, setFilteredThemes] = useState<ThemeItem[]>([]);

    const [loading, setLoading] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<"surah" | "juz" | "page" | "theme">("surah");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [surahResponse, juzResponse, themeResponse] = await Promise.all([
                    axios.get<Surah>("https://api.myquran.com/v2/quran/surat/semua"),
                    axios.get<JuzResponse>("https://api.myquran.com/v2/quran/juz/semua"),
                    axios.get<Theme>("https://api.myquran.com/v2/quran/tema/semua"),
                ]);

                setDataSurah(surahResponse.data);
                setDataJuz(juzResponse.data);
                setDataTheme(themeResponse.data);
                setFilteredThemes(themeResponse.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (dataTheme) {
            const results = dataTheme.data.filter((theme) =>
                theme.name.toLowerCase().includes(searchTheme.toLowerCase())
            );
            setFilteredThemes(results);
        }
    }, [searchTheme, dataTheme]);

    return (
        <div className="min-h-screen bg-body dark:bg-body-dark p-4 flex flex-col items-center">
            <h1 className="text-3xl lg:text-5xl font-subtitle text-text dark:text-text-dark pt-8 pb-10 lg:pt-14 lg:pb-16">
                Read Al-Quran
            </h1>

            <div className="flex gap-5 pt-2 max-w-5xl w-full justify-start items-start">
                {["surah", "juz", "page", "theme"].map((tab) => (
                    <button
                        key={tab}
                        className={`text-lg font-title transition-all duration-200 ${
                            activeTab === tab
                                ? "text-first dark:text-first-dark font-bold"
                                : "text-text dark:text-text-dark"
                        } hover:text-first dark:hover:text-first-dark`}
                        onClick={() => setActiveTab(tab as "surah" | "juz" | "page" | "theme")}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            <div className="h-0.5 bg-text dark:bg-text-light w-full max-w-6xl my-4" />

            {loading && (
                <>
                    <div className="flex items-center justify-center h-screen bg-body dark:bg-body-dark">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-4 dark:border-white border-black"></div>
                    </div>
                </>
            )}

            {!loading && (
                <>
                    {activeTab === "surah" && dataSurah && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl mx-auto">
                            {dataSurah.data.map((surah) => (
                                <li key={surah.number} onClick={() => navigate(`/surah/${surah.number}`)} className="cursor-pointer">
                                    <SurahCard nomor={surah.number} namaLatin={surah.name_id} nama={surah.name_short} jumlahAyat={surah.number_of_verses} />
                                </li>
                            ))}
                        </ul>
                    )}

                    {activeTab === "juz" && dataJuz && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl mx-auto">
                            {dataJuz.data.map((juz) => (
                                <li key={juz.number} onClick={() => navigate(`/juz/${juz.number}`)} className="cursor-pointer">
                                    <JuzCard nomor={juz.number} nama={juz.name} namaStart={juz.name_start_id} ayatStart={juz.verse_start} namaEnd={juz.name_end_id} ayatEnd={juz.verse_end} />
                                </li>
                            ))}
                        </ul>
                    )}

                    {activeTab === "page" && <PageCard />}

                    {activeTab === "theme" && dataTheme && (
                        <>
                            <input type="text" placeholder="Cari tema..." className="max-w-xl w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-first transition duration-300 mt-8 mb-12 " value={searchTheme} onChange={(e) => setSearchTheme(e.target.value)} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl mx-auto">
                                {filteredThemes.map((item) => (
                                    <li key={item.id} onClick={() => navigate(`/tema/${item.id}`)} className="cursor-pointer">
                                        <ThemeCard id={item.id} name={item.name} />
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

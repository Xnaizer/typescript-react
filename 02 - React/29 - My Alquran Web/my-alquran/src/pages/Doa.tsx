import axios from "axios";
import { useEffect, useState } from "react";

interface DataDoa {
    status: boolean;
    request: {
        path: string;
    };
    data: DataDoaItem[];
}

interface DataDoaItem {
    arab: string;
    indo: string;
    judul: string;
    source: string;
}

export default function Doa() {
    const [activeTab, setActiveTab] = useState<"quran" | "hadits" | "pilihan" | "harian" | "ibadah" | "haji" | "lainnya">("quran");
    const [loading, setLoading] = useState<boolean>(true);
    const [dataDoa, setDataDoa] = useState<DataDoa | null>(null);
    const [searchDoa, setSearchDoa] = useState<string>("");
    const [filteredDoa, setFilteredDoa] = useState<DataDoaItem[]>([]);

    useEffect(() => {
        const fetchDoa = async () => {
            setLoading(true);
            try {
                const response = await axios.get<DataDoa>(`https://api.myquran.com/v2/doa/sumber/${activeTab}`);
                setDataDoa(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDoa();
    }, [activeTab]);

    useEffect(() => {
        if (dataDoa) {
            const results = dataDoa.data.filter((doa) => doa.judul.toLowerCase().includes(searchDoa.toLowerCase()));
            setFilteredDoa(results);
        }
    }, [searchDoa, dataDoa]);

    return (
        <section className="min-h-screen bg-body dark:bg-body-dark p-4 flex flex-col items-center">
            <h1 className="text-3xl lg:text-5xl font-subtitle text-title dark:text-title-dark pt-8 pb-10 lg:pt-14 lg:pb-16">
                Read Doa
            </h1>
            
            <div className="flex flex-wrap gap-3 md:gap-5 pt-2 max-w-5xl w-full justify-start items-start overflow-x-auto">
                <h1 className="text-lg font-title whitespace-nowrap text-text dark:text-text-dark">Reference:</h1>
                <div className="flex flex-wrap gap-3">
                    {["quran", "hadits", "pilihan", "harian", "ibadah", "haji", "lainnya"].map((tab) => (
                        <button
                            key={tab}
                            className={`text-lg font-title transition-all duration-200 ${
                                activeTab === tab
                                    ? "text-first dark:text-first-dark font-bold"
                                    : "text-text dark:text-text-dark"
                            } hover:text-first dark:hover:text-first-dark`}
                            onClick={() => setActiveTab(tab as "quran" | "hadits" | "pilihan" | "harian" | "ibadah" | "haji" | "lainnya")}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="h-0.5 bg-text dark:bg-text-light w-full max-w-6xl my-4" />
            
            <input 
                type="text" 
                placeholder="Cari tema..." 
                className="max-w-xl w-full px-4 py-2 mb-24 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-first transition duration-300 mt-8 " 
                value={searchDoa} 
                onChange={(e) => setSearchDoa(e.target.value)} 
            />
            
            {loading ? (
                <div className="text-center text-xl text-text dark:text-white">Loading...</div>
            ) : (
                <ul className="w-full max-w-6xl pb-12">
                    {filteredDoa.length > 0 ? (
                        filteredDoa.map((item, index) => (
                            <li key={index} className="max-w-4xl mx-auto py-2 px-4 md:px-8 rounded-lg ">
                                <h1 className="text-gray-600 text-lg md:text-xl dark:text-white  text-center pb-16">{item.judul}</h1>
                                <h2 className="text-3xl md:text-4xl text-end mb-4 leading-relaxed text-title dark:text-title-dark">{item.arab}</h2>
                                <h2 className="text-text text-base md:text-lg mt-3 dark:text-text-dark pb-4">{item.indo}</h2>
                                <h2 className="text-gray-600 text-sm md:text-md dark:text-white pt-4">Reference : {item.source}</h2>
                                <div className="border-t mt-4 max-w-full border-gray-300 dark:border-gray-600 mb-14"></div>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-lg text-gray-500">Tidak ada doa yang ditemukan</p>
                    )}
                </ul>
            )}
        </section>
    );
}
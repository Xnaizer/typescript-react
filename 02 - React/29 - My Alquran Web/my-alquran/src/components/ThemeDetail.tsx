import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

interface Themes {
  status: boolean;
  info: {
    tema: {
      id: string;
      name: string;
    };
    max: number;
  };
  data: ThemesItem[];
}

interface ThemesItem {
  arab: string;
  audio: string;
  ayah: string;
  latin: string;
  notes?: string | null;
  page: string;
  surah: string;
  text: string;
}

export default function ThemeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [themesData, setThemesData] = useState<ThemesItem[]>([]);
  const [themeInfo, setThemeInfo] = useState<Themes["info"] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTheme, setCurrentTheme] = useState<number>(Number(id) || 1);

  useEffect(() => {
    const fetchTheme = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Themes>(
          `https://api.myquran.com/v2/quran/ayat/tema/${currentTheme}`
        );
        setThemesData(res.data.data);
        setThemeInfo(res.data.info); // Menyimpan info tema
      } catch (error) {
        console.error("Error While Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTheme();
  }, [currentTheme]);

  const handlePrevTheme = () => {
    if (currentTheme > 1) {
      navigate(`/tema/${currentTheme - 1}`);
      setCurrentTheme((prev) => prev - 1);
    }
  };

  const handleNextTheme = () => {
    if (currentTheme < 1121) {
      navigate(`/tema/${currentTheme + 1}`);
      setCurrentTheme((prev) => prev + 1);
    }
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = parseInt(event.target.value);
    setCurrentTheme(selectedNumber);
    navigate(`/tema/${selectedNumber}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-body dark:bg-body-dark">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 dark:border-white border-black"></div>
      </div>
    );
  }

  if (!themesData.length) {
    return (
      <p className="text-center text-2xl font-title text-first min-h-screen bg-body dark:bg-body-dark pt-24">
        Data Gagal Dimuat!
      </p>
    );
  }

  return (
    <>
      <section className="bg-body dark:bg-body-dark max-w-full">
        <div className="bg-body dark:bg-body-dark flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 pt-8 gap-4 pb-12">
          <button
            className="px-4 py-2 rounded-lg text-white bg-text dark:bg-text-dark transition duration-300 hover:bg-opacity-80"
            onClick={() => navigate("/alquran")}
          >
            ← Back To Home
          </button>

          <select
            value={currentTheme}
            onChange={handleThemeChange}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-first transition duration-300"
          >
            {Array.from({ length: 1121 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Tema Ke - {num}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Menampilkan judul tema */}
      <h1 className="text-center text-xl text-title dark:text-white py-8 bg-body dark:bg-body-dark ">
        {themeInfo?.tema.name || "Tema Tidak Ditemukan"}
      </h1>

      <section className="min-h-screen bg-body dark:bg-body-dark px-6 pt-10">
        <div className="flex justify-between items-center max-w-4xl mx-auto mb-6">
          <button
            onClick={handlePrevTheme}
            disabled={currentTheme === 1}
            className="px-4 py-2 rounded-lg text-white bg-text dark:bg-text-dark disabled:opacity-50"
          >
            ← Previous
          </button>
          <h2 className="text-xl font-bold text-title dark:text-title-dark">Tema {currentTheme}</h2>
          <button
            onClick={handleNextTheme}
            disabled={currentTheme === 1121}
            className="px-4 py-2 rounded-lg text-white bg-text dark:bg-text-dark disabled:opacity-50"
          >
            Next →
          </button>
        </div>

        <section className="max-w-4xl mx-auto py-4 px-4 md:px-8 rounded-lg pt-16">
          {themesData.map((item, index) => (
            <div key={index} className="">
              <h1 className="mx-auto max-w-4xl flex text-title dark:text-white text-center text-lg pb-12">
                Surat: {item.surah} Ayat : {item.ayah}
              </h1>
              <h3 className="text-3xl md:text-4xl text-end mb-4 leading-relaxed text-title dark:text-title-dark">
                {item.arab}
              </h3>
              <p className="text-gray-600 text-lg md:text-xl dark:text-white pt-4">{item.latin}</p>
              <p className="text-text text-base md:text-lg mt-3 dark:text-text-dark pb-4">{item.text}</p>
              {/* <audio controls className="mt-2">
                <source src={item.audio} type="audio/mpeg" />
              </audio> */}
              <div className="border-t mt-4 max-w-full border-gray-300 dark:border-gray-600 mb-14"></div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

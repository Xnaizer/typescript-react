import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface SurahDetail {
  code: number;
  message: string;
  data: SurahData;
}

interface SurahData {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Record<string, string>;
  ayat: Ayat[];
  suratSelanjutnya?: SurahNavigation;
  suratSebelumnya?: SurahNavigation;
}

interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: Record<string, string>;
}

interface SurahNavigation {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}

export default function SurahDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [surahDetail, setSurahDetail] = useState<SurahData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSurah, setSelectedSurah] = useState<number>(Number(id) || 1);

  useEffect(() => {
    const fetchSurahDetail = async () => {
      setLoading(true);
      try {
        const response = await axios.get<SurahDetail>(`https://equran.id/api/v2/surat/${id}`);
        setSurahDetail(response.data.data);
      } catch (error) {
        console.error("Error fetching surah detail:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchSurahDetail();
    setSelectedSurah(Number(id) || 1); 
  }, [id]);

  const handleSurahChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = parseInt(event.target.value);
    setSelectedSurah(selectedNumber);
    navigate(`/surah/${selectedNumber}`);
  };

  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-body dark:bg-body-dark">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 dark:border-white border-black"></div>
      </div>
    );
  }

  if (!surahDetail) {
    return (
      <p className="text-center text-2xl font-title text-first min-h-screen bg-body dark:bg-body-dark pt-24">
        Data Gagal Dimuat!
      </p>
    );
  }

  return (
    <>
      <section className="bg-body dark:bg-body-dark max-w-full">
        <div className="bg-body dark:bg-body-dark flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 pt-8 gap-4">
          {/* Tombol Back to Home */}
          <button
            className="px-4 py-2 rounded-lg text-white  bg-text dark:bg-text-dark transition duration-300 hover:bg-opacity-80"
            onClick={() => navigate("/alquran")}
          >
            ← Back To Home
          </button>

          
          <select
            value={selectedSurah}
            onChange={handleSurahChange}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-first transition duration-300"
          >
            {Array.from({ length: 114 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Surah Ke - {num}
              </option>
            ))}
          </select>
        </div>
      </section>


      <section className="max-w-full mx-auto px-4 pt-8 min-h-screen bg-body dark:bg-body-dark">

      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-title dark:text-title-dark">
          {surahDetail.namaLatin} ({surahDetail.nama})
        </h1>
        <p className="text-center text-gray-600 italic dark:text-white">{surahDetail.arti}</p>
        <p className="text-center mb-6 md:mb-8 text-text dark:text-text-dark">
          Jumlah Ayat: {surahDetail.jumlahAyat} | Tempat Turun: {surahDetail.tempatTurun}
        </p>

        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto mb-8 py-4">
          
          {surahDetail.suratSebelumnya && (
            <button
              onClick={() => navigate(`/surah/${surahDetail.suratSebelumnya?.nomor}`)}
              className="px-4 md:px-6 py-2 md:py-3 bg-text dark:bg-text-dark rounded-md text-white w-full md:w-auto text-sm md:text-base"
            >
              ← {surahDetail.suratSebelumnya.namaLatin}
            </button>
          )}
          


          {surahDetail.suratSelanjutnya && (
            <button
              onClick={() => navigate(`/surah/${surahDetail.suratSelanjutnya?.nomor}`)}
              className="px-4 md:px-6 py-2 md:py-3 bg-text dark:bg-text-dark rounded-md text-white w-full md:w-auto text-sm md:text-base"
            >
              {surahDetail.suratSelanjutnya.namaLatin} →
            </button>
          )}
        </div>

        
        <ul>
          {surahDetail.ayat.map((item) => (
            <li key={item.nomorAyat} className="pb-6">
              <h1 className="mx-auto max-w-4xl flex text-title dark:text-white text-center text-lg">
                Ayat : {item.nomorAyat}
              </h1>
              <div className="max-w-4xl mx-auto py-4 px-4 md:px-8   rounded-lg ">
                <p className="text-3xl md:text-4xl text-end mb-4 leading-relaxed text-title dark:text-title-dark">
                  {item.teksArab}
                </p>
                <p className="text-gray-600 text-lg md:text-xl dark:text-white">{item.teksLatin}</p>
                <p className="text-text text-base md:text-lg mt-3 dark:text-text-dark">{item.teksIndonesia}</p>
                <div className="border-t mt-4 max-w-full border-gray-300 dark:border-gray-600"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
}

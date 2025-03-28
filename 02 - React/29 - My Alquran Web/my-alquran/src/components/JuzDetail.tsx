import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

interface JuzDetailData {
  status: boolean;
  request: {
    path: string;
    juz: string;
  };
  data: JuzProps[];
}

interface JuzProps {
  arab: string;
  asbab: string;
  audio: string;
  ayah: string;
  hizb: null;
  id: string;
  juz: string;
  latin: string;
  notes: null;
  page: string;
  surah: string;
  text: string;
  theme: null;
}

export default function JuzDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [juzData, setJuzData] = useState<JuzProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentJuz, setCurrentJuz] = useState<number>(Number(id) || 1);

  useEffect(() => {
    const fetchJuz = async () => {
      setLoading(true);
      try {
        const res = await axios.get<JuzDetailData>(
          `https://api.myquran.com/v2/quran/ayat/juz/${currentJuz}`
        );
        setJuzData(res.data.data); // Data disimpan ke state
      } catch (error) {
        console.error("Error While Fetching Juz Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJuz();
  }, [currentJuz]);

  const handlePrevJuz = () => {
    if (currentJuz > 1) {
      navigate(`/juz/${currentJuz - 1}`);
      setCurrentJuz((prev) => prev - 1);
    }
  };

  const handleNextJuz = () => {
    if (currentJuz < 30) {
      navigate(`/juz/${currentJuz + 1}`);
      setCurrentJuz((prev) => prev + 1);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-body dark:bg-body-dark">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 dark:border-white border-black"></div>
      </div>
    );
  }

  if (!juzData.length) {
    return (
      <p className="text-center text-2xl font-title text-first min-h-screen bg-body dark:bg-body-dark pt-24">
        Data Gagal Dimuat!
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-body dark:bg-body-dark px-6 pt-10">
      {/* Navigasi Juz */}
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-6">
        <button
          onClick={handlePrevJuz}
          disabled={currentJuz === 1}
          className="px-4 py-2 rounded-lg bg-container-dark dark:bg-container text-white dark:text-black disabled:opacity-50"
        >
          ← Previous
        </button>
        <h2 className="text-xl font-bold text-first">Juz {currentJuz}</h2>
        <button
          onClick={handleNextJuz}
          disabled={currentJuz === 30}
          className="px-4 py-2 rounded-lg bg-container-dark dark:bg-container text-white dark:text-black disabled:opacity-50"
        >
          Next →
        </button>
      </div>

      {/* Ayat dalam Juz */}
      <section className="max-w-4xl mx-auto space-y-4">
        {juzData.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
          >
            <h3 className="text-lg font-semibold text-right text-first">
              {item.arab}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{item.latin}</p>
            <audio controls className="mt-2">
              <source src={item.audio} type="audio/mpeg" />
            </audio>
          </div>
        ))}
      </section>
    </div>
  );
}

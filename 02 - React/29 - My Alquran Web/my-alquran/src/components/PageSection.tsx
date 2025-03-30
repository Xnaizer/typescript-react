import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface PagesCard {
  status: boolean;
  info: {
    min: number;
    max: number;
  };
  request: {
    path: string;
    page: string;
  };
  data: PagesItem[];
}

interface PagesItem {
  arab: string;
  asbab: string;
  audio: string;
  ayah: string;
  hizb: string;
  id: string;
  juz: string;
  latin: string;
  notes?: string | null;
  page: string;
  surah: string;
  text: string;
  theme: string;
}

export default function PageSection() {
  const { page } = useParams<{ page: string }>();
//   const navigate = useNavigate();
  const [pageData, setPageData] = useState<PagesCard | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);

  useEffect(() => {
    const fetchPages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.myquran.com/v2/quran/ayat/page/${currentPage}`
        );
        setPageData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
    //   navigate(`/page/${currentPage - 1}`);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 604) {
    //   navigate(`/page/${currentPage + 1}`);
      setCurrentPage((prev) => prev + 1);
    }
  };
  
  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = parseInt(event.target.value);
    setCurrentPage(selectedNumber);
    
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-body dark:bg-body-dark">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 dark:border-white border-black"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <p className="text-center text-2xl font-title text-first min-h-screen bg-body dark:bg-body-dark pt-24">
        Data Gagal Dimuat!
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto mb-8 py-4 w-full">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 md:px-6 py-2 md:py-3 bg-text dark:bg-text-dark rounded-md text-white w-full md:w-auto text-sm md:text-base disabled:opacity-50"
        >
          ← Halaman Sebelumnya
        </button>
        
        <h2 className="text-xl font-title font-bold dark:text-white p-4">Page - {currentPage}</h2>
        
        <button
          onClick={handleNextPage}
          disabled={currentPage === 604}
          className="px-4 md:px-6 py-2 md:py-3 bg-text dark:bg-text-dark rounded-md text-white w-full md:w-auto text-sm md:text-base disabled:opacity-50"
        >
          Halaman Selanjutnya →
        </button>
      </div>
      
      <ul>
        {pageData.data.map((item, index) => (
          <li key={index} className="pb-6">
            <h1 className="mx-auto max-w-4xl flex text-title dark:text-white text-center text-lg">
              Surat: {item.surah} Ayat: {item.ayah}
            </h1>
            <div className="max-w-4xl mx-auto py-4 px-4 md:px-8 rounded-lg">
              <p className="text-3xl md:text-4xl text-end mb-4 leading-relaxed text-title dark:text-title-dark">
                {item.arab}
              </p>
              <p className="text-gray-600 text-lg md:text-xl dark:text-white">{item.latin}</p>
              <p className="text-text text-base md:text-lg mt-3 dark:text-text-dark">{item.text}</p>
              <div className="border-t mt-4 max-w-full border-gray-300 dark:border-gray-600"></div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-3xl mx-auto mb-8 py-4 w-full">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 md:px-6 py-2 md:py-3 bg-text dark:bg-text-dark rounded-md text-white w-full md:w-auto text-sm md:text-base disabled:opacity-50"
        >
          ← Halaman Sebelumnya
        </button>
        
        <select
            value={currentPage}
            onChange={handlePageChange}
            className="px-12 py-2  border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-first transition duration-300"
          >
            {Array.from({ length: 604 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Page ke - {num}
              </option>
            ))}
        </select>
        
        <button
          onClick={handleNextPage}
          disabled={currentPage === 604}
          className="px-4 md:px-6 py-2 md:py-3 bg-text dark:bg-text-dark rounded-md text-white w-full md:w-auto text-sm md:text-base disabled:opacity-50"
        >
          Halaman Selanjutnya →
        </button>
      </div>
    </>
  );
}
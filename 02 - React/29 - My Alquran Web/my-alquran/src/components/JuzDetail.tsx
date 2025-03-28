import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";



interface JuzDetailData {
    status: boolean;
    request: {
        path: string;
        juz: string
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
    const [juzData, setJuzData] = useState<JuzDetailData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentJuz, setCurrentJuz] = useState<number>(Number(id) | 1);

    useEffect(() => {
        const fetchJuz = async () => {
            setLoading(true);
            try{
                const res = await axios.get<JuzDetailData>('https://api.myquran.com/v2/quran/ayat/juz/1');
                setJuzData(res.data);
            } catch (error) {
                console.error("Error While Fetching Juz Data",error);
            } finally {
                setLoading(false);
            }
        }

        fetchJuz();
        setCurrentJuz(Number(id) | 1)
    },[id]);

    if (loading) {
        return (
          <div className="flex items-center justify-center h-screen bg-body dark:bg-body-dark">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 dark:border-white border-black"></div>
          </div>
        );
    }

    if (!juzData) {
        return (
          <p className="text-center text-2xl font-title text-first min-h-screen bg-body dark:bg-body-dark pt-24">
            Data Gagal Dimuat!
          </p>
        );
    }

    return (
        <>
            <div>
                <button>Previous</button>
                <button>Next</button>
            </div>



            <section>

            </section>
        </>
    )
}
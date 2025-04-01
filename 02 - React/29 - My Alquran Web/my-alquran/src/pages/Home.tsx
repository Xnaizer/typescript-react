import { useEffect, useState } from "react";
import axios from "axios";

interface DataJadwal {
  status: boolean;
  request: {
    path: string;
  };
  data: {
    id: number;
    lokasi: string;
    daerah: string;
    jadwal: DataJadwalItem[];
  };
}

interface DataJadwalItem {
  tanggal: string;
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
  date: string;
}

interface DataKota {
  status: boolean;
  request: {
    path: string;
  };
  data: DataKotaItem[];
}

interface DataKotaItem {
  id: string;
  lokasi: string;
}

export default function Home() {
  const [timerDate, setTimerDate] = useState({ hari: "", jam: "", menit: "", detik: "" });
  const [jadwalData, setJadwalData] = useState<DataJadwal | null>(null);
  const [kotaData, setKotaData] = useState<DataKota | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [kota, setKota] = useState<string>("1105"); 
  const [tahun, setTahun] = useState<string>("2025");
  const [bulan, setBulan] = useState<string>("04");

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const res = await axios.get("https://api.myquran.com/v2/sholat/kota/semua");
        setKotaData(res.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchKota();
  }, []);

  useEffect(() => {
    const fetchJadwal = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.myquran.com/v2/sholat/jadwal/${kota}/${tahun}/${bulan}`);
        setJadwalData(response.data);
      } catch (error) {
        console.error("Error fetching prayer schedule:", error);
      } finally {
        setLoading(false);
      }
    };

    if (kota && tahun && bulan) fetchJadwal();
  }, [kota, tahun, bulan]);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      setTimerDate({
        hari: now.toLocaleDateString("id-ID", { weekday: "long" }),
        jam: now.getHours().toString().padStart(2, "0"),
        menit: now.getMinutes().toString().padStart(2, "0"),
        detik: now.getSeconds().toString().padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-body dark:bg-body-dark p-5">
    <h1 className="text-3xl lg:text-5xl font-subtitle text-title dark:text-title-dark pt-8 pb-10 lg:pt-14 lg:pb-8 text-center">
      Jadwal Sholat
    </h1>

    <div className="text-center text-2xl sm:text-3xl pb-12 pt-6 font-semibold text-title dark:text-title-dark">
      {timerDate.jam} : {timerDate.menit} : {timerDate.detik}
    </div>

    <div className="mt-5 flex flex-wrap gap-3 justify-center">
      <select 
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-first transition duration-300"
        value={kota} 
        onChange={(e) => setKota(e.target.value)}
      >
        {kotaData?.data.map((item) => (
          <option key={item.id} value={item.id}>{item.lokasi}</option>
        ))}
      </select>
      
      <select 
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-first transition duration-300"
        value={tahun} 
        onChange={(e) => setTahun(e.target.value)}
      >
        {[...Array(8)].map((_, i) => (
          <option key={i} value={(2025 - i).toString()}>{2025 - i}</option>
        ))}
      </select>
      
      <select 
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-first transition duration-300"
        value={bulan} 
        onChange={(e) => setBulan(e.target.value)}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i} value={(i + 1).toString().padStart(2, "0")}>
            {new Date(2025, i).toLocaleString("id-ID", { month: "long" })}
          </option>
        ))}
      </select>
    </div>

    <div className="h-0.5 bg-text dark:bg-text-light w-full max-w-6xl mt-12 mb-2 mx-auto" />

    {loading ? (
      <p className="text-center mt-5 text-title dark:text-title-dark">Loading jadwal sholat...</p>
    ) : (
      <div className="text-center overflow-x-auto">
        <h2 className="text-xl font-bold text-title dark:text-title-dark pt-12 ">
          Jadwal Sholat - {jadwalData?.data.lokasi}
        </h2>
        <table className="mx-auto mt-12 border-collapse border  bg-container  dark:bg-text-dark ">
          <thead>
            <tr className="bg-container-dark text-title-dark">
              <th className="border p-2 sm:p-4">Tanggal</th>
              <th className="border p-2 sm:p-4">Imsak</th>
              <th className="border p-2 sm:p-4">Subuh</th>
              <th className="border p-2 sm:p-4">Dzuhur</th>
              <th className="border p-2 sm:p-4">Ashar</th>
              <th className="border p-2 sm:p-4">Maghrib</th>
              <th className="border p-2 sm:p-4">Isya</th>
            </tr>
          </thead>
          <tbody>
            {jadwalData?.data.jadwal.map((item) => (
              <tr key={item.date}>
                <td className="border p-2 sm:p-4">{item.tanggal}</td>
                <td className="border p-2 sm:p-4">{item.imsak}</td>
                <td className="border p-2 sm:p-4">{item.subuh}</td>
                <td className="border p-2 sm:p-4">{item.dzuhur}</td>
                <td className="border p-2 sm:p-4">{item.ashar}</td>
                <td className="border p-2 sm:p-4">{item.maghrib}</td>
                <td className="border p-2 sm:p-4">{item.isya}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
  );
}
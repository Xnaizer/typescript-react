import { useEffect, useState } from "react"
import axios from "axios";
// import { data } from "react-router";

interface AsmaulHusnaTypes {
    status: boolean;
    request: {
        path: string;
    };
    info : {
        min: number;
        max: number;
    };
    data: AsmaulHusnaItems[]
}

interface AsmaulHusnaItems {
    arab :string;
    id: number;
    indo: string;
    latin: string
}



export default function AsmaulHusna () {
    const [dataMaterial, setDataMaterial] = useState<AsmaulHusnaTypes | null>(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const fetchDataMaterial = async () => {
            setLoading(true);
            try{
                const response = await axios.get("https://api.myquran.com/v2/husna/semua");
                setDataMaterial(response.data);
            } catch(error){
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchDataMaterial();

    },[]);

    if (loading) {
        return (
          <div className="flex items-center justify-center h-screen bg-body dark:bg-body-dark">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 dark:border-white border-black"></div>
          </div>
        );
      }
    
    if (!dataMaterial) {
        return (
          <p className="text-center text-2xl font-title text-first min-h-screen bg-body dark:bg-body-dark pt-24">
            Data Gagal Dimuat!
          </p>
        );
    }
    return (
        <>
        <section className="min-h-screen bg-body dark:bg-body-dark p-4">
            <div className="">
                <h1 className="text-3xl lg:text-5xl font-subtitle text-title dark:text-title-dark pt-8 pb-10 lg:pt-14 lg:pb-8 text-center">Asmaul Husna</h1>
                <div className="h-0.5 bg-text dark:bg-text-light w-full max-w-6xl my-4 flex mx-auto mb-10"  />
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl mx-auto " >
                    {dataMaterial.data.map((item) =>(
                        <div key={item.id} className="group flex-col  items-center justify-center text-center w-full h-auto bg-container hover:bg-title dark:bg-text-dark rounded-lg px-4 py-2 border-[1.5px] border-text-dark dark:border-text hover:cursor-pointer hover:dark:bg-title-dark">
                            <li className="text-4xl md:text-7xl p-6 text-title dark:text-white font-title group-hover:text-title-dark group-hover:dark:text-title">{item.arab} </li>
                            <li className="text-xl font-arabic text-title dark:text-white group-hover:dark:text-title group-hover:text-title-dark"> {item.latin} ({item.id})</li>
                            <li className="text-lg font-semibold text-gray-700 dark:text-gray-600 font-title group-hover:text-white group-hover:dark:text-black p-4">{item.indo}</li>
                        </div>
                    ))}
                </ul>
            </div> 
        </section>
        </>
    )
}
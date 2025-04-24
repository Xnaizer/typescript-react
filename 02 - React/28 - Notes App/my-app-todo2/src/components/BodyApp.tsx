// BodyApp.tsx
import { SetStateAction } from "react";
import { DataType, FormType } from "../App";

type DataBody = {
    data: DataType[];
    setData: React.Dispatch<SetStateAction<DataType[]>>;
    forms: FormType;
    setForms: React.Dispatch<SetStateAction<FormType>>;
}

export default function BodyApp({data,setData,forms,setForms}:DataBody) {
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setForms({
            ...forms, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dataBaru = {
            id: Date.now(),
            aktivitas: forms.aktivitas,
            deskripsi: forms.deskripsi,
            isKelar: false
        }

        setData([...data, dataBaru])

        setForms({
            aktivitas: "",
            deskripsi: ""
        })
    }
    
    const handleDelete = (datas:DataType) => {
        setData(data.filter(items => items.id !== datas.id ))
    }

    const handleSelesai = (datas:DataType) => {
        const dataUpdate = data.map((item) => {
            return item.id === datas.id ? {...item, isKelar: !item.isKelar} : item
        })
        setData(dataUpdate)
    }


    return (
        <main className="w-full bg-slate-100 min-h-screen flex flex-col items-center py-16 px-4">
            <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-4"
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-semibold text-slate-800">Add New Aktivitas</h2>

                <div className="flex flex-col">
                    <label htmlFor="aktivitas" className="text-slate-700 font-medium">Aktivitas</label>
                    <input
                        type="text"
                        id="aktivitas"
                        className="mt-1 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
                        name="aktivitas"
                        value={forms.aktivitas}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="text-slate-700 font-medium">Description</label>
                    <input
                        type="text"
                        id="description"
                        className="mt-1 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
                        name="deskripsi"
                        value={forms.deskripsi}
                        onChange={handleChange}
                    />
                </div>

                <button className="w-full bg-slate-700 hover:bg-slate-900 text-white py-2 rounded font-semibold transition duration-200">
                    Submit
                </button>
            </form>

            <section className="mt-16 w-full max-w-4xl">
                <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">📋 My Activities</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {data.map((datas) => (
                        <div className="bg-white border border-slate-300 rounded-lg p-5 shadow-sm" key={datas.id}>
                            <h4 className={`text-lg font-semibold text-slate-800 ${datas.isKelar? "line-through" : ""}`}>{datas.aktivitas}</h4>
                            <p className="text-slate-600 mb-4">{datas.deskripsi}</p>
                            <div className="flex justify-between">
                                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                                onClick={() => handleSelesai(datas)}
                                >
                                    Selesai
                                </button>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                onClick={() => handleDelete(datas)}
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </main>
    );
}

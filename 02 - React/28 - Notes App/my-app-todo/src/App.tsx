import { useState } from "react";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

export type DataType = {
    id: number;
    aktivitas: string;
    deskripsi: string;
    isKelar: boolean;
}

export type FormType = {
    id?: number;
    aktivitas: string;
    deskripsi: string;
    isKelar?: boolean;
}

export default function App() {


    
    const [ data, setData ] = useState<DataType[]>([
        {
            id: 1, aktivitas: "Makan Enak Di Haidilao", deskripsi: "gatau lagi gw bro mau ngisi apa untuk deskripsi ini", isKelar: false
        },
        {
            id: 2, aktivitas: "Makan Enak tpi kurang sehat di KFC", deskripsi: "gapaham deh gue", isKelar: true
        }
    ]);
    
    const [forms, setForms] = useState<FormType>({
        id: 0,
        aktivitas: "",
        deskripsi: "",
        isKelar: false
    });
    
    
    return (
        <>
            <Navbar/>
            <BodyApp 
                data={data}
                setData={setData}
                forms={forms}
                setForms={setForms}
            />
            <Footer />
        </>
    )
}
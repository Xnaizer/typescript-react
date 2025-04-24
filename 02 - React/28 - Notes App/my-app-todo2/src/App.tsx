
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
    id? : number;
    aktivitas: string;
    deskripsi: string;
    isKelar?: boolean;
}


export default function App() {

    const [data, setData] = useState<DataType[]>([
        {id: 1, aktivitas: "Makan Ayam Goreng Asixque Di Bandung", deskripsi : "gatau gua mau ngisi apa disini", isKelar: false},
        {id: 2, aktivitas: "Makan KFC tapi kurang sehat ya", deskripsi: "keren banget ga sih guys asique", isKelar: true}
    ]);

    const [forms, setForms] = useState({
        id: 0,
        aktivitas: "",
        deskripsi: "",
        isKelar: false
    })
    

    
    
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
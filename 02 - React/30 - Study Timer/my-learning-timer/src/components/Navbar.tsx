import { useEffect, useState } from "react"

type HiddenLayer = {
    setIsHide: React.Dispatch<React.SetStateAction<boolean>>;
    isHide: boolean;
}

export default function Navbar({setIsHide, isHide} : HiddenLayer) {

    const [timerDate, setTimerDate] = useState<{ hari: string; jam: string; menit: string; detik: string }>({
        hari: "",
        jam: "",
        menit: "",
        detik: "",
      });

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            
            const hari = now.toLocaleDateString("id-ID", {weekday:"long"});
            
            const jam = now.getHours().toString().padStart(2, "0");
            const menit = now.getMinutes().toString().padStart(2, "0");
            const detik = now.getSeconds().toString().padStart(2, "0");

            setTimerDate({hari,jam,menit,detik});
            
        }

        updateTimer();

     
        const interval = setInterval(updateTimer, 1000);

     
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <nav className=" bg-slate-500 text-white">
                <div className="flex justify-between p-5 max-w-5xl mx-auto items-center">
                    <div className="font-light text-2xl font-delicious">
                        <h1>Learning Timer</h1>
                    </div>

                    <div className="font-light text-md  font-inter  items-center gap-3  hidden md:flex">
                        <h1 className="bg-slate-800 px-3 py-2 rounded-md ">{timerDate.hari}</h1>
                        <span className="font-bold text-xl">:</span>
                        <h1 className="bg-slate-800 px-3 py-2 rounded-md ">{timerDate.jam}</h1>
                        <span className="font-bold text-xl">:</span>
                        <h1 className="bg-slate-800 px-3 py-2 rounded-md ">{timerDate.menit}</h1>
                        <span className="font-bold text-xl">:</span>
                        <h1 className="bg-slate-800 px-3 py-2 rounded-md ">{timerDate.detik}</h1>
                        

                    </div>

                    <div className="font-light text-sm  font-inter">
                        <button className="px-4 py-3 bg-slate-800 rounded-lg hover:bg-slate-900"  onClick={() => setIsHide(!isHide)}>{isHide? "Hide Timer !" : "Start !"}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
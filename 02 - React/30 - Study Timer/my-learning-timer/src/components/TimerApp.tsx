import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HiddenLayer = {
    isHide: boolean;
    
}


export default function TimerApp({isHide}: HiddenLayer) {
    const [generateQuote, setGenerateQuote] = useState<{ author: string; quote: string }>({
        author: "",
        quote: ""
    });
    
    
    const [workTimer, setWorkTimer] = useState<number>(1 * 60);
    const [breakTimer, setBreakTimer] = useState<number>(1 * 60);
    const [isActive, setIsActive] = useState<boolean>(false);


    // useEffect(() => {
    //     let timer: number | null = null;

    //     if ( isActive && workTimer > 0 ){
    //         timer = setInterval(() =>{
    //             setWorkTimer((prevTime) => prevTime - 1);
    //         }, 1000);
    //     } else if (workTimer === 0){
            
    //         timer = setInterval(() =>{
    //             setBreakTimer((prevTime) => prevTime - 1);
    //         }, 1000);
    //     } else if (workTimer && breakTimer === 0) {
    //         clearInterval(timer!);
    //         setIsActive(false);
    //         setWorkTimer(1)
    //         setBreakTimer(1)
    //     }





    //     return () => {
    //         if (timer) clearInterval(timer);
    //     };

    // }, [isActive, workTimer,breakTimer])

    
    useEffect(() => {
        let timer: number | null = null;
    
        if (isActive) {
            if (workTimer > 0) {
                timer = window.setInterval(() => {
                    setWorkTimer((prevTime) => prevTime - 1);
                }, 1000);
                
            } else if (workTimer === 0 && breakTimer > 0) {
                timer = window.setInterval(() => {
                    setBreakTimer((prevTime) => prevTime - 1);
                }, 1000);
                
                
            } else if (breakTimer === 0) {
                showNotification();
                clearInterval(timer!);
                setIsActive(false);
                setWorkTimer(1 * 60); 
                setBreakTimer(1 * 60); 
            }
        }
    
        return () => {
            if (timer) clearInterval(timer);
        };
    
    }, [isActive, workTimer, breakTimer]);
    

    const toggleTimer = () => setIsActive(!isActive)

    useEffect(() => {
        async function quote() {
            try {
                const response = await fetch("https://dummyjson.com/quotes/random");
                const extractedQuotes = await response.json();
                
                setGenerateQuote({
                    quote: extractedQuotes.quote,
                    author: extractedQuotes.author
                });

            } catch (error) {
                console.error(`Terjadi Kesalahan! ${error}`);
            }
        }

        quote();

        const interval = setInterval(quote, 10000);

        return () => clearInterval(interval);
    }, []);


    const formatTime = (seconds: number) => {
        const minutes = Math.floor( seconds / 60 ).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${secs}`
    }

    const resetTimer = () => {
        setIsActive(false);
        setWorkTimer(1 * 60); 
        setBreakTimer(1 * 60); 
    }

    console.log(formatTime)



    const showNotification = () => {
        if (Notification.permission === "granted") {
            new Notification("Time's up!", { body: "Your countdown has finished!" });
        } else {
            Notification.requestPermission();
        }
    };

    return (
        <>
            <section className={`${isHide? "" : "min-h-screen items-center bg-slate-800"} max-w-full bg-slate-300 flex justify-center  py-48 px-12`}>
            <div className="text-center max-w-5xl mx-auto p-4">
                <h1 className="text-slate-800 font-light text-[1.75rem] font-staatliches">
                    Quotes Of The Day!
                </h1>

                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={generateQuote.quote} // Membuat animasi saat quote berubah
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="mt-12"
                    >
                        <h1 className="text-5xl font-bold font-urbanist text-white text-left duration-100">
                            "{generateQuote.quote}"
                        </h1>
                        <h2 className="mt-4 text-xl font-semibold text-white">
                            - {generateQuote.author}
                        </h2>
                    </motion.div>
                </AnimatePresence>
            </div>
            </section>
        
        
            {isHide ? <section className=" max-w-full bg-slate-300 flex justify-center  pb-[42rem]">
                <div className="max-w-5xl w-full flex flex-col items-center gap-8">
                    
                    
                    <h1 className="text-slate-900 font-light text-3xl font-staatliches text-center pb-8">
                        Let's Start Learning!
                    </h1>

                    
                    <div className="flex flex-wrap gap-8 justify-center">
                        
                        
                        <div className="flex flex-col items-center justify-center bg-slate-800 text-white p-6 rounded-xl shadow-lg w-64 h-48">
                            <h1 className="text-7xl font-bold">{formatTime(workTimer)}</h1>
                            <h2 className="text-2xl font-medium mt-2">Work</h2>
                        </div>

                        
                        <div className="flex flex-col items-center justify-center bg-slate-700 text-white p-6 rounded-xl shadow-lg w-64 h-48">
                            <h1 className="text-7xl font-bold">{formatTime(breakTimer)}</h1>
                            <h2 className="text-2xl font-medium mt-2">Break</h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 justify-center ">
                        <button className={`bg-slate-200 py-4 px-8 rounded-md hover:bg-slate-600 hover:text-white shadow-md ${isActive ? "bg-slate-400 text-white" : " "}`} onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
                        <button className="bg-slate-200 py-4 px-8  rounded-md hover:bg-red-600 hover:text-white shadow-md" onClick={resetTimer}>Reset</button>
                    </div>
                   
                </div>
            </section> : ""}
        </>
    );
}

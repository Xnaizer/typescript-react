interface SurahCardProps {
    nomor: string;
    nama: string;
    namaLatin: string;
    jumlahAyat: string;
    
}

export default function SurahCard({ nomor, nama, namaLatin, jumlahAyat }: SurahCardProps) {
    return (
        <>
            
            <div className="group flex items-center justify-between w-full h-auto bg-container hover:bg-title dark:bg-text-dark rounded-lg px-4 py-2 border-[1.5px] border-text-dark dark:border-text hover:cursor-pointer hover:dark:bg-title-dark">
                
                
                <div className="flex items-center gap-4">
                    
                    <div className="w-12 h-12 flex items-center justify-center text-title group-hover:text-title-dark dark:text-white font-semibold rounded-full font-title group-hover:dark:text-title">
                        <span className="text-lg">{nomor}</span>
                    </div>

                    
                    <div>
                        <h1 className="text-lg text-title dark:text-white font-subtitle group-hover:text-title-dark group-hover:dark:text-title">
                            {namaLatin}
                        </h1>
                        <h2 className="text-sm text-gray-700 dark:text-gray-600 font-title group-hover:text-white group-hover:dark:text-black">
                            Jumlah Ayat: {jumlahAyat}
                        </h2>
                    </div>
                </div>

                
                <div className="text-xl font-arabic text-title dark:text-white group-hover:dark:text-title group-hover:text-title-dark">
                    {nama}
                </div>

            </div>
            

        </>
    )
}
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";
import  AlquranLogo  from "../assets/alQuran.svg"
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled ] = useState(false)

  useEffect(() => {
    const scrollNavbar = () => {
      if (window.scrollY >= 35){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollNavbar);
    return () => window.removeEventListener("scroll", scrollNavbar);
  })

  
  return (
    <>
      <nav
        className={`min-w-full bg-body dark:bg-body-dark text-text dark:text-text-dark p-4 fixed top-0 left-0 flex justify-center  ${
          isScrolled ? "shadow-md dark:shadow-[0_4px_14px_rgba(255,255,255,0.15)]" : "shadow-none"
        }`}
      >
        <div className="max-w-6xl w-full flex justify-between items-center px-4">
          
          
          <a className="flex items-center hover:cursor-pointer gap-4" href="/">
            <img src={AlquranLogo} alt="alquran-logo" className="w-8 h-8" />
            <h1 className="font-subtitle text-xl font-bold hover:text-orange-400 ">Al-Quran</h1>
          </a>

          
          <div className="lg:flex gap-6 hidden">
            <h1 className="cursor-pointer hover:text-primary transition hover:text-orange-400 font-title">Jadwal Sholat</h1>
            <h1 className="cursor-pointer hover:text-primary transition hover:text-orange-400 font-title">Al-Quran</h1>
            <h1 className="cursor-pointer hover:text-primary transition hover:text-orange-400 font-title">Hadits</h1>
            <h1 className="cursor-pointer hover:text-primary transition hover:text-orange-400 font-title">Doa</h1>
            <h1 className="cursor-pointer hover:text-primary transition hover:text-orange-400 font-title">Asmaul Husna</h1>
            <h1 className="cursor-pointer hover:text-primary transition hover:text-orange-400 font-title">About Us</h1>
          </div>

          
          <button
            onClick={toggleTheme}
            className="text-white px-3 py-3  rounded-lg transition hover:scale-105 "
          >
            {theme === "dark" ? (
              <i className="ri-sun-line hover:text-orange-400 text-body text-2xl hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"></i>
            ) : (
              <i className="ri-moon-fill hover:text-orange-400 text-body-dark text-2xl hover:drop-shadow-[0_0_16px_rgba(0,0,0,0.8)]"></i>
            )}
          </button>

        </div>
      </nav>

      <div className="pt-[5.5rem] font-body">
        <Outlet />
        <Footer />
      </div>

    </>
  );
}

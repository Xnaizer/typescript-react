import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";
import AlquranLogo from "../assets/alQuran.svg";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import ScrollToTheTop from "../components/ScrollToTheTop";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; 

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState<"jadwal sholat" | "al-quran" | "doa" | "asmaul husna" | "about us">("jadwal sholat");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollNavbar = () => {
      if (window.scrollY >= 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollNavbar);
    return () => window.removeEventListener("scroll", scrollNavbar);
  }, []);

  const handleTabClick = (tab: "jadwal sholat" | "al-quran" | "doa" | "asmaul husna" | "about us") => {
    setIsActive(tab);
    const a = tab.replace(/\s+/g, "");
    navigate(`/${a}`);
    if (isMenuOpen) setIsMenuOpen(false); 
  };

  return (
    <>
      <nav
        className={`min-w-full mx-auto max-w-6xl  bg-body dark:bg-body-dark text-text dark:text-text-dark p-4 fixed top-0 left-0 flex justify-between items-center ${
          isScrolled ? "shadow-md dark:shadow-[0_4px_14px_rgba(255,255,255,0.15)]" : "shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-4">
          <a className="flex items-center hover:cursor-pointer gap-4" href="/">
            <img src={AlquranLogo} alt="alquran-logo" className="w-8 h-8" />
            <h1 className="font-subtitle text-xl font-bold hover:text-orange-400 ">Al-Quran</h1>
          </a>

          
          

          
          <div className="lg:flex gap-6 hidden">
            <div className="flex flex-wrap gap-6 ">
              {["jadwal sholat", "al-quran", "doa", "asmaul husna", "about us"].map((tab) => (
                <button
                  key={tab}
                  className={`text-md font-title transition-all duration-200 ${
                    isActive === tab
                      ? "text-first dark:text-first-dark font-bold"
                      : "text-text dark:text-text-dark"
                  } hover:text-first dark:hover:text-first-dark`}
                  onClick={() => handleTabClick(tab as "jadwal sholat" | "al-quran" | "doa" | "asmaul husna" | "about us")}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl text-text dark:text-text-dark hover:text-orange-400 focus:outline-none"
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />} 
          </button>
          
          <button
            onClick={toggleTheme}
            className="text-text dark:text-text-dark px-3 py-3 rounded-lg transition hover:scale-105"
          >
            {theme === "dark" ? (
              <i className="ri-sun-line hover:text-orange-400 text-body text-2xl hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"></i>
            ) : (
              <i className="ri-moon-fill hover:text-orange-400 text-body-dark text-2xl hover:drop-shadow-[0_0_16px_rgba(0,0,0,0.8)]"></i>
            )}
          </button>
          </div>

        </div>
      </nav>

      
      <div
        className={`pt-32  lg:hidden w-full flex flex-col items-center gap-6 bg-body dark:bg-body-dark ${isMenuOpen ? "block" : "hidden"}`}
      >
        {["jadwal sholat", "al-quran", "doa", "asmaul husna", "about us"].map((tab) => (
          <button
            key={tab}
            className={`text-md font-title transition-all duration-200 ${
              isActive === tab
                ? "text-first dark:text-first-dark font-bold"
                : "text-text dark:text-text-dark"
            } hover:text-first dark:hover:text-first-dark`}
            onClick={() => handleTabClick(tab as "jadwal sholat" | "al-quran" | "doa" | "asmaul husna" | "about us")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="pt-[5.5rem] font-body bg-body dark:bg-body-dark">
        <Outlet />
        <ScrollToTheTop />
        <Footer />
      </div>
    </>
  );
}

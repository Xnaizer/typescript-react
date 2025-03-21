import { useTheme } from "../context/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="min-w-full bg-body dark:bg-body-dark text-text dark:text-text-dark p-6">
        <button
          onClick={toggleTheme}
          className="text-white px-4 py-2 rounded-lg"
        >
          {theme === "dark" ? (
            <i className="ri-sun-line text-body text-xl hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition duration-300"></i>
          ) : (
            <i className="ri-moon-fill text-body-dark text-xl hover:drop-shadow-[0_0_16px_rgba(0,0,0,0.8)] transition duration-300"></i>
          )}
        </button>
      </div>
    </>
  );
}

import { useTheme } from "../context/useTheme";

export default function Footer() {
    const { theme } = useTheme();
    return (
        <>
            <div className={`p-6 text-text bg-body ${theme ? " dark:bg-body-dark dark:text-body": " "}`}>
                <h1>Copyright &copy; 2025 My Al Quran Website. All Right Reserved.</h1>
            </div>
        </>
    )
}
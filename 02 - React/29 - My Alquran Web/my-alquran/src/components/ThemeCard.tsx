

interface ThemeCardProps {
    title: string;
    description: string;
}

export default function ThemeCard({ title, description }: ThemeCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        </div>
    );
}

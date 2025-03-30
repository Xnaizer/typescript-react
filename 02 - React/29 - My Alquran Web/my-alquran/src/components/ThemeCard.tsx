

interface ThemeCardProps {
    id: string;
    name: string;
}

export default function ThemeCard({ id, name }: ThemeCardProps) {
    return (
        <div className="group flex items-center  w-full h-auto bg-container hover:bg-title dark:bg-text-dark rounded-lg px-4 py-2 border-[1.5px] border-text-dark dark:border-text hover:cursor-pointer hover:dark:bg-title-dark min-h-full">
            <h2 className="text-xl font-semibold text-gray-900  dark:text-white flex items-center p-4 font-title  group-hover:text-title-dark group-hover:dark:text-title">{id}</h2>
            <p className="pl-3 flex items-center text-[1rem] text-title dark:text-white font-title group-hover:text-title-dark group-hover:dark:text-title">{name}</p>
        </div>
    );
}

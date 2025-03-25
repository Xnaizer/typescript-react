export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-20">
            <div className="relative w-16 h-16">
                {/* Lingkaran luar */}
                <div className="absolute inset-0 border-4 border-gray-300 rounded-full"></div>
                {/* Lingkaran animasi */}
                <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                {/* Teks di dalam lingkaran */}
                <div className="absolute inset-0 flex justify-center items-center text-sm font-semibold text-gray-700">
                    Loading...
                </div>
            </div>
        </div>
    );
}

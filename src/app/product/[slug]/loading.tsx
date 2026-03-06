// src/app/product/[slug]/loading.tsx

export default function Loading() {
    return (
        <div className="container mx-auto p-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                <div className="bg-gray-200 rounded-2xl h-96 md:h-[600px] animate-pulse"></div>

                <div className="flex flex-col justify-center space-y-6">
                    <div className="bg-gray-200 h-12 rounded-lg w-3/4 animate-pulse"></div>
                    <div className="h-8 bg-gray-200 rounded-lg w-1/4 animate-lulse"></div>

                    <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                    </div>

                    <div className="h-16 bg-gray-200 rounded-2xl w-full mt-4 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}
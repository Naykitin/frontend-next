// src/app/loading.tsx

export default function Loading() {
   return (
      <div className="container mx-auto p-8">
         <div className="h-10 w-48 bg-gray-200 animate-pulse rounded mb-8 mx-auto"></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
               <div key={index} className="border p-4 rounded-xl space-y-4">
                  <div className="bg-gray-200 h-64 w-full animate-pulse rounded-lg"></div>
                  <div className="bg-gray-200 h-6 w-3/4 animate-pulse rounded"></div>
                  <div className="bg-gray-200 h-6 w-1/4 animate-pulse rounded"></div>
                  <div className="bg-gray-200 h-10 w-full animate-pulse rounded"></div>
               </div>
            ))}
         </div>
      </div>
   );
}
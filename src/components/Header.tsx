//src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
   return(
      <header className="border-b bg-white sticky top-0 z-50">
         <div className="container mx-auto px-8 py-4 flex justify-between items-center">
            { /* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition">
               My <span className="text-blue-600">Store</span>
            </Link>

            { /* Navigation */}
            <nav className="flex gap-6 items-center">
               <Link href="/" className="text-sm font-medium hover:text-blue-600 transition">
                  Catalog
               </Link>
               <div className="h-8 w-px bg-gray-200"></div>
               <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
                  🛒 <span className="sr-only">Cart</span>
                  { /* Cart item count badge */}
               </button>
            </nav>
         </div>
      </header>
   );
}
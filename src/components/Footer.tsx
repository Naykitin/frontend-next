// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
   return(
      <footer className="border-t bg-gray-50 mt-20">
         <div className="container mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div>
                  <Link href="/" className="text-xl font-bold tracking-tighter">
                     My <span className="text-blue-600">Store</span>
                  </Link>
                  <p className="mt-5 text-gray-500 text-sm leading-relaxed">
                     Best products at the best prices. Shop with us for an amazing experience.
                  </p>
               </div>

               <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                     <li><Link href="/" className="hover:text-blue-600 transition">All Products</Link></li>
                     <li><Link href="#" className="hover:text-blue-600 transition">Categories</Link></li>
                     <li><Link href="#" className="hover:text-blue-600 transition">Sales</Link></li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                     <li>Email: support@myshop.com</li>
                     <li>Phone: (123) 456-7890</li>
                     <li>Address: 123 Market St, City, Country</li>
                  </ul>
               </div>

               <div className="border-t mt-12 pt-8 text-center text-sm text-fray-400">
                  @ {new Date().getFullYear()} My Headless Store. All right reserved.
               </div>
            </div>
         </div>
      </footer>
   );
}
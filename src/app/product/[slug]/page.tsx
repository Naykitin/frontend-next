// src/app/product/[slug]/page.tsx
import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { SimpleProduct } from "@/types/product";
import { notFound } from "next/navigation";

interface GetProductResponse {
   product: SimpleProduct;
}

const GET_PRODUCT_BY_SLUG = gql`
   query GetProductBySlug($id: ID!) {
      product(id: $id, idType: SLUG) {
         id
         name
         description
         ... on SimpleProduct {
            price
         }
         image {
            sourceUrl
            altText
         }
      }
   }
`;

export default async function ProductPage({
   params
}: {
   params: Promise<{ slug: string }>
}) {
   const { slug } = await params;

   const { data } = await client.query({
      query: GET_PRODUCT_BY_SLUG,
      variables: { id: slug },
   });

   const product: SimpleProduct | null = data?.product;

   if (!product) {
      notFound();
   }

   return (
      <main className="container mx-auto p-8 max-x-6xl">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
               {product.image ? (
                  <img
                     src={product.image.sourceUrl}
                     alt={product.image.altText}
                     className="w-full h-auto object-cover"
                  />
               ) : (
                  <div className="h-96 items-center justify-center text-gray-400">No Photo</div>
               )}
            </div>

            <div className="flex flex-col justify-center">
               <h1 className="text-5xl font-extrabold mb-4 text-gray-900">{product.name}</h1>
               <p className="text-3xl text-blue-600 font-bold mb-8">{product.price}</p>

               <div className="prose prose-lg text-gray-600 mb-10">
                  <div dangerouslySetInnerHTML={{ __html: product.description || "<p>No description available.</p>" }} />
               </div>

               <button className="bg-black text-white text-xl py-5 rounded-2xl hover:scale-[1.02] transition-transform active:scale-95 shadow-lg">
                  Add to Cart
               </button>
            </div>
         </div>
      </main>
   );
}
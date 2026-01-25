// src/app/page.tsx
import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { SimpleProduct, GetProductsResponse } from "@/types/product";
import Link from "next/link";


const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      nodes {
        id
        name
        slug
        ... on SimpleProduct {
          price
        }
        image {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export default async function Home() {
  const { data } = await client.query<GetProductsResponse>({
    query: GET_PRODUCTS,
  });

  if (!data) {
    return (
      <main className="container mx-auto p-8">
        <p className="text-center text-red-500">Failed to load products</p>
      </main>
    );
  }

  const products: SimpleProduct[] = data.products.nodes;
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My HeadLess Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group border p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duraction-300 hover:-translate-y-1 bg-white">
            <div className="overflow-hidden rounded-lg">
              {product.image && (
                <img
                  src={product.image.sourceUrl}
                  alt={product.image.altText}
                  className="w-full h-48 object-cover trnasition-transform duration-500 group-hover:scale-110"
                />
              )}
            </div>
            <h2 className="text-xl font-semibold mt-4 group-hover:text-blue-600 transition-colors">{product.name}</h2>
            <p className="text-blue-600 font-bold mt-2">{product.price}</p>
            <Link href={`/product/${product.slug}`}>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
} 
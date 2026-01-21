// src/app/page.tsx
import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { SimpleProduct, GetProductsResponse } from "@/types/product";


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
          <div key={product.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            {product.image && (
              <img 
              src={product.image.sourceUrl}
              alt={product.image.altText}
              className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-blue-600 font-bold mt-2">{product.price}</p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-grey-800">
              View Product
            </button>
          </div>
        ))}
      </div>
    </main>
  );
} 
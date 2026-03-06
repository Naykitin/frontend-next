// src/app/category/[slug]/page.tsx
import { client } from '@/lib/apollo-client';
import { GET_PRODUCTS_BY_CATEGORY } from "@/lib/queries/get-products-by-category";
import Image from 'next/image';
import Link from 'next/link';

interface CategoryData {
    productCategory: {
        name: string;
        products: {
            nodes: Array<{
                databaseId: number;
                name: string;
                price: string;
                slug: string;
                image?: {
                    sourceUrl: string;
                    altText?: string;
                };
            }>;
        };
    };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const { data } = await client.query<CategoryData>({
        query: GET_PRODUCTS_BY_CATEGORY,
        variables: {
            id: slug,
            slug: slug
        },
        fetchPolicy: 'no-cache',
    });

    const category = data?.productCategory;

    if (!category) {
        return <div className='p-10 text-center'>Not Found</div>
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-6'>{category.name}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {category.products.nodes.map((product: any) => (
                    <div key={product.databaseId} className='border p-4 rounded shadow-sm'>
                        <div className='relative h-64 w-full mb-4 overflow-hidden rounded-lg bg-gray-100'>
                            {product.image ? (
                                <Image
                                    src={product.image.sourceUrl}
                                    alt={product.image.altText || product.name}
                                    fill
                                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                            ) : (
                                <div className='flex items-center justify-center h-full text-gray-400'>No Image</div>
                            )}
                        </div>
                        <h2 className='text-xl font-semibold'>{product.name}</h2>
                        <p className='text-gray-600'>{product.price}</p>

                        <Link href={`/product/${product.slug}`}>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                View Product
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
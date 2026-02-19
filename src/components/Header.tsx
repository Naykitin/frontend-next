import Link from 'next/link';
import { client } from '@/lib/apollo-client';
import { GET_CATEGORIES } from '@/lib/queries/get-categories';

interface HeaderData {
    productCategories: {
        nodes: Array<{
            databaseId: number;
            name: string;
            slug: string;
        }>;
    };
}

export default async function Header() {
    const { data } = await client.query<HeaderData>({
        query: GET_CATEGORIES,
    });

    const categories = data?.productCategories?.nodes || [];

    return (
        <header className='border-b'>
            <nav className='container mx-auto flex items-center justify-between p-4'>
                <Link href="/" className='text-xl font-bold'>
                    My Shop
                </Link>

                <ul className='flex gap-6'>
                    {categories.map((category: any) => (
                        <li key={category.databaseId}>
                            <Link
                                href={`/category/${category.slug}`}
                                className='hover:text-blue-600 transition-colors'
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex gap-4'>
                    <span>Cart (0)</span>
                </div>
            </nav>
        </header>
    );
}
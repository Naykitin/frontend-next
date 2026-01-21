// src/types/product.ts

export interface ProductImage {
   sourceUrl: string;
   altText: string;
}

export interface SimpleProduct {
   id: string;
   name: string;
   slug: string;
   price: string;
   image: ProductImage | null;
   description?: string;
}

export interface GetProductsResponse {
   products: {
      nodes: SimpleProduct[];
   };
}
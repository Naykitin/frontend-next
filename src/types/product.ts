// src/types/product.ts
export interface Product {
   id: string;
   name: string;
   slug: string;
   description?: string;
   image?: {
      sourceUrl: string;
      altText?: string;
   };
   price?: string;
}
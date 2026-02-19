import { gql } from "@apollo/client";

export const GET_PRODUCTS_BY_CATEGORY = gql`
  # Объявляем две переменные: одну как ID, вторую как String
  query GetProductsByCategory($id: ID!, $slug: String!) {
    productCategory(id: $id, idType: SLUG) {
      name
      products(where: { category: $slug }) { 
        nodes {
          databaseId
          name
          slug
          ... on SimpleProduct {
            price
          }
          ... on VariableProduct {
            price
          }
          image {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
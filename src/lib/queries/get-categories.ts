import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    query GetCategories {
        productCategories(where: {hideEmpty: true}) {
            nodes {
                databaseId
                name
                slug
            }
        }
    }
`;
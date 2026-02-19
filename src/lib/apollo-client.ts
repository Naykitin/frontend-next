// src/lib/apollo-client.ts 
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  // Пробуем локальный адрес, так как мы пробросили порт
  uri: "http://localhost:10004/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
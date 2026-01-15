// src/lib/apollo-client.ts 
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://headless-shop.local/graphql',
  }),
  cache: new InMemoryCache(),
});
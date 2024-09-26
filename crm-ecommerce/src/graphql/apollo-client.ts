// src/graphql/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Definir el cliente de Apollo con el URI del servidor GraphQL
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Ajusta el URI a tu servidor GraphQL
  cache: new InMemoryCache(),
});

export default client;

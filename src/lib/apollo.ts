import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8g2d018ji01xxhxy9buso/master',
  cache: new InMemoryCache(),
});

import Express from 'express';
import ApolloServerExpress from 'apollo-server-express';

import { PORT } from './assets/constants.js';
import { resolvers } from './resolvers/_index.js';
import { typeDefs } from './type-definitions/_index.js'

const { ApolloServer, gql } = ApolloServerExpress;
const app = Express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:8080',
    credentials: true
  }
});

app.listen(PORT, () => {
  console.log('Server is running on localhost:4000 ...');
});

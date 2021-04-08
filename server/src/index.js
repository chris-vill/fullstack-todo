import Express from 'express';
import ApolloServerExpress from 'apollo-server-express';

import { PORT } from './assets/constants.js';
import { resolvers } from './resolvers/_index.js';
// import path from 'path';
import { typeDefs } from './type-definitions/_index.js';

const { ApolloServer, gql } = ApolloServerExpress;
const app = Express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({
  app,
  cors: {
    origin: '*',
    credentials: true
  }
});

app
  .use(Express.static('../client/dist'))
  .get('/', (req, res) => res.render('../client/dist/index.html'))
  .listen(PORT, () => {
    console.log('Server is running on localhost:4000 ...');
  });

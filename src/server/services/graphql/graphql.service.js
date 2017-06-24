import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

module.exports = function () {
  const app = this;
  
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: resolvers.call(app),
  });

  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
  
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));

};

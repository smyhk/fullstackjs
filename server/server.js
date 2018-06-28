const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const server = express();

// graphql middleware
server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

server.listen(4000, () => {
  console.info('Express server listening on port 4000');
})
const express = require('express');
const graphqlHTTP = require('express-graphql');

const server = express();

// graphql middleware
server.use('/graphql', graphqlHTTP({
  
}));

server.listen(4000, () => {
  console.info('Express server listening on port 4000');
})
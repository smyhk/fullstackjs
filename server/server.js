const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

// allow cross-origin requests
server.use(cors());

// connect to the database
mongoose.connect('mongodb://steve:passwd@localhost:27017/gql-books');
mongoose.connection.once('open', () => {
  console.info('Connected to database...')
});

// graphql middleware
server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

server.listen(4000, () => {
  console.info('Express server listening on port 4000...');
})
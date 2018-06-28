const graphql = require('graphql');
const _ = require('lodash');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID 
} = graphql;

// dummy data
var books = [
    { title: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { title: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { title: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

// define type for Book
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});


// initial graph entry point
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
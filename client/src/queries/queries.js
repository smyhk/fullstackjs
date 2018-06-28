import { gql } from 'apollo-boost';  // parses queries

// list all books
const getBooksQuery = gql`
  {
    books {
      title
      genre
      id
    }
  }
`;

// list all authors
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export {getAuthorsQuery, getBooksQuery};
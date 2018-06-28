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

const addBookMutation = gql`
  mutation($title: String!, $genre: String!, $authorId: ID!) {
    addBook(title: $title, genre: $genre, authorId: $authorId) {
      title
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
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

// add a book to the database
const addBookMutation = gql`
  mutation($title: String!, $genre: String!, $authorId: ID!) {
    addBook(title: $title, genre: $genre, authorId: $authorId) {
      title
      id
    }
  }
`;

// retrieve a single book; lists other books by the same author
const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      title
      genre
      author {
        id
        name
        age
        books {
          title
          id
        }
      }
    }
  }
`;

export { 
  getAuthorsQuery, 
  getBooksQuery, 
  addBookMutation, 
  getBookQuery 
};
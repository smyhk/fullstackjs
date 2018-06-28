import React, { Component } from 'react';
import { gql } from 'apollo-boost';  // parses queries
import { graphql } from 'react-apollo'; // for binding to component

const getBooksQuery = gql`
  {
    books {
      title
      genre
      id
    }
  }
`;

class BookList extends Component {
  render() {
    console.info(this.props);
    return (
      <div>
        <ul id="book-list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

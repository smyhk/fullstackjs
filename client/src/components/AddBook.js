import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'; // for binding to component
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genre: '',
      authorId: ''
    }
  }
  displayAuthors() {
    var data = this.props.getAuthorsQuery;
    if (data.loading) {
      return (<option disabled>Loading...</option>);
    } else {
      return data.authors.map(author => {
        return (<option key={ author.id } value={ author.id }>{ author.name }</option>);
      });
    }
  }

  sumbitForm(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        title: this.state.title,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
    // clear form after submit
    var frm = document.getElementById('add-book');
    frm.reset();
  }

  render() {
    return (
      <form id="add-book" onSubmit={ this.sumbitForm.bind(this) } >
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={ (e) => this.setState({ title: e.target.value }) } />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={ (e) => this.setState({ authorId: e.target.value }) } >
            <option>Select author</option>
            { this.displayAuthors() }
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation'})
)(AddBook);
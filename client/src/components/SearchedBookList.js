import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
// import DeleteBook from './DeleteBook';

class SearchedBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  displayBooks() {
    var data = this.props.names;
    return data.map((book) => {
      return (
        <li
          key={book.id}
          onClick={(e) => {
            this.setState({ selected: book.id });
          }}
        >
          {book.name}
          {/* <DeleteBook bookId={book.id} /> */}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul id='book-list'>{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(SearchedBookList);

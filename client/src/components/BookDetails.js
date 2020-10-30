import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getSingleBookQuery } from '../queries/queries';

class BookDetails extends Component {
  ShowBookDetails = () => {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h4>Book Details:</h4>
          <p>Name: {book.name}</p>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>Books by this author:</p>
          <ol>
            {book.author.books.map((book) => {
              return (
                <div>
                  <li key={book.id}>{book.name}</li>
                </div>
              );
            })}
          </ol>
        </div>
      );
    } else {
      return <h3>Click on a title to view its details</h3>;
    }
  };
  render() {
    return <div id='book-details'>{this.ShowBookDetails()}</div>;
  }
}

export default graphql(getSingleBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookid,
      },
    };
  },
})(BookDetails);

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import {
  deleteBookMutation,
  getBooksQuery,
  getSingleBookQuery,
} from '../queries/queries';

class DeleteBook extends Component {
  deleteBook = (e) => {
    e.preventDefault();
    const { bookId } = this.props;

    this.props.deleteABook({
      variables: {
        bookId,
      },
      refetchQueries: [
        {
          query: getSingleBookQuery,
          variables: {
            id: bookId,
          },
        },
        { query: getBooksQuery },
      ],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.deleteBook}>X</button>
      </div>
    );
  }
}

export default compose(graphql(deleteBookMutation, { name: 'deleteABook' }))(
  DeleteBook
);

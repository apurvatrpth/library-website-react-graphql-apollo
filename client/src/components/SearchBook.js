import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import SearchedBookList from './SearchedBookList';

class SearchBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: null,
      resultSet: [],
    };
  }

  searchBooksByQuery = (e) => {
    e.preventDefault();
    var data = this.props.data;

    if (data.loading) {
      return <h2>Loading!</h2>;
    } else {
      const filteredBooks = data.books.filter((book) => {
        return book.name.toLowerCase().includes(this.state.query.toLowerCase());
      });

      this.setState({
        resultSet: filteredBooks,
      });
    }
  };

  render() {
    return (
      <div>
        <br />
        <h1>Search Book</h1>
        <input
          type='text'
          onChange={(e) => {
            this.setState({ query: e.target.value });
          }}
          placeholder='Search for books here!'
          style={textBoxStyle}
        ></input>
        <button onClick={this.searchBooksByQuery} style={buttonStyle}>
          🔍
        </button>
        <SearchedBookList names={this.state.resultSet} />
      </div>
    );
  }
}

const textBoxStyle = {
  marginLeft: '440px',
  padding: '10px',
};

const buttonStyle = {
  padding: '10px',
  marginLeft: '10px',
};

export default graphql(getBooksQuery)(SearchBook);

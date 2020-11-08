import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getSingleBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const deleteBookMutation = gql`
  mutation($bookId: ID!) {
    deleteBook(id: $bookId) {
      name
      id
    }
  }
`;

export {
  getAuthorQuery,
  getBooksQuery,
  addBookMutation,
  getSingleBookQuery,
  deleteBookMutation,
};

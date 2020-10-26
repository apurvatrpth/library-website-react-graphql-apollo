const graphQl = require('graphql');
const lodash = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphQl;

//dummy data

let books = [
  { name: 'freedom at midnight', genre: '1', id: '1', authorId: '1' },
  { name: 'bombay 1947', genre: '1', id: '2', authorId: '2' },
  { name: 'churchill and india', genre: '2', id: '3', authorId: '3' },
  { name: 'feriha', genre: '2', id: '3', authorId: '1' },
];

let authors = [
  { name: 'Patrick', age: 44, id: '1' },
  { name: 'Brandon', age: 27, id: '2' },
  { name: 'Tolkien', age: 76, id: '3' },
];

const BookType = new GraphQLObjectType({
  name: 'book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return lodash.find(authors, { id: parent.id });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return lodash.filter(books, { authorId: parent.id });
      },
    },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return lodash.find(books, { id: args.id });
      },
    },

    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return lodash.find(authors, { id: args.id });
      },
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
});

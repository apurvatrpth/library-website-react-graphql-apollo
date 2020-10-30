import BookList from './components/BookList';
import { ApolloProvider } from 'react-apollo';
import AddBook from './components/AddBook';
const { ApolloClient, InMemoryCache } = require('@apollo/client');

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Library</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;

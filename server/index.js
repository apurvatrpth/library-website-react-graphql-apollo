const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema/schema');

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// use of middleware graphql

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

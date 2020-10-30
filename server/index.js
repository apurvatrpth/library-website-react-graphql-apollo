const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

//allow cors
app.use(cors());

mongoose.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Database Connected');
  }
);

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

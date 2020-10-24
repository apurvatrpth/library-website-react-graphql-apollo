let express = require('express');
const graphQlHttp = require('express-graphql');
const app = express();

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

const express = require("express");
const { createServer } = require("http");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = require("graphql");

const { RootQueryType, RootMutationType } = require("./types");

const PORT = 5000;

const app = express();
const server = createServer(app);

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true, // provides a user interface for querying and mutating data
  })
);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

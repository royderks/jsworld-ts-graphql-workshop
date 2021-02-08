const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require('cors')

const list = [];

for (let i = 0; i < 12; i++) {
  list.push({
    id: i,
    name: `Item #${i}`,
    categoryName: "Default",
    category: {
      name: "Default",
    },
  });
}

const schema = buildSchema(`
  type ListItem {
    id: Int!
    name: String!
    category: Category!
    categoryName: String!
  }
  type Category {
    name: String!
  }
  type Query {
    list: [ListItem]
  }
`);

const resolvers = {
  list: () => list,
};

const app = express();

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

const port = 8080;

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
});

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import db from "./_db.js";
//types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

//server setup
const server = new ApolloServer({
  //typeDefs
  // --- Definitons of the diffrent types of data we want to expose on our graph
  // --- Schema describes the shape of a graph and the data available on it
  typeDefs,
  //Resolvers
  // -- How we respond to queries on the graph
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`server ready at port `, 4000);

const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
require('dotenv').config()

const connectDB = require("./config/db");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");



async function startApolloServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  await connectDB();


  try {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    app.use("/graphql", express.json(), expressMiddleware(server));

    app.listen(8000, () => {
      console.log(`🚀 Server ready at http://localhost:8000/graphql`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startApolloServer();

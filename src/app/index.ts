const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");
const typeDefs = require("../graphql/typeDefs");
const resolvers = require("../graphql/resolvers");
require('dotenv').config()


export async function initServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  await connectDB();

  const graphqlServer = new ApolloServer({typeDefs, resolvers});

  await graphqlServer.start();

  app.use("/graphql", express.json(), expressMiddleware(graphqlServer));

  return app;
}

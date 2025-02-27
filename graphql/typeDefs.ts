const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
    priority: String!
    dueDate: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getTasks: [Task]
  }

  type Mutation {
    addTask(title: String!, description: String, priority: String!, dueDate: String): Task
    updateTask(id: ID!, completed: Boolean!): Task
    deleteTask(id: ID!): String
  }
`;

module.exports = typeDefs;

const Task = require("../models/task");

const resolvers = {
  Query: {
    getTasks: async () => {
      const  data  = await Task.find({});
      return data;
     
    },
  },
  Mutation: {
    addTask: async (_, { title, description, priority, dueDate }) => {
      console.log(title, description, priority, dueDate);
      const newTask = new Task({ title, description,priority, dueDate });
      return await newTask.save();
    },
    updateTask: async (_, { id, completed }) => {
      return await Task.findByIdAndUpdate(id, { completed }, { new: true });
    },
    deleteTask: async (_, { id }) => {
      await Task.findByIdAndDelete(id);
      return "Task deleted successfully!";
    },
  },
};

module.exports = resolvers;

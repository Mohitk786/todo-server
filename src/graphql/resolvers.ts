const Task = require("../models/task");

interface TaskInput {
  id?: string;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
}

interface UpdateTaskInput {
  id: string;
  completed: boolean;
}

interface DeleteTaskInput {
  id: string;
}

const taskResolvers = {
  Query: {
    getTasks: async () => {
      try {
        const tasks = await Task.find({});
        return tasks;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw new Error("Failed to fetch tasks");
      }
    },
  },

  Mutation: {
    addTask: async (
      _: unknown,
      { title, description, priority, dueDate }: TaskInput
    ) => {
      try {
        const newTask = new Task({ title, description, priority, dueDate });
        return await newTask.save();
      } catch (error) {
        console.error("Error adding task:", error);
        throw new Error("Failed to add task");
      }
    },

    editTask: async (
      _: unknown,
      { id, title, description, priority, dueDate }: TaskInput
    ) => {
      try {
        const updatedTask = await Task.findByIdAndUpdate(
          id,
          { title, description, priority, dueDate },
          { new: true }
        );

        if (!updatedTask) {
          throw new Error("Task not found");
        }

        return updatedTask;
      } catch (error) {
        console.error("Error editing task:", error);
        throw new Error("Failed to edit task");
      }
    },

    deleteTask: async (_: unknown, { id }: DeleteTaskInput) => {
      try {
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
          throw new Error("Task not found");
        }

        return "Task deleted successfully!";
      } catch (error) {
        console.error("Error deleting task:", error);
        throw new Error("Failed to delete task");
      }
    },
  },
};

module.exports = taskResolvers;

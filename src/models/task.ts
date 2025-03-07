const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: [true, "title is required"], 
      trim: true 
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    completed: { 
      type: Boolean, 
      default: false 
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    dueDate: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);

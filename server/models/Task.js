const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: String,

  completed: {
    type: Boolean,
    default: false,
  },

  priority: {
    type: String,
    default: "Low",
  },

  dueDate: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Task", taskSchema);
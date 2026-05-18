const Task = require("../models/Task");

// CREATE
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

// GET
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.params.userId });
  res.json(tasks);
};

// DELETE
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
};

// TOGGLE
exports.toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
};

// EDIT
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};
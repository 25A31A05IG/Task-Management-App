const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// GET ONLY USER TASKS
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// CREATE TASK
router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
    user: req.user.id,
  });

  res.json(task);
});

module.exports = router;

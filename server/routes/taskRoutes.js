const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  deleteTask,
  toggleTask,
  updateTask,
} = require("../controllers/taskController");

router.post("/", createTask);
router.get("/:userId", getTasks);
router.delete("/:id", deleteTask);
router.put("/:id", toggleTask);
router.put("/edit/:id", updateTask);

module.exports = router;
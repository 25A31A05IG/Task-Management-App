const express = require("express");
const router = express.Router();

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  res.json({ message: "Register working", user: { name, email } });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  res.json({ message: "Login working" });
});

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("User route working");
});

module.exports = router;
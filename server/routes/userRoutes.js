const express = require("express");
const router = express.Router();
const User = require("../models/User");

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("User route working");
});

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log("REGISTER BODY:", req.body);

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

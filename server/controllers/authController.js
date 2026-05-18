const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// REGISTER
exports.register = async (req, res) => {

  try {

    const {
      username,
      email,
      password,
    } = req.body;

    // CHECK EXISTING USER
    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message:
        "Registration successful",
      user,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};


// LOGIN
exports.login = async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;

    // FIND USER
    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message:
          "Invalid email or password",
      });
    }

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        message:
          "Invalid email or password",
      });
    }

    // TOKEN
    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};
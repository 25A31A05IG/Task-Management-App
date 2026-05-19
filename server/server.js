require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ THIS IS THE FIX
app.use(cors({
  origin: "https://task-management-app-rdhv.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

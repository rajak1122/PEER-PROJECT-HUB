require("dotenv").config();

const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoutes);
app.use("/api/comments", commentRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;

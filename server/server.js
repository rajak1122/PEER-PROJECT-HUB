require("dotenv").config();

const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);

connectDB();


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;

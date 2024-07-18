const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

module.exports = app;

const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

// Get data
router.get("/", dataController.getData);

module.exports = router;

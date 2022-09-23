const express = require("express");
const router = express.Router();
const { fullName, job } = require("../controllers/personController.js");

// GET full name.
router.get("/", fullName);

// GET job.
router.get("/job", job);

module.exports = router;

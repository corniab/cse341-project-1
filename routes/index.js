const express = require("express");
const router = express.Router();

const { fullName } = require("../controllers/personController.js");

// GET full name.
router.get("/", fullName);
module.exports = router;

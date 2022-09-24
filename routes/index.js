const express = require("express");
const contactsRouter = require("./contacts.route");
const router = express.Router();

// Return first and last name at root.
router.get("/", (req, res) => {
	res.send("Ben Cornia");
});

// GET contacts
router.use("/contacts", contactsRouter);

module.exports = router;

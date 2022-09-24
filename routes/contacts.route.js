const express = require("express");
const contactsRouter = express.Router();
const { getAllContacts, getContactById } = require("../controllers/contacts.controller.js");

// GET all contacts
contactsRouter.get("/", getAllContacts);

// Get contact by id
contactsRouter.get("/:id", getContactById);

module.exports = contactsRouter;

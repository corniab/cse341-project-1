const express = require("express");
const contactsRouter = express.Router();
const { getAllContacts, getContactById, postContact, putById, deleteById } = require("../controllers/contacts.controller.js");

// GET all contacts
contactsRouter.get("/", getAllContacts);

// GET contact by id
contactsRouter.get("/:id", getContactById);

// POST a new contact by id
contactsRouter.post("/", postContact);

// PUT contact by id
contactsRouter.put("/:id", putById)

// DELETE contact by id
contactsRouter.delete("/:id", deleteById)


module.exports = contactsRouter;

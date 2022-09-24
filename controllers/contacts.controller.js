const { findAllContacts, findContactById } = require("../db/contacts.db.js");

/**
 * Invokes the findAllContacts database function.
 * @param {*} req
 * @param {*} res
 */
async function getAllContacts(req, res) {
	console.log("Getting all contacts...");
	const contacts = await findAllContacts();
	res.set({ "Content-Type": "application/json" });
	res.json(contacts);
}

async function getContactById(req, res) {
	console.log("Getting contact by id...");
	let { id } = req.params;
	id = Number(id);
	console.log(id);
	const contact = await findContactById(id);
	res.set({ "Content-Type": "application/json" });
	res.json(contact);
}

module.exports = { getAllContacts, getContactById };

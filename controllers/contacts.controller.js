const { findAllContacts, findContactById, createContact, updateContact, deleteContact } = require("../db/contacts.db.js");

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
	const contact = await findContactById(id);
	res.set({ "Content-Type": "application/json" });
	res.json(contact);
}

async function postContact(req, res) {
	console.log("Creating a new contact...");
	createContact(req.body)
		.then(result => {
			if(result.acknowledged) {
				res.status(201);
				res.json({"contactId": result.insertedId})
			} else {
				res.status(400);
				throw Error("Failed to insert contact");
			}
		})
		.catch(error => console.log(error));
};

async function putById(req, res) {
	console.log("Updating contact...");
	updateContact(req.params.id, req.body)
		.then(result => {
			if(result.acknowledged) {
				res.status(204);
			} else {
				res.status(400);
				throw Error("Failed to update contact")
			}
		})
		.catch(error => console.log(error));
	

}

async function deleteById(req, res) {
	console.log("Deleting contact...");
	deleteContact(req.params.id)
		.then(result => {
			if(result.acknowledged) {
				res.status(204);
				console.log('deletion successful')
			} else {
				res.status(400);
				throw Error("Failed to delete contact")
			}
		})
		.catch(error => console.log(error));
}





module.exports = { getAllContacts, getContactById, postContact, putById, deleteById };

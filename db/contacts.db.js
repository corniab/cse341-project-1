const { connection } = require("./connection.js");

const collection = connection.client.db("nodeApp").collection("contacts");
/**
 * Makes a request to the database for all contacts.
 * @returns
 */
async function findAllContacts() {
	const result = await collection.find({}).toArray();
	return result;
}

async function findContactById(id) {
	const result = await collection.findOne({ id: id });
	return result;
}

module.exports = { findAllContacts, findContactById };

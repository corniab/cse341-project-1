const { connection } = require("./connection.js");
const ObjectId = require('mongodb').ObjectId;

const collection = connection.client.db("nodeApp").collection("contacts");
/**
 * Makes a request to the database for all contacts.
 * @returns
 */
async function findAllContacts() {
	console.log("Getting contacts from database...")
	const result = await collection.find({}).toArray();
	return result;
}

async function findContactById(id) {
	const objectId = new ObjectId(id)
	const result = await collection.findOne({ _id: objectId });
	return result;
}


async function createContact(newContact) {
	const result = await collection.insertOne(newContact)
	return result;
}

async function updateContact(id, requestBody) {
	const objectId = new ObjectId(id);
	const result = await collection.updateOne({ _id: objectId }, { $set: requestBody});
	return result;
}

async function deleteContact(id) {
	const objectId = new ObjectId(id);
	const result = await collection.deleteOne({ _id: objectId });
	return result;
}

module.exports = { findAllContacts, findContactById, createContact, updateContact, deleteContact };

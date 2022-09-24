const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

class Connection {
	constructor() {
		// Make environment variables available in application.
		dotenv.config();

		// Connection String
		this.URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nodeapp.vuavnep.mongodb.net/?retryWrites=true&w=majority`;

		// MongoClient
		this.client = new MongoClient(this.URI);
	}

	/**
	 * Connects the database.
	 */
	async init() {
		console.log("Connecting to database...");
		try {
			await this.client.connect();
			console.log("Connection complete...");
		} catch (e) {
			console.error(e);
		}
	}
}

module.exports = { connection: new Connection() };

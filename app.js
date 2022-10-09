const router = require("./routes");
const express = require("express");
const BodyParser = require("body-parser");
const { connection } = require("./db/connection.js");
const swaggerUI = require("swagger-ui-express")

// Create express application.
const app = express();

// Serve api docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(require('./swagger.js')))

// Specify port.
const port = process.env.PORT || 3000;

// Use expressjs for parsing json
app.use(BodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Direct requests for root directory to router function.
app.use("/", router);

// Connect Database
connection.init();

// Launch Server.
app.listen(port, () => {
	console.log(`App listening at port ${port}...`);
});

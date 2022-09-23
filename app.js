const router = require("./routes");
const express = require("express");

// Create express application.
const app = express();

// Specify port.
const port = process.env.PORT || 3000;

// Direct requests for root directory to router function.
app.use("/", router);

// Launch Server.
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}...`);
});

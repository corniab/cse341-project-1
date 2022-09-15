const router = require("./routes");
const express = require("express");
const app = express();
const port = 3000;

app.use("/", router);

app.listen(port, () => {
	console.log(`App listening on port ${port}...`);
});

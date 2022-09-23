// Send fullname
const fullName = (req, res) => {
	// res.json({
	// 	fName: "Ben",
	// 	lName: "Cornia",
	// 	email: "ben@exampl.coms",
	// });
	res.send("Ben Cornia");
};

// Send job
const job = (req, res) => {
	res.json({
		job: "Student",
	});
};

module.exports = { fullName, job };

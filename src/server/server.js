/**
 * From: https://github.com/bengrunfeld/expack
 */
const path = require("path");
const express = require("express");

const app = express(),
	DIST_DIR = "./dist",
	HTML_FILE = path.join(DIST_DIR, "index.html");


app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
	res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`App listening to ${PORT}....`);
	// eslint-disable-next-line no-console
	console.log("Press Ctrl+C to quit.");
});
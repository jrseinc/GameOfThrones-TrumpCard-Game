/**
 * From: https://github.com/bengrunfeld/expack
 */
import path from "path";
import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

// Reference: https://stackoverflow.com/a/50052194
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DIST_DIR = path.join( __dirname, "/../../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const PORT = process.env.PORT || 3000;

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
	res.sendFile(HTML_FILE);
});

io.on("connection", (socket) => {
	console.log("a user connected");
});

server.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`App listening to ${PORT}....`);
	// eslint-disable-next-line no-console
	console.log("Press Ctrl+C to quit.");
});
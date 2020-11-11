import path from "path";
import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import { fileURLToPath } from "url";
import { commands, maxPlayers } from "../common/structures.mjs";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

// Reference: https://stackoverflow.com/a/50052194
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DIST_DIR = path.join(__dirname, "/../../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const PORT = process.env.PORT || 3000;

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
	res.sendFile(HTML_FILE);
});

const getRandomId = (min = 1000, max = 9999) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const createNewGame = function () {
	let roomID = getRandomId().toString();
	// Get new random id until it's different from current room ids
	while (io.sockets.adapter.rooms.has(roomID))
		roomID = getRandomId().toString();
	this.emit(commands.newGameCreated, { "roomID": roomID });
	this.join(roomID);
};

const joinGame = function (roomID, callback) {
	// Check if the room exist
	if (io.sockets.adapter.rooms.has(roomID)) {
		if (io.sockets.adapter.rooms.get(roomID).size >= maxPlayers) {
			this.emit(commands.error, "Max players already joined.");
			return;
		}
		this.join(roomID);
		this.to(roomID).emit(commands.playerJoined);
		// Current size of the room will be the player number.
		// Return it back to the player joined
		let player = io.sockets.adapter.rooms.get(roomID).size;
		callback(player);

		// If the room has maximum number of players allowed
		// broadcast lobby full to all players
		if (player == maxPlayers)
			io.in(roomID).emit(commands.lobbyFull);
	}
	else
		this.emit(commands.error, "Invalid room number.");
};

const playerChose = function (data) {
	this.to(data.roomID).emit(commands.playerChose, { player: data.player, attribute: data.attribute });
};

const cards = function (data) {
	this.to(data.roomID).emit(commands.cards, data.cards);
};

const getCards = function (roomID) {
	this.to(roomID).emit(commands.getCards);
};

const matchData = function (data) {
	this.to(data.roomID).emit(commands.matchData, data.matchData);
};
const disconnect = function () {
	console.log(this.id, "disconnected");
};
io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on(commands.getCards, getCards);
	socket.on(commands.cards, cards);
	socket.on(commands.createNewGame, createNewGame);
	socket.on(commands.matchData, matchData);
	socket.on(commands.joinGame, joinGame);
	socket.on(commands.playerChose, playerChose);
	socket.on("disconnect", disconnect);
});

server.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`App listening to ${PORT}....`);
	// eslint-disable-next-line no-console
	console.log("Press Ctrl+C to quit.");
});

process.on("SIGTERM", () => {
	server.close(() => {
		console.log("Process terminated");
	});
});
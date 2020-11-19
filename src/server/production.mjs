import { createServer, attachToServerIO, startListening } from "./server.mjs";
const startSequence = function () {
	// eslint-disable-next-line no-unused-vars
	let { app, server, io } = createServer();
	attachToServerIO(io);
	startListening(server);
};
startSequence();
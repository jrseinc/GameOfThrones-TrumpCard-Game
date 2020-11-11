import io from "socket.io-client";
import { commands, matchData, maxCards } from "../../common/structures.mjs";

export class Online {
	#socket = null;
	#roomID = null;
	#player = 1;

	get socket() {
		return this.#socket;
	}
	get player() {
		return this.#player;
	}
	get roomID() {
		return this.#roomID;
	}
	set roomID(roomID) {
		this.#roomID = roomID;
	}
	createConnection() {
		return new Promise((resolve, reject) => {
			this.#socket = io();
			if (this.#socket)
				resolve(this.#socket.id);
			else
				reject("Unable to connect to server.");
		})
	}
	createNewGame() {
		if (!this.#socket)
			return;
		this.#socket.emit(commands.createNewGame);
	}
	joinGame(roomID = null) {
		this.#roomID = roomID;
		if (this.#socket && this.#roomID)
			this.#socket.emit(commands.joinGame, this.#roomID, (player) => {
				this.#player = player;
			});
	}
	playerChose(data) {
		if (this.#socket && this.#roomID)
			this.#socket.emit(commands.playerChose, { "roomID": this.#roomID, "player": data.player, "attribute": data.attribute });
	}
	sendCards(cards) {
		if (this.#socket && this.#roomID)
			this.#socket.emit(commands.cards, { "roomID": this.#roomID, cards });
	}
	getCards() {
		if (this.#socket && this.#roomID)
			this.#socket.emit(commands.getCards, this.#roomID);
	}
	subscribe(command, callback) {
		if (this.#socket)
			this.#socket.on(command, callback);
	}
}
import "../css/style.css";
import "../assets/floor.mp4";
import "../assets/MatchSounds/attWin.mp3";
import "../assets/MatchSounds/defWin.mp3";
import "../assets/bgmusic2.mp3";
import charactersFile from "../data.json";
import { Online } from "./online";


import {
	attributesSupported,
	maxPlayers,
	maxCards,
	matchStatus,
	matchModes,
	matchData,
	commands
} from "../../common/structures.mjs";

//audio files
let attWins = document.querySelector("#attWins");
let diffWins = document.querySelector("#diffWins");
let bgMusic = document.getElementById("my_audio");

window.onload = function () {
	bgMusic.play();
};


let characters = [];
let cards = {};
let online = null;

const playerContainers = document.getElementsByClassName("palyer-container");

const getPlayerContainer = function (playerContainers, player) {
	return playerContainers[player - 1];
};
const getStatsPanel = function (container) {
	return container.querySelector(".character-stats");
};
const getAttributeElement = function (container, attribute, player) {
	return container.querySelector(`#character-${player}-${attribute}`);
};

// Custom iterator to get players which skips players who are lost
const players = function* (start = 1, end = maxPlayers, step = 1, skipLost = true) {
	let iterationCount = 0;
	for (let player = start; player <= end; player += step) {
		// Do not return player who is already lost
		if (skipLost && matchData.playersLost.includes(player))
			continue;
		iterationCount++;
		yield player;
	}
	return iterationCount;
};

// TODO: better card shuffler
const shuffle = async function () {
	//this will store number from 0 to 49 which will be shuffled and later divided into two decks of cards
	let stockArray = [];

	for (let i = 0; i < maxCards; i++) {
		stockArray.push(i);
	}
	var currentIndex = stockArray.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = stockArray[currentIndex];
		stockArray[currentIndex] = stockArray[randomIndex];
		stockArray[randomIndex] = temporaryValue;
	}

	return stockArray;
};

const splitCards = async function (stock) {
	let divider = stock.length / maxPlayers;
	let cards = {};
	for (let player of players()) {
		// TODO: make better cards divider
		// example for player 1: (player-1*divider) will be 0
		// player*divider will be 25
		cards[player] = stock.slice((player - 1) * divider, player * divider);
	}
	return cards;
};

function setContent() {
	for (let player of players()) {
		let playerContainer = getPlayerContainer(playerContainers, player);
		let statsPanel = getStatsPanel(playerContainer);
		let character = characters[getTopCard(player)];
		// Set average to 0 first
		character.average = 0;
		attributesSupported.forEach(attribute => {
			let text = "";
			if (player == matchData.currentPlayer) {
				if (attribute == "average") {
					character.average /= attributesSupported.length;
					// No decimal places
					character.average = character.average.toFixed(0);
				}
				else
					character.average += Number(character[attribute] || 0);
				text = character[attribute];
			}
			else
				text = "---";
			getAttributeElement(statsPanel, attribute, player).textContent = text;
		});
		getAttributeElement(playerContainer, "image", player).style.backgroundImage = `url("${character.image}")`;
		getAttributeElement(playerContainer, "name", player).textContent = character.name;
		getAttributeElement(playerContainer, "role", player).textContent = character.title;
	}
}
const getTopCard = function (player, remove = false) {
	if (remove)
		return cards[player].shift();
	else
		return cards[player][0];
};
const getAttributeValue = function (card, attribute) {
	//If we do not have the attribute for top card use 0
	return characters[card][attribute] || 0;
};
const manageCards = function (winnerPlayer) {
	for (let player of players()) {
		let card = getTopCard(player, true);
		// Add card to winner player if match mode is long
		if (matchData.mode == matchModes.long) {
			cards[winnerPlayer].push(card);
		}
	}
};
const findLargestAttribute = function (selectedAttribute) {
	// Find players which have largest value of selected attribute
	// Add them to this object
	let largestAttribute = {
		value: -1,
		players: []
	};
	for (let player of players()) {
		let attributeValue = getAttributeValue(getTopCard(player), selectedAttribute);
		// If attributeValue of the player is greater than stored value
		// add it to the object and make player list empty because
		// now we insert players of new value
		if (attributeValue > largestAttribute.value) {
			largestAttribute.value = attributeValue;
			largestAttribute.players = [];
		}
		// Store players who has attribute value equal to largest attribute value
		if (attributeValue == largestAttribute.value)
			largestAttribute.players.push(player);
	}
	return largestAttribute;
};
const findWithMinRank = function (largestAttribute) {
	// After finding players with largest attribute values, we can find winner among them,
	// as rank is unique. The players with rank less will win the round
	// For now we are assuming rank as the index of characters in the characters array.
	let minRank = {
		// We can only have rank value less than maxCards
		value: maxCards,
		player: null
	};
	largestAttribute.players.forEach((player) => {
		// getTopCard gives position of card in the character array, we are using it as rank for now
		// If the rank is lower than lowest rank in minRank store it including which player
		// minRank.player will hold the winner player
		if (getTopCard(player) < minRank.value) {
			minRank.value = getTopCard(player);
			minRank.player = player;
		}
	});
	return minRank;
};
const judge = function (attribute) {
	// Only judge if attribute is supported
	if (!attributesSupported.includes(attribute))
		return;

	let largestAttribute = findLargestAttribute(attribute);
	let minRank = findWithMinRank(largestAttribute);
	let winner = minRank.player;

	matchData.lastWinner = winner;

	manageCards(winner);

	if (winner == matchData.currentPlayer) {
		attWins.play();
	}
	else {
		diffWins.play();
		// get to next player only if attacker looses
		matchData.nextPlayer(winner);
	}
	roundManager();
};

const getAttributeName = function (target) {
	// example: character-2-age
	const attributePattern = /character-([0-9])-(\w+)/;
	let matches = attributePattern.exec(target.id);
	if (matches)
		return { "player": matches[1], "attribute": matches[2] };
};
const listen = function (event) {
	let attributeDetails = getAttributeName(event.target);
	// Only judge if we have attribute details, attribute is clicked by current player
	// and match is currently running
	if (matchData.status != matchStatus.running ||
		!attributeDetails ||
		(attributeDetails.player != matchData.currentPlayer))
		return;
	if (online) {
		// If online then click only allowed for the player you are
		if (online.player != attributeDetails.player)
			return;
		online.playerChose(attributeDetails);
	}
	judge(attributeDetails.attribute);
};
const addListeners = function (containers) {
	for (let i = 0; i < containers.length; i++)
		containers[i].addEventListener("click", listen);
};
const setRole = function () {
	for (let player of players()) {
		let text = "";
		if (player == matchData.currentPlayer)
			text = "👑 ATTACKERS";
		else
			text = "DEFENDERS";
		getPlayerContainer(playerContainers, player).querySelector(`#player-${player}-role`).textContent = text;
	}
};
const decideMatch = function () {
	for (let player of players()) {
		// If the cards array for the player is empty,
		// add that player to the lost player array
		if (cards[player].length == 0)
			matchData.playersLost.push(player);
	}
	// If all the players except 1 is lost, declare result
	if (matchData.playersLost.length >= maxPlayers - 1) {
		matchData.status = matchStatus.concluded;
		if (matchData.mode == matchModes.short)
			return matchData.lastWinner;
		else
			// Return the only left player
			return players().next().value;
	}
};
// This function will be called in very round. This function provide the core functionality of the gameplay
const roundManager = function () {
	if (playerContainers.length < maxPlayers)
		console.warn(`Not enough containers for ${maxPlayers} players.`);
	if (characters.length < maxCards)
		console.warn(`Not enough characters for ${maxCards} cards.`);
	let playerWon = decideMatch();
	if (playerWon) {
		alert(`Player ${playerWon} won`);
		return;
	}
	setRole();
	setContent();
};
const setUp = function () {
	addListeners(playerContainers);
	matchData.status = matchStatus.running;
	roundManager();
};
const hostOnline = function () {
	matchData.isHost = true;
	initOnline();
	online.createNewGame();
};
const initOnline = function () {
	online.subscribe(commands.newGameCreated, onlineGameCreated);
	online.subscribe(commands.playerJoined, playerJoined);
	online.subscribe(commands.playerChose, playerChose);
	online.subscribe(commands.cards, cardsReceived);
	online.subscribe(commands.lobbyFull, startGame);
	online.subscribe(commands.getCards, sendCards);
	online.subscribe(commands.error, errorFromServer);
};
const sendCards = function () {
	if (matchData.isHost)
		online.sendCards(cards);
};
const onlineGameCreated = function (data) {
	online.roomID = data.roomID;
	document.getElementById("room-id").innerText = online.roomID;
	online.sendCards(cards);
};
const cardsReceived = function (cards_in) {
	// Only receive cards if the player is not host
	if (!matchData.isHost) {
		cards = cards_in;
		// Setup when cards are available an when not a host
		setUp();
	}
};
const playerJoined = function () {
	console.log("Player joined.");
	if (matchData.isHost)
		online.sendCards(cards);
};
const playerChose = function (data) {
	if(matchData.status == matchStatus.running)
		judge(data.attribute);
};
const joinOnline = function (roomID) {
	initOnline();
	online.joinGame(roomID);
};
const startGame = function () {
	// If host setup immediately
	if (matchData.isHost)
		setUp();
	else
		online.getCards();
};
const loadCharacters = function () {
	return fetch(charactersFile)
		.then(response => response.json(), error => {
			console.error(error);
		});
};
const errorFromServer = function (msg) {
	alert(msg);
};
const start = function () {
	loadCharacters().then(data => {
		characters = data["characters"];
		return shuffle();
	})
		.then((shuffledArray) => splitCards(shuffledArray))
		.then((splittedCards) => {
			cards = splittedCards;
			let isOnline = window.confirm("Do you want to play online?");
			if (isOnline) {
				online = new Online();
				let roomID = window.prompt("Enter room ID.");
				if (roomID)
					online.createConnection().then(joinOnline(roomID));
				else
					online.createConnection().then(hostOnline);
			}
			else
				setUp();
		})
		.catch(() => {
			console.error("Invalid character data received.");
		});
};

//pause menu actions
const menu = document.getElementById("pause-menu");
//toggle view state of menu
const toggleMenuView = function(){
	menu.classList.toggle('toggle-menu-show');
}

//Code to toogle music on/off
const toggleMusicBtn = document.getElementById("musicToggle");
const toggleMusicFuntion = function(){
	toggleMusicBtn.classList.toggle('active');
	bgMusic.muted = !bgMusic.muted;
}
toggleMusicBtn.addEventListener('click', () =>{ toggleMusicFuntion(); });

//Code to toggle voice on/off
const toggleVoiceBtn = document.getElementById("voiceToggle");
const toggleVoiceFuntion = function(){
	toggleVoiceBtn.classList.toggle('active');
	attWins.muted = !attWins.muted;
	diffWins.muted = !diffWins.muted;
}
toggleVoiceBtn.addEventListener('click', () =>{ toggleVoiceFuntion(); });

//keydowm's
window.addEventListener('keydown', (evt) =>{
	if(evt.key === 'm'){
		toggleMusicFuntion();
		if(bgMusic.muted == false)
		alert("Background Music ON");
		else
		alert("Background Music OFF");
	}
	else if(evt.key === 'v'){
		toggleVoiceFuntion();
		if(attWins.muted == false)
		alert("Voices ON");
		else
		alert("Voices OFF");
	}
	else if(evt.key === " "){
		toggleMenuView();
	} 
});


if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("/service-worker.js").then(registration => {
			console.log("SW registered: ", registration);
		}).catch(registrationError => {
			console.log("SW registration failed: ", registrationError);
		});
	});
}

start();
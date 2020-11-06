import "../css/style.css";
import "../assets/floor.mp4";
import "../assets/MatchSounds/attWin.mp3";
import "../assets/MatchSounds/defWin.mp3";
import "../assets/bgmusic2.mp3";
import charactersFile from "../data.json";
import "regenerator-runtime/runtime.js";

window.onload = function () {
	document.getElementById("my_audio").play();
};

let characters = [];

const attributesSupported = [
	"age",
	"power",
	"strength",
	"defence",
	"morality",
	"average"
];
//audio files
let attWins = document.querySelector("#attWins");
let diffWins = document.querySelector("#diffWins");

const maxPlayers = 2;
// This is done so that we always have equal cards for each player
const maxCards = 5 * maxPlayers;
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
const matchStatus = Object.freeze({ starting: 1, running: 2, concluded: 3 });
const matchModes = Object.freeze({ short: 1, long: 2 });
let matchData = {
	currentPlayer: 1,
	nextPlayer: function (winner = null) {
		if (winner)
			this.currentPlayer = winner;
		else
		{
			if (this.currentPlayer >= maxPlayers)
				this.currentPlayer = 1;
			else
				this.currentPlayer += 1;
		}
	},
	playersLost: [],
	status: matchStatus.starting,
	mode: matchModes.short,
	lastWinner: null
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
//this will store number from 0 to 49 which will be shuffled and later divided into two decks of cards
let stockArray = [];

for (let i = 0; i < maxCards; i++) {
	stockArray.push(i);
}

//helper function for shuffling the array
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

stockArray = shuffle(stockArray);

let cards = {};
const getCards = function (stock) {
	let divider = stock.length / maxPlayers;
	for (let player of players()) {
		// TODO: make better cards divider
		// example for player 1: (player-1*divider) will be 0
		// player*divider will be 25
		cards[player] = stock.slice((player - 1) * divider, player * divider);
	}
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
	if (matchData.status == matchStatus.running && attributeDetails && (attributeDetails.player == matchData.currentPlayer))
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
	getCards(stockArray);
	matchData.status = matchStatus.running;
	roundManager();
};
const loadCharacters = function () {
	fetch(charactersFile)
		.then(response => response.json())
		.then(data => {
			characters = data["characters"];
			setUp();
		});
};
loadCharacters();

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("/service-worker.js").then(registration => {
			console.log("SW registered: ", registration);
		}).catch(registrationError => {
			console.log("SW registration failed: ", registrationError);
		});
	});
}

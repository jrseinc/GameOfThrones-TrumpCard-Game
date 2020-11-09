export const matchStatus = Object.freeze({ starting: 1, running: 2, concluded: 3 });
export const matchModes = Object.freeze({ short: 1, long: 2 });
export const maxPlayers = 2;
// This is done so that we always have equal cards for each player
export const maxCards = 5 * maxPlayers;
export let matchData = {
	currentPlayer: 1,
	nextPlayer: function (winner = null) {
		if (winner)
			this.currentPlayer = winner;
		else {
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

export const attributesSupported = [
	"age",
	"power",
	"strength",
	"defence",
	"morality",
	"average"
];
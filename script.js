
var cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var used = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
         //  1  2  3  4  5  6  7  8  9 10 11 12 13
var totalUsed = 0;


var playerCard = document.getElementById('playerCard');
var computerCard = document.getElementById('computerCard');
var playerScore = document.getElementById('playerScore');
var computerScore = document.getElementById('computerScore');
var playerScoreValue = 0;
var computerScoreValue = 0;
var message = document.getElementById('bubble');

var getNumber = function () {
	if (totalUsed === 12) {
		for (var i = 0; i < 13; i++)
			if (used[i] < 2) return i;
	}
	else {
		var x = Math.floor (Math.random ()*13);
		while (used[x] > 2) x = Math.floor (Math.random ()*13);
		used[x]++;	
		if (used[x] === 2) totalUsed++;
		return x;	
	}
}

var win = function () {
	playerScoreValue++;
	playerScore.innerHTML = playerScoreValue;
	message.innerHTML = "You win a point! Flip.";
}

var lose = function () {
	computerScoreValue++;
	computerScore.innerHTML = computerScoreValue;
	message.innerHTML = "I win a point! Flip.";
}

var play = function () {
	var myCard = getNumber ();
	var compCard = getNumber ();
	playerCard = document.getElementById ('playerCard');
	playerCard.innerHTML = cards[myCard];
	message.innerHTML = "It's my turn to flip."
	setTimeout ( function () {
		computerCard.innerHTML = cards[compCard];
		if (myCard < compCard) lose ();
		else if (myCard > compCard) win ();
		else message.innerHTML = "It's a draw. Flip."
		if (totalUsed === 12) {
			message.innerHTML = "Good game!";
			if (playerScoreValue>computerScoreValue) alert ('You win! :D');
			else {
				if (playerScoreValue<computerScoreValue) alert ('I win! :D');
				else alert ('We both win! :D');
			}
			location.reload ();
		}
	}, 500);
	
}
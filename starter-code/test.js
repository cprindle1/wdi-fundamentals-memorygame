console.log("JS file is connected to HTML! Woo!")
/* set card values*/
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var board = document.getElementById('game-board');

var createCards = function(){
	for (x = 0; x < cards.length; x++){
		var newCard = document.createElement('div');
		newCard.setAttribute('data-card', cards[x]);
		newCard.className='card';
		board.appendChild(newCard);
		newCard.addEventListener('click', isTwoCards);
	}
}
createCards();

var isTwoCards = function() {
	alert("two cards")
        cardsInPlay.push(this.getAttribute('data-card')); 
        if (this.getAttribute('data-card') === 'king') { 
            this.innerHTML = '<img src="king.png">'
        } else {
            this.innerHTML = '<img src="queen.png">'
        }
        
    if (cardsInPlay.length === 2) { 
        isMatch(cardsInPlay);
        cardsInPlay = [];
    } 
}

var isMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert ('You win')
    } else {
        alert ('Try again')
    }
}
/*if (cardTwo===cardFour) {
	alert("You found a match!");
}else{
	alert("Sorry, try again.")
}*/
console.log("JS file is connected to HTML! Woo!")
/* set card values*/
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createCards = function(){
	var board = document.getElementById('game-board');
	for (x = 0; x < cards.length; x++){
		var newCard = document.createElement('div');
		newCard.className="card";
		newCard.setAttribute('data-card', cards[x]);
		newCard.addEventListener('click', isTwoCards);
		board.appendChild(newCard);
	}
}


var isTwoCards = function() {
        cardsInPlay.push(this.getAttribute('data-card')); 
        if (this.getAttribute('data-card') === 'king') { 
            this.innerHTML = '<img src="king.png">';
        } else {
            this.innerHTML = '<img src="queen.png">';
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
createCards();

/*if (cardTwo===cardFour) {
	alert("You found a match!");
}else{
	alert("Sorry, try again.")
}*/
console.log('Lodash is loaded:', typeof _ !== 'undefined');
function newCardDeck() {
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < ranks.length; x++) {
      const card = {};
      card.suits = suits[i];
      card.rank = ranks[x];
      deck.push(card);
    }
  }
  var newDeck = _.shuffle(deck);
  return newDeck;
}

function dealCards(deck, cards) {
  var cardsDealt = [];
  for (let dealt = 0; dealt < cards; dealt++) {
    cardsDealt.push(deck.shift());
  }
  return cardsDealt;
}

function checkScore(hand) {
  var tempScore = 0;
  for (let cCount = 0; cCount < hand.length; cCount++) {
    if (hand[cCount].rank === 'ace') {
      tempScore += 11;
      continue;
    }
    if (hand[cCount].rank === 'jack' || hand[cCount].rank === 'queen' || hand[cCount].rank === 'king') {
      tempScore += 10;
    } else {
      tempScore += hand[cCount].rank;
    }
  }
  return tempScore;
}

function checkWin(finalArr, deck) {
  var orderedFinal = _.orderBy(finalArr, ['score'], ['desc']);
  while (orderedFinal.length >= 1) {
    var tieCount = 0;
    for (let t = 0; t < orderedFinal.length; t++) {
      if (orderedFinal[0].score === orderedFinal[t].score) {
        tieCount++;
      }
    }
    if (tieCount === 1) {
      var winner = orderedFinal[0].name;
      return winner;
    } else {
      orderedFinal.splice(tieCount);
      for (let i = 0; i < orderedFinal.length; i++) {
        orderedFinal[i].hand = orderedFinal[i].hand.concat(dealCards(deck, 1));
        orderedFinal[i].score = checkScore(orderedFinal[i].hand);
      }
      orderedFinal = _.orderBy(orderedFinal, ['score'], ['desc']);
    }
  }
}

function cardGame(numPlayers, numCards) {
  var shuffleDeck = newCardDeck();
  var players = [];
  for (let pc = 1; pc <= numPlayers; pc++) {
    const player = {};
    player.name = 'Player ' + pc;
    player.hand = [];
    player.score = 0;
    players.push(player);
  }
  for (let p = 0; p < players.length; p++) {
    players[p].hand = players[p].hand.concat(dealCards(shuffleDeck, numCards));
    players[p].score += checkScore(players[p].hand);
  }
  var winner = checkWin(players, shuffleDeck);
  console.log(players);
  console.log('final winner', winner);
  return console.log(winner + ' wins!');
}
console.log(cardGame(4, 2));

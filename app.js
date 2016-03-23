//the phrase bank, which contains phrases to be picked for the board
var phraseBankArray = ['THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG', 'THESE BOOTS ARE MADE FOR WALKING', 'TONIGHT WE DINE IN HELL']

//the wheel, which contains values that get multiplied by the amount of correct letters that appear on the board at the time of guessing
var wheelArray = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '750', '800', '850', '900', '950', '1000', '1050', '1100', '1150', '1200', '1250', '1300'];

//consonants array
var consonantsArray = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];

//vowels array
var vowelsArray = ['A','E','I','O','U'];

//global variables in use
var theBoard;
var theChosenPhrase;
var theWheelPick;
var startButton;
var spinTheWheelButton;
var letterInput = document.getElementById('letterInputField');
var phraseInput = document.getElementById('phraseInputField');
var vowelInput = document.getElementById('vowelInputField');
var playerChoice;
var guessLetterButton;
var guessPhraseButton;
var buyVowelButton;
var phraseLettersArray = [];
var guessedLettersArray = [];
var tileDivs;
var currentPlayerTurn = 'Player One';
var playerOne = {score:0};
var playerTwo = {score:0};
var playerThree = {score:0};

// default visibility
document.getElementById('spin').style.visibility = 'hidden';
document.getElementById('guessLetter').style.visibility = 'hidden';
document.getElementById('letterInputField').style.visibility = 'hidden';
document.getElementById('guessPhrase').style.visibility = 'hidden';
document.getElementById('phraseInputField').style.visibility = 'hidden';
document.getElementById('buyVowel').style.visibility = 'hidden';
document.getElementById('vowelInputField').style.visibility = 'hidden';

// function, make only wheel button visible
var showOnlyWheelButton = function () {
  document.getElementById('spin').style.visibility = 'visible';
  document.getElementById('guessLetter').style.visibility = 'hidden';
  document.getElementById('letterInputField').style.visibility = 'hidden';
  document.getElementById('guessPhrase').style.visibility = 'hidden';
  document.getElementById('phraseInputField').style.visibility = 'hidden';
  document.getElementById('buyVowel').style.visibility = 'hidden';
  document.getElementById('vowelInputField').style.visibility = 'hidden';
}

// function, starts a new game by picking a phrase and putting it on the board
var startingGame = function () {

  // function, picks a random phrase object for the board
  var randomPhrasePick = function () {
    theChosenPhrase = phraseBankArray[Math.floor(Math.random()*phraseBankArray.length)];
  }
  randomPhrasePick();

  // function, populates the board with the characters of theChosenPhrase
  var populateTheBoard = function () {
    theBoard = theChosenPhrase.split('');
    var boardDiv = document.getElementById('board');
    for (var i = 0; i < theBoard.length; i++) {
      var tileDiv = document.createElement('div');
      tileDiv.className = 'tile';
      boardDiv.appendChild(tileDiv);
      if (theBoard[i] == ' ') {
        tileDiv.textContent = '_';
      }
      else {
        tileDiv.textContent = ' ';
        tileDiv.id = theBoard[i];
      }
      phraseLettersArray.push(tileDiv.id);
    }
    tileDivs = document.getElementsByClassName('tile');
  }
  populateTheBoard();
  document.getElementById('start').style.visibility = 'hidden';
  document.getElementById('spin').style.visibility = 'visible';
}

// function, picks a random money object for player points
var randomWheelPick = function () {
  theWheelPick = wheelArray[Math.floor(Math.random()*wheelArray.length)];
  alert('The spinner stops on '+theWheelPick);
  document.getElementById('spin').style.visibility = 'hidden';
  document.getElementById('guessLetter').style.visibility = 'visible';
  document.getElementById('letterInputField').style.visibility = 'visible';
  document.getElementById('guessPhrase').style.visibility = 'visible';
  document.getElementById('phraseInputField').style.visibility = 'visible';
  document.getElementById('buyVowel').style.visibility = 'visible';
  document.getElementById('vowelInputField').style.visibility = 'visible';
  document.getElementById('wheelValue').textContent = 'Current Wheel Value: '+theWheelPick;
}

// function, changes current player turn to next player
var playerTurnSwitch = function () {
  if (currentPlayerTurn == 'Player One') {
    currentPlayerTurn = 'Player Two';
    document.getElementById('currentTurn').textContent = 'Current Turn: '+currentPlayerTurn;
    alert('current turn: Player Two');
  }
  else if (currentPlayerTurn == 'Player Two') {
    currentPlayerTurn = 'Player Three';
    document.getElementById('currentTurn').textContent = 'Current Turn: '+currentPlayerTurn;
    alert('current turn: Player Three');
  }
  else if (currentPlayerTurn == 'Player Three') {
    currentPlayerTurn = 'Player One';
    document.getElementById('currentTurn').textContent = 'Current Turn: '+currentPlayerTurn;
    alert('current turn: Player One');
  }
}

// function, adds to current player score
var addToPlayerScore = function () {
  if (currentPlayerTurn == 'Player One') {
    playerOne.score += parseFloat(theWheelPick);
  }
  else if (currentPlayerTurn == 'Player Two') {
    playerTwo.score += parseFloat(theWheelPick);
  }
  else if (currentPlayerTurn == 'Player Three') {
    playerThree.score += parseFloat(theWheelPick);
  }
}

// function, subtracts from current player score
var subtractFromPlayerScore = function () {
  if (currentPlayerTurn == 'Player One') {
    playerOne.score -= parseFloat(theWheelPick);
    if (playerOne.score < 0) {
      playerOne.score = 0;
    }
  }
  else if (currentPlayerTurn == 'Player Two') {
    playerTwo.score -= parseFloat(theWheelPick);
    if (playerTwo.score < 0) {
      playerTwo.score = 0;
    }
  }
  else if (currentPlayerTurn == 'Player Three') {
    playerThree.score -= parseFloat(theWheelPick);
    if (playerThree.score < 0) {
      playerThree.score = 0;
    }
  }
}

// function, checks if a consonant a player has chosen is on the board or not
var playerChoice = function () {
  var checkForMatch = function(element, index, array) {
    return element == letterInput.value.toUpperCase();
  }
  if (consonantsArray.some(checkForMatch) == false) {
    alert('Please pick a consonant');
  }
  else if (guessedLettersArray.some(checkForMatch) == true) {
    alert('Sorry, that is already on the board');
    playerTurnSwitch();
    showOnlyWheelButton();
  }
  else if (phraseLettersArray.some(checkForMatch) == false) {
    alert('Sorry, that is not on the board');
    playerTurnSwitch();
    showOnlyWheelButton();
  }
  else {
    document.getElementById('spin').style.visibility = 'visible';
    for (var i = 0; i < tileDivs.length; i++) {
      if (letterInput.value.toUpperCase() == tileDivs[i].id) {
        tileDivs[i].textContent = tileDivs[i].id;
        guessedLettersArray.push(tileDivs[i].id);
        addToPlayerScore();
      }
    }
    document.getElementById('player1score').textContent = 'Player One Score: '+playerOne.score;
    document.getElementById('player2score').textContent = 'Player Two Score: '+playerTwo.score;
    document.getElementById('player3score').textContent = 'Player Three Score: '+playerThree.score;
  }
}

// function, checks if a vowel a player has chosen is on the board or not
var playerBuy = function () {
  var checkForMatch = function(element, index, array) {
    return element == vowelInput.value.toUpperCase();
  }
  if (vowelsArray.some(checkForMatch) == false) {
    alert('Please pick a vowel');
  }
  else if (guessedLettersArray.some(checkForMatch) == true) {
    alert('Sorry, that is already on the board');
    playerTurnSwitch();
    showOnlyWheelButton();
  }
  else if (phraseLettersArray.some(checkForMatch) == false) {
    alert('Sorry, that is not on the board');
    playerTurnSwitch();
    showOnlyWheelButton();
  }
  else {
    subtractFromPlayerScore();
    document.getElementById('spin').style.visibility = 'visible';
    for (var i = 0; i < tileDivs.length; i++) {
      if (vowelInput.value.toUpperCase() == tileDivs[i].id) {
        tileDivs[i].textContent = tileDivs[i].id;
        guessedLettersArray.push(tileDivs[i].id);
      }
    }
    document.getElementById('player1score').textContent = 'Player One Score: '+playerOne.score;
    document.getElementById('player2score').textContent = 'Player Two Score: '+playerTwo.score;
    document.getElementById('player3score').textContent = 'Player Three Score: '+playerThree.score;
  }
}

// function, checks if a phrase a player has guessed is on the board or not
var solveThePuzzle = function () {
  var tileDivs = document.getElementsByClassName('tile');
  if (phraseInput.value.toUpperCase() == theChosenPhrase) {
    alert('Congratulations, '+currentPlayerTurn+' wins');
    for (var i = 0; i < tileDivs.length; i++) {
      tileDivs[i].textContent = tileDivs[i].id;
    }
  }
  else if (phraseInput.value.toUpperCase() != theChosenPhrase) {
    alert('Sorry, guess again');
    playerTurnSwitch();
    showOnlyWheelButton();
  }
}

// function, to display current turn and scores
document.getElementById('currentTurn').textContent = 'Current Turn: '+currentPlayerTurn;
document.getElementById('wheelValue').textContent = 'Current Wheel Value: 0';
document.getElementById('player1score').textContent = 'Player One Score: '+playerOne.score;
document.getElementById('player2score').textContent = 'Player Two Score: '+playerTwo.score;
document.getElementById('player3score').textContent = 'Player Three Score: '+playerThree.score;

// button, starts the game
startButton = document.getElementById('start').addEventListener('click', startingGame);

// button, checks the letter input field for a letter and then executes a function that checks the divs created from the start of the game for an id match
guessLetterButton = document.getElementById('guessLetter').addEventListener('click', playerChoice);

// button, checks the phrase input field for a phrase and then executes a function that checks the phrase formed by the div id's which were created from the start of the game
guessPhraseButton = document.getElementById('guessPhrase').addEventListener('click', solveThePuzzle);

// button, checks the buy a vowel input field for a vowel and then executes a function that checks the divs created from the start of the game for an id match
buyVowelButton = document.getElementById('buyVowel').addEventListener('click', playerBuy);

// button, returns a randomly chosen object from wheelArray
spinTheWheelButton = document.getElementById('spin').addEventListener('click', randomWheelPick);








// .

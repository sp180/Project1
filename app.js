//the phrase bank, which contains phrases to be picked for the board
var phraseBankArray = ['THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG', 'THESE BOOTS ARE MADE FOR WALKING', 'TONIGHT WE DINE IN HELL']

//the wheel, which contains values that get multiplied by the amount of correct letters that appear on the board at the time of guessing
var wheelArray = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '750', '800', '850', '900', '950', '1000', '1050', '1100', '1150', '1200', '1250', '1300'];

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
var test = function () {console.log('this button is working')};
var phraseLettersArray = [];
var guessedLettersArray = [];
var tileDivs;

//global variables being worked on

//global variables to be used
var playerOneTurn;
var playerTwoTurn;
var playerOneScore = [];
var playerTwoScore = [];


//function, starts a new game by picking a phrase and putting it on the board
var startingGame = function () {

  //function, picks a random phrase object for the board
  var randomPhrasePick = function () {
    theChosenPhrase = phraseBankArray[Math.floor(Math.random()*phraseBankArray.length)];
  }
  randomPhrasePick();

  //function, populates the board with the characters of theChosenPhrase
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
}

var playerTurn = function () {

}








//function, checks if a consonant a player has chosen is on the board or not
var playerChoice = function () {
  var checkForMatch = function(element, index, array) {
    return element == letterInput.value;
  }
  if (guessedLettersArray.some(checkForMatch) == true) {
    console.log('Sorry, that is already on the board');
  }
  else if (phraseLettersArray.some(checkForMatch) == false) {
    console.log('Sorry, that is not on the board');
  }
  else {
    for (var i = 0; i < tileDivs.length; i++) {
      if (letterInput.value == tileDivs[i].id) {
        tileDivs[i].textContent = tileDivs[i].id;
        guessedLettersArray.push(tileDivs[i].id);
      }
    }
  }
}

//function, checks if a vowel a player has chosen is on the board or not
var playerBuy = function () {
  var checkForMatch = function(element, index, array) {
    return element == vowelInput.value;
  }
  if (guessedLettersArray.some(checkForMatch) == true) {
    console.log('Sorry, that is already on the board');
  }
  else if (phraseLettersArray.some(checkForMatch) == false) {
    console.log('Sorry, that is not on the board');
  }
  else {
    for (var i = 0; i < tileDivs.length; i++) {
      if (vowelInput.value == tileDivs[i].id) {
        tileDivs[i].textContent = tileDivs[i].id;
        guessedLettersArray.push(tileDivs[i].id);
      }
    }
  }
}

//function, checks if a phrase a player has guessed is on the board or not
var solveThePuzzle = function () {
  var tileDivs = document.getElementsByClassName('tile');
  if (phraseInput.value == theChosenPhrase) {
    console.log('Congratulations, you win');
    for (var i = 0; i < tileDivs.length; i++) {
      tileDivs[i].textContent = tileDivs[i].id;
    }
  }
  else if (phraseInput.value != theChosenPhrase) {
    console.log('Sorry, guess again');
  }
}

//function, picks a random money object for player points
var randomWheelPick = function () {
  theWheelPick = wheelArray[Math.floor(Math.random()*wheelArray.length)];
  console.log(theWheelPick);
}


//button, starts the game
startButton = document.getElementById('start').addEventListener('click', startingGame);

//button, checks the letter input field for a letter and then executes a function that checks the divs created from the start of the game for an id match
guessLetterButton = document.getElementById('guessLetter').addEventListener('click', playerChoice);

//button, checks the phrase input field for a phrase and then executes a function that checks the phrase formed by the div id's which were created from the start of the game
guessPhraseButton = document.getElementById('guessPhrase').addEventListener('click', solveThePuzzle);

//button, checks the buy a vowel input field for a vowel and then executes a function that checks the divs created from the start of the game for an id match
buyVowelButton = document.getElementById('buyVowel').addEventListener('click', playerBuy);

//button, returns a randomly chosen object from wheelArray
spinTheWheelButton = document.getElementById('spin').addEventListener('click', randomWheelPick);








//.

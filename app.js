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
var test = function () {console.log('this button is working')};

//global variables being worked on
var playerChoice;
var guessLetterButton;
var guessPhraseButton;
var buyVowelButton;

//global variables to be used
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
        tileDiv.innerHTML = '_';
      }
      else {
        tileDiv.innerHTML = ' ';
        tileDiv.id = theBoard[i];
      }
    }
  }
  populateTheBoard();
}




var playerChoice = function () {
  var tileDivs = document.getElementsByClassName('tile');
  for (var i = 0; i < tileDivs.length; i++) {
    if (letterInput.value == tileDivs[i].id) {
      tileDivs[i].innerHTML = tileDivs[i].id;
    }
    else if (letterInput.value == tileDivs[i].innerHTML) {
      console.log('Sorry, that is already on the board');
    }
    else if (letterInput.value != tileDivs[i].id) {
      console.log('Sorry, that is not on the board');
    }
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
guessPhraseButton = document.getElementById('guessPhrase').addEventListener('click', test);

//button, checks the buy a vowel input field for a vowel and then executes a function that checks the divs created from the start of the game for an id match
buyVowelButton = document.getElementById('buyVowel').addEventListener('click', test);

//button, returns a randomly chosen object from wheelArray
spinTheWheelButton = document.getElementById('spin').addEventListener('click', randomWheelPick);








//.

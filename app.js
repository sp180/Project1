//the phrase bank, which contains phrases to be picked for the board
var phraseBankArray = ['THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG', 'THESE BOOTS ARE MADE FOR WALKING', 'TONIGHT WE DINE IN HELL']

//the wheel, which contains values that get multiplied by the amount of correct letters that appear on the board at the time of guessing
var wheelArray = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '750', '800', '850', '900', '950', '1000', '1050', '1100', '1150', '1200', '1250', '1300'];

//global variables
var theBoard;
var theChosenPhrase;
var theWheelPick;
var startButton;
var spinTheWheelButton;
var playerOneScore = [];
var playerTwoScore = [];
var test = function () {console.log('this button is working')};

//function, picks a random money object for player points
var randomWheelPick = function () {
  theWheelPick = wheelArray[Math.floor(Math.random()*wheelArray.length)];
  console.log(theWheelPick);
}

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
        tileDiv.innerHTML = theBoard[i];
        tileDiv.id = theBoard[i];
      }
    }
  }
  populateTheBoard();
}

//button, starts the game
startButton = document.getElementById('start').addEventListener('click', startingGame);

//button, returns a randomly chosen object from wheelArray
spinTheWheelButton = document.getElementById('spin').addEventListener('click', randomWheelPick);








//.

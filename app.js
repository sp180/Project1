//the phrase bank, which contains phrases to be picked for the board
var phraseBankArray = ['THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG', 'THESE BOOTS ARE MADE FOR WALKING']

//the wheel, which contains values that get multiplied by the amount of correct letters that appear on the board at the time of guessing
var wheelArray = ['100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '750', '800', '850', '900', '950', '1000', '1050', '1100', '1150', '1200', '1250', '1300'];

//global variables
var theBoard = [];
var playerOneScore = [];
var playerTwoScore = [];

//a random money object for player points
var randomWheelPick = wheelArray[Math.floor(Math.random()*wheelArray.length)];

//a random phrase object for the board
var randomPhrasePick = phraseBankArray[Math.floor(Math.random()*phraseBankArray.length)];

//function, populates the board with the characters of the randomly chosen phrase
var populateTheBoard = function () {
  var splitUp = randomPhrasePick.split('');
  console.log(theBoard.concat(splitUp));
}

Wheel of Fortune

The core game is based on Hangman.

Each round has a category and a blank word puzzle, with each blank representing a letter in the answer.

A roulette-style wheel with 24 spaces, most of which are labeled with dollar amounts ranging from $500 to $900, plus a top dollar value: $2,500 in Round 1, $3,500 in Rounds 2 and 3, and $5,000 for Round 4 and any subsequent rounds. The wheel also features two Bankrupt wedges and one Lose a Turn, both of which forfeit the contestant's turn, with the former also eliminating any cash or prizes the contestant has accumulated within the round.

Each game features three contestants; each contestant is positioned behind a single scoreboard with its own flipper. The left scoreboard from the viewer's perspective is colored red, the center yellow, and the right blue.

A contestant spins the wheel to determine a dollar value and guess a consonant. Calling a correct letter earns the value before the corresponding flipper, multiplied by the number of times that the letter appears in the puzzle. A contestant with at least $250 may buy a vowel for a flat rate of that amount, until all the vowels in the puzzle have been revealed.

Calling a correct letter keeps the wheel in the contestant's control. Control passes to the next contestant clockwise from the viewer's perspective if the wheel lands on Lose a Turn or Bankrupt, or if the contestant calls a letter that is not in the puzzle, calls a letter that has already been called in that round, fails to call a letter within five seconds of the wheel stopping, or gives an incorrect answer.

The total winnings of the three contestants are compared; the contestant with the highest total winnings wins the game. If two or all three contestants are tied for first place at the end of the round, an additional toss-up puzzle is played between the tied contestants. The contestant who solves the toss-up puzzle wins the game



Bonus round

The winner advances to the bonus round. In the bonus round, the winning contestant is given a category, and a puzzle for which every instance of R, S, T, L, N, and E is revealed; after providing three more consonants and a vowel, the contestant has ten seconds to attempt solving the puzzle.



Visual:

board with tiles

Wheel with 24 spaces (challenge: functional wheel that affects game)

player scoreboards



Notes:

Order of events
 - start game
 - choose a phrase
 - put chosen phrase on the board
 - have players guess the letters
 - players guess letters until phrase is displayed
 - player with highest score at end of round wins
 - restart game

X - create a start game button to initiate the game. the game is initiated by a random phrase being chosen from the phrase bank and put into the board.

X - create a button that allows a player to 'spin the wheel'

X - create a phrase bank from which to gather phrases to put on the board

X - pick a phrase at random from the phrase bank

X - put the phrase on the board in such a way that the individual letters are:
- X - separated,
- X - in order,
- X - show spaces,
- X - hidden,
- X - can be unhidden if a player correctly guesses a letter & remains unhidden

X - create an input field where the players can guess a letter
X - create an input field where the players can guess a the phrase
X - create an input field where the players can buy a value


X - create a button for each input field

X - change the position of the randomWheelPick function to below the startingGame function

X - connect the guess letter button to an input field so that when a letter is typed into the field, a function is triggered to check if the letter that is typed into the input can be found among the div id's generated at the start of the game


XX - create a function that allows a player to guess a letter in the phrase.
- XX - if the player guesses correctly
  - XX - replace the space in the div with the guessed letter based on the id attribute
  - XX - depending on how many letters are found of the correct guess, multiply that by the current wheelPick amount
- XX - if the player guesses incorrectly
  - XX - it is the next player's turn

XX - connect the current wheelPick to the player's guess. Consider using a function


XX - What's left:
XX - keep track of player turn
XX - Keep track of player scores
XX - attach random wheel value to player guesses
XX - have guesses affect player score

Things left that can be added:
XX - display the current player turn
XX - display player scores
XX - limit what can be entered into the letter fields
- XX - consonants only in the consonants input
- XX - vowels only in the vowels input








.

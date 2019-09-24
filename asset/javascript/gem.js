// Define an OBJECT and a SETTER function  
​// Create a Gem object constructor ES5 style

function newGem(color, value) {
    this.color = color;
    this.value = value;
​
    this.setValue = function(val) {
        this.value = val;
    }
}
​
// Create a Function Expression
var anotherGem = function(color, value) {
    this.color = color;
    this.value = value;
​
    this.setValue = function(val) {
        this.value = val;
        return console.log(`value is now ${this.value}`);
    }
}
​
function createGemValue() {
    // returns a random number between 1 and 10
    return Math.floor((Math.random() * 12));
}

function createRandomValue(){
    var randomPart = Math.floor(Math.random() * 101 + 1);
    var numberToGuess = randomPart + 19;
    return numberToGuess;
}
​
// *** TESTING *** //
let purple = new newGem('purple', createGemValue());
let green = new newGem('green', createGemValue());
let blue = new newGem('blue', createGemValue());
let red = new newGem('red',createGemValue());


// <script>    
//     // Area to be used for displaying statistics about the game
//     var winsArea = document.getElementById("wins");
//     var lossesArea = document.getElementById("losses");

//     var playAgain = false;
//     var play = false;

//     var points = 0;
//     var guessesRemaining = 5;

//     var loss = 0;
//     var wins = 0;
    
//     // Area to be used for displaying statistics about the game
//     var winsArea = document.getElementById("wins");
//     var lossesArea = document.getElementById("losses");
//     var guessesRemainingArea = document.getElementById("guessesRemaining");
//     var lettersGuessedArea = document.getElementById("lettersGuessed");

//     function generateNumber() {
//         var wordTemp = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
//         return wordTemp;
//     }

//     function playGame(){
//         // Method to draw new blanks corresponding to the randomly selected word.
//         // In this method we are also randomly selecting the word
//         lightUpBlank();

//         // Draws the text on screen corresponding to the stats of the game.
//         // Also resets the guesses to 5 and points to 0
//         // Redraws the letters guessed to none
//         initializeText();

//      document.onkeyup = function(event) {
//             // Retrieves the previous key the user has typed
//             var userInput = event.key.toLowerCase();
//             // Checks if the key is valid
//             if(isValidInput(userInput)){
//                 //Checks if the user key is in the word
//                 checkLetterInWord(userInput);
//             } else {
//                 // If not a valid input scream at the user
//                 alert("This is not a valid input : " + userInput);
//             }

//             if(points == word.length){
//                 var playAgain = confirm("You Win ! Do you want to play again ?");
//                 wins++;
//             } else if (guessesRemaining <= 0) {
//                 var playAgain = confirm("You Loss ! Do you want to play again ?");
//                 loss++;
//             }

//              // The playAgain method call's itself if the user wants to play again
//             if(playAgain == true){
//                 playGame();
//             }
//         }

//     }

//     function initializeText(){
//         var guessesRemainingDisplay = document.getElementById("guessesRemaining");
//         guessesRemainingDisplay.textContent = "GUESSES REMAINING : 5";
//         guessesRemaining = 5;

//         var lettersGuessedDisplay = document.getElementById("lettersGuessed");
//         lettersGuessedDisplay.textContent = "LETTERS GUESSED : ";
//         previousWords = [];

//         var winsDisplay = document.getElementById("wins");
//         winsDisplay.textContent = "WINS : " + wins;

//         var lossDisplay = document.getElementById("loss");
//         lossDisplay.textContent = "LOSS : " + loss;

//         points = 0;
//         previousGuesses = [];

//     }

//     function initializeGems(){

//     }

//     function checkLetterInWord(s) {
//         // add letter to the array of guesses if it is not already there
//         if(!previousGuesses.includes(s)){
//             previousGuesses.push(s);
//             lettersGuessedArea.textContent = previousGuesses.toString();

//             for(var i = 0; i < word.length; i++){
//             if(s == word[i]){
//             // Display blank i with the current letter s
//                 var text = document.getElementById("B" + i);
//                 text.textContent = s;

//             // Update hasHit boolean
//                 hasHit = true;
//                 points++;                
//                 }
//             }

//             if(!hasHit){
//                 guessesRemaining--;
//                 var guessesRemainingDisplay = document.getElementById("guessesRemaining")
//                 guessesRemainingDisplay.textContent = "GUESSES REMAINING : " + guessesRemaining;
//             }

//             //Reset has hit to false
//             hasHit = false;
//             console.log(points);
            
//         // Add key guess to the string
//         lettersGuessed.textContent = "LETTERS GUESSED : " + previousGuesses.toString();
//         } else{
//             alert("This letter has already been used : " + s);
//         }
//     }

//     function isValidInput(s){
//         return alphabet.includes(s);
//     }
    
//     var play = confirm("Do you want to play a game ?");
//     console.log(play);
    
//     if(play == true){
//         playGame();
//     }

// </script>

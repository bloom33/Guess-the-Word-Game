//The unordered list where the player’s guessed letters will appear//
const guessLetters = document.querySelector(".guessed-letters");
//The button with the text “Guess!” in it//
const button = document.querySelector(".guess");
//The text input where the player will guess a letter//
const inputLetter = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear//
const wordProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display//
const remainGuess = document.querySelector(".remaining");
//The span inside the paragraph where the remaining guesses will display//
const remainGuessText = document.querySelector("span");
//The empty paragraph where messages will appear when the player guesses a letter//
const guessMessage = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again//
const playAgain = document.querySelector(".play-again"); 
//Starter word to test the app before fetching API data//
const word = "magnolia";


//Display circle symbol as a placeholder for letters while user guesses//
const placeholder = function(word) {
    const lettersGuessed = [];
    for (const letter of word) {
        console.log(letter)
        lettersGuessed.push("●")
    }
    wordProgress.innnerText = lettersGuessed.join("");
};

placeholder(word);

//Event listener for when user presses the button// 
button.addEventListener("click", fucntion (e) {
    e.preventDefault(); 
    const userGuess = inputLetter.value;
    console.log(userGuess);
    inputLetter.value = "";
});
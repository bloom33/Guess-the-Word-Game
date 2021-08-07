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
//The unordered list where the player’s guessed letters will appear//
const word = "magnolia";


//Display circle symbol as a placeholder for letters while user guesses//
const placeholder = function (word) {
    const lettersGuessed = [];
    for (const letter of word) {
        console.log(letter);
        lettersGuessed.push("●");
    }

    wordProgress.innnerText = lettersGuessed.join("");
};

placeholder(word);

//Event listener for when user presses the button// 
button.addEventListener("click", function (e) {
    e.preventDefault(); //prevents page from refreshing everytime guess button is clicked//
    const userGuess = inputLetter.value; //grab what was entered in the input//
    console.log(userGuess);
    inputLetter.value = "";

    guessMessage.innnerText = ""; //empty message paragraph//
    
});

//day 2// 

//function which validates the user's input//
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; //the regular expression which ensures player puts in a letter//

    //input empty?//
    if (input.length === 0) {
        guessMessage.innnerText = "Enter a letter!" ;

    //user inputs more than one letter?//  
    } else if (input.length > 1) {
        guessMessage.innnerText = "Enter one letter please." ;

    //input contains special character, number, or some other entry that's not a letter?//  
    } else if (!input.match(acceptedLetter)) {
        guessMessage.innnerText = "Try again! Enter a letter from A to Z, please.";

    } else {
        return input;
    };

    
}

console.log(inputLetter);
const guessLettersElement = document.querySelector(".guessed-letters");
//The button with the text “Guess!” in it//
const button = document.querySelector(".guess");
//The text input where the player will guess a letter//
const inputLetter = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear//
const wordProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display//
const remainGuess = document.querySelector(".remaining");
//The span inside the paragraph where the remaining guesses will display//
const remainGuessText = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter//
const guessMessage = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again//
const playAgain = document.querySelector(".play-again"); 
//The unordered list where the player’s guessed letters will appear//

//Starter word to test the app before fetching API data//
const word = "magnolia";
//Will contain all the letters the player guesses//
const guessedLetters = [];

//Display circle symbol as a placeholder for letters while user guesses//
const placeholder = function (word) {
    const lettersGuessed = [];
    for (const letter of word) {
        console.log(letter);
        lettersGuessed.push("●");
    }

    wordProgress.innerText = lettersGuessed.join("");
};

placeholder(word);

//Event listener for when user presses the button// 
button.addEventListener("click", function (e) {
    e.preventDefault(); //prevents page from refreshing everytime guess button is clicked//
    guessMessage.innerText = ""; //empty message paragraph//

    const guess = inputLetter.value; //grab what was entered in the input//
    const goodGuess = validateInput(guess); // makes sure it's a single letter entered//

    if (goodGuess) {
        //user input a letter, thus let's guess..//
        makeGuess(guess);
    };

    inputLetter.value = "";

   // const guess = validateInput(inputLetter);
    console.log(guess);

    
});

//day 2// 

//function which validates the user's input//
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; //the regular expression which ensures player puts in a letter//

    //input empty?//
    if (input.length === 0) {
        guessMessage.innerText = "Enter a letter." ;

    //user inputs more than one letter?//  
    } else if (input.length > 1) {
        //guessMessage.innerText = "You won't pull one over on me. You guessed that already." ;
        guessMessage.innerText = "Try again. You guessed that already." ;

    //input contains special character, number, or some other entry that's not a letter?//  
    } else if (!input.match(acceptedLetter)) {
        //guessMessage.innerText = "Ok... we both know that wasn't a letter. So please, keep it from A to Z?";
        guessMessage.innerText = "Please enter a letter from A to Z.";

    //input conatins a single letter. #Yay!//
    } else {
        return input;
    };

    
}

//console.log(inputLetter);

///////////////// continuing on, while waiting on feedback about lines 44 and 64 above ////////////

const  makeGuess = function (guess) {
    guess = guess.toUppercase; 
    if (guessedLetters.includes(guess)) {
        guessMessage.innerText = "Ok... we both know that wasn't a letter. So please, keep it from A to Z?";

    } else { 
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};
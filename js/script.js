//part 1//

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
let word = "magnolia";
//Will contain all the letters the player guesses//, //part 2//
const guessedLetters = [];
//Maximum amount of guesses user is allowed// , //part 4//
let remainingGuesses = 8;


//Async function which fetches random words from API//
const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n"); //Delimiter used to create array, so extra spacing around words is eliminated//
    console.log(words);
    console.log(wordArray);
    const randomIndex = Math.floor(Math.random() * wordArray.length); //makes sure program pulls random word from API file//
    word = wordArray[randomIndex].trim(); //pulls random word and trims/eliminates white space around word//

    placeholder(word);
};

getWord()

//Display circle symbol as a placeholder for letters while user guesses//
const placeholder = function (word) {
    const lettersGuessed = [];
    for (const letter of word) {
        console.log(letter);
        lettersGuessed.push("●");
    }

    wordProgress.innerText = lettersGuessed.join("");
};


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

//part 2// 

//function which validates the user's input//
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; //the regular expression which ensures player puts in a letter//

    //input empty?//
    if (input.length === 0) {
        guessMessage.innerText = "Enter a letter." ;

    //user inputs more than one letter?//  
    } else if (input.length > 1) {
        guessMessage.innerText = "Please enter one letter." ;

    //input contains special character, number, or some other entry that's not a letter?//  
    } else if (!input.match(acceptedLetter)) {
        guessMessage.innerText = "Ok... we both know that wasn't a letter. So please, keep it from A to Z?";
        

    //input conatins a single letter. #Yay!//
    } else {
        return input;
    };

    
}

//console.log(inputLetter);


const  makeGuess = function (guess) {
    guess = guess.toUpperCase(); 
    if (guessedLetters.includes(guess)) {
       guessMessage.innerText = "Try again. You guessed that already." ;
       
    } else { 
        guessedLetters.push(guess);
        console.log(guessedLetters);
        countGuessesRemaining(guess);
        showGuessedLetters();
        updateWordProgress(guessedLetters);
    }
};

//part 3//

//function that will show letters guessed on the screen//
const showGuessedLetters = function() {
    guessLettersElement.innerHTML = ""; //clears list//
    
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessLettersElement.append(li);

    }
};

//function which will replaced placeholders with correctly guessed letters//
const updateWordProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase(); //changes 'word' to uppercase//
    const wordArray = wordUpper.split(""); //splits 'word' string to an array so it appears in guessedLetters array//
    
    const revealWord = []; //new array with updated letters//
    //check if 'wordArray' contains letters from 'guessedLetters' array, if so, update placeholders with correct letter//
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());

        } else {
            revealWord.push("●");

        }
    }
    
    //console.log(revealWord);
    wordProgress.innerText = revealWord.join(""); // ? //

    userWins();
};

//part 4//
const countGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();

    if (!upperWord.includes(guess)) {
        //bad guess, = -1 //
        guessMessage.innerText = `Sorry there's no ${guess} in this word.`;
        remainingGuesses -= 1;

    } else {
        //good guess//
        guessMessage.innerText = `Yes! The word has the letter ${guess}!`;
    };

    if (remainingGuesses === 0) {
        guessMessage.innerHTML = `Game Over. The word was, <span class="highlight">${word.toUpperCase()}</span>.`;

    } else if (remainingGuesses === 1) {
        guessMessage.innerText = `${remainingGuesses} guess`;

    } else {
        guessMessage.innerText = `${remainingGuesses} guesses`;
    }

};


//((part 3))//
//function to check if user guessed word and won game//
const userWins = function () {
    if (word.toUpperCase() === wordProgress.innerText) {
        guessMessage.classList.add("win");
        guessMessage.innerHTML =  `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};


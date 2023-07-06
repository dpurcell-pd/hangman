class Hangman { 

    static guess;
    static answer;
    static wordLength;

    static introSection = document.querySelector("#intro-section");
    static introText = document.createElement("p");
    
    static spacesSection = document.querySelector("#spaces-section");
    static spaces = document.createElement("p");
    
    static gameTextSection = document.querySelector("#game-text-section");
    static gameText = document.createElement("p");    

    static randomNumber(arrayLength) {
        const index = arrayLength - 1;
        return Math.floor(Math.random() * index);
    }

    static submitGuess() {           
        const GUESS_INPUT = document.getElementById("guess");
        Hangman.guess = GUESS_INPUT.value;
        console.log(`Current guess: ${Hangman.guess}`);
        GUESS_INPUT.value = "";  
        NewRound.play(Hangman.answer, Hangman.wordLength);  
    }

    static intro() {
        const WORD_ARRAY = [
            "apples", "peaches", "pears", "grapes", "oranges", 
            "nectarines", "plums", "dragonfruit", "coconut", "kiwi"
        ];
        const ARRAY_LENGTH = WORD_ARRAY.length;
        Hangman.answer = WORD_ARRAY[Hangman.randomNumber(ARRAY_LENGTH)];
        Hangman.wordLength = Hangman.answer.length;      
        console.log(Hangman.answer);        
        const NAME = prompt("Hello, what is your name?");        
       
        Hangman.introText.innerHTML = 
        `A pleasure to make your acquaintance, ${NAME}.
        I understand you're here to try your hand at my game.
        <br><br>
        
        Allow me to set the stage...
        <br><br>`;
        
        setTimeout(() => {
            const GAME_SECTION = document.getElementById("game-section");
            GAME_SECTION.innerHTML = `
                <form id="form">
                    <label for="guess"> Guess:
                        <input placeholder="Enter Your Guess" type="text" id="guess" name="guess">
                    </label>
                    <br><br>
                    <button type="button" id="submit-btn">Submit Guess</button>
                </form>
            `
            for (let i = 0; i < Hangman.wordLength; i++) {
                Hangman.spaces.innerHTML += "_ ";
            }        
            Hangman.spacesSection.appendChild(Hangman.spaces);

            Hangman.introText.innerHTML += 
            `You see before you spaces representing the word you must guess.
            <br><br>
            
            As I'm sure you've also noticed, you will have a limited number of changes 
            to guess the word in full.`;

            const SUBMIT_BUTTON = document.getElementById("submit-btn");
            SUBMIT_BUTTON.addEventListener("click", Hangman.submitGuess);
        }, 4000);
        
        Hangman.introSection.appendChild(Hangman.introText);        
        
    }
}

class NewRound {    
    static play(word, wordLength) {
        const GUESS = Hangman.guess;
        const ANSWER = word;
       if (String(ANSWER).includes(GUESS)) {
        console.log("Matching letter found!");
       }
    }    
}

const GAME_BUTTON = document.getElementById("game-btn");
GAME_BUTTON.addEventListener("click", Hangman.intro);






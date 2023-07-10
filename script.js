class Hangman { 

    static guessGlobal;
    static answerGlobal;
    static wordLengthGlobal;
    static spacesArrayGlobal;
    static counterGlobal = 7;
    static newGame;

    static introSection = document.getElementById("intro-section");
    static introText = document.createElement("p");

    static rulesSection = document.getElementById("rules-section");
    static rulesText = document.createElement("p");
    
    static spacesSection = document.getElementById("spaces-section");
    static remainingGuesses = document.createElement("p");
    static wrongAnswer = document.createElement("p");
    static spaces = document.createElement("p");
 
    static randomNumber(arrayLength) {
        const index = arrayLength - 1;
        return Math.floor(Math.random() * index);
    }

    static submitGuess() {               
        const GUESS_INPUT = document.getElementById("guess");
        Hangman.guessGlobal = GUESS_INPUT.value;    
        GUESS_INPUT.value = "";  
        NewRound.play();  
    }

    static intro() {
        Hangman.newGame = true;       
        Hangman.rulesText.innerHTML = ``;
        Hangman.spaces.innerHTML = '';
        Hangman.remainingGuesses.innerHTML = '';
        Hangman.counterGlobal = 7;

        const WORD_ARRAY = [
            "apples", "peaches", "pears", "grapes", "oranges", 
            "nectarines", "plums", "dragonfruit", "coconut", "kiwi"
        ];

        const ARRAY_LENGTH = WORD_ARRAY.length;
        Hangman.answerGlobal = WORD_ARRAY[Hangman.randomNumber(ARRAY_LENGTH)];
        const ANSWER = Hangman.answerGlobal;
        Hangman.wordLengthGlobal = ANSWER.length;      
        const WORD_LENGTH = Hangman.wordLengthGlobal;
        
        console.log(ANSWER);        
        let name = prompt("Hello, what is your name?");
        
        if (name === null || name === "") {
            name = "New Player";
        };
       
        Hangman.introText.innerHTML = 
        `A pleasure to make your acquaintance, ${name}.
        I understand you're here to try your hand at my game.
        <br><br>
        
        Allow me to set the stage...
        <br>
        `;
        Hangman.introSection.appendChild(Hangman.introText);
        
        setTimeout(() => {
            for (let i = 0; i < WORD_LENGTH; i++) {
                Hangman.spaces.innerHTML += "_ ";
            }
            Hangman.spacesArrayGlobal = Hangman.spaces.innerHTML.split(" ");
            Hangman.spacesArrayGlobal.pop();            
            Hangman.spacesSection.appendChild(Hangman.spaces);
            
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
            Hangman.remainingGuesses.innerHTML = `
                Remaining chances: ${Hangman.counterGlobal}
                <br>`            
            
            Hangman.rulesText.innerHTML += 
                `                
                You see before you spaces representing the word you must guess.
                <br><br>
            
                As I'm sure you've also noticed, you will have a limited number of chances 
                to guess the word in full.
                <br><br>`;

            const SUBMIT_BUTTON = document.getElementById("submit-btn");
            SUBMIT_BUTTON.addEventListener("click", Hangman.submitGuess);
        }, 4000);

        Hangman.rulesSection.appendChild(Hangman.remainingGuesses);
        Hangman.rulesSection.appendChild(Hangman.rulesText);        
        
    }
}

class NewRound {   
    static play() {
        Hangman.newGame = false;        
        Hangman.wrongAnswer.innerHTML = ``;
        Hangman.counterGlobal--;
        if (!Hangman.newGame) {
            Hangman.remainingGuesses.innerHTML = `Remaining chances: ${Hangman.counterGlobal}`;
        }        
        const ANSWER = Hangman.answerGlobal.toLowerCase();
        const ANSWER_ARRAY = ANSWER.split("");
        const WORD_LENGTH = Hangman.wordLengthGlobal;
        const GUESS = Hangman.guessGlobal.toLowerCase();        

        if (GUESS.length > 1 && GUESS !== ANSWER && Hangman.counterGlobal > 0 && !Hangman.newGame) {
            Hangman.rulesText.innerHTML = `
            Ambitious attempt, but not quite...
            `;
        } else if (GUESS === ANSWER && Hangman.counterGlobal >= 0 && !Hangman.newGame) {            
            Hangman.spaces.innerHTML = GUESS;
            Hangman.remainingGuesses.innerHTML = '';
            Hangman.rulesText.innerHTML = `
            Congratulations! You have guessed the word in ${7 - Hangman.counterGlobal} guess(es).
        `;
        } else if (Hangman.counterGlobal < 1 && !Hangman.newGame) {                
                Hangman.rulesText.innerHTML = `
                Sorry, you weren't able to guess my word this time.
                <br><br>

                Feel free to start a new game.`;
                Hangman.remainingGuesses.innerHTML = ``;        
        } else if ((ANSWER.includes(GUESS) 
                && Hangman.spaces.innerHTML.includes(GUESS))
                && !Hangman.newGame 
                || Hangman.guessGlobal === "" && !Hangman.newGame) {                    
                    Hangman.wrongAnswer.innerHTML = `
                    Careful! Be sure to use your guesses wisely...
                    <br><br>                    
                    `;
       } else if (ANSWER.includes(GUESS) && Hangman.spacesArrayGlobal.includes("_") && !Hangman.newGame) {
            for (let i = 0; i < WORD_LENGTH; i++) {
                if (GUESS === ANSWER_ARRAY[i]) {
                    Hangman.spacesArrayGlobal[i] = GUESS;
                    Hangman.spaces.innerHTML = Hangman.spacesArrayGlobal.join(" ");
                }
            }            
       } else if (!ANSWER.includes(GUESS) && !Hangman.newGame) {            
            Hangman.wrongAnswer.innerHTML = `
            Sorry, there aren't any ${Hangman.guessGlobal}'s in the current word.`;
       } else if (!Hangman.spaces.innerHTML.includes("_") && Hangman.counterGlobal > 0 && !Hangman.newGame) {           
            Hangman.rulesText.innerHTML = `
            Congratulations! You have guessed the word in ${7 - Hangman.counterGlobal} guess(es).
        `;
       } else if (!Hangman.newGame) {            
            Hangman.rulesText.innerHTML = `
            Sorry, you weren't able to guess my word this time.
            <br><br>        
            
            Feel free to start a new game.`;
       }
       Hangman.rulesSection.appendChild(Hangman.wrongAnswer);
    }    
}

const GAME_BUTTON = document.getElementById("game-btn");
GAME_BUTTON.addEventListener("click", Hangman.intro);





    
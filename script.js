class Hangman {

    static introSection = document.querySelector("#intro-section");
    static introText = document.createElement("p");
    
    static spacesSection = document.querySelector("#spaces-section");
    static spaces = document.createElement("p");
    
    static gameTextSection = document.querySelector("#game-text-section");
    static gameText = document.createElement("p");
    
    static rulesSection = document.querySelector("#rules-section");
    static rulesText = document.createElement("p");

    static chancesSection = document.querySelector("chances");
    static chances = document.createElement("p");

    static randomNumber(arrayLength) {
        const index = arrayLength - 1;
        return Math.floor(Math.random() * index);
    }

    static intro() {
        const WORD_ARRAY = [
            "apples", "peaches", "pears", "grapes", "oranges", 
            "nectarines", "plums", "dragonfruit", "coconut", "kiwi"
        ];
        const ARRAY_LENGTH = WORD_ARRAY.length;
        const ANSWER = WORD_ARRAY[Hangman.randomNumber(ARRAY_LENGTH)];
        const WORD_LENGTH = ANSWER.length;      
        console.log(ANSWER);        
        const NAME = prompt("Hello, what is your name?");        
       
        Hangman.introText.innerHTML = 
        `A pleasure to make your acquaintance, ${NAME}.
        I understand you're here to try your hand at my game.
        <br><br>
        
        Allow me to set the stage...
        <br>`;  
        
        Hangman.introSection.appendChild(Hangman.introText);        
        NewRound.play(ANSWER, WORD_LENGTH);
    }
}

class NewRound {
    static play(word, length) {
        let spacesArray = Hangman.spaces.innerHTML.split("");
        let guessArray = word.split("");        
       
        for (let i = 0; i < length; i++) {
            Hangman.spaces.innerHTML += "_";
        }            
        
        Hangman.spacesSection.appendChild(Hangman.spaces);

        Hangman.rulesText.innerHTML += 
        `You see before you spaces representing the word you must guess.
        <br><br>
        
        As I'm sure you've also noticed, you will have a limited number of changes 
        to guess the word in full.`;

        Hangman.rulesSection.appendChild(Hangman.rulesText);

        while (Hangman.spaces.innerHTML.includes("_")) {
            guess = prompt("Guess a letter: ");

            if (word.includes(guess)) {
                for (let i = 0; i < word.length; i++) {
                    if (word.split("")[i] == guess) {
                        guess[i] = word[i];
                    }
                }
            }
            
        };

        if (word === guess ) {
            console.log("Win detected!");
        }
    }

    
}


const GAME_BUTTON = document.getElementById("game-btn");
GAME_BUTTON.addEventListener("click", Hangman.intro);

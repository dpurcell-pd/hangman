class TextGenerator {
    constructor(name) {
        this.name = name;
    }

    static greeting(name) {
        const TEXT_SECTION = document.querySelector("#text-section");
        let GAME_TEXT = document.createElement("p");
        GAME_TEXT.innerHTML = 
        `A pleasure to make your acquaintance, ${name}.
        I understand you're here to try your hand at my game.
        <br><br>`;
        TEXT_SECTION.appendChild(GAME_TEXT);
        
        setTimeout(() => {
            GAME_TEXT.innerHTML += "Allow me to set the stage...";            
            TEXT_SECTION.appendChild(GAME_TEXT);
        }, 3000);
        
    }
}

class Hangman {
    static Game() {
        let missed;
        let guesses;
        let wordArray = ["apples", "peaches", "pears", "grapes", "oranges", "nectarines", "plums", "dragonfruit", "coconut", "kiwi"];
        let repeat = "y";
        let flag = true;

        const NAME = prompt("Hello, what is your name?");
        TextGenerator.greeting(NAME);       
       
        
        
        
    }
}

const GAME_BUTTON = document.getElementById("game");
GAME_BUTTON.addEventListener("click", Hangman.Game);

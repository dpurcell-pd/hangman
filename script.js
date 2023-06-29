class Hangman {
    static Game() {
        let missed;
        let guesses;
        let wordArray = ["apples", "peaches", "pears", "grapes", "oranges", "nectarines", "plums", "dragonfruit", "coconut", "kiwi"];
        let repeat = "y";

        console.log('you are running the game');

        const TEXT_SECTION = document.querySelector("#text-section");
        const GAME_TEXT = document.createElement("p");
        const INTRO = prompt("Hello, what is your name?");
       
    }
}

const GAME_BUTTON = document.getElementById("game");
GAME_BUTTON.addEventListener("click", Hangman.Game);

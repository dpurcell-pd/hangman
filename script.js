class Hangman {
    static Game() {
        let missed;
        let guesses;
        let wordArray = ["apples", "peaches", "pears", "grapes", "oranges", "nectarines", "plums", "dragonfruit", "coconut", "kiwi"];
        let repeat = "y";

        console.log('you are running the game');
    }
}

const GAME_BUTTON = document.getElementById("game");
GAME_BUTTON.addEventListener("click", Hangman.Game);

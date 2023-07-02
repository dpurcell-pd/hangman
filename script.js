class Hangman {

    static introSection = document.querySelector("#intro-section");
    static introText = document.createElement("p");

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
        <br><br>`;
        
        Hangman.introSection.appendChild(Hangman.introText);        
        NewRound.play(ANSWER, WORD_LENGTH);
    }
}

class NewRound {
    static play(word, length) {
        const SPACES_SECTION = document.querySelector("#spaces-section");
        let spaces = document.createElement("p");
        SPACES_SECTION.appendChild(spaces);

        setTimeout(() => {
            Hangman.introText.innerHTML += "Allow me to set the stage...";                                    
        }, 1000);
        
        
    }
}


const GAME_BUTTON = document.getElementById("game-btn");
GAME_BUTTON.addEventListener("click", Hangman.intro);

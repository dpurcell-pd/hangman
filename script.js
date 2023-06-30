class Hangman {

    static randomNumber(arrayLength) {
        const index = arrayLength - 1;
        return Math.floor(Math.random() * index);
    }

    static intro() {
        const WORD_ARRAY = [
            "apples", "peaches", "pears", "grapes", "oranges", 
            "nectarines", "plums", "dragonfruit", "coconut", "kiwi"
        ];
        const LENGTH = WORD_ARRAY.length;
        const ANSWER = WORD_ARRAY[Hangman.randomNumber(LENGTH)];           
        const INTRO_SECTION = document.querySelector("#intro-section");
        const NAME = prompt("Hello, what is your name?");         
        let introText = document.createElement("p");
        introText.innerHTML = 
        `A pleasure to make your acquaintance, ${NAME}.
        I understand you're here to try your hand at my game.
        <br><br>`;
        INTRO_SECTION.appendChild(introText);
        
        setTimeout(() => {
            introText.innerHTML += "Allow me to set the stage...";            
            INTRO_SECTION.appendChild(introText);
        }, 2000);   
        
        NewRound.play(ANSWER);
    }
}

class NewRound {
    static play(word) {
        
    }
}

const GAME_BUTTON = document.getElementById("game-btn");
GAME_BUTTON.addEventListener("click", Hangman.intro);

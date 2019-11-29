class Game_View {
    static gameHTML() {
        document.body.innerHTML =
            `<div class="container">
                <p class="word-holder">Hello this is game ...</p>
                <img src="http://api.nuestro.eu/mic.svg" alt="microphone_icon" class="mic mic_l" data-player="mainPlayer"></img>
                <img src="http://api.nuestro.eu/mic.svg" alt="microphone_icon" class="mic mic_r" data-player="enemyPlayer"></img>
            </img>`
    }
    static pushWord(word) {
        var wordHolder = document.getElementsByClassName('word-holder')[0];
        wordHolder.innerHTML = word;
    }

}

export default Game_View;

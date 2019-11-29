class Game_View {
    static gameHTML() {
        document.body.innerHTML =
            `<div class="container">
                <p class="word-holder">Hello this is game ...</p>
                <div class="mic_l"><img class="mic" src="http://api.nuestro.eu/mic.svg" alt="microphone_icon"  data-player="mainPlayer"></img><p></p></div>
                <div class="mic_r"><img class="mic" src="http://api.nuestro.eu/mic.svg" alt="microphone_icon"  data-player="enemyPlayer"></img><p></p></div>
            </img>`
    }
    static pushWord(word) {
        var wordHolder = document.getElementsByClassName('word-holder')[0];
        wordHolder.innerHTML = word;
    }

}

export default Game_View;

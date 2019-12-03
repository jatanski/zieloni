class Game_View {
    static gameHTML() {
        document.body.innerHTML =
            // `<div class="container game">
            //     <p class="word-holder">Hello this is game ...</p>
            //     <div class="mic_l"><p class="name">name:<span class="points">88 Points</span></p><img class="mic" src="http://api.nuestro.eu/mic.svg" alt="microphone_icon"  data-player="mainPlayer"></div><p></p></div>
            //     <div class="mic_r"><p class="name">name:<span class="points">88 Points</span></p><img class="mic" src="http://api.nuestro.eu/mic.svg" alt="microphone_icon"  data-player="enemyPlayer"></img><p></p></div>
            // </img>
            // `
            `<div class="container game">
            <p class="word-holder">Hello this is game ...</p>
            <div class="mic_l"><p class="name">name:<span class="points">88 Points</span></p><div class="mic_button"><i class="fas fa-microphone mic" data-player="mainPlayer"></i></div><p></p></div>
            <div class="mic_r"><p class="name">name:<span class="points">88 Points</span></p><div class="mic_button"><i class="fas fa-microphone mic" data-player="enemyPlayer"></i></div><p></p></div>
        </img>
        `
    }
    static pushWord(word) {
        var wordHolder = document.getElementsByClassName('word-holder')[0];
        wordHolder.innerHTML = word;
    }

}

export default Game_View;

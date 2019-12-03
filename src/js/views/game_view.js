class Game_View {
    static gameHTML() {
        // constructor(avatar){
        //     this.avatar =
        // }
        document.body.innerHTML =
            // `<div class="container game">
            //     <p class="word-holder">Hello this is game ...</p>
            //     <div class="mic_l"><p class="name">name:<span class="points">88 Points</span></p><img class="mic" src="http://api.nuestro.eu/mic.svg" alt="microphone_icon"  data-player="mainPlayer"></div><p></p></div>
            //     <div class="mic_r"><p class="name">name:<span class="points">88 Points</span></p><img class="mic" src="http://api.nuestro.eu/mic.svg" alt="microphone_icon"  data-player="enemyPlayer"></img><p></p></div>
            // </img>
            // `
            `<div class="container game">
                <div> <img src="./assets/people.jpg" class="img"></div>
                <p class="word-holder">Hello this is game ...</p>
                <div class="players_panel">
                    <div class="panel_l">
                        <div class="panel_avatar"></div>
                        <p class="name">name: <span class="points">88 Points</span></p>
                        <div class="mic_button"><i class="fas fa-microphone mic" data-player="mainPlayer"></i></div>
                        <p></p>
                </div>
                <div class="panel_r">
                    <div class="panel_avatar"></div>
                    <p class="name">name:<span class="points">88 Points</span></p>
                    <div class="mic_button"><i class="fas fa-microphone mic" data-player="enemyPlayer"></i></div> 
                    <p></p>
                </div>
            </div> 
        `
        console.log()
    }
    static pushWord(word) {
        var wordHolder = document.getElementsByClassName('word-holder')[0];
        wordHolder.innerHTML = word;
    }
    getAvatar(){

    }
}
export default Game_View;

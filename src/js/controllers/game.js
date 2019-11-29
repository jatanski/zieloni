// import AvatarsAPI from "../models/avatarsAPI";
// import { MainPlayer, Player } from "../models/player";
// import BaseView from "../views/view";


class Game {
    constructor() {
        this.timerForClick;
        this.timerForResponse;
    }
    setRound(setTime_callback, time) {
        this.timerForClick = setTimeout(setTime_callback, time)
    }
    setTimerForResponse(setTime_callback, time) {
        this.timerForResponse = setTimeout(setTime_callback, time)
    }
    setPoints(player, enemy, player_points, enemy_points) {
        player.points += player_points;
        enemy.points += enemy_points;
        var player_obj = JSON.parse(localStorage.mainPlayer);
        var enemy_obj = JSON.parse(localStorage.enemyPlayer);
        player_obj.points = player.points;
        enemy_obj.points = enemy.points;
        localStorage.mainPlayer = JSON.stringify(player);
        localStorage.enemyPlayer = JSON.stringify(enemy);
    }
    addListenersMic(speechRec) {
        const microfons = document.getElementsByClassName('mic');
        [...microfons].forEach((mic) => {
            //mic.dataset.player
            speechRec();
            mic.addEventListener('click', () => { this.setTimerForResponse(() => { speechRec(true); alert('koniec czasu na odp') }, 3000) })
        })
    }
    checkAnswere() { }
    blockMic() { }

}

export default Game;

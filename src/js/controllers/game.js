
import { create } from "domain";

// import AvatarsAPI from "../models/avatarsAPI";
// import { MainPlayer, Player } from "../models/player";
// import BaseView from "../views/view";


class Game {
    constructor(tabWords, mainPlayer, enemyPlayer, round) {
        this.timerForClick;
        this.timerForResponse;
        this.tabWords = tabWords;
        this.currentTranslationWords;
        this.mainPlayer = mainPlayer;
        this.enemyPlayer = enemyPlayer;
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
        localStorage.mainPlayer = JSON.stringify(player);//z obiektu robi stringa
        localStorage.enemyPlayer = JSON.stringify(enemy);
    }
    fillNames() {
        var player_obj = JSON.parse(localStorage.mainPlayer);
        var enemy_obj = JSON.parse(localStorage.enemyPlayer);
        let namesTab = document.getElementsByClassName('name');
        let avatarTab = document.getElementsByClassName('panel_avatar')
        let playerAvatar = this.mainPlayer.avatar;
        let enemyAvatar = this.enemyPlayer.avatar
        namesTab[0].innerHTML = player_obj['_name'] + `: <br><i class="fas fa-star"></i><span class="points">${player_obj['points']} points</span>`;
        namesTab[1].innerHTML = enemy_obj['_name'] + `: <br><i class="fas fa-star"></i><span class="points">${enemy_obj['points']} points</span>`;
        avatarTab[0].innerHTML = `<img src="${playerAvatar}"/>`;
        avatarTab[1].innerHTML = `<img src="${enemyAvatar}"/>`
    }
    addListenersMic(speechRec, tabWords, validator, translation_tab, setNewRoundSchema) {
        const microfons = document.getElementsByClassName('mic');
        [...microfons].forEach((mic) => {
            //mic.dataset.player
            //clearInterval
            function addClass() { mic.classList += ' active'; }
            let action = (e) => {
                let microphone = document.getElementsByClassName('active')
                if (microphone.length > 0) {
                    return
                }
                else {
                    clearTimeout(this.timerForClick); speechRec(validator, translation_tab, e.target, setNewRoundSchema); addClass()
                }
            }
            mic.addEventListener('click', (e) => { action(e) })
        })
    }
    checkAnswere(response, translation_tab, who) {//walidator
        // console.log(response, translation_tab);
        if (!response[0]) { return false }
        if (response[0].toLowerCase() === translation_tab[1].toLowerCase()) {
            console.log('poprawna odpowiedź');
            return true;
        } else {
            console.log('niepoprawna odpowiedź');
            return false;
        }

    }
    gameOver(init) {
        let winner;
        let mainPlayer = JSON.parse(localStorage.mainPlayer);
        let enemyPlayer = JSON.parse(localStorage.enemyPlayer);

        if (localStorage.mainPlayer && localStorage.enemyPlayer) {
            if (mainPlayer.points !== enemyPlayer.points) {
                winner = mainPlayer.points > enemyPlayer.points ? mainPlayer._name : enemyPlayer._name;
                alert(`Koniec GRY wygrał ${winner}`);
            } else {
                winner = mainPlayer._name + ' i ' + enemyPlayer._name;
                alert(`Koniec GRY wygrali : ${winner}`);
            }
        }
        if (localStorage.mainPlayer) {
            localStorage.removeItem('mainPlayer');
        }
        if (localStorage.enemyPlayer) {
            localStorage.removeItem('enemyPlayer');
        }
        if (localStorage.round) {
            localStorage.removeItem('round');
        }
        init();
    }
    //blockMic() { }

}

export default Game;



import BaseView from "../views/view";
import Words from "../models/words"
import CreateMainPlayer from "./createPlayer";
import Game from "./game";
import SpeechRecognition from "./speechRecognition";
import speechRecognition from "./speechRecognition";

const view = new BaseView();
let game;
let mainPlayer;
let enemyPlayer;


class MainCtrl extends CreateMainPlayer {
  constructor() {
    super();
    this.view = new BaseView();
  }


  init() {
    if (!localStorage.mainPlayer) {
      //jeśli nie mamy stworzonego gracza głównego to odpalamy funkcjonalność zapisaną w createPlayer
      view.Welcome_View();
      this.createAvatarChoices(view.pushIMGs);
      this.chooseAvatarlistener();
      this.createPlayer(this, mainPlayer, enemyPlayer);
    }
    else if (localStorage.mainPlayer && !localStorage.enemyPlayer) {
      view.welcomEnemyHTML();
      this.createAvatarChoices(view.pushIMGs);
      this.chooseAvatarlistener();
      this.createPlayer(this, mainPlayer, enemyPlayer, true);
    }
    else {
      view.Game_View();
      game = new Game();
      let player_obj = JSON.parse(localStorage.mainPlayer);
      let enemy_obj = JSON.parse(localStorage.enemyPlayer);
      mainPlayer ? mainPlayer = mainPlayer : mainPlayer = player_obj;
      enemyPlayer ? enemyPlayer = enemyPlayer : enemyPlayer = enemy_obj;
      // game.setRound(() => { console.log('hehe') }, 3000);
      // Words.return_translation('en-pl').then((r) => { console.log(r) });
      Words.return_translation('en-pl').then((r) => { view.pushWord(r[0]) });

      // Words.randomWord().then((r) => { console.log(r) });

      game.setPoints(mainPlayer, enemyPlayer, 10, 20);
      game.addListenersMic(speechRecognition.captureSpeech);
    }

  }
}

export default MainCtrl;

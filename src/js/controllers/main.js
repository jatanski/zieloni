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
      // Words.return_translation('en-pl').then((r) => { console.log(r) });
      view.Game_View();
      game = new Game([]);
      let player_obj = JSON.parse(localStorage.mainPlayer);
      let enemy_obj = JSON.parse(localStorage.enemyPlayer);
      mainPlayer ? mainPlayer = mainPlayer : mainPlayer = player_obj;
      enemyPlayer ? enemyPlayer = enemyPlayer : enemyPlayer = enemy_obj;
      let setNewRoundSchema = function (firstRound = false) {
        if (!firstRound) { game.setPoints(mainPlayer, enemyPlayer, -10, -10); }
        Words.return_translation('en-pl').then((r) => { view.pushWord(r[0]); game.currentTranslationWords = r });
        game.fillNames();
        game.setRound(() => { setNewRoundSchema() }, 5000);
      }
      setNewRoundSchema(true);
      game.addListenersMic(speechRecognition.captureSpeech, game.tabWords, game.checkAnswere, game, setNewRoundSchema);

    }

  }
}

export default MainCtrl;

import BaseView from "../views/view";
import Words from "../models/words"
import CreateMainPlayer from "./createPlayer";
import Game from "./game";
import SpeechRecognition from "./speechRecognition";
import speechRecognition from "./speechRecognition";

const view = new BaseView();//generowanie widoku
let game;//obiekt do którego będziemy wrzucać
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
      let player_obj = JSON.parse(localStorage.mainPlayer);//zamiana ze stringa na obiekt(obiekt player)
      let enemy_obj = JSON.parse(localStorage.enemyPlayer);
      mainPlayer ? mainPlayer = mainPlayer : mainPlayer = player_obj;
      enemyPlayer ? enemyPlayer = enemyPlayer : enemyPlayer = enemy_obj;
      let game = new Game([],mainPlayer,enemyPlayer); // tu wrzucamy coś , jak będziemy coś mówić
      let setNewRoundSchema = function (firstRound = false) {
        if (!firstRound) { game.setPoints(mainPlayer, enemyPlayer, -10, -10); }//sprawdza czy to jest pierwsza tura
        Words.return_translation('en-pl').then((r) => { view.pushWord(r[0]); game.currentTranslationWords = r });//losowanie słówka
        game.fillNames();
        game.setRound(() => { setNewRoundSchema() }, 5000);
      }
      setNewRoundSchema(true);//wywołanie schematu - 1 runda
      game.addListenersMic(speechRecognition.captureSpeech, game.tabWords,/*słówka, któe losuje nam parę*/ game.checkAnswere, game/*przechowuje słowka, które powiemy w linii 38*/, setNewRoundSchema/*wznowienie nasłuchu do kolejnej gry*/);//nasłuchuje na klikanie, na mikrofon

    }

  }
}

export default MainCtrl;

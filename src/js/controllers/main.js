import BaseView from "../views/view";
import CreateMainPlayer from "./createPlayer";


class MainCtrl extends CreateMainPlayer {
  constructor() {
    super();
    this.view = new BaseView();
  }


  init() {
    if (!localStorage.mainPlayer) {
      //jeśli nie mamy stworzonego gracza głównego to odpalamy funkcjonalność zapisaną w createPlayer
      this.createTemplateHTML()
      this.createPlayer();
      this.chooseAvatarlistener();
      this.createAvatarChoices();
    }
    else {
      // w przeciwnym razie uruchamiamy grę
      console.log('uruchom gre')
    }

  }
}

export default MainCtrl;

import BaseView from "../views/view";
import CreateMainPlayer from "./createPlayer";
var view = new BaseView();

class MainCtrl extends CreateMainPlayer {
  constructor() {
    super();
    this.view = new BaseView();
  }


  init() {
    if (!localStorage.mainPlayer) {
      //jeśli nie mamy stworzonego gracza głównego to odpalamy funkcjonalność zapisaną w createPlayer
      // this.createTemplateHTML()
      //console.log(BaseView.prototype) //BaseView.welcomeHTML();
      view.Welcome_View();
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

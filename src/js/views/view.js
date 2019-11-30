import Welcome_View from "./welcome_view";
import Game_View from "./game_view";
class View {
  constructor() { }
}
View.prototype.Welcome_View = Welcome_View.welcomeHTML;
View.prototype.pushIMGs = Welcome_View.pushIMGs;
View.prototype.welcomEnemyHTML = Welcome_View.welcomEnemyHTML;
View.prototype.Game_View = Game_View.gameHTML;
View.prototype.pushWord = Game_View.pushWord;


export default View;

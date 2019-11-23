class Player {
  constructor(name, points, avatar) {
    this._name = name;
    this.points = points;
    this.avatar = avatar;
  }
}

class MainPlayer extends Player {
  constructor(name, points, avatar, pointsGenerally, wordsCan, wordsCant, wordsList) {
    super(name, points, avatar);
    this._pointsGenerally = pointsGenerally;
    this._wordsCan = wordsCan;
    this._wordsCant = wordsCant;
    this._wordsList = wordsList;
  }
}

export { Player, MainPlayer }
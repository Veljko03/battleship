import GameBoard from "./makeGmBoard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
  }
}

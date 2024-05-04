import Ship from "./makeShip";

export default class GameBoard {
  constructor() {
    this.board = [];
  }
  createBoard() {
    const size = 10;

    for (let i = 0; i < size; i++) {
      this.board[i] = [];
      for (let j = 0; j < size; j++) {
        this.board[i][j] = null;
      }
    }
  }

  placeShip(x, y, length) {
    this.board[x][y] = new Ship(length);
  }

  getTailValue(x, y) {
    return this.board[x][y];
  }

  reciveAttack(x, y) {
    if (this.board[x][y] == null) {
      return "you missed";
    } else {
      return "you hit the boat";
    }
  }
}

module.exports = GameBoard;

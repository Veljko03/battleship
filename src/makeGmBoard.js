export default class GameBoard {
  constructor() {
    this.board = [];
    this.totalNumOfShips = 5;
    this.numOfShipsSunk = 0;
    this.position = "horizontal";
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

  placeShip(x, y, ship, position) {
    for (let i = 0; i < ship.length; i++) {
      if (position == "horizontal") {
        this.board[x + i][y] = ship;
      }
    }
  }

  getTailValue(x, y) {
    return this.board[x][y];
  }

  reciveAttack(x, y) {
    if (this.board[x][y] == null) {
      this.board[x][y] = "missed";
      return "you missed";
    } else if (this.board[x][y] == "missed") {
      return;
    } else if (this.board[x][y] == "you hitted ship") {
      return;
    } else {
      const ship = this.board[x][y];
      ship.hit();

      this.board[x][y] = "you hitted ship";

      if (ship.sunk == true) this.numOfShipsSunk++;
      this.gameOver();
    }
  }

  gameOver() {
    if (this.numOfShipsSunk == this.totalNumOfShips) return "gameOver";
  }
}

module.exports = GameBoard;

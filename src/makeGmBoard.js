import Ship from "./makeShip";

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
    //if(ship.horizontal)
    //fill that tail and tails(num of tails to fill = ship.lenght-1) next to it on a right side
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
      //fill tail and disable clicking again
      return "you missed";
    } else {
      //Ship hitted and if it isSunk, numOfShipsSunk++    ...
      //gameOver();
    }
  }

  gameOver() {
    //if( numOfShipsSUnk == totalNUmOfShips) return "gameOver";
  }
}

module.exports = GameBoard;

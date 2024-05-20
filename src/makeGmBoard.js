import playRound, {
  b1,
  b2,
  board1,
  board2,
  currPlayer,
  dgDrop,
  dgOver,
  madeMove,
  playerMadeMove,
} from ".";
import Ship from "./makeShip";

export default class GameBoard {
  constructor() {
    this.board = [];
    this.totalNumOfShips = 5;
    this.numOfShipsSunk = 0;

    this.position = "vertical";
    this.over = false;
    this.clicked = false;
    this.shipPlaced = false;
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

  placeShip(x, y, ship, position, b1) {
    //for loop for preventing placing boats if full boat cant fit there
    let canPlaceShip = false;
    if (b1 == "b1") {
      canPlaceShip = false;
      if (position == "vertical" || position == "horizontal") {
        let size = x + ship.length;
        if (size < 10) {
          for (let i = 0; i < ship.length; i++) {
            //console.log(this.board[x + i][y]);
            if (this.board[x][y + i] != null) {
              canPlaceShip = false;

              return "cant place boat here";
            } else {
              canPlaceShip = true;
            }
          }
        } else {
          return "cant place boat here";
        }
      }
    } else {
      canPlaceShip = true;
    }

    if (canPlaceShip) {
      canPlaceShip = false;
      if (position == "vertical") {
        let size = x + ship.length;
        if (size < 10) {
          for (let i = 0; i < ship.length; i++) {
            if (this.board[x + i][y] == null) {
              this.board[x + i][y] = ship;
            } else {
              return "cant place boat here";
            }
          }
        } else return "cant place boat here";
      } else if (position == "horizontal") {
        let size = y + ship.length;
        if (size < 10) {
          for (let i = 0; i < ship.length; i++) {
            if (this.board[x][y + i] == null) {
              this.board[x][y + i] = ship;
            } else {
              return "cant place boat here";
            }
          }
        } else return "cant place boat here";
      }
    }
  }

  getTailValue(x, y) {
    return this.board[x][y];
  }

  reciveAttack(x, y) {
    if (this.board[x][y] == null) {
      this.board[x][y] = "missed";
      return;
    } else if (this.board[x][y] == "missed") {
      return "invalidMove";
    } else if (this.board[x][y] == "you hitted ship") {
      return "invalidMove";
    } else {
      const ship = this.board[x][y];
      ship.hit();

      this.board[x][y] = "you hitted ship";

      if (ship.sunk == true) this.numOfShipsSunk++;
      this.gameOver();
    }
  }

  gameOver() {
    if (this.numOfShipsSunk == this.totalNumOfShips) {
      this.over = true;
      return alert("game ovee");
    }
  }

  printBoard(boardPlace, attackedBy, currBoard) {
    const rows = 9;
    this.clicked = false;
    for (let i = 0; i <= rows; i++) {
      const r = document.createElement("div");
      boardPlace.appendChild(r).className = "make";

      for (let j = 0; j <= rows; j++) {
        const c = document.createElement("div");
        c.setAttribute("class", "cell");

        if (this.board[i][j] == "missed") {
          c.style.backgroundColor = "gray";
        } else if (this.board[i][j] == "you hitted ship") {
          c.style.backgroundColor = "red";
        } else if (this.board[i][j] != null) {
          //show hips on players(left) side
          if (currBoard == "left") {
            c.style.backgroundColor = "black";
          } else {
            c.style.backgroundColor = "white";
          }
        } else {
          c.style.backgroundColor = "white";
        }
        c.setAttribute("x", i);
        c.setAttribute("y", j);
        // c.setAttribute("dragover", dgOver());
        // c.setAttribute("drop", dgDrop());

        r.appendChild(c);

        c.addEventListener("click", () => {
          if (attackedBy == "player") {
            if (!this.over) {
              //player can attack only right board(enemy-computer)
              if (
                this.board[i][j] != "missed" &&
                this.board[i][j] != "you hitted ship"
              ) {
                this.reciveAttack(i, j);
                if (this.board[i][j] == null || this.board[i][j] == "missed") {
                  c.style.backgroundColor = "gray";
                } else if (this.board[i][j] == "you hitted ship") {
                  c.style.backgroundColor = "red";
                }
                this.clicked = true;
                attackedBy = "block next move";
                playerMadeMove(true);
              }
            }
          }
        });
      }
    }
  }

  computerRandomAttack() {
    if (!this.over) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);

      if (
        this.board[x][y] != "missed" &&
        this.board[x][y] != "you hitted ship"
      ) {
        this.reciveAttack(x, y);
      } else {
        this.computerRandomAttack();
      }
    }
  }
}

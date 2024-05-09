import Ship from "./makeShip";

export default class GameBoard {
  constructor() {
    this.board = [];
    this.totalNumOfShips = 3;
    this.numOfShipsSunk = 0;

    this.position = "vertical";
    this.over = false;
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
    let size = x + ship.length;
    if (size < 10) {
      for (let i = 0; i < ship.length; i++) {
        if (position == "vertical") {
          this.board[x + i][y] = ship;
        }
      }
    } else return "err";
  }

  getTailValue(x, y) {
    return this.board[x][y];
  }

  reciveAttack(x, y) {
    if (this.board[x][y] == null) {
      this.board[x][y] = "missed";
      return;
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
    if (this.numOfShipsSunk == this.totalNumOfShips) {
      this.over = true;
      return alert("game ovee");
    }
  }

  printBoard(boardPlace, turn) {
    const rows = 9;

    for (let i = 0; i <= rows; i++) {
      const r = document.createElement("div");
      boardPlace.appendChild(r).className = "make";

      for (let j = 0; j <= rows; j++) {
        const c = document.createElement("div");
        c.setAttribute("class", "cell");
        console.log(this.board[i][j]);
        if (this.board[i][j] != null) {
          //show hips on players(left) side
          if (turn == "player") {
            c.style.backgroundColor = "black";
          } else {
            c.style.backgroundColor = "white";
          }
        } else {
          c.style.backgroundColor = "white";
        }
        r.appendChild(c);

        c.addEventListener("click", () => {
          if (!this.over) {
            //player can attack only right board(enemy-computer)
            if (turn == "computer") {
              this.reciveAttack(i, j);
              if (this.board[i][j] == null || this.board[i][j] == "missed") {
                c.style.backgroundColor = "gray";
              } else if (this.board[i][j] == "you hitted ship") {
                c.style.backgroundColor = "red";
              }
            }
          }
        });
        //if computer is attacking player...
        if (turn == "player") {
          if (!this.over) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);

            this.reciveAttack(x, y);

            if (this.board[i][j] == null || this.board[i][j] == "missed") {
              c.style.backgroundColor = "gray";
            } else if (this.board[i][j] == "you hitted ship") {
              c.style.backgroundColor = "red";
            }
          }
        }
      }
    }
  }
}

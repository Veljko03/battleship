import "./style.css";
import Player from "./players";
import Ship from "./makeShip";

function initializeGame() {
  const b1 = document.querySelector(".board-one");
  const b2 = document.querySelector(".board-two");
  const attackedBy = ["player", "computer"];
  const player1 = new Player("player");
  const player2 = new Player("computer");
  const board1 = player1.board;
  const board2 = player2.board;

  board1.createBoard();
  board2.createBoard();

  board1.placeShip(2, 2, new Ship(3), "vertical");
  board1.placeShip(5, 5, new Ship(3), "vertical");
  board1.placeShip(1, 9, new Ship(5), "vertical");

  board2.placeShip(0, 2, new Ship(3), "vertical");
  board2.placeShip(3, 4, new Ship(3), "vertical");
  board2.placeShip(0, 6, new Ship(5), "vertical");

  let attBy = "player";
  let playerMadeMove = false;

  for (let i = 0; i < 100; i++) {
    clearAll(b1, b2);
    if (attBy == "player") {
      clearAll(b1, b2);
      playerTurn(board1, board2, b1, b2, attackedBy[0]);
      attBy = "computer";
    } else if (attBy == "computer") {
      clearAll(b1, b2);
      computerTurn(board1, board2, b1, b2, attackedBy[1]);
      attBy = "player";
    }
    if (board1.over || board2.over) {
      i = 200;
    }
  }
}
initializeGame();

function playerTurn(board1, board2, b1, b2, attackedBy) {
  board1.printBoard(b1);
  board2.printBoard(b2, attackedBy);
}

function computerTurn(board1, board2, b1, b2, attackedBy) {
  board1.printBoard(b1, attackedBy);
  board2.printBoard(b2);
}

function clearAll(b1, b2) {
  b1.innerHTML = "";
  b2.innerHTML = "";
}

import "./style.css";
import Player from "./players";
import Ship from "./makeShip";

const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", () => {
  initializeGame();
});
let currPlayer = "player";

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

  let currBoard = ["left", "right"];

  // for (let i = 0; i < 100; i++) {
  //   clearAll(b1, b2);
  //   if (attBy == "player") {
  //     clearAll(b1, b2);
  //     playerTurn(board1, board2, b1, b2, attackedBy[0]);
  //     attBy = "computer";
  //   } else if (attBy == "computer") {
  //     clearAll(b1, b2);
  //     computerTurn(board1, board2, b1, b2, attackedBy[1]);
  //     attBy = "player";
  //   }
  //   if (board1.over || board2.over) {
  //     i = 200;
  //   }
  // }

  //playerTurn(board1, board2, b1, b2, attackedBy[1]);
  // board1.printBoard(b1, attackedBy[1], currBoard[0]);
  // board2.printBoard(b2, attackedBy[0], currBoard[1]);

  playRound(board1, board2, b1, b2, attackedBy, currBoard);
  playRound(board1, board2, b1, b2, attackedBy, currBoard);
}

function clearAll(b1, b2) {
  b1.innerHTML = "";
  b2.innerHTML = "";
}

function playRound(board1, board2, b1, b2, attackedBy, currBoard) {
  clearAll(b1, b2);
  board1.printBoard(b1, "something", currBoard[0]);
  board2.printBoard(b2, "something", currBoard[1]);
  if (currPlayer === "player") {
    clearAll(b1, b2);
    //attacl
    board1.printBoard(b1, "something", currBoard[0]);
    board2.printBoard(b2, attackedBy[0], currBoard[1]);
    currPlayer = "computer";
  } else {
    clearAll(b1, b2);
    //random attack]
    board1.computerRandomAttack();
    board1.printBoard(b1, attackedBy[1], currBoard[0]);
    board2.printBoard(b2, "something", currBoard[1]);

    currPlayer = "player";
  }
}

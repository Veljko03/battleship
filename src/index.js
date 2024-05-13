import "./style.css";
import Player from "./players";
import Ship from "./makeShip";

const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", () => {
  initializeGame();
});
export let currPlayer;
export const b1 = document.querySelector(".board-one");
export const b2 = document.querySelector(".board-two");
export const attackedBy = ["player", "computer"];
export const player1 = new Player("player");
export const player2 = new Player("computer");
export const board1 = player1.board;
export const board2 = player2.board;
function initializeGame() {
  board1.createBoard();
  board2.createBoard();

  board1.placeShip(2, 2, new Ship(3), "vertical");
  board1.placeShip(5, 5, new Ship(3), "vertical");
  board1.placeShip(1, 9, new Ship(5), "vertical");

  board2.placeShip(0, 2, new Ship(3), "vertical");
  board2.placeShip(3, 4, new Ship(3), "vertical");
  board2.placeShip(0, 6, new Ship(5), "vertical");

  let currBoard = ["left", "right"];
  board1.printBoard(b1, "something", "left");
  board2.printBoard(b2, "something");

  playRound(board1, board2, b1, b2, "player");
}

function clearAll(b1, b2) {
  b1.innerHTML = "";
  b2.innerHTML = "";
}

//playRound if function that change order in game
function playRound(board1, board2, b1, b2, currPlayer) {
  clearAll(b1, b2);
  // print both boards without eventlistener or computerattack
  console.log(currPlayer);
  if (currPlayer === "player") {
    //clear everything then print 1st board as it is and second with addEventlisterner function enabled
    board1.printBoard(b1, "something", "left");
    board2.printBoard(b2, currPlayer);
    if (board2.clicked == true) {
      if (!board1.over && !board2.over) {
        board2.clicked = false;
        currPlayer = "computer";
        playRound(board1, board2, b1, b2, currPlayer, currBoard);
      }
    }
  } else {
    //random attack, and then print both boards
    board1.computerRandomAttack();
    board1.printBoard(b1, currPlayer, "left");
    board2.printBoard(b2, "something");

    currPlayer = "player";

    if (!board1.over && !board2.over) {
      playRound(board1, board2, b1, b2, currPlayer);
    }
  }
}

let madeMove = false;

export function playerMadeMove(change) {
  madeMove = change;

  if (madeMove == true) {
    madeMove = false;

    playRound(board1, board2, b1, b2, "computer");
  }
}

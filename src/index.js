import "./style.css";
import Player from "./players";
import Ship from "./makeShip";

function initializeGame() {
  const b1 = document.querySelector(".board-one");
  const b2 = document.querySelector(".board-two");

  const player1 = new Player("You are lpayer one");
  const player2 = new Player("Computer");
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

  board1.printBoard(b1);
  board2.printBoard(b2);
}
initializeGame();

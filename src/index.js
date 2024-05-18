import "./style.css";
import Player from "./players";
import Ship from "./makeShip";

const ships = document.querySelector(".ships");

const startBtn = document.querySelector(".start");
const btnRandom = document.querySelector(".btnRandom");
// make drag and drop

let canClickAgain = true;

let shipsPlaced = 0;
startBtn.addEventListener("click", () => {
  if (canClickAgain) {
    initializeGame();
    canClickAgain = false;
  }
});

let currPlayer;
const b1 = document.querySelector(".board-one");
const b2 = document.querySelector(".board-two");

const player1 = new Player("player");
const player2 = new Player("computer");
const board1 = player1.board;
const board2 = player2.board;
let allBoatsPlaced;
function initializeGame() {
  board1.createBoard();
  board2.createBoard();

  const randomBtn = document.createElement("button");
  randomBtn.textContent = "Random placement";

  randomBtn.addEventListener("click", () => {
    b1.innerHTML = "";
    board1.createBoard();
    randomShipPlacment(board1, 5);
    randomShipPlacment(board1, 3);
    randomShipPlacment(board1, 3);
    randomShipPlacment(board1, 2);
    randomShipPlacment(board1, 2);
    allBoatsPlaced = 5;
    board1.printBoard(b1, "something", "left");
    playRound(board1, board2, b1, b2, "player");
  });
  btnRandom.appendChild(randomBtn);

  randomShipPlacment(board2, 5);
  randomShipPlacment(board2, 3);
  randomShipPlacment(board2, 3);
  randomShipPlacment(board2, 2);
  randomShipPlacment(board2, 2);
  shipsForDragAndDrop(board1);

  let currBoard = ["left", "right"];
  board1.printBoard(b1, "something", "left");
  board2.printBoard(b2, "something");
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

function randomShipPlacment(first, length) {
  let ship1X = Math.floor(Math.random() * 10);
  console.log(ship1X);

  let ship1Y = Math.floor(Math.random() * 10);
  console.log(ship1Y);
  let placment = Math.random() < 0.5 ? "horizontal" : "vertical";
  console.log(placment);
  if (
    first.placeShip(ship1X, ship1Y, new Ship(length), placment) ==
    "cant place boat here"
  ) {
    randomShipPlacment(first, length);
  } else first.placeShip(ship1X, ship1Y, new Ship(length), placment);
}

function shipsForDragAndDrop(first) {
  ships.style.display = "flex";
  let selected;
  let ship = document.querySelectorAll(".ship");
  ship.forEach((s) => {
    s.addEventListener("dragstart", (e) => {
      selected = e.target.id;
      console.log(e.target);
    });
  });
  b1.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  b1.addEventListener("drop", (e) => {
    b1.innerHTML = "";
    e.preventDefault();
    let newX = e.target;
    let x = parseInt(newX.getAttribute("x"));
    let newY = e.target;
    let y = parseInt(newY.getAttribute("y"));

    if (
      first.placeShip(x, y, new Ship(parseInt(selected)), "horizontal") !=
      "cant place boat here"
    ) {
      first.placeShip(x, y, new Ship(selected), "horizontal");
      shipsPlaced++;
    }
    console.log(shipsPlaced);
    x = null;
    y = null;
    selected = null;

    first.printBoard(b1, "something", "left");
  });
}

//za sutra proveriti zasto menja boju polja iako ne place SHip itd...

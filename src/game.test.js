import GameBoard from "./makeGmBoard";
import Ship from "./makeShip";

test("isSunk", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.sunk).toEqual(true);
});

test("notSunk", () => {
  const ship = new Ship(4);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.sunk).toEqual(false);
});

test("checkPosition", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  const expectNull = gameBoard.getTailValue(2, 2);
  expect(expectNull).toEqual(null);
});

test("checkPosition", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  gameBoard.placeShip(2, 2);
  const expectShip = gameBoard.getTailValue(2, 2);
  expect(expectShip).toEqual(new Ship());
});

test("checkReciveAtack", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  gameBoard.placeShip(2, 2, 3);
  const misedTarget = gameBoard.reciveAttack(5, 5);
  expect(misedTarget).toMatch("you missed");
});

test("reciveAttack", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  gameBoard.placeShip(2, 2, 3);
});

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
  const expectNUll = gameBoard.getTailValue(2, 2);
  expect(expectNUll).toEqual(null);
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
  const hitTarget = gameBoard.reciveAttack(2, 2);
  expect(hitTarget).toMatch("you hit the boat");
});

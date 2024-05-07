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

test("checkPositionEmpty", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  const expectNull = gameBoard.getTailValue(2, 2);
  expect(expectNull).toEqual(null);
});

test("checkPosition", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  const ship = new Ship(3);
  gameBoard.placeShip(2, 2, ship, "horizontal");
  const expectShip = gameBoard.getTailValue(4, 2);
  expect(expectShip).toEqual(ship);
});

test("checkReciveAtack", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  gameBoard.placeShip(2, 2, new Ship(3), "horizontal");
  const misedTarget = gameBoard.reciveAttack(5, 5);
  expect(misedTarget).toMatch("you missed");
});

test("reciveAttack", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  const ship = new Ship(3);
  gameBoard.placeShip(2, 2, ship, "horizontal");
  gameBoard.reciveAttack(3, 2);
  const val = gameBoard.getTailValue(3, 2);
  expect(val).toMatch("you hiited ship");
});

test("gameOver", () => {
  const gameBoard = new GameBoard();
  gameBoard.createBoard();
  const ship1 = new Ship(1);
  const ship2 = new Ship(2);
  gameBoard.placeShip(2, 2, ship1, "horizontal");
  gameBoard.placeShip(4, 4, ship2, "horizontal");
  gameBoard.reciveAttack(2, 2);
  gameBoard.reciveAttack(4, 4);
  expect(ship1.sunk).toEqual(true);
});

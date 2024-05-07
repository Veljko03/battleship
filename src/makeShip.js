import GameBoard from "./makeGmBoard";

export default class Ship {
  constructor(length) {
    this.length = length;
    this.numOfTimesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.numOfTimesHit++;
    this.isSunk();
  }

  isSunk() {
    if (this.numOfTimesHit == this.length) {
      this.sunk = true;
      return true;
    }
  }
}

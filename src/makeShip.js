import GameBoard from "./makeGmBoard";

export default class Ship {
  constructor(length) {
    this.length = length;
    this.numOfTimesHit = 0;
    this.sunk = false;
    this.tails = [];
  }

  hit() {
    this.numOfTimesHit++;
    if (this.numOfTimesHit == this.length) {
      this.isSunk();
    }
  }

  isSunk() {
    this.sunk = true;
  }
}

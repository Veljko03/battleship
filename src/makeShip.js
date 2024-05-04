export default class Ship {
  constructor(length) {
    this.length = length;
    this.numOfTimesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.numOfTimesHit++;
    if (this.numOfTimesHit == this.length) {
      this.isSunk();
    }
  }

  isSunk() {
    //alert("ship is sunk");
    this.sunk = true;
  }
}

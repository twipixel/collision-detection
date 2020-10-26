export default class Points {
  constructor(points = []) {
    this.points = points;
  }

  addPoints(points) {
    this.points = points;
  }

  clear() {
    this.points.length = 0;
    this.points = [];
  }

  addPoint(add) {
    const findIndex = this.points.findIndex(point => point.isSame(add));
    if (findIndex === -1) {
      this.points.push(add);
    }
  }

  getPoints() {
    return this.points.slice();
  }
}
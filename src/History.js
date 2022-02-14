export default class History {

  /**
   * @param simplex {Vector[]}
   * @param directions {Vector[]}
   */
  constructor(simplex = new Array(3), directions = new Array(3)) {
    this.simplex = simplex;
    this.directions = directions;
  }

  setHistory(simplex, directions) {
    this.simplex = simplex;
    this.directions = directions;
  }
}

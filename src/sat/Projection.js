export default class Projection {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }


  getOverlap(projection) {
    var overlap;

    if (!this.overlaps(projection))
      return 0;

    if (this.max > projection.max) {
      overlap = projection.max - this.min;
    } else {
      overlap = this.max - projection.min;
    }
    return overlap;
  }


  overlaps(projection) {
    return this.max > projection.min && projection.max > this.min;
  }


}
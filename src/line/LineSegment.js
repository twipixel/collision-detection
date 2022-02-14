import Point from './Point';

export default class LineSegment {
  constructor(x1 = new Point(), x2 = new Point()) {
    this.x1 = x1;
    this.x2 = x2;
  }

  clone() {
    return new LineSegment(xl.clone(), x2.clone());
  }
}
import Vector from '../../src/Vector';
import PastelColor from '../../src/utils/PastelColor';

export default class Line {
  constructor(line, size = 20) {
    this.line = line;
    // this.color = PastelColor.generate().hex;
    this.lineWidth = 1;
    this.color = 0xFFFFFF;
    this.alpha = 0.8;

    this.a = Vector.fromObject(line.a);
    this.b = Vector.fromObject(line.b);
    this.ab = Vector.subtract(this.a, this.b);
    this.ao = Vector.negate(this.a);
    this.ap = Vector.tripleProduct(this.ab, this.ao, this.ab).norm().multiplyScalar(size);
    this.nap = Vector.negate(this.ap);

    this.p1 = new Vector(this.a.x + this.ap.x, this.a.y + this.ap.y);
    this.p2 = new Vector(this.b.x + this.ap.x, this.b.y + this.ap.y);
    this.p3 = new Vector(this.b.x + this.nap.x, this.b.y + this.nap.y);
    this.p4 = new Vector(this.a.x + this.nap.x, this.a.y + this.nap.y);
  }

  draw(graphics) {
    const g =  graphics
      , p1 = this.p1
      , p2 = this.p2
      , p3 = this.p3
      , p4 = this.p4;

    g.lineStyle(this.lineWidth, this.color, this.alpha);
    g.moveTo(p1.x, p1.y);
    g.lineTo(p2.x, p2.y);
    g.lineTo(p3.x, p3.y);
    g.lineTo(p4.x, p4.y);
    g.lineTo(p1.x, p1.y);
  }

  getPoints() {
    return [this.p1.clone(), this.p2.clone(), this.p3.clone(), this.p4.clone()];
  }
}
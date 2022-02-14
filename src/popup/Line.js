import Vector from '../../src/Vector';
import Shape from '../../src/sat/Shape';
import Projection from '../../src/sat/Projection';

export default class Line extends Shape {
  constructor(line, size = 20) {
    super();
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

    this.p1 = new PIXI.Point(this.a.x + this.ap.x, this.a.y + this.ap.y);
    this.p2 = new PIXI.Point(this.b.x + this.ap.x, this.b.y + this.ap.y);
    this.p3 = new PIXI.Point(this.b.x + this.nap.x, this.b.y + this.nap.y);
    this.p4 = new PIXI.Point(this.a.x + this.nap.x, this.a.y + this.nap.y);

    this.points = [this.p1.clone(), this.p2.clone(), this.p3.clone(), this.p4.clone()];
  }

  draw(graphics) {
    const g = graphics
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

  /**
   * 중점 좌표
   * @returns {PIXI.Point|*|svg.Point}
   */
  getCenter() {
    var pointSum = new PIXI.Point();

    for (var i = 0, point; i < this.points.length; ++i) {
      point = this.points[i];
      pointSum.x += point.x;
      pointSum.y += point.y;
    }
    return new PIXI.Point(pointSum.x / this.points.length,
      pointSum.y / this.points.length);
  }


  /**
   * 충돌 체크 (분리축이 없으면 충돌), !separationOnAxes
   * @param shape
   * @returns {*}
   */
  collidesWith(shape) {
    if (shape.radius) {
      return this.polygonCollidesWithCircle(this, shape);
    } else {
      return this.polygonCollidesWithPolygon(this, shape);
    }
  }

  /**
   * 투영
   * @param axis
   * @returns {Projection}
   */
  project(axis) {
    var scalars = [],
      v = new Vector();

    this.points.forEach(function (point) {
      v.x = point.x;
      v.y = point.y;
      scalars.push(v.dotProduct(axis));
    });

    return new Projection(Math.min.apply(Math, scalars),
      Math.max.apply(Math, scalars));
  }


  /**
   * 축 구하기 (edge에 노말을 축으로 합니다)
   * @returns {Array}
   */
  getAxes() {
    var v1 = new Vector(),
      v2 = new Vector(),
      axes = [];

    for (var i = 0; i < this.points.length - 1; i++) {
      v1.x = this.points[i].x;
      v1.y = this.points[i].y;

      v2.x = this.points[i + 1].x;
      v2.y = this.points[i + 1].y;

      // 모서리에서 수직인 노말(법선) 벡터를 만듭니다. (축 생성)
      axes.push(v1.edge(v2).perpendicular().normalize());
    }

    v1.x = this.points[this.points.length - 1].x;
    v1.y = this.points[this.points.length - 1].y;

    v2.x = this.points[0].x;
    v2.y = this.points[0].y;

    // 모서리에서 수직인 노말(법선) 벡터를 만듭니다. (축 생성)
    axes.push(v1.edge(v2).perpendicular().normalize());
    return axes;
  }

  move(dx, dy) {
    for (let i = 0; i < this.points.length; ++i) {
      let point = this.points[i];
      point.x += dx;
      point.y += dy;
    }
  }
}
import Shape from './Shape';
import Vector from '../Vector';
import Projection from './Projection';
import Painter from '../utils/Painter';


export default class Circle extends Shape {
  constructor(context, x, y, radius) {
    super();

    this.name = 'Circle';
    this.context = context;
    this.x = x;
    this.y = y;
    this.radius = radius;
  }


  /**
   * 중점 좌표 반환
   * @returns {PIXI.Point|*|svg.Point}
   */
  getCenter() {
    return new PIXI.Point(this.x, this.y);
  }


  collidesWith(shape) {
    if (shape.radius) {
      return this.polygonCollidesWithCircle(shape, this);
    } else {
      return this.circleCollidesWithCircle(this, shape);
    }
  }


  /*
  collidesWith(shape)
  {
      var axes = shape.getAxes(), distance;

      if (axes === undefined) { //원
          distance = Math.sqrt(
              Math.pow(shape.x - this.x, 2) +
              Math.pow(shape.y - this.y, 2));
          return distance < Math.abs(this.radius + shape.radius);
      }
      else {
          return this.polygonCollidesWithCircle(shape, this);
      }
  }
  */


  getPolygonPointClosestToCircle(polygon, circle) {
    let min = Number.MAX_VALUE,
      circleVector = Vector.fromObject(circle),
      length, testPointVector, closestPoint;

    for (var i = 0; i < polygon.points.length; i++) {
      testPointVector = Vector.fromObject(polygon.points[i]);
      testPointVector.index = i;
      length = testPointVector.clone().distance(circle);

      if (length < min) {
        min = length;
        closestPoint = testPointVector;
      }
    }

    return closestPoint.clone();
  }


  /**
   * 다각형과 원형 충돌 검사
   * @param polygon
   * @param circle
   * @returns {boolean}
   */

  /*polygonCollidesWithCircle(polygon, circle)
  {
      var min = Number.MAX_VALUE,
          axes = polygon.getAxes(),
          closestPoint = this.getPolygonPointClosestToCircle(polygon, circle);

      axes.push(this.getCircleAxis(circle, closestPoint));

      return !polygon.separationOnAxes(axes, circle);
  }*/


  getCircleAxis(circle, closestPoint) {
    var v1 = new Vector(circle.x, circle.y),
      v2 = new Vector(closestPoint.x, closestPoint.y),
      surfaceVector = v1.subtract(v2);

    Painter.drawPoint(window.g, closestPoint, false, 5, 0xff3300, 0.3);
    //Painter.drawLine(window.g, Vector.fromObject(circle), Vector.fromObject(closestPoint), false, 1, 0xff3300, 0.3);

    return surfaceVector.normalize();
  }


  project(axis) {
    let scalars = [],
      point = new PIXI.Point(this.x, this.y),
      pointVector = new Vector(point.x, point.y),
      dotProduct = pointVector.dotProduct(axis);

    scalars.push(dotProduct);
    scalars.push(dotProduct + this.radius);
    scalars.push(dotProduct - this.radius);

    return new Projection(
      Math.min.apply(Math, scalars),
      Math.max.apply(Math, scalars)
    );
  }


  getAxes() {
    return null;
  }


  createPath(graphics, lineColor = 0xFFFFFF) {
    graphics.lineStyle(1, lineColor);
    graphics.moveTo(this.x + this.radius, this.y);
    graphics.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  }


  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }


  isPointInPath(x, y) {
    this.context.save();
    this.context.save();
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    const isPointInPath = this.context.isPointInPath(x, y);
    this.context.restore();
    return isPointInPath;
  }
}


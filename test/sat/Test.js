import Point from '../../src/sat/Point';
import Circle from '../../src/sat/Circle';
import Polygon from '../../src/sat/Polygon';
import Vector from '../../src/Vector';
import Painter from '../../src/utils/Painter';
import Mouse from '../../src/utils/Mouse';
import KeyCode from '../../src/consts/KeyCode';

const graphics = new PIXI.Graphics()
  , debugGraphics = new PIXI.Graphics()
  , shapes = []
  , LINE_COLOR = 0x84D2F6
  , ARROW_COLOR = 0xE57373;

let polygonPoints = [
  [new Point(350, 350), new Point(350, 500), new Point(500, 500)],
  [new Point(500, 200), new Point(480, 250), new Point(600, 250), new Point(620, 200)],
  [new Point(258, 120), new Point(295, 230), new Point(200, 300), new Point(105, 230), new Point(142, 120)]
];

let debugPoints = [];

export default class Test extends PIXI.Container {
  constructor(renderer) {
    super();

    window['g'] = debugGraphics;

    this.isInit = false;
    this.interactive = true;
    this.renderer = renderer;
    this.canvas = this.renderer.view;
    this.context = this.canvas.getContext('2d');

    this.initialize();
  }


  initialize() {
    if (this.isInit) {
      return;
    }

    this.addChild(graphics);
    this.addChild(debugGraphics);

    this.mouseDownPoint = new PIXI.Point(0, 0);
    this.lastdrag = new PIXI.Point(0, 0);
    this.shapeBeingDragged = undefined;

    //this.createPolygon();
    this.createPolygonManual();

    this.addEvent();

    this.isInit = true;
  }


  addEvent() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.on('mousedown', this.onMouseDown);
    this.on('mousemove', this.onMouseMove);
    this.on('mouseup', this.onMouseUp);

    window.addEventListener('keyup', this.onKeyUp.bind(this));
  }


  update() {
  }


  resize() {
    this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
  }


  getPolygonPoints(tx, ty, angle, radius = 100) {
    const points = [];

    // making points, path
    for (let i = 0; i < angle; i++) {
      let x = tx + (radius * -Math.sin(this.toRadian(360 / angle * i)));
      let y = ty + (radius * Math.cos(this.toRadian(360 / angle * i)));
      let point = new PIXI.Point(x, y);
      points.push(point);
    }

    return points;
  }


  toRadian(degree) {
    return degree * Math.PI / 180;
  }


  createPolygon(useRandomRotate = false) {
    const context = this.context;

    for (let i = 0; i < polygonPoints.length; ++i) {
      let polygon = new Polygon(context),
        points = polygonPoints[i];

      points.forEach((point) => {
        polygon.addPoint(point.x, point.y);
      });

      if (useRandomRotate) {
        this.rotateShape(polygon, Math.random() * 45);
      }

      shapes.push(polygon);

      polygon.createPath(graphics, LINE_COLOR);
    }
  }


  createPolygonManual() {
    let radius = 100,
      diameter = 200,
      space = 20,
      a = radius + space,
      b = radius + diameter + space * 2,
      c = radius + diameter * 2 + space * 3;

    polygonPoints = [];
    // polygonPoints.push(this.getPolygonPoints(a, a, 3));
    polygonPoints.push(this.getPolygonPoints(b, a, 4));
    polygonPoints.push(this.getPolygonPoints(c, a, 4));
    // polygonPoints.push(this.getPolygonPoints(c, a, 5));
    // polygonPoints.push(this.getPolygonPoints(a, b, 6));
    // polygonPoints.push(this.getPolygonPoints(b, b, 7));
    // polygonPoints.push(this.getPolygonPoints(c, b, 8));
    // polygonPoints.push(this.getPolygonPoints(a, c, 9));
    // polygonPoints.push(this.getPolygonPoints(b, c, 10));
    // this.addCircle(c, c, radius);
    //this.addCircle(c, c, radius);

    this.createPolygon(true);
  }

  addPolygon(index, useRandomRotate = true) {
    let polygon = new Polygon(this.context);

    let points = polygonPoints[index];

    points.forEach((point) => {
      polygon.addPoint(point.x, point.y);
    });

    if (useRandomRotate) {
      this.rotateShape(polygon, (Math.random() * 45) * Math.PI / 180);
    }

    polygon.createPath(graphics, LINE_COLOR);
    shapes.push(polygon);
  }


  addCircle(x, y, radius) {
    let circle = new Circle(this.context, x, y, radius);
    circle.createPath(graphics, LINE_COLOR);
    shapes.push(circle);
    this.circle = circle;
  }


  updateRender() {
    graphics.clear();

    shapes.forEach((polygon) => {
      polygon.createPath(graphics, LINE_COLOR);
    });
  }


  detectCollisions() {
    let dragShape = this.shapeBeingDragged;

    if (!dragShape) {
      return;
    }

    shapes.forEach((shape) => {

      if (shape !== dragShape) {
        let mtv = dragShape.collidesWith(shape);

        // 충돌 판정
        if (this.collisionDetected(mtv)) {
          this.moveShapeByMTV(mtv, dragShape, shape);
        }
      }
    });
  }


  /**
   * mtv로 충돌 판정
   * @param mtv
   * @returns {boolean}
   */
  collisionDetected(mtv) {
    // 충돌 판정
    if (mtv.axis != undefined || mtv.overlap !== 0) {
      return true;
    }
    return false;
  }


  checkMTVAxisDirection(mtv, collider, collidee) {
    if (mtv.axis === undefined)
      return;

    let colliderCenter = Vector.fromObject(collider.getCenter()),
      collideeCenter = Vector.fromObject(collidee.getCenter()),
      centerVector = collideeCenter.subtract(colliderCenter),
      centerUnitVector = Vector.fromObject(centerVector).normalize();

    if (centerUnitVector.dotProduct(mtv.axis) > 0) {
      mtv.axis.x = -mtv.axis.x;
      mtv.axis.y = -mtv.axis.y;
    }
  };


  /**
   *
   * @param mtv
   * @param collider 충돌한 객체
   * @param collidee 충돌을 당한 객체
   */
  moveShapeByMTV(mtv, collider, collidee) {
    if (mtv.axis === undefined) {
      mtv.axis = new Vector(1, 1);
    }

    let dx = mtv.axis.x * mtv.overlap,
      dy = mtv.axis.y * mtv.overlap;

    let dragVector = this.dragVector,
      centerCollider = collider.getCenter(),
      centerCollidee = collidee.getCenter(),
      direction = new Vector(centerCollidee.x - centerCollider.x, centerCollidee.y - centerCollider.y),
      directionNorm = direction.norm(),
      overlapVector = new Vector(dx, dy);

    /**
     * 내적이 -1이면 반대 방향을 보는 것
     * 내적이 0이면 수직
     * 내적이 1인 경우 같은 방향을 가리키는 것
     * 내적이 > 0.8 다면 같은 방향을 보고 있는 상태
     */
    let dot = dragVector.dotProduct(overlapVector);

    if (dot < 0) {
      dx = -dx;
      dy = -dy;
    }

    let c = collidee.getCenter(),
      to = new Vector(dx, dy),
      toNormalize = to.clone().norm(),
      dotTo = directionNorm.dotProduct(toNormalize),
      center = new Vector(c.x, c.y);
    to = center.clone().subtract(to);

    // 두 객체의 방향 벡터와 밀어내는 백터(to)의 내적이 0보다 클 경우, 즉 밀어 내는 방향이 밀어내는 방향일 때만 적용
    if (dotTo >= 0) {
      Painter.drawArrow(window.g, center, to, false, 1, ARROW_COLOR);
      //Painter.drawPoint(window.g, this.circle.getCenter(), false, 10, 0xff3300, 0.2);
      collidee.move(dx, dy);
    }
  }


  rotateShape(shape, degrees) {
    shape.debugPoints = [];
    //degrees = 90;
    let points = shape.points;
    let debugPoints = shape.debugPoints;

    if (points) {
      let center = shape.getCenter();

      for (let i = 0; i < points.length; i++) {
        let point = points[i];
        points[i] = this.rotationPoint(center, point, degrees);
        debugPoints[i] = this.rotate(center, point, degrees);
      }
    }
  }


  /**
   * 회전하는 좌표 구하기
   * @param pivot 사각형의 중심점
   * @param point 계산하고 싶은 포인트
   * @param degrees 회전각 degrees
   * @returns {{x: (number|*), y: (number|*)}}
   */
  rotationPoint(pivot, point, degrees) {
    let diffX = point.x - pivot.x;
    let diffY = point.y - pivot.y;
    let dist = Math.sqrt(diffX * diffX + diffY * diffY);
    let ca = Math.atan2(diffY, diffX) * (180 / Math.PI);
    let na = ((ca + degrees) % 360) * (Math.PI / 180);
    let x = (pivot.x + dist * Math.cos(na) + 0.5) | 0;
    let y = (pivot.y + dist * Math.sin(na) + 0.5) | 0;
    return {x: x, y: y};
  }

  rotate(pivot, point, degrees) {
    const x = point.x;
    const y = point.y;
    const px = pivot.x;
    const py = pivot.y;
    const radian = this.toRadian(degrees);
    const cos = Math.cos(radian);
    const sin = Math.sin(radian);
    return {
      x: (x - px) * cos - (y - py) * sin + px,
      y: (y - py) * cos + (x - px) * sin + py
    };
  }

  onMouseDown() {
    debugGraphics.clear();

    let currentPoint = Vector.fromObject(Mouse.global);

    shapes.forEach((shape) => {
      if (shape.isPointInPath(currentPoint.x, currentPoint.y)) {
        this.shapeBeingDragged = shape;
        this.mouseDownPoint.x = currentPoint.x;
        this.mouseDownPoint.y = currentPoint.y;
        this.lastdrag.x = currentPoint.x;
        this.lastdrag.y = currentPoint.y;
      }
    });
  }


  onMouseMove() {
    debugGraphics.clear();

    let currentPoint, dragVector;

    if (this.shapeBeingDragged) {
      currentPoint = Vector.fromObject(Mouse.global);

      this.dragVector = dragVector = currentPoint.clone().subtract(this.lastdrag);

      this.shapeBeingDragged.move(dragVector.x, dragVector.y);

      this.lastdrag.x = currentPoint.x;
      this.lastdrag.y = currentPoint.y;

      this.detectCollisions();
      this.updateRender();
    }
  }


  onMouseUp() {
    debugGraphics.clear();
    this.shapeBeingDragged = undefined;
  }


  /////////////////////////////////////////////////////////////////////////////
  //
  // Test 함수
  //
  /////////////////////////////////////////////////////////////////////////////


  onKeyUp(e) {
    switch (e.keyCode) {
      case KeyCode.ESCAPE:
        console.clear();

        if (window.g) {
          window.g.clear();
        }

        break;
      case KeyCode.SPACE:
        //
        break;
      case KeyCode.NUMBER_1:
        //
        break;
      case KeyCode.NUMBER_2:
        //
        break;
    }
  }
}

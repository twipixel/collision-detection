import Vector from '../../src/Vector';
import Consts from '../../src/distance/Consts';
import ConvexHull from '../../src/convexhull/ConvexHull';
import KeyCode from '../../src/consts/KeyCode';
import Stage from '../../src/distance/Stage';

const TOTAL = 30
  , INTERVAL = 3000
  , SCALE = Consts.SCALE
  , STAGE = Consts.STAGE
  , W = STAGE.width
  , H = STAGE.height
  , HW = W / 2
  , HH = H / 2
  , TOP_LEFT = {x: 3, y: 3}
  , TOP_RIGHT = {x: 10, y: 10}
  , RAD_TO_DEG = 180 / Math.PI;

/*const LINE = [
    [new Vector(-4, -1), new Vector(1, 3)],
    [new Vector(1, 0), new Vector(0, 1)],
    [new Vector(-1, 0), new Vector(0, 1)],
    [new Vector(4, 0), new Vector(0, -4)],
    [new Vector(-6, 0), new Vector(0, -7)],
    [new Vector(7, 0), new Vector(0, 4)],
    [new Vector(-6, 0), new Vector(0, 1)]
];*/

const LINE = createRandomLine();

export default class Test extends PIXI.Container {
  constructor(renderer) {
    super();

    this.interactive = true;
    this.renderer = renderer;
    this.canvas = this.renderer.view;
    this.context = this.canvas.getContext('2d');

    this.initialize();
    this.addEvent();
  }

  initialize() {
    this.stage = new Stage();
    this.stage.x = HW;
    this.stage.y = HH;
    this.addChild(this.stage);
    this.next = this.next.bind(this);

    this.next();
  }

  initProperties() {
    const randomIndex = Math.floor(Math.random() * LINE.length);
    this.line = LINE[randomIndex];
    this.lineA = this.line[0];
    this.lineB = this.line[1];
    this.point = new Vector(0, 0);
  }

  addEvent() {
    this.keyUpListener = this.onKeyUp.bind(this);
    window.addEventListener('keyup', this.keyUpListener);

    this.mouseDownListener = this.onMouseDown.bind(this);
    this.on('mousedown', this.mouseDownListener);
  }

  draw() {
    this.clear();
    this.drawLine();
    this.drawPoint();
    this.drawAxes();
    this.drawDistance();
  }

  drawLine() {
    this.stage.drawLine(this.lineA, this.lineB);
  }

  drawPoint() {
    this.stage.drawPoint(this.point);
  }

  drawAxes() {
    this.stage.drawAxes();
  }

  drawDistance() {
    const dist = distance(this.lineA, this.lineB, this.point);
    this.stage.drawPoint(dist.distVec, 2, 0xFF3300, 0.9);
    this.stage.drawLine(new Vector(0, 0), dist.distVec, 1, 0xFF3300, 0.9);
  }

  clear() {
    this.stage.clear();
  }

  next() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.initProperties();
    this.draw();
    this.intervalId = setInterval(this.next, INTERVAL);
  }

  update() {
  }

  resize() {
    this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    this.draw();
  }

  onMouseDown() {
    this.next();
  }

  onKeyUp(e) {
    switch (e.keyCode) {
      case KeyCode.SPACE:
        this.next();
        break;
    }
  }
}


// 라인과 점 사이의 최소 거리 구하기
// http://blog.daum.net/gamza-net/12
// http://www.dyn4j.org/2010/04/gjk-distance-closest-points/
function distance(lineA, lineB, point) {
  // create the line
  const ab = new Vector(lineB.x - lineA.x, lineB.y - lineA.y);
  const ap = new Vector(point.x - lineA.x, point.y - lineA.y);
  // project AO onto AB
  const projApToAb = ap.dot(ab);
  const projAbToAb = ab.dot(ab);

  let distVec, distance;

  if (projApToAb < 0) {
    distVec = new Vector(lineA.x - point.x, lineA.y - point.y);
  } else if (projApToAb > projAbToAb) {
    distVec = new Vector(lineB.x - point.x, lineB.y - point.y);
  } else {
    // get the length squared
    const lengthSq = ab.dot(ab);
    // calculate the distance along AB
    const t = projApToAb / lengthSq;
    distVec = ab.multiplyScalar(t).add(lineA);
  }

  distance = distVec.magnitude();

  return {
    distVec,
    distance,
  };
}

function createRandomLine() {
  const list = []
    , random = 100 + Math.floor(Math.random() * 100);

  for (let i = 0; i < random; i++) {
    list.push([
      new Vector(ranSign() * ranX(), ranSign() * ranY()),
      new Vector(ranSign() * ranX(), ranSign() * ranY())]
    );
  }

  return list;
}

function ranX() {
  return Vector.randomizeX(TOP_LEFT, TOP_RIGHT);
}

function ranY() {
  return Vector.randomizeY(TOP_LEFT, TOP_RIGHT);
}

function ranSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

/**
 * 두벡터 사이각 구하기
 * @param a
 * @param b
 * @returns {number}
 */
function getAngle(a, b) {
  a = new Vector(a.x, a.y).norm();
  b = new Vector(b.x, b.y).norm();
  const radian = Math.acos(Vector.dotProduct(a, b));
  return radian * RAD_TO_DEG;
}

/**
 * 랜덤으로 좌표를 생성하고 convex hull 을 만들면 OK
 * @param polygon
 * @param total
 */
function createPolygons(polygon, total) {
  let vertices;
  const polygons = [];

  for (let i = 0; i < total; i++) {
    vertices = [];

    for (let j = 0; j < polygon; j++) {
      const vertex = Vector.randomize(TOP_LEFT, TOP_RIGHT);
      vertices.push(vertex);

      if (j === polygon - 1) {
        const convexHull = ConvexHull.generate(vertices);
        vertices = convexHull;
      }
    }

    polygons.push(vertices);
  }

  return polygons;
}

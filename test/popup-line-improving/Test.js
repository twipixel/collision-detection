import SubwayLines from '../../src/consts/SubwayLines';
import PointUtil from '../../src/utils/PointUtil';
import PastelColor from '../../src/utils/PastelColor';
import Line from '../../src/popup/Line';
import Popup from '../../src/popup/Popup';
import KeyCode from '../../src/consts/KeyCode';
import Point from '../../src/sat/Point';
import Points from '../../src/sat/Points';
import ConvexHull from '../../src/convexhull/ConvexHull';
import Gjk from '../../src/dyn4j/Gjk';
import Epa from '../../src/dyn4j/Epa';
import Penetration from '../../src/dyn4j/Penetration';
import History from '../../src/History';
import Polygon from '../../src/dyn4j/Polygon';
import Vector from '../../src/Vector';

let index = 0
  , testIndexNumber = 0;

const totalSubwayLines = SubwayLines.length
  , STAGE_WIDTH = 4081
  , STAGE_HEIGHT = 3308
  , POPUP_WIDTH = 260 + 460
  , POPUP_HEIGHT = 130 + 200
  , POPUP_COLOR = 0xFF3300
  , LINE_COLOR = PastelColor.generate().hex
  , LINE_SIZE = 20
  , SPACE = 5
  , gjk = new Gjk(new Epa())
  , penetration = new Penetration()
  , history = new History();

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
    this.collisionsPoints = new Points();
    this.debugGraphics = new PIXI.Graphics();
    this.popupGraphics = new PIXI.Graphics();
    this.addChild(this.debugGraphics);
    this.addChild(this.popupGraphics);
    this.drawOutLine();

    this.test();
    // this.testPoints();
  }

  clear() {
    if (this.debugGraphics) {
      this.debugGraphics.clear();
    }

    if (this.popupGraphics) {
      this.popupGraphics.clear();
    }
  }

  test() {
    this.clear();
    this.collisionsPoints.clear();
    const points = this.createPoints(index);
    this.createPopup(points);
    this.drawLine();

    testIndexNumber = index;
    index = index + 1;
    index = index > totalSubwayLines - 1 ? 0 : index;

    let count = 0
      , tryConvex = 3
      , maxLimit = 30;
    while (this.lineCollisions()) {
      count = count + 1;
      if (count % tryConvex === 0) {
        this.convexHullCollisions(count / tryConvex === 1);
      }
      if (count > maxLimit) {
        break;
      }
    }
    console.log(testIndexNumber, 'TEST COLLISIONS COUNT', count);
  }

  lineCollisions() {
    const lines = this.lines
      , collisions = []
      , popup = this.popup
      , popupGraphics = this.popupGraphics;

    lines.forEach(line => {
      const mtv = popup.collidesWith(line);

      if (mtv.overlap !== 0) {
        if (!mtv.axis) {
          mtv.axis = new Vector(1, 1);
        }
        collisions.push(line);
        const { a, b } = line;
        this.collisionsPoints.addPoint(new Point(a.x, a.y));
        this.collisionsPoints.addPoint(new Point(b.x, b.y));
      }
    });

    collisions.forEach(line => {
      const mtv = popup.collidesWith(line);
      if (mtv.overlap !== 0) {
        if (!mtv.axis) {
          mtv.axis = new Vector(1, 1);
        }
        const dx = mtv.axis.x * mtv.overlap
          , dy = mtv.axis.y * mtv.overlap;
        popup.move(dx, dy);
        this.drawPoints(popup.getPoints(), popupGraphics, 1, POPUP_COLOR, 0.1, true);
      }
    });

    if (collisions.length === 0) {
      this.drawPoints(popup.getPoints(), popupGraphics, 10, POPUP_COLOR, 0.8, true);
    }

    return collisions.length > 0;
  }

  convexHullCollisions(useInitPopupPoint = true) {
    const graphics = this.popupGraphics
      , linePolygon = this.getPolygon(this.collisionsPoints.getPoints())
      , popupPoints = useInitPopupPoint ? this.initPopupPoints.slice() : this.popup.getPoints()
      , popupPolygon = this.getPolygon(popupPoints)
      , isCollision = gjk.detect(linePolygon, popupPolygon, penetration, history);

    this.drawPoints(linePolygon.getPoints(), graphics, 5, 0x00FFFF, 0.5, true);

    if (isCollision) {
      const movement = Vector.multiplyScalar(penetration.normal, penetration.depth + LINE_SIZE + SPACE);
      const movedPopup = popupPolygon.getPoints().map(({ x, y }) => {
        return new Vector(x + movement.x, y + movement.y);
      });
      this.popup.setPoints(movedPopup);
      this.drawPoints(movedPopup, graphics, 10, 0x00FFFF, 0.8, true);
    }
  }

  getPolygon(points) {
    const vertices = this.getVertices(points)
      , convexHull = ConvexHull.generate(vertices);
    return new Polygon(convexHull)
  }

  getVertices(points) {
    if (!points) return null;
    const clone = points.slice();
    const vertices = clone.map(point => {
      return new Vector(point.x, point.y);
    });
    return vertices;
  }

  createPoints(index) {
    if (index >= totalSubwayLines) return;
    // index = parseInt(Math.random() * totalSubwayLines, 10);
    // index = totalSubwayLines - 1
    // index = 24
    const path = JSON.parse(SubwayLines[index]);

    this.paths = path.lines;
    this.points = path.points;
    return this.points.slice();
  }

  addEvent() {
    // 왜 안될까...
    document.addEventListener('keypress', (key) => {
      console.log(key);
      this.onKeyUp(key);
    });

    this.mouseDownListener = this.onMouseDown.bind(this);
    this.on('mousedown', this.mouseDownListener);
  }

  resize() {
    this.hitArea = new PIXI.Rectangle(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
    const PIXEL_RATIO = window.devicePixelRatio
      , SPACE = 0
      , SCREEN_WIDTH = this.canvas.width / PIXEL_RATIO - SPACE
      , SCREEN_HEIGHT = this.canvas.height / PIXEL_RATIO - SPACE
      , SCALE_X = SCREEN_WIDTH / STAGE_WIDTH
      , SCALE_Y = SCREEN_HEIGHT / STAGE_HEIGHT;

    // 꾸겨넣기
    this.scale.x = SCALE_X;
    this.scale.y = SCALE_Y;
  }

  drawLine() {
    const paths = this.paths
      , total = this.paths.length
      , alpha = 0.8
      , color = LINE_COLOR
      , lines = [];

    for (let i = 0; i < total; i += 1) {
      const path = paths[i]
        , a = path.a
        , b = path.b
        , line = new Line(path, LINE_SIZE);

      this.debugGraphics.lineStyle(5, color, alpha);
      this.debugGraphics.moveTo(a.x, a.y);
      this.debugGraphics.lineTo(b.x, b.y);

      line.draw(this.debugGraphics);
      lines.push(line);
    }

    this.lines = lines;
  }

  createPopup(points) {
    const center = PointUtil.getCenter(points);
    const popupPoints = [
      new PIXI.Point(center.x - POPUP_WIDTH / 2, center.y - POPUP_HEIGHT / 2),
      new PIXI.Point(center.x + POPUP_WIDTH / 2, center.y - POPUP_HEIGHT / 2),
      new PIXI.Point(center.x + POPUP_WIDTH / 2, center.y + POPUP_HEIGHT / 2),
      new PIXI.Point(center.x - POPUP_WIDTH / 2, center.y + POPUP_HEIGHT / 2)
    ];
    this.initPopupPoints = popupPoints.map(({ x, y }) => new Vector(x, y));
    this.popup = new Popup(popupPoints);
    this.drawPoints(popupPoints, this.popupGraphics, 10, 0xFFFFFF, 0.1, true);
  }

  drawPoints(points, graphics, thickness = 1, color = 0xFFFFFF, alpha = 0.8, closedPath = false) {
    if (!points || points.length === 0) return;
    const total = points.length
      , first = points[0];
    graphics.lineStyle(thickness, color, alpha);
    graphics.moveTo(first.x, first.y);
    for (let i = 0; i < total; i += 1) {
      const { x, y } = points[i];
      graphics.lineTo(x, y);
    }
    if (closedPath) graphics.lineTo(first.x, first.y);
    graphics.endFill();
  }

  drawOutLine() {
    this.outline = new PIXI.Graphics();
    this.outline.lineStyle(2, 0x5A9BEA);
    this.outline.drawRect(0, 0, 4081, 3308);
    this.addChild(this.outline);

    const side = 10
      , x = side
      , y = side
      , lt = new PIXI.Graphics()
      , rt = new PIXI.Graphics()
      , rb = new PIXI.Graphics()
      , lb = new PIXI.Graphics();

    lt.beginFill(0xFF3300);
    rt.beginFill(0xFF3300);
    rb.beginFill(0xFF3300);
    lb.beginFill(0xFF3300);
    lt.drawRect(0, 0, side, side);
    rt.drawRect(0, 0, side, side);
    rb.drawRect(0, 0, side, side);
    lb.drawRect(0, 0, side, side);
    lt.endFill();
    rt.endFill();
    rb.endFill();
    lb.endFill();
    lt.x = x;
    lt.y = y;
    rt.x = STAGE_WIDTH - x;
    rt.y = y;
    rb.x = STAGE_WIDTH - x;
    rb.y = STAGE_HEIGHT - y;
    lb.x = x;
    lb.y = STAGE_HEIGHT - y;
    this.addChild(lt);
    this.addChild(rt);
    this.addChild(rb);
    this.addChild(lb);
  }

  update() {
  }

  testPoints() {
    const points = new Points([
      new Point(10, 10),
      new Point(20, 10),
      new Point( 30, 10),
      new Point( 40, 10),
      new Point(0, 0),
      new Point(0, 10),
      new Point(0, 20)
    ]);
    points.addPoint(new Point(40, 10));
  }

  onMouseDown() {
    this.test();
  }

  onKeyUp() {
    switch (key.keyCode) {
      case KeyCode.ESCAPE:
        this.clear();
        console.clear();
        break;
      case KeyCode.SPACE:
        this.test();
        break;
    }
  }
}

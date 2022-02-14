import PastelColor from '../../src/utils/PastelColor';
import KeyCode from '../../src/consts/KeyCode';
import ConvexHull from '../../src/convexhull/ConvexHull';
import Point from '../../src/line/Point';
import LineSegment from '../../src/line/LineSegment';
import LineUtil from '../../src/line/LineUtil';
import Vector from '../../src/Vector';
import History from '../../src/History';
import Gjk from '../../src/dyn4j/Gjk';
import Epa from '../../src/dyn4j/Epa';
import Polygon from '../../src/dyn4j/Polygon';
import Penetration from '../../src/dyn4j/Penetration';

const POINTS = []
  , POPUP_POINTS = []
  , POPUP_LINE_SEGMENT = []
  , STAGE_WIDTH = 600
  , STAGE_HEIGHT = 450
  , POPUP_WIDTH = 105
  , POPUP_HEIGHT = 52
  , OUTLINE_COLOR = 0x5A9BEA
  , CONVEX_HULL_COLOR = 0xFF0000
  , LINE_COLOR = 0xFF0000
  , POPUP_COLOR = PastelColor.generate().hex
  , FIXED_POPUP_COLOR = PastelColor.generate().hex
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
    this.debugGraphics = new PIXI.Graphics();
    this.pointsGraphics = new PIXI.Graphics();
    this.convexHullGraphics = new PIXI.Graphics();
    this.convexHullGraphics.y = STAGE_HEIGHT;
    this.addChild(this.debugGraphics);
    this.addChild(this.pointsGraphics);
    this.addChild(this.convexHullGraphics);
    this.drawOutLine();

    this.pointsPopupGraphics = new PIXI.Graphics();
    this.convexHullPopupGrahics = new PIXI.Graphics();
    this.convexHullPopupGrahics.y = STAGE_HEIGHT;
    this.addChild(this.pointsPopupGraphics);
    this.addChild(this.convexHullPopupGrahics);
    this.drawPopup(this.pointsPopupGraphics, true);
    this.drawPopup(this.convexHullPopupGrahics);

    this.result1 = new PIXI.Graphics();
    this.result1.x = STAGE_WIDTH;
    this.result2 = new PIXI.Graphics();
    this.result2.x = STAGE_WIDTH;
    this.result2.y = STAGE_HEIGHT;
    this.addChild(this.result1);
    this.addChild(this.result2);
  }

  clear() {
    if (this.debugGraphics) {
      this.debugGraphics.clear();
    }

    if (this.popupGraphics) {
      this.removeChild(this.popupGraphics);
    }
  }

  addEvent() {
    this.mouseDownListener = this.onMouseDown.bind(this);
    this.on('mousedown', this.mouseDownListener);
  }

  resize() {
    this.hitArea = new PIXI.Rectangle(0, 0, STAGE_WIDTH, STAGE_HEIGHT * 2);
  }

  drawOutLine() {
    const graphics = this.outline = new PIXI.Graphics()
      , w = STAGE_WIDTH
      , h = STAGE_HEIGHT;
    graphics.lineStyle(2, OUTLINE_COLOR, 1);
    graphics.drawRect(0, 0, w * 2, h * 2);
    graphics.moveTo(0, h);
    graphics.lineTo(w * 2, h);
    graphics.moveTo(w, 0);
    graphics.lineTo(w, h * 2);
    this.addChild(this.outline);
  }

  drawPopup(graphics, createPoints = false) {
    const center = {x: STAGE_WIDTH / 2, y: STAGE_HEIGHT / 2}
      , x = graphics.x
      , y = graphics.y
      , w = POPUP_WIDTH
      , h = POPUP_HEIGHT;

    graphics.clear();
    graphics.lineStyle(1, POPUP_COLOR, 0.8);
    graphics.moveTo(0, 0);
    graphics.lineTo(w, 0);
    graphics.lineTo(w, h);
    graphics.lineTo(0, h);
    graphics.lineTo(0, 0);
    graphics.lineTo(w, h);
    graphics.moveTo(w, 0);
    graphics.lineTo(0, h);
    graphics.x = x + center.x - w / 2;
    graphics.y = y + center.y - h / 2;

    if (!createPoints) return;
    const lt = new Point(graphics.x, graphics.y);
    const rt = new Point(graphics.x + w, graphics.y);
    const rb = new Point(graphics.x + w, graphics.y + h);
    const lb = new Point(graphics.x, graphics.y + h);
    POPUP_POINTS.push(lt.clone());
    POPUP_POINTS.push(rt.clone());
    POPUP_POINTS.push(rb.clone());
    POPUP_POINTS.push(lb.clone());
    POPUP_LINE_SEGMENT.push(new LineSegment(lt.clone(), rt.clone())); // top line segment
    POPUP_LINE_SEGMENT.push(new LineSegment(rt.clone(), rb.clone())); // right line segment
    POPUP_LINE_SEGMENT.push(new LineSegment(rb.clone(), lb.clone())); // bottom line segment
    POPUP_LINE_SEGMENT.push(new LineSegment(lb.clone(), lt.clone())); // left line segment
  }

  drawLines() {
    const graphics = this.pointsGraphics
      , points = POINTS
      , total = POINTS.length;

    if (total < 1) return;
    graphics.clear();
    graphics.lineStyle(1, LINE_COLOR, 0.8);
    graphics.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < total; i += 1) {
      const {x, y} = points[i];
      graphics.lineTo(x, y);
    }
  }

  drawConvexHull(points, useClear = true, thickness = 1, color = CONVEX_HULL_COLOR, alpha = 1) {
    if (!points || points.length < 2) return;
    const clone = points.slice()
      , convexHull = ConvexHull.generate(clone)
      , graphics = this.convexHullGraphics;

    if (useClear) graphics.clear();
    graphics.lineStyle(thickness, color, alpha);
    graphics.moveTo(convexHull[0].x, convexHull[0].y);
    for (let i = 1, n = convexHull.length; i < n; i++) {
      graphics.lineTo(convexHull[i].x, convexHull[i].y);
    }
    graphics.lineTo(convexHull[0].x, convexHull[0].y);
  }

  getIntersections() {
    const total = POINTS.length;
    if (total < 2) return null;
    const popupLineSegments = POPUP_LINE_SEGMENT
      , points = POINTS.slice()
      , intersections = [];

    for (let i = 0; i < total - 1; i += 1) {
      const line = new LineSegment(points[i], points[i + 1]);
      for (let j = 0; j < 4; j += 1) {
        const popupLine = popupLineSegments[j]
          , intersection = LineUtil.intersection(line, popupLine);
        if (intersection) {
          intersections.push(points[i], points[i + 1]);
          break;
        }
      }
    }
    return intersections;
  }

  drawPoints(points, graphics, thickness = 1, color = 0xFFFFFF, alpha = 1, closePath = false) {
    if (!points || points.length === 0) return;
    const total = points.length
      , first = points[0];

    graphics.lineStyle(thickness, color, alpha);
    graphics.moveTo(first.x, first.y);
    for (let i = 1; i < total; i += 1) {
      const {x, y} = points[i];
      graphics.lineTo(x, y);
    }
    if (closePath) graphics.lineTo(first.x, first.y);
  }

  // 충돌된 선분만 convexHull 로 생성하여 GJK 적용
  drawResult1() {
    if (!this.intersections) return;
    const lineVertices = this.getVertices(this.intersections)
      , popupVertices = this.getVertices(POPUP_POINTS);
    if (!lineVertices || lineVertices.length === 0) return;

    const graphics = this.result1
      , popupConvexHull = ConvexHull.generate(popupVertices);

    graphics.clear();
    this.drawPoints(lineVertices, graphics, 1, LINE_COLOR, 0.8,);
    this.drawPoints(popupConvexHull, graphics, 1, POPUP_COLOR, 0.8, true);
  }

  drawResult2() {
    if (!this.intersections) return;
    const lineVertices = this.getVertices(this.intersections)
      , popupVertices = this.getVertices(POPUP_POINTS);
    if (!lineVertices || lineVertices.length === 0) return;

    const graphics = this.result2
      , lineConvexHull = ConvexHull.generate(lineVertices)
      , linePolygon = new Polygon(lineConvexHull)
      , popupConvexHull = ConvexHull.generate(popupVertices)
      , popupPolygon = new Polygon(popupConvexHull)
      , isCollision = gjk.detect(linePolygon, popupPolygon, penetration, history);

    graphics.clear();
    this.drawPoints(lineConvexHull, graphics, 1, LINE_COLOR, 0.8, true);
    this.drawPoints(popupConvexHull, graphics, 1, POPUP_COLOR, 0.8, true);

    if (isCollision) {
      const movement = Vector.multiplyScalar(penetration.normal, penetration.depth);
      // 충돌 후 팝업 위치
      const movedPopup = popupConvexHull.slice().map(({x, y}) => {
        return new Vector(x + movement.x, y + movement.y);
      });

      console.log('movedPopup', movedPopup);
      this.drawPoints(movedPopup, graphics, 1, FIXED_POPUP_COLOR, 0.8, true);
      return movedPopup;
    }
    return null;
  }

  generateConvexHull(points) {
    if (!points || points.length === 0) return;
    const total = points.length;
  }

  getVertices(points) {
    if (!points) return null;
    const clone = points.slice();
    const vertices = clone.map(point => {
      return new Vector(point.x, point.y);
    });
    return vertices;
  }

  update() {
    this.drawLines();
    this.intersections = this.getIntersections();
    this.drawConvexHull(this.intersections, true, 1, CONVEX_HULL_COLOR, 1);
    this.drawConvexHull(POINTS, false, 1, 0x00FFFF, 0.3);

    this.drawResult1();
    const movedPopup = this.drawResult2();

    if (movedPopup) {
      this.drawPoints(movedPopup, this.result1, 1, FIXED_POPUP_COLOR, 0.8, true);
    }
  }

  clear() {
    POINTS.length = 0;
    this.pointsGraphics.clear();
  }

  export() {
    console.log('export!');
    console.log(POINTS);
    console.log(JSON.stringify({points: POINTS}));
  }

  onMouseDown(event) {
    const {x, y} = event.data.global;
    POINTS.push({x, y});
  }

  onKeyUp(key) {
    switch (key.keyCode) {
      case KeyCode.ESCAPE:
        this.clear();
        break;
      case KeyCode.SPACE:
      case KeyCode.ENTER:
        this.export();
        break;

    }
  }
}

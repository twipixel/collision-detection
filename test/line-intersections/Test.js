import PastelColor from '../../src/utils/PastelColor';
import KeyCode from '../../src/consts/KeyCode';
import ConvexHull from '../../src/convexhull/ConvexHull';
import Point from '../../src/line/Point';
import LineSegment from '../../src/line/LineSegment';
import LineUtil from '../../src/line/LineUtil';

const POINTS = []
  , POPUP_POINTS = []
  , POPUP_LINE_SEGMENT = []
  , STAGE_WIDTH = 600
  , STAGE_HEIGHT = 450
  , POPUP_WIDTH = 105
  , POPUP_HEIGHT = 52
  , OUTLINE_COLOR = 0x5A9BEA
  , CONVEX_HULL_COLOR = 0xFF0000
  , LINE_COLOR = 0xFF0000;

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

    window.addEventListener('keyup', () => { console.log(arguments); });
  }

  resize() {
    this.hitArea = new PIXI.Rectangle(0, 0, STAGE_WIDTH, STAGE_HEIGHT * 2);
  }

  drawOutLine() {
    const graphics = this.outline = new PIXI.Graphics()
      , w = STAGE_WIDTH
      , h = STAGE_HEIGHT;
    graphics.lineStyle(2, OUTLINE_COLOR, 1);
    graphics.drawRect(0, 0, w, h * 2);
    graphics.moveTo(0, h);
    graphics.lineTo(w, h);
    graphics.moveTo(w, 0);
    graphics.lineTo(w, h * 2);
    this.addChild(this.outline);
  }

  drawPopup(graphics, createPoints = false) {
    const center = { x: STAGE_WIDTH / 2, y: STAGE_HEIGHT / 2 }
      , x = graphics.x
      , y = graphics.y
      , w = POPUP_WIDTH
      , h = POPUP_HEIGHT;

    graphics.clear();
    graphics.lineStyle(1, PastelColor.generate().hex, 0.8);
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
    const lb = new Point(graphics.x, graphics.y + h );
    POPUP_POINTS.push(lt.clone());
    POPUP_POINTS.push(rt.clone());
    POPUP_POINTS.push(rb.clone());
    POPUP_POINTS.push(lb.clone());
    POPUP_LINE_SEGMENT.push(new LineSegment(lt.clone(), rt.clone())); // top line segment
    POPUP_LINE_SEGMENT.push(new LineSegment(rt.clone(), rb.clone())); // right line segment
    POPUP_LINE_SEGMENT.push(new LineSegment(rb.clone(), lb.clone())); // bottom line segment
    POPUP_LINE_SEGMENT.push(new LineSegment(lb.clone(), lt.clone())); // left line segment
  }

  drawPoints() {
    const graphics = this.pointsGraphics
      , points = POINTS
      , total = POINTS.length;

    if (total < 1) return;
    graphics.clear();
    graphics.lineStyle(1, LINE_COLOR, 0.8);
    graphics.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < total; i += 1) {
      const { x, y } = points[i];
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

  update() {
    this.drawPoints();
    this.intersections = this.getIntersections();
    this.drawConvexHull(this.intersections, true, 1, CONVEX_HULL_COLOR, 1);
    this.drawConvexHull(POINTS, false,1, 0x00FFFF, 0.3);
  }

  clear() {
    POINTS.length = 0;
    this.pointsGraphics.clear();
  }

  export() {
    console.log('export!');
    console.log(POINTS);
    console.log(JSON.stringify({ points: POINTS }));
  }

  onMouseDown(event) {
    const { x, y } = event.data.global;
    POINTS.push(new Point(x, y));
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

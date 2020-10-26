import PastelColor from '../../src/utils/PastelColor';
import KeyCode from "../../src/consts/KeyCode";
import ConvexHull from "../../src/convexhull/ConvexHull";

const POINTS = []
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
    this.drawPopup(this.pointsPopupGraphics);
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
    this.addChild(this.outline);
  }

  drawPopup(graphics) {
    const center = { x: STAGE_WIDTH / 2, y: STAGE_HEIGHT / 2 };
    graphics.clear();
    graphics.lineStyle(1, PastelColor.generate().hex, 0.8);
    graphics.moveTo(0, 0);
    graphics.lineTo(POPUP_WIDTH, 0);
    graphics.lineTo(POPUP_WIDTH, POPUP_HEIGHT);
    graphics.lineTo(0, POPUP_HEIGHT);
    graphics.lineTo(0, 0);
    graphics.lineTo(POPUP_WIDTH, POPUP_HEIGHT);
    graphics.moveTo(POPUP_WIDTH, 0);
    graphics.lineTo(0, POPUP_HEIGHT);
    graphics.x = center.x - POPUP_WIDTH / 2;
    graphics.y = graphics.y + center.y - POPUP_HEIGHT / 2;
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

  drawConvexHull() {
    if (POINTS.length < 3) return;
    const clone = POINTS.slice()
      , convexHull = ConvexHull.generate(clone)
      , graphics = this.convexHullGraphics;
    graphics.clear();
    graphics.lineStyle(1, CONVEX_HULL_COLOR, 1);
    graphics.moveTo(convexHull[0].x, convexHull[0].y);
    for (let i = 1, n = convexHull.length; i < n; i++) {
      graphics.lineTo(convexHull[i].x, convexHull[i].y);
    }
    graphics.lineTo(convexHull[0].x, convexHull[0].y);
  }

  update() {
    this.drawPoints();
    this.drawConvexHull();
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
    POINTS.push({ x, y });
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

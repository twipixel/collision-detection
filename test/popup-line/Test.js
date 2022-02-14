import SubwayLines from '../../src/consts/SubwayLines';
import Vector from '../../src/Vector';
import PointUtil from '../../src/utils/PointUtil';
import PastelColor from '../../src/utils/PastelColor';
import Line from '../../src/popup/Line';
import Popup from '../../src/popup/Popup';
import KeyCode from "../../src/consts/KeyCode";

let index = 0
  , testIndexNumber = 0;

const totalSubwayLines = SubwayLines.length
  , STAGE_WIDTH = 4081
  , STAGE_HEIGHT = 3308
  , POPUP_WIDTH = 260 + 100
  , POPUP_HEIGHT = 130 + 100
  , POPUP_COLOR = 0xFF3300
  , LINE_COLOR = PastelColor.generate().hex;

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
    this.popupGraphics = new PIXI.Graphics();
    this.addChild(this.debugGraphics);
    this.addChild(this.popupGraphics);
    this.drawOutLine();

    this.test();
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
    const points = this.createPoints(index);
    this.createPopup(points);
    this.drawLine();

    testIndexNumber = index;
    index = index + 1;
    index = index > totalSubwayLines - 1 ? 0 : index;

    let count = 0
      , limit = 20;
    while (this.lineCollisions()) {
      count = count + 1;
      if (count > limit) break;
    }
    console.log(testIndexNumber, 'TEST COLLISIONS COUNT', count);
  }

  createPoints(index) {
    if (index >= totalSubwayLines) return;
    // index = parseInt(Math.random() * totalSubwayLines, 10);
    // index = totalSubwayLines - 1
    // index = 34
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
        , line = new Line(path, 20);

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
    this.popup = new Popup(popupPoints);
    this.drawPoints(popupPoints, this.popupGraphics, 10, 0xFFFFFF, 0.5, true);
  }

  drawPoints(points, graphics, thickness = 1, color = 0xFFFFFF, alpha = 0.8, closedPath = false) {
    if (!points || points.length === 0) return;
    const total = points.length
      , first = points[0];
    graphics.lineStyle(thickness, color, alpha);
    graphics.moveTo(first.x, first.y);
    for (let i = 0; i < total; i += 1) {
      const {x, y} = points[i];
      graphics.lineTo(x, y);
    }
    if (closedPath) graphics.lineTo(first.x, first.y);
    graphics.endFill();
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

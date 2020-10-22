import { PATH_COLLISION } from './const';
import Vector from '../../src/Vector';
import PointUtil from '../../src/utils/PointUtil';
import PastelColor from '../../src/utils/PastelColor';
import Line from '../../src/popup/Line';
import Popup from '../../src/popup/Popup';
import KeyCode from "../../src/consts/KeyCode";
import ConvexHull from "../../src/convexhull/ConvexHull";
import ConvexHullShape from '../../src/popup/ConvexHullShape';

const STAGE_WIDTH = 4081
  , STAGE_HEIGHT = 3308
  , POPUP_WIDTH = 260 + 100
  , POPUP_HEIGHT = 130 + 100;

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
    this.addChild(this.debugGraphics);

    this.testPath();
  }

  clear() {
    if (this.debugGraphics) {
      this.debugGraphics.clear();
    }

    if (this.popupGraphics) {
      this.removeChild(this.popupGraphics);
    }
  }

  testPath() {
    this.checkcount = 0;

    this.clear();
    this.updatePath();
    this.drawLine();
    this.drawPopup();
    this.drawOutLine();

    this.checkCollision();
  }

  updatePath() {
    const random = parseInt(Math.random() * PATH_COLLISION.length, 10)
      , last = PATH_COLLISION.length - 1;

    const path = JSON.parse(PATH_COLLISION[random]);
    this.paths = path.lines;
    this.points = path.points;
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
      , color = PastelColor.generate().hex
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

  redrawLine() {
    const lines = this.lines
      , total = this.lines.length
      , alpha = 0.8
      , color = PastelColor.generate().hex;

    for (let i = 0; i < total; i += 1) {
      const line = lines[i]
        , a = line.a
        , b = line.b;

      this.debugGraphics.lineStyle(5, color, alpha);
      this.debugGraphics.moveTo(a.x, a.y);
      this.debugGraphics.lineTo(b.x, b.y);
      line.draw(this.debugGraphics);
      lines.push(line);
    }

    this.lines = lines;
  }

  drawPopup() {
    const center = PointUtil.getCenter(this.points);
    const popupPoints = [
      new PIXI.Point(center.x - POPUP_WIDTH / 2, center.y - POPUP_HEIGHT / 2),
      new PIXI.Point(center.x + POPUP_WIDTH / 2, center.y - POPUP_HEIGHT / 2),
      new PIXI.Point(center.x + POPUP_WIDTH / 2, center.y + POPUP_HEIGHT / 2),
      new PIXI.Point(center.x - POPUP_WIDTH / 2, center.y + POPUP_HEIGHT / 2)
    ];

    this.popup = new Popup(popupPoints);
    const popupGraphics = this.popupGraphics = new PIXI.Graphics();
    popupGraphics.lineStyle(1, PastelColor.generate().hex, 0.8);
    popupGraphics.moveTo(0, 0);
    popupGraphics.lineTo(POPUP_WIDTH, 0);
    popupGraphics.lineTo(POPUP_WIDTH, POPUP_HEIGHT);
    popupGraphics.lineTo(0, POPUP_HEIGHT);
    popupGraphics.lineTo(0, 0);
    popupGraphics.lineTo(POPUP_WIDTH, POPUP_HEIGHT);
    popupGraphics.moveTo(POPUP_WIDTH, 0);
    popupGraphics.lineTo(0, POPUP_HEIGHT);
    popupGraphics.x = center.x - POPUP_WIDTH / 2;
    popupGraphics.y = center.y - POPUP_HEIGHT / 2;
    this.addChild(popupGraphics);
  }

  checkCollision() {
    if (this.checkcount > 20) {
      return;
    }

    this.checkcount += 1;

    if (this.collisions) {
      this.checkConvexHullCollision();
      return;
    }

    const lines = this.lines
      , collisions = []
      , popup = this.popup
      , popupGraphics = this.popupGraphics;

    lines.forEach(line => {
      const mtv = popup.collidesWith(line);

      if (mtv.axis != undefined || mtv.overlap !== 0) {
        if (mtv.axis === undefined) {
          mtv.axis = new Vector(1, 1);
        }

        const dx = mtv.axis.x * mtv.overlap
          , dy = mtv.axis.y * mtv.overlap;

        popup.move(dx, dy);
        popupGraphics.x += dx;
        popupGraphics.y += dy;
        collisions.push(line);
      }
    });

    this.collisions = collisions;

    if (collisions) {
      this.checkCollision();
    }
  }

  checkConvexHullCollision() {
    if (this.checkcount > 20) {
      return;
    }

    const collisions = this.collisions;
    this.collisions = null;

    let points = [];
    collisions.map(line => {
      points = points.concat(line.points);
    });

    if (points.length === 0) {
      return;
    }

    const convexHull = new ConvexHullShape(ConvexHull.generate(points));

    if (!convexHull.points || convexHull.points.length === 0) {
      return;
    }

    this.debugGraphics.clear();
    convexHull.draw(this.debugGraphics);

    const popup = this.popup
      , popupGraphics = this.popupGraphics
      , mtv = popup.collidesWith(convexHull);

    if (mtv.axis != undefined || mtv.overlap !== 0) {
      if (mtv.axis === undefined) {
        mtv.axis = new Vector(1, 1);
      }

      const dx = mtv.axis.x * mtv.overlap
        , dy = mtv.axis.y * mtv.overlap;

      popup.move(dx, dy);
      popupGraphics.x += dx;
      popupGraphics.y += dy;

      this.checkCollision();
    }
    this.redrawLine();
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
    this.testPath();
  }

  onKeyUp() {
    switch (key.keyCode) {
      case KeyCode.ESCAPE:
        this.clear();
        console.clear();
        break;
      case KeyCode.SPACE:
        this.testPath();
        break;
    }
  }
}

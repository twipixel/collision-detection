import { PATH } from './const';
import PointUtil from '../../src/utils/PointUtil';
import PastelColor from '../../src/utils/PastelColor';
import Line from '../../src/popup/Line';

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
    console.log('PATH', PATH.length);

    this.debugGraphics = new PIXI.Graphics();
    this.addChild(this.debugGraphics);

    const random = parseInt(Math.random() * PATH.length, 10)
      , last = PATH.length - 1;
    const path = JSON.parse(PATH[last]);
    this.lines = path.lines;
    this.points = path.points;

    this.drawLine();
    this.drawPopup();
    this.drawOutLine();
  }

  addEvent() {
  }

  update() {
  }

  resize() {
    // this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
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
    const lines = this.lines
      , total = this.lines.length
      , alpha = 0.8
      , color = PastelColor.generate().hex;

    for (let i = 0; i < total; i += 1) {
      const segement = lines[i]
        , a = segement.a
        , b = segement.b
        , line = new Line(segement, 20);

      this.debugGraphics.lineStyle(5, color, alpha);
      this.debugGraphics.moveTo(a.x, a.y);
      this.debugGraphics.lineTo(b.x, b.y);

      line.draw(this.debugGraphics);
    }
  }

  drawPopup() {
    const center = PointUtil.getCenter(this.points);
    const popup = new PIXI.Graphics();
    popup.beginFill(0x000000, 0.5);
    popup.drawRect(0, 0, POPUP_WIDTH, POPUP_HEIGHT);
    popup.endFill();
    popup.x = center.x - POPUP_WIDTH / 2;
    popup.y = center.y - POPUP_HEIGHT / 2;
    this.addChild(popup);
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
}
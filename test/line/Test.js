import Vector from '../../src/Vector';
import PastelColor from '../../src/utils/PastelColor';

const PIXEL_RATIO = window.devicePixelRatio;

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

    const w = this.canvas.width / PIXEL_RATIO
      , h = this.canvas.height / PIXEL_RATIO
      , space = 40
      , half = space / 2
      , defaultX = 50
      , defaultY = 50
      , x1 = half + parseInt(Math.random() * (w - space), 10)
      , y1 = half + parseInt(Math.random() * (h - space), 10)
      , x2 = half + parseInt(Math.random() * (w - space), 10) + defaultX
      , y2 = half + parseInt(Math.random() * (h - space), 10) + defaultY
      , a = { x: x1, y: y1 }
      , b = { x: x2, y: y2 };

    this.line = { x1: a.x, y1: a.y, x2: b.x, y2: b.y, a: a, b: b};

    this.drawLine();
  }

  addEvent() {
  }

  update() {
  }

  resize() {
    this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLine() {
    const a = Vector.fromObject(this.line.a)
      , b = Vector.fromObject(this.line.b)
      , ab = Vector.subtract(a, b)
      , ao = Vector.negate(a)
      , ap = Vector.tripleProduct(ab, ao, ab).norm().multiplyScalar(10)
      , nap = Vector.negate(ap);

    this.debugGraphics.lineStyle(1, PastelColor.generate().hex, 1);
    this.debugGraphics.moveTo(a.x, a.y);
    this.debugGraphics.lineTo(b.x, b.y);

    const alpha = 0.5
      , radius = 3
      , p1 = this.getCircle(PastelColor.generate().hex, alpha, radius)
      , p2 = this.getCircle(PastelColor.generate().hex, alpha, radius)
      , p3 = this.getCircle(PastelColor.generate().hex, alpha, radius)
      , p4 = this.getCircle(PastelColor.generate().hex, alpha, radius);

    p1.x = a.x + ap.x;
    p1.y = a.y + ap.y;

    p2.x = a.x + nap.x;
    p2.y = a.y + nap.y;

    p3.x = b.x + ap.x;
    p3.y = b.y + ap.y;

    p4.x = b.x + nap.x;
    p4.y = b.y + nap.y;

    this.addChild(p1);
    this.addChild(p2);
    this.addChild(p3);
    this.addChild(p4);

    // p1 -> p2 -> p4 -> p3 -> p1 으로 연결
    this.debugGraphics.lineStyle(1, 0xFFFFFF);
    this.debugGraphics.moveTo(p1.x, p1.y);
    this.debugGraphics.lineTo(p2.x, p2.y);
    this.debugGraphics.lineTo(p4.x, p4.y);
    this.debugGraphics.lineTo(p3.x, p3.y);
    this.debugGraphics.lineTo(p1.x, p1.y);
  }

  getCircle(color = PastelColor.generate().hex, alpha = 1, radius = 10) {
    const circle = new PIXI.Graphics();
    circle.beginFill(color, alpha);
    circle.drawCircle(0, 0, radius);
    circle.endFill();
    return circle;
  }
}
import Vector from '../Vector';
import PastelColor from '../utils/PastelColor';


export default class Point extends PIXI.Graphics {
  constructor(x = 0, y = 0, radius = 10, color = PastelColor.generate().hex, alpha = 0.5) {
    super();

    this.buttonMode = true;
    this.interactive = true;

    this.x = x;
    this.y = y;
    this.color = color;
    this.alpha = alpha;
    this.render(radius, color, alpha);
  }

  get vector() {
    return Vector.fromObject(this);
  }

  render(radius = 10, color = 0xff3300, alpha = 0.5) {
    this.clear();
    this.beginFill(color, alpha);
    this.drawCircle(0, 0, radius, color, alpha);
    this.endFill();
  }

  randomize(lt, rb) {
    const position = this.vector.randomize(lt, rb);
    this.x = position.x;
    this.y = position.y;
  }
}

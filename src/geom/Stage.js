import Consts from "../consts/Consts";
import PastelColor from "../utils/PastelColor";

const SCALE = Consts.SCALE
  , STAGE = Consts.STAGE
  , FONT_COLOR = '#FFFFFF'
  , AXES_LINE_COLOR = '0xFFFFFF'
  , CONVEX_HULL_LINE_COLOR = PastelColor.generate().hex;

export default class Stage extends PIXI.Container {
  constructor() {
    super();

    this.graphics = new PIXI.Graphics();
    this.addChild(this.graphics);

    this.drawAxes();
  }

  drawAxes() {
    const g = this.graphics
      , hw = STAGE.width / 2
      , hh = STAGE.height / 2;

    g.lineStyle(1, AXES_LINE_COLOR, 0.5);
    g.moveTo(-hw, 0);
    g.lineTo(hw, 0);
    g.moveTo(0, -hh);
    g.lineTo(0, hh);
  }

  clear() {
    this.graphics.clear();
  }

  destroy() {
    this.removeChild(this.graphics);
  }
}
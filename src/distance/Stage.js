import Consts from "../distance/Consts";

const STAGE = Consts.STAGE
    , SCALE = Consts.SCALE
    , W = STAGE.width
    , H = STAGE.height
    , HW = W / 2
    , HH = H / 2
    , LINE_COLOR = 0xFFFFFF
    , LINE_THICKNESS = 1
    , ALPHA = 0.5
    , ORIGIN_COLOR = 0xFFFFFF
    , DIST_COLOR = 0xFF3300
    , RADIUS = 2;

export default class Stage extends PIXI.Container {
    constructor() {
        super();

        this.initialize();
        this.drawAxes();
    }

    initialize() {
        this.graphics = new PIXI.Graphics();
        this.addChild(this.graphics);
    }

    drawLine(lineA, lineB, thickenss = LINE_THICKNESS, color = LINE_COLOR, alpha = ALPHA) {
        lineA = lineA.clone().multiplyScalar(SCALE);
        lineB = lineB.clone().multiplyScalar(SCALE);

        const g = this.graphics;
        g.lineStyle(thickenss, color, alpha);
        g.moveTo(lineA.x, lineA.y);
        g.lineTo(lineB.x, lineB.y);
    }

    drawPoint(point, radius = RADIUS, color = ORIGIN_COLOR, alpha = ALPHA) {
        point = point.clone().multiplyScalar(SCALE);

        const g = this.graphics;
        g.beginFill(color, alpha);
        g.drawCircle(point.x, point.y, radius, color, alpha);
        g.endFill();
    }

    drawAxes() {
        const g = this.graphics;
        g.lineStyle(LINE_THICKNESS, LINE_COLOR, ALPHA);
        g.moveTo(-HW, 0);
        g.lineTo(HW, 0);
        g.moveTo(0, -HH);
        g.lineTo(0, HH);
    }

    clear() {
        this.graphics.clear();
    }

    get g() {
        return this.graphics;
    }
}
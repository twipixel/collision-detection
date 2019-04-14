import { PATH } from './const';
import Line from '../../src/popup/Line';

const STAGE_WIDTH = 4081
    , STAGE_HEIGHT = 3308;


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
        console.log('PATH', PATH);
        this.lines = [];
        this.debugGraphics = new PIXI.Graphics();
        this.addChild(this.debugGraphics);

        this.outline = new PIXI.Graphics();
        this.outline.lineStyle(2, 0x5A9BEA);
        this.outline.drawRect(0, 0, 4081, 3308);
        this.addChild(this.outline);
        this.drawLine(PATH[4]);
    }

    addEvent() {
    }

    update() {
    }

    resize() {
        // this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
        this.scale.x = this.canvas.width / STAGE_WIDTH;
        this.scale.y = this.scale.x;
    }

    drawLine(str) {
        const lines = JSON.parse(str);

        const total = lines.length
            , lastPoint = new PIXI.Point(lines[0].x1, lines[0].y1);

        this.debugGraphics.lineStyle(10, 0xFF3300);

        console.log(lines);

        for (let i = 0; i < total; i += 1) {
            const line = lines[i]
                , p1 = new PIXI.Point(line.x1, line.y1)
                , p2 = new PIXI.Point(line.x2, line.y2)
                , c1 = new PIXI.Graphics()
                , c2 = new PIXI.Graphics();
            c1.lineStyle(2, 0x00FF00);
            c1.beginFill(0x00FF00)
            c1.drawCircle(p1.x, p1.y, 5);
            c1.endFill();
            this.addChild(c1);

            c2.lineStyle(2, 0x0000FF);
            c2.beginFill(0x0000FF);
            c2.drawCircle(p2.y, p2.y, 5);
            c2.endFill();
            this.addChild(c2);

            this.debugGraphics.moveTo(lastPoint.x, lastPoint.y);
            this.debugGraphics.lineTo(line.x1, line.y1);
            this.debugGraphics.lineTo(line.x2, line.y2);
            lastPoint.x = line.x2;
            lastPoint.y = line.y2;
            console.log(i, line);
        }

    }


}
import { PATH } from './const';



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
        this.drawLine(PATH[0]);
    }

    addEvent() {
    }

    update() {
    }

    resize() {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    }

    drawLine(str) {
        const lines = JSON.parse(str);

        console.log('drawLine', str);
        console.log('lines', lines);


        let lineShape;

        lines.forEach(line => {
           console.log('line', line);
           lineShape = new Line(line);
        });
    }


}
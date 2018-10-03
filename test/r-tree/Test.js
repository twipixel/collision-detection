import KeyCode from "../../src/consts/KeyCode";

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
    }

    addEvent() {
        this.keyUpListener = this.onKeyUp.bind(this);
        window.addEventListener('keyup', this.keyUpListener);

        this.mouseDownListener = this.onMouseDown.bind(this);
        this.on('mousedown', this.mouseDownListener);
    }

    update() {}

    resize() {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    }

    onMouseDown() {
    }

    onKeyUp(e) {
        switch (e.keyCode) {
            case KeyCode.SPACE:
                break;
        }
    }
}
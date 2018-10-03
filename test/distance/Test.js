import Vector from '../../src/Vector';
import Consts from '../../src/gjk/Consts';
import ConvexHull from '../../src/convexhull/ConvexHull';
import KeyCode from "../../src/consts/KeyCode";

const TOTAL = 30
    , INTERVAL = 600000
    , SCALE = Consts.SCALE
    , STAGE = Consts.STAGE
    , TOP_LEFT = {x: 2, y: 2}
    , TOP_RIGHT = {x: 17, y: 17}
    , RAD_TO_DEG = 180 / Math.PI;

const LINE = [
    [new Vector(1, 0), new Vector(0, 1)],
    [new Vector(-1, 0), new Vector(0, 1)],
    [new Vector(4, 0), new Vector(0, -4)],
    [new Vector(-6, 0), new Vector(0, -7)],
    [new Vector(7, 0), new Vector(0, 4)],
    [new Vector(-6, 0), new Vector(0, 1)]
];


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
        this.next();
    }

    addEvent() {
        this.keyUpListener = this.onKeyUp.bind(this);
        window.addEventListener('keyup', this.keyUpListener);

        this.mouseDownListener = this.onMouseDown.bind(this);
        this.on('mousedown', this.mouseDownListener);
    }

    display() {
        this.clear();
        this.displayDistance();
    }

    clear() {

    }

    displayDistance() {

    }

    next() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.displayCollision();
        this.display = this.displayCollision.bind(this);
        this.intervalId = setInterval(this.displayCollision, INTERVAL);
    }

    update() {
    }

    resize() {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    }

    onMouseDown() {
        this.next();
    }

    onKeyUp(e) {
        switch (e.keyCode) {
            case KeyCode.SPACE:
                this.next();
                break;
        }
    }
}


/**
 * 두벡터 사이각 구하기
 * @param a
 * @param b
 * @returns {number}
 */
function getAngle(a, b) {
    a = new Vector(a.x, a.y).norm();
    b = new Vector(b.x, b.y).norm();
    const radian = Math.acos(Vector.dotProduct(a, b));
    return radian * RAD_TO_DEG;
}


/**
 * 랜덤으로 좌표를 생성하고 convex hull 을 만들면 OK
 * @param polygon
 * @param total
 */
function createPolygons(polygon, total) {
    let vertices;
    const polygons = [];

    for (let i = 0; i < total; i++) {
        vertices = [];

        for (let j = 0; j < polygon; j++) {
            const vertex = Vector.randomize(TOP_LEFT, TOP_RIGHT);
            vertices.push(vertex);

            if (j === polygon - 1) {
                const convexHull = ConvexHull.generate(vertices);
                vertices = convexHull;
            }
        }

        polygons.push(vertices);
    }

    return polygons;
}

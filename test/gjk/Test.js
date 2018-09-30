import Vector from '../../src/Vector';
import Shape from '../../src/gjk/Shape';
import Vertices from '../../src/gjk/Vertices';
import GJK from '../../src/gjk/GJK';
import ConvexHull from '../../src/convexhull/ConvexHull';
import KeyCode from "../../src/consts/KeyCode";

const SCALE = 20;
const TOTAL = 30;
const INTERVAL = 600000;
const TOP_LEFT = {x: 2, y: 2};
const TOP_RIGHT = {x: 30, y: 30};

// const triangles = createPolygons(3, TOTAL);
// const rectangles = createPolygons(4, TOTAL);

const triangles = [
    [new Vector(3, 1), new Vector(3, 5), new Vector(6, 4)]
];
const rectangles = [
    [new Vector(8, 1), new Vector(8, 5), new Vector(11, 5), new Vector(11, 1)]
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
        this.shapes = [];
        this.next();
    }

    addEvent() {
        this.keyUpListener = this.onKeyUp.bind(this);
        window.addEventListener('keyup', this.keyUpListener);

        this.mouseDownListener = this.onMouseDown.bind(this);
        this.on('mousedown', this.mouseDownListener);
    }

    displayCollision() {
        this.clear();
        this.checkCollision();
    }

    clear() {
        this.shapes.forEach((shape) => {
            this.removeChild(shape);
            shape.destroy();
        });

        this.shapes.length = 0;
        this.shapes = [];
    }

    checkCollision() {
        const index1 = Math.floor(Math.random() * triangles.length)
            , index2 = Math.floor(Math.random() * rectangles.length)
            , vertices1 = new Vertices(triangles[index1])
            , vertices2 = new Vertices(rectangles[index2]);

        vertices1.multiply(SCALE);
        vertices2.multiply(SCALE);

        const shape1 = new Shape(vertices1.vertices, SCALE)
            , shape2 = new Shape(vertices2.vertices, SCALE);
        this.addChild(shape1);
        this.addChild(shape2);

        this.shapes.push(shape1);
        this.shapes.push(shape2);

        vertices1.divide(SCALE);
        vertices2.divide(SCALE);

        console.log('isCollision: ', GJK.checkCollision(vertices1.vertices, vertices2.vertices));
    }

    next() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.displayCollision();
        this.displayCollision = this.displayCollision.bind(this);
        this.intervalId = setInterval(this.displayCollision, INTERVAL);
    }

    update() {}

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

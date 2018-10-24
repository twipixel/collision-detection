import Vector from '../../src/Vector';
import Point from '../../src/geom/Point';
import Shape from '../../src/gjk/Shape';
import Consts from '../../src/gjk/Consts';
import Vertices from '../../src/gjk/Vertices';
import Separation from '../../src/gjk/Separation';
import GJK from '../../src/gjk/GJK';
import ConvexHull from '../../src/convexhull/ConvexHull';
import MinkowskiDifference from '../../src/gjk/MinkowskiDifference';
import KeyCode from "../../src/consts/KeyCode";

const TOTAL = 30
    , INTERVAL = 600000
    , SCALE = Consts.SCALE
    , STAGE = Consts.STAGE
    , TOP_LEFT = {x: 2, y: 2}
    , TOP_RIGHT = {x: 17, y: 17}
    , RAD_TO_DEG = 180 / Math.PI;

const triangles = createPolygons(3, TOTAL);
const rectangles = createPolygons(4, TOTAL);

/*const triangles = [
    // [new Vector(3, 1), new Vector(3, 5), new Vector(6, 4)],
    [new Vector(4, 11), new Vector(4, 5), new Vector(9, 9)],
    // [new Vector(0, -1), new Vector(3, 1), new Vector(1, 3)],
];
const rectangles = [
    // [new Vector(8, 1), new Vector(8, 5), new Vector(11, 5), new Vector(11, 1)],
    [new Vector(5, 7), new Vector(7, 3), new Vector(10, 2), new Vector(12, 7)],
    // [new Vector(2, -2), new Vector(5, -1), new Vector(4, 2), new Vector(1, 1)],
];*/


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
        this.points = [];
        this.graphics = new PIXI.Graphics();
        this.addChild(this.graphics);
        this.display = this.displayCollision.bind(this);
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
        this.shapes.forEach(shape => {
            this.removeChild(shape);
            shape.destroy();
        });

        this.points.forEach(point => {
            this.removeChild(point);
            point.destroy();
        });

        this.shapes.length = 0;
        this.shapes = [];

        this.points.length = 0;
        this.points = [];

        if (!this.minkowski) {
            return;
        }

        this.removeChild(this.minkowski);
        this.minkowski.destroy();

        this.graphics.clear();
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
        this.minkowski = new MinkowskiDifference(vertices1.vertices, vertices2.vertices);
        this.minkowski.x = (STAGE.width / 3) * 2;
        this.minkowski.y = (STAGE.height / 3) * 2;

        this.addChild(shape1);
        this.addChild(shape2);
        this.addChild(this.minkowski);

        this.shapes.push(shape1);
        this.shapes.push(shape2);

        vertices1.divide(SCALE);
        vertices2.divide(SCALE);

        const separation = new Separation();
        const isDistance = GJK.distance(vertices1.vertices, vertices2.vertices, separation);

        if (isDistance) {
            const p1 = new Point(0, 0, 3)
                , p2 = new Point(0, 0, 3)
                , point1 = Vector.multiplyScalar(separation.point1, SCALE)
                , point2 = Vector.multiplyScalar(separation.point2, SCALE)
                , arrow = Vector.multiplyScalar(separation.normal, separation.distance).multiplyScalar(SCALE)
                , direction1 = Vector.add(point1, arrow)
                , direction2 = Vector.add(point2, arrow);

            p1.x = point1.x;
            p1.y = point1.y;
            p2.x = point2.x;
            p2.y = point2.y;
            this.addChild(p1);
            this.addChild(p2);
            this.points.push(p1);
            this.points.push(p2);

            this.graphics.lineStyle(2, p1.color, p1.alpha);
            this.graphics.moveTo(p1.x, p1.y);
            this.graphics.lineTo(direction1.x, direction1.y);
        }

        console.log('distance', isDistance);
        console.log('separation', separation);
    }

    testClosetPointToOrigin() {
        // d = 1.71
        const a = new Vector(-4, -1)
            , b = new Vector(1, 3);
        console.log(GJK.closestPointToOrigin(a, b));
    }

    next() {
        console.clear();

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.display();
        this.intervalId = setInterval(this.display, INTERVAL);
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

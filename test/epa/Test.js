import Vector from '../../src/Vector';
import History from '../../src/History';
import Shape from '../../src/gjk/Shape';
import Consts from '../../src/gjk/Consts';
import Vertices from '../../src/gjk/Vertices';
import ConvexHull from '../../src/convexhull/ConvexHull';
import MinkowskiDifference from '../../src/gjk/MinkowskiDifference';
import Gjk from '../../src/dyn4j/Gjk';
import Epa from '../../src/dyn4j/Epa';
import Polygon from '../../src/dyn4j/Polygon';
import KeyCode from "../../src/consts/KeyCode";
import PastelColor from '../../src/utils/PastelColor';
import Penetration from '../../src/dyn4j/Penetration';
import Painter from '../../src/utils/Painter';


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

/*const errorCase1 = [
    // [new Vector(2, 7), new Vector(12, 3), new Vector(12, 17)],
    // [new Vector(8, 8), new Vector(10, 7), new Vector(14, 8)],
    [new Vector(10, 13), new Vector(14, 15), new Vector(11, 14)],
];

const errorCase2 = [
    // [new Vector(14, 2), new Vector(17, 2), new Vector(14, 7), new Vector(9, 7)],
    // [new Vector(7, 5), new Vector(15, 10), new Vector(16, 11), new Vector(15, 14)],
    [new Vector(9, 8), new Vector(14, 15), new Vector(4, 15), new Vector(3, 12)],
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
        this.shapes.forEach((shape) => {
            this.removeChild(shape);
            shape.destroy();
        });

        this.shapes.length = 0;
        this.shapes = [];

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
            , vertices2 = new Vertices(rectangles[index2])
            , penetrationColor = 0xFF3300
            , penetrationAlpha = 0.7;

        /*const index1 = Math.floor(Math.random() * errorCase1.length)
            , index2 = Math.floor(Math.random() * errorCase2.length)
            , vertices1 = new Vertices(errorCase1[index1])
            , vertices2 = new Vertices(errorCase2[index2]);*/

        vertices1.multiply(SCALE);
        vertices2.multiply(SCALE);

        const shape1 = new Shape(vertices1.vertices)
            , shape2 = new Shape(vertices2.vertices)
            , shape3 = new Shape(vertices2.clone(), penetrationColor, penetrationAlpha);

        this.minkowski = new MinkowskiDifference(vertices1.vertices, vertices2.vertices);
        this.minkowski.x = (STAGE.width / 3) * 2;
        this.minkowski.y = (STAGE.height / 3) * 2;

        this.addChild(shape1);
        this.addChild(shape2);
        this.addChild(shape3);
        this.addChild(this.minkowski);

        this.shapes.push(shape1);
        this.shapes.push(shape2);
        this.shapes.push(shape3);

        vertices1.divide(SCALE);
        vertices2.divide(SCALE);

        const polygon1 = new Polygon(vertices1.vertices)
            , polygon2 = new Polygon(vertices2.vertices);

        const gjk = new Gjk(new Epa())
            , penetration = new Penetration()
            , history = new History();
        
        const isCollision = gjk.detect(polygon1, polygon2, penetration, history)
            , arrow = Vector.multiplyScalar(penetration.normal, penetration.depth).multiplyScalar(SCALE);

        this.graphics.x = this.minkowski.x;
        this.graphics.y = this.minkowski.y;
        this.graphics.lineStyle(2, penetrationColor, penetrationAlpha);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(arrow.x, arrow.y);

        shape3.x = arrow.x;
        shape3.y = arrow.y;
        if (!isCollision) {
            shape3.visible = false;
        }

        console.log('polygon1', polygon1);
        console.log('polygon2', polygon2);
        console.log('isCollision', isCollision);
        console.log('penetration', penetration);
    }

    next() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.display();
        this.intervalId = setInterval(this.display, INTERVAL);
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

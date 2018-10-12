import Vector from '../../src/Vector';
import Shape from '../../src/gjk/Shape';
import Consts from '../../src/consts/Consts';
import Vertices from '../../src/gjk/Vertices';
import ConvexHull from '../../src/convexhull/ConvexHull';
import Stage from '../../src/geom/Stage';
import KeyCode from "../../src/consts/KeyCode";
import Painter from "../../src/utils/Painter";
import PastelColor from '../../src/utils/PastelColor';
import MinkowskiDifference from "../../src/gjk/MinkowskiDifference";
import Gjk from "../../src/dyn4j/Gjk";
import Penetration from "../../src/dyn4j/Penetration";
import History from "../../src/History";
import Polygon from "../../src/dyn4j/Polygon";

const TOTAL = 30
    , INTERVAL = 600000
    , SCALE = Consts.SCALE
    , STAGE = Consts.STAGE
    , TOP_LEFT = {x: -12, y: -12}
    , TOP_RIGHT = {x: 12, y: 12}
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
        this.display = this.display.bind(this);
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
        this.displayPrep();
    }

    clear() {
        this.shapes.forEach((shape) => {
            this.removeChild(shape);
            shape.destroy();
        });

        this.shapes.length = 0;
        this.shapes = [];

        if (!this.stage) {
            return;
        }
        this.removeChild(this.stage);
        this.stage.destroy();
    }

    displayPrep() {
        const index1 = Math.floor(Math.random() * triangles.length)
            , index2 = Math.floor(Math.random() * rectangles.length)
            , vertices1 = new Vertices(triangles[index1])
            , vertices2 = new Vertices(rectangles[index2]);

        const polygon1 = new Polygon(vertices1.vertices)
            , polygon2 = new Polygon(vertices2.vertices);

        const gjk = new Gjk()
            , penetration = new Penetration()
            , history = new History();

        const isCollision = gjk.detect(polygon1, polygon2, penetration, history);
        
        console.log('       [COLLISION]', isCollision);

        if (history.simplex.length !== 3) {
            return;
        }

        const vertices = new Vertices(history.simplex);
        const directions = history.directions;
        vertices.multiply(SCALE);

        this.stage = new Stage();
        this.stage.x = STAGE.width / 2;
        this.stage.y = STAGE.height / 2;
        this.addChild(this.stage);

        const shape = new Shape(vertices.vertices, SCALE);
        this.stage.addChild(shape);
        this.shapes.push(shape);

        vertices.vertices.forEach((vertex, index) => {
            let label = 'c';

            if (index === 1) {
                label = 'b'
            } else if (index === 2) {
                label = 'a'
            }

            const text = new PIXI.Text(label, {
                align: 'center',
                font: '12px',
                fill: '#FFFFFF',
            });
            text.x = vertex.x - text.width * 2;
            text.y = vertex.y;
            this.stage.addChild(text);
        });

        const ARROW_SCALE = 0.000001;
        const simplex = vertices.vertices;
        const a = simplex[simplex.length - 1];
        const d = directions[simplex.length - 1];
        // this is the same as a.to(ORIGIN);
        const ao = Vector.negate(a);
        // then we have a triangle
        const b = simplex[1];
        const c = simplex[0];
        // get the edges
        const ab = a.to(b);
        const ac = a.to(c);
        const acPerp = Vector.tripleProduct(ab, ac, ac);
        const abPerp = Vector.tripleProduct(ac, ab, ab);
        const acLocation = acPerp.dot(ao);
        const abLocation = abPerp.dot(ao);

        console.log('a.dot(d)', a.dot(d));
        console.log('ao', ao);
        console.log('acLocation', acLocation);
        console.log('abLocation', abLocation);

        /**
         * 삼각형 안에 원점이 포함 여부 체크
         * 1. simplex a 가 원점을 지나고 a.dot(direction) < 0
         * 2. ac 수직선분 안쪽에 원점이 있고 acPerp.dot(ao) < 0
         * 3. ab 수직선분 안쪽에 원점이 있으면 포함 abPerp.dot(ao) < 0
         */
        Painter.drawDirection(
            this.stage.graphics, a, d,
            false, 1, PastelColor.generate().hex, 0.7, 0.005);

        Painter.drawDirection(
            this.stage.graphics,
            new Vector(a.x + ac.x / 2, a.y + ac.y / 2),
            acPerp, false, 1, PastelColor.generate().hex, 0.7, ARROW_SCALE);

        Painter.drawDirection(
            this.stage.graphics,
            new Vector(a.x + ab.x / 2, a.y + ab.y / 2),
            abPerp, false, 1, PastelColor.generate().hex, 0.7, ARROW_SCALE);

        vertices.divide(SCALE);
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

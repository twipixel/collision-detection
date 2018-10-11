import Vector from '../../src/Vector';
import Shape from '../../src/gjk/Shape';
import Consts from '../../src/consts/Consts';
import Vertices from '../../src/gjk/Vertices';
import ConvexHull from '../../src/convexhull/ConvexHull';
import Stage from '../../src/geom/Stage';
import KeyCode from "../../src/consts/KeyCode";
import Painter from "../../src/utils/Painter";
import PastelColor from '../../src/utils/PastelColor';
import Epsilon from "../../src/dyn4j/Epsilon";

const TOTAL = 30
    , INTERVAL = 600000
    , SCALE = Consts.SCALE
    , STAGE = Consts.STAGE
    , TOP_LEFT = {x: -12, y: -12}
    , TOP_RIGHT = {x: 12, y: 12}
    , RAD_TO_DEG = 180 / Math.PI;

const triangles = createPolygons(3, TOTAL);

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
        const index = Math.floor(Math.random() * triangles.length)
            , vertices = new Vertices(triangles[index]);

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

        const ARROW_SCALE = 0.00001;
        const simplex = vertices.vertices;
        const a = simplex[simplex.length - 1];
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

        console.log('ao', ao);
        console.log('acLocation', acLocation);
        console.log('abLocation', abLocation);

        Painter.drawDirection(
            this.stage.graphics, new Vector(), Vector.negate(a),
            false, 1, PastelColor.generate().hex, 0.7, 0.1);

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

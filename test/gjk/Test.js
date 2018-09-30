import Vector from '../../src/Vector';
import Shape from '../../src/gjk/Shape';
import Vertices from '../../src/gjk/Vertices';
import GJK from '../../src/gjk/GJK';
import ConvexHull from '../../src/convexhull/ConvexHull';

const SCALE = 20;
const TOTAL = 30;
const INTERVAL = 5000;
const TOP_LEFT = {x: 2, y: 2};
const TOP_RIGHT = {x: 30, y: 30};

/*
const triangles = [
    [new Vector(4, 11), new Vector(9, 9), new Vector(4, 5)],
    [new Vector(0, 5), new Vector(10, 7), new Vector(8, 8)],
    [new Vector(14, 14), new Vector(8, 8), new Vector(12, 5)],
    [new Vector(12, 3), new Vector(15, 6), new Vector(18, 2)],
    [new Vector(11, 12), new Vector(5, 16), new Vector(11, 16)],
    [new Vector(5, 7), new Vector(3, 11), new Vector(10, 11)],
    [new Vector(6, 2), new Vector(8, 12), new Vector(16, 3)],
];

const rectangles = [
    [new Vector(5, 7), new Vector(12, 7), new Vector(10, 2), new Vector(7, 3)],
    [new Vector(10, 8), new Vector(12, 7), new Vector(10, 3), new Vector(5, 5)],
    [new Vector(14, 14), new Vector(3, 3), new Vector(2, 6), new Vector(15, 9)],
];
*/

const triangles = createPolygons(3, TOTAL);
const rectangles = createPolygons(4, TOTAL);

export default class Test extends PIXI.Container {
    constructor(renderer) {
        super();

        this.interactive = true;
        this.renderer = renderer;
        this.canvas = this.renderer.view;
        this.context = this.canvas.getContext('2d');

        this.initialize();
    }

    initialize() {
        this.shapes = [];
        this.displayCollision();
        this.displayCollision = this.displayCollision.bind(this);
        setInterval(this.displayCollision, INTERVAL);
    }

    displayCollision() {
        this.clear();
        this.checkCollision();
    }

    clear() {
        this.shapes.forEach((shape) => {
            this.removeChild(shape);
            shape.destroy();
        })

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

        const shape1 = new Shape(vertices1.vertices)
            , shape2 = new Shape(vertices2.vertices);
        this.addChild(shape1);
        this.addChild(shape2);

        this.shapes.push(shape1);
        this.shapes.push(shape2);

        vertices1.divide(SCALE);
        vertices2.divide(SCALE);

        console.log('isCollision: ', GJK.checkCollision(vertices1.vertices, vertices2.vertices));
    }

    update() {}

    resize() {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
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

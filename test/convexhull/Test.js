import Vector from '../../src/geom/Vector';
import PastelColor from '../../src/utils/PastelColor';
import Point from '../../src/convexhull/Point';
import ConvexHull from '../../src/convexhull/ConvexHull';

const INTERVAL = 3000;

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
        this.createConvexHull();
        this.displayConvexHull = this.displayConvexHull.bind(this);
        setInterval(this.displayConvexHull, INTERVAL);
    }

    displayConvexHull() {
        this.clear();
        this.createConvexHull();
    }

    clear() {
        if (this.graphics) {
            this.graphics.clear();
            this.removeChild(this.graphics);
            this.graphics.destroy();
            this.graphics = null;
        }

        if (this.points) {
            this.points.forEach((point) => {
                this.removeChild(point);
                point.clear();
                point.destroy();
                point = null;
            });
            this.points.length = 0;
            this.points = null;
        }
    }

    createConvexHull() {
        const points = this.points = this.createPoints();

        const convexHull = ConvexHull.generate(points);

        const graphics = this.graphics = new PIXI.Graphics();
        graphics.lineStyle(1, PastelColor.generate().hex, 0.5);
        graphics.moveTo(convexHull[0].x, convexHull[0].y);

        for (let i = 1, n = convexHull.length; i < n; i++) {
            graphics.lineTo(convexHull[i].x, convexHull[i].y);
        }

        graphics.lineTo(convexHull[0].x, convexHull[0].y);
        this.addChild(graphics);
    }

    createPoints() {
        const points = [];
        const random = 10 + Math.random() * 50;
        const tl = {x: 100, y: 100};
        const br = {x: 500, y: 500};
        const vec = new Vector();

        for (let point, i = 0; i < random; i++) {
            const color = PastelColor.generate();
            vec.randomize(tl, br);
            point = new Point(vec.x, vec.y, 3, color.hex);
            points.push(point);
            this.addChild(point);
        }

        return points;
    }

    update() {}

    resize() {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    }


}

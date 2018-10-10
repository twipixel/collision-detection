import Vector from '../Vector';
import Point from '../geom/Point';
import ConvexHull from '../convexhull/ConvexHull';
import PastelColor from '../utils/PastelColor';
import Consts from '../gjk/Consts';


const SCALE = Consts.SCALE
    , STAGE = Consts.STAGE
    , FONT_COLOR = '#FFFFFF'
    , AXES_LINE_COLOR = '0xFFFFFF'
    , CONVEX_HULL_LINE_COLOR = PastelColor.generate().hex;


export default class MinkowskiDifference extends PIXI.Container {
    constructor(vertices1, vertices2) {
        super();

        this.graphics = new PIXI.Graphics();
        this.addChild(this.graphics);

        const vertices = this.getVertices(vertices1, vertices2)
            , convexHull = this.convexHull = ConvexHull.generate(vertices);

        this.texts = [];
        this.drawAxes();
        this.drawVetices(vertices);
        this.drawPolygon(convexHull);
    }

    drawVetices(vertices) {
        this.points = [];
        vertices.forEach((vertex) => {
            const point = new Point(vertex.x, vertex.y, 3, PastelColor.generate().hex);
            this.points.push(point);
            this.addChild(point);

            const vec = Vector.divideScalar(vertex, SCALE);
            this.drawText(`(${vec.x}, ${vec.y})`, point.vector);
        });
    }

    drawPolygon(vertices) {
        const g = this.graphics;

        g.lineStyle(1, CONVEX_HULL_LINE_COLOR, 0.5);
        g.moveTo(vertices[0].x, vertices[0].y);
        vertices.forEach((vertex) => { g.lineTo(vertex.x, vertex.y);});
        g.lineTo(vertices[0].x, vertices[0].y);
    }

    drawAxes() {
        const g = this.graphics
            , hw = STAGE.width / 2
            , hh = STAGE.height / 2;

        g.lineStyle(1, AXES_LINE_COLOR, 0.5);
        g.moveTo(-hw, 0);
        g.lineTo(hw, 0);
        g.moveTo(0, -hh);
        g.lineTo(0, hh);
    }

    drawText(text, vertex = {x: 0, y: 0}) {
        const label = new PIXI.Text(text, {
            font: '20px',
            align: 'center',
            fill: FONT_COLOR
        });

        label.x = vertex.x;
        label.y = vertex.y;
        this.texts.push(label);
        this.addChild(label);
    }

    clear() {
        this.graphics.clear();
    }

    destroy() {
        this.texts.forEach((text) => {
           this.removeChild(text);
        });

        this.points.forEach((point) => {
           this.removeChild(point);
        });

        this.removeChild(this.graphics);
    }

    getVertices(vertices1, vertices2) {
        const vertices = [];
        vertices1.forEach((a) => {
            vertices2.forEach((b) => {
                vertices.push(Vector.subtract(a, b));
            });
        });
        return vertices;
    }
}
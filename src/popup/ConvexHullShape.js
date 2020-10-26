import Shape from '../../src/sat/Shape';
import Vector from "../Vector";
import Projection from "../sat/Projection";
import PastelColor from "../utils/PastelColor";

export default class ConvexHullShape extends Shape {
    constructor(points) {
        super();
        this.points = points;
    }

    draw(graphics) {
        const g = graphics
            , p = this.points
            , total = p.length;

        g.lineStyle(1, PastelColor.generate().hex, 0.5);
        g.moveTo(p[0].x, p[0].y);

        for (let i = 1, n = total; i < n; i += 1) {
            g.lineTo(p[i].x, p[i].y);
        }

        g.lineTo(p[0].x, p[0].y);
    }

    /**
     * 중점 좌표
     * @returns {PIXI.Point|*|svg.Point}
     */
    getCenter() {
        var pointSum = new PIXI.Point();

        for (var i = 0, point; i < this.points.length; ++i) {
            point = this.points[i];
            pointSum.x += point.x;
            pointSum.y += point.y;
        }
        return new PIXI.Point(pointSum.x / this.points.length,
            pointSum.y / this.points.length);
    }


    /**
     * 충돌 체크 (분리축이 없으면 충돌), !separationOnAxes
     * @param shape
     * @returns {*}
     */
    collidesWith(shape) {
        if (shape.radius) {
            return this.polygonCollidesWithCircle(this, shape);
        }
        else {
            return this.polygonCollidesWithPolygon(this, shape);
        }
    }

    /**
     * 투영
     * @param axis
     * @returns {Projection}
     */
    project(axis) {
        var scalars = [],
            v = new Vector();

        this.points.forEach(function (point) {
            v.x = point.x;
            v.y = point.y;
            scalars.push(v.dotProduct(axis));
        });

        return new Projection(Math.min.apply(Math, scalars),
            Math.max.apply(Math, scalars));
    }


    /**
     * 축 구하기 (edge에 노말을 축으로 합니다)
     * @returns {Array}
     */
    getAxes() {
        var v1 = new Vector(),
            v2 = new Vector(),
            axes = [];

        for (var i = 0; i < this.points.length - 1; i++) {
            v1.x = this.points[i].x;
            v1.y = this.points[i].y;

            v2.x = this.points[i + 1].x;
            v2.y = this.points[i + 1].y;

            // 모서리에서 수직인 노말(법선) 벡터를 만듭니다. (축 생성)
            axes.push(v1.edge(v2).perpendicular().normalize());
        }

        v1.x = this.points[this.points.length - 1].x;
        v1.y = this.points[this.points.length - 1].y;

        v2.x = this.points[0].x;
        v2.y = this.points[0].y;

        // 모서리에서 수직인 노말(법선) 벡터를 만듭니다. (축 생성)
        axes.push(v1.edge(v2).perpendicular().normalize());
        return axes;
    }

    move(dx, dy) {
        for (let i = 0; i < this.points.length; ++i) {
            let point = this.points[i];
            point.x += dx;
            point.y += dy;
        }
    }
}
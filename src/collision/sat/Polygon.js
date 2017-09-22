import Shape from './Shape';
import Vector from './Vector';
import Point from './Point';
import Projection from './Projection';
import Painter from './../utils/Painter';


export default class Polygon extends Shape
{
    constructor(context)
    {
        super();

        this.points = [];
        this.context = context;
        this.name = this.points.length + ' Polygon';
    }


    /**
     * 중점 좌표
     * @returns {PIXI.Point|*|svg.Point}
     */
    getCenter()
    {
        var pointSum = new PIXI.Point();

        for (var i=0, point; i < this.points.length; ++i) {
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
    collidesWith(shape)
    {
        if (shape.radius !== undefined) {
            return this.polygonCollidesWithCircle(this, shape);
        }
        else {
            return this.polygonCollidesWithPolygon(this, shape);
        }
    }


    /*
    collidesWith(shape)
    {
        var axes = shape.getAxes();

        if (axes === undefined) {
            return shape.polygonCollidesWithCircle(this, shape);
        }
        else {
            axes.concat(this.getAxes());
            return !this.separationOnAxes(axes, shape);
        }
    }
    */


    /**
     * 투영
     * @param axis
     * @returns {Projection}
     */
    project(axis)
    {
        var scalars = [],
            v = new Vector();

        this.points.forEach( function (point) {
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
    getAxes()
    {
        var v1 = new Vector(),
            v2 = new Vector(),
            axes = [];

        for (var i=0; i < this.points.length-1; i++) {
            v1.x = this.points[i].x;
            v1.y = this.points[i].y;

            v2.x = this.points[i+1].x;
            v2.y = this.points[i+1].y;

            axes.push(v1.edge(v2).normal());
        }

        v1.x = this.points[this.points.length-1].x;
        v1.y = this.points[this.points.length-1].y;

        v2.x = this.points[0].x;
        v2.y = this.points[0].y;

        axes.push(v1.edge(v2).normal());

        return axes;
    }


    createPath(graphics, lineColor = 0xFFFFFF)
    {
        graphics.lineStyle(1, lineColor);
        graphics.moveTo(this.points[0].x, this.points[0].y);

        for (var i = 0; i < this.points.length; ++i) {
            graphics.lineTo(this.points[i].x, this.points[i].y);
        }
        graphics.lineTo(this.points[0].x, this.points[0].y);
    }


    move(dx, dy)
    {
        for (let i = 0; i < this.points.length; ++i) {
            let point = this.points[i];
            point.x += dx;
            point.y += dy;
        }
    }


    isPointInPath(x, y)
    {
        if (this.points.length === 0) {
            return;
        }

        this.context.save();
        this.context.beginPath();
        this.context.moveTo(this.points[0].x, this.points[0].y);

        for (var i = 0; i < this.points.length; i++) {
            this.context.lineTo(this.points[i].x, this.points[i].y);
        }

        this.context.lineTo(this.points[0].x, this.points[0].y);
        this.context.closePath();

        const isPointInPath = this.context.isPointInPath(x, y);
        this.context.restore();
        return isPointInPath;
    }


    addPoint(x, y)
    {
        this.points.push(new Point(x, y));
        this.name = this.points.length + ' Polygon';
    }

}
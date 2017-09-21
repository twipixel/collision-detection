import Shape from './Shape';
import Vector from './Vector';
import Projection from './Projection';
import Painter from './../utils/Painter';


export default class Circle extends Shape
{
    constructor(context, x, y, radius)
    {
        super();

        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.lineColor = 0xFFFFFF;
    }


    /**
     * 중점 좌표 반환
     * @returns {PIXI.Point|*|svg.Point}
     */
    centroid()
    {
        return new PIXI.Point(this.x,this.y);
    }


    collidesWith(shape)
    {
        if (shape.radius === undefined) {
            return this.polygonCollidesWithCircle(shape, this);
        }
        else {
            return this.circleCollidesWithCircle(this, shape);
        }
    }


    /*
    collidesWith(shape)
    {
        var axes = shape.getAxes(), distance;

        if (axes === undefined) { //원
            distance = Math.sqrt(
                Math.pow(shape.x - this.x, 2) +
                Math.pow(shape.y - this.y, 2));
            return distance < Math.abs(this.radius + shape.radius);
        }
        else {
            return this.polygonCollidesWithCircle(shape, this);
        }
    }
    */


    getPolygonPointClosestToCircle(polygon, circle)
    {
        var min = 10000,
            length, testPoint, closestPoint;

        for (var i = 0; i < polygon.points.length; ++i) {
            testPoint = polygon.points[i];
            length = Math.sqrt(
                Math.pow(testPoint.x - circle.x, 2),
                Math.pow(testPoint.y - circle.y, 2)
            );

            if (length < min) {
                min = length;
                closestPoint = testPoint;
            }
        }

        return closestPoint;
    }


    /**
     * 다각형과 원형 충돌 검사
     * @param polygon
     * @param circle
     * @returns {boolean}
     */
    /*polygonCollidesWithCircle(polygon, circle)
    {
        var min = 10000,
            axes = polygon.getAxes(),
            closestPoint = this.getPolygonPointClosestToCircle(polygon, circle);

        axes.push(this.getCircleAxis(circle, closestPoint));

        return !polygon.separationOnAxes(axes, circle);
    }*/


    getCircleAxis(circle, closestPoint)
    {
        var p1 = new PIXI.Point(circle.x, circle.y),
            p2 = new PIXI.Point(closestPoint.x, closestPoint.y),
            v1 = new Vector(p1.x, p1.y),
            v2 = new Vector(p2.x, p2.y);

        return v1.edge(v2).normal();
    }


    project(axis)
    {
        let scalars = [],
            point = new PIXI.Point(this.x, this.y),
            pointVector = new Vector(point.x, point.y),
            dotProduct = pointVector.dotProduct(axis);

        scalars.push(dotProduct);
        scalars.push(dotProduct + this.radius);
        scalars.push(dotProduct - this.radius);

        return new Projection(
            Math.min.apply(Math, scalars),
            Math.max.apply(Math, scalars)
        );
    }


    getAxes()
    {
        return undefined;
    }


    createPath(graphics)
    {
        graphics.lineStyle(1, 0xFFFFFF);
        graphics.moveTo(this.x + this.radius, this.y);
        graphics.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    }


    move(dx, dy)
    {
        this.x += dx;
        this.y += dy;
    }


    isPointInPath(x, y)
    {
        this.context.save();
        this.context.save();
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        const isPointInPath = this.context.isPointInPath(x, y);
        this.context.restore();
        return isPointInPath;
    }
}


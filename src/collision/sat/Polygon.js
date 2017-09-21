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
        this.lineColor = 0xFFFFFF;
    }


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


    createPath(graphics)
    {
        graphics.lineStyle(1, 0xFFFFFF);
        graphics.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 0; i < this.points.length; i++) {
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
    }

}
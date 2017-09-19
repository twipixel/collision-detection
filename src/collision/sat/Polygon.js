import Shape from './Shape';
import Vector from './Vector';
import Point from './Point';
import Projection from './Projection';


export default class Polygon extends Shape
{
    constructor(context)
    {
        super();

        this.points = [];
        this.context = context;
        this.lineColor = 0xFFFFFF;
    }


    project(axis)
    {
        const scalars = [],
              v = new Vector();

        this.points.forEach(point => {
            v.x = point.x;
            v.y = point.y;
            scalars.push(v.dotProduct(axis));
        });

        return new Projection(
            Math.min.apply(Math, scalars),
            Math.max.apply(Math, scalars)
        );
    }


    getAxes()
    {
        const v1 = new Vector(),
              v2 = new Vector(),
              axes = [];

        for (var i = 0; i < this.points.length - 1; i++) {
            v1.x = this.points[i].x;
            v1.y = this.points[i].y;

            v2.x = this.points[i + 1].x;
            v2.y = this.points[i + 1].y;

            axes.push(v1.edge(v2).normal());
        }

        v1.x = this.points[this.points.length - 1].x;
        v1.y = this.points[this.points.length - 1].y;

        v2.x = this.points[0].x;
        v2.y = this.points[0].y;

        axes.push(v1.edge(v2).normal());

        return axes;
    }


    addPoint(x, y)
    {
        this.points.push(new Point(x, y));
    }


    createPath(graphics)
    {
        console.log(this.points.length, 'polygon');

        graphics.beginFill(0xFFFFFF, 0);
        graphics.lineStyle(1, 0xFFFFFF);
        graphics.moveTo(this.points[0].x, this.points[0].y);

        for (var i = 0; i < this.points.length; ++i) {
            graphics.lineTo(this.points[i].x, this.points[i].y);
        }

        graphics.endFill();
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

        this.context.beginPath();
        this.context.moveTo(this.points[0].x, this.points[0].y);

        for (var i = 0; i < this.points.length; ++i) {
            this.context.lineTo(this.points[i].x, this.points[i].y);
        }

        this.context.closePath();

        return this.context.isPointInPath(x, y);
    }
}
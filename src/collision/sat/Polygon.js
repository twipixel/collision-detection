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


    project(axis)
    {
        const scalars = [],
              v = new Vector();

        this.points.forEach(point => {
            v.x = point.x;
            v.y = point.y;
            let scalar = v.dotProduct(axis);
            scalars.push(scalar);
        });

        return new Projection(
            Math.min.apply(Math, scalars),
            Math.max.apply(Math, scalars)
        );
    }


    getAxes()
    {
        let v1 = new Vector(),
            v2 = new Vector(),
            axes = [], axe, p1, p2;
        //console.log(this.points.length + '.getAxes');

        for (var i = 0; i < this.points.length - 1; i++) {

            p1 = this.points[i];
            p2 = this.points[i + 1];

            v1.x = p1.x;
            v1.y = p1.y;

            v2.x = p2.x;
            v2.y = p2.y;

            axe = v1.edge(v2).normal();
            axes.push(axe);
            //console.log('p1[', p1.x, p1.y, ']', 'p2[', p2.x, p2.y, ']', 'axe', axe);
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
}
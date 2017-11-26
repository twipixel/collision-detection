import Vector from './../geom/Vector';
import Vec2 from './../gjk/Vec2';
import Calc from './../utils/Calculator';


export default class Painter
{
    static drawMinkowskiSum(vertices1, vertices2)
    {
        const path = [];
        for (let i = 0; i < vertices1.length; i++) {
            for (let j = 0; j < vertices2.length; j++) {

                let v1 = vertices1[i].clone();
                let v2 = vertices2[j].clone();
                console.log('v1', v1.toString(), 'v2', v2.toString());
                path.push(v1.subtract(v1, v2));
            }
        }

        Painter.drawPolygon(Painter.createConvexHull(path), 2, 0x9C27B0, 0.7);
    }


    static createConvexHull(points)
    {
        // Find the right most point on the hull
        var i0 = 0;
        var x0 = points[0].x;
        for (var i = 1; i < points.length; i++) {
            var x = points[i].x;
            if (x > x0 || (x == x0 && points[i].y < points[i0].y)) {
                i0 = i;
                x0 = x;
            }
        }

        var n = points.length;
        var hull = [];
        var m = 0;
        var ih = i0;

        while (1) {
            hull[m] = ih;

            var ie = 0;
            for (var j = 1; j < n; j++) {
                if (ie == ih) {
                    ie = j;
                    continue;
                }

                var r = Vec2.sub(points[ie], points[hull[m]]);
                var v = Vec2.sub(points[j], points[hull[m]]);
                var c = Vec2.cross(r, v);
                if (c < 0) {
                    ie = j;
                }

                // Collinearity check
                if (c == 0 && v.lengthsq() > r.lengthsq()) {
                    ie = j;
                }
            }

            m++;
            ih = ie;

            if (ie == i0) {
                break;
            }
        }

        // Copy vertices
        var newPoints = [];
        for (var i = 0; i < m; ++i) {
            let point = points[hull[i]];
            newPoints.push(new Vec2(point.x, point.y));
        }

        return newPoints;
    }



    static drawPolygon(vertices, lineWidth = 1, color = 0xff3300, alpha = 0.5)
    {
        const graphics = window.g;
        // graphics.lineStyle(0xFF3300, 0.5);
        // graphics.drawPolygon(vertices);
        // graphics.endFill();

        // graphics.beginFill(0xFF3300, 0.5);
        // graphics.drawRect(0, 0, 300, 300);
        // graphics.endFill();

        graphics.lineStyle(lineWidth, color, alpha);

        const vec0 = vertices[0].clone();
        vec0.multiplyScalar(10);


        graphics.moveTo(vec0.x, vec0.y);

        for (let i = 1; i < vertices.length; i++) {
            let vec = vertices[i].clone();
            vec.multiplyScalar(10);
            graphics.lineTo(vec.x, vec.y);

            console.log(i, `vec[${vec.x}, ${vec.y}]`);
        }

        graphics.lineTo(vec0.x, vec0.y);
    }


    static drawPoint(graphics, point, isClear = true, radius = 1, color = 0xFF3300, alpha = 0.7)
    {
        if (isClear === true) {
            graphics.clear();
        }

        graphics.beginFill(color, alpha);
        graphics.drawCircle(point.x, point.y, radius);
        graphics.endFill();
    }


    static drawRectByBounds(graphics, bounds, isClear = true, thickness = 1, color = 0xFF3300, alpha = 0.7)
    {
        if (isClear === true) {
            graphics.clear();
        }

        graphics.lineStyle(thickness, color, alpha);
        graphics.drawRect(bounds.x, bounds.y, bounds.width, bounds.height);
        graphics.endFill();
    };


    static drawRectByPoints(graphics, rect, isClear = true, thickness = 1, color = 0xFF3300, alpha = 0.7)
    {
        if (isClear === true) {
            graphics.clear();
        }

        graphics.lineStyle(thickness, color, alpha)
        graphics.moveTo(rect.lt.x, rect.lt.y);
        graphics.lineTo(rect.rt.x, rect.rt.y);
        graphics.lineTo(rect.rb.x, rect.rb.y);
        graphics.lineTo(rect.lb.x, rect.lb.y);
        graphics.lineTo(rect.lt.x, rect.lt.y);
    }


    static drawPointsByPoints(graphics, rect, isClear = true, radius = 1, color = 0xFF3300, alpha = 0.7)
    {
        if (isClear === true) {
            graphics.clear();
        }

        graphics.beginFill(color, alpha);
        graphics.drawCircle(rect.lt.x, rect.lt.y, radius);
        graphics.drawCircle(rect.rt.x, rect.rt.y, radius);
        graphics.drawCircle(rect.rb.x, rect.rb.y, radius);
        graphics.drawCircle(rect.lb.x, rect.lb.y, radius);
        graphics.endFill();
    };


    static drawPoints(graphics, points, isClear = true, thickness = 1, color = 0xFF3300, alpha = 0.7)
    {
        if (isClear === true) {
            graphics.clear();
        }

        graphics.lineStyle(thickness, color, alpha);

        for (var i = 0; i < points.length; i++) {
            var p1 = points[i];
            var p2 = points[i + 1 < points.length ? i + 1 : 0];

           graphics.moveTo(p1.x, p1.y);
           graphics.lineTo(p2.x, p2.y);
        }
    }


    static drawLine(graphics, p0, p1, isClear = true, thickness = 1, color = 0xFF3300, alpha = 0.7)
    {
        if (isClear === true) {
            graphics.clear();
        }

        graphics.lineStyle(thickness, color, alpha);
        graphics.moveTo(p0.x, p0.y);
        graphics.lineTo(p1.x, p1.y);
    }


    static drawArrow(graphics, movePoint, toPoint, isClear = true, thickness = 1, color = 0xFF3300, alpha = 0.7)
    {
        if (isClear === true) {
            graphics.clear();
        }

        /*graphics.lineStyle(thickness, color, alpha);
        graphics.moveTo(movePoint.x, movePoint.y);

        var vector = new Vector(toPoint.x - movePoint.x, toPoint.y - movePoint.y);
        var left = vector.clone().rotate(45).invert();
        var right = vector.clone().rotate(-45).invert();
        left.multiplyScalar(5);
        right.multiplyScalar(5);
        vector.invert().multiplyScalar(15);

        graphics.lineTo(movePoint.x + vector.x, movePoint.y + vector.y);
        graphics.moveTo(movePoint.x, movePoint.y);
        graphics.lineTo(movePoint.x + left.x, movePoint.y + left.y);
        graphics.moveTo(movePoint.x, movePoint.y);
        graphics.lineTo(movePoint.x + right.x, movePoint.y + right.y);*/


        graphics.lineStyle(thickness, color, alpha);
        graphics.moveTo(movePoint.x, movePoint.y);

        var vector = new Vector(movePoint.x - toPoint.x, movePoint.y - toPoint.y);
        var left = vector.clone().rotate(45).invert();
        var right = vector.clone().rotate(-45).invert();
        left.multiplyScalar(5);
        right.multiplyScalar(5);
        vector.invert().multiplyScalar(15);

        graphics.lineTo(movePoint.x + vector.x, movePoint.y + vector.y);
        graphics.moveTo(movePoint.x, movePoint.y);
        graphics.lineTo(movePoint.x + left.x, movePoint.y + left.y);
        graphics.moveTo(movePoint.x, movePoint.y);
        graphics.lineTo(movePoint.x + right.x, movePoint.y + right.y);
    }
}
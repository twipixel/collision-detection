import Vector from './../sat/Vector';
import Calc from './../utils/Calculator';


export default class Painter
{
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

        console.log('drawLine(', p0, p1, ')');

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
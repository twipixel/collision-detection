import Vector from '../Vector';
import GJK from '../gjk/GJK';


export default class Painter
{
    static drawMinkowskiSum(vertices1, vertices2)
    {
        console.log('-------------------------------------------------');
        console.log('drawMinkowskiSum(', vertices1.length * vertices2.length, ')');
        console.log('-------------------------------------------------');

        const path = [];
        for (let i = 0; i < vertices1.length; i++) {
            for (let j = 0; j < vertices2.length; j++) {

                let v1 = vertices1[i].clone();
                let v2 = vertices2[j].clone();
                let diff = Vector.subtract(v1, v2);
                path.push(diff);
                console.log(i, j, `vec[${diff.x}, ${diff.y}]`);
            }
        }

        const convexHullPath = GJK.createConvexHull(path);
        Painter.drawPolygon(convexHullPath, 1, 0xDDDDDD, 1);
    }


    static drawPolygon(vertices, lineWidth = 1, color = 0x607D8B, alpha = 0.5)
    {
        const graphics = window.g;
        graphics.lineStyle(lineWidth, color, alpha);

        const vec0 = vertices[0].clone();
        vec0.multiplyScalar(window.magnification);

        graphics.moveTo(vec0.x, vec0.y);

        // this.drawText(window.stage, '(' + vec0.x.toFixed(0) + ',' + vec0.y.toFixed(0) + ')', vec0);

        for (let i = 1; i < vertices.length; i++) {
            let vec = vertices[i].clone();
            vec.multiplyScalar(window.magnification);
            graphics.lineTo(vec.x, vec.y);
        }

        graphics.lineTo(vec0.x, vec0.y);
    }


    static drawText(stage, string, point, color = '#ff3300')
    {
        const text = new PIXI.Text(string, {
            // fontFamily: 'Arial',
            // fontSize: 4,
            // fontWeight: 'bold',
            fill: color,
            // stroke: '#4a1850',
        });

        text.x = point.x;
        text.y = point.y;

        stage.addChild(text);
    }


    static drawPoint(graphics, point, isClear = true, radius = 1, color = 0xFF3300, alpha = 0.7)
    {
        if (isClear === true) {
            graphics.clear();
        }

        graphics.lineStyle(1, color);
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

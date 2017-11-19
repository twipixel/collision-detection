import MTV from './MTV';
import Painter from './../utils/Painter';


export default class Shape
{
    constructor()
    {
        this.interactive = true;
    }


    minimumTranslationVector(axes, shape)
    {
        window.g.clear();

        var minimumOverlap = Number.MAX_VALUE,
            overlap, axisWithSmallestOverlap,
            axis, projection1, projection2;

        for (var i = 0; i < axes.length; ++i) {
            axis = axes[i];
            projection1 = shape.project(axis);
            projection2 = this.project(axis);
            overlap = projection1.getOverlap(projection2);

            Painter.drawLine(window.g,
                {x:axis.x * projection1.min, y:axis.y * projection1.min},
                {x:axis.x * projection2.max, y:axis.y * projection2.max},
                false
            );

            console.log('overlap', overlap);


            if (overlap === 0) { //충돌 없슴.
                return new MTV(0);
            }
            else {
                if (overlap < minimumOverlap) {
                    minimumOverlap = overlap;
                    axisWithSmallestOverlap = axis;
                }
            }
        }

        return new MTV(minimumOverlap, axisWithSmallestOverlap);
    }


    /**
     * 두 다각형 사이에서 충돌
     * @param p1
     * @param p2
     * @returns {*}
     */
    polygonCollidesWithPolygon(p1, p2)
    {
        var mtv1 = p1.minimumTranslationVector(p1.getAxes(), p2),
            mtv2 = p1.minimumTranslationVector(p2.getAxes(), p2);

        if (mtv1.overlap === 0 && mtv2.overlap === 0) {
            return new MTV(0);
        }
        else {
            return mtv1.overlap < mtv2.overlap ? mtv1 : mtv2;
        }
    }


    /**
     * 두 원형에 대한 충돌
     * @param c1
     * @param c2
     */
    circleCollidesWithCircle(c1, c2)
    {
        var distance = Math.sqrt( Math.pow(c2.x - c1.x, 2) +
                Math.pow(c2.y - c1.y, 2)),
            overlap = Math.abs(c1.radius + c2.radius) - distance;

        return overlap < 0 ?
            new MTV(0) :
            new MTV(overlap);
    }


    /**
     * 다각형과 원형 충돌 검사
     * @param polygon
     * @param circle
     * @returns {boolean}
     */
    polygonCollidesWithCircle(polygon, circle)
    {
        var axes = polygon.getAxes(),
            closestPoint = circle.getPolygonPointClosestToCircle(polygon, circle);

        // Painter.drawPoint(window.g, closestPoint, false, 5, 0xE57373);

        axes.push(circle.getCircleAxis(circle, closestPoint));

        return polygon.minimumTranslationVector(axes, circle);
    }


    /**
     * 축에 투영하여 분리가 있으면 true 반환(충돌되지 않았다면 true 반환)
     * @param otherShape
     * @returns {boolean}
     */
    collidesWith(shape)
    {
        var axes = this.getAxes().concat(shape.getAxes());
        return !this.separationOnAxes(axes, shape);
    }


    /**
     * 분리축이 있는지 여부 (분리축이 있다는 이야기는 충돌하지 않았다는 이야기 입니다.)
     * @param axes
     * @param shape
     * @returns {boolean}
     */
    separationOnAxes(axes, shape)
    {
        for (var i=0; i < axes.length; ++i) {
            var axis = axes[i];
            var projection1 = shape.project(axis);
            var projection2 = this.project(axis);

            if (!projection1.overlaps(projection2)) {
                return true; // don't have to test remaining axes
            }
        }
        return false;
    }
}
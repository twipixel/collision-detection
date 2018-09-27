export default class PointUtil {

    static add(point1, point2) {
        return new PIXI.Point(point1.x + point2.x, point1.y + point2.y);
    }

    static subtract(point1, point2) {
        return new PIXI.Point(point1.x - point2.x, point1.y - point2.y);
    }

    static distance(point1, point2) {
        return Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y));
    }

    /**
     * interpolate 보간법에 addLength 만큼의 거리를 더한 값을 반환합니다.
     * @param point1
     * @param point2
     * @param addLength
     * @returns {PIXI.Point|*}
     */
    static getAddedInterpolate(point1, point2, addLength) {
        var distance = PointUtil.distance(point1, point2);
        var f = (distance + addLength) / distance;
        return PointUtil.interpolate(point1, point2, f);
    }


    /**
     * factor에 의해 point1과 point2를 잇는 선분의 한점을 반환합니다.
     * @param point1
     * @param point2
     * @param f 0이면 point2값이 1이면 point1값이 나옵니다. 1.5이면 두점을 지나 1.5배 먼 거리값이 나옵니다.
     * @returns {PIXI.Point|*}
     */
    static interpolate(point1, point2, f) {
        return new PIXI.Point(point2.x + f * (point1.x - point2.x), point2.y + f * (point1.y - point2.y));
    }


    /**
     * 사각형의 맨 좌측값 (충돌검사를 위한 값)
     * @returns {*}
     */
    static getLeft(rect)
    {
        const points = [rect.lt, rect.rt, rect.rb, rect.lb];
        var point = points[0];

        for (var i = 1; i < points.length; i++) {
            const other = points[i];

            if (other.x < point.x) {
                point = other;
            }
        }

        return point.x;
    }


    /**
     * 사각형의 맨 우측값 (충돌검사를 위한 값)
     * @returns {*}
     */
    static getRight(rect)
    {
        const points = [rect.lt, rect.rt, rect.rb, rect.lb];
        var point = points[0];

        for (var i = 1; i < points.length; i++) {
            const other = points[i];

            if (other.x > point.x) {
                point = other;
            }
        }

        return point.x;
    }


    /**
     * 사각형의 맨 상단값 (충돌검사를 위한 값)
     * @returns {*}
     */
    static getTop(rect)
    {
        const points = [rect.lt, rect.rt, rect.rb, rect.lb];
        var point = points[0];

        for (var i = 1; i < points.length; i++) {
            const other = points[i];

            if (other.y < point.y) {
                point = other;
            }
        }

        return point.y;
    }


    /**
     * 사각형의 맨 하단값 (충돌검사를 위한 값)
     * @returns {*}
     */
    static getBottom(rect)
    {
        const points = [rect.lt, rect.rt, rect.rb, rect.lb];
        var point = points[0];

        for (var i = 1; i < points.length; i++) {
            const other = points[i];

            if (other.y > point.y) {
                point = other;
            }
        }

        return point.y;
    }


    /**
     * 포인트로 bounds 를 구합니다.
     * @param points
     * @returns {{x: number, y: number, width: number, height: number}}
     */
    static getBoundsWithPoints(points)
    {
        const lt = points.lt || points.tl;
        const rt = points.rt || points.tr;
        const rb = points.rb || points.br;
        const lb = points.lb || points.bl;
        return { x: lt.x, y: lt.y, width: rt.x - lt.x, height: rb.y - rt.y };
    }

}
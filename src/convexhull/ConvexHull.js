/**
 * https://www.crocus.co.kr/1288
 */
import Vector from "../Vector";

export default class ConvexHull {
    static generate(points) {

        const stack = [],
            n = points.length;

        // y좌표, x좌표 작은 순으로 정렬
        points.sort(this.sortLowerYX);

        // 기준점 설정
        const basePoint = points[0];

        // 기준점 기준으로 vector 를 생성하고 외적을 구해서 반 시계 방향으로 (ccw) 정렬 합니다.
        for (let i = 1; i < n; i++) {
            points[i].relativePosition = new Vector(
                points[i].x - basePoint.x,
                points[i].y - basePoint.y
            );
        }

        points.sort(this.sortCcw);

        // 스택에 first, second 를 넣습니다.
        stack.push(0);
        stack.push(1);

        let next = 2;

        while (next < n) {
            while (stack.length >= 2) {
                let first, second;
                second = stack[stack.length - 1];
                stack.pop();
                first = stack[stack.length - 1];

                // first, second, next가 좌회전 ( 0 보다 크면 )이라면 second push
                // 우회전( 0 보다 작으면 ) 이라면 위의 while문 계속 반복
                if (this.isCcw(points[first], points[second], points[next])) {
                    stack.push(second);
                    break;
                }
            }

            stack.push(next++);
        }

        const convexHull = [];
        for (let i = 0, n = stack.length; i < n; i++) {
            const index = stack[i];
            const point = points[index];
            convexHull.push({x: point.x, y: point.y});
        }

        return convexHull;
    }

    /**
     * y, x 가 작은 순으로 정렬
     * @param pointA
     * @param pointB
     * @returns {boolean}
     */
    static sortLowerYX(pointA, pointB) {
        if (pointA.y !== pointB.y) {
            return pointA.y - pointB.y;
        }
        return pointA.x - pointB.x;
    }

    /**
     * 기준 좌표 기준으로 상대 좌표를 구해서 시계 반대 방향으로 정렬합니다.
     * @param pointA
     * @param pointB
     * @returns {boolean}
     */
    static sortCcw(pointA, pointB) {
        // 중심 좌표인 경우 relativePosition 이 없습니다. 중심 좌표를 0번으로 정렬 합니다.
        if (!pointA.relativePosition) {
            return -1;
        }

        if (!pointB.relativePosition) {
            return 1;
        }

        const a = pointA.relativePosition.y * pointB.relativePosition.x;
        const b = pointA.relativePosition.x * pointB.relativePosition.y;

        if (a !== b) {
            return b - a;
        }

        return ConvexHull.sortLowerYX(pointA, pointB);
    }

    /**
     * 반 시계 방향인지 여부
     * @param pointA
     * @param pointB
     * @param pointC
     * @returns {boolean}
     */
    static isCcw(pointA, pointB, pointC) {
        // const triangleArea = (pointB.x - pointA.x) * (pointC.y - pointA.y) - (pointC.x - pointA.x) * (pointB.y - pointA.y);
        const triangleArea =  (pointC.x - pointA.x) * (pointB.y - pointA.y) - (pointB.x - pointA.x) * (pointC.y - pointA.y);
        if (triangleArea > 0) {
            return true;
        }
        return false;
    }
}


function debugArray(arr) {
    for (let i = 0, n = arr.length; i < n; i++) {
        console.log(arr[i].x, arr[i].y);
    }
}


/*
* Copyright (c) 2012 Ju Hyung Lee
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software
* and associated documentation files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or
* substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
* BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
* DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Create the convex hull using the Gift wrapping algorithm
// http://en.wikipedia.org/wiki/Gift_wrapping_algorithm
function createConvexHull(points) {
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

            var r = vec2.sub(points[ie], points[hull[m]]);
            var v = vec2.sub(points[j], points[hull[m]]);
            var c = vec2.cross(r, v);
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
        newPoints.push(points[hull[i]]);
    }

    return newPoints;
}

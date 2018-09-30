import Vector from '../Vector';
import Painter from '../utils/Painter';


/**
 * GJK Algorithm (Gilbert-Johnson-Keerthi)
 * http://www.dyn4j.org/2010/04/gjk-gilbert-johnson-keerthi/#gjk-top
 * https://www.haroldserrano.com/blog/visualizing-the-gjk-collision-algorithm
 * https://github.com/juhl/collision-detection-2d
 */
export default class GJK
{
    /**
     * This is to compute average center (roughly). It might be different from
     * Center of Gravity, especially for bodies with nonuniform density,
     * but this is ok as initial direction of simplex search in GJK
     * @param vertices {Vector[]} 폴리곤 vertices
     * @param direction {Vector} 방향 vector
     */
    static averagePoint(vertices)
    {
        const avg = new Vector()
            , count = vertices.length;

        for (let i = 0; i < count; i++) {
            avg.x += vertices[i].x;
            avg.y += vertices[i].y;
        }

        avg.x /= count;
        avg.y /= count;

        return avg;
    }


    /**
     * Get furthest vertex along a certain direction
     * 꼭지점과 방향을 전달하면 내적 (투영)을 통해 최대로 먼 좌표의 인덱스를 반환합니다.
     * @param vertices {Vector[]} 폴리곤 vertices
     * @param direction {Vector} 방향 vector
     */
    static indexOfFurthestPoint(vertices, direction)
    {
        let index = 0;
        let maxProduct = Vector.dotProduct(direction, vertices[0]);

        for (let i = 0, count = vertices.length; i < count; i++) {
            const product = Vector.dotProduct(direction, vertices[i]);

            if (product > maxProduct) {
                maxProduct = product;
                index = i;
            }
        }

        return index;
    }


    /**
     * Minkowski sum support function for GJK
     * 지원 함수에서 폴리곤의 포인트와 방향으로 서로 다른 방향의 점을 구하고 Minkowski Difference 를 반환합니다.
     * @param vertices1 {Vector[]} 폴리곤 vertices
     * @param vertices2 {Vector[]} 폴리곤 vertices
     * @param direction {Vector} 방향 벡터
     */
    static support(vertices1, vertices2, direction)
    {
        // get furthest point of first body along an arbitrary direction
        const i = this.indexOfFurthestPoint(vertices1, direction);

        // get furthest point of second body along the opposite direction
        const j = this.indexOfFurthestPoint(vertices2, Vector.negate(direction));

        console.log('d:' + str(direction, true), 'i:' + str(vertices1[i]));
        console.log('d:' + str(Vector.negate(direction), true), 'j:' + str(vertices2[j]));
        console.log('support(' + str(Vector.subtract(vertices1[i], vertices2[j])) + ')');
        // subtract (Minkowski sum) the two points to see if bodies 'overlap'
        return Vector.subtract(vertices1[i], vertices2[j]);
    }


    /**
     * 충돌 검사
     * @param vertices1 {Vector[]}
     * @param vertices2 {Vector[]}
     * @returns {boolean} 충돌 여부
     */
    static checkCollision(vertices1, vertices2)
    {
        // consoleVertices(vertices1, vertices2);

        let iterCount = 0, index = 0;   // index of current vertex of simplex
        let a, b, c, d, ao, ab, ac, abperp, acperp, simplex = new Array(3);

        // 두 폴리곤 중심 좌표를 통해서 방향을 구합니다.
        const position1 = this.averagePoint(vertices1); // not a CoG but
        const position2 = this.averagePoint(vertices2); // it's ok for GJK )

        // initial direction from the center of 1st body to the center of 2nd body
        // 방향 vector
        d = Vector.subtract(position1, position2);

        // if initial direction is zero – set it to any arbitrary axis (we choose X)
        if ((d.x == 0) && (d.y == 0)) {
            d.x = 1.0;
        }

        // set the first support as initial point of the new simplex
        a = simplex[0] = this.support(vertices1, vertices2, d);
        console.log(str(a), str(d, true), Vector.dotProduct(a, d).toFixed(2));

        // support 점과 방향이 같은 방향이 아닐 경우
        if (Vector.dotProduct(a, d) <= 0) {
            // 마지막에 추가 된 점이 d의 방향으로 원점을 지나치지 않은 경우
            // 그 다음 Minkowski 합은 원점을 포함 할 수 없습니다.
            // 추가 된 마지막 점은 Minkowski Difference의 가장자리에 있습니다.
            console.log('CASE1[', 'NO', ']');
            return false; // no collision
        }

        d = Vector.negate(a); // The next search direction is always towards the origin, so the next search direction is negate(a)

        while (true) {
            iterCount++;

            a = simplex[++index] = this.support(vertices1, vertices2, d);

            if (Vector.dotProduct(a, d) <= 0) {
                console.log(str(a), str(d, true), Vector.dotProduct(a, d).toFixed(2));
                console.log('CASE2[', 'NO', ']');
                return false; // no collision
            }

            ao = Vector.negate(a); // from point A to Origin is just negative A

            // simplex has 2 points (a line segment, not a triangle yet)
            if (index < 2) {
                b = simplex[0];
                ab = Vector.subtract(b, a); // from point A to B
                d = Vector.tripleProduct(ab, ao, ab); // normal to AB towards Origin

                if (Vector.lengthSq(d) === 0) {
                    d = Vector.perpendicular(ab);
                }
                continue; // skip to next iteration
            }

            b = simplex[1];
            c = simplex[0];
            ab = Vector.subtract(b, a); // from point A to B
            ac = Vector.subtract(c, a); // from point A to C

            //ac와 수직
            acperp = Vector.tripleProduct(ab, ac, ac);

            // ac 수직 선분이 원점을 보도록 방향 설정
            if (Vector.dotProduct(acperp, ao) >= 0) {
                d = acperp; // new direction is normal to AC towards Origin
            }
            else {
                abperp = Vector.tripleProduct(ac, ab, ab);

                // ab 수직 선분이 원점 반대 방향을 향하고 있으면 즉, 원점이 삼각형 안에 있으면
                if (Vector.dotProduct(abperp, ao) < 0) {
                    return true; // collision
                }

                simplex[0] = simplex[1]; // swap first element (point C)
                d = abperp; // new direction is normal to AB towards Origin
            }

            simplex[1] = simplex[2]; // swap element in the middle (point B)
            --index;
        }

        return false;
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

                var r = Vector.subtract(points[ie], points[hull[m]]);
                var v = Vector.subtract(points[j], points[hull[m]]);
                var c = Vector.cross(r, v);
                if (c < 0) {
                    ie = j;
                }

                // Collinearity check
                if (c == 0 && v.lengthSq() > r.lengthSq()) {
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
            newPoints.push(new Vector(point.x, point.y));
        }

        return newPoints;
    }


    static midpoint(a, b)
    {
        return new Vector((a.x + b.x) / 2, (a.y + b.y) / 2);
    }
}


function debugVertices(vertices) {
    vertices.forEach((vertex, index) => {
       console.log(index, vertex.x, vertex.y);
    });
}

function consoleVertices(vertices1, vertices2) {
    console.log('-------------------------------------------------');
    console.log('vertices1');
    console.log('-------------------------------------------------');
    debugVertices(vertices1);
    console.log('-------------------------------------------------');
    console.log('vertices2');
    console.log('-------------------------------------------------');
    debugVertices(vertices2);
    console.log('-------------------------------------------------');
}

function str(vertex, isFixed = false) {
    if (isFixed === false) {
        return `(${vertex.x},${vertex.y})`;
    }
    return `(${vertex.x.toFixed(2)},${vertex.y.toFixed(2)})`;
}

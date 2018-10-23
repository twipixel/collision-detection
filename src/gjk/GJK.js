import Vector from '../Vector';
import Epsilon from '../dyn4j/Epsilon';
import MinkowskiSumPoint from "./MinkowskiSumPoint";

/**
 * GJK Algorithm (Gilbert-Johnson-Keerthi)
 * https://github.com/kroitor/gjk.c
 * http://www.dyn4j.org/2010/04/gjk-gilbert-johnson-keerthi/#gjk-top
 * https://www.haroldserrano.com/blog/visualizing-the-gjk-collision-algorithm
 * https://github.com/juhl/collision-detection-2d
 */

const ORIGIN = new Vector(0, 0)
    , DEFAULT_MAX_ITERATIONS = 30
    , TOLERANCE = Math.sqrt(Epsilon.E);

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


    static support2(vertices1, vertices2, direction)
    {
        // get furthest point of first body along an arbitrary direction
        const i = this.indexOfFurthestPoint(vertices1, direction);

        // get furthest point of second body along the opposite direction
        const j = this.indexOfFurthestPoint(vertices2, Vector.negate(direction));

        console.log('d:' + str(direction, true), 'i:' + str(vertices1[i]));
        console.log('d:' + str(Vector.negate(direction), true), 'j:' + str(vertices2[j]));
        console.log('support(' + str(Vector.subtract(vertices1[i], vertices2[j])) + ')');
        return new MinkowskiSumPoint(vertices1[i], vertices2[j]);
    }


    /**
     * 충돌 검사
     * @param vertices1 {Vector[]}
     * @param vertices2 {Vector[]}
     * @paran history {History} simplex 와 direction 히스토리
     * @returns {boolean} 충돌 여부
     */
    static checkCollision(vertices1, vertices2, history = null)
    {
        // consoleVertices(vertices1, vertices2);

        let iterCount = 0, index = 0;   // index of current vertex of simplex
        let a, b, c, d, ao, ab, ac, abperp, acperp,
            simplex = new Array(3), directions = new Array(3);

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
        directions[0] = d;
        console.log(str(a), str(d, true), Vector.dotProduct(a, d).toFixed(2));

        // support 점과 방향이 같은 방향이 아닐 경우
        if (a.dot(d) <= 0) {
            // 마지막에 추가 된 점이 d의 방향으로 원점을 지나치지 않은 경우
            // 그 다음 Minkowski 합은 원점을 포함 할 수 없습니다.
            // 추가 된 마지막 점은 Minkowski Difference의 가장자리에 있습니다.
            console.log('       CASE1[', 'NO', ']');

            if (history) {
                history.setHistory(simplex, directions);
            }

            return false; // no collision
        }

        d = Vector.negate(a); // The next search direction is always towards the origin, so the next search direction is negate(a)

        while (true) {
            iterCount++;

            console.log('');
            console.log(iterCount);

            a = simplex[++index] = this.support(vertices1, vertices2, d);
            directions[index] = d;

            if (Vector.dotProduct(a, d) <= 0) {
                console.log(str(a), str(d, true), Vector.dotProduct(a, d).toFixed(2));
                console.log('       CASE2[', 'NO', ']');

                if (history) {
                    history.setHistory(simplex, directions);
                }

                return false; // no collision
            }

            // a가 원점으로 향하는 벡터는 -a 를 하면 됩니다.
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

            console.log('a', a, 'b', b, 'c', c);
            console.log('ao', ao, 'ab', ab, 'ac', ac);
            console.log('acperp', acperp, acperp.clone().norm());
            console.log('dotProduct(acperp, ao)', Vector.dotProduct(acperp, ao));

            // ac 수직 선분이 a가 원점을 향하는 방향 반대편에 있고
            // 즉, ac 수직 선분 안쪽에 원점이 있으면
            if (Vector.dotProduct(acperp, ao) >= 0) {
                d = acperp; // new direction is normal to AC towards Origin
                console.log('new direction is normal to AC towards Origin', d);
            }
            else {
                // ab 수직 선분
                abperp = Vector.tripleProduct(ac, ab, ab);
                console.log('abperp', abperp, abperp.clone().norm());
                console.log('dotProduct(abperp, ao)', Vector.dotProduct(abperp, ao));

                // ab 수직 선분이 원점 반대 방향을 향하고 있으면
                // 즉, 원점이 삼각형 안에 있으면
                if (Vector.dotProduct(abperp, ao) < 0) {

                    if (history) {
                        history.setHistory(simplex, directions);
                    }

                    return true; // collision
                }

                simplex[0] = simplex[1]; // swap first element (point C)
                d = abperp; // new direction is normal to AB towards Origin
            }

            simplex[1] = simplex[2]; // swap element in the middle (point B)
            --index;
        }

        if (history) {
            history.setHistory(simplex, directions);
        }

        return false;
    }

    static distance(vertices1, vertices2, separation = null)
    {
        let a, b, c, d, p1, p2, p1Mag, p2Mag, projection;

        // 두 폴리곤 중심 좌표를 통해서 방향을 구합니다.
        const c1 = this.averagePoint(vertices1); // not a CoG but
        const c2 = this.averagePoint(vertices2); // it's ok for GJK )

        // initial direction from the center of 1st body to the center of 2nd body
        d = Vector.subtract(c1, c2);

        if (d.isZero()) {
            return false;
        }

        a = this.support2(vertices1, vertices2, d);
        b = this.support2(vertices1, vertices2, d.invert());

        d = GJK.getPointOnSegmentClosestToPoint(ORIGIN, a.point, b.point);

        for (let i = 0; i < DEFAULT_MAX_ITERATIONS; i++) {
            d = d.invert();

            if(d.lengthSq() <= TOLERANCE) {
                // if the closest point is the origin then the shapes are not separated
                return false;
            }

            c = this.support2(vertices1, vertices2, d);

            if (GJK.containsOrigin(a.point, b.point, c.point)) {
                // if it does then return false;
                return false;
            }

            // see if the new point is far enough along d
            projection = c.point.dot(d);

            if ((projection - a.point.dot(d)) < TOLERANCE) {
                // then the new point we just made is not far enough
                // in the direction of n so we can stop now
                // normalize d
                d.normalize();

                separation.normal = d;
                separation.distance = -c.point.dot(d);
                GJK.findClosestPoints(a, b, separation);

                console.log('NONO1');
                return true;
            }

            p1 = GJK.getPointOnSegmentClosestToPoint(ORIGIN, a.point, c.point);
            p2 = GJK.getPointOnSegmentClosestToPoint(ORIGIN, c.point, b.point);
            p1Mag = p1.lengthSq();
            p2Mag = p2.lengthSq();

            if (p1Mag <= TOLERANCE) {
                d.normalize()();
                separation.distance = p1.normalize();
                separation.normal = d;
                GJK.findClosestPoints(a, c, separation);
                console.log('NONO2');
                return true;
            } else if (p2Mag <= TOLERANCE) {
                d.normalize();
                separation.distance = p2.normalize();
                separation.normal = d;
                GJK.findClosestPoints(c, b, separation);
                console.log('NONO3');
                return true;
            }

            if (p1Mag < p2Mag) {
                b = c;
                d = p1;
            } else {
                a = c;
                d = p2;
            }
        }
        
        d.normalize();
        separation.normal = d;
        separation.distance = -c.point.dot(d);
        GJK.findClosestPoints(a, b, separation);
        console.log('NONO4');
        return true;
    }

    /**
     * Returns true if the origin is within the triangle given by
     * a, b, and c.
     * <p>
     * If the origin lies on the same side of all the points then we
     * know that the origin is in the triangle.
     * <pre> sign(location(origin, a, b)) == sign(location(origin, b, c)) == sign(location(origin, c, a))</pre>
     * The {@link Segment#getLocation(Vector2, Vector2, Vector2)} method
     * can be simplified because we are using the origin as the search point:
     * <pre> = (b.x - a.x) * (origin.y - a.y) - (origin.x - a.x) * (b.y - a.y)
     * = (b.x - a.x) * (-a.y) - (-a.x) * (b.y - a.y)
     * = -a.y * b.x + a.y * a.x + a.x * b.y - a.x * a.y
     * = -a.y * b.x + a.x * b.y
     * = a.x * b.y - a.y * b.x
     * = a.cross(b)</pre>
     * @param a the first point
     * @param b the second point
     * @param c the third point
     * @return boolean
     */
    static containsOrigin(a, b, c) {
        const sa = a.cross(b)
            , sb = b.cross(c)
            , sc = c.cross(a);
        return (sa * sb > 0 && sa * sc > 0);
    }

    /**
     * Finds the closest points on A and B given the termination simplex and places
     * them into point1 and point2 of the given {@link Separation} object.
     * <p>
     * The support points used to obtain a and b are not good enough since the support
     * methods of {@link Convex} {@link Shape}s only return the farthest <em>vertex</em>, not
     * necessarily the farthest point.
     * @param a the first simplex point
     * @param b the second simplex point
     * @param separation the {@link Separation} object to populate
     * @see <a href="http://www.dyn4j.org/2010/04/gjk-distance-closest-points/" target="_blank">GJK - Distance &amp; Closest Points</a>
     */
    static findClosestPoints(a, b, separation)
    {
        const p1 = new Vector()
            , p2 = new Vector()
            , l = Vector.subtract(a.point, b.point);

        if (l.isZero()) {
            p1.set(a.supportPoint1);
            p2.set(a.supportPoint2);
        } else {
            const ll = l.dot(l)
                , l2 = -l.dot(a.point) / ll
                , l1 = 1 - l2;

            // check if either lambda1 or lambda2 is less than zero
            if (l1 < 0) {
                // if lambda1 is less than zero then that means that
                // the support points of the Minkowski point B are
                // the closest points
                p1.set(b.supportPoint1);
                p2.set(b.supportPoint2);
            } else if (l2 < 0) {
                // if lambda2 is less than zero then that means that
                // the support points of the Minkowski point A are
                // the closest points
                p1.set(a.supportPoint1);
                p2.set(a.supportPoint2);
            } else {
                // compute the closest points using lambda1 and lambda2
                // this is the expanded version of
                // p1 = a.p1.multiply(l1).add(b.p1.multiply(l2));
                // p2 = a.p2.multiply(l1).add(b.p2.multiply(l2));
                p1.x = a.supportPoint1.x * l1 + b.supportPoint1.x * l2;
                p1.y = a.supportPoint1.y * l1 + b.supportPoint1.y * l2;
                p2.x = a.supportPoint2.x * l1 + b.supportPoint2.x * l2;
                p2.y = a.supportPoint2.y * l1 + b.supportPoint2.y * l2;
            }
        }
        // set the new points in the separation object
        separation.point1 = p1;
        separation.point2 = p2;
    }

    static closestPointToOrigin(a, b)
    {
        const ab = a.to(b)
            , ao = a.to(new Vector())
            , projAoOntoAb = ao.dot(ab)
            , lengthSquared = ab.dot(ab)
            , t = projAoOntoAb / lengthSquared
            , closetPoint = Vector.multiplyScalar(ab, t).add(a)
            , d = closetPoint.magnitude();

        return {point: closetPoint, depth: d};
    }


    /**
     * Returns the point on the given line segment closest to the given point.
     * <p>
     * If the point closest to the given point is on the line created by the
     * given line segment, but is not on the line segment then either of the segments
     * end points will be returned.
     * <p>
     * Assumes all points are in world space.
     * @see Segment#getPointOnLineClosestToPoint(Vector2, Vector2, Vector2)
     * @param point the point
     * @param linePoint1 the first point of the line
     * @param linePoint2 the second point of the line
     * @return {@link Vector2}
     * @throws NullPointerException if point, linePoint1, or linePoint2 is null
     */
    static getPointOnSegmentClosestToPoint(point, linePoint1, linePoint2)
    {
        // create a vector from the point to the first line point
        const p1ToP = Vector.subtract(point, linePoint1)
            // create a vector representing the line
            , line = Vector.subtract(linePoint2, linePoint1)
            // get the length squared of the line
            , ab2 = line.dot(line)
            , ap_ab = p1ToP.dot(line);

        if (ab2 <= TOLERANCE) {
            return linePoint1.clone();
        }

        let t = ap_ab / ab2;
        t = clamp(t, 0.0, 1.0);
        return line.multiplyScalar(t).add(linePoint1);
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


function clamp(value, min, max) {
    if (value <= max && value >= min) {
        return value;
    } else if (max < value) {
        return max;
    } else {
        return min;
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

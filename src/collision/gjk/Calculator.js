import Vector from './../geom/Vector';
import Painter from './../utils/Painter';



export default class Calculator
{
    /**
     *
     * This is to compute average center (roughly). It might be different from
     * Center of Gravity, especially for bodies with nonuniform density,
     * but this is ok as initial direction of simplex search in GJK
     * @param vertices
     * @param count
     * @param direction
     */
    static averagePoint(vertices, count)
    {
        const avg = new Vector();

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
     * @param vertices
     * @param count
     * @param direction
     */
    static indexOfFurthestPoint(vertices, count, direction)
    {
        let index = 0;
        let maxProduct = Vector.dotProduct(direction, vertices[0]);

        for (let i = 0; i < count; i++) {
            let product = Vector.dotProduct(direction, vertices[i]);

            if (product > maxProduct) {
                maxProduct = product;
                index = i;
            }
        }

        return index;
    }


    /**
     * Minkowski sum support function for GJK
     * @param vertices1
     * @param count1
     * @param vertices2
     * @param count2
     * @param direction
     */
    static support(vertices1, count1, vertices2, count2, direction)
    {
        // get furthest point of first body along an arbitrary direction
        const i = this.indexOfFurthestPoint(vertices1, count1, direction);

        // get furthest point of second body along the opposite direction
        const j = this.indexOfFurthestPoint(vertices2, count2, this.negate(direction));

        const v1 = vertices1[i]
            , v2 = vertices2[j];


        // subtract (Minkowski sum) the two points to see if bodies 'overlap'
        return Vector.subtract(vertices1[i], vertices2[j]);
    }


    static gjk(vertices1, count1, vertices2, count2)
    {
        return;

        console.log('gjk(', vertices1, count1, vertices2, count2, ')');

        // index of current vertex of simplex
        let iter_count = 0, index = 0;
        let a, b, c, d, ao, ab, ac, abperp, acperp, simplex = [];

        const position1 = this.averagePoint(vertices1, count1); // not a CoG but
        const position2 = this.averagePoint(vertices2, count2); // it's ok for GJK )

        const c1 = position1.clone().multiplyScalar(10)
            , c2 = position2.clone().multiplyScalar(10);

        Painter.drawLine(window.g, c1, c2, false, 1, 0x00BCD4);

        // initial direction from the center of 1st body to the center of 2nd body
        d = Vector.subtract(position1, position2);

        // if initial direction is zero – set it to any arbitrary axis (we choose X)
        if ((d.x == 0) && (d.y == 0)) {
            d.x = 1.0;
        }

        console.log('d', d);


        // set the first support as initial point of the new simplex
        a = simplex[0] = this.support(vertices1, count1, vertices2, count2, d);


        // const simplex0 = a.clone().multiplyScalar(10);
        // Painter.drawPoint(window.g, simplex0, false, 5);


        if (this.dotProduct(a, d) <= 0) {
            console.log('no collision 1');
            return 0; // no collision
        }

        d = this.negate(a); // The next search direction is always towards the origin, so the next search direction is negate(a)

        while (1) {
            iter_count++;

            a = simplex[++index] = this.support(vertices1, count1, vertices2, count2, d);

            if (this.dotProduct(a, d) <= 0) {
                return 0; // no collision
            }

            ao = this.negate(a); // from point A to Origin is just negative A

            // simplex has 2 points (a line segment, not a triangle yet)
            if (index < 2) {
                b = simplex[0];
                ab = this.subtract(b, a); // from point A to B
                d = this.tripleProduct(ab, ao, ab); // normal to AB towards Origin
                if (this.lengthSquared(d) == 0) {
                    d = this.perpendicular(ab);
                }
                continue; // skip to next iteration
            }

            b = simplex[1];
            c = simplex[0];
            ab = this.subtract(b, a); // from point A to B
            ac = this.subtract(c, a); // from point A to C

            acperp = this.tripleProduct(ab, ac, ac);

            if (this.dotProduct(acperp, ao) >= 0) {
                d = acperp; // new direction is normal to AC towards Origin
            }
            else {
                abperp = this.tripleProduct(ac, ab, ab);

                if (this.dotProduct(abperp, ao) < 0) {
                    return 1; // collision
                }


                simplex[0] = simplex[1]; // swap first element (point C)
                d = abperp; // new direction is normal to AB towards Origin
            }

            simplex[1] = simplex[2]; // swap element in the middle (point B)
            --index;
        }

        return 0;
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

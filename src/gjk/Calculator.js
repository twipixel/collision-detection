import Vector from '../geom/Vector';
import Painter from '../utils/Painter';



export default class Calculator
{
    /**
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
        const j = this.indexOfFurthestPoint(vertices2, count2, Vector.negate(direction));

        const v1 = vertices1[i]
            , v2 = vertices2[j];

        const diff = Vector.subtract(v1, v2);

        const d = direction.clone().normalize();
        console.log('support', `Minkowski sum[${diff.x}, ${diff.y}]`, `v1[${v1.x}, ${v1.y}]`, `v2[${v2.x}, ${v2.y}]`, `d[${d.x.toFixed(2)}, ${d.y.toFixed(2)}]`);

        Painter.drawPoint(window.g, diff.clone().multiplyScalar(window.magnification), false, 2, 0xdddddd);

        // subtract (Minkowski sum) the two points to see if bodies 'overlap'
        return diff;
    }


    static gjk(vertices1, count1, vertices2, count2)
    {
        console.log('-------------------------------------------------');
        console.log('gjk(', vertices1, count1, vertices2, count2, ')');
        console.log('-------------------------------------------------');

        // const vertices = [...vertices1, ...vertices2];

        console.log('vertices1');
        console.log('-------------------------------------------------');
        vertices1.forEach((vec, index) => {
            console.log(index, `vec[${vec.x}, ${vec.y}]`);
        });

        console.log('-------------------------------------------------');
        console.log('vertices2');
        console.log('-------------------------------------------------');
        vertices2.forEach((vec, index) => {
            console.log(index, `vec[${vec.x}, ${vec.y}]`);
        });
        console.log('-------------------------------------------------');


        // 디버그용
        const lineAlpha = 0.5
            // 블루
            , abBlue = 0x00BCD4
            // 당금색
            , acCarrot = 0xe67e22;

        // index of current vertex of simplex
        let iter_count = 0, index = 0;
        let a, b, c, d, dn, ao, ab, ac, abperp, acperp, simplex = [];

        const position1 = this.averagePoint(vertices1, count1); // not a CoG but
        const position2 = this.averagePoint(vertices2, count2); // it's ok for GJK )

        const c1 = position1.clone().multiplyScalar(window.magnification)
            , c2 = position2.clone().multiplyScalar(window.magnification);

        Painter.drawLine(window.g, c1, c2, false, 1, 0xdddddd, 0.3);

        // initial direction from the center of 1st body to the center of 2nd body
        d = Vector.subtract(position1, position2);

        console.log(`c1[${position1.x.toFixed(2)}, ${position1.y.toFixed(2)}]`, `c2[${position2.x.toFixed(2)}, ${position2.y.toFixed(2)}]`, `d[${d.x.toFixed(2)}, ${d.y.toFixed(2)}]`);
        console.log('-------------------------------------------------');

        // if initial direction is zero – set it to any arbitrary axis (we choose X)
        if ((d.x == 0) && (d.y == 0)) {
            d.x = 1.0;

            console.log('** direction is zero **');
        }

        // set the first support as initial point of the new simplex
        a = simplex[0] = this.support(vertices1, count1, vertices2, count2, d);

        dn = d.clone().normalize();
        console.log('-------------------------------------------------');
        console.log(`Simplex[${index}]`, `a[${a.x.toFixed()}, ${a.y.toFixed()}][0]`, `d[${dn.x.toFixed(2)}, ${dn.y.toFixed(2)}]`, Vector.dotProduct(a, d));
        console.log('-------------------------------------------------');
        console.log(`Vector.dotProduct((${a.x.toFixed()}, ${a.y.toFixed()}),(${dn.x.toFixed(2)}, ${dn.y.toFixed(2)})) <= 0`, Vector.dotProduct(a, d));

        if (Vector.dotProduct(a, d) <= 0) {
            console.log('1. no collision');
            return 0; // no collision
        }

        d = Vector.negate(a); // The next search direction is always towards the origin, so the next search direction is negate(a)

        console.log(`Vector.negate(${a}) = ${d}`);

        while (1) {
            iter_count++;

            a = simplex[++index] = this.support(vertices1, count1, vertices2, count2, d);

            dn = d.clone().normalize();
            console.log('-------------------------------------------------');
            console.log(`Simplex[${index}]`, `a[${a.x.toFixed()}, ${a.y.toFixed()}][1]`, `d[${dn.x.toFixed(2)}, ${dn.y.toFixed(2)}]`, Vector.dotProduct(a, d).toFixed(2));
            console.log('-------------------------------------------------');
            console.log(`Vector.dotProduct((${a.x.toFixed()}, ${a.y.toFixed()}),(${dn.x.toFixed(2)}, ${dn.y.toFixed(2)})) <= 0`, Vector.dotProduct(a, d));

            if (Vector.dotProduct(a, d) <= 0) {
                console.log('2. no collision');
                return 0; // no collision
            }

            ao = Vector.negate(a); // from point A to Origin is just negative A

            console.log(`ao[${ao.x.toFixed(2)}, ${ao.y.toFixed(2)}]`);
            console.log('-------------------------------------------------');

            // simplex has 2 points (a line segment, not a triangle yet)
            if (index < 2) {
                b = simplex[0];
                ab = Vector.subtract(b, a); // from point A to B
                d = Vector.tripleProduct(ab, ao, ab); // normal to AB towards Origin

                if (Vector.lengthSq(d) == 0) {
                    d = Vector.perpendicular(ab);
                }

                // a -> b
                Painter.drawLine(window.g, a.clone().multiplyScalar(window.magnification), b.clone().multiplyScalar(window.magnification), false, 1, abBlue, lineAlpha);

                // ab -> ao
                Painter.drawLine(window.g, this.midpoint(a, b).multiplyScalar(window.magnification), d, false, 1, abBlue, lineAlpha);

                // console.log('Simplex 2개 로직, 첫 루프만 여길 실행');
                dn = d.clone().normalize();
                console.log(`Simplex[${index}]`, `a[${a.x.toFixed()}, ${a.y.toFixed()}][1]`, `b[${b.x.toFixed()}, ${b.y.toFixed()}][0]`, `d[${dn.x.toFixed(2)}, ${dn.y.toFixed(2)}]`);
                console.log('-------------------------------------------------');
                continue; // skip to next iteration
            }

            b = simplex[1];
            c = simplex[0];
            ab = Vector.subtract(b, a); // from point A to B
            ac = Vector.subtract(c, a); // from point A to C

            //ac와 수직
            acperp = Vector.tripleProduct(ab, ac, ac);

            // a -> b
            Painter.drawLine(window.g, a.clone().multiplyScalar(window.magnification), b.clone().multiplyScalar(window.magnification), false, 1, abBlue, lineAlpha);

            // a -> c
            Painter.drawLine(window.g, a.clone().multiplyScalar(window.magnification), c.clone().multiplyScalar(window.magnification), false, 1, acCarrot, lineAlpha);

            // ac -> acperp
            Painter.drawLine(window.g, this.midpoint(a, c).clone().multiplyScalar(window.magnification), acperp, false, 1, acCarrot, lineAlpha);
            // Painter.drawLine(window.g, this.averagePoint([a, b, c], 3).multiplyScalar(window.magnification), acperp, false, 1, acBlue, lineAlpha);

            // console.log('Simplex 3개 로직, 두 번째 루프부터 여기 계속 실행');
            dn = d.clone().normalize();
            console.log(`Simplex[${index}]`, `a[${a.x.toFixed()}, ${a.y.toFixed()}][2]`, `b[${b.x.toFixed()}, ${b.y.toFixed()}][1]`, `c[${c.x.toFixed()}, ${c.y.toFixed()}][0]`, `d[${dn.x.toFixed(2)}, ${dn.y.toFixed(2)}]`, `acperp[${acperp.clone().normalize().x.toFixed(2)}, ${acperp.clone().normalize().y.toFixed(2)}]`, Vector.dotProduct(acperp, ao), Vector.dotProduct(acperp, ao) >= 0);
            console.log('-------------------------------------------------');

            // ac 수직 선분이 원점을 보도록 방향 설정
            if (Vector.dotProduct(acperp, ao) >= 0) {
                d = acperp; // new direction is normal to AC towards Origin
                dn = d.clone().normalize();
                console.log('>>>', `d[${dn.x}, ${dn.y}]`);
            }
            else {
                abperp = Vector.tripleProduct(ac, ab, ab);
                // abperp = Vector.tripleProduct(ac, Vector.negate(ab), ab);

                dn = abperp.clone().normalize();

                console.log(`abperp[${dn.x.toFixed(2)}, ${dn.y.toFixed(2)}]`);

                // a -> b
                Painter.drawLine(window.g, a.clone().multiplyScalar(window.magnification), b.clone().multiplyScalar(window.magnification), false, 1, abBlue, lineAlpha);

                // ab -> abperp
                Painter.drawLine(window.g, this.midpoint(a, b).clone().multiplyScalar(window.magnification), abperp, false, 1, abBlue, lineAlpha);

                // ab 수직 선분이 원점 반대 방향을 향하고 있으면 즉, 원점이 삼각형 안에 있으면
                if (Vector.dotProduct(abperp, ao) < 0) {
                    console.log('>>> collision');
                    return 1; // collision
                }

                simplex[0] = simplex[1]; // swap first element (point C)
                d = abperp; // new direction is normal to AB towards Origin
            }

            simplex[1] = simplex[2]; // swap element in the middle (point B)
            --index;
        }

        console.log('3. no collision');
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

/*
 * Copyright (c) 2010-2016 William Bittle  http://www.dyn4j.org/
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:
 *
 *   * Redistributions of source code must retain the above copyright notice, this list of conditions
 *     and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 *     and the following disclaimer in the documentation and/or other materials provided with the
 *     distribution.
 *   * Neither the name of dyn4j nor the names of its contributors may be used to endorse or
 *     promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
 * OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import Vector from '../Vector';
import Epsilon from './Epsilon';
import MinkowskiSum from './MinkowskiSum';

const DEFAULT_MAX_ITERATIONS = 30;
const DEFAULT_DETECT_EPSILON = 0;

export default class Gjk {
    constructor(minkowskiPenetrationSolver) {
        this.minkowskiPenetrationSolver = minkowskiPenetrationSolver;
    }

    getInitialDirection(convex1, convex2) {
        // transform into world space if transform is not null
        const c1 = convex1.getCenter();
        const c2 = convex2.getCenter();
        // choose some search direction
        return c2.subtract(c1);
    }

    /**
     *
     * @param convex1 {Convex}
     * @param convex2 {Convex}
     * @param penetration {Penetraion}
     * @param history {History}
     */
    detect(convex1, convex2, penetration, history) {
        const simplex = [];

        // create a Minkowski sum
        const ms = new MinkowskiSum(convex1, convex2);

        // choose some search direction
        const direction = this.getInitialDirection(convex1, convex2);

        // perform the detection
        if (this.detect2(ms, simplex, direction, history)) {
            // this.minkowskiPenetrationSolver.getPenetration(simplex, ms, penetration);
            return true;
        }

        return false;
    }

    /**
     *
     * @param ms {MinkowskiSum}
     * @param simplex {Vector[]}
     * @param direction {Vector}
     * @param history {History} 디버그용
     * @returns {boolean}
     */
    detect2(ms, simplex, direction, history = null) {
        // 디버그용 히스토리
        const directions = new Array(3);
        // check for a zero direction vector
        if (direction.isZero()) {
            direction.set(1, 0);
        }
        // add the first point
        simplex[0] = ms.getSupportPoint(direction);
        directions[0] = direction;
        // is the support point past the origin along d?
        // support point 방향을 따라 원점을 지나는지 체크 (원점을 지나지 않는다면X)
        if (simplex[0].dot(direction) <= 0) {

            if (history) {
                history.setHistory(simplex, directions);
            }

            return false;
        }
        // negate the search direction
        direction.invert();
        // start the loop
        for (let i = 0; i < DEFAULT_MAX_ITERATIONS; i++) {
            // always add another point to the simplex at the beginning of the loop
            simplex.push(ms.getSupportPoint(direction));
            directions[simplex.length - 1] = direction;
            // make sure that the last point we added was past the origin
            if (simplex[simplex.length - 1].dot(direction) <= DEFAULT_DETECT_EPSILON) {
                // a is not past the origin so therefore the shapes do not intersect
                // here we treat the origin on the line as no intersection
                // immediately return with null indicating no penetration

                if (history) {
                    history.setHistory(simplex, directions);
                }

                return false;
            } else {
                // if it is past the origin, then test whether the simplex contains the origin
                if (this.checkSimplex(simplex, direction)) {
                    // if the simplex contains the origin then we know that there is an intersection.
                    // if we broke out of the loop then we know there was an intersection

                    if (history) {
                        history.setHistory(simplex, directions);
                    }

                    return true;
                }
                // if the simplex does not contain the origin then we need to loop using the new
                // search direction and simplex
            }
        }

        if (history) {
            history.setHistory(simplex, directions);
        }

        return false;
    }

    /**
     * Determines whether the given simplex contains the origin.  If it does contain the origin,
     * then this method will return true.  If it does not, this method will update both the given
     * simplex and also the given search direction.
     * <p>
     * This method only handles the line segment and triangle simplex cases, however, these two cases
     * should be the only ones needed for 2 dimensional {@link Gjk}.  The single point case is handled
     * in {@link #detect(MinkowskiSum, List, Vector2)}.
     * <p>
     * This method also assumes that the last point in the simplex is the most recently added point.
     * This matters because optimizations are available when you know this information.
     * @param simplex {Vector[]}
     * @param direction {Vector}
     * @returns {boolean}
     */
    checkSimplex(simplex, direction) {
        // this method should never be supplied anything other than 2 or 3 points for the simplex
        // get the last point added (a)
        const a = simplex[simplex.length - 1];
        // this is the same as a.to(ORIGIN);
        const ao = Vector.negate(a);
        // check to see what type of simplex we have
        if (simplex.length == 3) {
            // then we have a triangle
            const b = simplex[1];
            const c = simplex[0];
            // get the edges
            const ab = a.to(b);
            const ac = a.to(c);
            // get the edge normal
            const acPerp = Vector.tripleProduct(ab, ac, ac);
            // see where the origin is at
            const acLocation = acPerp.dot(ao);
            if (acLocation >= 0) {
                // 원점은 A -> C의 오른쪽에있다.
                // the origin lies on the right side of A->C
                // because of the condition for the gjk loop to continue the origin
                // must lie between A and C so remove B and set the
                // new search direction to A->C perpendicular vector
                simplex.splice(1, 1);
                // this used to be direction.set(Vector.tripleProduct(ac, ao, ac));
                // but was changed since the origin may lie on the segment created
                // by a -> c in which case would produce a zero vector normal
                // calculating ac's normal using b is more robust
                direction.set(acPerp);
            } else {
                const abPerp = Vector.tripleProduct(ac, ab, ab);
                const abLocation = abPerp.dot(ao);
                // the origin lies on the left side of A->C
                if (abLocation < 0) {
                    // the origin lies on the right side of A->B and therefore in the
                    // triangle, we have an intersection
                    return true;
                } else {
                    // the origin lies between A and B so remove C and set the
                    // search direction to A->B perpendicular vector
                    simplex.splice(0, 1);
                    // this used to be direction.set(Vector.tripleProduct(ab, ao, ab));
                    // but was changed since the origin may lie on the segment created
                    // by a -> b in which case would produce a zero vector normal
                    // calculating ab's normal using c is more robust
                    direction.set(abPerp);
                }
            }
        } else {
            // get the b point
            const b = simplex[0];
            const ab = a.to(b);
            // otherwise we have 2 points (line segment)
            // because of the condition for the gjk loop to continue the origin
            // must lie in between A and B, so keep both points in the simplex and
            // set the direction to the perp of the line segment towards the origin
            direction.set(Vector.tripleProduct(ab, ao, ab));
            // check for degenerate cases where the origin lies on the segment
            // created by a -> b which will yield a zero edge normal
            if (direction.getMagnitudeSquared() <= Epsilon.E) {
                // in this case just choose either normal (left or right)
                direction.set(ab.left());
            }
        }
        return false;
    }
}

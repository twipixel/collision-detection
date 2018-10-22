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

import Epsilon from './Epsilon';
import ExpandingSimplex from './ExpandingSimplex';


const DEFAULT_MAX_ITERATIONS = 100
    , DEFAULT_DISTANCE_EPSILON = Math.sqrt(Epsilon.E);


export default class Epa {

    static get DEFAULT_MAX_ITERATIONS() {
        return DEFAULT_MAX_ITERATIONS;
    }

    static get DEFAULT_DISTANCE_EPSILON() {
        return DEFAULT_DISTANCE_EPSILON;
    }

    constructor() {
        this.maxIterations = DEFAULT_MAX_ITERATIONS;
        this.distanceEpsilon = DEFAULT_DISTANCE_EPSILON;

        // console.log('EPA');
        // console.log('maxIterations', this.maxIterations);
        // console.log('distanceEpsilon', this.distanceEpsilon);
    }

    /**
     * 침투 결과를 반환합니다.
     * @param simplex {Vector[]}
     * @param minkowskiSum {MinkowskiSum}
     * @param penetration {Penetration}
     */
    getPenetration(simplex, minkowskiSum, penetration) {
        // ExpadingSimplex를 생성하면 이미 normal 과 depth 를 알고 있는게 아닌가?
        const smplx = new ExpandingSimplex(simplex)
            , peek = smplx.queue.peek();
        let edge = null, point = null;

        console.log('getPenetration', 'smplx.size', smplx.queue.size);

        // 침투 결과는 이미 충돌이 되었을 때 simplex 로 구합니다.
        // PriorityQueue 로 가장 근전합 Edge 를 알고 있습니다.
        // 근접한 Edge normal 로 simplex 를 반환합니다.
        for (let i = 0; i < this.maxIterations; i++) {
            edge = smplx.getClosestEdge();
            point = minkowskiSum.getSupportPoint(edge.normal);

            const projection = point.dot(edge.normal);

            console.log(i, 'edge.distance:', edge.distance, 'projection', projection, '(projection - edge.distance)', (projection - edge.distance));
            if ((projection - edge.distance) < this.distanceEpsilon) {
                penetration.normal = edge.normal;
                penetration.depth = projection;

                console.log('----------------------------------');
                console.log('penetration', penetration.normal, penetration.depth);
                console.log('----------------------------------');
                console.log('peek', peek.normal, peek.distance);
                console.log('----------------------------------');
                return;
            }

            smplx.expand(point);
        }

        penetration.normal = edge.normal;
        penetration.depth = point.dot(edge.normal);

        console.log('----------------------------------');
        console.log('penetration', penetration.normal, penetration.depth);
        console.log('----------------------------------');
        console.log('peek', peek.normal, peek.distance);
        console.log('----------------------------------');
    }

    getMxItrations() {
        return this.maxIterations;
    }

    setMaxIterations(maxIterations) {
        if (maxIterations < 5) {
            throw new Error('collision.narrowphase.epa.invalidMaximumIterations');
        }
        this.maxIterations = maxIterations;
    }

    getDistanceEpsilon() {
        return this.distanceEpsilon;
    }

    setDistanceEpsilon(distanceEpsilon) {
        if (distanceEpsilon <= 0) {
            throw new Error('collision.narrowphase.epa.invalidDistanceEpsilon');
        }
        this.distanceEpsilon = distanceEpsilon;
    }
}

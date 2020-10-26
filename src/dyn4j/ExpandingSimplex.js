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

import PriorityQueue from 'stablepriorityqueue';
import ExpandingSimplexEdge from './ExpandingSimplexEdge';


export default class ExpandingSimplex {

    /**
     *
     * @param simplex {Vector[]}
     */
    constructor(simplex) {
        this.winding = this.getWinding(simplex);

        this.queue = new PriorityQueue((a, b) => {
            if (a.distance < b.distance) {
                return -1;
            }
            if (a.distance > b.distance) {
                return 1;
            }
            return 0;
        });

        const size = simplex.length;

        // console.log('size', size);
        for (let i = 0; i < size; i++) {
            // compute j
            let j = i + 1 == size ? 0 : i + 1;
            // get the points that make up the current edge
            const a = simplex[i]
                , b = simplex[j];
            // create the edge
            this.queue.add(new ExpandingSimplexEdge(a, b, this.winding));
        }

        // console.log('this.queue.size', this.queue.size);
    }


    /**
     * 심플렉스에 주어진 방향을 리턴합니다.
     *
     * -1 시계 방향
     * 1 반 시계 방향
     * @param simplex {Vector[]}
     */
    getWinding(simplex) {
        const size = simplex.length;

        for (let i = 0; i < size; i++) {
            let j = i + 1 === size ? 0 : i + 1;
            const a = simplex[i]
                , b = simplex[j];

            if (a.cross(b) > 0) {
                // 외적을 통해 외적 값이 양수면 반시계 방향
                return 1;
            } else if (a.cross(b) < 0) {
                // 음수면 반시계 방향
                return -1;
            }
        }
        return 0;
    }

    /**
     *
     * @returns {ExpandingSimplexEdge}
     */
    getClosestEdge() {
        return this.queue.peek();
    }

    /**
     *
     * @param point {Vector}
     */
    expand(point) {
        const edge = this.queue.poll();
        const edge1 = new ExpandingSimplexEdge(edge.point1, point, this.winding);
        const edge2 = new ExpandingSimplexEdge(point, edge.point2, this.winding);
        this.queue.add(edge1);
        this.queue.add(edge2);
    }
}

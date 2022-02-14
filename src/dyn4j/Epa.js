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

  constructor() {
    this.maxIterations = DEFAULT_MAX_ITERATIONS;
    this.distanceEpsilon = DEFAULT_DISTANCE_EPSILON;

    // console.log('EPA');
    // console.log('maxIterations', this.maxIterations);
    // console.log('distanceEpsilon', this.distanceEpsilon);
  }

  static get DEFAULT_MAX_ITERATIONS() {
    return DEFAULT_MAX_ITERATIONS;
  }

  static get DEFAULT_DISTANCE_EPSILON() {
    return DEFAULT_DISTANCE_EPSILON;
  }

  /**
   * 침투 결과를 반환합니다.
   * 시작점 GJK 의 Simplex 로 시작합니다.
   * @param simplex {Vector[]}
   * @param minkowskiSum {MinkowskiSum}
   * @param penetration {Penetration}
   */
  getPenetration(simplex, minkowskiSum, penetration) {
    // ExpadingSimplex를 생성하여 Edge 의 normal 과 depth 를 생성합니다.
    const smplx = new ExpandingSimplex(simplex)
      , peek = smplx.queue.peek();
    let edge = null, point = null;

    // console.log('getPenetration', 'smplx.size', smplx.queue.size);

    // GJK 의 충돌 결과의 Simplex 로 시작합니다.
    // PriorityQueue 로 가장 근접합 Edge 의 normal 로 support 함수를 통해 simplex 를 반환합니다.
    // simplex를 가장 근접한 Edge normal 에 projection 을 합니다.
    // 가장 근접한 edge 의 깊이와 투영 거리가 허용 오차 안에 있으면 침투 normal 과 거리를 를 구한 것입니다.
    // 허용 오차에 있지 않다는 건 Edge 가 볼록하지 않다는 것이여서 볼록하도록 확장합니다.
    // 확장할 때는 가장 가까운 Edge 사이에 새 점을 추가해야합니다.
    // 이렇게 하면 모양이 볼록하게 유지됩니다.
    // 볼록하게 확장 한 후 다시 가장 근접한 Edge 를 구하고
    // 해당 normal 로 support 함수를 통해 simplex 를 구해서 가장 근접한 Edge 의 깊이와 투영 거리가 오차 안에 있는지 체크
    // 허용 오차면 해당 Edge normal 과 프로젝션이 침투 거리가 됩니다.
    for (let i = 0; i < this.maxIterations; i++) {
      edge = smplx.getClosestEdge();
      point = minkowskiSum.getSupportPoint(edge.normal);

      const projection = point.dot(edge.normal);

      // console.log(i, 'edge.distance:', edge.distance, 'projection', projection, '(projection - edge.distance)', (projection - edge.distance));
      if ((projection - edge.distance) < this.distanceEpsilon) {
        penetration.normal = edge.normal;
        penetration.depth = projection;

        // console.log('----------------------------------');
        // console.log('penetration', penetration.normal, penetration.depth);
        // console.log('----------------------------------');
        // console.log('peek', peek.normal, peek.distance);
        // console.log('----------------------------------');
        return;
      }

      smplx.expand(point);
    }

    penetration.normal = edge.normal;
    penetration.depth = point.dot(edge.normal);

    // console.log('----------------------------------');
    // console.log('penetration', penetration.normal, penetration.depth);
    // console.log('----------------------------------');
    // console.log('peek', peek.normal, peek.distance);
    // console.log('----------------------------------');
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

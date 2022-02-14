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
import Convex from './Convex';
import Vector from '../Vector';
import Geometry from './Geometry';


export default class Polygon extends Convex {

  /**
   * 폴리곤
   * @param center {Vector}
   * @param vertices {Vector[]}
   * @param normals {Vector[]}
   */
  constructor(vertices = [], normals = []) {
    super();
    this.vertices = vertices;
    this.normals = (vertices.length !== 0) ?
      Geometry.getCounterClockwiseEdgeNormals(vertices) : normals;
    this.center = this.getCenter();
  }

  getPoints() {
    return this.vertices.slice();
  }

  getCenter() {
    const avg = new Vector()
      , vertices = this.vertices
      , count = vertices.length;

    for (let i = 0; i < count; i++) {
      avg.x += vertices[i].x;
      avg.y += vertices[i].y;
    }

    avg.x /= count;
    avg.y /= count;
    return avg;
  }

  getFarthestPoint(direction) {
    const point = new Vector();
    // set the farthest point to the first one
    point.set(this.vertices[0]);
    // prime the projection amount
    let max = direction.dot(this.vertices[0]);
    const size = this.vertices.length;
    for (let i = 1; i < size; i++) {
      const vertex = this.vertices[i]
        , projection = direction.dot(vertex);

      if (projection > max) {
        point.set(vertex);
        max = projection;
      }
    }

    return point;
  }

  getFarthestFeature(direction) {
    const maximum = new Vector();
    let max = -Number.MAX_VALUE;
    let index = 0;

    const count = this.vertices.length;
    for (let i = 0; i < count; i++) {
      // get the current vertex
      const vertex = this.vertices[i];
      // get the scalar projection of v onto axis
      const projection = direction.dot(vertex);
      // keep the maximum projection point
      if (projection > max) {
        // set the max point
        maximum.set(v);
        // set the new maximum
        max = projection;
        // save the index
        index = i;
      }
    }

    // once we have the point of maximum
    // see which edge is most perpendicular
    const l = index + 1 == count ? 0 : index + 1;
    const r = index - 1 < 0 ? count - 1 : index - 1;

    const leftN = this.normals[index == 0 ? count - 1 : index - 1];
    const rightN = this.normals[index];
    // create the maximum point for the feature (transform the maximum into world space)
    const vm = new PointFeature(maximum, index);
    // is the left or right edge more perpendicular?
    if (leftN.dot(direction) < rightN.dot(direction)) {
      const left = this.vertices[l];
      const vl = new PointFeature(left, l);
      // make sure the edge is the right winding
      return new EdgeFeature(vm, vl, vm, maximum.to(left), index + 1);
    }

    const right = this.vertices[r];
    const vr = new PointFeature(right, r);
    // make sure the edge is the right winding
    return new EdgeFeature(vr, vm, vm, right.to(maximum), index);
  }
}
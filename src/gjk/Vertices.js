export default class Vertices {
  constructor(vertices = []) {
    this.vertices = vertices;
  }

  multiply(scalar) {
    this.vertices.forEach((vertex) => {
      vertex.x *= scalar;
      vertex.y *= scalar;
    });
  }

  divide(scalar) {
    this.vertices.forEach((vertex) => {
      vertex.x /= scalar;
      vertex.y /= scalar;
    });
  }

  clone() {
    const vertices = [];
    this.vertices.forEach((vertex, index) => {
      vertices[index] = vertex.clone();
    });
    return vertices;
  }
}

export default class ExpandingSimplexEdge {

    /**
     * @param point1 {Vector}
     * @param point2 {Vector}
     * @param winding {number} -1 시계 방향, 1 반시계 방향
     */
    constructor(point1, point2, winding) {
        // create the edge
        // inline b - a
        this.normal = new Vector(point2.x - point1.x, point2.y - point1.y);

        if (winding < 0) {
            this.normal.right();
        } else {
            this.normal.left();
        }

        this.normal.normalize();

        this.distance = Math.abs(point1.x * this.normal.x + point1.y * this.normal.y);
        this.point1 = point1;
        this.point2 = point2;
    }

    /**
     *
     * @param o {ExpandingSimplexEdge}
     */
    compareTo(o) {
        if (this.distance < o.distance) return -1;
        if (this.distance > o.distance) return 1;
        return 0;
    }
}
import Vector from '../Vector';


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

        // 와인딩에 따라 가장자리가 정상적으로됩니다.
        // Vector.tripleProduct (ab, ao, ab)를 사용하는 것이 좋습니다.
        // ab는 가장자리이고 ao는 a.to (ORIGIN)이지만 이것은
        // 원점이 ab 세그먼트에 있으면 잘못된 법선을 반환합니다.
        // 그러므로 우리는 심플의 와인딩을 사용하여
        // 법선 방향
        // 즉, 원접으로 향하는 normal 백터를 만듭니다.
        if (winding < 0) {
            // 시계 방향이면 오른쪽
            this.normal.right();
        } else {
            // 반시계 방향이면 왼쪽
            this.normal.left();
        }

        this.normal.normalize();

        // double d = Math.abs(a.dot(normal))
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
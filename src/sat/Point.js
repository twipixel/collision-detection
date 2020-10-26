export default class Point
{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isSame(point) {
        return this.x === point.x && this.y === point.y;
    }
}
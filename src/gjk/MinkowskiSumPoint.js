import Vector from '../Vector';


export default class MinkowskiSumPoint {
    constructor(supportPoint1, supportPoint2) {
        this.supportPoint1 = supportPoint1;
        this.supportPoint2 = supportPoint2;
        this.point = Vector.subtract(supportPoint1, supportPoint2);
    }
}
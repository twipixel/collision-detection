export default class Vector
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }


    getMagnitude()
    {
        return Math.sqrt(Math.pow(this.x, 2) +
            Math.pow(this.y, 2));
    }


    add(vector)
    {
        var v = new Vector();
        v.x = this.x + vector.x;
        v.y = this.y + vector.y;
        return v;
    }


    subtract(vector)
    {
        var v = new Vector();
        v.x = this.x - vector.x;
        v.y = this.y - vector.y;
        return v;
    }


    dotProduct(vector)
    {
        return this.x * vector.x +
            this.y * vector.y;
    }


    edge(vector)
    {
        return this.subtract(vector);
    }


    /**
     * 수직 벡터 생성
     * @returns {Vector}
     */
    perpendicular()
    {
        var v = new Vector();
        v.x = this.y;
        v.y = 0-this.x;
        return v;
    }


    normalize()
    {
        var v = new Vector(),
            m = this.getMagnitude();
        v.x = this.x / m;
        v.y = this.y / m;
        return v;
    }


    /**
     * 정규화된 수직 벡터 생성
     * @returns {*|string|void|XMLList|XML|Victor}
     */
    normal()
    {
        var p = this.perpendicular();
        return p.normalize();
    }



    rotate(theta)
    {
        var xtemp = this.x;
        this.x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
        this.y = xtemp * Math.sin(theta) + this.y * Math.cos(theta);
        return this;
    }


    multiplyScalar(s)
    {
        this.x *= s;
        this.y *= s;
        return this;
    }


    invert(v) {
        this.x *= -1;
        this.y *= -1;
        return this;
    }


    setLength(l)
    {
        var oldLength = this.length();
        if(oldLength !== 0 && l !== oldLength) {
            this.multiplyScalar(l / oldLength);
        }
        return this;
    }


    length(v)
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }


    equals(v)
    {
        return this.x === v.x && this.y === v.y;
    }


    clone()
    {
        return new Vector(this.x, this.y);
    }
}
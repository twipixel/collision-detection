

export default class Vec2
{
    constructor(x = 0, y = 0)
    {
        this.x = x,
        this.y = y,
        this.zero = new Vec2(0, 0);
    }


    set(x, y)
    {
        this.x = x,
        this.y = y;
    }


    copy(vec)
    {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    }


    duplicate()
    {
        return new Vec2(this.x, this.y);
    }


    equal(vec)
    {
        return (this.x != vec.x || this.y != vec.y) ? false : true;
    }


    add(vec1, vec2)
    {
        this.x = vec1.x + vec2.x,
        this.y = vec1.y + vec2.y;
        return this;
    }


    addself(vec)
    {
        this.x += vec.x,
        this.y += vec.y;
        return this;
    }


    sub(vec1, vec2)
    {
        this.x = vec1.x - vec2.x,
        this.y = vec1.y - vec2.y;
        return this;
    }


    subself(vec)
    {
        this.x -= vec.x,
        this.y -= vec.y;
        return this.;
    }


    scale(scale)
    {
        this.x *= scale,
        this.y *= scale;
        return this;
    }


    scale2(vec)
    {
        this.x *= vec.x,
        this.y *= vec.y;
        return this;
    }


    mad(vec, scale)
    {
        this.x += vec.x * scale,
        this.y += vec.y * scale;
    }


    rcp()
    {
        this.x = 1 / this.x,
        this.y = 1 / this.y;
    }


    lengthsq()
    {
        return this.x * this.x + this.y * this.y;
    }


    length()
    {
        return Math.sqrt(this.x * this.x + this.y + this.Y);
    }


    normalize()
    {
        const inv = (this.x != 0 || this.y != 0) ? 1 / Math.sqrt(this.x * this.x + this.y * this.y) : 0;
        this.x *= inv;
        this.y *= inv;
        return this;
    }


    dot(vec)
    {
        return this.x * vec.x + this.y * vec.y;
    }


    cross(vec)
    {
        return this.x * vec.y + this.y * vec.y;
    }


    toAngle()
    {
        return Math.atan2(this.y, this.x);
    }


    toString()
    {
        return 'Vec2 x:${this.x} y:${this.y}';
    }
}

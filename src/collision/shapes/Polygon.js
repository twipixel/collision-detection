import Calc from './../utils/Calculator';


export default class Polygon extends PIXI.Graphics
{
    constructor(sides, radius, color = 0x333333, thickness = 1, alpha = 0.7)
    {
        super();

        this.sides = sides;
        this.radius = radius;
        this.color = color;
        this.thickness = thickness;
        this.alpha = alpha;

        this.initialize();

        this.drawBounds();
        this.drawRegistLine();
    }


    initialize()
    {
        this.path = [];
        this.localPoints = [];
        this._globalPoints = [];

        const sides = this.sides;

        for (var  i = 0; i < sides; i++) {
            var x = this.radius * -Math.sin(Calc.toRadians(360 / sides * i));
            var y = this.radius *  Math.cos(Calc.toRadians(360 / sides * i));

            this.path.push(x);
            this.path.push(y);

            var point = new PIXI.Point(x, y);
            this.localPoints.push(point);
        }

        this.normals = [];

        const globalPoints = this.globalPoints;

        for (var i = 0; i < globalPoints.length; i++) {
            var p1 = globalPoints[i];
            var p2 = globalPoints[i + 1 < globalPoints.length ? i + 1 : 0];

            var normal = new PIXI.Vector(p1.y - p2.y, -(p1.x - p2.x));
            normal = normal.normalize();
            this.normals.push(normal);
        }

        this.beginFill(this.color, 0.2);
        this.drawPolygon(this.path);
        this.endFill();
    }


    update()
    {
        //
    }


    /**
     * 분리축구하기
     */
    getAxes()
    {
        const globalPoints = this.globalPoints;

        for (var i = 0; i < globalPoints.length; i++) {
            var p1 = globalPoints[i];
            var p2 = globalPoints[i + 1 < globalPoints.length ? i + 1 : 0];

            var normal = this.normals[i];
            normal.set(p1.y - p2.y, -(p1.x - p2.x));
            normal = normal.normalize();

            var debug = normal.clone();
            debug.multiplyScalar(this.radius);

            var p1 = this.toLocal(p1);
            var p2 = this.toLocal(p2);
            this.lineStyle(1, Math.random() * 0xFFFFFF, 1);
            this.moveTo(p1.x, p1.y);
            this.lineTo(p2.x, p2.y);
            this.moveTo(p1.y - p2.y, -(p1.x - p2.x));
            this.lineTo(debug.x, debug.y);
            // this.drawCircle(debug.x, debug.y, 5);

            if (i === 3) {
                this.drawCircle(p1.y - p2.y, -(p1.x - p2.x), 5);
            }

        }

        return this.normals;
    }


    /**
     * 정사하기
     * @param axis {PIXI.Vector} 분리축
     * @returns {{min: number, max: number, results: Array}}
     */
    project(axis)
    {
        console.log('project(', axis, ')');
        const globalPoints = this.globalPoints;
        const projection = {min: 0, max: 0, results: []};

        var min = axis.dot(globalPoints[0]);
        var max = min;

        this.lineStyle(1, 0xff3300);

        const cloneAxis = axis.clone();
        // cloneAxis.multiplyScalar(100);


        globalPoints.forEach((point) => {
            var p = axis.dot(point);

            if (p < min) {
                min = p;
            } else if (p > max) {
                max = p;
            }

            projection.min = min;
            projection.max = max;
            projection.results.push(p);
        });

        return projection;
    }


    drawRegistLine()
    {
        const w = this.radius;
        const h = this.radius;

        this.lineStyle(1, 0xff3300, 0.3);
        this.moveTo(0, 0);
        this.lineTo(w , 0);
    }


    drawBounds()
    {
        this.lineStyle(1, 0xff3300, 0.3);
        this.beginFill(0xff3300, 0);
        this.drawCircle(0, 0, this.radius);
        this.endFill();
    }



    get globalPoints()
    {
        this._globalPoints = [];

        for (var i = 0; i < this.localPoints.length; i++) {
            var point = this.localPoints[i];
            this._globalPoints[i] = this.toGlobal(point);
        }

        return this._globalPoints;
    }

}
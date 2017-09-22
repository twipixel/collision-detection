import Point from './Point';
import Vector from './Vector';
import Circle from './Circle';
import Polygon from './Polygon';
import Painter from './../utils/Painter';
import Mouse from './../utils/Mouse';


const graphics = new PIXI.Graphics(),
      debugGraphics = new PIXI.Graphics(),
      shapes = [],
      lineColor = 0x84D2F6, arrowColor = 0xE57373;


var polygonPoints = [
        [new Point(350, 350), new Point(350, 500), new Point(500, 500)],
        [new Point(500, 200), new Point(480, 250), new Point(600, 250), new Point(620, 200)],
        [new Point(258, 120), new Point(295, 230), new Point(200, 300), new Point(105, 230), new Point(142, 120)]
    ];

export default class Main extends PIXI.Container
{
    constructor(renderer)
    {
        super();

        this.interactive = true;
        this.renderer = renderer;
        this.canvas = this.renderer.view;
        this.context = this.canvas.getContext('2d');

        this.initialize();
        this.addEvent();
    }


    initialize()
    {
        window.g = debugGraphics;
        this.addChild(debugGraphics);
        this.addChild(graphics);

        // 마우스 영역 설정
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);

        this.mouseDownPoint = new PIXI.Point(0, 0);
        this.lastdrag = new PIXI.Point(0, 0);
        this.shapeBeingDragged = undefined;

        //this.createPolygon();
        this.createPolygonManual();
    }


    getPolygonPoints(tx, ty, angle, radius = 100)
    {
        var points = [];

        // making points, path
        for (var i = 0; i < angle; i ++) {
            var x = tx + (radius * -Math.sin(this.toRadian(360 / angle * i)));
            var y = ty + (radius *  Math.cos(this.toRadian(360 / angle * i)));
            var point = new PIXI.Point(x, y);
            points.push(point);
        }

        return points;
    }


    toRadian(degree)
    {
        return degree * Math.PI / 180;
    }


    createPolygon(useRandomRotate = false)
    {
        const context = this.context;

        for (var i = 0; i < polygonPoints.length; ++i) {
            var polygon = new Polygon(context),
                points = polygonPoints[i];

            points.forEach((point) => {
                polygon.addPoint(point.x, point.y);
            });

            if (useRandomRotate) {
                this.rotateShape(polygon, Math.random() * 45);
            }

            shapes.push(polygon);

            polygon.createPath(graphics, lineColor);
        }
    }


    createPolygonManual()
    {
        var radius = 100,
            diameter = 200,
            space = 20,
            a = radius + space,
            b = radius + diameter + space * 2,
            c = radius + diameter * 2 + space * 3;

        polygonPoints = [];

        polygonPoints.push(this.getPolygonPoints(a, a, 3));
        polygonPoints.push(this.getPolygonPoints(b, a, 4));
        polygonPoints.push(this.getPolygonPoints(c, a, 5));
        polygonPoints.push(this.getPolygonPoints(a, b, 6));
        polygonPoints.push(this.getPolygonPoints(b, b, 7));
        polygonPoints.push(this.getPolygonPoints(c, b, 8));
        polygonPoints.push(this.getPolygonPoints(a, c, 9));
        polygonPoints.push(this.getPolygonPoints(b, c, 10));
        this.addCircle(c, c, radius);

        this.createPolygon(true);
    }


    addPolygon(index, useRandomRotate = true)
    {
        var polygon = new Polygon(this.context);

        var points = polygonPoints[index];

        points.forEach((point) => {
            polygon.addPoint(point.x, point.y);
        });

        if (useRandomRotate) {
            this.rotateShape(polygon, (Math.random() * 45) * Math.PI / 180);
        }

        polygon.createPath(graphics, lineColor);
        shapes.push(polygon);
    }


    addCircle(x, y, radius)
    {
        var circle = new Circle(this.context, x, y, radius);
        circle.createPath(graphics, lineColor);
        shapes.push(circle);
    }


    addEvent()
    {
        this._mousedownListener = this.onMouseDown.bind(this);
        this._mousemoveListener = this.onMouseMove.bind(this);
        this._mouseupListener = this.onMouseUp.bind(this);

        this.on('mousedown', this._mousedownListener);
        this.on('mousemove', this._mousemoveListener);
        this.on('mouseup', this._mouseupListener);
    }


    resize()
    {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    }


    updateRender()
    {
        graphics.clear();

        shapes.forEach((polygon) => {
           polygon.createPath(graphics, lineColor);
        });
    }


    detectCollisions()
    {
        var dragShape = this.shapeBeingDragged;

        if (!dragShape) {
            return;
        }

        shapes.forEach((shape) => {

            if (shape !== dragShape) {
                var mtv = dragShape.collidesWith(shape);

                // 충돌 판정
                if (this.collisionDetected(mtv)) {
                    this.moveShapeByMTV(mtv, dragShape, shape);
                }
            }
        });
    }


    /**
     * mtv로 충돌 판정
     * @param mtv
     * @returns {boolean}
     */
    collisionDetected(mtv)
    {
        // 충돌 판정
        if (mtv.axis != undefined || mtv.overlap !== 0) {
            return true;
        }
        return false;
    }


    checkMTVAxisDirection(mtv, collider, collidee)
    {
        if (mtv.axis === undefined)
            return;

        var colliderCenter = new Vector(collider.getCenter()),
            collideeCenter = new Vector(collidee.getCenter()),
            centerVector = collideeCenter.subtract(colliderCenter),
            centerUnitVector = (new Vector(centerVector)).normalize();

        if (centerUnitVector.dotProduct(mtv.axis) > 0) {
            mtv.axis.x = -mtv.axis.x;
            mtv.axis.y = -mtv.axis.y;
        }
    };


    /**
     *
     * @param mtv
     * @param collider 충돌한 객체
     * @param collidee 충돌을 당한 객체
     */
    moveShapeByMTV(mtv, collider, collidee)
    {
        if (mtv.axis === undefined) {
            mtv.axis = new Vector(1, 1);
        }

        var dx = mtv.axis.x * mtv.overlap,
            dy = mtv.axis.y * mtv.overlap;

        var dragVector = this.dragVector;
        var overlapVector = new Vector(dx, dy);

        /**
         * 내적이 -1이면 반대 방향을 보는 것
         * 내적이 0이면 수직
         * 내적이 1인 경우 같은 방향을 가리키는 것
         * 내적이 > 0.8 다면 같은 방향을 보고 있는 상태
         */
        var dot = dragVector.dotProduct(overlapVector);

        if (dot < 0) {
            dx = -dx;
            dy = -dy;
        }

        var c = collidee.getCenter();
        var to = new Vector(dx, dy);
        var center = new Vector(c.x, c.y);
        to = center.subtract(to);

        Painter.drawArrow(window.g, center, to, true, 1, arrowColor);

        collidee.move(dx, dy);
    }


    rotateShape(shape, degrees)
    {
        //degrees = 90;
        var points = shape.points;

        if (points) {
            var center = shape.getCenter();

            for (var  i = 0; i < points.length; i++) {
                var point = points[i];
                points[i] = this.rotationPoint(center, point, degrees);
            }
        }
    }


    /**
     * 회전하는 좌표 구하기
     * @param pivot 사각형의 중심점
     * @param point 계산하고 싶은 포인트
     * @param degrees 회전각 degrees
     * @returns {{x: (number|*), y: (number|*)}}
     */
    rotationPoint(pivot, point, degrees)
    {
        var diffX = point.x - pivot.x;
        var diffY = point.y - pivot.y;
        var dist = Math.sqrt(diffX * diffX + diffY * diffY);
        var ca = Math.atan2(diffY, diffX) * (180 / Math.PI);
        var na = ((ca + degrees) % 360) * (Math.PI / 180);
        var x = (pivot.x + dist * Math.cos(na) + 0.5) | 0;
        var y = (pivot.y + dist * Math.sin(na) + 0.5) | 0;
        return {x: x, y: y};
    }


    onMouseDown()
    {
        var location = Mouse.global;

        shapes.forEach((shape) => {
            if (shape.isPointInPath(location.x, location.y)) {
                this.shapeBeingDragged = shape;
                console.log(this.shapeBeingDragged.name);
                this.mouseDownPoint.x = location.x;
                this.mouseDownPoint.y = location.y;
                this.lastdrag.x = location.x;
                this.lastdrag.y = location.y;
            }
        });
    }


    onMouseMove()
    {
        var location, dragVector;

        if (this.shapeBeingDragged) {
            location = Mouse.global;

            this.dragVector = dragVector = new Vector(location.x - this.lastdrag.x, location.y - this.lastdrag.y);

            this.shapeBeingDragged.move(dragVector.x, dragVector.y);

            this.lastdrag.x = location.x;
            this.lastdrag.y = location.y;

            this.detectCollisions();
            this.updateRender();
        }
    }


    onMouseUp()
    {
        this.shapeBeingDragged = undefined;
    }
}
import Point from './Point';
import Vector from './Vector';
import Circle from './Circle';
import Polygon from './Polygon';
import Mouse from './../utils/Mouse';


const graphics = new PIXI.Graphics(),
      debugGraphics = new PIXI.Graphics(),
      shapes = [],
      polygonPoints = [
          [new Point(250, 150), new Point(250, 250), new Point(350, 250)],
          [new Point(158, 20), new Point(195, 130), new Point(100, 200), new Point(5, 130), new Point(42, 20)]
          //[new Point(100, 100), new Point(100, 150), new Point(150, 150), new Point(150, 100)],
          //[new Point(400, 100), new Point(380, 150), new Point(500, 150), new Point(520, 100)]
      ];


export default class Main extends PIXI.Container
{
    constructor(renderer)
    {
        super();

        this.interactive = true;
        this.renderer = renderer;
        this.canvas = this.renderer.view;

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


        var polygon = this.getPolygonPoints(5);
        polygonPoints.push(polygon);

        console.log('polygon', polygon);

        this.createPolygon();
    }


    getPolygonPoints(angle)
    {
        var scale = 100;
        var points = [];

        // making points, path
        for (var i = 0; i < angle; i ++) {

            var x = scale * -Math.sin(this.toRadian(360 / angle * i));
            var y = scale *  Math.cos(this.toRadian(360 / angle * i));
            var point = new PIXI.Point(x, y);
            points.push(point);
        }

        console.log('getPolygonPoints(', angle,')', points.length);
        return points;
    }


    toRadian(degree) {
        return degree * Math.PI / 180;
    }


    createPolygon()
    {
        const context = this.canvas.getContext('2d');

        /*for (var i = 0; i < polygonPoints.length; ++i) {
            var polygon = new Polygon(context),
                points = polygonPoints[i];

            points.forEach((point) => {
                polygon.addPoint(point.x, point.y);
            });

            if (i !== polygonPoints.length - 1) {
                this.rotateShape(polygon, (Math.random() * 45) * Math.PI / 180);
            }

            shapes.push(polygon);

            polygon.createPath(graphics);
        }*/

        let polygon = new Polygon(context);
        polygon.addPoint(polygonPoints[0][0].x, polygonPoints[0][0].y);
        polygon.addPoint(polygonPoints[0][1].x, polygonPoints[0][1].y);
        polygon.addPoint(polygonPoints[0][2].x, polygonPoints[0][2].y);
        this.rotateShape(polygon, (Math.random() * 45) * Math.PI / 180);
        polygon.createPath(graphics);
        shapes.push(polygon);

        polygon = new Polygon(context);
        polygon.addPoint(polygonPoints[1][0].x, polygonPoints[1][0].y);
        polygon.addPoint(polygonPoints[1][1].x, polygonPoints[1][1].y);
        polygon.addPoint(polygonPoints[1][2].x, polygonPoints[1][2].y);
        polygon.addPoint(polygonPoints[1][3].x, polygonPoints[1][3].y);
        polygon.addPoint(polygonPoints[1][4].x, polygonPoints[1][4].y);
        this.rotateShape(polygon, (Math.random() * 45) * Math.PI / 180);
        polygon.createPath(graphics);
        shapes.push(polygon);

        //let circle = new Circle(context, 150, 75, 30);
        //circle.createPath(graphics);
        //shapes.push(circle);
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
           polygon.createPath(graphics);
        });
    }


    detectCollisions()
    {
        let numShapes = shapes.length, shape, i, dragShape = this.shapeBeingDragged;

        if (dragShape) {
            for (i = 0; i < numShapes; ++i) {
                shape = shapes[i];

                if (shape !== dragShape) {

                    var mtv = dragShape.collidesWith(shape);

                    // 충돌 판정
                    if (mtv.axis != undefined || mtv.overlap !== 0) {
                        this.showSeparateGuide(mtv, dragShape, shape);
                    }
                }
            }
        }
    }


    checkMTVAxisDirection(mtv, collider, collidee)
    {
        if (mtv.axis === undefined)
            return;

        var centroid1 = new Vector(collider.centroid()),
            centroid2 = new Vector(collidee.centroid()),
            centroidVector = centroid2.subtract(centroid1),
            centroidUnitVector = (new Vector(centroidVector)).normalize();

        if (centroidUnitVector.dotProduct(mtv.axis) > 0) {
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
    showSeparateGuide(mtv, collider, collidee)
    {
        //this.checkMTVAxisDirection(mtv, collider, collidee);

        var dx = mtv.axis.x * mtv.overlap,
            dy = mtv.axis.y * mtv.overlap;

        console.log(mtv.axis.x, mtv.axis.y, mtv.overlap);

        collidee.move(-dx, -dy);
        //collidee.move(dx, dy);
    }




    rotateShape(shape, rotate)
    {
        console.log(rotate);
        const cos = Math.cos(rotate);
        const sin = Math.sin(rotate);

        const points = shape.points;

        for(let i = 0; i < points.length; i++) {
            let pt = points[i];
            let x = pt.x;
            let y = pt.y;
            pt.x = cos * x - sin * y;
            pt.y = sin * x + cos * y;
        }
    }


    onMouseDown()
    {
        let location = Mouse.global;
        shapes.forEach((shape) => {
            if (shape.isPointInPath(location.x, location.y)) {
                this.shapeBeingDragged = shape;
                this.mouseDownPoint.x = location.x;
                this.mouseDownPoint.y = location.y;
                this.lastdrag.x = location.x;
                this.lastdrag.y = location.y;
            }
        });
    }


    onMouseMove()
    {
        let location, dragVector;

        if (this.shapeBeingDragged) {
            location = Mouse.global;

            dragVector = new PIXI.Point(location.x - this.lastdrag.x, location.y - this.lastdrag.y);

            this.shapeBeingDragged.move(dragVector.x, dragVector.y);

            this.lastdrag.x = location.x;
            this.lastdrag.y = location.y;

            this.updateRender();
            this.detectCollisions();
        }
    }


    onMouseUp()
    {
        this.shapeBeingDragged = undefined;
    }
}
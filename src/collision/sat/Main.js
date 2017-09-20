import Point from './Point';
import Polygon from './Polygon';
import Mouse from './../utils/Mouse';

const graphics = new PIXI.Graphics(),
      debugGraphics = new PIXI.Graphics(),
      shapes = [],
      polygonPoints = [
          [new Point(250, 150), new Point(250, 250), new Point(350, 250)],
          [new Point(100, 100), new Point(100, 150), new Point(150, 150), new Point(150, 100)],
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

        this.createPolygon();
    }


    createPolygon()
    {
        const context = this.canvas.getContext('2d');

        for (var i = 0; i < polygonPoints.length; ++i) {
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
        }
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
                    if (dragShape.collideWidth(shape)) {
                        console.log('hit -> ', shape.points.length + ' polygon');
                    }
                }
            }
        }
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
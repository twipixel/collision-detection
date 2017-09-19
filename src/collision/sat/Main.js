import Point from './Point';
import Polygon from './Polygon';
import Mouse from './../utils/Mouse';

const g = new PIXI.Graphics(),
    shapes = [],
    polygonPoints = [
    [new Point(250, 150), new Point(250, 250), new Point(350, 250)],
    [new Point(100, 100), new Point(100, 150), new Point(150, 150), new Point(150, 100)],
    [new Point(400, 100), new Point(380, 150), new Point(500, 150), new Point(520, 100)]
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
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);

        this.mousedown = new PIXI.Point(0, 0);
        this.lastdrag = new PIXI.Point(0, 0);
        this.shapeBeingDragged = undefined;


        this.addChild(g);
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

            shapes.push(polygon);

            polygon.createPath(g);
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


    onMouseDown(event)
    {
        var location = Mouse.global;

        shapes.forEach((shape) => {
            if (shape.isPointInPath(location.x, location.y)) {
                this.shapeBeingDragged = shape;
                this.mousedown.x = location.x;
                this.mousedown.y = location.y;
                this.lastdrag.x = location.x;
                this.lastdrag.y = location.y;
            }
        });
    }


    onMouseMove(event)
    {

    }


    onMouseUp(event)
    {

    }


    resize()
    {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    }
}
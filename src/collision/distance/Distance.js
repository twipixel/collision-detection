import Point from './../geom/Point';
import Vector from './../geom/Vector';
import Mouse from './../utils/Mouse';


const graphics = new PIXI.Graphics()
    , debugGraphics = new PIXI.Graphics()
    , g = graphics
    , d = debugGraphics
    , pointArray = []
    , distanceArray = [];

let prevNearPointIndex = -1;


export default class Distance extends PIXI.Container
{
    constructor(renderer)
    {
        super();

        this.interactive = true;
        this.renderer = renderer;
        this.canvas = this.renderer.view;
        this.context = this.canvas.getContext('2d');

        this.bindListener();
        setTimeout(() => {this.initialize();}, 10);
    }


    bindListener()
    {
        this.onTargetDown = this.onTargetDown.bind(this);
        this.onTargetMove = this.onTargetMove.bind(this);
        this.onTargetUp = this.onTargetUp.bind(this);
        //this.onPointDown = this.onPointDown.bind(this);
        //this.onPointMove = this.onPointMove.bind(this);
        //this.onPointUp = this.onPointUp.bind(this);
        //this.onStageDown = this.onStageDown.bind(this);
        //this.onStageMove = this.onStageMove.bind(this);
        //this.onStageUp = this.onStageUp.bind(this);
    }


    initialize()
    {
        window.g = debugGraphics;
        this.addChild(graphics);
        this.addChild(debugGraphics);


        this.target = new Point(30, 30, 10, 0x3498db, 0.5);
        this.target.on('mousedown', this.onTargetDown);
        this.addChild(this.target);

        for (let i = 0; i < 5; i++) {
            let point = new Point();
            point.randomize(new Vector(0, 0), new Vector(this.canvas.width, this.canvas.height));
            point.on('mousedown', this.onPointDown);
            this.addChild(point);
            pointArray.push(point);
        }

        this.addEvent();
    }



    addEvent()
    {
        this.on('mousedown', this.onStageDown);
        this.on('mousemove', this.onStageMove);
        this.on('mouseup', this.onStageUp);
    }


    update()
    {
        this.render();
    }


    render()
    {
        //graphics.clear();

        distanceArray.length = 0;


        pointArray.forEach((point, index) => {
            distanceArray.push({
                index: index,
                distance: this.target.vector.distance(point.vector)
            });
        });


        distanceArray.sort((a, b) => {
            return a.distance - b.distance
        });


        if (this.target) {

            if (prevNearPointIndex !== distanceArray[0].index) {
                //
            }

            const nearPont = pointArray[distanceArray[0].index];
            d.clear();
            d.lineStyle(1, 0xff3300, 0.3);
            d.moveTo(this.target.x, this.target.y);
            d.lineTo(nearPont.x, nearPont.y);
            prevNearPointIndex = distanceArray[0].index;
        }
    }


    resize()
    {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
    }


    onTargetDown()
    {
        this.startPoint =
        this.prevPoint = new Vector.fromObject(Mouse.global);

        this.target.off('mousedown', this.onTargetDown);
        this.target.on('mousemove', this.onTargetMove);
        this.target.on('mouseup', this.onTargetUp);
    }


    onTargetMove()
    {
        const currentPoint = new Vector.fromObject(Mouse.global)
            , diff = currentPoint.clone().subtract(this.prevPoint);

        this.target.x += diff.x;
        this.target.y += diff.y;

        this.prevPoint = currentPoint;
    }


    onTargetUp()
    {
        this.target.on('mousedown', this.onTargetDown);
        this.target.off('mousemove', this.onTargetMove);
        this.target.off('mouseup', this.onTargetUp);
    }



}
import World from './gjk/World';
import Size from './utils/Size';
import Cal from './gjk/Calculator';
import Painter from './utils/Painter';
import Vector from './geom/Vector';


const graphics = new PIXI.Graphics();


export default class Main extends PIXI.Container
{
    constructor(renderer)
    {
        super();

        window.g = graphics;

        this.interactive = true;
        this.renderer = renderer;
        this.renderer.roundPixels = true;
        this.canvas = this.renderer.view;
        this.context = this.canvas.getContext('2d');
    }


    initialize()
    {
        if (!this.isInit) {
            this.addChild(graphics);
            this.addEvent();

            // graphics.scale.x = 10;
            // graphics.scale.y = 10;

            this.test();
            // this.createWorld();
            this.isInit = true;
        }
    }


    addEvent()
    {
        this.onStageDown = this.onStageDown.bind(this);
        this.onStageMove = this.onStageMove.bind(this);
        this.onStageUp = this.onStageUp.bind(this);

        this.on('mousedown', this.onStageDown);
        this.on('mousemove', this.onStageMove);
        this.on('mouseup', this.onStageUp);
    }


    update() {}


    resize()
    {
        this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);

        this.initialize();

        graphics.x = Size.windowCenterX;
        graphics.y = Size.windowCenterY;
    }


    createWorld()
    {
        this.world = new World();
        this.world.x = Size.windowCenterX;
        this.world.y = Size.windowCenterY;
        this.addChild(this.world);
    }


    test()
    {
        const vertices1 = [
            new Vector(0, 0),
            new Vector(5, 5),
            new Vector(3, 6)
        ];

        // const vertices2 = [
        //     new Vector(4, 1),
        //     new Vector(6, 5),
        //     new Vector(8, 2)
        // ];

        const vertices2 = [
            new Vector(2, 1),
            new Vector(3, 4),
            new Vector(7, 0)
        ];


        //Painter.drawLine(window.g, new Vector(0, Size.windowCenterY), new Vector(Size.windowWidth, Size.windowCenterY), false);

        const g = window.g
            , w = Size.windowWidth
            , h = Size.windowHeight
            , cx = Size.windowCenterX
            , cy = Size.windowCenterY;

        g.lineStyle(1, 0xff3300, 0.5);
        g.moveTo(0, -cy);
        g.lineTo(0, h);
        g.moveTo(-cx, 0);
        g.lineTo(w, 0);

        Painter.drawPolygon(vertices1);
        Painter.drawPolygon(vertices2);
        Painter.drawMinkowskiSum(vertices1, vertices2);


        const vec = new Vector();
        const collisionDetected = Cal.gjk(vertices1, vertices1.length, vertices2, vertices2.length);

        console.log('collisionDetected', collisionDetected);
    }


    onStageDown()
    {

    }


    onStageMove()
    {

    }


    onStageUp()
    {

    }
}
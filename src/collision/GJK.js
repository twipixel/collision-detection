


const graphics = new PIXI.Graphics(),
      debugGraphics = new PIXI.Graphics();


export default class Main extends PIXI.Container
{
    constructor(renderer)
    {
        super();

        window.g = debugGraphics;

        this.interactive = true;
        this.renderer = renderer;
        this.canvas = this.renderer.view;
        this.context = this.canvas.getContext('2d');
    }


    initialize()
    {
        if (!this.isInit) {
            this.addChild(graphics);
            this.addChild(debugGraphics);



            this.addEvent();

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
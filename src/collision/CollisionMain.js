import Mouse from './utils/Mouse';
import Calc from './utils/Calculator';
import Polygon from './shapes/Polygon';
import Painter from './utils/Painter';
import PointUtil from './utils/PointUtil';
import SAT from './utils/SAT';


// TEST
import DatGui from './debug/DatGui';
import KeyCode from './consts/KeyCode';


export default class CollisionMain extends PIXI.utils.EventEmitter
{
    constructor(renderer, container, options = null)
    {
        super();

        Mouse.renderer = renderer;
        this.renderer = renderer;
        this.container = container;
        this.options = options;

        this.initialize(options);
        this.addEvent();
    }


    /////////////////////////////////////////////////////////////////////////////
    //
    // 리사이즈 & 업데이트 & 초기화 함수
    //
    /////////////////////////////////////////////////////////////////////////////


    initialize(options)
    {
        this.options = options;

        this.createPolygon();
        this.createDebugGraphics();
        this.drawDebugLine();
    }


    addEvent()
    {
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }


    createPolygon()
    {
        this.triangle = new Polygon(3, 100, 0x333333);
        this.triangle.x = 200;
        this.triangle.y = 200;
        // this.triangle.rotation = Calc.toRadians(60);
        this.container.addChild(this.triangle);

        this.rectangle = new Polygon(4, 100, 0x333333);
        // this.rectangle.x = 500;
        this.rectangle.x = 350;
        this.rectangle.y = 200;
        // this.rectangle.rotation = Calc.toRadians(45);
        this.container.addChild(this.rectangle);


        this.polygon = new Polygon(5, 100, 0x333333);
        this.polygon.x = 800;
        this.polygon.y = 200;
        this.container.addChild(this.polygon);
    }


    createDebugGraphics()
    {
        // 디버그용 그래픽스
        window.g = this.g = new PIXI.Graphics();
        this.container.addChild(this.g);
    }


    drawDebugLine()
    {
        // const trianglePoints = this.triangle.globalPoints;
        // Painter.drawPoints(this.g, trianglePoints, true);

        const tri = this.triangle;
        const rec = this.rectangle;

        var mtv = SAT.collide(tri, rec);

        console.log(mtv);

        // tri.x += mtv.x;
        // tri.y += mtv.y;
    }


    /////////////////////////////////////////////////////////////////////////////
    //
    // Public Function
    //
    /////////////////////////////////////////////////////////////////////////////


    resize()
    {

    }


    update (ms)
    {

    }


    /////////////////////////////////////////////////////////////////////////////
    //
    // Event Functions
    //
    /////////////////////////////////////////////////////////////////////////////




    /////////////////////////////////////////////////////////////////////////////
    //
    // Debugger
    //
    /////////////////////////////////////////////////////////////////////////////


    addDatGui()
    {
        this.datGui = DatGui.instance;
        this.datGui.initialize(this.options);
        // this.datGui.on(DatGui.CHAGE_MASK, this.onChangeMask.bind(this));
        // this.datGui.on(DatGui.RESET, this.onReset.bind(this));
        // this.datGui.on(DatGui.SHOW_MASK_REAL_SIZE, this.onShowMaskRealSize.bind(this));
        // this.datGui.on(DatGui.SHOW_MASK_VISIBLE_SIZE, this.onShowMaskVisibleSize.bind(this));
    }


    /////////////////////////////////////////////////////////////////////////////
    //
    // Test 함수
    //
    /////////////////////////////////////////////////////////////////////////////


     onKeyUp(e)
    {
        switch (e.keyCode) {
            case KeyCode.ESCAPE:
                console.clear();

                if (window.g) {
                    window.g.clear();
                }

                break;
            case KeyCode.SPACE:
                //
                break;
            case KeyCode.NUMBER_1:
                //
                break;
            case KeyCode.NUMBER_2:
                //
                break;
        }
    }
}
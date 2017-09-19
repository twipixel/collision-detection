import Mouse from './utils/Mouse';
import SATTest from './sat/Main';


// TEST
import DatGui from './debug/DatGui';
import KeyCode from './consts/KeyCode';


export default class CollisionMain extends PIXI.utils.EventEmitter
{
    constructor(renderer, stage)
    {
        super();

        Mouse.renderer = renderer;
        this.renderer = renderer;
        this.stage = stage;

        this.initialize();
        this.addEvent();
    }


    /////////////////////////////////////////////////////////////////////////////
    //
    // 리사이즈 & 업데이트 & 초기화 함수
    //
    /////////////////////////////////////////////////////////////////////////////


    initialize()
    {
        this.testSAT();
    }


    addEvent()
    {
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }



    testSAT()
    {
        this.sat = new SATTest(this.renderer);
        this.stage.addChild(this.sat);
    }


    /////////////////////////////////////////////////////////////////////////////
    //
    // Public Function
    //
    /////////////////////////////////////////////////////////////////////////////


    resize()
    {
        if (this.sat) {
            this.sat.resize();
        }
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
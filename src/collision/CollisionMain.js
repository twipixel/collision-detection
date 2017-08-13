import Mouse from './utils/Mouse';

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
    }


    /////////////////////////////////////////////////////////////////////////////
    //
    // 리사이즈 & 업데이트 & 초기화 함수
    //
    /////////////////////////////////////////////////////////////////////////////


    initialize(options)
    {
        this.options = options;

        // 디버그용 그래픽스
        window.g = this.g = new PIXI.Graphics();
        this.container.addChild(this.g);

        // 디버그 키 등록
        window.addEventListener('keyup', this.onKeyUp.bind(this));
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
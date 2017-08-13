import Calc from './Calculator';


const singleton = Symbol();
const singletonEnforcer = Symbol();

export default class Size
{
    ///////////////////////////////////////////////////////////////////////////////
    //
    // Static
    //
    /////////////////////////////////////////////////////////////////////////////////

    static get isAvailable()
    {
        return (this.isInitialized) ? this.isInitialized : false;
    }

    static get windowWidth()
    {
        return window.innerWidth * window.devicePixelRatio;
    }

    static get windowHeight()
    {
        return window.innerHeight * window.devicePixelRatio;
    }

    static get windowSize()
    {
        return new PIXI.Rectangle(0, 0, Size.windowWidth, Size.windowHeight);
    }

    static get windowCenterX()
    {
        return this.windowWidth / 2;
    }

    static get windowCenterY()
    {
        return this.windowHeight / 2;
    }

    /**
     * Chrome
     * Maximum height/width: 32,767 pixels
     * Maximum area: 268,435,456 pixels (e.g., 16,384 x 16,384)
     *
     * Firefox
     * Maximum height/width: 32,767 pixels
     * Maximum area: 472,907,776 pixels (e.g., 22,528 x 20,992)
     *
     * IE
     * Maximum height/width: 8,192 pixels
     * Maximum area: N/A
     *
     * IE Mobile
     * Maximum height/width: 4,096 pixels
     * Maximum area: N/A
     */
    static get canvasLimitWidth()
    {
        return 4096;
    }

    static get canvasLimitHeight()
    {
        return 4096;
    }

    ///////////////////////////////////////////////////////////////////////////////
    //
    // 초기화
    //
    /////////////////////////////////////////////////////////////////////////////////


    /**
     * 실제 화면사이와 배경 이미지 사이즈를 받아서
     * 초기 사이즈를 계산하고 이미지 사이즈 관련된 정보를 관리합니다.
     * backgroundImage 를 먼저 set 하고 viewport 를 나중에 set 해야 합니다.
     * @param viewport 실제 화면사이즈 {*|PIXI.Rectangle}
     * @param backgroundImage 배경 이미지 또는 사이즈 {*|PIXI.Rectangle}
     */
    static initialize(backgroundImage, viewport)
    {
        //  순서가 중요, backgroundImage먼저, viewport가 그 다음
        this.backgroundImage = backgroundImage;
        this.viewport = viewport;

        this.isInitialized = true;
    }



    ///////////////////////////////////////////////////////////////////////////////
    //
    // Functions
    //
    /////////////////////////////////////////////////////////////////////////////////




    ///////////////////////////////////////////////////////////////////////////////
    //
    // Getter & Setter
    //
    /////////////////////////////////////////////////////////////////////////////////


    /**
     * 시작 시 배경 이미지 사이즈
     * @returns {PIXI.Rectangle|*}
     */
    static get initializedBackgroundImageSize()
    {
        return this._initBackgroundImageSize;
    }


    ///////////////////////////////////////////////////////////////////////////////
    //
    // screenBounds
    //
    /////////////////////////////////////////////////////////////////////////////////



    /**
     * offset이나 padding이 적용된 실제 화면 영역을 반환합니다.
     * 현재는 offset이나 padding 없으므로 그냥 리턴합니다.
     * 필요한 경우 여기에서 추가하면 됩니다.
     * @returns {PIXI.Rectangle|*}
     */
    static get screenBounds()
    {
        if (!this._viewport) {
            throw new Error('ScreenManager must initialize.');
        }
        return this._viewport;
    }


    ///////////////////////////////////////////////////////////////////////////////
    //
    // viewport
    //
    /////////////////////////////////////////////////////////////////////////////////


    static set viewport(value)
    {
        this._viewport = value;
        this._viewportHalfWidth = value.width / 2;
        this._viewportHalfHeight = value.height / 2;

        const initBackgroundImageSize = Calc.getSizeFitInBounds(this.backgroundImage, this.screenBounds);
        initBackgroundImageSize.x = this.viewportCenterX;
        initBackgroundImageSize.y = this.viewportCenterY;
        this._initBackgroundImageSize = initBackgroundImageSize;
    }

    /**
     * 실제 화면 영역
     * @returns {PIXI.Rectangle|*}
     */
    static get viewport()
    {
        if (!this._viewport) {
            throw new Error('ScreenManager must initialize.');
        }
        return this._viewport;
    }

    static get viewportX()
    {
        return this._viewport.x;
    }

    static get viewportY()
    {
        return this._viewport.y;
    }

    static get viewportWidth()
    {
        return this._viewport.width;
    }

    static get viewportHeight()
    {
        return this._viewport.height;
    }

    static get viewportHalfWidth()
    {
        return this._viewportHalfWidth;
    }

    static get viewportHalfHeight()
    {
        return this._viewportHalfHeight;
    }

    static get viewportCenterX()
    {
        return this.viewportX + this.viewportHalfWidth;
    }

    static get viewportCenterY()
    {
        return this.viewportY + this.viewportHalfHeight;
    }


    ///////////////////////////////////////////////////////////////////////////////
    //
    // 배경 이미지
    //
    /////////////////////////////////////////////////////////////////////////////////


    static set backgroundImage(value)
    {
        this._backgroundImage = value;
        this._backgroundImageHalfWidth = value.width / 2;
        this._backgroundImageHalfHeight = value.height / 2;
    }

    /**
     * 사용하고 있는 캔버스 엘리먼트
     * canvas를 통해 실제 이미지의 사이즈를 알 수 있습니다.
     * 실제 이미지는 마스크에서 사용하고 있는 이미지 사이즈를 의미합니다.
     * 원본이미지가 더 크고 실제 이미지는 작을 수 있습니다.
     * 예로 원본이미지가 5000 x 5000 이면 제한 사이즈 만큼 줄여 실제 이미지를 마스크에 전달합니다.
     * @returns {*}
     */
    static get backgroundImage()
    {
        if (!this._backgroundImage) {
            throw new Error('ScreenManager must initialize.');
        }
        return this._backgroundImage;
    }

    static get canvasHalfWidth()
    {
        return this._backgroundImageHalfWidth;
    }

    static get canvasHalfHeight()
    {
        return this._backgroundImageHalfHeight;
    }

}
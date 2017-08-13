import CollisionMain from './collision/CollisionMain';



var canvas, renderer, stage, collisionMain, container;

window.onload = initailize.bind(this);
window.onresize = resizeWindow.bind(this);

function initailize() {
    canvas = document.getElementById('canvas');

    renderer = new PIXI.CanvasRenderer(canvas.width, canvas.height, {
        view: canvas,
        autoResize: true,
        backgroundColor: 0x3498db
        //backgroundColor: 0x673AB7
    });


    // 위치가 정수가 아닐경우 흐릿하게 보이는 문제가 있어
    // 렌더러의 위치를 정수로 연산될 수 있도록 한다.
    //renderer.roundPixels = true;

    stage = new PIXI.Container(0xE6E9EC);
    container = new PIXI.Container();
    stage.addChild(container);

    collisionMain = new CollisionMain(renderer, container);

    updateLoop();
    resizeWindow();
}


function updateLoop (ms) {
    update(ms);
    requestAnimFrame(updateLoop.bind(this));
}


function update(ms) {
    renderer.render(stage);
    collisionMain.update(ms);
}


function resizeWindow() {
    const width = window.innerWidth * window.devicePixelRatio;
    const height = window.innerHeight * window.devicePixelRatio;

    /**
     * 캔버스 사이즈와 디스플레이 사이즈 설정
     * 레티나 그래픽 지원 코드
     */
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    /**
     * PIXI renderer 리사이즈
     * PIXI 에게 viewport 사이즈 변경 알림
     */
    renderer.resize(width, height);

    if (collisionMain) {
        collisionMain.resize();
    }
}

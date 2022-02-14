import 'babel-polyfill';
import Test from './Test';
import KeyCode from './../../src/consts/KeyCode';
import Mouse from "../../src/utils/Mouse";

(function () {
  window.onload = function () {
    new Main();
  }
}());

let canvas, renderer, stage, test, container;

class Main {
  constructor() {
    this.init();
    this.addEvent();
    this.onResize();
  }

  init() {
    canvas = document.getElementById('canvas');

    renderer = new PIXI.CanvasRenderer(canvas.width, canvas.height, {
      view: canvas,
      autoResize: true,
      backgroundColor: 0x33383D
    });

    Mouse.renderer = renderer;

    // 위치가 정수가 아닐경우 흐릿하게 보이는 문제가 있어
    // 렌더러의 위치를 정수로 연산될 수 있도록 한다.
    //renderer.roundPixels = true;

    stage = new PIXI.Container();
    container = new PIXI.Container();
    stage.addChild(container);

    test = new Test(renderer);

    container.addChild(test);

    this.updateLoop();
    this.resizeWindow();
  }

  addEvent() {
    window.onresize = this.onResize.bind(this);
    window.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onResize() {
  }

  updateLoop(ms) {
    this.update(ms);
    requestAnimFrame(this.updateLoop.bind(this));
  }

  update(ms) {
    test.update();
    renderer.render(stage);
  }

  resizeWindow() {
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

    if (test) {
      test.resize();
    }
  }

  onKeyUp(e) {
    switch (e.keyCode) {
      case KeyCode.TILDE:
        break;

      case KeyCode.ESC:
        break;

      case KeyCode.SPACE:
        break;

      case KeyCode.DOWN_ARROW:
        break;

      case KeyCode.UP_ARROW:
        break;

      case KeyCode.LEFT_ARROW:
        break;

      case KeyCode.RIGHT_ARROW:
        break;

      case KeyCode.BACK_SPACE:
        console.clear();
        break;
    }
  };
}

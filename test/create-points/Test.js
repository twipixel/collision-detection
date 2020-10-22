import Vector from '../../src/Vector';
import PointUtil from '../../src/utils/PointUtil';
import PastelColor from '../../src/utils/PastelColor';
import Line from '../../src/popup/Line';
import Popup from '../../src/popup/Popup';
import KeyCode from "../../src/consts/KeyCode";
import ConvexHull from "../../src/convexhull/ConvexHull";
import ConvexHullShape from '../../src/popup/ConvexHullShape';

const STAGE_WIDTH = window.innerWidth,
  STAGE_HEIGHT = window.innerHeight;

console.log('STAGE_WIDTH', STAGE_WIDTH);
console.log('STAGE_HEIGHT', STAGE_HEIGHT);

export default class Test extends PIXI.Container {
  constructor(renderer) {
    super();

    this.interactive = true;
    this.renderer = renderer;
    this.canvas = this.renderer.view;
    this.context = this.canvas.getContext('2d');

    this.initialize();
    this.addEvent();
  }

  initialize() {
    this.debugGraphics = new PIXI.Graphics();
    this.addChild(this.debugGraphics);
    this.drawOutLine();
  }

  clear() {
    if (this.debugGraphics) {
      this.debugGraphics.clear();
    }

    if (this.popupGraphics) {
      this.removeChild(this.popupGraphics);
    }
  }

  addEvent() {
    // 왜 안될까...
    document.addEventListener('keypress', (key) => {
      console.log(key);
      this.onKeyUp(key);
    });

    this.mouseDownListener = this.onMouseDown.bind(this);
    this.on('mousedown', this.mouseDownListener);
  }

  resize() {
    this.hitArea = new PIXI.Rectangle(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
    /*const PIXEL_RATIO = window.devicePixelRatio
      , SPACE = 0
      , SCREEN_WIDTH = this.canvas.width / PIXEL_RATIO - SPACE
      , SCREEN_HEIGHT = this.canvas.height / PIXEL_RATIO - SPACE
      , SCALE_X = SCREEN_WIDTH / STAGE_WIDTH
      , SCALE_Y = SCREEN_HEIGHT / STAGE_HEIGHT;

    // 꾸겨넣기
    this.scale.x = SCALE_X;
    this.scale.y = SCALE_Y;*/
  }

  drawOutLine() {
    this.outline = new PIXI.Graphics();
    this.outline.lineStyle(2, 0x5A9BEA);
    this.outline.drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
    this.addChild(this.outline);
  }

  update() {
  }

  onMouseDown() {
    console.log('onMouseDown');
  }

  onKeyUp(key) {
    switch (key.keyCode) {
      case KeyCode.ESCAPE:
        break;
      case KeyCode.SPACE:
        break;
    }
  }
}

import 'babel-polyfill';
import Test from './Test';
import KeyCode from './../../src/es6/consts/KeyCode';

(function () {
    window.onload = function () {
        var main = new Main();
    }
}());

class Main {
    constructor() {
        this.init();
        this.addEvent();
        this.onResize();
    }

    init() {
        this.test = new Test();
    }

    addEvent() {
        window.onresize = this.onResize.bind(this);
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    onResize() {}

    onKeyUp (e) {
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

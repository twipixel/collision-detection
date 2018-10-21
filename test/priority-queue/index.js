import 'babel-polyfill';
import Test from './Test';
import KeyCode from './../../src/consts/KeyCode';

(function () {
    window.onload = function () {
        const main = new Main();
    }
}());

class Main {
    constructor() {
        this.init();
    }

    init() {
        this.test = new Test();
    }
}

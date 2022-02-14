import 'babel-polyfill';
import Test from './Test';

(function () {
  window.onload = function () {
    new Main();
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

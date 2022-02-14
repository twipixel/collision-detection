var instance = null;


export default class DatGuiData extends PIXI.utils.EventEmitter {
  /**
   * 여러 곳에서 객체를 생성해도 싱글턴처럼 한개만 반환하도록 처리
   * @param options 초기값
   * @returns {*}
   */
  constructor(options) {
    super();
    if (!instance) {
      instance = this;
      this.initialize(options);
    }
    return instance;
  }

  static get RESET() {
    return 'reset';
  }

  /**
   * 여기에 속성 이름과 값을 셋팅합니다. (property name = value)
   * @param options
   */
  initialize(options = null) {

  }


  reset() {
    this.emit(DatGuiData.RESET);
  }


}
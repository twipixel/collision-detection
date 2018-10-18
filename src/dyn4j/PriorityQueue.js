

export default class PriorityQueue {

    static get serialVersionUID() {
        return -7720805057305804111;
    }

    static get DEFAULT_INITIAL_CAPACITY() {
        return 11;
    }

    constructor() {
        this._initialize();
    }

    _initialize() {
        this.size = 0;
        this.modCount = 0;
    }
}

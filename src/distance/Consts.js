

export default class Consts {
    static get SCALE() {
        return 30;
    }

    static get STAGE() {
        if (!this.stage) {
            this.stage = {x: 0, y: 0, width: 600, height: 600};
        }
        return this.stage;
    }
}
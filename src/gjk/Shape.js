import PastelColor from '../../src/utils/PastelColor';

const FONT_SIZE = '9';

export default class Shape extends PIXI.Container {
    constructor(vertices = []) {
        super();
        const color = PastelColor.generate();
        this.vertices = vertices;
        this.lineColor = color.hex;
        this.textColor = color.hexShap;
        this.graphics = new PIXI.Graphics();
        this.addChild(this.graphics);
        this.labels = this.createLabel();
        this.draw();
    }

    createLabel() {
        const n = this.vertices.length;
        const labels = [];
        for (let i = 0; i < n; i++) {
            const text = new PIXI.Text(i, {
                align: 'center',
                fontSize: FONT_SIZE,
                fill: this.textColor,
            });
            text.visible = false;
            labels.push(text);
            this.addChild(text);
        }
        return labels;
    }

    draw() {
        const g = this.graphics
            , vertices = this.vertices
            , origin = vertices[0];

        g.clear();
        g.lineStyle(1, this.lineColor, 0.5);
        g.moveTo(origin.x, origin.y);
        vertices.forEach((vertex, index) => {
            g.lineTo(vertex.x, vertex.y);
            const label = this.labels[index]
                , w = label.width
                , h = label.height;

            // label.x = vertex.x - w / 2;
            // label.y = vertex.y - h / 2;
            label.x = vertex.x;
            label.y = vertex.y;
            label.visible = true;
        });
        g.lineTo(origin.x, origin.y);
    }

    destroy() {
        this.graphics.clear();
        this.removeChild(this.graphics);
        this.graphics = null;

        this.labels.forEach((label) => {
            this.removeChild(label);
        });

        this.labels.length = 0;
        this.labels = null;
        super.destroy();
    }
}

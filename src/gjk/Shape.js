import Vector from '../Vector';
import Consts from '../gjk/Consts';
import PastelColor from '../../src/utils/PastelColor';

const FONT_SIZE = '9px'
    , SCALE = Consts.SCALE;

export default class Shape extends PIXI.Container {
    constructor(vertices = [], lineColor, lineAlpha = 0.5) {
        super();
        lineColor = lineColor ? lineColor : PastelColor.generate().hex;
        lineColor = typeof lineColor === 'number' ? '0x' + lineColor.toString(16) : lineColor;
        const textColor = lineColor.replace('0x', '#');
        this.vertices = vertices;
        this.lineColor = lineColor;
        this.lineAlpha = lineAlpha;
        this.textColor = textColor;
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
                font: FONT_SIZE,
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
        g.lineStyle(1, this.lineColor, this.lineAlpha);
        g.moveTo(origin.x, origin.y);
        vertices.forEach((vertex, index) => {
            g.lineTo(vertex.x, vertex.y);
            const label = this.labels[index]
                , vec = Vector.divideScalar(vertex, SCALE);

            label.x = vertex.x;
            label.y = vertex.y;

            label.text = `(${vec.x},${vec.y})`;
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

import Size from './../utils/Size';


export default class World extends PIXI.Container
{
    constructor()
    {
        super();
        this.initialize();
    }


    initialize()
    {
        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.g = new PIXI.Graphics();
        this.container.addChild(this.g);

        this.resize();
    }


    draw()
    {
        const g = this.g
            , w = Size.windowWidth
            , h = Size.windowHeight
            , weakLineWidth = 1
            , weakColor = 0x9E9E9E
            , strongLineWidth = 1
            , strongColor = 0xFFFFFF
            , centerLineWidth = 1
            , centerColor = 0xFF3300
            , space = 20
            , strong = space * 5
            , cxIndex = parseInt(w / space / 2)
            , cyIndex = parseInt(h / space / 2)
            , cx = cxIndex * space
            , cy = cyIndex * space;

        let x = 0, y = 0;

        // 우하단 그리드
        for (x = 0; x < cx; x += space) {
            if (x % strong == 0) {
                g.lineStyle(strongLineWidth, strongColor);
            }
            else if (x === cx) {
                g.lineStyle(centerLineWidth, centerColor);
            }
            else {
                g.lineStyle(weakLineWidth, weakColor);
            }
            g.moveTo(x, 0);
            g.lineTo(x, cy);
        }

        for (y = 0; y < cy; y += space) {
            if (y % strong == 0) {
                g.lineStyle(strongLineWidth, strongColor);
            }
            else if (y === cy) {
                g.lineStyle(centerLineWidth, centerColor);
            }
            else {
                g.lineStyle(weakLineWidth, weakColor);
            }
            g.moveTo(0, y);
            g.lineTo(cx, y);
        }


        // 좌하단 그리드
        for (x = 0; x > -cx; x += -space) {
            if (x % strong == 0) {
                g.lineStyle(strongLineWidth, strongColor);
            }
            else if (x === cx) {
                g.lineStyle(centerLineWidth, centerColor);
            }
            else {
                g.lineStyle(weakLineWidth, weakColor);
            }
            g.moveTo(x, 0);
            g.lineTo(x, cy);
        }

        for (y = 0; y < cy; y += space) {
            if (y % strong == 0) {
                g.lineStyle(strongLineWidth, strongColor);
            }
            else if (y === cy) {
                g.lineStyle(centerLineWidth, centerColor);
            }
            else {
                g.lineStyle(weakLineWidth, weakColor);
            }
            g.moveTo(-cx, y);
            g.lineTo(0, y);
        }


        // 좌상단 그리드
        for (x = 0; x > -cx; x += -space) {
            if (x % strong == 0) {
                g.lineStyle(strongLineWidth, strongColor);
            }
            else if (x === cx) {
                g.lineStyle(centerLineWidth, centerColor);
            }
            else {
                g.lineStyle(weakLineWidth, weakColor);
            }
            g.moveTo(x, -cy);
            g.lineTo(x, 0);
        }

        for (y = 0; y > -cy; y += -space) {
            if (y % strong == 0) {
                g.lineStyle(strongLineWidth, strongColor);
            }
            else if (y === cy) {
                g.lineStyle(centerLineWidth, centerColor);
            }
            else {
                g.lineStyle(weakLineWidth, weakColor);
            }
            g.moveTo(-cx, y);
            g.lineTo(0, y);
        }


        // 우상단 그리드
        for (x = 0; x < cx; x += space) {
            if (x % strong == 0) {
                g.lineStyle(strongLineWidth, strongColor);
            }
            else if (x === cx) {
                g.lineStyle(centerLineWidth, centerColor);
            }
            else {
                g.lineStyle(weakLineWidth, weakColor);
            }
            g.moveTo(x, -cy);
            g.lineTo(x, 0);
        }

        for (y = 0; y > -cy; y += -space) {
            if (y % strong == 0) {
                g.lineStyle(strongLineWidth, strongColor);
            }
            else if (y === cy) {
                g.lineStyle(centerLineWidth, centerColor);
            }
            else {
                g.lineStyle(weakLineWidth, weakColor);
            }
            g.moveTo(cx, y);
            g.lineTo(0, y);
        }

        g.lineStyle(centerLineWidth, centerColor);
        g.moveTo(-cx, 0);
        g.lineTo(cx, 0);
        g.moveTo(0, -cy);
        g.lineTo(0, cy);
    }


    clear()
    {
        this.g.clear();
    }


    resize()
    {
        this.clear();
        this.draw();
        // this.container.x = -Size.windowCenterX;
        // this.container.y = -Size.windowCenterY;
    }
}
/**
 * https://codepen.io/pliu/pen/BLEKwA
 */
export default class PastelColor {
    static generate() {
        const hBase = Math.random();
        const newH = Math.floor(hBase * 360);
        const newL = Math.floor(Math.random() * 16) + 75;
        const color = `hsl(${newH}, 100%, ${newL}%)`;
        const [r, g, b] = this.HSLtoRGB(hBase, 1, newL * .01);

        return {
            hsl: color, // hsl(0, 100%, 85%);
            rgb: `rgb(${r}, ${g}, ${b})`, // rgb(255, 128, 128);
            hex: `${this.RGBtoHex(r, g, b)}`, // 0xff8080
            hexShap:`${this.RGBtoHex(r, g, b, '#')}`, // #ff8080
        };
    }

    /**
     * HSL to RGB formula adapted from:
     * https://gist.github.com/mjackson/5311256
     * (skipping to else{} since s will always be 100%)
     * @param h
     * @param s
     * @param l
     * @returns {*[]}
     * @constructor
     */
    static HSLtoRGB(h, s, l) {
        let r, g, b;

        const rd = (a) => {
            return Math.floor(Math.max(Math.min(a * 256, 255), 0));
        };

        const hueToRGB = (m, n, o) => {
            if (o < 0) o += 1;
            if (o > 1) o -= 1;
            if (o < 1 / 6) return m + (n - m) * 6 * o;
            if (o < 1 / 2) return n;
            if (o < 2 / 3) return m + (n - m) * (2 / 3 - o) * 6;
            return m;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hueToRGB(p, q, h + 1 / 3);
        g = hueToRGB(p, q, h);
        b = hueToRGB(p, q, h - 1 / 3);

        return [rd(r), rd(g), rd(b)]
    }

    static RGBtoHex(r, g, b, prefix = '0x') {
        return `${prefix}${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    }
}

import {TestCase} from './TestCase';
import Polygon from '../../../src/editor/geom/Polygon';
import {each} from 'utils/lambda';
import {sign} from 'utils/number';
import {log, printf} from 'utils/string';

export default class PolygonTest extends TestCase {
	constructor() {
		super();
	}

	start() {
		window.main = this;
		this.canvas = $('#main_view')[0];
		this.context = this.canvas.getContext('2d');

		this.numEdges = 3;
		this.radius = 100;

		// this.polygon = new Polygon([
		// 	[0, 0],
		// 	[100, 200],
		// 	[-100, 200]
		// ]);

		this.polygon = new Polygon(this.getPolygonVertices(this.numEdges, this.radius));
		this.polygon.name = 'polygon';

		this.children = [this.polygon];
		this.pentagon = this.appendPolygon();

		this.createGUIWithFolder({
				global: [
					[this, 'numEdges'],
					[this, 'radius'],
					[this, 'appendPolygon'],
				],
				polygon: [
					[this.polygon, 'x', 0, 1500],
					[this.polygon, 'y', 0, 1500],
					[this.polygon, 'scaleX', -2, 2],
					[this.polygon, 'scaleY', -2, 2],
					[this.polygon, 'radian', 0, 2 * Math.PI],
					[this.polygon, 'offsetX', 0, 1500],
					[this.polygon, 'offsetY', 0, 1500],
				],
				pentagon: [
					[this.pentagon, 'x', 0, 1500],
					[this.pentagon, 'y', 0, 1500],
					[this.pentagon, 'scaleX', -2, 2],
					[this.pentagon, 'scaleY', -2, 2],
					[this.pentagon, 'radian', 0, 2 * Math.PI],
					[this.pentagon, 'offsetX', 0, 1500],
					[this.pentagon, 'offsetY', 0, 1500],
				]
			}, 
			this.onChange.bind(this),
			this.onFolderOpen.bind(this)
		);

		this.polygon.x = this.canvas.width / 2;
		this.polygon.y = this.canvas.height / 2 - 100;

		this.onMouseUp = this.onMouseUp.bind(this);

		this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
		this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));

		this.render = this.render.bind(this);
		this.render();
	}


	render() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.children.forEach(child => child.render(this.context));

		this.renderMTV();

		requestAnimationFrame(this.render);
	}

	renderMTV() {
		if(!this.mtv) return;

		const context = this.context
			, canvas = context.canvas
			, {len, axisX, axisY} = this.mtv
			, sx = canvas.width >> 1
			, sy = canvas.height >> 1;


		context.save();
			// draw axis lines
			this.drawLine(context, sx, sy, sx + axisX * 300, sy + axisY * 300, '#555', 1);
			this.drawLine(context, sx, sy, sx + axisX * len, sy + axisY * len, '#F00', 3);
			this.drawLine(context, sx, sy, sx + this.vx, sy + this.vy, '#00f', 2);
		context.restore();
	}

	drawLine(context, ax, ay, bx, by, color = '#ccc', lineWidth = 1, ) {
		context.beginPath();
		context.moveTo(ax, ay);
		context.strokeStyle = color;
		context.lineTo(bx, by);
		context.lineWidth = lineWidth;
		context.stroke();
	}

	appendPolygon() {
		const p = new Polygon(this.getPolygonVertices(this.numEdges, this.radius));

		p.x = this.canvas.width * Math.random();
		p.y = this.canvas.height * Math.random();

		this.children.unshift(p);
		p.name = +new Date();

		return p;
	}

	getPolygonVertices(n, radius) {
		n = n | 0;

		const t = 2 * Math.PI / n
			, a = [];

		for(let i = 0; i < n; i++) {
			let cos = Math.cos(t * i + Math.PI / 2),
				sin = Math.sin(t * i + Math.PI / 2),
				x = cos * radius,
				y = -sin * radius;

			a.push([x, y]);
		}

		return a;
	}


	onMouseDown(e) {
		const {clientX, clientY} = e;

		document.addEventListener('mouseup', this.onMouseUp);

		this.dragTarget = 
			(this.children.filter(child => child.hitTestPoint(clientX, clientY)) || [])[0];

		if(this.dragTarget) {
			this.tx = this.dragTarget.x - clientX;
			this.ty = this.dragTarget.y - clientY;
		}
	}

	onMouseUp(e) {
		document.removeEventListener('mouseup', this.onMouseUp);

		this.dragTarget = null;
	}


	onMouseMove(e) {
		const {clientX, clientY} = e;

		if(this.dragTarget) {
			this.dragTarget.x = clientX + this.tx;
			this.dragTarget.y = clientY + this.ty;

			this.children.forEach(child => {
				if(child == this.dragTarget) return;

				const mtv = this.dragTarget.hitTestPolygon(child);
				child.__hit = !!mtv;

				this.mtv = mtv;

				if(!mtv) return;

				const {len, axisX, axisY} = mtv
					, signX = sign(child.x - this.dragTarget.x)
					, signY = sign(child.y - this.dragTarget.y)
					, vx = axisX * len
					, vy = axisY * len;

				let factor = 1;

				if(signX != sign(axisX) || signY != sign(axisY))
					factor = -1;

				this.vx = vx * factor;
				this.vy = vy * factor;
				
				// child.x += vx * factor;
				// child.y += vy * factor;

				log('len: _, axis(_, _), vector(_, _) polygon sign(_, _)', 
					len,
					...[axisX, axisY].map(n => n.toFixed(2)),
					...[vx, vy].map(n => n.toFixed(2)),
					signX, signY
				);
			})
		}
		else {
			this.children.forEach(child => child.__hit = child.hitTestPoint(clientX, clientY))
		}
	}

	onChange(e) {
		// this.render();
	}

	onFolderOpen(e) {
		each(this.folders, f => f != e ? f.close() : null);
	}
}
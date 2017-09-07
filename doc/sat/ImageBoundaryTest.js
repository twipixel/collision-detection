import {TestCase} from './TestCase';
import Polygon from 'geom/Polygon';
import Projection from 'geom/Projection';

class ImageBoundary extends Polygon {
	constructor(width, height) {
		super([
			[0, 0], 
			[width, 0], 
			[width, height], 
			[0, height],
		]);

		// this._axes = [[], []];
		// this._projections = [
		// 	new Projection(), 
		// 	new Projection()
		// ];

		this._width = width;
		this._height = height;

		this._invalidate = true;
	}

	containTest(polygon) {
		const axes = [[1, 0], [0, 1]]
			, a = new Projection()
			, b = new Projection();

		let margin;

		// axes.map(([x, y]) => {
		// 	a.initWithAxis(x, y)
		// 	 .projectPolygon(this.vertices);

		// 	b.initWithAxis(x, y)
		// 	 .projectPolygon(polygon.vertices);

		// 	margin = a.outOfRange(b);

		// 	if(!margin) continue;
		// })
	}

	/**
	 * 수평, 수직 두 축에만 투영으로 변경할 수 있을 듯. 
	 * @param  {[type]} polygon [description]
	 * @return {[type]}         [description]
	 */
	containPolygon(polygon) {
		const proj = new Projection()
			, projections = this.projections
			, len = projections.length;

		let boundary, margin, margins = [];

		for(let i = 2; i < len; i++) {
			boundary = projections[i];
			proj.initWithAxis(boundary.axisX, boundary.axisY)
			 .projectPolygon(polygon.vertices);

			margin = boundary.outOfRange(proj);

			if(!margin) continue;

			margins.push({len: margin, axisX: boundary.axisX, axisY: boundary.axisY});
		}

		return margins;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}
}

export default class ImageBoundaryTest extends TestCase {
	constructor() {
		super();
	}

	start() {
		window.main = this;

		this.render = this.render.bind(this);
		this.canvas = document.querySelector('#main_view');
		this.context = this.canvas.getContext('2d');

		this.numEdges = 3;
		this.radius = 100;

		this.children = [];
		this.boundary = this.addChild(
			this.alignToCenter(new ImageBoundary(600, 400))
		);

		this.appendPolygon();
		this.createGUIWithFolder({
				global: [
					[this, 'numEdges'],
					[this, 'radius'],
					[this, 'appendPolygon'],
				],
				boundary: [
					[this.children[0], 'x', 0, 1500],
					[this.children[0], 'y', 0, 1500],
					[this.children[0], 'scaleX', -2, 2],
					[this.children[0], 'scaleY', -2, 2],
					[this.children[0], 'radian', 0, 2 * Math.PI],
					[this.children[0], 'offsetX', 0, 1500],
					[this.children[0], 'offsetY', 0, 1500],
				]
			}, 
			this.onChange.bind(this),
			this.onFolderOpen.bind(this)
		);

		this.addEvents();
		this.render();
	}

	addEvents() {
		this.onMouseUp = this.onMouseUp.bind(this);
		this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
		this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
	}

	addChild(polygon) {
		this.children.push(polygon);
		
		return polygon;
	}

	alignToCenter(polygon) {
		polygon.x = (this.canvas.width - (polygon.width || 0)) >> 1;
		polygon.y = (this.canvas.height - (polygon.height || 0)) >> 1;

		return polygon;
	}

	appendPolygon() {
		const p = new Polygon(this.getPolygonVertices(this.numEdges, this.radius));

		this.addChild(this.alignToCenter(p));

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

	render() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.children.forEach(child => child.render(this.context));

		this.renderMTVs();

		requestAnimationFrame(this.render);
	}

	renderMTVs() {
		if(!this.mtvs) return;

		const context = this.context
			, canvas = context.canvas
			, sx = canvas.width >> 1
			, sy = canvas.height >> 1;

		this.mtvs.forEach(mtv => {
			const {len, axisX, axisY} = mtv;

			this.drawLine(context, sx, sy, sx + axisX * 300, sy + axisY * 300, '#555', 1);
			this.drawLine(context, sx, sy, sx + axisX * len, sy + axisY * len, '#F00', 3);
		})
	}

	drawLine(context, ax, ay, bx, by, color = '#ccc', lineWidth = 1, ) {
		context.beginPath();
		context.moveTo(ax, ay);
		context.strokeStyle = color;
		context.lineTo(bx, by);
		context.lineWidth = lineWidth;
		context.stroke();
	}


	onMouseDown(e) {
		const {clientX, clientY} = e;

		document.addEventListener('mouseup', this.onMouseUp);

		this.dragTarget = 
			(this.children.filter(child => {
				if(child == this.boundary) return false;
				return child.hitTestPoint(clientX, clientY);
			}) || [])[0];

		if(this.dragTarget) {
			this.tx = this.dragTarget.x - clientX;
			this.ty = this.dragTarget.y - clientY;
		}
	}

	onMouseMove(e) {
		const {clientX, clientY} = e;

		if(!this.dragTarget) {
			this.children.forEach(child => {
				if(child == this.boundary) return;

				child.__hit = child.hitTestPoint(clientX, clientY);
			});

			return;
		}

		this.dragTarget.x = clientX + this.tx;
		this.dragTarget.y = clientY + this.ty;

		const mtvs = this.mtvs = 
			this.boundary.containPolygon(this.dragTarget);	

		if(!mtvs) return;
	}

	onMouseUp(e) {
		document.removeEventListener('mouseup', this.onMouseUp);

		this.dragTarget = null;
	}



	onChange(e) {
		
	}

	onFolderOpen(e) {
		
	}
}
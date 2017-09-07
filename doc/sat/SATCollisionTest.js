import {each} from 'utils/lambda';
import {TestCase} from './TestCase';
import Transform from 'geom/Transform';
import Matrix from 'geom/Matrix';
import {log} from 'utils/string';

class Projection {
	constructor() {
		this._min = Number.MAX_SAFE_INTEGER || 9007199254740991;
		this._max = Number.MIN_SAFE_INTEGER || -9007199254740991;
	}

	project(px, py, axisX, axisY) {
		const n = px * axisX + py * axisY;

		if(n < this.min) this._min = n;
		if(n > this.max) this._max = n;
	}

	overlap(projection) {
		if(projection.min < this.min || projection.max > this.max) return false;

		return true;
	}

	contains(n) {
		if(n < this.min || n > this.max) return false;

		return true;
	}

	get min() {
		return this._min;
	}

	get max() {
		return this._max;
	}

	get len() {
		return this.max - this.min;
	}
}

export default class SATCollisionTest extends TestCase {
	constructor() {
		super();
	}

	start() {
		window.main = this;
		this.canvas = $('#main_view')[0];
		this.context = this.canvas.getContext('2d');
		this.context.strokeStyle = '#FFF';
		this.points = [[0, 0], [100, 200], [-100, 200]];
		this.colors = ['#FF0D11', '#E8B937', "#43FF44"];
		this.colors_dimed = ['#5C0808', '#735C1F', '#22691F'];

		this.edges = this.points.map((p, i, a) => [...p, ...(a[i + 1] || a[0])]);

		this.transform = new Transform();
		this.transform.x = this.canvas.width >> 1;
		this.transform.y = (this.canvas.height >> 1) - 100;

		this.projections = [
			new Projection(),
			new Projection(),
			new Projection(),
		];

		this.createGUIWithFolder({
				context: [
					[this.context, 'strokeStyle'],
					[this.context, 'lineWidth'],
				],
				transform: [
					[this.transform, 'x', 0, 1500],
					[this.transform, 'y', 0, 1500],
					[this.transform, 'scaleX', -2, 2],
					[this.transform, 'scaleY', -2, 2],
					[this.transform, 'radian', 0, 2 * Math.PI],
					[this.transform, 'offsetX', 0, 1500],
					[this.transform, 'offsetY', 0, 1500],
				]
			}, 
			this.onChange.bind(this),
			this.onFolderOpen.bind(this)
		);

		this.render();
		document.addEventListener('mousemove', this.onMouseMove.bind(this));
	}

	onChange(e) {
		this.render();
	}

	onFolderOpen(e) {
		each(this.folders, f => f != e ? f.close() : null);
	}

	getTransformedEdges(edges, matrix) {
		return edges.map(
			([a, b, c, d]) => 
				[...matrix.apply(a, b), ...matrix.apply(c, d)]
		);
	}

	getPerpEdges(edges) {
		const gap = 50	
			, perpEdgeLen = 600
			, mat = new Matrix(1, 0, 0, 1, -perpEdgeLen / 2, 0);

		return edges.map(([a, b, c, d]) => [b - d, c - a])
			.map(([x, y]) => {
				const len = Math.sqrt(x * x + y * y);

				return [x / len * perpEdgeLen, y / len * perpEdgeLen];
			})
			.map(([x, y], i) => {
				let [ ax, ay, bx, by] = edges[i];

				const dx = bx - ax
					, dy = by - ay
					, len = Math.sqrt(dx * dx + dy * dy);

				bx += dx / len * gap;
				by += dy / len * gap;

				return [bx, by, x + bx, y + by];
			})
			.map(([a, b, c, d]) => {
				const dx = (c - a) / 2
					, dy = (d - b) / 2;

				return [a - dx, b - dy, c - dx, d - dy];
			})
	}

	onMouseMove(e) {
		const [x, y] = [e.clientX, e.clientY];

		for(let i = 0; i < this.projections.length; i++) {
			let p = this.projections[i],
				axis = this.perpAxies[i];
		}
	}

	hitTest(axises, x, y, projections) {
		
	}

	render() {
		const context = this.context
			, canvas = context.canvas
			, gap = 50
			, perpEdgeLen = 500;
		
		context.clearRect(0, 0, canvas.width, canvas.height);

		const vertices = this.points.map(p => this.transform.matrix.apply(...p))
			, transformed = this.getTransformedEdges(this.edges, this.transform.matrix)
			, perpEdges = this.getPerpEdges(transformed)
			, perpAxies = perpEdges.map(([a, b, c, d]) => {
				const dx = c - a
					, dy = d - b
					, len = Math.sqrt(dx * dx + dy * dy);

				return [dx / len, dy / len];
			})
			, dottedVertices = 
				perpAxies.map(([x, y]) => vertices.map(([px, py]) => x * px + y * py));

		perpAxies.map(([x, y], i) => 
			vertices.map(([px, py]) => this.projections[i].project(px, py, x, y)))

		this.vertices = vertices;
		this.perpAxies = perpAxies;

		this.drawEdges(context, transformed, this.colors);
		this.drawEdges(context, perpEdges, this.colors_dimed);

		console.log(this.projections);
		console.log(dottedVertices);
	}

	drawEdges(context, edges, colors = ['#fff', '#fff', '#fff']) {
		edges.forEach((edge, i) => {
			context.strokeStyle = colors[i];

			context.beginPath();
				context.moveTo(edge[0], edge[1]);
				context.lineTo(edge[2], edge[3]);
			context.stroke();
		});
	}
}










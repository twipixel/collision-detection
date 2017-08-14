// initializing
var renderer = PIXI.autoDetectRenderer(800, 600, { antialias: true, backgroundColor : 0xf7f7f7 });
renderer.view.style.borderStyle = "solid";
renderer.view.style.borderColor = "#bbbbbb";
renderer.view.style.borderWidth = "1px";
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
stage.interactive = true;

var textView = new PIXI.Text("Drag polygons");
textView.x = 30;
textView.y = 30;
stage.addChild(textView);

var polygon1 = createPolygon(3, 0x46adc8, true);
polygon1.x = 100;
polygon1.y = 200;
stage.addChild(polygon1);

var polygon2 = createPolygon(5, 0x46adc8, true);
polygon2.x = 300;
polygon2.y = 200;
stage.addChild(polygon2);

var polygon2_1 = createPolygon(5, 0xE58AD9, false);
polygon2_1.visible = false;
polygon2_1.alpha = 0.5;
stage.addChild(polygon2_1);

// run the game loop
gameLoop();

function gameLoop() {

	// position update
    polygon1.update(0);
    polygon2.update(0);

    // collision check and set text
    var satResult = polygon1.SATCollide(polygon2);

    if (satResult == false) {

    	polygon1.alpha = polygon2.alpha = 0.5;
    	polygon2_1.visible = false;

    } else {

    	// 'satResult' is MTV
    	polygon1.alpha = polygon2.alpha = 0.8;
    	polygon2_1.visible = true;

    	// dest position
    	polygon2_1.x = polygon2.x + satResult.x;
    	polygon2_1.y = polygon2.y + satResult.y;
    	polygon2_1.rotation = polygon2.rotation;

    	polygon2.x += (polygon2_1.x - polygon2.x) / 20;
    	polygon2.y += (polygon2_1.y - polygon2.y) / 20;

    }
 
    // draw
    renderer.render(stage);
    requestAnimationFrame(gameLoop);
}

function toRadian(degree) {
	return degree * Math.PI / 180;
}

// factory functions
function createPolygon(angle, color, attachMethods) {

	var scale = 100;
	var path = [];
	var points = [];

	// making points, path
	for (var i = 0; i < angle; i ++) {

		var x = scale * -Math.sin(toRadian(360 / angle * i));
		var y = scale *  Math.cos(toRadian(360 / angle * i));

		path.push(x);
		path.push(y);

		var point = new PIXI.Point(x, y);
		points.push(point);
	}

	// making primitive
	var graphics = new PIXI.Graphics();

	graphics.beginFill(color);
	// graphics.lineStyle(4, 0x46adc8, 1);

	graphics.drawPolygon(path);
	
	graphics.endFill();

	graphics.x = 0;
	graphics.y = 0;

	graphics.rotation = Math.random() * 2 * Math.PI;

	graphics.points = points;

	if (attachMethods) {
		attachUpdatingMethods(graphics);
		attachMouseDragCallbacks(graphics);
	}
 
	return graphics;
}

function attachUpdatingMethods(graphics) {

	// attaching methods
	graphics.updateWorldPoints = function() {

		this.worldPoints = [];
		this.points.forEach((point) => {

			var newPoint = new PIXI.Point();
			this.worldTransform.apply(point, newPoint);

			this.worldPoints.push(newPoint);
		});
	}

	graphics.updateWorldNormals = function() {

		this.worldNormals = [];

		for (var i = 0; i < this.worldPoints.length; i++) {
		
			var p1 = this.worldPoints[i];
			var p2 = this.worldPoints[i + 1 < this.worldPoints.length ? i + 1 : 0];

			var normal = new PIXI.Vector(p1.y - p2.y, -(p1.x - p2.x));
			normal = normal.normalize();
			this.worldNormals.push(normal);
		}
	}

	graphics.update = function update(dt) {

		// this.rotation += 0.01;

		this.updateWorldPoints();
		this.updateWorldNormals();
	};

	graphics.SATCollide = function (other) {

		if (other.worldPoints === undefined || other.worldNormals === undefined)
			return false;

		var project = function (worldPoints, axisVector) {

			var projection = { min : 0, max : 0, results : [] };

			projection.max = axisVector.dot(worldPoints[0]);
			projection.min = projection.max;

			worldPoints.forEach((point) => {

				var p = axisVector.dot(point);

				if (p < projection.min) {
					projection.min = p;
				} else if (p > projection.max) {
					projection.max = p;
				}

				projection.results.push(p);
			});

			return projection;
		};

		var axes = this.worldNormals.concat(other.worldNormals);

		var minOverlap = Number.MAX_VALUE; // amount of smallest overlap
		var MTV;

		for (var i = 0; i < axes.length; i ++) {
			var axis = axes[i];

			var proj1 = project(this.worldPoints, axis);
			var proj2 = project(other.worldPoints, axis);

			// check overlap
			if (proj1.min <= proj2.max && proj1.max >= proj2.min) {
				
				var overlap = Math.min( proj2.max - proj1.min, proj1.max - proj2.min );

				if (overlap < minOverlap) {

					minOverlap = overlap;

					// hack : check who has 'axis' vector
					if (i < this.worldNormals.length)
						overlap *= -1; // if 'this' has the axis vector, flip the MTV

					MTV = new PIXI.Vector(axis.x * overlap, axis.y * overlap);
				}

			} else {
				// not overlapping
				return false;
			}
		}

		return MTV;
	};
}

// dragging
function attachMouseDragCallbacks (graphics) {

	var onMouseDown = function (event) {
		this.dragging = true;
	};

	var onMouseMove = function (event) {
		if (graphics.dragging == true) {
			var newPosition = event.data.getLocalPosition(this.parent);
        	this.position.x = newPosition.x;
        	this.position.y = newPosition.y;
		}
	};

	var onMouseUp = function (event) {
		this.dragging = false;
	};

	graphics.dragging = false;

	graphics.interactive = true;
	graphics.on('mousedown', onMouseDown);
	graphics.on('mousemove', onMouseMove);
	graphics.on('mouseupoutside', onMouseUp);
	graphics.on('mouseup', onMouseUp);

	return graphics;
}

/*
* Copyright (c) 2012 Ju Hyung Lee
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
* and associated documentation files (the "Software"), to deal in the Software without 
* restriction, including without limitation the rights to use, copy, modify, merge, publish, 
* distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
* Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or 
* substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
* BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
* DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

App = function() {
	var domCanvas;
	var domInfo;
	var ctx;
	var mousePos = new vec2(0, 0);
	var mode = 0;
	var polygonA = {};
	var xfA = new Transform(new vec2(0, 0), 0);
	var polygonB = {};
	var xfB = new Transform(new vec2(0 ,0), 0);	
	var angle = 0;
	var simplexHistoryIndex = 0;
	var polytopeEdgeHistoryIndex = 0;
	var showMinkDiff = false;
	var showClipEdges = false;

	function main() {		
		domCanvas = document.getElementById("canvas");
		if (!domCanvas.getContext) {
			alert("Couldn't get canvas object !");
		}

		// Main canvas context
		ctx = domCanvas.getContext("2d");

		// Transform coordinate system to y-axis is up
		ctx.translate(0, domCanvas.height);
		ctx.scale(1, -1);

		domInfo = document.getElementById("info");

		domCanvas.addEventListener("mousedown", function(e) { onMouseDown(e) }, false);
		domCanvas.addEventListener("mouseup", function(e) { onMouseUp(e) }, false);
		domCanvas.addEventListener("mousemove", function(e) { onMouseMove(e) }, false);

		domCanvas.addEventListener("touchstart", touchHandler, false);
		domCanvas.addEventListener("touchend", touchHandler, false);
		domCanvas.addEventListener("touchmove", touchHandler, false);
		domCanvas.addEventListener("touchcancel", touchHandler, false);

		document.addEventListener("keydown", onKeyDown, false);
		document.addEventListener("keyup", onKeyUp, false);

		setMode(0);

		setInterval(updateScreen, 1000 / 60);
	}

	function getModeName() {
		return [
			"Demo1: Line segment vs Point",
			"Demo2: Triangle vs Point",
			"Demo3: Line segment vs Line segment",
			"Demo4: Triangle vs Line segment",
			"Demo5: Triangle vs Triangle",
			"Demo6: Box vs Box",
			"Demo7: Box vs Hexagon"][mode];
	}

	function setMode(m) {
		switch (m) {
		case 0: // Line segment vs Point
			polygonA.verts = [];
			polygonA.verts[0] = new vec2(0, -50);
			polygonA.verts[1] = new vec2(0, 50);

			polygonB.verts = [];
			polygonB.verts[0] = new vec2(0, 0);
			break;
		case 1: // Triangle vs Point
			polygonA.verts = [];
			polygonA.verts[0] = new vec2(50, -40);
			polygonA.verts[1] = new vec2(0, 40);
			polygonA.verts[2] = new vec2(-50, -40);

			polygonB.verts = [];
			polygonB.verts[0] = new vec2(0, 0);
			break;
		case 2: // Line segment vs Line segment
			polygonA.verts = [];
			polygonA.verts[0] = new vec2(0, -50);
			polygonA.verts[1] = new vec2(0, 50);

			polygonB.verts = [];
			polygonB.verts[0] = new vec2(50, 0);
			polygonB.verts[1] = new vec2(-50, 0);
			break;
		case 3: // Triangle vs Line segment
			polygonA.verts = [];
			polygonA.verts[0] = new vec2(50, -40);
			polygonA.verts[1] = new vec2(0, 40);
			polygonA.verts[2] = new vec2(-50, -40);
			
			polygonB.verts = [];
			polygonB.verts[0] = new vec2(50, 0);
			polygonB.verts[1] = new vec2(-50, 0);
			break;
		case 4: // Triangle vs Triangle
			polygonA.verts = [];
			polygonA.verts[0] = new vec2(50, -40);
			polygonA.verts[1] = new vec2(0, 40);
			polygonA.verts[2] = new vec2(-50, -40);
			
			polygonB.verts = [];
			polygonB.verts[0] = new vec2(50, -40);
			polygonB.verts[1] = new vec2(0, 40);
			polygonB.verts[2] = new vec2(-50, -40);
			break;
		case 5: // Box vs Box
			polygonA.verts = [];
			polygonA.verts[0] = new vec2(40, -40);
			polygonA.verts[1] = new vec2(40, 40);
			polygonA.verts[2] = new vec2(-40, 40);
			polygonA.verts[3] = new vec2(-40, -40);
			
			polygonB.verts = [];
			polygonB.verts[0] = new vec2(40, -40);
			polygonB.verts[1] = new vec2(40, 40);
			polygonB.verts[2] = new vec2(-40, 40);
			polygonB.verts[3] = new vec2(-40, -40);
			break;
		case 6: // Box vs Hexagon
			polygonA.verts = [];
			polygonA.verts[0] = new vec2(40, -40);
			polygonA.verts[1] = new vec2(40, 40);
			polygonA.verts[2] = new vec2(-40, 40);
			polygonA.verts[3] = new vec2(-40, -40);
			
			polygonB.verts = [];
			polygonB.verts[0] = new vec2(30, -50);
			polygonB.verts[1] = new vec2(60, 0);
			polygonB.verts[2] = new vec2(30, 50);
			polygonB.verts[3] = new vec2(-30, 50);
			polygonB.verts[4] = new vec2(-60, 0);
			polygonB.verts[5] = new vec2(-30, -50);			
		}

		mode = m;
	}	

	function drawPolygon(v, xf, lineWidth, strokeColor, fillColor) {
		ctx.save();

		/**
		 * context matrix
		 *
		 * | a c e |
		 * | b d f |
		 * | 0 0 1 |
		 *
		 * transform(a, b, c, d, e, f)
		 *
		 * 평행 이동
		 * | 1 0 tx |
		 * | 0 1 ty |
		 * | 0 0 1  |
		 *
		 * 크기 조절
		 * | Sx 0  0 |
		 * | 0  Sy 0 |
		 * | 0  0  1 |
		 *
		 * 회전
		 * | cos(q) -sin(q) 0 |
		 * | sin(q)  cos(q) 0 |
		 * | 0       0      1 |
		 */

		if (xf === xfA) {
			console.log('xf[', xf.c, xf.s, xf.t.x, xf.t.y, ']');
		}

		ctx.transform(xf.c, xf.s, -xf.s, xf.c, xf.t.x, xf.t.y);

		ctx.beginPath();			

		ctx.moveTo(v[0].x, v[0].y);		
		for (var i = 1; i < v.length; i++) {
			ctx.lineTo(v[i].x, v[i].y);
		}

		// 도형이면 closePath
		if (v.length > 2) {
			ctx.closePath();
		}

		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = strokeColor;
		ctx.stroke();

		if (fillColor) {
			ctx.fillStyle = fillColor;
			ctx.fill();
		}

		ctx.restore();
	}

	function drawPoint(p, radius, color) {
		ctx.beginPath();
		ctx.arc(p.x, p.y, radius, 0, Math.PI*2, false);		

		ctx.fillStyle = color;
		ctx.fill();
	}

	function drawLine(p1, p2, lineWidth, color) {
		ctx.beginPath();
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);		

		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = color;
		ctx.stroke();
	}

	function drawDashLine(p1, p2, lineWidth, dashSize, color) {
		var dashSize2 = dashSize * 0.5;
		var dsq = vec2.distsq(p1, p2);

		var d = vec2.truncate(vec2.sub(p2, p1), dashSize);
		var s1 = p1;
		var s2 = vec2.add(p1, d);
		
		ctx.beginPath();

		while (d.lengthsq() > 0) {
			var s3 = vec2.add(s1, vec2.truncate(vec2.sub(s2, s1), dashSize2));

			ctx.moveTo(s1.x, s1.y);
			ctx.lineTo(s3.x, s3.y);

			d = vec2.truncate(vec2.sub(p2, s2), dashSize);
			s1 = s2;
			s2 = vec2.add(s2, d);
		}

		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = color;
		ctx.stroke();
	}

	function drawText(p, text, color) {
		ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0);

		ctx.font = "8pt Verdana";
		ctx.textBaseline = "bottom";
		ctx.fillStyle = color;

		var wp = worldToCanvas(p);
		ctx.fillText(text, wp.x, wp.y);

		ctx.restore();
	}

	function updateScreen() {
		domInfo.innerHTML = getModeName();

		// context 초기화
		ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, domCanvas.width, domCanvas.height);
		ctx.restore();

		// 여기서 전체 좌표를 가운데로 옮기고, 나머지는 기존의 transform 대로 그림을 그립니다.
		ctx.setTransform(1, 0, 0, -1, domCanvas.width * 0.5, domCanvas.height * 0.5);

		// 원점 좌표 그리기 (가운데 점)
		drawPoint(vec2.zero, 2, "#000");

		// 2개의 폴리곤을 그립니다.
		drawPolygon(polygonA.verts, xfA, 1, "#888");
		drawPolygon(polygonB.verts, xfB, 1, "#888");

		// Draw indices of two polygons
		for (var i = 0; i < polygonA.verts.length; i++) {
			var v = xfA.transform(polygonA.verts[i]);
			drawText(vec2.add(v, new vec2(-3, 3)), "" + i, "#888");
		}

		for (var i = 0; i < polygonB.verts.length; i++) {
			var v = xfB.transform(polygonB.verts[i]);
			drawText(vec2.add(v, new vec2(-3, 3)), "" + i, "#888");
		}

		// 충돌검사
		var simplexHistory = doGJK(polygonA, xfA, polygonB, xfB);
		var lastIndex = simplexHistory.length - 1;
		var lastSimplex = simplexHistory[lastIndex];
		
		// Draw closest line if they are not touching
		var w = lastSimplex.getWitnessPoints();
		if (vec2.distsq(w.p1, w.p2) > 0) {
			drawLine(w.p1, w.p2, 1, "#7A0");
			drawPoint(w.p1, 2.5, "#7A0");
			drawPoint(w.p2, 2.5, "#7A0");
		}

		if (showMinkDiff) {
			// Compute the Minkowski differences
			// Keep in mind that all the Minkowski difference convex hull vertices are in world space
			var mdv = [];
			for (var i = 0; i < polygonA.verts.length; i++) {
				for (var j = 0; j < polygonB.verts.length; j++) {
					var a = xfA.transform(polygonA.verts[i]);
					var b = xfB.transform(polygonB.verts[j]);
					var d = vec2.sub(b, a);
					d.text = "" + j + "-" + i;
					mdv.push(d);			
				}
			}

			// Generate convex hull with convex hull generation algorithm
			var mdv = createConvexHull(mdv);

			// Draw Minkowski differences
			drawPolygon(mdv, new Transform(new vec2(0, 0), 0), 2, "rgba(128, 0, 128, 0.5)", "rgba(128, 0, 128, 0.2)");

			// Draw indices of the Minkowski difference convex hull
			for (var i = 0; i < mdv.length; i++) {
				var v = mdv[i];
				drawText(vec2.add(v, new vec2(-22, 3)), v.text, "rgba(128, 0, 128, 0.5)");
			}
			
			// Draw the simplex
			simplexHistoryIndex %= simplexHistory.length;
			simplex = simplexHistory[simplexHistoryIndex];
			var simplexVerts = [];
			for (var i = 0; i < simplex.count; i++) {
				var p = simplex.verts[i].p;
				simplexVerts.push(p);
				drawPoint(p, 2.5, "#F0F");
				drawText(vec2.add(p, new vec2(3, 3)), "" + i, "#F0F");
			}

			drawPolygon(simplexVerts, new Transform(new vec2(0, 0), 0), 2, "#F0F", "rgba(255, 0, 255, 0.3)");

			// Draw closest point in the current simplex
			var cp = simplex.getClosestPoint();
			drawLine(vec2.add(cp, new vec2(-5, -5)), vec2.add(cp, new vec2(5, 5)), 1, "rgba(0, 0, 255, 0.5)");
			drawLine(vec2.add(cp, new vec2(-5, 5)), vec2.add(cp, new vec2(5, -5)), 1, "rgba(0, 0, 255, 0.5)");
			drawText(vec2.add(cp, new vec2(5, -12)), "simplex CP", "#00F");

			domInfo.innerHTML += ["<br />Simplex history:", simplexHistoryIndex, "/", simplexHistory.length - 1].join(" ");
		}

		// Do EPA if last simplex has full
		if (lastSimplex.count == 3) {
			var result = doEPA(polygonA, xfA, polygonB, xfB, lastSimplex);
			var polytope = result.polytope;
			var edgeHistory = result.edgeHistory;

			var penetration = edgeHistory[edgeHistory.length - 1].dir;
			// Check if EPA closest edge vector is zero
			//if (vec2.dot(penetration, penetration) == 0) { // FIXME
			//	penetration.set(1, 0);
			//}

			var n = vec2.normalize(penetration);
			var info = computeContactPoints(polygonA, xfA, polygonB, xfB, vec2.neg(n));
			if (info) {
				var inc = info.incidentEdge;
				var ref = info.referenceEdge;
				var cp = info.cp;

				if (showClipEdges) {
					drawLine(inc.v1, inc.v2, 2, "#EA0");
					drawLine(ref.v1, ref.v2, 2, "#08E");
				}

				for (var i = 0; i < cp.length; i++) {
					var p1 = cp[i].p;
					var p2 = vec2.add(p1, vec2.scale(cp[i].n, cp[i].d));
					drawLine(p1, p2, 2, "#F00");
					drawPoint(p1, 2.5, "#F00");
				}
			}

			if (showMinkDiff) {
				/*var pl = [];
				for (var edge = polytope.edgeHead; edge != polytope.edgeTail; edge = edge.next) {
					var v1 = polytope.verts[edge.index1];
					pl.push(v1.p);
				}

				drawPolygon(pl, new Transform(new vec2(0, 0), 0), 2, "#0F0", "rgba(0, 255, 0, 0.1)");*/

				polytopeEdgeHistoryIndex %= edgeHistory.length;
				var edge = edgeHistory[polytopeEdgeHistoryIndex];

				// Draw polytope edge history
				var v1 = polytope.verts[edge.index1];
				var v2 = polytope.verts[edge.index2];
				drawDashLine(v1.p, v2.p, 2, 8, "#0C0");

				domInfo.innerHTML += ["<br />Polytope edge history:", polytopeEdgeHistoryIndex, "/", edgeHistory.length - 1].join(" ");
			}
		}
	}

	function worldToCanvas(p) {
		return new vec2(
			domCanvas.width * 0.5 + p.x,
			domCanvas.height * 0.5 - p.y);
	}

	/**
	 * 캔버스를 가운데 중점을 0,0 으로 만들어 줍니다.
	 * @param p
	 * @returns {vec2}
     */
	function canvasToWorld(p) {
		return new vec2(
			p.x - domCanvas.width * 0.5,
			domCanvas.height * 0.5 - p.y);
	}

	function getMousePosition(ev) {
		return new vec2(
			ev.offsetX + document.body.scrollLeft - domCanvas.offsetLeft,
			ev.offsetY + document.body.scrollTop - domCanvas.offsetTop);
	}

	function onMouseDown(ev) {		
	}

	function onMouseUp(ev) { 
	}

	function onMouseMove(ev) {

		// canvas 좌표를
		mousePos = getMousePosition(ev);

		// world 좌표로 변환 (가운데 0, 0인 좌표)
		xfA.setPosition(canvasToWorld(mousePos));

		//console.log('xfA', xfA, 'canvasToWorld(mousePos)', canvasToWorld(mousePos));
	}

	function touchHandler(ev) {
		var touches = ev.changedTouches;
		var first = touches[0];
		var type = {"touchstart":"mousedown", "touchmove":"mousemove", "touchend":"mouseup"}[ev.type];

		var simulatedEvent = document.createEvent("MouseEvent");
		simulatedEvent.initMouseEvent(type, true, true, window, 1, 
			first.screenX, first.screenY, 
			first.clientX, first.clientY, false, 
			false, false, false, 0/*left*/, null);

		first.target.dispatchEvent(simulatedEvent);
		ev.preventDefault();
	}

	function onKeyDown(ev) {
		if (!ev) {
			ev = event;
		}

		switch (ev.keyCode) {
		case 49: // '1'
		case 50: // '2'
		case 51: // '3'
		case 52: // '4'
		case 53: // '5'
		case 54: // '6'
		case 55: // '7'
			setMode(ev.keyCode - 49);
			break;
		case 77: // 'm'
			showMinkDiff = !showMinkDiff;
			break;
		case 67: // 'c'
			showClipEdges = !showClipEdges;
			break;
		case 69: // 'e'
			angle -= 5;
			xfA.setRotation(deg2rad(angle));
			break;
		case 81: // 'q'
			angle += 5;
			xfA.setRotation(deg2rad(angle));
			break;
		case 83: // 's'
			simplexHistoryIndex++;
			break;
		case 80: // 'p'
			polytopeEdgeHistoryIndex++;
			break;
		}
	}

	function onKeyUp(ev) {
		if (!ev) {
			ev = event;
		}		
	}

	return { main: main };
} ();
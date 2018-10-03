webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(326);
	
	var _Test2 = _interopRequireDefault(_Test);
	
	var _KeyCode = __webpack_require__(331);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _Mouse = __webpack_require__(332);
	
	var _Mouse2 = _interopRequireDefault(_Mouse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	(function () {
	    window.onload = function () {
	        var main = new Main();
	    };
	})();
	
	var canvas = void 0,
	    renderer = void 0,
	    stage = void 0,
	    test = void 0,
	    container = void 0;
	
	var Main = function () {
	    function Main() {
	        _classCallCheck(this, Main);
	
	        this.init();
	        this.addEvent();
	        this.onResize();
	    }
	
	    _createClass(Main, [{
	        key: 'init',
	        value: function init() {
	            canvas = document.getElementById('canvas');
	
	            renderer = new PIXI.CanvasRenderer(canvas.width, canvas.height, {
	                view: canvas,
	                autoResize: true,
	                backgroundColor: 0x33383D
	            });
	
	            _Mouse2.default.renderer = renderer;
	
	            // 위치가 정수가 아닐경우 흐릿하게 보이는 문제가 있어
	            // 렌더러의 위치를 정수로 연산될 수 있도록 한다.
	            //renderer.roundPixels = true;
	
	            stage = new PIXI.Container();
	            container = new PIXI.Container();
	            stage.addChild(container);
	
	            test = new _Test2.default(renderer);
	
	            container.addChild(test);
	
	            this.updateLoop();
	            this.resizeWindow();
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent() {
	            window.onresize = this.onResize.bind(this);
	            window.addEventListener('keyup', this.onKeyUp.bind(this));
	        }
	    }, {
	        key: 'onResize',
	        value: function onResize() {
	            this.resizeWindow();
	        }
	    }, {
	        key: 'updateLoop',
	        value: function updateLoop(ms) {
	            this.update(ms);
	            requestAnimFrame(this.updateLoop.bind(this));
	        }
	    }, {
	        key: 'update',
	        value: function update(ms) {
	            test.update();
	            renderer.render(stage);
	        }
	    }, {
	        key: 'resizeWindow',
	        value: function resizeWindow() {
	            var width = window.innerWidth * window.devicePixelRatio;
	            var height = window.innerHeight * window.devicePixelRatio;
	
	            /**
	             * 캔버스 사이즈와 디스플레이 사이즈 설정
	             * 레티나 그래픽 지원 코드
	             */
	            canvas.width = width;
	            canvas.height = height;
	            canvas.style.width = width + 'px';
	            canvas.style.height = height + 'px';
	
	            /**
	             * PIXI renderer 리사이즈
	             * PIXI 에게 viewport 사이즈 변경 알림
	             */
	            renderer.resize(width, height);
	
	            if (test) {
	                test.resize();
	            }
	        }
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(e) {
	            switch (e.keyCode) {
	                case _KeyCode2.default.TILDE:
	                    break;
	
	                case _KeyCode2.default.ESC:
	                    break;
	
	                case _KeyCode2.default.SPACE:
	                    break;
	
	                case _KeyCode2.default.DOWN_ARROW:
	                    break;
	
	                case _KeyCode2.default.UP_ARROW:
	                    break;
	
	                case _KeyCode2.default.LEFT_ARROW:
	                    break;
	
	                case _KeyCode2.default.RIGHT_ARROW:
	                    break;
	
	                case _KeyCode2.default.BACK_SPACE:
	                    console.clear();
	                    break;
	            }
	        }
	    }]);

	    return Main;
	}();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Point = __webpack_require__(328);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _PastelColor = __webpack_require__(329);
	
	var _PastelColor2 = _interopRequireDefault(_PastelColor);
	
	var _ConvexHull = __webpack_require__(330);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var INTERVAL = 3000;
	
	var Test = function (_PIXI$Container) {
	    _inherits(Test, _PIXI$Container);
	
	    function Test(renderer) {
	        _classCallCheck(this, Test);
	
	        var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this));
	
	        _this.interactive = true;
	        _this.renderer = renderer;
	        _this.canvas = _this.renderer.view;
	        _this.context = _this.canvas.getContext('2d');
	
	        _this.initialize();
	        return _this;
	    }
	
	    _createClass(Test, [{
	        key: 'initialize',
	        value: function initialize() {
	            this.createConvexHull();
	            this.displayConvexHull = this.displayConvexHull.bind(this);
	            setInterval(this.displayConvexHull, INTERVAL);
	        }
	    }, {
	        key: 'displayConvexHull',
	        value: function displayConvexHull() {
	            this.clear();
	            this.createConvexHull();
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            var _this2 = this;
	
	            if (this.graphics) {
	                this.graphics.clear();
	                this.removeChild(this.graphics);
	                this.graphics.destroy();
	                this.graphics = null;
	            }
	
	            if (this.points) {
	                this.points.forEach(function (point) {
	                    _this2.removeChild(point);
	                    point.clear();
	                    point.destroy();
	                    point = null;
	                });
	                this.points.length = 0;
	                this.points = null;
	            }
	        }
	    }, {
	        key: 'createConvexHull',
	        value: function createConvexHull() {
	            var points = this.points = this.createPoints();
	
	            var convexHull = _ConvexHull2.default.generate(points);
	
	            var graphics = this.graphics = new PIXI.Graphics();
	            graphics.lineStyle(1, _PastelColor2.default.generate().hex, 0.5);
	            graphics.moveTo(convexHull[0].x, convexHull[0].y);
	
	            for (var i = 1, n = convexHull.length; i < n; i++) {
	                graphics.lineTo(convexHull[i].x, convexHull[i].y);
	            }
	
	            graphics.lineTo(convexHull[0].x, convexHull[0].y);
	            this.addChild(graphics);
	        }
	    }, {
	        key: 'createPoints',
	        value: function createPoints() {
	            var points = [];
	            var random = 10 + Math.random() * 50;
	            var tl = { x: 100, y: 100 };
	            var br = { x: 500, y: 500 };
	            var vec = new _Vector2.default();
	
	            for (var point, i = 0; i < random; i++) {
	                var color = _PastelColor2.default.generate();
	                vec.randomize(tl, br);
	                point = new _Point2.default(vec.x, vec.y, 3, color.hex);
	                points.push(point);
	                this.addChild(point);
	            }
	
	            return points;
	        }
	    }, {
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'resize',
	        value: function resize() {
	            this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
	        }
	    }]);
	
	    return Test;
	}(PIXI.Container);
	
	exports.default = Test;

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var degrees = 180 / Math.PI;
	
	function random(min, max) {
	    return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	function radian2degrees(rad) {
	    return rad * degrees;
	}
	
	function degrees2radian(deg) {
	    return deg / degrees;
	}
	
	/**
	 * Victor.js를 ES6로 변환하여 사용하고 있습니다.
	 * https://github.com/maxkueng/victor
	 */
	
	var Vector = function () {
	    _createClass(Vector, null, [{
	        key: 'fromArray',
	
	        /**
	         * Creates a new instance from an array
	         *
	         * ### Examples:
	         *     var vec = Vector.fromArray([42, 21]);
	         *
	         *     vec.toString();
	         *     // => x:42, y:21
	         *
	         * @name Vector.fromArray
	         * @param {Array} array Array with the x and y values at index 0 and 1 respectively
	         * @return {Vector} The new instance
	         * @api public
	         */
	        value: function fromArray(arr) {
	            return new Vector(arr[0] || 0, arr[1] || 0);
	        }
	
	        /**
	         * Creates a new instance from an object
	         *
	         * ### Examples:
	         *     var vec = Vector.fromObject({ x: 42, y: 21 });
	         *
	         *     vec.toString();
	         *     // => x:42, y:21
	         *
	         * @name Vector.fromObject
	         * @param {Object} obj Object with the values for x and y
	         * @return {Vector} The new instance
	         * @api public
	         */
	
	    }, {
	        key: 'fromObject',
	        value: function fromObject(obj) {
	            return new Vector(obj.x || 0, obj.y || 0);
	        }
	
	        /**
	         * Constructor. Will also work without the `new` keyword
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = Vector(42, 1337);
	         *
	         * @param {Number} x Value of the x axis
	         * @param {Number} y Value of the y axis
	         * @return {Vector}
	         * @api public
	         */
	
	    }]);
	
	    function Vector() {
	        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	        _classCallCheck(this, Vector);
	
	        if (!(this instanceof Vector)) {
	            return new Vector(x, y);
	        }
	
	        this.x = x;
	        this.y = y;
	    }
	
	    /**
	     * Adds another vector's X axis to this one
	     *
	     * ### Examples:
	     *     var vec1 = new Vector(10, 10);
	     *     var vec2 = new Vector(20, 30);
	     *
	     *     vec1.addX(vec2);
	     *     vec1.toString();
	     *     // => x:30, y:10
	     *
	     * @param {Vector} vector The other vector you want to add to this one
	     * @return {Vector} `this` for chaining capabilities
	     * @api public
	     */
	
	
	    _createClass(Vector, [{
	        key: 'addX',
	        value: function addX(vec) {
	            this.x += vec.x;
	            return this;
	        }
	
	        /**
	         * Adds another vector's Y axis to this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.addY(vec2);
	         *     vec1.toString();
	         *     // => x:10, y:40
	         *
	         * @param {Vector} vector The other vector you want to add to this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'addY',
	        value: function addY(vec) {
	            this.y += vec.y;
	            return this;
	        }
	
	        /**
	         * Adds another vector to this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.add(vec2);
	         *     vec1.toString();
	         *     // => x:30, y:40
	         *
	         * @param {Vector} vector The other vector you want to add to this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'add',
	        value: function add(vec) {
	            this.x += vec.x;
	            this.y += vec.y;
	            return this;
	        }
	    }, {
	        key: 'addScalar',
	
	
	        /**
	         * Adds the given scalar to both vector axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(1, 2);
	         *
	         *     vec.addScalar(2);
	         *     vec.toString();
	         *     // => x: 3, y: 4
	         *
	         * @param {Number} scalar The scalar to add
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	        value: function addScalar(scalar) {
	            this.x += scalar;
	            this.y += scalar;
	            return this;
	        }
	
	        /**
	         * Adds the given scalar to the X axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(1, 2);
	         *
	         *     vec.addScalarX(2);
	         *     vec.toString();
	         *     // => x: 3, y: 2
	         *
	         * @param {Number} scalar The scalar to add
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'addScalarX',
	        value: function addScalarX(scalar) {
	            this.x += scalar;
	            return this;
	        }
	
	        /**
	         * Adds the given scalar to the Y axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(1, 2);
	         *
	         *     vec.addScalarY(2);
	         *     vec.toString();
	         *     // => x: 1, y: 4
	         *
	         * @param {Number} scalar The scalar to add
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'addScalarY',
	        value: function addScalarY(scalar) {
	            this.y += scalar;
	            return this;
	        }
	
	        /**
	         * Subtracts the X axis of another vector from this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.subtractX(vec2);
	         *     vec1.toString();
	         *     // => x:80, y:50
	         *
	         * @param {Vector} vector The other vector you want subtract from this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractX',
	        value: function subtractX(vec) {
	            this.x -= vec.x;
	            return this;
	        }
	
	        /**
	         * Subtracts the Y axis of another vector from this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.subtractY(vec2);
	         *     vec1.toString();
	         *     // => x:100, y:20
	         *
	         * @param {Vector} vector The other vector you want subtract from this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractY',
	        value: function subtractY(vec) {
	            this.y -= vec.y;
	            return this;
	        }
	
	        /**
	         * Subtracts another vector from this one
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(20, 30);
	         *
	         *     vec1.subtract(vec2);
	         *     vec1.toString();
	         *     // => x:80, y:20
	         *
	         * @param {Vector} vector The other vector you want subtract from this one
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtract',
	        value: function subtract(vec) {
	            this.x -= vec.x;
	            this.y -= vec.y;
	            return this;
	        }
	    }, {
	        key: 'edge',
	        value: function edge(vec) {
	            return this.subtract(vec);
	        }
	    }, {
	        key: 'subtractScalar',
	
	
	        /**
	         * Subtracts the given scalar from both axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 200);
	         *
	         *     vec.subtractScalar(20);
	         *     vec.toString();
	         *     // => x: 80, y: 180
	         *
	         * @param {Number} scalar The scalar to subtract
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	        value: function subtractScalar(scalar) {
	            this.x -= scalar;
	            this.y -= scalar;
	            return this;
	        }
	
	        /**
	         * Subtracts the given scalar from the X axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 200);
	         *
	         *     vec.subtractScalarX(20);
	         *     vec.toString();
	         *     // => x: 80, y: 200
	         *
	         * @param {Number} scalar The scalar to subtract
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractScalarX',
	        value: function subtractScalarX(scalar) {
	            this.x -= scalar;
	            return this;
	        }
	
	        /**
	         * Subtracts the given scalar from the Y axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 200);
	         *
	         *     vec.subtractScalarY(20);
	         *     vec.toString();
	         *     // => x: 100, y: 180
	         *
	         * @param {Number} scalar The scalar to subtract
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'subtractScalarY',
	        value: function subtractScalarY(scalar) {
	            this.y -= scalar;
	            return this;
	        }
	
	        /**
	         * Divides the X axis by the x component of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(2, 0);
	         *
	         *     vec.divideX(vec2);
	         *     vec.toString();
	         *     // => x:50, y:50
	         *
	         * @param {Vector} vector The other vector you want divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideX',
	        value: function divideX(vector) {
	            this.x /= vector.x;
	            return this;
	        }
	
	        /**
	         * Divides the Y axis by the y component of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(0, 2);
	         *
	         *     vec.divideY(vec2);
	         *     vec.toString();
	         *     // => x:100, y:25
	         *
	         * @param {Vector} vector The other vector you want divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideY',
	        value: function divideY(vector) {
	            this.y /= vector.y;
	            return this;
	        }
	
	        /**
	         * Divides both vector axis by a axis values of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(2, 2);
	         *
	         *     vec.divide(vec2);
	         *     vec.toString();
	         *     // => x:50, y:25
	         *
	         * @param {Vector} vector The vector to divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divide',
	        value: function divide(vector) {
	            this.x /= vector.x;
	            this.y /= vector.y;
	            return this;
	        }
	    }, {
	        key: 'divideScalar',
	
	
	        /**
	         * Divides both vector axis by the given scalar value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.divideScalar(2);
	         *     vec.toString();
	         *     // => x:50, y:25
	         *
	         * @param {Number} The scalar to divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	        value: function divideScalar(scalar) {
	            if (scalar !== 0) {
	                this.x /= scalar;
	                this.y /= scalar;
	            } else {
	                this.x = 0;
	                this.y = 0;
	            }
	
	            return this;
	        }
	
	        /**
	         * Divides the X axis by the given scalar value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.divideScalarX(2);
	         *     vec.toString();
	         *     // => x:50, y:50
	         *
	         * @param {Number} The scalar to divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideScalarX',
	        value: function divideScalarX(scalar) {
	            if (scalar !== 0) {
	                this.x /= scalar;
	            } else {
	                this.x = 0;
	            }
	            return this;
	        }
	
	        /**
	         * Divides the Y axis by the given scalar value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.divideScalarY(2);
	         *     vec.toString();
	         *     // => x:100, y:25
	         *
	         * @param {Number} The scalar to divide by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'divideScalarY',
	        value: function divideScalarY(scalar) {
	            if (scalar !== 0) {
	                this.y /= scalar;
	            } else {
	                this.y = 0;
	            }
	            return this;
	        }
	
	        /**
	         * Inverts the X axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.invertX();
	         *     vec.toString();
	         *     // => x:-100, y:50
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'invertX',
	        value: function invertX() {
	            this.x *= -1;
	            return this;
	        }
	
	        /**
	         * Inverts the Y axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.invertY();
	         *     vec.toString();
	         *     // => x:100, y:-50
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'invertY',
	        value: function invertY() {
	            this.y *= -1;
	            return this;
	        }
	
	        /**
	         * Inverts both axis
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.invert();
	         *     vec.toString();
	         *     // => x:-100, y:-50
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'invert',
	        value: function invert() {
	            this.invertX();
	            this.invertY();
	            return this;
	        }
	    }, {
	        key: 'multiplyX',
	
	
	        /**
	         * Multiplies the X axis by X component of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(2, 0);
	         *
	         *     vec.multiplyX(vec2);
	         *     vec.toString();
	         *     // => x:200, y:50
	         *
	         * @param {Vector} vector The vector to multiply the axis with
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	        value: function multiplyX(vector) {
	            this.x *= vector.x;
	            return this;
	        }
	
	        /**
	         * Multiplies the Y axis by Y component of given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(0, 2);
	         *
	         *     vec.multiplyX(vec2);
	         *     vec.toString();
	         *     // => x:100, y:100
	         *
	         * @param {Vector} vector The vector to multiply the axis with
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'multiplyY',
	        value: function multiplyY(vector) {
	            this.y *= vector.y;
	            return this;
	        }
	
	        /**
	         * Multiplies both vector axis by values from a given vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     var vec2 = new Vector(2, 2);
	         *
	         *     vec.multiply(vec2);
	         *     vec.toString();
	         *     // => x:200, y:100
	         *
	         * @param {Vector} vector The vector to multiply by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'multiply',
	        value: function multiply(vector) {
	            this.x *= vector.x;
	            this.y *= vector.y;
	            return this;
	        }
	
	        /**
	         * Multiplies both vector axis by the given scalar value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.multiplyScalar(2);
	         *     vec.toString();
	         *     // => x:200, y:100
	         *
	         * @param {Number} The scalar to multiply by
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'multiplyScalar',
	        value: function multiplyScalar(scalar) {
	            this.x *= scalar;
	            this.y *= scalar;
	            return this;
	        }
	    }, {
	        key: 'multiplyScalarX',
	        value: function multiplyScalarX(scalar) {
	            this.x *= scalar;
	            return this;
	        }
	    }, {
	        key: 'multiplyScalarY',
	        value: function multiplyScalarY(scalar) {
	            this.y *= scalar;
	            return this;
	        }
	
	        /**
	         * 수직 벡터 생성 (90 도 회전)
	         * @returns {Vector}
	         */
	
	    }, {
	        key: 'perpendicular',
	        value: function perpendicular() {
	            return new Vector(-this.y, this.x);
	        }
	    }, {
	        key: 'returnPerpendicular',
	
	
	        /**
	         * 수직 벡터 생성 (-90 도 회전)
	         */
	        value: function returnPerpendicular() {
	            return new Vector(this.y, -this.x);
	        }
	    }, {
	        key: 'normalize',
	
	
	        /**
	         * Normalize
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	        value: function normalize() {
	            var length = this.length();
	
	            if (length === 0) {
	                this.x = 1;
	                this.y = 0;
	            } else {
	                this.divide(new Vector(length, length));
	            }
	            return this;
	        }
	    }, {
	        key: 'norm',
	        value: function norm() {
	            return this.normalize();
	        }
	
	        /**
	         * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.limit(80, 0.9);
	         *     vec.toString();
	         *     // => x:90, y:50
	         *
	         * @param {Number} max The maximum value for both x and y axis
	         * @param {Number} factor Factor by which the axis are to be multiplied with
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'limit',
	        value: function limit(max, factor) {
	            if (Math.abs(this.x) > max) {
	                this.x *= factor;
	            }
	            if (Math.abs(this.y) > max) {
	                this.y *= factor;
	            }
	            return this;
	        }
	
	        /**
	         * Randomizes both vector axis with a value between 2 vectors
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.randomize(new Vector(50, 60), new Vector(70, 80`));
	         *     vec.toString();
	         *     // => x:67, y:73
	         *
	         * @param {Vector} topLeft first vector
	         * @param {Vector} bottomRight second vector
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'randomize',
	        value: function randomize(topLeft, bottomRight) {
	            this.randomizeX(topLeft, bottomRight);
	            this.randomizeY(topLeft, bottomRight);
	
	            return this;
	        }
	    }, {
	        key: 'randomizeX',
	        value: function randomizeX(topLeft, bottomRight) {
	            var min = Math.min(topLeft.x, bottomRight.x);
	            var max = Math.max(topLeft.x, bottomRight.x);
	            this.x = random(min, max);
	            return this;
	        }
	    }, {
	        key: 'randomizeY',
	        value: function randomizeY(topLeft, bottomRight) {
	            var min = Math.min(topLeft.y, bottomRight.y);
	            var max = Math.max(topLeft.y, bottomRight.y);
	            this.y = random(min, max);
	            return this;
	        }
	    }, {
	        key: 'randomizeAny',
	
	
	        /**
	         * Randomly randomizes either axis between 2 vectors
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.randomizeAny(new Vector(50, 60), new Vector(70, 80));
	         *     vec.toString();
	         *     // => x:100, y:77
	         *
	         * @param {Vector} topLeft first vector
	         * @param {Vector} bottomRight second vector
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	        value: function randomizeAny(topLeft, bottomRight) {
	            if (!!Math.round(Math.random())) {
	                this.randomizeX(topLeft, bottomRight);
	            } else {
	                this.randomizeY(topLeft, bottomRight);
	            }
	            return this;
	        }
	
	        /**
	         * Rounds both axis to an integer value
	         *
	         * ### Examples:
	         *     var vec = new Vector(100.2, 50.9);
	         *
	         *     vec.unfloat();
	         *     vec.toString();
	         *     // => x:100, y:51
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'unfloat',
	        value: function unfloat() {
	            this.x = Math.round(this.x);
	            this.y = Math.round(this.y);
	            return this;
	        }
	
	        /**
	         * Rounds both axis to a certain precision
	         *
	         * ### Examples:
	         *     var vec = new Vector(100.2, 50.9);
	         *
	         *     vec.unfloat();
	         *     vec.toString();
	         *     // => x:100, y:51
	         *
	         * @param {Number} Precision (default: 8)
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'toFixed',
	        value: function toFixed(precision) {
	            if (typeof precision === 'undefined') {
	                precision = 8;
	            }
	            this.x = this.x.toFixed(precision);
	            this.y = this.y.toFixed(precision);
	            return this;
	        }
	
	        /**
	         * Performs a linear blend / interpolation of the X axis towards another vector
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 100);
	         *     var vec2 = new Vector(200, 200);
	         *
	         *     vec1.mixX(vec2, 0.5);
	         *     vec.toString();
	         *     // => x:150, y:100
	         *
	         * @param {Vector} vector The other vector
	         * @param {Number} amount The blend amount (optional, default: 0.5)
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'mixX',
	        value: function mixX(vec, amount) {
	            if (typeof amount === 'undefined') {
	                amount = 0.5;
	            }
	
	            this.x = (1 - amount) * this.x + amount * vec.x;
	            return this;
	        }
	
	        /**
	         * Performs a linear blend / interpolation of the Y axis towards another vector
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 100);
	         *     var vec2 = new Vector(200, 200);
	         *
	         *     vec1.mixY(vec2, 0.5);
	         *     vec.toString();
	         *     // => x:100, y:150
	         *
	         * @param {Vector} vector The other vector
	         * @param {Number} amount The blend amount (optional, default: 0.5)
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'mixY',
	        value: function mixY(vec, amount) {
	            if (typeof amount === 'undefined') {
	                amount = 0.5;
	            }
	
	            this.y = (1 - amount) * this.y + amount * vec.y;
	            return this;
	        }
	
	        /**
	         * Performs a linear blend / interpolation towards another vector
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 100);
	         *     var vec2 = new Vector(200, 200);
	         *
	         *     vec1.mix(vec2, 0.5);
	         *     vec.toString();
	         *     // => x:150, y:150
	         *
	         * @param {Vector} vector The other vector
	         * @param {Number} amount The blend amount (optional, default: 0.5)
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'mix',
	        value: function mix(vec, amount) {
	            this.mixX(vec, amount);
	            this.mixY(vec, amount);
	            return this;
	        }
	
	        /**
	         * # Products
	         */
	
	        /**
	         * Creates a clone of this vector
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = vec1.clone();
	         *
	         *     vec2.toString();
	         *     // => x:10, y:10
	         *
	         * @return {Vector} A clone of the vector
	         * @api public
	         */
	
	    }, {
	        key: 'clone',
	        value: function clone() {
	            return new Vector(this.x, this.y);
	        }
	
	        /**
	         * Copies another vector's X component in to its own
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 20);
	         *     var vec2 = vec1.copyX(vec1);
	         *
	         *     vec2.toString();
	         *     // => x:20, y:10
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'copyX',
	        value: function copyX(vec) {
	            this.x = vec.x;
	            return this;
	        }
	
	        /**
	         * Copies another vector's Y component in to its own
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 20);
	         *     var vec2 = vec1.copyY(vec1);
	         *
	         *     vec2.toString();
	         *     // => x:10, y:20
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'copyY',
	        value: function copyY(vec) {
	            this.y = vec.y;
	            return this;
	        }
	
	        /**
	         * Copies another vector's X and Y components in to its own
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *     var vec2 = new Vector(20, 20);
	         *     var vec2 = vec1.copy(vec1);
	         *
	         *     vec2.toString();
	         *     // => x:20, y:20
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'copy',
	        value: function copy(vec) {
	            this.copyX(vec);
	            this.copyY(vec);
	            return this;
	        }
	
	        /**
	         * Sets the vector to zero (0,0)
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(10, 10);
	         *		 var1.zero();
	         *     vec1.toString();
	         *     // => x:0, y:0
	         *
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	
	    }, {
	        key: 'zero',
	        value: function zero() {
	            this.x = this.y = 0;
	            return this;
	        }
	
	        /**
	         * Calculates the dot product of this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.dot(vec2);
	         *     // => 23000
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Dot product
	         * @api public
	         */
	
	    }, {
	        key: 'dot',
	        value: function dot(vec2) {
	            return this.x * vec2.x + this.y * vec2.y;
	        }
	    }, {
	        key: 'dotProduct',
	        value: function dotProduct(vec) {
	            return this.dot(vec);
	        }
	    }, {
	        key: 'cross',
	        value: function cross(vec2) {
	            return this.x * vec2.y - this.y * vec2.x;
	        }
	    }, {
	        key: 'projectOnto',
	
	
	        /**
	         * Projects a vector onto another vector, setting itself to the result.
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 0);
	         *     var vec2 = new Vector(100, 100);
	         *
	         *     vec.projectOnto(vec2);
	         *     vec.toString();
	         *     // => x:50, y:50
	         *
	         * @param {Vector} vector The other vector you want to project this vector onto
	         * @return {Vector} `this` for chaining capabilities
	         * @api public
	         */
	        value: function projectOnto(vec2) {
	            var coeff = (this.x * vec2.x + this.y * vec2.y) / (vec2.x * vec2.x + vec2.y * vec2.y);
	            this.x = coeff * vec2.x;
	            this.y = coeff * vec2.y;
	            return this;
	        }
	
	        /**
	         * 선형 보간
	         * http://developug.blogspot.com/2014/09/unity-vector-lerp.html
	         * @param vec1
	         * @param vec2
	         * @param to
	         * @returns {Vector}
	         */
	
	    }, {
	        key: 'horizontalAngle',
	        value: function horizontalAngle() {
	            return Math.atan2(this.y, this.x);
	        }
	    }, {
	        key: 'horizontalAngleDeg',
	        value: function horizontalAngleDeg() {
	            return radian2degrees(this.horizontalAngle());
	        }
	    }, {
	        key: 'verticalAngle',
	        value: function verticalAngle() {
	            return Math.atan2(this.x, this.y);
	        }
	    }, {
	        key: 'verticalAngleDeg',
	        value: function verticalAngleDeg() {
	            return radian2degrees(this.verticalAngle());
	        }
	    }, {
	        key: 'angle',
	        value: function angle() {
	            return this.horizontalAngle();
	        }
	    }, {
	        key: 'angleDeg',
	        value: function angleDeg() {
	            return this.horizontalAngleDeg();
	        }
	    }, {
	        key: 'direction',
	        value: function direction() {
	            return this.horizontalAngle();
	        }
	    }, {
	        key: 'rotate',
	        value: function rotate(angle) {
	            var nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
	            var ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);
	
	            this.x = nx;
	            this.y = ny;
	
	            return this;
	        }
	    }, {
	        key: 'rotateDeg',
	        value: function rotateDeg(angle) {
	            angle = degrees2radian(angle);
	            return this.rotate(angle);
	        }
	    }, {
	        key: 'rotateTo',
	        value: function rotateTo(rotation) {
	            return this.rotate(rotation - this.angle());
	        }
	    }, {
	        key: 'rotateToDeg',
	        value: function rotateToDeg(rotation) {
	            rotation = degrees2radian(rotation);
	            return this.rotateTo(rotation);
	        }
	    }, {
	        key: 'rotateBy',
	        value: function rotateBy(rotation) {
	            var angle = this.angle() + rotation;
	
	            return this.rotate(angle);
	        }
	    }, {
	        key: 'rotateByDeg',
	        value: function rotateByDeg(rotation) {
	            rotation = degrees2radian(rotation);
	            return this.rotateBy(rotation);
	        }
	
	        /**
	         * Calculates the distance of the X axis between this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distanceX(vec2);
	         *     // => -100
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Distance
	         * @api public
	         */
	
	    }, {
	        key: 'distanceX',
	        value: function distanceX(vec) {
	            return this.x - vec.x;
	        }
	
	        /**
	         * Same as `distanceX()` but always returns an absolute number
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.absDistanceX(vec2);
	         *     // => 100
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Absolute distance
	         * @api public
	         */
	
	    }, {
	        key: 'absDistanceX',
	        value: function absDistanceX(vec) {
	            return Math.abs(this.distanceX(vec));
	        }
	
	        /**
	         * Calculates the distance of the Y axis between this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distanceY(vec2);
	         *     // => -10
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Distance
	         * @api public
	         */
	
	    }, {
	        key: 'distanceY',
	        value: function distanceY(vec) {
	            return this.y - vec.y;
	        }
	
	        /**
	         * Same as `distanceY()` but always returns an absolute number
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distanceY(vec2);
	         *     // => 10
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Absolute distance
	         * @api public
	         */
	
	    }, {
	        key: 'absDistanceY',
	        value: function absDistanceY(vec) {
	            return Math.abs(this.distanceY(vec));
	        }
	
	        /**
	         * Calculates the euclidean distance between this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distance(vec2);
	         *     // => 100.4987562112089
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Distance
	         * @api public
	         */
	
	    }, {
	        key: 'distance',
	        value: function distance(vec) {
	            return Math.sqrt(this.distanceSq(vec));
	        }
	    }, {
	        key: 'getMagnitude',
	        value: function getMagnitude() {
	            return this.direction();
	        }
	
	        /**
	         * Calculates the squared euclidean distance between this vector and another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(200, 60);
	         *
	         *     vec1.distanceSq(vec2);
	         *     // => 10100
	         *
	         * @param {Vector} vector The second vector
	         * @return {Number} Distance
	         * @api public
	         */
	
	    }, {
	        key: 'distanceSq',
	        value: function distanceSq(vec) {
	            var dx = this.distanceX(vec),
	                dy = this.distanceY(vec);
	
	            return dx * dx + dy * dy;
	        }
	
	        /**
	         * Calculates the length or magnitude of the vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.length();
	         *     // => 111.80339887498948
	         *
	         * @return {Number} Length / Magnitude
	         * @api public
	         */
	
	    }, {
	        key: 'length',
	        value: function length() {
	            return Math.sqrt(this.lengthSq());
	        }
	
	        /**
	         * 단순히 길이 비교를 하려면 length 를 사용하기 보다는 lengthSq 를 사용하게 빠르다.
	         * length 는 Math.sqrt (제곱근) 처리를 하기 때문에 단순 길이 비교시 lengthSq 를 사용하는 것이 빠릅니다.
	         * Squared length / magnitude
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *
	         *     vec.lengthSq();
	         *     // => 12500
	         *
	         * @return {Number} Length / Magnitude
	         * @api public
	         */
	
	    }, {
	        key: 'lengthSq',
	        value: function lengthSq() {
	            return this.x * this.x + this.y * this.y;
	        }
	    }, {
	        key: 'magnitude',
	        value: function magnitude() {
	            return this.length();
	        }
	
	        /**
	         * Returns a true if vector is (0, 0)
	         *
	         * ### Examples:
	         *     var vec = new Vector(100, 50);
	         *     vec.zero();
	         *
	         *     // => true
	         *
	         * @return {Boolean}
	         * @api public
	         */
	
	    }, {
	        key: 'isZero',
	        value: function isZero() {
	            return this.x === 0 && this.y === 0;
	        }
	
	        /**
	         * Returns a true if this vector is the same as another
	         *
	         * ### Examples:
	         *     var vec1 = new Vector(100, 50);
	         *     var vec2 = new Vector(100, 50);
	         *     vec1.isEqualTo(vec2);
	         *
	         *     // => true
	         *
	         * @return {Boolean}
	         * @api public
	         */
	
	    }, {
	        key: 'isEqualTo',
	        value: function isEqualTo(vec2) {
	            return this.x === vec2.x && this.y === vec2.y;
	        }
	
	        /**
	         * # Utility Methods
	         */
	
	        /**
	         * Returns an string representation of the vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(10, 20);
	         *
	         *     vec.toString();
	         *     // => x:10, y:20
	         *
	         * @return {String}
	         * @api public
	         */
	
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'x:' + this.x + ', y:' + this.y;
	        }
	
	        /**
	         * Returns an array representation of the vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(10, 20);
	         *
	         *     vec.toArray();
	         *     // => [10, 20]
	         *
	         * @return {Array}
	         * @api public
	         */
	
	    }, {
	        key: 'toArray',
	        value: function toArray() {
	            return [this.x, this.y];
	        }
	
	        /**
	         * Returns an object representation of the vector
	         *
	         * ### Examples:
	         *     var vec = new Vector(10, 20);
	         *
	         *     vec.toObject();
	         *     // => { x: 10, y: 20 }
	         *
	         * @return {Object}
	         * @api public
	         */
	
	    }, {
	        key: 'toObject',
	        value: function toObject() {
	            return { x: this.x, y: this.y };
	        }
	    }], [{
	        key: 'add',
	        value: function add(a, b) {
	            return new Vector(a.x + b.x, a.y + b.y);
	        }
	    }, {
	        key: 'subtract',
	        value: function subtract(a, b) {
	            return new Vector(a.x - b.x, a.y - b.y);
	        }
	    }, {
	        key: 'edge',
	        value: function edge(a, b) {
	            return Vector.subtract(a, b);
	        }
	    }, {
	        key: 'divide',
	        value: function divide(a, b) {
	            return new Vector(a.x / b.x, a.y / b.y);
	        }
	    }, {
	        key: 'negate',
	        value: function negate(vec) {
	            var v = vec.clone();
	            v.x = -vec.x;
	            v.y = -vec.y;
	            return v;
	        }
	    }, {
	        key: 'multiplyScalar',
	        value: function multiplyScalar(vector, scalar) {
	            return new Vector(vector.x * scalar, vector.y * scalar);
	        }
	    }, {
	        key: 'divideScalar',
	        value: function divideScalar(vector, scalar) {
	            return new Vector(vector.x / scalar, vector.y / scalar);
	        }
	    }, {
	        key: 'perpendicular',
	        value: function perpendicular(vec) {
	            var clone = vec.clone();
	            clone.x = -vec.y;
	            clone.y = vec.x;
	            return clone;
	        }
	    }, {
	        key: 'returnPerpendicular',
	        value: function returnPerpendicular(vec) {
	            var clone = vec.clone();
	            clone.x = vec.y;
	            clone.y = -vec.x;
	            return clone;
	        }
	
	        /**
	         * 버림
	         * @param vector
	         * @param length
	         */
	
	    }, {
	        key: 'truncate',
	        value: function truncate(vec, length) {
	            var ret = vec.clone();
	            var lengthSq = vec.x * vec.x + vec.y * vec.y;
	            if (lengthSq > length * length) {
	                ret.multiplyScalar(length / Math.sqrt(lengthSq));
	            }
	            return ret;
	        }
	    }, {
	        key: 'randomize',
	        value: function randomize(topLeft, bottomRight) {
	            return new Vector(this.randomizeX(topLeft, bottomRight), this.randomizeY(topLeft, bottomRight));
	        }
	    }, {
	        key: 'randomizeX',
	        value: function randomizeX(topLeft, bottomRight) {
	            var min = Math.min(topLeft.x, bottomRight.x);
	            var max = Math.max(topLeft.x, bottomRight.x);
	            return random(min, max);
	        }
	    }, {
	        key: 'randomizeY',
	        value: function randomizeY(topLeft, bottomRight) {
	            var min = Math.min(topLeft.y, bottomRight.y);
	            var max = Math.max(topLeft.y, bottomRight.y);
	            return random(min, max);
	        }
	    }, {
	        key: 'dotProduct',
	        value: function dotProduct(a, b) {
	            return a.x * b.x + a.y * b.y;
	        }
	    }, {
	        key: 'cross',
	        value: function cross(a, b) {
	            return a.x * b.y - a.y * b.x;
	        }
	
	        /**
	         * https://github.com/kroitor/gjk.c
	         * https://en.wikipedia.org/wiki/Triple_product#Vector_triple_product
	         * 세그먼트에서 원점으로 향하는 방향을 찾을 때 사용
	         */
	
	    }, {
	        key: 'tripleProduct',
	        value: function tripleProduct(a, b, c) {
	            var r = new Vector();
	            var ac = a.x * c.x + a.y * c.y // perform a.dot(c)
	            ,
	                bc = b.x * c.x + b.y * c.y; // perform b.dot(c)
	
	            // perform b * a.dot(c) - a * b.dot(c)
	            r.x = b.x * ac - a.x * bc;
	            r.y = b.y * ac - a.y * bc;
	
	            return r;
	        }
	    }, {
	        key: 'lerp',
	        value: function lerp(vec1, vec2, to) {
	            return Vector.add(Vector.multiplyScalar(vec1, 1 - to), Vector.multiplyScalar(vec2, to));
	        }
	
	        /**
	         * 역수
	         * @param vector
	         * @returns {Vector}
	         */
	
	    }, {
	        key: 'rcp',
	        value: function rcp(vector) {
	            return new Vector(1 / vector.x, 1 / vector.y);
	        }
	    }, {
	        key: 'lengthSq',
	        value: function lengthSq(vec) {
	            return vec.x * vec.x + vec.y * vec.y;
	        }
	    }]);
	
	    return Vector;
	}();
	
	exports.default = Vector;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Point = function (_PIXI$Graphics) {
	    _inherits(Point, _PIXI$Graphics);
	
	    function Point() {
	        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
	        var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0xff3300;
	        var alpha = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
	
	        _classCallCheck(this, Point);
	
	        var _this = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this));
	
	        _this.buttonMode = true;
	        _this.interactive = true;
	
	        _this.x = x;
	        _this.y = y;
	        _this.render(radius, color, alpha);
	        return _this;
	    }
	
	    _createClass(Point, [{
	        key: 'render',
	        value: function render() {
	            var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xff3300;
	            var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
	
	            this.clear();
	            this.beginFill(color, alpha);
	            this.drawCircle(0, 0, radius, color, alpha);
	            this.endFill();
	        }
	    }, {
	        key: 'randomize',
	        value: function randomize(lt, rb) {
	            var position = this.vector.randomize(lt, rb);
	            this.x = position.x;
	            this.y = position.y;
	        }
	    }, {
	        key: 'vector',
	        get: function get() {
	            return _Vector2.default.fromObject(this);
	        }
	    }]);
	
	    return Point;
	}(PIXI.Graphics);
	
	exports.default = Point;

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * https://codepen.io/pliu/pen/BLEKwA
	 */
	var PastelColor = function () {
	    function PastelColor() {
	        _classCallCheck(this, PastelColor);
	    }
	
	    _createClass(PastelColor, null, [{
	        key: 'generate',
	        value: function generate() {
	            var hBase = Math.random();
	            var newH = Math.floor(hBase * 360);
	            var newL = Math.floor(Math.random() * 16) + 75;
	            var color = 'hsl(' + newH + ', 100%, ' + newL + '%)';
	
	            var _HSLtoRGB = this.HSLtoRGB(hBase, 1, newL * .01),
	                _HSLtoRGB2 = _slicedToArray(_HSLtoRGB, 3),
	                r = _HSLtoRGB2[0],
	                g = _HSLtoRGB2[1],
	                b = _HSLtoRGB2[2];
	
	            return {
	                hsl: color, // hsl(0, 100%, 85%);
	                rgb: 'rgb(' + r + ', ' + g + ', ' + b + ')', // rgb(255, 128, 128);
	                hex: '' + this.RGBtoHex(r, g, b), // 0xff8080
	                hexShap: '' + this.RGBtoHex(r, g, b, '#') // #ff8080
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
	
	    }, {
	        key: 'HSLtoRGB',
	        value: function HSLtoRGB(h, s, l) {
	            var r = void 0,
	                g = void 0,
	                b = void 0;
	
	            var rd = function rd(a) {
	                return Math.floor(Math.max(Math.min(a * 256, 255), 0));
	            };
	
	            var hueToRGB = function hueToRGB(m, n, o) {
	                if (o < 0) o += 1;
	                if (o > 1) o -= 1;
	                if (o < 1 / 6) return m + (n - m) * 6 * o;
	                if (o < 1 / 2) return n;
	                if (o < 2 / 3) return m + (n - m) * (2 / 3 - o) * 6;
	                return m;
	            };
	
	            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	            var p = 2 * l - q;
	
	            r = hueToRGB(p, q, h + 1 / 3);
	            g = hueToRGB(p, q, h);
	            b = hueToRGB(p, q, h - 1 / 3);
	
	            return [rd(r), rd(g), rd(b)];
	        }
	    }, {
	        key: 'RGBtoHex',
	        value: function RGBtoHex(r, g, b) {
	            var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0x';
	
	            return '' + prefix + r.toString(16) + g.toString(16) + b.toString(16);
	        }
	    }]);
	
	    return PastelColor;
	}();
	
	exports.default = PastelColor;

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://www.crocus.co.kr/1288
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ConvexHull = function () {
	    function ConvexHull() {
	        _classCallCheck(this, ConvexHull);
	    }
	
	    _createClass(ConvexHull, null, [{
	        key: "generate",
	        value: function generate(points) {
	
	            var stack = [],
	                n = points.length;
	
	            // y좌표, x좌표 작은 순으로 정렬
	            points.sort(this.sortLowerYX);
	
	            // 기준점 설정
	            var basePoint = points[0];
	
	            // 기준점 기준으로 vector 를 생성하고 외적을 구해서 반 시계 방향으로 (ccw) 정렬 합니다.
	            for (var i = 1; i < n; i++) {
	                points[i].relativePosition = new _Vector2.default(points[i].x - basePoint.x, points[i].y - basePoint.y);
	            }
	
	            points.sort(this.sortCcw);
	
	            // 스택에 first, second 를 넣습니다.
	            stack.push(0);
	            stack.push(1);
	
	            var next = 2;
	
	            while (next < n) {
	                while (stack.length >= 2) {
	                    var first = void 0,
	                        second = void 0;
	                    second = stack[stack.length - 1];
	                    stack.pop();
	                    first = stack[stack.length - 1];
	
	                    // first, second, next가 좌회전 ( 0 보다 크면 )이라면 second push
	                    // 우회전( 0 보다 작으면 ) 이라면 위의 while문 계속 반복
	                    if (this.isCcw(points[first], points[second], points[next])) {
	                        stack.push(second);
	                        break;
	                    }
	                }
	
	                stack.push(next++);
	            }
	
	            var convexHull = [];
	            for (var _i = 0, _n = stack.length; _i < _n; _i++) {
	                var index = stack[_i];
	                var point = points[index];
	                convexHull.push({ x: point.x, y: point.y });
	            }
	
	            return convexHull;
	        }
	
	        /**
	         * y, x 가 작은 순으로 정렬
	         * @param pointA
	         * @param pointB
	         * @returns {boolean}
	         */
	
	    }, {
	        key: "sortLowerYX",
	        value: function sortLowerYX(pointA, pointB) {
	            if (pointA.y !== pointB.y) {
	                return pointA.y - pointB.y;
	            }
	            return pointA.x - pointB.x;
	        }
	
	        /**
	         * 기준 좌표 기준으로 상대 좌표를 구해서 시계 반대 방향으로 정렬합니다.
	         * @param pointA
	         * @param pointB
	         * @returns {boolean}
	         */
	
	    }, {
	        key: "sortCcw",
	        value: function sortCcw(pointA, pointB) {
	            // 중심 좌표인 경우 relativePosition 이 없습니다. 중심 좌표를 0번으로 정렬 합니다.
	            if (!pointA.relativePosition) {
	                return -1;
	            }
	
	            if (!pointB.relativePosition) {
	                return 1;
	            }
	
	            var a = pointA.relativePosition.y * pointB.relativePosition.x;
	            var b = pointA.relativePosition.x * pointB.relativePosition.y;
	
	            if (a !== b) {
	                return b - a;
	            }
	
	            return ConvexHull.sortLowerYX(pointA, pointB);
	        }
	
	        /**
	         * 반 시계 방향인지 여부
	         * @param pointA
	         * @param pointB
	         * @param pointC
	         * @returns {boolean}
	         */
	
	    }, {
	        key: "isCcw",
	        value: function isCcw(pointA, pointB, pointC) {
	            // const triangleArea = (pointB.x - pointA.x) * (pointC.y - pointA.y) - (pointC.x - pointA.x) * (pointB.y - pointA.y);
	            var triangleArea = (pointC.x - pointA.x) * (pointB.y - pointA.y) - (pointB.x - pointA.x) * (pointC.y - pointA.y);
	            if (triangleArea > 0) {
	                return true;
	            }
	            return false;
	        }
	    }]);
	
	    return ConvexHull;
	}();
	
	exports.default = ConvexHull;
	
	
	function debugArray(arr) {
	    for (var i = 0, n = arr.length; i < n; i++) {
	        console.log(arr[i].x, arr[i].y);
	    }
	}
	
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
	
	// Create the convex hull using the Gift wrapping algorithm
	// http://en.wikipedia.org/wiki/Gift_wrapping_algorithm
	function createConvexHull(points) {
	    // Find the right most point on the hull
	    var i0 = 0;
	    var x0 = points[0].x;
	    for (var i = 1; i < points.length; i++) {
	        var x = points[i].x;
	        if (x > x0 || x == x0 && points[i].y < points[i0].y) {
	            i0 = i;
	            x0 = x;
	        }
	    }
	
	    var n = points.length;
	    var hull = [];
	    var m = 0;
	    var ih = i0;
	
	    while (1) {
	        hull[m] = ih;
	
	        var ie = 0;
	        for (var j = 1; j < n; j++) {
	            if (ie == ih) {
	                ie = j;
	                continue;
	            }
	
	            var r = vec2.sub(points[ie], points[hull[m]]);
	            var v = vec2.sub(points[j], points[hull[m]]);
	            var c = vec2.cross(r, v);
	            if (c < 0) {
	                ie = j;
	            }
	
	            // Collinearity check
	            if (c == 0 && v.lengthsq() > r.lengthsq()) {
	                ie = j;
	            }
	        }
	
	        m++;
	        ih = ie;
	
	        if (ie == i0) {
	            break;
	        }
	    }
	
	    // Copy vertices
	    var newPoints = [];
	    for (var i = 0; i < m; ++i) {
	        newPoints.push(points[hull[i]]);
	    }
	
	    return newPoints;
	}

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Mouse = function () {
	    function Mouse() {
	        _classCallCheck(this, Mouse);
	    }
	
	    _createClass(Mouse, null, [{
	        key: "isDoubleClick",
	
	
	        /**
	         * 이동 거리가 5px 이하이고 500ms 안에 두번 클릭하면 더블 클릭으로 인정
	         * @param prevPoint 이전좌표
	         * @param currentPoint 현재좌표
	         * @param prevTime 이전 클릭 타임
	         * @param currentTime 현재 클릭 타임
	         * @returns {boolean} 더블 클릭 여부
	         */
	        value: function isDoubleClick(prevPoint, currentPoint, prevTime, currentTime) {
	            var diffX = currentPoint.x - prevPoint.x;
	
	            if (diffX < 0) {
	                diffX = diffX * -1;
	            }
	
	            var diffY = currentPoint.y - prevPoint.y;
	
	            if (diffY < 0) {
	                diffY = diffY * -1;
	            }
	
	            if (diffX > 5 || diffY > 5) {
	                return false;
	            }
	
	            if (currentTime - prevTime > 500) {
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: "DESKTOP_MOUSE",
	        get: function get() {
	            return this.renderer.plugins.interaction.mouse;
	        }
	    }, {
	        key: "MOBILE_MOUSE",
	        get: function get() {
	            return this.renderer.plugins.interaction.pointer;
	        }
	
	        /**
	         * PIXI.Application.renderer
	         * 랜더러에서 interactio 객체를 참조할 수 있어서 사용하려면 렌더러를 셋팅해야 합니다.
	         * @param value {PIXI.WebGLRenderrer|PIXI.CanvasRenderer}
	         */
	
	    }, {
	        key: "renderer",
	        set: function set(value) {
	            this._renderer = value;
	        },
	        get: function get() {
	            return this._renderer;
	        }
	
	        /**
	         * 모바일 대응을 위해서
	         * PC 버전에서는 mouse 객체를, 모바일 버전에서는 pointer 객체를 셋팅하면
	         * global 객체에서 참조해서 좌표값을 전달하도록 합니다.
	         *
	         * 만약 설정하지 않으면 기본 PC만 대응하도록 mouse 객체를 설정합니다.
	         *
	         * Desktop : Mouse.renderer.plugins.interaction.mouse
	         * Mobile : Mouse.renderer.plugins.interaction.pointer
	         * @param value
	         */
	
	    }, {
	        key: "mouse",
	        set: function set(value) {
	            this._mouse = value;
	        },
	        get: function get() {
	            if (!this._mouse) {
	                this._mouse = this.DESKTOP_MOUSE;
	            }
	            return this._mouse;
	        }
	    }, {
	        key: "global",
	        get: function get() {
	            return this.mouse.global;
	        }
	    }, {
	        key: "globalX",
	        get: function get() {
	            return this.mouse.global.x;
	        }
	    }, {
	        key: "globalY",
	        get: function get() {
	            return this.mouse.global.y;
	        }
	    }, {
	        key: "currentCursorStyle",
	        set: function set(value) {
	            Mouse.renderer.plugins.interaction.currentCursorStyle = value;
	        },
	        get: function get() {
	            return Mouse.renderer.plugins.interaction.currentCursorStyle;
	        }
	    }, {
	        key: "currentTime",
	        get: function get() {
	            return new Date().getTime();
	        }
	    }]);
	
	    return Mouse;
	}();
	
	exports.default = Mouse;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2NvbnZleGh1bGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jb252ZXhodWxsL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvTW91c2UuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibWFpbiIsIk1haW4iLCJjYW52YXMiLCJyZW5kZXJlciIsInN0YWdlIiwidGVzdCIsImNvbnRhaW5lciIsImluaXQiLCJhZGRFdmVudCIsIm9uUmVzaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlBJWEkiLCJDYW52YXNSZW5kZXJlciIsIndpZHRoIiwiaGVpZ2h0IiwidmlldyIsImF1dG9SZXNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb250YWluZXIiLCJhZGRDaGlsZCIsInVwZGF0ZUxvb3AiLCJyZXNpemVXaW5kb3ciLCJvbnJlc2l6ZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwib25LZXlVcCIsIm1zIiwidXBkYXRlIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlbmRlciIsImlubmVyV2lkdGgiLCJkZXZpY2VQaXhlbFJhdGlvIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInJlc2l6ZSIsImUiLCJrZXlDb2RlIiwiVElMREUiLCJFU0MiLCJTUEFDRSIsIkRPV05fQVJST1ciLCJVUF9BUlJPVyIsIkxFRlRfQVJST1ciLCJSSUdIVF9BUlJPVyIsIkJBQ0tfU1BBQ0UiLCJjb25zb2xlIiwiY2xlYXIiLCJJTlRFUlZBTCIsIlRlc3QiLCJpbnRlcmFjdGl2ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW5pdGlhbGl6ZSIsImNyZWF0ZUNvbnZleEh1bGwiLCJkaXNwbGF5Q29udmV4SHVsbCIsInNldEludGVydmFsIiwiZ3JhcGhpY3MiLCJyZW1vdmVDaGlsZCIsImRlc3Ryb3kiLCJwb2ludHMiLCJmb3JFYWNoIiwicG9pbnQiLCJsZW5ndGgiLCJjcmVhdGVQb2ludHMiLCJjb252ZXhIdWxsIiwiZ2VuZXJhdGUiLCJHcmFwaGljcyIsImxpbmVTdHlsZSIsImhleCIsIm1vdmVUbyIsIngiLCJ5IiwiaSIsIm4iLCJsaW5lVG8iLCJyYW5kb20iLCJNYXRoIiwidGwiLCJiciIsInZlYyIsImNvbG9yIiwicmFuZG9taXplIiwicHVzaCIsImhpdEFyZWEiLCJSZWN0YW5nbGUiLCJkZWdyZWVzIiwiUEkiLCJtaW4iLCJtYXgiLCJmbG9vciIsInJhZGlhbjJkZWdyZWVzIiwicmFkIiwiZGVncmVlczJyYWRpYW4iLCJkZWciLCJWZWN0b3IiLCJhcnIiLCJvYmoiLCJzY2FsYXIiLCJzdWJ0cmFjdCIsInZlY3RvciIsImludmVydFgiLCJpbnZlcnRZIiwiZGl2aWRlIiwibm9ybWFsaXplIiwiZmFjdG9yIiwiYWJzIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwicmFuZG9taXplWCIsInJhbmRvbWl6ZVkiLCJyb3VuZCIsInByZWNpc2lvbiIsInRvRml4ZWQiLCJhbW91bnQiLCJtaXhYIiwibWl4WSIsImNvcHlYIiwiY29weVkiLCJ2ZWMyIiwiZG90IiwiY29lZmYiLCJhdGFuMiIsImhvcml6b250YWxBbmdsZSIsInZlcnRpY2FsQW5nbGUiLCJob3Jpem9udGFsQW5nbGVEZWciLCJhbmdsZSIsIm54IiwiY29zIiwic2luIiwibnkiLCJyb3RhdGUiLCJyb3RhdGlvbiIsInJvdGF0ZVRvIiwicm90YXRlQnkiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcXJ0IiwiZGlzdGFuY2VTcSIsImRpcmVjdGlvbiIsImR4IiwiZHkiLCJsZW5ndGhTcSIsImEiLCJiIiwidiIsImNsb25lIiwicmV0IiwibXVsdGlwbHlTY2FsYXIiLCJjIiwiciIsImFjIiwiYmMiLCJ2ZWMxIiwidG8iLCJhZGQiLCJQb2ludCIsInJhZGl1cyIsImFscGhhIiwiYnV0dG9uTW9kZSIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwibHQiLCJyYiIsInBvc2l0aW9uIiwiZnJvbU9iamVjdCIsIlBhc3RlbENvbG9yIiwiaEJhc2UiLCJuZXdIIiwibmV3TCIsIkhTTHRvUkdCIiwiZyIsImhzbCIsInJnYiIsIlJHQnRvSGV4IiwiaGV4U2hhcCIsImgiLCJzIiwibCIsInJkIiwiaHVlVG9SR0IiLCJtIiwibyIsInEiLCJwIiwicHJlZml4IiwidG9TdHJpbmciLCJDb252ZXhIdWxsIiwic3RhY2siLCJzb3J0Iiwic29ydExvd2VyWVgiLCJiYXNlUG9pbnQiLCJyZWxhdGl2ZVBvc2l0aW9uIiwic29ydENjdyIsIm5leHQiLCJmaXJzdCIsInNlY29uZCIsInBvcCIsImlzQ2N3IiwiaW5kZXgiLCJwb2ludEEiLCJwb2ludEIiLCJwb2ludEMiLCJ0cmlhbmdsZUFyZWEiLCJkZWJ1Z0FycmF5IiwibG9nIiwiaTAiLCJ4MCIsImh1bGwiLCJpaCIsImllIiwiaiIsInN1YiIsImNyb3NzIiwibGVuZ3Roc3EiLCJuZXdQb2ludHMiLCJNb3VzZSIsInByZXZQb2ludCIsImN1cnJlbnRQb2ludCIsInByZXZUaW1lIiwiY3VycmVudFRpbWUiLCJkaWZmWCIsImRpZmZZIiwicGx1Z2lucyIsImludGVyYWN0aW9uIiwibW91c2UiLCJwb2ludGVyIiwidmFsdWUiLCJfcmVuZGVyZXIiLCJfbW91c2UiLCJERVNLVE9QX01PVVNFIiwiZ2xvYmFsIiwiY3VycmVudEN1cnNvclN0eWxlIiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQyxjQUFZO0FBQ1RBLFlBQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QixhQUFNQyxPQUFPLElBQUlDLElBQUosRUFBYjtBQUNILE1BRkQ7QUFHSCxFQUpBLEdBQUQ7O0FB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LE9BQWYsQ0FBdUJDLFdBQXZCLENBQW1DUSxrQkFBMUM7QUFDSDs7OzZCQW9Dd0I7QUFDckIsb0JBQU8sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVA7QUFDSDs7Ozs7O21CQXBHZ0JsQixLIiwiZmlsZSI6ImNvbnZleGh1bGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvTW91c2VcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiAgICB9XG59KCkpO1xuXG5sZXQgY2FudmFzLCByZW5kZXJlciwgc3RhZ2UsIHRlc3QsIGNvbnRhaW5lcjtcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHtcbiAgICAgICAgICAgIHZpZXc6IGNhbnZhcyxcbiAgICAgICAgICAgIGF1dG9SZXNpemU6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MzMzODNEXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1vdXNlLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgLy8g7JyE7LmY6rCAIOygleyImOqwgCDslYTri5Dqsr3smrAg7Z2Q66a/7ZWY6rKMIOuztOydtOuKlCDrrLjsoJzqsIAg7J6I7Ja0XG4gICAgICAgIC8vIOugjOuNlOufrOydmCDsnITsuZjrpbwg7KCV7IiY66GcIOyXsOyCsOuQoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cbiAgICAgICAgLy9yZW5kZXJlci5yb3VuZFBpeGVscyA9IHRydWU7XG5cbiAgICAgICAgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGVzdCA9IG5ldyBUZXN0KHJlbmRlcmVyKTtcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGVzdCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb29wKCk7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZVdpbmRvdygpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxvb3AgKG1zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1zKTtcbiAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG1zKSB7XG4gICAgICAgIHRlc3QudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzdGFnZSk7XG4gICAgfVxuXG4gICAgcmVzaXplV2luZG93KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDsupTrsoTsiqQg7IKs7J207KaI7JmAIOuUlOyKpO2UjOugiOydtCDsgqzsnbTspogg7ISk7KCVXG4gICAgICAgICAqIOugiO2LsOuCmCDqt7jrnpjtlL0g7KeA7JuQIOy9lOuTnFxuICAgICAgICAgKi9cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBJWEkgcmVuZGVyZXIg66as7IKs7J207KaIXG4gICAgICAgICAqIFBJWEkg7JeQ6rKMIHZpZXdwb3J0IOyCrOydtOymiCDrs4Dqsr0g7JWM66a8XG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIHRlc3QucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVVwIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVElMREU6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRPV05fQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VUF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkxFRlRfQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SSUdIVF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkJBQ0tfU1BBQ0U6XG4gICAgICAgICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvY29udmV4aHVsbC9pbmRleC5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vLi4vc3JjL2dlb20vUG9pbnQnO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYXN0ZWxDb2xvcic7XG5pbXBvcnQgQ29udmV4SHVsbCBmcm9tICcuLi8uLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsJztcblxuY29uc3QgSU5URVJWQUwgPSAzMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb252ZXhIdWxsKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUNvbnZleEh1bGwgPSB0aGlzLmRpc3BsYXlDb252ZXhIdWxsLmJpbmQodGhpcyk7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMuZGlzcGxheUNvbnZleEh1bGwsIElOVEVSVkFMKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Q29udmV4SHVsbCgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbnZleEh1bGwoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQocG9pbnQpO1xuICAgICAgICAgICAgICAgIHBvaW50LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgcG9pbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHBvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wb2ludHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUNvbnZleEh1bGwoKSB7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHRoaXMucG9pbnRzID0gdGhpcy5jcmVhdGVQb2ludHMoKTtcblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gQ29udmV4SHVsbC5nZW5lcmF0ZShwb2ludHMpO1xuXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleCwgMC41KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKGNvbnZleEh1bGxbMF0ueCwgY29udmV4SHVsbFswXS55KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMSwgbiA9IGNvbnZleEh1bGwubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oY29udmV4SHVsbFtpXS54LCBjb252ZXhIdWxsW2ldLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKGNvbnZleEh1bGxbMF0ueCwgY29udmV4SHVsbFswXS55KTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChncmFwaGljcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlUG9pbnRzKCkge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICAgICAgY29uc3QgcmFuZG9tID0gMTAgKyBNYXRoLnJhbmRvbSgpICogNTA7XG4gICAgICAgIGNvbnN0IHRsID0ge3g6IDEwMCwgeTogMTAwfTtcbiAgICAgICAgY29uc3QgYnIgPSB7eDogNTAwLCB5OiA1MDB9O1xuICAgICAgICBjb25zdCB2ZWMgPSBuZXcgVmVjdG9yKCk7XG5cbiAgICAgICAgZm9yIChsZXQgcG9pbnQsIGkgPSAwOyBpIDwgcmFuZG9tOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKTtcbiAgICAgICAgICAgIHZlYy5yYW5kb21pemUodGwsIGJyKTtcbiAgICAgICAgICAgIHBvaW50ID0gbmV3IFBvaW50KHZlYy54LCB2ZWMueSwgMywgY29sb3IuaGV4KTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQocG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7fVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9jb252ZXhodWxsL1Rlc3QuanMiLCJcblxuY29uc3QgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG4gICAgcmV0dXJuIHJhZCAqIGRlZ3JlZXM7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMycmFkaWFuIChkZWcpIHtcbiAgICByZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cblxuXG4vKipcbiAqIFZpY3Rvci5qc+ulvCBFUzbroZwg67OA7ZmY7ZWY7JesIOyCrOyaqe2VmOqzoCDsnojsirXri4jri6QuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF4a3VlbmcvdmljdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvclxue1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tQXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21BcnJheShhcnIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tT2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBWZWN0b3IoNDIsIDEzMzcpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6MTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMSwgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdWJ0cmFjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgIH1cblxuXG4gICAgZWRnZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGVkZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QoYSwgYik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAyMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWSgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSB4IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIHkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVZKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgYSBheGlzIHZhbHVlcyBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLyBiLngsIGEueSAvIGIueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFgoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WCgpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRZKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFkoKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydCgpXG4gICAge1xuICAgICAgICB0aGlzLmludmVydFgoKTtcbiAgICAgICAgdGhpcy5pbnZlcnRZKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG5lZ2F0ZSh2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCB2ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIHYueCA9IC12ZWMueDtcbiAgICAgICAgdi55ID0gLXZlYy55O1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG11bHRpcGx5U2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiBzY2FsYXIsIHZlY3Rvci55ICogc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGVTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAvIHNjYWxhciwgdmVjdG9yLnkgLyBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKDkwIOuPhCDtmozsoIQpXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gLXZlYy55O1xuICAgICAgICBjbG9uZS55ID0gdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICgtOTAg64+EIO2ajOyghClcbiAgICAgKi9cbiAgICByZXR1cm5QZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueSwgLXRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmV0dXJuUGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuyhOumvFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlKHZlYywgbGVuZ3RoKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgICAgIGlmIChsZW5ndGhTcSA+IGxlbmd0aCAqIGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0Lm11bHRpcGx5U2NhbGFyKGxlbmd0aCAvIE1hdGguc3FydChsZW5ndGhTcSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG5vcm1hbGl6ZSgpXG4gICAge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZpZGUobmV3IFZlY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbm9ybSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBhYnNvbHV0ZSB2ZWN0b3IgYXhpcyBpcyBncmVhdGVyIHRoYW4gYG1heGAsIG11bHRpcGxpZXMgdGhlIGF4aXMgYnkgYGZhY3RvcmBcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgYm90aCB4IGFuZCB5IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGltaXQobWF4LCBmYWN0b3IpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9taXplcyBib3RoIHZlY3RvciBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODBgKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSwgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB0aGlzLnggPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gICAgICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJpcGxlX3Byb2R1Y3QjVmVjdG9yX3RyaXBsZV9wcm9kdWN0XG4gICAgICog7IS46re466i87Yq47JeQ7IScIOybkOygkOycvOuhnCDtlqXtlZjripQg67Cp7Zal7J2EIOywvuydhCDrlYwg7IKs7JqpXG4gICAgICovXG4gICAgc3RhdGljIHRyaXBsZVByb2R1Y3QoYSwgYiwgYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGNvbnN0IGFjID0gYS54ICogYy54ICsgYS55ICogYy55ICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgICAgICwgYmMgPSBiLnggKiBjLnggKyBiLnkgKiBjLnk7ICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuXG4gICAgICAgIC8vIHBlcmZvcm0gYiAqIGEuZG90KGMpIC0gYSAqIGIuZG90KGMpXG4gICAgICAgIHIueCA9IGIueCAqIGFjIC0gYS54ICogYmM7XG4gICAgICAgIHIueSA9IGIueSAqIGFjIC0gYS55ICogYmM7XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBwcm9qZWN0T250byh2ZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgICAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICAgICAgdGhpcy55ID0gY29lZmYgKiB2ZWMyLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ISg7ZiVIOuztOqwhFxuICAgICAqIGh0dHA6Ly9kZXZlbG9wdWcuYmxvZ3Nwb3QuY29tLzIwMTQvMDkvdW5pdHktdmVjdG9yLWxlcnAuaHRtbFxuICAgICAqIEBwYXJhbSB2ZWMxXG4gICAgICogQHBhcmFtIHZlYzJcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyBsZXJwKHZlYzEsIHZlYzIsIHRvKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMxLCAxIC0gdG8pLCBWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMiwgdG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsl63siJhcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmNwKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxIC8gdmVjdG9yLngsIDEgLyB2ZWN0b3IueSk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgYW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICBhbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGVEZWcoKTtcbiAgICB9XG5cblxuICAgIGRpcmVjdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZShhbmdsZSlcbiAgICB7XG4gICAgICAgIHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcm90YXRlRGVnKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgYW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUbyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyb3RhdGlvbi10aGlzLmFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG9EZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnkocm90YXRpb24pXG4gICAge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnlEZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB2ZWMueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFkgYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSAtIHZlYy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VTcSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVNxKHZlYylcbiAgICB7XG4gICAgICAgIHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG4gICAgICAgICAgICBkeSA9IHRoaXMuZGlzdGFuY2VZKHZlYyk7XG5cbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGgoKTtcbiAgICAgKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLqOyInO2eiCDquLjsnbQg67mE6rWQ66W8IO2VmOugpOuptCBsZW5ndGgg66W8IOyCrOyaqe2VmOq4sCDrs7Tri6TripQgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOqyjCDruaDrpbTri6QuXG4gICAgICogbGVuZ3RoIOuKlCBNYXRoLnNxcnQgKOygnOqzseq3vCkg7LKY66as66W8IO2VmOq4sCDrlYzrrLjsl5Ag64uo7IicIOq4uOydtCDruYTqtZDsi5wgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg67mg66aF64uI64ukLlxuICAgICAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGhTcSgpO1xuICAgICAqICAgICAvLyA9PiAxMjUwMFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aFNxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbGVuZ3RoU3EodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgIH1cblxuXG4gICAgbWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjLnplcm8oKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNaZXJvKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdGhpcyB2ZWN0b3IgaXMgdGhlIHNhbWUgYXMgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRXF1YWxUbyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBVdGlsaXR5IE1ldGhvZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9BcnJheSgpO1xuICAgICAqICAgICAvLyA9PiBbMTAsIDIwXVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0FycmF5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gICAgICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvT2JqZWN0KClcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlY3Rvci5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCBleHRlbmRzIFBJWEkuR3JhcGhpY3NcbntcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDEwLCBjb2xvciA9IDB4ZmYzMzAwLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yZW5kZXIocmFkaXVzLCBjb2xvciwgYWxwaGEpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKHJhZGl1cyA9IDEwLCBjb2xvciA9IDB4ZmYzMzAwLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKDAsIDAsIHJhZGl1cywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgdGhpcy5lbmRGaWxsKCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemUobHQsIHJiKVxuICAgIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnZlY3Rvci5yYW5kb21pemUobHQsIHJiKTtcbiAgICAgICAgdGhpcy54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy55ID0gcG9zaXRpb24ueTtcbiAgICB9XG5cblxuICAgIGdldCB2ZWN0b3IoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5mcm9tT2JqZWN0KHRoaXMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tL1BvaW50LmpzIiwiLyoqXG4gKiBodHRwczovL2NvZGVwZW4uaW8vcGxpdS9wZW4vQkxFS3dBXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3RlbENvbG9yIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGUoKSB7XG4gICAgICAgIGNvbnN0IGhCYXNlID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgY29uc3QgbmV3SCA9IE1hdGguZmxvb3IoaEJhc2UgKiAzNjApO1xuICAgICAgICBjb25zdCBuZXdMID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpICsgNzU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gYGhzbCgke25ld0h9LCAxMDAlLCAke25ld0x9JSlgO1xuICAgICAgICBjb25zdCBbciwgZywgYl0gPSB0aGlzLkhTTHRvUkdCKGhCYXNlLCAxLCBuZXdMICogLjAxKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHNsOiBjb2xvciwgLy8gaHNsKDAsIDEwMCUsIDg1JSk7XG4gICAgICAgICAgICByZ2I6IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgLCAvLyByZ2IoMjU1LCAxMjgsIDEyOCk7XG4gICAgICAgICAgICBoZXg6IGAke3RoaXMuUkdCdG9IZXgociwgZywgYil9YCwgLy8gMHhmZjgwODBcbiAgICAgICAgICAgIGhleFNoYXA6YCR7dGhpcy5SR0J0b0hleChyLCBnLCBiLCAnIycpfWAsIC8vICNmZjgwODBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIU0wgdG8gUkdCIGZvcm11bGEgYWRhcHRlZCBmcm9tOlxuICAgICAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL21qYWNrc29uLzUzMTEyNTZcbiAgICAgKiAoc2tpcHBpbmcgdG8gZWxzZXt9IHNpbmNlIHMgd2lsbCBhbHdheXMgYmUgMTAwJSlcbiAgICAgKiBAcGFyYW0gaFxuICAgICAqIEBwYXJhbSBzXG4gICAgICogQHBhcmFtIGxcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBIU0x0b1JHQihoLCBzLCBsKSB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuXG4gICAgICAgIGNvbnN0IHJkID0gKGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubWF4KE1hdGgubWluKGEgKiAyNTYsIDI1NSksIDApKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBodWVUb1JHQiA9IChtLCBuLCBvKSA9PiB7XG4gICAgICAgICAgICBpZiAobyA8IDApIG8gKz0gMTtcbiAgICAgICAgICAgIGlmIChvID4gMSkgbyAtPSAxO1xuICAgICAgICAgICAgaWYgKG8gPCAxIC8gNikgcmV0dXJuIG0gKyAobiAtIG0pICogNiAqIG87XG4gICAgICAgICAgICBpZiAobyA8IDEgLyAyKSByZXR1cm4gbjtcbiAgICAgICAgICAgIGlmIChvIDwgMiAvIDMpIHJldHVybiBtICsgKG4gLSBtKSAqICgyIC8gMyAtIG8pICogNjtcbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuXG4gICAgICAgIHIgPSBodWVUb1JHQihwLCBxLCBoICsgMSAvIDMpO1xuICAgICAgICBnID0gaHVlVG9SR0IocCwgcSwgaCk7XG4gICAgICAgIGIgPSBodWVUb1JHQihwLCBxLCBoIC0gMSAvIDMpO1xuXG4gICAgICAgIHJldHVybiBbcmQociksIHJkKGcpLCByZChiKV1cbiAgICB9XG5cbiAgICBzdGF0aWMgUkdCdG9IZXgociwgZywgYiwgcHJlZml4ID0gJzB4Jykge1xuICAgICAgICByZXR1cm4gYCR7cHJlZml4fSR7ci50b1N0cmluZygxNil9JHtnLnRvU3RyaW5nKDE2KX0ke2IudG9TdHJpbmcoMTYpfWA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yLmpzIiwiLyoqXG4gKiBodHRwczovL3d3dy5jcm9jdXMuY28ua3IvMTI4OFxuICovXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi9WZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udmV4SHVsbCB7XG4gICAgc3RhdGljIGdlbmVyYXRlKHBvaW50cykge1xuXG4gICAgICAgIGNvbnN0IHN0YWNrID0gW10sXG4gICAgICAgICAgICBuID0gcG9pbnRzLmxlbmd0aDtcblxuICAgICAgICAvLyB57KKM7ZGcLCB47KKM7ZGcIOyekeydgCDsiJzsnLzroZwg7KCV66CsXG4gICAgICAgIHBvaW50cy5zb3J0KHRoaXMuc29ydExvd2VyWVgpO1xuXG4gICAgICAgIC8vIOq4sOykgOygkCDshKTsoJVcbiAgICAgICAgY29uc3QgYmFzZVBvaW50ID0gcG9pbnRzWzBdO1xuXG4gICAgICAgIC8vIOq4sOykgOygkCDquLDspIDsnLzroZwgdmVjdG9yIOulvCDsg53shLHtlZjqs6Ag7Jm47KCB7J2EIOq1rO2VtOyEnCDrsJgg7Iuc6rOEIOuwqe2WpeycvOuhnCAoY2N3KSDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcG9pbnRzW2ldLnJlbGF0aXZlUG9zaXRpb24gPSBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXS54IC0gYmFzZVBvaW50LngsXG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldLnkgLSBiYXNlUG9pbnQueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvaW50cy5zb3J0KHRoaXMuc29ydENjdyk7XG5cbiAgICAgICAgLy8g7Iqk7YOd7JeQIGZpcnN0LCBzZWNvbmQg66W8IOuEo+yKteuLiOuLpC5cbiAgICAgICAgc3RhY2sucHVzaCgwKTtcbiAgICAgICAgc3RhY2sucHVzaCgxKTtcblxuICAgICAgICBsZXQgbmV4dCA9IDI7XG5cbiAgICAgICAgd2hpbGUgKG5leHQgPCBuKSB7XG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3QsIHNlY29uZDtcbiAgICAgICAgICAgICAgICBzZWNvbmQgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgLy8gZmlyc3QsIHNlY29uZCwgbmV4dOqwgCDsooztmozsoIQgKCAwIOuztOuLpCDtgazrqbQgKeydtOudvOuptCBzZWNvbmQgcHVzaFxuICAgICAgICAgICAgICAgIC8vIOyasO2ajOyghCggMCDrs7Tri6Qg7J6R7Jy866m0ICkg7J20652866m0IOychOydmCB3aGlsZeusuCDqs4Tsho0g67CY67O1XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDY3cocG9pbnRzW2ZpcnN0XSwgcG9pbnRzW3NlY29uZF0sIHBvaW50c1tuZXh0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dCsrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZleEh1bGwgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSBzdGFjay5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhY2tbaV07XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpbmRleF07XG4gICAgICAgICAgICBjb252ZXhIdWxsLnB1c2goe3g6IHBvaW50LngsIHk6IHBvaW50Lnl9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb252ZXhIdWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHksIHgg6rCAIOyekeydgCDsiJzsnLzroZwg7KCV66CsXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydExvd2VyWVgocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgaWYgKHBvaW50QS55ICE9PSBwb2ludEIueSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvaW50QS55IC0gcG9pbnRCLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50QS54IC0gcG9pbnRCLng7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6riw7KSAIOyijO2RnCDquLDspIDsnLzroZwg7IOB64yAIOyijO2RnOulvCDqtaztlbTshJwg7Iuc6rOEIOuwmOuMgCDrsKntlqXsnLzroZwg7KCV66Cs7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBwb2ludEFcbiAgICAgKiBAcGFyYW0gcG9pbnRCXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIHNvcnRDY3cocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgLy8g7KSR7IusIOyijO2RnOyduCDqsr3smrAgcmVsYXRpdmVQb3NpdGlvbiDsnbQg7JeG7Iq164uI64ukLiDspJHsi6wg7KKM7ZGc66W8IDDrsojsnLzroZwg7KCV66CsIO2VqeuLiOuLpC5cbiAgICAgICAgaWYgKCFwb2ludEEucmVsYXRpdmVQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb2ludEIucmVsYXRpdmVQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhID0gcG9pbnRBLnJlbGF0aXZlUG9zaXRpb24ueSAqIHBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uLng7XG4gICAgICAgIGNvbnN0IGIgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi54ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueTtcblxuICAgICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENvbnZleEh1bGwuc29ydExvd2VyWVgocG9pbnRBLCBwb2ludEIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuwmCDsi5zqs4Qg67Cp7Zal7J247KeAIOyXrOu2gFxuICAgICAqIEBwYXJhbSBwb2ludEFcbiAgICAgKiBAcGFyYW0gcG9pbnRCXG4gICAgICogQHBhcmFtIHBvaW50Q1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Njdyhwb2ludEEsIHBvaW50QiwgcG9pbnRDKSB7XG4gICAgICAgIC8vIGNvbnN0IHRyaWFuZ2xlQXJlYSA9IChwb2ludEIueCAtIHBvaW50QS54KSAqIChwb2ludEMueSAtIHBvaW50QS55KSAtIChwb2ludEMueCAtIHBvaW50QS54KSAqIChwb2ludEIueSAtIHBvaW50QS55KTtcbiAgICAgICAgY29uc3QgdHJpYW5nbGVBcmVhID0gIChwb2ludEMueCAtIHBvaW50QS54KSAqIChwb2ludEIueSAtIHBvaW50QS55KSAtIChwb2ludEIueCAtIHBvaW50QS54KSAqIChwb2ludEMueSAtIHBvaW50QS55KTtcbiAgICAgICAgaWYgKHRyaWFuZ2xlQXJlYSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGVidWdBcnJheShhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGFyci5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJyW2ldLngsIGFycltpXS55KTtcbiAgICB9XG59XG5cblxuLypcbiogQ29weXJpZ2h0IChjKSAyMDEyIEp1IEh5dW5nIExlZVxuKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmVcbiogYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4qIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yXG4qIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbipcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkdcbiogQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4qIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4qIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBDcmVhdGUgdGhlIGNvbnZleCBodWxsIHVzaW5nIHRoZSBHaWZ0IHdyYXBwaW5nIGFsZ29yaXRobVxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HaWZ0X3dyYXBwaW5nX2FsZ29yaXRobVxuZnVuY3Rpb24gY3JlYXRlQ29udmV4SHVsbChwb2ludHMpIHtcbiAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgdmFyIGkwID0gMDtcbiAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgeCA9IHBvaW50c1tpXS54O1xuICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG4gPSBwb2ludHMubGVuZ3RoO1xuICAgIHZhciBodWxsID0gW107XG4gICAgdmFyIG0gPSAwO1xuICAgIHZhciBpaCA9IGkwO1xuXG4gICAgd2hpbGUgKDEpIHtcbiAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgIHZhciBpZSA9IDA7XG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByID0gdmVjMi5zdWIocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgIHZhciB2ID0gdmVjMi5zdWIocG9pbnRzW2pdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIGMgPSB2ZWMyLmNyb3NzKHIsIHYpO1xuICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhzcSgpID4gci5sZW5ndGhzcSgpKSB7XG4gICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbSsrO1xuICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb3B5IHZlcnRpY2VzXG4gICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgIG5ld1BvaW50cy5wdXNoKHBvaW50c1todWxsW2ldXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1BvaW50cztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZVxue1xuICAgIHN0YXRpYyBnZXQgREVTS1RPUF9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTU9CSUxFX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQSVhJLkFwcGxpY2F0aW9uLnJlbmRlcmVyXG4gICAgICog656c642U65+s7JeQ7IScIGludGVyYWN0aW8g6rCd7LK066W8IOywuOyhsO2VoCDsiJgg7J6I7Ja07IScIOyCrOyaqe2VmOugpOuptCDroIzrjZTrn6zrpbwg7IWL7YyF7ZW07JW8IO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmFsdWUge1BJWEkuV2ViR0xSZW5kZXJyZXJ8UElYSS5DYW52YXNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IHJlbmRlcmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrqqjrsJTsnbwg64yA7J2R7J2EIOychO2VtOyEnFxuICAgICAqIFBDIOuyhOyghOyXkOyEnOuKlCBtb3VzZSDqsJ3ssrTrpbwsIOuqqOuwlOydvCDrsoTsoITsl5DshJzripQgcG9pbnRlciDqsJ3ssrTrpbwg7IWL7YyF7ZWY66m0XG4gICAgICogZ2xvYmFsIOqwneyytOyXkOyEnCDssLjsobDtlbTshJwg7KKM7ZGc6rCS7J2EIOyghOuLrO2VmOuPhOuhnSDtlanri4jri6QuXG4gICAgICpcbiAgICAgKiDrp4zslb0g7ISk7KCV7ZWY7KeAIOyViuycvOuptCDquLDrs7ggUEPrp4wg64yA7J2R7ZWY64+E66GdIG1vdXNlIOqwneyytOulvCDshKTsoJXtlanri4jri6QuXG4gICAgICpcbiAgICAgKiBEZXNrdG9wIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZVxuICAgICAqIE1vYmlsZSA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlclxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgbW91c2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbW91c2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBtb3VzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3VzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2UgPSB0aGlzLkRFU0tUT1BfTU9VU0U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdXNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBnbG9iYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzZXQgY3VycmVudEN1cnNvclN0eWxlKHZhbHVlKSB7XG4gICAgICAgIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgY3VycmVudEN1cnNvclN0eWxlKCkge1xuICAgICAgICByZXR1cm4gTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsnbTrj5kg6rGw66as6rCAIDVweCDsnbTtlZjsnbTqs6AgNTAwbXMg7JWI7JeQIOuRkOuyiCDtgbTrpq3tlZjrqbQg642U67iUIO2BtOumreycvOuhnCDsnbjsoJVcbiAgICAgKiBAcGFyYW0gcHJldlBvaW50IOydtOyghOyijO2RnFxuICAgICAqIEBwYXJhbSBjdXJyZW50UG9pbnQg7ZiE7J6s7KKM7ZGcXG4gICAgICogQHBhcmFtIHByZXZUaW1lIOydtOyghCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHBhcmFtIGN1cnJlbnRUaW1lIO2YhOyerCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOuNlOu4lCDtgbTrpq0g7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGlzRG91YmxlQ2xpY2socHJldlBvaW50LCBjdXJyZW50UG9pbnQsIHByZXZUaW1lLCBjdXJyZW50VGltZSkge1xuICAgICAgICB2YXIgZGlmZlggPSBjdXJyZW50UG9pbnQueCAtIHByZXZQb2ludC54O1xuXG4gICAgICAgIGlmIChkaWZmWCA8IDApIHtcbiAgICAgICAgICAgIGRpZmZYID0gZGlmZlggKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaWZmWSA9IGN1cnJlbnRQb2ludC55IC0gcHJldlBvaW50Lnk7XG5cbiAgICAgICAgaWYgKGRpZmZZIDwgMCkge1xuICAgICAgICAgICAgZGlmZlkgPSBkaWZmWSAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZmZYID4gNSB8fCBkaWZmWSA+IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIHByZXZUaW1lID4gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvTW91c2UuanMiXSwic291cmNlUm9vdCI6IiJ9
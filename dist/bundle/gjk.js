webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(356);
	
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
	    }]);

	    return Main;
	}();

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
	         * Sets this vector to the left-handed normal of this vector.
	         * @return {Vector} this vector
	         * @see #getLeftHandOrthogonalVector()
	         */
	
	    }, {
	        key: 'left',
	        value: function left() {
	            var temp = this.x;
	            this.x = this.y;
	            this.y = -temp;
	            return this;
	        }
	
	        /**
	         * Sets this vector to the right-handed normal of this vector.
	         * @return {@link Vector2} this vector
	         * @see #getRightHandOrthogonalVector()
	         */
	
	    }, {
	        key: 'right',
	        value: function right() {
	            var temp = this.x;
	            this.x = -this.y;
	            this.y = temp;
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
	    }, {
	        key: 'getMagnitudeSquared',
	        value: function getMagnitudeSquared() {
	            return this.x * this.x + this.y * this.y;
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
	    }, {
	        key: 'to',
	        value: function to(vec) {
	            return new Vector(vec.x - this.x, vec.y - this.y);
	        }
	    }, {
	        key: 'set',
	        value: function set(vec) {
	            this.x = vec.x;
	            this.y = vec.y;
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
	
	var _PastelColor = __webpack_require__(329);
	
	var _PastelColor2 = _interopRequireDefault(_PastelColor);
	
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
	        var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _PastelColor2.default.generate().hex;
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
	                convexHull.push(new _Vector2.default(point.x, point.y));
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

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var History = function () {
	
	    /**
	     * @param simplex {Vector[]}
	     * @param directions {Vector[]}
	     */
	    function History() {
	        var simplex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Array(3);
	        var directions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Array(3);
	
	        _classCallCheck(this, History);
	
	        this.simplex = simplex;
	        this.directions = directions;
	    }
	
	    _createClass(History, [{
	        key: "setHistory",
	        value: function setHistory(simplex, directions) {
	            this.simplex = simplex;
	            this.directions = directions;
	        }
	    }]);
	
	    return History;
	}();
	
	exports.default = History;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Consts = __webpack_require__(339);
	
	var _Consts2 = _interopRequireDefault(_Consts);
	
	var _PastelColor = __webpack_require__(329);
	
	var _PastelColor2 = _interopRequireDefault(_PastelColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FONT_SIZE = '9px',
	    SCALE = _Consts2.default.SCALE;
	
	var Shape = function (_PIXI$Container) {
	    _inherits(Shape, _PIXI$Container);
	
	    function Shape() {
	        var vertices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	        var lineColor = arguments[1];
	        var lineAlpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
	
	        _classCallCheck(this, Shape);
	
	        var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this));
	
	        lineColor = lineColor ? lineColor : _PastelColor2.default.generate().hex;
	        lineColor = typeof lineColor === 'number' ? '0x' + lineColor.toString(16) : lineColor;
	        var textColor = lineColor.replace('0x', '#');
	        _this.vertices = vertices;
	        _this.lineColor = lineColor;
	        _this.lineAlpha = lineAlpha;
	        _this.textColor = textColor;
	        _this.graphics = new PIXI.Graphics();
	        _this.addChild(_this.graphics);
	        _this.labels = _this.createLabel();
	        _this.draw();
	        return _this;
	    }
	
	    _createClass(Shape, [{
	        key: 'createLabel',
	        value: function createLabel() {
	            var n = this.vertices.length;
	            var labels = [];
	            for (var i = 0; i < n; i++) {
	                var text = new PIXI.Text(i, {
	                    align: 'center',
	                    font: FONT_SIZE,
	                    fill: this.textColor
	                });
	                text.visible = false;
	                labels.push(text);
	                this.addChild(text);
	            }
	            return labels;
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var _this2 = this;
	
	            var g = this.graphics,
	                vertices = this.vertices,
	                origin = vertices[0];
	
	            g.clear();
	            g.lineStyle(1, this.lineColor, this.lineAlpha);
	            g.moveTo(origin.x, origin.y);
	            vertices.forEach(function (vertex, index) {
	                g.lineTo(vertex.x, vertex.y);
	                var label = _this2.labels[index],
	                    vec = _Vector2.default.divideScalar(vertex, SCALE);
	
	                label.x = vertex.x;
	                label.y = vertex.y;
	
	                label.text = '(' + vec.x + ',' + vec.y + ')';
	                label.visible = true;
	            });
	            g.lineTo(origin.x, origin.y);
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this3 = this;
	
	            this.graphics.clear();
	            this.removeChild(this.graphics);
	            this.graphics = null;
	
	            this.labels.forEach(function (label) {
	                _this3.removeChild(label);
	            });
	
	            this.labels.length = 0;
	            this.labels = null;
	            _get(Shape.prototype.__proto__ || Object.getPrototypeOf(Shape.prototype), 'destroy', this).call(this);
	        }
	    }]);
	
	    return Shape;
	}(PIXI.Container);
	
	exports.default = Shape;

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Consts = function () {
	    function Consts() {
	        _classCallCheck(this, Consts);
	    }
	
	    _createClass(Consts, null, [{
	        key: "SCALE",
	        get: function get() {
	            return 14;
	        }
	    }, {
	        key: "STAGE",
	        get: function get() {
	            if (!this.stage) {
	                this.stage = { x: 0, y: 0, width: 600, height: 600 };
	            }
	            return this.stage;
	        }
	    }]);
	
	    return Consts;
	}();
	
	exports.default = Consts;

/***/ }),

/***/ 340:
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
	
	var Vertices = function () {
	    function Vertices() {
	        var vertices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	        _classCallCheck(this, Vertices);
	
	        this.vertices = vertices;
	    }
	
	    _createClass(Vertices, [{
	        key: 'multiply',
	        value: function multiply(scalar) {
	            this.vertices.forEach(function (vertex) {
	                vertex.x *= scalar;
	                vertex.y *= scalar;
	            });
	        }
	    }, {
	        key: 'divide',
	        value: function divide(scalar) {
	            this.vertices.forEach(function (vertex) {
	                vertex.x /= scalar;
	                vertex.y /= scalar;
	            });
	        }
	    }, {
	        key: 'clone',
	        value: function clone() {
	            var vertices = [];
	            this.vertices.forEach(function (vertex, index) {
	                vertices[index] = vertex.clone();
	            });
	            return vertices;
	        }
	    }]);
	
	    return Vertices;
	}();
	
	exports.default = Vertices;

/***/ }),

/***/ 341:
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
	
	var _ConvexHull = __webpack_require__(330);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _PastelColor = __webpack_require__(329);
	
	var _PastelColor2 = _interopRequireDefault(_PastelColor);
	
	var _Consts = __webpack_require__(339);
	
	var _Consts2 = _interopRequireDefault(_Consts);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SCALE = _Consts2.default.SCALE,
	    STAGE = _Consts2.default.STAGE,
	    FONT_COLOR = '#FFFFFF',
	    AXES_LINE_COLOR = '0xFFFFFF',
	    CONVEX_HULL_LINE_COLOR = _PastelColor2.default.generate().hex;
	
	var MinkowskiDifference = function (_PIXI$Container) {
	    _inherits(MinkowskiDifference, _PIXI$Container);
	
	    function MinkowskiDifference(vertices1, vertices2) {
	        _classCallCheck(this, MinkowskiDifference);
	
	        var _this = _possibleConstructorReturn(this, (MinkowskiDifference.__proto__ || Object.getPrototypeOf(MinkowskiDifference)).call(this));
	
	        _this.graphics = new PIXI.Graphics();
	        _this.addChild(_this.graphics);
	
	        var vertices = _this.getVertices(vertices1, vertices2),
	            convexHull = _this.convexHull = _ConvexHull2.default.generate(vertices);
	
	        _this.texts = [];
	        _this.drawAxes();
	        _this.drawVetices(vertices);
	        _this.drawPolygon(convexHull);
	        return _this;
	    }
	
	    _createClass(MinkowskiDifference, [{
	        key: 'drawVetices',
	        value: function drawVetices(vertices) {
	            var _this2 = this;
	
	            this.points = [];
	            vertices.forEach(function (vertex) {
	                var point = new _Point2.default(vertex.x, vertex.y, 3, _PastelColor2.default.generate().hex);
	                _this2.points.push(point);
	                _this2.addChild(point);
	
	                var vec = _Vector2.default.divideScalar(vertex, SCALE);
	                _this2.drawText('(' + vec.x + ', ' + vec.y + ')', point.vector);
	            });
	        }
	    }, {
	        key: 'drawPolygon',
	        value: function drawPolygon(vertices) {
	            var g = this.graphics;
	
	            g.lineStyle(1, CONVEX_HULL_LINE_COLOR, 0.5);
	            g.moveTo(vertices[0].x, vertices[0].y);
	            vertices.forEach(function (vertex) {
	                g.lineTo(vertex.x, vertex.y);
	            });
	            g.lineTo(vertices[0].x, vertices[0].y);
	        }
	    }, {
	        key: 'drawAxes',
	        value: function drawAxes() {
	            var g = this.graphics,
	                hw = STAGE.width / 2,
	                hh = STAGE.height / 2;
	
	            g.lineStyle(1, AXES_LINE_COLOR, 0.5);
	            g.moveTo(-hw, 0);
	            g.lineTo(hw, 0);
	            g.moveTo(0, -hh);
	            g.lineTo(0, hh);
	        }
	    }, {
	        key: 'drawText',
	        value: function drawText(text) {
	            var vertex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: 0, y: 0 };
	
	            var label = new PIXI.Text(text, {
	                font: '20px',
	                align: 'center',
	                fill: FONT_COLOR
	            });
	
	            label.x = vertex.x;
	            label.y = vertex.y;
	            this.texts.push(label);
	            this.addChild(label);
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.graphics.clear();
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this3 = this;
	
	            this.texts.forEach(function (text) {
	                _this3.removeChild(text);
	            });
	
	            this.points.forEach(function (point) {
	                _this3.removeChild(point);
	            });
	
	            this.removeChild(this.graphics);
	        }
	    }, {
	        key: 'getVertices',
	        value: function getVertices(vertices1, vertices2) {
	            var vertices = [];
	            vertices1.forEach(function (a) {
	                vertices2.forEach(function (b) {
	                    vertices.push(_Vector2.default.subtract(a, b));
	                });
	            });
	            return vertices;
	        }
	    }]);
	
	    return MinkowskiDifference;
	}(PIXI.Container);
	
	exports.default = MinkowskiDifference;

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _GJK = __webpack_require__(355);
	
	var _GJK2 = _interopRequireDefault(_GJK);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Painter = function () {
	    function Painter() {
	        _classCallCheck(this, Painter);
	    }
	
	    _createClass(Painter, null, [{
	        key: 'drawMinkowskiSum',
	        value: function drawMinkowskiSum(vertices1, vertices2) {
	            console.log('-------------------------------------------------');
	            console.log('drawMinkowskiSum(', vertices1.length * vertices2.length, ')');
	            console.log('-------------------------------------------------');
	
	            var path = [];
	            for (var i = 0; i < vertices1.length; i++) {
	                for (var j = 0; j < vertices2.length; j++) {
	
	                    var v1 = vertices1[i].clone();
	                    var v2 = vertices2[j].clone();
	                    var diff = _Vector2.default.subtract(v1, v2);
	                    path.push(diff);
	                    console.log(i, j, 'vec[' + diff.x + ', ' + diff.y + ']');
	                }
	            }
	
	            var convexHullPath = _GJK2.default.createConvexHull(path);
	            Painter.drawPolygon(convexHullPath, 1, 0xDDDDDD, 1);
	        }
	    }, {
	        key: 'drawPolygon',
	        value: function drawPolygon(vertices) {
	            var lineWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x607D8B;
	            var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
	
	            var graphics = window.g;
	            graphics.lineStyle(lineWidth, color, alpha);
	
	            var vec0 = vertices[0].clone();
	            vec0.multiplyScalar(window.magnification);
	
	            graphics.moveTo(vec0.x, vec0.y);
	
	            // this.drawText(window.stage, '(' + vec0.x.toFixed(0) + ',' + vec0.y.toFixed(0) + ')', vec0);
	
	            for (var i = 1; i < vertices.length; i++) {
	                var vec = vertices[i].clone();
	                vec.multiplyScalar(window.magnification);
	                graphics.lineTo(vec.x, vec.y);
	            }
	
	            graphics.lineTo(vec0.x, vec0.y);
	        }
	    }, {
	        key: 'drawText',
	        value: function drawText(stage, string, point) {
	            var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#ff3300';
	
	            var text = new PIXI.Text(string, {
	                // fontFamily: 'Arial',
	                // fontSize: 4,
	                // fontWeight: 'bold',
	                fill: color
	                // stroke: '#4a1850',
	            });
	
	            text.x = point.x;
	            text.y = point.y;
	
	            stage.addChild(text);
	        }
	    }, {
	        key: 'drawPoint',
	        value: function drawPoint(graphics, point) {
	            var isClear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	            var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xFF3300;
	            var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.7;
	
	            if (isClear === true) {
	                graphics.clear();
	            }
	
	            graphics.lineStyle(1, color);
	            graphics.beginFill(color, alpha);
	            graphics.drawCircle(point.x, point.y, radius);
	            graphics.endFill();
	        }
	    }, {
	        key: 'drawRectByBounds',
	        value: function drawRectByBounds(graphics, bounds) {
	            var isClear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var thickness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	            var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xFF3300;
	            var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.7;
	
	            if (isClear === true) {
	                graphics.clear();
	            }
	
	            graphics.lineStyle(thickness, color, alpha);
	            graphics.drawRect(bounds.x, bounds.y, bounds.width, bounds.height);
	            graphics.endFill();
	        }
	    }, {
	        key: 'drawRectByPoints',
	        value: function drawRectByPoints(graphics, rect) {
	            var isClear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var thickness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	            var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xFF3300;
	            var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.7;
	
	            if (isClear === true) {
	                graphics.clear();
	            }
	
	            graphics.lineStyle(thickness, color, alpha);
	            graphics.moveTo(rect.lt.x, rect.lt.y);
	            graphics.lineTo(rect.rt.x, rect.rt.y);
	            graphics.lineTo(rect.rb.x, rect.rb.y);
	            graphics.lineTo(rect.lb.x, rect.lb.y);
	            graphics.lineTo(rect.lt.x, rect.lt.y);
	        }
	    }, {
	        key: 'drawPointsByPoints',
	        value: function drawPointsByPoints(graphics, rect) {
	            var isClear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	            var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xFF3300;
	            var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.7;
	
	            if (isClear === true) {
	                graphics.clear();
	            }
	
	            graphics.beginFill(color, alpha);
	            graphics.drawCircle(rect.lt.x, rect.lt.y, radius);
	            graphics.drawCircle(rect.rt.x, rect.rt.y, radius);
	            graphics.drawCircle(rect.rb.x, rect.rb.y, radius);
	            graphics.drawCircle(rect.lb.x, rect.lb.y, radius);
	            graphics.endFill();
	        }
	    }, {
	        key: 'drawPoints',
	        value: function drawPoints(graphics, points) {
	            var isClear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var thickness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	            var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xFF3300;
	            var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.7;
	
	            if (isClear === true) {
	                graphics.clear();
	            }
	
	            graphics.lineStyle(thickness, color, alpha);
	
	            for (var i = 0; i < points.length; i++) {
	                var p1 = points[i];
	                var p2 = points[i + 1 < points.length ? i + 1 : 0];
	
	                graphics.moveTo(p1.x, p1.y);
	                graphics.lineTo(p2.x, p2.y);
	            }
	        }
	    }, {
	        key: 'drawLine',
	        value: function drawLine(graphics, p0, p1) {
	            var isClear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	            var thickness = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
	            var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0xFF3300;
	            var alpha = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.7;
	
	            if (isClear === true) {
	                graphics.clear();
	            }
	
	            graphics.lineStyle(thickness, color, alpha);
	            graphics.moveTo(p0.x, p0.y);
	            graphics.lineTo(p1.x, p1.y);
	        }
	    }, {
	        key: 'drawArrow',
	        value: function drawArrow(graphics, movePoint, toPoint) {
	            var isClear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	            var thickness = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
	            var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0xFF3300;
	            var alpha = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.7;
	            var scale = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 5;
	
	            if (isClear === true) {
	                graphics.clear();
	            }
	
	            /*graphics.lineStyle(thickness, color, alpha);
	            graphics.moveTo(movePoint.x, movePoint.y);
	             var vector = new Vector(toPoint.x - movePoint.x, toPoint.y - movePoint.y);
	            var left = vector.clone().rotate(45).invert();
	            var right = vector.clone().rotate(-45).invert();
	            left.multiplyScalar(5);
	            right.multiplyScalar(5);
	            vector.invert().multiplyScalar(15);
	             graphics.lineTo(movePoint.x + vector.x, movePoint.y + vector.y);
	            graphics.moveTo(movePoint.x, movePoint.y);
	            graphics.lineTo(movePoint.x + left.x, movePoint.y + left.y);
	            graphics.moveTo(movePoint.x, movePoint.y);
	            graphics.lineTo(movePoint.x + right.x, movePoint.y + right.y);*/
	
	            graphics.lineStyle(thickness, color, alpha);
	            graphics.moveTo(movePoint.x, movePoint.y);
	
	            var vector = new _Vector2.default(movePoint.x - toPoint.x, movePoint.y - toPoint.y);
	            var left = vector.clone().rotate(45).invert();
	            var right = vector.clone().rotate(-45).invert();
	            left.multiplyScalar(scale);
	            right.multiplyScalar(scale);
	            vector.invert().multiplyScalar(scale * 3);
	
	            graphics.lineTo(movePoint.x + vector.x, movePoint.y + vector.y);
	            graphics.moveTo(movePoint.x, movePoint.y);
	            graphics.lineTo(movePoint.x + left.x, movePoint.y + left.y);
	            graphics.moveTo(movePoint.x, movePoint.y);
	            graphics.lineTo(movePoint.x + right.x, movePoint.y + right.y);
	        }
	    }, {
	        key: 'drawDirection',
	        value: function drawDirection(graphics, me, target) {
	            var isClear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	            var thickness = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
	            var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0xFF3300;
	            var alpha = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.7;
	            var scale = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 5;
	
	            if (isClear === true) {
	                graphics.clear();
	            }
	
	            graphics.lineStyle(thickness, color, alpha);
	            graphics.moveTo(me.x, me.y);
	
	            var to = me.to(target);
	            var left = to.clone().rotate(45).invert();
	            var right = to.clone().rotate(-45).invert();
	            left.multiplyScalar(scale);
	            right.multiplyScalar(scale);
	            to.invert().multiplyScalar(scale * 3);
	
	            graphics.lineTo(me.x + to.x, me.y + to.y);
	            graphics.moveTo(me.x, me.y);
	            graphics.lineTo(me.x + left.x, me.y + left.y);
	            graphics.moveTo(me.x, me.y);
	            graphics.lineTo(me.x + right.x, me.y + right.y);
	        }
	    }]);
	
	    return Painter;
	}();
	
	exports.default = Painter;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(354);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * GJK Algorithm (Gilbert-Johnson-Keerthi)
	 * https://github.com/kroitor/gjk.c
	 * http://www.dyn4j.org/2010/04/gjk-gilbert-johnson-keerthi/#gjk-top
	 * https://www.haroldserrano.com/blog/visualizing-the-gjk-collision-algorithm
	 * https://github.com/juhl/collision-detection-2d
	 */
	var GJK = function () {
	    function GJK() {
	        _classCallCheck(this, GJK);
	    }
	
	    _createClass(GJK, null, [{
	        key: 'averagePoint',
	
	        /**
	         * This is to compute average center (roughly). It might be different from
	         * Center of Gravity, especially for bodies with nonuniform density,
	         * but this is ok as initial direction of simplex search in GJK
	         * @param vertices {Vector[]} 폴리곤 vertices
	         * @param direction {Vector} 방향 vector
	         */
	        value: function averagePoint(vertices) {
	            var avg = new _Vector2.default(),
	                count = vertices.length;
	
	            for (var i = 0; i < count; i++) {
	                avg.x += vertices[i].x;
	                avg.y += vertices[i].y;
	            }
	
	            avg.x /= count;
	            avg.y /= count;
	
	            return avg;
	        }
	
	        /**
	         * Get furthest vertex along a certain direction
	         * 꼭지점과 방향을 전달하면 내적 (투영)을 통해 최대로 먼 좌표의 인덱스를 반환합니다.
	         * @param vertices {Vector[]} 폴리곤 vertices
	         * @param direction {Vector} 방향 vector
	         */
	
	    }, {
	        key: 'indexOfFurthestPoint',
	        value: function indexOfFurthestPoint(vertices, direction) {
	            var index = 0;
	            var maxProduct = _Vector2.default.dotProduct(direction, vertices[0]);
	
	            for (var i = 0, count = vertices.length; i < count; i++) {
	                var product = _Vector2.default.dotProduct(direction, vertices[i]);
	
	                if (product > maxProduct) {
	                    maxProduct = product;
	                    index = i;
	                }
	            }
	
	            return index;
	        }
	
	        /**
	         * Minkowski sum support function for GJK
	         * 지원 함수에서 폴리곤의 포인트와 방향으로 서로 다른 방향의 점을 구하고 Minkowski Difference 를 반환합니다.
	         * @param vertices1 {Vector[]} 폴리곤 vertices
	         * @param vertices2 {Vector[]} 폴리곤 vertices
	         * @param direction {Vector} 방향 벡터
	         */
	
	    }, {
	        key: 'support',
	        value: function support(vertices1, vertices2, direction) {
	            // get furthest point of first body along an arbitrary direction
	            var i = this.indexOfFurthestPoint(vertices1, direction);
	
	            // get furthest point of second body along the opposite direction
	            var j = this.indexOfFurthestPoint(vertices2, _Vector2.default.negate(direction));
	
	            console.log('d:' + str(direction, true), 'i:' + str(vertices1[i]));
	            console.log('d:' + str(_Vector2.default.negate(direction), true), 'j:' + str(vertices2[j]));
	            console.log('support(' + str(_Vector2.default.subtract(vertices1[i], vertices2[j])) + ')');
	            // subtract (Minkowski sum) the two points to see if bodies 'overlap'
	            return _Vector2.default.subtract(vertices1[i], vertices2[j]);
	        }
	
	        /**
	         * 충돌 검사
	         * @param vertices1 {Vector[]}
	         * @param vertices2 {Vector[]}
	         * @paran history {History} simplex 와 direction 히스토리
	         * @returns {boolean} 충돌 여부
	         */
	
	    }, {
	        key: 'checkCollision',
	        value: function checkCollision(vertices1, vertices2) {
	            var history = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	            // consoleVertices(vertices1, vertices2);
	
	            var iterCount = 0,
	                index = 0; // index of current vertex of simplex
	            var a = void 0,
	                b = void 0,
	                c = void 0,
	                d = void 0,
	                ao = void 0,
	                ab = void 0,
	                ac = void 0,
	                abperp = void 0,
	                acperp = void 0,
	                simplex = new Array(3),
	                directions = new Array(3);
	
	            // 두 폴리곤 중심 좌표를 통해서 방향을 구합니다.
	            var position1 = this.averagePoint(vertices1); // not a CoG but
	            var position2 = this.averagePoint(vertices2); // it's ok for GJK )
	
	            // initial direction from the center of 1st body to the center of 2nd body
	            // 방향 vector
	            d = _Vector2.default.subtract(position1, position2);
	
	            // if initial direction is zero – set it to any arbitrary axis (we choose X)
	            if (d.x == 0 && d.y == 0) {
	                d.x = 1.0;
	            }
	
	            // set the first support as initial point of the new simplex
	            a = simplex[0] = this.support(vertices1, vertices2, d);
	            directions[0] = d;
	            console.log(str(a), str(d, true), _Vector2.default.dotProduct(a, d).toFixed(2));
	
	            // support 점과 방향이 같은 방향이 아닐 경우
	            if (a.dot(d) <= 0) {
	                // 마지막에 추가 된 점이 d의 방향으로 원점을 지나치지 않은 경우
	                // 그 다음 Minkowski 합은 원점을 포함 할 수 없습니다.
	                // 추가 된 마지막 점은 Minkowski Difference의 가장자리에 있습니다.
	                console.log('       CASE1[', 'NO', ']');
	
	                if (history) {
	                    history.setHistory(simplex, directions);
	                }
	
	                return false; // no collision
	            }
	
	            d = _Vector2.default.negate(a); // The next search direction is always towards the origin, so the next search direction is negate(a)
	
	            while (true) {
	                iterCount++;
	
	                console.log('');
	                console.log(iterCount);
	
	                a = simplex[++index] = this.support(vertices1, vertices2, d);
	                directions[index] = d;
	
	                if (_Vector2.default.dotProduct(a, d) <= 0) {
	                    console.log(str(a), str(d, true), _Vector2.default.dotProduct(a, d).toFixed(2));
	                    console.log('       CASE2[', 'NO', ']');
	
	                    if (history) {
	                        history.setHistory(simplex, directions);
	                    }
	
	                    return false; // no collision
	                }
	
	                // a가 원점으로 향하는 벡터는 -a 를 하면 됩니다.
	                ao = _Vector2.default.negate(a); // from point A to Origin is just negative A
	
	                // simplex has 2 points (a line segment, not a triangle yet)
	                if (index < 2) {
	
	                    b = simplex[0];
	                    ab = _Vector2.default.subtract(b, a); // from point A to B
	                    d = _Vector2.default.tripleProduct(ab, ao, ab); // normal to AB towards Origin
	
	                    if (_Vector2.default.lengthSq(d) === 0) {
	                        d = _Vector2.default.perpendicular(ab);
	                    }
	                    continue; // skip to next iteration
	                }
	
	                b = simplex[1];
	                c = simplex[0];
	                ab = _Vector2.default.subtract(b, a); // from point A to B
	                ac = _Vector2.default.subtract(c, a); // from point A to C
	
	                //ac와 수직
	                acperp = _Vector2.default.tripleProduct(ab, ac, ac);
	
	                console.log('a', a, 'b', b, 'c', c);
	                console.log('ao', ao, 'ab', ab, 'ac', ac);
	                console.log('acperp', acperp, acperp.clone().norm());
	                console.log('dotProduct(acperp, ao)', _Vector2.default.dotProduct(acperp, ao));
	
	                // ac 수직 선분이 a가 원점을 향하는 방향 반대편에 있고
	                // 즉, ac 수직 선분 안쪽에 원점이 있으면
	                if (_Vector2.default.dotProduct(acperp, ao) >= 0) {
	                    d = acperp; // new direction is normal to AC towards Origin
	                    console.log('new direction is normal to AC towards Origin', d);
	                } else {
	                    // ab 수직 선분
	                    abperp = _Vector2.default.tripleProduct(ac, ab, ab);
	                    console.log('abperp', abperp, abperp.clone().norm());
	                    console.log('dotProduct(abperp, ao)', _Vector2.default.dotProduct(abperp, ao));
	
	                    // ab 수직 선분이 원점 반대 방향을 향하고 있으면
	                    // 즉, 원점이 삼각형 안에 있으면
	                    if (_Vector2.default.dotProduct(abperp, ao) < 0) {
	
	                        if (history) {
	                            history.setHistory(simplex, directions);
	                        }
	
	                        return true; // collision
	                    }
	
	                    simplex[0] = simplex[1]; // swap first element (point C)
	                    d = abperp; // new direction is normal to AB towards Origin
	                }
	
	                simplex[1] = simplex[2]; // swap element in the middle (point B)
	                --index;
	            }
	
	            if (history) {
	                history.setHistory(simplex, directions);
	            }
	
	            return false;
	        }
	    }, {
	        key: 'createConvexHull',
	        value: function createConvexHull(points) {
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
	
	                    var r = _Vector2.default.subtract(points[ie], points[hull[m]]);
	                    var v = _Vector2.default.subtract(points[j], points[hull[m]]);
	                    var c = _Vector2.default.cross(r, v);
	                    if (c < 0) {
	                        ie = j;
	                    }
	
	                    // Collinearity check
	                    if (c == 0 && v.lengthSq() > r.lengthSq()) {
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
	                var point = points[hull[i]];
	                newPoints.push(new _Vector2.default(point.x, point.y));
	            }
	
	            return newPoints;
	        }
	    }, {
	        key: 'midpoint',
	        value: function midpoint(a, b) {
	            return new _Vector2.default((a.x + b.x) / 2, (a.y + b.y) / 2);
	        }
	    }]);
	
	    return GJK;
	}();
	
	exports.default = GJK;
	
	
	function debugVertices(vertices) {
	    vertices.forEach(function (vertex, index) {
	        console.log(index, vertex.x, vertex.y);
	    });
	}
	
	function consoleVertices(vertices1, vertices2) {
	    console.log('-------------------------------------------------');
	    console.log('vertices1');
	    console.log('-------------------------------------------------');
	    debugVertices(vertices1);
	    console.log('-------------------------------------------------');
	    console.log('vertices2');
	    console.log('-------------------------------------------------');
	    debugVertices(vertices2);
	    console.log('-------------------------------------------------');
	}
	
	function str(vertex) {
	    var isFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    if (isFixed === false) {
	        return '(' + vertex.x + ',' + vertex.y + ')';
	    }
	    return '(' + vertex.x.toFixed(2) + ',' + vertex.y.toFixed(2) + ')';
	}

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _History = __webpack_require__(337);
	
	var _History2 = _interopRequireDefault(_History);
	
	var _Shape = __webpack_require__(338);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Consts = __webpack_require__(339);
	
	var _Consts2 = _interopRequireDefault(_Consts);
	
	var _Vertices = __webpack_require__(340);
	
	var _Vertices2 = _interopRequireDefault(_Vertices);
	
	var _GJK = __webpack_require__(355);
	
	var _GJK2 = _interopRequireDefault(_GJK);
	
	var _ConvexHull = __webpack_require__(330);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _MinkowskiDifference = __webpack_require__(341);
	
	var _MinkowskiDifference2 = _interopRequireDefault(_MinkowskiDifference);
	
	var _KeyCode = __webpack_require__(331);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TOTAL = 30,
	    INTERVAL = 600000,
	    SCALE = _Consts2.default.SCALE,
	    STAGE = _Consts2.default.STAGE,
	    TOP_LEFT = { x: 2, y: 2 },
	    TOP_RIGHT = { x: 17, y: 17 },
	    RAD_TO_DEG = 180 / Math.PI;
	
	var triangles = createPolygons(3, TOTAL);
	var rectangles = createPolygons(4, TOTAL);
	
	/*const triangles = [
	    // [new Vector(3, 1), new Vector(3, 5), new Vector(6, 4)],
	    // [new Vector(4, 11), new Vector(4, 5), new Vector(9, 9)],
	    // [new Vector(0, -1), new Vector(3, 1), new Vector(1, 3)],
	    [new Vector(10, 13), new Vector(11, 14), new Vector(14, 15)],
	];
	const rectangles = [
	    // [new Vector(8, 1), new Vector(8, 5), new Vector(11, 5), new Vector(11, 1)],
	    // [new Vector(5, 7), new Vector(7, 3), new Vector(10, 2), new Vector(12, 7)],
	    // [new Vector(2, -2), new Vector(5, -1), new Vector(4, 2), new Vector(1, 1)],
	    [new Vector(9, 8), new Vector(3, 12), new Vector(4, 15), new Vector(14, 15)],
	];*/
	
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
	        _this.addEvent();
	        return _this;
	    }
	
	    _createClass(Test, [{
	        key: 'initialize',
	        value: function initialize() {
	            this.shapes = [];
	            this.next();
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent() {
	            this.keyUpListener = this.onKeyUp.bind(this);
	            window.addEventListener('keyup', this.keyUpListener);
	
	            this.mouseDownListener = this.onMouseDown.bind(this);
	            this.on('mousedown', this.mouseDownListener);
	        }
	    }, {
	        key: 'displayCollision',
	        value: function displayCollision() {
	            this.clear();
	            this.checkCollision();
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            var _this2 = this;
	
	            this.shapes.forEach(function (shape) {
	                _this2.removeChild(shape);
	                shape.destroy();
	            });
	
	            this.shapes.length = 0;
	            this.shapes = [];
	
	            if (!this.minkowski) {
	                return;
	            }
	            this.removeChild(this.minkowski);
	            this.minkowski.destroy();
	        }
	    }, {
	        key: 'checkCollision',
	        value: function checkCollision() {
	            var index1 = Math.floor(Math.random() * triangles.length),
	                index2 = Math.floor(Math.random() * rectangles.length),
	                vertices1 = new _Vertices2.default(triangles[index1]),
	                vertices2 = new _Vertices2.default(rectangles[index2]);
	
	            vertices1.multiply(SCALE);
	            vertices2.multiply(SCALE);
	
	            var shape1 = new _Shape2.default(vertices1.vertices, SCALE),
	                shape2 = new _Shape2.default(vertices2.vertices, SCALE);
	            this.minkowski = new _MinkowskiDifference2.default(vertices1.vertices, vertices2.vertices);
	            this.minkowski.x = STAGE.width / 3 * 2;
	            this.minkowski.y = STAGE.height / 3 * 2;
	
	            this.addChild(shape1);
	            this.addChild(shape2);
	            this.addChild(this.minkowski);
	
	            this.shapes.push(shape1);
	            this.shapes.push(shape2);
	
	            vertices1.divide(SCALE);
	            vertices2.divide(SCALE);
	
	            var history = new _History2.default();
	            var collision = _GJK2.default.checkCollision(vertices1.vertices, vertices2.vertices, history);
	
	            console.log('');
	            console.log('---------------------------');
	            console.log('COLLISION [', collision, ']');
	            console.log('HISTORY [', history, ']');
	            console.log('---------------------------');
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            console.clear();
	
	            if (this.intervalId) {
	                clearInterval(this.intervalId);
	            }
	
	            this.displayCollision();
	            this.display = this.displayCollision.bind(this);
	            this.intervalId = setInterval(this.displayCollision, INTERVAL);
	        }
	    }, {
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'resize',
	        value: function resize() {
	            this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown() {
	            this.next();
	        }
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(e) {
	            switch (e.keyCode) {
	                case _KeyCode2.default.SPACE:
	                    this.next();
	                    break;
	            }
	        }
	    }]);
	
	    return Test;
	}(PIXI.Container);
	
	/**
	 * 두벡터 사이각 구하기
	 * @param a
	 * @param b
	 * @returns {number}
	 */
	
	
	exports.default = Test;
	function getAngle(a, b) {
	    a = new _Vector2.default(a.x, a.y).norm();
	    b = new _Vector2.default(b.x, b.y).norm();
	    var radian = Math.acos(_Vector2.default.dotProduct(a, b));
	    return radian * RAD_TO_DEG;
	}
	
	/**
	 * 랜덤으로 좌표를 생성하고 convex hull 을 만들면 OK
	 * @param polygon
	 * @param total
	 */
	function createPolygons(polygon, total) {
	    var vertices = void 0;
	    var polygons = [];
	
	    for (var i = 0; i < total; i++) {
	        vertices = [];
	
	        for (var j = 0; j < polygon; j++) {
	            var vertex = _Vector2.default.randomize(TOP_LEFT, TOP_RIGHT);
	            vertices.push(vertex);
	
	            if (j === polygon - 1) {
	                var convexHull = _ConvexHull2.default.generate(vertices);
	                vertices = convexHull;
	            }
	        }
	
	        polygons.push(vertices);
	    }
	
	    return polygons;
	}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2dqay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9Qb2ludC5qcz9mMDVhKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanM/OTZmNSoqIiwid2VicGFjazovLy8uL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwuanM/ZjI5NioqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcz85MjQxKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hpc3RvcnkuanM/NTg3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL1NoYXBlLmpzPzVhZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9Db25zdHMuanM/MjEwNCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL1ZlcnRpY2VzLmpzP2NkNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlLmpzP2MzNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1BhaW50ZXIuanM/ZWYwNiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0dKSy5qcz81MGMwIiwid2VicGFjazovLy8uL3Rlc3QvZ2prL1Rlc3QuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibWFpbiIsIk1haW4iLCJjYW52YXMiLCJyZW5kZXJlciIsInN0YWdlIiwidGVzdCIsImNvbnRhaW5lciIsImluaXQiLCJhZGRFdmVudCIsIm9uUmVzaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlBJWEkiLCJDYW52YXNSZW5kZXJlciIsIndpZHRoIiwiaGVpZ2h0IiwidmlldyIsImF1dG9SZXNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb250YWluZXIiLCJhZGRDaGlsZCIsInVwZGF0ZUxvb3AiLCJyZXNpemVXaW5kb3ciLCJvbnJlc2l6ZSIsImJpbmQiLCJtcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltRnJhbWUiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJyZXNpemUiLCJkZWdyZWVzIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwibWluIiwibWF4IiwiZmxvb3IiLCJyYWRpYW4yZGVncmVlcyIsInJhZCIsImRlZ3JlZXMycmFkaWFuIiwiZGVnIiwiVmVjdG9yIiwiYXJyIiwib2JqIiwieCIsInkiLCJ2ZWMiLCJzY2FsYXIiLCJzdWJ0cmFjdCIsInZlY3RvciIsImludmVydFgiLCJpbnZlcnRZIiwibGVuZ3RoIiwiZGl2aWRlIiwibm9ybWFsaXplIiwiZmFjdG9yIiwiYWJzIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwicmFuZG9taXplWCIsInJhbmRvbWl6ZVkiLCJyb3VuZCIsInByZWNpc2lvbiIsInRvRml4ZWQiLCJhbW91bnQiLCJtaXhYIiwibWl4WSIsImNvcHlYIiwiY29weVkiLCJ0ZW1wIiwidmVjMiIsImRvdCIsImNvZWZmIiwiYXRhbjIiLCJob3Jpem9udGFsQW5nbGUiLCJ2ZXJ0aWNhbEFuZ2xlIiwiaG9yaXpvbnRhbEFuZ2xlRGVnIiwiYW5nbGUiLCJueCIsImNvcyIsInNpbiIsIm55Iiwicm90YXRlIiwicm90YXRpb24iLCJyb3RhdGVUbyIsInJvdGF0ZUJ5IiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3FydCIsImRpc3RhbmNlU3EiLCJkaXJlY3Rpb24iLCJkeCIsImR5IiwibGVuZ3RoU3EiLCJhIiwiYiIsInYiLCJjbG9uZSIsInJldCIsIm11bHRpcGx5U2NhbGFyIiwiYyIsInIiLCJhYyIsImJjIiwidmVjMSIsInRvIiwiYWRkIiwiUG9pbnQiLCJyYWRpdXMiLCJjb2xvciIsImdlbmVyYXRlIiwiaGV4IiwiYWxwaGEiLCJidXR0b25Nb2RlIiwiaW50ZXJhY3RpdmUiLCJjbGVhciIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwibHQiLCJyYiIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiZnJvbU9iamVjdCIsIkdyYXBoaWNzIiwiUGFzdGVsQ29sb3IiLCJoQmFzZSIsIm5ld0giLCJuZXdMIiwiSFNMdG9SR0IiLCJnIiwiaHNsIiwicmdiIiwiUkdCdG9IZXgiLCJoZXhTaGFwIiwiaCIsInMiLCJsIiwicmQiLCJodWVUb1JHQiIsIm0iLCJuIiwibyIsInEiLCJwIiwicHJlZml4IiwidG9TdHJpbmciLCJDb252ZXhIdWxsIiwicG9pbnRzIiwic3RhY2siLCJzb3J0Iiwic29ydExvd2VyWVgiLCJiYXNlUG9pbnQiLCJpIiwicmVsYXRpdmVQb3NpdGlvbiIsInNvcnRDY3ciLCJwdXNoIiwibmV4dCIsImZpcnN0Iiwic2Vjb25kIiwicG9wIiwiaXNDY3ciLCJjb252ZXhIdWxsIiwiaW5kZXgiLCJwb2ludCIsInBvaW50QSIsInBvaW50QiIsInBvaW50QyIsInRyaWFuZ2xlQXJlYSIsImRlYnVnQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQ29udmV4SHVsbCIsImkwIiwieDAiLCJodWxsIiwiaWgiLCJpZSIsImoiLCJzdWIiLCJjcm9zcyIsImxlbmd0aHNxIiwibmV3UG9pbnRzIiwiTW91c2UiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJwcmV2VGltZSIsImN1cnJlbnRUaW1lIiwiZGlmZlgiLCJkaWZmWSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImdsb2JhbCIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIiwiSGlzdG9yeSIsInNpbXBsZXgiLCJBcnJheSIsImRpcmVjdGlvbnMiLCJGT05UX1NJWkUiLCJTQ0FMRSIsIlNoYXBlIiwidmVydGljZXMiLCJsaW5lQ29sb3IiLCJsaW5lQWxwaGEiLCJ0ZXh0Q29sb3IiLCJyZXBsYWNlIiwiZ3JhcGhpY3MiLCJsYWJlbHMiLCJjcmVhdGVMYWJlbCIsImRyYXciLCJ0ZXh0IiwiVGV4dCIsImFsaWduIiwiZm9udCIsImZpbGwiLCJ2aXNpYmxlIiwib3JpZ2luIiwibGluZVN0eWxlIiwibW92ZVRvIiwiZm9yRWFjaCIsInZlcnRleCIsImxpbmVUbyIsImxhYmVsIiwiZGl2aWRlU2NhbGFyIiwicmVtb3ZlQ2hpbGQiLCJDb25zdHMiLCJWZXJ0aWNlcyIsIlNUQUdFIiwiRk9OVF9DT0xPUiIsIkFYRVNfTElORV9DT0xPUiIsIkNPTlZFWF9IVUxMX0xJTkVfQ09MT1IiLCJNaW5rb3dza2lEaWZmZXJlbmNlIiwidmVydGljZXMxIiwidmVydGljZXMyIiwiZ2V0VmVydGljZXMiLCJ0ZXh0cyIsImRyYXdBeGVzIiwiZHJhd1ZldGljZXMiLCJkcmF3UG9seWdvbiIsImRyYXdUZXh0IiwiaHciLCJoaCIsIlBhaW50ZXIiLCJwYXRoIiwidjEiLCJ2MiIsImRpZmYiLCJjb252ZXhIdWxsUGF0aCIsImxpbmVXaWR0aCIsInZlYzAiLCJtYWduaWZpY2F0aW9uIiwic3RyaW5nIiwiaXNDbGVhciIsImJvdW5kcyIsInRoaWNrbmVzcyIsImRyYXdSZWN0IiwicmVjdCIsInJ0IiwibGIiLCJwMSIsInAyIiwicDAiLCJtb3ZlUG9pbnQiLCJ0b1BvaW50Iiwic2NhbGUiLCJsZWZ0IiwiaW52ZXJ0IiwicmlnaHQiLCJtZSIsInRhcmdldCIsIkdKSyIsImF2ZyIsImNvdW50IiwibWF4UHJvZHVjdCIsImRvdFByb2R1Y3QiLCJwcm9kdWN0IiwiaW5kZXhPZkZ1cnRoZXN0UG9pbnQiLCJuZWdhdGUiLCJzdHIiLCJoaXN0b3J5IiwiaXRlckNvdW50IiwiZCIsImFvIiwiYWIiLCJhYnBlcnAiLCJhY3BlcnAiLCJwb3NpdGlvbjEiLCJhdmVyYWdlUG9pbnQiLCJwb3NpdGlvbjIiLCJzdXBwb3J0Iiwic2V0SGlzdG9yeSIsInRyaXBsZVByb2R1Y3QiLCJwZXJwZW5kaWN1bGFyIiwibm9ybSIsImRlYnVnVmVydGljZXMiLCJjb25zb2xlVmVydGljZXMiLCJpc0ZpeGVkIiwiVE9UQUwiLCJJTlRFUlZBTCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiUkFEX1RPX0RFRyIsInRyaWFuZ2xlcyIsImNyZWF0ZVBvbHlnb25zIiwicmVjdGFuZ2xlcyIsIlRlc3QiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJzaGFwZXMiLCJrZXlVcExpc3RlbmVyIiwib25LZXlVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd25MaXN0ZW5lciIsIm9uTW91c2VEb3duIiwib24iLCJjaGVja0NvbGxpc2lvbiIsInNoYXBlIiwiZGVzdHJveSIsIm1pbmtvd3NraSIsImluZGV4MSIsImluZGV4MiIsIm11bHRpcGx5Iiwic2hhcGUxIiwic2hhcGUyIiwiY29sbGlzaW9uIiwiaW50ZXJ2YWxJZCIsImNsZWFySW50ZXJ2YWwiLCJkaXNwbGF5Q29sbGlzaW9uIiwiZGlzcGxheSIsInNldEludGVydmFsIiwiaGl0QXJlYSIsIlJlY3RhbmdsZSIsImUiLCJrZXlDb2RlIiwiU1BBQ0UiLCJnZXRBbmdsZSIsInJhZGlhbiIsImFjb3MiLCJwb2x5Z29uIiwidG90YWwiLCJwb2x5Z29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVDLGNBQVk7QUFDVEEsWUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGFBQU1DLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0gsTUFGRDtBQUdILEVBSkEsR0FBRDs7QUFNQSxLQUFJQyxlQUFKO0FBQUEsS0FBWUMsaUJBQVo7QUFBQSxLQUFzQkMsY0FBdEI7QUFBQSxLQUE2QkMsYUFBN0I7QUFBQSxLQUFtQ0Msa0JBQW5DOztLQUVNTCxJO0FBQ0YscUJBQWM7QUFBQTs7QUFDVixjQUFLTSxJQUFMO0FBQ0EsY0FBS0MsUUFBTDtBQUNBLGNBQUtDLFFBQUw7QUFDSDs7OztnQ0FFTTtBQUNIUCxzQkFBU1EsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFUOztBQUVBUix3QkFBVyxJQUFJUyxLQUFLQyxjQUFULENBQXdCWCxPQUFPWSxLQUEvQixFQUFzQ1osT0FB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LEUiLCJmaWxlIjoiZ2prLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi8uLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvTW91c2VcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiAgICB9XG59KCkpO1xuXG5sZXQgY2FudmFzLCByZW5kZXJlciwgc3RhZ2UsIHRlc3QsIGNvbnRhaW5lcjtcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHtcbiAgICAgICAgICAgIHZpZXc6IGNhbnZhcyxcbiAgICAgICAgICAgIGF1dG9SZXNpemU6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MzMzODNEXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1vdXNlLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgLy8g7JyE7LmY6rCAIOygleyImOqwgCDslYTri5Dqsr3smrAg7Z2Q66a/7ZWY6rKMIOuztOydtOuKlCDrrLjsoJzqsIAg7J6I7Ja0XG4gICAgICAgIC8vIOugjOuNlOufrOydmCDsnITsuZjrpbwg7KCV7IiY66GcIOyXsOyCsOuQoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cbiAgICAgICAgLy9yZW5kZXJlci5yb3VuZFBpeGVscyA9IHRydWU7XG5cbiAgICAgICAgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGVzdCA9IG5ldyBUZXN0KHJlbmRlcmVyKTtcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGVzdCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb29wKCk7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMb29wIChtcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShtcyk7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGVMb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZShtcykge1xuICAgICAgICB0ZXN0LnVwZGF0ZSgpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpO1xuICAgIH1cblxuICAgIHJlc2l6ZVdpbmRvdygpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvKipcbiAgICAgICAgICog7LqU67KE7IqkIOyCrOydtOymiOyZgCDrlJTsiqTtlIzroIjsnbQg7IKs7J207KaIIOyEpOyglVxuICAgICAgICAgKiDroIjti7Drgpgg6re4656Y7ZS9IOyngOybkCDsvZTrk5xcbiAgICAgICAgICovXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQSVhJIHJlbmRlcmVyIOumrOyCrOydtOymiFxuICAgICAgICAgKiBQSVhJIOyXkOqyjCB2aWV3cG9ydCDsgqzsnbTspogg67OA6rK9IOyVjOumvFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICB0ZXN0LnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9namsvaW5kZXguanMiLCJcblxuY29uc3QgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG4gICAgcmV0dXJuIHJhZCAqIGRlZ3JlZXM7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMycmFkaWFuIChkZWcpIHtcbiAgICByZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cblxuXG4vKipcbiAqIFZpY3Rvci5qc+ulvCBFUzbroZwg67OA7ZmY7ZWY7JesIOyCrOyaqe2VmOqzoCDsnojsirXri4jri6QuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF4a3VlbmcvdmljdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvclxue1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tQXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21BcnJheShhcnIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tT2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBWZWN0b3IoNDIsIDEzMzcpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6MTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMSwgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdWJ0cmFjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgIH1cblxuXG4gICAgZWRnZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGVkZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QoYSwgYik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAyMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWSgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSB4IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIHkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVZKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgYSBheGlzIHZhbHVlcyBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLyBiLngsIGEueSAvIGIueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFgoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WCgpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRZKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFkoKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydCgpXG4gICAge1xuICAgICAgICB0aGlzLmludmVydFgoKTtcbiAgICAgICAgdGhpcy5pbnZlcnRZKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG5lZ2F0ZSh2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCB2ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIHYueCA9IC12ZWMueDtcbiAgICAgICAgdi55ID0gLXZlYy55O1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG11bHRpcGx5U2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiBzY2FsYXIsIHZlY3Rvci55ICogc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGVTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAvIHNjYWxhciwgdmVjdG9yLnkgLyBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKDkwIOuPhCDtmozsoIQpXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gLXZlYy55O1xuICAgICAgICBjbG9uZS55ID0gdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICgtOTAg64+EIO2ajOyghClcbiAgICAgKi9cbiAgICByZXR1cm5QZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueSwgLXRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmV0dXJuUGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuyhOumvFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlKHZlYywgbGVuZ3RoKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgICAgIGlmIChsZW5ndGhTcSA+IGxlbmd0aCAqIGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0Lm11bHRpcGx5U2NhbGFyKGxlbmd0aCAvIE1hdGguc3FydChsZW5ndGhTcSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG5vcm1hbGl6ZSgpXG4gICAge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZpZGUobmV3IFZlY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbm9ybSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBhYnNvbHV0ZSB2ZWN0b3IgYXhpcyBpcyBncmVhdGVyIHRoYW4gYG1heGAsIG11bHRpcGxpZXMgdGhlIGF4aXMgYnkgYGZhY3RvcmBcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgYm90aCB4IGFuZCB5IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGltaXQobWF4LCBmYWN0b3IpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9taXplcyBib3RoIHZlY3RvciBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODBgKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSwgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB0aGlzLnggPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIGxlZnQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0TGVmdEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICBsZWZ0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gLXRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgcmlnaHQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtAbGluayBWZWN0b3IyfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldFJpZ2h0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIHJpZ2h0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gICAgICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJpcGxlX3Byb2R1Y3QjVmVjdG9yX3RyaXBsZV9wcm9kdWN0XG4gICAgICog7IS46re466i87Yq47JeQ7IScIOybkOygkOycvOuhnCDtlqXtlZjripQg67Cp7Zal7J2EIOywvuydhCDrlYwg7IKs7JqpXG4gICAgICovXG4gICAgc3RhdGljIHRyaXBsZVByb2R1Y3QoYSwgYiwgYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGNvbnN0IGFjID0gYS54ICogYy54ICsgYS55ICogYy55ICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgICAgICwgYmMgPSBiLnggKiBjLnggKyBiLnkgKiBjLnk7ICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuXG4gICAgICAgIC8vIHBlcmZvcm0gYiAqIGEuZG90KGMpIC0gYSAqIGIuZG90KGMpXG4gICAgICAgIHIueCA9IGIueCAqIGFjIC0gYS54ICogYmM7XG4gICAgICAgIHIueSA9IGIueSAqIGFjIC0gYS55ICogYmM7XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBwcm9qZWN0T250byh2ZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgICAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICAgICAgdGhpcy55ID0gY29lZmYgKiB2ZWMyLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ISg7ZiVIOuztOqwhFxuICAgICAqIGh0dHA6Ly9kZXZlbG9wdWcuYmxvZ3Nwb3QuY29tLzIwMTQvMDkvdW5pdHktdmVjdG9yLWxlcnAuaHRtbFxuICAgICAqIEBwYXJhbSB2ZWMxXG4gICAgICogQHBhcmFtIHZlYzJcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyBsZXJwKHZlYzEsIHZlYzIsIHRvKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMxLCAxIC0gdG8pLCBWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMiwgdG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsl63siJhcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmNwKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxIC8gdmVjdG9yLngsIDEgLyB2ZWN0b3IueSk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgYW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICBhbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGVEZWcoKTtcbiAgICB9XG5cblxuICAgIGRpcmVjdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZShhbmdsZSlcbiAgICB7XG4gICAgICAgIHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcm90YXRlRGVnKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgYW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUbyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyb3RhdGlvbi10aGlzLmFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG9EZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnkocm90YXRpb24pXG4gICAge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnlEZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB2ZWMueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFkgYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSAtIHZlYy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGVTcXVhcmVkKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VTcSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVNxKHZlYylcbiAgICB7XG4gICAgICAgIHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG4gICAgICAgICAgICBkeSA9IHRoaXMuZGlzdGFuY2VZKHZlYyk7XG5cbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGgoKTtcbiAgICAgKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLqOyInO2eiCDquLjsnbQg67mE6rWQ66W8IO2VmOugpOuptCBsZW5ndGgg66W8IOyCrOyaqe2VmOq4sCDrs7Tri6TripQgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOqyjCDruaDrpbTri6QuXG4gICAgICogbGVuZ3RoIOuKlCBNYXRoLnNxcnQgKOygnOqzseq3vCkg7LKY66as66W8IO2VmOq4sCDrlYzrrLjsl5Ag64uo7IicIOq4uOydtCDruYTqtZDsi5wgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg67mg66aF64uI64ukLlxuICAgICAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGhTcSgpO1xuICAgICAqICAgICAvLyA9PiAxMjUwMFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aFNxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbGVuZ3RoU3EodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgIH1cblxuXG4gICAgbWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuXG4gICAgdG8odmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjLnggLSB0aGlzLngsIHZlYy55IC0gdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHNldCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjLnplcm8oKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNaZXJvKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdGhpcyB2ZWN0b3IgaXMgdGhlIHNhbWUgYXMgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRXF1YWxUbyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBVdGlsaXR5IE1ldGhvZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9BcnJheSgpO1xuICAgICAqICAgICAvLyA9PiBbMTAsIDIwXVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0FycmF5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gICAgICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvT2JqZWN0KClcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlY3Rvci5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi91dGlscy9QYXN0ZWxDb2xvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzXG57XG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAxMCwgY29sb3IgPSBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmVuZGVyKHJhZGl1cywgY29sb3IsIGFscGhhKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcihyYWRpdXMgPSAxMCwgY29sb3IgPSAweGZmMzMwMCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplKGx0LCByYilcbiAgICB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy52ZWN0b3IucmFuZG9taXplKGx0LCByYik7XG4gICAgICAgIHRoaXMueCA9IHBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMueSA9IHBvc2l0aW9uLnk7XG4gICAgfVxuXG5cbiAgICBnZXQgdmVjdG9yKClcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuZnJvbU9iamVjdCh0aGlzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbS9Qb2ludC5qcyIsIi8qKlxuICogaHR0cHM6Ly9jb2RlcGVuLmlvL3BsaXUvcGVuL0JMRUt3QVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXN0ZWxDb2xvciB7XG4gICAgc3RhdGljIGdlbmVyYXRlKCkge1xuICAgICAgICBjb25zdCBoQmFzZSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGNvbnN0IG5ld0ggPSBNYXRoLmZsb29yKGhCYXNlICogMzYwKTtcbiAgICAgICAgY29uc3QgbmV3TCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KSArIDc1O1xuICAgICAgICBjb25zdCBjb2xvciA9IGBoc2woJHtuZXdIfSwgMTAwJSwgJHtuZXdMfSUpYDtcbiAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gdGhpcy5IU0x0b1JHQihoQmFzZSwgMSwgbmV3TCAqIC4wMSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhzbDogY29sb3IsIC8vIGhzbCgwLCAxMDAlLCA4NSUpO1xuICAgICAgICAgICAgcmdiOiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYCwgLy8gcmdiKDI1NSwgMTI4LCAxMjgpO1xuICAgICAgICAgICAgaGV4OiBgJHt0aGlzLlJHQnRvSGV4KHIsIGcsIGIpfWAsIC8vIDB4ZmY4MDgwXG4gICAgICAgICAgICBoZXhTaGFwOmAke3RoaXMuUkdCdG9IZXgociwgZywgYiwgJyMnKX1gLCAvLyAjZmY4MDgwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSFNMIHRvIFJHQiBmb3JtdWxhIGFkYXB0ZWQgZnJvbTpcbiAgICAgKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9tamFja3Nvbi81MzExMjU2XG4gICAgICogKHNraXBwaW5nIHRvIGVsc2V7fSBzaW5jZSBzIHdpbGwgYWx3YXlzIGJlIDEwMCUpXG4gICAgICogQHBhcmFtIGhcbiAgICAgKiBAcGFyYW0gc1xuICAgICAqIEBwYXJhbSBsXG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgSFNMdG9SR0IoaCwgcywgbCkge1xuICAgICAgICBsZXQgciwgZywgYjtcblxuICAgICAgICBjb25zdCByZCA9IChhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heChNYXRoLm1pbihhICogMjU2LCAyNTUpLCAwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaHVlVG9SR0IgPSAobSwgbiwgbykgPT4ge1xuICAgICAgICAgICAgaWYgKG8gPCAwKSBvICs9IDE7XG4gICAgICAgICAgICBpZiAobyA+IDEpIG8gLT0gMTtcbiAgICAgICAgICAgIGlmIChvIDwgMSAvIDYpIHJldHVybiBtICsgKG4gLSBtKSAqIDYgKiBvO1xuICAgICAgICAgICAgaWYgKG8gPCAxIC8gMikgcmV0dXJuIG47XG4gICAgICAgICAgICBpZiAobyA8IDIgLyAzKSByZXR1cm4gbSArIChuIC0gbSkgKiAoMiAvIDMgLSBvKSAqIDY7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcblxuICAgICAgICByID0gaHVlVG9SR0IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgICAgZyA9IGh1ZVRvUkdCKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlVG9SR0IocCwgcSwgaCAtIDEgLyAzKTtcblxuICAgICAgICByZXR1cm4gW3JkKHIpLCByZChnKSwgcmQoYildXG4gICAgfVxuXG4gICAgc3RhdGljIFJHQnRvSGV4KHIsIGcsIGIsIHByZWZpeCA9ICcweCcpIHtcbiAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0ke3IudG9TdHJpbmcoMTYpfSR7Zy50b1N0cmluZygxNil9JHtiLnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9QYXN0ZWxDb2xvci5qcyIsIi8qKlxuICogaHR0cHM6Ly93d3cuY3JvY3VzLmNvLmtyLzEyODhcbiAqL1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vVmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZleEh1bGwge1xuICAgIHN0YXRpYyBnZW5lcmF0ZShwb2ludHMpIHtcblxuICAgICAgICBjb25zdCBzdGFjayA9IFtdLFxuICAgICAgICAgICAgbiA9IHBvaW50cy5sZW5ndGg7XG5cbiAgICAgICAgLy8geeyijO2RnCwgeOyijO2RnCDsnpHsnYAg7Iic7Jy866GcIOygleugrFxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRMb3dlcllYKTtcblxuICAgICAgICAvLyDquLDspIDsoJAg7ISk7KCVXG4gICAgICAgIGNvbnN0IGJhc2VQb2ludCA9IHBvaW50c1swXTtcblxuICAgICAgICAvLyDquLDspIDsoJAg6riw7KSA7Jy866GcIHZlY3RvciDrpbwg7IOd7ISx7ZWY6rOgIOyZuOyggeydhCDqtaztlbTshJwg67CYIOyLnOqzhCDrsKntlqXsnLzroZwgKGNjdykg7KCV66CsIO2VqeuLiOuLpC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50c1tpXS5yZWxhdGl2ZVBvc2l0aW9uID0gbmV3IFZlY3RvcihcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueCAtIGJhc2VQb2ludC54LFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXS55IC0gYmFzZVBvaW50LnlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRDY3cpO1xuXG4gICAgICAgIC8vIOyKpO2DneyXkCBmaXJzdCwgc2Vjb25kIOulvCDrhKPsirXri4jri6QuXG4gICAgICAgIHN0YWNrLnB1c2goMCk7XG4gICAgICAgIHN0YWNrLnB1c2goMSk7XG5cbiAgICAgICAgbGV0IG5leHQgPSAyO1xuXG4gICAgICAgIHdoaWxlIChuZXh0IDwgbikge1xuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0LCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgc2Vjb25kID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpcnN0LCBzZWNvbmQsIG5leHTqsIAg7KKM7ZqM7KCEICggMCDrs7Tri6Qg7YGs66m0ICnsnbTrnbzrqbQgc2Vjb25kIHB1c2hcbiAgICAgICAgICAgICAgICAvLyDsmrDtmozsoIQoIDAg67O064ukIOyekeycvOuptCApIOydtOudvOuptCDsnITsnZggd2hpbGXrrLgg6rOE7IaNIOuwmOuztVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2N3KHBvaW50c1tmaXJzdF0sIHBvaW50c1tzZWNvbmRdLCBwb2ludHNbbmV4dF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc2Vjb25kKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHQrKyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gc3RhY2subGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YWNrW2ldO1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaW5kZXhdO1xuICAgICAgICAgICAgY29udmV4SHVsbC5wdXNoKG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnZleEh1bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeSwgeCDqsIAg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBzb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICBpZiAocG9pbnRBLnkgIT09IHBvaW50Qi55KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnRBLnkgLSBwb2ludEIueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRBLnggLSBwb2ludEIueDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDquLDspIAg7KKM7ZGcIOq4sOykgOycvOuhnCDsg4HrjIAg7KKM7ZGc66W8IOq1rO2VtOyEnCDsi5zqs4Qg67CY64yAIOuwqe2WpeycvOuhnCDsoJXroKztlanri4jri6QuXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydENjdyhwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAvLyDspJHsi6wg7KKM7ZGc7J24IOqyveyasCByZWxhdGl2ZVBvc2l0aW9uIOydtCDsl4bsirXri4jri6QuIOykkeyLrCDsooztkZzrpbwgMOuyiOycvOuhnCDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBpZiAoIXBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGEgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi55ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgYiA9IHBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uLnggKiBwb2ludEIucmVsYXRpdmVQb3NpdGlvbi55O1xuXG4gICAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29udmV4SHVsbC5zb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67CYIOyLnOqzhCDrsKntlqXsnbjsp4Ag7Jes67aAXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcGFyYW0gcG9pbnRDXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQ2N3KHBvaW50QSwgcG9pbnRCLCBwb2ludEMpIHtcbiAgICAgICAgLy8gY29uc3QgdHJpYW5nbGVBcmVhID0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpO1xuICAgICAgICBjb25zdCB0cmlhbmdsZUFyZWEgPSAgKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpO1xuICAgICAgICBpZiAodHJpYW5nbGVBcmVhID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z0FycmF5KGFycikge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYXJyLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJbaV0ueCwgYXJyW2ldLnkpO1xuICAgIH1cbn1cblxuXG4vKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTIgSnUgSHl1bmcgTGVlXG4qXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZVxuKiBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbiogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4qIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Jcbiogc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElOR1xuKiBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbiogREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIENyZWF0ZSB0aGUgY29udmV4IGh1bGwgdXNpbmcgdGhlIEdpZnQgd3JhcHBpbmcgYWxnb3JpdGhtXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dpZnRfd3JhcHBpbmdfYWxnb3JpdGhtXG5mdW5jdGlvbiBjcmVhdGVDb252ZXhIdWxsKHBvaW50cykge1xuICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICB2YXIgaTAgPSAwO1xuICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGh1bGwgPSBbXTtcbiAgICB2YXIgbSA9IDA7XG4gICAgdmFyIGloID0gaTA7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHIgPSB2ZWMyLnN1Yihwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIHYgPSB2ZWMyLnN1Yihwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICB2YXIgYyA9IHZlYzIuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aHNxKCkgPiByLmxlbmd0aHNxKCkpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtKys7XG4gICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvcHkgdmVydGljZXNcbiAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgbmV3UG9pbnRzLnB1c2gocG9pbnRzW2h1bGxbaV1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UG9pbnRzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9yeSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbnMge1ZlY3RvcltdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpbXBsZXggPSBuZXcgQXJyYXkoMyksIGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMykpIHtcbiAgICAgICAgdGhpcy5zaW1wbGV4ID0gc2ltcGxleDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB9XG5cbiAgICBzZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zaW1wbGV4ID0gc2ltcGxleDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGlzdG9yeS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vZ2prL0NvbnN0cyc7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yJztcblxuY29uc3QgRk9OVF9TSVpFID0gJzlweCdcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSA9IDAuNSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsaW5lQ29sb3IgPSBsaW5lQ29sb3IgPyBsaW5lQ29sb3IgOiBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleDtcbiAgICAgICAgbGluZUNvbG9yID0gdHlwZW9mIGxpbmVDb2xvciA9PT0gJ251bWJlcicgPyAnMHgnICsgbGluZUNvbG9yLnRvU3RyaW5nKDE2KSA6IGxpbmVDb2xvcjtcbiAgICAgICAgY29uc3QgdGV4dENvbG9yID0gbGluZUNvbG9yLnJlcGxhY2UoJzB4JywgJyMnKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB0aGlzLmxpbmVDb2xvciA9IGxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5saW5lQWxwaGEgPSBsaW5lQWxwaGE7XG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gdGV4dENvbG9yO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSB0aGlzLmNyZWF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxhYmVsKCkge1xuICAgICAgICBjb25zdCBuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoaSwge1xuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBmb250OiBGT05UX1NJWkUsXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRleHQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGFiZWxzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3NcbiAgICAgICAgICAgICwgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG4gICAgICAgICAgICAsIG9yaWdpbiA9IHZlcnRpY2VzWzBdO1xuXG4gICAgICAgIGcuY2xlYXIoKTtcbiAgICAgICAgZy5saW5lU3R5bGUoMSwgdGhpcy5saW5lQ29sb3IsIHRoaXMubGluZUFscGhhKTtcbiAgICAgICAgZy5tb3ZlVG8ob3JpZ2luLngsIG9yaWdpbi55KTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZy5saW5lVG8odmVydGV4LngsIHZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbHNbaW5kZXhdXG4gICAgICAgICAgICAgICAgLCB2ZWMgPSBWZWN0b3IuZGl2aWRlU2NhbGFyKHZlcnRleCwgU0NBTEUpO1xuXG4gICAgICAgICAgICBsYWJlbC54ID0gdmVydGV4Lng7XG4gICAgICAgICAgICBsYWJlbC55ID0gdmVydGV4Lnk7XG5cbiAgICAgICAgICAgIGxhYmVsLnRleHQgPSBgKCR7dmVjLnh9LCR7dmVjLnl9KWA7XG4gICAgICAgICAgICBsYWJlbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGcubGluZVRvKG9yaWdpbi54LCBvcmlnaW4ueSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxhYmVscy5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChsYWJlbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGFiZWxzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMubGFiZWxzID0gbnVsbDtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvU2hhcGUuanMiLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RzIHtcbiAgICBzdGF0aWMgZ2V0IFNDQUxFKCkge1xuICAgICAgICByZXR1cm4gMTQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFHRSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlID0ge3g6IDAsIHk6IDAsIHdpZHRoOiA2MDAsIGhlaWdodDogNjAwfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFnZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9Db25zdHMuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljZXMge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzID0gW10pIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KHNjYWxhcikge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggKj0gc2NhbGFyO1xuICAgICAgICAgICAgdmVydGV4LnkgKj0gc2NhbGFyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXZpZGUoc2NhbGFyKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICB2ZXJ0ZXgueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB2ZXJ0ZXgueSAvPSBzY2FsYXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2VzW2luZGV4XSA9IHZlcnRleC5jbG9uZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvVmVydGljZXMuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9Qb2ludCc7XG5pbXBvcnQgQ29udmV4SHVsbCBmcm9tICcuLi9jb252ZXhodWxsL0NvbnZleEh1bGwnO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uL3V0aWxzL1Bhc3RlbENvbG9yJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vZ2prL0NvbnN0cyc7XG5cblxuY29uc3QgU0NBTEUgPSBDb25zdHMuU0NBTEVcbiAgICAsIFNUQUdFID0gQ29uc3RzLlNUQUdFXG4gICAgLCBGT05UX0NPTE9SID0gJyNGRkZGRkYnXG4gICAgLCBBWEVTX0xJTkVfQ09MT1IgPSAnMHhGRkZGRkYnXG4gICAgLCBDT05WRVhfSFVMTF9MSU5FX0NPTE9SID0gUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKS5oZXg7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlua293c2tpRGlmZmVyZW5jZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuXG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMilcbiAgICAgICAgICAgICwgY29udmV4SHVsbCA9IHRoaXMuY29udmV4SHVsbCA9IENvbnZleEh1bGwuZ2VuZXJhdGUodmVydGljZXMpO1xuXG4gICAgICAgIHRoaXMudGV4dHMgPSBbXTtcbiAgICAgICAgdGhpcy5kcmF3QXhlcygpO1xuICAgICAgICB0aGlzLmRyYXdWZXRpY2VzKHZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5kcmF3UG9seWdvbihjb252ZXhIdWxsKTtcbiAgICB9XG5cbiAgICBkcmF3VmV0aWNlcyh2ZXJ0aWNlcykge1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KHZlcnRleC54LCB2ZXJ0ZXgueSwgMywgUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKS5oZXgpO1xuICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHBvaW50KTtcblxuICAgICAgICAgICAgY29uc3QgdmVjID0gVmVjdG9yLmRpdmlkZVNjYWxhcih2ZXJ0ZXgsIFNDQUxFKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoYCgke3ZlYy54fSwgJHt2ZWMueX0pYCwgcG9pbnQudmVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd1BvbHlnb24odmVydGljZXMpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3M7XG5cbiAgICAgICAgZy5saW5lU3R5bGUoMSwgQ09OVkVYX0hVTExfTElORV9DT0xPUiwgMC41KTtcbiAgICAgICAgZy5tb3ZlVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4geyBnLmxpbmVUbyh2ZXJ0ZXgueCwgdmVydGV4LnkpO30pO1xuICAgICAgICBnLmxpbmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgICB9XG5cbiAgICBkcmF3QXhlcygpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3NcbiAgICAgICAgICAgICwgaHcgPSBTVEFHRS53aWR0aCAvIDJcbiAgICAgICAgICAgICwgaGggPSBTVEFHRS5oZWlnaHQgLyAyO1xuXG4gICAgICAgIGcubGluZVN0eWxlKDEsIEFYRVNfTElORV9DT0xPUiwgMC41KTtcbiAgICAgICAgZy5tb3ZlVG8oLWh3LCAwKTtcbiAgICAgICAgZy5saW5lVG8oaHcsIDApO1xuICAgICAgICBnLm1vdmVUbygwLCAtaGgpO1xuICAgICAgICBnLmxpbmVUbygwLCBoaCk7XG4gICAgfVxuXG4gICAgZHJhd1RleHQodGV4dCwgdmVydGV4ID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gbmV3IFBJWEkuVGV4dCh0ZXh0LCB7XG4gICAgICAgICAgICBmb250OiAnMjBweCcsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmaWxsOiBGT05UX0NPTE9SXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxhYmVsLnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgbGFiZWwueSA9IHZlcnRleC55O1xuICAgICAgICB0aGlzLnRleHRzLnB1c2gobGFiZWwpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGxhYmVsKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xuICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHBvaW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICB9XG5cbiAgICBnZXRWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB2ZXJ0aWNlczEuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgdmVydGljZXMyLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKFZlY3Rvci5zdWJ0cmFjdChhLCBiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEdKSyBmcm9tICcuLi9namsvR0pLJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyXG57XG4gICAgc3RhdGljIGRyYXdNaW5rb3dza2lTdW0odmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygnZHJhd01pbmtvd3NraVN1bSgnLCB2ZXJ0aWNlczEubGVuZ3RoICogdmVydGljZXMyLmxlbmd0aCwgJyknKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgICAgICBjb25zdCBwYXRoID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZlcnRpY2VzMi5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHYxID0gdmVydGljZXMxW2ldLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IHYyID0gdmVydGljZXMyW2pdLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBWZWN0b3Iuc3VidHJhY3QodjEsIHYyKTtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goZGlmZik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSwgaiwgYHZlY1ske2RpZmYueH0sICR7ZGlmZi55fV1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZleEh1bGxQYXRoID0gR0pLLmNyZWF0ZUNvbnZleEh1bGwocGF0aCk7XG4gICAgICAgIFBhaW50ZXIuZHJhd1BvbHlnb24oY29udmV4SHVsbFBhdGgsIDEsIDB4RERERERELCAxKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9seWdvbih2ZXJ0aWNlcywgbGluZVdpZHRoID0gMSwgY29sb3IgPSAweDYwN0Q4QiwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBjb25zdCBncmFwaGljcyA9IHdpbmRvdy5nO1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGNvbnN0IHZlYzAgPSB2ZXJ0aWNlc1swXS5jbG9uZSgpO1xuICAgICAgICB2ZWMwLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcblxuICAgICAgICBncmFwaGljcy5tb3ZlVG8odmVjMC54LCB2ZWMwLnkpO1xuXG4gICAgICAgIC8vIHRoaXMuZHJhd1RleHQod2luZG93LnN0YWdlLCAnKCcgKyB2ZWMwLngudG9GaXhlZCgwKSArICcsJyArIHZlYzAueS50b0ZpeGVkKDApICsgJyknLCB2ZWMwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmVjID0gdmVydGljZXNbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgIHZlYy5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odmVjLngsIHZlYy55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMwLngsIHZlYzAueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1RleHQoc3RhZ2UsIHN0cmluZywgcG9pbnQsIGNvbG9yID0gJyNmZjMzMDAnKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoc3RyaW5nLCB7XG4gICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgLy8gZm9udFNpemU6IDQsXG4gICAgICAgICAgICAvLyBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBmaWxsOiBjb2xvcixcbiAgICAgICAgICAgIC8vIHN0cm9rZTogJyM0YTE4NTAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0ZXh0LnggPSBwb2ludC54O1xuICAgICAgICB0ZXh0LnkgPSBwb2ludC55O1xuXG4gICAgICAgIHN0YWdlLmFkZENoaWxkKHRleHQpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludChncmFwaGljcywgcG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocG9pbnQueCwgcG9pbnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlCb3VuZHMoZ3JhcGhpY3MsIGJvdW5kcywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3UmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJ0LngsIHJlY3QucnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJiLngsIHJlY3QucmIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LmxiLngsIHJlY3QubGIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50c0J5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubHQueCwgcmVjdC5sdC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucnQueCwgcmVjdC5ydC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucmIueCwgcmVjdC5yYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubGIueCwgcmVjdC5sYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHMoZ3JhcGhpY3MsIHBvaW50cywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcDEgPSBwb2ludHNbaV07XG4gICAgICAgICAgICB2YXIgcDIgPSBwb2ludHNbaSArIDEgPCBwb2ludHMubGVuZ3RoID8gaSArIDEgOiAwXTtcblxuICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdMaW5lKGdyYXBoaWNzLCBwMCwgcDEsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAwLngsIHAwLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocDEueCwgcDEueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0Fycm93KGdyYXBoaWNzLCBtb3ZlUG9pbnQsIHRvUG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNywgc2NhbGUgPSA1KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKmdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKHRvUG9pbnQueCAtIG1vdmVQb2ludC54LCB0b1BvaW50LnkgLSBtb3ZlUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoMTUpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTsqL1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKG1vdmVQb2ludC54IC0gdG9Qb2ludC54LCBtb3ZlUG9pbnQueSAtIHRvUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHZlY3Rvci5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcihzY2FsZSAqIDMpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3RGlyZWN0aW9uKGdyYXBoaWNzLCBtZSwgdGFyZ2V0LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcsIHNjYWxlID0gNSlcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuXG4gICAgICAgIHZhciB0byA9IG1lLnRvKHRhcmdldCk7XG4gICAgICAgIHZhciBsZWZ0ID0gdG8uY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB0by5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICB0by5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcihzY2FsZSAqIDMpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtZS54ICsgdG8ueCwgbWUueSArIHRvLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obWUueCwgbWUueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtZS54ICsgbGVmdC54LCBtZS55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIHJpZ2h0LngsIG1lLnkgKyByaWdodC55KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFpbnRlci5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbi8qKlxuICogR0pLIEFsZ29yaXRobSAoR2lsYmVydC1Kb2huc29uLUtlZXJ0aGkpXG4gKiBodHRwczovL2dpdGh1Yi5jb20va3JvaXRvci9namsuY1xuICogaHR0cDovL3d3dy5keW40ai5vcmcvMjAxMC8wNC9namstZ2lsYmVydC1qb2huc29uLWtlZXJ0aGkvI2dqay10b3BcbiAqIGh0dHBzOi8vd3d3Lmhhcm9sZHNlcnJhbm8uY29tL2Jsb2cvdmlzdWFsaXppbmctdGhlLWdqay1jb2xsaXNpb24tYWxnb3JpdGhtXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanVobC9jb2xsaXNpb24tZGV0ZWN0aW9uLTJkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdKS1xue1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdG8gY29tcHV0ZSBhdmVyYWdlIGNlbnRlciAocm91Z2hseSkuIEl0IG1pZ2h0IGJlIGRpZmZlcmVudCBmcm9tXG4gICAgICogQ2VudGVyIG9mIEdyYXZpdHksIGVzcGVjaWFsbHkgZm9yIGJvZGllcyB3aXRoIG5vbnVuaWZvcm0gZGVuc2l0eSxcbiAgICAgKiBidXQgdGhpcyBpcyBvayBhcyBpbml0aWFsIGRpcmVjdGlvbiBvZiBzaW1wbGV4IHNlYXJjaCBpbiBHSktcbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgYXZlcmFnZVBvaW50KHZlcnRpY2VzKVxuICAgIHtcbiAgICAgICAgY29uc3QgYXZnID0gbmV3IFZlY3RvcigpXG4gICAgICAgICAgICAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgYXZnLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2Zy55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhdmcueCAvPSBjb3VudDtcbiAgICAgICAgYXZnLnkgLz0gY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIGF2ZztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBmdXJ0aGVzdCB2ZXJ0ZXggYWxvbmcgYSBjZXJ0YWluIGRpcmVjdGlvblxuICAgICAqIOq8reyngOygkOqzvCDrsKntlqXsnYQg7KCE64us7ZWY66m0IOuCtOyggSAo7Yis7JiBKeydhCDthrXtlbQg7LWc64yA66GcIOuovCDsooztkZzsnZgg7J24642x7Iqk66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMsIGRpcmVjdGlvbilcbiAgICB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXhQcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IFZlY3Rvci5kb3RQcm9kdWN0KGRpcmVjdGlvbiwgdmVydGljZXNbaV0pO1xuXG4gICAgICAgICAgICBpZiAocHJvZHVjdCA+IG1heFByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBtYXhQcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNaW5rb3dza2kgc3VtIHN1cHBvcnQgZnVuY3Rpb24gZm9yIEdKS1xuICAgICAqIOyngOybkCDtlajsiJjsl5DshJwg7Y+066as6rOk7J2YIO2PrOyduO2KuOyZgCDrsKntlqXsnLzroZwg7ISc66GcIOuLpOuluCDrsKntlqXsnZgg7KCQ7J2EIOq1rO2VmOqzoCBNaW5rb3dza2kgRGlmZmVyZW5jZSDrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gdmVydGljZXMyIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUg67Kh7YSwXG4gICAgICovXG4gICAgc3RhdGljIHN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGRpcmVjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIGdldCBmdXJ0aGVzdCBwb2ludCBvZiBmaXJzdCBib2R5IGFsb25nIGFuIGFyYml0cmFyeSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaSA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMxLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIC8vIGdldCBmdXJ0aGVzdCBwb2ludCBvZiBzZWNvbmQgYm9keSBhbG9uZyB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGogPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMiwgVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKGRpcmVjdGlvbiwgdHJ1ZSksICdpOicgKyBzdHIodmVydGljZXMxW2ldKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pLCB0cnVlKSwgJ2o6JyArIHN0cih2ZXJ0aWNlczJbal0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1cHBvcnQoJyArIHN0cihWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pKSArICcpJyk7XG4gICAgICAgIC8vIHN1YnRyYWN0IChNaW5rb3dza2kgc3VtKSB0aGUgdHdvIHBvaW50cyB0byBzZWUgaWYgYm9kaWVzICdvdmVybGFwJ1xuICAgICAgICByZXR1cm4gVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gdmVydGljZXMxIHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gdmVydGljZXMyIHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW4gaGlzdG9yeSB7SGlzdG9yeX0gc2ltcGxleCDsmYAgZGlyZWN0aW9uIO2eiOyKpO2GoOumrFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDstqnrj4wg7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGNoZWNrQ29sbGlzaW9uKHZlcnRpY2VzMSwgdmVydGljZXMyLCBoaXN0b3J5ID0gbnVsbClcbiAgICB7XG4gICAgICAgIC8vIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMik7XG5cbiAgICAgICAgbGV0IGl0ZXJDb3VudCA9IDAsIGluZGV4ID0gMDsgICAvLyBpbmRleCBvZiBjdXJyZW50IHZlcnRleCBvZiBzaW1wbGV4XG4gICAgICAgIGxldCBhLCBiLCBjLCBkLCBhbywgYWIsIGFjLCBhYnBlcnAsIGFjcGVycCxcbiAgICAgICAgICAgIHNpbXBsZXggPSBuZXcgQXJyYXkoMyksIGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMyk7XG5cbiAgICAgICAgLy8g65GQIO2PtOumrOqzpCDspJHsi6wg7KKM7ZGc66W8IO2Gte2VtOyEnCDrsKntlqXsnYQg6rWs7ZWp64uI64ukLlxuICAgICAgICBjb25zdCBwb3NpdGlvbjEgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczEpOyAvLyBub3QgYSBDb0cgYnV0XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uMiA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMik7IC8vIGl0J3Mgb2sgZm9yIEdKSyApXG5cbiAgICAgICAgLy8gaW5pdGlhbCBkaXJlY3Rpb24gZnJvbSB0aGUgY2VudGVyIG9mIDFzdCBib2R5IHRvIHRoZSBjZW50ZXIgb2YgMm5kIGJvZHlcbiAgICAgICAgLy8g67Cp7ZalIHZlY3RvclxuICAgICAgICBkID0gVmVjdG9yLnN1YnRyYWN0KHBvc2l0aW9uMSwgcG9zaXRpb24yKTtcblxuICAgICAgICAvLyBpZiBpbml0aWFsIGRpcmVjdGlvbiBpcyB6ZXJvIOKAkyBzZXQgaXQgdG8gYW55IGFyYml0cmFyeSBheGlzICh3ZSBjaG9vc2UgWClcbiAgICAgICAgaWYgKChkLnggPT0gMCkgJiYgKGQueSA9PSAwKSkge1xuICAgICAgICAgICAgZC54ID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBzdXBwb3J0IGFzIGluaXRpYWwgcG9pbnQgb2YgdGhlIG5ldyBzaW1wbGV4XG4gICAgICAgIGEgPSBzaW1wbGV4WzBdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgZGlyZWN0aW9uc1swXSA9IGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAvLyBzdXBwb3J0IOygkOqzvCDrsKntlqXsnbQg6rCZ7J2AIOuwqe2WpeydtCDslYTri5Ag6rK97JqwXG4gICAgICAgIGlmIChhLmRvdChkKSA8PSAwKSB7XG4gICAgICAgICAgICAvLyDrp4jsp4Drp4nsl5Ag7LaU6rCAIOuQnCDsoJDsnbQgZOydmCDrsKntlqXsnLzroZwg7JuQ7KCQ7J2EIOyngOuCmOy5mOyngCDslYrsnYAg6rK97JqwXG4gICAgICAgICAgICAvLyDqt7gg64uk7J2MIE1pbmtvd3NraSDtlansnYAg7JuQ7KCQ7J2EIO2PrO2VqCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cbiAgICAgICAgICAgIC8vIOy2lOqwgCDrkJwg66eI7KeA66eJIOygkOydgCBNaW5rb3dza2kgRGlmZmVyZW5jZeydmCDqsIDsnqXsnpDrpqzsl5Ag7J6I7Iq164uI64ukLlxuICAgICAgICAgICAgY29uc29sZS5sb2coJyAgICAgICBDQVNFMVsnLCAnTk8nLCAnXScpO1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGQgPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBUaGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIGFsd2F5cyB0b3dhcmRzIHRoZSBvcmlnaW4sIHNvIHRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgbmVnYXRlKGEpXG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGl0ZXJDb3VudCsrO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVyQ291bnQpO1xuXG4gICAgICAgICAgICBhID0gc2ltcGxleFsrK2luZGV4XSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgICAgICBkaXJlY3Rpb25zW2luZGV4XSA9IGQ7XG5cbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhLCBkKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RyKGEpLCBzdHIoZCwgdHJ1ZSksIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgICAgICAgQ0FTRTJbJywgJ05PJywgJ10nKTtcblxuICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBh6rCAIOybkOygkOycvOuhnCDtlqXtlZjripQg67Kh7YSw64qUIC1hIOulvCDtlZjrqbQg65Cp64uI64ukLlxuICAgICAgICAgICAgYW8gPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gT3JpZ2luIGlzIGp1c3QgbmVnYXRpdmUgQVxuXG4gICAgICAgICAgICAvLyBzaW1wbGV4IGhhcyAyIHBvaW50cyAoYSBsaW5lIHNlZ21lbnQsIG5vdCBhIHRyaWFuZ2xlIHlldClcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDIpIHtcblxuICAgICAgICAgICAgICAgIGIgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgICAgIGFiID0gVmVjdG9yLnN1YnRyYWN0KGIsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQlxuICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKTsgLy8gbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG5cbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmxlbmd0aFNxKGQpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IucGVycGVuZGljdWxhcihhYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBza2lwIHRvIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGIgPSBzaW1wbGV4WzFdO1xuICAgICAgICAgICAgYyA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgIGFjID0gVmVjdG9yLnN1YnRyYWN0KGMsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQ1xuXG4gICAgICAgICAgICAvL2Fj7JmAIOyImOyngVxuICAgICAgICAgICAgYWNwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFjLCBhYyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJywgYSwgJ2InLCBiLCAnYycsIGMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FvJywgYW8sICdhYicsIGFiLCAnYWMnLCBhYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWNwZXJwJywgYWNwZXJwLCBhY3BlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdFByb2R1Y3QoYWNwZXJwLCBhbyknLCBWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSk7XG5cbiAgICAgICAgICAgIC8vIGFjIOyImOyngSDshKDrtoTsnbQgYeqwgCDsm5DsoJDsnYQg7Zal7ZWY64qUIOuwqe2WpSDrsJjrjIDtjrjsl5Ag7J6I6rOgXG4gICAgICAgICAgICAvLyDspoksIGFjIOyImOyngSDshKDrtoQg7JWI7Kq97JeQIOybkOygkOydtCDsnojsnLzrqbRcbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZCA9IGFjcGVycDsgLy8gbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW4nLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoRcbiAgICAgICAgICAgICAgICBhYnBlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYWIsIGFiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWJwZXJwJywgYWJwZXJwLCBhYnBlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFicGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWIg7IiY7KeBIOyEoOu2hOydtCDsm5DsoJAg67CY64yAIOuwqe2WpeydhCDtlqXtlZjqs6Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgLy8g7KaJLCDsm5DsoJDsnbQg7IK86rCB7ZiVIOyViOyXkCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykgPCAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaW1wbGV4WzBdID0gc2ltcGxleFsxXTsgLy8gc3dhcCBmaXJzdCBlbGVtZW50IChwb2ludCBDKVxuICAgICAgICAgICAgICAgIGQgPSBhYnBlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpbXBsZXhbMV0gPSBzaW1wbGV4WzJdOyAvLyBzd2FwIGVsZW1lbnQgaW4gdGhlIG1pZGRsZSAocG9pbnQgQilcbiAgICAgICAgICAgIC0taW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnZleEh1bGwocG9pbnRzKVxuICAgIHtcbiAgICAgICAgLy8gRmluZCB0aGUgcmlnaHQgbW9zdCBwb2ludCBvbiB0aGUgaHVsbFxuICAgICAgICB2YXIgaTAgPSAwO1xuICAgICAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgICAgIGkwID0gaTtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBodWxsID0gW107XG4gICAgICAgIHZhciBtID0gMDtcbiAgICAgICAgdmFyIGloID0gaTA7XG5cbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGh1bGxbbV0gPSBpaDtcblxuICAgICAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGllID09IGloKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHIgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBWZWN0b3IuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgICAgICBpZiAoYyA9PSAwICYmIHYubGVuZ3RoU3EoKSA+IHIubGVuZ3RoU3EoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtKys7XG4gICAgICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgICAgICBpZiAoaWUgPT0gaTApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgdmVydGljZXNcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2h1bGxbaV1dO1xuICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gobmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UG9pbnRzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG1pZHBvaW50KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigoYS54ICsgYi54KSAvIDIsIChhLnkgKyBiLnkpIC8gMik7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRlYnVnVmVydGljZXModmVydGljZXMpIHtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coaW5kZXgsIHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMScpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczEpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMicpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczIpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG59XG5cbmZ1bmN0aW9uIHN0cih2ZXJ0ZXgsIGlzRml4ZWQgPSBmYWxzZSkge1xuICAgIGlmIChpc0ZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYCgke3ZlcnRleC54fSwke3ZlcnRleC55fSlgO1xuICAgIH1cbiAgICByZXR1cm4gYCgke3ZlcnRleC54LnRvRml4ZWQoMil9LCR7dmVydGV4LnkudG9GaXhlZCgyKX0pYDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvR0pLLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi8uLi9zcmMvVmVjdG9yJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL3NyYy9IaXN0b3J5JztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9zcmMvZ2prL1NoYXBlJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vLi4vc3JjL2dqay9Db25zdHMnO1xuaW1wb3J0IFZlcnRpY2VzIGZyb20gJy4uLy4uL3NyYy9namsvVmVydGljZXMnO1xuaW1wb3J0IEdKSyBmcm9tICcuLi8uLi9zcmMvZ2prL0dKSyc7XG5pbXBvcnQgQ29udmV4SHVsbCBmcm9tICcuLi8uLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsJztcbmltcG9ydCBNaW5rb3dza2lEaWZmZXJlbmNlIGZyb20gJy4uLy4uL3NyYy9namsvTWlua293c2tpRGlmZmVyZW5jZSc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwiLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlXCI7XG5cblxuY29uc3QgVE9UQUwgPSAzMFxuICAgICwgSU5URVJWQUwgPSA2MDAwMDBcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFXG4gICAgLCBTVEFHRSA9IENvbnN0cy5TVEFHRVxuICAgICwgVE9QX0xFRlQgPSB7eDogMiwgeTogMn1cbiAgICAsIFRPUF9SSUdIVCA9IHt4OiAxNywgeTogMTd9XG4gICAgLCBSQURfVE9fREVHID0gMTgwIC8gTWF0aC5QSTtcblxuY29uc3QgdHJpYW5nbGVzID0gY3JlYXRlUG9seWdvbnMoMywgVE9UQUwpO1xuY29uc3QgcmVjdGFuZ2xlcyA9IGNyZWF0ZVBvbHlnb25zKDQsIFRPVEFMKTtcblxuLypjb25zdCB0cmlhbmdsZXMgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMywgNSksIG5ldyBWZWN0b3IoNiwgNCldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDQsIDExKSwgbmV3IFZlY3Rvcig0LCA1KSwgbmV3IFZlY3Rvcig5LCA5KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoMCwgLTEpLCBuZXcgVmVjdG9yKDMsIDEpLCBuZXcgVmVjdG9yKDEsIDMpXSxcbiAgICBbbmV3IFZlY3RvcigxMCwgMTMpLCBuZXcgVmVjdG9yKDExLCAxNCksIG5ldyBWZWN0b3IoMTQsIDE1KV0sXG5dO1xuY29uc3QgcmVjdGFuZ2xlcyA9IFtcbiAgICAvLyBbbmV3IFZlY3Rvcig4LCAxKSwgbmV3IFZlY3Rvcig4LCA1KSwgbmV3IFZlY3RvcigxMSwgNSksIG5ldyBWZWN0b3IoMTEsIDEpXSxcbiAgICAvLyBbbmV3IFZlY3Rvcig1LCA3KSwgbmV3IFZlY3Rvcig3LCAzKSwgbmV3IFZlY3RvcigxMCwgMiksIG5ldyBWZWN0b3IoMTIsIDcpXSxcbiAgICAvLyBbbmV3IFZlY3RvcigyLCAtMiksIG5ldyBWZWN0b3IoNSwgLTEpLCBuZXcgVmVjdG9yKDQsIDIpLCBuZXcgVmVjdG9yKDEsIDEpXSxcbiAgICBbbmV3IFZlY3Rvcig5LCA4KSwgbmV3IFZlY3RvcigzLCAxMiksIG5ldyBWZWN0b3IoNCwgMTUpLCBuZXcgVmVjdG9yKDE0LCAxNSldLFxuXTsqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMucmVuZGVyZXIudmlldztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICB0aGlzLmtleVVwTGlzdGVuZXIgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcExpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Q29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoc2hhcGUpO1xuICAgICAgICAgICAgc2hhcGUuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNoYXBlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnNoYXBlcyA9IFtdO1xuXG4gICAgICAgIGlmICghdGhpcy5taW5rb3dza2kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWlua293c2tpKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCBpbmRleDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0cmlhbmdsZXMubGVuZ3RoKVxuICAgICAgICAgICAgLCBpbmRleDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZWN0YW5nbGVzLmxlbmd0aClcbiAgICAgICAgICAgICwgdmVydGljZXMxID0gbmV3IFZlcnRpY2VzKHRyaWFuZ2xlc1tpbmRleDFdKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczIgPSBuZXcgVmVydGljZXMocmVjdGFuZ2xlc1tpbmRleDJdKTtcblxuICAgICAgICB2ZXJ0aWNlczEubXVsdGlwbHkoU0NBTEUpO1xuICAgICAgICB2ZXJ0aWNlczIubXVsdGlwbHkoU0NBTEUpO1xuXG4gICAgICAgIGNvbnN0IHNoYXBlMSA9IG5ldyBTaGFwZSh2ZXJ0aWNlczEudmVydGljZXMsIFNDQUxFKVxuICAgICAgICAgICAgLCBzaGFwZTIgPSBuZXcgU2hhcGUodmVydGljZXMyLnZlcnRpY2VzLCBTQ0FMRSk7XG4gICAgICAgIHRoaXMubWlua293c2tpID0gbmV3IE1pbmtvd3NraURpZmZlcmVuY2UodmVydGljZXMxLnZlcnRpY2VzLCB2ZXJ0aWNlczIudmVydGljZXMpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS54ID0gKFNUQUdFLndpZHRoIC8gMykgKiAyO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS55ID0gKFNUQUdFLmhlaWdodCAvIDMpICogMjtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKHNoYXBlMSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2hhcGUyKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pbmtvd3NraSk7XG5cbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZTEpO1xuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlMik7XG5cbiAgICAgICAgdmVydGljZXMxLmRpdmlkZShTQ0FMRSk7XG4gICAgICAgIHZlcnRpY2VzMi5kaXZpZGUoU0NBTEUpO1xuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICAgICAgICBjb25zdCBjb2xsaXNpb24gPSBHSksuY2hlY2tDb2xsaXNpb24odmVydGljZXMxLnZlcnRpY2VzLCB2ZXJ0aWNlczIudmVydGljZXMsIGhpc3RvcnkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ09MTElTSU9OIFsnLCBjb2xsaXNpb24sICddJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdISVNUT1JZIFsnLCBoaXN0b3J5LCAnXScpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGxheUNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXlDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5kaXNwbGF5Q29sbGlzaW9uLCBJTlRFUlZBTCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge31cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgICBvbktleVVwKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIOuRkOuyoe2EsCDsgqzsnbTqsIEg6rWs7ZWY6riwXG4gKiBAcGFyYW0gYVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldEFuZ2xlKGEsIGIpIHtcbiAgICBhID0gbmV3IFZlY3RvcihhLngsIGEueSkubm9ybSgpO1xuICAgIGIgPSBuZXcgVmVjdG9yKGIueCwgYi55KS5ub3JtKCk7XG4gICAgY29uc3QgcmFkaWFuID0gTWF0aC5hY29zKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGIpKTtcbiAgICByZXR1cm4gcmFkaWFuICogUkFEX1RPX0RFRztcbn1cblxuXG4vKipcbiAqIOuenOuNpOycvOuhnCDsooztkZzrpbwg7IOd7ISx7ZWY6rOgIGNvbnZleCBodWxsIOydhCDrp4zrk6TrqbQgT0tcbiAqIEBwYXJhbSBwb2x5Z29uXG4gKiBAcGFyYW0gdG90YWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9seWdvbnMocG9seWdvbiwgdG90YWwpIHtcbiAgICBsZXQgdmVydGljZXM7XG4gICAgY29uc3QgcG9seWdvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9seWdvbjsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZWN0b3IucmFuZG9taXplKFRPUF9MRUZULCBUT1BfUklHSFQpO1xuICAgICAgICAgICAgdmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gcG9seWdvbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gQ29udmV4SHVsbC5nZW5lcmF0ZSh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSBjb252ZXhIdWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcG9seWdvbnMucHVzaCh2ZXJ0aWNlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvbHlnb25zO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9namsvVGVzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
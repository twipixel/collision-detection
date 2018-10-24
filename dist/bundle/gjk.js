webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(358);
	
	var _Test2 = _interopRequireDefault(_Test);
	
	var _KeyCode = __webpack_require__(332);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _Mouse = __webpack_require__(333);
	
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

/***/ 328:
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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _PastelColor = __webpack_require__(330);
	
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
	        _this.color = color;
	        _this.alpha = alpha;
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

/***/ 330:
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

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://www.crocus.co.kr/1288
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Vector = __webpack_require__(328);
	
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

/***/ 333:
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

/***/ 338:
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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Consts = __webpack_require__(340);
	
	var _Consts2 = _interopRequireDefault(_Consts);
	
	var _PastelColor = __webpack_require__(330);
	
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

/***/ 340:
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

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Point = __webpack_require__(329);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _ConvexHull = __webpack_require__(331);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _PastelColor = __webpack_require__(330);
	
	var _PastelColor2 = _interopRequireDefault(_PastelColor);
	
	var _Consts = __webpack_require__(340);
	
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

/***/ 344:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * Copyright (c) 2010-2016 William Bittle  http://www.dyn4j.org/
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without modification, are permitted
	 * provided that the following conditions are met:
	 *
	 *   * Redistributions of source code must retain the above copyright notice, this list of conditions
	 *     and the following disclaimer.
	 *   * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
	 *     and the following disclaimer in the documentation and/or other materials provided with the
	 *     distribution.
	 *   * Neither the name of dyn4j nor the names of its contributors may be used to endorse or
	 *     promote products derived from this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
	 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
	 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
	 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
	 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
	 * OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	var Epsilon = function () {
	    function Epsilon() {
	        _classCallCheck(this, Epsilon);
	    }
	
	    _createClass(Epsilon, null, [{
	        key: "compute",
	        value: function compute() {
	            var e = 0.5;
	            while (1.0 + e > 1.0) {
	                e *= 0.5;
	            }
	            return e;
	        }
	    }, {
	        key: "E",
	        get: function get() {
	            return Epsilon.compute();
	        }
	    }]);
	
	    return Epsilon;
	}();
	
	exports.default = Epsilon;

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Epsilon = __webpack_require__(344);
	
	var _Epsilon2 = _interopRequireDefault(_Epsilon);
	
	var _MinkowskiSumPoint = __webpack_require__(357);
	
	var _MinkowskiSumPoint2 = _interopRequireDefault(_MinkowskiSumPoint);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * GJK Algorithm (Gilbert-Johnson-Keerthi)
	 * https://github.com/kroitor/gjk.c
	 * http://www.dyn4j.org/2010/04/gjk-gilbert-johnson-keerthi/#gjk-top
	 * https://www.haroldserrano.com/blog/visualizing-the-gjk-collision-algorithm
	 * https://github.com/juhl/collision-detection-2d
	 */
	
	var ORIGIN = new _Vector2.default(0, 0),
	    DEFAULT_MAX_ITERATIONS = 30,
	    TOLERANCE = Math.sqrt(_Epsilon2.default.E);
	
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
	    }, {
	        key: 'support2',
	        value: function support2(vertices1, vertices2, direction) {
	            // get furthest point of first body along an arbitrary direction
	            var i = this.indexOfFurthestPoint(vertices1, direction);
	
	            // get furthest point of second body along the opposite direction
	            var j = this.indexOfFurthestPoint(vertices2, _Vector2.default.negate(direction));
	
	            console.log('d:' + str(direction, true), 'i:' + str(vertices1[i]));
	            console.log('d:' + str(_Vector2.default.negate(direction), true), 'j:' + str(vertices2[j]));
	            console.log('support(' + str(_Vector2.default.subtract(vertices1[i], vertices2[j])) + ')');
	            return new _MinkowskiSumPoint2.default(vertices1[i], vertices2[j]);
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
	        key: 'distance',
	        value: function distance(vertices1, vertices2) {
	            var separation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	            var a = void 0,
	                b = void 0,
	                c = void 0,
	                d = void 0,
	                p1 = void 0,
	                p2 = void 0,
	                p1Mag = void 0,
	                p2Mag = void 0,
	                projection = void 0;
	
	            // 두 폴리곤 중심 좌표를 통해서 방향을 구합니다.
	            var c1 = this.averagePoint(vertices1); // not a CoG but
	            var c2 = this.averagePoint(vertices2); // it's ok for GJK )
	
	            // initial direction from the center of 1st body to the center of 2nd body
	            d = _Vector2.default.subtract(c1, c2);
	
	            if (d.isZero()) {
	                return false;
	            }
	
	            a = this.support2(vertices1, vertices2, d);
	            b = this.support2(vertices1, vertices2, d.invert());
	
	            d = GJK.getPointOnSegmentClosestToPoint(ORIGIN, a.point, b.point);
	
	            for (var i = 0; i < DEFAULT_MAX_ITERATIONS; i++) {
	                d = d.invert();
	
	                if (d.lengthSq() <= TOLERANCE) {
	                    // if the closest point is the origin then the shapes are not separated
	                    return false;
	                }
	
	                c = this.support2(vertices1, vertices2, d);
	
	                if (GJK.containsOrigin(a.point, b.point, c.point)) {
	                    // if it does then return false;
	                    return false;
	                }
	
	                // see if the new point is far enough along d
	                projection = c.point.dot(d);
	
	                if (projection - a.point.dot(d) < TOLERANCE) {
	                    // then the new point we just made is not far enough
	                    // in the direction of n so we can stop now
	                    // normalize d
	                    d.normalize();
	
	                    separation.normal = d;
	                    separation.distance = -c.point.dot(d);
	                    GJK.findClosestPoints(a, b, separation);
	                    return true;
	                }
	
	                p1 = GJK.getPointOnSegmentClosestToPoint(ORIGIN, a.point, c.point);
	                p2 = GJK.getPointOnSegmentClosestToPoint(ORIGIN, c.point, b.point);
	                p1Mag = p1.lengthSq();
	                p2Mag = p2.lengthSq();
	
	                if (p1Mag <= TOLERANCE) {
	                    d.normalize();
	                    separation.distance = p1.normalize();
	                    separation.normal = d;
	                    GJK.findClosestPoints(a, c, separation);
	                    return true;
	                } else if (p2Mag <= TOLERANCE) {
	                    d.normalize();
	                    separation.distance = p2.normalize();
	                    separation.normal = d;
	                    GJK.findClosestPoints(c, b, separation);
	                    return true;
	                }
	
	                if (p1Mag < p2Mag) {
	                    b = c;
	                    d = p1;
	                } else {
	                    a = c;
	                    d = p2;
	                }
	            }
	
	            d.normalize();
	            separation.normal = d;
	            separation.distance = -c.point.dot(d);
	            GJK.findClosestPoints(a, b, separation);
	            return true;
	        }
	
	        /**
	         * Returns true if the origin is within the triangle given by
	         * a, b, and c.
	         * <p>
	         * If the origin lies on the same side of all the points then we
	         * know that the origin is in the triangle.
	         * <pre> sign(location(origin, a, b)) == sign(location(origin, b, c)) == sign(location(origin, c, a))</pre>
	         * The {@link Segment#getLocation(Vector2, Vector2, Vector2)} method
	         * can be simplified because we are using the origin as the search point:
	         * <pre> = (b.x - a.x) * (origin.y - a.y) - (origin.x - a.x) * (b.y - a.y)
	         * = (b.x - a.x) * (-a.y) - (-a.x) * (b.y - a.y)
	         * = -a.y * b.x + a.y * a.x + a.x * b.y - a.x * a.y
	         * = -a.y * b.x + a.x * b.y
	         * = a.x * b.y - a.y * b.x
	         * = a.cross(b)</pre>
	         * @param a the first point
	         * @param b the second point
	         * @param c the third point
	         * @return boolean
	         */
	
	    }, {
	        key: 'containsOrigin',
	        value: function containsOrigin(a, b, c) {
	            var sa = a.cross(b),
	                sb = b.cross(c),
	                sc = c.cross(a);
	            return sa * sb > 0 && sa * sc > 0;
	        }
	
	        /**
	         * Finds the closest points on A and B given the termination simplex and places
	         * them into point1 and point2 of the given {@link Separation} object.
	         * <p>
	         * The support points used to obtain a and b are not good enough since the support
	         * methods of {@link Convex} {@link Shape}s only return the farthest <em>vertex</em>, not
	         * necessarily the farthest point.
	         * @param a the first simplex point
	         * @param b the second simplex point
	         * @param separation the {@link Separation} object to populate
	         * @see <a href="http://www.dyn4j.org/2010/04/gjk-distance-closest-points/" target="_blank">GJK - Distance &amp; Closest Points</a>
	         */
	
	    }, {
	        key: 'findClosestPoints',
	        value: function findClosestPoints(a, b, separation) {
	            var p1 = new _Vector2.default(),
	                p2 = new _Vector2.default(),
	                l = _Vector2.default.subtract(a.point, b.point);
	
	            if (l.isZero()) {
	                p1.set(a.supportPoint1);
	                p2.set(a.supportPoint2);
	            } else {
	                var ll = l.dot(l),
	                    l2 = -l.dot(a.point) / ll,
	                    l1 = 1 - l2;
	
	                // check if either lambda1 or lambda2 is less than zero
	                if (l1 < 0) {
	                    // if lambda1 is less than zero then that means that
	                    // the support points of the Minkowski point B are
	                    // the closest points
	                    p1.set(b.supportPoint1);
	                    p2.set(b.supportPoint2);
	                } else if (l2 < 0) {
	                    // if lambda2 is less than zero then that means that
	                    // the support points of the Minkowski point A are
	                    // the closest points
	                    p1.set(a.supportPoint1);
	                    p2.set(a.supportPoint2);
	                } else {
	                    // compute the closest points using lambda1 and lambda2
	                    // this is the expanded version of
	                    // p1 = a.p1.multiply(l1).add(b.p1.multiply(l2));
	                    // p2 = a.p2.multiply(l1).add(b.p2.multiply(l2));
	                    p1.x = a.supportPoint1.x * l1 + b.supportPoint1.x * l2;
	                    p1.y = a.supportPoint1.y * l1 + b.supportPoint1.y * l2;
	                    p2.x = a.supportPoint2.x * l1 + b.supportPoint2.x * l2;
	                    p2.y = a.supportPoint2.y * l1 + b.supportPoint2.y * l2;
	                }
	            }
	            // set the new points in the separation object
	            separation.point1 = p1;
	            separation.point2 = p2;
	        }
	    }, {
	        key: 'closestPointToOrigin',
	        value: function closestPointToOrigin(a, b) {
	            var ab = a.to(b),
	                ao = a.to(new _Vector2.default()),
	                projAoOntoAb = ao.dot(ab),
	                lengthSquared = ab.dot(ab),
	                t = projAoOntoAb / lengthSquared,
	                closetPoint = _Vector2.default.multiplyScalar(ab, t).add(a),
	                d = closetPoint.magnitude();
	
	            return { point: closetPoint, depth: d };
	        }
	
	        /**
	         * Returns the point on the given line segment closest to the given point.
	         * <p>
	         * If the point closest to the given point is on the line created by the
	         * given line segment, but is not on the line segment then either of the segments
	         * end points will be returned.
	         * <p>
	         * Assumes all points are in world space.
	         * @see Segment#getPointOnLineClosestToPoint(Vector2, Vector2, Vector2)
	         * @param point the point
	         * @param linePoint1 the first point of the line
	         * @param linePoint2 the second point of the line
	         * @return {@link Vector2}
	         * @throws NullPointerException if point, linePoint1, or linePoint2 is null
	         */
	
	    }, {
	        key: 'getPointOnSegmentClosestToPoint',
	        value: function getPointOnSegmentClosestToPoint(point, linePoint1, linePoint2) {
	            // create a vector from the point to the first line point
	            var p1ToP = _Vector2.default.subtract(point, linePoint1)
	            // create a vector representing the line
	            ,
	                line = _Vector2.default.subtract(linePoint2, linePoint1)
	            // get the length squared of the line
	            ,
	                ab2 = line.dot(line),
	                ap_ab = p1ToP.dot(line);
	
	            if (ab2 <= TOLERANCE) {
	                return linePoint1.clone();
	            }
	
	            var t = ap_ab / ab2;
	            t = clamp(t, 0.0, 1.0);
	            return line.multiplyScalar(t).add(linePoint1);
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
	
	
	function clamp(value, min, max) {
	    if (value <= max && value >= min) {
	        return value;
	    } else if (max < value) {
	        return max;
	    } else {
	        return min;
	    }
	}
	
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

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MinkowskiSumPoint = function MinkowskiSumPoint(supportPoint1, supportPoint2) {
	    _classCallCheck(this, MinkowskiSumPoint);
	
	    this.supportPoint1 = supportPoint1;
	    this.supportPoint2 = supportPoint2;
	    this.point = _Vector2.default.subtract(supportPoint1, supportPoint2);
	};
	
	exports.default = MinkowskiSumPoint;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _History = __webpack_require__(338);
	
	var _History2 = _interopRequireDefault(_History);
	
	var _Shape = __webpack_require__(339);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Consts = __webpack_require__(340);
	
	var _Consts2 = _interopRequireDefault(_Consts);
	
	var _Vertices = __webpack_require__(341);
	
	var _Vertices2 = _interopRequireDefault(_Vertices);
	
	var _GJK = __webpack_require__(356);
	
	var _GJK2 = _interopRequireDefault(_GJK);
	
	var _ConvexHull = __webpack_require__(331);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _MinkowskiDifference = __webpack_require__(342);
	
	var _MinkowskiDifference2 = _interopRequireDefault(_MinkowskiDifference);
	
	var _KeyCode = __webpack_require__(332);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2dqay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9Qb2ludC5qcz9mMDVhKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanM/OTZmNSoqIiwid2VicGFjazovLy8uL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwuanM/ZjI5NioqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcz85MjQxKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hpc3RvcnkuanM/NTg3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL1NoYXBlLmpzPzVhZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9Db25zdHMuanM/MjEwNCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL1ZlcnRpY2VzLmpzP2NkNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlLmpzP2MzNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0Vwc2lsb24uanM/NmUxMSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0dKSy5qcz81MGMwIiwid2VicGFjazovLy8uL3NyYy9namsvTWlua293c2tpU3VtUG9pbnQuanM/MTlkMCIsIndlYnBhY2s6Ly8vLi90ZXN0L2dqay9UZXN0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiTW91c2UiLCJDb250YWluZXIiLCJhZGRDaGlsZCIsIlRlc3QiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwibXMiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJpbm5lckhlaWdodCIsInN0eWxlIiwicmVzaXplIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidGVtcCIsInZlYzIiLCJkb3QiLCJjb2VmZiIsImF0YW4yIiwiaG9yaXpvbnRhbEFuZ2xlIiwidmVydGljYWxBbmdsZSIsImhvcml6b250YWxBbmdsZURlZyIsImFuZ2xlIiwibngiLCJjb3MiLCJzaW4iLCJueSIsInJvdGF0ZSIsInJvdGF0aW9uIiwicm90YXRlVG8iLCJyb3RhdGVCeSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNxcnQiLCJkaXN0YW5jZVNxIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImxlbmd0aFNxIiwiYSIsImIiLCJ2IiwiY2xvbmUiLCJyZXQiLCJtdWx0aXBseVNjYWxhciIsImMiLCJyIiwiYWMiLCJiYyIsInZlYzEiLCJ0byIsImFkZCIsIlBvaW50IiwicmFkaXVzIiwiY29sb3IiLCJQYXN0ZWxDb2xvciIsImdlbmVyYXRlIiwiaGV4IiwiYWxwaGEiLCJidXR0b25Nb2RlIiwiaW50ZXJhY3RpdmUiLCJjbGVhciIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwibHQiLCJyYiIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiZnJvbU9iamVjdCIsIkdyYXBoaWNzIiwiaEJhc2UiLCJuZXdIIiwibmV3TCIsIkhTTHRvUkdCIiwiZyIsImhzbCIsInJnYiIsIlJHQnRvSGV4IiwiaGV4U2hhcCIsImgiLCJzIiwibCIsInJkIiwiaHVlVG9SR0IiLCJtIiwibiIsIm8iLCJxIiwicCIsInByZWZpeCIsInRvU3RyaW5nIiwiQ29udmV4SHVsbCIsInBvaW50cyIsInN0YWNrIiwic29ydCIsInNvcnRMb3dlcllYIiwiYmFzZVBvaW50IiwiaSIsInJlbGF0aXZlUG9zaXRpb24iLCJzb3J0Q2N3IiwicHVzaCIsIm5leHQiLCJmaXJzdCIsInNlY29uZCIsInBvcCIsImlzQ2N3IiwiY29udmV4SHVsbCIsImluZGV4IiwicG9pbnQiLCJwb2ludEEiLCJwb2ludEIiLCJwb2ludEMiLCJ0cmlhbmdsZUFyZWEiLCJkZWJ1Z0FycmF5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvbnZleEh1bGwiLCJpMCIsIngwIiwiaHVsbCIsImloIiwiaWUiLCJqIiwic3ViIiwiY3Jvc3MiLCJsZW5ndGhzcSIsIm5ld1BvaW50cyIsInByZXZQb2ludCIsImN1cnJlbnRQb2ludCIsInByZXZUaW1lIiwiY3VycmVudFRpbWUiLCJkaWZmWCIsImRpZmZZIiwicGx1Z2lucyIsImludGVyYWN0aW9uIiwibW91c2UiLCJwb2ludGVyIiwidmFsdWUiLCJfcmVuZGVyZXIiLCJfbW91c2UiLCJERVNLVE9QX01PVVNFIiwiZ2xvYmFsIiwiY3VycmVudEN1cnNvclN0eWxlIiwiRGF0ZSIsImdldFRpbWUiLCJIaXN0b3J5Iiwic2ltcGxleCIsIkFycmF5IiwiZGlyZWN0aW9ucyIsIkZPTlRfU0laRSIsIlNDQUxFIiwiQ29uc3RzIiwiU2hhcGUiLCJ2ZXJ0aWNlcyIsImxpbmVDb2xvciIsImxpbmVBbHBoYSIsInRleHRDb2xvciIsInJlcGxhY2UiLCJncmFwaGljcyIsImxhYmVscyIsImNyZWF0ZUxhYmVsIiwiZHJhdyIsInRleHQiLCJUZXh0IiwiYWxpZ24iLCJmb250IiwiZmlsbCIsInZpc2libGUiLCJvcmlnaW4iLCJsaW5lU3R5bGUiLCJtb3ZlVG8iLCJmb3JFYWNoIiwidmVydGV4IiwibGluZVRvIiwibGFiZWwiLCJkaXZpZGVTY2FsYXIiLCJyZW1vdmVDaGlsZCIsIlZlcnRpY2VzIiwiU1RBR0UiLCJGT05UX0NPTE9SIiwiQVhFU19MSU5FX0NPTE9SIiwiQ09OVkVYX0hVTExfTElORV9DT0xPUiIsIk1pbmtvd3NraURpZmZlcmVuY2UiLCJ2ZXJ0aWNlczEiLCJ2ZXJ0aWNlczIiLCJnZXRWZXJ0aWNlcyIsInRleHRzIiwiZHJhd0F4ZXMiLCJkcmF3VmV0aWNlcyIsImRyYXdQb2x5Z29uIiwiZHJhd1RleHQiLCJodyIsImhoIiwiRXBzaWxvbiIsImUiLCJjb21wdXRlIiwiT1JJR0lOIiwiREVGQVVMVF9NQVhfSVRFUkFUSU9OUyIsIlRPTEVSQU5DRSIsIkUiLCJHSksiLCJhdmciLCJjb3VudCIsIm1heFByb2R1Y3QiLCJkb3RQcm9kdWN0IiwicHJvZHVjdCIsImluZGV4T2ZGdXJ0aGVzdFBvaW50IiwibmVnYXRlIiwic3RyIiwiTWlua293c2tpU3VtUG9pbnQiLCJoaXN0b3J5IiwiaXRlckNvdW50IiwiZCIsImFvIiwiYWIiLCJhYnBlcnAiLCJhY3BlcnAiLCJwb3NpdGlvbjEiLCJhdmVyYWdlUG9pbnQiLCJwb3NpdGlvbjIiLCJzdXBwb3J0Iiwic2V0SGlzdG9yeSIsInRyaXBsZVByb2R1Y3QiLCJwZXJwZW5kaWN1bGFyIiwibm9ybSIsInNlcGFyYXRpb24iLCJwMSIsInAyIiwicDFNYWciLCJwMk1hZyIsInByb2plY3Rpb24iLCJjMSIsImMyIiwiaXNaZXJvIiwic3VwcG9ydDIiLCJpbnZlcnQiLCJnZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50IiwiY29udGFpbnNPcmlnaW4iLCJub3JtYWwiLCJkaXN0YW5jZSIsImZpbmRDbG9zZXN0UG9pbnRzIiwic2EiLCJzYiIsInNjIiwic2V0Iiwic3VwcG9ydFBvaW50MSIsInN1cHBvcnRQb2ludDIiLCJsbCIsImwyIiwibDEiLCJwb2ludDEiLCJwb2ludDIiLCJwcm9qQW9PbnRvQWIiLCJsZW5ndGhTcXVhcmVkIiwidCIsImNsb3NldFBvaW50IiwibWFnbml0dWRlIiwiZGVwdGgiLCJsaW5lUG9pbnQxIiwibGluZVBvaW50MiIsInAxVG9QIiwibGluZSIsImFiMiIsImFwX2FiIiwiY2xhbXAiLCJkZWJ1Z1ZlcnRpY2VzIiwiY29uc29sZVZlcnRpY2VzIiwiaXNGaXhlZCIsIlRPVEFMIiwiSU5URVJWQUwiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIlJBRF9UT19ERUciLCJ0cmlhbmdsZXMiLCJjcmVhdGVQb2x5Z29ucyIsInJlY3RhbmdsZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJzaGFwZXMiLCJrZXlVcExpc3RlbmVyIiwib25LZXlVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd25MaXN0ZW5lciIsIm9uTW91c2VEb3duIiwib24iLCJjaGVja0NvbGxpc2lvbiIsInNoYXBlIiwiZGVzdHJveSIsIm1pbmtvd3NraSIsImluZGV4MSIsImluZGV4MiIsIm11bHRpcGx5Iiwic2hhcGUxIiwic2hhcGUyIiwiY29sbGlzaW9uIiwiaW50ZXJ2YWxJZCIsImNsZWFySW50ZXJ2YWwiLCJkaXNwbGF5Q29sbGlzaW9uIiwiZGlzcGxheSIsInNldEludGVydmFsIiwiaGl0QXJlYSIsIlJlY3RhbmdsZSIsImtleUNvZGUiLCJLZXlDb2RlIiwiU1BBQ0UiLCJnZXRBbmdsZSIsInJhZGlhbiIsImFjb3MiLCJwb2x5Z29uIiwidG90YWwiLCJwb2x5Z29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVDLGNBQVk7QUFDVEEsWUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGFBQU1DLE9BQU8sSUFBSUMs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Mk8sSUFBckIsRUFBSjtBQUNBekwsU0FBSSxJQUFJdEQsZ0JBQUosQ0FBV3NELEVBQUVuRCxDQUFiLEVBQWdCbUQsRUFBRWxELENBQWxCLEVBQXFCMk8sSUFBckIsRUFBSjtBQUNBLFNBQU1tRixTQUFTNVUsS0FBSzZVLElBQUwsQ0FBVW5VLGlCQUFPMk4sVUFBUCxDQUFrQnRLLENBQWxCLEVBQXFCQyxDQUFyQixDQUFWLENBQWY7QUFDQSxZQUFPNFEsU0FBU25DLFVBQWhCO0FBQ0g7O0FBR0Q7Ozs7O0FBS0EsVUFBU0UsY0FBVCxDQUF3Qm1DLE9BQXhCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUNwQyxTQUFJN0osaUJBQUo7QUFDQSxTQUFNOEosV0FBVyxFQUFqQjs7QUFFQSxVQUFLLElBQUl0TixJQUFJLENBQWIsRUFBZ0JBLElBQUlxTixLQUFwQixFQUEyQnJOLEdBQTNCLEVBQWdDO0FBQzVCd0Qsb0JBQVcsRUFBWDs7QUFFQSxjQUFLLElBQUkvQixJQUFJLENBQWIsRUFBZ0JBLElBQUkyTCxPQUFwQixFQUE2QjNMLEdBQTdCLEVBQWtDO0FBQzlCLGlCQUFNa0QsU0FBUzNMLGlCQUFPa0YsU0FBUCxDQUFpQjJNLFFBQWpCLEVBQTJCQyxTQUEzQixDQUFmO0FBQ0F0SCxzQkFBU3JELElBQVQsQ0FBY3dFLE1BQWQ7O0FBRUEsaUJBQUlsRCxNQUFNMkwsVUFBVSxDQUFwQixFQUF1QjtBQUNuQixxQkFBTTNNLGFBQWFmLHFCQUFXcEMsUUFBWCxDQUFvQmtHLFFBQXBCLENBQW5CO0FBQ0FBLDRCQUFXL0MsVUFBWDtBQUNIO0FBQ0o7O0FBRUQ2TSxrQkFBU25OLElBQVQsQ0FBY3FELFFBQWQ7QUFDSDs7QUFFRCxZQUFPOEosUUFBUDtBQUNILEUiLCJmaWxlIjoiZ2prLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi8uLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvTW91c2VcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiAgICB9XG59KCkpO1xuXG5sZXQgY2FudmFzLCByZW5kZXJlciwgc3RhZ2UsIHRlc3QsIGNvbnRhaW5lcjtcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHtcbiAgICAgICAgICAgIHZpZXc6IGNhbnZhcyxcbiAgICAgICAgICAgIGF1dG9SZXNpemU6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MzMzODNEXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1vdXNlLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgLy8g7JyE7LmY6rCAIOygleyImOqwgCDslYTri5Dqsr3smrAg7Z2Q66a/7ZWY6rKMIOuztOydtOuKlCDrrLjsoJzqsIAg7J6I7Ja0XG4gICAgICAgIC8vIOugjOuNlOufrOydmCDsnITsuZjrpbwg7KCV7IiY66GcIOyXsOyCsOuQoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cbiAgICAgICAgLy9yZW5kZXJlci5yb3VuZFBpeGVscyA9IHRydWU7XG5cbiAgICAgICAgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGVzdCA9IG5ldyBUZXN0KHJlbmRlcmVyKTtcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGVzdCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb29wKCk7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMb29wIChtcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShtcyk7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGVMb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZShtcykge1xuICAgICAgICB0ZXN0LnVwZGF0ZSgpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpO1xuICAgIH1cblxuICAgIHJlc2l6ZVdpbmRvdygpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvKipcbiAgICAgICAgICog7LqU67KE7IqkIOyCrOydtOymiOyZgCDrlJTsiqTtlIzroIjsnbQg7IKs7J207KaIIOyEpOyglVxuICAgICAgICAgKiDroIjti7Drgpgg6re4656Y7ZS9IOyngOybkCDsvZTrk5xcbiAgICAgICAgICovXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQSVhJIHJlbmRlcmVyIOumrOyCrOydtOymiFxuICAgICAgICAgKiBQSVhJIOyXkOqyjCB2aWV3cG9ydCDsgqzsnbTspogg67OA6rK9IOyVjOumvFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICB0ZXN0LnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9namsvaW5kZXguanMiLCJcblxuY29uc3QgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG4gICAgcmV0dXJuIHJhZCAqIGRlZ3JlZXM7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMycmFkaWFuIChkZWcpIHtcbiAgICByZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cblxuXG4vKipcbiAqIFZpY3Rvci5qc+ulvCBFUzbroZwg67OA7ZmY7ZWY7JesIOyCrOyaqe2VmOqzoCDsnojsirXri4jri6QuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF4a3VlbmcvdmljdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvclxue1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tQXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21BcnJheShhcnIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tT2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBWZWN0b3IoNDIsIDEzMzcpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6MTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMSwgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdWJ0cmFjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgIH1cblxuXG4gICAgZWRnZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGVkZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QoYSwgYik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAyMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWSgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSB4IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIHkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVZKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgYSBheGlzIHZhbHVlcyBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLyBiLngsIGEueSAvIGIueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFgoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WCgpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRZKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFkoKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydCgpXG4gICAge1xuICAgICAgICB0aGlzLmludmVydFgoKTtcbiAgICAgICAgdGhpcy5pbnZlcnRZKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG5lZ2F0ZSh2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCB2ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIHYueCA9IC12ZWMueDtcbiAgICAgICAgdi55ID0gLXZlYy55O1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG11bHRpcGx5U2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiBzY2FsYXIsIHZlY3Rvci55ICogc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGVTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAvIHNjYWxhciwgdmVjdG9yLnkgLyBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKDkwIOuPhCDtmozsoIQpXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gLXZlYy55O1xuICAgICAgICBjbG9uZS55ID0gdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICgtOTAg64+EIO2ajOyghClcbiAgICAgKi9cbiAgICByZXR1cm5QZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueSwgLXRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmV0dXJuUGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuyhOumvFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlKHZlYywgbGVuZ3RoKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgICAgIGlmIChsZW5ndGhTcSA+IGxlbmd0aCAqIGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0Lm11bHRpcGx5U2NhbGFyKGxlbmd0aCAvIE1hdGguc3FydChsZW5ndGhTcSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG5vcm1hbGl6ZSgpXG4gICAge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZpZGUobmV3IFZlY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbm9ybSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBhYnNvbHV0ZSB2ZWN0b3IgYXhpcyBpcyBncmVhdGVyIHRoYW4gYG1heGAsIG11bHRpcGxpZXMgdGhlIGF4aXMgYnkgYGZhY3RvcmBcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgYm90aCB4IGFuZCB5IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGltaXQobWF4LCBmYWN0b3IpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9taXplcyBib3RoIHZlY3RvciBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODBgKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSwgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB0aGlzLnggPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIGxlZnQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0TGVmdEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICBsZWZ0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gLXRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgcmlnaHQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtAbGluayBWZWN0b3IyfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldFJpZ2h0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIHJpZ2h0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gICAgICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJpcGxlX3Byb2R1Y3QjVmVjdG9yX3RyaXBsZV9wcm9kdWN0XG4gICAgICog7IS46re466i87Yq47JeQ7IScIOybkOygkOycvOuhnCDtlqXtlZjripQg67Cp7Zal7J2EIOywvuydhCDrlYwg7IKs7JqpXG4gICAgICovXG4gICAgc3RhdGljIHRyaXBsZVByb2R1Y3QoYSwgYiwgYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGNvbnN0IGFjID0gYS54ICogYy54ICsgYS55ICogYy55ICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgICAgICwgYmMgPSBiLnggKiBjLnggKyBiLnkgKiBjLnk7ICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuXG4gICAgICAgIC8vIHBlcmZvcm0gYiAqIGEuZG90KGMpIC0gYSAqIGIuZG90KGMpXG4gICAgICAgIHIueCA9IGIueCAqIGFjIC0gYS54ICogYmM7XG4gICAgICAgIHIueSA9IGIueSAqIGFjIC0gYS55ICogYmM7XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBwcm9qZWN0T250byh2ZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgICAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICAgICAgdGhpcy55ID0gY29lZmYgKiB2ZWMyLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ISg7ZiVIOuztOqwhFxuICAgICAqIGh0dHA6Ly9kZXZlbG9wdWcuYmxvZ3Nwb3QuY29tLzIwMTQvMDkvdW5pdHktdmVjdG9yLWxlcnAuaHRtbFxuICAgICAqIEBwYXJhbSB2ZWMxXG4gICAgICogQHBhcmFtIHZlYzJcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyBsZXJwKHZlYzEsIHZlYzIsIHRvKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMxLCAxIC0gdG8pLCBWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMiwgdG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsl63siJhcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmNwKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxIC8gdmVjdG9yLngsIDEgLyB2ZWN0b3IueSk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgYW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICBhbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGVEZWcoKTtcbiAgICB9XG5cblxuICAgIGRpcmVjdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZShhbmdsZSlcbiAgICB7XG4gICAgICAgIHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcm90YXRlRGVnKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgYW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUbyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyb3RhdGlvbi10aGlzLmFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG9EZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnkocm90YXRpb24pXG4gICAge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnlEZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB2ZWMueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFkgYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSAtIHZlYy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGVTcXVhcmVkKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VTcSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVNxKHZlYylcbiAgICB7XG4gICAgICAgIHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG4gICAgICAgICAgICBkeSA9IHRoaXMuZGlzdGFuY2VZKHZlYyk7XG5cbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGgoKTtcbiAgICAgKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLqOyInO2eiCDquLjsnbQg67mE6rWQ66W8IO2VmOugpOuptCBsZW5ndGgg66W8IOyCrOyaqe2VmOq4sCDrs7Tri6TripQgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOqyjCDruaDrpbTri6QuXG4gICAgICogbGVuZ3RoIOuKlCBNYXRoLnNxcnQgKOygnOqzseq3vCkg7LKY66as66W8IO2VmOq4sCDrlYzrrLjsl5Ag64uo7IicIOq4uOydtCDruYTqtZDsi5wgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg67mg66aF64uI64ukLlxuICAgICAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGhTcSgpO1xuICAgICAqICAgICAvLyA9PiAxMjUwMFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aFNxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbGVuZ3RoU3EodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgIH1cblxuXG4gICAgbWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuXG4gICAgdG8odmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjLnggLSB0aGlzLngsIHZlYy55IC0gdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHNldCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjLnplcm8oKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNaZXJvKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdGhpcyB2ZWN0b3IgaXMgdGhlIHNhbWUgYXMgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRXF1YWxUbyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBVdGlsaXR5IE1ldGhvZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9BcnJheSgpO1xuICAgICAqICAgICAvLyA9PiBbMTAsIDIwXVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0FycmF5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gICAgICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvT2JqZWN0KClcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlY3Rvci5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi91dGlscy9QYXN0ZWxDb2xvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzXG57XG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAxMCwgY29sb3IgPSBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbHBoYSA9IGFscGhhO1xuICAgICAgICB0aGlzLnJlbmRlcihyYWRpdXMsIGNvbG9yLCBhbHBoYSk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIocmFkaXVzID0gMTAsIGNvbG9yID0gMHhmZjMzMDAsIGFscGhhID0gMC41KVxuICAgIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB0aGlzLmRyYXdDaXJjbGUoMCwgMCwgcmFkaXVzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICB0aGlzLmVuZEZpbGwoKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZShsdCwgcmIpXG4gICAge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMudmVjdG9yLnJhbmRvbWl6ZShsdCwgcmIpO1xuICAgICAgICB0aGlzLnggPSBwb3NpdGlvbi54O1xuICAgICAgICB0aGlzLnkgPSBwb3NpdGlvbi55O1xuICAgIH1cblxuXG4gICAgZ2V0IHZlY3RvcigpXG4gICAge1xuICAgICAgICByZXR1cm4gVmVjdG9yLmZyb21PYmplY3QodGhpcyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb20vUG9pbnQuanMiLCIvKipcbiAqIGh0dHBzOi8vY29kZXBlbi5pby9wbGl1L3Blbi9CTEVLd0FcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzdGVsQ29sb3Ige1xuICAgIHN0YXRpYyBnZW5lcmF0ZSgpIHtcbiAgICAgICAgY29uc3QgaEJhc2UgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBjb25zdCBuZXdIID0gTWF0aC5mbG9vcihoQmFzZSAqIDM2MCk7XG4gICAgICAgIGNvbnN0IG5ld0wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNikgKyA3NTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBgaHNsKCR7bmV3SH0sIDEwMCUsICR7bmV3TH0lKWA7XG4gICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IHRoaXMuSFNMdG9SR0IoaEJhc2UsIDEsIG5ld0wgKiAuMDEpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoc2w6IGNvbG9yLCAvLyBoc2woMCwgMTAwJSwgODUlKTtcbiAgICAgICAgICAgIHJnYjogYHJnYigke3J9LCAke2d9LCAke2J9KWAsIC8vIHJnYigyNTUsIDEyOCwgMTI4KTtcbiAgICAgICAgICAgIGhleDogYCR7dGhpcy5SR0J0b0hleChyLCBnLCBiKX1gLCAvLyAweGZmODA4MFxuICAgICAgICAgICAgaGV4U2hhcDpgJHt0aGlzLlJHQnRvSGV4KHIsIGcsIGIsICcjJyl9YCwgLy8gI2ZmODA4MFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhTTCB0byBSR0IgZm9ybXVsYSBhZGFwdGVkIGZyb206XG4gICAgICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWphY2tzb24vNTMxMTI1NlxuICAgICAqIChza2lwcGluZyB0byBlbHNle30gc2luY2UgcyB3aWxsIGFsd2F5cyBiZSAxMDAlKVxuICAgICAqIEBwYXJhbSBoXG4gICAgICogQHBhcmFtIHNcbiAgICAgKiBAcGFyYW0gbFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIEhTTHRvUkdCKGgsIHMsIGwpIHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG5cbiAgICAgICAgY29uc3QgcmQgPSAoYSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5tYXgoTWF0aC5taW4oYSAqIDI1NiwgMjU1KSwgMCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGh1ZVRvUkdCID0gKG0sIG4sIG8pID0+IHtcbiAgICAgICAgICAgIGlmIChvIDwgMCkgbyArPSAxO1xuICAgICAgICAgICAgaWYgKG8gPiAxKSBvIC09IDE7XG4gICAgICAgICAgICBpZiAobyA8IDEgLyA2KSByZXR1cm4gbSArIChuIC0gbSkgKiA2ICogbztcbiAgICAgICAgICAgIGlmIChvIDwgMSAvIDIpIHJldHVybiBuO1xuICAgICAgICAgICAgaWYgKG8gPCAyIC8gMykgcmV0dXJuIG0gKyAobiAtIG0pICogKDIgLyAzIC0gbykgKiA2O1xuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XG5cbiAgICAgICAgciA9IGh1ZVRvUkdCKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgICAgIGcgPSBodWVUb1JHQihwLCBxLCBoKTtcbiAgICAgICAgYiA9IGh1ZVRvUkdCKHAsIHEsIGggLSAxIC8gMyk7XG5cbiAgICAgICAgcmV0dXJuIFtyZChyKSwgcmQoZyksIHJkKGIpXVxuICAgIH1cblxuICAgIHN0YXRpYyBSR0J0b0hleChyLCBnLCBiLCBwcmVmaXggPSAnMHgnKSB7XG4gICAgICAgIHJldHVybiBgJHtwcmVmaXh9JHtyLnRvU3RyaW5nKDE2KX0ke2cudG9TdHJpbmcoMTYpfSR7Yi50b1N0cmluZygxNil9YDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanMiLCIvKipcbiAqIGh0dHBzOi8vd3d3LmNyb2N1cy5jby5rci8xMjg4XG4gKi9cbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL1ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb252ZXhIdWxsIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGUocG9pbnRzKSB7XG5cbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXSxcbiAgICAgICAgICAgIG4gPSBwb2ludHMubGVuZ3RoO1xuXG4gICAgICAgIC8vIHnsooztkZwsIHjsooztkZwg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgICAgcG9pbnRzLnNvcnQodGhpcy5zb3J0TG93ZXJZWCk7XG5cbiAgICAgICAgLy8g6riw7KSA7KCQIOyEpOyglVxuICAgICAgICBjb25zdCBiYXNlUG9pbnQgPSBwb2ludHNbMF07XG5cbiAgICAgICAgLy8g6riw7KSA7KCQIOq4sOykgOycvOuhnCB2ZWN0b3Ig66W8IOyDneyEse2VmOqzoCDsmbjsoIHsnYQg6rWs7ZW07IScIOuwmCDsi5zqs4Qg67Cp7Zal7Jy866GcIChjY3cpIOygleugrCDtlanri4jri6QuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBwb2ludHNbaV0ucmVsYXRpdmVQb3NpdGlvbiA9IG5ldyBWZWN0b3IoXG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldLnggLSBiYXNlUG9pbnQueCxcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueSAtIGJhc2VQb2ludC55XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9pbnRzLnNvcnQodGhpcy5zb3J0Q2N3KTtcblxuICAgICAgICAvLyDsiqTtg53sl5AgZmlyc3QsIHNlY29uZCDrpbwg64Sj7Iq164uI64ukLlxuICAgICAgICBzdGFjay5wdXNoKDApO1xuICAgICAgICBzdGFjay5wdXNoKDEpO1xuXG4gICAgICAgIGxldCBuZXh0ID0gMjtcblxuICAgICAgICB3aGlsZSAobmV4dCA8IG4pIHtcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdCwgc2Vjb25kO1xuICAgICAgICAgICAgICAgIHNlY29uZCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJzdCwgc2Vjb25kLCBuZXh06rCAIOyijO2ajOyghCAoIDAg67O064ukIO2BrOuptCAp7J20652866m0IHNlY29uZCBwdXNoXG4gICAgICAgICAgICAgICAgLy8g7Jqw7ZqM7KCEKCAwIOuztOuLpCDsnpHsnLzrqbQgKSDsnbTrnbzrqbQg7JyE7J2YIHdoaWxl66y4IOqzhOyGjSDrsJjrs7VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Njdyhwb2ludHNbZmlyc3RdLCBwb2ludHNbc2Vjb25kXSwgcG9pbnRzW25leHRdKSkge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHNlY29uZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0KyspO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udmV4SHVsbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IHN0YWNrLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGFja1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnZleEh1bGwucHVzaChuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb252ZXhIdWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHksIHgg6rCAIOyekeydgCDsiJzsnLzroZwg7KCV66CsXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydExvd2VyWVgocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgaWYgKHBvaW50QS55ICE9PSBwb2ludEIueSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvaW50QS55IC0gcG9pbnRCLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50QS54IC0gcG9pbnRCLng7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6riw7KSAIOyijO2RnCDquLDspIDsnLzroZwg7IOB64yAIOyijO2RnOulvCDqtaztlbTshJwg7Iuc6rOEIOuwmOuMgCDrsKntlqXsnLzroZwg7KCV66Cs7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBwb2ludEFcbiAgICAgKiBAcGFyYW0gcG9pbnRCXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIHNvcnRDY3cocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgLy8g7KSR7IusIOyijO2RnOyduCDqsr3smrAgcmVsYXRpdmVQb3NpdGlvbiDsnbQg7JeG7Iq164uI64ukLiDspJHsi6wg7KKM7ZGc66W8IDDrsojsnLzroZwg7KCV66CsIO2VqeuLiOuLpC5cbiAgICAgICAgaWYgKCFwb2ludEEucmVsYXRpdmVQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb2ludEIucmVsYXRpdmVQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhID0gcG9pbnRBLnJlbGF0aXZlUG9zaXRpb24ueSAqIHBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uLng7XG4gICAgICAgIGNvbnN0IGIgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi54ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueTtcblxuICAgICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENvbnZleEh1bGwuc29ydExvd2VyWVgocG9pbnRBLCBwb2ludEIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuwmCDsi5zqs4Qg67Cp7Zal7J247KeAIOyXrOu2gFxuICAgICAqIEBwYXJhbSBwb2ludEFcbiAgICAgKiBAcGFyYW0gcG9pbnRCXG4gICAgICogQHBhcmFtIHBvaW50Q1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Njdyhwb2ludEEsIHBvaW50QiwgcG9pbnRDKSB7XG4gICAgICAgIC8vIGNvbnN0IHRyaWFuZ2xlQXJlYSA9IChwb2ludEIueCAtIHBvaW50QS54KSAqIChwb2ludEMueSAtIHBvaW50QS55KSAtIChwb2ludEMueCAtIHBvaW50QS54KSAqIChwb2ludEIueSAtIHBvaW50QS55KTtcbiAgICAgICAgY29uc3QgdHJpYW5nbGVBcmVhID0gIChwb2ludEMueCAtIHBvaW50QS54KSAqIChwb2ludEIueSAtIHBvaW50QS55KSAtIChwb2ludEIueCAtIHBvaW50QS54KSAqIChwb2ludEMueSAtIHBvaW50QS55KTtcbiAgICAgICAgaWYgKHRyaWFuZ2xlQXJlYSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGVidWdBcnJheShhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGFyci5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJyW2ldLngsIGFycltpXS55KTtcbiAgICB9XG59XG5cblxuLypcbiogQ29weXJpZ2h0IChjKSAyMDEyIEp1IEh5dW5nIExlZVxuKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmVcbiogYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4qIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yXG4qIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbipcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkdcbiogQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4qIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4qIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBDcmVhdGUgdGhlIGNvbnZleCBodWxsIHVzaW5nIHRoZSBHaWZ0IHdyYXBwaW5nIGFsZ29yaXRobVxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HaWZ0X3dyYXBwaW5nX2FsZ29yaXRobVxuZnVuY3Rpb24gY3JlYXRlQ29udmV4SHVsbChwb2ludHMpIHtcbiAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgdmFyIGkwID0gMDtcbiAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgeCA9IHBvaW50c1tpXS54O1xuICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG4gPSBwb2ludHMubGVuZ3RoO1xuICAgIHZhciBodWxsID0gW107XG4gICAgdmFyIG0gPSAwO1xuICAgIHZhciBpaCA9IGkwO1xuXG4gICAgd2hpbGUgKDEpIHtcbiAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgIHZhciBpZSA9IDA7XG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByID0gdmVjMi5zdWIocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgIHZhciB2ID0gdmVjMi5zdWIocG9pbnRzW2pdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIGMgPSB2ZWMyLmNyb3NzKHIsIHYpO1xuICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhzcSgpID4gci5sZW5ndGhzcSgpKSB7XG4gICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbSsrO1xuICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb3B5IHZlcnRpY2VzXG4gICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgIG5ld1BvaW50cy5wdXNoKHBvaW50c1todWxsW2ldXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1BvaW50cztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZVxue1xuICAgIHN0YXRpYyBnZXQgREVTS1RPUF9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTU9CSUxFX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQSVhJLkFwcGxpY2F0aW9uLnJlbmRlcmVyXG4gICAgICog656c642U65+s7JeQ7IScIGludGVyYWN0aW8g6rCd7LK066W8IOywuOyhsO2VoCDsiJgg7J6I7Ja07IScIOyCrOyaqe2VmOugpOuptCDroIzrjZTrn6zrpbwg7IWL7YyF7ZW07JW8IO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmFsdWUge1BJWEkuV2ViR0xSZW5kZXJyZXJ8UElYSS5DYW52YXNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IHJlbmRlcmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrqqjrsJTsnbwg64yA7J2R7J2EIOychO2VtOyEnFxuICAgICAqIFBDIOuyhOyghOyXkOyEnOuKlCBtb3VzZSDqsJ3ssrTrpbwsIOuqqOuwlOydvCDrsoTsoITsl5DshJzripQgcG9pbnRlciDqsJ3ssrTrpbwg7IWL7YyF7ZWY66m0XG4gICAgICogZ2xvYmFsIOqwneyytOyXkOyEnCDssLjsobDtlbTshJwg7KKM7ZGc6rCS7J2EIOyghOuLrO2VmOuPhOuhnSDtlanri4jri6QuXG4gICAgICpcbiAgICAgKiDrp4zslb0g7ISk7KCV7ZWY7KeAIOyViuycvOuptCDquLDrs7ggUEPrp4wg64yA7J2R7ZWY64+E66GdIG1vdXNlIOqwneyytOulvCDshKTsoJXtlanri4jri6QuXG4gICAgICpcbiAgICAgKiBEZXNrdG9wIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZVxuICAgICAqIE1vYmlsZSA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlclxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgbW91c2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbW91c2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBtb3VzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3VzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2UgPSB0aGlzLkRFU0tUT1BfTU9VU0U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdXNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBnbG9iYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzZXQgY3VycmVudEN1cnNvclN0eWxlKHZhbHVlKSB7XG4gICAgICAgIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgY3VycmVudEN1cnNvclN0eWxlKCkge1xuICAgICAgICByZXR1cm4gTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsnbTrj5kg6rGw66as6rCAIDVweCDsnbTtlZjsnbTqs6AgNTAwbXMg7JWI7JeQIOuRkOuyiCDtgbTrpq3tlZjrqbQg642U67iUIO2BtOumreycvOuhnCDsnbjsoJVcbiAgICAgKiBAcGFyYW0gcHJldlBvaW50IOydtOyghOyijO2RnFxuICAgICAqIEBwYXJhbSBjdXJyZW50UG9pbnQg7ZiE7J6s7KKM7ZGcXG4gICAgICogQHBhcmFtIHByZXZUaW1lIOydtOyghCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHBhcmFtIGN1cnJlbnRUaW1lIO2YhOyerCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOuNlOu4lCDtgbTrpq0g7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGlzRG91YmxlQ2xpY2socHJldlBvaW50LCBjdXJyZW50UG9pbnQsIHByZXZUaW1lLCBjdXJyZW50VGltZSkge1xuICAgICAgICB2YXIgZGlmZlggPSBjdXJyZW50UG9pbnQueCAtIHByZXZQb2ludC54O1xuXG4gICAgICAgIGlmIChkaWZmWCA8IDApIHtcbiAgICAgICAgICAgIGRpZmZYID0gZGlmZlggKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaWZmWSA9IGN1cnJlbnRQb2ludC55IC0gcHJldlBvaW50Lnk7XG5cbiAgICAgICAgaWYgKGRpZmZZIDwgMCkge1xuICAgICAgICAgICAgZGlmZlkgPSBkaWZmWSAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZmZYID4gNSB8fCBkaWZmWSA+IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIHByZXZUaW1lID4gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvTW91c2UuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpc3Rvcnkge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNpbXBsZXgge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb25zIHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaW1wbGV4ID0gbmV3IEFycmF5KDMpLCBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDMpKSB7XG4gICAgICAgIHRoaXMuc2ltcGxleCA9IHNpbXBsZXg7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuc2ltcGxleCA9IHNpbXBsZXg7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0hpc3RvcnkuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uL2dqay9Db25zdHMnO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYXN0ZWxDb2xvcic7XG5cbmNvbnN0IEZPTlRfU0laRSA9ICc5cHgnXG4gICAgLCBTQ0FMRSA9IENvbnN0cy5TQ0FMRTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMgPSBbXSwgbGluZUNvbG9yLCBsaW5lQWxwaGEgPSAwLjUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGluZUNvbG9yID0gbGluZUNvbG9yID8gbGluZUNvbG9yIDogUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKS5oZXg7XG4gICAgICAgIGxpbmVDb2xvciA9IHR5cGVvZiBsaW5lQ29sb3IgPT09ICdudW1iZXInID8gJzB4JyArIGxpbmVDb2xvci50b1N0cmluZygxNikgOiBsaW5lQ29sb3I7XG4gICAgICAgIGNvbnN0IHRleHRDb2xvciA9IGxpbmVDb2xvci5yZXBsYWNlKCcweCcsICcjJyk7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICAgICAgdGhpcy5saW5lQ29sb3IgPSBsaW5lQ29sb3I7XG4gICAgICAgIHRoaXMubGluZUFscGhhID0gbGluZUFscGhhO1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9IHRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgICAgIHRoaXMubGFiZWxzID0gdGhpcy5jcmVhdGVMYWJlbCgpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBuZXcgUElYSS5UZXh0KGksIHtcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZm9udDogRk9OVF9TSVpFLFxuICAgICAgICAgICAgICAgIGZpbGw6IHRoaXMudGV4dENvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0ZXh0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxhYmVscy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWxzO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzXG4gICAgICAgICAgICAsIHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlc1xuICAgICAgICAgICAgLCBvcmlnaW4gPSB2ZXJ0aWNlc1swXTtcblxuICAgICAgICBnLmNsZWFyKCk7XG4gICAgICAgIGcubGluZVN0eWxlKDEsIHRoaXMubGluZUNvbG9yLCB0aGlzLmxpbmVBbHBoYSk7XG4gICAgICAgIGcubW92ZVRvKG9yaWdpbi54LCBvcmlnaW4ueSk7XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGcubGluZVRvKHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWxzW2luZGV4XVxuICAgICAgICAgICAgICAgICwgdmVjID0gVmVjdG9yLmRpdmlkZVNjYWxhcih2ZXJ0ZXgsIFNDQUxFKTtcblxuICAgICAgICAgICAgbGFiZWwueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgbGFiZWwueSA9IHZlcnRleC55O1xuXG4gICAgICAgICAgICBsYWJlbC50ZXh0ID0gYCgke3ZlYy54fSwke3ZlYy55fSlgO1xuICAgICAgICAgICAgbGFiZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBnLmxpbmVUbyhvcmlnaW4ueCwgb3JpZ2luLnkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5sYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQobGFiZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxhYmVscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmxhYmVscyA9IG51bGw7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1NoYXBlLmpzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cyB7XG4gICAgc3RhdGljIGdldCBTQ0FMRSgpIHtcbiAgICAgICAgcmV0dXJuIDE0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBR0UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogNjAwLCBoZWlnaHQ6IDYwMH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhZ2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvQ29uc3RzLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB9XG5cbiAgICBtdWx0aXBseShzY2FsYXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRleC54ICo9IHNjYWxhcjtcbiAgICAgICAgICAgIHZlcnRleC55ICo9IHNjYWxhcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGl2aWRlKHNjYWxhcikge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdmVydGV4LnkgLz0gc2NhbGFyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpbmRleF0gPSB2ZXJ0ZXguY2xvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1ZlcnRpY2VzLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vUG9pbnQnO1xuaW1wb3J0IENvbnZleEh1bGwgZnJvbSAnLi4vY29udmV4aHVsbC9Db252ZXhIdWxsJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi91dGlscy9QYXN0ZWxDb2xvcic7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uL2dqay9Db25zdHMnO1xuXG5cbmNvbnN0IFNDQUxFID0gQ29uc3RzLlNDQUxFXG4gICAgLCBTVEFHRSA9IENvbnN0cy5TVEFHRVxuICAgICwgRk9OVF9DT0xPUiA9ICcjRkZGRkZGJ1xuICAgICwgQVhFU19MSU5FX0NPTE9SID0gJzB4RkZGRkZGJ1xuICAgICwgQ09OVkVYX0hVTExfTElORV9DT0xPUiA9IFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmtvd3NraURpZmZlcmVuY2UgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcblxuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAgICAgICAgICAsIGNvbnZleEh1bGwgPSB0aGlzLmNvbnZleEh1bGwgPSBDb252ZXhIdWxsLmdlbmVyYXRlKHZlcnRpY2VzKTtcblxuICAgICAgICB0aGlzLnRleHRzID0gW107XG4gICAgICAgIHRoaXMuZHJhd0F4ZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3VmV0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMuZHJhd1BvbHlnb24oY29udmV4SHVsbCk7XG4gICAgfVxuXG4gICAgZHJhd1ZldGljZXModmVydGljZXMpIHtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh2ZXJ0ZXgueCwgdmVydGV4LnksIDMsIFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4KTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChwb2ludCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZlYyA9IFZlY3Rvci5kaXZpZGVTY2FsYXIodmVydGV4LCBTQ0FMRSk7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGAoJHt2ZWMueH0sICR7dmVjLnl9KWAsIHBvaW50LnZlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdQb2x5Z29uKHZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzO1xuXG4gICAgICAgIGcubGluZVN0eWxlKDEsIENPTlZFWF9IVUxMX0xJTkVfQ09MT1IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHsgZy5saW5lVG8odmVydGV4LngsIHZlcnRleC55KTt9KTtcbiAgICAgICAgZy5saW5lVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gICAgfVxuXG4gICAgZHJhd0F4ZXMoKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzXG4gICAgICAgICAgICAsIGh3ID0gU1RBR0Uud2lkdGggLyAyXG4gICAgICAgICAgICAsIGhoID0gU1RBR0UuaGVpZ2h0IC8gMjtcblxuICAgICAgICBnLmxpbmVTdHlsZSgxLCBBWEVTX0xJTkVfQ09MT1IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKC1odywgMCk7XG4gICAgICAgIGcubGluZVRvKGh3LCAwKTtcbiAgICAgICAgZy5tb3ZlVG8oMCwgLWhoKTtcbiAgICAgICAgZy5saW5lVG8oMCwgaGgpO1xuICAgIH1cblxuICAgIGRyYXdUZXh0KHRleHQsIHZlcnRleCA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBQSVhJLlRleHQodGV4dCwge1xuICAgICAgICAgICAgZm9udDogJzIwcHgnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZmlsbDogRk9OVF9DT0xPUlxuICAgICAgICB9KTtcblxuICAgICAgICBsYWJlbC54ID0gdmVydGV4Lng7XG4gICAgICAgIGxhYmVsLnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgdGhpcy50ZXh0cy5wdXNoKGxhYmVsKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChsYWJlbCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRleHRzLmZvckVhY2goKHRleHQpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChwb2ludCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgfVxuXG4gICAgZ2V0VmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgICAgICAgdmVydGljZXMxLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2VzMi5mb3JFYWNoKChiKSA9PiB7XG4gICAgICAgICAgICAgICAgdmVydGljZXMucHVzaChWZWN0b3Iuc3VidHJhY3QoYSwgYikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvTWlua293c2tpRGlmZmVyZW5jZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uIHtcblxuICAgIHN0YXRpYyBnZXQgRSgpIHtcbiAgICAgICAgcmV0dXJuIEVwc2lsb24uY29tcHV0ZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb21wdXRlKCkge1xuICAgICAgICBsZXQgZSA9IDAuNTtcbiAgICAgICAgd2hpbGUgKDEuMCArIGUgPiAxLjApIHtcbiAgICAgICAgICAgIGUgKj0gMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovRXBzaWxvbi5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBFcHNpbG9uIGZyb20gJy4uL2R5bjRqL0Vwc2lsb24nO1xuaW1wb3J0IE1pbmtvd3NraVN1bVBvaW50IGZyb20gXCIuL01pbmtvd3NraVN1bVBvaW50XCI7XG5cbi8qKlxuICogR0pLIEFsZ29yaXRobSAoR2lsYmVydC1Kb2huc29uLUtlZXJ0aGkpXG4gKiBodHRwczovL2dpdGh1Yi5jb20va3JvaXRvci9namsuY1xuICogaHR0cDovL3d3dy5keW40ai5vcmcvMjAxMC8wNC9namstZ2lsYmVydC1qb2huc29uLWtlZXJ0aGkvI2dqay10b3BcbiAqIGh0dHBzOi8vd3d3Lmhhcm9sZHNlcnJhbm8uY29tL2Jsb2cvdmlzdWFsaXppbmctdGhlLWdqay1jb2xsaXNpb24tYWxnb3JpdGhtXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanVobC9jb2xsaXNpb24tZGV0ZWN0aW9uLTJkXG4gKi9cblxuY29uc3QgT1JJR0lOID0gbmV3IFZlY3RvcigwLCAwKVxuICAgICwgREVGQVVMVF9NQVhfSVRFUkFUSU9OUyA9IDMwXG4gICAgLCBUT0xFUkFOQ0UgPSBNYXRoLnNxcnQoRXBzaWxvbi5FKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0pLXG57XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0byBjb21wdXRlIGF2ZXJhZ2UgY2VudGVyIChyb3VnaGx5KS4gSXQgbWlnaHQgYmUgZGlmZmVyZW50IGZyb21cbiAgICAgKiBDZW50ZXIgb2YgR3Jhdml0eSwgZXNwZWNpYWxseSBmb3IgYm9kaWVzIHdpdGggbm9udW5pZm9ybSBkZW5zaXR5LFxuICAgICAqIGJ1dCB0aGlzIGlzIG9rIGFzIGluaXRpYWwgZGlyZWN0aW9uIG9mIHNpbXBsZXggc2VhcmNoIGluIEdKS1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBhdmVyYWdlUG9pbnQodmVydGljZXMpXG4gICAge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhdmcueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZnLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2Zy54IC89IGNvdW50O1xuICAgICAgICBhdmcueSAvPSBjb3VudDtcblxuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1cnRoZXN0IHZlcnRleCBhbG9uZyBhIGNlcnRhaW4gZGlyZWN0aW9uXG4gICAgICog6ryt7KeA7KCQ6rO8IOuwqe2WpeydhCDsoITri6ztlZjrqbQg64K07KCBICjtiKzsmIEp7J2EIO2Gte2VtCDstZzrjIDroZwg66i8IOyijO2RnOydmCDsnbjrjbHsiqTrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBpbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlcywgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1heFByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzWzBdKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0ID4gbWF4UHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG1heFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1pbmtvd3NraSBzdW0gc3VwcG9ydCBmdW5jdGlvbiBmb3IgR0pLXG4gICAgICog7KeA7JuQIO2VqOyImOyXkOyEnCDtj7Trpqzqs6TsnZgg7Y+s7J247Yq47JmAIOuwqe2WpeycvOuhnCDshJzroZwg64uk66W4IOuwqe2WpeydmCDsoJDsnYQg6rWs7ZWY6rOgIE1pbmtvd3NraSBEaWZmZXJlbmNlIOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSDrsqHthLBcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgLy8gc3VidHJhY3QgKE1pbmtvd3NraSBzdW0pIHRoZSB0d28gcG9pbnRzIHRvIHNlZSBpZiBib2RpZXMgJ292ZXJsYXAnXG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1cHBvcnQyKHZlcnRpY2VzMSwgdmVydGljZXMyLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2YgZmlyc3QgYm9keSBhbG9uZyBhbiBhcmJpdHJhcnkgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMSwgZGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2Ygc2Vjb25kIGJvZHkgYWxvbmcgdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBqID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczIsIFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihkaXJlY3Rpb24sIHRydWUpLCAnaTonICsgc3RyKHZlcnRpY2VzMVtpXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSwgdHJ1ZSksICdqOicgKyBzdHIodmVydGljZXMyW2pdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdXBwb3J0KCcgKyBzdHIoVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKSkgKyAnKScpO1xuICAgICAgICByZXR1cm4gbmV3IE1pbmtvd3NraVN1bVBvaW50KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gdmVydGljZXMxIHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gdmVydGljZXMyIHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW4gaGlzdG9yeSB7SGlzdG9yeX0gc2ltcGxleCDsmYAgZGlyZWN0aW9uIO2eiOyKpO2GoOumrFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDstqnrj4wg7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGNoZWNrQ29sbGlzaW9uKHZlcnRpY2VzMSwgdmVydGljZXMyLCBoaXN0b3J5ID0gbnVsbClcbiAgICB7XG4gICAgICAgIC8vIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMik7XG5cbiAgICAgICAgbGV0IGl0ZXJDb3VudCA9IDAsIGluZGV4ID0gMDsgICAvLyBpbmRleCBvZiBjdXJyZW50IHZlcnRleCBvZiBzaW1wbGV4XG4gICAgICAgIGxldCBhLCBiLCBjLCBkLCBhbywgYWIsIGFjLCBhYnBlcnAsIGFjcGVycCxcbiAgICAgICAgICAgIHNpbXBsZXggPSBuZXcgQXJyYXkoMyksIGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMyk7XG5cbiAgICAgICAgLy8g65GQIO2PtOumrOqzpCDspJHsi6wg7KKM7ZGc66W8IO2Gte2VtOyEnCDrsKntlqXsnYQg6rWs7ZWp64uI64ukLlxuICAgICAgICBjb25zdCBwb3NpdGlvbjEgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczEpOyAvLyBub3QgYSBDb0cgYnV0XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uMiA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMik7IC8vIGl0J3Mgb2sgZm9yIEdKSyApXG5cbiAgICAgICAgLy8gaW5pdGlhbCBkaXJlY3Rpb24gZnJvbSB0aGUgY2VudGVyIG9mIDFzdCBib2R5IHRvIHRoZSBjZW50ZXIgb2YgMm5kIGJvZHlcbiAgICAgICAgLy8g67Cp7ZalIHZlY3RvclxuICAgICAgICBkID0gVmVjdG9yLnN1YnRyYWN0KHBvc2l0aW9uMSwgcG9zaXRpb24yKTtcblxuICAgICAgICAvLyBpZiBpbml0aWFsIGRpcmVjdGlvbiBpcyB6ZXJvIOKAkyBzZXQgaXQgdG8gYW55IGFyYml0cmFyeSBheGlzICh3ZSBjaG9vc2UgWClcbiAgICAgICAgaWYgKChkLnggPT0gMCkgJiYgKGQueSA9PSAwKSkge1xuICAgICAgICAgICAgZC54ID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBzdXBwb3J0IGFzIGluaXRpYWwgcG9pbnQgb2YgdGhlIG5ldyBzaW1wbGV4XG4gICAgICAgIGEgPSBzaW1wbGV4WzBdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgZGlyZWN0aW9uc1swXSA9IGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAvLyBzdXBwb3J0IOygkOqzvCDrsKntlqXsnbQg6rCZ7J2AIOuwqe2WpeydtCDslYTri5Ag6rK97JqwXG4gICAgICAgIGlmIChhLmRvdChkKSA8PSAwKSB7XG4gICAgICAgICAgICAvLyDrp4jsp4Drp4nsl5Ag7LaU6rCAIOuQnCDsoJDsnbQgZOydmCDrsKntlqXsnLzroZwg7JuQ7KCQ7J2EIOyngOuCmOy5mOyngCDslYrsnYAg6rK97JqwXG4gICAgICAgICAgICAvLyDqt7gg64uk7J2MIE1pbmtvd3NraSDtlansnYAg7JuQ7KCQ7J2EIO2PrO2VqCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cbiAgICAgICAgICAgIC8vIOy2lOqwgCDrkJwg66eI7KeA66eJIOygkOydgCBNaW5rb3dza2kgRGlmZmVyZW5jZeydmCDqsIDsnqXsnpDrpqzsl5Ag7J6I7Iq164uI64ukLlxuICAgICAgICAgICAgY29uc29sZS5sb2coJyAgICAgICBDQVNFMVsnLCAnTk8nLCAnXScpO1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGQgPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBUaGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIGFsd2F5cyB0b3dhcmRzIHRoZSBvcmlnaW4sIHNvIHRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgbmVnYXRlKGEpXG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGl0ZXJDb3VudCsrO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVyQ291bnQpO1xuXG4gICAgICAgICAgICBhID0gc2ltcGxleFsrK2luZGV4XSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgICAgICBkaXJlY3Rpb25zW2luZGV4XSA9IGQ7XG5cbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhLCBkKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RyKGEpLCBzdHIoZCwgdHJ1ZSksIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgICAgICAgQ0FTRTJbJywgJ05PJywgJ10nKTtcblxuICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBh6rCAIOybkOygkOycvOuhnCDtlqXtlZjripQg67Kh7YSw64qUIC1hIOulvCDtlZjrqbQg65Cp64uI64ukLlxuICAgICAgICAgICAgYW8gPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gT3JpZ2luIGlzIGp1c3QgbmVnYXRpdmUgQVxuXG4gICAgICAgICAgICAvLyBzaW1wbGV4IGhhcyAyIHBvaW50cyAoYSBsaW5lIHNlZ21lbnQsIG5vdCBhIHRyaWFuZ2xlIHlldClcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDIpIHtcblxuICAgICAgICAgICAgICAgIGIgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgICAgIGFiID0gVmVjdG9yLnN1YnRyYWN0KGIsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQlxuICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKTsgLy8gbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG5cbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmxlbmd0aFNxKGQpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IucGVycGVuZGljdWxhcihhYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBza2lwIHRvIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGIgPSBzaW1wbGV4WzFdO1xuICAgICAgICAgICAgYyA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgIGFjID0gVmVjdG9yLnN1YnRyYWN0KGMsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQ1xuXG4gICAgICAgICAgICAvL2Fj7JmAIOyImOyngVxuICAgICAgICAgICAgYWNwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFjLCBhYyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJywgYSwgJ2InLCBiLCAnYycsIGMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FvJywgYW8sICdhYicsIGFiLCAnYWMnLCBhYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWNwZXJwJywgYWNwZXJwLCBhY3BlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdFByb2R1Y3QoYWNwZXJwLCBhbyknLCBWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSk7XG5cbiAgICAgICAgICAgIC8vIGFjIOyImOyngSDshKDrtoTsnbQgYeqwgCDsm5DsoJDsnYQg7Zal7ZWY64qUIOuwqe2WpSDrsJjrjIDtjrjsl5Ag7J6I6rOgXG4gICAgICAgICAgICAvLyDspoksIGFjIOyImOyngSDshKDrtoQg7JWI7Kq97JeQIOybkOygkOydtCDsnojsnLzrqbRcbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZCA9IGFjcGVycDsgLy8gbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW4nLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoRcbiAgICAgICAgICAgICAgICBhYnBlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYWIsIGFiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWJwZXJwJywgYWJwZXJwLCBhYnBlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFicGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWIg7IiY7KeBIOyEoOu2hOydtCDsm5DsoJAg67CY64yAIOuwqe2WpeydhCDtlqXtlZjqs6Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgLy8g7KaJLCDsm5DsoJDsnbQg7IK86rCB7ZiVIOyViOyXkCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykgPCAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaW1wbGV4WzBdID0gc2ltcGxleFsxXTsgLy8gc3dhcCBmaXJzdCBlbGVtZW50IChwb2ludCBDKVxuICAgICAgICAgICAgICAgIGQgPSBhYnBlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpbXBsZXhbMV0gPSBzaW1wbGV4WzJdOyAvLyBzd2FwIGVsZW1lbnQgaW4gdGhlIG1pZGRsZSAocG9pbnQgQilcbiAgICAgICAgICAgIC0taW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXN0YW5jZSh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgc2VwYXJhdGlvbiA9IG51bGwpXG4gICAge1xuICAgICAgICBsZXQgYSwgYiwgYywgZCwgcDEsIHAyLCBwMU1hZywgcDJNYWcsIHByb2plY3Rpb247XG5cbiAgICAgICAgLy8g65GQIO2PtOumrOqzpCDspJHsi6wg7KKM7ZGc66W8IO2Gte2VtOyEnCDrsKntlqXsnYQg6rWs7ZWp64uI64ukLlxuICAgICAgICBjb25zdCBjMSA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMSk7IC8vIG5vdCBhIENvRyBidXRcbiAgICAgICAgY29uc3QgYzIgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIGQgPSBWZWN0b3Iuc3VidHJhY3QoYzEsIGMyKTtcblxuICAgICAgICBpZiAoZC5pc1plcm8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYSA9IHRoaXMuc3VwcG9ydDIodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuICAgICAgICBiID0gdGhpcy5zdXBwb3J0Mih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZC5pbnZlcnQoKSk7XG5cbiAgICAgICAgZCA9IEdKSy5nZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50KE9SSUdJTiwgYS5wb2ludCwgYi5wb2ludCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUZBVUxUX01BWF9JVEVSQVRJT05TOyBpKyspIHtcbiAgICAgICAgICAgIGQgPSBkLmludmVydCgpO1xuXG4gICAgICAgICAgICBpZihkLmxlbmd0aFNxKCkgPD0gVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNsb3Nlc3QgcG9pbnQgaXMgdGhlIG9yaWdpbiB0aGVuIHRoZSBzaGFwZXMgYXJlIG5vdCBzZXBhcmF0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGMgPSB0aGlzLnN1cHBvcnQyKHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcblxuICAgICAgICAgICAgaWYgKEdKSy5jb250YWluc09yaWdpbihhLnBvaW50LCBiLnBvaW50LCBjLnBvaW50KSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGRvZXMgdGhlbiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZWUgaWYgdGhlIG5ldyBwb2ludCBpcyBmYXIgZW5vdWdoIGFsb25nIGRcbiAgICAgICAgICAgIHByb2plY3Rpb24gPSBjLnBvaW50LmRvdChkKTtcblxuICAgICAgICAgICAgaWYgKChwcm9qZWN0aW9uIC0gYS5wb2ludC5kb3QoZCkpIDwgVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlbiB0aGUgbmV3IHBvaW50IHdlIGp1c3QgbWFkZSBpcyBub3QgZmFyIGVub3VnaFxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBkaXJlY3Rpb24gb2YgbiBzbyB3ZSBjYW4gc3RvcCBub3dcbiAgICAgICAgICAgICAgICAvLyBub3JtYWxpemUgZFxuICAgICAgICAgICAgICAgIGQubm9ybWFsaXplKCk7XG5cbiAgICAgICAgICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgICAgICAgICAgc2VwYXJhdGlvbi5kaXN0YW5jZSA9IC1jLnBvaW50LmRvdChkKTtcbiAgICAgICAgICAgICAgICBHSksuZmluZENsb3Nlc3RQb2ludHMoYSwgYiwgc2VwYXJhdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAxID0gR0pLLmdldFBvaW50T25TZWdtZW50Q2xvc2VzdFRvUG9pbnQoT1JJR0lOLCBhLnBvaW50LCBjLnBvaW50KTtcbiAgICAgICAgICAgIHAyID0gR0pLLmdldFBvaW50T25TZWdtZW50Q2xvc2VzdFRvUG9pbnQoT1JJR0lOLCBjLnBvaW50LCBiLnBvaW50KTtcbiAgICAgICAgICAgIHAxTWFnID0gcDEubGVuZ3RoU3EoKTtcbiAgICAgICAgICAgIHAyTWFnID0gcDIubGVuZ3RoU3EoKTtcblxuICAgICAgICAgICAgaWYgKHAxTWFnIDw9IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIGQubm9ybWFsaXplKCk7XG4gICAgICAgICAgICAgICAgc2VwYXJhdGlvbi5kaXN0YW5jZSA9IHAxLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24ubm9ybWFsID0gZDtcbiAgICAgICAgICAgICAgICBHSksuZmluZENsb3Nlc3RQb2ludHMoYSwgYywgc2VwYXJhdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAyTWFnIDw9IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIGQubm9ybWFsaXplKCk7XG4gICAgICAgICAgICAgICAgc2VwYXJhdGlvbi5kaXN0YW5jZSA9IHAyLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24ubm9ybWFsID0gZDtcbiAgICAgICAgICAgICAgICBHSksuZmluZENsb3Nlc3RQb2ludHMoYywgYiwgc2VwYXJhdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwMU1hZyA8IHAyTWFnKSB7XG4gICAgICAgICAgICAgICAgYiA9IGM7XG4gICAgICAgICAgICAgICAgZCA9IHAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhID0gYztcbiAgICAgICAgICAgICAgICBkID0gcDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGQubm9ybWFsaXplKCk7XG4gICAgICAgIHNlcGFyYXRpb24ubm9ybWFsID0gZDtcbiAgICAgICAgc2VwYXJhdGlvbi5kaXN0YW5jZSA9IC1jLnBvaW50LmRvdChkKTtcbiAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGEsIGIsIHNlcGFyYXRpb24pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9yaWdpbiBpcyB3aXRoaW4gdGhlIHRyaWFuZ2xlIGdpdmVuIGJ5XG4gICAgICogYSwgYiwgYW5kIGMuXG4gICAgICogPHA+XG4gICAgICogSWYgdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSBzYW1lIHNpZGUgb2YgYWxsIHRoZSBwb2ludHMgdGhlbiB3ZVxuICAgICAqIGtub3cgdGhhdCB0aGUgb3JpZ2luIGlzIGluIHRoZSB0cmlhbmdsZS5cbiAgICAgKiA8cHJlPiBzaWduKGxvY2F0aW9uKG9yaWdpbiwgYSwgYikpID09IHNpZ24obG9jYXRpb24ob3JpZ2luLCBiLCBjKSkgPT0gc2lnbihsb2NhdGlvbihvcmlnaW4sIGMsIGEpKTwvcHJlPlxuICAgICAqIFRoZSB7QGxpbmsgU2VnbWVudCNnZXRMb2NhdGlvbihWZWN0b3IyLCBWZWN0b3IyLCBWZWN0b3IyKX0gbWV0aG9kXG4gICAgICogY2FuIGJlIHNpbXBsaWZpZWQgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgdGhlIG9yaWdpbiBhcyB0aGUgc2VhcmNoIHBvaW50OlxuICAgICAqIDxwcmU+ID0gKGIueCAtIGEueCkgKiAob3JpZ2luLnkgLSBhLnkpIC0gKG9yaWdpbi54IC0gYS54KSAqIChiLnkgLSBhLnkpXG4gICAgICogPSAoYi54IC0gYS54KSAqICgtYS55KSAtICgtYS54KSAqIChiLnkgLSBhLnkpXG4gICAgICogPSAtYS55ICogYi54ICsgYS55ICogYS54ICsgYS54ICogYi55IC0gYS54ICogYS55XG4gICAgICogPSAtYS55ICogYi54ICsgYS54ICogYi55XG4gICAgICogPSBhLnggKiBiLnkgLSBhLnkgKiBiLnhcbiAgICAgKiA9IGEuY3Jvc3MoYik8L3ByZT5cbiAgICAgKiBAcGFyYW0gYSB0aGUgZmlyc3QgcG9pbnRcbiAgICAgKiBAcGFyYW0gYiB0aGUgc2Vjb25kIHBvaW50XG4gICAgICogQHBhcmFtIGMgdGhlIHRoaXJkIHBvaW50XG4gICAgICogQHJldHVybiBib29sZWFuXG4gICAgICovXG4gICAgc3RhdGljIGNvbnRhaW5zT3JpZ2luKGEsIGIsIGMpIHtcbiAgICAgICAgY29uc3Qgc2EgPSBhLmNyb3NzKGIpXG4gICAgICAgICAgICAsIHNiID0gYi5jcm9zcyhjKVxuICAgICAgICAgICAgLCBzYyA9IGMuY3Jvc3MoYSk7XG4gICAgICAgIHJldHVybiAoc2EgKiBzYiA+IDAgJiYgc2EgKiBzYyA+IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBjbG9zZXN0IHBvaW50cyBvbiBBIGFuZCBCIGdpdmVuIHRoZSB0ZXJtaW5hdGlvbiBzaW1wbGV4IGFuZCBwbGFjZXNcbiAgICAgKiB0aGVtIGludG8gcG9pbnQxIGFuZCBwb2ludDIgb2YgdGhlIGdpdmVuIHtAbGluayBTZXBhcmF0aW9ufSBvYmplY3QuXG4gICAgICogPHA+XG4gICAgICogVGhlIHN1cHBvcnQgcG9pbnRzIHVzZWQgdG8gb2J0YWluIGEgYW5kIGIgYXJlIG5vdCBnb29kIGVub3VnaCBzaW5jZSB0aGUgc3VwcG9ydFxuICAgICAqIG1ldGhvZHMgb2Yge0BsaW5rIENvbnZleH0ge0BsaW5rIFNoYXBlfXMgb25seSByZXR1cm4gdGhlIGZhcnRoZXN0IDxlbT52ZXJ0ZXg8L2VtPiwgbm90XG4gICAgICogbmVjZXNzYXJpbHkgdGhlIGZhcnRoZXN0IHBvaW50LlxuICAgICAqIEBwYXJhbSBhIHRoZSBmaXJzdCBzaW1wbGV4IHBvaW50XG4gICAgICogQHBhcmFtIGIgdGhlIHNlY29uZCBzaW1wbGV4IHBvaW50XG4gICAgICogQHBhcmFtIHNlcGFyYXRpb24gdGhlIHtAbGluayBTZXBhcmF0aW9ufSBvYmplY3QgdG8gcG9wdWxhdGVcbiAgICAgKiBAc2VlIDxhIGhyZWY9XCJodHRwOi8vd3d3LmR5bjRqLm9yZy8yMDEwLzA0L2dqay1kaXN0YW5jZS1jbG9zZXN0LXBvaW50cy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HSksgLSBEaXN0YW5jZSAmYW1wOyBDbG9zZXN0IFBvaW50czwvYT5cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENsb3Nlc3RQb2ludHMoYSwgYiwgc2VwYXJhdGlvbilcbiAgICB7XG4gICAgICAgIGNvbnN0IHAxID0gbmV3IFZlY3RvcigpXG4gICAgICAgICAgICAsIHAyID0gbmV3IFZlY3RvcigpXG4gICAgICAgICAgICAsIGwgPSBWZWN0b3Iuc3VidHJhY3QoYS5wb2ludCwgYi5wb2ludCk7XG5cbiAgICAgICAgaWYgKGwuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHAxLnNldChhLnN1cHBvcnRQb2ludDEpO1xuICAgICAgICAgICAgcDIuc2V0KGEuc3VwcG9ydFBvaW50Mik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsbCA9IGwuZG90KGwpXG4gICAgICAgICAgICAgICAgLCBsMiA9IC1sLmRvdChhLnBvaW50KSAvIGxsXG4gICAgICAgICAgICAgICAgLCBsMSA9IDEgLSBsMjtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZWl0aGVyIGxhbWJkYTEgb3IgbGFtYmRhMiBpcyBsZXNzIHRoYW4gemVyb1xuICAgICAgICAgICAgaWYgKGwxIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGxhbWJkYTEgaXMgbGVzcyB0aGFuIHplcm8gdGhlbiB0aGF0IG1lYW5zIHRoYXRcbiAgICAgICAgICAgICAgICAvLyB0aGUgc3VwcG9ydCBwb2ludHMgb2YgdGhlIE1pbmtvd3NraSBwb2ludCBCIGFyZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBjbG9zZXN0IHBvaW50c1xuICAgICAgICAgICAgICAgIHAxLnNldChiLnN1cHBvcnRQb2ludDEpO1xuICAgICAgICAgICAgICAgIHAyLnNldChiLnN1cHBvcnRQb2ludDIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsMiA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBsYW1iZGEyIGlzIGxlc3MgdGhhbiB6ZXJvIHRoZW4gdGhhdCBtZWFucyB0aGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHN1cHBvcnQgcG9pbnRzIG9mIHRoZSBNaW5rb3dza2kgcG9pbnQgQSBhcmVcbiAgICAgICAgICAgICAgICAvLyB0aGUgY2xvc2VzdCBwb2ludHNcbiAgICAgICAgICAgICAgICBwMS5zZXQoYS5zdXBwb3J0UG9pbnQxKTtcbiAgICAgICAgICAgICAgICBwMi5zZXQoYS5zdXBwb3J0UG9pbnQyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY29tcHV0ZSB0aGUgY2xvc2VzdCBwb2ludHMgdXNpbmcgbGFtYmRhMSBhbmQgbGFtYmRhMlxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGV4cGFuZGVkIHZlcnNpb24gb2ZcbiAgICAgICAgICAgICAgICAvLyBwMSA9IGEucDEubXVsdGlwbHkobDEpLmFkZChiLnAxLm11bHRpcGx5KGwyKSk7XG4gICAgICAgICAgICAgICAgLy8gcDIgPSBhLnAyLm11bHRpcGx5KGwxKS5hZGQoYi5wMi5tdWx0aXBseShsMikpO1xuICAgICAgICAgICAgICAgIHAxLnggPSBhLnN1cHBvcnRQb2ludDEueCAqIGwxICsgYi5zdXBwb3J0UG9pbnQxLnggKiBsMjtcbiAgICAgICAgICAgICAgICBwMS55ID0gYS5zdXBwb3J0UG9pbnQxLnkgKiBsMSArIGIuc3VwcG9ydFBvaW50MS55ICogbDI7XG4gICAgICAgICAgICAgICAgcDIueCA9IGEuc3VwcG9ydFBvaW50Mi54ICogbDEgKyBiLnN1cHBvcnRQb2ludDIueCAqIGwyO1xuICAgICAgICAgICAgICAgIHAyLnkgPSBhLnN1cHBvcnRQb2ludDIueSAqIGwxICsgYi5zdXBwb3J0UG9pbnQyLnkgKiBsMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgdGhlIG5ldyBwb2ludHMgaW4gdGhlIHNlcGFyYXRpb24gb2JqZWN0XG4gICAgICAgIHNlcGFyYXRpb24ucG9pbnQxID0gcDE7XG4gICAgICAgIHNlcGFyYXRpb24ucG9pbnQyID0gcDI7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3Nlc3RQb2ludFRvT3JpZ2luKGEsIGIpXG4gICAge1xuICAgICAgICBjb25zdCBhYiA9IGEudG8oYilcbiAgICAgICAgICAgICwgYW8gPSBhLnRvKG5ldyBWZWN0b3IoKSlcbiAgICAgICAgICAgICwgcHJvakFvT250b0FiID0gYW8uZG90KGFiKVxuICAgICAgICAgICAgLCBsZW5ndGhTcXVhcmVkID0gYWIuZG90KGFiKVxuICAgICAgICAgICAgLCB0ID0gcHJvakFvT250b0FiIC8gbGVuZ3RoU3F1YXJlZFxuICAgICAgICAgICAgLCBjbG9zZXRQb2ludCA9IFZlY3Rvci5tdWx0aXBseVNjYWxhcihhYiwgdCkuYWRkKGEpXG4gICAgICAgICAgICAsIGQgPSBjbG9zZXRQb2ludC5tYWduaXR1ZGUoKTtcblxuICAgICAgICByZXR1cm4ge3BvaW50OiBjbG9zZXRQb2ludCwgZGVwdGg6IGR9O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcG9pbnQgb24gdGhlIGdpdmVuIGxpbmUgc2VnbWVudCBjbG9zZXN0IHRvIHRoZSBnaXZlbiBwb2ludC5cbiAgICAgKiA8cD5cbiAgICAgKiBJZiB0aGUgcG9pbnQgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gcG9pbnQgaXMgb24gdGhlIGxpbmUgY3JlYXRlZCBieSB0aGVcbiAgICAgKiBnaXZlbiBsaW5lIHNlZ21lbnQsIGJ1dCBpcyBub3Qgb24gdGhlIGxpbmUgc2VnbWVudCB0aGVuIGVpdGhlciBvZiB0aGUgc2VnbWVudHNcbiAgICAgKiBlbmQgcG9pbnRzIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICogPHA+XG4gICAgICogQXNzdW1lcyBhbGwgcG9pbnRzIGFyZSBpbiB3b3JsZCBzcGFjZS5cbiAgICAgKiBAc2VlIFNlZ21lbnQjZ2V0UG9pbnRPbkxpbmVDbG9zZXN0VG9Qb2ludChWZWN0b3IyLCBWZWN0b3IyLCBWZWN0b3IyKVxuICAgICAqIEBwYXJhbSBwb2ludCB0aGUgcG9pbnRcbiAgICAgKiBAcGFyYW0gbGluZVBvaW50MSB0aGUgZmlyc3QgcG9pbnQgb2YgdGhlIGxpbmVcbiAgICAgKiBAcGFyYW0gbGluZVBvaW50MiB0aGUgc2Vjb25kIHBvaW50IG9mIHRoZSBsaW5lXG4gICAgICogQHJldHVybiB7QGxpbmsgVmVjdG9yMn1cbiAgICAgKiBAdGhyb3dzIE51bGxQb2ludGVyRXhjZXB0aW9uIGlmIHBvaW50LCBsaW5lUG9pbnQxLCBvciBsaW5lUG9pbnQyIGlzIG51bGxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UG9pbnRPblNlZ21lbnRDbG9zZXN0VG9Qb2ludChwb2ludCwgbGluZVBvaW50MSwgbGluZVBvaW50MilcbiAgICB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHZlY3RvciBmcm9tIHRoZSBwb2ludCB0byB0aGUgZmlyc3QgbGluZSBwb2ludFxuICAgICAgICBjb25zdCBwMVRvUCA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludCwgbGluZVBvaW50MSlcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxpbmVcbiAgICAgICAgICAgICwgbGluZSA9IFZlY3Rvci5zdWJ0cmFjdChsaW5lUG9pbnQyLCBsaW5lUG9pbnQxKVxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBsZW5ndGggc3F1YXJlZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgLCBhYjIgPSBsaW5lLmRvdChsaW5lKVxuICAgICAgICAgICAgLCBhcF9hYiA9IHAxVG9QLmRvdChsaW5lKTtcblxuICAgICAgICBpZiAoYWIyIDw9IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgcmV0dXJuIGxpbmVQb2ludDEuY2xvbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0ID0gYXBfYWIgLyBhYjI7XG4gICAgICAgIHQgPSBjbGFtcCh0LCAwLjAsIDEuMCk7XG4gICAgICAgIHJldHVybiBsaW5lLm11bHRpcGx5U2NhbGFyKHQpLmFkZChsaW5lUG9pbnQxKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcmVhdGVDb252ZXhIdWxsKHBvaW50cylcbiAgICB7XG4gICAgICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICAgICAgdmFyIGkwID0gMDtcbiAgICAgICAgdmFyIHgwID0gcG9pbnRzWzBdLng7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHBvaW50c1tpXS54O1xuICAgICAgICAgICAgaWYgKHggPiB4MCB8fCAoeCA9PSB4MCAmJiBwb2ludHNbaV0ueSA8IHBvaW50c1tpMF0ueSkpIHtcbiAgICAgICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG4gPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICB2YXIgaHVsbCA9IFtdO1xuICAgICAgICB2YXIgbSA9IDA7XG4gICAgICAgIHZhciBpaCA9IGkwO1xuXG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgICAgIHZhciBpZSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciByID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tpZV0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2pdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciBjID0gVmVjdG9yLmNyb3NzKHIsIHYpO1xuICAgICAgICAgICAgICAgIGlmIChjIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ29sbGluZWFyaXR5IGNoZWNrXG4gICAgICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aFNxKCkgPiByLmxlbmd0aFNxKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbSsrO1xuICAgICAgICAgICAgaWggPSBpZTtcblxuICAgICAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb3B5IHZlcnRpY2VzXG4gICAgICAgIHZhciBuZXdQb2ludHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHBvaW50c1todWxsW2ldXTtcbiAgICAgICAgICAgIG5ld1BvaW50cy5wdXNoKG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1BvaW50cztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtaWRwb2ludChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoKGEueCArIGIueCkgLyAyLCAoYS55ICsgYi55KSAvIDIpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICBpZiAodmFsdWUgPD0gbWF4ICYmIHZhbHVlID49IG1pbikge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChtYXggPCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRlYnVnVmVydGljZXModmVydGljZXMpIHtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coaW5kZXgsIHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMScpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczEpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMicpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczIpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG59XG5cbmZ1bmN0aW9uIHN0cih2ZXJ0ZXgsIGlzRml4ZWQgPSBmYWxzZSkge1xuICAgIGlmIChpc0ZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYCgke3ZlcnRleC54fSwke3ZlcnRleC55fSlgO1xuICAgIH1cbiAgICByZXR1cm4gYCgke3ZlcnRleC54LnRvRml4ZWQoMil9LCR7dmVydGV4LnkudG9GaXhlZCgyKX0pYDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvR0pLLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmtvd3NraVN1bVBvaW50IHtcbiAgICBjb25zdHJ1Y3RvcihzdXBwb3J0UG9pbnQxLCBzdXBwb3J0UG9pbnQyKSB7XG4gICAgICAgIHRoaXMuc3VwcG9ydFBvaW50MSA9IHN1cHBvcnRQb2ludDE7XG4gICAgICAgIHRoaXMuc3VwcG9ydFBvaW50MiA9IHN1cHBvcnRQb2ludDI7XG4gICAgICAgIHRoaXMucG9pbnQgPSBWZWN0b3Iuc3VidHJhY3Qoc3VwcG9ydFBvaW50MSwgc3VwcG9ydFBvaW50Mik7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvTWlua293c2tpU3VtUG9pbnQuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uLy4uL3NyYy9WZWN0b3InO1xuaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi4vLi4vc3JjL0hpc3RvcnknO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uLy4uL3NyYy9namsvU2hhcGUnO1xuaW1wb3J0IENvbnN0cyBmcm9tICcuLi8uLi9zcmMvZ2prL0NvbnN0cyc7XG5pbXBvcnQgVmVydGljZXMgZnJvbSAnLi4vLi4vc3JjL2dqay9WZXJ0aWNlcyc7XG5pbXBvcnQgR0pLIGZyb20gJy4uLy4uL3NyYy9namsvR0pLJztcbmltcG9ydCBDb252ZXhIdWxsIGZyb20gJy4uLy4uL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwnO1xuaW1wb3J0IE1pbmtvd3NraURpZmZlcmVuY2UgZnJvbSAnLi4vLi4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlJztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCIuLi8uLi9zcmMvY29uc3RzL0tleUNvZGVcIjtcblxuXG5jb25zdCBUT1RBTCA9IDMwXG4gICAgLCBJTlRFUlZBTCA9IDYwMDAwMFxuICAgICwgU0NBTEUgPSBDb25zdHMuU0NBTEVcbiAgICAsIFNUQUdFID0gQ29uc3RzLlNUQUdFXG4gICAgLCBUT1BfTEVGVCA9IHt4OiAyLCB5OiAyfVxuICAgICwgVE9QX1JJR0hUID0ge3g6IDE3LCB5OiAxN31cbiAgICAsIFJBRF9UT19ERUcgPSAxODAgLyBNYXRoLlBJO1xuXG5jb25zdCB0cmlhbmdsZXMgPSBjcmVhdGVQb2x5Z29ucygzLCBUT1RBTCk7XG5jb25zdCByZWN0YW5nbGVzID0gY3JlYXRlUG9seWdvbnMoNCwgVE9UQUwpO1xuXG4vKmNvbnN0IHRyaWFuZ2xlcyA9IFtcbiAgICAvLyBbbmV3IFZlY3RvcigzLCAxKSwgbmV3IFZlY3RvcigzLCA1KSwgbmV3IFZlY3Rvcig2LCA0KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoNCwgMTEpLCBuZXcgVmVjdG9yKDQsIDUpLCBuZXcgVmVjdG9yKDksIDkpXSxcbiAgICAvLyBbbmV3IFZlY3RvcigwLCAtMSksIG5ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMSwgMyldLFxuICAgIFtuZXcgVmVjdG9yKDEwLCAxMyksIG5ldyBWZWN0b3IoMTEsIDE0KSwgbmV3IFZlY3RvcigxNCwgMTUpXSxcbl07XG5jb25zdCByZWN0YW5nbGVzID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDgsIDEpLCBuZXcgVmVjdG9yKDgsIDUpLCBuZXcgVmVjdG9yKDExLCA1KSwgbmV3IFZlY3RvcigxMSwgMSldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDUsIDcpLCBuZXcgVmVjdG9yKDcsIDMpLCBuZXcgVmVjdG9yKDEwLCAyKSwgbmV3IFZlY3RvcigxMiwgNyldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDIsIC0yKSwgbmV3IFZlY3Rvcig1LCAtMSksIG5ldyBWZWN0b3IoNCwgMiksIG5ldyBWZWN0b3IoMSwgMSldLFxuICAgIFtuZXcgVmVjdG9yKDksIDgpLCBuZXcgVmVjdG9yKDMsIDEyKSwgbmV3IFZlY3Rvcig0LCAxNSksIG5ldyBWZWN0b3IoMTQsIDE1KV0sXG5dOyovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci52aWV3O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMua2V5VXBMaXN0ZW5lciA9IHRoaXMub25LZXlVcC5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwTGlzdGVuZXIpO1xuXG4gICAgICAgIHRoaXMubW91c2VEb3duTGlzdGVuZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlDb2xsaXNpb24oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChzaGFwZSk7XG4gICAgICAgICAgICBzaGFwZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hhcGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuc2hhcGVzID0gW107XG5cbiAgICAgICAgaWYgKCF0aGlzLm1pbmtvd3NraSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5taW5rb3dza2kpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IGluZGV4MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRyaWFuZ2xlcy5sZW5ndGgpXG4gICAgICAgICAgICAsIGluZGV4MiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlY3RhbmdsZXMubGVuZ3RoKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczEgPSBuZXcgVmVydGljZXModHJpYW5nbGVzW2luZGV4MV0pXG4gICAgICAgICAgICAsIHZlcnRpY2VzMiA9IG5ldyBWZXJ0aWNlcyhyZWN0YW5nbGVzW2luZGV4Ml0pO1xuXG4gICAgICAgIHZlcnRpY2VzMS5tdWx0aXBseShTQ0FMRSk7XG4gICAgICAgIHZlcnRpY2VzMi5tdWx0aXBseShTQ0FMRSk7XG5cbiAgICAgICAgY29uc3Qgc2hhcGUxID0gbmV3IFNoYXBlKHZlcnRpY2VzMS52ZXJ0aWNlcywgU0NBTEUpXG4gICAgICAgICAgICAsIHNoYXBlMiA9IG5ldyBTaGFwZSh2ZXJ0aWNlczIudmVydGljZXMsIFNDQUxFKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kgPSBuZXcgTWlua293c2tpRGlmZmVyZW5jZSh2ZXJ0aWNlczEudmVydGljZXMsIHZlcnRpY2VzMi52ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMubWlua293c2tpLnggPSAoU1RBR0Uud2lkdGggLyAzKSAqIDI7XG4gICAgICAgIHRoaXMubWlua293c2tpLnkgPSAoU1RBR0UuaGVpZ2h0IC8gMykgKiAyO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2hhcGUxKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChzaGFwZTIpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlua293c2tpKTtcblxuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlMSk7XG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUyKTtcblxuICAgICAgICB2ZXJ0aWNlczEuZGl2aWRlKFNDQUxFKTtcbiAgICAgICAgdmVydGljZXMyLmRpdmlkZShTQ0FMRSk7XG5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBIaXN0b3J5KCk7XG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbiA9IEdKSy5jaGVja0NvbGxpc2lvbih2ZXJ0aWNlczEudmVydGljZXMsIHZlcnRpY2VzMi52ZXJ0aWNlcywgaGlzdG9yeSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJycpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDT0xMSVNJT04gWycsIGNvbGxpc2lvbiwgJ10nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0hJU1RPUlkgWycsIGhpc3RvcnksICddJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5Q29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheUNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmRpc3BsYXlDb2xsaXNpb24sIElOVEVSVkFMKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7fVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cblxuICAgIG9uS2V5VXAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICog65GQ67Kh7YSwIOyCrOydtOqwgSDqtaztlZjquLBcbiAqIEBwYXJhbSBhXG4gKiBAcGFyYW0gYlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0QW5nbGUoYSwgYikge1xuICAgIGEgPSBuZXcgVmVjdG9yKGEueCwgYS55KS5ub3JtKCk7XG4gICAgYiA9IG5ldyBWZWN0b3IoYi54LCBiLnkpLm5vcm0oKTtcbiAgICBjb25zdCByYWRpYW4gPSBNYXRoLmFjb3MoVmVjdG9yLmRvdFByb2R1Y3QoYSwgYikpO1xuICAgIHJldHVybiByYWRpYW4gKiBSQURfVE9fREVHO1xufVxuXG5cbi8qKlxuICog656c642k7Jy866GcIOyijO2RnOulvCDsg53shLHtlZjqs6AgY29udmV4IGh1bGwg7J2EIOunjOuTpOuptCBPS1xuICogQHBhcmFtIHBvbHlnb25cbiAqIEBwYXJhbSB0b3RhbFxuICovXG5mdW5jdGlvbiBjcmVhdGVQb2x5Z29ucyhwb2x5Z29uLCB0b3RhbCkge1xuICAgIGxldCB2ZXJ0aWNlcztcbiAgICBjb25zdCBwb2x5Z29ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgIHZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb2x5Z29uOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlY3Rvci5yYW5kb21pemUoVE9QX0xFRlQsIFRPUF9SSUdIVCk7XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG5cbiAgICAgICAgICAgIGlmIChqID09PSBwb2x5Z29uIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZleEh1bGwgPSBDb252ZXhIdWxsLmdlbmVyYXRlKHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IGNvbnZleEh1bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwb2x5Z29ucy5wdXNoKHZlcnRpY2VzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9seWdvbnM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L2dqay9UZXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
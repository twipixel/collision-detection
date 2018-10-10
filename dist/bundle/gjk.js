webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(348);
	
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Consts = __webpack_require__(338);
	
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
	
	        _classCallCheck(this, Shape);
	
	        var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this));
	
	        var color = _PastelColor2.default.generate();
	        _this.vertices = vertices;
	        _this.lineColor = color.hex;
	        _this.textColor = color.hexShap;
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
	            g.lineStyle(1, this.lineColor, 0.5);
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

/***/ 338:
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

/***/ 339:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vertices = function () {
	    function Vertices() {
	        var vertices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	        _classCallCheck(this, Vertices);
	
	        this.vertices = vertices;
	    }
	
	    _createClass(Vertices, [{
	        key: "multiply",
	        value: function multiply(scalar) {
	            this.vertices.forEach(function (vertex) {
	                vertex.x *= scalar;
	                vertex.y *= scalar;
	            });
	        }
	    }, {
	        key: "divide",
	        value: function divide(scalar) {
	            this.vertices.forEach(function (vertex) {
	                vertex.x /= scalar;
	                vertex.y /= scalar;
	            });
	        }
	    }]);
	
	    return Vertices;
	}();
	
	exports.default = Vertices;

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
	
	var _Point = __webpack_require__(328);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _ConvexHull = __webpack_require__(330);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _PastelColor = __webpack_require__(329);
	
	var _PastelColor2 = _interopRequireDefault(_PastelColor);
	
	var _Consts = __webpack_require__(338);
	
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

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Shape = __webpack_require__(337);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Consts = __webpack_require__(338);
	
	var _Consts2 = _interopRequireDefault(_Consts);
	
	var _Vertices = __webpack_require__(339);
	
	var _Vertices2 = _interopRequireDefault(_Vertices);
	
	var _GJK = __webpack_require__(349);
	
	var _GJK2 = _interopRequireDefault(_GJK);
	
	var _ConvexHull = __webpack_require__(330);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _MinkowskiDifference = __webpack_require__(340);
	
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
	
	// const triangles = createPolygons(3, TOTAL);
	// const rectangles = createPolygons(4, TOTAL);
	
	var triangles = [
	// [new Vector(3, 1), new Vector(3, 5), new Vector(6, 4)],
	// [new Vector(4, 11), new Vector(4, 5), new Vector(9, 9)],
	// [new Vector(0, -1), new Vector(3, 1), new Vector(1, 3)],
	[new _Vector2.default(10, 13), new _Vector2.default(11, 14), new _Vector2.default(14, 15)]];
	var rectangles = [
	// [new Vector(8, 1), new Vector(8, 5), new Vector(11, 5), new Vector(11, 1)],
	// [new Vector(5, 7), new Vector(7, 3), new Vector(10, 2), new Vector(12, 7)],
	// [new Vector(2, -2), new Vector(5, -1), new Vector(4, 2), new Vector(1, 1)],
	[new _Vector2.default(9, 8), new _Vector2.default(3, 12), new _Vector2.default(4, 15), new _Vector2.default(14, 15)]];
	
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
	
	            var collision = _GJK2.default.checkCollision(vertices1.vertices, vertices2.vertices);
	
	            console.log('');
	            console.log('---------------------------');
	            console.log('COLLISION [', collision, ']');
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

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(350);
	
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
	         * @returns {boolean} 충돌 여부
	         */
	
	    }, {
	        key: 'checkCollision',
	        value: function checkCollision(vertices1, vertices2) {
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
	                simplex = new Array(3);
	
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
	            console.log(str(a), str(d, true), _Vector2.default.dotProduct(a, d).toFixed(2));
	
	            // support 점과 방향이 같은 방향이 아닐 경우
	            if (_Vector2.default.dotProduct(a, d) <= 0) {
	                // 마지막에 추가 된 점이 d의 방향으로 원점을 지나치지 않은 경우
	                // 그 다음 Minkowski 합은 원점을 포함 할 수 없습니다.
	                // 추가 된 마지막 점은 Minkowski Difference의 가장자리에 있습니다.
	                console.log('CASE1[', 'NO', ']');
	                return false; // no collision
	            }
	
	            d = _Vector2.default.negate(a); // The next search direction is always towards the origin, so the next search direction is negate(a)
	
	            while (true) {
	                iterCount++;
	
	                console.log('');
	                console.log(iterCount);
	
	                a = simplex[++index] = this.support(vertices1, vertices2, d);
	
	                if (_Vector2.default.dotProduct(a, d) <= 0) {
	                    console.log(str(a), str(d, true), _Vector2.default.dotProduct(a, d).toFixed(2));
	                    console.log('CASE2[', 'NO', ']');
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
	                        return true; // collision
	                    }
	
	                    simplex[0] = simplex[1]; // swap first element (point C)
	                    d = abperp; // new direction is normal to AB towards Origin
	                }
	
	                simplex[1] = simplex[2]; // swap element in the middle (point B)
	                --index;
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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _GJK = __webpack_require__(349);
	
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
	            left.multiplyScalar(5);
	            right.multiplyScalar(5);
	            vector.invert().multiplyScalar(15);
	
	            graphics.lineTo(movePoint.x + vector.x, movePoint.y + vector.y);
	            graphics.moveTo(movePoint.x, movePoint.y);
	            graphics.lineTo(movePoint.x + left.x, movePoint.y + left.y);
	            graphics.moveTo(movePoint.x, movePoint.y);
	            graphics.lineTo(movePoint.x + right.x, movePoint.y + right.y);
	        }
	    }]);
	
	    return Painter;
	}();
	
	exports.default = Painter;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2dqay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vUG9pbnQuanM/ZjA1YSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanM/OTZmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsLmpzP2YyOTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdXNlLmpzPzkyNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9TaGFwZS5qcz81YWY1Iiwid2VicGFjazovLy8uL3NyYy9namsvQ29uc3RzLmpzPzIxMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9WZXJ0aWNlcy5qcz9jZDYzIiwid2VicGFjazovLy8uL3NyYy9namsvTWlua293c2tpRGlmZmVyZW5jZS5qcz9jMzYxIiwid2VicGFjazovLy8uL3Rlc3QvZ2prL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9HSksuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1BhaW50ZXIuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibWFpbiIsIk1haW4iLCJjYW52YXMiLCJyZW5kZXJlciIsInN0YWdlIiwidGVzdCIsImNvbnRhaW5lciIsImluaXQiLCJhZGRFdmVudCIsIm9uUmVzaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlBJWEkiLCJDYW52YXNSZW5kZXJlciIsIndpZHRoIiwiaGVpZ2h0IiwidmlldyIsImF1dG9SZXNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb250YWluZXIiLCJhZGRDaGlsZCIsInVwZGF0ZUxvb3AiLCJyZXNpemVXaW5kb3ciLCJvbnJlc2l6ZSIsImJpbmQiLCJtcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltRnJhbWUiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJyZXNpemUiLCJkZWdyZWVzIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwibWluIiwibWF4IiwiZmxvb3IiLCJyYWRpYW4yZGVncmVlcyIsInJhZCIsImRlZ3JlZXMycmFkaWFuIiwiZGVnIiwiVmVjdG9yIiwiYXJyIiwib2JqIiwieCIsInkiLCJ2ZWMiLCJzY2FsYXIiLCJzdWJ0cmFjdCIsInZlY3RvciIsImludmVydFgiLCJpbnZlcnRZIiwibGVuZ3RoIiwiZGl2aWRlIiwibm9ybWFsaXplIiwiZmFjdG9yIiwiYWJzIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwicmFuZG9taXplWCIsInJhbmRvbWl6ZVkiLCJyb3VuZCIsInByZWNpc2lvbiIsInRvRml4ZWQiLCJhbW91bnQiLCJtaXhYIiwibWl4WSIsImNvcHlYIiwiY29weVkiLCJ0ZW1wIiwidmVjMiIsImRvdCIsImNvZWZmIiwiYXRhbjIiLCJob3Jpem9udGFsQW5nbGUiLCJ2ZXJ0aWNhbEFuZ2xlIiwiaG9yaXpvbnRhbEFuZ2xlRGVnIiwiYW5nbGUiLCJueCIsImNvcyIsInNpbiIsIm55Iiwicm90YXRlIiwicm90YXRpb24iLCJyb3RhdGVUbyIsInJvdGF0ZUJ5IiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3FydCIsImRpc3RhbmNlU3EiLCJkaXJlY3Rpb24iLCJkeCIsImR5IiwibGVuZ3RoU3EiLCJhIiwiYiIsInYiLCJjbG9uZSIsInJldCIsIm11bHRpcGx5U2NhbGFyIiwiYyIsInIiLCJhYyIsImJjIiwidmVjMSIsInRvIiwiYWRkIiwiUG9pbnQiLCJyYWRpdXMiLCJjb2xvciIsImFscGhhIiwiYnV0dG9uTW9kZSIsImludGVyYWN0aXZlIiwiY2xlYXIiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImx0IiwicmIiLCJwb3NpdGlvbiIsInJhbmRvbWl6ZSIsImZyb21PYmplY3QiLCJHcmFwaGljcyIsIlBhc3RlbENvbG9yIiwiaEJhc2UiLCJuZXdIIiwibmV3TCIsIkhTTHRvUkdCIiwiZyIsImhzbCIsInJnYiIsImhleCIsIlJHQnRvSGV4IiwiaGV4U2hhcCIsImgiLCJzIiwibCIsInJkIiwiaHVlVG9SR0IiLCJtIiwibiIsIm8iLCJxIiwicCIsInByZWZpeCIsInRvU3RyaW5nIiwiQ29udmV4SHVsbCIsInBvaW50cyIsInN0YWNrIiwic29ydCIsInNvcnRMb3dlcllYIiwiYmFzZVBvaW50IiwiaSIsInJlbGF0aXZlUG9zaXRpb24iLCJzb3J0Q2N3IiwicHVzaCIsIm5leHQiLCJmaXJzdCIsInNlY29uZCIsInBvcCIsImlzQ2N3IiwiY29udmV4SHVsbCIsImluZGV4IiwicG9pbnQiLCJwb2ludEEiLCJwb2ludEIiLCJwb2ludEMiLCJ0cmlhbmdsZUFyZWEiLCJkZWJ1Z0FycmF5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvbnZleEh1bGwiLCJpMCIsIngwIiwiaHVsbCIsImloIiwiaWUiLCJqIiwic3ViIiwiY3Jvc3MiLCJsZW5ndGhzcSIsIm5ld1BvaW50cyIsIk1vdXNlIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwicHJldlRpbWUiLCJjdXJyZW50VGltZSIsImRpZmZYIiwiZGlmZlkiLCJwbHVnaW5zIiwiaW50ZXJhY3Rpb24iLCJtb3VzZSIsInBvaW50ZXIiLCJ2YWx1ZSIsIl9yZW5kZXJlciIsIl9tb3VzZSIsIkRFU0tUT1BfTU9VU0UiLCJnbG9iYWwiLCJjdXJyZW50Q3Vyc29yU3R5bGUiLCJEYXRlIiwiZ2V0VGltZSIsIkZPTlRfU0laRSIsIlNDQUxFIiwiU2hhcGUiLCJ2ZXJ0aWNlcyIsImdlbmVyYXRlIiwibGluZUNvbG9yIiwidGV4dENvbG9yIiwiZ3JhcGhpY3MiLCJsYWJlbHMiLCJjcmVhdGVMYWJlbCIsImRyYXciLCJ0ZXh0IiwiVGV4dCIsImFsaWduIiwiZm9udCIsImZpbGwiLCJ2aXNpYmxlIiwib3JpZ2luIiwibGluZVN0eWxlIiwibW92ZVRvIiwiZm9yRWFjaCIsInZlcnRleCIsImxpbmVUbyIsImxhYmVsIiwiZGl2aWRlU2NhbGFyIiwicmVtb3ZlQ2hpbGQiLCJDb25zdHMiLCJWZXJ0aWNlcyIsIlNUQUdFIiwiRk9OVF9DT0xPUiIsIkFYRVNfTElORV9DT0xPUiIsIkNPTlZFWF9IVUxMX0xJTkVfQ09MT1IiLCJNaW5rb3dza2lEaWZmZXJlbmNlIiwidmVydGljZXMxIiwidmVydGljZXMyIiwiZ2V0VmVydGljZXMiLCJ0ZXh0cyIsImRyYXdBeGVzIiwiZHJhd1ZldGljZXMiLCJkcmF3UG9seWdvbiIsImRyYXdUZXh0IiwiaHciLCJoaCIsIlRPVEFMIiwiSU5URVJWQUwiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIlJBRF9UT19ERUciLCJ0cmlhbmdsZXMiLCJyZWN0YW5nbGVzIiwiVGVzdCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW5pdGlhbGl6ZSIsInNoYXBlcyIsImtleVVwTGlzdGVuZXIiLCJvbktleVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRG93bkxpc3RlbmVyIiwib25Nb3VzZURvd24iLCJvbiIsImNoZWNrQ29sbGlzaW9uIiwic2hhcGUiLCJkZXN0cm95IiwibWlua293c2tpIiwiaW5kZXgxIiwiaW5kZXgyIiwibXVsdGlwbHkiLCJzaGFwZTEiLCJzaGFwZTIiLCJjb2xsaXNpb24iLCJpbnRlcnZhbElkIiwiY2xlYXJJbnRlcnZhbCIsImRpc3BsYXlDb2xsaXNpb24iLCJkaXNwbGF5Iiwic2V0SW50ZXJ2YWwiLCJoaXRBcmVhIiwiUmVjdGFuZ2xlIiwiZSIsImtleUNvZGUiLCJTUEFDRSIsImdldEFuZ2xlIiwibm9ybSIsInJhZGlhbiIsImFjb3MiLCJkb3RQcm9kdWN0IiwiY3JlYXRlUG9seWdvbnMiLCJwb2x5Z29uIiwidG90YWwiLCJwb2x5Z29ucyIsIkdKSyIsImF2ZyIsImNvdW50IiwibWF4UHJvZHVjdCIsInByb2R1Y3QiLCJpbmRleE9mRnVydGhlc3RQb2ludCIsIm5lZ2F0ZSIsInN0ciIsIml0ZXJDb3VudCIsImQiLCJhbyIsImFiIiwiYWJwZXJwIiwiYWNwZXJwIiwic2ltcGxleCIsIkFycmF5IiwicG9zaXRpb24xIiwiYXZlcmFnZVBvaW50IiwicG9zaXRpb24yIiwic3VwcG9ydCIsInRyaXBsZVByb2R1Y3QiLCJwZXJwZW5kaWN1bGFyIiwiZGVidWdWZXJ0aWNlcyIsImNvbnNvbGVWZXJ0aWNlcyIsImlzRml4ZWQiLCJQYWludGVyIiwicGF0aCIsInYxIiwidjIiLCJkaWZmIiwiY29udmV4SHVsbFBhdGgiLCJsaW5lV2lkdGgiLCJ2ZWMwIiwibWFnbmlmaWNhdGlvbiIsInN0cmluZyIsImlzQ2xlYXIiLCJib3VuZHMiLCJ0aGlja25lc3MiLCJkcmF3UmVjdCIsInJlY3QiLCJydCIsImxiIiwicDEiLCJwMiIsInAwIiwibW92ZVBvaW50IiwidG9Qb2ludCIsImxlZnQiLCJpbnZlcnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVDLGNBQVk7QUFDVEEsWUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGFBQU1DLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0gsTUFGRDtBQUdILEVBSkEsR0FBRDs7QUFNQSxLQUFJQyxlQUFKO0FBQUEsS0FBWUMsaUJBQVo7QUFBQSxLQUFzQkMsY0FBdEI7QUFBQSxLQUE2QkMsYUFBN0I7QUFBQSxLQUFtQ0Msa0JBQW5DOztLQUVNTCxJO0FBQ0YscUJBQWM7QUFBQTs7QUFDVixjQUFLTSxJQUFMO0FBQ0EsY0FBS0MsUUFBTDtBQUNBLGNBQUtDLFFBQUw7QUFDSDs7OztnQ0FFTTtBQUNIUCxzQkFBU1EsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFUOztBQUVBUix3QkFBVyxJQUFJUyxLQUFLQyxjQUFULENBQXdCWCxPQUFPWSxLQUEvQixFQUFzQ1osT0FBT2EsTUFBN0MsRUFBcUQ7QUFDNURDLHVCQUFNZCxNQURzRDtBQUU1RGUsNkJBQVksSUFGZ0Q7QUFHNURDLGtDQUFpQjtBQUgyQyxjQUFyRCxDQUFYOztBQU1BLDZCQUFNZixRQUFOLEdBQWlCQSxRQUFqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFDLHFCQUFR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UyxDQUExQixFQUE2Qm9TLFVBQVVuUyxDQUF2QztBQUNBbUssc0JBQVNlLE1BQVQsQ0FBZ0JpSCxVQUFVcFMsQ0FBVixHQUFjc1MsS0FBS3RTLENBQW5DLEVBQXNDb1MsVUFBVW5TLENBQVYsR0FBY3FTLEtBQUtyUyxDQUF6RDtBQUNBbUssc0JBQVNZLE1BQVQsQ0FBZ0JvSCxVQUFVcFMsQ0FBMUIsRUFBNkJvUyxVQUFVblMsQ0FBdkM7QUFDQW1LLHNCQUFTZSxNQUFULENBQWdCaUgsVUFBVXBTLENBQVYsR0FBY3dTLE1BQU14UyxDQUFwQyxFQUF1Q29TLFVBQVVuUyxDQUFWLEdBQWN1UyxNQUFNdlMsQ0FBM0Q7QUFDSDs7Ozs7O21CQTNMZ0IrUSxPIiwiZmlsZSI6Imdqay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi9UZXN0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gJy4vLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlJztcbmltcG9ydCBNb3VzZSBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL01vdXNlXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG4gICAgfVxufSgpKTtcblxubGV0IGNhbnZhcywgcmVuZGVyZXIsIHN0YWdlLCB0ZXN0LCBjb250YWluZXI7XG5cbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG4gICAgICAgIHJlbmRlcmVyID0gbmV3IFBJWEkuQ2FudmFzUmVuZGVyZXIoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCB7XG4gICAgICAgICAgICB2aWV3OiBjYW52YXMsXG4gICAgICAgICAgICBhdXRvUmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDMzMzgzRFxuICAgICAgICB9KTtcblxuICAgICAgICBNb3VzZS5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgICAgIC8vIOychOy5mOqwgCDsoJXsiJjqsIAg7JWE64uQ6rK97JqwIO2dkOumv+2VmOqyjCDrs7TsnbTripQg66y47KCc6rCAIOyeiOyWtFxuICAgICAgICAvLyDroIzrjZTrn6zsnZgg7JyE7LmY66W8IOygleyImOuhnCDsl7DsgrDrkKAg7IiYIOyeiOuPhOuhnSDtlZzri6QuXG4gICAgICAgIC8vcmVuZGVyZXIucm91bmRQaXhlbHMgPSB0cnVlO1xuXG4gICAgICAgIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBzdGFnZS5hZGRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHRlc3QgPSBuZXcgVGVzdChyZW5kZXJlcik7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRlc3QpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTG9vcCgpO1xuICAgICAgICB0aGlzLnJlc2l6ZVdpbmRvdygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTG9vcCAobXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobXMpO1xuICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobXMpIHtcbiAgICAgICAgdGVzdC51cGRhdGUoKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHN0YWdlKTtcbiAgICB9XG5cbiAgICByZXNpemVXaW5kb3coKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOy6lOuyhOyKpCDsgqzsnbTspojsmYAg65SU7Iqk7ZSM66CI7J20IOyCrOydtOymiCDshKTsoJVcbiAgICAgICAgICog66CI7Yuw64KYIOq3uOuemO2UvSDsp4Dsm5Ag7L2U65OcXG4gICAgICAgICAqL1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUElYSSByZW5kZXJlciDrpqzsgqzsnbTspohcbiAgICAgICAgICogUElYSSDsl5Dqsowgdmlld3BvcnQg7IKs7J207KaIIOuzgOqyvSDslYzrprxcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgdGVzdC5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvZ2prL2luZGV4LmpzIiwiXG5cbmNvbnN0IGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5cbmZ1bmN0aW9uIHJhbmRvbSAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn1cblxuZnVuY3Rpb24gcmFkaWFuMmRlZ3JlZXMgKHJhZCkge1xuICAgIHJldHVybiByYWQgKiBkZWdyZWVzO1xufVxuXG5mdW5jdGlvbiBkZWdyZWVzMnJhZGlhbiAoZGVnKSB7XG4gICAgcmV0dXJuIGRlZyAvIGRlZ3JlZXM7XG59XG5cblxuLyoqXG4gKiBWaWN0b3IuanPrpbwgRVM266GcIOuzgO2ZmO2VmOyXrCDsgqzsmqntlZjqs6Ag7J6I7Iq164uI64ukLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21heGt1ZW5nL3ZpY3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JcbntcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gYXJyYXlcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IFZlY3Rvci5mcm9tQXJyYXkoWzQyLCAyMV0pO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gICAgICpcbiAgICAgKiBAbmFtZSBWZWN0b3IuZnJvbUFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgd2l0aCB0aGUgeCBhbmQgeSB2YWx1ZXMgYXQgaW5kZXggMCBhbmQgMSByZXNwZWN0aXZlbHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYXJyWzBdIHx8IDAsIGFyclsxXSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3RcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IFZlY3Rvci5mcm9tT2JqZWN0KHsgeDogNDIsIHk6IDIxIH0pO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gICAgICpcbiAgICAgKiBAbmFtZSBWZWN0b3IuZnJvbU9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHdpdGggdGhlIHZhbHVlcyBmb3IgeCBhbmQgeVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21PYmplY3Qob2JqKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3Iob2JqLnggfHwgMCwgb2JqLnkgfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci4gV2lsbCBhbHNvIHdvcmsgd2l0aG91dCB0aGUgYG5ld2Aga2V5d29yZFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gVmVjdG9yKDQyLCAxMzM3KTtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IFZhbHVlIG9mIHRoZSB4IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSBWYWx1ZSBvZiB0aGUgeSBheGlzXG4gICAgICogQHJldHVybiB7VmVjdG9yfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKVxuICAgIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBYIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjMwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFkgYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjMwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCArIGIueCwgYS55ICsgYi55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gYm90aCB2ZWN0b3IgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMywgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMywgeTogMlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWSgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBYIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFkgYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3QodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc3VidHJhY3QoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAtIGIueCwgYS55IC0gYi55KTtcbiAgICB9XG5cblxuICAgIGVkZ2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBlZGdlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gVmVjdG9yLnN1YnRyYWN0KGEsIGIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhcigyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiA4MCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWCgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiA4MCwgeTogMjAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclkoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMTAwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgeCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlWCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSB5IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlWSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgLz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IGEgYXhpcyB2YWx1ZXMgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGUodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgLz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC8gYi54LCBhLnkgLyBiLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWSgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRYKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4Oi0xMDAsIHk6NTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFgoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WSgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6LTUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRZKClcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4Oi0xMDAsIHk6LTUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pbnZlcnRYKCk7XG4gICAgICAgIHRoaXMuaW52ZXJ0WSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBuZWdhdGUodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgdiA9IHZlYy5jbG9uZSgpO1xuICAgICAgICB2LnggPSAtdmVjLng7XG4gICAgICAgIHYueSA9IC12ZWMueTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFggYXhpcyBieSBYIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBZIGF4aXMgYnkgWSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB2YWx1ZXMgZnJvbSBhIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtdWx0aXBseVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogc2NhbGFyLCB2ZWN0b3IueSAqIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlU2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggLyBzY2FsYXIsIHZlY3Rvci55IC8gc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICg5MCDrj4Qg7ZqM7KCEKVxuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgcGVycGVuZGljdWxhcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHBlcnBlbmRpY3VsYXIodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUueCA9IC12ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IHZlYy54O1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoLTkwIOuPhCDtmozsoIQpXG4gICAgICovXG4gICAgcmV0dXJuUGVycGVuZGljdWxhcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnksIC10aGlzLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJldHVyblBlcnBlbmRpY3VsYXIodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUueCA9IHZlYy55O1xuICAgICAgICBjbG9uZS55ID0gLXZlYy54O1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrsoTrprxcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHBhcmFtIGxlbmd0aFxuICAgICAqL1xuICAgIHN0YXRpYyB0cnVuY2F0ZSh2ZWMsIGxlbmd0aClcbiAgICB7XG4gICAgICAgIGNvbnN0IHJldCA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBsZW5ndGhTcSA9IHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgICAgICBpZiAobGVuZ3RoU3EgPiBsZW5ndGggKiBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldC5tdWx0aXBseVNjYWxhcihsZW5ndGggLyBNYXRoLnNxcnQobGVuZ3RoU3EpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXplXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBub3JtYWxpemUoKVxuICAgIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAxO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGl2aWRlKG5ldyBWZWN0b3IobGVuZ3RoLCBsZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG5vcm0oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgYWJzb2x1dGUgdmVjdG9yIGF4aXMgaXMgZ3JlYXRlciB0aGFuIGBtYXhgLCBtdWx0aXBsaWVzIHRoZSBheGlzIGJ5IGBmYWN0b3JgXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5saW1pdCg4MCwgMC45KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6OTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggVGhlIG1heGltdW0gdmFsdWUgZm9yIGJvdGggeCBhbmQgeSBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZhY3RvciBGYWN0b3IgYnkgd2hpY2ggdGhlIGF4aXMgYXJlIHRvIGJlIG11bHRpcGxpZWQgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxpbWl0KG1heCwgZmFjdG9yKVxuICAgIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueCkgPiBtYXgpeyB0aGlzLnggKj0gZmFjdG9yOyB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnkpID4gbWF4KXsgdGhpcy55ICo9IGZhY3RvcjsgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWl6ZXMgYm90aCB2ZWN0b3IgYXhpcyB3aXRoIGEgdmFsdWUgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwYCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo2NywgeTo3M1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCksIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCkpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdGhpcy54ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHJldHVybiByYW5kb20obWluLCBtYXgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdGhpcy55ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHJldHVybiByYW5kb20obWluLCBtYXgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9tbHkgcmFuZG9taXplcyBlaXRoZXIgYXhpcyBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplQW55KG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Ojc3XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZUFueSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGlmICghISBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYW4gaW50ZWdlciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAuMiwgNTAuOSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB1bmZsb2F0KClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYSBjZXJ0YWluIHByZWNpc2lvblxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAuMiwgNTAuOSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gUHJlY2lzaW9uIChkZWZhdWx0OiA4KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvRml4ZWQocHJlY2lzaW9uKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVjaXNpb24gPT09ICd1bmRlZmluZWQnKSB7IHByZWNpc2lvbiA9IDg7IH1cbiAgICAgICAgdGhpcy54ID0gdGhpcy54LnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55LnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFggYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXhYKHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjE1MCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXhYKHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSAoMSAtIGFtb3VudCkgKiB0aGlzLnggKyBhbW91bnQgKiB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFkgYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXhZKHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxNTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXhZKHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnkgPSAoMSAtIGFtb3VudCkgKiB0aGlzLnkgKyBhbW91bnQgKiB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4KHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjE1MCwgeToxNTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICB0aGlzLm1peFgodmVjLCBhbW91bnQpO1xuICAgICAgICB0aGlzLm1peFkodmVjLCBhbW91bnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICMgUHJvZHVjdHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNsb25lKCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IEEgY2xvbmUgb2YgdGhlIHZlY3RvclxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY2xvbmUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WCh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFkgY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGFuZCBZIGNvbXBvbmVudHMgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5KHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLmNvcHlYKHZlYyk7XG4gICAgICAgIHRoaXMuY29weVkodmVjKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2ZWN0b3IgdG8gemVybyAoMCwwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKlx0XHQgdmFyMS56ZXJvKCk7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDowLCB5OjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHplcm8oKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgdmVjdG9yIHRvIHRoZSBsZWZ0LWhhbmRlZCBub3JtYWwgb2YgdGhpcyB2ZWN0b3IuXG4gICAgICogQHJldHVybiB7VmVjdG9yfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldExlZnRIYW5kT3J0aG9nb25hbFZlY3RvcigpXG4gICAgICovXG4gICAgbGVmdCgpXG4gICAge1xuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IC10ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIHJpZ2h0LWhhbmRlZCBub3JtYWwgb2YgdGhpcyB2ZWN0b3IuXG4gICAgICogQHJldHVybiB7QGxpbmsgVmVjdG9yMn0gdGhpcyB2ZWN0b3JcbiAgICAgKiBAc2VlICNnZXRSaWdodEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICByaWdodCgpXG4gICAge1xuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSAtdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSB0ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRvdCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMjMwMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERvdCBwcm9kdWN0XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkb3QodmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2ZWMyLnggKyB0aGlzLnkgKiB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICBkb3RQcm9kdWN0KHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRvdFByb2R1Y3QoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG4gICAgfVxuXG5cbiAgICBjcm9zcyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKiB2ZWMyLnkpIC0gKHRoaXMueSAqIHZlYzIueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3Jvc3MoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnkgLSBhLnkgKiBiLng7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20va3JvaXRvci9namsuY1xuICAgICAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RyaXBsZV9wcm9kdWN0I1ZlY3Rvcl90cmlwbGVfcHJvZHVjdFxuICAgICAqIOyEuOq3uOuovO2KuOyXkOyEnCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuwqe2WpeydhCDssL7snYQg65WMIOyCrOyaqVxuICAgICAqL1xuICAgIHN0YXRpYyB0cmlwbGVQcm9kdWN0KGEsIGIsIGMpXG4gICAge1xuICAgICAgICBjb25zdCByID0gbmV3IFZlY3RvcigpO1xuICAgICAgICBjb25zdCBhYyA9IGEueCAqIGMueCArIGEueSAqIGMueSAgICAvLyBwZXJmb3JtIGEuZG90KGMpXG4gICAgICAgICAgICAsIGJjID0gYi54ICogYy54ICsgYi55ICogYy55OyAgIC8vIHBlcmZvcm0gYi5kb3QoYylcblxuICAgICAgICAvLyBwZXJmb3JtIGIgKiBhLmRvdChjKSAtIGEgKiBiLmRvdChjKVxuICAgICAgICByLnggPSBiLnggKiBhYyAtIGEueCAqIGJjO1xuICAgICAgICByLnkgPSBiLnkgKiBhYyAtIGEueSAqIGJjO1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHJvamVjdHMgYSB2ZWN0b3Igb250byBhbm90aGVyIHZlY3Rvciwgc2V0dGluZyBpdHNlbGYgdG8gdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucHJvamVjdE9udG8odmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gcHJvamVjdCB0aGlzIHZlY3RvciBvbnRvXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcHJvamVjdE9udG8odmVjMilcbiAgICB7XG4gICAgICAgIHZhciBjb2VmZiA9ICggKHRoaXMueCAqIHZlYzIueCkrKHRoaXMueSAqIHZlYzIueSkgKSAvICgodmVjMi54KnZlYzIueCkrKHZlYzIueSp2ZWMyLnkpKTtcbiAgICAgICAgdGhpcy54ID0gY29lZmYgKiB2ZWMyLng7XG4gICAgICAgIHRoaXMueSA9IGNvZWZmICogdmVjMi55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyEoO2YlSDrs7TqsIRcbiAgICAgKiBodHRwOi8vZGV2ZWxvcHVnLmJsb2dzcG90LmNvbS8yMDE0LzA5L3VuaXR5LXZlY3Rvci1sZXJwLmh0bWxcbiAgICAgKiBAcGFyYW0gdmVjMVxuICAgICAqIEBwYXJhbSB2ZWMyXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgbGVycCh2ZWMxLCB2ZWMyLCB0bykge1xuICAgICAgICByZXR1cm4gVmVjdG9yLmFkZChWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMSwgMSAtIHRvKSwgVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzIsIHRvKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog7Jet7IiYXG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIHJjcCh2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMSAvIHZlY3Rvci54LCAxIC8gdmVjdG9yLnkpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy5ob3Jpem9udGFsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMudmVydGljYWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgYW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlRGVnKCk7XG4gICAgfVxuXG5cbiAgICBkaXJlY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICByb3RhdGUoYW5nbGUpXG4gICAge1xuICAgICAgICB2YXIgbnggPSAodGhpcy54ICogTWF0aC5jb3MoYW5nbGUpKSAtICh0aGlzLnkgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICB2YXIgbnkgPSAodGhpcy54ICogTWF0aC5zaW4oYW5nbGUpKSArICh0aGlzLnkgKiBNYXRoLmNvcyhhbmdsZSkpO1xuXG4gICAgICAgIHRoaXMueCA9IG54O1xuICAgICAgICB0aGlzLnkgPSBueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHJvdGF0ZURlZyhhbmdsZSlcbiAgICB7XG4gICAgICAgIGFuZ2xlID0gZGVncmVlczJyYWRpYW4oYW5nbGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG8ocm90YXRpb24pXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUocm90YXRpb24tdGhpcy5hbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvRGVnKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZVRvKHJvdGF0aW9uKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZUJ5KHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gdGhpcy5hbmdsZSgpICsgcm90YXRpb247XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZUJ5RGVnKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZUJ5KHJvdGF0aW9uKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBYIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gLTEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54IC0gdmVjLng7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVgoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFic0Rpc3RhbmNlWCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWCh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBZIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gLTEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgLSB2ZWMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWSgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVkodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDAuNDk4NzU2MjExMjA4OVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxKHZlYykpO1xuICAgIH1cblxuXG4gICAgZ2V0TWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbigpO1xuICAgIH1cblxuXG4gICAgZ2V0TWFnbml0dWRlU3F1YXJlZCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlU3EodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VTcSh2ZWMpXG4gICAge1xuICAgICAgICB2YXIgZHggPSB0aGlzLmRpc3RhbmNlWCh2ZWMpLFxuICAgICAgICAgICAgZHkgPSB0aGlzLmRpc3RhbmNlWSh2ZWMpO1xuXG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvciBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGVuZ3RoKCk7XG4gICAgICogICAgIC8vID0+IDExMS44MDMzOTg4NzQ5ODk0OFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aCgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoU3EoKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6jsiJztnogg6ri47J20IOu5hOq1kOulvCDtlZjroKTrqbQgbGVuZ3RoIOulvCDsgqzsmqntlZjquLAg67O064uk64qUIGxlbmd0aFNxIOulvCDsgqzsmqntlZjqsowg67mg66W064ukLlxuICAgICAqIGxlbmd0aCDripQgTWF0aC5zcXJ0ICjsoJzqs7Hqt7wpIOyymOumrOulvCDtlZjquLAg65WM66y47JeQIOuLqOyInCDquLjsnbQg67mE6rWQ7IucIGxlbmd0aFNxIOulvCDsgqzsmqntlZjripQg6rKD7J20IOu5oOumheuLiOuLpC5cbiAgICAgKiBTcXVhcmVkIGxlbmd0aCAvIG1hZ25pdHVkZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGVuZ3RoU3EoKTtcbiAgICAgKiAgICAgLy8gPT4gMTI1MDBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGhTcSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIGxlbmd0aFNxKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICB9XG5cblxuICAgIG1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGgoKTtcbiAgICB9XG5cblxuICAgIHRvKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlYy54IC0gdGhpcy54LCB2ZWMueSAtIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBzZXQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cnVlIGlmIHZlY3RvciBpcyAoMCwgMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZlYy56ZXJvKCk7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzWmVybygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSAwICYmIHRoaXMueSA9PT0gMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cnVlIGlmIHRoaXMgdmVjdG9yIGlzIHRoZSBzYW1lIGFzIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZlYzEuaXNFcXVhbFRvKHZlYzIpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc0VxdWFsVG8odmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IHZlYzIueCAmJiB0aGlzLnkgPT09IHZlYzIueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICMgVXRpbGl0eSBNZXRob2RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIHJldHVybiAneDonICsgdGhpcy54ICsgJywgeTonICsgdGhpcy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvQXJyYXkoKTtcbiAgICAgKiAgICAgLy8gPT4gWzEwLCAyMF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9BcnJheSgpXG4gICAge1xuICAgICAgICByZXR1cm4gWyB0aGlzLngsIHRoaXMueSBdO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b09iamVjdCgpO1xuICAgICAqICAgICAvLyA9PiB7IHg6IDEwLCB5OiAyMCB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b09iamVjdCgpXG4gICAge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WZWN0b3IuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzXG57XG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAxMCwgY29sb3IgPSAweGZmMzMwMCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmVuZGVyKHJhZGl1cywgY29sb3IsIGFscGhhKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcihyYWRpdXMgPSAxMCwgY29sb3IgPSAweGZmMzMwMCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplKGx0LCByYilcbiAgICB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy52ZWN0b3IucmFuZG9taXplKGx0LCByYik7XG4gICAgICAgIHRoaXMueCA9IHBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMueSA9IHBvc2l0aW9uLnk7XG4gICAgfVxuXG5cbiAgICBnZXQgdmVjdG9yKClcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuZnJvbU9iamVjdCh0aGlzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbS9Qb2ludC5qcyIsIi8qKlxuICogaHR0cHM6Ly9jb2RlcGVuLmlvL3BsaXUvcGVuL0JMRUt3QVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXN0ZWxDb2xvciB7XG4gICAgc3RhdGljIGdlbmVyYXRlKCkge1xuICAgICAgICBjb25zdCBoQmFzZSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGNvbnN0IG5ld0ggPSBNYXRoLmZsb29yKGhCYXNlICogMzYwKTtcbiAgICAgICAgY29uc3QgbmV3TCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KSArIDc1O1xuICAgICAgICBjb25zdCBjb2xvciA9IGBoc2woJHtuZXdIfSwgMTAwJSwgJHtuZXdMfSUpYDtcbiAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gdGhpcy5IU0x0b1JHQihoQmFzZSwgMSwgbmV3TCAqIC4wMSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhzbDogY29sb3IsIC8vIGhzbCgwLCAxMDAlLCA4NSUpO1xuICAgICAgICAgICAgcmdiOiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYCwgLy8gcmdiKDI1NSwgMTI4LCAxMjgpO1xuICAgICAgICAgICAgaGV4OiBgJHt0aGlzLlJHQnRvSGV4KHIsIGcsIGIpfWAsIC8vIDB4ZmY4MDgwXG4gICAgICAgICAgICBoZXhTaGFwOmAke3RoaXMuUkdCdG9IZXgociwgZywgYiwgJyMnKX1gLCAvLyAjZmY4MDgwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSFNMIHRvIFJHQiBmb3JtdWxhIGFkYXB0ZWQgZnJvbTpcbiAgICAgKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9tamFja3Nvbi81MzExMjU2XG4gICAgICogKHNraXBwaW5nIHRvIGVsc2V7fSBzaW5jZSBzIHdpbGwgYWx3YXlzIGJlIDEwMCUpXG4gICAgICogQHBhcmFtIGhcbiAgICAgKiBAcGFyYW0gc1xuICAgICAqIEBwYXJhbSBsXG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgSFNMdG9SR0IoaCwgcywgbCkge1xuICAgICAgICBsZXQgciwgZywgYjtcblxuICAgICAgICBjb25zdCByZCA9IChhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heChNYXRoLm1pbihhICogMjU2LCAyNTUpLCAwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaHVlVG9SR0IgPSAobSwgbiwgbykgPT4ge1xuICAgICAgICAgICAgaWYgKG8gPCAwKSBvICs9IDE7XG4gICAgICAgICAgICBpZiAobyA+IDEpIG8gLT0gMTtcbiAgICAgICAgICAgIGlmIChvIDwgMSAvIDYpIHJldHVybiBtICsgKG4gLSBtKSAqIDYgKiBvO1xuICAgICAgICAgICAgaWYgKG8gPCAxIC8gMikgcmV0dXJuIG47XG4gICAgICAgICAgICBpZiAobyA8IDIgLyAzKSByZXR1cm4gbSArIChuIC0gbSkgKiAoMiAvIDMgLSBvKSAqIDY7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcblxuICAgICAgICByID0gaHVlVG9SR0IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgICAgZyA9IGh1ZVRvUkdCKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlVG9SR0IocCwgcSwgaCAtIDEgLyAzKTtcblxuICAgICAgICByZXR1cm4gW3JkKHIpLCByZChnKSwgcmQoYildXG4gICAgfVxuXG4gICAgc3RhdGljIFJHQnRvSGV4KHIsIGcsIGIsIHByZWZpeCA9ICcweCcpIHtcbiAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0ke3IudG9TdHJpbmcoMTYpfSR7Zy50b1N0cmluZygxNil9JHtiLnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9QYXN0ZWxDb2xvci5qcyIsIi8qKlxuICogaHR0cHM6Ly93d3cuY3JvY3VzLmNvLmtyLzEyODhcbiAqL1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vVmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZleEh1bGwge1xuICAgIHN0YXRpYyBnZW5lcmF0ZShwb2ludHMpIHtcblxuICAgICAgICBjb25zdCBzdGFjayA9IFtdLFxuICAgICAgICAgICAgbiA9IHBvaW50cy5sZW5ndGg7XG5cbiAgICAgICAgLy8geeyijO2RnCwgeOyijO2RnCDsnpHsnYAg7Iic7Jy866GcIOygleugrFxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRMb3dlcllYKTtcblxuICAgICAgICAvLyDquLDspIDsoJAg7ISk7KCVXG4gICAgICAgIGNvbnN0IGJhc2VQb2ludCA9IHBvaW50c1swXTtcblxuICAgICAgICAvLyDquLDspIDsoJAg6riw7KSA7Jy866GcIHZlY3RvciDrpbwg7IOd7ISx7ZWY6rOgIOyZuOyggeydhCDqtaztlbTshJwg67CYIOyLnOqzhCDrsKntlqXsnLzroZwgKGNjdykg7KCV66CsIO2VqeuLiOuLpC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50c1tpXS5yZWxhdGl2ZVBvc2l0aW9uID0gbmV3IFZlY3RvcihcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueCAtIGJhc2VQb2ludC54LFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXS55IC0gYmFzZVBvaW50LnlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRDY3cpO1xuXG4gICAgICAgIC8vIOyKpO2DneyXkCBmaXJzdCwgc2Vjb25kIOulvCDrhKPsirXri4jri6QuXG4gICAgICAgIHN0YWNrLnB1c2goMCk7XG4gICAgICAgIHN0YWNrLnB1c2goMSk7XG5cbiAgICAgICAgbGV0IG5leHQgPSAyO1xuXG4gICAgICAgIHdoaWxlIChuZXh0IDwgbikge1xuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0LCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgc2Vjb25kID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpcnN0LCBzZWNvbmQsIG5leHTqsIAg7KKM7ZqM7KCEICggMCDrs7Tri6Qg7YGs66m0ICnsnbTrnbzrqbQgc2Vjb25kIHB1c2hcbiAgICAgICAgICAgICAgICAvLyDsmrDtmozsoIQoIDAg67O064ukIOyekeycvOuptCApIOydtOudvOuptCDsnITsnZggd2hpbGXrrLgg6rOE7IaNIOuwmOuztVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2N3KHBvaW50c1tmaXJzdF0sIHBvaW50c1tzZWNvbmRdLCBwb2ludHNbbmV4dF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc2Vjb25kKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHQrKyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gc3RhY2subGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YWNrW2ldO1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaW5kZXhdO1xuICAgICAgICAgICAgY29udmV4SHVsbC5wdXNoKG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnZleEh1bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeSwgeCDqsIAg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBzb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICBpZiAocG9pbnRBLnkgIT09IHBvaW50Qi55KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnRBLnkgLSBwb2ludEIueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRBLnggLSBwb2ludEIueDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDquLDspIAg7KKM7ZGcIOq4sOykgOycvOuhnCDsg4HrjIAg7KKM7ZGc66W8IOq1rO2VtOyEnCDsi5zqs4Qg67CY64yAIOuwqe2WpeycvOuhnCDsoJXroKztlanri4jri6QuXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydENjdyhwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAvLyDspJHsi6wg7KKM7ZGc7J24IOqyveyasCByZWxhdGl2ZVBvc2l0aW9uIOydtCDsl4bsirXri4jri6QuIOykkeyLrCDsooztkZzrpbwgMOuyiOycvOuhnCDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBpZiAoIXBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGEgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi55ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgYiA9IHBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uLnggKiBwb2ludEIucmVsYXRpdmVQb3NpdGlvbi55O1xuXG4gICAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29udmV4SHVsbC5zb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67CYIOyLnOqzhCDrsKntlqXsnbjsp4Ag7Jes67aAXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcGFyYW0gcG9pbnRDXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQ2N3KHBvaW50QSwgcG9pbnRCLCBwb2ludEMpIHtcbiAgICAgICAgLy8gY29uc3QgdHJpYW5nbGVBcmVhID0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpO1xuICAgICAgICBjb25zdCB0cmlhbmdsZUFyZWEgPSAgKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpO1xuICAgICAgICBpZiAodHJpYW5nbGVBcmVhID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z0FycmF5KGFycikge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYXJyLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJbaV0ueCwgYXJyW2ldLnkpO1xuICAgIH1cbn1cblxuXG4vKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTIgSnUgSHl1bmcgTGVlXG4qXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZVxuKiBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbiogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4qIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Jcbiogc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElOR1xuKiBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbiogREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIENyZWF0ZSB0aGUgY29udmV4IGh1bGwgdXNpbmcgdGhlIEdpZnQgd3JhcHBpbmcgYWxnb3JpdGhtXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dpZnRfd3JhcHBpbmdfYWxnb3JpdGhtXG5mdW5jdGlvbiBjcmVhdGVDb252ZXhIdWxsKHBvaW50cykge1xuICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICB2YXIgaTAgPSAwO1xuICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGh1bGwgPSBbXTtcbiAgICB2YXIgbSA9IDA7XG4gICAgdmFyIGloID0gaTA7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHIgPSB2ZWMyLnN1Yihwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIHYgPSB2ZWMyLnN1Yihwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICB2YXIgYyA9IHZlYzIuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aHNxKCkgPiByLmxlbmd0aHNxKCkpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtKys7XG4gICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvcHkgdmVydGljZXNcbiAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgbmV3UG9pbnRzLnB1c2gocG9pbnRzW2h1bGxbaV1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UG9pbnRzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vZ2prL0NvbnN0cyc7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yJztcblxuY29uc3QgRk9OVF9TSVpFID0gJzlweCdcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB0aGlzLmxpbmVDb2xvciA9IGNvbG9yLmhleDtcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBjb2xvci5oZXhTaGFwO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSB0aGlzLmNyZWF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxhYmVsKCkge1xuICAgICAgICBjb25zdCBuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoaSwge1xuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBmb250OiBGT05UX1NJWkUsXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRleHQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGFiZWxzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3NcbiAgICAgICAgICAgICwgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG4gICAgICAgICAgICAsIG9yaWdpbiA9IHZlcnRpY2VzWzBdO1xuXG4gICAgICAgIGcuY2xlYXIoKTtcbiAgICAgICAgZy5saW5lU3R5bGUoMSwgdGhpcy5saW5lQ29sb3IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKG9yaWdpbi54LCBvcmlnaW4ueSk7XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGcubGluZVRvKHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWxzW2luZGV4XVxuICAgICAgICAgICAgICAgICwgdmVjID0gVmVjdG9yLmRpdmlkZVNjYWxhcih2ZXJ0ZXgsIFNDQUxFKTtcblxuICAgICAgICAgICAgbGFiZWwueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgbGFiZWwueSA9IHZlcnRleC55O1xuXG4gICAgICAgICAgICBsYWJlbC50ZXh0ID0gYCgke3ZlYy54fSwke3ZlYy55fSlgO1xuICAgICAgICAgICAgbGFiZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBnLmxpbmVUbyhvcmlnaW4ueCwgb3JpZ2luLnkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5sYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQobGFiZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxhYmVscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmxhYmVscyA9IG51bGw7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1NoYXBlLmpzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cyB7XG4gICAgc3RhdGljIGdldCBTQ0FMRSgpIHtcbiAgICAgICAgcmV0dXJuIDE0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBR0UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogNjAwLCBoZWlnaHQ6IDYwMH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhZ2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvQ29uc3RzLmpzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB9XG5cbiAgICBtdWx0aXBseShzY2FsYXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRleC54ICo9IHNjYWxhcjtcbiAgICAgICAgICAgIHZlcnRleC55ICo9IHNjYWxhcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGl2aWRlKHNjYWxhcikge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdmVydGV4LnkgLz0gc2NhbGFyO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1ZlcnRpY2VzLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vUG9pbnQnO1xuaW1wb3J0IENvbnZleEh1bGwgZnJvbSAnLi4vY29udmV4aHVsbC9Db252ZXhIdWxsJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi91dGlscy9QYXN0ZWxDb2xvcic7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uL2dqay9Db25zdHMnO1xuXG5cbmNvbnN0IFNDQUxFID0gQ29uc3RzLlNDQUxFXG4gICAgLCBTVEFHRSA9IENvbnN0cy5TVEFHRVxuICAgICwgRk9OVF9DT0xPUiA9ICcjRkZGRkZGJ1xuICAgICwgQVhFU19MSU5FX0NPTE9SID0gJzB4RkZGRkZGJ1xuICAgICwgQ09OVkVYX0hVTExfTElORV9DT0xPUiA9IFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmtvd3NraURpZmZlcmVuY2UgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcblxuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAgICAgICAgICAsIGNvbnZleEh1bGwgPSB0aGlzLmNvbnZleEh1bGwgPSBDb252ZXhIdWxsLmdlbmVyYXRlKHZlcnRpY2VzKTtcblxuICAgICAgICB0aGlzLnRleHRzID0gW107XG4gICAgICAgIHRoaXMuZHJhd0F4ZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3VmV0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMuZHJhd1BvbHlnb24oY29udmV4SHVsbCk7XG4gICAgfVxuXG4gICAgZHJhd1ZldGljZXModmVydGljZXMpIHtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh2ZXJ0ZXgueCwgdmVydGV4LnksIDMsIFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4KTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChwb2ludCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZlYyA9IFZlY3Rvci5kaXZpZGVTY2FsYXIodmVydGV4LCBTQ0FMRSk7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGAoJHt2ZWMueH0sICR7dmVjLnl9KWAsIHBvaW50LnZlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdQb2x5Z29uKHZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzO1xuXG4gICAgICAgIGcubGluZVN0eWxlKDEsIENPTlZFWF9IVUxMX0xJTkVfQ09MT1IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHsgZy5saW5lVG8odmVydGV4LngsIHZlcnRleC55KTt9KTtcbiAgICAgICAgZy5saW5lVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gICAgfVxuXG4gICAgZHJhd0F4ZXMoKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzXG4gICAgICAgICAgICAsIGh3ID0gU1RBR0Uud2lkdGggLyAyXG4gICAgICAgICAgICAsIGhoID0gU1RBR0UuaGVpZ2h0IC8gMjtcblxuICAgICAgICBnLmxpbmVTdHlsZSgxLCBBWEVTX0xJTkVfQ09MT1IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKC1odywgMCk7XG4gICAgICAgIGcubGluZVRvKGh3LCAwKTtcbiAgICAgICAgZy5tb3ZlVG8oMCwgLWhoKTtcbiAgICAgICAgZy5saW5lVG8oMCwgaGgpO1xuICAgIH1cblxuICAgIGRyYXdUZXh0KHRleHQsIHZlcnRleCA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBQSVhJLlRleHQodGV4dCwge1xuICAgICAgICAgICAgZm9udDogJzIwcHgnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZmlsbDogRk9OVF9DT0xPUlxuICAgICAgICB9KTtcblxuICAgICAgICBsYWJlbC54ID0gdmVydGV4Lng7XG4gICAgICAgIGxhYmVsLnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgdGhpcy50ZXh0cy5wdXNoKGxhYmVsKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChsYWJlbCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRleHRzLmZvckVhY2goKHRleHQpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChwb2ludCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgfVxuXG4gICAgZ2V0VmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgICAgICAgdmVydGljZXMxLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2VzMi5mb3JFYWNoKChiKSA9PiB7XG4gICAgICAgICAgICAgICAgdmVydGljZXMucHVzaChWZWN0b3Iuc3VidHJhY3QoYSwgYikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvTWlua293c2tpRGlmZmVyZW5jZS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vc3JjL2dqay9TaGFwZSc7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uLy4uL3NyYy9namsvQ29uc3RzJztcbmltcG9ydCBWZXJ0aWNlcyBmcm9tICcuLi8uLi9zcmMvZ2prL1ZlcnRpY2VzJztcbmltcG9ydCBHSksgZnJvbSAnLi4vLi4vc3JjL2dqay9HSksnO1xuaW1wb3J0IENvbnZleEh1bGwgZnJvbSAnLi4vLi4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbCc7XG5pbXBvcnQgTWlua293c2tpRGlmZmVyZW5jZSBmcm9tICcuLi8uLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcIi4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZVwiO1xuXG5jb25zdCBUT1RBTCA9IDMwXG4gICAgLCBJTlRFUlZBTCA9IDYwMDAwMFxuICAgICwgU0NBTEUgPSBDb25zdHMuU0NBTEVcbiAgICAsIFNUQUdFID0gQ29uc3RzLlNUQUdFXG4gICAgLCBUT1BfTEVGVCA9IHt4OiAyLCB5OiAyfVxuICAgICwgVE9QX1JJR0hUID0ge3g6IDE3LCB5OiAxN31cbiAgICAsIFJBRF9UT19ERUcgPSAxODAgLyBNYXRoLlBJO1xuXG4vLyBjb25zdCB0cmlhbmdsZXMgPSBjcmVhdGVQb2x5Z29ucygzLCBUT1RBTCk7XG4vLyBjb25zdCByZWN0YW5nbGVzID0gY3JlYXRlUG9seWdvbnMoNCwgVE9UQUwpO1xuXG5jb25zdCB0cmlhbmdsZXMgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMywgNSksIG5ldyBWZWN0b3IoNiwgNCldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDQsIDExKSwgbmV3IFZlY3Rvcig0LCA1KSwgbmV3IFZlY3Rvcig5LCA5KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoMCwgLTEpLCBuZXcgVmVjdG9yKDMsIDEpLCBuZXcgVmVjdG9yKDEsIDMpXSxcbiAgICBbbmV3IFZlY3RvcigxMCwgMTMpLCBuZXcgVmVjdG9yKDExLCAxNCksIG5ldyBWZWN0b3IoMTQsIDE1KV0sXG5dO1xuY29uc3QgcmVjdGFuZ2xlcyA9IFtcbiAgICAvLyBbbmV3IFZlY3Rvcig4LCAxKSwgbmV3IFZlY3Rvcig4LCA1KSwgbmV3IFZlY3RvcigxMSwgNSksIG5ldyBWZWN0b3IoMTEsIDEpXSxcbiAgICAvLyBbbmV3IFZlY3Rvcig1LCA3KSwgbmV3IFZlY3Rvcig3LCAzKSwgbmV3IFZlY3RvcigxMCwgMiksIG5ldyBWZWN0b3IoMTIsIDcpXSxcbiAgICAvLyBbbmV3IFZlY3RvcigyLCAtMiksIG5ldyBWZWN0b3IoNSwgLTEpLCBuZXcgVmVjdG9yKDQsIDIpLCBuZXcgVmVjdG9yKDEsIDEpXSxcbiAgICBbbmV3IFZlY3Rvcig5LCA4KSwgbmV3IFZlY3RvcigzLCAxMiksIG5ldyBWZWN0b3IoNCwgMTUpLCBuZXcgVmVjdG9yKDE0LCAxNSldLFxuXTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5rZXlVcExpc3RlbmVyID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXBMaXN0ZW5lcik7XG5cbiAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgZGlzcGxheUNvbGxpc2lvbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHNoYXBlKTtcbiAgICAgICAgICAgIHNoYXBlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaGFwZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMubWlua293c2tpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLm1pbmtvd3NraSk7XG4gICAgICAgIHRoaXMubWlua293c2tpLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbigpIHtcbiAgICAgICAgY29uc3QgaW5kZXgxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdHJpYW5nbGVzLmxlbmd0aClcbiAgICAgICAgICAgICwgaW5kZXgyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVjdGFuZ2xlcy5sZW5ndGgpXG4gICAgICAgICAgICAsIHZlcnRpY2VzMSA9IG5ldyBWZXJ0aWNlcyh0cmlhbmdsZXNbaW5kZXgxXSlcbiAgICAgICAgICAgICwgdmVydGljZXMyID0gbmV3IFZlcnRpY2VzKHJlY3RhbmdsZXNbaW5kZXgyXSk7XG5cbiAgICAgICAgdmVydGljZXMxLm11bHRpcGx5KFNDQUxFKTtcbiAgICAgICAgdmVydGljZXMyLm11bHRpcGx5KFNDQUxFKTtcblxuICAgICAgICBjb25zdCBzaGFwZTEgPSBuZXcgU2hhcGUodmVydGljZXMxLnZlcnRpY2VzLCBTQ0FMRSlcbiAgICAgICAgICAgICwgc2hhcGUyID0gbmV3IFNoYXBlKHZlcnRpY2VzMi52ZXJ0aWNlcywgU0NBTEUpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraSA9IG5ldyBNaW5rb3dza2lEaWZmZXJlbmNlKHZlcnRpY2VzMS52ZXJ0aWNlcywgdmVydGljZXMyLnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kueCA9IChTVEFHRS53aWR0aCAvIDMpICogMjtcbiAgICAgICAgdGhpcy5taW5rb3dza2kueSA9IChTVEFHRS5oZWlnaHQgLyAzKSAqIDI7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChzaGFwZTEpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHNoYXBlMik7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5taW5rb3dza2kpO1xuXG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUxKTtcbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZTIpO1xuXG4gICAgICAgIHZlcnRpY2VzMS5kaXZpZGUoU0NBTEUpO1xuICAgICAgICB2ZXJ0aWNlczIuZGl2aWRlKFNDQUxFKTtcblxuICAgICAgICBjb25zdCBjb2xsaXNpb24gPSBHSksuY2hlY2tDb2xsaXNpb24odmVydGljZXMxLnZlcnRpY2VzLCB2ZXJ0aWNlczIudmVydGljZXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ09MTElTSU9OIFsnLCBjb2xsaXNpb24sICddJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5Q29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheUNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmRpc3BsYXlDb2xsaXNpb24sIElOVEVSVkFMKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7fVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cblxuICAgIG9uS2V5VXAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICog65GQ67Kh7YSwIOyCrOydtOqwgSDqtaztlZjquLBcbiAqIEBwYXJhbSBhXG4gKiBAcGFyYW0gYlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0QW5nbGUoYSwgYikge1xuICAgIGEgPSBuZXcgVmVjdG9yKGEueCwgYS55KS5ub3JtKCk7XG4gICAgYiA9IG5ldyBWZWN0b3IoYi54LCBiLnkpLm5vcm0oKTtcbiAgICBjb25zdCByYWRpYW4gPSBNYXRoLmFjb3MoVmVjdG9yLmRvdFByb2R1Y3QoYSwgYikpO1xuICAgIHJldHVybiByYWRpYW4gKiBSQURfVE9fREVHO1xufVxuXG5cbi8qKlxuICog656c642k7Jy866GcIOyijO2RnOulvCDsg53shLHtlZjqs6AgY29udmV4IGh1bGwg7J2EIOunjOuTpOuptCBPS1xuICogQHBhcmFtIHBvbHlnb25cbiAqIEBwYXJhbSB0b3RhbFxuICovXG5mdW5jdGlvbiBjcmVhdGVQb2x5Z29ucyhwb2x5Z29uLCB0b3RhbCkge1xuICAgIGxldCB2ZXJ0aWNlcztcbiAgICBjb25zdCBwb2x5Z29ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgIHZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb2x5Z29uOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlY3Rvci5yYW5kb21pemUoVE9QX0xFRlQsIFRPUF9SSUdIVCk7XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG5cbiAgICAgICAgICAgIGlmIChqID09PSBwb2x5Z29uIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZleEh1bGwgPSBDb252ZXhIdWxsLmdlbmVyYXRlKHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IGNvbnZleEh1bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwb2x5Z29ucy5wdXNoKHZlcnRpY2VzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9seWdvbnM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L2dqay9UZXN0LmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuLyoqXG4gKiBHSksgQWxnb3JpdGhtIChHaWxiZXJ0LUpvaG5zb24tS2VlcnRoaSlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gKiBodHRwOi8vd3d3LmR5bjRqLm9yZy8yMDEwLzA0L2dqay1naWxiZXJ0LWpvaG5zb24ta2VlcnRoaS8jZ2prLXRvcFxuICogaHR0cHM6Ly93d3cuaGFyb2xkc2VycmFuby5jb20vYmxvZy92aXN1YWxpemluZy10aGUtZ2prLWNvbGxpc2lvbi1hbGdvcml0aG1cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qdWhsL2NvbGxpc2lvbi1kZXRlY3Rpb24tMmRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0pLXG57XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0byBjb21wdXRlIGF2ZXJhZ2UgY2VudGVyIChyb3VnaGx5KS4gSXQgbWlnaHQgYmUgZGlmZmVyZW50IGZyb21cbiAgICAgKiBDZW50ZXIgb2YgR3Jhdml0eSwgZXNwZWNpYWxseSBmb3IgYm9kaWVzIHdpdGggbm9udW5pZm9ybSBkZW5zaXR5LFxuICAgICAqIGJ1dCB0aGlzIGlzIG9rIGFzIGluaXRpYWwgZGlyZWN0aW9uIG9mIHNpbXBsZXggc2VhcmNoIGluIEdKS1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBhdmVyYWdlUG9pbnQodmVydGljZXMpXG4gICAge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhdmcueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZnLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2Zy54IC89IGNvdW50O1xuICAgICAgICBhdmcueSAvPSBjb3VudDtcblxuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1cnRoZXN0IHZlcnRleCBhbG9uZyBhIGNlcnRhaW4gZGlyZWN0aW9uXG4gICAgICog6ryt7KeA7KCQ6rO8IOuwqe2WpeydhCDsoITri6ztlZjrqbQg64K07KCBICjtiKzsmIEp7J2EIO2Gte2VtCDstZzrjIDroZwg66i8IOyijO2RnOydmCDsnbjrjbHsiqTrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBpbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlcywgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1heFByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzWzBdKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0ID4gbWF4UHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG1heFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1pbmtvd3NraSBzdW0gc3VwcG9ydCBmdW5jdGlvbiBmb3IgR0pLXG4gICAgICog7KeA7JuQIO2VqOyImOyXkOyEnCDtj7Trpqzqs6TsnZgg7Y+s7J247Yq47JmAIOuwqe2WpeycvOuhnCDshJzroZwg64uk66W4IOuwqe2WpeydmCDsoJDsnYQg6rWs7ZWY6rOgIE1pbmtvd3NraSBEaWZmZXJlbmNlIOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSDrsqHthLBcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgLy8gc3VidHJhY3QgKE1pbmtvd3NraSBzdW0pIHRoZSB0d28gcG9pbnRzIHRvIHNlZSBpZiBib2RpZXMgJ292ZXJsYXAnXG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDstqnrj4wg7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGNoZWNrQ29sbGlzaW9uKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKTtcblxuICAgICAgICBsZXQgaXRlckNvdW50ID0gMCwgaW5kZXggPSAwOyAgIC8vIGluZGV4IG9mIGN1cnJlbnQgdmVydGV4IG9mIHNpbXBsZXhcbiAgICAgICAgbGV0IGEsIGIsIGMsIGQsIGFvLCBhYiwgYWMsIGFicGVycCwgYWNwZXJwLCBzaW1wbGV4ID0gbmV3IEFycmF5KDMpO1xuXG4gICAgICAgIC8vIOuRkCDtj7Trpqzqs6Qg7KSR7IusIOyijO2RnOulvCDthrXtlbTshJwg67Cp7Zal7J2EIOq1rO2VqeuLiOuLpC5cbiAgICAgICAgY29uc3QgcG9zaXRpb24xID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMxKTsgLy8gbm90IGEgQ29HIGJ1dFxuICAgICAgICBjb25zdCBwb3NpdGlvbjIgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIC8vIOuwqe2WpSB2ZWN0b3JcbiAgICAgICAgZCA9IFZlY3Rvci5zdWJ0cmFjdChwb3NpdGlvbjEsIHBvc2l0aW9uMik7XG5cbiAgICAgICAgLy8gaWYgaW5pdGlhbCBkaXJlY3Rpb24gaXMgemVybyDigJMgc2V0IGl0IHRvIGFueSBhcmJpdHJhcnkgYXhpcyAod2UgY2hvb3NlIFgpXG4gICAgICAgIGlmICgoZC54ID09IDApICYmIChkLnkgPT0gMCkpIHtcbiAgICAgICAgICAgIGQueCA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgc3VwcG9ydCBhcyBpbml0aWFsIHBvaW50IG9mIHRoZSBuZXcgc2ltcGxleFxuICAgICAgICBhID0gc2ltcGxleFswXSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAvLyBzdXBwb3J0IOygkOqzvCDrsKntlqXsnbQg6rCZ7J2AIOuwqe2WpeydtCDslYTri5Ag6rK97JqwXG4gICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhLCBkKSA8PSAwKSB7XG4gICAgICAgICAgICAvLyDrp4jsp4Drp4nsl5Ag7LaU6rCAIOuQnCDsoJDsnbQgZOydmCDrsKntlqXsnLzroZwg7JuQ7KCQ7J2EIOyngOuCmOy5mOyngCDslYrsnYAg6rK97JqwXG4gICAgICAgICAgICAvLyDqt7gg64uk7J2MIE1pbmtvd3NraSDtlansnYAg7JuQ7KCQ7J2EIO2PrO2VqCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cbiAgICAgICAgICAgIC8vIOy2lOqwgCDrkJwg66eI7KeA66eJIOygkOydgCBNaW5rb3dza2kgRGlmZmVyZW5jZeydmCDqsIDsnqXsnpDrpqzsl5Ag7J6I7Iq164uI64ukLlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NBU0UxWycsICdOTycsICddJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICB9XG5cbiAgICAgICAgZCA9IFZlY3Rvci5uZWdhdGUoYSk7IC8vIFRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgYWx3YXlzIHRvd2FyZHMgdGhlIG9yaWdpbiwgc28gdGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBuZWdhdGUoYSlcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaXRlckNvdW50Kys7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZXJDb3VudCk7XG5cbiAgICAgICAgICAgIGEgPSBzaW1wbGV4WysraW5kZXhdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcblxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NBU0UyWycsICdOTycsICddJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYeqwgCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuyoe2EsOuKlCAtYSDrpbwg7ZWY66m0IOuQqeuLiOuLpC5cbiAgICAgICAgICAgIGFvID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gZnJvbSBwb2ludCBBIHRvIE9yaWdpbiBpcyBqdXN0IG5lZ2F0aXZlIEFcblxuICAgICAgICAgICAgLy8gc2ltcGxleCBoYXMgMiBwb2ludHMgKGEgbGluZSBzZWdtZW50LCBub3QgYSB0cmlhbmdsZSB5ZXQpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAyKSB7XG5cbiAgICAgICAgICAgICAgICBiID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYik7IC8vIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuXG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5sZW5ndGhTcShkKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnBlcnBlbmRpY3VsYXIoYWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gc2tpcCB0byBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiID0gc2ltcGxleFsxXTtcbiAgICAgICAgICAgIGMgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICBhYyA9IFZlY3Rvci5zdWJ0cmFjdChjLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIENcblxuICAgICAgICAgICAgLy9hY+yZgCDsiJjsp4FcbiAgICAgICAgICAgIGFjcGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhYywgYWMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYScsIGEsICdiJywgYiwgJ2MnLCBjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbycsIGFvLCAnYWInLCBhYiwgJ2FjJywgYWMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjcGVycCcsIGFjcGVycCwgYWNwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFjcGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAvLyBhYyDsiJjsp4Eg7ISg67aE7J20IGHqsIAg7JuQ7KCQ7J2EIO2Wpe2VmOuKlCDrsKntlqUg67CY64yA7Y647JeQIOyeiOqzoFxuICAgICAgICAgICAgLy8g7KaJLCBhYyDsiJjsp4Eg7ISg67aEIOyViOyqveyXkCDsm5DsoJDsnbQg7J6I7Jy866m0XG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGQgPSBhY3BlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luJywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aEXG4gICAgICAgICAgICAgICAgYWJwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FicGVycCcsIGFicGVycCwgYWJwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhYnBlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pKTtcblxuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoTsnbQg7JuQ7KCQIOuwmOuMgCDrsKntlqXsnYQg7Zal7ZWY6rOgIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIC8vIOymiSwg7JuQ7KCQ7J20IOyCvOqwge2YlSDslYjsl5Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2ltcGxleFswXSA9IHNpbXBsZXhbMV07IC8vIHN3YXAgZmlyc3QgZWxlbWVudCAocG9pbnQgQylcbiAgICAgICAgICAgICAgICBkID0gYWJwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaW1wbGV4WzFdID0gc2ltcGxleFsyXTsgLy8gc3dhcCBlbGVtZW50IGluIHRoZSBtaWRkbGUgKHBvaW50IEIpXG4gICAgICAgICAgICAtLWluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnZleEh1bGwocG9pbnRzKVxuICAgIHtcbiAgICAgICAgLy8gRmluZCB0aGUgcmlnaHQgbW9zdCBwb2ludCBvbiB0aGUgaHVsbFxuICAgICAgICB2YXIgaTAgPSAwO1xuICAgICAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgICAgIGkwID0gaTtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBodWxsID0gW107XG4gICAgICAgIHZhciBtID0gMDtcbiAgICAgICAgdmFyIGloID0gaTA7XG5cbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGh1bGxbbV0gPSBpaDtcblxuICAgICAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGllID09IGloKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHIgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBWZWN0b3IuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgICAgICBpZiAoYyA9PSAwICYmIHYubGVuZ3RoU3EoKSA+IHIubGVuZ3RoU3EoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtKys7XG4gICAgICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgICAgICBpZiAoaWUgPT0gaTApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgdmVydGljZXNcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2h1bGxbaV1dO1xuICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gobmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UG9pbnRzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG1pZHBvaW50KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigoYS54ICsgYi54KSAvIDIsIChhLnkgKyBiLnkpIC8gMik7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRlYnVnVmVydGljZXModmVydGljZXMpIHtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coaW5kZXgsIHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMScpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczEpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMicpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczIpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG59XG5cbmZ1bmN0aW9uIHN0cih2ZXJ0ZXgsIGlzRml4ZWQgPSBmYWxzZSkge1xuICAgIGlmIChpc0ZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYCgke3ZlcnRleC54fSwke3ZlcnRleC55fSlgO1xuICAgIH1cbiAgICByZXR1cm4gYCgke3ZlcnRleC54LnRvRml4ZWQoMil9LCR7dmVydGV4LnkudG9GaXhlZCgyKX0pYDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvR0pLLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEdKSyBmcm9tICcuLi9namsvR0pLJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyXG57XG4gICAgc3RhdGljIGRyYXdNaW5rb3dza2lTdW0odmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygnZHJhd01pbmtvd3NraVN1bSgnLCB2ZXJ0aWNlczEubGVuZ3RoICogdmVydGljZXMyLmxlbmd0aCwgJyknKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgICAgICBjb25zdCBwYXRoID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZlcnRpY2VzMi5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHYxID0gdmVydGljZXMxW2ldLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IHYyID0gdmVydGljZXMyW2pdLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBWZWN0b3Iuc3VidHJhY3QodjEsIHYyKTtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goZGlmZik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSwgaiwgYHZlY1ske2RpZmYueH0sICR7ZGlmZi55fV1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZleEh1bGxQYXRoID0gR0pLLmNyZWF0ZUNvbnZleEh1bGwocGF0aCk7XG4gICAgICAgIFBhaW50ZXIuZHJhd1BvbHlnb24oY29udmV4SHVsbFBhdGgsIDEsIDB4RERERERELCAxKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9seWdvbih2ZXJ0aWNlcywgbGluZVdpZHRoID0gMSwgY29sb3IgPSAweDYwN0Q4QiwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBjb25zdCBncmFwaGljcyA9IHdpbmRvdy5nO1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGNvbnN0IHZlYzAgPSB2ZXJ0aWNlc1swXS5jbG9uZSgpO1xuICAgICAgICB2ZWMwLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcblxuICAgICAgICBncmFwaGljcy5tb3ZlVG8odmVjMC54LCB2ZWMwLnkpO1xuXG4gICAgICAgIC8vIHRoaXMuZHJhd1RleHQod2luZG93LnN0YWdlLCAnKCcgKyB2ZWMwLngudG9GaXhlZCgwKSArICcsJyArIHZlYzAueS50b0ZpeGVkKDApICsgJyknLCB2ZWMwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmVjID0gdmVydGljZXNbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgIHZlYy5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odmVjLngsIHZlYy55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMwLngsIHZlYzAueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1RleHQoc3RhZ2UsIHN0cmluZywgcG9pbnQsIGNvbG9yID0gJyNmZjMzMDAnKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoc3RyaW5nLCB7XG4gICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgLy8gZm9udFNpemU6IDQsXG4gICAgICAgICAgICAvLyBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBmaWxsOiBjb2xvcixcbiAgICAgICAgICAgIC8vIHN0cm9rZTogJyM0YTE4NTAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0ZXh0LnggPSBwb2ludC54O1xuICAgICAgICB0ZXh0LnkgPSBwb2ludC55O1xuXG4gICAgICAgIHN0YWdlLmFkZENoaWxkKHRleHQpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludChncmFwaGljcywgcG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocG9pbnQueCwgcG9pbnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlCb3VuZHMoZ3JhcGhpY3MsIGJvdW5kcywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3UmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJ0LngsIHJlY3QucnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJiLngsIHJlY3QucmIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LmxiLngsIHJlY3QubGIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50c0J5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubHQueCwgcmVjdC5sdC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucnQueCwgcmVjdC5ydC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucmIueCwgcmVjdC5yYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubGIueCwgcmVjdC5sYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHMoZ3JhcGhpY3MsIHBvaW50cywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcDEgPSBwb2ludHNbaV07XG4gICAgICAgICAgICB2YXIgcDIgPSBwb2ludHNbaSArIDEgPCBwb2ludHMubGVuZ3RoID8gaSArIDEgOiAwXTtcblxuICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdMaW5lKGdyYXBoaWNzLCBwMCwgcDEsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAwLngsIHAwLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocDEueCwgcDEueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0Fycm93KGdyYXBoaWNzLCBtb3ZlUG9pbnQsIHRvUG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcih0b1BvaW50LnggLSBtb3ZlUG9pbnQueCwgdG9Qb2ludC55IC0gbW92ZVBvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgdmVjdG9yLmludmVydCgpLm11bHRpcGx5U2NhbGFyKDE1KTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7Ki9cblxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKG1vdmVQb2ludC54IC0gdG9Qb2ludC54LCBtb3ZlUG9pbnQueSAtIHRvUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoMTUpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFpbnRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
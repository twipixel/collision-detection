webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(336);
	
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
	        value: function onResize() {}
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

/***/ 336:
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
	
	var _ConvexHull = __webpack_require__(330);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _MinkowskiDifference = __webpack_require__(341);
	
	var _MinkowskiDifference2 = _interopRequireDefault(_MinkowskiDifference);
	
	var _Gjk = __webpack_require__(342);
	
	var _Gjk2 = _interopRequireDefault(_Gjk);
	
	var _Epa = __webpack_require__(349);
	
	var _Epa2 = _interopRequireDefault(_Epa);
	
	var _Polygon = __webpack_require__(350);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _KeyCode = __webpack_require__(331);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _PastelColor = __webpack_require__(329);
	
	var _PastelColor2 = _interopRequireDefault(_PastelColor);
	
	var _Penetration = __webpack_require__(353);
	
	var _Penetration2 = _interopRequireDefault(_Penetration);
	
	var _Painter = __webpack_require__(354);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
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
	    [new Vector(4, 11), new Vector(4, 5), new Vector(9, 9)],
	    // [new Vector(0, -1), new Vector(3, 1), new Vector(1, 3)],
	];
	const rectangles = [
	    // [new Vector(8, 1), new Vector(8, 5), new Vector(11, 5), new Vector(11, 1)],
	    [new Vector(5, 7), new Vector(7, 3), new Vector(10, 2), new Vector(12, 7)],
	    // [new Vector(2, -2), new Vector(5, -1), new Vector(4, 2), new Vector(1, 1)],
	];*/
	
	/*const errorCase1 = [
	    // [new Vector(2, 7), new Vector(12, 3), new Vector(12, 17)],
	    // [new Vector(8, 8), new Vector(10, 7), new Vector(14, 8)],
	    [new Vector(10, 13), new Vector(14, 15), new Vector(11, 14)],
	];
	
	const errorCase2 = [
	    // [new Vector(14, 2), new Vector(17, 2), new Vector(14, 7), new Vector(9, 7)],
	    // [new Vector(7, 5), new Vector(15, 10), new Vector(16, 11), new Vector(15, 14)],
	    [new Vector(9, 8), new Vector(14, 15), new Vector(4, 15), new Vector(3, 12)],
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
	            this.graphics = new PIXI.Graphics();
	            this.addChild(this.graphics);
	            this.display = this.displayCollision.bind(this);
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
	
	            this.graphics.clear();
	        }
	    }, {
	        key: 'checkCollision',
	        value: function checkCollision() {
	            var index1 = Math.floor(Math.random() * triangles.length),
	                index2 = Math.floor(Math.random() * rectangles.length),
	                vertices1 = new _Vertices2.default(triangles[index1]),
	                vertices2 = new _Vertices2.default(rectangles[index2]),
	                penetrationColor = 0xFF3300,
	                penetrationAlpha = 0.7;
	
	            /*const index1 = Math.floor(Math.random() * errorCase1.length)
	                , index2 = Math.floor(Math.random() * errorCase2.length)
	                , vertices1 = new Vertices(errorCase1[index1])
	                , vertices2 = new Vertices(errorCase2[index2]);*/
	
	            vertices1.multiply(SCALE);
	            vertices2.multiply(SCALE);
	
	            var shape1 = new _Shape2.default(vertices1.vertices),
	                shape2 = new _Shape2.default(vertices2.vertices),
	                shape3 = new _Shape2.default(vertices2.clone(), penetrationColor, penetrationAlpha);
	
	            this.minkowski = new _MinkowskiDifference2.default(vertices1.vertices, vertices2.vertices);
	            this.minkowski.x = STAGE.width / 3 * 2;
	            this.minkowski.y = STAGE.height / 3 * 2;
	
	            this.addChild(shape1);
	            this.addChild(shape2);
	            this.addChild(shape3);
	            this.addChild(this.minkowski);
	
	            this.shapes.push(shape1);
	            this.shapes.push(shape2);
	            this.shapes.push(shape3);
	
	            vertices1.divide(SCALE);
	            vertices2.divide(SCALE);
	
	            var polygon1 = new _Polygon2.default(vertices1.vertices),
	                polygon2 = new _Polygon2.default(vertices2.vertices);
	
	            var gjk = new _Gjk2.default(new _Epa2.default()),
	                penetration = new _Penetration2.default(),
	                history = new _History2.default();
	
	            var isCollision = gjk.detect(polygon1, polygon2, penetration, history),
	                arrow = _Vector2.default.multiplyScalar(penetration.normal, penetration.depth).multiplyScalar(SCALE);
	
	            this.graphics.x = this.minkowski.x;
	            this.graphics.y = this.minkowski.y;
	            this.graphics.lineStyle(2, penetrationColor, penetrationAlpha);
	            this.graphics.moveTo(0, 0);
	            this.graphics.lineTo(arrow.x, arrow.y);
	
	            shape3.x = arrow.x;
	            shape3.y = arrow.y;
	            if (!isCollision) {
	                shape3.visible = false;
	            }
	
	            console.log('polygon1', polygon1);
	            console.log('polygon2', polygon2);
	            console.log('isCollision', isCollision);
	            console.log('penetration', penetration);
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            if (this.intervalId) {
	                clearInterval(this.intervalId);
	            }
	
	            this.display();
	            this.intervalId = setInterval(this.display, INTERVAL);
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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Epsilon = __webpack_require__(343);
	
	var _Epsilon2 = _interopRequireDefault(_Epsilon);
	
	var _MinkowskiSum = __webpack_require__(344);
	
	var _MinkowskiSum2 = _interopRequireDefault(_MinkowskiSum);
	
	var _ExpandingSimplex = __webpack_require__(345);
	
	var _ExpandingSimplex2 = _interopRequireDefault(_ExpandingSimplex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DEFAULT_MAX_ITERATIONS = 30;
	var DEFAULT_DETECT_EPSILON = 0;
	
	var Gjk = function () {
	    function Gjk(minkowskiPenetrationSolver) {
	        _classCallCheck(this, Gjk);
	
	        this.minkowskiPenetrationSolver = minkowskiPenetrationSolver;
	    }
	
	    _createClass(Gjk, [{
	        key: 'getInitialDirection',
	        value: function getInitialDirection(convex1, convex2) {
	            // transform into world space if transform is not null
	            var c1 = convex1.getCenter();
	            var c2 = convex2.getCenter();
	            // choose some search direction
	            return c2.subtract(c1);
	        }
	
	        /**
	         *
	         * @param convex1 {Convex}
	         * @param convex2 {Convex}
	         * @param penetration {Penetraion}
	         * @param history {History}
	         */
	
	    }, {
	        key: 'detect',
	        value: function detect(convex1, convex2, penetration, history) {
	            var simplex = [];
	
	            // create a Minkowski sum
	            var ms = new _MinkowskiSum2.default(convex1, convex2);
	
	            // choose some search direction
	            var direction = this.getInitialDirection(convex1, convex2);
	
	            // perform the detection
	            if (this.detect2(ms, simplex, direction, history)) {
	
	                if (this.minkowskiPenetrationSolver) {
	                    this.minkowskiPenetrationSolver.getPenetration(simplex, ms, penetration);
	                }
	                return true;
	            }
	
	            return false;
	        }
	
	        /**
	         *
	         * @param ms {MinkowskiSum}
	         * @param simplex {Vector[]}
	         * @param direction {Vector}
	         * @param history {History} 디버그용
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'detect2',
	        value: function detect2(ms, simplex, direction) {
	            var history = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	            // 디버그용 히스토리
	            var directions = new Array(3);
	            // check for a zero direction vector
	            if (direction.isZero()) {
	                direction.set(1, 0);
	            }
	            // add the first point
	            simplex[0] = ms.getSupportPoint(direction);
	            directions[0] = direction;
	            // is the support point past the origin along d?
	            // support point 방향을 따라 원점을 지나는지 체크 (원점을 지나지 않는다면X)
	            if (simplex[0].dot(direction) <= 0) {
	
	                if (history) {
	                    history.setHistory(simplex, directions);
	                }
	
	                return false;
	            }
	            // negate the search direction
	            direction.invert();
	            // start the loop
	            for (var i = 0; i < DEFAULT_MAX_ITERATIONS; i++) {
	                // always add another point to the simplex at the beginning of the loop
	                simplex.push(ms.getSupportPoint(direction));
	                directions[simplex.length - 1] = direction;
	                // make sure that the last point we added was past the origin
	                if (simplex[simplex.length - 1].dot(direction) <= DEFAULT_DETECT_EPSILON) {
	                    // a is not past the origin so therefore the shapes do not intersect
	                    // here we treat the origin on the line as no intersection
	                    // immediately return with null indicating no penetration
	
	                    if (history) {
	                        history.setHistory(simplex, directions);
	                    }
	
	                    return false;
	                } else {
	                    // if it is past the origin, then test whether the simplex contains the origin
	                    if (this.checkSimplex(simplex, direction)) {
	                        // if the simplex contains the origin then we know that there is an intersection.
	                        // if we broke out of the loop then we know there was an intersection
	
	                        if (history) {
	                            history.setHistory(simplex, directions);
	                        }
	
	                        return true;
	                    }
	                    // if the simplex does not contain the origin then we need to loop using the new
	                    // search direction and simplex
	                }
	            }
	
	            if (history) {
	                history.setHistory(simplex, directions);
	            }
	
	            return false;
	        }
	
	        /**
	         * Determines whether the given simplex contains the origin.  If it does contain the origin,
	         * then this method will return true.  If it does not, this method will update both the given
	         * simplex and also the given search direction.
	         * <p>
	         * This method only handles the line segment and triangle simplex cases, however, these two cases
	         * should be the only ones needed for 2 dimensional {@link Gjk}.  The single point case is handled
	         * in {@link #detect(MinkowskiSum, List, Vector2)}.
	         * <p>
	         * This method also assumes that the last point in the simplex is the most recently added point.
	         * This matters because optimizations are available when you know this information.
	         * @param simplex {Vector[]}
	         * @param direction {Vector}
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'checkSimplex',
	        value: function checkSimplex(simplex, direction) {
	            // this method should never be supplied anything other than 2 or 3 points for the simplex
	            // get the last point added (a)
	            var a = simplex[simplex.length - 1];
	            // this is the same as a.to(ORIGIN);
	            var ao = _Vector2.default.negate(a);
	            // check to see what type of simplex we have
	            if (simplex.length == 3) {
	                // then we have a triangle
	                var b = simplex[1];
	                var c = simplex[0];
	                // get the edges
	                var ab = a.to(b);
	                var ac = a.to(c);
	                // get the edge normal
	                var acPerp = _Vector2.default.tripleProduct(ab, ac, ac);
	                // see where the origin is at
	                var acLocation = acPerp.dot(ao);
	                if (acLocation >= 0) {
	                    // 원점은 A -> C의 오른쪽에있다.
	                    // the origin lies on the right side of A->C
	                    // because of the condition for the gjk loop to continue the origin
	                    // must lie between A and C so remove B and set the
	                    // new search direction to A->C perpendicular vector
	                    simplex.splice(1, 1);
	                    // this used to be direction.set(Vector.tripleProduct(ac, ao, ac));
	                    // but was changed since the origin may lie on the segment created
	                    // by a -> c in which case would produce a zero vector normal
	                    // calculating ac's normal using b is more robust
	                    direction.set(acPerp);
	                } else {
	                    var abPerp = _Vector2.default.tripleProduct(ac, ab, ab);
	                    var abLocation = abPerp.dot(ao);
	                    // the origin lies on the left side of A->C
	                    if (abLocation < 0) {
	                        // the origin lies on the right side of A->B and therefore in the
	                        // triangle, we have an intersection
	                        return true;
	                    } else {
	                        // the origin lies between A and B so remove C and set the
	                        // search direction to A->B perpendicular vector
	                        simplex.splice(0, 1);
	                        // this used to be direction.set(Vector.tripleProduct(ab, ao, ab));
	                        // but was changed since the origin may lie on the segment created
	                        // by a -> b in which case would produce a zero vector normal
	                        // calculating ab's normal using c is more robust
	                        direction.set(abPerp);
	                    }
	                }
	            } else {
	                // get the b point
	                var _b = simplex[0];
	                var _ab = a.to(_b);
	                // otherwise we have 2 points (line segment)
	                // because of the condition for the gjk loop to continue the origin
	                // must lie in between A and B, so keep both points in the simplex and
	                // set the direction to the perp of the line segment towards the origin
	                direction.set(_Vector2.default.tripleProduct(_ab, ao, _ab));
	                // check for degenerate cases where the origin lies on the segment
	                // created by a -> b which will yield a zero edge normal
	                if (direction.getMagnitudeSquared() <= _Epsilon2.default.E) {
	                    // in this case just choose either normal (left or right)
	                    direction.set(_ab.left());
	                }
	            }
	            return false;
	        }
	    }]);
	
	    return Gjk;
	}();
	
	exports.default = Gjk;

/***/ }),

/***/ 343:
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

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MinkowskiSum = function () {
	
	    /**
	     * @param convex1 충돌 체크할 도형 1
	     * @param convex2 충돌 체크할 도형 2
	     */
	    function MinkowskiSum(convex1, convex2) {
	        _classCallCheck(this, MinkowskiSum);
	
	        this.convex1 = convex1;
	        this.convex2 = convex2;
	    }
	
	    /**
	     * supportPoint 를 구합니다. (심플렉스 만들기)
	     * @param direction {Vector}
	     */
	
	
	    _createClass(MinkowskiSum, [{
	        key: 'getSupportPoint',
	        value: function getSupportPoint(direction) {
	            // get the farthest point in the given direction in convex1
	            var point1 = this.convex1.getFarthestPoint(direction);
	            // get the farthest point in the opposite direction in convex2
	            var point2 = this.convex2.getFarthestPoint(_Vector2.default.negate(direction));
	            // return the Minkowski sum point
	            return point1.subtract(point2);
	        }
	    }, {
	        key: 'getConvex1',
	        value: function getConvex1() {
	            return this.convex1;
	        }
	    }, {
	        key: 'getConvex2',
	        value: function getConvex2() {
	            return this.convex2;
	        }
	    }]);
	
	    return MinkowskiSum;
	}();
	
	exports.default = MinkowskiSum;

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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
	
	var _stablepriorityqueue = __webpack_require__(346);
	
	var _stablepriorityqueue2 = _interopRequireDefault(_stablepriorityqueue);
	
	var _ExpandingSimplexEdge = __webpack_require__(348);
	
	var _ExpandingSimplexEdge2 = _interopRequireDefault(_ExpandingSimplexEdge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ExpandingSimplex = function () {
	
	    /**
	     *
	     * @param simplex {Vector[]}
	     */
	    function ExpandingSimplex(simplex) {
	        _classCallCheck(this, ExpandingSimplex);
	
	        this.winding = this.getWinding(simplex);
	
	        this.queue = new _stablepriorityqueue2.default(function (a, b) {
	            if (a.distance < b.distance) {
	                return -1;
	            }
	            if (a.distance > b.distance) {
	                return 1;
	            }
	            return 0;
	        });
	
	        var size = simplex.length;
	        for (var i = 0; i < size; i++) {
	            // compute j
	            var j = i + 1 == size ? 0 : i + 1;
	            // get the points that make up the current edge
	            var a = simplex[i],
	                b = simplex[j];
	            // create the edge
	            this.queue.add(new _ExpandingSimplexEdge2.default(a, b, this.winding));
	        }
	    }
	
	    /**
	     * 심플렉스에 주어진 방향을 리턴합니다.
	     *
	     * -1 시계 방향
	     * 1 반 시계 방향
	     * @param simplex {Vector[]}
	     */
	
	
	    _createClass(ExpandingSimplex, [{
	        key: 'getWinding',
	        value: function getWinding(simplex) {
	            var size = simplex.length;
	
	            for (var i = 0; i < size; i++) {
	                var j = i + 1 === size ? 0 : i + 1;
	                var a = simplex[i],
	                    b = simplex[j];
	
	                if (a.cross(b) > 0) {
	                    // 외적을 통해 외적 값이 양수면 반시계 방향
	                    return 1;
	                } else if (a.cross(b) < 0) {
	                    // 음수면 반시계 방향
	                    return -1;
	                }
	            }
	            return 0;
	        }
	
	        /**
	         *
	         * @returns {ExpandingSimplexEdge}
	         */
	
	    }, {
	        key: 'getClosestEdge',
	        value: function getClosestEdge() {
	            return this.queue.peek();
	        }
	
	        /**
	         *
	         * @param point {Vector}
	         */
	
	    }, {
	        key: 'expand',
	        value: function expand(point) {
	            var edge = this.queue.poll();
	            var edge1 = new _ExpandingSimplexEdge2.default(edge.point1, point, this.winding);
	            var edge2 = new _ExpandingSimplexEdge2.default(point, edge.point2, this.winding);
	            this.queue.add(edge1);
	            this.queue.add(edge2);
	        }
	    }]);
	
	    return ExpandingSimplex;
	}();
	
	exports.default = ExpandingSimplex;

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/**
	 * StablePriorityQueue.js : a stable heap-based priority queue  in JavaScript.
	 * (c) the authors
	 * Licensed under the Apache License, Version 2.0.
	 *
	 * Stable heap-based priority queue for modern browsers and JavaScript engines.
	 *
	 * Usage :
	         Installation (in shell, if you use node):
	         $ npm install stablepriorityqueue
	
	         Running test program (in JavaScript):
	
	         // var StablePriorityQueue = require("stablepriorityqueue");// in node
	         var x = new StablePriorityQueue();
	         x.add(1);
	         x.add(0);
	         x.add(5);
	         x.add(4);
	         x.add(3);
	         x.peek(); // should return 0, leaves x unchanged
	         x.size; // should return 5, leaves x unchanged
	         while(!x.isEmpty()) {
	           console.log(x.poll());
	         } // will print 0 1 3 4 5
	         x.trim(); // (optional) optimizes memory usage
	 */
	"use strict";
	
	var defaultcomparator = function (a, b) {
	    return   a < b ? -1 : (a > b ? 1 : 0) ;
	};
	
	
	// the provided comparator function should take a, b and return a negative number when a < b and equality when a == b
	function StablePriorityQueue(comparator) {
	    this.array = [];
	    this.size = 0;
	    this.runningcounter = 0;
	    this.compare = comparator || defaultcomparator;
	    this.stable_compare = function(a, b) {
	      var cmp = this.compare(a.value,b.value);
	      return (cmp < 0) || ( (cmp == 0) && (a.counter < b.counter) );
	    }
	}
	
	// The stable queue uses internal counters, this repacks them
	// runs in O(n) time, called automatically as needed
	StablePriorityQueue.prototype.renumber = function (myval) {
	      // the counter is exhausted, let us repack the numbers
	      // implementation here is probably not optimal performance-wise
	      // we first empty the content
	      var buffer = [];
	      var j, size;
	      while(! this.isEmpty() ) {
	        buffer.push(this.poll());
	      }
	      size = buffer.length;
	      this.runningcounter = 0; // because the buffer is safe, this is now safe
	      // and we reinsert it
	      for (j = 0; j < size ; j++) {
	        this.add(buffer[j]);
	      }
	}
	
	// Add an element the the queue
	// runs in O(log n) time
	StablePriorityQueue.prototype.add = function (myval) {
	    var i = this.size;
	    if ( this.runningcounter + 1 == 0) {
	      this.renumber();
	    }
	    var extendedmyval = {value: myval, counter: this.runningcounter};
	    this.array[this.size] = extendedmyval;
	    this.runningcounter += 1;
	    this.size += 1;
	    var p;
	    var ap;
	    var cmp;
	    while (i > 0) {
	        p = (i - 1) >> 1;
	        ap = this.array[p];
	        if (!this.stable_compare(extendedmyval, ap)) {
	             break;
	        }
	        this.array[i] = ap;
	        i = p;
	    }
	    this.array[i] = extendedmyval;
	};
	
	// for internal use
	StablePriorityQueue.prototype._percolateUp = function (i) {
	    var myval = this.array[i];
	    var p;
	    var ap;
	    while (i > 0) {
	        p = (i - 1) >> 1;
	        ap = this.array[p];
	        if (!this.stable_compare(myval, ap)) {
	            break;
	        }
	        this.array[i] = ap;
	        i = p;
	    }
	    this.array[i] = myval;
	};
	
	
	// for internal use
	StablePriorityQueue.prototype._percolateDown = function (i) {
	    var size = this.size;
	    var hsize = this.size >>> 1;
	    var ai = this.array[i];
	    var l;
	    var r;
	    var bestc;
	    while (i < hsize) {
	        l = (i << 1) + 1;
	        r = l + 1;
	        bestc = this.array[l];
	        if (r < size) {
	            if (this.stable_compare(this.array[r], bestc)) {
	                l = r;
	                bestc = this.array[r];
	            }
	        }
	        if (!this.stable_compare(bestc,ai))  {
	            break;
	        }
	        this.array[i] = bestc;
	        i = l;
	    }
	    this.array[i] = ai;
	};
	
	// Look at the top of the queue (a smallest element)
	// executes in constant time
	//
	// Calling peek on an empty priority queue returns
	// the "undefined" value.
	// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined
	//
	StablePriorityQueue.prototype.peek = function () {
	    if(this.size == 0) return undefined;
	    return this.array[0].value;
	};
	
	// remove the element on top of the heap (a smallest element)
	// runs in logarithmic time
	//
	// If the priority queue is empty, the function returns the
	// "undefined" value.
	// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined
	//
	// For long-running and large priority queues, or priority queues
	// storing large objects, you may  want to call the trim function
	// at strategic times to recover allocated memory.
	StablePriorityQueue.prototype.poll = function () {
	    if (this.size == 0)
	        return undefined;
	    var ans = this.array[0];
	    if (this.size > 1) {
	        this.array[0] = this.array[--this.size];
	        this._percolateDown(0 | 0);
	    } else {
	        this.size -= 1;
	    }
	    return ans.value;
	};
	
	
	// recover unused memory (for long-running priority queues)
	StablePriorityQueue.prototype.trim = function () {
	    this.array = this.array.slice(0, this.size);
	};
	
	// Check whether the heap is empty
	StablePriorityQueue.prototype.isEmpty = function () {
	    return this.size === 0;
	};
	
	
	// just for illustration purposes
	var main = function () {
	    // main code
	    var x = new StablePriorityQueue(function (a, b) {
	        return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0) ;
	    });
	    x.add({name:"Jack", age:31});
	    x.add({name:"Anna", age:111});
	    x.add({name:"Jack", age:46});
	    x.add({name:"Jack", age:11});
	    x.add({name:"Abba", age:31});
	    x.add({name:"Abba", age:30});
	    while (!x.isEmpty()) {
	        console.log(x.poll());
	    }
	    x = new StablePriorityQueue(function(a, b) {
	          return a.energy - b.energy;
	    });
	    [{ name: 'player', energy: 10},
	     { name: 'monster1', energy: 10},
	     { name: 'monster2', energy: 10},
	     { name: 'monster3', energy: 10}
	    ].forEach(function(o){
	          x.add(o);
	    })
	    while (!x.isEmpty()) {
	        console.log(x.poll());
	    }
	
	};
	
	if (__webpack_require__.c[0] === module) {
	    main();
	}
	
	module.exports = StablePriorityQueue;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(347)(module)))

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ExpandingSimplexEdge = function () {
	
	    /**
	     * @param point1 {Vector}
	     * @param point2 {Vector}
	     * @param winding {number} -1 시계 방향, 1 반시계 방향
	     */
	    function ExpandingSimplexEdge(point1, point2, winding) {
	        _classCallCheck(this, ExpandingSimplexEdge);
	
	        // create the edge
	        // inline b - a
	        this.normal = new _Vector2.default(point2.x - point1.x, point2.y - point1.y);
	
	        // 와인딩에 따라 가장자리가 정상적으로됩니다.
	        // Vector.tripleProduct (ab, ao, ab)를 사용하는 것이 좋습니다.
	        // ab는 가장자리이고 ao는 a.to (ORIGIN)이지만 이것은
	        // 원점이 ab 세그먼트에 있으면 잘못된 법선을 반환합니다.
	        // 그러므로 우리는 심플의 와인딩을 사용하여
	        // 법선 방향
	        // 즉, 원접으로 향하는 normal 백터를 만듭니다.
	        if (winding < 0) {
	            // 시계 방향이면 오른쪽
	            this.normal.right();
	        } else {
	            // 반시계 방향이면 왼쪽
	            this.normal.left();
	        }
	
	        this.normal.normalize();
	
	        // double d = Math.abs(a.dot(normal))
	        this.distance = Math.abs(point1.x * this.normal.x + point1.y * this.normal.y);
	        this.point1 = point1;
	        this.point2 = point2;
	    }
	
	    /**
	     *
	     * @param o {ExpandingSimplexEdge}
	     */
	
	
	    _createClass(ExpandingSimplexEdge, [{
	        key: 'compareTo',
	        value: function compareTo(o) {
	            if (this.distance < o.distance) return -1;
	            if (this.distance > o.distance) return 1;
	            return 0;
	        }
	    }]);
	
	    return ExpandingSimplexEdge;
	}();
	
	exports.default = ExpandingSimplexEdge;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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
	
	var _Epsilon = __webpack_require__(343);
	
	var _Epsilon2 = _interopRequireDefault(_Epsilon);
	
	var _ExpandingSimplex = __webpack_require__(345);
	
	var _ExpandingSimplex2 = _interopRequireDefault(_ExpandingSimplex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DEFAULT_MAX_ITERATIONS = 100,
	    DEFAULT_DISTANCE_EPSILON = Math.sqrt(_Epsilon2.default.E);
	
	var Epa = function () {
	    _createClass(Epa, null, [{
	        key: 'DEFAULT_MAX_ITERATIONS',
	        get: function get() {
	            return DEFAULT_MAX_ITERATIONS;
	        }
	    }, {
	        key: 'DEFAULT_DISTANCE_EPSILON',
	        get: function get() {
	            return DEFAULT_DISTANCE_EPSILON;
	        }
	    }]);
	
	    function Epa() {
	        _classCallCheck(this, Epa);
	
	        this.maxIterations = DEFAULT_MAX_ITERATIONS;
	        this.distanceEpsilon = DEFAULT_DISTANCE_EPSILON;
	
	        console.log('EPA');
	        console.log('maxIterations', this.maxIterations);
	        console.log('distanceEpsilon', this.distanceEpsilon);
	    }
	
	    /**
	     * 침투 결과를 반환합니다.
	     * @param simplex {Vector[]}
	     * @param minkowskiSum {MinkowskiSum}
	     * @param penetration {Penetration}
	     */
	
	
	    _createClass(Epa, [{
	        key: 'getPenetration',
	        value: function getPenetration(simplex, minkowskiSum, penetration) {
	            var smplx = new _ExpandingSimplex2.default(simplex);
	            var edge = null,
	                point = null;
	
	            console.log('getPenetration', 'smplx.length', smplx.length, smplx);
	            for (var i = 0; i < this.maxIterations; i++) {
	                edge = smplx.getClosestEdge();
	                point = minkowskiSum.getSupportPoint(edge.normal);
	
	                var projection = point.dot(edge.normal);
	
	                console.log(i, 'edge.distance:', edge.distance, 'projection', projection, '(projection - edge.distance)', projection - edge.distance);
	                if (projection - edge.distance < this.distanceEpsilon) {
	                    penetration.normal = edge.normal;
	                    penetration.depth = projection;
	                    return;
	                }
	
	                smplx.expand(point);
	            }
	
	            penetration.normal = edge.normal;
	            penetration.depth = point.dot(edge.normal);
	        }
	    }, {
	        key: 'getMxItrations',
	        value: function getMxItrations() {
	            return this.maxIterations;
	        }
	    }, {
	        key: 'setMaxIterations',
	        value: function setMaxIterations(maxIterations) {
	            if (maxIterations < 5) {
	                throw new Error('collision.narrowphase.epa.invalidMaximumIterations');
	            }
	            this.maxIterations = maxIterations;
	        }
	    }, {
	        key: 'getDistanceEpsilon',
	        value: function getDistanceEpsilon() {
	            return this.distanceEpsilon;
	        }
	    }, {
	        key: 'setDistanceEpsilon',
	        value: function setDistanceEpsilon(distanceEpsilon) {
	            if (distanceEpsilon <= 0) {
	                throw new Error('collision.narrowphase.epa.invalidDistanceEpsilon');
	            }
	            this.distanceEpsilon = distanceEpsilon;
	        }
	    }]);
	
	    return Epa;
	}();
	
	exports.default = Epa;

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Convex2 = __webpack_require__(351);
	
	var _Convex3 = _interopRequireDefault(_Convex2);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Geometry = __webpack_require__(352);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
	
	
	var Polygon = function (_Convex) {
	    _inherits(Polygon, _Convex);
	
	    /**
	     * 폴리곤
	     * @param center {Vector}
	     * @param vertices {Vector[]}
	     * @param normals {Vector[]}
	     */
	    function Polygon() {
	        var vertices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	        var normals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	        _classCallCheck(this, Polygon);
	
	        var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this));
	
	        _this.vertices = vertices;
	        _this.normals = vertices.length !== 0 ? _Geometry2.default.getCounterClockwiseEdgeNormals(vertices) : normals;
	        _this.center = _this.getCenter();
	        return _this;
	    }
	
	    _createClass(Polygon, [{
	        key: 'getCenter',
	        value: function getCenter() {
	            var avg = new _Vector2.default(),
	                vertices = this.vertices,
	                count = vertices.length;
	
	            for (var i = 0; i < count; i++) {
	                avg.x += vertices[i].x;
	                avg.y += vertices[i].y;
	            }
	
	            avg.x /= count;
	            avg.y /= count;
	            return avg;
	        }
	    }, {
	        key: 'getFarthestPoint',
	        value: function getFarthestPoint(direction) {
	            var point = new _Vector2.default();
	            // set the farthest point to the first one
	            point.set(this.vertices[0]);
	            // prime the projection amount
	            var max = direction.dot(this.vertices[0]);
	            var size = this.vertices.length;
	            for (var i = 1; i < size; i++) {
	                var vertex = this.vertices[i],
	                    projection = direction.dot(vertex);
	
	                if (projection > max) {
	                    point.set(vertex);
	                    max = projection;
	                }
	            }
	
	            return point;
	        }
	    }, {
	        key: 'getFarthestFeature',
	        value: function getFarthestFeature(direction) {
	            var maximum = new _Vector2.default();
	            var max = -Number.MAX_VALUE;
	            var index = 0;
	
	            var count = this.vertices.length;
	            for (var i = 0; i < count; i++) {
	                // get the current vertex
	                var vertex = this.vertices[i];
	                // get the scalar projection of v onto axis
	                var projection = direction.dot(vertex);
	                // keep the maximum projection point
	                if (projection > max) {
	                    // set the max point
	                    maximum.set(v);
	                    // set the new maximum
	                    max = projection;
	                    // save the index
	                    index = i;
	                }
	            }
	
	            // once we have the point of maximum
	            // see which edge is most perpendicular
	            var l = index + 1 == count ? 0 : index + 1;
	            var r = index - 1 < 0 ? count - 1 : index - 1;
	
	            var leftN = this.normals[index == 0 ? count - 1 : index - 1];
	            var rightN = this.normals[index];
	            // create the maximum point for the feature (transform the maximum into world space)
	            var vm = new PointFeature(maximum, index);
	            // is the left or right edge more perpendicular?
	            if (leftN.dot(direction) < rightN.dot(direction)) {
	                var left = this.vertices[l];
	                var vl = new PointFeature(left, l);
	                // make sure the edge is the right winding
	                return new EdgeFeature(vm, vl, vm, maximum.to(left), index + 1);
	            }
	
	            var right = this.vertices[r];
	            var vr = new PointFeature(right, r);
	            // make sure the edge is the right winding
	            return new EdgeFeature(vr, vm, vm, right.to(maximum), index);
	        }
	    }]);
	
	    return Polygon;
	}(_Convex3.default);
	
	exports.default = Polygon;

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

	'use strict';
	
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
	var Convex = function () {
	  function Convex() {
	    _classCallCheck(this, Convex);
	  }
	
	  _createClass(Convex, [{
	    key: 'getFarthestFeature',
	
	
	    /**
	     * 방향에서 가장 먼 벡터의 인덱스 (Feature)를 반환합니다.
	     * @param direction {Vector}
	     */
	    value: function getFarthestFeature(direction) {
	      throw new Error('[Convex] implments getFarthestFeature');
	    }
	
	    /**
	     * 방향에서 가장 먼 포인트를 반환합니다.
	     * @param direction {Vector}
	     */
	
	  }, {
	    key: 'getFarthestPoint',
	    value: function getFarthestPoint(direction) {
	      throw new Error('[Convex] implments getFarthestPoint');
	    }
	  }]);
	
	  return Convex;
	}();
	
	exports.default = Convex;

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Geometry = function () {
	    function Geometry() {
	        _classCallCheck(this, Geometry);
	    }
	
	    _createClass(Geometry, null, [{
	        key: 'getCounterClockwiseEdgeNormals',
	
	
	        /**
	         * Returns an array of normalized vectors representing the normals of all the
	         * edges given the vertices.
	         * <p>
	         * This method assumes counter-clockwise ordering.
	         * <p>
	         * Returns null if the given vertices array is null or empty.
	         * @param vertices {Vector[]}
	         */
	        value: function getCounterClockwiseEdgeNormals(vertices) {
	            if (vertices == null) {
	                return null;
	            }
	
	            var size = vertices.length;
	            if (size === 0) {
	                return null;
	            }
	
	            var normals = new Array(size);
	            for (var i = 0; i < size; i++) {
	                // get the edge points
	                var p1 = vertices[i];
	                var p2 = i + 1 === size ? vertices[0] : vertices[i + 1];
	                // create the edge and get its left perpedicular vector
	                var n = p1.to(p2).left();
	                // normalize it
	                n.normalize();
	                normals[i] = n;
	            }
	
	            return normals;
	        }
	    }]);
	
	    return Geometry;
	}();
	
	exports.default = Geometry;

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Penetration = function () {
	    /**
	     *
	     * @param normal {Vector} convex1 에서 convex2 로 침투한 normal
	     * @param depth {number} 침투 깊이
	     */
	    function Penetration() {
	        var normal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _Vector2.default();
	        var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	        _classCallCheck(this, Penetration);
	
	        this.normal = normal;
	        this.depth = depth;
	    }
	
	    _createClass(Penetration, [{
	        key: 'clear',
	        value: function clear() {
	            this.normal = null;
	            this.depth = 0;
	        }
	    }, {
	        key: 'getNormal',
	        value: function getNormal() {
	            return this.normal;
	        }
	    }, {
	        key: 'getDepth',
	        value: function getDepth() {
	            return this.depth;
	        }
	
	        /**
	         * 침투 방향을 설정합니다. 반드시 normalized 해야 합니다.
	         * @param normal {Vector}
	         */
	
	    }, {
	        key: 'setNormal',
	        value: function setNormal(normal) {
	            this.normal = normal;
	        }
	
	        /**
	         * 침투 깊이를 설정합니다.
	         * @param depth {number}
	         */
	
	    }, {
	        key: 'setDepth',
	        value: function setDepth(depth) {
	            this.depth = depth;
	        }
	    }]);
	
	    return Penetration;
	}();
	
	exports.default = Penetration;

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9QYXN0ZWxDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9IaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9namsvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9Db25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9WZXJ0aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0dqay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovRXBzaWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovTWlua293c2tpU3VtLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9FeHBhbmRpbmdTaW1wbGV4LmpzIiwid2VicGFjazovLy8uL34vc3RhYmxlcHJpb3JpdHlxdWV1ZS9TdGFibGVQcmlvcml0eVF1ZXVlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0V4cGFuZGluZ1NpbXBsZXhFZGdlLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9FcGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL1BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0NvbnZleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovR2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL1BlbmV0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9QYWludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvR0pLLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwibXMiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJpbm5lckhlaWdodCIsInN0eWxlIiwicmVzaXplIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidGVtcCIsInZlYzIiLCJkb3QiLCJjb2VmZiIsImF0YW4yIiwiaG9yaXpvbnRhbEFuZ2xlIiwidmVydGljYWxBbmdsZSIsImhvcml6b250YWxBbmdsZURlZyIsImFuZ2xlIiwibngiLCJjb3MiLCJzaW4iLCJueSIsInJvdGF0ZSIsInJvdGF0aW9uIiwicm90YXRlVG8iLCJyb3RhdGVCeSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNxcnQiLCJkaXN0YW5jZVNxIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImxlbmd0aFNxIiwiYSIsImIiLCJ2IiwiY2xvbmUiLCJyZXQiLCJtdWx0aXBseVNjYWxhciIsImMiLCJyIiwiYWMiLCJiYyIsInZlYzEiLCJ0byIsImFkZCIsIlBvaW50IiwicmFkaXVzIiwiY29sb3IiLCJnZW5lcmF0ZSIsImhleCIsImFscGhhIiwiYnV0dG9uTW9kZSIsImludGVyYWN0aXZlIiwiY2xlYXIiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImx0IiwicmIiLCJwb3NpdGlvbiIsInJhbmRvbWl6ZSIsImZyb21PYmplY3QiLCJHcmFwaGljcyIsIlBhc3RlbENvbG9yIiwiaEJhc2UiLCJuZXdIIiwibmV3TCIsIkhTTHRvUkdCIiwiZyIsImhzbCIsInJnYiIsIlJHQnRvSGV4IiwiaGV4U2hhcCIsImgiLCJzIiwibCIsInJkIiwiaHVlVG9SR0IiLCJtIiwibiIsIm8iLCJxIiwicCIsInByZWZpeCIsInRvU3RyaW5nIiwiQ29udmV4SHVsbCIsInBvaW50cyIsInN0YWNrIiwic29ydCIsInNvcnRMb3dlcllYIiwiYmFzZVBvaW50IiwiaSIsInJlbGF0aXZlUG9zaXRpb24iLCJzb3J0Q2N3IiwicHVzaCIsIm5leHQiLCJmaXJzdCIsInNlY29uZCIsInBvcCIsImlzQ2N3IiwiY29udmV4SHVsbCIsImluZGV4IiwicG9pbnQiLCJwb2ludEEiLCJwb2ludEIiLCJwb2ludEMiLCJ0cmlhbmdsZUFyZWEiLCJkZWJ1Z0FycmF5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvbnZleEh1bGwiLCJpMCIsIngwIiwiaHVsbCIsImloIiwiaWUiLCJqIiwic3ViIiwiY3Jvc3MiLCJsZW5ndGhzcSIsIm5ld1BvaW50cyIsIk1vdXNlIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwicHJldlRpbWUiLCJjdXJyZW50VGltZSIsImRpZmZYIiwiZGlmZlkiLCJwbHVnaW5zIiwiaW50ZXJhY3Rpb24iLCJtb3VzZSIsInBvaW50ZXIiLCJ2YWx1ZSIsIl9yZW5kZXJlciIsIl9tb3VzZSIsIkRFU0tUT1BfTU9VU0UiLCJnbG9iYWwiLCJjdXJyZW50Q3Vyc29yU3R5bGUiLCJEYXRlIiwiZ2V0VGltZSIsIlRPVEFMIiwiSU5URVJWQUwiLCJTQ0FMRSIsIlNUQUdFIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJSQURfVE9fREVHIiwidHJpYW5nbGVzIiwiY3JlYXRlUG9seWdvbnMiLCJyZWN0YW5nbGVzIiwiVGVzdCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW5pdGlhbGl6ZSIsInNoYXBlcyIsImdyYXBoaWNzIiwiZGlzcGxheSIsImRpc3BsYXlDb2xsaXNpb24iLCJrZXlVcExpc3RlbmVyIiwib25LZXlVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd25MaXN0ZW5lciIsIm9uTW91c2VEb3duIiwib24iLCJjaGVja0NvbGxpc2lvbiIsImZvckVhY2giLCJzaGFwZSIsInJlbW92ZUNoaWxkIiwiZGVzdHJveSIsIm1pbmtvd3NraSIsImluZGV4MSIsImluZGV4MiIsInZlcnRpY2VzMSIsInZlcnRpY2VzMiIsInBlbmV0cmF0aW9uQ29sb3IiLCJwZW5ldHJhdGlvbkFscGhhIiwibXVsdGlwbHkiLCJzaGFwZTEiLCJ2ZXJ0aWNlcyIsInNoYXBlMiIsInNoYXBlMyIsInBvbHlnb24xIiwicG9seWdvbjIiLCJnamsiLCJwZW5ldHJhdGlvbiIsImhpc3RvcnkiLCJpc0NvbGxpc2lvbiIsImRldGVjdCIsImFycm93Iiwibm9ybWFsIiwiZGVwdGgiLCJsaW5lU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJ2aXNpYmxlIiwiaW50ZXJ2YWxJZCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImhpdEFyZWEiLCJSZWN0YW5nbGUiLCJlIiwia2V5Q29kZSIsIlNQQUNFIiwiZ2V0QW5nbGUiLCJub3JtIiwicmFkaWFuIiwiYWNvcyIsImRvdFByb2R1Y3QiLCJwb2x5Z29uIiwidG90YWwiLCJwb2x5Z29ucyIsInZlcnRleCIsIkhpc3RvcnkiLCJzaW1wbGV4IiwiQXJyYXkiLCJkaXJlY3Rpb25zIiwiRk9OVF9TSVpFIiwiU2hhcGUiLCJsaW5lQ29sb3IiLCJsaW5lQWxwaGEiLCJ0ZXh0Q29sb3IiLCJyZXBsYWNlIiwibGFiZWxzIiwiY3JlYXRlTGFiZWwiLCJkcmF3IiwidGV4dCIsIlRleHQiLCJhbGlnbiIsImZvbnQiLCJmaWxsIiwib3JpZ2luIiwibGFiZWwiLCJkaXZpZGVTY2FsYXIiLCJDb25zdHMiLCJWZXJ0aWNlcyIsIkZPTlRfQ09MT1IiLCJBWEVTX0xJTkVfQ09MT1IiLCJDT05WRVhfSFVMTF9MSU5FX0NPTE9SIiwiTWlua293c2tpRGlmZmVyZW5jZSIsImdldFZlcnRpY2VzIiwidGV4dHMiLCJkcmF3QXhlcyIsImRyYXdWZXRpY2VzIiwiZHJhd1BvbHlnb24iLCJkcmF3VGV4dCIsImh3IiwiaGgiLCJERUZBVUxUX01BWF9JVEVSQVRJT05TIiwiREVGQVVMVF9ERVRFQ1RfRVBTSUxPTiIsIkdqayIsIm1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyIiwiY29udmV4MSIsImNvbnZleDIiLCJjMSIsImdldENlbnRlciIsImMyIiwiZ2V0SW5pdGlhbERpcmVjdGlvbiIsImRldGVjdDIiLCJnZXRQZW5ldHJhdGlvbiIsImlzWmVybyIsInNldCIsImdldFN1cHBvcnRQb2ludCIsInNldEhpc3RvcnkiLCJpbnZlcnQiLCJjaGVja1NpbXBsZXgiLCJhbyIsIm5lZ2F0ZSIsImFiIiwiYWNQZXJwIiwidHJpcGxlUHJvZHVjdCIsImFjTG9jYXRpb24iLCJzcGxpY2UiLCJhYlBlcnAiLCJhYkxvY2F0aW9uIiwiZ2V0TWFnbml0dWRlU3F1YXJlZCIsIkUiLCJsZWZ0IiwiRXBzaWxvbiIsImNvbXB1dGUiLCJNaW5rb3dza2lTdW0iLCJwb2ludDEiLCJnZXRGYXJ0aGVzdFBvaW50IiwicG9pbnQyIiwiRXhwYW5kaW5nU2ltcGxleCIsIndpbmRpbmciLCJnZXRXaW5kaW5nIiwicXVldWUiLCJkaXN0YW5jZSIsInNpemUiLCJwZWVrIiwiZWRnZSIsInBvbGwiLCJlZGdlMSIsImVkZ2UyIiwiRXhwYW5kaW5nU2ltcGxleEVkZ2UiLCJyaWdodCIsIkRFRkFVTFRfRElTVEFOQ0VfRVBTSUxPTiIsIkVwYSIsIm1heEl0ZXJhdGlvbnMiLCJkaXN0YW5jZUVwc2lsb24iLCJtaW5rb3dza2lTdW0iLCJzbXBseCIsImdldENsb3Nlc3RFZGdlIiwicHJvamVjdGlvbiIsImV4cGFuZCIsIkVycm9yIiwiUG9seWdvbiIsIm5vcm1hbHMiLCJnZXRDb3VudGVyQ2xvY2t3aXNlRWRnZU5vcm1hbHMiLCJjZW50ZXIiLCJhdmciLCJjb3VudCIsIm1heGltdW0iLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJsZWZ0TiIsInJpZ2h0TiIsInZtIiwiUG9pbnRGZWF0dXJlIiwidmwiLCJFZGdlRmVhdHVyZSIsInZyIiwiQ29udmV4IiwiR2VvbWV0cnkiLCJwMSIsInAyIiwiUGVuZXRyYXRpb24iLCJQYWludGVyIiwicGF0aCIsInYxIiwidjIiLCJkaWZmIiwiY29udmV4SHVsbFBhdGgiLCJsaW5lV2lkdGgiLCJ2ZWMwIiwibWFnbmlmaWNhdGlvbiIsInN0cmluZyIsImlzQ2xlYXIiLCJib3VuZHMiLCJ0aGlja25lc3MiLCJkcmF3UmVjdCIsInJlY3QiLCJydCIsImxiIiwicDAiLCJtb3ZlUG9pbnQiLCJ0b1BvaW50Iiwic2NhbGUiLCJtZSIsInRhcmdldCIsIkdKSyIsIm1heFByb2R1Y3QiLCJwcm9kdWN0IiwiaW5kZXhPZkZ1cnRoZXN0UG9pbnQiLCJzdHIiLCJpdGVyQ291bnQiLCJkIiwiYWJwZXJwIiwiYWNwZXJwIiwicG9zaXRpb24xIiwiYXZlcmFnZVBvaW50IiwicG9zaXRpb24yIiwic3VwcG9ydCIsInBlcnBlbmRpY3VsYXIiLCJkZWJ1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QUFSLENBQVlSLEtBQVosRUFBbUI4RyxPQUFPck8sQ0FBMUIsRUFBNkJxTyxPQUFPcE8sQ0FBcEM7QUFDRixNQUZEO0FBR0g7O0FBRUQsVUFBUzhYLGVBQVQsQ0FBeUJqTSxTQUF6QixFQUFvQ0MsU0FBcEMsRUFBK0M7QUFDM0NqRSxhQUFRQyxHQUFSLENBQVksbURBQVo7QUFDQUQsYUFBUUMsR0FBUixDQUFZLFdBQVo7QUFDQUQsYUFBUUMsR0FBUixDQUFZLG1EQUFaO0FBQ0ErUCxtQkFBY2hNLFNBQWQ7QUFDQWhFLGFBQVFDLEdBQVIsQ0FBWSxtREFBWjtBQUNBRCxhQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBRCxhQUFRQyxHQUFSLENBQVksbURBQVo7QUFDQStQLG1CQUFjL0wsU0FBZDtBQUNBakUsYUFBUUMsR0FBUixDQUFZLG1EQUFaO0FBQ0g7O0FBRUQsVUFBU3FQLEdBQVQsQ0FBYS9JLE1BQWIsRUFBc0M7QUFBQSxTQUFqQjJKLE9BQWlCLHVFQUFQLEtBQU87O0FBQ2xDLFNBQUlBLFlBQVksS0FBaEIsRUFBdUI7QUFDbkIsc0JBQVczSixPQUFPck8sQ0FBbEIsU0FBdUJxTyxPQUFPcE8sQ0FBOUI7QUFDSDtBQUNELGtCQUFXb08sT0FBT3JPLENBQVAsQ0FBU21CLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBWCxTQUFrQ2tOLE9BQU9wTyxDQUFQLENBQVNrQixPQUFULENBQWlCLENBQWpCLENBQWxDO0FBQ0gsRSIsImZpbGUiOiJlcGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9Nb3VzZVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xuICAgIH1cbn0oKSk7XG5cbmxldCBjYW52YXMsIHJlbmRlcmVyLCBzdGFnZSwgdGVzdCwgY29udGFpbmVyO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwge1xuICAgICAgICAgICAgdmlldzogY2FudmFzLFxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgzMzM4M0RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTW91c2UucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgICAgICAvLyDsnITsuZjqsIAg7KCV7IiY6rCAIOyVhOuLkOqyveyasCDtnZDrpr/tlZjqsowg67O07J2064qUIOusuOygnOqwgCDsnojslrRcbiAgICAgICAgLy8g66CM642U65+s7J2YIOychOy5mOulvCDsoJXsiJjroZwg7Jew7IKw65CgIOyImCDsnojrj4TroZ0g7ZWc64ukLlxuICAgICAgICAvL3JlbmRlcmVyLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcblxuICAgICAgICBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICB0ZXN0ID0gbmV3IFRlc3QocmVuZGVyZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXN0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AoKTtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCkge31cblxuICAgIHVwZGF0ZUxvb3AgKG1zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1zKTtcbiAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG1zKSB7XG4gICAgICAgIHRlc3QudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzdGFnZSk7XG4gICAgfVxuXG4gICAgcmVzaXplV2luZG93KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDsupTrsoTsiqQg7IKs7J207KaI7JmAIOuUlOyKpO2UjOugiOydtCDsgqzsnbTspogg7ISk7KCVXG4gICAgICAgICAqIOugiO2LsOuCmCDqt7jrnpjtlL0g7KeA7JuQIOy9lOuTnFxuICAgICAgICAgKi9cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBJWEkgcmVuZGVyZXIg66as7IKs7J207KaIXG4gICAgICAgICAqIFBJWEkg7JeQ6rKMIHZpZXdwb3J0IOyCrOydtOymiCDrs4Dqsr0g7JWM66a8XG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIHRlc3QucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L2VwYS9pbmRleC5qcyIsIlxuXG5jb25zdCBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuXG5mdW5jdGlvbiByYW5kb20gKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhZGlhbjJkZWdyZWVzIChyYWQpIHtcbiAgICByZXR1cm4gcmFkICogZGVncmVlcztcbn1cblxuZnVuY3Rpb24gZGVncmVlczJyYWRpYW4gKGRlZykge1xuICAgIHJldHVybiBkZWcgLyBkZWdyZWVzO1xufVxuXG5cbi8qKlxuICogVmljdG9yLmpz66W8IEVTNuuhnCDrs4DtmZjtlZjsl6wg7IKs7Jqp7ZWY6rOgIOyeiOyKteuLiOuLpC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhrdWVuZy92aWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yXG57XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbUFycmF5KFs0MiwgMjFdKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21BcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHdpdGggdGhlIHggYW5kIHkgdmFsdWVzIGF0IGluZGV4IDAgYW5kIDEgcmVzcGVjdGl2ZWx5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGFyclswXSB8fCAwLCBhcnJbMV0gfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbU9iamVjdCh7IHg6IDQyLCB5OiAyMSB9KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21PYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgZm9yIHggYW5kIHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tT2JqZWN0KG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKG9iai54IHx8IDAsIG9iai55IHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuIFdpbGwgYWxzbyB3b3JrIHdpdGhvdXQgdGhlIGBuZXdgIGtleXdvcmRcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IFZlY3Rvcig0MiwgMTMzNyk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBWYWx1ZSBvZiB0aGUgeCBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVmFsdWUgb2YgdGhlIHkgYXhpc1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMClcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWCBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeToxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBZIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGQodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggKyBiLngsIGEueSArIGIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIGJvdGggdmVjdG9yIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWCBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBZIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0KHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3QodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1YnRyYWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLSBiLngsIGEueSAtIGIueSk7XG4gICAgfVxuXG5cbiAgICBlZGdlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZWRnZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdChhLCBiKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXIoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclgoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDIwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJZKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEwMCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIHggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgeSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSBhIGF4aXMgdmFsdWVzIG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGUodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGUoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAvIGIueCwgYS55IC8gYi55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRYKClcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFkoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WSgpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuaW52ZXJ0WCgpO1xuICAgICAgICB0aGlzLmludmVydFkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmVnYXRlKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHYgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgdi54ID0gLXZlYy54O1xuICAgICAgICB2LnkgPSAtdmVjLnk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBYIGF4aXMgYnkgWCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWSBheGlzIGJ5IFkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdmFsdWVzIGZyb20gYSBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5KHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbXVsdGlwbHlTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHNjYWxhciwgdmVjdG9yLnkgKiBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54IC8gc2NhbGFyLCB2ZWN0b3IueSAvIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoOTAg64+EIO2ajOyghClcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBwZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSAtdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKC05MCDrj4Qg7ZqM7KCEKVxuICAgICAqL1xuICAgIHJldHVyblBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy55LCAtdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZXR1cm5QZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSB2ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IC12ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog67KE66a8XG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJ1bmNhdGUodmVjLCBsZW5ndGgpXG4gICAge1xuICAgICAgICBjb25zdCByZXQgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoU3EgPSB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICAgICAgaWYgKGxlbmd0aFNxID4gbGVuZ3RoICogbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXQubXVsdGlwbHlTY2FsYXIobGVuZ3RoIC8gTWF0aC5zcXJ0KGxlbmd0aFNxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbm9ybWFsaXplKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpdmlkZShuZXcgVmVjdG9yKGxlbmd0aCwgbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBub3JtKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGFic29sdXRlIHZlY3RvciBheGlzIGlzIGdyZWF0ZXIgdGhhbiBgbWF4YCwgbXVsdGlwbGllcyB0aGUgYXhpcyBieSBgZmFjdG9yYFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGltaXQoODAsIDAuOSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjkwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIGZvciBib3RoIHggYW5kIHkgYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmYWN0b3IgRmFjdG9yIGJ5IHdoaWNoIHRoZSBheGlzIGFyZSB0byBiZSBtdWx0aXBsaWVkIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsaW1pdChtYXgsIGZhY3RvcilcbiAgICB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLngpID4gbWF4KXsgdGhpcy54ICo9IGZhY3RvcjsgfVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55KSA+IG1heCl7IHRoaXMueSAqPSBmYWN0b3I7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21pemVzIGJvdGggdmVjdG9yIGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemUobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MGApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NjcsIHk6NzNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpLCB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHRoaXMueCA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHRoaXMueSA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IHJhbmRvbWl6ZXMgZWl0aGVyIGF4aXMgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZUFueShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo3N1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemVBbnkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBpZiAoISEgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGFuIGludGVnZXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdW5mbG9hdCgpXG4gICAge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGEgY2VydGFpbiBwcmVjaXNpb25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFByZWNpc2lvbiAoZGVmYXVsdDogOClcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0ZpeGVkKHByZWNpc2lvbilcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJlY2lzaW9uID09PSAndW5kZWZpbmVkJykgeyBwcmVjaXNpb24gPSA4OyB9XG4gICAgICAgIHRoaXMueCA9IHRoaXMueC50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBYIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gKDEgLSBhbW91bnQpICogdGhpcy54ICsgYW1vdW50ICogdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBZIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WSh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WSh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0gKDEgLSBhbW91bnQpICogdGhpcy55ICsgYW1vdW50ICogdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4KHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5taXhYKHZlYywgYW1vdW50KTtcbiAgICAgICAgdGhpcy5taXhZKHZlYywgYW1vdW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFByb2R1Y3RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jbG9uZSgpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBBIGNsb25lIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNsb25lKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVgodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBZIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlZKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBhbmQgWSBjb21wb25lbnRzIGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb3B5WCh2ZWMpO1xuICAgICAgICB0aGlzLmNvcHlZKHZlYyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmVjdG9yIHRvIHplcm8gKDAsMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICpcdFx0IHZhcjEuemVybygpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MCwgeTowXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB6ZXJvKClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgbGVmdC1oYW5kZWQgbm9ybWFsIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gdGhpcyB2ZWN0b3JcbiAgICAgKiBAc2VlICNnZXRMZWZ0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIGxlZnQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSAtdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgdmVjdG9yIHRvIHRoZSByaWdodC1oYW5kZWQgbm9ybWFsIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqIEByZXR1cm4ge0BsaW5rIFZlY3RvcjJ9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0UmlnaHRIYW5kT3J0aG9nb25hbFZlY3RvcigpXG4gICAgICovXG4gICAgcmlnaHQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kb3QodmVjMik7XG4gICAgICogICAgIC8vID0+IDIzMDAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEb3QgcHJvZHVjdFxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZG90KHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjMi54ICsgdGhpcy55ICogdmVjMi55O1xuICAgIH1cblxuXG4gICAgZG90UHJvZHVjdCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkb3RQcm9kdWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55O1xuICAgIH1cblxuXG4gICAgY3Jvc3ModmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy54ICogdmVjMi55KSAtICh0aGlzLnkgKiB2ZWMyLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi55IC0gYS55ICogYi54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAgICAgKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UcmlwbGVfcHJvZHVjdCNWZWN0b3JfdHJpcGxlX3Byb2R1Y3RcbiAgICAgKiDshLjqt7jrqLztirjsl5DshJwg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsKntlqXsnYQg7LC+7J2EIOuVjCDsgqzsmqlcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpcGxlUHJvZHVjdChhLCBiLCBjKVxuICAgIHtcbiAgICAgICAgY29uc3QgciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgY29uc3QgYWMgPSBhLnggKiBjLnggKyBhLnkgKiBjLnkgICAgLy8gcGVyZm9ybSBhLmRvdChjKVxuICAgICAgICAgICAgLCBiYyA9IGIueCAqIGMueCArIGIueSAqIGMueTsgICAvLyBwZXJmb3JtIGIuZG90KGMpXG5cbiAgICAgICAgLy8gcGVyZm9ybSBiICogYS5kb3QoYykgLSBhICogYi5kb3QoYylcbiAgICAgICAgci54ID0gYi54ICogYWMgLSBhLnggKiBiYztcbiAgICAgICAgci55ID0gYi55ICogYWMgLSBhLnkgKiBiYztcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIGEgdmVjdG9yIG9udG8gYW5vdGhlciB2ZWN0b3IsIHNldHRpbmcgaXRzZWxmIHRvIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnByb2plY3RPbnRvKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIHByb2plY3QgdGhpcyB2ZWN0b3Igb250b1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHByb2plY3RPbnRvKHZlYzIpXG4gICAge1xuICAgICAgICB2YXIgY29lZmYgPSAoICh0aGlzLnggKiB2ZWMyLngpKyh0aGlzLnkgKiB2ZWMyLnkpICkgLyAoKHZlYzIueCp2ZWMyLngpKyh2ZWMyLnkqdmVjMi55KSk7XG4gICAgICAgIHRoaXMueCA9IGNvZWZmICogdmVjMi54O1xuICAgICAgICB0aGlzLnkgPSBjb2VmZiAqIHZlYzIueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDshKDtmJUg67O06rCEXG4gICAgICogaHR0cDovL2RldmVsb3B1Zy5ibG9nc3BvdC5jb20vMjAxNC8wOS91bml0eS12ZWN0b3ItbGVycC5odG1sXG4gICAgICogQHBhcmFtIHZlYzFcbiAgICAgKiBAcGFyYW0gdmVjMlxuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIGxlcnAodmVjMSwgdmVjMiwgdG8pIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5hZGQoVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzEsIDEgLSB0byksIFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMyLCB0bykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOyXreyImFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyByY3AodmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEgLyB2ZWN0b3IueCwgMSAvIHZlY3Rvci55KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLnZlcnRpY2FsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICBhbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZURlZygpO1xuICAgIH1cblxuXG4gICAgZGlyZWN0aW9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgcm90YXRlKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG54ID0gKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSkgLSAodGhpcy55ICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgdmFyIG55ID0gKHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSkgKyAodGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKTtcblxuICAgICAgICB0aGlzLnggPSBueDtcbiAgICAgICAgdGhpcy55ID0gbnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICByb3RhdGVEZWcoYW5nbGUpXG4gICAge1xuICAgICAgICBhbmdsZSA9IGRlZ3JlZXMycmFkaWFuKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKHJvdGF0aW9uLXRoaXMuYW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUb0RlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVUbyhyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeShyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMuYW5nbGUoKSArIHJvdGF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeURlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVCeShyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWCBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAtIHZlYy54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VYKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hYnNEaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVgodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWSBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55IC0gdmVjLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVkoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VZKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwLjQ5ODc1NjIxMTIwODlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24oKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZVNxdWFyZWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVNxKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlU3EodmVjKVxuICAgIHtcbiAgICAgICAgdmFyIGR4ID0gdGhpcy5kaXN0YW5jZVgodmVjKSxcbiAgICAgICAgICAgIGR5ID0gdGhpcy5kaXN0YW5jZVkodmVjKTtcblxuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb3IgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aCgpO1xuICAgICAqICAgICAvLyA9PiAxMTEuODAzMzk4ODc0OTg5NDhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uo7Iic7Z6IIOq4uOydtCDruYTqtZDrpbwg7ZWY66Ck66m0IGxlbmd0aCDrpbwg7IKs7Jqp7ZWY6riwIOuztOuLpOuKlCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY6rKMIOu5oOultOuLpC5cbiAgICAgKiBsZW5ndGgg64qUIE1hdGguc3FydCAo7KCc6rOx6re8KSDsspjrpqzrpbwg7ZWY6riwIOuVjOusuOyXkCDri6jsiJwg6ri47J20IOu5hOq1kOyLnCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY64qUIOqyg+ydtCDruaDrpoXri4jri6QuXG4gICAgICogU3F1YXJlZCBsZW5ndGggLyBtYWduaXR1ZGVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aFNxKCk7XG4gICAgICogICAgIC8vID0+IDEyNTAwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoU3EoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsZW5ndGhTcSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgfVxuXG5cbiAgICBtYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoKCk7XG4gICAgfVxuXG5cbiAgICB0byh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWMueCAtIHRoaXMueCwgdmVjLnkgLSB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgc2V0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB2ZWN0b3IgaXMgKDAsIDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMuemVybygpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc1plcm8oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB0aGlzIHZlY3RvciBpcyB0aGUgc2FtZSBhcyBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMxLmlzRXF1YWxUbyh2ZWMyKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNFcXVhbFRvKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSB2ZWMyLnggJiYgdGhpcy55ID09PSB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFV0aWxpdHkgTWV0aG9kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICByZXR1cm4gJ3g6JyArIHRoaXMueCArICcsIHk6JyArIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b0FycmF5KCk7XG4gICAgICogICAgIC8vID0+IFsxMCwgMjBdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvQXJyYXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFsgdGhpcy54LCB0aGlzLnkgXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9PYmplY3QoKTtcbiAgICAgKiAgICAgLy8gPT4geyB4OiAxMCwgeTogMjAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9PYmplY3QoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmVjdG9yLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uL3V0aWxzL1Bhc3RlbENvbG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCBleHRlbmRzIFBJWEkuR3JhcGhpY3NcbntcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDEwLCBjb2xvciA9IFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4LCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yZW5kZXIocmFkaXVzLCBjb2xvciwgYWxwaGEpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKHJhZGl1cyA9IDEwLCBjb2xvciA9IDB4ZmYzMzAwLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKDAsIDAsIHJhZGl1cywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgdGhpcy5lbmRGaWxsKCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemUobHQsIHJiKVxuICAgIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnZlY3Rvci5yYW5kb21pemUobHQsIHJiKTtcbiAgICAgICAgdGhpcy54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy55ID0gcG9zaXRpb24ueTtcbiAgICB9XG5cblxuICAgIGdldCB2ZWN0b3IoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5mcm9tT2JqZWN0KHRoaXMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tL1BvaW50LmpzIiwiLyoqXG4gKiBodHRwczovL2NvZGVwZW4uaW8vcGxpdS9wZW4vQkxFS3dBXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3RlbENvbG9yIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGUoKSB7XG4gICAgICAgIGNvbnN0IGhCYXNlID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgY29uc3QgbmV3SCA9IE1hdGguZmxvb3IoaEJhc2UgKiAzNjApO1xuICAgICAgICBjb25zdCBuZXdMID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpICsgNzU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gYGhzbCgke25ld0h9LCAxMDAlLCAke25ld0x9JSlgO1xuICAgICAgICBjb25zdCBbciwgZywgYl0gPSB0aGlzLkhTTHRvUkdCKGhCYXNlLCAxLCBuZXdMICogLjAxKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHNsOiBjb2xvciwgLy8gaHNsKDAsIDEwMCUsIDg1JSk7XG4gICAgICAgICAgICByZ2I6IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgLCAvLyByZ2IoMjU1LCAxMjgsIDEyOCk7XG4gICAgICAgICAgICBoZXg6IGAke3RoaXMuUkdCdG9IZXgociwgZywgYil9YCwgLy8gMHhmZjgwODBcbiAgICAgICAgICAgIGhleFNoYXA6YCR7dGhpcy5SR0J0b0hleChyLCBnLCBiLCAnIycpfWAsIC8vICNmZjgwODBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIU0wgdG8gUkdCIGZvcm11bGEgYWRhcHRlZCBmcm9tOlxuICAgICAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL21qYWNrc29uLzUzMTEyNTZcbiAgICAgKiAoc2tpcHBpbmcgdG8gZWxzZXt9IHNpbmNlIHMgd2lsbCBhbHdheXMgYmUgMTAwJSlcbiAgICAgKiBAcGFyYW0gaFxuICAgICAqIEBwYXJhbSBzXG4gICAgICogQHBhcmFtIGxcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBIU0x0b1JHQihoLCBzLCBsKSB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuXG4gICAgICAgIGNvbnN0IHJkID0gKGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubWF4KE1hdGgubWluKGEgKiAyNTYsIDI1NSksIDApKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBodWVUb1JHQiA9IChtLCBuLCBvKSA9PiB7XG4gICAgICAgICAgICBpZiAobyA8IDApIG8gKz0gMTtcbiAgICAgICAgICAgIGlmIChvID4gMSkgbyAtPSAxO1xuICAgICAgICAgICAgaWYgKG8gPCAxIC8gNikgcmV0dXJuIG0gKyAobiAtIG0pICogNiAqIG87XG4gICAgICAgICAgICBpZiAobyA8IDEgLyAyKSByZXR1cm4gbjtcbiAgICAgICAgICAgIGlmIChvIDwgMiAvIDMpIHJldHVybiBtICsgKG4gLSBtKSAqICgyIC8gMyAtIG8pICogNjtcbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuXG4gICAgICAgIHIgPSBodWVUb1JHQihwLCBxLCBoICsgMSAvIDMpO1xuICAgICAgICBnID0gaHVlVG9SR0IocCwgcSwgaCk7XG4gICAgICAgIGIgPSBodWVUb1JHQihwLCBxLCBoIC0gMSAvIDMpO1xuXG4gICAgICAgIHJldHVybiBbcmQociksIHJkKGcpLCByZChiKV1cbiAgICB9XG5cbiAgICBzdGF0aWMgUkdCdG9IZXgociwgZywgYiwgcHJlZml4ID0gJzB4Jykge1xuICAgICAgICByZXR1cm4gYCR7cHJlZml4fSR7ci50b1N0cmluZygxNil9JHtnLnRvU3RyaW5nKDE2KX0ke2IudG9TdHJpbmcoMTYpfWA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yLmpzIiwiLyoqXG4gKiBodHRwczovL3d3dy5jcm9jdXMuY28ua3IvMTI4OFxuICovXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi9WZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udmV4SHVsbCB7XG4gICAgc3RhdGljIGdlbmVyYXRlKHBvaW50cykge1xuXG4gICAgICAgIGNvbnN0IHN0YWNrID0gW10sXG4gICAgICAgICAgICBuID0gcG9pbnRzLmxlbmd0aDtcblxuICAgICAgICAvLyB57KKM7ZGcLCB47KKM7ZGcIOyekeydgCDsiJzsnLzroZwg7KCV66CsXG4gICAgICAgIHBvaW50cy5zb3J0KHRoaXMuc29ydExvd2VyWVgpO1xuXG4gICAgICAgIC8vIOq4sOykgOygkCDshKTsoJVcbiAgICAgICAgY29uc3QgYmFzZVBvaW50ID0gcG9pbnRzWzBdO1xuXG4gICAgICAgIC8vIOq4sOykgOygkCDquLDspIDsnLzroZwgdmVjdG9yIOulvCDsg53shLHtlZjqs6Ag7Jm47KCB7J2EIOq1rO2VtOyEnCDrsJgg7Iuc6rOEIOuwqe2WpeycvOuhnCAoY2N3KSDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcG9pbnRzW2ldLnJlbGF0aXZlUG9zaXRpb24gPSBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXS54IC0gYmFzZVBvaW50LngsXG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldLnkgLSBiYXNlUG9pbnQueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvaW50cy5zb3J0KHRoaXMuc29ydENjdyk7XG5cbiAgICAgICAgLy8g7Iqk7YOd7JeQIGZpcnN0LCBzZWNvbmQg66W8IOuEo+yKteuLiOuLpC5cbiAgICAgICAgc3RhY2sucHVzaCgwKTtcbiAgICAgICAgc3RhY2sucHVzaCgxKTtcblxuICAgICAgICBsZXQgbmV4dCA9IDI7XG5cbiAgICAgICAgd2hpbGUgKG5leHQgPCBuKSB7XG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3QsIHNlY29uZDtcbiAgICAgICAgICAgICAgICBzZWNvbmQgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgLy8gZmlyc3QsIHNlY29uZCwgbmV4dOqwgCDsooztmozsoIQgKCAwIOuztOuLpCDtgazrqbQgKeydtOudvOuptCBzZWNvbmQgcHVzaFxuICAgICAgICAgICAgICAgIC8vIOyasO2ajOyghCggMCDrs7Tri6Qg7J6R7Jy866m0ICkg7J20652866m0IOychOydmCB3aGlsZeusuCDqs4Tsho0g67CY67O1XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDY3cocG9pbnRzW2ZpcnN0XSwgcG9pbnRzW3NlY29uZF0sIHBvaW50c1tuZXh0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dCsrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZleEh1bGwgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSBzdGFjay5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhY2tbaV07XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpbmRleF07XG4gICAgICAgICAgICBjb252ZXhIdWxsLnB1c2gobmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udmV4SHVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB5LCB4IOqwgCDsnpHsnYAg7Iic7Jy866GcIOygleugrFxuICAgICAqIEBwYXJhbSBwb2ludEFcbiAgICAgKiBAcGFyYW0gcG9pbnRCXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIHNvcnRMb3dlcllYKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIGlmIChwb2ludEEueSAhPT0gcG9pbnRCLnkpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludEEueSAtIHBvaW50Qi55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludEEueCAtIHBvaW50Qi54O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOq4sOykgCDsooztkZwg6riw7KSA7Jy866GcIOyDgeuMgCDsooztkZzrpbwg6rWs7ZW07IScIOyLnOqzhCDrsJjrjIAg67Cp7Zal7Jy866GcIOygleugrO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBzb3J0Q2N3KHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIC8vIOykkeyLrCDsooztkZzsnbgg6rK97JqwIHJlbGF0aXZlUG9zaXRpb24g7J20IOyXhuyKteuLiOuLpC4g7KSR7IusIOyijO2RnOulvCAw67KI7Jy866GcIOygleugrCDtlanri4jri6QuXG4gICAgICAgIGlmICghcG9pbnRBLnJlbGF0aXZlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYSA9IHBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uLnkgKiBwb2ludEIucmVsYXRpdmVQb3NpdGlvbi54O1xuICAgICAgICBjb25zdCBiID0gcG9pbnRBLnJlbGF0aXZlUG9zaXRpb24ueCAqIHBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uLnk7XG5cbiAgICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiIC0gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDb252ZXhIdWxsLnNvcnRMb3dlcllYKHBvaW50QSwgcG9pbnRCKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrsJgg7Iuc6rOEIOuwqe2WpeyduOyngCDsl6zrtoBcbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEBwYXJhbSBwb2ludENcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNDY3cocG9pbnRBLCBwb2ludEIsIHBvaW50Qykge1xuICAgICAgICAvLyBjb25zdCB0cmlhbmdsZUFyZWEgPSAocG9pbnRCLnggLSBwb2ludEEueCkgKiAocG9pbnRDLnkgLSBwb2ludEEueSkgLSAocG9pbnRDLnggLSBwb2ludEEueCkgKiAocG9pbnRCLnkgLSBwb2ludEEueSk7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlQXJlYSA9ICAocG9pbnRDLnggLSBwb2ludEEueCkgKiAocG9pbnRCLnkgLSBwb2ludEEueSkgLSAocG9pbnRCLnggLSBwb2ludEEueCkgKiAocG9pbnRDLnkgLSBwb2ludEEueSk7XG4gICAgICAgIGlmICh0cmlhbmdsZUFyZWEgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRlYnVnQXJyYXkoYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBhcnIubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycltpXS54LCBhcnJbaV0ueSk7XG4gICAgfVxufVxuXG5cbi8qXG4qIENvcHlyaWdodCAoYykgMjAxMiBKdSBIeXVuZyBMZWVcbipcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlXG4qIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4qIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuKiBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbipcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvclxuKiBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HXG4qIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuKiBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gQ3JlYXRlIHRoZSBjb252ZXggaHVsbCB1c2luZyB0aGUgR2lmdCB3cmFwcGluZyBhbGdvcml0aG1cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2lmdF93cmFwcGluZ19hbGdvcml0aG1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnZleEh1bGwocG9pbnRzKSB7XG4gICAgLy8gRmluZCB0aGUgcmlnaHQgbW9zdCBwb2ludCBvbiB0aGUgaHVsbFxuICAgIHZhciBpMCA9IDA7XG4gICAgdmFyIHgwID0gcG9pbnRzWzBdLng7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHggPSBwb2ludHNbaV0ueDtcbiAgICAgICAgaWYgKHggPiB4MCB8fCAoeCA9PSB4MCAmJiBwb2ludHNbaV0ueSA8IHBvaW50c1tpMF0ueSkpIHtcbiAgICAgICAgICAgIGkwID0gaTtcbiAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICB2YXIgaHVsbCA9IFtdO1xuICAgIHZhciBtID0gMDtcbiAgICB2YXIgaWggPSBpMDtcblxuICAgIHdoaWxlICgxKSB7XG4gICAgICAgIGh1bGxbbV0gPSBpaDtcblxuICAgICAgICB2YXIgaWUgPSAwO1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgaWYgKGllID09IGloKSB7XG4gICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgciA9IHZlYzIuc3ViKHBvaW50c1tpZV0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICB2YXIgdiA9IHZlYzIuc3ViKHBvaW50c1tqXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgIHZhciBjID0gdmVjMi5jcm9zcyhyLCB2KTtcbiAgICAgICAgICAgIGlmIChjIDwgMCkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ29sbGluZWFyaXR5IGNoZWNrXG4gICAgICAgICAgICBpZiAoYyA9PSAwICYmIHYubGVuZ3Roc3EoKSA+IHIubGVuZ3Roc3EoKSkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG0rKztcbiAgICAgICAgaWggPSBpZTtcblxuICAgICAgICBpZiAoaWUgPT0gaTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29weSB2ZXJ0aWNlc1xuICAgIHZhciBuZXdQb2ludHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICBuZXdQb2ludHMucHVzaChwb2ludHNbaHVsbFtpXV0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQb2ludHM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VcbntcbiAgICBzdGF0aWMgZ2V0IERFU0tUT1BfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE1PQklMRV9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLnBvaW50ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUElYSS5BcHBsaWNhdGlvbi5yZW5kZXJlclxuICAgICAqIOuenOuNlOufrOyXkOyEnCBpbnRlcmFjdGlvIOqwneyytOulvCDssLjsobDtlaAg7IiYIOyeiOyWtOyEnCDsgqzsmqntlZjroKTrqbQg66CM642U65+s66W8IOyFi+2Mhe2VtOyVvCDtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZhbHVlIHtQSVhJLldlYkdMUmVuZGVycmVyfFBJWEkuQ2FudmFzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgc3RhdGljIHNldCByZW5kZXJlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog66qo67CU7J28IOuMgOydkeydhCDsnITtlbTshJxcbiAgICAgKiBQQyDrsoTsoITsl5DshJzripQgbW91c2Ug6rCd7LK066W8LCDrqqjrsJTsnbwg67KE7KCE7JeQ7ISc64qUIHBvaW50ZXIg6rCd7LK066W8IOyFi+2Mhe2VmOuptFxuICAgICAqIGdsb2JhbCDqsJ3ssrTsl5DshJwg7LC47KGw7ZW07IScIOyijO2RnOqwkuydhCDsoITri6ztlZjrj4TroZ0g7ZWp64uI64ukLlxuICAgICAqXG4gICAgICog66eM7JW9IOyEpOygle2VmOyngCDslYrsnLzrqbQg6riw67O4IFBD66eMIOuMgOydke2VmOuPhOuhnSBtb3VzZSDqsJ3ssrTrpbwg7ISk7KCV7ZWp64uI64ukLlxuICAgICAqXG4gICAgICogRGVza3RvcCA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2VcbiAgICAgKiBNb2JpbGUgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLnBvaW50ZXJcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IG1vdXNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21vdXNlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgbW91c2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW91c2UpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlID0gdGhpcy5ERVNLVE9QX01PVVNFO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb3VzZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsLng7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2V0IGN1cnJlbnRDdXJzb3JTdHlsZSh2YWx1ZSkge1xuICAgICAgICBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRDdXJzb3JTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7J2064+ZIOqxsOumrOqwgCA1cHgg7J207ZWY7J206rOgIDUwMG1zIOyViOyXkCDrkZDrsogg7YG066at7ZWY66m0IOuNlOu4lCDtgbTrpq3snLzroZwg7J247KCVXG4gICAgICogQHBhcmFtIHByZXZQb2ludCDsnbTsoITsooztkZxcbiAgICAgKiBAcGFyYW0gY3VycmVudFBvaW50IO2YhOyerOyijO2RnFxuICAgICAqIEBwYXJhbSBwcmV2VGltZSDsnbTsoIQg7YG066atIO2DgOyehFxuICAgICAqIEBwYXJhbSBjdXJyZW50VGltZSDtmITsnqwg7YG066atIO2DgOyehFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDrjZTruJQg7YG066atIOyXrOu2gFxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RvdWJsZUNsaWNrKHByZXZQb2ludCwgY3VycmVudFBvaW50LCBwcmV2VGltZSwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgdmFyIGRpZmZYID0gY3VycmVudFBvaW50LnggLSBwcmV2UG9pbnQueDtcblxuICAgICAgICBpZiAoZGlmZlggPCAwKSB7XG4gICAgICAgICAgICBkaWZmWCA9IGRpZmZYICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGlmZlkgPSBjdXJyZW50UG9pbnQueSAtIHByZXZQb2ludC55O1xuXG4gICAgICAgIGlmIChkaWZmWSA8IDApIHtcbiAgICAgICAgICAgIGRpZmZZID0gZGlmZlkgKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWZmWCA+IDUgfHwgZGlmZlkgPiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBwcmV2VGltZSA+IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL01vdXNlLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi8uLi9zcmMvVmVjdG9yJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL3NyYy9IaXN0b3J5JztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9zcmMvZ2prL1NoYXBlJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vLi4vc3JjL2dqay9Db25zdHMnO1xuaW1wb3J0IFZlcnRpY2VzIGZyb20gJy4uLy4uL3NyYy9namsvVmVydGljZXMnO1xuaW1wb3J0IENvbnZleEh1bGwgZnJvbSAnLi4vLi4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbCc7XG5pbXBvcnQgTWlua293c2tpRGlmZmVyZW5jZSBmcm9tICcuLi8uLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UnO1xuaW1wb3J0IEdqayBmcm9tICcuLi8uLi9zcmMvZHluNGovR2prJztcbmltcG9ydCBFcGEgZnJvbSAnLi4vLi4vc3JjL2R5bjRqL0VwYSc7XG5pbXBvcnQgUG9seWdvbiBmcm9tICcuLi8uLi9zcmMvZHluNGovUG9seWdvbic7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwiLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlXCI7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yJztcbmltcG9ydCBQZW5ldHJhdGlvbiBmcm9tICcuLi8uLi9zcmMvZHluNGovUGVuZXRyYXRpb24nO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1BhaW50ZXInO1xuXG5cbmNvbnN0IFRPVEFMID0gMzBcbiAgICAsIElOVEVSVkFMID0gNjAwMDAwXG4gICAgLCBTQ0FMRSA9IENvbnN0cy5TQ0FMRVxuICAgICwgU1RBR0UgPSBDb25zdHMuU1RBR0VcbiAgICAsIFRPUF9MRUZUID0ge3g6IDIsIHk6IDJ9XG4gICAgLCBUT1BfUklHSFQgPSB7eDogMTcsIHk6IDE3fVxuICAgICwgUkFEX1RPX0RFRyA9IDE4MCAvIE1hdGguUEk7XG5cbmNvbnN0IHRyaWFuZ2xlcyA9IGNyZWF0ZVBvbHlnb25zKDMsIFRPVEFMKTtcbmNvbnN0IHJlY3RhbmdsZXMgPSBjcmVhdGVQb2x5Z29ucyg0LCBUT1RBTCk7XG5cbi8qY29uc3QgdHJpYW5nbGVzID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDMsIDEpLCBuZXcgVmVjdG9yKDMsIDUpLCBuZXcgVmVjdG9yKDYsIDQpXSxcbiAgICBbbmV3IFZlY3Rvcig0LCAxMSksIG5ldyBWZWN0b3IoNCwgNSksIG5ldyBWZWN0b3IoOSwgOSldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDAsIC0xKSwgbmV3IFZlY3RvcigzLCAxKSwgbmV3IFZlY3RvcigxLCAzKV0sXG5dO1xuY29uc3QgcmVjdGFuZ2xlcyA9IFtcbiAgICAvLyBbbmV3IFZlY3Rvcig4LCAxKSwgbmV3IFZlY3Rvcig4LCA1KSwgbmV3IFZlY3RvcigxMSwgNSksIG5ldyBWZWN0b3IoMTEsIDEpXSxcbiAgICBbbmV3IFZlY3Rvcig1LCA3KSwgbmV3IFZlY3Rvcig3LCAzKSwgbmV3IFZlY3RvcigxMCwgMiksIG5ldyBWZWN0b3IoMTIsIDcpXSxcbiAgICAvLyBbbmV3IFZlY3RvcigyLCAtMiksIG5ldyBWZWN0b3IoNSwgLTEpLCBuZXcgVmVjdG9yKDQsIDIpLCBuZXcgVmVjdG9yKDEsIDEpXSxcbl07Ki9cblxuLypjb25zdCBlcnJvckNhc2UxID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDIsIDcpLCBuZXcgVmVjdG9yKDEyLCAzKSwgbmV3IFZlY3RvcigxMiwgMTcpXSxcbiAgICAvLyBbbmV3IFZlY3Rvcig4LCA4KSwgbmV3IFZlY3RvcigxMCwgNyksIG5ldyBWZWN0b3IoMTQsIDgpXSxcbiAgICBbbmV3IFZlY3RvcigxMCwgMTMpLCBuZXcgVmVjdG9yKDE0LCAxNSksIG5ldyBWZWN0b3IoMTEsIDE0KV0sXG5dO1xuXG5jb25zdCBlcnJvckNhc2UyID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDE0LCAyKSwgbmV3IFZlY3RvcigxNywgMiksIG5ldyBWZWN0b3IoMTQsIDcpLCBuZXcgVmVjdG9yKDksIDcpXSxcbiAgICAvLyBbbmV3IFZlY3Rvcig3LCA1KSwgbmV3IFZlY3RvcigxNSwgMTApLCBuZXcgVmVjdG9yKDE2LCAxMSksIG5ldyBWZWN0b3IoMTUsIDE0KV0sXG4gICAgW25ldyBWZWN0b3IoOSwgOCksIG5ldyBWZWN0b3IoMTQsIDE1KSwgbmV3IFZlY3Rvcig0LCAxNSksIG5ldyBWZWN0b3IoMywgMTIpXSxcbl07Ki9cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICB0aGlzLmtleVVwTGlzdGVuZXIgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcExpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Q29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoc2hhcGUpO1xuICAgICAgICAgICAgc2hhcGUuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNoYXBlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnNoYXBlcyA9IFtdO1xuXG4gICAgICAgIGlmICghdGhpcy5taW5rb3dza2kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWlua293c2tpKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kuZGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbigpIHtcbiAgICAgICAgY29uc3QgaW5kZXgxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdHJpYW5nbGVzLmxlbmd0aClcbiAgICAgICAgICAgICwgaW5kZXgyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVjdGFuZ2xlcy5sZW5ndGgpXG4gICAgICAgICAgICAsIHZlcnRpY2VzMSA9IG5ldyBWZXJ0aWNlcyh0cmlhbmdsZXNbaW5kZXgxXSlcbiAgICAgICAgICAgICwgdmVydGljZXMyID0gbmV3IFZlcnRpY2VzKHJlY3RhbmdsZXNbaW5kZXgyXSlcbiAgICAgICAgICAgICwgcGVuZXRyYXRpb25Db2xvciA9IDB4RkYzMzAwXG4gICAgICAgICAgICAsIHBlbmV0cmF0aW9uQWxwaGEgPSAwLjc7XG5cbiAgICAgICAgLypjb25zdCBpbmRleDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcnJvckNhc2UxLmxlbmd0aClcbiAgICAgICAgICAgICwgaW5kZXgyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXJyb3JDYXNlMi5sZW5ndGgpXG4gICAgICAgICAgICAsIHZlcnRpY2VzMSA9IG5ldyBWZXJ0aWNlcyhlcnJvckNhc2UxW2luZGV4MV0pXG4gICAgICAgICAgICAsIHZlcnRpY2VzMiA9IG5ldyBWZXJ0aWNlcyhlcnJvckNhc2UyW2luZGV4Ml0pOyovXG5cbiAgICAgICAgdmVydGljZXMxLm11bHRpcGx5KFNDQUxFKTtcbiAgICAgICAgdmVydGljZXMyLm11bHRpcGx5KFNDQUxFKTtcblxuICAgICAgICBjb25zdCBzaGFwZTEgPSBuZXcgU2hhcGUodmVydGljZXMxLnZlcnRpY2VzKVxuICAgICAgICAgICAgLCBzaGFwZTIgPSBuZXcgU2hhcGUodmVydGljZXMyLnZlcnRpY2VzKVxuICAgICAgICAgICAgLCBzaGFwZTMgPSBuZXcgU2hhcGUodmVydGljZXMyLmNsb25lKCksIHBlbmV0cmF0aW9uQ29sb3IsIHBlbmV0cmF0aW9uQWxwaGEpO1xuXG4gICAgICAgIHRoaXMubWlua293c2tpID0gbmV3IE1pbmtvd3NraURpZmZlcmVuY2UodmVydGljZXMxLnZlcnRpY2VzLCB2ZXJ0aWNlczIudmVydGljZXMpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS54ID0gKFNUQUdFLndpZHRoIC8gMykgKiAyO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS55ID0gKFNUQUdFLmhlaWdodCAvIDMpICogMjtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKHNoYXBlMSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2hhcGUyKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChzaGFwZTMpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlua293c2tpKTtcblxuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlMSk7XG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUyKTtcbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZTMpO1xuXG4gICAgICAgIHZlcnRpY2VzMS5kaXZpZGUoU0NBTEUpO1xuICAgICAgICB2ZXJ0aWNlczIuZGl2aWRlKFNDQUxFKTtcblxuICAgICAgICBjb25zdCBwb2x5Z29uMSA9IG5ldyBQb2x5Z29uKHZlcnRpY2VzMS52ZXJ0aWNlcylcbiAgICAgICAgICAgICwgcG9seWdvbjIgPSBuZXcgUG9seWdvbih2ZXJ0aWNlczIudmVydGljZXMpO1xuXG4gICAgICAgIGNvbnN0IGdqayA9IG5ldyBHamsobmV3IEVwYSgpKVxuICAgICAgICAgICAgLCBwZW5ldHJhdGlvbiA9IG5ldyBQZW5ldHJhdGlvbigpXG4gICAgICAgICAgICAsIGhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNDb2xsaXNpb24gPSBnamsuZGV0ZWN0KHBvbHlnb24xLCBwb2x5Z29uMiwgcGVuZXRyYXRpb24sIGhpc3RvcnkpXG4gICAgICAgICAgICAsIGFycm93ID0gVmVjdG9yLm11bHRpcGx5U2NhbGFyKHBlbmV0cmF0aW9uLm5vcm1hbCwgcGVuZXRyYXRpb24uZGVwdGgpLm11bHRpcGx5U2NhbGFyKFNDQUxFKTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzLnggPSB0aGlzLm1pbmtvd3NraS54O1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnkgPSB0aGlzLm1pbmtvd3NraS55O1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgyLCBwZW5ldHJhdGlvbkNvbG9yLCBwZW5ldHJhdGlvbkFscGhhKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKGFycm93LngsIGFycm93LnkpO1xuXG4gICAgICAgIHNoYXBlMy54ID0gYXJyb3cueDtcbiAgICAgICAgc2hhcGUzLnkgPSBhcnJvdy55O1xuICAgICAgICBpZiAoIWlzQ29sbGlzaW9uKSB7XG4gICAgICAgICAgICBzaGFwZTMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3BvbHlnb24xJywgcG9seWdvbjEpO1xuICAgICAgICBjb25zb2xlLmxvZygncG9seWdvbjInLCBwb2x5Z29uMik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0NvbGxpc2lvbicsIGlzQ29sbGlzaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BlbmV0cmF0aW9uJywgcGVuZXRyYXRpb24pO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmRpc3BsYXksIElOVEVSVkFMKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cblxuICAgIG9uS2V5VXAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICog65GQ67Kh7YSwIOyCrOydtOqwgSDqtaztlZjquLBcbiAqIEBwYXJhbSBhXG4gKiBAcGFyYW0gYlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0QW5nbGUoYSwgYikge1xuICAgIGEgPSBuZXcgVmVjdG9yKGEueCwgYS55KS5ub3JtKCk7XG4gICAgYiA9IG5ldyBWZWN0b3IoYi54LCBiLnkpLm5vcm0oKTtcbiAgICBjb25zdCByYWRpYW4gPSBNYXRoLmFjb3MoVmVjdG9yLmRvdFByb2R1Y3QoYSwgYikpO1xuICAgIHJldHVybiByYWRpYW4gKiBSQURfVE9fREVHO1xufVxuXG5cbi8qKlxuICog656c642k7Jy866GcIOyijO2RnOulvCDsg53shLHtlZjqs6AgY29udmV4IGh1bGwg7J2EIOunjOuTpOuptCBPS1xuICogQHBhcmFtIHBvbHlnb25cbiAqIEBwYXJhbSB0b3RhbFxuICovXG5mdW5jdGlvbiBjcmVhdGVQb2x5Z29ucyhwb2x5Z29uLCB0b3RhbCkge1xuICAgIGxldCB2ZXJ0aWNlcztcbiAgICBjb25zdCBwb2x5Z29ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgIHZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb2x5Z29uOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlY3Rvci5yYW5kb21pemUoVE9QX0xFRlQsIFRPUF9SSUdIVCk7XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG5cbiAgICAgICAgICAgIGlmIChqID09PSBwb2x5Z29uIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZleEh1bGwgPSBDb252ZXhIdWxsLmdlbmVyYXRlKHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IGNvbnZleEh1bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwb2x5Z29ucy5wdXNoKHZlcnRpY2VzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9seWdvbnM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L2VwYS9UZXN0LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXN0b3J5IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9ucyB7VmVjdG9yW119XG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2ltcGxleCA9IG5ldyBBcnJheSgzKSwgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgzKSkge1xuICAgICAgICB0aGlzLnNpbXBsZXggPSBzaW1wbGV4O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgIH1cblxuICAgIHNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLnNpbXBsZXggPSBzaW1wbGV4O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9IaXN0b3J5LmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IENvbnN0cyBmcm9tICcuLi9namsvQ29uc3RzJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi8uLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3InO1xuXG5jb25zdCBGT05UX1NJWkUgPSAnOXB4J1xuICAgICwgU0NBTEUgPSBDb25zdHMuU0NBTEU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzID0gW10sIGxpbmVDb2xvciwgbGluZUFscGhhID0gMC41KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxpbmVDb2xvciA9IGxpbmVDb2xvciA/IGxpbmVDb2xvciA6IFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4O1xuICAgICAgICBsaW5lQ29sb3IgPSB0eXBlb2YgbGluZUNvbG9yID09PSAnbnVtYmVyJyA/ICcweCcgKyBsaW5lQ29sb3IudG9TdHJpbmcoMTYpIDogbGluZUNvbG9yO1xuICAgICAgICBjb25zdCB0ZXh0Q29sb3IgPSBsaW5lQ29sb3IucmVwbGFjZSgnMHgnLCAnIycpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgICAgIHRoaXMubGluZUNvbG9yID0gbGluZUNvbG9yO1xuICAgICAgICB0aGlzLmxpbmVBbHBoYSA9IGxpbmVBbHBoYTtcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSB0ZXh0Q29sb3I7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmxhYmVscyA9IHRoaXMuY3JlYXRlTGFiZWwoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChpLCB7XG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGZvbnQ6IEZPTlRfU0laRSxcbiAgICAgICAgICAgICAgICBmaWxsOiB0aGlzLnRleHRDb2xvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGV4dC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBsYWJlbHMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVscztcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFwaGljc1xuICAgICAgICAgICAgLCB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXNcbiAgICAgICAgICAgICwgb3JpZ2luID0gdmVydGljZXNbMF07XG5cbiAgICAgICAgZy5jbGVhcigpO1xuICAgICAgICBnLmxpbmVTdHlsZSgxLCB0aGlzLmxpbmVDb2xvciwgdGhpcy5saW5lQWxwaGEpO1xuICAgICAgICBnLm1vdmVUbyhvcmlnaW4ueCwgb3JpZ2luLnkpO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBnLmxpbmVUbyh2ZXJ0ZXgueCwgdmVydGV4LnkpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsc1tpbmRleF1cbiAgICAgICAgICAgICAgICAsIHZlYyA9IFZlY3Rvci5kaXZpZGVTY2FsYXIodmVydGV4LCBTQ0FMRSk7XG5cbiAgICAgICAgICAgIGxhYmVsLnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIGxhYmVsLnkgPSB2ZXJ0ZXgueTtcblxuICAgICAgICAgICAgbGFiZWwudGV4dCA9IGAoJHt2ZWMueH0sJHt2ZWMueX0pYDtcbiAgICAgICAgICAgIGxhYmVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZy5saW5lVG8ob3JpZ2luLngsIG9yaWdpbi55KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubGFiZWxzLmZvckVhY2goKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGxhYmVsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sYWJlbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBudWxsO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9TaGFwZS5qcyIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHMge1xuICAgIHN0YXRpYyBnZXQgU0NBTEUoKSB7XG4gICAgICAgIHJldHVybiAxNDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNUQUdFKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSB7eDogMCwgeTogMCwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA2MDB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWdlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL0NvbnN0cy5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNlcyB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMgPSBbXSkge1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgfVxuXG4gICAgbXVsdGlwbHkoc2NhbGFyKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICB2ZXJ0ZXgueCAqPSBzY2FsYXI7XG4gICAgICAgICAgICB2ZXJ0ZXgueSAqPSBzY2FsYXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpdmlkZShzY2FsYXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRleC54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHZlcnRleC55IC89IHNjYWxhcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gW107XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGljZXNbaW5kZXhdID0gdmVydGV4LmNsb25lKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9WZXJ0aWNlcy5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL1BvaW50JztcbmltcG9ydCBDb252ZXhIdWxsIGZyb20gJy4uL2NvbnZleGh1bGwvQ29udmV4SHVsbCc7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vdXRpbHMvUGFzdGVsQ29sb3InO1xuaW1wb3J0IENvbnN0cyBmcm9tICcuLi9namsvQ29uc3RzJztcblxuXG5jb25zdCBTQ0FMRSA9IENvbnN0cy5TQ0FMRVxuICAgICwgU1RBR0UgPSBDb25zdHMuU1RBR0VcbiAgICAsIEZPTlRfQ09MT1IgPSAnI0ZGRkZGRidcbiAgICAsIEFYRVNfTElORV9DT0xPUiA9ICcweEZGRkZGRidcbiAgICAsIENPTlZFWF9IVUxMX0xJTkVfQ09MT1IgPSBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5rb3dza2lEaWZmZXJlbmNlIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7XG5cbiAgICAgICAgY29uc3QgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgICAgICAgICAgLCBjb252ZXhIdWxsID0gdGhpcy5jb252ZXhIdWxsID0gQ29udmV4SHVsbC5nZW5lcmF0ZSh2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdGhpcy50ZXh0cyA9IFtdO1xuICAgICAgICB0aGlzLmRyYXdBeGVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1ZldGljZXModmVydGljZXMpO1xuICAgICAgICB0aGlzLmRyYXdQb2x5Z29uKGNvbnZleEh1bGwpO1xuICAgIH1cblxuICAgIGRyYXdWZXRpY2VzKHZlcnRpY2VzKSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgUG9pbnQodmVydGV4LngsIHZlcnRleC55LCAzLCBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleCk7XG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQocG9pbnQpO1xuXG4gICAgICAgICAgICBjb25zdCB2ZWMgPSBWZWN0b3IuZGl2aWRlU2NhbGFyKHZlcnRleCwgU0NBTEUpO1xuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChgKCR7dmVjLnh9LCAke3ZlYy55fSlgLCBwb2ludC52ZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3UG9seWdvbih2ZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFwaGljcztcblxuICAgICAgICBnLmxpbmVTdHlsZSgxLCBDT05WRVhfSFVMTF9MSU5FX0NPTE9SLCAwLjUpO1xuICAgICAgICBnLm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7IGcubGluZVRvKHZlcnRleC54LCB2ZXJ0ZXgueSk7fSk7XG4gICAgICAgIGcubGluZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICAgIH1cblxuICAgIGRyYXdBeGVzKCkge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFwaGljc1xuICAgICAgICAgICAgLCBodyA9IFNUQUdFLndpZHRoIC8gMlxuICAgICAgICAgICAgLCBoaCA9IFNUQUdFLmhlaWdodCAvIDI7XG5cbiAgICAgICAgZy5saW5lU3R5bGUoMSwgQVhFU19MSU5FX0NPTE9SLCAwLjUpO1xuICAgICAgICBnLm1vdmVUbygtaHcsIDApO1xuICAgICAgICBnLmxpbmVUbyhodywgMCk7XG4gICAgICAgIGcubW92ZVRvKDAsIC1oaCk7XG4gICAgICAgIGcubGluZVRvKDAsIGhoKTtcbiAgICB9XG5cbiAgICBkcmF3VGV4dCh0ZXh0LCB2ZXJ0ZXggPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBuZXcgUElYSS5UZXh0KHRleHQsIHtcbiAgICAgICAgICAgIGZvbnQ6ICcyMHB4JyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGZpbGw6IEZPTlRfQ09MT1JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGFiZWwueCA9IHZlcnRleC54O1xuICAgICAgICBsYWJlbC55ID0gdmVydGV4Lnk7XG4gICAgICAgIHRoaXMudGV4dHMucHVzaChsYWJlbCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQobGFiZWwpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy50ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7XG4gICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQocG9pbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgIH1cblxuICAgIGdldFZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gW107XG4gICAgICAgIHZlcnRpY2VzMS5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNlczIuZm9yRWFjaCgoYikgPT4ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goVmVjdG9yLnN1YnRyYWN0KGEsIGIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgRXBzaWxvbiBmcm9tICcuL0Vwc2lsb24nO1xuaW1wb3J0IE1pbmtvd3NraVN1bSBmcm9tICcuL01pbmtvd3NraVN1bSc7XG5pbXBvcnQgRXhwYW5kaW5nU2ltcGxleCBmcm9tIFwiLi9FeHBhbmRpbmdTaW1wbGV4XCI7XG5cbmNvbnN0IERFRkFVTFRfTUFYX0lURVJBVElPTlMgPSAzMDtcbmNvbnN0IERFRkFVTFRfREVURUNUX0VQU0lMT04gPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHamsge1xuICAgIGNvbnN0cnVjdG9yKG1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyKSB7XG4gICAgICAgIHRoaXMubWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXIgPSBtaW5rb3dza2lQZW5ldHJhdGlvblNvbHZlcjtcbiAgICB9XG5cbiAgICBnZXRJbml0aWFsRGlyZWN0aW9uKGNvbnZleDEsIGNvbnZleDIpIHtcbiAgICAgICAgLy8gdHJhbnNmb3JtIGludG8gd29ybGQgc3BhY2UgaWYgdHJhbnNmb3JtIGlzIG5vdCBudWxsXG4gICAgICAgIGNvbnN0IGMxID0gY29udmV4MS5nZXRDZW50ZXIoKTtcbiAgICAgICAgY29uc3QgYzIgPSBjb252ZXgyLmdldENlbnRlcigpO1xuICAgICAgICAvLyBjaG9vc2Ugc29tZSBzZWFyY2ggZGlyZWN0aW9uXG4gICAgICAgIHJldHVybiBjMi5zdWJ0cmFjdChjMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udmV4MSB7Q29udmV4fVxuICAgICAqIEBwYXJhbSBjb252ZXgyIHtDb252ZXh9XG4gICAgICogQHBhcmFtIHBlbmV0cmF0aW9uIHtQZW5ldHJhaW9ufVxuICAgICAqIEBwYXJhbSBoaXN0b3J5IHtIaXN0b3J5fVxuICAgICAqL1xuICAgIGRldGVjdChjb252ZXgxLCBjb252ZXgyLCBwZW5ldHJhdGlvbiwgaGlzdG9yeSkge1xuICAgICAgICBjb25zdCBzaW1wbGV4ID0gW107XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgTWlua293c2tpIHN1bVxuICAgICAgICBjb25zdCBtcyA9IG5ldyBNaW5rb3dza2lTdW0oY29udmV4MSwgY29udmV4Mik7XG5cbiAgICAgICAgLy8gY2hvb3NlIHNvbWUgc2VhcmNoIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldEluaXRpYWxEaXJlY3Rpb24oY29udmV4MSwgY29udmV4Mik7XG5cbiAgICAgICAgLy8gcGVyZm9ybSB0aGUgZGV0ZWN0aW9uXG4gICAgICAgIGlmICh0aGlzLmRldGVjdDIobXMsIHNpbXBsZXgsIGRpcmVjdGlvbiwgaGlzdG9yeSkpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyLmdldFBlbmV0cmF0aW9uKHNpbXBsZXgsIG1zLCBwZW5ldHJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtcyB7TWlua293c2tpU3VtfVxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICogQHBhcmFtIGhpc3Rvcnkge0hpc3Rvcnl9IOuUlOuyhOq3uOyaqVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRldGVjdDIobXMsIHNpbXBsZXgsIGRpcmVjdGlvbiwgaGlzdG9yeSA9IG51bGwpIHtcbiAgICAgICAgLy8g65SU67KE6re47JqpIO2eiOyKpO2GoOumrFxuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDMpO1xuICAgICAgICAvLyBjaGVjayBmb3IgYSB6ZXJvIGRpcmVjdGlvbiB2ZWN0b3JcbiAgICAgICAgaWYgKGRpcmVjdGlvbi5pc1plcm8oKSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uLnNldCgxLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgdGhlIGZpcnN0IHBvaW50XG4gICAgICAgIHNpbXBsZXhbMF0gPSBtcy5nZXRTdXBwb3J0UG9pbnQoZGlyZWN0aW9uKTtcbiAgICAgICAgZGlyZWN0aW9uc1swXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgLy8gaXMgdGhlIHN1cHBvcnQgcG9pbnQgcGFzdCB0aGUgb3JpZ2luIGFsb25nIGQ/XG4gICAgICAgIC8vIHN1cHBvcnQgcG9pbnQg67Cp7Zal7J2EIOuUsOudvCDsm5DsoJDsnYQg7KeA64KY64qU7KeAIOyytO2BrCAo7JuQ7KCQ7J2EIOyngOuCmOyngCDslYrripTri6TrqbRYKVxuICAgICAgICBpZiAoc2ltcGxleFswXS5kb3QoZGlyZWN0aW9uKSA8PSAwKSB7XG5cbiAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmVnYXRlIHRoZSBzZWFyY2ggZGlyZWN0aW9uXG4gICAgICAgIGRpcmVjdGlvbi5pbnZlcnQoKTtcbiAgICAgICAgLy8gc3RhcnQgdGhlIGxvb3BcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUZBVUxUX01BWF9JVEVSQVRJT05TOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGFsd2F5cyBhZGQgYW5vdGhlciBwb2ludCB0byB0aGUgc2ltcGxleCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsb29wXG4gICAgICAgICAgICBzaW1wbGV4LnB1c2gobXMuZ2V0U3VwcG9ydFBvaW50KGRpcmVjdGlvbikpO1xuICAgICAgICAgICAgZGlyZWN0aW9uc1tzaW1wbGV4Lmxlbmd0aCAtIDFdID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIGxhc3QgcG9pbnQgd2UgYWRkZWQgd2FzIHBhc3QgdGhlIG9yaWdpblxuICAgICAgICAgICAgaWYgKHNpbXBsZXhbc2ltcGxleC5sZW5ndGggLSAxXS5kb3QoZGlyZWN0aW9uKSA8PSBERUZBVUxUX0RFVEVDVF9FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgLy8gYSBpcyBub3QgcGFzdCB0aGUgb3JpZ2luIHNvIHRoZXJlZm9yZSB0aGUgc2hhcGVzIGRvIG5vdCBpbnRlcnNlY3RcbiAgICAgICAgICAgICAgICAvLyBoZXJlIHdlIHRyZWF0IHRoZSBvcmlnaW4gb24gdGhlIGxpbmUgYXMgbm8gaW50ZXJzZWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgcmV0dXJuIHdpdGggbnVsbCBpbmRpY2F0aW5nIG5vIHBlbmV0cmF0aW9uXG5cbiAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyBwYXN0IHRoZSBvcmlnaW4sIHRoZW4gdGVzdCB3aGV0aGVyIHRoZSBzaW1wbGV4IGNvbnRhaW5zIHRoZSBvcmlnaW5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1NpbXBsZXgoc2ltcGxleCwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc2ltcGxleCBjb250YWlucyB0aGUgb3JpZ2luIHRoZW4gd2Uga25vdyB0aGF0IHRoZXJlIGlzIGFuIGludGVyc2VjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgYnJva2Ugb3V0IG9mIHRoZSBsb29wIHRoZW4gd2Uga25vdyB0aGVyZSB3YXMgYW4gaW50ZXJzZWN0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc2ltcGxleCBkb2VzIG5vdCBjb250YWluIHRoZSBvcmlnaW4gdGhlbiB3ZSBuZWVkIHRvIGxvb3AgdXNpbmcgdGhlIG5ld1xuICAgICAgICAgICAgICAgIC8vIHNlYXJjaCBkaXJlY3Rpb24gYW5kIHNpbXBsZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBzaW1wbGV4IGNvbnRhaW5zIHRoZSBvcmlnaW4uICBJZiBpdCBkb2VzIGNvbnRhaW4gdGhlIG9yaWdpbixcbiAgICAgKiB0aGVuIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIHRydWUuICBJZiBpdCBkb2VzIG5vdCwgdGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgYm90aCB0aGUgZ2l2ZW5cbiAgICAgKiBzaW1wbGV4IGFuZCBhbHNvIHRoZSBnaXZlbiBzZWFyY2ggZGlyZWN0aW9uLlxuICAgICAqIDxwPlxuICAgICAqIFRoaXMgbWV0aG9kIG9ubHkgaGFuZGxlcyB0aGUgbGluZSBzZWdtZW50IGFuZCB0cmlhbmdsZSBzaW1wbGV4IGNhc2VzLCBob3dldmVyLCB0aGVzZSB0d28gY2FzZXNcbiAgICAgKiBzaG91bGQgYmUgdGhlIG9ubHkgb25lcyBuZWVkZWQgZm9yIDIgZGltZW5zaW9uYWwge0BsaW5rIEdqa30uICBUaGUgc2luZ2xlIHBvaW50IGNhc2UgaXMgaGFuZGxlZFxuICAgICAqIGluIHtAbGluayAjZGV0ZWN0KE1pbmtvd3NraVN1bSwgTGlzdCwgVmVjdG9yMil9LlxuICAgICAqIDxwPlxuICAgICAqIFRoaXMgbWV0aG9kIGFsc28gYXNzdW1lcyB0aGF0IHRoZSBsYXN0IHBvaW50IGluIHRoZSBzaW1wbGV4IGlzIHRoZSBtb3N0IHJlY2VudGx5IGFkZGVkIHBvaW50LlxuICAgICAqIFRoaXMgbWF0dGVycyBiZWNhdXNlIG9wdGltaXphdGlvbnMgYXJlIGF2YWlsYWJsZSB3aGVuIHlvdSBrbm93IHRoaXMgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHNpbXBsZXgge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjaGVja1NpbXBsZXgoc2ltcGxleCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIHNob3VsZCBuZXZlciBiZSBzdXBwbGllZCBhbnl0aGluZyBvdGhlciB0aGFuIDIgb3IgMyBwb2ludHMgZm9yIHRoZSBzaW1wbGV4XG4gICAgICAgIC8vIGdldCB0aGUgbGFzdCBwb2ludCBhZGRlZCAoYSlcbiAgICAgICAgY29uc3QgYSA9IHNpbXBsZXhbc2ltcGxleC5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBhLnRvKE9SSUdJTik7XG4gICAgICAgIGNvbnN0IGFvID0gVmVjdG9yLm5lZ2F0ZShhKTtcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIHdoYXQgdHlwZSBvZiBzaW1wbGV4IHdlIGhhdmVcbiAgICAgICAgaWYgKHNpbXBsZXgubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIC8vIHRoZW4gd2UgaGF2ZSBhIHRyaWFuZ2xlXG4gICAgICAgICAgICBjb25zdCBiID0gc2ltcGxleFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGMgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBlZGdlc1xuICAgICAgICAgICAgY29uc3QgYWIgPSBhLnRvKGIpO1xuICAgICAgICAgICAgY29uc3QgYWMgPSBhLnRvKGMpO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBlZGdlIG5vcm1hbFxuICAgICAgICAgICAgY29uc3QgYWNQZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFjLCBhYyk7XG4gICAgICAgICAgICAvLyBzZWUgd2hlcmUgdGhlIG9yaWdpbiBpcyBhdFxuICAgICAgICAgICAgY29uc3QgYWNMb2NhdGlvbiA9IGFjUGVycC5kb3QoYW8pO1xuICAgICAgICAgICAgaWYgKGFjTG9jYXRpb24gPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOybkOygkOydgCBBIC0+IEPsnZgg7Jik66W47Kq97JeQ7J6I64ukLlxuICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgcmlnaHQgc2lkZSBvZiBBLT5DXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiB0aGUgY29uZGl0aW9uIGZvciB0aGUgZ2prIGxvb3AgdG8gY29udGludWUgdGhlIG9yaWdpblxuICAgICAgICAgICAgICAgIC8vIG11c3QgbGllIGJldHdlZW4gQSBhbmQgQyBzbyByZW1vdmUgQiBhbmQgc2V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIG5ldyBzZWFyY2ggZGlyZWN0aW9uIHRvIEEtPkMgcGVycGVuZGljdWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICBzaW1wbGV4LnNwbGljZSgxLCAxKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHVzZWQgdG8gYmUgZGlyZWN0aW9uLnNldChWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYW8sIGFjKSk7XG4gICAgICAgICAgICAgICAgLy8gYnV0IHdhcyBjaGFuZ2VkIHNpbmNlIHRoZSBvcmlnaW4gbWF5IGxpZSBvbiB0aGUgc2VnbWVudCBjcmVhdGVkXG4gICAgICAgICAgICAgICAgLy8gYnkgYSAtPiBjIGluIHdoaWNoIGNhc2Ugd291bGQgcHJvZHVjZSBhIHplcm8gdmVjdG9yIG5vcm1hbFxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0aW5nIGFjJ3Mgbm9ybWFsIHVzaW5nIGIgaXMgbW9yZSByb2J1c3RcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24uc2V0KGFjUGVycCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFiUGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFjLCBhYiwgYWIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFiTG9jYXRpb24gPSBhYlBlcnAuZG90KGFvKTtcbiAgICAgICAgICAgICAgICAvLyB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIGxlZnQgc2lkZSBvZiBBLT5DXG4gICAgICAgICAgICAgICAgaWYgKGFiTG9jYXRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgcmlnaHQgc2lkZSBvZiBBLT5CIGFuZCB0aGVyZWZvcmUgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyaWFuZ2xlLCB3ZSBoYXZlIGFuIGludGVyc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgb3JpZ2luIGxpZXMgYmV0d2VlbiBBIGFuZCBCIHNvIHJlbW92ZSBDIGFuZCBzZXQgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaCBkaXJlY3Rpb24gdG8gQS0+QiBwZXJwZW5kaWN1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGV4LnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB1c2VkIHRvIGJlIGRpcmVjdGlvbi5zZXQoVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYikpO1xuICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2FzIGNoYW5nZWQgc2luY2UgdGhlIG9yaWdpbiBtYXkgbGllIG9uIHRoZSBzZWdtZW50IGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gYnkgYSAtPiBiIGluIHdoaWNoIGNhc2Ugd291bGQgcHJvZHVjZSBhIHplcm8gdmVjdG9yIG5vcm1hbFxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGluZyBhYidzIG5vcm1hbCB1c2luZyBjIGlzIG1vcmUgcm9idXN0XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoYWJQZXJwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGIgcG9pbnRcbiAgICAgICAgICAgIGNvbnN0IGIgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgY29uc3QgYWIgPSBhLnRvKGIpO1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIGhhdmUgMiBwb2ludHMgKGxpbmUgc2VnbWVudClcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgdGhlIGNvbmRpdGlvbiBmb3IgdGhlIGdqayBsb29wIHRvIGNvbnRpbnVlIHRoZSBvcmlnaW5cbiAgICAgICAgICAgIC8vIG11c3QgbGllIGluIGJldHdlZW4gQSBhbmQgQiwgc28ga2VlcCBib3RoIHBvaW50cyBpbiB0aGUgc2ltcGxleCBhbmRcbiAgICAgICAgICAgIC8vIHNldCB0aGUgZGlyZWN0aW9uIHRvIHRoZSBwZXJwIG9mIHRoZSBsaW5lIHNlZ21lbnQgdG93YXJkcyB0aGUgb3JpZ2luXG4gICAgICAgICAgICBkaXJlY3Rpb24uc2V0KFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhbywgYWIpKTtcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkZWdlbmVyYXRlIGNhc2VzIHdoZXJlIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgc2VnbWVudFxuICAgICAgICAgICAgLy8gY3JlYXRlZCBieSBhIC0+IGIgd2hpY2ggd2lsbCB5aWVsZCBhIHplcm8gZWRnZSBub3JtYWxcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24uZ2V0TWFnbml0dWRlU3F1YXJlZCgpIDw9IEVwc2lsb24uRSkge1xuICAgICAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSBqdXN0IGNob29zZSBlaXRoZXIgbm9ybWFsIChsZWZ0IG9yIHJpZ2h0KVxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoYWIubGVmdCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0dqay5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uIHtcblxuICAgIHN0YXRpYyBnZXQgRSgpIHtcbiAgICAgICAgcmV0dXJuIEVwc2lsb24uY29tcHV0ZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb21wdXRlKCkge1xuICAgICAgICBsZXQgZSA9IDAuNTtcbiAgICAgICAgd2hpbGUgKDEuMCArIGUgPiAxLjApIHtcbiAgICAgICAgICAgIGUgKj0gMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovRXBzaWxvbi5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5rb3dza2lTdW0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbnZleDEg7Lap64+MIOyytO2BrO2VoCDrj4TtmJUgMVxuICAgICAqIEBwYXJhbSBjb252ZXgyIOy2qeuPjCDssrTtgaztlaAg64+E7ZiVIDJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb252ZXgxLCBjb252ZXgyKSB7XG4gICAgICAgIHRoaXMuY29udmV4MSA9IGNvbnZleDE7XG4gICAgICAgIHRoaXMuY29udmV4MiA9IGNvbnZleDI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3VwcG9ydFBvaW50IOulvCDqtaztlanri4jri6QuICjsi6ztlIzroInsiqQg66eM65Ok6riwKVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBnZXRTdXBwb3J0UG9pbnQoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGdldCB0aGUgZmFydGhlc3QgcG9pbnQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiBpbiBjb252ZXgxXG4gICAgICAgIGNvbnN0IHBvaW50MSA9IHRoaXMuY29udmV4MS5nZXRGYXJ0aGVzdFBvaW50KGRpcmVjdGlvbik7XG4gICAgICAgIC8vIGdldCB0aGUgZmFydGhlc3QgcG9pbnQgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiBpbiBjb252ZXgyXG4gICAgICAgIGNvbnN0IHBvaW50MiA9IHRoaXMuY29udmV4Mi5nZXRGYXJ0aGVzdFBvaW50KFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSk7XG4gICAgICAgIC8vIHJldHVybiB0aGUgTWlua293c2tpIHN1bSBwb2ludFxuICAgICAgICByZXR1cm4gcG9pbnQxLnN1YnRyYWN0KHBvaW50Mik7XG4gICAgfVxuXG4gICAgZ2V0Q29udmV4MSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmV4MTtcbiAgICB9XG5cbiAgICBnZXRDb252ZXgyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXgyO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovTWlua293c2tpU3VtLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFByaW9yaXR5UXVldWUgZnJvbSAnc3RhYmxlcHJpb3JpdHlxdWV1ZSc7XG5pbXBvcnQgRXhwYW5kaW5nU2ltcGxleEVkZ2UgZnJvbSAnLi9FeHBhbmRpbmdTaW1wbGV4RWRnZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5kaW5nU2ltcGxleCB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaW1wbGV4KSB7XG4gICAgICAgIHRoaXMud2luZGluZyA9IHRoaXMuZ2V0V2luZGluZyhzaW1wbGV4KTtcblxuICAgICAgICB0aGlzLnF1ZXVlID0gbmV3IFByaW9yaXR5UXVldWUoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmRpc3RhbmNlIDwgYi5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLmRpc3RhbmNlID4gYi5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpemUgPSBzaW1wbGV4Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbXB1dGUgalxuICAgICAgICAgICAgbGV0IGogPSBpICsgMSA9PSBzaXplID8gMCA6IGkgKyAxO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBwb2ludHMgdGhhdCBtYWtlIHVwIHRoZSBjdXJyZW50IGVkZ2VcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzaW1wbGV4W2ldXG4gICAgICAgICAgICAgICAgLCBiID0gc2ltcGxleFtqXTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZWRnZVxuICAgICAgICAgICAgdGhpcy5xdWV1ZS5hZGQobmV3IEV4cGFuZGluZ1NpbXBsZXhFZGdlKGEsIGIsIHRoaXMud2luZGluZykpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsi6ztlIzroInsiqTsl5Ag7KO87Ja07KeEIOuwqe2WpeydhCDrpqzthLTtlanri4jri6QuXG4gICAgICpcbiAgICAgKiAtMSDsi5zqs4Qg67Cp7ZalXG4gICAgICogMSDrsJgg7Iuc6rOEIOuwqe2WpVxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBnZXRXaW5kaW5nKHNpbXBsZXgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHNpbXBsZXgubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaiA9IGkgKyAxID09PSBzaXplID8gMCA6IGkgKyAxO1xuICAgICAgICAgICAgY29uc3QgYSA9IHNpbXBsZXhbaV1cbiAgICAgICAgICAgICAgICAsIGIgPSBzaW1wbGV4W2pdO1xuXG4gICAgICAgICAgICBpZiAoYS5jcm9zcyhiKSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyDsmbjsoIHsnYQg7Ya17ZW0IOyZuOyggSDqsJLsnbQg7JaR7IiY66m0IOuwmOyLnOqzhCDrsKntlqVcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5jcm9zcyhiKSA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyDsnYzsiJjrqbQg67CY7Iuc6rOEIOuwqe2WpVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtFeHBhbmRpbmdTaW1wbGV4RWRnZX1cbiAgICAgKi9cbiAgICBnZXRDbG9zZXN0RWRnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWUucGVlaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBvaW50IHtWZWN0b3J9XG4gICAgICovXG4gICAgZXhwYW5kKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSB0aGlzLnF1ZXVlLnBvbGwoKTtcbiAgICAgICAgY29uc3QgZWRnZTEgPSBuZXcgRXhwYW5kaW5nU2ltcGxleEVkZ2UoZWRnZS5wb2ludDEsIHBvaW50LCB0aGlzLndpbmRpbmcpO1xuICAgICAgICBjb25zdCBlZGdlMiA9IG5ldyBFeHBhbmRpbmdTaW1wbGV4RWRnZShwb2ludCwgZWRnZS5wb2ludDIsIHRoaXMud2luZGluZyk7XG4gICAgICAgIHRoaXMucXVldWUuYWRkKGVkZ2UxKTtcbiAgICAgICAgdGhpcy5xdWV1ZS5hZGQoZWRnZTIpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9FeHBhbmRpbmdTaW1wbGV4LmpzIiwiLyoqXG4gKiBTdGFibGVQcmlvcml0eVF1ZXVlLmpzIDogYSBzdGFibGUgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSAgaW4gSmF2YVNjcmlwdC5cbiAqIChjKSB0aGUgYXV0aG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqXG4gKiBTdGFibGUgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSBmb3IgbW9kZXJuIGJyb3dzZXJzIGFuZCBKYXZhU2NyaXB0IGVuZ2luZXMuXG4gKlxuICogVXNhZ2UgOlxuICAgICAgICAgSW5zdGFsbGF0aW9uIChpbiBzaGVsbCwgaWYgeW91IHVzZSBub2RlKTpcbiAgICAgICAgICQgbnBtIGluc3RhbGwgc3RhYmxlcHJpb3JpdHlxdWV1ZVxuXG4gICAgICAgICBSdW5uaW5nIHRlc3QgcHJvZ3JhbSAoaW4gSmF2YVNjcmlwdCk6XG5cbiAgICAgICAgIC8vIHZhciBTdGFibGVQcmlvcml0eVF1ZXVlID0gcmVxdWlyZShcInN0YWJsZXByaW9yaXR5cXVldWVcIik7Ly8gaW4gbm9kZVxuICAgICAgICAgdmFyIHggPSBuZXcgU3RhYmxlUHJpb3JpdHlRdWV1ZSgpO1xuICAgICAgICAgeC5hZGQoMSk7XG4gICAgICAgICB4LmFkZCgwKTtcbiAgICAgICAgIHguYWRkKDUpO1xuICAgICAgICAgeC5hZGQoNCk7XG4gICAgICAgICB4LmFkZCgzKTtcbiAgICAgICAgIHgucGVlaygpOyAvLyBzaG91bGQgcmV0dXJuIDAsIGxlYXZlcyB4IHVuY2hhbmdlZFxuICAgICAgICAgeC5zaXplOyAvLyBzaG91bGQgcmV0dXJuIDUsIGxlYXZlcyB4IHVuY2hhbmdlZFxuICAgICAgICAgd2hpbGUoIXguaXNFbXB0eSgpKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKHgucG9sbCgpKTtcbiAgICAgICAgIH0gLy8gd2lsbCBwcmludCAwIDEgMyA0IDVcbiAgICAgICAgIHgudHJpbSgpOyAvLyAob3B0aW9uYWwpIG9wdGltaXplcyBtZW1vcnkgdXNhZ2VcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZWZhdWx0Y29tcGFyYXRvciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuICAgYSA8IGIgPyAtMSA6IChhID4gYiA/IDEgOiAwKSA7XG59O1xuXG5cbi8vIHRoZSBwcm92aWRlZCBjb21wYXJhdG9yIGZ1bmN0aW9uIHNob3VsZCB0YWtlIGEsIGIgYW5kIHJldHVybiBhIG5lZ2F0aXZlIG51bWJlciB3aGVuIGEgPCBiIGFuZCBlcXVhbGl0eSB3aGVuIGEgPT0gYlxuZnVuY3Rpb24gU3RhYmxlUHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgdGhpcy5ydW5uaW5nY291bnRlciA9IDA7XG4gICAgdGhpcy5jb21wYXJlID0gY29tcGFyYXRvciB8fCBkZWZhdWx0Y29tcGFyYXRvcjtcbiAgICB0aGlzLnN0YWJsZV9jb21wYXJlID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGNtcCA9IHRoaXMuY29tcGFyZShhLnZhbHVlLGIudmFsdWUpO1xuICAgICAgcmV0dXJuIChjbXAgPCAwKSB8fCAoIChjbXAgPT0gMCkgJiYgKGEuY291bnRlciA8IGIuY291bnRlcikgKTtcbiAgICB9XG59XG5cbi8vIFRoZSBzdGFibGUgcXVldWUgdXNlcyBpbnRlcm5hbCBjb3VudGVycywgdGhpcyByZXBhY2tzIHRoZW1cbi8vIHJ1bnMgaW4gTyhuKSB0aW1lLCBjYWxsZWQgYXV0b21hdGljYWxseSBhcyBuZWVkZWRcblN0YWJsZVByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbnVtYmVyID0gZnVuY3Rpb24gKG15dmFsKSB7XG4gICAgICAvLyB0aGUgY291bnRlciBpcyBleGhhdXN0ZWQsIGxldCB1cyByZXBhY2sgdGhlIG51bWJlcnNcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uIGhlcmUgaXMgcHJvYmFibHkgbm90IG9wdGltYWwgcGVyZm9ybWFuY2Utd2lzZVxuICAgICAgLy8gd2UgZmlyc3QgZW1wdHkgdGhlIGNvbnRlbnRcbiAgICAgIHZhciBidWZmZXIgPSBbXTtcbiAgICAgIHZhciBqLCBzaXplO1xuICAgICAgd2hpbGUoISB0aGlzLmlzRW1wdHkoKSApIHtcbiAgICAgICAgYnVmZmVyLnB1c2godGhpcy5wb2xsKCkpO1xuICAgICAgfVxuICAgICAgc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICB0aGlzLnJ1bm5pbmdjb3VudGVyID0gMDsgLy8gYmVjYXVzZSB0aGUgYnVmZmVyIGlzIHNhZmUsIHRoaXMgaXMgbm93IHNhZmVcbiAgICAgIC8vIGFuZCB3ZSByZWluc2VydCBpdFxuICAgICAgZm9yIChqID0gMDsgaiA8IHNpemUgOyBqKyspIHtcbiAgICAgICAgdGhpcy5hZGQoYnVmZmVyW2pdKTtcbiAgICAgIH1cbn1cblxuLy8gQWRkIGFuIGVsZW1lbnQgdGhlIHRoZSBxdWV1ZVxuLy8gcnVucyBpbiBPKGxvZyBuKSB0aW1lXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobXl2YWwpIHtcbiAgICB2YXIgaSA9IHRoaXMuc2l6ZTtcbiAgICBpZiAoIHRoaXMucnVubmluZ2NvdW50ZXIgKyAxID09IDApIHtcbiAgICAgIHRoaXMucmVudW1iZXIoKTtcbiAgICB9XG4gICAgdmFyIGV4dGVuZGVkbXl2YWwgPSB7dmFsdWU6IG15dmFsLCBjb3VudGVyOiB0aGlzLnJ1bm5pbmdjb3VudGVyfTtcbiAgICB0aGlzLmFycmF5W3RoaXMuc2l6ZV0gPSBleHRlbmRlZG15dmFsO1xuICAgIHRoaXMucnVubmluZ2NvdW50ZXIgKz0gMTtcbiAgICB0aGlzLnNpemUgKz0gMTtcbiAgICB2YXIgcDtcbiAgICB2YXIgYXA7XG4gICAgdmFyIGNtcDtcbiAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgcCA9IChpIC0gMSkgPj4gMTtcbiAgICAgICAgYXAgPSB0aGlzLmFycmF5W3BdO1xuICAgICAgICBpZiAoIXRoaXMuc3RhYmxlX2NvbXBhcmUoZXh0ZW5kZWRteXZhbCwgYXApKSB7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJheVtpXSA9IGFwO1xuICAgICAgICBpID0gcDtcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IGV4dGVuZGVkbXl2YWw7XG59O1xuXG4vLyBmb3IgaW50ZXJuYWwgdXNlXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcGVyY29sYXRlVXAgPSBmdW5jdGlvbiAoaSkge1xuICAgIHZhciBteXZhbCA9IHRoaXMuYXJyYXlbaV07XG4gICAgdmFyIHA7XG4gICAgdmFyIGFwO1xuICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICBwID0gKGkgLSAxKSA+PiAxO1xuICAgICAgICBhcCA9IHRoaXMuYXJyYXlbcF07XG4gICAgICAgIGlmICghdGhpcy5zdGFibGVfY29tcGFyZShteXZhbCwgYXApKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFycmF5W2ldID0gYXA7XG4gICAgICAgIGkgPSBwO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gbXl2YWw7XG59O1xuXG5cbi8vIGZvciBpbnRlcm5hbCB1c2VcblN0YWJsZVByaW9yaXR5UXVldWUucHJvdG90eXBlLl9wZXJjb2xhdGVEb3duID0gZnVuY3Rpb24gKGkpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB2YXIgaHNpemUgPSB0aGlzLnNpemUgPj4+IDE7XG4gICAgdmFyIGFpID0gdGhpcy5hcnJheVtpXTtcbiAgICB2YXIgbDtcbiAgICB2YXIgcjtcbiAgICB2YXIgYmVzdGM7XG4gICAgd2hpbGUgKGkgPCBoc2l6ZSkge1xuICAgICAgICBsID0gKGkgPDwgMSkgKyAxO1xuICAgICAgICByID0gbCArIDE7XG4gICAgICAgIGJlc3RjID0gdGhpcy5hcnJheVtsXTtcbiAgICAgICAgaWYgKHIgPCBzaXplKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGFibGVfY29tcGFyZSh0aGlzLmFycmF5W3JdLCBiZXN0YykpIHtcbiAgICAgICAgICAgICAgICBsID0gcjtcbiAgICAgICAgICAgICAgICBiZXN0YyA9IHRoaXMuYXJyYXlbcl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YWJsZV9jb21wYXJlKGJlc3RjLGFpKSkgIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJyYXlbaV0gPSBiZXN0YztcbiAgICAgICAgaSA9IGw7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBhaTtcbn07XG5cbi8vIExvb2sgYXQgdGhlIHRvcCBvZiB0aGUgcXVldWUgKGEgc21hbGxlc3QgZWxlbWVudClcbi8vIGV4ZWN1dGVzIGluIGNvbnN0YW50IHRpbWVcbi8vXG4vLyBDYWxsaW5nIHBlZWsgb24gYW4gZW1wdHkgcHJpb3JpdHkgcXVldWUgcmV0dXJuc1xuLy8gdGhlIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLmFycmF5WzBdLnZhbHVlO1xufTtcblxuLy8gcmVtb3ZlIHRoZSBlbGVtZW50IG9uIHRvcCBvZiB0aGUgaGVhcCAoYSBzbWFsbGVzdCBlbGVtZW50KVxuLy8gcnVucyBpbiBsb2dhcml0aG1pYyB0aW1lXG4vL1xuLy8gSWYgdGhlIHByaW9yaXR5IHF1ZXVlIGlzIGVtcHR5LCB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGVcbi8vIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG4vLyBGb3IgbG9uZy1ydW5uaW5nIGFuZCBsYXJnZSBwcmlvcml0eSBxdWV1ZXMsIG9yIHByaW9yaXR5IHF1ZXVlc1xuLy8gc3RvcmluZyBsYXJnZSBvYmplY3RzLCB5b3UgbWF5ICB3YW50IHRvIGNhbGwgdGhlIHRyaW0gZnVuY3Rpb25cbi8vIGF0IHN0cmF0ZWdpYyB0aW1lcyB0byByZWNvdmVyIGFsbG9jYXRlZCBtZW1vcnkuXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNpemUgPT0gMClcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgYW5zID0gdGhpcy5hcnJheVswXTtcbiAgICBpZiAodGhpcy5zaXplID4gMSkge1xuICAgICAgICB0aGlzLmFycmF5WzBdID0gdGhpcy5hcnJheVstLXRoaXMuc2l6ZV07XG4gICAgICAgIHRoaXMuX3BlcmNvbGF0ZURvd24oMCB8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2l6ZSAtPSAxO1xuICAgIH1cbiAgICByZXR1cm4gYW5zLnZhbHVlO1xufTtcblxuXG4vLyByZWNvdmVyIHVudXNlZCBtZW1vcnkgKGZvciBsb25nLXJ1bm5pbmcgcHJpb3JpdHkgcXVldWVzKVxuU3RhYmxlUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5zbGljZSgwLCB0aGlzLnNpemUpO1xufTtcblxuLy8gQ2hlY2sgd2hldGhlciB0aGUgaGVhcCBpcyBlbXB0eVxuU3RhYmxlUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAwO1xufTtcblxuXG4vLyBqdXN0IGZvciBpbGx1c3RyYXRpb24gcHVycG9zZXNcbnZhciBtYWluID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIG1haW4gY29kZVxuICAgIHZhciB4ID0gbmV3IFN0YWJsZVByaW9yaXR5UXVldWUoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEubmFtZSA8IGIubmFtZSA/IC0xIDogKGEubmFtZSA+IGIubmFtZSA/IDEgOiAwKSA7XG4gICAgfSk7XG4gICAgeC5hZGQoe25hbWU6XCJKYWNrXCIsIGFnZTozMX0pO1xuICAgIHguYWRkKHtuYW1lOlwiQW5uYVwiLCBhZ2U6MTExfSk7XG4gICAgeC5hZGQoe25hbWU6XCJKYWNrXCIsIGFnZTo0Nn0pO1xuICAgIHguYWRkKHtuYW1lOlwiSmFja1wiLCBhZ2U6MTF9KTtcbiAgICB4LmFkZCh7bmFtZTpcIkFiYmFcIiwgYWdlOjMxfSk7XG4gICAgeC5hZGQoe25hbWU6XCJBYmJhXCIsIGFnZTozMH0pO1xuICAgIHdoaWxlICgheC5pc0VtcHR5KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICAgIH1cbiAgICB4ID0gbmV3IFN0YWJsZVByaW9yaXR5UXVldWUoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiBhLmVuZXJneSAtIGIuZW5lcmd5O1xuICAgIH0pO1xuICAgIFt7IG5hbWU6ICdwbGF5ZXInLCBlbmVyZ3k6IDEwfSxcbiAgICAgeyBuYW1lOiAnbW9uc3RlcjEnLCBlbmVyZ3k6IDEwfSxcbiAgICAgeyBuYW1lOiAnbW9uc3RlcjInLCBlbmVyZ3k6IDEwfSxcbiAgICAgeyBuYW1lOiAnbW9uc3RlcjMnLCBlbmVyZ3k6IDEwfVxuICAgIF0uZm9yRWFjaChmdW5jdGlvbihvKXtcbiAgICAgICAgICB4LmFkZChvKTtcbiAgICB9KVxuICAgIHdoaWxlICgheC5pc0VtcHR5KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICAgIH1cblxufTtcblxuaWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4gICAgbWFpbigpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWJsZVByaW9yaXR5UXVldWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RhYmxlcHJpb3JpdHlxdWV1ZS9TdGFibGVQcmlvcml0eVF1ZXVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgOCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBhbmRpbmdTaW1wbGV4RWRnZSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcG9pbnQxIHtWZWN0b3J9XG4gICAgICogQHBhcmFtIHBvaW50MiB7VmVjdG9yfVxuICAgICAqIEBwYXJhbSB3aW5kaW5nIHtudW1iZXJ9IC0xIOyLnOqzhCDrsKntlqUsIDEg67CY7Iuc6rOEIOuwqe2WpVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBvaW50MSwgcG9pbnQyLCB3aW5kaW5nKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZWRnZVxuICAgICAgICAvLyBpbmxpbmUgYiAtIGFcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBuZXcgVmVjdG9yKHBvaW50Mi54IC0gcG9pbnQxLngsIHBvaW50Mi55IC0gcG9pbnQxLnkpO1xuXG4gICAgICAgIC8vIOyZgOyduOuUqeyXkCDrlLDrnbwg6rCA7J6l7J6Q66as6rCAIOygleyDgeyggeycvOuhnOuQqeuLiOuLpC5cbiAgICAgICAgLy8gVmVjdG9yLnRyaXBsZVByb2R1Y3QgKGFiLCBhbywgYWIp66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg7KKL7Iq164uI64ukLlxuICAgICAgICAvLyBhYuuKlCDqsIDsnqXsnpDrpqzsnbTqs6AgYW/ripQgYS50byAoT1JJR0lOKeydtOyngOunjCDsnbTqsoPsnYBcbiAgICAgICAgLy8g7JuQ7KCQ7J20IGFiIOyEuOq3uOuovO2KuOyXkCDsnojsnLzrqbQg7J6Y66q765CcIOuyleyEoOydhCDrsJjtmZjtlanri4jri6QuXG4gICAgICAgIC8vIOq3uOufrOuvgOuhnCDsmrDrpqzripQg7Ius7ZSM7J2YIOyZgOyduOuUqeydhCDsgqzsmqntlZjsl6xcbiAgICAgICAgLy8g67KV7ISgIOuwqe2WpVxuICAgICAgICAvLyDspoksIOybkOygkeycvOuhnCDtlqXtlZjripQgbm9ybWFsIOuwse2EsOulvCDrp4zrk63ri4jri6QuXG4gICAgICAgIGlmICh3aW5kaW5nIDwgMCkge1xuICAgICAgICAgICAgLy8g7Iuc6rOEIOuwqe2WpeydtOuptCDsmKTrpbjsqr1cbiAgICAgICAgICAgIHRoaXMubm9ybWFsLnJpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDrsJjsi5zqs4Qg67Cp7Zal7J2066m0IOyZvOyqvVxuICAgICAgICAgICAgdGhpcy5ub3JtYWwubGVmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3JtYWwubm9ybWFsaXplKCk7XG5cbiAgICAgICAgLy8gZG91YmxlIGQgPSBNYXRoLmFicyhhLmRvdChub3JtYWwpKVxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5hYnMocG9pbnQxLnggKiB0aGlzLm5vcm1hbC54ICsgcG9pbnQxLnkgKiB0aGlzLm5vcm1hbC55KTtcbiAgICAgICAgdGhpcy5wb2ludDEgPSBwb2ludDE7XG4gICAgICAgIHRoaXMucG9pbnQyID0gcG9pbnQyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG8ge0V4cGFuZGluZ1NpbXBsZXhFZGdlfVxuICAgICAqL1xuICAgIGNvbXBhcmVUbyhvKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3RhbmNlIDwgby5kaXN0YW5jZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAodGhpcy5kaXN0YW5jZSA+IG8uZGlzdGFuY2UpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0V4cGFuZGluZ1NpbXBsZXhFZGdlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IEVwc2lsb24gZnJvbSAnLi9FcHNpbG9uJztcbmltcG9ydCBFeHBhbmRpbmdTaW1wbGV4IGZyb20gJy4vRXhwYW5kaW5nU2ltcGxleCc7XG5cblxuY29uc3QgREVGQVVMVF9NQVhfSVRFUkFUSU9OUyA9IDEwMFxuICAgICwgREVGQVVMVF9ESVNUQU5DRV9FUFNJTE9OID0gTWF0aC5zcXJ0KEVwc2lsb24uRSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBhIHtcblxuICAgIHN0YXRpYyBnZXQgREVGQVVMVF9NQVhfSVRFUkFUSU9OUygpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfTUFYX0lURVJBVElPTlM7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBERUZBVUxUX0RJU1RBTkNFX0VQU0lMT04oKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX0RJU1RBTkNFX0VQU0lMT047XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9ucyA9IERFRkFVTFRfTUFYX0lURVJBVElPTlM7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VFcHNpbG9uID0gREVGQVVMVF9ESVNUQU5DRV9FUFNJTE9OO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdFUEEnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21heEl0ZXJhdGlvbnMnLCB0aGlzLm1heEl0ZXJhdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZygnZGlzdGFuY2VFcHNpbG9uJywgdGhpcy5kaXN0YW5jZUVwc2lsb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOy5qO2IrCDqsrDqs7zrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gbWlua293c2tpU3VtIHtNaW5rb3dza2lTdW19XG4gICAgICogQHBhcmFtIHBlbmV0cmF0aW9uIHtQZW5ldHJhdGlvbn1cbiAgICAgKi9cbiAgICBnZXRQZW5ldHJhdGlvbihzaW1wbGV4LCBtaW5rb3dza2lTdW0sIHBlbmV0cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNtcGx4ID0gbmV3IEV4cGFuZGluZ1NpbXBsZXgoc2ltcGxleCk7XG4gICAgICAgIGxldCBlZGdlID0gbnVsbCwgcG9pbnQgPSBudWxsO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRQZW5ldHJhdGlvbicsICdzbXBseC5sZW5ndGgnLCBzbXBseC5sZW5ndGgsIHNtcGx4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heEl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgZWRnZSA9IHNtcGx4LmdldENsb3Nlc3RFZGdlKCk7XG4gICAgICAgICAgICBwb2ludCA9IG1pbmtvd3NraVN1bS5nZXRTdXBwb3J0UG9pbnQoZWRnZS5ub3JtYWwpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gcG9pbnQuZG90KGVkZ2Uubm9ybWFsKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coaSwgJ2VkZ2UuZGlzdGFuY2U6JywgZWRnZS5kaXN0YW5jZSwgJ3Byb2plY3Rpb24nLCBwcm9qZWN0aW9uLCAnKHByb2plY3Rpb24gLSBlZGdlLmRpc3RhbmNlKScsIChwcm9qZWN0aW9uIC0gZWRnZS5kaXN0YW5jZSkpO1xuICAgICAgICAgICAgaWYgKChwcm9qZWN0aW9uIC0gZWRnZS5kaXN0YW5jZSkgPCB0aGlzLmRpc3RhbmNlRXBzaWxvbikge1xuICAgICAgICAgICAgICAgIHBlbmV0cmF0aW9uLm5vcm1hbCA9IGVkZ2Uubm9ybWFsO1xuICAgICAgICAgICAgICAgIHBlbmV0cmF0aW9uLmRlcHRoID0gcHJvamVjdGlvbjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNtcGx4LmV4cGFuZChwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICBwZW5ldHJhdGlvbi5ub3JtYWwgPSBlZGdlLm5vcm1hbDtcbiAgICAgICAgcGVuZXRyYXRpb24uZGVwdGggPSBwb2ludC5kb3QoZWRnZS5ub3JtYWwpO1xuICAgIH1cblxuICAgIGdldE14SXRyYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhJdGVyYXRpb25zO1xuICAgIH1cblxuICAgIHNldE1heEl0ZXJhdGlvbnMobWF4SXRlcmF0aW9ucykge1xuICAgICAgICBpZiAobWF4SXRlcmF0aW9ucyA8IDUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29sbGlzaW9uLm5hcnJvd3BoYXNlLmVwYS5pbnZhbGlkTWF4aW11bUl0ZXJhdGlvbnMnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heEl0ZXJhdGlvbnMgPSBtYXhJdGVyYXRpb25zO1xuICAgIH1cblxuICAgIGdldERpc3RhbmNlRXBzaWxvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdGFuY2VFcHNpbG9uO1xuICAgIH1cblxuICAgIHNldERpc3RhbmNlRXBzaWxvbihkaXN0YW5jZUVwc2lsb24pIHtcbiAgICAgICAgaWYgKGRpc3RhbmNlRXBzaWxvbiA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbGxpc2lvbi5uYXJyb3dwaGFzZS5lcGEuaW52YWxpZERpc3RhbmNlRXBzaWxvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzdGFuY2VFcHNpbG9uID0gZGlzdGFuY2VFcHNpbG9uO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9FcGEuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuaW1wb3J0IENvbnZleCBmcm9tICcuL0NvbnZleCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgR2VvbWV0cnkgZnJvbSAnLi9HZW9tZXRyeSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiBleHRlbmRzIENvbnZleCB7XG5cbiAgICAvKipcbiAgICAgKiDtj7Trpqzqs6RcbiAgICAgKiBAcGFyYW0gY2VudGVyIHtWZWN0b3J9XG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gbm9ybWFscyB7VmVjdG9yW119XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmVydGljZXMgPSBbXSwgbm9ybWFscyA9IFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICAgICAgdGhpcy5ub3JtYWxzID0gKHZlcnRpY2VzLmxlbmd0aCAhPT0gMCkgP1xuICAgICAgICAgICAgR2VvbWV0cnkuZ2V0Q291bnRlckNsb2Nrd2lzZUVkZ2VOb3JtYWxzKHZlcnRpY2VzKSA6IG5vcm1hbHM7XG4gICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKTtcbiAgICB9XG5cbiAgICBnZXRDZW50ZXIoKSB7XG4gICAgICAgIGNvbnN0IGF2ZyA9IG5ldyBWZWN0b3IoKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXNcbiAgICAgICAgICAgICwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhdmcueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZnLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2Zy54IC89IGNvdW50O1xuICAgICAgICBhdmcueSAvPSBjb3VudDtcbiAgICAgICAgcmV0dXJuIGF2ZztcbiAgICB9XG5cbiAgICBnZXRGYXJ0aGVzdFBvaW50KGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgLy8gc2V0IHRoZSBmYXJ0aGVzdCBwb2ludCB0byB0aGUgZmlyc3Qgb25lXG4gICAgICAgIHBvaW50LnNldCh0aGlzLnZlcnRpY2VzWzBdKTtcbiAgICAgICAgLy8gcHJpbWUgdGhlIHByb2plY3Rpb24gYW1vdW50XG4gICAgICAgIGxldCBtYXggPSBkaXJlY3Rpb24uZG90KHRoaXMudmVydGljZXNbMF0pO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2ldXG4gICAgICAgICAgICAgICAgLCBwcm9qZWN0aW9uID0gZGlyZWN0aW9uLmRvdCh2ZXJ0ZXgpO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdGlvbiA+IG1heCkge1xuICAgICAgICAgICAgICAgIHBvaW50LnNldCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgICAgIG1heCA9IHByb2plY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuXG4gICAgZ2V0RmFydGhlc3RGZWF0dXJlKGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCBtYXhpbXVtID0gbmV3IFZlY3RvcigpO1xuICAgICAgICBsZXQgbWF4ID0gLU51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgdmVydGV4XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBzY2FsYXIgcHJvamVjdGlvbiBvZiB2IG9udG8gYXhpc1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IGRpcmVjdGlvbi5kb3QodmVydGV4KTtcbiAgICAgICAgICAgIC8vIGtlZXAgdGhlIG1heGltdW0gcHJvamVjdGlvbiBwb2ludFxuICAgICAgICAgICAgaWYgKHByb2plY3Rpb24gPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIG1heCBwb2ludFxuICAgICAgICAgICAgICAgIG1heGltdW0uc2V0KHYpO1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgbmV3IG1heGltdW1cbiAgICAgICAgICAgICAgICBtYXggPSBwcm9qZWN0aW9uO1xuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGluZGV4XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25jZSB3ZSBoYXZlIHRoZSBwb2ludCBvZiBtYXhpbXVtXG4gICAgICAgIC8vIHNlZSB3aGljaCBlZGdlIGlzIG1vc3QgcGVycGVuZGljdWxhclxuICAgICAgICBjb25zdCBsID0gaW5kZXggKyAxID09IGNvdW50ID8gMCA6IGluZGV4ICsgMTtcbiAgICAgICAgY29uc3QgciA9IGluZGV4IC0gMSA8IDAgPyBjb3VudCAtIDEgOiBpbmRleCAtIDE7XG5cbiAgICAgICAgY29uc3QgbGVmdE4gPSB0aGlzLm5vcm1hbHNbaW5kZXggPT0gMCA/IGNvdW50IC0gMSA6IGluZGV4IC0gMV07XG4gICAgICAgIGNvbnN0IHJpZ2h0TiA9IHRoaXMubm9ybWFsc1tpbmRleF07XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgbWF4aW11bSBwb2ludCBmb3IgdGhlIGZlYXR1cmUgKHRyYW5zZm9ybSB0aGUgbWF4aW11bSBpbnRvIHdvcmxkIHNwYWNlKVxuICAgICAgICBjb25zdCB2bSA9IG5ldyBQb2ludEZlYXR1cmUobWF4aW11bSwgaW5kZXgpO1xuICAgICAgICAvLyBpcyB0aGUgbGVmdCBvciByaWdodCBlZGdlIG1vcmUgcGVycGVuZGljdWxhcj9cbiAgICAgICAgaWYgKGxlZnROLmRvdChkaXJlY3Rpb24pIDwgcmlnaHROLmRvdChkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy52ZXJ0aWNlc1tsXTtcbiAgICAgICAgICAgIGNvbnN0IHZsID0gbmV3IFBvaW50RmVhdHVyZShsZWZ0LCBsKTtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgZWRnZSBpcyB0aGUgcmlnaHQgd2luZGluZ1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFZGdlRmVhdHVyZSh2bSwgdmwsIHZtLCBtYXhpbXVtLnRvKGxlZnQpLCBpbmRleCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnZlcnRpY2VzW3JdO1xuICAgICAgICBjb25zdCB2ciA9IG5ldyBQb2ludEZlYXR1cmUocmlnaHQsIHIpO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGVkZ2UgaXMgdGhlIHJpZ2h0IHdpbmRpbmdcbiAgICAgICAgcmV0dXJuIG5ldyBFZGdlRmVhdHVyZSh2ciwgdm0sIHZtLCByaWdodC50byhtYXhpbXVtKSwgaW5kZXgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovUG9seWdvbi5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb252ZXgge1xuXG4gICAgLyoqXG4gICAgICog67Cp7Zal7JeQ7IScIOqwgOyepSDrqLwg67Kh7YSw7J2YIOyduOuNseyKpCAoRmVhdHVyZSnrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBnZXRGYXJ0aGVzdEZlYXR1cmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0NvbnZleF0gaW1wbG1lbnRzIGdldEZhcnRoZXN0RmVhdHVyZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuwqe2WpeyXkOyEnCDqsIDsnqUg66i8IO2PrOyduO2KuOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqL1xuICAgIGdldEZhcnRoZXN0UG9pbnQoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0NvbnZleF0gaW1wbG1lbnRzIGdldEZhcnRoZXN0UG9pbnQnKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0NvbnZleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9tZXRyeSB7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIG5vcm1hbGl6ZWQgdmVjdG9ycyByZXByZXNlbnRpbmcgdGhlIG5vcm1hbHMgb2YgYWxsIHRoZVxuICAgICAqIGVkZ2VzIGdpdmVuIHRoZSB2ZXJ0aWNlcy5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIG1ldGhvZCBhc3N1bWVzIGNvdW50ZXItY2xvY2t3aXNlIG9yZGVyaW5nLlxuICAgICAqIDxwPlxuICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZ2l2ZW4gdmVydGljZXMgYXJyYXkgaXMgbnVsbCBvciBlbXB0eS5cbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb3VudGVyQ2xvY2t3aXNlRWRnZU5vcm1hbHModmVydGljZXMpIHtcbiAgICAgICAgaWYgKHZlcnRpY2VzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IHZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgaWYgKHNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9ybWFscyA9IG5ldyBBcnJheShzaXplKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZWRnZSBwb2ludHNcbiAgICAgICAgICAgIGNvbnN0IHAxID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBjb25zdCBwMiA9IChpICsgMSA9PT0gc2l6ZSkgPyB2ZXJ0aWNlc1swXSA6IHZlcnRpY2VzW2kgKyAxXTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZWRnZSBhbmQgZ2V0IGl0cyBsZWZ0IHBlcnBlZGljdWxhciB2ZWN0b3JcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwMS50byhwMikubGVmdCgpO1xuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGl0XG4gICAgICAgICAgICBuLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgbm9ybWFsc1tpXSA9IG47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9ybWFscztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0dlb21ldHJ5LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlbmV0cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBub3JtYWwge1ZlY3Rvcn0gY29udmV4MSDsl5DshJwgY29udmV4MiDroZwg7Lmo7Yis7ZWcIG5vcm1hbFxuICAgICAqIEBwYXJhbSBkZXB0aCB7bnVtYmVyfSDsuajtiKwg6rmK7J20XG4gICAgICovXG4gICAgY29uc3RydWN0b3Iobm9ybWFsID0gbmV3IFZlY3RvcigpLCBkZXB0aCA9IDApIHtcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICB9XG5cbiAgICBnZXROb3JtYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgICB9XG5cbiAgICBnZXREZXB0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog7Lmo7YisIOuwqe2WpeydhCDshKTsoJXtlanri4jri6QuIOuwmOuTnOyLnCBub3JtYWxpemVkIO2VtOyVvCDtlanri4jri6QuXG4gICAgICogQHBhcmFtIG5vcm1hbCB7VmVjdG9yfVxuICAgICAqL1xuICAgIHNldE5vcm1hbChub3JtYWwpIHtcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog7Lmo7YisIOq5iuydtOulvCDshKTsoJXtlanri4jri6QuXG4gICAgICogQHBhcmFtIGRlcHRoIHtudW1iZXJ9XG4gICAgICovXG4gICAgc2V0RGVwdGgoZGVwdGgpIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovUGVuZXRyYXRpb24uanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgR0pLIGZyb20gJy4uL2dqay9HSksnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXJcbntcbiAgICBzdGF0aWMgZHJhd01pbmtvd3NraVN1bSh2ZXJ0aWNlczEsIHZlcnRpY2VzMilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmF3TWlua293c2tpU3VtKCcsIHZlcnRpY2VzMS5sZW5ndGggKiB2ZXJ0aWNlczIubGVuZ3RoLCAnKScpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlczEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmVydGljZXMyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdjEgPSB2ZXJ0aWNlczFbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgdjIgPSB2ZXJ0aWNlczJbal0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IFZlY3Rvci5zdWJ0cmFjdCh2MSwgdjIpO1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChkaWZmKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpLCBqLCBgdmVjWyR7ZGlmZi54fSwgJHtkaWZmLnl9XWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udmV4SHVsbFBhdGggPSBHSksuY3JlYXRlQ29udmV4SHVsbChwYXRoKTtcbiAgICAgICAgUGFpbnRlci5kcmF3UG9seWdvbihjb252ZXhIdWxsUGF0aCwgMSwgMHhEREREREQsIDEpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2x5Z29uKHZlcnRpY2VzLCBsaW5lV2lkdGggPSAxLCBjb2xvciA9IDB4NjA3RDhCLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gd2luZG93Lmc7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZShsaW5lV2lkdGgsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgY29uc3QgdmVjMCA9IHZlcnRpY2VzWzBdLmNsb25lKCk7XG4gICAgICAgIHZlYzAubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh2ZWMwLngsIHZlYzAueSk7XG5cbiAgICAgICAgLy8gdGhpcy5kcmF3VGV4dCh3aW5kb3cuc3RhZ2UsICcoJyArIHZlYzAueC50b0ZpeGVkKDApICsgJywnICsgdmVjMC55LnRvRml4ZWQoMCkgKyAnKScsIHZlYzApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2ZWMgPSB2ZXJ0aWNlc1tpXS5jbG9uZSgpO1xuICAgICAgICAgICAgdmVjLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMueCwgdmVjLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYzAueCwgdmVjMC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3VGV4dChzdGFnZSwgc3RyaW5nLCBwb2ludCwgY29sb3IgPSAnI2ZmMzMwMCcpXG4gICAge1xuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChzdHJpbmcsIHtcbiAgICAgICAgICAgIC8vIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICAvLyBmb250U2l6ZTogNCxcbiAgICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIGZpbGw6IGNvbG9yLFxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnIzRhMTg1MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRleHQueCA9IHBvaW50Lng7XG4gICAgICAgIHRleHQueSA9IHBvaW50Lnk7XG5cbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQodGV4dCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50KGdyYXBoaWNzLCBwb2ludCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgY29sb3IpO1xuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShwb2ludC54LCBwb2ludC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeUJvdW5kcyhncmFwaGljcywgYm91bmRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSlcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucnQueCwgcmVjdC5ydC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucmIueCwgcmVjdC5yYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubGIueCwgcmVjdC5sYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzQnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sdC54LCByZWN0Lmx0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5ydC54LCByZWN0LnJ0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5yYi54LCByZWN0LnJiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sYi54LCByZWN0LmxiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50cyhncmFwaGljcywgcG9pbnRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwMSA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIHZhciBwMiA9IHBvaW50c1tpICsgMSA8IHBvaW50cy5sZW5ndGggPyBpICsgMSA6IDBdO1xuXG4gICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0xpbmUoZ3JhcGhpY3MsIHAwLCBwMSwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDAueCwgcDAueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMS54LCBwMS55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3QXJyb3coZ3JhcGhpY3MsIG1vdmVQb2ludCwgdG9Qb2ludCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43LCBzY2FsZSA9IDUpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG5cbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IodG9Qb2ludC54IC0gbW92ZVBvaW50LngsIHRvUG9pbnQueSAtIG1vdmVQb2ludC55KTtcbiAgICAgICAgdmFyIGxlZnQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHZlY3Rvci5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcigxNSk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgdmVjdG9yLngsIG1vdmVQb2ludC55ICsgdmVjdG9yLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgbGVmdC54LCBtb3ZlUG9pbnQueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyByaWdodC54LCBtb3ZlUG9pbnQueSArIHJpZ2h0LnkpOyovXG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG5cbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IobW92ZVBvaW50LnggLSB0b1BvaW50LngsIG1vdmVQb2ludC55IC0gdG9Qb2ludC55KTtcbiAgICAgICAgdmFyIGxlZnQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgdmVjdG9yLmludmVydCgpLm11bHRpcGx5U2NhbGFyKHNjYWxlICogMyk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgdmVjdG9yLngsIG1vdmVQb2ludC55ICsgdmVjdG9yLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgbGVmdC54LCBtb3ZlUG9pbnQueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyByaWdodC54LCBtb3ZlUG9pbnQueSArIHJpZ2h0LnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdEaXJlY3Rpb24oZ3JhcGhpY3MsIG1lLCB0YXJnZXQsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNywgc2NhbGUgPSA1KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obWUueCwgbWUueSk7XG5cbiAgICAgICAgdmFyIHRvID0gbWUudG8odGFyZ2V0KTtcbiAgICAgICAgdmFyIGxlZnQgPSB0by5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHRvLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHRvLmludmVydCgpLm11bHRpcGx5U2NhbGFyKHNjYWxlICogMyk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1lLnggKyB0by54LCBtZS55ICsgdG8ueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1lLnggKyBsZWZ0LngsIG1lLnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obWUueCwgbWUueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtZS54ICsgcmlnaHQueCwgbWUueSArIHJpZ2h0LnkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9QYWludGVyLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuLyoqXG4gKiBHSksgQWxnb3JpdGhtIChHaWxiZXJ0LUpvaG5zb24tS2VlcnRoaSlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gKiBodHRwOi8vd3d3LmR5bjRqLm9yZy8yMDEwLzA0L2dqay1naWxiZXJ0LWpvaG5zb24ta2VlcnRoaS8jZ2prLXRvcFxuICogaHR0cHM6Ly93d3cuaGFyb2xkc2VycmFuby5jb20vYmxvZy92aXN1YWxpemluZy10aGUtZ2prLWNvbGxpc2lvbi1hbGdvcml0aG1cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qdWhsL2NvbGxpc2lvbi1kZXRlY3Rpb24tMmRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0pLXG57XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0byBjb21wdXRlIGF2ZXJhZ2UgY2VudGVyIChyb3VnaGx5KS4gSXQgbWlnaHQgYmUgZGlmZmVyZW50IGZyb21cbiAgICAgKiBDZW50ZXIgb2YgR3Jhdml0eSwgZXNwZWNpYWxseSBmb3IgYm9kaWVzIHdpdGggbm9udW5pZm9ybSBkZW5zaXR5LFxuICAgICAqIGJ1dCB0aGlzIGlzIG9rIGFzIGluaXRpYWwgZGlyZWN0aW9uIG9mIHNpbXBsZXggc2VhcmNoIGluIEdKS1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBhdmVyYWdlUG9pbnQodmVydGljZXMpXG4gICAge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhdmcueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZnLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2Zy54IC89IGNvdW50O1xuICAgICAgICBhdmcueSAvPSBjb3VudDtcblxuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1cnRoZXN0IHZlcnRleCBhbG9uZyBhIGNlcnRhaW4gZGlyZWN0aW9uXG4gICAgICog6ryt7KeA7KCQ6rO8IOuwqe2WpeydhCDsoITri6ztlZjrqbQg64K07KCBICjtiKzsmIEp7J2EIO2Gte2VtCDstZzrjIDroZwg66i8IOyijO2RnOydmCDsnbjrjbHsiqTrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBpbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlcywgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1heFByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzWzBdKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0ID4gbWF4UHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG1heFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1pbmtvd3NraSBzdW0gc3VwcG9ydCBmdW5jdGlvbiBmb3IgR0pLXG4gICAgICog7KeA7JuQIO2VqOyImOyXkOyEnCDtj7Trpqzqs6TsnZgg7Y+s7J247Yq47JmAIOuwqe2WpeycvOuhnCDshJzroZwg64uk66W4IOuwqe2WpeydmCDsoJDsnYQg6rWs7ZWY6rOgIE1pbmtvd3NraSBEaWZmZXJlbmNlIOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSDrsqHthLBcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgLy8gc3VidHJhY3QgKE1pbmtvd3NraSBzdW0pIHRoZSB0d28gcG9pbnRzIHRvIHNlZSBpZiBib2RpZXMgJ292ZXJsYXAnXG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbiBoaXN0b3J5IHtIaXN0b3J5fSBzaW1wbGV4IOyZgCBkaXJlY3Rpb24g7Z6I7Iqk7Yag66asXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOy2qeuPjCDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hlY2tDb2xsaXNpb24odmVydGljZXMxLCB2ZXJ0aWNlczIsIGhpc3RvcnkgPSBudWxsKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKTtcblxuICAgICAgICBsZXQgaXRlckNvdW50ID0gMCwgaW5kZXggPSAwOyAgIC8vIGluZGV4IG9mIGN1cnJlbnQgdmVydGV4IG9mIHNpbXBsZXhcbiAgICAgICAgbGV0IGEsIGIsIGMsIGQsIGFvLCBhYiwgYWMsIGFicGVycCwgYWNwZXJwLFxuICAgICAgICAgICAgc2ltcGxleCA9IG5ldyBBcnJheSgzKSwgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgzKTtcblxuICAgICAgICAvLyDrkZAg7Y+066as6rOkIOykkeyLrCDsooztkZzrpbwg7Ya17ZW07IScIOuwqe2WpeydhCDqtaztlanri4jri6QuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uMSA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMSk7IC8vIG5vdCBhIENvRyBidXRcbiAgICAgICAgY29uc3QgcG9zaXRpb24yID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMyKTsgLy8gaXQncyBvayBmb3IgR0pLIClcblxuICAgICAgICAvLyBpbml0aWFsIGRpcmVjdGlvbiBmcm9tIHRoZSBjZW50ZXIgb2YgMXN0IGJvZHkgdG8gdGhlIGNlbnRlciBvZiAybmQgYm9keVxuICAgICAgICAvLyDrsKntlqUgdmVjdG9yXG4gICAgICAgIGQgPSBWZWN0b3Iuc3VidHJhY3QocG9zaXRpb24xLCBwb3NpdGlvbjIpO1xuXG4gICAgICAgIC8vIGlmIGluaXRpYWwgZGlyZWN0aW9uIGlzIHplcm8g4oCTIHNldCBpdCB0byBhbnkgYXJiaXRyYXJ5IGF4aXMgKHdlIGNob29zZSBYKVxuICAgICAgICBpZiAoKGQueCA9PSAwKSAmJiAoZC55ID09IDApKSB7XG4gICAgICAgICAgICBkLnggPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IHN1cHBvcnQgYXMgaW5pdGlhbCBwb2ludCBvZiB0aGUgbmV3IHNpbXBsZXhcbiAgICAgICAgYSA9IHNpbXBsZXhbMF0gPSB0aGlzLnN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuICAgICAgICBkaXJlY3Rpb25zWzBdID0gZDtcbiAgICAgICAgY29uc29sZS5sb2coc3RyKGEpLCBzdHIoZCwgdHJ1ZSksIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpLnRvRml4ZWQoMikpO1xuXG4gICAgICAgIC8vIHN1cHBvcnQg7KCQ6rO8IOuwqe2WpeydtCDqsJnsnYAg67Cp7Zal7J20IOyVhOuLkCDqsr3smrBcbiAgICAgICAgaWYgKGEuZG90KGQpIDw9IDApIHtcbiAgICAgICAgICAgIC8vIOuniOyngOunieyXkCDstpTqsIAg65CcIOygkOydtCBk7J2YIOuwqe2WpeycvOuhnCDsm5DsoJDsnYQg7KeA64KY7LmY7KeAIOyViuydgCDqsr3smrBcbiAgICAgICAgICAgIC8vIOq3uCDri6TsnYwgTWlua293c2tpIO2VqeydgCDsm5DsoJDsnYQg7Y+s7ZWoIO2VoCDsiJgg7JeG7Iq164uI64ukLlxuICAgICAgICAgICAgLy8g7LaU6rCAIOuQnCDrp4jsp4Drp4kg7KCQ7J2AIE1pbmtvd3NraSBEaWZmZXJlbmNl7J2YIOqwgOyepeyekOumrOyXkCDsnojsirXri4jri6QuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnICAgICAgIENBU0UxWycsICdOTycsICddJyk7XG5cbiAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICB9XG5cbiAgICAgICAgZCA9IFZlY3Rvci5uZWdhdGUoYSk7IC8vIFRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgYWx3YXlzIHRvd2FyZHMgdGhlIG9yaWdpbiwgc28gdGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBuZWdhdGUoYSlcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaXRlckNvdW50Kys7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZXJDb3VudCk7XG5cbiAgICAgICAgICAgIGEgPSBzaW1wbGV4WysraW5kZXhdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbnNbaW5kZXhdID0gZDtcblxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAgICAgICBDQVNFMlsnLCAnTk8nLCAnXScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGHqsIAg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsqHthLDripQgLWEg66W8IO2VmOuptCDrkKnri4jri6QuXG4gICAgICAgICAgICBhbyA9IFZlY3Rvci5uZWdhdGUoYSk7IC8vIGZyb20gcG9pbnQgQSB0byBPcmlnaW4gaXMganVzdCBuZWdhdGl2ZSBBXG5cbiAgICAgICAgICAgIC8vIHNpbXBsZXggaGFzIDIgcG9pbnRzIChhIGxpbmUgc2VnbWVudCwgbm90IGEgdHJpYW5nbGUgeWV0KVxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMikge1xuXG4gICAgICAgICAgICAgICAgYiA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICAgICAgZCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhbywgYWIpOyAvLyBub3JtYWwgdG8gQUIgdG93YXJkcyBPcmlnaW5cblxuICAgICAgICAgICAgICAgIGlmIChWZWN0b3IubGVuZ3RoU3EoZCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IFZlY3Rvci5wZXJwZW5kaWN1bGFyKGFiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7IC8vIHNraXAgdG8gbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYiA9IHNpbXBsZXhbMV07XG4gICAgICAgICAgICBjID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgIGFiID0gVmVjdG9yLnN1YnRyYWN0KGIsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQlxuICAgICAgICAgICAgYWMgPSBWZWN0b3Iuc3VidHJhY3QoYywgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBDXG5cbiAgICAgICAgICAgIC8vYWPsmYAg7IiY7KeBXG4gICAgICAgICAgICBhY3BlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYWMsIGFjKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnLCBhLCAnYicsIGIsICdjJywgYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW8nLCBhbywgJ2FiJywgYWIsICdhYycsIGFjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3BlcnAnLCBhY3BlcnAsIGFjcGVycC5jbG9uZSgpLm5vcm0oKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhY3BlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFjcGVycCwgYW8pKTtcblxuICAgICAgICAgICAgLy8gYWMg7IiY7KeBIOyEoOu2hOydtCBh6rCAIOybkOygkOydhCDtlqXtlZjripQg67Cp7ZalIOuwmOuMgO2OuOyXkCDsnojqs6BcbiAgICAgICAgICAgIC8vIOymiSwgYWMg7IiY7KeBIOyEoOu2hCDslYjsqr3sl5Ag7JuQ7KCQ7J20IOyeiOycvOuptFxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFjcGVycCwgYW8pID49IDApIHtcbiAgICAgICAgICAgICAgICBkID0gYWNwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQyB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQyB0b3dhcmRzIE9yaWdpbicsIGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWIg7IiY7KeBIOyEoOu2hFxuICAgICAgICAgICAgICAgIGFicGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFjLCBhYiwgYWIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYnBlcnAnLCBhYnBlcnAsIGFicGVycC5jbG9uZSgpLm5vcm0oKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdFByb2R1Y3QoYWJwZXJwLCBhbyknLCBWZWN0b3IuZG90UHJvZHVjdChhYnBlcnAsIGFvKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aE7J20IOybkOygkCDrsJjrjIAg67Cp7Zal7J2EIO2Wpe2VmOqzoCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICAvLyDspoksIOybkOygkOydtCDsgrzqsIHtmJUg7JWI7JeQIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhYnBlcnAsIGFvKSA8IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIGNvbGxpc2lvblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNpbXBsZXhbMF0gPSBzaW1wbGV4WzFdOyAvLyBzd2FwIGZpcnN0IGVsZW1lbnQgKHBvaW50IEMpXG4gICAgICAgICAgICAgICAgZCA9IGFicGVycDsgLy8gbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUIgdG93YXJkcyBPcmlnaW5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2ltcGxleFsxXSA9IHNpbXBsZXhbMl07IC8vIHN3YXAgZWxlbWVudCBpbiB0aGUgbWlkZGxlIChwb2ludCBCKVxuICAgICAgICAgICAgLS1pbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3JlYXRlQ29udmV4SHVsbChwb2ludHMpXG4gICAge1xuICAgICAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgICAgIHZhciBpMCA9IDA7XG4gICAgICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGh1bGwgPSBbXTtcbiAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICB2YXIgaWggPSBpMDtcblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgICAgICB2YXIgaWUgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgciA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tqXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IFZlY3Rvci5jcm9zcyhyLCB2KTtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhTcSgpID4gci5sZW5ndGhTcSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29weSB2ZXJ0aWNlc1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaHVsbFtpXV07XG4gICAgICAgICAgICBuZXdQb2ludHMucHVzaChuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQb2ludHM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbWlkcG9pbnQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKChhLnggKyBiLngpIC8gMiwgKGEueSArIGIueSkgLyAyKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICBjb25zb2xlLmxvZyhpbmRleCwgdmVydGV4LngsIHZlcnRleC55KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMxJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMSk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMyJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMik7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbn1cblxuZnVuY3Rpb24gc3RyKHZlcnRleCwgaXNGaXhlZCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBgKCR7dmVydGV4Lnh9LCR7dmVydGV4Lnl9KWA7XG4gICAgfVxuICAgIHJldHVybiBgKCR7dmVydGV4LngudG9GaXhlZCgyKX0sJHt2ZXJ0ZXgueS50b0ZpeGVkKDIpfSlgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9HSksuanMiXSwic291cmNlUm9vdCI6IiJ9
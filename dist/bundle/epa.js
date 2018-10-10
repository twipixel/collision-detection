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

/***/ 336:
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
	
	var _ConvexHull = __webpack_require__(330);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _MinkowskiDifference = __webpack_require__(340);
	
	var _MinkowskiDifference2 = _interopRequireDefault(_MinkowskiDifference);
	
	var _Gjk = __webpack_require__(341);
	
	var _Gjk2 = _interopRequireDefault(_Gjk);
	
	var _Convex = __webpack_require__(344);
	
	var _Convex2 = _interopRequireDefault(_Convex);
	
	var _Polygon = __webpack_require__(345);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _KeyCode = __webpack_require__(331);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _Penetration = __webpack_require__(347);
	
	var _Penetration2 = _interopRequireDefault(_Penetration);
	
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
	
	var errorCase1 = [
	// [new Vector(2, 7), new Vector(12, 3), new Vector(12, 17)],
	// [new Vector(8, 8), new Vector(10, 7), new Vector(14, 8)],
	[new _Vector2.default(10, 13), new _Vector2.default(14, 15), new _Vector2.default(11, 14)]];
	
	var errorCase2 = [
	// [new Vector(14, 2), new Vector(17, 2), new Vector(14, 7), new Vector(9, 7)],
	// [new Vector(7, 5), new Vector(15, 10), new Vector(16, 11), new Vector(15, 14)],
	[new _Vector2.default(9, 8), new _Vector2.default(14, 15), new _Vector2.default(4, 15), new _Vector2.default(3, 12)]];
	
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
	            this.displayCollision = this.displayCollision.bind(this);
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
	            /*const index1 = Math.floor(Math.random() * triangles.length)
	                , index2 = Math.floor(Math.random() * rectangles.length)
	                , vertices1 = new Vertices(triangles[index1])
	                , vertices2 = new Vertices(rectangles[index2]);*/
	
	            var index1 = Math.floor(Math.random() * errorCase1.length),
	                index2 = Math.floor(Math.random() * errorCase2.length),
	                vertices1 = new _Vertices2.default(errorCase1[index1]),
	                vertices2 = new _Vertices2.default(errorCase2[index2]);
	
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
	
	            var polygon1 = new _Polygon2.default(vertices1.vertices),
	                polygon2 = new _Polygon2.default(vertices2.vertices);
	
	            console.log('polygon1', polygon1);
	            console.log('polygon2', polygon2);
	
	            var gjk = new _Gjk2.default(),
	                penetration = new _Penetration2.default();
	
	            var isCollision = gjk.detect(polygon1, polygon2, penetration);
	
	            console.log('isCollision', isCollision);
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            if (this.intervalId) {
	                clearInterval(this.intervalId);
	            }
	
	            this.displayCollision();
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

/***/ 341:
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
	
	var _Epsilon = __webpack_require__(342);
	
	var _Epsilon2 = _interopRequireDefault(_Epsilon);
	
	var _MinkowskiSum = __webpack_require__(343);
	
	var _MinkowskiSum2 = _interopRequireDefault(_MinkowskiSum);
	
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
	         */
	
	    }, {
	        key: 'detect',
	        value: function detect(convex1, convex2, penetration) {
	            var simplex = [];
	
	            // create a Minkowski sum
	            var ms = new _MinkowskiSum2.default(convex1, convex2);
	
	            // choose some search direction
	            var direction = this.getInitialDirection(convex1, convex2);
	
	            console.log('ms', ms);
	            console.log('direction', direction);
	
	            // perform the detection
	            if (this.detect2(ms, simplex, direction)) {
	                console.log('simplex', simplex);
	                // this.minkowskiPenetrationSolver.getPenetration(simplex, ms, penetration);
	                return true;
	            }
	
	            return false;
	        }
	
	        /**
	         *
	         * @param ms {MinkowskiSum}
	         * @param simplex {Vector[]}
	         * @param direction {Vector}
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'detect2',
	        value: function detect2(ms, simplex, direction) {
	            console.log('dectec2', ms, simplex, direction);
	            // check for a zero direction vector
	            if (direction.isZero()) {
	                direction.set(1, 0);
	            }
	            // add the first point
	            simplex[0] = ms.getSupportPoint(direction);
	            // is the support point past the origin along d?
	            if (simplex[0].dot(direction) <= 0) {
	                console.log('case 1');
	                return false;
	            }
	            // negate the search direction
	            direction.invert();
	            // start the loop
	            for (var i = 0; i < DEFAULT_MAX_ITERATIONS; i++) {
	                // always add another point to the simplex at the beginning of the loop
	                simplex.push(ms.getSupportPoint(direction));
	                // make sure that the last point we added was past the origin
	                console.log(simplex.length, simplex[simplex.length - 1].dot(direction));
	                if (simplex[simplex.length - 1].dot(direction) <= DEFAULT_DETECT_EPSILON) {
	                    // a is not past the origin so therefore the shapes do not intersect
	                    // here we treat the origin on the line as no intersection
	                    // immediately return with null indicating no penetration
	                    console.log('case 2');
	                    return false;
	                } else {
	                    // if it is past the origin, then test whether the simplex contains the origin
	                    if (this.checkSimplex(simplex, direction)) {
	                        // if the simplex contains the origin then we know that there is an intersection.
	                        // if we broke out of the loop then we know there was an intersection
	                        console.log('hit');
	                        return true;
	                    }
	                    // if the simplex does not contain the origin then we need to loop using the new
	                    // search direction and simplex
	                }
	            }
	            console.log('case 3');
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
	            console.log('checkSimplex', simplex.length, simplex, direction);
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
	                    // the origin lies on the right side of A->C
	                    // because of the condition for the gjk loop to continue the origin
	                    // must lie between A and C so remove B and set the
	                    // new search direction to A->C perpendicular vector
	                    console.log('** simplex', simplex);
	                    simplex.splice(1, 1);
	                    console.log('**** simplex', simplex);
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
	                        console.log('## simplex', simplex);
	                        simplex.splice(0, 1);
	                        console.log('#### simplex', simplex);
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

/***/ 342:
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

/***/ 343:
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

/***/ 344:
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

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Convex2 = __webpack_require__(344);
	
	var _Convex3 = _interopRequireDefault(_Convex2);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Geometry = __webpack_require__(346);
	
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
	            this.vertices.forEach(function (vertex) {
	                var projection = direction.dot(vertex);
	
	                if (projection > max) {
	                    point.set(vertex);
	                }
	                // set the new maximum
	                max = projection;
	            });
	
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

/***/ 346:
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

/***/ 347:
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9QYXN0ZWxDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9namsvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9Db25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9WZXJ0aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0dqay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovRXBzaWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovTWlua293c2tpU3VtLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9Db252ZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL1BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0dlb21ldHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9QZW5ldHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJtYWluIiwiTWFpbiIsImNhbnZhcyIsInJlbmRlcmVyIiwic3RhZ2UiLCJ0ZXN0IiwiY29udGFpbmVyIiwiaW5pdCIsImFkZEV2ZW50Iiwib25SZXNpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUElYSSIsIkNhbnZhc1JlbmRlcmVyIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3IiwiYXV0b1Jlc2l6ZSIsImJhY2tncm91bmRDb2xvciIsIkNvbnRhaW5lciIsImFkZENoaWxkIiwidXBkYXRlTG9vcCIsInJlc2l6ZVdpbmRvdyIsIm9ucmVzaXplIiwiYmluZCIsIm1zIiwidXBkYXRlIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlbmRlciIsImlubmVyV2lkdGgiLCJkZXZpY2VQaXhlbFJhdGlvIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInJlc2l6ZSIsImRlZ3JlZXMiLCJNYXRoIiwiUEkiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJmbG9vciIsInJhZGlhbjJkZWdyZWVzIiwicmFkIiwiZGVncmVlczJyYWRpYW4iLCJkZWciLCJWZWN0b3IiLCJhcnIiLCJvYmoiLCJ4IiwieSIsInZlYyIsInNjYWxhciIsInN1YnRyYWN0IiwidmVjdG9yIiwiaW52ZXJ0WCIsImludmVydFkiLCJsZW5ndGgiLCJkaXZpZGUiLCJub3JtYWxpemUiLCJmYWN0b3IiLCJhYnMiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJyYW5kb21pemVYIiwicmFuZG9taXplWSIsInJvdW5kIiwicHJlY2lzaW9uIiwidG9GaXhlZCIsImFtb3VudCIsIm1peFgiLCJtaXhZIiwiY29weVgiLCJjb3B5WSIsInRlbXAiLCJ2ZWMyIiwiZG90IiwiY29lZmYiLCJhdGFuMiIsImhvcml6b250YWxBbmdsZSIsInZlcnRpY2FsQW5nbGUiLCJob3Jpem9udGFsQW5nbGVEZWciLCJhbmdsZSIsIm54IiwiY29zIiwic2luIiwibnkiLCJyb3RhdGUiLCJyb3RhdGlvbiIsInJvdGF0ZVRvIiwicm90YXRlQnkiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcXJ0IiwiZGlzdGFuY2VTcSIsImRpcmVjdGlvbiIsImR4IiwiZHkiLCJsZW5ndGhTcSIsImEiLCJiIiwidiIsImNsb25lIiwicmV0IiwibXVsdGlwbHlTY2FsYXIiLCJjIiwiciIsImFjIiwiYmMiLCJ2ZWMxIiwidG8iLCJhZGQiLCJQb2ludCIsInJhZGl1cyIsImNvbG9yIiwiYWxwaGEiLCJidXR0b25Nb2RlIiwiaW50ZXJhY3RpdmUiLCJjbGVhciIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwibHQiLCJyYiIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiZnJvbU9iamVjdCIsIkdyYXBoaWNzIiwiUGFzdGVsQ29sb3IiLCJoQmFzZSIsIm5ld0giLCJuZXdMIiwiSFNMdG9SR0IiLCJnIiwiaHNsIiwicmdiIiwiaGV4IiwiUkdCdG9IZXgiLCJoZXhTaGFwIiwiaCIsInMiLCJsIiwicmQiLCJodWVUb1JHQiIsIm0iLCJuIiwibyIsInEiLCJwIiwicHJlZml4IiwidG9TdHJpbmciLCJDb252ZXhIdWxsIiwicG9pbnRzIiwic3RhY2siLCJzb3J0Iiwic29ydExvd2VyWVgiLCJiYXNlUG9pbnQiLCJpIiwicmVsYXRpdmVQb3NpdGlvbiIsInNvcnRDY3ciLCJwdXNoIiwibmV4dCIsImZpcnN0Iiwic2Vjb25kIiwicG9wIiwiaXNDY3ciLCJjb252ZXhIdWxsIiwiaW5kZXgiLCJwb2ludCIsInBvaW50QSIsInBvaW50QiIsInBvaW50QyIsInRyaWFuZ2xlQXJlYSIsImRlYnVnQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQ29udmV4SHVsbCIsImkwIiwieDAiLCJodWxsIiwiaWgiLCJpZSIsImoiLCJzdWIiLCJjcm9zcyIsImxlbmd0aHNxIiwibmV3UG9pbnRzIiwiTW91c2UiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJwcmV2VGltZSIsImN1cnJlbnRUaW1lIiwiZGlmZlgiLCJkaWZmWSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImdsb2JhbCIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIiwiVE9UQUwiLCJJTlRFUlZBTCIsIlNDQUxFIiwiU1RBR0UiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIlJBRF9UT19ERUciLCJ0cmlhbmdsZXMiLCJjcmVhdGVQb2x5Z29ucyIsInJlY3RhbmdsZXMiLCJlcnJvckNhc2UxIiwiZXJyb3JDYXNlMiIsIlRlc3QiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJzaGFwZXMiLCJkaXNwbGF5Q29sbGlzaW9uIiwia2V5VXBMaXN0ZW5lciIsIm9uS2V5VXAiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VEb3duTGlzdGVuZXIiLCJvbk1vdXNlRG93biIsIm9uIiwiY2hlY2tDb2xsaXNpb24iLCJmb3JFYWNoIiwic2hhcGUiLCJyZW1vdmVDaGlsZCIsImRlc3Ryb3kiLCJtaW5rb3dza2kiLCJpbmRleDEiLCJpbmRleDIiLCJ2ZXJ0aWNlczEiLCJ2ZXJ0aWNlczIiLCJtdWx0aXBseSIsInNoYXBlMSIsInZlcnRpY2VzIiwic2hhcGUyIiwicG9seWdvbjEiLCJwb2x5Z29uMiIsImdqayIsInBlbmV0cmF0aW9uIiwiaXNDb2xsaXNpb24iLCJkZXRlY3QiLCJpbnRlcnZhbElkIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiaGl0QXJlYSIsIlJlY3RhbmdsZSIsImUiLCJrZXlDb2RlIiwiU1BBQ0UiLCJnZXRBbmdsZSIsIm5vcm0iLCJyYWRpYW4iLCJhY29zIiwiZG90UHJvZHVjdCIsInBvbHlnb24iLCJ0b3RhbCIsInBvbHlnb25zIiwidmVydGV4IiwiZ2VuZXJhdGUiLCJGT05UX1NJWkUiLCJTaGFwZSIsImxpbmVDb2xvciIsInRleHRDb2xvciIsImdyYXBoaWNzIiwibGFiZWxzIiwiY3JlYXRlTGFiZWwiLCJkcmF3IiwidGV4dCIsIlRleHQiLCJhbGlnbiIsImZvbnQiLCJmaWxsIiwidmlzaWJsZSIsIm9yaWdpbiIsImxpbmVTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsImxhYmVsIiwiZGl2aWRlU2NhbGFyIiwiQ29uc3RzIiwiVmVydGljZXMiLCJGT05UX0NPTE9SIiwiQVhFU19MSU5FX0NPTE9SIiwiQ09OVkVYX0hVTExfTElORV9DT0xPUiIsIk1pbmtvd3NraURpZmZlcmVuY2UiLCJnZXRWZXJ0aWNlcyIsInRleHRzIiwiZHJhd0F4ZXMiLCJkcmF3VmV0aWNlcyIsImRyYXdQb2x5Z29uIiwiZHJhd1RleHQiLCJodyIsImhoIiwiREVGQVVMVF9NQVhfSVRFUkFUSU9OUyIsIkRFRkFVTFRfREVURUNUX0VQU0lMT04iLCJHamsiLCJtaW5rb3dza2lQZW5ldHJhdGlvblNvbHZlciIsImNvbnZleDEiLCJjb252ZXgyIiwiYzEiLCJnZXRDZW50ZXIiLCJjMiIsInNpbXBsZXgiLCJnZXRJbml0aWFsRGlyZWN0aW9uIiwiZGV0ZWN0MiIsImlzWmVybyIsInNldCIsImdldFN1cHBvcnRQb2ludCIsImludmVydCIsImNoZWNrU2ltcGxleCIsImFvIiwibmVnYXRlIiwiYWIiLCJhY1BlcnAiLCJ0cmlwbGVQcm9kdWN0IiwiYWNMb2NhdGlvbiIsInNwbGljZSIsImFiUGVycCIsImFiTG9jYXRpb24iLCJnZXRNYWduaXR1ZGVTcXVhcmVkIiwiRSIsImxlZnQiLCJFcHNpbG9uIiwiY29tcHV0ZSIsIk1pbmtvd3NraVN1bSIsInBvaW50MSIsImdldEZhcnRoZXN0UG9pbnQiLCJwb2ludDIiLCJDb252ZXgiLCJFcnJvciIsIlBvbHlnb24iLCJub3JtYWxzIiwiZ2V0Q291bnRlckNsb2Nrd2lzZUVkZ2VOb3JtYWxzIiwiY2VudGVyIiwiYXZnIiwiY291bnQiLCJwcm9qZWN0aW9uIiwibWF4aW11bSIsIk51bWJlciIsIk1BWF9WQUxVRSIsImxlZnROIiwicmlnaHROIiwidm0iLCJQb2ludEZlYXR1cmUiLCJ2bCIsIkVkZ2VGZWF0dXJlIiwicmlnaHQiLCJ2ciIsIkdlb21ldHJ5Iiwic2l6ZSIsIkFycmF5IiwicDEiLCJwMiIsIlBlbmV0cmF0aW9uIiwibm9ybWFsIiwiZGVwdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQyxjQUFZO0FBQ1RBLFlBQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QixhQUFNQyxPQUFPLElBQUlDLElBQUosRUFBYjtBQUNILE1BRkQ7QUFHSCxFQUpBLEdB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LGtCQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7cUNBRVc7QUFDUixvQkFBTyxLQUFLRCxNQUFaO0FBQ0g7OztvQ0FFVTtBQUNQLG9CQUFPLEtBQUtDLEtBQVo7QUFDSDs7QUFFRDs7Ozs7OzttQ0FJVUQsTSxFQUFRO0FBQ2Qsa0JBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOztBQUVEOzs7Ozs7O2tDQUlTQyxLLEVBQU87QUFDWixrQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7OzttQkF0Q2dCRixXIiwiZmlsZSI6ImVwYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi9UZXN0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gJy4vLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlJztcbmltcG9ydCBNb3VzZSBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL01vdXNlXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG4gICAgfVxufSgpKTtcblxubGV0IGNhbnZhcywgcmVuZGVyZXIsIHN0YWdlLCB0ZXN0LCBjb250YWluZXI7XG5cbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG4gICAgICAgIHJlbmRlcmVyID0gbmV3IFBJWEkuQ2FudmFzUmVuZGVyZXIoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCB7XG4gICAgICAgICAgICB2aWV3OiBjYW52YXMsXG4gICAgICAgICAgICBhdXRvUmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDMzMzgzRFxuICAgICAgICB9KTtcblxuICAgICAgICBNb3VzZS5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgICAgIC8vIOychOy5mOqwgCDsoJXsiJjqsIAg7JWE64uQ6rK97JqwIO2dkOumv+2VmOqyjCDrs7TsnbTripQg66y47KCc6rCAIOyeiOyWtFxuICAgICAgICAvLyDroIzrjZTrn6zsnZgg7JyE7LmY66W8IOygleyImOuhnCDsl7DsgrDrkKAg7IiYIOyeiOuPhOuhnSDtlZzri6QuXG4gICAgICAgIC8vcmVuZGVyZXIucm91bmRQaXhlbHMgPSB0cnVlO1xuXG4gICAgICAgIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBzdGFnZS5hZGRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHRlc3QgPSBuZXcgVGVzdChyZW5kZXJlcik7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRlc3QpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTG9vcCgpO1xuICAgICAgICB0aGlzLnJlc2l6ZVdpbmRvdygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7fVxuXG4gICAgdXBkYXRlTG9vcCAobXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobXMpO1xuICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobXMpIHtcbiAgICAgICAgdGVzdC51cGRhdGUoKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHN0YWdlKTtcbiAgICB9XG5cbiAgICByZXNpemVXaW5kb3coKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOy6lOuyhOyKpCDsgqzsnbTspojsmYAg65SU7Iqk7ZSM66CI7J20IOyCrOydtOymiCDshKTsoJVcbiAgICAgICAgICog66CI7Yuw64KYIOq3uOuemO2UvSDsp4Dsm5Ag7L2U65OcXG4gICAgICAgICAqL1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUElYSSByZW5kZXJlciDrpqzsgqzsnbTspohcbiAgICAgICAgICogUElYSSDsl5Dqsowgdmlld3BvcnQg7IKs7J207KaIIOuzgOqyvSDslYzrprxcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgdGVzdC5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvZXBhL2luZGV4LmpzIiwiXG5cbmNvbnN0IGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5cbmZ1bmN0aW9uIHJhbmRvbSAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn1cblxuZnVuY3Rpb24gcmFkaWFuMmRlZ3JlZXMgKHJhZCkge1xuICAgIHJldHVybiByYWQgKiBkZWdyZWVzO1xufVxuXG5mdW5jdGlvbiBkZWdyZWVzMnJhZGlhbiAoZGVnKSB7XG4gICAgcmV0dXJuIGRlZyAvIGRlZ3JlZXM7XG59XG5cblxuLyoqXG4gKiBWaWN0b3IuanPrpbwgRVM266GcIOuzgO2ZmO2VmOyXrCDsgqzsmqntlZjqs6Ag7J6I7Iq164uI64ukLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21heGt1ZW5nL3ZpY3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JcbntcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gYXJyYXlcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IFZlY3Rvci5mcm9tQXJyYXkoWzQyLCAyMV0pO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gICAgICpcbiAgICAgKiBAbmFtZSBWZWN0b3IuZnJvbUFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgd2l0aCB0aGUgeCBhbmQgeSB2YWx1ZXMgYXQgaW5kZXggMCBhbmQgMSByZXNwZWN0aXZlbHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYXJyWzBdIHx8IDAsIGFyclsxXSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3RcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IFZlY3Rvci5mcm9tT2JqZWN0KHsgeDogNDIsIHk6IDIxIH0pO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gICAgICpcbiAgICAgKiBAbmFtZSBWZWN0b3IuZnJvbU9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHdpdGggdGhlIHZhbHVlcyBmb3IgeCBhbmQgeVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21PYmplY3Qob2JqKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3Iob2JqLnggfHwgMCwgb2JqLnkgfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci4gV2lsbCBhbHNvIHdvcmsgd2l0aG91dCB0aGUgYG5ld2Aga2V5d29yZFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gVmVjdG9yKDQyLCAxMzM3KTtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IFZhbHVlIG9mIHRoZSB4IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSBWYWx1ZSBvZiB0aGUgeSBheGlzXG4gICAgICogQHJldHVybiB7VmVjdG9yfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKVxuICAgIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBYIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjMwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFkgYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjMwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCArIGIueCwgYS55ICsgYi55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gYm90aCB2ZWN0b3IgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMywgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMywgeTogMlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWSgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBYIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFkgYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3QodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc3VidHJhY3QoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAtIGIueCwgYS55IC0gYi55KTtcbiAgICB9XG5cblxuICAgIGVkZ2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBlZGdlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gVmVjdG9yLnN1YnRyYWN0KGEsIGIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhcigyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiA4MCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWCgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiA4MCwgeTogMjAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclkoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMTAwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgeCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlWCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSB5IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlWSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgLz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IGEgYXhpcyB2YWx1ZXMgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGUodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgLz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC8gYi54LCBhLnkgLyBiLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWSgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRYKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4Oi0xMDAsIHk6NTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFgoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WSgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6LTUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRZKClcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4Oi0xMDAsIHk6LTUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pbnZlcnRYKCk7XG4gICAgICAgIHRoaXMuaW52ZXJ0WSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBuZWdhdGUodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgdiA9IHZlYy5jbG9uZSgpO1xuICAgICAgICB2LnggPSAtdmVjLng7XG4gICAgICAgIHYueSA9IC12ZWMueTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFggYXhpcyBieSBYIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBZIGF4aXMgYnkgWSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB2YWx1ZXMgZnJvbSBhIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtdWx0aXBseVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogc2NhbGFyLCB2ZWN0b3IueSAqIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlU2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggLyBzY2FsYXIsIHZlY3Rvci55IC8gc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICg5MCDrj4Qg7ZqM7KCEKVxuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgcGVycGVuZGljdWxhcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHBlcnBlbmRpY3VsYXIodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUueCA9IC12ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IHZlYy54O1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoLTkwIOuPhCDtmozsoIQpXG4gICAgICovXG4gICAgcmV0dXJuUGVycGVuZGljdWxhcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnksIC10aGlzLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJldHVyblBlcnBlbmRpY3VsYXIodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUueCA9IHZlYy55O1xuICAgICAgICBjbG9uZS55ID0gLXZlYy54O1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrsoTrprxcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHBhcmFtIGxlbmd0aFxuICAgICAqL1xuICAgIHN0YXRpYyB0cnVuY2F0ZSh2ZWMsIGxlbmd0aClcbiAgICB7XG4gICAgICAgIGNvbnN0IHJldCA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBsZW5ndGhTcSA9IHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgICAgICBpZiAobGVuZ3RoU3EgPiBsZW5ndGggKiBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldC5tdWx0aXBseVNjYWxhcihsZW5ndGggLyBNYXRoLnNxcnQobGVuZ3RoU3EpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXplXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBub3JtYWxpemUoKVxuICAgIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAxO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGl2aWRlKG5ldyBWZWN0b3IobGVuZ3RoLCBsZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG5vcm0oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgYWJzb2x1dGUgdmVjdG9yIGF4aXMgaXMgZ3JlYXRlciB0aGFuIGBtYXhgLCBtdWx0aXBsaWVzIHRoZSBheGlzIGJ5IGBmYWN0b3JgXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5saW1pdCg4MCwgMC45KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6OTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggVGhlIG1heGltdW0gdmFsdWUgZm9yIGJvdGggeCBhbmQgeSBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZhY3RvciBGYWN0b3IgYnkgd2hpY2ggdGhlIGF4aXMgYXJlIHRvIGJlIG11bHRpcGxpZWQgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxpbWl0KG1heCwgZmFjdG9yKVxuICAgIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueCkgPiBtYXgpeyB0aGlzLnggKj0gZmFjdG9yOyB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnkpID4gbWF4KXsgdGhpcy55ICo9IGZhY3RvcjsgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWl6ZXMgYm90aCB2ZWN0b3IgYXhpcyB3aXRoIGEgdmFsdWUgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwYCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo2NywgeTo3M1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCksIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCkpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdGhpcy54ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHJldHVybiByYW5kb20obWluLCBtYXgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdGhpcy55ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHJldHVybiByYW5kb20obWluLCBtYXgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9tbHkgcmFuZG9taXplcyBlaXRoZXIgYXhpcyBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplQW55KG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Ojc3XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZUFueSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGlmICghISBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYW4gaW50ZWdlciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAuMiwgNTAuOSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB1bmZsb2F0KClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYSBjZXJ0YWluIHByZWNpc2lvblxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAuMiwgNTAuOSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gUHJlY2lzaW9uIChkZWZhdWx0OiA4KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvRml4ZWQocHJlY2lzaW9uKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVjaXNpb24gPT09ICd1bmRlZmluZWQnKSB7IHByZWNpc2lvbiA9IDg7IH1cbiAgICAgICAgdGhpcy54ID0gdGhpcy54LnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55LnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFggYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXhYKHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjE1MCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXhYKHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSAoMSAtIGFtb3VudCkgKiB0aGlzLnggKyBhbW91bnQgKiB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFkgYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXhZKHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxNTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXhZKHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnkgPSAoMSAtIGFtb3VudCkgKiB0aGlzLnkgKyBhbW91bnQgKiB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4KHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjE1MCwgeToxNTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICB0aGlzLm1peFgodmVjLCBhbW91bnQpO1xuICAgICAgICB0aGlzLm1peFkodmVjLCBhbW91bnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICMgUHJvZHVjdHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNsb25lKCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IEEgY2xvbmUgb2YgdGhlIHZlY3RvclxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY2xvbmUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WCh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFkgY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGFuZCBZIGNvbXBvbmVudHMgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5KHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLmNvcHlYKHZlYyk7XG4gICAgICAgIHRoaXMuY29weVkodmVjKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2ZWN0b3IgdG8gemVybyAoMCwwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKlx0XHQgdmFyMS56ZXJvKCk7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDowLCB5OjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHplcm8oKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgdmVjdG9yIHRvIHRoZSBsZWZ0LWhhbmRlZCBub3JtYWwgb2YgdGhpcyB2ZWN0b3IuXG4gICAgICogQHJldHVybiB7VmVjdG9yfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldExlZnRIYW5kT3J0aG9nb25hbFZlY3RvcigpXG4gICAgICovXG4gICAgbGVmdCgpXG4gICAge1xuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IC10ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIHJpZ2h0LWhhbmRlZCBub3JtYWwgb2YgdGhpcyB2ZWN0b3IuXG4gICAgICogQHJldHVybiB7QGxpbmsgVmVjdG9yMn0gdGhpcyB2ZWN0b3JcbiAgICAgKiBAc2VlICNnZXRSaWdodEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICByaWdodCgpXG4gICAge1xuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSAtdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSB0ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRvdCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMjMwMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERvdCBwcm9kdWN0XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkb3QodmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2ZWMyLnggKyB0aGlzLnkgKiB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICBkb3RQcm9kdWN0KHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRvdFByb2R1Y3QoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG4gICAgfVxuXG5cbiAgICBjcm9zcyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKiB2ZWMyLnkpIC0gKHRoaXMueSAqIHZlYzIueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3Jvc3MoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnkgLSBhLnkgKiBiLng7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20va3JvaXRvci9namsuY1xuICAgICAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RyaXBsZV9wcm9kdWN0I1ZlY3Rvcl90cmlwbGVfcHJvZHVjdFxuICAgICAqIOyEuOq3uOuovO2KuOyXkOyEnCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuwqe2WpeydhCDssL7snYQg65WMIOyCrOyaqVxuICAgICAqL1xuICAgIHN0YXRpYyB0cmlwbGVQcm9kdWN0KGEsIGIsIGMpXG4gICAge1xuICAgICAgICBjb25zdCByID0gbmV3IFZlY3RvcigpO1xuICAgICAgICBjb25zdCBhYyA9IGEueCAqIGMueCArIGEueSAqIGMueSAgICAvLyBwZXJmb3JtIGEuZG90KGMpXG4gICAgICAgICAgICAsIGJjID0gYi54ICogYy54ICsgYi55ICogYy55OyAgIC8vIHBlcmZvcm0gYi5kb3QoYylcblxuICAgICAgICAvLyBwZXJmb3JtIGIgKiBhLmRvdChjKSAtIGEgKiBiLmRvdChjKVxuICAgICAgICByLnggPSBiLnggKiBhYyAtIGEueCAqIGJjO1xuICAgICAgICByLnkgPSBiLnkgKiBhYyAtIGEueSAqIGJjO1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHJvamVjdHMgYSB2ZWN0b3Igb250byBhbm90aGVyIHZlY3Rvciwgc2V0dGluZyBpdHNlbGYgdG8gdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucHJvamVjdE9udG8odmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gcHJvamVjdCB0aGlzIHZlY3RvciBvbnRvXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcHJvamVjdE9udG8odmVjMilcbiAgICB7XG4gICAgICAgIHZhciBjb2VmZiA9ICggKHRoaXMueCAqIHZlYzIueCkrKHRoaXMueSAqIHZlYzIueSkgKSAvICgodmVjMi54KnZlYzIueCkrKHZlYzIueSp2ZWMyLnkpKTtcbiAgICAgICAgdGhpcy54ID0gY29lZmYgKiB2ZWMyLng7XG4gICAgICAgIHRoaXMueSA9IGNvZWZmICogdmVjMi55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyEoO2YlSDrs7TqsIRcbiAgICAgKiBodHRwOi8vZGV2ZWxvcHVnLmJsb2dzcG90LmNvbS8yMDE0LzA5L3VuaXR5LXZlY3Rvci1sZXJwLmh0bWxcbiAgICAgKiBAcGFyYW0gdmVjMVxuICAgICAqIEBwYXJhbSB2ZWMyXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgbGVycCh2ZWMxLCB2ZWMyLCB0bykge1xuICAgICAgICByZXR1cm4gVmVjdG9yLmFkZChWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMSwgMSAtIHRvKSwgVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzIsIHRvKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog7Jet7IiYXG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIHJjcCh2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMSAvIHZlY3Rvci54LCAxIC8gdmVjdG9yLnkpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy5ob3Jpem9udGFsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMudmVydGljYWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgYW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlRGVnKCk7XG4gICAgfVxuXG5cbiAgICBkaXJlY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICByb3RhdGUoYW5nbGUpXG4gICAge1xuICAgICAgICB2YXIgbnggPSAodGhpcy54ICogTWF0aC5jb3MoYW5nbGUpKSAtICh0aGlzLnkgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICB2YXIgbnkgPSAodGhpcy54ICogTWF0aC5zaW4oYW5nbGUpKSArICh0aGlzLnkgKiBNYXRoLmNvcyhhbmdsZSkpO1xuXG4gICAgICAgIHRoaXMueCA9IG54O1xuICAgICAgICB0aGlzLnkgPSBueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHJvdGF0ZURlZyhhbmdsZSlcbiAgICB7XG4gICAgICAgIGFuZ2xlID0gZGVncmVlczJyYWRpYW4oYW5nbGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG8ocm90YXRpb24pXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUocm90YXRpb24tdGhpcy5hbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvRGVnKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZVRvKHJvdGF0aW9uKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZUJ5KHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gdGhpcy5hbmdsZSgpICsgcm90YXRpb247XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZUJ5RGVnKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZUJ5KHJvdGF0aW9uKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBYIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gLTEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54IC0gdmVjLng7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVgoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFic0Rpc3RhbmNlWCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWCh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBZIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gLTEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgLSB2ZWMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWSgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVkodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDAuNDk4NzU2MjExMjA4OVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxKHZlYykpO1xuICAgIH1cblxuXG4gICAgZ2V0TWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbigpO1xuICAgIH1cblxuXG4gICAgZ2V0TWFnbml0dWRlU3F1YXJlZCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlU3EodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VTcSh2ZWMpXG4gICAge1xuICAgICAgICB2YXIgZHggPSB0aGlzLmRpc3RhbmNlWCh2ZWMpLFxuICAgICAgICAgICAgZHkgPSB0aGlzLmRpc3RhbmNlWSh2ZWMpO1xuXG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvciBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGVuZ3RoKCk7XG4gICAgICogICAgIC8vID0+IDExMS44MDMzOTg4NzQ5ODk0OFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aCgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoU3EoKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6jsiJztnogg6ri47J20IOu5hOq1kOulvCDtlZjroKTrqbQgbGVuZ3RoIOulvCDsgqzsmqntlZjquLAg67O064uk64qUIGxlbmd0aFNxIOulvCDsgqzsmqntlZjqsowg67mg66W064ukLlxuICAgICAqIGxlbmd0aCDripQgTWF0aC5zcXJ0ICjsoJzqs7Hqt7wpIOyymOumrOulvCDtlZjquLAg65WM66y47JeQIOuLqOyInCDquLjsnbQg67mE6rWQ7IucIGxlbmd0aFNxIOulvCDsgqzsmqntlZjripQg6rKD7J20IOu5oOumheuLiOuLpC5cbiAgICAgKiBTcXVhcmVkIGxlbmd0aCAvIG1hZ25pdHVkZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGVuZ3RoU3EoKTtcbiAgICAgKiAgICAgLy8gPT4gMTI1MDBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGhTcSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIGxlbmd0aFNxKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICB9XG5cblxuICAgIG1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGgoKTtcbiAgICB9XG5cblxuICAgIHRvKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlYy54IC0gdGhpcy54LCB2ZWMueSAtIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBzZXQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cnVlIGlmIHZlY3RvciBpcyAoMCwgMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZlYy56ZXJvKCk7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzWmVybygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSAwICYmIHRoaXMueSA9PT0gMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cnVlIGlmIHRoaXMgdmVjdG9yIGlzIHRoZSBzYW1lIGFzIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZlYzEuaXNFcXVhbFRvKHZlYzIpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc0VxdWFsVG8odmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IHZlYzIueCAmJiB0aGlzLnkgPT09IHZlYzIueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICMgVXRpbGl0eSBNZXRob2RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIHJldHVybiAneDonICsgdGhpcy54ICsgJywgeTonICsgdGhpcy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvQXJyYXkoKTtcbiAgICAgKiAgICAgLy8gPT4gWzEwLCAyMF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9BcnJheSgpXG4gICAge1xuICAgICAgICByZXR1cm4gWyB0aGlzLngsIHRoaXMueSBdO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b09iamVjdCgpO1xuICAgICAqICAgICAvLyA9PiB7IHg6IDEwLCB5OiAyMCB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b09iamVjdCgpXG4gICAge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WZWN0b3IuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzXG57XG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAxMCwgY29sb3IgPSAweGZmMzMwMCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmVuZGVyKHJhZGl1cywgY29sb3IsIGFscGhhKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcihyYWRpdXMgPSAxMCwgY29sb3IgPSAweGZmMzMwMCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplKGx0LCByYilcbiAgICB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy52ZWN0b3IucmFuZG9taXplKGx0LCByYik7XG4gICAgICAgIHRoaXMueCA9IHBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMueSA9IHBvc2l0aW9uLnk7XG4gICAgfVxuXG5cbiAgICBnZXQgdmVjdG9yKClcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuZnJvbU9iamVjdCh0aGlzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbS9Qb2ludC5qcyIsIi8qKlxuICogaHR0cHM6Ly9jb2RlcGVuLmlvL3BsaXUvcGVuL0JMRUt3QVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXN0ZWxDb2xvciB7XG4gICAgc3RhdGljIGdlbmVyYXRlKCkge1xuICAgICAgICBjb25zdCBoQmFzZSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGNvbnN0IG5ld0ggPSBNYXRoLmZsb29yKGhCYXNlICogMzYwKTtcbiAgICAgICAgY29uc3QgbmV3TCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KSArIDc1O1xuICAgICAgICBjb25zdCBjb2xvciA9IGBoc2woJHtuZXdIfSwgMTAwJSwgJHtuZXdMfSUpYDtcbiAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gdGhpcy5IU0x0b1JHQihoQmFzZSwgMSwgbmV3TCAqIC4wMSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhzbDogY29sb3IsIC8vIGhzbCgwLCAxMDAlLCA4NSUpO1xuICAgICAgICAgICAgcmdiOiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYCwgLy8gcmdiKDI1NSwgMTI4LCAxMjgpO1xuICAgICAgICAgICAgaGV4OiBgJHt0aGlzLlJHQnRvSGV4KHIsIGcsIGIpfWAsIC8vIDB4ZmY4MDgwXG4gICAgICAgICAgICBoZXhTaGFwOmAke3RoaXMuUkdCdG9IZXgociwgZywgYiwgJyMnKX1gLCAvLyAjZmY4MDgwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSFNMIHRvIFJHQiBmb3JtdWxhIGFkYXB0ZWQgZnJvbTpcbiAgICAgKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9tamFja3Nvbi81MzExMjU2XG4gICAgICogKHNraXBwaW5nIHRvIGVsc2V7fSBzaW5jZSBzIHdpbGwgYWx3YXlzIGJlIDEwMCUpXG4gICAgICogQHBhcmFtIGhcbiAgICAgKiBAcGFyYW0gc1xuICAgICAqIEBwYXJhbSBsXG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgSFNMdG9SR0IoaCwgcywgbCkge1xuICAgICAgICBsZXQgciwgZywgYjtcblxuICAgICAgICBjb25zdCByZCA9IChhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heChNYXRoLm1pbihhICogMjU2LCAyNTUpLCAwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaHVlVG9SR0IgPSAobSwgbiwgbykgPT4ge1xuICAgICAgICAgICAgaWYgKG8gPCAwKSBvICs9IDE7XG4gICAgICAgICAgICBpZiAobyA+IDEpIG8gLT0gMTtcbiAgICAgICAgICAgIGlmIChvIDwgMSAvIDYpIHJldHVybiBtICsgKG4gLSBtKSAqIDYgKiBvO1xuICAgICAgICAgICAgaWYgKG8gPCAxIC8gMikgcmV0dXJuIG47XG4gICAgICAgICAgICBpZiAobyA8IDIgLyAzKSByZXR1cm4gbSArIChuIC0gbSkgKiAoMiAvIDMgLSBvKSAqIDY7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcblxuICAgICAgICByID0gaHVlVG9SR0IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgICAgZyA9IGh1ZVRvUkdCKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlVG9SR0IocCwgcSwgaCAtIDEgLyAzKTtcblxuICAgICAgICByZXR1cm4gW3JkKHIpLCByZChnKSwgcmQoYildXG4gICAgfVxuXG4gICAgc3RhdGljIFJHQnRvSGV4KHIsIGcsIGIsIHByZWZpeCA9ICcweCcpIHtcbiAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0ke3IudG9TdHJpbmcoMTYpfSR7Zy50b1N0cmluZygxNil9JHtiLnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9QYXN0ZWxDb2xvci5qcyIsIi8qKlxuICogaHR0cHM6Ly93d3cuY3JvY3VzLmNvLmtyLzEyODhcbiAqL1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vVmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZleEh1bGwge1xuICAgIHN0YXRpYyBnZW5lcmF0ZShwb2ludHMpIHtcblxuICAgICAgICBjb25zdCBzdGFjayA9IFtdLFxuICAgICAgICAgICAgbiA9IHBvaW50cy5sZW5ndGg7XG5cbiAgICAgICAgLy8geeyijO2RnCwgeOyijO2RnCDsnpHsnYAg7Iic7Jy866GcIOygleugrFxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRMb3dlcllYKTtcblxuICAgICAgICAvLyDquLDspIDsoJAg7ISk7KCVXG4gICAgICAgIGNvbnN0IGJhc2VQb2ludCA9IHBvaW50c1swXTtcblxuICAgICAgICAvLyDquLDspIDsoJAg6riw7KSA7Jy866GcIHZlY3RvciDrpbwg7IOd7ISx7ZWY6rOgIOyZuOyggeydhCDqtaztlbTshJwg67CYIOyLnOqzhCDrsKntlqXsnLzroZwgKGNjdykg7KCV66CsIO2VqeuLiOuLpC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50c1tpXS5yZWxhdGl2ZVBvc2l0aW9uID0gbmV3IFZlY3RvcihcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueCAtIGJhc2VQb2ludC54LFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXS55IC0gYmFzZVBvaW50LnlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRDY3cpO1xuXG4gICAgICAgIC8vIOyKpO2DneyXkCBmaXJzdCwgc2Vjb25kIOulvCDrhKPsirXri4jri6QuXG4gICAgICAgIHN0YWNrLnB1c2goMCk7XG4gICAgICAgIHN0YWNrLnB1c2goMSk7XG5cbiAgICAgICAgbGV0IG5leHQgPSAyO1xuXG4gICAgICAgIHdoaWxlIChuZXh0IDwgbikge1xuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0LCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgc2Vjb25kID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpcnN0LCBzZWNvbmQsIG5leHTqsIAg7KKM7ZqM7KCEICggMCDrs7Tri6Qg7YGs66m0ICnsnbTrnbzrqbQgc2Vjb25kIHB1c2hcbiAgICAgICAgICAgICAgICAvLyDsmrDtmozsoIQoIDAg67O064ukIOyekeycvOuptCApIOydtOudvOuptCDsnITsnZggd2hpbGXrrLgg6rOE7IaNIOuwmOuztVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2N3KHBvaW50c1tmaXJzdF0sIHBvaW50c1tzZWNvbmRdLCBwb2ludHNbbmV4dF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc2Vjb25kKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHQrKyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gc3RhY2subGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YWNrW2ldO1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaW5kZXhdO1xuICAgICAgICAgICAgY29udmV4SHVsbC5wdXNoKG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnZleEh1bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeSwgeCDqsIAg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBzb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICBpZiAocG9pbnRBLnkgIT09IHBvaW50Qi55KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnRBLnkgLSBwb2ludEIueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRBLnggLSBwb2ludEIueDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDquLDspIAg7KKM7ZGcIOq4sOykgOycvOuhnCDsg4HrjIAg7KKM7ZGc66W8IOq1rO2VtOyEnCDsi5zqs4Qg67CY64yAIOuwqe2WpeycvOuhnCDsoJXroKztlanri4jri6QuXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydENjdyhwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAvLyDspJHsi6wg7KKM7ZGc7J24IOqyveyasCByZWxhdGl2ZVBvc2l0aW9uIOydtCDsl4bsirXri4jri6QuIOykkeyLrCDsooztkZzrpbwgMOuyiOycvOuhnCDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBpZiAoIXBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGEgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi55ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgYiA9IHBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uLnggKiBwb2ludEIucmVsYXRpdmVQb3NpdGlvbi55O1xuXG4gICAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29udmV4SHVsbC5zb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67CYIOyLnOqzhCDrsKntlqXsnbjsp4Ag7Jes67aAXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcGFyYW0gcG9pbnRDXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQ2N3KHBvaW50QSwgcG9pbnRCLCBwb2ludEMpIHtcbiAgICAgICAgLy8gY29uc3QgdHJpYW5nbGVBcmVhID0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpO1xuICAgICAgICBjb25zdCB0cmlhbmdsZUFyZWEgPSAgKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpO1xuICAgICAgICBpZiAodHJpYW5nbGVBcmVhID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z0FycmF5KGFycikge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYXJyLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJbaV0ueCwgYXJyW2ldLnkpO1xuICAgIH1cbn1cblxuXG4vKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTIgSnUgSHl1bmcgTGVlXG4qXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZVxuKiBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbiogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4qIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Jcbiogc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElOR1xuKiBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbiogREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIENyZWF0ZSB0aGUgY29udmV4IGh1bGwgdXNpbmcgdGhlIEdpZnQgd3JhcHBpbmcgYWxnb3JpdGhtXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dpZnRfd3JhcHBpbmdfYWxnb3JpdGhtXG5mdW5jdGlvbiBjcmVhdGVDb252ZXhIdWxsKHBvaW50cykge1xuICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICB2YXIgaTAgPSAwO1xuICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGh1bGwgPSBbXTtcbiAgICB2YXIgbSA9IDA7XG4gICAgdmFyIGloID0gaTA7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHIgPSB2ZWMyLnN1Yihwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIHYgPSB2ZWMyLnN1Yihwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICB2YXIgYyA9IHZlYzIuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aHNxKCkgPiByLmxlbmd0aHNxKCkpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtKys7XG4gICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvcHkgdmVydGljZXNcbiAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgbmV3UG9pbnRzLnB1c2gocG9pbnRzW2h1bGxbaV1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UG9pbnRzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vc3JjL2dqay9TaGFwZSc7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uLy4uL3NyYy9namsvQ29uc3RzJztcbmltcG9ydCBWZXJ0aWNlcyBmcm9tICcuLi8uLi9zcmMvZ2prL1ZlcnRpY2VzJztcbmltcG9ydCBDb252ZXhIdWxsIGZyb20gJy4uLy4uL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwnO1xuaW1wb3J0IE1pbmtvd3NraURpZmZlcmVuY2UgZnJvbSAnLi4vLi4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlJztcbmltcG9ydCBHamsgZnJvbSAnLi4vLi4vc3JjL2R5bjRqL0dqayc7XG5pbXBvcnQgQ29udmV4IGZyb20gJy4uLy4uL3NyYy9keW40ai9Db252ZXgnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc3JjL2R5bjRqL1BvbHlnb24nO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcIi4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZVwiO1xuaW1wb3J0IFBlbmV0cmF0aW9uIGZyb20gXCIuLi8uLi9zcmMvZHluNGovUGVuZXRyYXRpb25cIjtcblxuY29uc3QgVE9UQUwgPSAzMFxuICAgICwgSU5URVJWQUwgPSA2MDAwMDBcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFXG4gICAgLCBTVEFHRSA9IENvbnN0cy5TVEFHRVxuICAgICwgVE9QX0xFRlQgPSB7eDogMiwgeTogMn1cbiAgICAsIFRPUF9SSUdIVCA9IHt4OiAxNywgeTogMTd9XG4gICAgLCBSQURfVE9fREVHID0gMTgwIC8gTWF0aC5QSTtcblxuY29uc3QgdHJpYW5nbGVzID0gY3JlYXRlUG9seWdvbnMoMywgVE9UQUwpO1xuY29uc3QgcmVjdGFuZ2xlcyA9IGNyZWF0ZVBvbHlnb25zKDQsIFRPVEFMKTtcblxuLypjb25zdCB0cmlhbmdsZXMgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMywgNSksIG5ldyBWZWN0b3IoNiwgNCldLFxuICAgIFtuZXcgVmVjdG9yKDQsIDExKSwgbmV3IFZlY3Rvcig0LCA1KSwgbmV3IFZlY3Rvcig5LCA5KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoMCwgLTEpLCBuZXcgVmVjdG9yKDMsIDEpLCBuZXcgVmVjdG9yKDEsIDMpXSxcbl07XG5jb25zdCByZWN0YW5nbGVzID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDgsIDEpLCBuZXcgVmVjdG9yKDgsIDUpLCBuZXcgVmVjdG9yKDExLCA1KSwgbmV3IFZlY3RvcigxMSwgMSldLFxuICAgIFtuZXcgVmVjdG9yKDUsIDcpLCBuZXcgVmVjdG9yKDcsIDMpLCBuZXcgVmVjdG9yKDEwLCAyKSwgbmV3IFZlY3RvcigxMiwgNyldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDIsIC0yKSwgbmV3IFZlY3Rvcig1LCAtMSksIG5ldyBWZWN0b3IoNCwgMiksIG5ldyBWZWN0b3IoMSwgMSldLFxuXTsqL1xuXG5jb25zdCBlcnJvckNhc2UxID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDIsIDcpLCBuZXcgVmVjdG9yKDEyLCAzKSwgbmV3IFZlY3RvcigxMiwgMTcpXSxcbiAgICAvLyBbbmV3IFZlY3Rvcig4LCA4KSwgbmV3IFZlY3RvcigxMCwgNyksIG5ldyBWZWN0b3IoMTQsIDgpXSxcbiAgICBbbmV3IFZlY3RvcigxMCwgMTMpLCBuZXcgVmVjdG9yKDE0LCAxNSksIG5ldyBWZWN0b3IoMTEsIDE0KV0sXG5dO1xuXG5jb25zdCBlcnJvckNhc2UyID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDE0LCAyKSwgbmV3IFZlY3RvcigxNywgMiksIG5ldyBWZWN0b3IoMTQsIDcpLCBuZXcgVmVjdG9yKDksIDcpXSxcbiAgICAvLyBbbmV3IFZlY3Rvcig3LCA1KSwgbmV3IFZlY3RvcigxNSwgMTApLCBuZXcgVmVjdG9yKDE2LCAxMSksIG5ldyBWZWN0b3IoMTUsIDE0KV0sXG4gICAgW25ldyBWZWN0b3IoOSwgOCksIG5ldyBWZWN0b3IoMTQsIDE1KSwgbmV3IFZlY3Rvcig0LCAxNSksIG5ldyBWZWN0b3IoMywgMTIpXSxcbl07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci52aWV3O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q29sbGlzaW9uID0gdGhpcy5kaXNwbGF5Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICB0aGlzLmtleVVwTGlzdGVuZXIgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcExpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Q29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoc2hhcGUpO1xuICAgICAgICAgICAgc2hhcGUuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNoYXBlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnNoYXBlcyA9IFtdO1xuXG4gICAgICAgIGlmICghdGhpcy5taW5rb3dza2kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWlua293c2tpKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKCkge1xuICAgICAgICAvKmNvbnN0IGluZGV4MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRyaWFuZ2xlcy5sZW5ndGgpXG4gICAgICAgICAgICAsIGluZGV4MiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlY3RhbmdsZXMubGVuZ3RoKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczEgPSBuZXcgVmVydGljZXModHJpYW5nbGVzW2luZGV4MV0pXG4gICAgICAgICAgICAsIHZlcnRpY2VzMiA9IG5ldyBWZXJ0aWNlcyhyZWN0YW5nbGVzW2luZGV4Ml0pOyovXG5cbiAgICAgICAgY29uc3QgaW5kZXgxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXJyb3JDYXNlMS5sZW5ndGgpXG4gICAgICAgICAgICAsIGluZGV4MiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVycm9yQ2FzZTIubGVuZ3RoKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczEgPSBuZXcgVmVydGljZXMoZXJyb3JDYXNlMVtpbmRleDFdKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczIgPSBuZXcgVmVydGljZXMoZXJyb3JDYXNlMltpbmRleDJdKTtcblxuICAgICAgICB2ZXJ0aWNlczEubXVsdGlwbHkoU0NBTEUpO1xuICAgICAgICB2ZXJ0aWNlczIubXVsdGlwbHkoU0NBTEUpO1xuXG4gICAgICAgIGNvbnN0IHNoYXBlMSA9IG5ldyBTaGFwZSh2ZXJ0aWNlczEudmVydGljZXMsIFNDQUxFKVxuICAgICAgICAgICAgLCBzaGFwZTIgPSBuZXcgU2hhcGUodmVydGljZXMyLnZlcnRpY2VzLCBTQ0FMRSk7XG4gICAgICAgIHRoaXMubWlua293c2tpID0gbmV3IE1pbmtvd3NraURpZmZlcmVuY2UodmVydGljZXMxLnZlcnRpY2VzLCB2ZXJ0aWNlczIudmVydGljZXMpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS54ID0gKFNUQUdFLndpZHRoIC8gMykgKiAyO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS55ID0gKFNUQUdFLmhlaWdodCAvIDMpICogMjtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKHNoYXBlMSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2hhcGUyKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pbmtvd3NraSk7XG5cbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZTEpO1xuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlMik7XG5cbiAgICAgICAgdmVydGljZXMxLmRpdmlkZShTQ0FMRSk7XG4gICAgICAgIHZlcnRpY2VzMi5kaXZpZGUoU0NBTEUpO1xuXG4gICAgICAgIGNvbnN0IHBvbHlnb24xID0gbmV3IFBvbHlnb24odmVydGljZXMxLnZlcnRpY2VzKVxuICAgICAgICAgICAgLCBwb2x5Z29uMiA9IG5ldyBQb2x5Z29uKHZlcnRpY2VzMi52ZXJ0aWNlcyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3BvbHlnb24xJywgcG9seWdvbjEpO1xuICAgICAgICBjb25zb2xlLmxvZygncG9seWdvbjInLCBwb2x5Z29uMik7XG5cblxuICAgICAgICBjb25zdCBnamsgPSBuZXcgR2prKClcbiAgICAgICAgICAgICwgcGVuZXRyYXRpb24gPSBuZXcgUGVuZXRyYXRpb24oKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlzQ29sbGlzaW9uID0gZ2prLmRldGVjdChwb2x5Z29uMSwgcG9seWdvbjIsIHBlbmV0cmF0aW9uKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnaXNDb2xsaXNpb24nLCBpc0NvbGxpc2lvbik7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5Q29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuZGlzcGxheUNvbGxpc2lvbiwgSU5URVJWQUwpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bigpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgb25LZXlVcChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiDrkZDrsqHthLAg7IKs7J206rCBIOq1rO2VmOq4sFxuICogQHBhcmFtIGFcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRBbmdsZShhLCBiKSB7XG4gICAgYSA9IG5ldyBWZWN0b3IoYS54LCBhLnkpLm5vcm0oKTtcbiAgICBiID0gbmV3IFZlY3RvcihiLngsIGIueSkubm9ybSgpO1xuICAgIGNvbnN0IHJhZGlhbiA9IE1hdGguYWNvcyhWZWN0b3IuZG90UHJvZHVjdChhLCBiKSk7XG4gICAgcmV0dXJuIHJhZGlhbiAqIFJBRF9UT19ERUc7XG59XG5cblxuLyoqXG4gKiDrnpzrjaTsnLzroZwg7KKM7ZGc66W8IOyDneyEse2VmOqzoCBjb252ZXggaHVsbCDsnYQg66eM65Ok66m0IE9LXG4gKiBAcGFyYW0gcG9seWdvblxuICogQHBhcmFtIHRvdGFsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvbHlnb25zKHBvbHlnb24sIHRvdGFsKSB7XG4gICAgbGV0IHZlcnRpY2VzO1xuICAgIGNvbnN0IHBvbHlnb25zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvbHlnb247IGorKykge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVjdG9yLnJhbmRvbWl6ZShUT1BfTEVGVCwgVE9QX1JJR0hUKTtcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2godmVydGV4KTtcblxuICAgICAgICAgICAgaWYgKGogPT09IHBvbHlnb24gLSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udmV4SHVsbCA9IENvbnZleEh1bGwuZ2VuZXJhdGUodmVydGljZXMpO1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gY29udmV4SHVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBvbHlnb25zLnB1c2godmVydGljZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBwb2x5Z29ucztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvZXBhL1Rlc3QuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uL2dqay9Db25zdHMnO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYXN0ZWxDb2xvcic7XG5cbmNvbnN0IEZPTlRfU0laRSA9ICc5cHgnXG4gICAgLCBTQ0FMRSA9IENvbnN0cy5TQ0FMRTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMgPSBbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBjb2xvciA9IFBhc3RlbENvbG9yLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICAgICAgdGhpcy5saW5lQ29sb3IgPSBjb2xvci5oZXg7XG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gY29sb3IuaGV4U2hhcDtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgICAgIHRoaXMubGFiZWxzID0gdGhpcy5jcmVhdGVMYWJlbCgpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBuZXcgUElYSS5UZXh0KGksIHtcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZm9udDogRk9OVF9TSVpFLFxuICAgICAgICAgICAgICAgIGZpbGw6IHRoaXMudGV4dENvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0ZXh0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxhYmVscy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWxzO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzXG4gICAgICAgICAgICAsIHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlc1xuICAgICAgICAgICAgLCBvcmlnaW4gPSB2ZXJ0aWNlc1swXTtcblxuICAgICAgICBnLmNsZWFyKCk7XG4gICAgICAgIGcubGluZVN0eWxlKDEsIHRoaXMubGluZUNvbG9yLCAwLjUpO1xuICAgICAgICBnLm1vdmVUbyhvcmlnaW4ueCwgb3JpZ2luLnkpO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBnLmxpbmVUbyh2ZXJ0ZXgueCwgdmVydGV4LnkpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsc1tpbmRleF1cbiAgICAgICAgICAgICAgICAsIHZlYyA9IFZlY3Rvci5kaXZpZGVTY2FsYXIodmVydGV4LCBTQ0FMRSk7XG5cbiAgICAgICAgICAgIGxhYmVsLnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIGxhYmVsLnkgPSB2ZXJ0ZXgueTtcblxuICAgICAgICAgICAgbGFiZWwudGV4dCA9IGAoJHt2ZWMueH0sJHt2ZWMueX0pYDtcbiAgICAgICAgICAgIGxhYmVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZy5saW5lVG8ob3JpZ2luLngsIG9yaWdpbi55KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubGFiZWxzLmZvckVhY2goKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGxhYmVsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sYWJlbHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBudWxsO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9TaGFwZS5qcyIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHMge1xuICAgIHN0YXRpYyBnZXQgU0NBTEUoKSB7XG4gICAgICAgIHJldHVybiAxNDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNUQUdFKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSB7eDogMCwgeTogMCwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA2MDB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWdlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL0NvbnN0cy5qcyIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNlcyB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMgPSBbXSkge1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgfVxuXG4gICAgbXVsdGlwbHkoc2NhbGFyKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICB2ZXJ0ZXgueCAqPSBzY2FsYXI7XG4gICAgICAgICAgICB2ZXJ0ZXgueSAqPSBzY2FsYXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpdmlkZShzY2FsYXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRleC54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHZlcnRleC55IC89IHNjYWxhcjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9WZXJ0aWNlcy5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL1BvaW50JztcbmltcG9ydCBDb252ZXhIdWxsIGZyb20gJy4uL2NvbnZleGh1bGwvQ29udmV4SHVsbCc7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vdXRpbHMvUGFzdGVsQ29sb3InO1xuaW1wb3J0IENvbnN0cyBmcm9tICcuLi9namsvQ29uc3RzJztcblxuXG5jb25zdCBTQ0FMRSA9IENvbnN0cy5TQ0FMRVxuICAgICwgU1RBR0UgPSBDb25zdHMuU1RBR0VcbiAgICAsIEZPTlRfQ09MT1IgPSAnI0ZGRkZGRidcbiAgICAsIEFYRVNfTElORV9DT0xPUiA9ICcweEZGRkZGRidcbiAgICAsIENPTlZFWF9IVUxMX0xJTkVfQ09MT1IgPSBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5rb3dza2lEaWZmZXJlbmNlIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7XG5cbiAgICAgICAgY29uc3QgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgICAgICAgICAgLCBjb252ZXhIdWxsID0gdGhpcy5jb252ZXhIdWxsID0gQ29udmV4SHVsbC5nZW5lcmF0ZSh2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdGhpcy50ZXh0cyA9IFtdO1xuICAgICAgICB0aGlzLmRyYXdBeGVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1ZldGljZXModmVydGljZXMpO1xuICAgICAgICB0aGlzLmRyYXdQb2x5Z29uKGNvbnZleEh1bGwpO1xuICAgIH1cblxuICAgIGRyYXdWZXRpY2VzKHZlcnRpY2VzKSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgUG9pbnQodmVydGV4LngsIHZlcnRleC55LCAzLCBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleCk7XG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQocG9pbnQpO1xuXG4gICAgICAgICAgICBjb25zdCB2ZWMgPSBWZWN0b3IuZGl2aWRlU2NhbGFyKHZlcnRleCwgU0NBTEUpO1xuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChgKCR7dmVjLnh9LCAke3ZlYy55fSlgLCBwb2ludC52ZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3UG9seWdvbih2ZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFwaGljcztcblxuICAgICAgICBnLmxpbmVTdHlsZSgxLCBDT05WRVhfSFVMTF9MSU5FX0NPTE9SLCAwLjUpO1xuICAgICAgICBnLm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7IGcubGluZVRvKHZlcnRleC54LCB2ZXJ0ZXgueSk7fSk7XG4gICAgICAgIGcubGluZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICAgIH1cblxuICAgIGRyYXdBeGVzKCkge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFwaGljc1xuICAgICAgICAgICAgLCBodyA9IFNUQUdFLndpZHRoIC8gMlxuICAgICAgICAgICAgLCBoaCA9IFNUQUdFLmhlaWdodCAvIDI7XG5cbiAgICAgICAgZy5saW5lU3R5bGUoMSwgQVhFU19MSU5FX0NPTE9SLCAwLjUpO1xuICAgICAgICBnLm1vdmVUbygtaHcsIDApO1xuICAgICAgICBnLmxpbmVUbyhodywgMCk7XG4gICAgICAgIGcubW92ZVRvKDAsIC1oaCk7XG4gICAgICAgIGcubGluZVRvKDAsIGhoKTtcbiAgICB9XG5cbiAgICBkcmF3VGV4dCh0ZXh0LCB2ZXJ0ZXggPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBuZXcgUElYSS5UZXh0KHRleHQsIHtcbiAgICAgICAgICAgIGZvbnQ6ICcyMHB4JyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGZpbGw6IEZPTlRfQ09MT1JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGFiZWwueCA9IHZlcnRleC54O1xuICAgICAgICBsYWJlbC55ID0gdmVydGV4Lnk7XG4gICAgICAgIHRoaXMudGV4dHMucHVzaChsYWJlbCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQobGFiZWwpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy50ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7XG4gICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQocG9pbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgIH1cblxuICAgIGdldFZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gW107XG4gICAgICAgIHZlcnRpY2VzMS5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNlczIuZm9yRWFjaCgoYikgPT4ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goVmVjdG9yLnN1YnRyYWN0KGEsIGIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgRXBzaWxvbiBmcm9tICcuL0Vwc2lsb24nO1xuaW1wb3J0IE1pbmtvd3NraVN1bSBmcm9tICcuL01pbmtvd3NraVN1bSc7XG5cbmNvbnN0IERFRkFVTFRfTUFYX0lURVJBVElPTlMgPSAzMDtcbmNvbnN0IERFRkFVTFRfREVURUNUX0VQU0lMT04gPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHamsge1xuICAgIGNvbnN0cnVjdG9yKG1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyKSB7XG4gICAgICAgIHRoaXMubWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXIgPSBtaW5rb3dza2lQZW5ldHJhdGlvblNvbHZlcjtcbiAgICB9XG5cbiAgICBnZXRJbml0aWFsRGlyZWN0aW9uKGNvbnZleDEsIGNvbnZleDIpIHtcbiAgICAgICAgLy8gdHJhbnNmb3JtIGludG8gd29ybGQgc3BhY2UgaWYgdHJhbnNmb3JtIGlzIG5vdCBudWxsXG4gICAgICAgIGNvbnN0IGMxID0gY29udmV4MS5nZXRDZW50ZXIoKTtcbiAgICAgICAgY29uc3QgYzIgPSBjb252ZXgyLmdldENlbnRlcigpO1xuICAgICAgICAvLyBjaG9vc2Ugc29tZSBzZWFyY2ggZGlyZWN0aW9uXG4gICAgICAgIHJldHVybiBjMi5zdWJ0cmFjdChjMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udmV4MSB7Q29udmV4fVxuICAgICAqIEBwYXJhbSBjb252ZXgyIHtDb252ZXh9XG4gICAgICogQHBhcmFtIHBlbmV0cmF0aW9uIHtQZW5ldHJhaW9ufVxuICAgICAqL1xuICAgIGRldGVjdChjb252ZXgxLCBjb252ZXgyLCBwZW5ldHJhdGlvbikge1xuICAgICAgICBjb25zdCBzaW1wbGV4ID0gW107XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgTWlua293c2tpIHN1bVxuICAgICAgICBjb25zdCBtcyA9IG5ldyBNaW5rb3dza2lTdW0oY29udmV4MSwgY29udmV4Mik7XG5cbiAgICAgICAgLy8gY2hvb3NlIHNvbWUgc2VhcmNoIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldEluaXRpYWxEaXJlY3Rpb24oY29udmV4MSwgY29udmV4Mik7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21zJywgbXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnZGlyZWN0aW9uJywgZGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBwZXJmb3JtIHRoZSBkZXRlY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0Mihtcywgc2ltcGxleCwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpbXBsZXgnLCBzaW1wbGV4KTtcbiAgICAgICAgICAgIC8vIHRoaXMubWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXIuZ2V0UGVuZXRyYXRpb24oc2ltcGxleCwgbXMsIHBlbmV0cmF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG1zIHtNaW5rb3dza2lTdW19XG4gICAgICogQHBhcmFtIHNpbXBsZXgge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXRlY3QyKG1zLCBzaW1wbGV4LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RlY3RlYzInLCBtcywgc2ltcGxleCwgZGlyZWN0aW9uKTtcbiAgICAgICAgLy8gY2hlY2sgZm9yIGEgemVybyBkaXJlY3Rpb24gdmVjdG9yXG4gICAgICAgIGlmIChkaXJlY3Rpb24uaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoMSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHRoZSBmaXJzdCBwb2ludFxuICAgICAgICBzaW1wbGV4WzBdID0gbXMuZ2V0U3VwcG9ydFBvaW50KGRpcmVjdGlvbik7XG4gICAgICAgIC8vIGlzIHRoZSBzdXBwb3J0IHBvaW50IHBhc3QgdGhlIG9yaWdpbiBhbG9uZyBkP1xuICAgICAgICBpZiAoc2ltcGxleFswXS5kb3QoZGlyZWN0aW9uKSA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2FzZSAxJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmVnYXRlIHRoZSBzZWFyY2ggZGlyZWN0aW9uXG4gICAgICAgIGRpcmVjdGlvbi5pbnZlcnQoKTtcbiAgICAgICAgLy8gc3RhcnQgdGhlIGxvb3BcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUZBVUxUX01BWF9JVEVSQVRJT05TOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGFsd2F5cyBhZGQgYW5vdGhlciBwb2ludCB0byB0aGUgc2ltcGxleCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsb29wXG4gICAgICAgICAgICBzaW1wbGV4LnB1c2gobXMuZ2V0U3VwcG9ydFBvaW50KGRpcmVjdGlvbikpO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIGxhc3QgcG9pbnQgd2UgYWRkZWQgd2FzIHBhc3QgdGhlIG9yaWdpblxuICAgICAgICAgICAgY29uc29sZS5sb2coc2ltcGxleC5sZW5ndGgsIHNpbXBsZXhbc2ltcGxleC5sZW5ndGggLSAxXS5kb3QoZGlyZWN0aW9uKSk7XG4gICAgICAgICAgICBpZiAoc2ltcGxleFtzaW1wbGV4Lmxlbmd0aCAtIDFdLmRvdChkaXJlY3Rpb24pIDw9IERFRkFVTFRfREVURUNUX0VQU0lMT04pIHtcbiAgICAgICAgICAgICAgICAvLyBhIGlzIG5vdCBwYXN0IHRoZSBvcmlnaW4gc28gdGhlcmVmb3JlIHRoZSBzaGFwZXMgZG8gbm90IGludGVyc2VjdFxuICAgICAgICAgICAgICAgIC8vIGhlcmUgd2UgdHJlYXQgdGhlIG9yaWdpbiBvbiB0aGUgbGluZSBhcyBubyBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBpbW1lZGlhdGVseSByZXR1cm4gd2l0aCBudWxsIGluZGljYXRpbmcgbm8gcGVuZXRyYXRpb25cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FzZSAyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyBwYXN0IHRoZSBvcmlnaW4sIHRoZW4gdGVzdCB3aGV0aGVyIHRoZSBzaW1wbGV4IGNvbnRhaW5zIHRoZSBvcmlnaW5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1NpbXBsZXgoc2ltcGxleCwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc2ltcGxleCBjb250YWlucyB0aGUgb3JpZ2luIHRoZW4gd2Uga25vdyB0aGF0IHRoZXJlIGlzIGFuIGludGVyc2VjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgYnJva2Ugb3V0IG9mIHRoZSBsb29wIHRoZW4gd2Uga25vdyB0aGVyZSB3YXMgYW4gaW50ZXJzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzaW1wbGV4IGRvZXMgbm90IGNvbnRhaW4gdGhlIG9yaWdpbiB0aGVuIHdlIG5lZWQgdG8gbG9vcCB1c2luZyB0aGUgbmV3XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIGRpcmVjdGlvbiBhbmQgc2ltcGxleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXNlIDMnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc2ltcGxleCBjb250YWlucyB0aGUgb3JpZ2luLiAgSWYgaXQgZG9lcyBjb250YWluIHRoZSBvcmlnaW4sXG4gICAgICogdGhlbiB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0cnVlLiAgSWYgaXQgZG9lcyBub3QsIHRoaXMgbWV0aG9kIHdpbGwgdXBkYXRlIGJvdGggdGhlIGdpdmVuXG4gICAgICogc2ltcGxleCBhbmQgYWxzbyB0aGUgZ2l2ZW4gc2VhcmNoIGRpcmVjdGlvbi5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIG1ldGhvZCBvbmx5IGhhbmRsZXMgdGhlIGxpbmUgc2VnbWVudCBhbmQgdHJpYW5nbGUgc2ltcGxleCBjYXNlcywgaG93ZXZlciwgdGhlc2UgdHdvIGNhc2VzXG4gICAgICogc2hvdWxkIGJlIHRoZSBvbmx5IG9uZXMgbmVlZGVkIGZvciAyIGRpbWVuc2lvbmFsIHtAbGluayBHamt9LiAgVGhlIHNpbmdsZSBwb2ludCBjYXNlIGlzIGhhbmRsZWRcbiAgICAgKiBpbiB7QGxpbmsgI2RldGVjdChNaW5rb3dza2lTdW0sIExpc3QsIFZlY3RvcjIpfS5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIG1ldGhvZCBhbHNvIGFzc3VtZXMgdGhhdCB0aGUgbGFzdCBwb2ludCBpbiB0aGUgc2ltcGxleCBpcyB0aGUgbW9zdCByZWNlbnRseSBhZGRlZCBwb2ludC5cbiAgICAgKiBUaGlzIG1hdHRlcnMgYmVjYXVzZSBvcHRpbWl6YXRpb25zIGFyZSBhdmFpbGFibGUgd2hlbiB5b3Uga25vdyB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2hlY2tTaW1wbGV4KHNpbXBsZXgsIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tTaW1wbGV4Jywgc2ltcGxleC5sZW5ndGgsIHNpbXBsZXgsIGRpcmVjdGlvbik7XG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIHNob3VsZCBuZXZlciBiZSBzdXBwbGllZCBhbnl0aGluZyBvdGhlciB0aGFuIDIgb3IgMyBwb2ludHMgZm9yIHRoZSBzaW1wbGV4XG4gICAgICAgIC8vIGdldCB0aGUgbGFzdCBwb2ludCBhZGRlZCAoYSlcbiAgICAgICAgY29uc3QgYSA9IHNpbXBsZXhbc2ltcGxleC5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBhLnRvKE9SSUdJTik7XG4gICAgICAgIGNvbnN0IGFvID0gVmVjdG9yLm5lZ2F0ZShhKTtcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIHdoYXQgdHlwZSBvZiBzaW1wbGV4IHdlIGhhdmVcbiAgICAgICAgaWYgKHNpbXBsZXgubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIC8vIHRoZW4gd2UgaGF2ZSBhIHRyaWFuZ2xlXG4gICAgICAgICAgICBjb25zdCBiID0gc2ltcGxleFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGMgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBlZGdlc1xuICAgICAgICAgICAgY29uc3QgYWIgPSBhLnRvKGIpO1xuICAgICAgICAgICAgY29uc3QgYWMgPSBhLnRvKGMpO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBlZGdlIG5vcm1hbFxuICAgICAgICAgICAgY29uc3QgYWNQZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFjLCBhYyk7XG4gICAgICAgICAgICAvLyBzZWUgd2hlcmUgdGhlIG9yaWdpbiBpcyBhdFxuICAgICAgICAgICAgY29uc3QgYWNMb2NhdGlvbiA9IGFjUGVycC5kb3QoYW8pO1xuICAgICAgICAgICAgaWYgKGFjTG9jYXRpb24gPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgcmlnaHQgc2lkZSBvZiBBLT5DXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiB0aGUgY29uZGl0aW9uIGZvciB0aGUgZ2prIGxvb3AgdG8gY29udGludWUgdGhlIG9yaWdpblxuICAgICAgICAgICAgICAgIC8vIG11c3QgbGllIGJldHdlZW4gQSBhbmQgQyBzbyByZW1vdmUgQiBhbmQgc2V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIG5ldyBzZWFyY2ggZGlyZWN0aW9uIHRvIEEtPkMgcGVycGVuZGljdWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKiogc2ltcGxleCcsIHNpbXBsZXgpO1xuICAgICAgICAgICAgICAgIHNpbXBsZXguc3BsaWNlKDEsIDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqIHNpbXBsZXgnLCBzaW1wbGV4KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHVzZWQgdG8gYmUgZGlyZWN0aW9uLnNldChWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYW8sIGFjKSk7XG4gICAgICAgICAgICAgICAgLy8gYnV0IHdhcyBjaGFuZ2VkIHNpbmNlIHRoZSBvcmlnaW4gbWF5IGxpZSBvbiB0aGUgc2VnbWVudCBjcmVhdGVkXG4gICAgICAgICAgICAgICAgLy8gYnkgYSAtPiBjIGluIHdoaWNoIGNhc2Ugd291bGQgcHJvZHVjZSBhIHplcm8gdmVjdG9yIG5vcm1hbFxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0aW5nIGFjJ3Mgbm9ybWFsIHVzaW5nIGIgaXMgbW9yZSByb2J1c3RcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24uc2V0KGFjUGVycCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFiUGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFjLCBhYiwgYWIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFiTG9jYXRpb24gPSBhYlBlcnAuZG90KGFvKTtcbiAgICAgICAgICAgICAgICAvLyB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIGxlZnQgc2lkZSBvZiBBLT5DXG4gICAgICAgICAgICAgICAgaWYgKGFiTG9jYXRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgcmlnaHQgc2lkZSBvZiBBLT5CIGFuZCB0aGVyZWZvcmUgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyaWFuZ2xlLCB3ZSBoYXZlIGFuIGludGVyc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgb3JpZ2luIGxpZXMgYmV0d2VlbiBBIGFuZCBCIHNvIHJlbW92ZSBDIGFuZCBzZXQgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaCBkaXJlY3Rpb24gdG8gQS0+QiBwZXJwZW5kaWN1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMgc2ltcGxleCcsIHNpbXBsZXgpO1xuICAgICAgICAgICAgICAgICAgICBzaW1wbGV4LnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyMjIyMgc2ltcGxleCcsIHNpbXBsZXgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHVzZWQgdG8gYmUgZGlyZWN0aW9uLnNldChWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3YXMgY2hhbmdlZCBzaW5jZSB0aGUgb3JpZ2luIG1heSBsaWUgb24gdGhlIHNlZ21lbnQgY3JlYXRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBieSBhIC0+IGIgaW4gd2hpY2ggY2FzZSB3b3VsZCBwcm9kdWNlIGEgemVybyB2ZWN0b3Igbm9ybWFsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0aW5nIGFiJ3Mgbm9ybWFsIHVzaW5nIGMgaXMgbW9yZSByb2J1c3RcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLnNldChhYlBlcnApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgYiBwb2ludFxuICAgICAgICAgICAgY29uc3QgYiA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBjb25zdCBhYiA9IGEudG8oYik7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2Ugd2UgaGF2ZSAyIHBvaW50cyAobGluZSBzZWdtZW50KVxuICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiB0aGUgY29uZGl0aW9uIGZvciB0aGUgZ2prIGxvb3AgdG8gY29udGludWUgdGhlIG9yaWdpblxuICAgICAgICAgICAgLy8gbXVzdCBsaWUgaW4gYmV0d2VlbiBBIGFuZCBCLCBzbyBrZWVwIGJvdGggcG9pbnRzIGluIHRoZSBzaW1wbGV4IGFuZFxuICAgICAgICAgICAgLy8gc2V0IHRoZSBkaXJlY3Rpb24gdG8gdGhlIHBlcnAgb2YgdGhlIGxpbmUgc2VnbWVudCB0b3dhcmRzIHRoZSBvcmlnaW5cbiAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYikpO1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGRlZ2VuZXJhdGUgY2FzZXMgd2hlcmUgdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSBzZWdtZW50XG4gICAgICAgICAgICAvLyBjcmVhdGVkIGJ5IGEgLT4gYiB3aGljaCB3aWxsIHlpZWxkIGEgemVybyBlZGdlIG5vcm1hbFxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi5nZXRNYWduaXR1ZGVTcXVhcmVkKCkgPD0gRXBzaWxvbi5FKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIGp1c3QgY2hvb3NlIGVpdGhlciBub3JtYWwgKGxlZnQgb3IgcmlnaHQpXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLnNldChhYi5sZWZ0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0dqay5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uIHtcblxuICAgIHN0YXRpYyBnZXQgRSgpIHtcbiAgICAgICAgcmV0dXJuIEVwc2lsb24uY29tcHV0ZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb21wdXRlKCkge1xuICAgICAgICBsZXQgZSA9IDAuNTtcbiAgICAgICAgd2hpbGUgKDEuMCArIGUgPiAxLjApIHtcbiAgICAgICAgICAgIGUgKj0gMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovRXBzaWxvbi5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5rb3dza2lTdW0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbnZleDEg7Lap64+MIOyytO2BrO2VoCDrj4TtmJUgMVxuICAgICAqIEBwYXJhbSBjb252ZXgyIOy2qeuPjCDssrTtgaztlaAg64+E7ZiVIDJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb252ZXgxLCBjb252ZXgyKSB7XG4gICAgICAgIHRoaXMuY29udmV4MSA9IGNvbnZleDE7XG4gICAgICAgIHRoaXMuY29udmV4MiA9IGNvbnZleDI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3VwcG9ydFBvaW50IOulvCDqtaztlanri4jri6QuICjsi6ztlIzroInsiqQg66eM65Ok6riwKVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBnZXRTdXBwb3J0UG9pbnQoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGdldCB0aGUgZmFydGhlc3QgcG9pbnQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiBpbiBjb252ZXgxXG4gICAgICAgIGNvbnN0IHBvaW50MSA9IHRoaXMuY29udmV4MS5nZXRGYXJ0aGVzdFBvaW50KGRpcmVjdGlvbik7XG4gICAgICAgIC8vIGdldCB0aGUgZmFydGhlc3QgcG9pbnQgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiBpbiBjb252ZXgyXG4gICAgICAgIGNvbnN0IHBvaW50MiA9IHRoaXMuY29udmV4Mi5nZXRGYXJ0aGVzdFBvaW50KFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSk7XG4gICAgICAgIC8vIHJldHVybiB0aGUgTWlua293c2tpIHN1bSBwb2ludFxuICAgICAgICByZXR1cm4gcG9pbnQxLnN1YnRyYWN0KHBvaW50Mik7XG4gICAgfVxuXG4gICAgZ2V0Q29udmV4MSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmV4MTtcbiAgICB9XG5cbiAgICBnZXRDb252ZXgyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXgyO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovTWlua293c2tpU3VtLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZleCB7XG5cbiAgICAvKipcbiAgICAgKiDrsKntlqXsl5DshJwg6rCA7J6lIOuovCDrsqHthLDsnZgg7J24642x7IqkIChGZWF0dXJlKeulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqL1xuICAgIGdldEZhcnRoZXN0RmVhdHVyZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQ29udmV4XSBpbXBsbWVudHMgZ2V0RmFydGhlc3RGZWF0dXJlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67Cp7Zal7JeQ7IScIOqwgOyepSDrqLwg7Y+s7J247Yq466W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICovXG4gICAgZ2V0RmFydGhlc3RQb2ludChkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQ29udmV4XSBpbXBsbWVudHMgZ2V0RmFydGhlc3RQb2ludCcpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovQ29udmV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBDb252ZXggZnJvbSAnLi9Db252ZXgnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEdlb21ldHJ5IGZyb20gJy4vR2VvbWV0cnknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBDb252ZXgge1xuXG4gICAgLyoqXG4gICAgICog7Y+066as6rOkXG4gICAgICogQHBhcmFtIGNlbnRlciB7VmVjdG9yfVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIG5vcm1hbHMge1ZlY3RvcltdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzID0gW10sIG5vcm1hbHMgPSBbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgICAgIHRoaXMubm9ybWFscyA9ICh2ZXJ0aWNlcy5sZW5ndGggIT09IDApID9cbiAgICAgICAgICAgIEdlb21ldHJ5LmdldENvdW50ZXJDbG9ja3dpc2VFZGdlTm9ybWFscyh2ZXJ0aWNlcykgOiBub3JtYWxzO1xuICAgICAgICB0aGlzLmNlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0Q2VudGVyKCkge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG4gICAgICAgICAgICAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgYXZnLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2Zy55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhdmcueCAvPSBjb3VudDtcbiAgICAgICAgYXZnLnkgLz0gY291bnQ7XG4gICAgICAgIHJldHVybiBhdmc7XG4gICAgfVxuXG4gICAgZ2V0RmFydGhlc3RQb2ludChkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIC8vIHNldCB0aGUgZmFydGhlc3QgcG9pbnQgdG8gdGhlIGZpcnN0IG9uZVxuICAgICAgICBwb2ludC5zZXQodGhpcy52ZXJ0aWNlc1swXSk7XG4gICAgICAgIC8vIHByaW1lIHRoZSBwcm9qZWN0aW9uIGFtb3VudFxuICAgICAgICBsZXQgbWF4ID0gZGlyZWN0aW9uLmRvdCh0aGlzLnZlcnRpY2VzWzBdKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gZGlyZWN0aW9uLmRvdCh2ZXJ0ZXgpO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdGlvbiA+IG1heCkge1xuICAgICAgICAgICAgICAgIHBvaW50LnNldCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRoZSBuZXcgbWF4aW11bVxuICAgICAgICAgICAgbWF4ID0gcHJvamVjdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgIH1cblxuICAgIGdldEZhcnRoZXN0RmVhdHVyZShkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgbWF4aW11bSA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgbGV0IG1heCA9IC1OdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHZlcnRleFxuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgc2NhbGFyIHByb2plY3Rpb24gb2YgdiBvbnRvIGF4aXNcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBkaXJlY3Rpb24uZG90KHZlcnRleCk7XG4gICAgICAgICAgICAvLyBrZWVwIHRoZSBtYXhpbXVtIHByb2plY3Rpb24gcG9pbnRcbiAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBtYXggcG9pbnRcbiAgICAgICAgICAgICAgICBtYXhpbXVtLnNldCh2KTtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIG5ldyBtYXhpbXVtXG4gICAgICAgICAgICAgICAgbWF4ID0gcHJvamVjdGlvbjtcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpbmRleFxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9uY2Ugd2UgaGF2ZSB0aGUgcG9pbnQgb2YgbWF4aW11bVxuICAgICAgICAvLyBzZWUgd2hpY2ggZWRnZSBpcyBtb3N0IHBlcnBlbmRpY3VsYXJcbiAgICAgICAgY29uc3QgbCA9IGluZGV4ICsgMSA9PSBjb3VudCA/IDAgOiBpbmRleCArIDE7XG4gICAgICAgIGNvbnN0IHIgPSBpbmRleCAtIDEgPCAwID8gY291bnQgLSAxIDogaW5kZXggLSAxO1xuXG4gICAgICAgIGNvbnN0IGxlZnROID0gdGhpcy5ub3JtYWxzW2luZGV4ID09IDAgPyBjb3VudCAtIDEgOiBpbmRleCAtIDFdO1xuICAgICAgICBjb25zdCByaWdodE4gPSB0aGlzLm5vcm1hbHNbaW5kZXhdO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIG1heGltdW0gcG9pbnQgZm9yIHRoZSBmZWF0dXJlICh0cmFuc2Zvcm0gdGhlIG1heGltdW0gaW50byB3b3JsZCBzcGFjZSlcbiAgICAgICAgY29uc3Qgdm0gPSBuZXcgUG9pbnRGZWF0dXJlKG1heGltdW0sIGluZGV4KTtcbiAgICAgICAgLy8gaXMgdGhlIGxlZnQgb3IgcmlnaHQgZWRnZSBtb3JlIHBlcnBlbmRpY3VsYXI/XG4gICAgICAgIGlmIChsZWZ0Ti5kb3QoZGlyZWN0aW9uKSA8IHJpZ2h0Ti5kb3QoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMudmVydGljZXNbbF07XG4gICAgICAgICAgICBjb25zdCB2bCA9IG5ldyBQb2ludEZlYXR1cmUobGVmdCwgbCk7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGVkZ2UgaXMgdGhlIHJpZ2h0IHdpbmRpbmdcbiAgICAgICAgICAgIHJldHVybiBuZXcgRWRnZUZlYXR1cmUodm0sIHZsLCB2bSwgbWF4aW11bS50byhsZWZ0KSwgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy52ZXJ0aWNlc1tyXTtcbiAgICAgICAgY29uc3QgdnIgPSBuZXcgUG9pbnRGZWF0dXJlKHJpZ2h0LCByKTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBlZGdlIGlzIHRoZSByaWdodCB3aW5kaW5nXG4gICAgICAgIHJldHVybiBuZXcgRWRnZUZlYXR1cmUodnIsIHZtLCB2bSwgcmlnaHQudG8obWF4aW11bSksIGluZGV4KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL1BvbHlnb24uanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvbWV0cnkge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBub3JtYWxpemVkIHZlY3RvcnMgcmVwcmVzZW50aW5nIHRoZSBub3JtYWxzIG9mIGFsbCB0aGVcbiAgICAgKiBlZGdlcyBnaXZlbiB0aGUgdmVydGljZXMuXG4gICAgICogPHA+XG4gICAgICogVGhpcyBtZXRob2QgYXNzdW1lcyBjb3VudGVyLWNsb2Nrd2lzZSBvcmRlcmluZy5cbiAgICAgKiA8cD5cbiAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIHZlcnRpY2VzIGFycmF5IGlzIG51bGwgb3IgZW1wdHkuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q291bnRlckNsb2Nrd2lzZUVkZ2VOb3JtYWxzKHZlcnRpY2VzKSB7XG4gICAgICAgIGlmICh2ZXJ0aWNlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpemUgPSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbHMgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVkZ2UgcG9pbnRzXG4gICAgICAgICAgICBjb25zdCBwMSA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgY29uc3QgcDIgPSAoaSArIDEgPT09IHNpemUpID8gdmVydGljZXNbMF0gOiB2ZXJ0aWNlc1tpICsgMV07XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGVkZ2UgYW5kIGdldCBpdHMgbGVmdCBwZXJwZWRpY3VsYXIgdmVjdG9yXG4gICAgICAgICAgICBjb25zdCBuID0gcDEudG8ocDIpLmxlZnQoKTtcbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBpdFxuICAgICAgICAgICAgbi5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgIG5vcm1hbHNbaV0gPSBuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vcm1hbHM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9HZW9tZXRyeS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW5ldHJhdGlvbiB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbm9ybWFsIHtWZWN0b3J9IGNvbnZleDEg7JeQ7IScIGNvbnZleDIg66GcIOy5qO2IrO2VnCBub3JtYWxcbiAgICAgKiBAcGFyYW0gZGVwdGgge251bWJlcn0g7Lmo7YisIOq5iuydtFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5vcm1hbCA9IG5ldyBWZWN0b3IoKSwgZGVwdGggPSAwKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0Tm9ybWFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gICAgfVxuXG4gICAgZ2V0RGVwdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOy5qO2IrCDrsKntlqXsnYQg7ISk7KCV7ZWp64uI64ukLiDrsJjrk5zsi5wgbm9ybWFsaXplZCDtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBub3JtYWwge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzZXROb3JtYWwobm9ybWFsKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOy5qO2IrCDquYrsnbTrpbwg7ISk7KCV7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBkZXB0aCB7bnVtYmVyfVxuICAgICAqL1xuICAgIHNldERlcHRoKGRlcHRoKSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL1BlbmV0cmF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
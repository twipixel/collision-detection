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
	
	var _GJK = __webpack_require__(340);
	
	var _GJK2 = _interopRequireDefault(_GJK);
	
	var _ConvexHull = __webpack_require__(330);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _MinkowskiDifference = __webpack_require__(342);
	
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
	    [new Vector(4, 11), new Vector(4, 5), new Vector(9, 9)],
	    // [new Vector(0, -1), new Vector(3, 1), new Vector(1, 3)],
	];
	const rectangles = [
	    // [new Vector(8, 1), new Vector(8, 5), new Vector(11, 5), new Vector(11, 1)],
	    [new Vector(5, 7), new Vector(7, 3), new Vector(10, 2), new Vector(12, 7)],
	    // [new Vector(2, -2), new Vector(5, -1), new Vector(4, 2), new Vector(1, 1)],
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
	
	var _Painter = __webpack_require__(341);
	
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

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _GJK = __webpack_require__(340);
	
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

/***/ }),

/***/ 342:
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
	            convexHull = _ConvexHull2.default.generate(vertices);
	
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqIiwid2VicGFjazovLy8uL3NyYy9nZW9tL1BvaW50LmpzP2YwNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yLmpzPzk2ZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbC5qcz9mMjk2KiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvTW91c2UuanM/OTI0MSoiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9lcGEvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvQ29uc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvVmVydGljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9HSksuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwibXMiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJpbm5lckhlaWdodCIsInN0eWxlIiwicmVzaXplIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidmVjMiIsImRvdCIsImNvZWZmIiwiYXRhbjIiLCJob3Jpem9udGFsQW5nbGUiLCJ2ZXJ0aWNhbEFuZ2xlIiwiaG9yaXpvbnRhbEFuZ2xlRGVnIiwiYW5nbGUiLCJueCIsImNvcyIsInNpbiIsIm55Iiwicm90YXRlIiwicm90YXRpb24iLCJyb3RhdGVUbyIsInJvdGF0ZUJ5IiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3FydCIsImRpc3RhbmNlU3EiLCJkaXJlY3Rpb24iLCJkeCIsImR5IiwibGVuZ3RoU3EiLCJhIiwiYiIsInYiLCJjbG9uZSIsInJldCIsIm11bHRpcGx5U2NhbGFyIiwiYyIsInIiLCJhYyIsImJjIiwidmVjMSIsInRvIiwiYWRkIiwiUG9pbnQiLCJyYWRpdXMiLCJjb2xvciIsImFscGhhIiwiYnV0dG9uTW9kZSIsImludGVyYWN0aXZlIiwiY2xlYXIiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImx0IiwicmIiLCJwb3NpdGlvbiIsInJhbmRvbWl6ZSIsImZyb21PYmplY3QiLCJHcmFwaGljcyIsIlBhc3RlbENvbG9yIiwiaEJhc2UiLCJuZXdIIiwibmV3TCIsIkhTTHRvUkdCIiwiZyIsImhzbCIsInJnYiIsImhleCIsIlJHQnRvSGV4IiwiaGV4U2hhcCIsImgiLCJzIiwibCIsInJkIiwiaHVlVG9SR0IiLCJtIiwibiIsIm8iLCJxIiwicCIsInByZWZpeCIsInRvU3RyaW5nIiwiQ29udmV4SHVsbCIsInBvaW50cyIsInN0YWNrIiwic29ydCIsInNvcnRMb3dlcllYIiwiYmFzZVBvaW50IiwiaSIsInJlbGF0aXZlUG9zaXRpb24iLCJzb3J0Q2N3IiwicHVzaCIsIm5leHQiLCJmaXJzdCIsInNlY29uZCIsInBvcCIsImlzQ2N3IiwiY29udmV4SHVsbCIsImluZGV4IiwicG9pbnQiLCJwb2ludEEiLCJwb2ludEIiLCJwb2ludEMiLCJ0cmlhbmdsZUFyZWEiLCJkZWJ1Z0FycmF5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvbnZleEh1bGwiLCJpMCIsIngwIiwiaHVsbCIsImloIiwiaWUiLCJqIiwic3ViIiwiY3Jvc3MiLCJsZW5ndGhzcSIsIm5ld1BvaW50cyIsIk1vdXNlIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwicHJldlRpbWUiLCJjdXJyZW50VGltZSIsImRpZmZYIiwiZGlmZlkiLCJwbHVnaW5zIiwiaW50ZXJhY3Rpb24iLCJtb3VzZSIsInBvaW50ZXIiLCJ2YWx1ZSIsIl9yZW5kZXJlciIsIl9tb3VzZSIsIkRFU0tUT1BfTU9VU0UiLCJnbG9iYWwiLCJjdXJyZW50Q3Vyc29yU3R5bGUiLCJEYXRlIiwiZ2V0VGltZSIsIlRPVEFMIiwiSU5URVJWQUwiLCJTQ0FMRSIsIlNUQUdFIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJSQURfVE9fREVHIiwidHJpYW5nbGVzIiwiY3JlYXRlUG9seWdvbnMiLCJyZWN0YW5nbGVzIiwiVGVzdCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW5pdGlhbGl6ZSIsInNoYXBlcyIsImtleVVwTGlzdGVuZXIiLCJvbktleVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRG93bkxpc3RlbmVyIiwib25Nb3VzZURvd24iLCJvbiIsImNoZWNrQ29sbGlzaW9uIiwiZm9yRWFjaCIsInNoYXBlIiwicmVtb3ZlQ2hpbGQiLCJkZXN0cm95IiwibWlua293c2tpIiwiaW5kZXgxIiwiaW5kZXgyIiwidmVydGljZXMxIiwidmVydGljZXMyIiwibXVsdGlwbHkiLCJzaGFwZTEiLCJ2ZXJ0aWNlcyIsInNoYXBlMiIsImNvbGxpc2lvbiIsImludGVydmFsSWQiLCJjbGVhckludGVydmFsIiwiZGlzcGxheUNvbGxpc2lvbiIsImRpc3BsYXkiLCJzZXRJbnRlcnZhbCIsImhpdEFyZWEiLCJSZWN0YW5nbGUiLCJlIiwia2V5Q29kZSIsIlNQQUNFIiwiZ2V0QW5nbGUiLCJub3JtIiwicmFkaWFuIiwiYWNvcyIsImRvdFByb2R1Y3QiLCJwb2x5Z29uIiwidG90YWwiLCJwb2x5Z29ucyIsInZlcnRleCIsImdlbmVyYXRlIiwiRk9OVF9TSVpFIiwiU2hhcGUiLCJsaW5lQ29sb3IiLCJ0ZXh0Q29sb3IiLCJncmFwaGljcyIsImxhYmVscyIsImNyZWF0ZUxhYmVsIiwiZHJhdyIsInRleHQiLCJUZXh0IiwiYWxpZ24iLCJmb250IiwiZmlsbCIsInZpc2libGUiLCJvcmlnaW4iLCJsaW5lU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsYWJlbCIsImRpdmlkZVNjYWxhciIsIkNvbnN0cyIsIlZlcnRpY2VzIiwiR0pLIiwiYXZnIiwiY291bnQiLCJtYXhQcm9kdWN0IiwicHJvZHVjdCIsImluZGV4T2ZGdXJ0aGVzdFBvaW50IiwibmVnYXRlIiwic3RyIiwiaXRlckNvdW50IiwiZCIsImFvIiwiYWIiLCJhYnBlcnAiLCJhY3BlcnAiLCJzaW1wbGV4IiwiQXJyYXkiLCJwb3NpdGlvbjEiLCJhdmVyYWdlUG9pbnQiLCJwb3NpdGlvbjIiLCJzdXBwb3J0IiwidHJpcGxlUHJvZHVjdCIsInBlcnBlbmRpY3VsYXIiLCJkZWJ1Z1ZlcnRpY2VzIiwiY29uc29sZVZlcnRpY2VzIiwiaXNGaXhlZCIsIlBhaW50ZXIiLCJwYXRoIiwidjEiLCJ2MiIsImRpZmYiLCJjb252ZXhIdWxsUGF0aCIsImRyYXdQb2x5Z29uIiwibGluZVdpZHRoIiwidmVjMCIsIm1hZ25pZmljYXRpb24iLCJzdHJpbmciLCJpc0NsZWFyIiwiYm91bmRzIiwidGhpY2tuZXNzIiwiZHJhd1JlY3QiLCJyZWN0IiwicnQiLCJsYiIsInAxIiwicDIiLCJwMCIsIm1vdmVQb2ludCIsInRvUG9pbnQiLCJsZWZ0IiwiaW52ZXJ0IiwicmlnaHQiLCJGT05UX0NPTE9SIiwiQVhFU19MSU5FX0NPTE9SIiwiQ09OVkVYX0hVTExfTElORV9DT0xPUiIsIk1pbmtvd3NraURpZmZlcmVuY2UiLCJnZXRWZXJ0aWNlcyIsInRleHRzIiwiZHJhd0F4ZXMiLCJkcmF3VmV0aWNlcyIsImRyYXdUZXh0IiwiaHciLCJoaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVDLGNBQVk7QUFDVEEsWUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGFBQU1DLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0gsTUFGRDtBQUdILEVBSkEsR0FBRDs7QUFNQSxLQUFJQyxlQUFKO0FBQUEsS0FBWUMsaUJBQVo7QUFBQSxLQUFzQkMsY0FBdEI7QUFBQSxLQUE2QkMsYUFBN0I7QUFBQSxLQUFtQ0Msa0JBQW5DOztLQUVNTCxJO0FBQ0YscUJBQWM7QUFBQTs7QUFDVixjQUFLTSxJQUFMO0FBQ0EsY0FBS0MsUUFBTDtBQUNBLGNBQUtDLFFBQUw7QUFDSDs7OztnQ0FFTTtBQUNIUCxzQkFBU1EsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFUOztBQUVBUix3QkFBVyxJQUFJUyxLQUFLQyxjQUFULENBQXdCWCxPQUFPWSxLQUEvQixFQUFzQ1osT0FBT2EsTUFBN0MsRUFBcUQ7QUFDNURDLHVCQUFNZCxNQURzRDtBQUU1RGUsNkJBQVksSUFGZ0Q7QUFHNURDLGtDQUFpQjtBQUgyQyxjQUFyRCxDQUFYOztBQU1BLDZCQUFNZixRQUFOLEdBQWlCQSxRQUFqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFDLHFCQUFRLElBQUlRLEtBQUtPLFNBQVQsRUFBUjtB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QUFDNUQsS0FBRCxFQUFXO0FBQzVCLHdCQUFLOEQsV0FBTCxDQUFpQjlELEtBQWpCO0FBQ0YsY0FGRDs7QUFJQSxrQkFBSzhELFdBQUwsQ0FBaUIsS0FBS29DLFFBQXRCO0FBQ0g7OztxQ0FFVy9CLFMsRUFBV0MsUyxFQUFXO0FBQzlCLGlCQUFNRyxXQUFXLEVBQWpCO0FBQ0FKLHVCQUFVUCxPQUFWLENBQWtCLFVBQUNqSSxDQUFELEVBQU87QUFDckJ5SSwyQkFBVVIsT0FBVixDQUFrQixVQUFDaEksQ0FBRCxFQUFPO0FBQ3JCMkksOEJBQVMvRSxJQUFULENBQWMsaUJBQU8xRyxRQUFQLENBQWdCNkMsQ0FBaEIsRUFBbUJDLENBQW5CLENBQWQ7QUFDSCxrQkFGRDtBQUdILGNBSkQ7QUFLQSxvQkFBTzJJLFFBQVA7QUFDSDs7OztHQXRGNENqTyxLQUFLTyxTOzttQkFBakM2VCxtQiIsImZpbGUiOiJlcGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9Nb3VzZVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xuICAgIH1cbn0oKSk7XG5cbmxldCBjYW52YXMsIHJlbmRlcmVyLCBzdGFnZSwgdGVzdCwgY29udGFpbmVyO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwge1xuICAgICAgICAgICAgdmlldzogY2FudmFzLFxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgzMzM4M0RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTW91c2UucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgICAgICAvLyDsnITsuZjqsIAg7KCV7IiY6rCAIOyVhOuLkOqyveyasCDtnZDrpr/tlZjqsowg67O07J2064qUIOusuOygnOqwgCDsnojslrRcbiAgICAgICAgLy8g66CM642U65+s7J2YIOychOy5mOulvCDsoJXsiJjroZwg7Jew7IKw65CgIOyImCDsnojrj4TroZ0g7ZWc64ukLlxuICAgICAgICAvL3JlbmRlcmVyLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcblxuICAgICAgICBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICB0ZXN0ID0gbmV3IFRlc3QocmVuZGVyZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXN0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AoKTtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCkge31cblxuICAgIHVwZGF0ZUxvb3AgKG1zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1zKTtcbiAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG1zKSB7XG4gICAgICAgIHRlc3QudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzdGFnZSk7XG4gICAgfVxuXG4gICAgcmVzaXplV2luZG93KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDsupTrsoTsiqQg7IKs7J207KaI7JmAIOuUlOyKpO2UjOugiOydtCDsgqzsnbTspogg7ISk7KCVXG4gICAgICAgICAqIOugiO2LsOuCmCDqt7jrnpjtlL0g7KeA7JuQIOy9lOuTnFxuICAgICAgICAgKi9cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBJWEkgcmVuZGVyZXIg66as7IKs7J207KaIXG4gICAgICAgICAqIFBJWEkg7JeQ6rKMIHZpZXdwb3J0IOyCrOydtOymiCDrs4Dqsr0g7JWM66a8XG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIHRlc3QucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L2VwYS9pbmRleC5qcyIsIlxuXG5jb25zdCBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuXG5mdW5jdGlvbiByYW5kb20gKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhZGlhbjJkZWdyZWVzIChyYWQpIHtcbiAgICByZXR1cm4gcmFkICogZGVncmVlcztcbn1cblxuZnVuY3Rpb24gZGVncmVlczJyYWRpYW4gKGRlZykge1xuICAgIHJldHVybiBkZWcgLyBkZWdyZWVzO1xufVxuXG5cbi8qKlxuICogVmljdG9yLmpz66W8IEVTNuuhnCDrs4DtmZjtlZjsl6wg7IKs7Jqp7ZWY6rOgIOyeiOyKteuLiOuLpC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhrdWVuZy92aWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yXG57XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbUFycmF5KFs0MiwgMjFdKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21BcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHdpdGggdGhlIHggYW5kIHkgdmFsdWVzIGF0IGluZGV4IDAgYW5kIDEgcmVzcGVjdGl2ZWx5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGFyclswXSB8fCAwLCBhcnJbMV0gfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbU9iamVjdCh7IHg6IDQyLCB5OiAyMSB9KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21PYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgZm9yIHggYW5kIHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tT2JqZWN0KG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKG9iai54IHx8IDAsIG9iai55IHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuIFdpbGwgYWxzbyB3b3JrIHdpdGhvdXQgdGhlIGBuZXdgIGtleXdvcmRcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IFZlY3Rvcig0MiwgMTMzNyk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBWYWx1ZSBvZiB0aGUgeCBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVmFsdWUgb2YgdGhlIHkgYXhpc1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMClcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWCBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeToxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBZIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGQodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggKyBiLngsIGEueSArIGIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIGJvdGggdmVjdG9yIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWCBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBZIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0KHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3QodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1YnRyYWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLSBiLngsIGEueSAtIGIueSk7XG4gICAgfVxuXG5cbiAgICBlZGdlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZWRnZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdChhLCBiKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXIoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclgoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDIwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJZKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEwMCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIHggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgeSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSBhIGF4aXMgdmFsdWVzIG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGUodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGUoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAvIGIueCwgYS55IC8gYi55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRYKClcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFkoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WSgpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuaW52ZXJ0WCgpO1xuICAgICAgICB0aGlzLmludmVydFkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmVnYXRlKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHYgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgdi54ID0gLXZlYy54O1xuICAgICAgICB2LnkgPSAtdmVjLnk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBYIGF4aXMgYnkgWCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWSBheGlzIGJ5IFkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdmFsdWVzIGZyb20gYSBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5KHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbXVsdGlwbHlTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHNjYWxhciwgdmVjdG9yLnkgKiBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54IC8gc2NhbGFyLCB2ZWN0b3IueSAvIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoOTAg64+EIO2ajOyghClcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBwZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSAtdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKC05MCDrj4Qg7ZqM7KCEKVxuICAgICAqL1xuICAgIHJldHVyblBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy55LCAtdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZXR1cm5QZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSB2ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IC12ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog67KE66a8XG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJ1bmNhdGUodmVjLCBsZW5ndGgpXG4gICAge1xuICAgICAgICBjb25zdCByZXQgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoU3EgPSB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICAgICAgaWYgKGxlbmd0aFNxID4gbGVuZ3RoICogbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXQubXVsdGlwbHlTY2FsYXIobGVuZ3RoIC8gTWF0aC5zcXJ0KGxlbmd0aFNxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbm9ybWFsaXplKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpdmlkZShuZXcgVmVjdG9yKGxlbmd0aCwgbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBub3JtKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGFic29sdXRlIHZlY3RvciBheGlzIGlzIGdyZWF0ZXIgdGhhbiBgbWF4YCwgbXVsdGlwbGllcyB0aGUgYXhpcyBieSBgZmFjdG9yYFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGltaXQoODAsIDAuOSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjkwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIGZvciBib3RoIHggYW5kIHkgYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmYWN0b3IgRmFjdG9yIGJ5IHdoaWNoIHRoZSBheGlzIGFyZSB0byBiZSBtdWx0aXBsaWVkIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsaW1pdChtYXgsIGZhY3RvcilcbiAgICB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLngpID4gbWF4KXsgdGhpcy54ICo9IGZhY3RvcjsgfVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55KSA+IG1heCl7IHRoaXMueSAqPSBmYWN0b3I7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21pemVzIGJvdGggdmVjdG9yIGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemUobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MGApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NjcsIHk6NzNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpLCB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHRoaXMueCA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHRoaXMueSA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IHJhbmRvbWl6ZXMgZWl0aGVyIGF4aXMgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZUFueShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo3N1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemVBbnkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBpZiAoISEgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGFuIGludGVnZXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdW5mbG9hdCgpXG4gICAge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGEgY2VydGFpbiBwcmVjaXNpb25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFByZWNpc2lvbiAoZGVmYXVsdDogOClcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0ZpeGVkKHByZWNpc2lvbilcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJlY2lzaW9uID09PSAndW5kZWZpbmVkJykgeyBwcmVjaXNpb24gPSA4OyB9XG4gICAgICAgIHRoaXMueCA9IHRoaXMueC50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBYIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gKDEgLSBhbW91bnQpICogdGhpcy54ICsgYW1vdW50ICogdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBZIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WSh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WSh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0gKDEgLSBhbW91bnQpICogdGhpcy55ICsgYW1vdW50ICogdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4KHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5taXhYKHZlYywgYW1vdW50KTtcbiAgICAgICAgdGhpcy5taXhZKHZlYywgYW1vdW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFByb2R1Y3RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jbG9uZSgpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBBIGNsb25lIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNsb25lKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVgodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBZIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlZKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBhbmQgWSBjb21wb25lbnRzIGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb3B5WCh2ZWMpO1xuICAgICAgICB0aGlzLmNvcHlZKHZlYyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmVjdG9yIHRvIHplcm8gKDAsMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICpcdFx0IHZhcjEuemVybygpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MCwgeTowXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB6ZXJvKClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kb3QodmVjMik7XG4gICAgICogICAgIC8vID0+IDIzMDAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEb3QgcHJvZHVjdFxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZG90KHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjMi54ICsgdGhpcy55ICogdmVjMi55O1xuICAgIH1cblxuXG4gICAgZG90UHJvZHVjdCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkb3RQcm9kdWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55O1xuICAgIH1cblxuXG4gICAgY3Jvc3ModmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy54ICogdmVjMi55KSAtICh0aGlzLnkgKiB2ZWMyLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi55IC0gYS55ICogYi54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAgICAgKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UcmlwbGVfcHJvZHVjdCNWZWN0b3JfdHJpcGxlX3Byb2R1Y3RcbiAgICAgKiDshLjqt7jrqLztirjsl5DshJwg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsKntlqXsnYQg7LC+7J2EIOuVjCDsgqzsmqlcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpcGxlUHJvZHVjdChhLCBiLCBjKVxuICAgIHtcbiAgICAgICAgY29uc3QgciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgY29uc3QgYWMgPSBhLnggKiBjLnggKyBhLnkgKiBjLnkgICAgLy8gcGVyZm9ybSBhLmRvdChjKVxuICAgICAgICAgICAgLCBiYyA9IGIueCAqIGMueCArIGIueSAqIGMueTsgICAvLyBwZXJmb3JtIGIuZG90KGMpXG5cbiAgICAgICAgLy8gcGVyZm9ybSBiICogYS5kb3QoYykgLSBhICogYi5kb3QoYylcbiAgICAgICAgci54ID0gYi54ICogYWMgLSBhLnggKiBiYztcbiAgICAgICAgci55ID0gYi55ICogYWMgLSBhLnkgKiBiYztcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIGEgdmVjdG9yIG9udG8gYW5vdGhlciB2ZWN0b3IsIHNldHRpbmcgaXRzZWxmIHRvIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnByb2plY3RPbnRvKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIHByb2plY3QgdGhpcyB2ZWN0b3Igb250b1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHByb2plY3RPbnRvKHZlYzIpXG4gICAge1xuICAgICAgICB2YXIgY29lZmYgPSAoICh0aGlzLnggKiB2ZWMyLngpKyh0aGlzLnkgKiB2ZWMyLnkpICkgLyAoKHZlYzIueCp2ZWMyLngpKyh2ZWMyLnkqdmVjMi55KSk7XG4gICAgICAgIHRoaXMueCA9IGNvZWZmICogdmVjMi54O1xuICAgICAgICB0aGlzLnkgPSBjb2VmZiAqIHZlYzIueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDshKDtmJUg67O06rCEXG4gICAgICogaHR0cDovL2RldmVsb3B1Zy5ibG9nc3BvdC5jb20vMjAxNC8wOS91bml0eS12ZWN0b3ItbGVycC5odG1sXG4gICAgICogQHBhcmFtIHZlYzFcbiAgICAgKiBAcGFyYW0gdmVjMlxuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIGxlcnAodmVjMSwgdmVjMiwgdG8pIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5hZGQoVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzEsIDEgLSB0byksIFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMyLCB0bykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOyXreyImFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyByY3AodmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEgLyB2ZWN0b3IueCwgMSAvIHZlY3Rvci55KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLnZlcnRpY2FsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICBhbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZURlZygpO1xuICAgIH1cblxuXG4gICAgZGlyZWN0aW9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgcm90YXRlKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG54ID0gKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSkgLSAodGhpcy55ICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgdmFyIG55ID0gKHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSkgKyAodGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKTtcblxuICAgICAgICB0aGlzLnggPSBueDtcbiAgICAgICAgdGhpcy55ID0gbnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICByb3RhdGVEZWcoYW5nbGUpXG4gICAge1xuICAgICAgICBhbmdsZSA9IGRlZ3JlZXMycmFkaWFuKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKHJvdGF0aW9uLXRoaXMuYW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUb0RlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVUbyhyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeShyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMuYW5nbGUoKSArIHJvdGF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeURlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVCeShyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWCBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAtIHZlYy54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VYKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hYnNEaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVgodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWSBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55IC0gdmVjLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVkoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VZKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwLjQ5ODc1NjIxMTIwODlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24oKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVNxKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlU3EodmVjKVxuICAgIHtcbiAgICAgICAgdmFyIGR4ID0gdGhpcy5kaXN0YW5jZVgodmVjKSxcbiAgICAgICAgICAgIGR5ID0gdGhpcy5kaXN0YW5jZVkodmVjKTtcblxuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb3IgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aCgpO1xuICAgICAqICAgICAvLyA9PiAxMTEuODAzMzk4ODc0OTg5NDhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uo7Iic7Z6IIOq4uOydtCDruYTqtZDrpbwg7ZWY66Ck66m0IGxlbmd0aCDrpbwg7IKs7Jqp7ZWY6riwIOuztOuLpOuKlCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY6rKMIOu5oOultOuLpC5cbiAgICAgKiBsZW5ndGgg64qUIE1hdGguc3FydCAo7KCc6rOx6re8KSDsspjrpqzrpbwg7ZWY6riwIOuVjOusuOyXkCDri6jsiJwg6ri47J20IOu5hOq1kOyLnCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY64qUIOqyg+ydtCDruaDrpoXri4jri6QuXG4gICAgICogU3F1YXJlZCBsZW5ndGggLyBtYWduaXR1ZGVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aFNxKCk7XG4gICAgICogICAgIC8vID0+IDEyNTAwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoU3EoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsZW5ndGhTcSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgfVxuXG5cbiAgICBtYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB2ZWN0b3IgaXMgKDAsIDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMuemVybygpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc1plcm8oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB0aGlzIHZlY3RvciBpcyB0aGUgc2FtZSBhcyBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMxLmlzRXF1YWxUbyh2ZWMyKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNFcXVhbFRvKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSB2ZWMyLnggJiYgdGhpcy55ID09PSB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFV0aWxpdHkgTWV0aG9kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICByZXR1cm4gJ3g6JyArIHRoaXMueCArICcsIHk6JyArIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b0FycmF5KCk7XG4gICAgICogICAgIC8vID0+IFsxMCwgMjBdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvQXJyYXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFsgdGhpcy54LCB0aGlzLnkgXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9PYmplY3QoKTtcbiAgICAgKiAgICAgLy8gPT4geyB4OiAxMCwgeTogMjAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9PYmplY3QoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmVjdG9yLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IGV4dGVuZHMgUElYSS5HcmFwaGljc1xue1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMTAsIGNvbG9yID0gMHhmZjMzMDAsIGFscGhhID0gMC41KVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbk1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJlbmRlcihyYWRpdXMsIGNvbG9yLCBhbHBoYSk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIocmFkaXVzID0gMTAsIGNvbG9yID0gMHhmZjMzMDAsIGFscGhhID0gMC41KVxuICAgIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB0aGlzLmRyYXdDaXJjbGUoMCwgMCwgcmFkaXVzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICB0aGlzLmVuZEZpbGwoKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZShsdCwgcmIpXG4gICAge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMudmVjdG9yLnJhbmRvbWl6ZShsdCwgcmIpO1xuICAgICAgICB0aGlzLnggPSBwb3NpdGlvbi54O1xuICAgICAgICB0aGlzLnkgPSBwb3NpdGlvbi55O1xuICAgIH1cblxuXG4gICAgZ2V0IHZlY3RvcigpXG4gICAge1xuICAgICAgICByZXR1cm4gVmVjdG9yLmZyb21PYmplY3QodGhpcyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb20vUG9pbnQuanMiLCIvKipcbiAqIGh0dHBzOi8vY29kZXBlbi5pby9wbGl1L3Blbi9CTEVLd0FcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzdGVsQ29sb3Ige1xuICAgIHN0YXRpYyBnZW5lcmF0ZSgpIHtcbiAgICAgICAgY29uc3QgaEJhc2UgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBjb25zdCBuZXdIID0gTWF0aC5mbG9vcihoQmFzZSAqIDM2MCk7XG4gICAgICAgIGNvbnN0IG5ld0wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNikgKyA3NTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBgaHNsKCR7bmV3SH0sIDEwMCUsICR7bmV3TH0lKWA7XG4gICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IHRoaXMuSFNMdG9SR0IoaEJhc2UsIDEsIG5ld0wgKiAuMDEpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoc2w6IGNvbG9yLCAvLyBoc2woMCwgMTAwJSwgODUlKTtcbiAgICAgICAgICAgIHJnYjogYHJnYigke3J9LCAke2d9LCAke2J9KWAsIC8vIHJnYigyNTUsIDEyOCwgMTI4KTtcbiAgICAgICAgICAgIGhleDogYCR7dGhpcy5SR0J0b0hleChyLCBnLCBiKX1gLCAvLyAweGZmODA4MFxuICAgICAgICAgICAgaGV4U2hhcDpgJHt0aGlzLlJHQnRvSGV4KHIsIGcsIGIsICcjJyl9YCwgLy8gI2ZmODA4MFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhTTCB0byBSR0IgZm9ybXVsYSBhZGFwdGVkIGZyb206XG4gICAgICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWphY2tzb24vNTMxMTI1NlxuICAgICAqIChza2lwcGluZyB0byBlbHNle30gc2luY2UgcyB3aWxsIGFsd2F5cyBiZSAxMDAlKVxuICAgICAqIEBwYXJhbSBoXG4gICAgICogQHBhcmFtIHNcbiAgICAgKiBAcGFyYW0gbFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIEhTTHRvUkdCKGgsIHMsIGwpIHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG5cbiAgICAgICAgY29uc3QgcmQgPSAoYSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5tYXgoTWF0aC5taW4oYSAqIDI1NiwgMjU1KSwgMCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGh1ZVRvUkdCID0gKG0sIG4sIG8pID0+IHtcbiAgICAgICAgICAgIGlmIChvIDwgMCkgbyArPSAxO1xuICAgICAgICAgICAgaWYgKG8gPiAxKSBvIC09IDE7XG4gICAgICAgICAgICBpZiAobyA8IDEgLyA2KSByZXR1cm4gbSArIChuIC0gbSkgKiA2ICogbztcbiAgICAgICAgICAgIGlmIChvIDwgMSAvIDIpIHJldHVybiBuO1xuICAgICAgICAgICAgaWYgKG8gPCAyIC8gMykgcmV0dXJuIG0gKyAobiAtIG0pICogKDIgLyAzIC0gbykgKiA2O1xuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XG5cbiAgICAgICAgciA9IGh1ZVRvUkdCKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgICAgIGcgPSBodWVUb1JHQihwLCBxLCBoKTtcbiAgICAgICAgYiA9IGh1ZVRvUkdCKHAsIHEsIGggLSAxIC8gMyk7XG5cbiAgICAgICAgcmV0dXJuIFtyZChyKSwgcmQoZyksIHJkKGIpXVxuICAgIH1cblxuICAgIHN0YXRpYyBSR0J0b0hleChyLCBnLCBiLCBwcmVmaXggPSAnMHgnKSB7XG4gICAgICAgIHJldHVybiBgJHtwcmVmaXh9JHtyLnRvU3RyaW5nKDE2KX0ke2cudG9TdHJpbmcoMTYpfSR7Yi50b1N0cmluZygxNil9YDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanMiLCIvKipcbiAqIGh0dHBzOi8vd3d3LmNyb2N1cy5jby5rci8xMjg4XG4gKi9cbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL1ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb252ZXhIdWxsIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGUocG9pbnRzKSB7XG5cbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXSxcbiAgICAgICAgICAgIG4gPSBwb2ludHMubGVuZ3RoO1xuXG4gICAgICAgIC8vIHnsooztkZwsIHjsooztkZwg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgICAgcG9pbnRzLnNvcnQodGhpcy5zb3J0TG93ZXJZWCk7XG5cbiAgICAgICAgLy8g6riw7KSA7KCQIOyEpOyglVxuICAgICAgICBjb25zdCBiYXNlUG9pbnQgPSBwb2ludHNbMF07XG5cbiAgICAgICAgLy8g6riw7KSA7KCQIOq4sOykgOycvOuhnCB2ZWN0b3Ig66W8IOyDneyEse2VmOqzoCDsmbjsoIHsnYQg6rWs7ZW07IScIOuwmCDsi5zqs4Qg67Cp7Zal7Jy866GcIChjY3cpIOygleugrCDtlanri4jri6QuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBwb2ludHNbaV0ucmVsYXRpdmVQb3NpdGlvbiA9IG5ldyBWZWN0b3IoXG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldLnggLSBiYXNlUG9pbnQueCxcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueSAtIGJhc2VQb2ludC55XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9pbnRzLnNvcnQodGhpcy5zb3J0Q2N3KTtcblxuICAgICAgICAvLyDsiqTtg53sl5AgZmlyc3QsIHNlY29uZCDrpbwg64Sj7Iq164uI64ukLlxuICAgICAgICBzdGFjay5wdXNoKDApO1xuICAgICAgICBzdGFjay5wdXNoKDEpO1xuXG4gICAgICAgIGxldCBuZXh0ID0gMjtcblxuICAgICAgICB3aGlsZSAobmV4dCA8IG4pIHtcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdCwgc2Vjb25kO1xuICAgICAgICAgICAgICAgIHNlY29uZCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJzdCwgc2Vjb25kLCBuZXh06rCAIOyijO2ajOyghCAoIDAg67O064ukIO2BrOuptCAp7J20652866m0IHNlY29uZCBwdXNoXG4gICAgICAgICAgICAgICAgLy8g7Jqw7ZqM7KCEKCAwIOuztOuLpCDsnpHsnLzrqbQgKSDsnbTrnbzrqbQg7JyE7J2YIHdoaWxl66y4IOqzhOyGjSDrsJjrs7VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Njdyhwb2ludHNbZmlyc3RdLCBwb2ludHNbc2Vjb25kXSwgcG9pbnRzW25leHRdKSkge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHNlY29uZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0KyspO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udmV4SHVsbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IHN0YWNrLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGFja1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnZleEh1bGwucHVzaCh7eDogcG9pbnQueCwgeTogcG9pbnQueX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnZleEh1bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeSwgeCDqsIAg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBzb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICBpZiAocG9pbnRBLnkgIT09IHBvaW50Qi55KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnRBLnkgLSBwb2ludEIueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRBLnggLSBwb2ludEIueDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDquLDspIAg7KKM7ZGcIOq4sOykgOycvOuhnCDsg4HrjIAg7KKM7ZGc66W8IOq1rO2VtOyEnCDsi5zqs4Qg67CY64yAIOuwqe2WpeycvOuhnCDsoJXroKztlanri4jri6QuXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydENjdyhwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAvLyDspJHsi6wg7KKM7ZGc7J24IOqyveyasCByZWxhdGl2ZVBvc2l0aW9uIOydtCDsl4bsirXri4jri6QuIOykkeyLrCDsooztkZzrpbwgMOuyiOycvOuhnCDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBpZiAoIXBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGEgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi55ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgYiA9IHBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uLnggKiBwb2ludEIucmVsYXRpdmVQb3NpdGlvbi55O1xuXG4gICAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29udmV4SHVsbC5zb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67CYIOyLnOqzhCDrsKntlqXsnbjsp4Ag7Jes67aAXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcGFyYW0gcG9pbnRDXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQ2N3KHBvaW50QSwgcG9pbnRCLCBwb2ludEMpIHtcbiAgICAgICAgLy8gY29uc3QgdHJpYW5nbGVBcmVhID0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpO1xuICAgICAgICBjb25zdCB0cmlhbmdsZUFyZWEgPSAgKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpO1xuICAgICAgICBpZiAodHJpYW5nbGVBcmVhID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z0FycmF5KGFycikge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYXJyLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJbaV0ueCwgYXJyW2ldLnkpO1xuICAgIH1cbn1cblxuXG4vKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTIgSnUgSHl1bmcgTGVlXG4qXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZVxuKiBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbiogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4qIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Jcbiogc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElOR1xuKiBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbiogREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIENyZWF0ZSB0aGUgY29udmV4IGh1bGwgdXNpbmcgdGhlIEdpZnQgd3JhcHBpbmcgYWxnb3JpdGhtXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dpZnRfd3JhcHBpbmdfYWxnb3JpdGhtXG5mdW5jdGlvbiBjcmVhdGVDb252ZXhIdWxsKHBvaW50cykge1xuICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICB2YXIgaTAgPSAwO1xuICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGh1bGwgPSBbXTtcbiAgICB2YXIgbSA9IDA7XG4gICAgdmFyIGloID0gaTA7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHIgPSB2ZWMyLnN1Yihwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIHYgPSB2ZWMyLnN1Yihwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICB2YXIgYyA9IHZlYzIuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aHNxKCkgPiByLmxlbmd0aHNxKCkpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtKys7XG4gICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvcHkgdmVydGljZXNcbiAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgbmV3UG9pbnRzLnB1c2gocG9pbnRzW2h1bGxbaV1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UG9pbnRzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vc3JjL2dqay9TaGFwZSc7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uLy4uL3NyYy9namsvQ29uc3RzJztcbmltcG9ydCBWZXJ0aWNlcyBmcm9tICcuLi8uLi9zcmMvZ2prL1ZlcnRpY2VzJztcbmltcG9ydCBHSksgZnJvbSAnLi4vLi4vc3JjL2dqay9HSksnO1xuaW1wb3J0IENvbnZleEh1bGwgZnJvbSAnLi4vLi4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbCc7XG5pbXBvcnQgTWlua293c2tpRGlmZmVyZW5jZSBmcm9tICcuLi8uLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcIi4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZVwiO1xuXG5jb25zdCBUT1RBTCA9IDMwXG4gICAgLCBJTlRFUlZBTCA9IDYwMDAwMFxuICAgICwgU0NBTEUgPSBDb25zdHMuU0NBTEVcbiAgICAsIFNUQUdFID0gQ29uc3RzLlNUQUdFXG4gICAgLCBUT1BfTEVGVCA9IHt4OiAyLCB5OiAyfVxuICAgICwgVE9QX1JJR0hUID0ge3g6IDE3LCB5OiAxN31cbiAgICAsIFJBRF9UT19ERUcgPSAxODAgLyBNYXRoLlBJO1xuXG5jb25zdCB0cmlhbmdsZXMgPSBjcmVhdGVQb2x5Z29ucygzLCBUT1RBTCk7XG5jb25zdCByZWN0YW5nbGVzID0gY3JlYXRlUG9seWdvbnMoNCwgVE9UQUwpO1xuXG4vKmNvbnN0IHRyaWFuZ2xlcyA9IFtcbiAgICAvLyBbbmV3IFZlY3RvcigzLCAxKSwgbmV3IFZlY3RvcigzLCA1KSwgbmV3IFZlY3Rvcig2LCA0KV0sXG4gICAgW25ldyBWZWN0b3IoNCwgMTEpLCBuZXcgVmVjdG9yKDQsIDUpLCBuZXcgVmVjdG9yKDksIDkpXSxcbiAgICAvLyBbbmV3IFZlY3RvcigwLCAtMSksIG5ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMSwgMyldLFxuXTtcbmNvbnN0IHJlY3RhbmdsZXMgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoOCwgMSksIG5ldyBWZWN0b3IoOCwgNSksIG5ldyBWZWN0b3IoMTEsIDUpLCBuZXcgVmVjdG9yKDExLCAxKV0sXG4gICAgW25ldyBWZWN0b3IoNSwgNyksIG5ldyBWZWN0b3IoNywgMyksIG5ldyBWZWN0b3IoMTAsIDIpLCBuZXcgVmVjdG9yKDEyLCA3KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoMiwgLTIpLCBuZXcgVmVjdG9yKDUsIC0xKSwgbmV3IFZlY3Rvcig0LCAyKSwgbmV3IFZlY3RvcigxLCAxKV0sXG5dOyovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci52aWV3O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMua2V5VXBMaXN0ZW5lciA9IHRoaXMub25LZXlVcC5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwTGlzdGVuZXIpO1xuXG4gICAgICAgIHRoaXMubW91c2VEb3duTGlzdGVuZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlDb2xsaXNpb24oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChzaGFwZSk7XG4gICAgICAgICAgICBzaGFwZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hhcGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuc2hhcGVzID0gW107XG5cbiAgICAgICAgaWYgKCF0aGlzLm1pbmtvd3NraSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5taW5rb3dza2kpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IGluZGV4MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRyaWFuZ2xlcy5sZW5ndGgpXG4gICAgICAgICAgICAsIGluZGV4MiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlY3RhbmdsZXMubGVuZ3RoKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczEgPSBuZXcgVmVydGljZXModHJpYW5nbGVzW2luZGV4MV0pXG4gICAgICAgICAgICAsIHZlcnRpY2VzMiA9IG5ldyBWZXJ0aWNlcyhyZWN0YW5nbGVzW2luZGV4Ml0pO1xuXG4gICAgICAgIHZlcnRpY2VzMS5tdWx0aXBseShTQ0FMRSk7XG4gICAgICAgIHZlcnRpY2VzMi5tdWx0aXBseShTQ0FMRSk7XG5cbiAgICAgICAgY29uc3Qgc2hhcGUxID0gbmV3IFNoYXBlKHZlcnRpY2VzMS52ZXJ0aWNlcywgU0NBTEUpXG4gICAgICAgICAgICAsIHNoYXBlMiA9IG5ldyBTaGFwZSh2ZXJ0aWNlczIudmVydGljZXMsIFNDQUxFKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kgPSBuZXcgTWlua293c2tpRGlmZmVyZW5jZSh2ZXJ0aWNlczEudmVydGljZXMsIHZlcnRpY2VzMi52ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMubWlua293c2tpLnggPSAoU1RBR0Uud2lkdGggLyAzKSAqIDI7XG4gICAgICAgIHRoaXMubWlua293c2tpLnkgPSAoU1RBR0UuaGVpZ2h0IC8gMykgKiAyO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2hhcGUxKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChzaGFwZTIpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlua293c2tpKTtcblxuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlMSk7XG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUyKTtcblxuICAgICAgICB2ZXJ0aWNlczEuZGl2aWRlKFNDQUxFKTtcbiAgICAgICAgdmVydGljZXMyLmRpdmlkZShTQ0FMRSk7XG5cbiAgICAgICAgY29uc3QgY29sbGlzaW9uID0gR0pLLmNoZWNrQ29sbGlzaW9uKHZlcnRpY2VzMS52ZXJ0aWNlcywgdmVydGljZXMyLnZlcnRpY2VzKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NPTExJU0lPTiBbJywgY29sbGlzaW9uLCAnXScpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGxheUNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXlDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5kaXNwbGF5Q29sbGlzaW9uLCBJTlRFUlZBTCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge31cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgICBvbktleVVwKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIOuRkOuyoe2EsCDsgqzsnbTqsIEg6rWs7ZWY6riwXG4gKiBAcGFyYW0gYVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldEFuZ2xlKGEsIGIpIHtcbiAgICBhID0gbmV3IFZlY3RvcihhLngsIGEueSkubm9ybSgpO1xuICAgIGIgPSBuZXcgVmVjdG9yKGIueCwgYi55KS5ub3JtKCk7XG4gICAgY29uc3QgcmFkaWFuID0gTWF0aC5hY29zKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGIpKTtcbiAgICByZXR1cm4gcmFkaWFuICogUkFEX1RPX0RFRztcbn1cblxuXG4vKipcbiAqIOuenOuNpOycvOuhnCDsooztkZzrpbwg7IOd7ISx7ZWY6rOgIGNvbnZleCBodWxsIOydhCDrp4zrk6TrqbQgT0tcbiAqIEBwYXJhbSBwb2x5Z29uXG4gKiBAcGFyYW0gdG90YWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9seWdvbnMocG9seWdvbiwgdG90YWwpIHtcbiAgICBsZXQgdmVydGljZXM7XG4gICAgY29uc3QgcG9seWdvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9seWdvbjsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZWN0b3IucmFuZG9taXplKFRPUF9MRUZULCBUT1BfUklHSFQpO1xuICAgICAgICAgICAgdmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gcG9seWdvbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gQ29udmV4SHVsbC5nZW5lcmF0ZSh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSBjb252ZXhIdWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcG9seWdvbnMucHVzaCh2ZXJ0aWNlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvbHlnb25zO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9lcGEvVGVzdC5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vZ2prL0NvbnN0cyc7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yJztcblxuY29uc3QgRk9OVF9TSVpFID0gJzlweCdcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB0aGlzLmxpbmVDb2xvciA9IGNvbG9yLmhleDtcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBjb2xvci5oZXhTaGFwO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSB0aGlzLmNyZWF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxhYmVsKCkge1xuICAgICAgICBjb25zdCBuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoaSwge1xuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBmb250OiBGT05UX1NJWkUsXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRleHQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGFiZWxzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3NcbiAgICAgICAgICAgICwgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG4gICAgICAgICAgICAsIG9yaWdpbiA9IHZlcnRpY2VzWzBdO1xuXG4gICAgICAgIGcuY2xlYXIoKTtcbiAgICAgICAgZy5saW5lU3R5bGUoMSwgdGhpcy5saW5lQ29sb3IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKG9yaWdpbi54LCBvcmlnaW4ueSk7XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGcubGluZVRvKHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWxzW2luZGV4XVxuICAgICAgICAgICAgICAgICwgdmVjID0gVmVjdG9yLmRpdmlkZVNjYWxhcih2ZXJ0ZXgsIFNDQUxFKTtcblxuICAgICAgICAgICAgbGFiZWwueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgbGFiZWwueSA9IHZlcnRleC55O1xuXG4gICAgICAgICAgICBsYWJlbC50ZXh0ID0gYCgke3ZlYy54fSwke3ZlYy55fSlgO1xuICAgICAgICAgICAgbGFiZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBnLmxpbmVUbyhvcmlnaW4ueCwgb3JpZ2luLnkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5sYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQobGFiZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxhYmVscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmxhYmVscyA9IG51bGw7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1NoYXBlLmpzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cyB7XG4gICAgc3RhdGljIGdldCBTQ0FMRSgpIHtcbiAgICAgICAgcmV0dXJuIDE0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBR0UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogNjAwLCBoZWlnaHQ6IDYwMH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhZ2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvQ29uc3RzLmpzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB9XG5cbiAgICBtdWx0aXBseShzY2FsYXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRleC54ICo9IHNjYWxhcjtcbiAgICAgICAgICAgIHZlcnRleC55ICo9IHNjYWxhcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGl2aWRlKHNjYWxhcikge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdmVydGV4LnkgLz0gc2NhbGFyO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1ZlcnRpY2VzLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuLyoqXG4gKiBHSksgQWxnb3JpdGhtIChHaWxiZXJ0LUpvaG5zb24tS2VlcnRoaSlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gKiBodHRwOi8vd3d3LmR5bjRqLm9yZy8yMDEwLzA0L2dqay1naWxiZXJ0LWpvaG5zb24ta2VlcnRoaS8jZ2prLXRvcFxuICogaHR0cHM6Ly93d3cuaGFyb2xkc2VycmFuby5jb20vYmxvZy92aXN1YWxpemluZy10aGUtZ2prLWNvbGxpc2lvbi1hbGdvcml0aG1cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qdWhsL2NvbGxpc2lvbi1kZXRlY3Rpb24tMmRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0pLXG57XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0byBjb21wdXRlIGF2ZXJhZ2UgY2VudGVyIChyb3VnaGx5KS4gSXQgbWlnaHQgYmUgZGlmZmVyZW50IGZyb21cbiAgICAgKiBDZW50ZXIgb2YgR3Jhdml0eSwgZXNwZWNpYWxseSBmb3IgYm9kaWVzIHdpdGggbm9udW5pZm9ybSBkZW5zaXR5LFxuICAgICAqIGJ1dCB0aGlzIGlzIG9rIGFzIGluaXRpYWwgZGlyZWN0aW9uIG9mIHNpbXBsZXggc2VhcmNoIGluIEdKS1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBhdmVyYWdlUG9pbnQodmVydGljZXMpXG4gICAge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhdmcueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZnLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2Zy54IC89IGNvdW50O1xuICAgICAgICBhdmcueSAvPSBjb3VudDtcblxuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1cnRoZXN0IHZlcnRleCBhbG9uZyBhIGNlcnRhaW4gZGlyZWN0aW9uXG4gICAgICog6ryt7KeA7KCQ6rO8IOuwqe2WpeydhCDsoITri6ztlZjrqbQg64K07KCBICjtiKzsmIEp7J2EIO2Gte2VtCDstZzrjIDroZwg66i8IOyijO2RnOydmCDsnbjrjbHsiqTrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBpbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlcywgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1heFByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzWzBdKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0ID4gbWF4UHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG1heFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1pbmtvd3NraSBzdW0gc3VwcG9ydCBmdW5jdGlvbiBmb3IgR0pLXG4gICAgICog7KeA7JuQIO2VqOyImOyXkOyEnCDtj7Trpqzqs6TsnZgg7Y+s7J247Yq47JmAIOuwqe2WpeycvOuhnCDshJzroZwg64uk66W4IOuwqe2WpeydmCDsoJDsnYQg6rWs7ZWY6rOgIE1pbmtvd3NraSBEaWZmZXJlbmNlIOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSDrsqHthLBcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgLy8gc3VidHJhY3QgKE1pbmtvd3NraSBzdW0pIHRoZSB0d28gcG9pbnRzIHRvIHNlZSBpZiBib2RpZXMgJ292ZXJsYXAnXG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDstqnrj4wg7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGNoZWNrQ29sbGlzaW9uKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKTtcblxuICAgICAgICBsZXQgaXRlckNvdW50ID0gMCwgaW5kZXggPSAwOyAgIC8vIGluZGV4IG9mIGN1cnJlbnQgdmVydGV4IG9mIHNpbXBsZXhcbiAgICAgICAgbGV0IGEsIGIsIGMsIGQsIGFvLCBhYiwgYWMsIGFicGVycCwgYWNwZXJwLCBzaW1wbGV4ID0gbmV3IEFycmF5KDMpO1xuXG4gICAgICAgIC8vIOuRkCDtj7Trpqzqs6Qg7KSR7IusIOyijO2RnOulvCDthrXtlbTshJwg67Cp7Zal7J2EIOq1rO2VqeuLiOuLpC5cbiAgICAgICAgY29uc3QgcG9zaXRpb24xID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMxKTsgLy8gbm90IGEgQ29HIGJ1dFxuICAgICAgICBjb25zdCBwb3NpdGlvbjIgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIC8vIOuwqe2WpSB2ZWN0b3JcbiAgICAgICAgZCA9IFZlY3Rvci5zdWJ0cmFjdChwb3NpdGlvbjEsIHBvc2l0aW9uMik7XG5cbiAgICAgICAgLy8gaWYgaW5pdGlhbCBkaXJlY3Rpb24gaXMgemVybyDigJMgc2V0IGl0IHRvIGFueSBhcmJpdHJhcnkgYXhpcyAod2UgY2hvb3NlIFgpXG4gICAgICAgIGlmICgoZC54ID09IDApICYmIChkLnkgPT0gMCkpIHtcbiAgICAgICAgICAgIGQueCA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgc3VwcG9ydCBhcyBpbml0aWFsIHBvaW50IG9mIHRoZSBuZXcgc2ltcGxleFxuICAgICAgICBhID0gc2ltcGxleFswXSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAvLyBzdXBwb3J0IOygkOqzvCDrsKntlqXsnbQg6rCZ7J2AIOuwqe2WpeydtCDslYTri5Ag6rK97JqwXG4gICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhLCBkKSA8PSAwKSB7XG4gICAgICAgICAgICAvLyDrp4jsp4Drp4nsl5Ag7LaU6rCAIOuQnCDsoJDsnbQgZOydmCDrsKntlqXsnLzroZwg7JuQ7KCQ7J2EIOyngOuCmOy5mOyngCDslYrsnYAg6rK97JqwXG4gICAgICAgICAgICAvLyDqt7gg64uk7J2MIE1pbmtvd3NraSDtlansnYAg7JuQ7KCQ7J2EIO2PrO2VqCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cbiAgICAgICAgICAgIC8vIOy2lOqwgCDrkJwg66eI7KeA66eJIOygkOydgCBNaW5rb3dza2kgRGlmZmVyZW5jZeydmCDqsIDsnqXsnpDrpqzsl5Ag7J6I7Iq164uI64ukLlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NBU0UxWycsICdOTycsICddJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICB9XG5cbiAgICAgICAgZCA9IFZlY3Rvci5uZWdhdGUoYSk7IC8vIFRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgYWx3YXlzIHRvd2FyZHMgdGhlIG9yaWdpbiwgc28gdGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBuZWdhdGUoYSlcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaXRlckNvdW50Kys7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZXJDb3VudCk7XG5cbiAgICAgICAgICAgIGEgPSBzaW1wbGV4WysraW5kZXhdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcblxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NBU0UyWycsICdOTycsICddJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYeqwgCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuyoe2EsOuKlCAtYSDrpbwg7ZWY66m0IOuQqeuLiOuLpC5cbiAgICAgICAgICAgIGFvID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gZnJvbSBwb2ludCBBIHRvIE9yaWdpbiBpcyBqdXN0IG5lZ2F0aXZlIEFcblxuICAgICAgICAgICAgLy8gc2ltcGxleCBoYXMgMiBwb2ludHMgKGEgbGluZSBzZWdtZW50LCBub3QgYSB0cmlhbmdsZSB5ZXQpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAyKSB7XG5cbiAgICAgICAgICAgICAgICBiID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYik7IC8vIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuXG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5sZW5ndGhTcShkKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnBlcnBlbmRpY3VsYXIoYWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gc2tpcCB0byBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiID0gc2ltcGxleFsxXTtcbiAgICAgICAgICAgIGMgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICBhYyA9IFZlY3Rvci5zdWJ0cmFjdChjLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIENcblxuICAgICAgICAgICAgLy9hY+yZgCDsiJjsp4FcbiAgICAgICAgICAgIGFjcGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhYywgYWMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYScsIGEsICdiJywgYiwgJ2MnLCBjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbycsIGFvLCAnYWInLCBhYiwgJ2FjJywgYWMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjcGVycCcsIGFjcGVycCwgYWNwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFjcGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAvLyBhYyDsiJjsp4Eg7ISg67aE7J20IGHqsIAg7JuQ7KCQ7J2EIO2Wpe2VmOuKlCDrsKntlqUg67CY64yA7Y647JeQIOyeiOqzoFxuICAgICAgICAgICAgLy8g7KaJLCBhYyDsiJjsp4Eg7ISg67aEIOyViOyqveyXkCDsm5DsoJDsnbQg7J6I7Jy866m0XG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGQgPSBhY3BlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luJywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aEXG4gICAgICAgICAgICAgICAgYWJwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FicGVycCcsIGFicGVycCwgYWJwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhYnBlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pKTtcblxuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoTsnbQg7JuQ7KCQIOuwmOuMgCDrsKntlqXsnYQg7Zal7ZWY6rOgIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIC8vIOymiSwg7JuQ7KCQ7J20IOyCvOqwge2YlSDslYjsl5Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2ltcGxleFswXSA9IHNpbXBsZXhbMV07IC8vIHN3YXAgZmlyc3QgZWxlbWVudCAocG9pbnQgQylcbiAgICAgICAgICAgICAgICBkID0gYWJwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaW1wbGV4WzFdID0gc2ltcGxleFsyXTsgLy8gc3dhcCBlbGVtZW50IGluIHRoZSBtaWRkbGUgKHBvaW50IEIpXG4gICAgICAgICAgICAtLWluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnZleEh1bGwocG9pbnRzKVxuICAgIHtcbiAgICAgICAgLy8gRmluZCB0aGUgcmlnaHQgbW9zdCBwb2ludCBvbiB0aGUgaHVsbFxuICAgICAgICB2YXIgaTAgPSAwO1xuICAgICAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgICAgIGkwID0gaTtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBodWxsID0gW107XG4gICAgICAgIHZhciBtID0gMDtcbiAgICAgICAgdmFyIGloID0gaTA7XG5cbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGh1bGxbbV0gPSBpaDtcblxuICAgICAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGllID09IGloKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHIgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBWZWN0b3IuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgICAgICBpZiAoYyA9PSAwICYmIHYubGVuZ3RoU3EoKSA+IHIubGVuZ3RoU3EoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtKys7XG4gICAgICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgICAgICBpZiAoaWUgPT0gaTApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgdmVydGljZXNcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2h1bGxbaV1dO1xuICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gobmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UG9pbnRzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG1pZHBvaW50KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigoYS54ICsgYi54KSAvIDIsIChhLnkgKyBiLnkpIC8gMik7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRlYnVnVmVydGljZXModmVydGljZXMpIHtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coaW5kZXgsIHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMScpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczEpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMicpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczIpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG59XG5cbmZ1bmN0aW9uIHN0cih2ZXJ0ZXgsIGlzRml4ZWQgPSBmYWxzZSkge1xuICAgIGlmIChpc0ZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYCgke3ZlcnRleC54fSwke3ZlcnRleC55fSlgO1xuICAgIH1cbiAgICByZXR1cm4gYCgke3ZlcnRleC54LnRvRml4ZWQoMil9LCR7dmVydGV4LnkudG9GaXhlZCgyKX0pYDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvR0pLLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEdKSyBmcm9tICcuLi9namsvR0pLJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyXG57XG4gICAgc3RhdGljIGRyYXdNaW5rb3dza2lTdW0odmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygnZHJhd01pbmtvd3NraVN1bSgnLCB2ZXJ0aWNlczEubGVuZ3RoICogdmVydGljZXMyLmxlbmd0aCwgJyknKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgICAgICBjb25zdCBwYXRoID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZlcnRpY2VzMi5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHYxID0gdmVydGljZXMxW2ldLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IHYyID0gdmVydGljZXMyW2pdLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBWZWN0b3Iuc3VidHJhY3QodjEsIHYyKTtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goZGlmZik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSwgaiwgYHZlY1ske2RpZmYueH0sICR7ZGlmZi55fV1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZleEh1bGxQYXRoID0gR0pLLmNyZWF0ZUNvbnZleEh1bGwocGF0aCk7XG4gICAgICAgIFBhaW50ZXIuZHJhd1BvbHlnb24oY29udmV4SHVsbFBhdGgsIDEsIDB4RERERERELCAxKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9seWdvbih2ZXJ0aWNlcywgbGluZVdpZHRoID0gMSwgY29sb3IgPSAweDYwN0Q4QiwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBjb25zdCBncmFwaGljcyA9IHdpbmRvdy5nO1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGNvbnN0IHZlYzAgPSB2ZXJ0aWNlc1swXS5jbG9uZSgpO1xuICAgICAgICB2ZWMwLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcblxuICAgICAgICBncmFwaGljcy5tb3ZlVG8odmVjMC54LCB2ZWMwLnkpO1xuXG4gICAgICAgIC8vIHRoaXMuZHJhd1RleHQod2luZG93LnN0YWdlLCAnKCcgKyB2ZWMwLngudG9GaXhlZCgwKSArICcsJyArIHZlYzAueS50b0ZpeGVkKDApICsgJyknLCB2ZWMwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmVjID0gdmVydGljZXNbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgIHZlYy5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odmVjLngsIHZlYy55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMwLngsIHZlYzAueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1RleHQoc3RhZ2UsIHN0cmluZywgcG9pbnQsIGNvbG9yID0gJyNmZjMzMDAnKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoc3RyaW5nLCB7XG4gICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgLy8gZm9udFNpemU6IDQsXG4gICAgICAgICAgICAvLyBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBmaWxsOiBjb2xvcixcbiAgICAgICAgICAgIC8vIHN0cm9rZTogJyM0YTE4NTAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0ZXh0LnggPSBwb2ludC54O1xuICAgICAgICB0ZXh0LnkgPSBwb2ludC55O1xuXG4gICAgICAgIHN0YWdlLmFkZENoaWxkKHRleHQpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludChncmFwaGljcywgcG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocG9pbnQueCwgcG9pbnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlCb3VuZHMoZ3JhcGhpY3MsIGJvdW5kcywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3UmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJ0LngsIHJlY3QucnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJiLngsIHJlY3QucmIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LmxiLngsIHJlY3QubGIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50c0J5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubHQueCwgcmVjdC5sdC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucnQueCwgcmVjdC5ydC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucmIueCwgcmVjdC5yYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubGIueCwgcmVjdC5sYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHMoZ3JhcGhpY3MsIHBvaW50cywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcDEgPSBwb2ludHNbaV07XG4gICAgICAgICAgICB2YXIgcDIgPSBwb2ludHNbaSArIDEgPCBwb2ludHMubGVuZ3RoID8gaSArIDEgOiAwXTtcblxuICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdMaW5lKGdyYXBoaWNzLCBwMCwgcDEsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAwLngsIHAwLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocDEueCwgcDEueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0Fycm93KGdyYXBoaWNzLCBtb3ZlUG9pbnQsIHRvUG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcih0b1BvaW50LnggLSBtb3ZlUG9pbnQueCwgdG9Qb2ludC55IC0gbW92ZVBvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgdmVjdG9yLmludmVydCgpLm11bHRpcGx5U2NhbGFyKDE1KTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7Ki9cblxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKG1vdmVQb2ludC54IC0gdG9Qb2ludC54LCBtb3ZlUG9pbnQueSAtIHRvUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoMTUpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFpbnRlci5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL1BvaW50JztcbmltcG9ydCBDb252ZXhIdWxsIGZyb20gJy4uL2NvbnZleGh1bGwvQ29udmV4SHVsbCc7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vdXRpbHMvUGFzdGVsQ29sb3InO1xuaW1wb3J0IENvbnN0cyBmcm9tICcuLi9namsvQ29uc3RzJztcblxuXG5jb25zdCBTQ0FMRSA9IENvbnN0cy5TQ0FMRVxuICAgICwgU1RBR0UgPSBDb25zdHMuU1RBR0VcbiAgICAsIEZPTlRfQ09MT1IgPSAnI0ZGRkZGRidcbiAgICAsIEFYRVNfTElORV9DT0xPUiA9ICcweEZGRkZGRidcbiAgICAsIENPTlZFWF9IVUxMX0xJTkVfQ09MT1IgPSBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5rb3dza2lEaWZmZXJlbmNlIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7XG5cbiAgICAgICAgY29uc3QgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgICAgICAgICAgLCBjb252ZXhIdWxsID0gQ29udmV4SHVsbC5nZW5lcmF0ZSh2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdGhpcy50ZXh0cyA9IFtdO1xuICAgICAgICB0aGlzLmRyYXdBeGVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1ZldGljZXModmVydGljZXMpO1xuICAgICAgICB0aGlzLmRyYXdQb2x5Z29uKGNvbnZleEh1bGwpO1xuICAgIH1cblxuICAgIGRyYXdWZXRpY2VzKHZlcnRpY2VzKSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgUG9pbnQodmVydGV4LngsIHZlcnRleC55LCAzLCBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleCk7XG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQocG9pbnQpO1xuXG4gICAgICAgICAgICBjb25zdCB2ZWMgPSBWZWN0b3IuZGl2aWRlU2NhbGFyKHZlcnRleCwgU0NBTEUpO1xuICAgICAgICAgICAgdGhpcy5kcmF3VGV4dChgKCR7dmVjLnh9LCAke3ZlYy55fSlgLCBwb2ludC52ZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3UG9seWdvbih2ZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFwaGljcztcblxuICAgICAgICBnLmxpbmVTdHlsZSgxLCBDT05WRVhfSFVMTF9MSU5FX0NPTE9SLCAwLjUpO1xuICAgICAgICBnLm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7IGcubGluZVRvKHZlcnRleC54LCB2ZXJ0ZXgueSk7fSk7XG4gICAgICAgIGcubGluZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICAgIH1cblxuICAgIGRyYXdBeGVzKCkge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFwaGljc1xuICAgICAgICAgICAgLCBodyA9IFNUQUdFLndpZHRoIC8gMlxuICAgICAgICAgICAgLCBoaCA9IFNUQUdFLmhlaWdodCAvIDI7XG5cbiAgICAgICAgZy5saW5lU3R5bGUoMSwgQVhFU19MSU5FX0NPTE9SLCAwLjUpO1xuICAgICAgICBnLm1vdmVUbygtaHcsIDApO1xuICAgICAgICBnLmxpbmVUbyhodywgMCk7XG4gICAgICAgIGcubW92ZVRvKDAsIC1oaCk7XG4gICAgICAgIGcubGluZVRvKDAsIGhoKTtcbiAgICB9XG5cbiAgICBkcmF3VGV4dCh0ZXh0LCB2ZXJ0ZXggPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBuZXcgUElYSS5UZXh0KHRleHQsIHtcbiAgICAgICAgICAgIGZvbnQ6ICcyMHB4JyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGZpbGw6IEZPTlRfQ09MT1JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGFiZWwueCA9IHZlcnRleC54O1xuICAgICAgICBsYWJlbC55ID0gdmVydGV4Lnk7XG4gICAgICAgIHRoaXMudGV4dHMucHVzaChsYWJlbCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQobGFiZWwpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy50ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7XG4gICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQocG9pbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgIH1cblxuICAgIGdldFZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gW107XG4gICAgICAgIHZlcnRpY2VzMS5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNlczIuZm9yRWFjaCgoYikgPT4ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goVmVjdG9yLnN1YnRyYWN0KGEsIGIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UuanMiXSwic291cmNlUm9vdCI6IiJ9
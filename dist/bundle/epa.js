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
	
	        console.log('size', size);
	        for (var i = 0; i < size; i++) {
	            // compute j
	            var j = i + 1 == size ? 0 : i + 1;
	            // get the points that make up the current edge
	            var a = simplex[i],
	                b = simplex[j];
	            // create the edge
	            this.queue.add(new _ExpandingSimplexEdge2.default(a, b, this.winding));
	        }
	
	        console.log('this.queue.size', this.queue.size);
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
	
	        // console.log('EPA');
	        // console.log('maxIterations', this.maxIterations);
	        // console.log('distanceEpsilon', this.distanceEpsilon);
	    }
	
	    /**
	     * 침투 결과를 반환합니다.
	     * 시작점 GJK 의 Simplex 로 시작합니다.
	     * @param simplex {Vector[]}
	     * @param minkowskiSum {MinkowskiSum}
	     * @param penetration {Penetration}
	     */
	
	
	    _createClass(Epa, [{
	        key: 'getPenetration',
	        value: function getPenetration(simplex, minkowskiSum, penetration) {
	            // ExpadingSimplex를 생성하여 Edge 의 normal 과 depth 를 생성합니다.
	            var smplx = new _ExpandingSimplex2.default(simplex),
	                peek = smplx.queue.peek();
	            var edge = null,
	                point = null;
	
	            console.log('getPenetration', 'smplx.size', smplx.queue.size);
	
	            // GJK 의 충돌 결과의 Simplex 로 시작합니다.
	            // PriorityQueue 로 가장 근접합 Edge 의 normal 로 support 함수를 통해 simplex 를 반환합니다.
	            // simplex를 가장 근접한 Edge normal 에 projection 을 합니다.
	            // 가장 근접한 edge 의 깊이와 투영 거리가 허용 오차 안에 있으면 침투 normal 과 거리를 를 구한 것입니다.
	            // 허용 오차에 있지 않다는 건 Edge 가 볼록하지 않다는 것이여서 볼록하도록 확장합니다.
	            // 확장할 때는 가장 가까운 Edge 사이에 새 점을 추가해야합니다.
	            // 이렇게 하면 모양이 볼록하게 유지됩니다.
	            // 볼록하게 확장 한 후 다시 가장 근접한 Edge 를 구하고
	            // 해당 normal 로 support 함수를 통해 simplex 를 구해서 가장 근접한 Edge 의 깊이와 투영 거리가 오차 안에 있는지 체크
	            // 허용 오차면 해당 Edge normal 과 프로젝션이 침투 거리가 됩니다.
	            for (var i = 0; i < this.maxIterations; i++) {
	                edge = smplx.getClosestEdge();
	                point = minkowskiSum.getSupportPoint(edge.normal);
	
	                var projection = point.dot(edge.normal);
	
	                console.log(i, 'edge.distance:', edge.distance, 'projection', projection, '(projection - edge.distance)', projection - edge.distance);
	                if (projection - edge.distance < this.distanceEpsilon) {
	                    penetration.normal = edge.normal;
	                    penetration.depth = projection;
	
	                    console.log('----------------------------------');
	                    console.log('penetration', penetration.normal, penetration.depth);
	                    console.log('----------------------------------');
	                    console.log('peek', peek.normal, peek.distance);
	                    console.log('----------------------------------');
	                    return;
	                }
	
	                smplx.expand(point);
	            }
	
	            penetration.normal = edge.normal;
	            penetration.depth = point.dot(edge.normal);
	
	            console.log('----------------------------------');
	            console.log('penetration', penetration.normal, penetration.depth);
	            console.log('----------------------------------');
	            console.log('peek', peek.normal, peek.distance);
	            console.log('----------------------------------');
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
	
	var _Epsilon = __webpack_require__(343);
	
	var _Epsilon2 = _interopRequireDefault(_Epsilon);
	
	var _MinkowskiSumPoint = __webpack_require__(356);
	
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
	
	                    console.log('NONO1');
	                    return true;
	                }
	
	                p1 = GJK.getPointOnSegmentClosestToPoint(ORIGIN, a.point, c.point);
	                p2 = GJK.getPointOnSegmentClosestToPoint(ORIGIN, c.point, b.point);
	                p1Mag = p1.lengthSq();
	                p2Mag = p2.lengthSq();
	
	                if (p1Mag <= TOLERANCE) {
	                    d.normalize()();
	                    separation.distance = p1.normalize();
	                    separation.normal = d;
	                    GJK.findClosestPoints(a, c, separation);
	                    console.log('NONO2');
	                    return true;
	                } else if (p2Mag <= TOLERANCE) {
	                    d.normalize();
	                    separation.distance = p2.normalize();
	                    separation.normal = d;
	                    GJK.findClosestPoints(c, b, separation);
	                    console.log('NONO3');
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
	            console.log('NONO4');
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

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(327);
	
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vUG9pbnQuanM/ZjA1YSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanM/OTZmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsLmpzP2YyOTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdXNlLmpzPzkyNDEiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9lcGEvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvQ29uc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvVmVydGljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9HamsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0Vwc2lsb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL01pbmtvd3NraVN1bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovRXhwYW5kaW5nU2ltcGxleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0YWJsZXByaW9yaXR5cXVldWUvU3RhYmxlUHJpb3JpdHlRdWV1ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9FeHBhbmRpbmdTaW1wbGV4RWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovRXBhLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9Qb2x5Z29uLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9Db252ZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0dlb21ldHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9QZW5ldHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFpbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0dKSy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL01pbmtvd3NraVN1bVBvaW50LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwibXMiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJpbm5lckhlaWdodCIsInN0eWxlIiwicmVzaXplIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidGVtcCIsInZlYzIiLCJkb3QiLCJjb2VmZiIsImF0YW4yIiwiaG9yaXpvbnRhbEFuZ2xlIiwidmVydGljYWxBbmdsZSIsImhvcml6b250YWxBbmdsZURlZyIsImFuZ2xlIiwibngiLCJjb3MiLCJzaW4iLCJueSIsInJvdGF0ZSIsInJvdGF0aW9uIiwicm90YXRlVG8iLCJyb3RhdGVCeSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNxcnQiLCJkaXN0YW5jZVNxIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImxlbmd0aFNxIiwiYSIsImIiLCJ2IiwiY2xvbmUiLCJyZXQiLCJtdWx0aXBseVNjYWxhciIsImMiLCJyIiwiYWMiLCJiYyIsInZlYzEiLCJ0byIsImFkZCIsIlBvaW50IiwicmFkaXVzIiwiY29sb3IiLCJnZW5lcmF0ZSIsImhleCIsImFscGhhIiwiYnV0dG9uTW9kZSIsImludGVyYWN0aXZlIiwiY2xlYXIiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImx0IiwicmIiLCJwb3NpdGlvbiIsInJhbmRvbWl6ZSIsImZyb21PYmplY3QiLCJHcmFwaGljcyIsIlBhc3RlbENvbG9yIiwiaEJhc2UiLCJuZXdIIiwibmV3TCIsIkhTTHRvUkdCIiwiZyIsImhzbCIsInJnYiIsIlJHQnRvSGV4IiwiaGV4U2hhcCIsImgiLCJzIiwibCIsInJkIiwiaHVlVG9SR0IiLCJtIiwibiIsIm8iLCJxIiwicCIsInByZWZpeCIsInRvU3RyaW5nIiwiQ29udmV4SHVsbCIsInBvaW50cyIsInN0YWNrIiwic29ydCIsInNvcnRMb3dlcllYIiwiYmFzZVBvaW50IiwiaSIsInJlbGF0aXZlUG9zaXRpb24iLCJzb3J0Q2N3IiwicHVzaCIsIm5leHQiLCJmaXJzdCIsInNlY29uZCIsInBvcCIsImlzQ2N3IiwiY29udmV4SHVsbCIsImluZGV4IiwicG9pbnQiLCJwb2ludEEiLCJwb2ludEIiLCJwb2ludEMiLCJ0cmlhbmdsZUFyZWEiLCJkZWJ1Z0FycmF5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvbnZleEh1bGwiLCJpMCIsIngwIiwiaHVsbCIsImloIiwiaWUiLCJqIiwic3ViIiwiY3Jvc3MiLCJsZW5ndGhzcSIsIm5ld1BvaW50cyIsIk1vdXNlIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwicHJldlRpbWUiLCJjdXJyZW50VGltZSIsImRpZmZYIiwiZGlmZlkiLCJwbHVnaW5zIiwiaW50ZXJhY3Rpb24iLCJtb3VzZSIsInBvaW50ZXIiLCJ2YWx1ZSIsIl9yZW5kZXJlciIsIl9tb3VzZSIsIkRFU0tUT1BfTU9VU0UiLCJnbG9iYWwiLCJjdXJyZW50Q3Vyc29yU3R5bGUiLCJEYXRlIiwiZ2V0VGltZSIsIlRPVEFMIiwiSU5URVJWQUwiLCJTQ0FMRSIsIlNUQUdFIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJSQURfVE9fREVHIiwidHJpYW5nbGVzIiwiY3JlYXRlUG9seWdvbnMiLCJyZWN0YW5nbGVzIiwiVGVzdCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW5pdGlhbGl6ZSIsInNoYXBlcyIsImdyYXBoaWNzIiwiZGlzcGxheSIsImRpc3BsYXlDb2xsaXNpb24iLCJrZXlVcExpc3RlbmVyIiwib25LZXlVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd25MaXN0ZW5lciIsIm9uTW91c2VEb3duIiwib24iLCJjaGVja0NvbGxpc2lvbiIsImZvckVhY2giLCJzaGFwZSIsInJlbW92ZUNoaWxkIiwiZGVzdHJveSIsIm1pbmtvd3NraSIsImluZGV4MSIsImluZGV4MiIsInZlcnRpY2VzMSIsInZlcnRpY2VzMiIsInBlbmV0cmF0aW9uQ29sb3IiLCJwZW5ldHJhdGlvbkFscGhhIiwibXVsdGlwbHkiLCJzaGFwZTEiLCJ2ZXJ0aWNlcyIsInNoYXBlMiIsInNoYXBlMyIsInBvbHlnb24xIiwicG9seWdvbjIiLCJnamsiLCJwZW5ldHJhdGlvbiIsImhpc3RvcnkiLCJpc0NvbGxpc2lvbiIsImRldGVjdCIsImFycm93Iiwibm9ybWFsIiwiZGVwdGgiLCJsaW5lU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJ2aXNpYmxlIiwiaW50ZXJ2YWxJZCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImhpdEFyZWEiLCJSZWN0YW5nbGUiLCJlIiwia2V5Q29kZSIsIlNQQUNFIiwiZ2V0QW5nbGUiLCJub3JtIiwicmFkaWFuIiwiYWNvcyIsImRvdFByb2R1Y3QiLCJwb2x5Z29uIiwidG90YWwiLCJwb2x5Z29ucyIsInZlcnRleCIsIkhpc3RvcnkiLCJzaW1wbGV4IiwiQXJyYXkiLCJkaXJlY3Rpb25zIiwiRk9OVF9TSVpFIiwiU2hhcGUiLCJsaW5lQ29sb3IiLCJsaW5lQWxwaGEiLCJ0ZXh0Q29sb3IiLCJyZXBsYWNlIiwibGFiZWxzIiwiY3JlYXRlTGFiZWwiLCJkcmF3IiwidGV4dCIsIlRleHQiLCJhbGlnbiIsImZvbnQiLCJmaWxsIiwib3JpZ2luIiwibGFiZWwiLCJkaXZpZGVTY2FsYXIiLCJDb25zdHMiLCJWZXJ0aWNlcyIsIkZPTlRfQ09MT1IiLCJBWEVTX0xJTkVfQ09MT1IiLCJDT05WRVhfSFVMTF9MSU5FX0NPTE9SIiwiTWlua293c2tpRGlmZmVyZW5jZSIsImdldFZlcnRpY2VzIiwidGV4dHMiLCJkcmF3QXhlcyIsImRyYXdWZXRpY2VzIiwiZHJhd1BvbHlnb24iLCJkcmF3VGV4dCIsImh3IiwiaGgiLCJERUZBVUxUX01BWF9JVEVSQVRJT05TIiwiREVGQVVMVF9ERVRFQ1RfRVBTSUxPTiIsIkdqayIsIm1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyIiwiY29udmV4MSIsImNvbnZleDIiLCJjMSIsImdldENlbnRlciIsImMyIiwiZ2V0SW5pdGlhbERpcmVjdGlvbiIsImRldGVjdDIiLCJnZXRQZW5ldHJhdGlvbiIsImlzWmVybyIsInNldCIsImdldFN1cHBvcnRQb2ludCIsInNldEhpc3RvcnkiLCJpbnZlcnQiLCJjaGVja1NpbXBsZXgiLCJhbyIsIm5lZ2F0ZSIsImFiIiwiYWNQZXJwIiwidHJpcGxlUHJvZHVjdCIsImFjTG9jYXRpb24iLCJzcGxpY2UiLCJhYlBlcnAiLCJhYkxvY2F0aW9uIiwiZ2V0TWFnbml0dWRlU3F1YXJlZCIsIkUiLCJsZWZ0IiwiRXBzaWxvbiIsImNvbXB1dGUiLCJNaW5rb3dza2lTdW0iLCJwb2ludDEiLCJnZXRGYXJ0aGVzdFBvaW50IiwicG9pbnQyIiwiRXhwYW5kaW5nU2ltcGxleCIsIndpbmRpbmciLCJnZXRXaW5kaW5nIiwicXVldWUiLCJkaXN0YW5jZSIsInNpemUiLCJwZWVrIiwiZWRnZSIsInBvbGwiLCJlZGdlMSIsImVkZ2UyIiwiRXhwYW5kaW5nU2ltcGxleEVkZ2UiLCJyaWdodCIsIkRFRkFVTFRfRElTVEFOQ0VfRVBTSUxPTiIsIkVwYSIsIm1heEl0ZXJhdGlvbnMiLCJkaXN0YW5jZUVwc2lsb24iLCJtaW5rb3dza2lTdW0iLCJzbXBseCIsImdldENsb3Nlc3RFZGdlIiwicHJvamVjdGlvbiIsImV4cGFuZCIsIkVycm9yIiwiUG9seWdvbiIsIm5vcm1hbHMiLCJnZXRDb3VudGVyQ2xvY2t3aXNlRWRnZU5vcm1hbHMiLCJjZW50ZXIiLCJhdmciLCJjb3VudCIsIm1heGltdW0iLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJsZWZ0TiIsInJpZ2h0TiIsInZtIiwiUG9pbnRGZWF0dXJlIiwidmwiLCJFZGdlRmVhdHVyZSIsInZyIiwiQ29udmV4IiwiR2VvbWV0cnkiLCJwMSIsInAyIiwiUGVuZXRyYXRpb24iLCJQYWludGVyIiwicGF0aCIsInYxIiwidjIiLCJkaWZmIiwiY29udmV4SHVsbFBhdGgiLCJsaW5lV2lkdGgiLCJ2ZWMwIiwibWFnbmlmaWNhdGlvbiIsInN0cmluZyIsImlzQ2xlYXIiLCJib3VuZHMiLCJ0aGlja25lc3MiLCJkcmF3UmVjdCIsInJlY3QiLCJydCIsImxiIiwicDAiLCJtb3ZlUG9pbnQiLCJ0b1BvaW50Iiwic2NhbGUiLCJtZSIsInRhcmdldCIsIk9SSUdJTiIsIlRPTEVSQU5DRSIsIkdKSyIsIm1heFByb2R1Y3QiLCJwcm9kdWN0IiwiaW5kZXhPZkZ1cnRoZXN0UG9pbnQiLCJzdHIiLCJpdGVyQ291bnQiLCJkIiwiYWJwZXJwIiwiYWNwZXJwIiwicG9zaXRpb24xIiwiYXZlcmFnZVBvaW50IiwicG9zaXRpb24yIiwic3VwcG9ydCIsInBlcnBlbmRpY3VsYXIiLCJzZXBhcmF0aW9uIiwicDFNYWciLCJwMk1hZyIsInN1cHBvcnQyIiwiZ2V0UG9pbnRPblNlZ21lbnRDbG9zZXN0VG9Qb2ludCIsImNvbnRhaW5zT3JpZ2luIiwiZmluZENsb3Nlc3RQb2ludHMiLCJzYSIsInNiIiwic2MiLCJzdXBwb3J0UG9pbnQxIiwic3VwcG9ydFBvaW50MiIsImxsIiwibDIiLCJsMSIsInByb2pBb09udG9BYiIsImxlbmd0aFNxdWFyZWQiLCJ0IiwiY2xvc2V0UG9pbnQiLCJtYWduaXR1ZGUiLCJsaW5lUG9pbnQxIiwibGluZVBvaW50MiIsInAxVG9QIiwibGluZSIsImFiMiIsImFwX2FiIiwiY2xhbXAiLCJkZWJ1Z1ZlcnRpY2VzIiwiY29uc29sZVZlcnRpY2VzIiwiaXNGaXhlZCIsIk1pbmtvd3NraVN1bVBvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUMsY0FBWTtBQUNUQSxZQUFPQyxNQUFQLEdBQWdCLFlBQVk7QUFDeEIsYUFBTUMsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDSCxNQUZEO0FBR0gsRUFKQSxHQUFEOztBQU1BLEtBQUlDLGVBQUo7QUFBQSxLQUFZQyxpQkFBWjtBQUFBLEtBQXNCQyxjQUF0QjtBQUFBLEtBQTZCQyxhQUE3QjtBQUFBLEtBQW1DQyxrQkFBbkM7O0tBRU1MLEk7QUFDRixxQkFBYztBQUFBOztBQUNWLGNBQUtNLElBQUw7QUFDQSxjQUFLQyxRQUFMO0FBQ0EsY0FBS0MsUUFBTDtBQUNIOzs7O2dDQUVNO0FBQ0hQLHNCQUFTUSxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQVQ7O0FBRUFSLHdCQUFXLElBQUlTLEtBQUtDLGNBQVQsQ0FBd0JYLE9BQU9ZLEtBQS9CLEVBQXNDWixPQUFPYSxNQUE3QyxFQUFxRDtBQUM1REMsdUJBQU1kLE1BRHNEO0FBRTVEZSw2QkFBWSxJQUZnRDtBQUc1REMsa0NBQWlCO0FBSDJDLGNBQXJELENBQVg7O0FBTUEsNkJBQU1mLFFBQU4sR0FBaUJBLFFBQWpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQUMscUJBQVEsSUFBSVEsS0FBS08sU0FBVCxFQUFSO0FBQ0FiLHlCQUFZLElBQUlNLEtBQUtPLFNBQVQsRUFBWjtBQUNBZixtQkFBTWdCLFFBQU4sQ0FBZWQsU0FBZjs7QUFFQUQsb0JBQU8sbUJBQVNGLFFBQVQsQ0FBUDs7QUFFQUcsdUJBQVVjLFFBQVYsQ0FBbUJmLElBQW5COztBQUVBLGtCQUFLZ0IsVUFBTDtBQUNBLGtCQUFLQyxZQUFMO0FBQ0g7OztvQ0FFVTtBQUNQeEIsb0JBQU95QixRQUFQLEdBQWtCLEtBQUtkLFFBQUwsQ0FBY2UsSUFBZCxDQUFtQixJQUFuQixDQUFsQjtBQUNIOzs7b0NBRVUsQ0FBRTs7O29DQUVEQyxFLEVBQUk7QUFDWixrQkFBS0MsTUFBTCxDQUFZRCxFQUFaO0FBQ0FFLDhCQUFpQixLQUFLTixVQUFMLENBQWdCRyxJQUFoQixDQUFxQixJQUFyQixDQUFqQjtBQUNIOzs7Z0NBRU1DLEUsRUFBSTtBQUNQcEIsa0JBQUtxQixNQUFMO0FBQ0F2QixzQkFBU3lCLE1BQVQsQ0FBZ0J4QixLQUFoQjtBQUNIOzs7d0NBRWM7QUFDWCxpQkFBTVUsUUFBUWhCLE9BQU8rQixVQUFQLEdBQW9CL0IsT0FBT2dDLGdCQUF6QztBQUNBLGlCQUFNZixTQUFTakIsT0FBT2lDLFdBQVAsR0FBcUJqQyxPQUFPZ0MsZ0JBQTNDOztBQUVBOzs7O0FBSUE1QixvQkFBT1ksS0FBUCxHQUFlQSxLQUFmO0FBQ0FaLG9CQUFPYSxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBYixvQkFBTzhCLEtBQVAsQ0FBYWxCLEtBQWIsR0FBcUJBLFFBQVEsSUFBN0I7QUFDQVosb0JBQU84QixLQUFQLENBQWFqQixNQUFiLEdBQXNCQSxTQUFTLElBQS9COztBQUVBOzs7O0FBSUFaLHNCQUFTOEIsTUFBVCxDQUFnQm5CLEtBQWhCLEVBQXVCQyxNQUF2Qjs7QUFFQSxpQkFBSVYsSUFBSixFQUFVO0FBQ05BLHNCQUFLNEIsTUFBTDtBQUNIO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GTCxLQUFNQyxVQUFVLE1BQU1DLEtBQUtDLEVBQTNCOztBQUdBLFVBQVNDLE1BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN2QixZQUFPSixLQUFLSyxLQUFMLENBQVdMLEtBQUtFLE1BQUwsTUFBaUJFLE1BQU1ELEdBQU4sR0FBWSxDQUE3QixJQUFrQ0EsR0FBN0MsQ0FBUDtBQUNIOztBQUVELFVBQVNHLGNBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQzFCLFlBQU9BLE1BQU1SLE9BQWI7QUFDSDs7QUFFRCxVQUFTUyxjQUFULENBQXlCQyxHQUF6QixFQUE4QjtBQUMxQixZQUFPQSxNQUFNVixPQUFiO0FBQ0g7O0FBR0Q7Ozs7O0tBSXFCVyxNOzs7O0FBRWpCOzs7Ozs7Ozs7Ozs7OzttQ0FjaUJDLEcsRUFDakI7QUFDSSxvQkFBTyxJQUFJRCxNQUFKLENBQVdDLElBQUksQ0FBSixLQUFVLENBQXJCLEVBQXdCQSxJQUFJLENBQUosS0FBVSxDQUFsQyxDQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWNrQkMsRyxFQUNsQjtBQUNJLG9CQUFPLElBQUlGLE1BQUosQ0FBV0UsSUFBSUMsQ0FBSixJQUFTLENBQXBCLEVBQXVCRCxJQUFJRSxDQUFKLElBQVMsQ0FBaEMsQ0FBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7QUFZQSx1QkFDQTtBQUFBLGFBRFlELENBQ1osdUVBRGdCLENBQ2hCO0FBQUEsYUFEbUJDLENBQ25CLHVFQUR1QixDQUN2Qjs7QUFBQTs7QUFDSSxhQUFJLEVBQUUsZ0JBQWdCSixNQUFsQixDQUFKLEVBQStCO0FBQzNCLG9CQUFPLElBQUlBLE1BQUosQ0FBV0csQ0FBWCxFQUFjQyxDQUFkLENBQVA7QUFDSDs7QUFFRCxjQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxjQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFlS0MsRyxFQUNMO0FBQ0ksa0JBQUtGLENBQUwsSUFBVUUsSUFBSUYsQ0FBZDtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWVLRSxHLEVBQ0w7QUFDSSxrQkFBS0QsQ0FBTCxJQUFVQyxJQUFJRCxDQUFkO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBZUlDLEcsRUFDSjtBQUNJLGtCQUFLRixDQUFMLElBQVVFLElBQUlGLENBQWQ7QUFDQSxrQkFBS0MsQ0FBTCxJQUFVQyxJQUFJRCxDQUFkO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOzs7OztBQVFEOzs7Ozs7Ozs7Ozs7OzttQ0FjVUUsTSxFQUNWO0FBQ0ksa0JBQUtILENBQUwsSUFBVUcsTUFBVjtBQUNBLGtCQUFLRixDQUFMLElBQVVFLE1BQVY7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWNXQSxNLEVBQ1g7QUFDSSxrQkFBS0gsQ0FBTCxJQUFVRyxNQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FjV0EsTSxFQUNYO0FBQ0ksa0JBQUtGLENBQUwsSUFBVUUsTUFBVjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWVVRCxHLEVBQ1Y7QUFDSSxrQkFBS0YsQ0FBTCxJQUFVRSxJQUFJRixDQUFkO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBZVVFLEcsRUFDVjtBQUNJLGtCQUFLRCxDQUFMLElBQVVDLElBQUlELENBQWQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FlU0MsRyxFQUNUO0FBQ0ksa0JBQUtGLENBQUwsSUFBVUUsSUFBSUYsQ0FBZDtBQUNBLGtCQUFLQyxDQUFMLElBQVVDLElBQUlELENBQWQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7Ozs4QkFTSUMsRyxFQUNMO0FBQ0ksb0JBQU8sS0FBS0UsUUFBTCxDQUFjRixHQUFkLENBQVA7QUFDSDs7Ozs7QUFTRDs7Ozs7Ozs7Ozs7Ozs7d0NBY2VDLE0sRUFDZjtBQUNJLGtCQUFLSCxDQUFMLElBQVVHLE1BQVY7QUFDQSxrQkFBS0YsQ0FBTCxJQUFVRSxNQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FjZ0JBLE0sRUFDaEI7QUFDSSxrQkFBS0gsQ0FBTCxJQUFVRyxNQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FjZ0JBLE0sRUFDaEI7QUFDSSxrQkFBS0YsQ0FBTCxJQUFVRSxNQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBZVFFLE0sRUFDUjtBQUNJLGtCQUFLTCxDQUFMLElBQVVLLE9BQU9MLENBQWpCO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBZVFLLE0sRUFDUjtBQUNJLGtCQUFLSixDQUFMLElBQVVJLE9BQU9KLENBQWpCO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBZU9JLE0sRUFDUDtBQUNJLGtCQUFLTCxDQUFMLElBQVVLLE9BQU9MLENBQWpCO0FBQ0Esa0JBQUtDLENBQUwsSUFBVUksT0FBT0osQ0FBakI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7Ozs7O0FBU0Q7Ozs7Ozs7Ozs7Ozs7O3NDQWNhRSxNLEVBQ2I7QUFDSSxpQkFBSUEsV0FBVyxDQUFmLEVBQWtCO0FBQ2Qsc0JBQUtILENBQUwsSUFBVUcsTUFBVjtBQUNBLHNCQUFLRixDQUFMLElBQVVFLE1BQVY7QUFDSCxjQUhELE1BR087QUFDSCxzQkFBS0gsQ0FBTCxHQUFTLENBQVQ7QUFDQSxzQkFBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDSDs7QUFFRCxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQWNjRSxNLEVBQ2Q7QUFDSSxpQkFBSUEsV0FBVyxDQUFmLEVBQWtCO0FBQ2Qsc0JBQUtILENBQUwsSUFBVUcsTUFBVjtBQUNILGNBRkQsTUFFTztBQUNILHNCQUFLSCxDQUFMLEdBQVMsQ0FBVDtBQUNIO0FBQ0Qsb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FjY0csTSxFQUNkO0FBQ0ksaUJBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNkLHNCQUFLRixDQUFMLElBQVVFLE1BQVY7QUFDSCxjQUZELE1BRU87QUFDSCxzQkFBS0YsQ0FBTCxHQUFTLENBQVQ7QUFDSDtBQUNELG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7OzttQ0FjQTtBQUNJLGtCQUFLRCxDQUFMLElBQVUsQ0FBQyxDQUFYO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7O21DQWNBO0FBQ0ksa0JBQUtDLENBQUwsSUFBVSxDQUFDLENBQVg7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBY0E7QUFDSSxrQkFBS0ssT0FBTDtBQUNBLGtCQUFLQyxPQUFMO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOzs7OztBQWFEOzs7Ozs7Ozs7Ozs7Ozs7bUNBZVVGLE0sRUFDVjtBQUNJLGtCQUFLTCxDQUFMLElBQVVLLE9BQU9MLENBQWpCO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBZVVLLE0sRUFDVjtBQUNJLGtCQUFLSixDQUFMLElBQVVJLE9BQU9KLENBQWpCO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBZVNJLE0sRUFDVDtBQUNJLGtCQUFLTCxDQUFMLElBQVVLLE9BQU9MLENBQWpCO0FBQ0Esa0JBQUtDLENBQUwsSUFBVUksT0FBT0osQ0FBakI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQWNlRSxNLEVBQ2Y7QUFDSSxrQkFBS0gsQ0FBTCxJQUFVRyxNQUFWO0FBQ0Esa0JBQUtGLENBQUwsSUFBVUUsTUFBVjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7O3lDQWVlQSxNLEVBQ2hCO0FBQ0ksa0JBQUtILENBQUwsSUFBVUcsTUFBVjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7O3lDQUdlQSxNLEVBQ2hCO0FBQ0ksa0JBQUtGLENBQUwsSUFBVUUsTUFBVjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozt5Q0FLQTtBQUNJLG9CQUFPLElBQUlOLE1BQUosQ0FBVyxDQUFDLEtBQUtJLENBQWpCLEVBQW9CLEtBQUtELENBQXpCLENBQVA7QUFDSDs7Ozs7QUFZRDs7OytDQUlBO0FBQ0ksb0JBQU8sSUFBSUgsTUFBSixDQUFXLEtBQUtJLENBQWhCLEVBQW1CLENBQUMsS0FBS0QsQ0FBekIsQ0FBUDtBQUNIOzs7OztBQTRCRDs7Ozs7O3FDQU9BO0FBQ0ksaUJBQU1RLFNBQVMsS0FBS0EsTUFBTCxFQUFmOztBQUVBLGlCQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDZCxzQkFBS1IsQ0FBTCxHQUFTLENBQVQ7QUFDQSxzQkFBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDSCxjQUhELE1BR087QUFDSCxzQkFBS1EsTUFBTCxDQUFZLElBQUlaLE1BQUosQ0FBV1csTUFBWCxFQUFtQkEsTUFBbkIsQ0FBWjtBQUNIO0FBQ0Qsb0JBQU8sSUFBUDtBQUNIOzs7Z0NBSUQ7QUFDSSxvQkFBTyxLQUFLRSxTQUFMLEVBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWVNbkIsRyxFQUFLb0IsTSxFQUNYO0FBQ0ksaUJBQUl4QixLQUFLeUIsR0FBTCxDQUFTLEtBQUtaLENBQWQsSUFBbUJULEdBQXZCLEVBQTJCO0FBQUUsc0JBQUtTLENBQUwsSUFBVVcsTUFBVjtBQUFtQjtBQUNoRCxpQkFBSXhCLEtBQUt5QixHQUFMLENBQVMsS0FBS1gsQ0FBZCxJQUFtQlYsR0FBdkIsRUFBMkI7QUFBRSxzQkFBS1UsQ0FBTCxJQUFVVSxNQUFWO0FBQW1CO0FBQ2hELG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWVVRSxPLEVBQVNDLFcsRUFDbkI7QUFDSSxrQkFBS0MsVUFBTCxDQUFnQkYsT0FBaEIsRUFBeUJDLFdBQXpCO0FBQ0Esa0JBQUtFLFVBQUwsQ0FBZ0JILE9BQWhCLEVBQXlCQyxXQUF6Qjs7QUFFQSxvQkFBTyxJQUFQO0FBQ0g7OztvQ0FTVUQsTyxFQUFTQyxXLEVBQ3BCO0FBQ0ksaUJBQUl4QixNQUFNSCxLQUFLRyxHQUFMLENBQVN1QixRQUFRYixDQUFqQixFQUFvQmMsWUFBWWQsQ0FBaEMsQ0FBVjtBQUNBLGlCQUFJVCxNQUFNSixLQUFLSSxHQUFMLENBQVNzQixRQUFRYixDQUFqQixFQUFvQmMsWUFBWWQsQ0FBaEMsQ0FBVjtBQUNBLGtCQUFLQSxDQUFMLEdBQVNYLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixDQUFUO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOzs7b0NBV1VzQixPLEVBQVNDLFcsRUFDcEI7QUFDSSxpQkFBSXhCLE1BQU1ILEtBQUtHLEdBQUwsQ0FBU3VCLFFBQVFaLENBQWpCLEVBQW9CYSxZQUFZYixDQUFoQyxDQUFWO0FBQ0EsaUJBQUlWLE1BQU1KLEtBQUtJLEdBQUwsQ0FBU3NCLFFBQVFaLENBQWpCLEVBQW9CYSxZQUFZYixDQUFoQyxDQUFWO0FBQ0Esa0JBQUtBLENBQUwsR0FBU1osT0FBT0MsR0FBUCxFQUFZQyxHQUFaLENBQVQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7Ozs7O0FBV0Q7Ozs7Ozs7Ozs7Ozs7OztzQ0FlYXNCLE8sRUFBU0MsVyxFQUN0QjtBQUNJLGlCQUFJLENBQUMsQ0FBRTNCLEtBQUs4QixLQUFMLENBQVc5QixLQUFLRSxNQUFMLEVBQVgsQ0FBUCxFQUFrQztBQUM5QixzQkFBSzBCLFVBQUwsQ0FBZ0JGLE9BQWhCLEVBQXlCQyxXQUF6QjtBQUNILGNBRkQsTUFFTztBQUNILHNCQUFLRSxVQUFMLENBQWdCSCxPQUFoQixFQUF5QkMsV0FBekI7QUFDSDtBQUNELG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7OzttQ0FjQTtBQUNJLGtCQUFLZCxDQUFMLEdBQVNiLEtBQUs4QixLQUFMLENBQVcsS0FBS2pCLENBQWhCLENBQVQ7QUFDQSxrQkFBS0MsQ0FBTCxHQUFTZCxLQUFLOEIsS0FBTCxDQUFXLEtBQUtoQixDQUFoQixDQUFUO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OztpQ0FjUWlCLFMsRUFDUjtBQUNJLGlCQUFJLE9BQU9BLFNBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFBRUEsNkJBQVksQ0FBWjtBQUFnQjtBQUN4RCxrQkFBS2xCLENBQUwsR0FBUyxLQUFLQSxDQUFMLENBQU9tQixPQUFQLENBQWVELFNBQWYsQ0FBVDtBQUNBLGtCQUFLakIsQ0FBTCxHQUFTLEtBQUtBLENBQUwsQ0FBT2tCLE9BQVAsQ0FBZUQsU0FBZixDQUFUO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWdCS2hCLEcsRUFBS2tCLE0sRUFDVjtBQUNJLGlCQUFJLE9BQU9BLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDL0JBLDBCQUFTLEdBQVQ7QUFDSDs7QUFFRCxrQkFBS3BCLENBQUwsR0FBUyxDQUFDLElBQUlvQixNQUFMLElBQWUsS0FBS3BCLENBQXBCLEdBQXdCb0IsU0FBU2xCLElBQUlGLENBQTlDO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWdCS0UsRyxFQUFLa0IsTSxFQUNWO0FBQ0ksaUJBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUMvQkEsMEJBQVMsR0FBVDtBQUNIOztBQUVELGtCQUFLbkIsQ0FBTCxHQUFTLENBQUMsSUFBSW1CLE1BQUwsSUFBZSxLQUFLbkIsQ0FBcEIsR0FBd0JtQixTQUFTbEIsSUFBSUQsQ0FBOUM7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBZ0JJQyxHLEVBQUtrQixNLEVBQ1Q7QUFDSSxrQkFBS0MsSUFBTCxDQUFVbkIsR0FBVixFQUFla0IsTUFBZjtBQUNBLGtCQUFLRSxJQUFMLENBQVVwQixHQUFWLEVBQWVrQixNQUFmO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBY0E7QUFDSSxvQkFBTyxJQUFJdkIsTUFBSixDQUFXLEtBQUtHLENBQWhCLEVBQW1CLEtBQUtDLENBQXhCLENBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBY01DLEcsRUFDTjtBQUNJLGtCQUFLRixDQUFMLEdBQVNFLElBQUlGLENBQWI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWNNRSxHLEVBQ047QUFDSSxrQkFBS0QsQ0FBTCxHQUFTQyxJQUFJRCxDQUFiO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFjS0MsRyxFQUNMO0FBQ0ksa0JBQUtxQixLQUFMLENBQVdyQixHQUFYO0FBQ0Esa0JBQUtzQixLQUFMLENBQVd0QixHQUFYO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Z0NBYUE7QUFDSSxrQkFBS0YsQ0FBTCxHQUFTLEtBQUtDLENBQUwsR0FBUyxDQUFsQjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Z0NBTUE7QUFDSSxpQkFBTXdCLE9BQU8sS0FBS3pCLENBQWxCO0FBQ0Esa0JBQUtBLENBQUwsR0FBUyxLQUFLQyxDQUFkO0FBQ0Esa0JBQUtBLENBQUwsR0FBUyxDQUFDd0IsSUFBVjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7aUNBTUE7QUFDSSxpQkFBTUEsT0FBTyxLQUFLekIsQ0FBbEI7QUFDQSxrQkFBS0EsQ0FBTCxHQUFTLENBQUMsS0FBS0MsQ0FBZjtBQUNBLGtCQUFLQSxDQUFMLEdBQVN3QixJQUFUO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFjSUMsSSxFQUNKO0FBQ0ksb0JBQU8sS0FBSzFCLENBQUwsR0FBUzBCLEtBQUsxQixDQUFkLEdBQWtCLEtBQUtDLENBQUwsR0FBU3lCLEtBQUt6QixDQUF2QztBQUNIOzs7b0NBR1VDLEcsRUFDWDtBQUNJLG9CQUFPLEtBQUt5QixHQUFMLENBQVN6QixHQUFULENBQVA7QUFDSDs7OytCQVNLd0IsSSxFQUNOO0FBQ0ksb0JBQVEsS0FBSzFCLENBQUwsR0FBUzBCLEtBQUt6QixDQUFmLEdBQXFCLEtBQUtBLENBQUwsR0FBU3lCLEtBQUsxQixDQUExQztBQUNIOzs7OztBQTRCRDs7Ozs7Ozs7Ozs7Ozs7O3FDQWVZMEIsSSxFQUNaO0FBQ0ksaUJBQUlFLFFBQVEsQ0FBRyxLQUFLNUIsQ0FBTCxHQUFTMEIsS0FBSzFCLENBQWYsR0FBbUIsS0FBS0MsQ0FBTCxHQUFTeUIsS0FBS3pCLENBQW5DLEtBQTRDeUIsS0FBSzFCLENBQUwsR0FBTzBCLEtBQUsxQixDQUFiLEdBQWlCMEIsS0FBS3pCLENBQUwsR0FBT3lCLEtBQUt6QixDQUF4RSxDQUFaO0FBQ0Esa0JBQUtELENBQUwsR0FBUzRCLFFBQVFGLEtBQUsxQixDQUF0QjtBQUNBLGtCQUFLQyxDQUFMLEdBQVMyQixRQUFRRixLQUFLekIsQ0FBdEI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7OzJDQXVCQTtBQUNJLG9CQUFPZCxLQUFLMEMsS0FBTCxDQUFXLEtBQUs1QixDQUFoQixFQUFtQixLQUFLRCxDQUF4QixDQUFQO0FBQ0g7Ozs4Q0FJRDtBQUNJLG9CQUFPUCxlQUFlLEtBQUtxQyxlQUFMLEVBQWYsQ0FBUDtBQUNIOzs7eUNBSUQ7QUFDSSxvQkFBTzNDLEtBQUswQyxLQUFMLENBQVcsS0FBSzdCLENBQWhCLEVBQW1CLEtBQUtDLENBQXhCLENBQVA7QUFDSDs7OzRDQUlEO0FBQ0ksb0JBQU9SLGVBQWUsS0FBS3NDLGFBQUwsRUFBZixDQUFQO0FBQ0g7OztpQ0FJRDtBQUNJLG9CQUFPLEtBQUtELGVBQUwsRUFBUDtBQUNIOzs7b0NBSUQ7QUFDSSxvQkFBTyxLQUFLRSxrQkFBTCxFQUFQO0FBQ0g7OztxQ0FJRDtBQUNJLG9CQUFPLEtBQUtGLGVBQUwsRUFBUDtBQUNIOzs7Z0NBR01HLEssRUFDUDtBQUNJLGlCQUFJQyxLQUFNLEtBQUtsQyxDQUFMLEdBQVNiLEtBQUtnRCxHQUFMLENBQVNGLEtBQVQsQ0FBVixHQUE4QixLQUFLaEMsQ0FBTCxHQUFTZCxLQUFLaUQsR0FBTCxDQUFTSCxLQUFULENBQWhEO0FBQ0EsaUJBQUlJLEtBQU0sS0FBS3JDLENBQUwsR0FBU2IsS0FBS2lELEdBQUwsQ0FBU0gsS0FBVCxDQUFWLEdBQThCLEtBQUtoQyxDQUFMLEdBQVNkLEtBQUtnRCxHQUFMLENBQVNGLEtBQVQsQ0FBaEQ7O0FBRUEsa0JBQUtqQyxDQUFMLEdBQVNrQyxFQUFUO0FBQ0Esa0JBQUtqQyxDQUFMLEdBQVNvQyxFQUFUOztBQUVBLG9CQUFPLElBQVA7QUFDSDs7O21DQUdTSixLLEVBQ1Y7QUFDSUEscUJBQVF0QyxlQUFlc0MsS0FBZixDQUFSO0FBQ0Esb0JBQU8sS0FBS0ssTUFBTCxDQUFZTCxLQUFaLENBQVA7QUFDSDs7O2tDQUdRTSxRLEVBQ1Q7QUFDSSxvQkFBTyxLQUFLRCxNQUFMLENBQVlDLFdBQVMsS0FBS04sS0FBTCxFQUFyQixDQUFQO0FBQ0g7OztxQ0FHV00sUSxFQUNaO0FBQ0lBLHdCQUFXNUMsZUFBZTRDLFFBQWYsQ0FBWDtBQUNBLG9CQUFPLEtBQUtDLFFBQUwsQ0FBY0QsUUFBZCxDQUFQO0FBQ0g7OztrQ0FHUUEsUSxFQUNUO0FBQ0ksaUJBQUlOLFFBQVEsS0FBS0EsS0FBTCxLQUFlTSxRQUEzQjs7QUFFQSxvQkFBTyxLQUFLRCxNQUFMLENBQVlMLEtBQVosQ0FBUDtBQUNIOzs7cUNBR1dNLFEsRUFDWjtBQUNJQSx3QkFBVzVDLGVBQWU0QyxRQUFmLENBQVg7QUFDQSxvQkFBTyxLQUFLRSxRQUFMLENBQWNGLFFBQWQsQ0FBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OzttQ0FjVXJDLEcsRUFDVjtBQUNJLG9CQUFPLEtBQUtGLENBQUwsR0FBU0UsSUFBSUYsQ0FBcEI7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBY2FFLEcsRUFDYjtBQUNJLG9CQUFPZixLQUFLeUIsR0FBTCxDQUFTLEtBQUs4QixTQUFMLENBQWV4QyxHQUFmLENBQVQsQ0FBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OzttQ0FjVUEsRyxFQUNWO0FBQ0ksb0JBQU8sS0FBS0QsQ0FBTCxHQUFTQyxJQUFJRCxDQUFwQjtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FjYUMsRyxFQUNiO0FBQ0ksb0JBQU9mLEtBQUt5QixHQUFMLENBQVMsS0FBSytCLFNBQUwsQ0FBZXpDLEdBQWYsQ0FBVCxDQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQWNTQSxHLEVBQ1Q7QUFDSSxvQkFBT2YsS0FBS3lELElBQUwsQ0FBVSxLQUFLQyxVQUFMLENBQWdCM0MsR0FBaEIsQ0FBVixDQUFQO0FBQ0g7Ozt3Q0FJRDtBQUNJLG9CQUFPLEtBQUs0QyxTQUFMLEVBQVA7QUFDSDs7OytDQUlEO0FBQ0ksb0JBQU8sS0FBSzlDLENBQUwsR0FBUyxLQUFLQSxDQUFkLEdBQWtCLEtBQUtDLENBQUwsR0FBUyxLQUFLQSxDQUF2QztBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FjV0MsRyxFQUNYO0FBQ0ksaUJBQUk2QyxLQUFLLEtBQUtMLFNBQUwsQ0FBZXhDLEdBQWYsQ0FBVDtBQUFBLGlCQUNJOEMsS0FBSyxLQUFLTCxTQUFMLENBQWV6QyxHQUFmLENBRFQ7O0FBR0Esb0JBQU82QyxLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQXRCO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7OztrQ0FhQTtBQUNJLG9CQUFPN0QsS0FBS3lELElBQUwsQ0FBVSxLQUFLSyxRQUFMLEVBQVYsQ0FBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FlQTtBQUNJLG9CQUFPLEtBQUtqRCxDQUFMLEdBQVMsS0FBS0EsQ0FBZCxHQUFrQixLQUFLQyxDQUFMLEdBQVMsS0FBS0EsQ0FBdkM7QUFDSDs7O3FDQVVEO0FBQ0ksb0JBQU8sS0FBS08sTUFBTCxFQUFQO0FBQ0g7Ozs0QkFHRU4sRyxFQUNIO0FBQ0ksb0JBQU8sSUFBSUwsTUFBSixDQUFXSyxJQUFJRixDQUFKLEdBQVEsS0FBS0EsQ0FBeEIsRUFBMkJFLElBQUlELENBQUosR0FBUSxLQUFLQSxDQUF4QyxDQUFQO0FBQ0g7Ozs2QkFHR0MsRyxFQUNKO0FBQ0ksa0JBQUtGLENBQUwsR0FBU0UsSUFBSUYsQ0FBYjtBQUNBLGtCQUFLQyxDQUFMLEdBQVNDLElBQUlELENBQWI7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O2tDQWFBO0FBQ0ksb0JBQU8sS0FBS0QsQ0FBTCxLQUFXLENBQVgsSUFBZ0IsS0FBS0MsQ0FBTCxLQUFXLENBQWxDO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBYVV5QixJLEVBQ1Y7QUFDSSxvQkFBTyxLQUFLMUIsQ0FBTCxLQUFXMEIsS0FBSzFCLENBQWhCLElBQXFCLEtBQUtDLENBQUwsS0FBV3lCLEtBQUt6QixDQUE1QztBQUNIOztBQUdEOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7OztvQ0FhQTtBQUNJLG9CQUFPLE9BQU8sS0FBS0QsQ0FBWixHQUFnQixNQUFoQixHQUF5QixLQUFLQyxDQUFyQztBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7bUNBYUE7QUFDSSxvQkFBTyxDQUFFLEtBQUtELENBQVAsRUFBVSxLQUFLQyxDQUFmLENBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7O29DQWFBO0FBQ0ksb0JBQU8sRUFBRUQsR0FBRyxLQUFLQSxDQUFWLEVBQWFDLEdBQUcsS0FBS0EsQ0FBckIsRUFBUDtBQUNIOzs7NkJBaDlDVWlELEMsRUFBR0MsQyxFQUNkO0FBQ0ksb0JBQU8sSUFBSXRELE1BQUosQ0FBV3FELEVBQUVsRCxDQUFGLEdBQU1tRCxFQUFFbkQsQ0FBbkIsRUFBc0JrRCxFQUFFakQsQ0FBRixHQUFNa0QsRUFBRWxELENBQTlCLENBQVA7QUFDSDs7O2tDQXFJZWlELEMsRUFBR0MsQyxFQUNuQjtBQUNJLG9CQUFPLElBQUl0RCxNQUFKLENBQVdxRCxFQUFFbEQsQ0FBRixHQUFNbUQsRUFBRW5ELENBQW5CLEVBQXNCa0QsRUFBRWpELENBQUYsR0FBTWtELEVBQUVsRCxDQUE5QixDQUFQO0FBQ0g7Ozs4QkFTV2lELEMsRUFBR0MsQyxFQUNmO0FBQ0ksb0JBQU90RCxPQUFPTyxRQUFQLENBQWdCOEMsQ0FBaEIsRUFBbUJDLENBQW5CLENBQVA7QUFDSDs7O2dDQXNJYUQsQyxFQUFHQyxDLEVBQ2pCO0FBQ0ksb0JBQU8sSUFBSXRELE1BQUosQ0FBV3FELEVBQUVsRCxDQUFGLEdBQU1tRCxFQUFFbkQsQ0FBbkIsRUFBc0JrRCxFQUFFakQsQ0FBRixHQUFNa0QsRUFBRWxELENBQTlCLENBQVA7QUFDSDs7O2dDQThJYUMsRyxFQUNkO0FBQ0ksaUJBQU1rRCxJQUFJbEQsSUFBSW1ELEtBQUosRUFBVjtBQUNBRCxlQUFFcEQsQ0FBRixHQUFNLENBQUNFLElBQUlGLENBQVg7QUFDQW9ELGVBQUVuRCxDQUFGLEdBQU0sQ0FBQ0MsSUFBSUQsQ0FBWDtBQUNBLG9CQUFPbUQsQ0FBUDtBQUNIOzs7d0NBNEZxQi9DLE0sRUFBUUYsTSxFQUM5QjtBQUNJLG9CQUFPLElBQUlOLE1BQUosQ0FBV1EsT0FBT0wsQ0FBUCxHQUFXRyxNQUF0QixFQUE4QkUsT0FBT0osQ0FBUCxHQUFXRSxNQUF6QyxDQUFQO0FBQ0g7OztzQ0FHbUJFLE0sRUFBUUYsTSxFQUM1QjtBQUNJLG9CQUFPLElBQUlOLE1BQUosQ0FBV1EsT0FBT0wsQ0FBUCxHQUFXRyxNQUF0QixFQUE4QkUsT0FBT0osQ0FBUCxHQUFXRSxNQUF6QyxDQUFQO0FBQ0g7Ozt1Q0EyQm9CRCxHLEVBQ3JCO0FBQ0ksaUJBQU1tRCxRQUFRbkQsSUFBSW1ELEtBQUosRUFBZDtBQUNBQSxtQkFBTXJELENBQU4sR0FBVSxDQUFDRSxJQUFJRCxDQUFmO0FBQ0FvRCxtQkFBTXBELENBQU4sR0FBVUMsSUFBSUYsQ0FBZDtBQUNBLG9CQUFPcUQsS0FBUDtBQUNIOzs7NkNBWTBCbkQsRyxFQUMzQjtBQUNJLGlCQUFNbUQsUUFBUW5ELElBQUltRCxLQUFKLEVBQWQ7QUFDQUEsbUJBQU1yRCxDQUFOLEdBQVVFLElBQUlELENBQWQ7QUFDQW9ELG1CQUFNcEQsQ0FBTixHQUFVLENBQUNDLElBQUlGLENBQWY7QUFDQSxvQkFBT3FELEtBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7a0NBS2dCbkQsRyxFQUFLTSxNLEVBQ3JCO0FBQ0ksaUJBQU04QyxNQUFNcEQsSUFBSW1ELEtBQUosRUFBWjtBQUNBLGlCQUFNSixXQUFXL0MsSUFBSUYsQ0FBSixHQUFRRSxJQUFJRixDQUFaLEdBQWdCRSxJQUFJRCxDQUFKLEdBQVFDLElBQUlELENBQTdDO0FBQ0EsaUJBQUlnRCxXQUFXekMsU0FBU0EsTUFBeEIsRUFBZ0M7QUFDNUI4QyxxQkFBSUMsY0FBSixDQUFtQi9DLFNBQVNyQixLQUFLeUQsSUFBTCxDQUFVSyxRQUFWLENBQTVCO0FBQ0g7QUFDRCxvQkFBT0ssR0FBUDtBQUNIOzs7bUNBNEVnQnpDLE8sRUFBU0MsVyxFQUMxQjtBQUNJLG9CQUFPLElBQUlqQixNQUFKLENBQVcsS0FBS2tCLFVBQUwsQ0FBZ0JGLE9BQWhCLEVBQXlCQyxXQUF6QixDQUFYLEVBQWtELEtBQUtFLFVBQUwsQ0FBZ0JILE9BQWhCLEVBQXlCQyxXQUF6QixDQUFsRCxDQUFQO0FBQ0g7OztvQ0FZaUJELE8sRUFBU0MsVyxFQUMzQjtBQUNJLGlCQUFNeEIsTUFBTUgsS0FBS0csR0FBTCxDQUFTdUIsUUFBUWIsQ0FBakIsRUFBb0JjLFlBQVlkLENBQWhDLENBQVo7QUFDQSxpQkFBTVQsTUFBTUosS0FBS0ksR0FBTCxDQUFTc0IsUUFBUWIsQ0FBakIsRUFBb0JjLFlBQVlkLENBQWhDLENBQVo7QUFDQSxvQkFBT1gsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLENBQVA7QUFDSDs7O29DQVlpQnNCLE8sRUFBU0MsVyxFQUMzQjtBQUNJLGlCQUFNeEIsTUFBTUgsS0FBS0csR0FBTCxDQUFTdUIsUUFBUVosQ0FBakIsRUFBb0JhLFlBQVliLENBQWhDLENBQVo7QUFDQSxpQkFBTVYsTUFBTUosS0FBS0ksR0FBTCxDQUFTc0IsUUFBUVosQ0FBakIsRUFBb0JhLFlBQVliLENBQWhDLENBQVo7QUFDQSxvQkFBT1osT0FBT0MsR0FBUCxFQUFZQyxHQUFaLENBQVA7QUFDSDs7O29DQXNUaUIyRCxDLEVBQUdDLEMsRUFDckI7QUFDSSxvQkFBT0QsRUFBRWxELENBQUYsR0FBTW1ELEVBQUVuRCxDQUFSLEdBQVlrRCxFQUFFakQsQ0FBRixHQUFNa0QsRUFBRWxELENBQTNCO0FBQ0g7OzsrQkFTWWlELEMsRUFBR0MsQyxFQUNoQjtBQUNJLG9CQUFPRCxFQUFFbEQsQ0FBRixHQUFNbUQsRUFBRWxELENBQVIsR0FBWWlELEVBQUVqRCxDQUFGLEdBQU1rRCxFQUFFbkQsQ0FBM0I7QUFDSDs7QUFHRDs7Ozs7Ozs7dUNBS3FCa0QsQyxFQUFHQyxDLEVBQUdLLEMsRUFDM0I7QUFDSSxpQkFBTUMsSUFBSSxJQUFJNUQsTUFBSixFQUFWO0FBQ0EsaUJBQU02RCxLQUFLUixFQUFFbEQsQ0FBRixHQUFNd0QsRUFBRXhELENBQVIsR0FBWWtELEVBQUVqRCxDQUFGLEdBQU11RCxFQUFFdkQsQ0FBL0IsQ0FBb0M7QUFBcEM7QUFBQSxpQkFDTTBELEtBQUtSLEVBQUVuRCxDQUFGLEdBQU13RCxFQUFFeEQsQ0FBUixHQUFZbUQsRUFBRWxELENBQUYsR0FBTXVELEVBQUV2RCxDQUQvQixDQUZKLENBR3dDOztBQUVwQztBQUNBd0QsZUFBRXpELENBQUYsR0FBTW1ELEVBQUVuRCxDQUFGLEdBQU0wRCxFQUFOLEdBQVdSLEVBQUVsRCxDQUFGLEdBQU0yRCxFQUF2QjtBQUNBRixlQUFFeEQsQ0FBRixHQUFNa0QsRUFBRWxELENBQUYsR0FBTXlELEVBQU4sR0FBV1IsRUFBRWpELENBQUYsR0FBTTBELEVBQXZCOztBQUVBLG9CQUFPRixDQUFQO0FBQ0g7Ozs4QkFtQ1dHLEksRUFBTWxDLEksRUFBTW1DLEUsRUFBSTtBQUN4QixvQkFBT2hFLE9BQU9pRSxHQUFQLENBQVdqRSxPQUFPMEQsY0FBUCxDQUFzQkssSUFBdEIsRUFBNEIsSUFBSUMsRUFBaEMsQ0FBWCxFQUFnRGhFLE9BQU8wRCxjQUFQLENBQXNCN0IsSUFBdEIsRUFBNEJtQyxFQUE1QixDQUFoRCxDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7OzZCQUtXeEQsTSxFQUFRO0FBQ2Ysb0JBQU8sSUFBSVIsTUFBSixDQUFXLElBQUlRLE9BQU9MLENBQXRCLEVBQXlCLElBQUlLLE9BQU9KLENBQXBDLENBQVA7QUFDSDs7O2tDQXlRZUMsRyxFQUNoQjtBQUNJLG9CQUFPQSxJQUFJRixDQUFKLEdBQVFFLElBQUlGLENBQVosR0FBZ0JFLElBQUlELENBQUosR0FBUUMsSUFBSUQsQ0FBbkM7QUFDSDs7Ozs7O21CQW4rQ2dCSixNOzs7Ozs7Ozs7Ozs7Ozs7QUN0QnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdxQmtFLEs7OztBQUVqQixzQkFDQTtBQUFBLGFBRFkvRCxDQUNaLHVFQURnQixDQUNoQjtBQUFBLGFBRG1CQyxDQUNuQix1RUFEdUIsQ0FDdkI7QUFBQSxhQUQwQitELE1BQzFCLHVFQURtQyxFQUNuQztBQUFBLGFBRHVDQyxLQUN2Qyx1RUFEK0Msc0JBQVlDLFFBQVosR0FBdUJDLEdBQ3RFO0FBQUEsYUFEMkVDLEtBQzNFLHVFQURtRixHQUNuRjs7QUFBQTs7QUFBQTs7QUFHSSxlQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsZUFBS0MsV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxlQUFLdEUsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsZUFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsZUFBS2dFLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGVBQUtHLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGVBQUt4RixNQUFMLENBQVlvRixNQUFaLEVBQW9CQyxLQUFwQixFQUEyQkcsS0FBM0I7QUFWSjtBQVdDOzs7O2tDQUlEO0FBQUEsaUJBRE9KLE1BQ1AsdUVBRGdCLEVBQ2hCO0FBQUEsaUJBRG9CQyxLQUNwQix1RUFENEIsUUFDNUI7QUFBQSxpQkFEc0NHLEtBQ3RDLHVFQUQ4QyxHQUM5Qzs7QUFDSSxrQkFBS0csS0FBTDtBQUNBLGtCQUFLQyxTQUFMLENBQWVQLEtBQWYsRUFBc0JHLEtBQXRCO0FBQ0Esa0JBQUtLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0JULE1BQXRCLEVBQThCQyxLQUE5QixFQUFxQ0csS0FBckM7QUFDQSxrQkFBS00sT0FBTDtBQUNIOzs7bUNBR1NDLEUsRUFBSUMsRSxFQUNkO0FBQ0ksaUJBQU1DLFdBQVcsS0FBS3hFLE1BQUwsQ0FBWXlFLFNBQVosQ0FBc0JILEVBQXRCLEVBQTBCQyxFQUExQixDQUFqQjtBQUNBLGtCQUFLNUUsQ0FBTCxHQUFTNkUsU0FBUzdFLENBQWxCO0FBQ0Esa0JBQUtDLENBQUwsR0FBUzRFLFNBQVM1RSxDQUFsQjtBQUNIOzs7NkJBSUQ7QUFDSSxvQkFBTyxpQkFBTzhFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBUDtBQUNIOzs7O0dBckM4Qm5ILEtBQUtvSCxROzttQkFBbkJqQixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7S0FHcUJrQixXOzs7Ozs7O29DQUNDO0FBQ2QsaUJBQU1DLFFBQVEvRixLQUFLRSxNQUFMLEVBQWQ7QUFDQSxpQkFBTThGLE9BQU9oRyxLQUFLSyxLQUFMLENBQVcwRixRQUFRLEdBQW5CLENBQWI7QUFDQSxpQkFBTUUsT0FBT2pHLEtBQUtLLEtBQUwsQ0FBV0wsS0FBS0UsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxFQUE5QztBQUNBLGlCQUFNNEUsaUJBQWVrQixJQUFmLGdCQUE4QkMsSUFBOUIsT0FBTjs7QUFKYyw2QkFLSSxLQUFLQyxRQUFMLENBQWNILEtBQWQsRUFBcUIsQ0FBckIsRUFBd0JFLE9BQU8sR0FBL0IsQ0FMSjtBQUFBO0FBQUEsaUJBS1AzQixDQUxPO0FBQUEsaUJBS0o2QixDQUxJO0FBQUEsaUJBS0RuQyxDQUxDOztBQU9kLG9CQUFPO0FBQ0hvQyxzQkFBS3RCLEtBREYsRUFDUztBQUNadUIsK0JBQVkvQixDQUFaLFVBQWtCNkIsQ0FBbEIsVUFBd0JuQyxDQUF4QixNQUZHLEVBRTJCO0FBQzlCZ0IsMkJBQVEsS0FBS3NCLFFBQUwsQ0FBY2hDLENBQWQsRUFBaUI2QixDQUFqQixFQUFvQm5DLENBQXBCLENBSEwsRUFHK0I7QUFDbEN1QywrQkFBVyxLQUFLRCxRQUFMLENBQWNoQyxDQUFkLEVBQWlCNkIsQ0FBakIsRUFBb0JuQyxDQUFwQixFQUF1QixHQUF2QixDQUpSLENBSXVDO0FBSnZDLGNBQVA7QUFNSDs7QUFFRDs7Ozs7Ozs7Ozs7OztrQ0FVZ0J3QyxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHO0FBQ3JCLGlCQUFJcEMsVUFBSjtBQUFBLGlCQUFPNkIsVUFBUDtBQUFBLGlCQUFVbkMsVUFBVjs7QUFFQSxpQkFBTTJDLEtBQUssU0FBTEEsRUFBSyxDQUFDNUMsQ0FBRCxFQUFPO0FBQ2Qsd0JBQU8vRCxLQUFLSyxLQUFMLENBQVdMLEtBQUtJLEdBQUwsQ0FBU0osS0FBS0csR0FBTCxDQUFTNEQsSUFBSSxHQUFiLEVBQWtCLEdBQWxCLENBQVQsRUFBaUMsQ0FBakMsQ0FBWCxDQUFQO0FBQ0gsY0FGRDs7QUFJQSxpQkFBTTZDLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFhO0FBQzFCLHFCQUFJQSxJQUFJLENBQVIsRUFBV0EsS0FBSyxDQUFMO0FBQ1gscUJBQUlBLElBQUksQ0FBUixFQUFXQSxLQUFLLENBQUw7QUFDWCxxQkFBSUEsSUFBSSxJQUFJLENBQVosRUFBZSxPQUFPRixJQUFJLENBQUNDLElBQUlELENBQUwsSUFBVSxDQUFWLEdBQWNFLENBQXpCO0FBQ2YscUJBQUlBLElBQUksSUFBSSxDQUFaLEVBQWUsT0FBT0QsQ0FBUDtBQUNmLHFCQUFJQyxJQUFJLElBQUksQ0FBWixFQUFlLE9BQU9GLElBQUksQ0FBQ0MsSUFBSUQsQ0FBTCxLQUFXLElBQUksQ0FBSixHQUFRRSxDQUFuQixJQUF3QixDQUFuQztBQUNmLHdCQUFPRixDQUFQO0FBQ0gsY0FQRDs7QUFTQSxpQkFBTUcsSUFBSU4sSUFBSSxHQUFKLEdBQVVBLEtBQUssSUFBSUQsQ0FBVCxDQUFWLEdBQXdCQyxJQUFJRCxDQUFKLEdBQVFDLElBQUlELENBQTlDO0FBQ0EsaUJBQU1RLElBQUksSUFBSVAsQ0FBSixHQUFRTSxDQUFsQjs7QUFFQTFDLGlCQUFJc0MsU0FBU0ssQ0FBVCxFQUFZRCxDQUFaLEVBQWVSLElBQUksSUFBSSxDQUF2QixDQUFKO0FBQ0FMLGlCQUFJUyxTQUFTSyxDQUFULEVBQVlELENBQVosRUFBZVIsQ0FBZixDQUFKO0FBQ0F4QyxpQkFBSTRDLFNBQVNLLENBQVQsRUFBWUQsQ0FBWixFQUFlUixJQUFJLElBQUksQ0FBdkIsQ0FBSjs7QUFFQSxvQkFBTyxDQUFDRyxHQUFHckMsQ0FBSCxDQUFELEVBQVFxQyxHQUFHUixDQUFILENBQVIsRUFBZVEsR0FBRzNDLENBQUgsQ0FBZixDQUFQO0FBQ0g7OztrQ0FFZU0sQyxFQUFHNkIsQyxFQUFHbkMsQyxFQUFrQjtBQUFBLGlCQUFma0QsTUFBZSx1RUFBTixJQUFNOztBQUNwQyx5QkFBVUEsTUFBVixHQUFtQjVDLEVBQUU2QyxRQUFGLENBQVcsRUFBWCxDQUFuQixHQUFvQ2hCLEVBQUVnQixRQUFGLENBQVcsRUFBWCxDQUFwQyxHQUFxRG5ELEVBQUVtRCxRQUFGLENBQVcsRUFBWCxDQUFyRDtBQUNIOzs7Ozs7bUJBdERnQnJCLFc7Ozs7Ozs7Ozs7Ozs7c2pCQ0hyQjs7Ozs7QUFHQTs7Ozs7Ozs7S0FFcUJzQixVOzs7Ozs7O2tDQUNEQyxNLEVBQVE7O0FBRXBCLGlCQUFNQyxRQUFRLEVBQWQ7QUFBQSxpQkFDSVIsSUFBSU8sT0FBT2hHLE1BRGY7O0FBR0E7QUFDQWdHLG9CQUFPRSxJQUFQLENBQVksS0FBS0MsV0FBakI7O0FBRUE7QUFDQSxpQkFBTUMsWUFBWUosT0FBTyxDQUFQLENBQWxCOztBQUVBO0FBQ0Esa0JBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJWixDQUFwQixFQUF1QlksR0FBdkIsRUFBNEI7QUFDeEJMLHdCQUFPSyxDQUFQLEVBQVVDLGdCQUFWLEdBQTZCLHFCQUN6Qk4sT0FBT0ssQ0FBUCxFQUFVN0csQ0FBVixHQUFjNEcsVUFBVTVHLENBREMsRUFFekJ3RyxPQUFPSyxDQUFQLEVBQVU1RyxDQUFWLEdBQWMyRyxVQUFVM0csQ0FGQyxDQUE3QjtBQUlIOztBQUVEdUcsb0JBQU9FLElBQVAsQ0FBWSxLQUFLSyxPQUFqQjs7QUFFQTtBQUNBTixtQkFBTU8sSUFBTixDQUFXLENBQVg7QUFDQVAsbUJBQU1PLElBQU4sQ0FBVyxDQUFYOztBQUVBLGlCQUFJQyxPQUFPLENBQVg7O0FBRUEsb0JBQU9BLE9BQU9oQixDQUFkLEVBQWlCO0FBQ2Isd0JBQU9RLE1BQU1qRyxNQUFOLElBQWdCLENBQXZCLEVBQTBCO0FBQ3RCLHlCQUFJMEcsY0FBSjtBQUFBLHlCQUFXQyxlQUFYO0FBQ0FBLDhCQUFTVixNQUFNQSxNQUFNakcsTUFBTixHQUFlLENBQXJCLENBQVQ7QUFDQWlHLDJCQUFNVyxHQUFOO0FBQ0FGLDZCQUFRVCxNQUFNQSxNQUFNakcsTUFBTixHQUFlLENBQXJCLENBQVI7O0FBRUE7QUFDQTtBQUNBLHlCQUFJLEtBQUs2RyxLQUFMLENBQVdiLE9BQU9VLEtBQVAsQ0FBWCxFQUEwQlYsT0FBT1csTUFBUCxDQUExQixFQUEwQ1gsT0FBT1MsSUFBUCxDQUExQyxDQUFKLEVBQTZEO0FBQ3pEUiwrQkFBTU8sSUFBTixDQUFXRyxNQUFYO0FBQ0E7QUFDSDtBQUNKOztBQUVEVix1QkFBTU8sSUFBTixDQUFXQyxNQUFYO0FBQ0g7O0FBRUQsaUJBQU1LLGFBQWEsRUFBbkI7QUFDQSxrQkFBSyxJQUFJVCxLQUFJLENBQVIsRUFBV1osS0FBSVEsTUFBTWpHLE1BQTFCLEVBQWtDcUcsS0FBSVosRUFBdEMsRUFBeUNZLElBQXpDLEVBQThDO0FBQzFDLHFCQUFNVSxRQUFRZCxNQUFNSSxFQUFOLENBQWQ7QUFDQSxxQkFBTVcsUUFBUWhCLE9BQU9lLEtBQVAsQ0FBZDtBQUNBRCw0QkFBV04sSUFBWCxDQUFnQixxQkFBV1EsTUFBTXhILENBQWpCLEVBQW9Cd0gsTUFBTXZILENBQTFCLENBQWhCO0FBQ0g7O0FBRUQsb0JBQU9xSCxVQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztxQ0FNbUJHLE0sRUFBUUMsTSxFQUFRO0FBQy9CLGlCQUFJRCxPQUFPeEgsQ0FBUCxLQUFheUgsT0FBT3pILENBQXhCLEVBQTJCO0FBQ3ZCLHdCQUFPd0gsT0FBT3hILENBQVAsR0FBV3lILE9BQU96SCxDQUF6QjtBQUNIO0FBQ0Qsb0JBQU93SCxPQUFPekgsQ0FBUCxHQUFXMEgsT0FBTzFILENBQXpCO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztpQ0FNZXlILE0sRUFBUUMsTSxFQUFRO0FBQzNCO0FBQ0EsaUJBQUksQ0FBQ0QsT0FBT1gsZ0JBQVosRUFBOEI7QUFDMUIsd0JBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBRUQsaUJBQUksQ0FBQ1ksT0FBT1osZ0JBQVosRUFBOEI7QUFDMUIsd0JBQU8sQ0FBUDtBQUNIOztBQUVELGlCQUFNNUQsSUFBSXVFLE9BQU9YLGdCQUFQLENBQXdCN0csQ0FBeEIsR0FBNEJ5SCxPQUFPWixnQkFBUCxDQUF3QjlHLENBQTlEO0FBQ0EsaUJBQU1tRCxJQUFJc0UsT0FBT1gsZ0JBQVAsQ0FBd0I5RyxDQUF4QixHQUE0QjBILE9BQU9aLGdCQUFQLENBQXdCN0csQ0FBOUQ7O0FBRUEsaUJBQUlpRCxNQUFNQyxDQUFWLEVBQWE7QUFDVCx3QkFBT0EsSUFBSUQsQ0FBWDtBQUNIOztBQUVELG9CQUFPcUQsV0FBV0ksV0FBWCxDQUF1QmMsTUFBdkIsRUFBK0JDLE1BQS9CLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7OzsrQkFPYUQsTSxFQUFRQyxNLEVBQVFDLE0sRUFBUTtBQUNqQztBQUNBLGlCQUFNQyxlQUFnQixDQUFDRCxPQUFPM0gsQ0FBUCxHQUFXeUgsT0FBT3pILENBQW5CLEtBQXlCMEgsT0FBT3pILENBQVAsR0FBV3dILE9BQU94SCxDQUEzQyxJQUFnRCxDQUFDeUgsT0FBTzFILENBQVAsR0FBV3lILE9BQU96SCxDQUFuQixLQUF5QjJILE9BQU8xSCxDQUFQLEdBQVd3SCxPQUFPeEgsQ0FBM0MsQ0FBdEU7QUFDQSxpQkFBSTJILGVBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsd0JBQU8sSUFBUDtBQUNIO0FBQ0Qsb0JBQU8sS0FBUDtBQUNIOzs7Ozs7bUJBN0dnQnJCLFU7OztBQWlIckIsVUFBU3NCLFVBQVQsQ0FBb0IvSCxHQUFwQixFQUF5QjtBQUNyQixVQUFLLElBQUkrRyxJQUFJLENBQVIsRUFBV1osSUFBSW5HLElBQUlVLE1BQXhCLEVBQWdDcUcsSUFBSVosQ0FBcEMsRUFBdUNZLEdBQXZDLEVBQTRDO0FBQ3hDaUIsaUJBQVFDLEdBQVIsQ0FBWWpJLElBQUkrRyxDQUFKLEVBQU83RyxDQUFuQixFQUFzQkYsSUFBSStHLENBQUosRUFBTzVHLENBQTdCO0FBQ0g7QUFDSjs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0EsVUFBUytILGdCQUFULENBQTBCeEIsTUFBMUIsRUFBa0M7QUFDOUI7QUFDQSxTQUFJeUIsS0FBSyxDQUFUO0FBQ0EsU0FBSUMsS0FBSzFCLE9BQU8sQ0FBUCxFQUFVeEcsQ0FBbkI7QUFDQSxVQUFLLElBQUk2RyxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLE9BQU9oRyxNQUEzQixFQUFtQ3FHLEdBQW5DLEVBQXdDO0FBQ3BDLGFBQUk3RyxJQUFJd0csT0FBT0ssQ0FBUCxFQUFVN0csQ0FBbEI7QUFDQSxhQUFJQSxJQUFJa0ksRUFBSixJQUFXbEksS0FBS2tJLEVBQUwsSUFBVzFCLE9BQU9LLENBQVAsRUFBVTVHLENBQVYsR0FBY3VHLE9BQU95QixFQUFQLEVBQVdoSSxDQUFuRCxFQUF1RDtBQUNuRGdJLGtCQUFLcEIsQ0FBTDtBQUNBcUIsa0JBQUtsSSxDQUFMO0FBQ0g7QUFDSjs7QUFFRCxTQUFJaUcsSUFBSU8sT0FBT2hHLE1BQWY7QUFDQSxTQUFJMkgsT0FBTyxFQUFYO0FBQ0EsU0FBSW5DLElBQUksQ0FBUjtBQUNBLFNBQUlvQyxLQUFLSCxFQUFUOztBQUVBLFlBQU8sQ0FBUCxFQUFVO0FBQ05FLGNBQUtuQyxDQUFMLElBQVVvQyxFQUFWOztBQUVBLGFBQUlDLEtBQUssQ0FBVDtBQUNBLGNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJckMsQ0FBcEIsRUFBdUJxQyxHQUF2QixFQUE0QjtBQUN4QixpQkFBSUQsTUFBTUQsRUFBVixFQUFjO0FBQ1ZDLHNCQUFLQyxDQUFMO0FBQ0E7QUFDSDs7QUFFRCxpQkFBSTdFLElBQUkvQixLQUFLNkcsR0FBTCxDQUFTL0IsT0FBTzZCLEVBQVAsQ0FBVCxFQUFxQjdCLE9BQU8yQixLQUFLbkMsQ0FBTCxDQUFQLENBQXJCLENBQVI7QUFDQSxpQkFBSTVDLElBQUkxQixLQUFLNkcsR0FBTCxDQUFTL0IsT0FBTzhCLENBQVAsQ0FBVCxFQUFvQjlCLE9BQU8yQixLQUFLbkMsQ0FBTCxDQUFQLENBQXBCLENBQVI7QUFDQSxpQkFBSXhDLElBQUk5QixLQUFLOEcsS0FBTCxDQUFXL0UsQ0FBWCxFQUFjTCxDQUFkLENBQVI7QUFDQSxpQkFBSUksSUFBSSxDQUFSLEVBQVc7QUFDUDZFLHNCQUFLQyxDQUFMO0FBQ0g7O0FBRUQ7QUFDQSxpQkFBSTlFLEtBQUssQ0FBTCxJQUFVSixFQUFFcUYsUUFBRixLQUFlaEYsRUFBRWdGLFFBQUYsRUFBN0IsRUFBMkM7QUFDdkNKLHNCQUFLQyxDQUFMO0FBQ0g7QUFDSjs7QUFFRHRDO0FBQ0FvQyxjQUFLQyxFQUFMOztBQUVBLGFBQUlBLE1BQU1KLEVBQVYsRUFBYztBQUNWO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLFNBQUlTLFlBQVksRUFBaEI7QUFDQSxVQUFLLElBQUk3QixJQUFJLENBQWIsRUFBZ0JBLElBQUliLENBQXBCLEVBQXVCLEVBQUVhLENBQXpCLEVBQTRCO0FBQ3hCNkIsbUJBQVUxQixJQUFWLENBQWVSLE9BQU8yQixLQUFLdEIsQ0FBTCxDQUFQLENBQWY7QUFDSDs7QUFFRCxZQUFPNkIsU0FBUDtBQUNILEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDek1vQkMsSzs7Ozs7Ozs7O0FBaUVqQjs7Ozs7Ozs7dUNBUXFCQyxTLEVBQVdDLFksRUFBY0MsUSxFQUFVQyxXLEVBQWE7QUFDakUsaUJBQUlDLFFBQVFILGFBQWE3SSxDQUFiLEdBQWlCNEksVUFBVTVJLENBQXZDOztBQUVBLGlCQUFJZ0osUUFBUSxDQUFaLEVBQWU7QUFDWEEseUJBQVFBLFFBQVEsQ0FBQyxDQUFqQjtBQUNIOztBQUVELGlCQUFJQyxRQUFRSixhQUFhNUksQ0FBYixHQUFpQjJJLFVBQVUzSSxDQUF2Qzs7QUFFQSxpQkFBSWdKLFFBQVEsQ0FBWixFQUFlO0FBQ1hBLHlCQUFRQSxRQUFRLENBQUMsQ0FBakI7QUFDSDs7QUFFRCxpQkFBSUQsUUFBUSxDQUFSLElBQWFDLFFBQVEsQ0FBekIsRUFBNEI7QUFDeEIsd0JBQU8sS0FBUDtBQUNIOztBQUVELGlCQUFJRixjQUFjRCxRQUFkLEdBQXlCLEdBQTdCLEVBQWtDO0FBQzlCLHdCQUFPLEtBQVA7QUFDSDs7QUFFRCxvQkFBTyxJQUFQO0FBQ0g7Ozs2QkE1RkQ7QUFDSSxvQkFBTyxLQUFLM0wsUUFBTCxDQUFjK0wsT0FBZCxDQUFzQkMsV0FBdEIsQ0FBa0NDLEtBQXpDO0FBQ0g7Ozs2QkFHRDtBQUNJLG9CQUFPLEtBQUtqTSxRQUFMLENBQWMrTCxPQUFkLENBQXNCQyxXQUF0QixDQUFrQ0UsT0FBekM7QUFDSDs7QUFFRDs7Ozs7Ozs7MkJBS29CQyxLLEVBQU87QUFDdkIsa0JBQUtDLFNBQUwsR0FBaUJELEtBQWpCO0FBQ0gsVTs2QkFDcUI7QUFDbEIsb0JBQU8sS0FBS0MsU0FBWjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7OzsyQkFXaUJELEssRUFBTztBQUNwQixrQkFBS0UsTUFBTCxHQUFjRixLQUFkO0FBQ0gsVTs2QkFDa0I7QUFDZixpQkFBSSxDQUFDLEtBQUtFLE1BQVYsRUFBa0I7QUFDZCxzQkFBS0EsTUFBTCxHQUFjLEtBQUtDLGFBQW5CO0FBQ0g7QUFDRCxvQkFBTyxLQUFLRCxNQUFaO0FBQ0g7Ozs2QkFHbUI7QUFDaEIsb0JBQU8sS0FBS0osS0FBTCxDQUFXTSxNQUFsQjtBQUNIOzs7NkJBQ29CO0FBQ2pCLG9CQUFPLEtBQUtOLEtBQUwsQ0FBV00sTUFBWCxDQUFrQjFKLENBQXpCO0FBQ0g7Ozs2QkFDb0I7QUFDakIsb0JBQU8sS0FBS29KLEtBQUwsQ0FBV00sTUFBWCxDQUFrQnpKLENBQXpCO0FBQ0g7OzsyQkFHNkJxSixLLEVBQU87QUFDakNYLG1CQUFNeEwsUUFBTixDQUFlK0wsT0FBZixDQUF1QkMsV0FBdkIsQ0FBbUNRLGtCQUFuQyxHQUF3REwsS0FBeEQ7QUFDSCxVOzZCQUMrQjtBQUM1QixvQkFBT1gsTUFBTXhMLFFBQU4sQ0FBZStMLE9BQWYsQ0FBdUJDLFdBQXZCLENBQW1DUSxrQkFBMUM7QUFDSDs7OzZCQW9Dd0I7QUFDckIsb0JBQU8sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVA7QUFDSDs7Ozs7O21CQXBHZ0JsQixLOzs7Ozs7Ozs7Ozs7Ozs7QUNBckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTW1CLFFBQVEsRUFBZDtBQUFBLEtBQ01DLFdBQVcsTUFEakI7QUFBQSxLQUVNQyxRQUFRLGlCQUFPQSxLQUZyQjtBQUFBLEtBR01DLFFBQVEsaUJBQU9BLEtBSHJCO0FBQUEsS0FJTUMsV0FBVyxFQUFDbEssR0FBRyxDQUFKLEVBQU9DLEdBQUcsQ0FBVixFQUpqQjtBQUFBLEtBS01rSyxZQUFZLEVBQUNuSyxHQUFHLEVBQUosRUFBUUMsR0FBRyxFQUFYLEVBTGxCO0FBQUEsS0FNTW1LLGFBQWEsTUFBTWpMLEtBQUtDLEVBTjlCOztBQVFBLEtBQU1pTCxZQUFZQyxlQUFlLENBQWYsRUFBa0JSLEtBQWxCLENBQWxCO0FBQ0EsS0FBTVMsYUFBYUQsZUFBZSxDQUFmLEVBQWtCUixLQUFsQixDQUFuQjs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7O0tBYXFCVSxJOzs7QUFDakIsbUJBQVlyTixRQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBR2xCLGVBQUttSCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsZUFBS25ILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsZUFBS0QsTUFBTCxHQUFjLE1BQUtDLFFBQUwsQ0FBY2EsSUFBNUI7QUFDQSxlQUFLeU0sT0FBTCxHQUFlLE1BQUt2TixNQUFMLENBQVl3TixVQUFaLENBQXVCLElBQXZCLENBQWY7O0FBRUEsZUFBS0MsVUFBTDtBQUNBLGVBQUtuTixRQUFMO0FBVGtCO0FBVXJCOzs7O3NDQUVZO0FBQ1Qsa0JBQUtvTixNQUFMLEdBQWMsRUFBZDtBQUNBLGtCQUFLQyxRQUFMLEdBQWdCLElBQUlqTixLQUFLb0gsUUFBVCxFQUFoQjtBQUNBLGtCQUFLNUcsUUFBTCxDQUFjLEtBQUt5TSxRQUFuQjtBQUNBLGtCQUFLQyxPQUFMLEdBQWUsS0FBS0MsZ0JBQUwsQ0FBc0J2TSxJQUF0QixDQUEyQixJQUEzQixDQUFmO0FBQ0Esa0JBQUt5SSxJQUFMO0FBQ0g7OztvQ0FFVTtBQUNQLGtCQUFLK0QsYUFBTCxHQUFxQixLQUFLQyxPQUFMLENBQWF6TSxJQUFiLENBQWtCLElBQWxCLENBQXJCO0FBQ0ExQixvQkFBT29PLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLEtBQUtGLGFBQXRDOztBQUVBLGtCQUFLRyxpQkFBTCxHQUF5QixLQUFLQyxXQUFMLENBQWlCNU0sSUFBakIsQ0FBc0IsSUFBdEIsQ0FBekI7QUFDQSxrQkFBSzZNLEVBQUwsQ0FBUSxXQUFSLEVBQXFCLEtBQUtGLGlCQUExQjtBQUNIOzs7NENBRWtCO0FBQ2Ysa0JBQUs1RyxLQUFMO0FBQ0Esa0JBQUsrRyxjQUFMO0FBQ0g7OztpQ0FFTztBQUFBOztBQUNKLGtCQUFLVixNQUFMLENBQVlXLE9BQVosQ0FBb0IsVUFBQ0MsS0FBRCxFQUFXO0FBQzNCLHdCQUFLQyxXQUFMLENBQWlCRCxLQUFqQjtBQUNBQSx1QkFBTUUsT0FBTjtBQUNILGNBSEQ7O0FBS0Esa0JBQUtkLE1BQUwsQ0FBWXBLLE1BQVosR0FBcUIsQ0FBckI7QUFDQSxrQkFBS29LLE1BQUwsR0FBYyxFQUFkOztBQUVBLGlCQUFJLENBQUMsS0FBS2UsU0FBVixFQUFxQjtBQUNqQjtBQUNIO0FBQ0Qsa0JBQUtGLFdBQUwsQ0FBaUIsS0FBS0UsU0FBdEI7QUFDQSxrQkFBS0EsU0FBTCxDQUFlRCxPQUFmOztBQUVBLGtCQUFLYixRQUFMLENBQWN0RyxLQUFkO0FBQ0g7OzswQ0FFZ0I7QUFDYixpQkFBTXFILFNBQVN6TSxLQUFLSyxLQUFMLENBQVdMLEtBQUtFLE1BQUwsS0FBZ0JnTCxVQUFVN0osTUFBckMsQ0FBZjtBQUFBLGlCQUNNcUwsU0FBUzFNLEtBQUtLLEtBQUwsQ0FBV0wsS0FBS0UsTUFBTCxLQUFnQmtMLFdBQVcvSixNQUF0QyxDQURmO0FBQUEsaUJBRU1zTCxZQUFZLHVCQUFhekIsVUFBVXVCLE1BQVYsQ0FBYixDQUZsQjtBQUFBLGlCQUdNRyxZQUFZLHVCQUFheEIsV0FBV3NCLE1BQVgsQ0FBYixDQUhsQjtBQUFBLGlCQUlNRyxtQkFBbUIsUUFKekI7QUFBQSxpQkFLTUMsbUJBQW1CLEdBTHpCOztBQU9BOzs7OztBQUtBSCx1QkFBVUksUUFBVixDQUFtQmxDLEtBQW5CO0FBQ0ErQix1QkFBVUcsUUFBVixDQUFtQmxDLEtBQW5COztBQUVBLGlCQUFNbUMsU0FBUyxvQkFBVUwsVUFBVU0sUUFBcEIsQ0FBZjtBQUFBLGlCQUNNQyxTQUFTLG9CQUFVTixVQUFVSyxRQUFwQixDQURmO0FBQUEsaUJBRU1FLFNBQVMsb0JBQVVQLFVBQVUxSSxLQUFWLEVBQVYsRUFBNkIySSxnQkFBN0IsRUFBK0NDLGdCQUEvQyxDQUZmOztBQUlBLGtCQUFLTixTQUFMLEdBQWlCLGtDQUF3QkcsVUFBVU0sUUFBbEMsRUFBNENMLFVBQVVLLFFBQXRELENBQWpCO0FBQ0Esa0JBQUtULFNBQUwsQ0FBZTNMLENBQWYsR0FBb0JpSyxNQUFNbk0sS0FBTixHQUFjLENBQWYsR0FBb0IsQ0FBdkM7QUFDQSxrQkFBSzZOLFNBQUwsQ0FBZTFMLENBQWYsR0FBb0JnSyxNQUFNbE0sTUFBTixHQUFlLENBQWhCLEdBQXFCLENBQXhDOztBQUVBLGtCQUFLSyxRQUFMLENBQWMrTixNQUFkO0FBQ0Esa0JBQUsvTixRQUFMLENBQWNpTyxNQUFkO0FBQ0Esa0JBQUtqTyxRQUFMLENBQWNrTyxNQUFkO0FBQ0Esa0JBQUtsTyxRQUFMLENBQWMsS0FBS3VOLFNBQW5COztBQUVBLGtCQUFLZixNQUFMLENBQVk1RCxJQUFaLENBQWlCbUYsTUFBakI7QUFDQSxrQkFBS3ZCLE1BQUwsQ0FBWTVELElBQVosQ0FBaUJxRixNQUFqQjtBQUNBLGtCQUFLekIsTUFBTCxDQUFZNUQsSUFBWixDQUFpQnNGLE1BQWpCOztBQUVBUix1QkFBVXJMLE1BQVYsQ0FBaUJ1SixLQUFqQjtBQUNBK0IsdUJBQVV0TCxNQUFWLENBQWlCdUosS0FBakI7O0FBRUEsaUJBQU11QyxXQUFXLHNCQUFZVCxVQUFVTSxRQUF0QixDQUFqQjtBQUFBLGlCQUNNSSxXQUFXLHNCQUFZVCxVQUFVSyxRQUF0QixDQURqQjs7QUFHQSxpQkFBTUssTUFBTSxrQkFBUSxtQkFBUixDQUFaO0FBQUEsaUJBQ01DLGNBQWMsMkJBRHBCO0FBQUEsaUJBRU1DLFVBQVUsdUJBRmhCOztBQUlBLGlCQUFNQyxjQUFjSCxJQUFJSSxNQUFKLENBQVdOLFFBQVgsRUFBcUJDLFFBQXJCLEVBQStCRSxXQUEvQixFQUE0Q0MsT0FBNUMsQ0FBcEI7QUFBQSxpQkFDTUcsUUFBUSxpQkFBT3ZKLGNBQVAsQ0FBc0JtSixZQUFZSyxNQUFsQyxFQUEwQ0wsWUFBWU0sS0FBdEQsRUFBNkR6SixjQUE3RCxDQUE0RXlHLEtBQTVFLENBRGQ7O0FBR0Esa0JBQUthLFFBQUwsQ0FBYzdLLENBQWQsR0FBa0IsS0FBSzJMLFNBQUwsQ0FBZTNMLENBQWpDO0FBQ0Esa0JBQUs2SyxRQUFMLENBQWM1SyxDQUFkLEdBQWtCLEtBQUswTCxTQUFMLENBQWUxTCxDQUFqQztBQUNBLGtCQUFLNEssUUFBTCxDQUFjb0MsU0FBZCxDQUF3QixDQUF4QixFQUEyQmpCLGdCQUEzQixFQUE2Q0MsZ0JBQTdDO0FBQ0Esa0JBQUtwQixRQUFMLENBQWNxQyxNQUFkLENBQXFCLENBQXJCLEVBQXdCLENBQXhCO0FBQ0Esa0JBQUtyQyxRQUFMLENBQWNzQyxNQUFkLENBQXFCTCxNQUFNOU0sQ0FBM0IsRUFBOEI4TSxNQUFNN00sQ0FBcEM7O0FBRUFxTSxvQkFBT3RNLENBQVAsR0FBVzhNLE1BQU05TSxDQUFqQjtBQUNBc00sb0JBQU9yTSxDQUFQLEdBQVc2TSxNQUFNN00sQ0FBakI7QUFDQSxpQkFBSSxDQUFDMk0sV0FBTCxFQUFrQjtBQUNkTix3QkFBT2MsT0FBUCxHQUFpQixLQUFqQjtBQUNIOztBQUVEdEYscUJBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCd0UsUUFBeEI7QUFDQXpFLHFCQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QnlFLFFBQXhCO0FBQ0ExRSxxQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkI2RSxXQUEzQjtBQUNBOUUscUJBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCMkUsV0FBM0I7QUFDSDs7O2dDQUVNO0FBQ0gsaUJBQUksS0FBS1csVUFBVCxFQUFxQjtBQUNqQkMsK0JBQWMsS0FBS0QsVUFBbkI7QUFDSDs7QUFFRCxrQkFBS3ZDLE9BQUw7QUFDQSxrQkFBS3VDLFVBQUwsR0FBa0JFLFlBQVksS0FBS3pDLE9BQWpCLEVBQTBCZixRQUExQixDQUFsQjtBQUNIOzs7a0NBRVEsQ0FDUjs7O2tDQUVRO0FBQ0wsa0JBQUt5RCxPQUFMLEdBQWUsSUFBSTVQLEtBQUs2UCxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUt2USxNQUFMLENBQVlZLEtBQXJDLEVBQTRDLEtBQUtaLE1BQUwsQ0FBWWEsTUFBeEQsQ0FBZjtBQUNIOzs7dUNBRWE7QUFDVixrQkFBS2tKLElBQUw7QUFDSDs7O2lDQUVPeUcsQyxFQUFHO0FBQ1AscUJBQVFBLEVBQUVDLE9BQVY7QUFDSSxzQkFBSyxrQkFBUUMsS0FBYjtBQUNJLDBCQUFLM0csSUFBTDtBQUNBO0FBSFI7QUFLSDs7OztHQTlJNkJySixLQUFLTyxTOztBQWtKdkM7Ozs7Ozs7O21CQWxKcUJxTSxJO0FBd0pyQixVQUFTcUQsUUFBVCxDQUFrQjNLLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QjtBQUNwQkQsU0FBSSxxQkFBV0EsRUFBRWxELENBQWIsRUFBZ0JrRCxFQUFFakQsQ0FBbEIsRUFBcUI2TixJQUFyQixFQUFKO0FBQ0EzSyxTQUFJLHFCQUFXQSxFQUFFbkQsQ0FBYixFQUFnQm1ELEVBQUVsRCxDQUFsQixFQUFxQjZOLElBQXJCLEVBQUo7QUFDQSxTQUFNQyxTQUFTNU8sS0FBSzZPLElBQUwsQ0FBVSxpQkFBT0MsVUFBUCxDQUFrQi9LLENBQWxCLEVBQXFCQyxDQUFyQixDQUFWLENBQWY7QUFDQSxZQUFPNEssU0FBUzNELFVBQWhCO0FBQ0g7O0FBR0Q7Ozs7O0FBS0EsVUFBU0UsY0FBVCxDQUF3QjRELE9BQXhCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUNwQyxTQUFJL0IsaUJBQUo7QUFDQSxTQUFNZ0MsV0FBVyxFQUFqQjs7QUFFQSxVQUFLLElBQUl2SCxJQUFJLENBQWIsRUFBZ0JBLElBQUlzSCxLQUFwQixFQUEyQnRILEdBQTNCLEVBQWdDO0FBQzVCdUYsb0JBQVcsRUFBWDs7QUFFQSxjQUFLLElBQUk5RCxJQUFJLENBQWIsRUFBZ0JBLElBQUk0RixPQUFwQixFQUE2QjVGLEdBQTdCLEVBQWtDO0FBQzlCLGlCQUFNK0YsU0FBUyxpQkFBT3ZKLFNBQVAsQ0FBaUJvRixRQUFqQixFQUEyQkMsU0FBM0IsQ0FBZjtBQUNBaUMsc0JBQVNwRixJQUFULENBQWNxSCxNQUFkOztBQUVBLGlCQUFJL0YsTUFBTTRGLFVBQVUsQ0FBcEIsRUFBdUI7QUFDbkIscUJBQU01RyxhQUFhLHFCQUFXcEQsUUFBWCxDQUFvQmtJLFFBQXBCLENBQW5CO0FBQ0FBLDRCQUFXOUUsVUFBWDtBQUNIO0FBQ0o7O0FBRUQ4RyxrQkFBU3BILElBQVQsQ0FBY29GLFFBQWQ7QUFDSDs7QUFFRCxZQUFPZ0MsUUFBUDtBQUNILEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDNU9vQkUsTzs7QUFFakI7Ozs7QUFJQSx3QkFBK0Q7QUFBQSxhQUFuREMsT0FBbUQsdUVBQXpDLElBQUlDLEtBQUosQ0FBVSxDQUFWLENBQXlDO0FBQUEsYUFBM0JDLFVBQTJCLHVFQUFkLElBQUlELEtBQUosQ0FBVSxDQUFWLENBQWM7O0FBQUE7O0FBQzNELGNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLGNBQUtFLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7Ozs7b0NBRVVGLE8sRUFBU0UsVSxFQUFZO0FBQzVCLGtCQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxrQkFBS0UsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSDs7Ozs7O21CQWRnQkgsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxLQUFNSSxZQUFZLEtBQWxCO0FBQUEsS0FDTTFFLFFBQVEsaUJBQU9BLEtBRHJCOztLQUdxQjJFLEs7OztBQUNqQixzQkFBdUQ7QUFBQSxhQUEzQ3ZDLFFBQTJDLHVFQUFoQyxFQUFnQztBQUFBLGFBQTVCd0MsU0FBNEI7QUFBQSxhQUFqQkMsU0FBaUIsdUVBQUwsR0FBSzs7QUFBQTs7QUFBQTs7QUFFbkRELHFCQUFZQSxZQUFZQSxTQUFaLEdBQXdCLHNCQUFZMUssUUFBWixHQUF1QkMsR0FBM0Q7QUFDQXlLLHFCQUFZLE9BQU9BLFNBQVAsS0FBcUIsUUFBckIsR0FBZ0MsT0FBT0EsVUFBVXRJLFFBQVYsQ0FBbUIsRUFBbkIsQ0FBdkMsR0FBZ0VzSSxTQUE1RTtBQUNBLGFBQU1FLFlBQVlGLFVBQVVHLE9BQVYsQ0FBa0IsSUFBbEIsRUFBd0IsR0FBeEIsQ0FBbEI7QUFDQSxlQUFLM0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxlQUFLd0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxlQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsZUFBS2pFLFFBQUwsR0FBZ0IsSUFBSWpOLEtBQUtvSCxRQUFULEVBQWhCO0FBQ0EsZUFBSzVHLFFBQUwsQ0FBYyxNQUFLeU0sUUFBbkI7QUFDQSxlQUFLbUUsTUFBTCxHQUFjLE1BQUtDLFdBQUwsRUFBZDtBQUNBLGVBQUtDLElBQUw7QUFabUQ7QUFhdEQ7Ozs7dUNBRWE7QUFDVixpQkFBTWpKLElBQUksS0FBS21HLFFBQUwsQ0FBYzVMLE1BQXhCO0FBQ0EsaUJBQU13TyxTQUFTLEVBQWY7QUFDQSxrQkFBSyxJQUFJbkksSUFBSSxDQUFiLEVBQWdCQSxJQUFJWixDQUFwQixFQUF1QlksR0FBdkIsRUFBNEI7QUFDeEIscUJBQU1zSSxPQUFPLElBQUl2UixLQUFLd1IsSUFBVCxDQUFjdkksQ0FBZCxFQUFpQjtBQUMxQndJLDRCQUFPLFFBRG1CO0FBRTFCQywyQkFBTVosU0FGb0I7QUFHMUJhLDJCQUFNLEtBQUtUO0FBSGUsa0JBQWpCLENBQWI7QUFLQUssc0JBQUsvQixPQUFMLEdBQWUsS0FBZjtBQUNBNEIsd0JBQU9oSSxJQUFQLENBQVltSSxJQUFaO0FBQ0Esc0JBQUsvUSxRQUFMLENBQWMrUSxJQUFkO0FBQ0g7QUFDRCxvQkFBT0gsTUFBUDtBQUNIOzs7Z0NBRU07QUFBQTs7QUFDSCxpQkFBTTFKLElBQUksS0FBS3VGLFFBQWY7QUFBQSxpQkFDTXVCLFdBQVcsS0FBS0EsUUFEdEI7QUFBQSxpQkFFTW9ELFNBQVNwRCxTQUFTLENBQVQsQ0FGZjs7QUFJQTlHLGVBQUVmLEtBQUY7QUFDQWUsZUFBRTJILFNBQUYsQ0FBWSxDQUFaLEVBQWUsS0FBSzJCLFNBQXBCLEVBQStCLEtBQUtDLFNBQXBDO0FBQ0F2SixlQUFFNEgsTUFBRixDQUFTc0MsT0FBT3hQLENBQWhCLEVBQW1Cd1AsT0FBT3ZQLENBQTFCO0FBQ0FtTSxzQkFBU2IsT0FBVCxDQUFpQixVQUFDOEMsTUFBRCxFQUFTOUcsS0FBVCxFQUFtQjtBQUNoQ2pDLG1CQUFFNkgsTUFBRixDQUFTa0IsT0FBT3JPLENBQWhCLEVBQW1CcU8sT0FBT3BPLENBQTFCO0FBQ0EscUJBQU13UCxRQUFRLE9BQUtULE1BQUwsQ0FBWXpILEtBQVosQ0FBZDtBQUFBLHFCQUNNckgsTUFBTSxpQkFBT3dQLFlBQVAsQ0FBb0JyQixNQUFwQixFQUE0QnJFLEtBQTVCLENBRFo7O0FBR0F5Rix1QkFBTXpQLENBQU4sR0FBVXFPLE9BQU9yTyxDQUFqQjtBQUNBeVAsdUJBQU14UCxDQUFOLEdBQVVvTyxPQUFPcE8sQ0FBakI7O0FBRUF3UCx1QkFBTU4sSUFBTixTQUFpQmpQLElBQUlGLENBQXJCLFNBQTBCRSxJQUFJRCxDQUE5QjtBQUNBd1AsdUJBQU1yQyxPQUFOLEdBQWdCLElBQWhCO0FBQ0gsY0FWRDtBQVdBOUgsZUFBRTZILE1BQUYsQ0FBU3FDLE9BQU94UCxDQUFoQixFQUFtQndQLE9BQU92UCxDQUExQjtBQUNIOzs7bUNBRVM7QUFBQTs7QUFDTixrQkFBSzRLLFFBQUwsQ0FBY3RHLEtBQWQ7QUFDQSxrQkFBS2tILFdBQUwsQ0FBaUIsS0FBS1osUUFBdEI7QUFDQSxrQkFBS0EsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxrQkFBS21FLE1BQUwsQ0FBWXpELE9BQVosQ0FBb0IsVUFBQ2tFLEtBQUQsRUFBVztBQUMzQix3QkFBS2hFLFdBQUwsQ0FBaUJnRSxLQUFqQjtBQUNILGNBRkQ7O0FBSUEsa0JBQUtULE1BQUwsQ0FBWXhPLE1BQVosR0FBcUIsQ0FBckI7QUFDQSxrQkFBS3dPLE1BQUwsR0FBYyxJQUFkO0FBQ0E7QUFDSDs7OztHQWxFOEJwUixLQUFLTyxTOzttQkFBbkJ3USxLOzs7Ozs7Ozs7Ozs7Ozs7OztLQ0xBZ0IsTTs7Ozs7Ozs2QkFDRTtBQUNmLG9CQUFPLEVBQVA7QUFDSDs7OzZCQUVrQjtBQUNmLGlCQUFJLENBQUMsS0FBS3ZTLEtBQVYsRUFBaUI7QUFDYixzQkFBS0EsS0FBTCxHQUFhLEVBQUM0QyxHQUFHLENBQUosRUFBT0MsR0FBRyxDQUFWLEVBQWFuQyxPQUFPLEdBQXBCLEVBQXlCQyxRQUFRLEdBQWpDLEVBQWI7QUFDSDtBQUNELG9CQUFPLEtBQUtYLEtBQVo7QUFDSDs7Ozs7O21CQVZnQnVTLE07Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7S0FHcUJDLFE7QUFDakIseUJBQTJCO0FBQUEsYUFBZnhELFFBQWUsdUVBQUosRUFBSTs7QUFBQTs7QUFDdkIsY0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7OztrQ0FFUWpNLE0sRUFBUTtBQUNiLGtCQUFLaU0sUUFBTCxDQUFjYixPQUFkLENBQXNCLFVBQUM4QyxNQUFELEVBQVk7QUFDOUJBLHdCQUFPck8sQ0FBUCxJQUFZRyxNQUFaO0FBQ0FrTyx3QkFBT3BPLENBQVAsSUFBWUUsTUFBWjtBQUNILGNBSEQ7QUFJSDs7O2dDQUVNQSxNLEVBQVE7QUFDWCxrQkFBS2lNLFFBQUwsQ0FBY2IsT0FBZCxDQUFzQixVQUFDOEMsTUFBRCxFQUFZO0FBQzlCQSx3QkFBT3JPLENBQVAsSUFBWUcsTUFBWjtBQUNBa08sd0JBQU9wTyxDQUFQLElBQVlFLE1BQVo7QUFDSCxjQUhEO0FBSUg7OztpQ0FFTztBQUNKLGlCQUFNaU0sV0FBVyxFQUFqQjtBQUNBLGtCQUFLQSxRQUFMLENBQWNiLE9BQWQsQ0FBc0IsVUFBQzhDLE1BQUQsRUFBUzlHLEtBQVQsRUFBbUI7QUFDckM2RSwwQkFBUzdFLEtBQVQsSUFBa0I4RyxPQUFPaEwsS0FBUCxFQUFsQjtBQUNILGNBRkQ7QUFHQSxvQkFBTytJLFFBQVA7QUFDSDs7Ozs7O21CQXpCZ0J3RCxROzs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTTVGLFFBQVEsaUJBQU9BLEtBQXJCO0FBQUEsS0FDTUMsUUFBUSxpQkFBT0EsS0FEckI7QUFBQSxLQUVNNEYsYUFBYSxTQUZuQjtBQUFBLEtBR01DLGtCQUFrQixVQUh4QjtBQUFBLEtBSU1DLHlCQUF5QixzQkFBWTdMLFFBQVosR0FBdUJDLEdBSnREOztLQU9xQjZMLG1COzs7QUFDakIsa0NBQVlsRSxTQUFaLEVBQXVCQyxTQUF2QixFQUFrQztBQUFBOztBQUFBOztBQUc5QixlQUFLbEIsUUFBTCxHQUFnQixJQUFJak4sS0FBS29ILFFBQVQsRUFBaEI7QUFDQSxlQUFLNUcsUUFBTCxDQUFjLE1BQUt5TSxRQUFuQjs7QUFFQSxhQUFNdUIsV0FBVyxNQUFLNkQsV0FBTCxDQUFpQm5FLFNBQWpCLEVBQTRCQyxTQUE1QixDQUFqQjtBQUFBLGFBQ016RSxhQUFhLE1BQUtBLFVBQUwsR0FBa0IscUJBQVdwRCxRQUFYLENBQW9Ca0ksUUFBcEIsQ0FEckM7O0FBR0EsZUFBSzhELEtBQUwsR0FBYSxFQUFiO0FBQ0EsZUFBS0MsUUFBTDtBQUNBLGVBQUtDLFdBQUwsQ0FBaUJoRSxRQUFqQjtBQUNBLGVBQUtpRSxXQUFMLENBQWlCL0ksVUFBakI7QUFaOEI7QUFhakM7Ozs7cUNBRVc4RSxRLEVBQVU7QUFBQTs7QUFDbEIsa0JBQUs1RixNQUFMLEdBQWMsRUFBZDtBQUNBNEYsc0JBQVNiLE9BQVQsQ0FBaUIsVUFBQzhDLE1BQUQsRUFBWTtBQUN6QixxQkFBTTdHLFFBQVEsb0JBQVU2RyxPQUFPck8sQ0FBakIsRUFBb0JxTyxPQUFPcE8sQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsc0JBQVlpRSxRQUFaLEdBQXVCQyxHQUF4RCxDQUFkO0FBQ0Esd0JBQUtxQyxNQUFMLENBQVlRLElBQVosQ0FBaUJRLEtBQWpCO0FBQ0Esd0JBQUtwSixRQUFMLENBQWNvSixLQUFkOztBQUVBLHFCQUFNdEgsTUFBTSxpQkFBT3dQLFlBQVAsQ0FBb0JyQixNQUFwQixFQUE0QnJFLEtBQTVCLENBQVo7QUFDQSx3QkFBS3NHLFFBQUwsT0FBa0JwUSxJQUFJRixDQUF0QixVQUE0QkUsSUFBSUQsQ0FBaEMsUUFBc0N1SCxNQUFNbkgsTUFBNUM7QUFDSCxjQVBEO0FBUUg7OztxQ0FFVytMLFEsRUFBVTtBQUNsQixpQkFBTTlHLElBQUksS0FBS3VGLFFBQWY7O0FBRUF2RixlQUFFMkgsU0FBRixDQUFZLENBQVosRUFBZThDLHNCQUFmLEVBQXVDLEdBQXZDO0FBQ0F6SyxlQUFFNEgsTUFBRixDQUFTZCxTQUFTLENBQVQsRUFBWXBNLENBQXJCLEVBQXdCb00sU0FBUyxDQUFULEVBQVluTSxDQUFwQztBQUNBbU0sc0JBQVNiLE9BQVQsQ0FBaUIsVUFBQzhDLE1BQUQsRUFBWTtBQUFFL0ksbUJBQUU2SCxNQUFGLENBQVNrQixPQUFPck8sQ0FBaEIsRUFBbUJxTyxPQUFPcE8sQ0FBMUI7QUFBOEIsY0FBN0Q7QUFDQXFGLGVBQUU2SCxNQUFGLENBQVNmLFNBQVMsQ0FBVCxFQUFZcE0sQ0FBckIsRUFBd0JvTSxTQUFTLENBQVQsRUFBWW5NLENBQXBDO0FBQ0g7OztvQ0FFVTtBQUNQLGlCQUFNcUYsSUFBSSxLQUFLdUYsUUFBZjtBQUFBLGlCQUNNMEYsS0FBS3RHLE1BQU1uTSxLQUFOLEdBQWMsQ0FEekI7QUFBQSxpQkFFTTBTLEtBQUt2RyxNQUFNbE0sTUFBTixHQUFlLENBRjFCOztBQUlBdUgsZUFBRTJILFNBQUYsQ0FBWSxDQUFaLEVBQWU2QyxlQUFmLEVBQWdDLEdBQWhDO0FBQ0F4SyxlQUFFNEgsTUFBRixDQUFTLENBQUNxRCxFQUFWLEVBQWMsQ0FBZDtBQUNBakwsZUFBRTZILE1BQUYsQ0FBU29ELEVBQVQsRUFBYSxDQUFiO0FBQ0FqTCxlQUFFNEgsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFDc0QsRUFBYjtBQUNBbEwsZUFBRTZILE1BQUYsQ0FBUyxDQUFULEVBQVlxRCxFQUFaO0FBQ0g7OztrQ0FFUXJCLEksRUFBNkI7QUFBQSxpQkFBdkJkLE1BQXVCLHVFQUFkLEVBQUNyTyxHQUFHLENBQUosRUFBT0MsR0FBRyxDQUFWLEVBQWM7O0FBQ2xDLGlCQUFNd1AsUUFBUSxJQUFJN1IsS0FBS3dSLElBQVQsQ0FBY0QsSUFBZCxFQUFvQjtBQUM5QkcsdUJBQU0sTUFEd0I7QUFFOUJELHdCQUFPLFFBRnVCO0FBRzlCRSx1QkFBTU07QUFId0IsY0FBcEIsQ0FBZDs7QUFNQUosbUJBQU16UCxDQUFOLEdBQVVxTyxPQUFPck8sQ0FBakI7QUFDQXlQLG1CQUFNeFAsQ0FBTixHQUFVb08sT0FBT3BPLENBQWpCO0FBQ0Esa0JBQUtpUSxLQUFMLENBQVdsSixJQUFYLENBQWdCeUksS0FBaEI7QUFDQSxrQkFBS3JSLFFBQUwsQ0FBY3FSLEtBQWQ7QUFDSDs7O2lDQUVPO0FBQ0osa0JBQUs1RSxRQUFMLENBQWN0RyxLQUFkO0FBQ0g7OzttQ0FFUztBQUFBOztBQUNOLGtCQUFLMkwsS0FBTCxDQUFXM0UsT0FBWCxDQUFtQixVQUFDNEQsSUFBRCxFQUFVO0FBQzFCLHdCQUFLMUQsV0FBTCxDQUFpQjBELElBQWpCO0FBQ0YsY0FGRDs7QUFJQSxrQkFBSzNJLE1BQUwsQ0FBWStFLE9BQVosQ0FBb0IsVUFBQy9ELEtBQUQsRUFBVztBQUM1Qix3QkFBS2lFLFdBQUwsQ0FBaUJqRSxLQUFqQjtBQUNGLGNBRkQ7O0FBSUEsa0JBQUtpRSxXQUFMLENBQWlCLEtBQUtaLFFBQXRCO0FBQ0g7OztxQ0FFV2lCLFMsRUFBV0MsUyxFQUFXO0FBQzlCLGlCQUFNSyxXQUFXLEVBQWpCO0FBQ0FOLHVCQUFVUCxPQUFWLENBQWtCLFVBQUNySSxDQUFELEVBQU87QUFDckI2SSwyQkFBVVIsT0FBVixDQUFrQixVQUFDcEksQ0FBRCxFQUFPO0FBQ3JCaUosOEJBQVNwRixJQUFULENBQWMsaUJBQU81RyxRQUFQLENBQWdCOEMsQ0FBaEIsRUFBbUJDLENBQW5CLENBQWQ7QUFDSCxrQkFGRDtBQUdILGNBSkQ7QUFLQSxvQkFBT2lKLFFBQVA7QUFDSDs7OztHQXRGNEN4TyxLQUFLTyxTOzttQkFBakM2UixtQjs7Ozs7Ozs7Ozs7OztzakJDZHJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLEtBQU1TLHlCQUF5QixFQUEvQjtBQUNBLEtBQU1DLHlCQUF5QixDQUEvQjs7S0FFcUJDLEc7QUFDakIsa0JBQVlDLDBCQUFaLEVBQXdDO0FBQUE7O0FBQ3BDLGNBQUtBLDBCQUFMLEdBQWtDQSwwQkFBbEM7QUFDSDs7Ozs2Q0FFbUJDLE8sRUFBU0MsTyxFQUFTO0FBQ2xDO0FBQ0EsaUJBQU1DLEtBQUtGLFFBQVFHLFNBQVIsRUFBWDtBQUNBLGlCQUFNQyxLQUFLSCxRQUFRRSxTQUFSLEVBQVg7QUFDQTtBQUNBLG9CQUFPQyxHQUFHN1EsUUFBSCxDQUFZMlEsRUFBWixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBT09GLE8sRUFBU0MsTyxFQUFTcEUsVyxFQUFhQyxPLEVBQVM7QUFDM0MsaUJBQU00QixVQUFVLEVBQWhCOztBQUVBO0FBQ0EsaUJBQU05UCxLQUFLLDJCQUFpQm9TLE9BQWpCLEVBQTBCQyxPQUExQixDQUFYOztBQUVBO0FBQ0EsaUJBQU1oTyxZQUFZLEtBQUtvTyxtQkFBTCxDQUF5QkwsT0FBekIsRUFBa0NDLE9BQWxDLENBQWxCOztBQUVBO0FBQ0EsaUJBQUksS0FBS0ssT0FBTCxDQUFhMVMsRUFBYixFQUFpQjhQLE9BQWpCLEVBQTBCekwsU0FBMUIsRUFBcUM2SixPQUFyQyxDQUFKLEVBQW1EOztBQUUvQyxxQkFBSSxLQUFLaUUsMEJBQVQsRUFBcUM7QUFDakMsMEJBQUtBLDBCQUFMLENBQWdDUSxjQUFoQyxDQUErQzdDLE9BQS9DLEVBQXdEOVAsRUFBeEQsRUFBNERpTyxXQUE1RDtBQUNIO0FBQ0Qsd0JBQU8sSUFBUDtBQUNIOztBQUVELG9CQUFPLEtBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7aUNBUVFqTyxFLEVBQUk4UCxPLEVBQVN6TCxTLEVBQTJCO0FBQUEsaUJBQWhCNkosT0FBZ0IsdUVBQU4sSUFBTTs7QUFDNUM7QUFDQSxpQkFBTThCLGFBQWEsSUFBSUQsS0FBSixDQUFVLENBQVYsQ0FBbkI7QUFDQTtBQUNBLGlCQUFJMUwsVUFBVXVPLE1BQVYsRUFBSixFQUF3QjtBQUNwQnZPLDJCQUFVd08sR0FBVixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFDSDtBQUNEO0FBQ0EvQyxxQkFBUSxDQUFSLElBQWE5UCxHQUFHOFMsZUFBSCxDQUFtQnpPLFNBQW5CLENBQWI7QUFDQTJMLHdCQUFXLENBQVgsSUFBZ0IzTCxTQUFoQjtBQUNBO0FBQ0E7QUFDQSxpQkFBSXlMLFFBQVEsQ0FBUixFQUFXNU0sR0FBWCxDQUFlbUIsU0FBZixLQUE2QixDQUFqQyxFQUFvQzs7QUFFaEMscUJBQUk2SixPQUFKLEVBQWE7QUFDVEEsNkJBQVE2RSxVQUFSLENBQW1CakQsT0FBbkIsRUFBNEJFLFVBQTVCO0FBQ0g7O0FBRUQsd0JBQU8sS0FBUDtBQUNIO0FBQ0Q7QUFDQTNMLHVCQUFVMk8sTUFBVjtBQUNBO0FBQ0Esa0JBQUssSUFBSTVLLElBQUksQ0FBYixFQUFnQkEsSUFBSTRKLHNCQUFwQixFQUE0QzVKLEdBQTVDLEVBQWlEO0FBQzdDO0FBQ0EwSCx5QkFBUXZILElBQVIsQ0FBYXZJLEdBQUc4UyxlQUFILENBQW1Cek8sU0FBbkIsQ0FBYjtBQUNBMkwsNEJBQVdGLFFBQVEvTixNQUFSLEdBQWlCLENBQTVCLElBQWlDc0MsU0FBakM7QUFDQTtBQUNBLHFCQUFJeUwsUUFBUUEsUUFBUS9OLE1BQVIsR0FBaUIsQ0FBekIsRUFBNEJtQixHQUE1QixDQUFnQ21CLFNBQWhDLEtBQThDNE4sc0JBQWxELEVBQTBFO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQSx5QkFBSS9ELE9BQUosRUFBYTtBQUNUQSxpQ0FBUTZFLFVBQVIsQ0FBbUJqRCxPQUFuQixFQUE0QkUsVUFBNUI7QUFDSDs7QUFFRCw0QkFBTyxLQUFQO0FBQ0gsa0JBVkQsTUFVTztBQUNIO0FBQ0EseUJBQUksS0FBS2lELFlBQUwsQ0FBa0JuRCxPQUFsQixFQUEyQnpMLFNBQTNCLENBQUosRUFBMkM7QUFDdkM7QUFDQTs7QUFFQSw2QkFBSTZKLE9BQUosRUFBYTtBQUNUQSxxQ0FBUTZFLFVBQVIsQ0FBbUJqRCxPQUFuQixFQUE0QkUsVUFBNUI7QUFDSDs7QUFFRCxnQ0FBTyxJQUFQO0FBQ0g7QUFDRDtBQUNBO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSTlCLE9BQUosRUFBYTtBQUNUQSx5QkFBUTZFLFVBQVIsQ0FBbUJqRCxPQUFuQixFQUE0QkUsVUFBNUI7QUFDSDs7QUFFRCxvQkFBTyxLQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FlYUYsTyxFQUFTekwsUyxFQUFXO0FBQzdCO0FBQ0E7QUFDQSxpQkFBTUksSUFBSXFMLFFBQVFBLFFBQVEvTixNQUFSLEdBQWlCLENBQXpCLENBQVY7QUFDQTtBQUNBLGlCQUFNbVIsS0FBSyxpQkFBT0MsTUFBUCxDQUFjMU8sQ0FBZCxDQUFYO0FBQ0E7QUFDQSxpQkFBSXFMLFFBQVEvTixNQUFSLElBQWtCLENBQXRCLEVBQXlCO0FBQ3JCO0FBQ0EscUJBQU0yQyxJQUFJb0wsUUFBUSxDQUFSLENBQVY7QUFDQSxxQkFBTS9LLElBQUkrSyxRQUFRLENBQVIsQ0FBVjtBQUNBO0FBQ0EscUJBQU1zRCxLQUFLM08sRUFBRVcsRUFBRixDQUFLVixDQUFMLENBQVg7QUFDQSxxQkFBTU8sS0FBS1IsRUFBRVcsRUFBRixDQUFLTCxDQUFMLENBQVg7QUFDQTtBQUNBLHFCQUFNc08sU0FBUyxpQkFBT0MsYUFBUCxDQUFxQkYsRUFBckIsRUFBeUJuTyxFQUF6QixFQUE2QkEsRUFBN0IsQ0FBZjtBQUNBO0FBQ0EscUJBQU1zTyxhQUFhRixPQUFPblEsR0FBUCxDQUFXZ1EsRUFBWCxDQUFuQjtBQUNBLHFCQUFJSyxjQUFjLENBQWxCLEVBQXFCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXpELDZCQUFRMEQsTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBblAsK0JBQVV3TyxHQUFWLENBQWNRLE1BQWQ7QUFDSCxrQkFaRCxNQVlPO0FBQ0gseUJBQU1JLFNBQVMsaUJBQU9ILGFBQVAsQ0FBcUJyTyxFQUFyQixFQUF5Qm1PLEVBQXpCLEVBQTZCQSxFQUE3QixDQUFmO0FBQ0EseUJBQU1NLGFBQWFELE9BQU92USxHQUFQLENBQVdnUSxFQUFYLENBQW5CO0FBQ0E7QUFDQSx5QkFBSVEsYUFBYSxDQUFqQixFQUFvQjtBQUNoQjtBQUNBO0FBQ0EsZ0NBQU8sSUFBUDtBQUNILHNCQUpELE1BSU87QUFDSDtBQUNBO0FBQ0E1RCxpQ0FBUTBELE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW5QLG1DQUFVd08sR0FBVixDQUFjWSxNQUFkO0FBQ0g7QUFDSjtBQUNKLGNBMUNELE1BMENPO0FBQ0g7QUFDQSxxQkFBTS9PLEtBQUlvTCxRQUFRLENBQVIsQ0FBVjtBQUNBLHFCQUFNc0QsTUFBSzNPLEVBQUVXLEVBQUYsQ0FBS1YsRUFBTCxDQUFYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUwsMkJBQVV3TyxHQUFWLENBQWMsaUJBQU9TLGFBQVAsQ0FBcUJGLEdBQXJCLEVBQXlCRixFQUF6QixFQUE2QkUsR0FBN0IsQ0FBZDtBQUNBO0FBQ0E7QUFDQSxxQkFBSS9PLFVBQVVzUCxtQkFBVixNQUFtQyxrQkFBUUMsQ0FBL0MsRUFBa0Q7QUFDOUM7QUFDQXZQLCtCQUFVd08sR0FBVixDQUFjTyxJQUFHUyxJQUFILEVBQWQ7QUFDSDtBQUNKO0FBQ0Qsb0JBQU8sS0FBUDtBQUNIOzs7Ozs7bUJBaE1nQjNCLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0JxQjRCLE87Ozs7Ozs7bUNBTUE7QUFDYixpQkFBSTdFLElBQUksR0FBUjtBQUNBLG9CQUFPLE1BQU1BLENBQU4sR0FBVSxHQUFqQixFQUFzQjtBQUNsQkEsc0JBQUssR0FBTDtBQUNIO0FBQ0Qsb0JBQU9BLENBQVA7QUFDSDs7OzZCQVZjO0FBQ1gsb0JBQU82RSxRQUFRQyxPQUFSLEVBQVA7QUFDSDs7Ozs7O21CQUpnQkQsTzs7Ozs7Ozs7Ozs7OztzakJDeEJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7Ozs7S0FHcUJFLFk7O0FBRWpCOzs7O0FBSUEsMkJBQVk1QixPQUFaLEVBQXFCQyxPQUFyQixFQUE4QjtBQUFBOztBQUMxQixjQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDSDs7QUFFRDs7Ozs7Ozs7eUNBSWdCaE8sUyxFQUFXO0FBQ3ZCO0FBQ0EsaUJBQU00UCxTQUFTLEtBQUs3QixPQUFMLENBQWE4QixnQkFBYixDQUE4QjdQLFNBQTlCLENBQWY7QUFDQTtBQUNBLGlCQUFNOFAsU0FBUyxLQUFLOUIsT0FBTCxDQUFhNkIsZ0JBQWIsQ0FBOEIsaUJBQU9mLE1BQVAsQ0FBYzlPLFNBQWQsQ0FBOUIsQ0FBZjtBQUNBO0FBQ0Esb0JBQU80UCxPQUFPdFMsUUFBUCxDQUFnQndTLE1BQWhCLENBQVA7QUFDSDs7O3NDQUVZO0FBQ1Qsb0JBQU8sS0FBSy9CLE9BQVo7QUFDSDs7O3NDQUVZO0FBQ1Qsb0JBQU8sS0FBS0MsT0FBWjtBQUNIOzs7Ozs7bUJBOUJnQjJCLFk7Ozs7Ozs7Ozs7Ozs7c2pCQzVCckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Ozs7QUFDQTs7Ozs7Ozs7S0FHcUJJLGdCOztBQUVqQjs7OztBQUlBLCtCQUFZdEUsT0FBWixFQUFxQjtBQUFBOztBQUNqQixjQUFLdUUsT0FBTCxHQUFlLEtBQUtDLFVBQUwsQ0FBZ0J4RSxPQUFoQixDQUFmOztBQUVBLGNBQUt5RSxLQUFMLEdBQWEsa0NBQWtCLFVBQUM5UCxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNyQyxpQkFBSUQsRUFBRStQLFFBQUYsR0FBYTlQLEVBQUU4UCxRQUFuQixFQUE2QjtBQUN6Qix3QkFBTyxDQUFDLENBQVI7QUFDSDtBQUNELGlCQUFJL1AsRUFBRStQLFFBQUYsR0FBYTlQLEVBQUU4UCxRQUFuQixFQUE2QjtBQUN6Qix3QkFBTyxDQUFQO0FBQ0g7QUFDRCxvQkFBTyxDQUFQO0FBQ0gsVUFSWSxDQUFiOztBQVVBLGFBQU1DLE9BQU8zRSxRQUFRL04sTUFBckI7O0FBRUFzSCxpQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JtTCxJQUFwQjtBQUNBLGNBQUssSUFBSXJNLElBQUksQ0FBYixFQUFnQkEsSUFBSXFNLElBQXBCLEVBQTBCck0sR0FBMUIsRUFBK0I7QUFDM0I7QUFDQSxpQkFBSXlCLElBQUl6QixJQUFJLENBQUosSUFBU3FNLElBQVQsR0FBZ0IsQ0FBaEIsR0FBb0JyTSxJQUFJLENBQWhDO0FBQ0E7QUFDQSxpQkFBTTNELElBQUlxTCxRQUFRMUgsQ0FBUixDQUFWO0FBQUEsaUJBQ00xRCxJQUFJb0wsUUFBUWpHLENBQVIsQ0FEVjtBQUVBO0FBQ0Esa0JBQUswSyxLQUFMLENBQVdsUCxHQUFYLENBQWUsbUNBQXlCWixDQUF6QixFQUE0QkMsQ0FBNUIsRUFBK0IsS0FBSzJQLE9BQXBDLENBQWY7QUFDSDs7QUFFRGhMLGlCQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0IsS0FBS2lMLEtBQUwsQ0FBV0UsSUFBMUM7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7b0NBT1czRSxPLEVBQVM7QUFDaEIsaUJBQU0yRSxPQUFPM0UsUUFBUS9OLE1BQXJCOztBQUVBLGtCQUFLLElBQUlxRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlxTSxJQUFwQixFQUEwQnJNLEdBQTFCLEVBQStCO0FBQzNCLHFCQUFJeUIsSUFBSXpCLElBQUksQ0FBSixLQUFVcU0sSUFBVixHQUFpQixDQUFqQixHQUFxQnJNLElBQUksQ0FBakM7QUFDQSxxQkFBTTNELElBQUlxTCxRQUFRMUgsQ0FBUixDQUFWO0FBQUEscUJBQ00xRCxJQUFJb0wsUUFBUWpHLENBQVIsQ0FEVjs7QUFHQSxxQkFBSXBGLEVBQUVzRixLQUFGLENBQVFyRixDQUFSLElBQWEsQ0FBakIsRUFBb0I7QUFDaEI7QUFDQSw0QkFBTyxDQUFQO0FBQ0gsa0JBSEQsTUFHTyxJQUFJRCxFQUFFc0YsS0FBRixDQUFRckYsQ0FBUixJQUFhLENBQWpCLEVBQW9CO0FBQ3ZCO0FBQ0EsNEJBQU8sQ0FBQyxDQUFSO0FBQ0g7QUFDSjtBQUNELG9CQUFPLENBQVA7QUFDSDs7QUFFRDs7Ozs7OzswQ0FJaUI7QUFDYixvQkFBTyxLQUFLNlAsS0FBTCxDQUFXRyxJQUFYLEVBQVA7QUFDSDs7QUFFRDs7Ozs7OztnQ0FJTzNMLEssRUFBTztBQUNWLGlCQUFNNEwsT0FBTyxLQUFLSixLQUFMLENBQVdLLElBQVgsRUFBYjtBQUNBLGlCQUFNQyxRQUFRLG1DQUF5QkYsS0FBS1YsTUFBOUIsRUFBc0NsTCxLQUF0QyxFQUE2QyxLQUFLc0wsT0FBbEQsQ0FBZDtBQUNBLGlCQUFNUyxRQUFRLG1DQUF5Qi9MLEtBQXpCLEVBQWdDNEwsS0FBS1IsTUFBckMsRUFBNkMsS0FBS0UsT0FBbEQsQ0FBZDtBQUNBLGtCQUFLRSxLQUFMLENBQVdsUCxHQUFYLENBQWV3UCxLQUFmO0FBQ0Esa0JBQUtOLEtBQUwsQ0FBV2xQLEdBQVgsQ0FBZXlQLEtBQWY7QUFDSDs7Ozs7O21CQWhGZ0JWLGdCOzs7Ozs7O0FDN0JyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsV0FBVTtBQUNWLG1CQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQSxrQkFBaUIsV0FBVztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLFlBQVcsb0JBQW9CO0FBQy9CLFlBQVcscUJBQXFCO0FBQ2hDLFlBQVcsb0JBQW9CO0FBQy9CLFlBQVcsb0JBQW9CO0FBQy9CLFlBQVcsb0JBQW9CO0FBQy9CLFlBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsT0FBTSw0QkFBNEI7QUFDbEMsT0FBTSw4QkFBOEI7QUFDcEMsT0FBTSw4QkFBOEI7QUFDcEMsT0FBTTtBQUNOO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDMU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7O0tBR3FCVyxvQjs7QUFFakI7Ozs7O0FBS0EsbUNBQVlkLE1BQVosRUFBb0JFLE1BQXBCLEVBQTRCRSxPQUE1QixFQUFxQztBQUFBOztBQUNqQztBQUNBO0FBQ0EsY0FBSy9GLE1BQUwsR0FBYyxxQkFBVzZGLE9BQU81UyxDQUFQLEdBQVcwUyxPQUFPMVMsQ0FBN0IsRUFBZ0M0UyxPQUFPM1MsQ0FBUCxHQUFXeVMsT0FBT3pTLENBQWxELENBQWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFJNlMsVUFBVSxDQUFkLEVBQWlCO0FBQ2I7QUFDQSxrQkFBSy9GLE1BQUwsQ0FBWTBHLEtBQVo7QUFDSCxVQUhELE1BR087QUFDSDtBQUNBLGtCQUFLMUcsTUFBTCxDQUFZdUYsSUFBWjtBQUNIOztBQUVELGNBQUt2RixNQUFMLENBQVlyTSxTQUFaOztBQUVBO0FBQ0EsY0FBS3VTLFFBQUwsR0FBZ0I5VCxLQUFLeUIsR0FBTCxDQUFTOFIsT0FBTzFTLENBQVAsR0FBVyxLQUFLK00sTUFBTCxDQUFZL00sQ0FBdkIsR0FBMkIwUyxPQUFPelMsQ0FBUCxHQUFXLEtBQUs4TSxNQUFMLENBQVk5TSxDQUEzRCxDQUFoQjtBQUNBLGNBQUt5UyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7QUFFRDs7Ozs7Ozs7bUNBSVUxTSxDLEVBQUc7QUFDVCxpQkFBSSxLQUFLK00sUUFBTCxHQUFnQi9NLEVBQUUrTSxRQUF0QixFQUFnQyxPQUFPLENBQUMsQ0FBUjtBQUNoQyxpQkFBSSxLQUFLQSxRQUFMLEdBQWdCL00sRUFBRStNLFFBQXRCLEVBQWdDLE9BQU8sQ0FBUDtBQUNoQyxvQkFBTyxDQUFQO0FBQ0g7Ozs7OzttQkEzQ2dCTyxvQjs7Ozs7Ozs7Ozs7OztzakJDSHJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsS0FBTS9DLHlCQUF5QixHQUEvQjtBQUFBLEtBQ01pRCwyQkFBMkJ2VSxLQUFLeUQsSUFBTCxDQUFVLGtCQUFReVAsQ0FBbEIsQ0FEakM7O0tBSXFCc0IsRzs7OzZCQUVtQjtBQUNoQyxvQkFBT2xELHNCQUFQO0FBQ0g7Ozs2QkFFcUM7QUFDbEMsb0JBQU9pRCx3QkFBUDtBQUNIOzs7QUFFRCxvQkFBYztBQUFBOztBQUNWLGNBQUtFLGFBQUwsR0FBcUJuRCxzQkFBckI7QUFDQSxjQUFLb0QsZUFBTCxHQUF1Qkgsd0JBQXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozt3Q0FPZW5GLE8sRUFBU3VGLFksRUFBY3BILFcsRUFBYTtBQUMvQztBQUNBLGlCQUFNcUgsUUFBUSwrQkFBcUJ4RixPQUFyQixDQUFkO0FBQUEsaUJBQ000RSxPQUFPWSxNQUFNZixLQUFOLENBQVlHLElBQVosRUFEYjtBQUVBLGlCQUFJQyxPQUFPLElBQVg7QUFBQSxpQkFBaUI1TCxRQUFRLElBQXpCOztBQUVBTSxxQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLFlBQTlCLEVBQTRDZ00sTUFBTWYsS0FBTixDQUFZRSxJQUF4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFLLElBQUlyTSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSytNLGFBQXpCLEVBQXdDL00sR0FBeEMsRUFBNkM7QUFDekN1TSx3QkFBT1csTUFBTUMsY0FBTixFQUFQO0FBQ0F4TSx5QkFBUXNNLGFBQWF2QyxlQUFiLENBQTZCNkIsS0FBS3JHLE1BQWxDLENBQVI7O0FBRUEscUJBQU1rSCxhQUFhek0sTUFBTTdGLEdBQU4sQ0FBVXlSLEtBQUtyRyxNQUFmLENBQW5COztBQUVBakYseUJBQVFDLEdBQVIsQ0FBWWxCLENBQVosRUFBZSxnQkFBZixFQUFpQ3VNLEtBQUtILFFBQXRDLEVBQWdELFlBQWhELEVBQThEZ0IsVUFBOUQsRUFBMEUsOEJBQTFFLEVBQTJHQSxhQUFhYixLQUFLSCxRQUE3SDtBQUNBLHFCQUFLZ0IsYUFBYWIsS0FBS0gsUUFBbkIsR0FBK0IsS0FBS1ksZUFBeEMsRUFBeUQ7QUFDckRuSCxpQ0FBWUssTUFBWixHQUFxQnFHLEtBQUtyRyxNQUExQjtBQUNBTCxpQ0FBWU0sS0FBWixHQUFvQmlILFVBQXBCOztBQUVBbk0sNkJBQVFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBRCw2QkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkIyRSxZQUFZSyxNQUF2QyxFQUErQ0wsWUFBWU0sS0FBM0Q7QUFDQWxGLDZCQUFRQyxHQUFSLENBQVksb0NBQVo7QUFDQUQsNkJBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9Cb0wsS0FBS3BHLE1BQXpCLEVBQWlDb0csS0FBS0YsUUFBdEM7QUFDQW5MLDZCQUFRQyxHQUFSLENBQVksb0NBQVo7QUFDQTtBQUNIOztBQUVEZ00sdUJBQU1HLE1BQU4sQ0FBYTFNLEtBQWI7QUFDSDs7QUFFRGtGLHlCQUFZSyxNQUFaLEdBQXFCcUcsS0FBS3JHLE1BQTFCO0FBQ0FMLHlCQUFZTSxLQUFaLEdBQW9CeEYsTUFBTTdGLEdBQU4sQ0FBVXlSLEtBQUtyRyxNQUFmLENBQXBCOztBQUVBakYscUJBQVFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBRCxxQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkIyRSxZQUFZSyxNQUF2QyxFQUErQ0wsWUFBWU0sS0FBM0Q7QUFDQWxGLHFCQUFRQyxHQUFSLENBQVksb0NBQVo7QUFDQUQscUJBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9Cb0wsS0FBS3BHLE1BQXpCLEVBQWlDb0csS0FBS0YsUUFBdEM7QUFDQW5MLHFCQUFRQyxHQUFSLENBQVksb0NBQVo7QUFDSDs7OzBDQUVnQjtBQUNiLG9CQUFPLEtBQUs2TCxhQUFaO0FBQ0g7OzswQ0FFZ0JBLGEsRUFBZTtBQUM1QixpQkFBSUEsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ25CLHVCQUFNLElBQUlPLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0g7QUFDRCxrQkFBS1AsYUFBTCxHQUFxQkEsYUFBckI7QUFDSDs7OzhDQUVvQjtBQUNqQixvQkFBTyxLQUFLQyxlQUFaO0FBQ0g7Ozs0Q0FFa0JBLGUsRUFBaUI7QUFDaEMsaUJBQUlBLG1CQUFtQixDQUF2QixFQUEwQjtBQUN0Qix1QkFBTSxJQUFJTSxLQUFKLENBQVUsa0RBQVYsQ0FBTjtBQUNIO0FBQ0Qsa0JBQUtOLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0g7Ozs7OzttQkFoR2dCRixHOzs7Ozs7Ozs7Ozs7Ozs7QUNUckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2dmQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2QnFCUyxPOzs7QUFFakI7Ozs7OztBQU1BLHdCQUF5QztBQUFBLGFBQTdCaEksUUFBNkIsdUVBQWxCLEVBQWtCO0FBQUEsYUFBZGlJLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFFckMsZUFBS2pJLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsZUFBS2lJLE9BQUwsR0FBZ0JqSSxTQUFTNUwsTUFBVCxLQUFvQixDQUFyQixHQUNYLG1CQUFTOFQsOEJBQVQsQ0FBd0NsSSxRQUF4QyxDQURXLEdBQ3lDaUksT0FEeEQ7QUFFQSxlQUFLRSxNQUFMLEdBQWMsTUFBS3ZELFNBQUwsRUFBZDtBQUxxQztBQU14Qzs7OztxQ0FFVztBQUNSLGlCQUFNd0QsTUFBTSxzQkFBWjtBQUFBLGlCQUNNcEksV0FBVyxLQUFLQSxRQUR0QjtBQUFBLGlCQUVNcUksUUFBUXJJLFNBQVM1TCxNQUZ2Qjs7QUFJQSxrQkFBSyxJQUFJcUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNE4sS0FBcEIsRUFBMkI1TixHQUEzQixFQUFnQztBQUM1QjJOLHFCQUFJeFUsQ0FBSixJQUFTb00sU0FBU3ZGLENBQVQsRUFBWTdHLENBQXJCO0FBQ0F3VSxxQkFBSXZVLENBQUosSUFBU21NLFNBQVN2RixDQUFULEVBQVk1RyxDQUFyQjtBQUNIOztBQUVEdVUsaUJBQUl4VSxDQUFKLElBQVN5VSxLQUFUO0FBQ0FELGlCQUFJdlUsQ0FBSixJQUFTd1UsS0FBVDtBQUNBLG9CQUFPRCxHQUFQO0FBQ0g7OzswQ0FFZ0IxUixTLEVBQVc7QUFDeEIsaUJBQU0wRSxRQUFRLHNCQUFkO0FBQ0E7QUFDQUEsbUJBQU04SixHQUFOLENBQVUsS0FBS2xGLFFBQUwsQ0FBYyxDQUFkLENBQVY7QUFDQTtBQUNBLGlCQUFJN00sTUFBTXVELFVBQVVuQixHQUFWLENBQWMsS0FBS3lLLFFBQUwsQ0FBYyxDQUFkLENBQWQsQ0FBVjtBQUNBLGlCQUFNOEcsT0FBTyxLQUFLOUcsUUFBTCxDQUFjNUwsTUFBM0I7QUFDQSxrQkFBSyxJQUFJcUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcU0sSUFBcEIsRUFBMEJyTSxHQUExQixFQUErQjtBQUMzQixxQkFBTXdILFNBQVMsS0FBS2pDLFFBQUwsQ0FBY3ZGLENBQWQsQ0FBZjtBQUFBLHFCQUNNb04sYUFBYW5SLFVBQVVuQixHQUFWLENBQWMwTSxNQUFkLENBRG5COztBQUdBLHFCQUFJNEYsYUFBYTFVLEdBQWpCLEVBQXNCO0FBQ2xCaUksMkJBQU04SixHQUFOLENBQVVqRCxNQUFWO0FBQ0E5TywyQkFBTTBVLFVBQU47QUFDSDtBQUNKOztBQUVELG9CQUFPek0sS0FBUDtBQUNIOzs7NENBRWtCMUUsUyxFQUFXO0FBQzFCLGlCQUFNNFIsVUFBVSxzQkFBaEI7QUFDQSxpQkFBSW5WLE1BQU0sQ0FBQ29WLE9BQU9DLFNBQWxCO0FBQ0EsaUJBQUlyTixRQUFRLENBQVo7O0FBRUEsaUJBQU1rTixRQUFRLEtBQUtySSxRQUFMLENBQWM1TCxNQUE1QjtBQUNBLGtCQUFLLElBQUlxRyxJQUFJLENBQWIsRUFBZ0JBLElBQUk0TixLQUFwQixFQUEyQjVOLEdBQTNCLEVBQWdDO0FBQzVCO0FBQ0EscUJBQU13SCxTQUFTLEtBQUtqQyxRQUFMLENBQWN2RixDQUFkLENBQWY7QUFDQTtBQUNBLHFCQUFNb04sYUFBYW5SLFVBQVVuQixHQUFWLENBQWMwTSxNQUFkLENBQW5CO0FBQ0E7QUFDQSxxQkFBSTRGLGFBQWExVSxHQUFqQixFQUFzQjtBQUNsQjtBQUNBbVYsNkJBQVFwRCxHQUFSLENBQVlsTyxDQUFaO0FBQ0E7QUFDQTdELDJCQUFNMFUsVUFBTjtBQUNBO0FBQ0ExTSw2QkFBUVYsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBLGlCQUFNaEIsSUFBSTBCLFFBQVEsQ0FBUixJQUFha04sS0FBYixHQUFxQixDQUFyQixHQUF5QmxOLFFBQVEsQ0FBM0M7QUFDQSxpQkFBTTlELElBQUk4RCxRQUFRLENBQVIsR0FBWSxDQUFaLEdBQWdCa04sUUFBUSxDQUF4QixHQUE0QmxOLFFBQVEsQ0FBOUM7O0FBRUEsaUJBQU1zTixRQUFRLEtBQUtSLE9BQUwsQ0FBYTlNLFNBQVMsQ0FBVCxHQUFha04sUUFBUSxDQUFyQixHQUF5QmxOLFFBQVEsQ0FBOUMsQ0FBZDtBQUNBLGlCQUFNdU4sU0FBUyxLQUFLVCxPQUFMLENBQWE5TSxLQUFiLENBQWY7QUFDQTtBQUNBLGlCQUFNd04sS0FBSyxJQUFJQyxZQUFKLENBQWlCTixPQUFqQixFQUEwQm5OLEtBQTFCLENBQVg7QUFDQTtBQUNBLGlCQUFJc04sTUFBTWxULEdBQU4sQ0FBVW1CLFNBQVYsSUFBdUJnUyxPQUFPblQsR0FBUCxDQUFXbUIsU0FBWCxDQUEzQixFQUFrRDtBQUM5QyxxQkFBTXdQLE9BQU8sS0FBS2xHLFFBQUwsQ0FBY3ZHLENBQWQsQ0FBYjtBQUNBLHFCQUFNb1AsS0FBSyxJQUFJRCxZQUFKLENBQWlCMUMsSUFBakIsRUFBdUJ6TSxDQUF2QixDQUFYO0FBQ0E7QUFDQSx3QkFBTyxJQUFJcVAsV0FBSixDQUFnQkgsRUFBaEIsRUFBb0JFLEVBQXBCLEVBQXdCRixFQUF4QixFQUE0QkwsUUFBUTdRLEVBQVIsQ0FBV3lPLElBQVgsQ0FBNUIsRUFBOEMvSyxRQUFRLENBQXRELENBQVA7QUFDSDs7QUFFRCxpQkFBTWtNLFFBQVEsS0FBS3JILFFBQUwsQ0FBYzNJLENBQWQsQ0FBZDtBQUNBLGlCQUFNMFIsS0FBSyxJQUFJSCxZQUFKLENBQWlCdkIsS0FBakIsRUFBd0JoUSxDQUF4QixDQUFYO0FBQ0E7QUFDQSxvQkFBTyxJQUFJeVIsV0FBSixDQUFnQkMsRUFBaEIsRUFBb0JKLEVBQXBCLEVBQXdCQSxFQUF4QixFQUE0QnRCLE1BQU01UCxFQUFOLENBQVM2USxPQUFULENBQTVCLEVBQStDbk4sS0FBL0MsQ0FBUDtBQUNIOzs7Ozs7bUJBOUZnQjZNLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0JxQmdCLE07Ozs7Ozs7OztBQUVqQjs7Ozt3Q0FJbUJ0UyxTLEVBQVc7QUFDMUIsYUFBTSxJQUFJcVIsS0FBSixDQUFVLHVDQUFWLENBQU47QUFDSDs7QUFFRDs7Ozs7OztzQ0FJaUJyUixTLEVBQVc7QUFDeEIsYUFBTSxJQUFJcVIsS0FBSixDQUFVLHFDQUFWLENBQU47QUFDSDs7Ozs7O21CQWhCZ0JpQixNOzs7Ozs7Ozs7Ozs7O3NqQkN4QnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7Ozs7OztLQUdxQkMsUTs7Ozs7Ozs7O0FBRWpCOzs7Ozs7Ozs7d0RBU3NDakosUSxFQUFVO0FBQzVDLGlCQUFJQSxZQUFZLElBQWhCLEVBQXNCO0FBQ2xCLHdCQUFPLElBQVA7QUFDSDs7QUFFRCxpQkFBTThHLE9BQU85RyxTQUFTNUwsTUFBdEI7QUFDQSxpQkFBSTBTLFNBQVMsQ0FBYixFQUFnQjtBQUNaLHdCQUFPLElBQVA7QUFDSDs7QUFFRCxpQkFBTW1CLFVBQVUsSUFBSTdGLEtBQUosQ0FBVTBFLElBQVYsQ0FBaEI7QUFDQSxrQkFBSyxJQUFJck0sSUFBSSxDQUFiLEVBQWdCQSxJQUFJcU0sSUFBcEIsRUFBMEJyTSxHQUExQixFQUErQjtBQUMzQjtBQUNBLHFCQUFNeU8sS0FBS2xKLFNBQVN2RixDQUFULENBQVg7QUFDQSxxQkFBTTBPLEtBQU0xTyxJQUFJLENBQUosS0FBVXFNLElBQVgsR0FBbUI5RyxTQUFTLENBQVQsQ0FBbkIsR0FBaUNBLFNBQVN2RixJQUFJLENBQWIsQ0FBNUM7QUFDQTtBQUNBLHFCQUFNWixJQUFJcVAsR0FBR3pSLEVBQUgsQ0FBTTBSLEVBQU4sRUFBVWpELElBQVYsRUFBVjtBQUNBO0FBQ0FyTSxtQkFBRXZGLFNBQUY7QUFDQTJULHlCQUFReE4sQ0FBUixJQUFhWixDQUFiO0FBQ0g7O0FBRUQsb0JBQU9vTyxPQUFQO0FBQ0g7Ozs7OzttQkFsQ2dCZ0IsUTs7Ozs7Ozs7Ozs7OztzakJDNUJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7Ozs7S0FHcUJHLFc7QUFDakI7Ozs7O0FBS0EsNEJBQThDO0FBQUEsYUFBbEN6SSxNQUFrQyx1RUFBekIsc0JBQXlCO0FBQUEsYUFBWEMsS0FBVyx1RUFBSCxDQUFHOztBQUFBOztBQUMxQyxjQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7OztpQ0FFTztBQUNKLGtCQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNBLGtCQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7cUNBRVc7QUFDUixvQkFBTyxLQUFLRCxNQUFaO0FBQ0g7OztvQ0FFVTtBQUNQLG9CQUFPLEtBQUtDLEtBQVo7QUFDSDs7QUFFRDs7Ozs7OzttQ0FJVUQsTSxFQUFRO0FBQ2Qsa0JBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOztBQUVEOzs7Ozs7O2tDQUlTQyxLLEVBQU87QUFDWixrQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7OzttQkF0Q2dCd0ksVzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJyQjs7OztBQUNBOzs7Ozs7OztLQUdxQkMsTzs7Ozs7OzswQ0FFTzNKLFMsRUFBV0MsUyxFQUNuQztBQUNJakUscUJBQVFDLEdBQVIsQ0FBWSxtREFBWjtBQUNBRCxxQkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDK0QsVUFBVXRMLE1BQVYsR0FBbUJ1TCxVQUFVdkwsTUFBOUQsRUFBc0UsR0FBdEU7QUFDQXNILHFCQUFRQyxHQUFSLENBQVksbURBQVo7O0FBRUEsaUJBQU0yTixPQUFPLEVBQWI7QUFDQSxrQkFBSyxJQUFJN08sSUFBSSxDQUFiLEVBQWdCQSxJQUFJaUYsVUFBVXRMLE1BQTlCLEVBQXNDcUcsR0FBdEMsRUFBMkM7QUFDdkMsc0JBQUssSUFBSXlCLElBQUksQ0FBYixFQUFnQkEsSUFBSXlELFVBQVV2TCxNQUE5QixFQUFzQzhILEdBQXRDLEVBQTJDOztBQUV2Qyx5QkFBSXFOLEtBQUs3SixVQUFVakYsQ0FBVixFQUFheEQsS0FBYixFQUFUO0FBQ0EseUJBQUl1UyxLQUFLN0osVUFBVXpELENBQVYsRUFBYWpGLEtBQWIsRUFBVDtBQUNBLHlCQUFJd1MsT0FBTyxpQkFBT3pWLFFBQVAsQ0FBZ0J1VixFQUFoQixFQUFvQkMsRUFBcEIsQ0FBWDtBQUNBRiwwQkFBSzFPLElBQUwsQ0FBVTZPLElBQVY7QUFDQS9OLDZCQUFRQyxHQUFSLENBQVlsQixDQUFaLEVBQWV5QixDQUFmLFdBQXlCdU4sS0FBSzdWLENBQTlCLFVBQW9DNlYsS0FBSzVWLENBQXpDO0FBQ0g7QUFDSjs7QUFFRCxpQkFBTTZWLGlCQUFpQixjQUFJOU4sZ0JBQUosQ0FBcUIwTixJQUFyQixDQUF2QjtBQUNBRCxxQkFBUXBGLFdBQVIsQ0FBb0J5RixjQUFwQixFQUFvQyxDQUFwQyxFQUF1QyxRQUF2QyxFQUFpRCxDQUFqRDtBQUNIOzs7cUNBR2tCMUosUSxFQUNuQjtBQUFBLGlCQUQ2QjJKLFNBQzdCLHVFQUR5QyxDQUN6QztBQUFBLGlCQUQ0QzlSLEtBQzVDLHVFQURvRCxRQUNwRDtBQUFBLGlCQUQ4REcsS0FDOUQsdUVBRHNFLEdBQ3RFOztBQUNJLGlCQUFNeUcsV0FBVy9OLE9BQU93SSxDQUF4QjtBQUNBdUYsc0JBQVNvQyxTQUFULENBQW1COEksU0FBbkIsRUFBOEI5UixLQUE5QixFQUFxQ0csS0FBckM7O0FBRUEsaUJBQU00UixPQUFPNUosU0FBUyxDQUFULEVBQVkvSSxLQUFaLEVBQWI7QUFDQTJTLGtCQUFLelMsY0FBTCxDQUFvQnpHLE9BQU9tWixhQUEzQjs7QUFFQXBMLHNCQUFTcUMsTUFBVCxDQUFnQjhJLEtBQUtoVyxDQUFyQixFQUF3QmdXLEtBQUsvVixDQUE3Qjs7QUFFQTs7QUFFQSxrQkFBSyxJQUFJNEcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJdUYsU0FBUzVMLE1BQTdCLEVBQXFDcUcsR0FBckMsRUFBMEM7QUFDdEMscUJBQUkzRyxNQUFNa00sU0FBU3ZGLENBQVQsRUFBWXhELEtBQVosRUFBVjtBQUNBbkQscUJBQUlxRCxjQUFKLENBQW1CekcsT0FBT21aLGFBQTFCO0FBQ0FwTCwwQkFBU3NDLE1BQVQsQ0FBZ0JqTixJQUFJRixDQUFwQixFQUF1QkUsSUFBSUQsQ0FBM0I7QUFDSDs7QUFFRDRLLHNCQUFTc0MsTUFBVCxDQUFnQjZJLEtBQUtoVyxDQUFyQixFQUF3QmdXLEtBQUsvVixDQUE3QjtBQUNIOzs7a0NBR2U3QyxLLEVBQU84WSxNLEVBQVExTyxLLEVBQy9CO0FBQUEsaUJBRHNDdkQsS0FDdEMsdUVBRDhDLFNBQzlDOztBQUNJLGlCQUFNa0wsT0FBTyxJQUFJdlIsS0FBS3dSLElBQVQsQ0FBYzhHLE1BQWQsRUFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EzRyx1QkFBTXRMO0FBQ047QUFMK0IsY0FBdEIsQ0FBYjs7QUFRQWtMLGtCQUFLblAsQ0FBTCxHQUFTd0gsTUFBTXhILENBQWY7QUFDQW1QLGtCQUFLbFAsQ0FBTCxHQUFTdUgsTUFBTXZILENBQWY7O0FBRUE3QyxtQkFBTWdCLFFBQU4sQ0FBZStRLElBQWY7QUFDSDs7O21DQUdnQnRFLFEsRUFBVXJELEssRUFDM0I7QUFBQSxpQkFEa0MyTyxPQUNsQyx1RUFENEMsSUFDNUM7QUFBQSxpQkFEa0RuUyxNQUNsRCx1RUFEMkQsQ0FDM0Q7QUFBQSxpQkFEOERDLEtBQzlELHVFQURzRSxRQUN0RTtBQUFBLGlCQURnRkcsS0FDaEYsdUVBRHdGLEdBQ3hGOztBQUNJLGlCQUFJK1IsWUFBWSxJQUFoQixFQUFzQjtBQUNsQnRMLDBCQUFTdEcsS0FBVDtBQUNIOztBQUVEc0csc0JBQVNvQyxTQUFULENBQW1CLENBQW5CLEVBQXNCaEosS0FBdEI7QUFDQTRHLHNCQUFTckcsU0FBVCxDQUFtQlAsS0FBbkIsRUFBMEJHLEtBQTFCO0FBQ0F5RyxzQkFBU3BHLFVBQVQsQ0FBb0IrQyxNQUFNeEgsQ0FBMUIsRUFBNkJ3SCxNQUFNdkgsQ0FBbkMsRUFBc0MrRCxNQUF0QztBQUNBNkcsc0JBQVNuRyxPQUFUO0FBQ0g7OzswQ0FHdUJtRyxRLEVBQVV1TCxNLEVBQ2xDO0FBQUEsaUJBRDBDRCxPQUMxQyx1RUFEb0QsSUFDcEQ7QUFBQSxpQkFEMERFLFNBQzFELHVFQURzRSxDQUN0RTtBQUFBLGlCQUR5RXBTLEtBQ3pFLHVFQURpRixRQUNqRjtBQUFBLGlCQUQyRkcsS0FDM0YsdUVBRG1HLEdBQ25HOztBQUNJLGlCQUFJK1IsWUFBWSxJQUFoQixFQUFzQjtBQUNsQnRMLDBCQUFTdEcsS0FBVDtBQUNIOztBQUVEc0csc0JBQVNvQyxTQUFULENBQW1Cb0osU0FBbkIsRUFBOEJwUyxLQUE5QixFQUFxQ0csS0FBckM7QUFDQXlHLHNCQUFTeUwsUUFBVCxDQUFrQkYsT0FBT3BXLENBQXpCLEVBQTRCb1csT0FBT25XLENBQW5DLEVBQXNDbVcsT0FBT3RZLEtBQTdDLEVBQW9Ec1ksT0FBT3JZLE1BQTNEO0FBQ0E4TSxzQkFBU25HLE9BQVQ7QUFDSDs7OzBDQUd1Qm1HLFEsRUFBVTBMLEksRUFDbEM7QUFBQSxpQkFEd0NKLE9BQ3hDLHVFQURrRCxJQUNsRDtBQUFBLGlCQUR3REUsU0FDeEQsdUVBRG9FLENBQ3BFO0FBQUEsaUJBRHVFcFMsS0FDdkUsdUVBRCtFLFFBQy9FO0FBQUEsaUJBRHlGRyxLQUN6Rix1RUFEaUcsR0FDakc7O0FBQ0ksaUJBQUkrUixZQUFZLElBQWhCLEVBQXNCO0FBQ2xCdEwsMEJBQVN0RyxLQUFUO0FBQ0g7O0FBRURzRyxzQkFBU29DLFNBQVQsQ0FBbUJvSixTQUFuQixFQUE4QnBTLEtBQTlCLEVBQXFDRyxLQUFyQztBQUNBeUcsc0JBQVNxQyxNQUFULENBQWdCcUosS0FBSzVSLEVBQUwsQ0FBUTNFLENBQXhCLEVBQTJCdVcsS0FBSzVSLEVBQUwsQ0FBUTFFLENBQW5DO0FBQ0E0SyxzQkFBU3NDLE1BQVQsQ0FBZ0JvSixLQUFLQyxFQUFMLENBQVF4VyxDQUF4QixFQUEyQnVXLEtBQUtDLEVBQUwsQ0FBUXZXLENBQW5DO0FBQ0E0SyxzQkFBU3NDLE1BQVQsQ0FBZ0JvSixLQUFLM1IsRUFBTCxDQUFRNUUsQ0FBeEIsRUFBMkJ1VyxLQUFLM1IsRUFBTCxDQUFRM0UsQ0FBbkM7QUFDQTRLLHNCQUFTc0MsTUFBVCxDQUFnQm9KLEtBQUtFLEVBQUwsQ0FBUXpXLENBQXhCLEVBQTJCdVcsS0FBS0UsRUFBTCxDQUFReFcsQ0FBbkM7QUFDQTRLLHNCQUFTc0MsTUFBVCxDQUFnQm9KLEtBQUs1UixFQUFMLENBQVEzRSxDQUF4QixFQUEyQnVXLEtBQUs1UixFQUFMLENBQVExRSxDQUFuQztBQUNIOzs7NENBR3lCNEssUSxFQUFVMEwsSSxFQUNwQztBQUFBLGlCQUQwQ0osT0FDMUMsdUVBRG9ELElBQ3BEO0FBQUEsaUJBRDBEblMsTUFDMUQsdUVBRG1FLENBQ25FO0FBQUEsaUJBRHNFQyxLQUN0RSx1RUFEOEUsUUFDOUU7QUFBQSxpQkFEd0ZHLEtBQ3hGLHVFQURnRyxHQUNoRzs7QUFDSSxpQkFBSStSLFlBQVksSUFBaEIsRUFBc0I7QUFDbEJ0TCwwQkFBU3RHLEtBQVQ7QUFDSDs7QUFFRHNHLHNCQUFTckcsU0FBVCxDQUFtQlAsS0FBbkIsRUFBMEJHLEtBQTFCO0FBQ0F5RyxzQkFBU3BHLFVBQVQsQ0FBb0I4UixLQUFLNVIsRUFBTCxDQUFRM0UsQ0FBNUIsRUFBK0J1VyxLQUFLNVIsRUFBTCxDQUFRMUUsQ0FBdkMsRUFBMEMrRCxNQUExQztBQUNBNkcsc0JBQVNwRyxVQUFULENBQW9COFIsS0FBS0MsRUFBTCxDQUFReFcsQ0FBNUIsRUFBK0J1VyxLQUFLQyxFQUFMLENBQVF2VyxDQUF2QyxFQUEwQytELE1BQTFDO0FBQ0E2RyxzQkFBU3BHLFVBQVQsQ0FBb0I4UixLQUFLM1IsRUFBTCxDQUFRNUUsQ0FBNUIsRUFBK0J1VyxLQUFLM1IsRUFBTCxDQUFRM0UsQ0FBdkMsRUFBMEMrRCxNQUExQztBQUNBNkcsc0JBQVNwRyxVQUFULENBQW9COFIsS0FBS0UsRUFBTCxDQUFRelcsQ0FBNUIsRUFBK0J1VyxLQUFLRSxFQUFMLENBQVF4VyxDQUF2QyxFQUEwQytELE1BQTFDO0FBQ0E2RyxzQkFBU25HLE9BQVQ7QUFDSDs7O29DQUdpQm1HLFEsRUFBVXJFLE0sRUFDNUI7QUFBQSxpQkFEb0MyUCxPQUNwQyx1RUFEOEMsSUFDOUM7QUFBQSxpQkFEb0RFLFNBQ3BELHVFQURnRSxDQUNoRTtBQUFBLGlCQURtRXBTLEtBQ25FLHVFQUQyRSxRQUMzRTtBQUFBLGlCQURxRkcsS0FDckYsdUVBRDZGLEdBQzdGOztBQUNJLGlCQUFJK1IsWUFBWSxJQUFoQixFQUFzQjtBQUNsQnRMLDBCQUFTdEcsS0FBVDtBQUNIOztBQUVEc0csc0JBQVNvQyxTQUFULENBQW1Cb0osU0FBbkIsRUFBOEJwUyxLQUE5QixFQUFxQ0csS0FBckM7O0FBRUEsa0JBQUssSUFBSXlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUwsT0FBT2hHLE1BQTNCLEVBQW1DcUcsR0FBbkMsRUFBd0M7QUFDcEMscUJBQUl5TyxLQUFLOU8sT0FBT0ssQ0FBUCxDQUFUO0FBQ0EscUJBQUkwTyxLQUFLL08sT0FBT0ssSUFBSSxDQUFKLEdBQVFMLE9BQU9oRyxNQUFmLEdBQXdCcUcsSUFBSSxDQUE1QixHQUFnQyxDQUF2QyxDQUFUOztBQUVEZ0UsMEJBQVNxQyxNQUFULENBQWdCb0ksR0FBR3RWLENBQW5CLEVBQXNCc1YsR0FBR3JWLENBQXpCO0FBQ0E0SywwQkFBU3NDLE1BQVQsQ0FBZ0JvSSxHQUFHdlYsQ0FBbkIsRUFBc0J1VixHQUFHdFYsQ0FBekI7QUFDRjtBQUNKOzs7a0NBR2U0SyxRLEVBQVU2TCxFLEVBQUlwQixFLEVBQzlCO0FBQUEsaUJBRGtDYSxPQUNsQyx1RUFENEMsSUFDNUM7QUFBQSxpQkFEa0RFLFNBQ2xELHVFQUQ4RCxDQUM5RDtBQUFBLGlCQURpRXBTLEtBQ2pFLHVFQUR5RSxRQUN6RTtBQUFBLGlCQURtRkcsS0FDbkYsdUVBRDJGLEdBQzNGOztBQUNJLGlCQUFJK1IsWUFBWSxJQUFoQixFQUFzQjtBQUNsQnRMLDBCQUFTdEcsS0FBVDtBQUNIOztBQUVEc0csc0JBQVNvQyxTQUFULENBQW1Cb0osU0FBbkIsRUFBOEJwUyxLQUE5QixFQUFxQ0csS0FBckM7QUFDQXlHLHNCQUFTcUMsTUFBVCxDQUFnQndKLEdBQUcxVyxDQUFuQixFQUFzQjBXLEdBQUd6VyxDQUF6QjtBQUNBNEssc0JBQVNzQyxNQUFULENBQWdCbUksR0FBR3RWLENBQW5CLEVBQXNCc1YsR0FBR3JWLENBQXpCO0FBQ0g7OzttQ0FHZ0I0SyxRLEVBQVU4TCxTLEVBQVdDLE8sRUFDdEM7QUFBQSxpQkFEK0NULE9BQy9DLHVFQUR5RCxJQUN6RDtBQUFBLGlCQUQrREUsU0FDL0QsdUVBRDJFLENBQzNFO0FBQUEsaUJBRDhFcFMsS0FDOUUsdUVBRHNGLFFBQ3RGO0FBQUEsaUJBRGdHRyxLQUNoRyx1RUFEd0csR0FDeEc7QUFBQSxpQkFENkd5UyxLQUM3Ryx1RUFEcUgsQ0FDckg7O0FBQ0ksaUJBQUlWLFlBQVksSUFBaEIsRUFBc0I7QUFDbEJ0TCwwQkFBU3RHLEtBQVQ7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFnQkFzRyxzQkFBU29DLFNBQVQsQ0FBbUJvSixTQUFuQixFQUE4QnBTLEtBQTlCLEVBQXFDRyxLQUFyQztBQUNBeUcsc0JBQVNxQyxNQUFULENBQWdCeUosVUFBVTNXLENBQTFCLEVBQTZCMlcsVUFBVTFXLENBQXZDOztBQUVBLGlCQUFJSSxTQUFTLHFCQUFXc1csVUFBVTNXLENBQVYsR0FBYzRXLFFBQVE1VyxDQUFqQyxFQUFvQzJXLFVBQVUxVyxDQUFWLEdBQWMyVyxRQUFRM1csQ0FBMUQsQ0FBYjtBQUNBLGlCQUFJcVMsT0FBT2pTLE9BQU9nRCxLQUFQLEdBQWVmLE1BQWYsQ0FBc0IsRUFBdEIsRUFBMEJtUCxNQUExQixFQUFYO0FBQ0EsaUJBQUlnQyxRQUFRcFQsT0FBT2dELEtBQVAsR0FBZWYsTUFBZixDQUFzQixDQUFDLEVBQXZCLEVBQTJCbVAsTUFBM0IsRUFBWjtBQUNBYSxrQkFBSy9PLGNBQUwsQ0FBb0JzVCxLQUFwQjtBQUNBcEQsbUJBQU1sUSxjQUFOLENBQXFCc1QsS0FBckI7QUFDQXhXLG9CQUFPb1IsTUFBUCxHQUFnQmxPLGNBQWhCLENBQStCc1QsUUFBUSxDQUF2Qzs7QUFFQWhNLHNCQUFTc0MsTUFBVCxDQUFnQndKLFVBQVUzVyxDQUFWLEdBQWNLLE9BQU9MLENBQXJDLEVBQXdDMlcsVUFBVTFXLENBQVYsR0FBY0ksT0FBT0osQ0FBN0Q7QUFDQTRLLHNCQUFTcUMsTUFBVCxDQUFnQnlKLFVBQVUzVyxDQUExQixFQUE2QjJXLFVBQVUxVyxDQUF2QztBQUNBNEssc0JBQVNzQyxNQUFULENBQWdCd0osVUFBVTNXLENBQVYsR0FBY3NTLEtBQUt0UyxDQUFuQyxFQUFzQzJXLFVBQVUxVyxDQUFWLEdBQWNxUyxLQUFLclMsQ0FBekQ7QUFDQTRLLHNCQUFTcUMsTUFBVCxDQUFnQnlKLFVBQVUzVyxDQUExQixFQUE2QjJXLFVBQVUxVyxDQUF2QztBQUNBNEssc0JBQVNzQyxNQUFULENBQWdCd0osVUFBVTNXLENBQVYsR0FBY3lULE1BQU16VCxDQUFwQyxFQUF1QzJXLFVBQVUxVyxDQUFWLEdBQWN3VCxNQUFNeFQsQ0FBM0Q7QUFDSDs7O3VDQUdvQjRLLFEsRUFBVWlNLEUsRUFBSUMsTSxFQUNuQztBQUFBLGlCQUQyQ1osT0FDM0MsdUVBRHFELElBQ3JEO0FBQUEsaUJBRDJERSxTQUMzRCx1RUFEdUUsQ0FDdkU7QUFBQSxpQkFEMEVwUyxLQUMxRSx1RUFEa0YsUUFDbEY7QUFBQSxpQkFENEZHLEtBQzVGLHVFQURvRyxHQUNwRztBQUFBLGlCQUR5R3lTLEtBQ3pHLHVFQURpSCxDQUNqSDs7QUFDSSxpQkFBSVYsWUFBWSxJQUFoQixFQUFzQjtBQUNsQnRMLDBCQUFTdEcsS0FBVDtBQUNIOztBQUVEc0csc0JBQVNvQyxTQUFULENBQW1Cb0osU0FBbkIsRUFBOEJwUyxLQUE5QixFQUFxQ0csS0FBckM7QUFDQXlHLHNCQUFTcUMsTUFBVCxDQUFnQjRKLEdBQUc5VyxDQUFuQixFQUFzQjhXLEdBQUc3VyxDQUF6Qjs7QUFFQSxpQkFBSTRELEtBQUtpVCxHQUFHalQsRUFBSCxDQUFNa1QsTUFBTixDQUFUO0FBQ0EsaUJBQUl6RSxPQUFPek8sR0FBR1IsS0FBSCxHQUFXZixNQUFYLENBQWtCLEVBQWxCLEVBQXNCbVAsTUFBdEIsRUFBWDtBQUNBLGlCQUFJZ0MsUUFBUTVQLEdBQUdSLEtBQUgsR0FBV2YsTUFBWCxDQUFrQixDQUFDLEVBQW5CLEVBQXVCbVAsTUFBdkIsRUFBWjtBQUNBYSxrQkFBSy9PLGNBQUwsQ0FBb0JzVCxLQUFwQjtBQUNBcEQsbUJBQU1sUSxjQUFOLENBQXFCc1QsS0FBckI7QUFDQWhULGdCQUFHNE4sTUFBSCxHQUFZbE8sY0FBWixDQUEyQnNULFFBQVEsQ0FBbkM7O0FBRUFoTSxzQkFBU3NDLE1BQVQsQ0FBZ0IySixHQUFHOVcsQ0FBSCxHQUFPNkQsR0FBRzdELENBQTFCLEVBQTZCOFcsR0FBRzdXLENBQUgsR0FBTzRELEdBQUc1RCxDQUF2QztBQUNBNEssc0JBQVNxQyxNQUFULENBQWdCNEosR0FBRzlXLENBQW5CLEVBQXNCOFcsR0FBRzdXLENBQXpCO0FBQ0E0SyxzQkFBU3NDLE1BQVQsQ0FBZ0IySixHQUFHOVcsQ0FBSCxHQUFPc1MsS0FBS3RTLENBQTVCLEVBQStCOFcsR0FBRzdXLENBQUgsR0FBT3FTLEtBQUtyUyxDQUEzQztBQUNBNEssc0JBQVNxQyxNQUFULENBQWdCNEosR0FBRzlXLENBQW5CLEVBQXNCOFcsR0FBRzdXLENBQXpCO0FBQ0E0SyxzQkFBU3NDLE1BQVQsQ0FBZ0IySixHQUFHOVcsQ0FBSCxHQUFPeVQsTUFBTXpULENBQTdCLEVBQWdDOFcsR0FBRzdXLENBQUgsR0FBT3dULE1BQU14VCxDQUE3QztBQUNIOzs7Ozs7bUJBbE5nQndWLE87Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUEsS0FBTXVCLFNBQVMscUJBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBZjtBQUFBLEtBQ012Ryx5QkFBeUIsRUFEL0I7QUFBQSxLQUVNd0csWUFBWTlYLEtBQUt5RCxJQUFMLENBQVUsa0JBQVF5UCxDQUFsQixDQUZsQjs7S0FJcUI2RSxHOzs7Ozs7OztBQUVqQjs7Ozs7OztzQ0FPb0I5SyxRLEVBQ3BCO0FBQ0ksaUJBQU1vSSxNQUFNLHNCQUFaO0FBQUEsaUJBQ01DLFFBQVFySSxTQUFTNUwsTUFEdkI7O0FBR0Esa0JBQUssSUFBSXFHLElBQUksQ0FBYixFQUFnQkEsSUFBSTROLEtBQXBCLEVBQTJCNU4sR0FBM0IsRUFBZ0M7QUFDNUIyTixxQkFBSXhVLENBQUosSUFBU29NLFNBQVN2RixDQUFULEVBQVk3RyxDQUFyQjtBQUNBd1UscUJBQUl2VSxDQUFKLElBQVNtTSxTQUFTdkYsQ0FBVCxFQUFZNUcsQ0FBckI7QUFDSDs7QUFFRHVVLGlCQUFJeFUsQ0FBSixJQUFTeVUsS0FBVDtBQUNBRCxpQkFBSXZVLENBQUosSUFBU3dVLEtBQVQ7O0FBRUEsb0JBQU9ELEdBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7OzhDQU00QnBJLFEsRUFBVXRKLFMsRUFDdEM7QUFDSSxpQkFBSXlFLFFBQVEsQ0FBWjtBQUNBLGlCQUFJNFAsYUFBYSxpQkFBT2xKLFVBQVAsQ0FBa0JuTCxTQUFsQixFQUE2QnNKLFNBQVMsQ0FBVCxDQUE3QixDQUFqQjs7QUFFQSxrQkFBSyxJQUFJdkYsSUFBSSxDQUFSLEVBQVc0TixRQUFRckksU0FBUzVMLE1BQWpDLEVBQXlDcUcsSUFBSTROLEtBQTdDLEVBQW9ENU4sR0FBcEQsRUFBeUQ7QUFDckQscUJBQU11USxVQUFVLGlCQUFPbkosVUFBUCxDQUFrQm5MLFNBQWxCLEVBQTZCc0osU0FBU3ZGLENBQVQsQ0FBN0IsQ0FBaEI7O0FBRUEscUJBQUl1USxVQUFVRCxVQUFkLEVBQTBCO0FBQ3RCQSxrQ0FBYUMsT0FBYjtBQUNBN1AsNkJBQVFWLENBQVI7QUFDSDtBQUNKOztBQUVELG9CQUFPVSxLQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7aUNBT2V1RSxTLEVBQVdDLFMsRUFBV2pKLFMsRUFDckM7QUFDSTtBQUNBLGlCQUFNK0QsSUFBSSxLQUFLd1Esb0JBQUwsQ0FBMEJ2TCxTQUExQixFQUFxQ2hKLFNBQXJDLENBQVY7O0FBRUE7QUFDQSxpQkFBTXdGLElBQUksS0FBSytPLG9CQUFMLENBQTBCdEwsU0FBMUIsRUFBcUMsaUJBQU82RixNQUFQLENBQWM5TyxTQUFkLENBQXJDLENBQVY7O0FBRUFnRixxQkFBUUMsR0FBUixDQUFZLE9BQU91UCxJQUFJeFUsU0FBSixFQUFlLElBQWYsQ0FBbkIsRUFBeUMsT0FBT3dVLElBQUl4TCxVQUFVakYsQ0FBVixDQUFKLENBQWhEO0FBQ0FpQixxQkFBUUMsR0FBUixDQUFZLE9BQU91UCxJQUFJLGlCQUFPMUYsTUFBUCxDQUFjOU8sU0FBZCxDQUFKLEVBQThCLElBQTlCLENBQW5CLEVBQXdELE9BQU93VSxJQUFJdkwsVUFBVXpELENBQVYsQ0FBSixDQUEvRDtBQUNBUixxQkFBUUMsR0FBUixDQUFZLGFBQWF1UCxJQUFJLGlCQUFPbFgsUUFBUCxDQUFnQjBMLFVBQVVqRixDQUFWLENBQWhCLEVBQThCa0YsVUFBVXpELENBQVYsQ0FBOUIsQ0FBSixDQUFiLEdBQWdFLEdBQTVFO0FBQ0E7QUFDQSxvQkFBTyxpQkFBT2xJLFFBQVAsQ0FBZ0IwTCxVQUFVakYsQ0FBVixDQUFoQixFQUE4QmtGLFVBQVV6RCxDQUFWLENBQTlCLENBQVA7QUFDSDs7O2tDQUdld0QsUyxFQUFXQyxTLEVBQVdqSixTLEVBQ3RDO0FBQ0k7QUFDQSxpQkFBTStELElBQUksS0FBS3dRLG9CQUFMLENBQTBCdkwsU0FBMUIsRUFBcUNoSixTQUFyQyxDQUFWOztBQUVBO0FBQ0EsaUJBQU13RixJQUFJLEtBQUsrTyxvQkFBTCxDQUEwQnRMLFNBQTFCLEVBQXFDLGlCQUFPNkYsTUFBUCxDQUFjOU8sU0FBZCxDQUFyQyxDQUFWOztBQUVBZ0YscUJBQVFDLEdBQVIsQ0FBWSxPQUFPdVAsSUFBSXhVLFNBQUosRUFBZSxJQUFmLENBQW5CLEVBQXlDLE9BQU93VSxJQUFJeEwsVUFBVWpGLENBQVYsQ0FBSixDQUFoRDtBQUNBaUIscUJBQVFDLEdBQVIsQ0FBWSxPQUFPdVAsSUFBSSxpQkFBTzFGLE1BQVAsQ0FBYzlPLFNBQWQsQ0FBSixFQUE4QixJQUE5QixDQUFuQixFQUF3RCxPQUFPd1UsSUFBSXZMLFVBQVV6RCxDQUFWLENBQUosQ0FBL0Q7QUFDQVIscUJBQVFDLEdBQVIsQ0FBWSxhQUFhdVAsSUFBSSxpQkFBT2xYLFFBQVAsQ0FBZ0IwTCxVQUFVakYsQ0FBVixDQUFoQixFQUE4QmtGLFVBQVV6RCxDQUFWLENBQTlCLENBQUosQ0FBYixHQUFnRSxHQUE1RTtBQUNBLG9CQUFPLGdDQUFzQndELFVBQVVqRixDQUFWLENBQXRCLEVBQW9Da0YsVUFBVXpELENBQVYsQ0FBcEMsQ0FBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7O3dDQU9zQndELFMsRUFBV0MsUyxFQUNqQztBQUFBLGlCQUQ0Q1ksT0FDNUMsdUVBRHNELElBQ3REOztBQUNJOztBQUVBLGlCQUFJNEssWUFBWSxDQUFoQjtBQUFBLGlCQUFtQmhRLFFBQVEsQ0FBM0IsQ0FISixDQUdvQztBQUNoQyxpQkFBSXJFLFVBQUo7QUFBQSxpQkFBT0MsVUFBUDtBQUFBLGlCQUFVSyxVQUFWO0FBQUEsaUJBQWFnVSxVQUFiO0FBQUEsaUJBQWdCN0YsV0FBaEI7QUFBQSxpQkFBb0JFLFdBQXBCO0FBQUEsaUJBQXdCbk8sV0FBeEI7QUFBQSxpQkFBNEIrVCxlQUE1QjtBQUFBLGlCQUFvQ0MsZUFBcEM7QUFBQSxpQkFDSW5KLFVBQVUsSUFBSUMsS0FBSixDQUFVLENBQVYsQ0FEZDtBQUFBLGlCQUM0QkMsYUFBYSxJQUFJRCxLQUFKLENBQVUsQ0FBVixDQUR6Qzs7QUFHQTtBQUNBLGlCQUFNbUosWUFBWSxLQUFLQyxZQUFMLENBQWtCOUwsU0FBbEIsQ0FBbEIsQ0FSSixDQVFvRDtBQUNoRCxpQkFBTStMLFlBQVksS0FBS0QsWUFBTCxDQUFrQjdMLFNBQWxCLENBQWxCLENBVEosQ0FTb0Q7O0FBRWhEO0FBQ0E7QUFDQXlMLGlCQUFJLGlCQUFPcFgsUUFBUCxDQUFnQnVYLFNBQWhCLEVBQTJCRSxTQUEzQixDQUFKOztBQUVBO0FBQ0EsaUJBQUtMLEVBQUV4WCxDQUFGLElBQU8sQ0FBUixJQUFld1gsRUFBRXZYLENBQUYsSUFBTyxDQUExQixFQUE4QjtBQUMxQnVYLG1CQUFFeFgsQ0FBRixHQUFNLEdBQU47QUFDSDs7QUFFRDtBQUNBa0QsaUJBQUlxTCxRQUFRLENBQVIsSUFBYSxLQUFLdUosT0FBTCxDQUFhaE0sU0FBYixFQUF3QkMsU0FBeEIsRUFBbUN5TCxDQUFuQyxDQUFqQjtBQUNBL0ksd0JBQVcsQ0FBWCxJQUFnQitJLENBQWhCO0FBQ0ExUCxxQkFBUUMsR0FBUixDQUFZdVAsSUFBSXBVLENBQUosQ0FBWixFQUFvQm9VLElBQUlFLENBQUosRUFBTyxJQUFQLENBQXBCLEVBQWtDLGlCQUFPdkosVUFBUCxDQUFrQi9LLENBQWxCLEVBQXFCc1UsQ0FBckIsRUFBd0JyVyxPQUF4QixDQUFnQyxDQUFoQyxDQUFsQzs7QUFFQTtBQUNBLGlCQUFJK0IsRUFBRXZCLEdBQUYsQ0FBTTZWLENBQU4sS0FBWSxDQUFoQixFQUFtQjtBQUNmO0FBQ0E7QUFDQTtBQUNBMVAseUJBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLElBQTdCLEVBQW1DLEdBQW5DOztBQUVBLHFCQUFJNEUsT0FBSixFQUFhO0FBQ1RBLDZCQUFRNkUsVUFBUixDQUFtQmpELE9BQW5CLEVBQTRCRSxVQUE1QjtBQUNIOztBQUVELHdCQUFPLEtBQVAsQ0FWZSxDQVVEO0FBQ2pCOztBQUVEK0ksaUJBQUksaUJBQU81RixNQUFQLENBQWMxTyxDQUFkLENBQUosQ0F2Q0osQ0F1QzBCOztBQUV0QixvQkFBTyxJQUFQLEVBQWE7QUFDVHFVOztBQUVBelAseUJBQVFDLEdBQVIsQ0FBWSxFQUFaO0FBQ0FELHlCQUFRQyxHQUFSLENBQVl3UCxTQUFaOztBQUVBclUscUJBQUlxTCxRQUFRLEVBQUVoSCxLQUFWLElBQW1CLEtBQUt1USxPQUFMLENBQWFoTSxTQUFiLEVBQXdCQyxTQUF4QixFQUFtQ3lMLENBQW5DLENBQXZCO0FBQ0EvSSw0QkFBV2xILEtBQVgsSUFBb0JpUSxDQUFwQjs7QUFFQSxxQkFBSSxpQkFBT3ZKLFVBQVAsQ0FBa0IvSyxDQUFsQixFQUFxQnNVLENBQXJCLEtBQTJCLENBQS9CLEVBQWtDO0FBQzlCMVAsNkJBQVFDLEdBQVIsQ0FBWXVQLElBQUlwVSxDQUFKLENBQVosRUFBb0JvVSxJQUFJRSxDQUFKLEVBQU8sSUFBUCxDQUFwQixFQUFrQyxpQkFBT3ZKLFVBQVAsQ0FBa0IvSyxDQUFsQixFQUFxQnNVLENBQXJCLEVBQXdCclcsT0FBeEIsQ0FBZ0MsQ0FBaEMsQ0FBbEM7QUFDQTJHLDZCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QixJQUE3QixFQUFtQyxHQUFuQzs7QUFFQSx5QkFBSTRFLE9BQUosRUFBYTtBQUNUQSxpQ0FBUTZFLFVBQVIsQ0FBbUJqRCxPQUFuQixFQUE0QkUsVUFBNUI7QUFDSDs7QUFFRCw0QkFBTyxLQUFQLENBUjhCLENBUWhCO0FBQ2pCOztBQUVEO0FBQ0FrRCxzQkFBSyxpQkFBT0MsTUFBUCxDQUFjMU8sQ0FBZCxDQUFMLENBckJTLENBcUJjOztBQUV2QjtBQUNBLHFCQUFJcUUsUUFBUSxDQUFaLEVBQWU7O0FBRVhwRSx5QkFBSW9MLFFBQVEsQ0FBUixDQUFKO0FBQ0FzRCwwQkFBSyxpQkFBT3pSLFFBQVAsQ0FBZ0IrQyxDQUFoQixFQUFtQkQsQ0FBbkIsQ0FBTCxDQUhXLENBR2lCO0FBQzVCc1UseUJBQUksaUJBQU96RixhQUFQLENBQXFCRixFQUFyQixFQUF5QkYsRUFBekIsRUFBNkJFLEVBQTdCLENBQUosQ0FKVyxDQUkyQjs7QUFFdEMseUJBQUksaUJBQU81TyxRQUFQLENBQWdCdVUsQ0FBaEIsTUFBdUIsQ0FBM0IsRUFBOEI7QUFDMUJBLDZCQUFJLGlCQUFPTyxhQUFQLENBQXFCbEcsRUFBckIsQ0FBSjtBQUNIO0FBQ0QsOEJBVFcsQ0FTRDtBQUNiOztBQUVEMU8scUJBQUlvTCxRQUFRLENBQVIsQ0FBSjtBQUNBL0sscUJBQUkrSyxRQUFRLENBQVIsQ0FBSjtBQUNBc0Qsc0JBQUssaUJBQU96UixRQUFQLENBQWdCK0MsQ0FBaEIsRUFBbUJELENBQW5CLENBQUwsQ0F0Q1MsQ0FzQ21CO0FBQzVCUSxzQkFBSyxpQkFBT3RELFFBQVAsQ0FBZ0JvRCxDQUFoQixFQUFtQk4sQ0FBbkIsQ0FBTCxDQXZDUyxDQXVDbUI7O0FBRTVCO0FBQ0F3VSwwQkFBUyxpQkFBTzNGLGFBQVAsQ0FBcUJGLEVBQXJCLEVBQXlCbk8sRUFBekIsRUFBNkJBLEVBQTdCLENBQVQ7O0FBRUFvRSx5QkFBUUMsR0FBUixDQUFZLEdBQVosRUFBaUI3RSxDQUFqQixFQUFvQixHQUFwQixFQUF5QkMsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNLLENBQWpDO0FBQ0FzRSx5QkFBUUMsR0FBUixDQUFZLElBQVosRUFBa0I0SixFQUFsQixFQUFzQixJQUF0QixFQUE0QkUsRUFBNUIsRUFBZ0MsSUFBaEMsRUFBc0NuTyxFQUF0QztBQUNBb0UseUJBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCMlAsTUFBdEIsRUFBOEJBLE9BQU9yVSxLQUFQLEdBQWV5SyxJQUFmLEVBQTlCO0FBQ0FoRyx5QkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDLGlCQUFPa0csVUFBUCxDQUFrQnlKLE1BQWxCLEVBQTBCL0YsRUFBMUIsQ0FBdEM7O0FBRUE7QUFDQTtBQUNBLHFCQUFJLGlCQUFPMUQsVUFBUCxDQUFrQnlKLE1BQWxCLEVBQTBCL0YsRUFBMUIsS0FBaUMsQ0FBckMsRUFBd0M7QUFDcEM2Rix5QkFBSUUsTUFBSixDQURvQyxDQUN4QjtBQUNaNVAsNkJBQVFDLEdBQVIsQ0FBWSw4Q0FBWixFQUE0RHlQLENBQTVEO0FBQ0gsa0JBSEQsTUFJSztBQUNEO0FBQ0FDLDhCQUFTLGlCQUFPMUYsYUFBUCxDQUFxQnJPLEVBQXJCLEVBQXlCbU8sRUFBekIsRUFBNkJBLEVBQTdCLENBQVQ7QUFDQS9KLDZCQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQjBQLE1BQXRCLEVBQThCQSxPQUFPcFUsS0FBUCxHQUFleUssSUFBZixFQUE5QjtBQUNBaEcsNkJBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxpQkFBT2tHLFVBQVAsQ0FBa0J3SixNQUFsQixFQUEwQjlGLEVBQTFCLENBQXRDOztBQUVBO0FBQ0E7QUFDQSx5QkFBSSxpQkFBTzFELFVBQVAsQ0FBa0J3SixNQUFsQixFQUEwQjlGLEVBQTFCLElBQWdDLENBQXBDLEVBQXVDOztBQUVuQyw2QkFBSWhGLE9BQUosRUFBYTtBQUNUQSxxQ0FBUTZFLFVBQVIsQ0FBbUJqRCxPQUFuQixFQUE0QkUsVUFBNUI7QUFDSDs7QUFFRCxnQ0FBTyxJQUFQLENBTm1DLENBTXRCO0FBQ2hCOztBQUVERiw2QkFBUSxDQUFSLElBQWFBLFFBQVEsQ0FBUixDQUFiLENBakJDLENBaUJ3QjtBQUN6QmlKLHlCQUFJQyxNQUFKLENBbEJDLENBa0JXO0FBQ2Y7O0FBRURsSix5QkFBUSxDQUFSLElBQWFBLFFBQVEsQ0FBUixDQUFiLENBNUVTLENBNEVnQjtBQUN6QixtQkFBRWhILEtBQUY7QUFDSDs7QUFFRCxpQkFBSW9GLE9BQUosRUFBYTtBQUNUQSx5QkFBUTZFLFVBQVIsQ0FBbUJqRCxPQUFuQixFQUE0QkUsVUFBNUI7QUFDSDs7QUFFRCxvQkFBTyxLQUFQO0FBQ0g7OztrQ0FFZTNDLFMsRUFBV0MsUyxFQUMzQjtBQUFBLGlCQURzQ2lNLFVBQ3RDLHVFQURtRCxJQUNuRDs7QUFDSSxpQkFBSTlVLFVBQUo7QUFBQSxpQkFBT0MsVUFBUDtBQUFBLGlCQUFVSyxVQUFWO0FBQUEsaUJBQWFnVSxVQUFiO0FBQUEsaUJBQWdCbEMsV0FBaEI7QUFBQSxpQkFBb0JDLFdBQXBCO0FBQUEsaUJBQXdCMEMsY0FBeEI7QUFBQSxpQkFBK0JDLGNBQS9CO0FBQUEsaUJBQXNDakUsbUJBQXRDOztBQUVBO0FBQ0EsaUJBQU1sRCxLQUFLLEtBQUs2RyxZQUFMLENBQWtCOUwsU0FBbEIsQ0FBWCxDQUpKLENBSTZDO0FBQ3pDLGlCQUFNbUYsS0FBSyxLQUFLMkcsWUFBTCxDQUFrQjdMLFNBQWxCLENBQVgsQ0FMSixDQUs2Qzs7QUFFekM7QUFDQXlMLGlCQUFJLGlCQUFPcFgsUUFBUCxDQUFnQjJRLEVBQWhCLEVBQW9CRSxFQUFwQixDQUFKOztBQUVBLGlCQUFJdUcsRUFBRW5HLE1BQUYsRUFBSixFQUFnQjtBQUNaLHdCQUFPLEtBQVA7QUFDSDs7QUFFRG5PLGlCQUFJLEtBQUtpVixRQUFMLENBQWNyTSxTQUFkLEVBQXlCQyxTQUF6QixFQUFvQ3lMLENBQXBDLENBQUo7QUFDQXJVLGlCQUFJLEtBQUtnVixRQUFMLENBQWNyTSxTQUFkLEVBQXlCQyxTQUF6QixFQUFvQ3lMLEVBQUUvRixNQUFGLEVBQXBDLENBQUo7O0FBRUErRixpQkFBSU4sSUFBSWtCLCtCQUFKLENBQW9DcEIsTUFBcEMsRUFBNEM5VCxFQUFFc0UsS0FBOUMsRUFBcURyRSxFQUFFcUUsS0FBdkQsQ0FBSjs7QUFFQSxrQkFBSyxJQUFJWCxJQUFJLENBQWIsRUFBZ0JBLElBQUk0SixzQkFBcEIsRUFBNEM1SixHQUE1QyxFQUFpRDtBQUM3QzJRLHFCQUFJQSxFQUFFL0YsTUFBRixFQUFKOztBQUVBLHFCQUFHK0YsRUFBRXZVLFFBQUYsTUFBZ0JnVSxTQUFuQixFQUE4QjtBQUMxQjtBQUNBLDRCQUFPLEtBQVA7QUFDSDs7QUFFRHpULHFCQUFJLEtBQUsyVSxRQUFMLENBQWNyTSxTQUFkLEVBQXlCQyxTQUF6QixFQUFvQ3lMLENBQXBDLENBQUo7O0FBRUEscUJBQUlOLElBQUltQixjQUFKLENBQW1CblYsRUFBRXNFLEtBQXJCLEVBQTRCckUsRUFBRXFFLEtBQTlCLEVBQXFDaEUsRUFBRWdFLEtBQXZDLENBQUosRUFBbUQ7QUFDL0M7QUFDQSw0QkFBTyxLQUFQO0FBQ0g7O0FBRUQ7QUFDQXlNLDhCQUFhelEsRUFBRWdFLEtBQUYsQ0FBUTdGLEdBQVIsQ0FBWTZWLENBQVosQ0FBYjs7QUFFQSxxQkFBS3ZELGFBQWEvUSxFQUFFc0UsS0FBRixDQUFRN0YsR0FBUixDQUFZNlYsQ0FBWixDQUFkLEdBQWdDUCxTQUFwQyxFQUErQztBQUMzQztBQUNBO0FBQ0E7QUFDQU8sdUJBQUU5VyxTQUFGOztBQUVBc1gsZ0NBQVdqTCxNQUFYLEdBQW9CeUssQ0FBcEI7QUFDQVEsZ0NBQVcvRSxRQUFYLEdBQXNCLENBQUN6UCxFQUFFZ0UsS0FBRixDQUFRN0YsR0FBUixDQUFZNlYsQ0FBWixDQUF2QjtBQUNBTix5QkFBSW9CLGlCQUFKLENBQXNCcFYsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCNlUsVUFBNUI7O0FBRUFsUSw2QkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSw0QkFBTyxJQUFQO0FBQ0g7O0FBRUR1TixzQkFBSzRCLElBQUlrQiwrQkFBSixDQUFvQ3BCLE1BQXBDLEVBQTRDOVQsRUFBRXNFLEtBQTlDLEVBQXFEaEUsRUFBRWdFLEtBQXZELENBQUw7QUFDQStOLHNCQUFLMkIsSUFBSWtCLCtCQUFKLENBQW9DcEIsTUFBcEMsRUFBNEN4VCxFQUFFZ0UsS0FBOUMsRUFBcURyRSxFQUFFcUUsS0FBdkQsQ0FBTDtBQUNBeVEseUJBQVEzQyxHQUFHclMsUUFBSCxFQUFSO0FBQ0FpVix5QkFBUTNDLEdBQUd0UyxRQUFILEVBQVI7O0FBRUEscUJBQUlnVixTQUFTaEIsU0FBYixFQUF3QjtBQUNwQk8sdUJBQUU5VyxTQUFGO0FBQ0FzWCxnQ0FBVy9FLFFBQVgsR0FBc0JxQyxHQUFHNVUsU0FBSCxFQUF0QjtBQUNBc1gsZ0NBQVdqTCxNQUFYLEdBQW9CeUssQ0FBcEI7QUFDQU4seUJBQUlvQixpQkFBSixDQUFzQnBWLENBQXRCLEVBQXlCTSxDQUF6QixFQUE0QndVLFVBQTVCO0FBQ0FsUSw2QkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSw0QkFBTyxJQUFQO0FBQ0gsa0JBUEQsTUFPTyxJQUFJbVEsU0FBU2pCLFNBQWIsRUFBd0I7QUFDM0JPLHVCQUFFOVcsU0FBRjtBQUNBc1gsZ0NBQVcvRSxRQUFYLEdBQXNCc0MsR0FBRzdVLFNBQUgsRUFBdEI7QUFDQXNYLGdDQUFXakwsTUFBWCxHQUFvQnlLLENBQXBCO0FBQ0FOLHlCQUFJb0IsaUJBQUosQ0FBc0I5VSxDQUF0QixFQUF5QkwsQ0FBekIsRUFBNEI2VSxVQUE1QjtBQUNBbFEsNkJBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsNEJBQU8sSUFBUDtBQUNIOztBQUVELHFCQUFJa1EsUUFBUUMsS0FBWixFQUFtQjtBQUNmL1UseUJBQUlLLENBQUo7QUFDQWdVLHlCQUFJbEMsRUFBSjtBQUNILGtCQUhELE1BR087QUFDSHBTLHlCQUFJTSxDQUFKO0FBQ0FnVSx5QkFBSWpDLEVBQUo7QUFDSDtBQUNKOztBQUVEaUMsZUFBRTlXLFNBQUY7QUFDQXNYLHdCQUFXakwsTUFBWCxHQUFvQnlLLENBQXBCO0FBQ0FRLHdCQUFXL0UsUUFBWCxHQUFzQixDQUFDelAsRUFBRWdFLEtBQUYsQ0FBUTdGLEdBQVIsQ0FBWTZWLENBQVosQ0FBdkI7QUFDQU4saUJBQUlvQixpQkFBSixDQUFzQnBWLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QjZVLFVBQTVCO0FBQ0FsUSxxQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQW9Cc0I3RSxDLEVBQUdDLEMsRUFBR0ssQyxFQUFHO0FBQzNCLGlCQUFNK1UsS0FBS3JWLEVBQUVzRixLQUFGLENBQVFyRixDQUFSLENBQVg7QUFBQSxpQkFDTXFWLEtBQUtyVixFQUFFcUYsS0FBRixDQUFRaEYsQ0FBUixDQURYO0FBQUEsaUJBRU1pVixLQUFLalYsRUFBRWdGLEtBQUYsQ0FBUXRGLENBQVIsQ0FGWDtBQUdBLG9CQUFRcVYsS0FBS0MsRUFBTCxHQUFVLENBQVYsSUFBZUQsS0FBS0UsRUFBTCxHQUFVLENBQWpDO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OzsyQ0FZeUJ2VixDLEVBQUdDLEMsRUFBRzZVLFUsRUFDL0I7QUFDSSxpQkFBTTFDLEtBQUssc0JBQVg7QUFBQSxpQkFDTUMsS0FBSyxzQkFEWDtBQUFBLGlCQUVNMVAsSUFBSSxpQkFBT3pGLFFBQVAsQ0FBZ0I4QyxFQUFFc0UsS0FBbEIsRUFBeUJyRSxFQUFFcUUsS0FBM0IsQ0FGVjs7QUFJQSxpQkFBSTNCLEVBQUV3TCxNQUFGLEVBQUosRUFBZ0I7QUFDWmlFLG9CQUFHaEUsR0FBSCxDQUFPcE8sRUFBRXdWLGFBQVQ7QUFDQW5ELG9CQUFHakUsR0FBSCxDQUFPcE8sRUFBRXlWLGFBQVQ7QUFDSCxjQUhELE1BR087QUFDSCxxQkFBTUMsS0FBSy9TLEVBQUVsRSxHQUFGLENBQU1rRSxDQUFOLENBQVg7QUFBQSxxQkFDTWdULEtBQUssQ0FBQ2hULEVBQUVsRSxHQUFGLENBQU11QixFQUFFc0UsS0FBUixDQUFELEdBQWtCb1IsRUFEN0I7QUFBQSxxQkFFTUUsS0FBSyxJQUFJRCxFQUZmOztBQUlBO0FBQ0EscUJBQUlDLEtBQUssQ0FBVCxFQUFZO0FBQ1I7QUFDQTtBQUNBO0FBQ0F4RCx3QkFBR2hFLEdBQUgsQ0FBT25PLEVBQUV1VixhQUFUO0FBQ0FuRCx3QkFBR2pFLEdBQUgsQ0FBT25PLEVBQUV3VixhQUFUO0FBQ0gsa0JBTkQsTUFNTyxJQUFJRSxLQUFLLENBQVQsRUFBWTtBQUNmO0FBQ0E7QUFDQTtBQUNBdkQsd0JBQUdoRSxHQUFILENBQU9wTyxFQUFFd1YsYUFBVDtBQUNBbkQsd0JBQUdqRSxHQUFILENBQU9wTyxFQUFFeVYsYUFBVDtBQUNILGtCQU5NLE1BTUE7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBckQsd0JBQUd0VixDQUFILEdBQU9rRCxFQUFFd1YsYUFBRixDQUFnQjFZLENBQWhCLEdBQW9COFksRUFBcEIsR0FBeUIzVixFQUFFdVYsYUFBRixDQUFnQjFZLENBQWhCLEdBQW9CNlksRUFBcEQ7QUFDQXZELHdCQUFHclYsQ0FBSCxHQUFPaUQsRUFBRXdWLGFBQUYsQ0FBZ0J6WSxDQUFoQixHQUFvQjZZLEVBQXBCLEdBQXlCM1YsRUFBRXVWLGFBQUYsQ0FBZ0J6WSxDQUFoQixHQUFvQjRZLEVBQXBEO0FBQ0F0RCx3QkFBR3ZWLENBQUgsR0FBT2tELEVBQUV5VixhQUFGLENBQWdCM1ksQ0FBaEIsR0FBb0I4WSxFQUFwQixHQUF5QjNWLEVBQUV3VixhQUFGLENBQWdCM1ksQ0FBaEIsR0FBb0I2WSxFQUFwRDtBQUNBdEQsd0JBQUd0VixDQUFILEdBQU9pRCxFQUFFeVYsYUFBRixDQUFnQjFZLENBQWhCLEdBQW9CNlksRUFBcEIsR0FBeUIzVixFQUFFd1YsYUFBRixDQUFnQjFZLENBQWhCLEdBQW9CNFksRUFBcEQ7QUFDSDtBQUNKO0FBQ0Q7QUFDQWIsd0JBQVd0RixNQUFYLEdBQW9CNEMsRUFBcEI7QUFDQTBDLHdCQUFXcEYsTUFBWCxHQUFvQjJDLEVBQXBCO0FBQ0g7Ozs4Q0FFMkJyUyxDLEVBQUdDLEMsRUFDL0I7QUFDSSxpQkFBTTBPLEtBQUszTyxFQUFFVyxFQUFGLENBQUtWLENBQUwsQ0FBWDtBQUFBLGlCQUNNd08sS0FBS3pPLEVBQUVXLEVBQUYsQ0FBSyxzQkFBTCxDQURYO0FBQUEsaUJBRU1rVixlQUFlcEgsR0FBR2hRLEdBQUgsQ0FBT2tRLEVBQVAsQ0FGckI7QUFBQSxpQkFHTW1ILGdCQUFnQm5ILEdBQUdsUSxHQUFILENBQU9rUSxFQUFQLENBSHRCO0FBQUEsaUJBSU1vSCxJQUFJRixlQUFlQyxhQUp6QjtBQUFBLGlCQUtNRSxjQUFjLGlCQUFPM1YsY0FBUCxDQUFzQnNPLEVBQXRCLEVBQTBCb0gsQ0FBMUIsRUFBNkJuVixHQUE3QixDQUFpQ1osQ0FBakMsQ0FMcEI7QUFBQSxpQkFNTXNVLElBQUkwQixZQUFZQyxTQUFaLEVBTlY7O0FBUUEsb0JBQU8sRUFBQzNSLE9BQU8wUixXQUFSLEVBQXFCbE0sT0FBT3dLLENBQTVCLEVBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQWV1Q2hRLEssRUFBTzRSLFUsRUFBWUMsVSxFQUMxRDtBQUNJO0FBQ0EsaUJBQU1DLFFBQVEsaUJBQU9sWixRQUFQLENBQWdCb0gsS0FBaEIsRUFBdUI0UixVQUF2QjtBQUNWO0FBREo7QUFBQSxpQkFFTUcsT0FBTyxpQkFBT25aLFFBQVAsQ0FBZ0JpWixVQUFoQixFQUE0QkQsVUFBNUI7QUFDVDtBQUhKO0FBQUEsaUJBSU1JLE1BQU1ELEtBQUs1WCxHQUFMLENBQVM0WCxJQUFULENBSlo7QUFBQSxpQkFLTUUsUUFBUUgsTUFBTTNYLEdBQU4sQ0FBVTRYLElBQVYsQ0FMZDs7QUFPQSxpQkFBSUMsT0FBT3ZDLFNBQVgsRUFBc0I7QUFDbEIsd0JBQU9tQyxXQUFXL1YsS0FBWCxFQUFQO0FBQ0g7O0FBRUQsaUJBQUk0VixJQUFJUSxRQUFRRCxHQUFoQjtBQUNBUCxpQkFBSVMsTUFBTVQsQ0FBTixFQUFTLEdBQVQsRUFBYyxHQUFkLENBQUo7QUFDQSxvQkFBT00sS0FBS2hXLGNBQUwsQ0FBb0IwVixDQUFwQixFQUF1Qm5WLEdBQXZCLENBQTJCc1YsVUFBM0IsQ0FBUDtBQUNIOzs7MENBR3VCNVMsTSxFQUN4QjtBQUNJO0FBQ0EsaUJBQUl5QixLQUFLLENBQVQ7QUFDQSxpQkFBSUMsS0FBSzFCLE9BQU8sQ0FBUCxFQUFVeEcsQ0FBbkI7QUFDQSxrQkFBSyxJQUFJNkcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTCxPQUFPaEcsTUFBM0IsRUFBbUNxRyxHQUFuQyxFQUF3QztBQUNwQyxxQkFBSTdHLElBQUl3RyxPQUFPSyxDQUFQLEVBQVU3RyxDQUFsQjtBQUNBLHFCQUFJQSxJQUFJa0ksRUFBSixJQUFXbEksS0FBS2tJLEVBQUwsSUFBVzFCLE9BQU9LLENBQVAsRUFBVTVHLENBQVYsR0FBY3VHLE9BQU95QixFQUFQLEVBQVdoSSxDQUFuRCxFQUF1RDtBQUNuRGdJLDBCQUFLcEIsQ0FBTDtBQUNBcUIsMEJBQUtsSSxDQUFMO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSWlHLElBQUlPLE9BQU9oRyxNQUFmO0FBQ0EsaUJBQUkySCxPQUFPLEVBQVg7QUFDQSxpQkFBSW5DLElBQUksQ0FBUjtBQUNBLGlCQUFJb0MsS0FBS0gsRUFBVDs7QUFFQSxvQkFBTyxDQUFQLEVBQVU7QUFDTkUsc0JBQUtuQyxDQUFMLElBQVVvQyxFQUFWOztBQUVBLHFCQUFJQyxLQUFLLENBQVQ7QUFDQSxzQkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlyQyxDQUFwQixFQUF1QnFDLEdBQXZCLEVBQTRCO0FBQ3hCLHlCQUFJRCxNQUFNRCxFQUFWLEVBQWM7QUFDVkMsOEJBQUtDLENBQUw7QUFDQTtBQUNIOztBQUVELHlCQUFJN0UsSUFBSSxpQkFBT3JELFFBQVAsQ0FBZ0JvRyxPQUFPNkIsRUFBUCxDQUFoQixFQUE0QjdCLE9BQU8yQixLQUFLbkMsQ0FBTCxDQUFQLENBQTVCLENBQVI7QUFDQSx5QkFBSTVDLElBQUksaUJBQU9oRCxRQUFQLENBQWdCb0csT0FBTzhCLENBQVAsQ0FBaEIsRUFBMkI5QixPQUFPMkIsS0FBS25DLENBQUwsQ0FBUCxDQUEzQixDQUFSO0FBQ0EseUJBQUl4QyxJQUFJLGlCQUFPZ0YsS0FBUCxDQUFhL0UsQ0FBYixFQUFnQkwsQ0FBaEIsQ0FBUjtBQUNBLHlCQUFJSSxJQUFJLENBQVIsRUFBVztBQUNQNkUsOEJBQUtDLENBQUw7QUFDSDs7QUFFRDtBQUNBLHlCQUFJOUUsS0FBSyxDQUFMLElBQVVKLEVBQUVILFFBQUYsS0FBZVEsRUFBRVIsUUFBRixFQUE3QixFQUEyQztBQUN2Q29GLDhCQUFLQyxDQUFMO0FBQ0g7QUFDSjs7QUFFRHRDO0FBQ0FvQyxzQkFBS0MsRUFBTDs7QUFFQSxxQkFBSUEsTUFBTUosRUFBVixFQUFjO0FBQ1Y7QUFDSDtBQUNKOztBQUVEO0FBQ0EsaUJBQUlTLFlBQVksRUFBaEI7QUFDQSxrQkFBSyxJQUFJN0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJYixDQUFwQixFQUF1QixFQUFFYSxDQUF6QixFQUE0QjtBQUN4QixxQkFBSVcsUUFBUWhCLE9BQU8yQixLQUFLdEIsQ0FBTCxDQUFQLENBQVo7QUFDQTZCLDJCQUFVMUIsSUFBVixDQUFlLHFCQUFXUSxNQUFNeEgsQ0FBakIsRUFBb0J3SCxNQUFNdkgsQ0FBMUIsQ0FBZjtBQUNIOztBQUVELG9CQUFPeUksU0FBUDtBQUNIOzs7a0NBR2V4RixDLEVBQUdDLEMsRUFDbkI7QUFDSSxvQkFBTyxxQkFBVyxDQUFDRCxFQUFFbEQsQ0FBRixHQUFNbUQsRUFBRW5ELENBQVQsSUFBYyxDQUF6QixFQUE0QixDQUFDa0QsRUFBRWpELENBQUYsR0FBTWtELEVBQUVsRCxDQUFULElBQWMsQ0FBMUMsQ0FBUDtBQUNIOzs7Ozs7bUJBNWZnQmlYLEc7OztBQWdnQnJCLFVBQVN3QyxLQUFULENBQWVwUSxLQUFmLEVBQXNCaEssR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzVCLFNBQUkrSixTQUFTL0osR0FBVCxJQUFnQitKLFNBQVNoSyxHQUE3QixFQUFrQztBQUM5QixnQkFBT2dLLEtBQVA7QUFDSCxNQUZELE1BRU8sSUFBSS9KLE1BQU0rSixLQUFWLEVBQWlCO0FBQ3BCLGdCQUFPL0osR0FBUDtBQUNILE1BRk0sTUFFQTtBQUNILGdCQUFPRCxHQUFQO0FBQ0g7QUFDSjs7QUFHRCxVQUFTcWEsYUFBVCxDQUF1QnZOLFFBQXZCLEVBQWlDO0FBQzdCQSxjQUFTYixPQUFULENBQWlCLFVBQUM4QyxNQUFELEVBQVM5RyxLQUFULEVBQW1CO0FBQ2pDTyxpQkFBUUMsR0FBUixDQUFZUixLQUFaLEVBQW1COEcsT0FBT3JPLENBQTFCLEVBQTZCcU8sT0FBT3BPLENBQXBDO0FBQ0YsTUFGRDtBQUdIOztBQUVELFVBQVMyWixlQUFULENBQXlCOU4sU0FBekIsRUFBb0NDLFNBQXBDLEVBQStDO0FBQzNDakUsYUFBUUMsR0FBUixDQUFZLG1EQUFaO0FBQ0FELGFBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FELGFBQVFDLEdBQVIsQ0FBWSxtREFBWjtBQUNBNFIsbUJBQWM3TixTQUFkO0FBQ0FoRSxhQUFRQyxHQUFSLENBQVksbURBQVo7QUFDQUQsYUFBUUMsR0FBUixDQUFZLFdBQVo7QUFDQUQsYUFBUUMsR0FBUixDQUFZLG1EQUFaO0FBQ0E0UixtQkFBYzVOLFNBQWQ7QUFDQWpFLGFBQVFDLEdBQVIsQ0FBWSxtREFBWjtBQUNIOztBQUVELFVBQVN1UCxHQUFULENBQWFqSixNQUFiLEVBQXNDO0FBQUEsU0FBakJ3TCxPQUFpQix1RUFBUCxLQUFPOztBQUNsQyxTQUFJQSxZQUFZLEtBQWhCLEVBQXVCO0FBQ25CLHNCQUFXeEwsT0FBT3JPLENBQWxCLFNBQXVCcU8sT0FBT3BPLENBQTlCO0FBQ0g7QUFDRCxrQkFBV29PLE9BQU9yTyxDQUFQLENBQVNtQixPQUFULENBQWlCLENBQWpCLENBQVgsU0FBa0NrTixPQUFPcE8sQ0FBUCxDQUFTa0IsT0FBVCxDQUFpQixDQUFqQixDQUFsQztBQUNILEU7Ozs7Ozs7Ozs7Ozs7QUNsakJEOzs7Ozs7OztLQUdxQjJZLGlCLEdBQ2pCLDJCQUFZcEIsYUFBWixFQUEyQkMsYUFBM0IsRUFBMEM7QUFBQTs7QUFDdEMsVUFBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFVBQUtuUixLQUFMLEdBQWEsaUJBQU9wSCxRQUFQLENBQWdCc1ksYUFBaEIsRUFBK0JDLGFBQS9CLENBQWI7QUFDSCxFOzttQkFMZ0JtQixpQiIsImZpbGUiOiJlcGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9Nb3VzZVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xuICAgIH1cbn0oKSk7XG5cbmxldCBjYW52YXMsIHJlbmRlcmVyLCBzdGFnZSwgdGVzdCwgY29udGFpbmVyO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwge1xuICAgICAgICAgICAgdmlldzogY2FudmFzLFxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgzMzM4M0RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTW91c2UucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgICAgICAvLyDsnITsuZjqsIAg7KCV7IiY6rCAIOyVhOuLkOqyveyasCDtnZDrpr/tlZjqsowg67O07J2064qUIOusuOygnOqwgCDsnojslrRcbiAgICAgICAgLy8g66CM642U65+s7J2YIOychOy5mOulvCDsoJXsiJjroZwg7Jew7IKw65CgIOyImCDsnojrj4TroZ0g7ZWc64ukLlxuICAgICAgICAvL3JlbmRlcmVyLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcblxuICAgICAgICBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICB0ZXN0ID0gbmV3IFRlc3QocmVuZGVyZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXN0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AoKTtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCkge31cblxuICAgIHVwZGF0ZUxvb3AgKG1zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1zKTtcbiAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG1zKSB7XG4gICAgICAgIHRlc3QudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzdGFnZSk7XG4gICAgfVxuXG4gICAgcmVzaXplV2luZG93KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDsupTrsoTsiqQg7IKs7J207KaI7JmAIOuUlOyKpO2UjOugiOydtCDsgqzsnbTspogg7ISk7KCVXG4gICAgICAgICAqIOugiO2LsOuCmCDqt7jrnpjtlL0g7KeA7JuQIOy9lOuTnFxuICAgICAgICAgKi9cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBJWEkgcmVuZGVyZXIg66as7IKs7J207KaIXG4gICAgICAgICAqIFBJWEkg7JeQ6rKMIHZpZXdwb3J0IOyCrOydtOymiCDrs4Dqsr0g7JWM66a8XG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIHRlc3QucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L2VwYS9pbmRleC5qcyIsIlxuXG5jb25zdCBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuXG5mdW5jdGlvbiByYW5kb20gKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhZGlhbjJkZWdyZWVzIChyYWQpIHtcbiAgICByZXR1cm4gcmFkICogZGVncmVlcztcbn1cblxuZnVuY3Rpb24gZGVncmVlczJyYWRpYW4gKGRlZykge1xuICAgIHJldHVybiBkZWcgLyBkZWdyZWVzO1xufVxuXG5cbi8qKlxuICogVmljdG9yLmpz66W8IEVTNuuhnCDrs4DtmZjtlZjsl6wg7IKs7Jqp7ZWY6rOgIOyeiOyKteuLiOuLpC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhrdWVuZy92aWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yXG57XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbUFycmF5KFs0MiwgMjFdKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21BcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHdpdGggdGhlIHggYW5kIHkgdmFsdWVzIGF0IGluZGV4IDAgYW5kIDEgcmVzcGVjdGl2ZWx5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGFyclswXSB8fCAwLCBhcnJbMV0gfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbU9iamVjdCh7IHg6IDQyLCB5OiAyMSB9KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21PYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgZm9yIHggYW5kIHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tT2JqZWN0KG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKG9iai54IHx8IDAsIG9iai55IHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuIFdpbGwgYWxzbyB3b3JrIHdpdGhvdXQgdGhlIGBuZXdgIGtleXdvcmRcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IFZlY3Rvcig0MiwgMTMzNyk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBWYWx1ZSBvZiB0aGUgeCBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVmFsdWUgb2YgdGhlIHkgYXhpc1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMClcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWCBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeToxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBZIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGQodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggKyBiLngsIGEueSArIGIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIGJvdGggdmVjdG9yIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWCBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBZIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0KHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3QodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1YnRyYWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLSBiLngsIGEueSAtIGIueSk7XG4gICAgfVxuXG5cbiAgICBlZGdlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZWRnZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdChhLCBiKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXIoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclgoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDIwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJZKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEwMCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIHggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgeSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSBhIGF4aXMgdmFsdWVzIG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGUodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGUoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAvIGIueCwgYS55IC8gYi55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRYKClcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFkoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WSgpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuaW52ZXJ0WCgpO1xuICAgICAgICB0aGlzLmludmVydFkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmVnYXRlKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHYgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgdi54ID0gLXZlYy54O1xuICAgICAgICB2LnkgPSAtdmVjLnk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBYIGF4aXMgYnkgWCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWSBheGlzIGJ5IFkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdmFsdWVzIGZyb20gYSBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5KHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbXVsdGlwbHlTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHNjYWxhciwgdmVjdG9yLnkgKiBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54IC8gc2NhbGFyLCB2ZWN0b3IueSAvIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoOTAg64+EIO2ajOyghClcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBwZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSAtdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKC05MCDrj4Qg7ZqM7KCEKVxuICAgICAqL1xuICAgIHJldHVyblBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy55LCAtdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZXR1cm5QZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSB2ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IC12ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog67KE66a8XG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJ1bmNhdGUodmVjLCBsZW5ndGgpXG4gICAge1xuICAgICAgICBjb25zdCByZXQgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoU3EgPSB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICAgICAgaWYgKGxlbmd0aFNxID4gbGVuZ3RoICogbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXQubXVsdGlwbHlTY2FsYXIobGVuZ3RoIC8gTWF0aC5zcXJ0KGxlbmd0aFNxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbm9ybWFsaXplKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpdmlkZShuZXcgVmVjdG9yKGxlbmd0aCwgbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBub3JtKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGFic29sdXRlIHZlY3RvciBheGlzIGlzIGdyZWF0ZXIgdGhhbiBgbWF4YCwgbXVsdGlwbGllcyB0aGUgYXhpcyBieSBgZmFjdG9yYFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGltaXQoODAsIDAuOSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjkwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIGZvciBib3RoIHggYW5kIHkgYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmYWN0b3IgRmFjdG9yIGJ5IHdoaWNoIHRoZSBheGlzIGFyZSB0byBiZSBtdWx0aXBsaWVkIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsaW1pdChtYXgsIGZhY3RvcilcbiAgICB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLngpID4gbWF4KXsgdGhpcy54ICo9IGZhY3RvcjsgfVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55KSA+IG1heCl7IHRoaXMueSAqPSBmYWN0b3I7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21pemVzIGJvdGggdmVjdG9yIGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemUobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MGApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NjcsIHk6NzNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpLCB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHRoaXMueCA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHRoaXMueSA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IHJhbmRvbWl6ZXMgZWl0aGVyIGF4aXMgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZUFueShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo3N1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemVBbnkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBpZiAoISEgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGFuIGludGVnZXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdW5mbG9hdCgpXG4gICAge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGEgY2VydGFpbiBwcmVjaXNpb25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFByZWNpc2lvbiAoZGVmYXVsdDogOClcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0ZpeGVkKHByZWNpc2lvbilcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJlY2lzaW9uID09PSAndW5kZWZpbmVkJykgeyBwcmVjaXNpb24gPSA4OyB9XG4gICAgICAgIHRoaXMueCA9IHRoaXMueC50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBYIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gKDEgLSBhbW91bnQpICogdGhpcy54ICsgYW1vdW50ICogdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBZIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WSh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WSh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0gKDEgLSBhbW91bnQpICogdGhpcy55ICsgYW1vdW50ICogdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4KHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5taXhYKHZlYywgYW1vdW50KTtcbiAgICAgICAgdGhpcy5taXhZKHZlYywgYW1vdW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFByb2R1Y3RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jbG9uZSgpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBBIGNsb25lIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNsb25lKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVgodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBZIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlZKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBhbmQgWSBjb21wb25lbnRzIGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb3B5WCh2ZWMpO1xuICAgICAgICB0aGlzLmNvcHlZKHZlYyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmVjdG9yIHRvIHplcm8gKDAsMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICpcdFx0IHZhcjEuemVybygpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MCwgeTowXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB6ZXJvKClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgbGVmdC1oYW5kZWQgbm9ybWFsIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gdGhpcyB2ZWN0b3JcbiAgICAgKiBAc2VlICNnZXRMZWZ0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIGxlZnQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSAtdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgdmVjdG9yIHRvIHRoZSByaWdodC1oYW5kZWQgbm9ybWFsIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqIEByZXR1cm4ge0BsaW5rIFZlY3RvcjJ9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0UmlnaHRIYW5kT3J0aG9nb25hbFZlY3RvcigpXG4gICAgICovXG4gICAgcmlnaHQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kb3QodmVjMik7XG4gICAgICogICAgIC8vID0+IDIzMDAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEb3QgcHJvZHVjdFxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZG90KHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjMi54ICsgdGhpcy55ICogdmVjMi55O1xuICAgIH1cblxuXG4gICAgZG90UHJvZHVjdCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkb3RQcm9kdWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55O1xuICAgIH1cblxuXG4gICAgY3Jvc3ModmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy54ICogdmVjMi55KSAtICh0aGlzLnkgKiB2ZWMyLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi55IC0gYS55ICogYi54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAgICAgKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UcmlwbGVfcHJvZHVjdCNWZWN0b3JfdHJpcGxlX3Byb2R1Y3RcbiAgICAgKiDshLjqt7jrqLztirjsl5DshJwg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsKntlqXsnYQg7LC+7J2EIOuVjCDsgqzsmqlcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpcGxlUHJvZHVjdChhLCBiLCBjKVxuICAgIHtcbiAgICAgICAgY29uc3QgciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgY29uc3QgYWMgPSBhLnggKiBjLnggKyBhLnkgKiBjLnkgICAgLy8gcGVyZm9ybSBhLmRvdChjKVxuICAgICAgICAgICAgLCBiYyA9IGIueCAqIGMueCArIGIueSAqIGMueTsgICAvLyBwZXJmb3JtIGIuZG90KGMpXG5cbiAgICAgICAgLy8gcGVyZm9ybSBiICogYS5kb3QoYykgLSBhICogYi5kb3QoYylcbiAgICAgICAgci54ID0gYi54ICogYWMgLSBhLnggKiBiYztcbiAgICAgICAgci55ID0gYi55ICogYWMgLSBhLnkgKiBiYztcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIGEgdmVjdG9yIG9udG8gYW5vdGhlciB2ZWN0b3IsIHNldHRpbmcgaXRzZWxmIHRvIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnByb2plY3RPbnRvKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIHByb2plY3QgdGhpcyB2ZWN0b3Igb250b1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHByb2plY3RPbnRvKHZlYzIpXG4gICAge1xuICAgICAgICB2YXIgY29lZmYgPSAoICh0aGlzLnggKiB2ZWMyLngpKyh0aGlzLnkgKiB2ZWMyLnkpICkgLyAoKHZlYzIueCp2ZWMyLngpKyh2ZWMyLnkqdmVjMi55KSk7XG4gICAgICAgIHRoaXMueCA9IGNvZWZmICogdmVjMi54O1xuICAgICAgICB0aGlzLnkgPSBjb2VmZiAqIHZlYzIueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDshKDtmJUg67O06rCEXG4gICAgICogaHR0cDovL2RldmVsb3B1Zy5ibG9nc3BvdC5jb20vMjAxNC8wOS91bml0eS12ZWN0b3ItbGVycC5odG1sXG4gICAgICogQHBhcmFtIHZlYzFcbiAgICAgKiBAcGFyYW0gdmVjMlxuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIGxlcnAodmVjMSwgdmVjMiwgdG8pIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5hZGQoVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzEsIDEgLSB0byksIFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMyLCB0bykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOyXreyImFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyByY3AodmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEgLyB2ZWN0b3IueCwgMSAvIHZlY3Rvci55KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLnZlcnRpY2FsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICBhbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZURlZygpO1xuICAgIH1cblxuXG4gICAgZGlyZWN0aW9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgcm90YXRlKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG54ID0gKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSkgLSAodGhpcy55ICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgdmFyIG55ID0gKHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSkgKyAodGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKTtcblxuICAgICAgICB0aGlzLnggPSBueDtcbiAgICAgICAgdGhpcy55ID0gbnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICByb3RhdGVEZWcoYW5nbGUpXG4gICAge1xuICAgICAgICBhbmdsZSA9IGRlZ3JlZXMycmFkaWFuKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKHJvdGF0aW9uLXRoaXMuYW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUb0RlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVUbyhyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeShyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMuYW5nbGUoKSArIHJvdGF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeURlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVCeShyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWCBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAtIHZlYy54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VYKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hYnNEaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVgodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWSBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55IC0gdmVjLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVkoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VZKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwLjQ5ODc1NjIxMTIwODlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24oKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZVNxdWFyZWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVNxKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlU3EodmVjKVxuICAgIHtcbiAgICAgICAgdmFyIGR4ID0gdGhpcy5kaXN0YW5jZVgodmVjKSxcbiAgICAgICAgICAgIGR5ID0gdGhpcy5kaXN0YW5jZVkodmVjKTtcblxuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb3IgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aCgpO1xuICAgICAqICAgICAvLyA9PiAxMTEuODAzMzk4ODc0OTg5NDhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uo7Iic7Z6IIOq4uOydtCDruYTqtZDrpbwg7ZWY66Ck66m0IGxlbmd0aCDrpbwg7IKs7Jqp7ZWY6riwIOuztOuLpOuKlCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY6rKMIOu5oOultOuLpC5cbiAgICAgKiBsZW5ndGgg64qUIE1hdGguc3FydCAo7KCc6rOx6re8KSDsspjrpqzrpbwg7ZWY6riwIOuVjOusuOyXkCDri6jsiJwg6ri47J20IOu5hOq1kOyLnCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY64qUIOqyg+ydtCDruaDrpoXri4jri6QuXG4gICAgICogU3F1YXJlZCBsZW5ndGggLyBtYWduaXR1ZGVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aFNxKCk7XG4gICAgICogICAgIC8vID0+IDEyNTAwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoU3EoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsZW5ndGhTcSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgfVxuXG5cbiAgICBtYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoKCk7XG4gICAgfVxuXG5cbiAgICB0byh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWMueCAtIHRoaXMueCwgdmVjLnkgLSB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgc2V0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB2ZWN0b3IgaXMgKDAsIDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMuemVybygpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc1plcm8oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB0aGlzIHZlY3RvciBpcyB0aGUgc2FtZSBhcyBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMxLmlzRXF1YWxUbyh2ZWMyKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNFcXVhbFRvKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSB2ZWMyLnggJiYgdGhpcy55ID09PSB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFV0aWxpdHkgTWV0aG9kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICByZXR1cm4gJ3g6JyArIHRoaXMueCArICcsIHk6JyArIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b0FycmF5KCk7XG4gICAgICogICAgIC8vID0+IFsxMCwgMjBdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvQXJyYXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFsgdGhpcy54LCB0aGlzLnkgXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9PYmplY3QoKTtcbiAgICAgKiAgICAgLy8gPT4geyB4OiAxMCwgeTogMjAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9PYmplY3QoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmVjdG9yLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uL3V0aWxzL1Bhc3RlbENvbG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCBleHRlbmRzIFBJWEkuR3JhcGhpY3NcbntcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDEwLCBjb2xvciA9IFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4LCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGE7XG4gICAgICAgIHRoaXMucmVuZGVyKHJhZGl1cywgY29sb3IsIGFscGhhKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcihyYWRpdXMgPSAxMCwgY29sb3IgPSAweGZmMzMwMCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplKGx0LCByYilcbiAgICB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy52ZWN0b3IucmFuZG9taXplKGx0LCByYik7XG4gICAgICAgIHRoaXMueCA9IHBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMueSA9IHBvc2l0aW9uLnk7XG4gICAgfVxuXG5cbiAgICBnZXQgdmVjdG9yKClcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuZnJvbU9iamVjdCh0aGlzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbS9Qb2ludC5qcyIsIi8qKlxuICogaHR0cHM6Ly9jb2RlcGVuLmlvL3BsaXUvcGVuL0JMRUt3QVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXN0ZWxDb2xvciB7XG4gICAgc3RhdGljIGdlbmVyYXRlKCkge1xuICAgICAgICBjb25zdCBoQmFzZSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGNvbnN0IG5ld0ggPSBNYXRoLmZsb29yKGhCYXNlICogMzYwKTtcbiAgICAgICAgY29uc3QgbmV3TCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KSArIDc1O1xuICAgICAgICBjb25zdCBjb2xvciA9IGBoc2woJHtuZXdIfSwgMTAwJSwgJHtuZXdMfSUpYDtcbiAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gdGhpcy5IU0x0b1JHQihoQmFzZSwgMSwgbmV3TCAqIC4wMSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhzbDogY29sb3IsIC8vIGhzbCgwLCAxMDAlLCA4NSUpO1xuICAgICAgICAgICAgcmdiOiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYCwgLy8gcmdiKDI1NSwgMTI4LCAxMjgpO1xuICAgICAgICAgICAgaGV4OiBgJHt0aGlzLlJHQnRvSGV4KHIsIGcsIGIpfWAsIC8vIDB4ZmY4MDgwXG4gICAgICAgICAgICBoZXhTaGFwOmAke3RoaXMuUkdCdG9IZXgociwgZywgYiwgJyMnKX1gLCAvLyAjZmY4MDgwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSFNMIHRvIFJHQiBmb3JtdWxhIGFkYXB0ZWQgZnJvbTpcbiAgICAgKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9tamFja3Nvbi81MzExMjU2XG4gICAgICogKHNraXBwaW5nIHRvIGVsc2V7fSBzaW5jZSBzIHdpbGwgYWx3YXlzIGJlIDEwMCUpXG4gICAgICogQHBhcmFtIGhcbiAgICAgKiBAcGFyYW0gc1xuICAgICAqIEBwYXJhbSBsXG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgSFNMdG9SR0IoaCwgcywgbCkge1xuICAgICAgICBsZXQgciwgZywgYjtcblxuICAgICAgICBjb25zdCByZCA9IChhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heChNYXRoLm1pbihhICogMjU2LCAyNTUpLCAwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaHVlVG9SR0IgPSAobSwgbiwgbykgPT4ge1xuICAgICAgICAgICAgaWYgKG8gPCAwKSBvICs9IDE7XG4gICAgICAgICAgICBpZiAobyA+IDEpIG8gLT0gMTtcbiAgICAgICAgICAgIGlmIChvIDwgMSAvIDYpIHJldHVybiBtICsgKG4gLSBtKSAqIDYgKiBvO1xuICAgICAgICAgICAgaWYgKG8gPCAxIC8gMikgcmV0dXJuIG47XG4gICAgICAgICAgICBpZiAobyA8IDIgLyAzKSByZXR1cm4gbSArIChuIC0gbSkgKiAoMiAvIDMgLSBvKSAqIDY7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcblxuICAgICAgICByID0gaHVlVG9SR0IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgICAgZyA9IGh1ZVRvUkdCKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlVG9SR0IocCwgcSwgaCAtIDEgLyAzKTtcblxuICAgICAgICByZXR1cm4gW3JkKHIpLCByZChnKSwgcmQoYildXG4gICAgfVxuXG4gICAgc3RhdGljIFJHQnRvSGV4KHIsIGcsIGIsIHByZWZpeCA9ICcweCcpIHtcbiAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0ke3IudG9TdHJpbmcoMTYpfSR7Zy50b1N0cmluZygxNil9JHtiLnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9QYXN0ZWxDb2xvci5qcyIsIi8qKlxuICogaHR0cHM6Ly93d3cuY3JvY3VzLmNvLmtyLzEyODhcbiAqL1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vVmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZleEh1bGwge1xuICAgIHN0YXRpYyBnZW5lcmF0ZShwb2ludHMpIHtcblxuICAgICAgICBjb25zdCBzdGFjayA9IFtdLFxuICAgICAgICAgICAgbiA9IHBvaW50cy5sZW5ndGg7XG5cbiAgICAgICAgLy8geeyijO2RnCwgeOyijO2RnCDsnpHsnYAg7Iic7Jy866GcIOygleugrFxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRMb3dlcllYKTtcblxuICAgICAgICAvLyDquLDspIDsoJAg7ISk7KCVXG4gICAgICAgIGNvbnN0IGJhc2VQb2ludCA9IHBvaW50c1swXTtcblxuICAgICAgICAvLyDquLDspIDsoJAg6riw7KSA7Jy866GcIHZlY3RvciDrpbwg7IOd7ISx7ZWY6rOgIOyZuOyggeydhCDqtaztlbTshJwg67CYIOyLnOqzhCDrsKntlqXsnLzroZwgKGNjdykg7KCV66CsIO2VqeuLiOuLpC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50c1tpXS5yZWxhdGl2ZVBvc2l0aW9uID0gbmV3IFZlY3RvcihcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueCAtIGJhc2VQb2ludC54LFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXS55IC0gYmFzZVBvaW50LnlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRDY3cpO1xuXG4gICAgICAgIC8vIOyKpO2DneyXkCBmaXJzdCwgc2Vjb25kIOulvCDrhKPsirXri4jri6QuXG4gICAgICAgIHN0YWNrLnB1c2goMCk7XG4gICAgICAgIHN0YWNrLnB1c2goMSk7XG5cbiAgICAgICAgbGV0IG5leHQgPSAyO1xuXG4gICAgICAgIHdoaWxlIChuZXh0IDwgbikge1xuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0LCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgc2Vjb25kID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpcnN0LCBzZWNvbmQsIG5leHTqsIAg7KKM7ZqM7KCEICggMCDrs7Tri6Qg7YGs66m0ICnsnbTrnbzrqbQgc2Vjb25kIHB1c2hcbiAgICAgICAgICAgICAgICAvLyDsmrDtmozsoIQoIDAg67O064ukIOyekeycvOuptCApIOydtOudvOuptCDsnITsnZggd2hpbGXrrLgg6rOE7IaNIOuwmOuztVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2N3KHBvaW50c1tmaXJzdF0sIHBvaW50c1tzZWNvbmRdLCBwb2ludHNbbmV4dF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc2Vjb25kKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHQrKyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gc3RhY2subGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YWNrW2ldO1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaW5kZXhdO1xuICAgICAgICAgICAgY29udmV4SHVsbC5wdXNoKG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnZleEh1bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeSwgeCDqsIAg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBzb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICBpZiAocG9pbnRBLnkgIT09IHBvaW50Qi55KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnRBLnkgLSBwb2ludEIueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRBLnggLSBwb2ludEIueDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDquLDspIAg7KKM7ZGcIOq4sOykgOycvOuhnCDsg4HrjIAg7KKM7ZGc66W8IOq1rO2VtOyEnCDsi5zqs4Qg67CY64yAIOuwqe2WpeycvOuhnCDsoJXroKztlanri4jri6QuXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydENjdyhwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAvLyDspJHsi6wg7KKM7ZGc7J24IOqyveyasCByZWxhdGl2ZVBvc2l0aW9uIOydtCDsl4bsirXri4jri6QuIOykkeyLrCDsooztkZzrpbwgMOuyiOycvOuhnCDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBpZiAoIXBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGEgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi55ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgYiA9IHBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uLnggKiBwb2ludEIucmVsYXRpdmVQb3NpdGlvbi55O1xuXG4gICAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29udmV4SHVsbC5zb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67CYIOyLnOqzhCDrsKntlqXsnbjsp4Ag7Jes67aAXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcGFyYW0gcG9pbnRDXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQ2N3KHBvaW50QSwgcG9pbnRCLCBwb2ludEMpIHtcbiAgICAgICAgLy8gY29uc3QgdHJpYW5nbGVBcmVhID0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpO1xuICAgICAgICBjb25zdCB0cmlhbmdsZUFyZWEgPSAgKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpO1xuICAgICAgICBpZiAodHJpYW5nbGVBcmVhID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z0FycmF5KGFycikge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYXJyLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJbaV0ueCwgYXJyW2ldLnkpO1xuICAgIH1cbn1cblxuXG4vKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTIgSnUgSHl1bmcgTGVlXG4qXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZVxuKiBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbiogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4qIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Jcbiogc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElOR1xuKiBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbiogREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIENyZWF0ZSB0aGUgY29udmV4IGh1bGwgdXNpbmcgdGhlIEdpZnQgd3JhcHBpbmcgYWxnb3JpdGhtXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dpZnRfd3JhcHBpbmdfYWxnb3JpdGhtXG5mdW5jdGlvbiBjcmVhdGVDb252ZXhIdWxsKHBvaW50cykge1xuICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICB2YXIgaTAgPSAwO1xuICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGh1bGwgPSBbXTtcbiAgICB2YXIgbSA9IDA7XG4gICAgdmFyIGloID0gaTA7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHIgPSB2ZWMyLnN1Yihwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIHYgPSB2ZWMyLnN1Yihwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICB2YXIgYyA9IHZlYzIuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aHNxKCkgPiByLmxlbmd0aHNxKCkpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtKys7XG4gICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvcHkgdmVydGljZXNcbiAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgbmV3UG9pbnRzLnB1c2gocG9pbnRzW2h1bGxbaV1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UG9pbnRzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9zcmMvSGlzdG9yeSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vc3JjL2dqay9TaGFwZSc7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uLy4uL3NyYy9namsvQ29uc3RzJztcbmltcG9ydCBWZXJ0aWNlcyBmcm9tICcuLi8uLi9zcmMvZ2prL1ZlcnRpY2VzJztcbmltcG9ydCBDb252ZXhIdWxsIGZyb20gJy4uLy4uL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwnO1xuaW1wb3J0IE1pbmtvd3NraURpZmZlcmVuY2UgZnJvbSAnLi4vLi4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlJztcbmltcG9ydCBHamsgZnJvbSAnLi4vLi4vc3JjL2R5bjRqL0dqayc7XG5pbXBvcnQgRXBhIGZyb20gJy4uLy4uL3NyYy9keW40ai9FcGEnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc3JjL2R5bjRqL1BvbHlnb24nO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcIi4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZVwiO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYXN0ZWxDb2xvcic7XG5pbXBvcnQgUGVuZXRyYXRpb24gZnJvbSAnLi4vLi4vc3JjL2R5bjRqL1BlbmV0cmF0aW9uJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYWludGVyJztcblxuXG5jb25zdCBUT1RBTCA9IDMwXG4gICAgLCBJTlRFUlZBTCA9IDYwMDAwMFxuICAgICwgU0NBTEUgPSBDb25zdHMuU0NBTEVcbiAgICAsIFNUQUdFID0gQ29uc3RzLlNUQUdFXG4gICAgLCBUT1BfTEVGVCA9IHt4OiAyLCB5OiAyfVxuICAgICwgVE9QX1JJR0hUID0ge3g6IDE3LCB5OiAxN31cbiAgICAsIFJBRF9UT19ERUcgPSAxODAgLyBNYXRoLlBJO1xuXG5jb25zdCB0cmlhbmdsZXMgPSBjcmVhdGVQb2x5Z29ucygzLCBUT1RBTCk7XG5jb25zdCByZWN0YW5nbGVzID0gY3JlYXRlUG9seWdvbnMoNCwgVE9UQUwpO1xuXG4vKmNvbnN0IHRyaWFuZ2xlcyA9IFtcbiAgICAvLyBbbmV3IFZlY3RvcigzLCAxKSwgbmV3IFZlY3RvcigzLCA1KSwgbmV3IFZlY3Rvcig2LCA0KV0sXG4gICAgW25ldyBWZWN0b3IoNCwgMTEpLCBuZXcgVmVjdG9yKDQsIDUpLCBuZXcgVmVjdG9yKDksIDkpXSxcbiAgICAvLyBbbmV3IFZlY3RvcigwLCAtMSksIG5ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMSwgMyldLFxuXTtcbmNvbnN0IHJlY3RhbmdsZXMgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoOCwgMSksIG5ldyBWZWN0b3IoOCwgNSksIG5ldyBWZWN0b3IoMTEsIDUpLCBuZXcgVmVjdG9yKDExLCAxKV0sXG4gICAgW25ldyBWZWN0b3IoNSwgNyksIG5ldyBWZWN0b3IoNywgMyksIG5ldyBWZWN0b3IoMTAsIDIpLCBuZXcgVmVjdG9yKDEyLCA3KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoMiwgLTIpLCBuZXcgVmVjdG9yKDUsIC0xKSwgbmV3IFZlY3Rvcig0LCAyKSwgbmV3IFZlY3RvcigxLCAxKV0sXG5dOyovXG5cbi8qY29uc3QgZXJyb3JDYXNlMSA9IFtcbiAgICAvLyBbbmV3IFZlY3RvcigyLCA3KSwgbmV3IFZlY3RvcigxMiwgMyksIG5ldyBWZWN0b3IoMTIsIDE3KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoOCwgOCksIG5ldyBWZWN0b3IoMTAsIDcpLCBuZXcgVmVjdG9yKDE0LCA4KV0sXG4gICAgW25ldyBWZWN0b3IoMTAsIDEzKSwgbmV3IFZlY3RvcigxNCwgMTUpLCBuZXcgVmVjdG9yKDExLCAxNCldLFxuXTtcblxuY29uc3QgZXJyb3JDYXNlMiA9IFtcbiAgICAvLyBbbmV3IFZlY3RvcigxNCwgMiksIG5ldyBWZWN0b3IoMTcsIDIpLCBuZXcgVmVjdG9yKDE0LCA3KSwgbmV3IFZlY3Rvcig5LCA3KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoNywgNSksIG5ldyBWZWN0b3IoMTUsIDEwKSwgbmV3IFZlY3RvcigxNiwgMTEpLCBuZXcgVmVjdG9yKDE1LCAxNCldLFxuICAgIFtuZXcgVmVjdG9yKDksIDgpLCBuZXcgVmVjdG9yKDE0LCAxNSksIG5ldyBWZWN0b3IoNCwgMTUpLCBuZXcgVmVjdG9yKDMsIDEyKV0sXG5dOyovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci52aWV3O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheUNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5rZXlVcExpc3RlbmVyID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXBMaXN0ZW5lcik7XG5cbiAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgZGlzcGxheUNvbGxpc2lvbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHNoYXBlKTtcbiAgICAgICAgICAgIHNoYXBlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaGFwZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMubWlua293c2tpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLm1pbmtvd3NraSk7XG4gICAgICAgIHRoaXMubWlua293c2tpLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IGluZGV4MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRyaWFuZ2xlcy5sZW5ndGgpXG4gICAgICAgICAgICAsIGluZGV4MiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlY3RhbmdsZXMubGVuZ3RoKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczEgPSBuZXcgVmVydGljZXModHJpYW5nbGVzW2luZGV4MV0pXG4gICAgICAgICAgICAsIHZlcnRpY2VzMiA9IG5ldyBWZXJ0aWNlcyhyZWN0YW5nbGVzW2luZGV4Ml0pXG4gICAgICAgICAgICAsIHBlbmV0cmF0aW9uQ29sb3IgPSAweEZGMzMwMFxuICAgICAgICAgICAgLCBwZW5ldHJhdGlvbkFscGhhID0gMC43O1xuXG4gICAgICAgIC8qY29uc3QgaW5kZXgxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXJyb3JDYXNlMS5sZW5ndGgpXG4gICAgICAgICAgICAsIGluZGV4MiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVycm9yQ2FzZTIubGVuZ3RoKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczEgPSBuZXcgVmVydGljZXMoZXJyb3JDYXNlMVtpbmRleDFdKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczIgPSBuZXcgVmVydGljZXMoZXJyb3JDYXNlMltpbmRleDJdKTsqL1xuXG4gICAgICAgIHZlcnRpY2VzMS5tdWx0aXBseShTQ0FMRSk7XG4gICAgICAgIHZlcnRpY2VzMi5tdWx0aXBseShTQ0FMRSk7XG5cbiAgICAgICAgY29uc3Qgc2hhcGUxID0gbmV3IFNoYXBlKHZlcnRpY2VzMS52ZXJ0aWNlcylcbiAgICAgICAgICAgICwgc2hhcGUyID0gbmV3IFNoYXBlKHZlcnRpY2VzMi52ZXJ0aWNlcylcbiAgICAgICAgICAgICwgc2hhcGUzID0gbmV3IFNoYXBlKHZlcnRpY2VzMi5jbG9uZSgpLCBwZW5ldHJhdGlvbkNvbG9yLCBwZW5ldHJhdGlvbkFscGhhKTtcblxuICAgICAgICB0aGlzLm1pbmtvd3NraSA9IG5ldyBNaW5rb3dza2lEaWZmZXJlbmNlKHZlcnRpY2VzMS52ZXJ0aWNlcywgdmVydGljZXMyLnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kueCA9IChTVEFHRS53aWR0aCAvIDMpICogMjtcbiAgICAgICAgdGhpcy5taW5rb3dza2kueSA9IChTVEFHRS5oZWlnaHQgLyAzKSAqIDI7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChzaGFwZTEpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHNoYXBlMik7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2hhcGUzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pbmtvd3NraSk7XG5cbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZTEpO1xuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlMik7XG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUzKTtcblxuICAgICAgICB2ZXJ0aWNlczEuZGl2aWRlKFNDQUxFKTtcbiAgICAgICAgdmVydGljZXMyLmRpdmlkZShTQ0FMRSk7XG5cbiAgICAgICAgY29uc3QgcG9seWdvbjEgPSBuZXcgUG9seWdvbih2ZXJ0aWNlczEudmVydGljZXMpXG4gICAgICAgICAgICAsIHBvbHlnb24yID0gbmV3IFBvbHlnb24odmVydGljZXMyLnZlcnRpY2VzKTtcblxuICAgICAgICBjb25zdCBnamsgPSBuZXcgR2prKG5ldyBFcGEoKSlcbiAgICAgICAgICAgICwgcGVuZXRyYXRpb24gPSBuZXcgUGVuZXRyYXRpb24oKVxuICAgICAgICAgICAgLCBoaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlzQ29sbGlzaW9uID0gZ2prLmRldGVjdChwb2x5Z29uMSwgcG9seWdvbjIsIHBlbmV0cmF0aW9uLCBoaXN0b3J5KVxuICAgICAgICAgICAgLCBhcnJvdyA9IFZlY3Rvci5tdWx0aXBseVNjYWxhcihwZW5ldHJhdGlvbi5ub3JtYWwsIHBlbmV0cmF0aW9uLmRlcHRoKS5tdWx0aXBseVNjYWxhcihTQ0FMRSk7XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcy54ID0gdGhpcy5taW5rb3dza2kueDtcbiAgICAgICAgdGhpcy5ncmFwaGljcy55ID0gdGhpcy5taW5rb3dza2kueTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMiwgcGVuZXRyYXRpb25Db2xvciwgcGVuZXRyYXRpb25BbHBoYSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKDAsIDApO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhhcnJvdy54LCBhcnJvdy55KTtcblxuICAgICAgICBzaGFwZTMueCA9IGFycm93Lng7XG4gICAgICAgIHNoYXBlMy55ID0gYXJyb3cueTtcbiAgICAgICAgaWYgKCFpc0NvbGxpc2lvbikge1xuICAgICAgICAgICAgc2hhcGUzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb2x5Z29uMScsIHBvbHlnb24xKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BvbHlnb24yJywgcG9seWdvbjIpO1xuICAgICAgICBjb25zb2xlLmxvZygnaXNDb2xsaXNpb24nLCBpc0NvbGxpc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwZW5ldHJhdGlvbicsIHBlbmV0cmF0aW9uKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5kaXNwbGF5LCBJTlRFUlZBTCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgICBvbktleVVwKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIOuRkOuyoe2EsCDsgqzsnbTqsIEg6rWs7ZWY6riwXG4gKiBAcGFyYW0gYVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldEFuZ2xlKGEsIGIpIHtcbiAgICBhID0gbmV3IFZlY3RvcihhLngsIGEueSkubm9ybSgpO1xuICAgIGIgPSBuZXcgVmVjdG9yKGIueCwgYi55KS5ub3JtKCk7XG4gICAgY29uc3QgcmFkaWFuID0gTWF0aC5hY29zKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGIpKTtcbiAgICByZXR1cm4gcmFkaWFuICogUkFEX1RPX0RFRztcbn1cblxuXG4vKipcbiAqIOuenOuNpOycvOuhnCDsooztkZzrpbwg7IOd7ISx7ZWY6rOgIGNvbnZleCBodWxsIOydhCDrp4zrk6TrqbQgT0tcbiAqIEBwYXJhbSBwb2x5Z29uXG4gKiBAcGFyYW0gdG90YWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9seWdvbnMocG9seWdvbiwgdG90YWwpIHtcbiAgICBsZXQgdmVydGljZXM7XG4gICAgY29uc3QgcG9seWdvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9seWdvbjsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZWN0b3IucmFuZG9taXplKFRPUF9MRUZULCBUT1BfUklHSFQpO1xuICAgICAgICAgICAgdmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gcG9seWdvbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gQ29udmV4SHVsbC5nZW5lcmF0ZSh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSBjb252ZXhIdWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcG9seWdvbnMucHVzaCh2ZXJ0aWNlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvbHlnb25zO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9lcGEvVGVzdC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9yeSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbnMge1ZlY3RvcltdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpbXBsZXggPSBuZXcgQXJyYXkoMyksIGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMykpIHtcbiAgICAgICAgdGhpcy5zaW1wbGV4ID0gc2ltcGxleDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB9XG5cbiAgICBzZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zaW1wbGV4ID0gc2ltcGxleDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGlzdG9yeS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vZ2prL0NvbnN0cyc7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yJztcblxuY29uc3QgRk9OVF9TSVpFID0gJzlweCdcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSA9IDAuNSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsaW5lQ29sb3IgPSBsaW5lQ29sb3IgPyBsaW5lQ29sb3IgOiBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleDtcbiAgICAgICAgbGluZUNvbG9yID0gdHlwZW9mIGxpbmVDb2xvciA9PT0gJ251bWJlcicgPyAnMHgnICsgbGluZUNvbG9yLnRvU3RyaW5nKDE2KSA6IGxpbmVDb2xvcjtcbiAgICAgICAgY29uc3QgdGV4dENvbG9yID0gbGluZUNvbG9yLnJlcGxhY2UoJzB4JywgJyMnKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB0aGlzLmxpbmVDb2xvciA9IGxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5saW5lQWxwaGEgPSBsaW5lQWxwaGE7XG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gdGV4dENvbG9yO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSB0aGlzLmNyZWF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxhYmVsKCkge1xuICAgICAgICBjb25zdCBuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoaSwge1xuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBmb250OiBGT05UX1NJWkUsXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRleHQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGFiZWxzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3NcbiAgICAgICAgICAgICwgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG4gICAgICAgICAgICAsIG9yaWdpbiA9IHZlcnRpY2VzWzBdO1xuXG4gICAgICAgIGcuY2xlYXIoKTtcbiAgICAgICAgZy5saW5lU3R5bGUoMSwgdGhpcy5saW5lQ29sb3IsIHRoaXMubGluZUFscGhhKTtcbiAgICAgICAgZy5tb3ZlVG8ob3JpZ2luLngsIG9yaWdpbi55KTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZy5saW5lVG8odmVydGV4LngsIHZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbHNbaW5kZXhdXG4gICAgICAgICAgICAgICAgLCB2ZWMgPSBWZWN0b3IuZGl2aWRlU2NhbGFyKHZlcnRleCwgU0NBTEUpO1xuXG4gICAgICAgICAgICBsYWJlbC54ID0gdmVydGV4Lng7XG4gICAgICAgICAgICBsYWJlbC55ID0gdmVydGV4Lnk7XG5cbiAgICAgICAgICAgIGxhYmVsLnRleHQgPSBgKCR7dmVjLnh9LCR7dmVjLnl9KWA7XG4gICAgICAgICAgICBsYWJlbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGcubGluZVRvKG9yaWdpbi54LCBvcmlnaW4ueSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxhYmVscy5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChsYWJlbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGFiZWxzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMubGFiZWxzID0gbnVsbDtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvU2hhcGUuanMiLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RzIHtcbiAgICBzdGF0aWMgZ2V0IFNDQUxFKCkge1xuICAgICAgICByZXR1cm4gMTQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFHRSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlID0ge3g6IDAsIHk6IDAsIHdpZHRoOiA2MDAsIGhlaWdodDogNjAwfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFnZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9Db25zdHMuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljZXMge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzID0gW10pIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KHNjYWxhcikge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggKj0gc2NhbGFyO1xuICAgICAgICAgICAgdmVydGV4LnkgKj0gc2NhbGFyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXZpZGUoc2NhbGFyKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICB2ZXJ0ZXgueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB2ZXJ0ZXgueSAvPSBzY2FsYXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2VzW2luZGV4XSA9IHZlcnRleC5jbG9uZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvVmVydGljZXMuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9Qb2ludCc7XG5pbXBvcnQgQ29udmV4SHVsbCBmcm9tICcuLi9jb252ZXhodWxsL0NvbnZleEh1bGwnO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uL3V0aWxzL1Bhc3RlbENvbG9yJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vZ2prL0NvbnN0cyc7XG5cblxuY29uc3QgU0NBTEUgPSBDb25zdHMuU0NBTEVcbiAgICAsIFNUQUdFID0gQ29uc3RzLlNUQUdFXG4gICAgLCBGT05UX0NPTE9SID0gJyNGRkZGRkYnXG4gICAgLCBBWEVTX0xJTkVfQ09MT1IgPSAnMHhGRkZGRkYnXG4gICAgLCBDT05WRVhfSFVMTF9MSU5FX0NPTE9SID0gUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKS5oZXg7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlua293c2tpRGlmZmVyZW5jZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuXG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMilcbiAgICAgICAgICAgICwgY29udmV4SHVsbCA9IHRoaXMuY29udmV4SHVsbCA9IENvbnZleEh1bGwuZ2VuZXJhdGUodmVydGljZXMpO1xuXG4gICAgICAgIHRoaXMudGV4dHMgPSBbXTtcbiAgICAgICAgdGhpcy5kcmF3QXhlcygpO1xuICAgICAgICB0aGlzLmRyYXdWZXRpY2VzKHZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5kcmF3UG9seWdvbihjb252ZXhIdWxsKTtcbiAgICB9XG5cbiAgICBkcmF3VmV0aWNlcyh2ZXJ0aWNlcykge1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KHZlcnRleC54LCB2ZXJ0ZXgueSwgMywgUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKS5oZXgpO1xuICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHBvaW50KTtcblxuICAgICAgICAgICAgY29uc3QgdmVjID0gVmVjdG9yLmRpdmlkZVNjYWxhcih2ZXJ0ZXgsIFNDQUxFKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoYCgke3ZlYy54fSwgJHt2ZWMueX0pYCwgcG9pbnQudmVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd1BvbHlnb24odmVydGljZXMpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3M7XG5cbiAgICAgICAgZy5saW5lU3R5bGUoMSwgQ09OVkVYX0hVTExfTElORV9DT0xPUiwgMC41KTtcbiAgICAgICAgZy5tb3ZlVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4geyBnLmxpbmVUbyh2ZXJ0ZXgueCwgdmVydGV4LnkpO30pO1xuICAgICAgICBnLmxpbmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgICB9XG5cbiAgICBkcmF3QXhlcygpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3NcbiAgICAgICAgICAgICwgaHcgPSBTVEFHRS53aWR0aCAvIDJcbiAgICAgICAgICAgICwgaGggPSBTVEFHRS5oZWlnaHQgLyAyO1xuXG4gICAgICAgIGcubGluZVN0eWxlKDEsIEFYRVNfTElORV9DT0xPUiwgMC41KTtcbiAgICAgICAgZy5tb3ZlVG8oLWh3LCAwKTtcbiAgICAgICAgZy5saW5lVG8oaHcsIDApO1xuICAgICAgICBnLm1vdmVUbygwLCAtaGgpO1xuICAgICAgICBnLmxpbmVUbygwLCBoaCk7XG4gICAgfVxuXG4gICAgZHJhd1RleHQodGV4dCwgdmVydGV4ID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gbmV3IFBJWEkuVGV4dCh0ZXh0LCB7XG4gICAgICAgICAgICBmb250OiAnMjBweCcsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmaWxsOiBGT05UX0NPTE9SXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxhYmVsLnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgbGFiZWwueSA9IHZlcnRleC55O1xuICAgICAgICB0aGlzLnRleHRzLnB1c2gobGFiZWwpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGxhYmVsKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xuICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHBvaW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICB9XG5cbiAgICBnZXRWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB2ZXJ0aWNlczEuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgdmVydGljZXMyLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKFZlY3Rvci5zdWJ0cmFjdChhLCBiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEVwc2lsb24gZnJvbSAnLi9FcHNpbG9uJztcbmltcG9ydCBNaW5rb3dza2lTdW0gZnJvbSAnLi9NaW5rb3dza2lTdW0nO1xuaW1wb3J0IEV4cGFuZGluZ1NpbXBsZXggZnJvbSBcIi4vRXhwYW5kaW5nU2ltcGxleFwiO1xuXG5jb25zdCBERUZBVUxUX01BWF9JVEVSQVRJT05TID0gMzA7XG5jb25zdCBERUZBVUxUX0RFVEVDVF9FUFNJTE9OID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2prIHtcbiAgICBjb25zdHJ1Y3RvcihtaW5rb3dza2lQZW5ldHJhdGlvblNvbHZlcikge1xuICAgICAgICB0aGlzLm1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyID0gbWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXI7XG4gICAgfVxuXG4gICAgZ2V0SW5pdGlhbERpcmVjdGlvbihjb252ZXgxLCBjb252ZXgyKSB7XG4gICAgICAgIC8vIHRyYW5zZm9ybSBpbnRvIHdvcmxkIHNwYWNlIGlmIHRyYW5zZm9ybSBpcyBub3QgbnVsbFxuICAgICAgICBjb25zdCBjMSA9IGNvbnZleDEuZ2V0Q2VudGVyKCk7XG4gICAgICAgIGNvbnN0IGMyID0gY29udmV4Mi5nZXRDZW50ZXIoKTtcbiAgICAgICAgLy8gY2hvb3NlIHNvbWUgc2VhcmNoIGRpcmVjdGlvblxuICAgICAgICByZXR1cm4gYzIuc3VidHJhY3QoYzEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnZleDEge0NvbnZleH1cbiAgICAgKiBAcGFyYW0gY29udmV4MiB7Q29udmV4fVxuICAgICAqIEBwYXJhbSBwZW5ldHJhdGlvbiB7UGVuZXRyYWlvbn1cbiAgICAgKiBAcGFyYW0gaGlzdG9yeSB7SGlzdG9yeX1cbiAgICAgKi9cbiAgICBkZXRlY3QoY29udmV4MSwgY29udmV4MiwgcGVuZXRyYXRpb24sIGhpc3RvcnkpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxleCA9IFtdO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIE1pbmtvd3NraSBzdW1cbiAgICAgICAgY29uc3QgbXMgPSBuZXcgTWlua293c2tpU3VtKGNvbnZleDEsIGNvbnZleDIpO1xuXG4gICAgICAgIC8vIGNob29zZSBzb21lIHNlYXJjaCBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXRJbml0aWFsRGlyZWN0aW9uKGNvbnZleDEsIGNvbnZleDIpO1xuXG4gICAgICAgIC8vIHBlcmZvcm0gdGhlIGRldGVjdGlvblxuICAgICAgICBpZiAodGhpcy5kZXRlY3QyKG1zLCBzaW1wbGV4LCBkaXJlY3Rpb24sIGhpc3RvcnkpKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5rb3dza2lQZW5ldHJhdGlvblNvbHZlci5nZXRQZW5ldHJhdGlvbihzaW1wbGV4LCBtcywgcGVuZXRyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbXMge01pbmtvd3NraVN1bX1cbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqIEBwYXJhbSBoaXN0b3J5IHtIaXN0b3J5fSDrlJTrsoTqt7jsmqlcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXRlY3QyKG1zLCBzaW1wbGV4LCBkaXJlY3Rpb24sIGhpc3RvcnkgPSBudWxsKSB7XG4gICAgICAgIC8vIOuUlOuyhOq3uOyaqSDtnojsiqTthqDrpqxcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgzKTtcbiAgICAgICAgLy8gY2hlY2sgZm9yIGEgemVybyBkaXJlY3Rpb24gdmVjdG9yXG4gICAgICAgIGlmIChkaXJlY3Rpb24uaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoMSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHRoZSBmaXJzdCBwb2ludFxuICAgICAgICBzaW1wbGV4WzBdID0gbXMuZ2V0U3VwcG9ydFBvaW50KGRpcmVjdGlvbik7XG4gICAgICAgIGRpcmVjdGlvbnNbMF0gPSBkaXJlY3Rpb247XG4gICAgICAgIC8vIGlzIHRoZSBzdXBwb3J0IHBvaW50IHBhc3QgdGhlIG9yaWdpbiBhbG9uZyBkP1xuICAgICAgICAvLyBzdXBwb3J0IHBvaW50IOuwqe2WpeydhCDrlLDrnbwg7JuQ7KCQ7J2EIOyngOuCmOuKlOyngCDssrTtgawgKOybkOygkOydhCDsp4Drgpjsp4Ag7JWK64qU64uk66m0WClcbiAgICAgICAgaWYgKHNpbXBsZXhbMF0uZG90KGRpcmVjdGlvbikgPD0gMCkge1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5lZ2F0ZSB0aGUgc2VhcmNoIGRpcmVjdGlvblxuICAgICAgICBkaXJlY3Rpb24uaW52ZXJ0KCk7XG4gICAgICAgIC8vIHN0YXJ0IHRoZSBsb29wXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgREVGQVVMVF9NQVhfSVRFUkFUSU9OUzsgaSsrKSB7XG4gICAgICAgICAgICAvLyBhbHdheXMgYWRkIGFub3RoZXIgcG9pbnQgdG8gdGhlIHNpbXBsZXggYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbG9vcFxuICAgICAgICAgICAgc2ltcGxleC5wdXNoKG1zLmdldFN1cHBvcnRQb2ludChkaXJlY3Rpb24pKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbnNbc2ltcGxleC5sZW5ndGggLSAxXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBsYXN0IHBvaW50IHdlIGFkZGVkIHdhcyBwYXN0IHRoZSBvcmlnaW5cbiAgICAgICAgICAgIGlmIChzaW1wbGV4W3NpbXBsZXgubGVuZ3RoIC0gMV0uZG90KGRpcmVjdGlvbikgPD0gREVGQVVMVF9ERVRFQ1RfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgIC8vIGEgaXMgbm90IHBhc3QgdGhlIG9yaWdpbiBzbyB0aGVyZWZvcmUgdGhlIHNoYXBlcyBkbyBub3QgaW50ZXJzZWN0XG4gICAgICAgICAgICAgICAgLy8gaGVyZSB3ZSB0cmVhdCB0aGUgb3JpZ2luIG9uIHRoZSBsaW5lIGFzIG5vIGludGVyc2VjdGlvblxuICAgICAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHJldHVybiB3aXRoIG51bGwgaW5kaWNhdGluZyBubyBwZW5ldHJhdGlvblxuXG4gICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgcGFzdCB0aGUgb3JpZ2luLCB0aGVuIHRlc3Qgd2hldGhlciB0aGUgc2ltcGxleCBjb250YWlucyB0aGUgb3JpZ2luXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tTaW1wbGV4KHNpbXBsZXgsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHNpbXBsZXggY29udGFpbnMgdGhlIG9yaWdpbiB0aGVuIHdlIGtub3cgdGhhdCB0aGVyZSBpcyBhbiBpbnRlcnNlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGJyb2tlIG91dCBvZiB0aGUgbG9vcCB0aGVuIHdlIGtub3cgdGhlcmUgd2FzIGFuIGludGVyc2VjdGlvblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHNpbXBsZXggZG9lcyBub3QgY29udGFpbiB0aGUgb3JpZ2luIHRoZW4gd2UgbmVlZCB0byBsb29wIHVzaW5nIHRoZSBuZXdcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2ggZGlyZWN0aW9uIGFuZCBzaW1wbGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc2ltcGxleCBjb250YWlucyB0aGUgb3JpZ2luLiAgSWYgaXQgZG9lcyBjb250YWluIHRoZSBvcmlnaW4sXG4gICAgICogdGhlbiB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0cnVlLiAgSWYgaXQgZG9lcyBub3QsIHRoaXMgbWV0aG9kIHdpbGwgdXBkYXRlIGJvdGggdGhlIGdpdmVuXG4gICAgICogc2ltcGxleCBhbmQgYWxzbyB0aGUgZ2l2ZW4gc2VhcmNoIGRpcmVjdGlvbi5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIG1ldGhvZCBvbmx5IGhhbmRsZXMgdGhlIGxpbmUgc2VnbWVudCBhbmQgdHJpYW5nbGUgc2ltcGxleCBjYXNlcywgaG93ZXZlciwgdGhlc2UgdHdvIGNhc2VzXG4gICAgICogc2hvdWxkIGJlIHRoZSBvbmx5IG9uZXMgbmVlZGVkIGZvciAyIGRpbWVuc2lvbmFsIHtAbGluayBHamt9LiAgVGhlIHNpbmdsZSBwb2ludCBjYXNlIGlzIGhhbmRsZWRcbiAgICAgKiBpbiB7QGxpbmsgI2RldGVjdChNaW5rb3dza2lTdW0sIExpc3QsIFZlY3RvcjIpfS5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIG1ldGhvZCBhbHNvIGFzc3VtZXMgdGhhdCB0aGUgbGFzdCBwb2ludCBpbiB0aGUgc2ltcGxleCBpcyB0aGUgbW9zdCByZWNlbnRseSBhZGRlZCBwb2ludC5cbiAgICAgKiBUaGlzIG1hdHRlcnMgYmVjYXVzZSBvcHRpbWl6YXRpb25zIGFyZSBhdmFpbGFibGUgd2hlbiB5b3Uga25vdyB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2hlY2tTaW1wbGV4KHNpbXBsZXgsIGRpcmVjdGlvbikge1xuICAgICAgICAvLyB0aGlzIG1ldGhvZCBzaG91bGQgbmV2ZXIgYmUgc3VwcGxpZWQgYW55dGhpbmcgb3RoZXIgdGhhbiAyIG9yIDMgcG9pbnRzIGZvciB0aGUgc2ltcGxleFxuICAgICAgICAvLyBnZXQgdGhlIGxhc3QgcG9pbnQgYWRkZWQgKGEpXG4gICAgICAgIGNvbnN0IGEgPSBzaW1wbGV4W3NpbXBsZXgubGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgYS50byhPUklHSU4pO1xuICAgICAgICBjb25zdCBhbyA9IFZlY3Rvci5uZWdhdGUoYSk7XG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSB3aGF0IHR5cGUgb2Ygc2ltcGxleCB3ZSBoYXZlXG4gICAgICAgIGlmIChzaW1wbGV4Lmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICAvLyB0aGVuIHdlIGhhdmUgYSB0cmlhbmdsZVxuICAgICAgICAgICAgY29uc3QgYiA9IHNpbXBsZXhbMV07XG4gICAgICAgICAgICBjb25zdCBjID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZWRnZXNcbiAgICAgICAgICAgIGNvbnN0IGFiID0gYS50byhiKTtcbiAgICAgICAgICAgIGNvbnN0IGFjID0gYS50byhjKTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZWRnZSBub3JtYWxcbiAgICAgICAgICAgIGNvbnN0IGFjUGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhYywgYWMpO1xuICAgICAgICAgICAgLy8gc2VlIHdoZXJlIHRoZSBvcmlnaW4gaXMgYXRcbiAgICAgICAgICAgIGNvbnN0IGFjTG9jYXRpb24gPSBhY1BlcnAuZG90KGFvKTtcbiAgICAgICAgICAgIGlmIChhY0xvY2F0aW9uID49IDApIHtcbiAgICAgICAgICAgICAgICAvLyDsm5DsoJDsnYAgQSAtPiBD7J2YIOyYpOuluOyqveyXkOyeiOuLpC5cbiAgICAgICAgICAgICAgICAvLyB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIHJpZ2h0IHNpZGUgb2YgQS0+Q1xuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgdGhlIGNvbmRpdGlvbiBmb3IgdGhlIGdqayBsb29wIHRvIGNvbnRpbnVlIHRoZSBvcmlnaW5cbiAgICAgICAgICAgICAgICAvLyBtdXN0IGxpZSBiZXR3ZWVuIEEgYW5kIEMgc28gcmVtb3ZlIEIgYW5kIHNldCB0aGVcbiAgICAgICAgICAgICAgICAvLyBuZXcgc2VhcmNoIGRpcmVjdGlvbiB0byBBLT5DIHBlcnBlbmRpY3VsYXIgdmVjdG9yXG4gICAgICAgICAgICAgICAgc2ltcGxleC5zcGxpY2UoMSwgMSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB1c2VkIHRvIGJlIGRpcmVjdGlvbi5zZXQoVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFvLCBhYykpO1xuICAgICAgICAgICAgICAgIC8vIGJ1dCB3YXMgY2hhbmdlZCBzaW5jZSB0aGUgb3JpZ2luIG1heSBsaWUgb24gdGhlIHNlZ21lbnQgY3JlYXRlZFxuICAgICAgICAgICAgICAgIC8vIGJ5IGEgLT4gYyBpbiB3aGljaCBjYXNlIHdvdWxkIHByb2R1Y2UgYSB6ZXJvIHZlY3RvciBub3JtYWxcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGluZyBhYydzIG5vcm1hbCB1c2luZyBiIGlzIG1vcmUgcm9idXN0XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLnNldChhY1BlcnApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhYlBlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYWIsIGFiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhYkxvY2F0aW9uID0gYWJQZXJwLmRvdChhbyk7XG4gICAgICAgICAgICAgICAgLy8gdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSBsZWZ0IHNpZGUgb2YgQS0+Q1xuICAgICAgICAgICAgICAgIGlmIChhYkxvY2F0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIHJpZ2h0IHNpZGUgb2YgQS0+QiBhbmQgdGhlcmVmb3JlIGluIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB0cmlhbmdsZSwgd2UgaGF2ZSBhbiBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG9yaWdpbiBsaWVzIGJldHdlZW4gQSBhbmQgQiBzbyByZW1vdmUgQyBhbmQgc2V0IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2ggZGlyZWN0aW9uIHRvIEEtPkIgcGVycGVuZGljdWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxleC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgdXNlZCB0byBiZSBkaXJlY3Rpb24uc2V0KFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhbywgYWIpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdhcyBjaGFuZ2VkIHNpbmNlIHRoZSBvcmlnaW4gbWF5IGxpZSBvbiB0aGUgc2VnbWVudCBjcmVhdGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ5IGEgLT4gYiBpbiB3aGljaCBjYXNlIHdvdWxkIHByb2R1Y2UgYSB6ZXJvIHZlY3RvciBub3JtYWxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRpbmcgYWIncyBub3JtYWwgdXNpbmcgYyBpcyBtb3JlIHJvYnVzdFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24uc2V0KGFiUGVycCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBiIHBvaW50XG4gICAgICAgICAgICBjb25zdCBiID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgIGNvbnN0IGFiID0gYS50byhiKTtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSB3ZSBoYXZlIDIgcG9pbnRzIChsaW5lIHNlZ21lbnQpXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9mIHRoZSBjb25kaXRpb24gZm9yIHRoZSBnamsgbG9vcCB0byBjb250aW51ZSB0aGUgb3JpZ2luXG4gICAgICAgICAgICAvLyBtdXN0IGxpZSBpbiBiZXR3ZWVuIEEgYW5kIEIsIHNvIGtlZXAgYm90aCBwb2ludHMgaW4gdGhlIHNpbXBsZXggYW5kXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGRpcmVjdGlvbiB0byB0aGUgcGVycCBvZiB0aGUgbGluZSBzZWdtZW50IHRvd2FyZHMgdGhlIG9yaWdpblxuICAgICAgICAgICAgZGlyZWN0aW9uLnNldChWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKSk7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgZGVnZW5lcmF0ZSBjYXNlcyB3aGVyZSB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIHNlZ21lbnRcbiAgICAgICAgICAgIC8vIGNyZWF0ZWQgYnkgYSAtPiBiIHdoaWNoIHdpbGwgeWllbGQgYSB6ZXJvIGVkZ2Ugbm9ybWFsXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLmdldE1hZ25pdHVkZVNxdWFyZWQoKSA8PSBFcHNpbG9uLkUpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UganVzdCBjaG9vc2UgZWl0aGVyIG5vcm1hbCAobGVmdCBvciByaWdodClcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24uc2V0KGFiLmxlZnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9HamsuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvbiB7XG5cbiAgICBzdGF0aWMgZ2V0IEUoKSB7XG4gICAgICAgIHJldHVybiBFcHNpbG9uLmNvbXB1dGUoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcHV0ZSgpIHtcbiAgICAgICAgbGV0IGUgPSAwLjU7XG4gICAgICAgIHdoaWxlICgxLjAgKyBlID4gMS4wKSB7XG4gICAgICAgICAgICBlICo9IDAuNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0Vwc2lsb24uanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlua293c2tpU3VtIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb252ZXgxIOy2qeuPjCDssrTtgaztlaAg64+E7ZiVIDFcbiAgICAgKiBAcGFyYW0gY29udmV4MiDstqnrj4wg7LK07YGs7ZWgIOuPhO2YlSAyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udmV4MSwgY29udmV4Mikge1xuICAgICAgICB0aGlzLmNvbnZleDEgPSBjb252ZXgxO1xuICAgICAgICB0aGlzLmNvbnZleDIgPSBjb252ZXgyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHN1cHBvcnRQb2ludCDrpbwg6rWs7ZWp64uI64ukLiAo7Ius7ZSM66CJ7IqkIOunjOuTpOq4sClcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICovXG4gICAgZ2V0U3VwcG9ydFBvaW50KGRpcmVjdGlvbikge1xuICAgICAgICAvLyBnZXQgdGhlIGZhcnRoZXN0IHBvaW50IGluIHRoZSBnaXZlbiBkaXJlY3Rpb24gaW4gY29udmV4MVxuICAgICAgICBjb25zdCBwb2ludDEgPSB0aGlzLmNvbnZleDEuZ2V0RmFydGhlc3RQb2ludChkaXJlY3Rpb24pO1xuICAgICAgICAvLyBnZXQgdGhlIGZhcnRoZXN0IHBvaW50IGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gaW4gY29udmV4MlxuICAgICAgICBjb25zdCBwb2ludDIgPSB0aGlzLmNvbnZleDIuZ2V0RmFydGhlc3RQb2ludChWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuICAgICAgICAvLyByZXR1cm4gdGhlIE1pbmtvd3NraSBzdW0gcG9pbnRcbiAgICAgICAgcmV0dXJuIHBvaW50MS5zdWJ0cmFjdChwb2ludDIpO1xuICAgIH1cblxuICAgIGdldENvbnZleDEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZleDE7XG4gICAgfVxuXG4gICAgZ2V0Q29udmV4MigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmV4MjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL01pbmtvd3NraVN1bS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBQcmlvcml0eVF1ZXVlIGZyb20gJ3N0YWJsZXByaW9yaXR5cXVldWUnO1xuaW1wb3J0IEV4cGFuZGluZ1NpbXBsZXhFZGdlIGZyb20gJy4vRXhwYW5kaW5nU2ltcGxleEVkZ2UnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGFuZGluZ1NpbXBsZXgge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2ltcGxleCkge1xuICAgICAgICB0aGlzLndpbmRpbmcgPSB0aGlzLmdldFdpbmRpbmcoc2ltcGxleCk7XG5cbiAgICAgICAgdGhpcy5xdWV1ZSA9IG5ldyBQcmlvcml0eVF1ZXVlKChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5kaXN0YW5jZSA8IGIuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS5kaXN0YW5jZSA+IGIuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzaXplID0gc2ltcGxleC5sZW5ndGg7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3NpemUnLCBzaXplKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbXB1dGUgalxuICAgICAgICAgICAgbGV0IGogPSBpICsgMSA9PSBzaXplID8gMCA6IGkgKyAxO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBwb2ludHMgdGhhdCBtYWtlIHVwIHRoZSBjdXJyZW50IGVkZ2VcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzaW1wbGV4W2ldXG4gICAgICAgICAgICAgICAgLCBiID0gc2ltcGxleFtqXTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZWRnZVxuICAgICAgICAgICAgdGhpcy5xdWV1ZS5hZGQobmV3IEV4cGFuZGluZ1NpbXBsZXhFZGdlKGEsIGIsIHRoaXMud2luZGluZykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMucXVldWUuc2l6ZScsIHRoaXMucXVldWUuc2l6ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsi6ztlIzroInsiqTsl5Ag7KO87Ja07KeEIOuwqe2WpeydhCDrpqzthLTtlanri4jri6QuXG4gICAgICpcbiAgICAgKiAtMSDsi5zqs4Qg67Cp7ZalXG4gICAgICogMSDrsJgg7Iuc6rOEIOuwqe2WpVxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBnZXRXaW5kaW5nKHNpbXBsZXgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHNpbXBsZXgubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaiA9IGkgKyAxID09PSBzaXplID8gMCA6IGkgKyAxO1xuICAgICAgICAgICAgY29uc3QgYSA9IHNpbXBsZXhbaV1cbiAgICAgICAgICAgICAgICAsIGIgPSBzaW1wbGV4W2pdO1xuXG4gICAgICAgICAgICBpZiAoYS5jcm9zcyhiKSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyDsmbjsoIHsnYQg7Ya17ZW0IOyZuOyggSDqsJLsnbQg7JaR7IiY66m0IOuwmOyLnOqzhCDrsKntlqVcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5jcm9zcyhiKSA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyDsnYzsiJjrqbQg67CY7Iuc6rOEIOuwqe2WpVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtFeHBhbmRpbmdTaW1wbGV4RWRnZX1cbiAgICAgKi9cbiAgICBnZXRDbG9zZXN0RWRnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWUucGVlaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBvaW50IHtWZWN0b3J9XG4gICAgICovXG4gICAgZXhwYW5kKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSB0aGlzLnF1ZXVlLnBvbGwoKTtcbiAgICAgICAgY29uc3QgZWRnZTEgPSBuZXcgRXhwYW5kaW5nU2ltcGxleEVkZ2UoZWRnZS5wb2ludDEsIHBvaW50LCB0aGlzLndpbmRpbmcpO1xuICAgICAgICBjb25zdCBlZGdlMiA9IG5ldyBFeHBhbmRpbmdTaW1wbGV4RWRnZShwb2ludCwgZWRnZS5wb2ludDIsIHRoaXMud2luZGluZyk7XG4gICAgICAgIHRoaXMucXVldWUuYWRkKGVkZ2UxKTtcbiAgICAgICAgdGhpcy5xdWV1ZS5hZGQoZWRnZTIpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9FeHBhbmRpbmdTaW1wbGV4LmpzIiwiLyoqXG4gKiBTdGFibGVQcmlvcml0eVF1ZXVlLmpzIDogYSBzdGFibGUgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSAgaW4gSmF2YVNjcmlwdC5cbiAqIChjKSB0aGUgYXV0aG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqXG4gKiBTdGFibGUgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSBmb3IgbW9kZXJuIGJyb3dzZXJzIGFuZCBKYXZhU2NyaXB0IGVuZ2luZXMuXG4gKlxuICogVXNhZ2UgOlxuICAgICAgICAgSW5zdGFsbGF0aW9uIChpbiBzaGVsbCwgaWYgeW91IHVzZSBub2RlKTpcbiAgICAgICAgICQgbnBtIGluc3RhbGwgc3RhYmxlcHJpb3JpdHlxdWV1ZVxuXG4gICAgICAgICBSdW5uaW5nIHRlc3QgcHJvZ3JhbSAoaW4gSmF2YVNjcmlwdCk6XG5cbiAgICAgICAgIC8vIHZhciBTdGFibGVQcmlvcml0eVF1ZXVlID0gcmVxdWlyZShcInN0YWJsZXByaW9yaXR5cXVldWVcIik7Ly8gaW4gbm9kZVxuICAgICAgICAgdmFyIHggPSBuZXcgU3RhYmxlUHJpb3JpdHlRdWV1ZSgpO1xuICAgICAgICAgeC5hZGQoMSk7XG4gICAgICAgICB4LmFkZCgwKTtcbiAgICAgICAgIHguYWRkKDUpO1xuICAgICAgICAgeC5hZGQoNCk7XG4gICAgICAgICB4LmFkZCgzKTtcbiAgICAgICAgIHgucGVlaygpOyAvLyBzaG91bGQgcmV0dXJuIDAsIGxlYXZlcyB4IHVuY2hhbmdlZFxuICAgICAgICAgeC5zaXplOyAvLyBzaG91bGQgcmV0dXJuIDUsIGxlYXZlcyB4IHVuY2hhbmdlZFxuICAgICAgICAgd2hpbGUoIXguaXNFbXB0eSgpKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKHgucG9sbCgpKTtcbiAgICAgICAgIH0gLy8gd2lsbCBwcmludCAwIDEgMyA0IDVcbiAgICAgICAgIHgudHJpbSgpOyAvLyAob3B0aW9uYWwpIG9wdGltaXplcyBtZW1vcnkgdXNhZ2VcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZWZhdWx0Y29tcGFyYXRvciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuICAgYSA8IGIgPyAtMSA6IChhID4gYiA/IDEgOiAwKSA7XG59O1xuXG5cbi8vIHRoZSBwcm92aWRlZCBjb21wYXJhdG9yIGZ1bmN0aW9uIHNob3VsZCB0YWtlIGEsIGIgYW5kIHJldHVybiBhIG5lZ2F0aXZlIG51bWJlciB3aGVuIGEgPCBiIGFuZCBlcXVhbGl0eSB3aGVuIGEgPT0gYlxuZnVuY3Rpb24gU3RhYmxlUHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgdGhpcy5ydW5uaW5nY291bnRlciA9IDA7XG4gICAgdGhpcy5jb21wYXJlID0gY29tcGFyYXRvciB8fCBkZWZhdWx0Y29tcGFyYXRvcjtcbiAgICB0aGlzLnN0YWJsZV9jb21wYXJlID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGNtcCA9IHRoaXMuY29tcGFyZShhLnZhbHVlLGIudmFsdWUpO1xuICAgICAgcmV0dXJuIChjbXAgPCAwKSB8fCAoIChjbXAgPT0gMCkgJiYgKGEuY291bnRlciA8IGIuY291bnRlcikgKTtcbiAgICB9XG59XG5cbi8vIFRoZSBzdGFibGUgcXVldWUgdXNlcyBpbnRlcm5hbCBjb3VudGVycywgdGhpcyByZXBhY2tzIHRoZW1cbi8vIHJ1bnMgaW4gTyhuKSB0aW1lLCBjYWxsZWQgYXV0b21hdGljYWxseSBhcyBuZWVkZWRcblN0YWJsZVByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbnVtYmVyID0gZnVuY3Rpb24gKG15dmFsKSB7XG4gICAgICAvLyB0aGUgY291bnRlciBpcyBleGhhdXN0ZWQsIGxldCB1cyByZXBhY2sgdGhlIG51bWJlcnNcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uIGhlcmUgaXMgcHJvYmFibHkgbm90IG9wdGltYWwgcGVyZm9ybWFuY2Utd2lzZVxuICAgICAgLy8gd2UgZmlyc3QgZW1wdHkgdGhlIGNvbnRlbnRcbiAgICAgIHZhciBidWZmZXIgPSBbXTtcbiAgICAgIHZhciBqLCBzaXplO1xuICAgICAgd2hpbGUoISB0aGlzLmlzRW1wdHkoKSApIHtcbiAgICAgICAgYnVmZmVyLnB1c2godGhpcy5wb2xsKCkpO1xuICAgICAgfVxuICAgICAgc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICB0aGlzLnJ1bm5pbmdjb3VudGVyID0gMDsgLy8gYmVjYXVzZSB0aGUgYnVmZmVyIGlzIHNhZmUsIHRoaXMgaXMgbm93IHNhZmVcbiAgICAgIC8vIGFuZCB3ZSByZWluc2VydCBpdFxuICAgICAgZm9yIChqID0gMDsgaiA8IHNpemUgOyBqKyspIHtcbiAgICAgICAgdGhpcy5hZGQoYnVmZmVyW2pdKTtcbiAgICAgIH1cbn1cblxuLy8gQWRkIGFuIGVsZW1lbnQgdGhlIHRoZSBxdWV1ZVxuLy8gcnVucyBpbiBPKGxvZyBuKSB0aW1lXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobXl2YWwpIHtcbiAgICB2YXIgaSA9IHRoaXMuc2l6ZTtcbiAgICBpZiAoIHRoaXMucnVubmluZ2NvdW50ZXIgKyAxID09IDApIHtcbiAgICAgIHRoaXMucmVudW1iZXIoKTtcbiAgICB9XG4gICAgdmFyIGV4dGVuZGVkbXl2YWwgPSB7dmFsdWU6IG15dmFsLCBjb3VudGVyOiB0aGlzLnJ1bm5pbmdjb3VudGVyfTtcbiAgICB0aGlzLmFycmF5W3RoaXMuc2l6ZV0gPSBleHRlbmRlZG15dmFsO1xuICAgIHRoaXMucnVubmluZ2NvdW50ZXIgKz0gMTtcbiAgICB0aGlzLnNpemUgKz0gMTtcbiAgICB2YXIgcDtcbiAgICB2YXIgYXA7XG4gICAgdmFyIGNtcDtcbiAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgcCA9IChpIC0gMSkgPj4gMTtcbiAgICAgICAgYXAgPSB0aGlzLmFycmF5W3BdO1xuICAgICAgICBpZiAoIXRoaXMuc3RhYmxlX2NvbXBhcmUoZXh0ZW5kZWRteXZhbCwgYXApKSB7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJheVtpXSA9IGFwO1xuICAgICAgICBpID0gcDtcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IGV4dGVuZGVkbXl2YWw7XG59O1xuXG4vLyBmb3IgaW50ZXJuYWwgdXNlXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcGVyY29sYXRlVXAgPSBmdW5jdGlvbiAoaSkge1xuICAgIHZhciBteXZhbCA9IHRoaXMuYXJyYXlbaV07XG4gICAgdmFyIHA7XG4gICAgdmFyIGFwO1xuICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICBwID0gKGkgLSAxKSA+PiAxO1xuICAgICAgICBhcCA9IHRoaXMuYXJyYXlbcF07XG4gICAgICAgIGlmICghdGhpcy5zdGFibGVfY29tcGFyZShteXZhbCwgYXApKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFycmF5W2ldID0gYXA7XG4gICAgICAgIGkgPSBwO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gbXl2YWw7XG59O1xuXG5cbi8vIGZvciBpbnRlcm5hbCB1c2VcblN0YWJsZVByaW9yaXR5UXVldWUucHJvdG90eXBlLl9wZXJjb2xhdGVEb3duID0gZnVuY3Rpb24gKGkpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB2YXIgaHNpemUgPSB0aGlzLnNpemUgPj4+IDE7XG4gICAgdmFyIGFpID0gdGhpcy5hcnJheVtpXTtcbiAgICB2YXIgbDtcbiAgICB2YXIgcjtcbiAgICB2YXIgYmVzdGM7XG4gICAgd2hpbGUgKGkgPCBoc2l6ZSkge1xuICAgICAgICBsID0gKGkgPDwgMSkgKyAxO1xuICAgICAgICByID0gbCArIDE7XG4gICAgICAgIGJlc3RjID0gdGhpcy5hcnJheVtsXTtcbiAgICAgICAgaWYgKHIgPCBzaXplKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGFibGVfY29tcGFyZSh0aGlzLmFycmF5W3JdLCBiZXN0YykpIHtcbiAgICAgICAgICAgICAgICBsID0gcjtcbiAgICAgICAgICAgICAgICBiZXN0YyA9IHRoaXMuYXJyYXlbcl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YWJsZV9jb21wYXJlKGJlc3RjLGFpKSkgIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJyYXlbaV0gPSBiZXN0YztcbiAgICAgICAgaSA9IGw7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBhaTtcbn07XG5cbi8vIExvb2sgYXQgdGhlIHRvcCBvZiB0aGUgcXVldWUgKGEgc21hbGxlc3QgZWxlbWVudClcbi8vIGV4ZWN1dGVzIGluIGNvbnN0YW50IHRpbWVcbi8vXG4vLyBDYWxsaW5nIHBlZWsgb24gYW4gZW1wdHkgcHJpb3JpdHkgcXVldWUgcmV0dXJuc1xuLy8gdGhlIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLmFycmF5WzBdLnZhbHVlO1xufTtcblxuLy8gcmVtb3ZlIHRoZSBlbGVtZW50IG9uIHRvcCBvZiB0aGUgaGVhcCAoYSBzbWFsbGVzdCBlbGVtZW50KVxuLy8gcnVucyBpbiBsb2dhcml0aG1pYyB0aW1lXG4vL1xuLy8gSWYgdGhlIHByaW9yaXR5IHF1ZXVlIGlzIGVtcHR5LCB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGVcbi8vIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG4vLyBGb3IgbG9uZy1ydW5uaW5nIGFuZCBsYXJnZSBwcmlvcml0eSBxdWV1ZXMsIG9yIHByaW9yaXR5IHF1ZXVlc1xuLy8gc3RvcmluZyBsYXJnZSBvYmplY3RzLCB5b3UgbWF5ICB3YW50IHRvIGNhbGwgdGhlIHRyaW0gZnVuY3Rpb25cbi8vIGF0IHN0cmF0ZWdpYyB0aW1lcyB0byByZWNvdmVyIGFsbG9jYXRlZCBtZW1vcnkuXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNpemUgPT0gMClcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgYW5zID0gdGhpcy5hcnJheVswXTtcbiAgICBpZiAodGhpcy5zaXplID4gMSkge1xuICAgICAgICB0aGlzLmFycmF5WzBdID0gdGhpcy5hcnJheVstLXRoaXMuc2l6ZV07XG4gICAgICAgIHRoaXMuX3BlcmNvbGF0ZURvd24oMCB8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2l6ZSAtPSAxO1xuICAgIH1cbiAgICByZXR1cm4gYW5zLnZhbHVlO1xufTtcblxuXG4vLyByZWNvdmVyIHVudXNlZCBtZW1vcnkgKGZvciBsb25nLXJ1bm5pbmcgcHJpb3JpdHkgcXVldWVzKVxuU3RhYmxlUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5zbGljZSgwLCB0aGlzLnNpemUpO1xufTtcblxuLy8gQ2hlY2sgd2hldGhlciB0aGUgaGVhcCBpcyBlbXB0eVxuU3RhYmxlUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAwO1xufTtcblxuXG4vLyBqdXN0IGZvciBpbGx1c3RyYXRpb24gcHVycG9zZXNcbnZhciBtYWluID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIG1haW4gY29kZVxuICAgIHZhciB4ID0gbmV3IFN0YWJsZVByaW9yaXR5UXVldWUoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEubmFtZSA8IGIubmFtZSA/IC0xIDogKGEubmFtZSA+IGIubmFtZSA/IDEgOiAwKSA7XG4gICAgfSk7XG4gICAgeC5hZGQoe25hbWU6XCJKYWNrXCIsIGFnZTozMX0pO1xuICAgIHguYWRkKHtuYW1lOlwiQW5uYVwiLCBhZ2U6MTExfSk7XG4gICAgeC5hZGQoe25hbWU6XCJKYWNrXCIsIGFnZTo0Nn0pO1xuICAgIHguYWRkKHtuYW1lOlwiSmFja1wiLCBhZ2U6MTF9KTtcbiAgICB4LmFkZCh7bmFtZTpcIkFiYmFcIiwgYWdlOjMxfSk7XG4gICAgeC5hZGQoe25hbWU6XCJBYmJhXCIsIGFnZTozMH0pO1xuICAgIHdoaWxlICgheC5pc0VtcHR5KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICAgIH1cbiAgICB4ID0gbmV3IFN0YWJsZVByaW9yaXR5UXVldWUoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiBhLmVuZXJneSAtIGIuZW5lcmd5O1xuICAgIH0pO1xuICAgIFt7IG5hbWU6ICdwbGF5ZXInLCBlbmVyZ3k6IDEwfSxcbiAgICAgeyBuYW1lOiAnbW9uc3RlcjEnLCBlbmVyZ3k6IDEwfSxcbiAgICAgeyBuYW1lOiAnbW9uc3RlcjInLCBlbmVyZ3k6IDEwfSxcbiAgICAgeyBuYW1lOiAnbW9uc3RlcjMnLCBlbmVyZ3k6IDEwfVxuICAgIF0uZm9yRWFjaChmdW5jdGlvbihvKXtcbiAgICAgICAgICB4LmFkZChvKTtcbiAgICB9KVxuICAgIHdoaWxlICgheC5pc0VtcHR5KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICAgIH1cblxufTtcblxuaWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4gICAgbWFpbigpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWJsZVByaW9yaXR5UXVldWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RhYmxlcHJpb3JpdHlxdWV1ZS9TdGFibGVQcmlvcml0eVF1ZXVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgOCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBhbmRpbmdTaW1wbGV4RWRnZSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcG9pbnQxIHtWZWN0b3J9XG4gICAgICogQHBhcmFtIHBvaW50MiB7VmVjdG9yfVxuICAgICAqIEBwYXJhbSB3aW5kaW5nIHtudW1iZXJ9IC0xIOyLnOqzhCDrsKntlqUsIDEg67CY7Iuc6rOEIOuwqe2WpVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBvaW50MSwgcG9pbnQyLCB3aW5kaW5nKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZWRnZVxuICAgICAgICAvLyBpbmxpbmUgYiAtIGFcbiAgICAgICAgdGhpcy5ub3JtYWwgPSBuZXcgVmVjdG9yKHBvaW50Mi54IC0gcG9pbnQxLngsIHBvaW50Mi55IC0gcG9pbnQxLnkpO1xuXG4gICAgICAgIC8vIOyZgOyduOuUqeyXkCDrlLDrnbwg6rCA7J6l7J6Q66as6rCAIOygleyDgeyggeycvOuhnOuQqeuLiOuLpC5cbiAgICAgICAgLy8gVmVjdG9yLnRyaXBsZVByb2R1Y3QgKGFiLCBhbywgYWIp66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg7KKL7Iq164uI64ukLlxuICAgICAgICAvLyBhYuuKlCDqsIDsnqXsnpDrpqzsnbTqs6AgYW/ripQgYS50byAoT1JJR0lOKeydtOyngOunjCDsnbTqsoPsnYBcbiAgICAgICAgLy8g7JuQ7KCQ7J20IGFiIOyEuOq3uOuovO2KuOyXkCDsnojsnLzrqbQg7J6Y66q765CcIOuyleyEoOydhCDrsJjtmZjtlanri4jri6QuXG4gICAgICAgIC8vIOq3uOufrOuvgOuhnCDsmrDrpqzripQg7Ius7ZSM7J2YIOyZgOyduOuUqeydhCDsgqzsmqntlZjsl6xcbiAgICAgICAgLy8g67KV7ISgIOuwqe2WpVxuICAgICAgICAvLyDspoksIOybkOygkeycvOuhnCDtlqXtlZjripQgbm9ybWFsIOuwse2EsOulvCDrp4zrk63ri4jri6QuXG4gICAgICAgIGlmICh3aW5kaW5nIDwgMCkge1xuICAgICAgICAgICAgLy8g7Iuc6rOEIOuwqe2WpeydtOuptCDsmKTrpbjsqr1cbiAgICAgICAgICAgIHRoaXMubm9ybWFsLnJpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDrsJjsi5zqs4Qg67Cp7Zal7J2066m0IOyZvOyqvVxuICAgICAgICAgICAgdGhpcy5ub3JtYWwubGVmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3JtYWwubm9ybWFsaXplKCk7XG5cbiAgICAgICAgLy8gZG91YmxlIGQgPSBNYXRoLmFicyhhLmRvdChub3JtYWwpKVxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5hYnMocG9pbnQxLnggKiB0aGlzLm5vcm1hbC54ICsgcG9pbnQxLnkgKiB0aGlzLm5vcm1hbC55KTtcbiAgICAgICAgdGhpcy5wb2ludDEgPSBwb2ludDE7XG4gICAgICAgIHRoaXMucG9pbnQyID0gcG9pbnQyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG8ge0V4cGFuZGluZ1NpbXBsZXhFZGdlfVxuICAgICAqL1xuICAgIGNvbXBhcmVUbyhvKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3RhbmNlIDwgby5kaXN0YW5jZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAodGhpcy5kaXN0YW5jZSA+IG8uZGlzdGFuY2UpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0V4cGFuZGluZ1NpbXBsZXhFZGdlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IEVwc2lsb24gZnJvbSAnLi9FcHNpbG9uJztcbmltcG9ydCBFeHBhbmRpbmdTaW1wbGV4IGZyb20gJy4vRXhwYW5kaW5nU2ltcGxleCc7XG5cblxuY29uc3QgREVGQVVMVF9NQVhfSVRFUkFUSU9OUyA9IDEwMFxuICAgICwgREVGQVVMVF9ESVNUQU5DRV9FUFNJTE9OID0gTWF0aC5zcXJ0KEVwc2lsb24uRSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBhIHtcblxuICAgIHN0YXRpYyBnZXQgREVGQVVMVF9NQVhfSVRFUkFUSU9OUygpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfTUFYX0lURVJBVElPTlM7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBERUZBVUxUX0RJU1RBTkNFX0VQU0lMT04oKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX0RJU1RBTkNFX0VQU0lMT047XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9ucyA9IERFRkFVTFRfTUFYX0lURVJBVElPTlM7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VFcHNpbG9uID0gREVGQVVMVF9ESVNUQU5DRV9FUFNJTE9OO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUEEnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21heEl0ZXJhdGlvbnMnLCB0aGlzLm1heEl0ZXJhdGlvbnMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGlzdGFuY2VFcHNpbG9uJywgdGhpcy5kaXN0YW5jZUVwc2lsb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOy5qO2IrCDqsrDqs7zrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIOyLnOyekeygkCBHSksg7J2YIFNpbXBsZXgg66GcIOyLnOyeke2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIG1pbmtvd3NraVN1bSB7TWlua293c2tpU3VtfVxuICAgICAqIEBwYXJhbSBwZW5ldHJhdGlvbiB7UGVuZXRyYXRpb259XG4gICAgICovXG4gICAgZ2V0UGVuZXRyYXRpb24oc2ltcGxleCwgbWlua293c2tpU3VtLCBwZW5ldHJhdGlvbikge1xuICAgICAgICAvLyBFeHBhZGluZ1NpbXBsZXjrpbwg7IOd7ISx7ZWY7JesIEVkZ2Ug7J2YIG5vcm1hbCDqs7wgZGVwdGgg66W8IOyDneyEse2VqeuLiOuLpC5cbiAgICAgICAgY29uc3Qgc21wbHggPSBuZXcgRXhwYW5kaW5nU2ltcGxleChzaW1wbGV4KVxuICAgICAgICAgICAgLCBwZWVrID0gc21wbHgucXVldWUucGVlaygpO1xuICAgICAgICBsZXQgZWRnZSA9IG51bGwsIHBvaW50ID0gbnVsbDtcblxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0UGVuZXRyYXRpb24nLCAnc21wbHguc2l6ZScsIHNtcGx4LnF1ZXVlLnNpemUpO1xuXG4gICAgICAgIC8vIEdKSyDsnZgg7Lap64+MIOqysOqzvOydmCBTaW1wbGV4IOuhnCDsi5zsnpHtlanri4jri6QuXG4gICAgICAgIC8vIFByaW9yaXR5UXVldWUg66GcIOqwgOyepSDqt7zsoJHtlakgRWRnZSDsnZggbm9ybWFsIOuhnCBzdXBwb3J0IO2VqOyImOulvCDthrXtlbQgc2ltcGxleCDrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAgICAvLyBzaW1wbGV466W8IOqwgOyepSDqt7zsoJHtlZwgRWRnZSBub3JtYWwg7JeQIHByb2plY3Rpb24g7J2EIO2VqeuLiOuLpC5cbiAgICAgICAgLy8g6rCA7J6lIOq3vOygke2VnCBlZGdlIOydmCDquYrsnbTsmYAg7Yis7JiBIOqxsOumrOqwgCDtl4jsmqkg7Jik7LCoIOyViOyXkCDsnojsnLzrqbQg7Lmo7YisIG5vcm1hbCDqs7wg6rGw66as66W8IOulvCDqtaztlZwg6rKD7J6F64uI64ukLlxuICAgICAgICAvLyDtl4jsmqkg7Jik7LCo7JeQIOyeiOyngCDslYrri6TripQg6rG0IEVkZ2Ug6rCAIOuzvOuhne2VmOyngCDslYrri6TripQg6rKD7J207Jes7IScIOuzvOuhne2VmOuPhOuhnSDtmZXsnqXtlanri4jri6QuXG4gICAgICAgIC8vIO2Zleyepe2VoCDrlYzripQg6rCA7J6lIOqwgOq5jOyatCBFZGdlIOyCrOydtOyXkCDsg4gg7KCQ7J2EIOy2lOqwgO2VtOyVvO2VqeuLiOuLpC5cbiAgICAgICAgLy8g7J2066CH6rKMIO2VmOuptCDrqqjslpHsnbQg67O866Gd7ZWY6rKMIOycoOyngOuQqeuLiOuLpC5cbiAgICAgICAgLy8g67O866Gd7ZWY6rKMIO2ZleyepSDtlZwg7ZuEIOuLpOyLnCDqsIDsnqUg6re87KCR7ZWcIEVkZ2Ug66W8IOq1rO2VmOqzoFxuICAgICAgICAvLyDtlbTri7kgbm9ybWFsIOuhnCBzdXBwb3J0IO2VqOyImOulvCDthrXtlbQgc2ltcGxleCDrpbwg6rWs7ZW07IScIOqwgOyepSDqt7zsoJHtlZwgRWRnZSDsnZgg6rmK7J207JmAIO2IrOyYgSDqsbDrpqzqsIAg7Jik7LCoIOyViOyXkCDsnojripTsp4Ag7LK07YGsXG4gICAgICAgIC8vIO2XiOyaqSDsmKTssKjrqbQg7ZW064u5IEVkZ2Ugbm9ybWFsIOqzvCDtlITroZzsoJ3shZjsnbQg7Lmo7YisIOqxsOumrOqwgCDrkKnri4jri6QuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIGVkZ2UgPSBzbXBseC5nZXRDbG9zZXN0RWRnZSgpO1xuICAgICAgICAgICAgcG9pbnQgPSBtaW5rb3dza2lTdW0uZ2V0U3VwcG9ydFBvaW50KGVkZ2Uubm9ybWFsKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IHBvaW50LmRvdChlZGdlLm5vcm1hbCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksICdlZGdlLmRpc3RhbmNlOicsIGVkZ2UuZGlzdGFuY2UsICdwcm9qZWN0aW9uJywgcHJvamVjdGlvbiwgJyhwcm9qZWN0aW9uIC0gZWRnZS5kaXN0YW5jZSknLCAocHJvamVjdGlvbiAtIGVkZ2UuZGlzdGFuY2UpKTtcbiAgICAgICAgICAgIGlmICgocHJvamVjdGlvbiAtIGVkZ2UuZGlzdGFuY2UpIDwgdGhpcy5kaXN0YW5jZUVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICBwZW5ldHJhdGlvbi5ub3JtYWwgPSBlZGdlLm5vcm1hbDtcbiAgICAgICAgICAgICAgICBwZW5ldHJhdGlvbi5kZXB0aCA9IHByb2plY3Rpb247XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZW5ldHJhdGlvbicsIHBlbmV0cmF0aW9uLm5vcm1hbCwgcGVuZXRyYXRpb24uZGVwdGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BlZWsnLCBwZWVrLm5vcm1hbCwgcGVlay5kaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNtcGx4LmV4cGFuZChwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICBwZW5ldHJhdGlvbi5ub3JtYWwgPSBlZGdlLm5vcm1hbDtcbiAgICAgICAgcGVuZXRyYXRpb24uZGVwdGggPSBwb2ludC5kb3QoZWRnZS5ub3JtYWwpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwZW5ldHJhdGlvbicsIHBlbmV0cmF0aW9uLm5vcm1hbCwgcGVuZXRyYXRpb24uZGVwdGgpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygncGVlaycsIHBlZWsubm9ybWFsLCBwZWVrLmRpc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICB9XG5cbiAgICBnZXRNeEl0cmF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4SXRlcmF0aW9ucztcbiAgICB9XG5cbiAgICBzZXRNYXhJdGVyYXRpb25zKG1heEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgaWYgKG1heEl0ZXJhdGlvbnMgPCA1KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbGxpc2lvbi5uYXJyb3dwaGFzZS5lcGEuaW52YWxpZE1heGltdW1JdGVyYXRpb25zJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhJdGVyYXRpb25zID0gbWF4SXRlcmF0aW9ucztcbiAgICB9XG5cbiAgICBnZXREaXN0YW5jZUVwc2lsb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlRXBzaWxvbjtcbiAgICB9XG5cbiAgICBzZXREaXN0YW5jZUVwc2lsb24oZGlzdGFuY2VFcHNpbG9uKSB7XG4gICAgICAgIGlmIChkaXN0YW5jZUVwc2lsb24gPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb2xsaXNpb24ubmFycm93cGhhc2UuZXBhLmludmFsaWREaXN0YW5jZUVwc2lsb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3RhbmNlRXBzaWxvbiA9IGRpc3RhbmNlRXBzaWxvbjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovRXBhLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBDb252ZXggZnJvbSAnLi9Db252ZXgnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEdlb21ldHJ5IGZyb20gJy4vR2VvbWV0cnknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBDb252ZXgge1xuXG4gICAgLyoqXG4gICAgICog7Y+066as6rOkXG4gICAgICogQHBhcmFtIGNlbnRlciB7VmVjdG9yfVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIG5vcm1hbHMge1ZlY3RvcltdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzID0gW10sIG5vcm1hbHMgPSBbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgICAgIHRoaXMubm9ybWFscyA9ICh2ZXJ0aWNlcy5sZW5ndGggIT09IDApID9cbiAgICAgICAgICAgIEdlb21ldHJ5LmdldENvdW50ZXJDbG9ja3dpc2VFZGdlTm9ybWFscyh2ZXJ0aWNlcykgOiBub3JtYWxzO1xuICAgICAgICB0aGlzLmNlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0Q2VudGVyKCkge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG4gICAgICAgICAgICAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgYXZnLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2Zy55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhdmcueCAvPSBjb3VudDtcbiAgICAgICAgYXZnLnkgLz0gY291bnQ7XG4gICAgICAgIHJldHVybiBhdmc7XG4gICAgfVxuXG4gICAgZ2V0RmFydGhlc3RQb2ludChkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIC8vIHNldCB0aGUgZmFydGhlc3QgcG9pbnQgdG8gdGhlIGZpcnN0IG9uZVxuICAgICAgICBwb2ludC5zZXQodGhpcy52ZXJ0aWNlc1swXSk7XG4gICAgICAgIC8vIHByaW1lIHRoZSBwcm9qZWN0aW9uIGFtb3VudFxuICAgICAgICBsZXQgbWF4ID0gZGlyZWN0aW9uLmRvdCh0aGlzLnZlcnRpY2VzWzBdKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXVxuICAgICAgICAgICAgICAgICwgcHJvamVjdGlvbiA9IGRpcmVjdGlvbi5kb3QodmVydGV4KTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3Rpb24gPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBwb2ludC5zZXQodmVydGV4KTtcbiAgICAgICAgICAgICAgICBtYXggPSBwcm9qZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgIH1cblxuICAgIGdldEZhcnRoZXN0RmVhdHVyZShkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgbWF4aW11bSA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgbGV0IG1heCA9IC1OdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHZlcnRleFxuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgc2NhbGFyIHByb2plY3Rpb24gb2YgdiBvbnRvIGF4aXNcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBkaXJlY3Rpb24uZG90KHZlcnRleCk7XG4gICAgICAgICAgICAvLyBrZWVwIHRoZSBtYXhpbXVtIHByb2plY3Rpb24gcG9pbnRcbiAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBtYXggcG9pbnRcbiAgICAgICAgICAgICAgICBtYXhpbXVtLnNldCh2KTtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIG5ldyBtYXhpbXVtXG4gICAgICAgICAgICAgICAgbWF4ID0gcHJvamVjdGlvbjtcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpbmRleFxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9uY2Ugd2UgaGF2ZSB0aGUgcG9pbnQgb2YgbWF4aW11bVxuICAgICAgICAvLyBzZWUgd2hpY2ggZWRnZSBpcyBtb3N0IHBlcnBlbmRpY3VsYXJcbiAgICAgICAgY29uc3QgbCA9IGluZGV4ICsgMSA9PSBjb3VudCA/IDAgOiBpbmRleCArIDE7XG4gICAgICAgIGNvbnN0IHIgPSBpbmRleCAtIDEgPCAwID8gY291bnQgLSAxIDogaW5kZXggLSAxO1xuXG4gICAgICAgIGNvbnN0IGxlZnROID0gdGhpcy5ub3JtYWxzW2luZGV4ID09IDAgPyBjb3VudCAtIDEgOiBpbmRleCAtIDFdO1xuICAgICAgICBjb25zdCByaWdodE4gPSB0aGlzLm5vcm1hbHNbaW5kZXhdO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIG1heGltdW0gcG9pbnQgZm9yIHRoZSBmZWF0dXJlICh0cmFuc2Zvcm0gdGhlIG1heGltdW0gaW50byB3b3JsZCBzcGFjZSlcbiAgICAgICAgY29uc3Qgdm0gPSBuZXcgUG9pbnRGZWF0dXJlKG1heGltdW0sIGluZGV4KTtcbiAgICAgICAgLy8gaXMgdGhlIGxlZnQgb3IgcmlnaHQgZWRnZSBtb3JlIHBlcnBlbmRpY3VsYXI/XG4gICAgICAgIGlmIChsZWZ0Ti5kb3QoZGlyZWN0aW9uKSA8IHJpZ2h0Ti5kb3QoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMudmVydGljZXNbbF07XG4gICAgICAgICAgICBjb25zdCB2bCA9IG5ldyBQb2ludEZlYXR1cmUobGVmdCwgbCk7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGVkZ2UgaXMgdGhlIHJpZ2h0IHdpbmRpbmdcbiAgICAgICAgICAgIHJldHVybiBuZXcgRWRnZUZlYXR1cmUodm0sIHZsLCB2bSwgbWF4aW11bS50byhsZWZ0KSwgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy52ZXJ0aWNlc1tyXTtcbiAgICAgICAgY29uc3QgdnIgPSBuZXcgUG9pbnRGZWF0dXJlKHJpZ2h0LCByKTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBlZGdlIGlzIHRoZSByaWdodCB3aW5kaW5nXG4gICAgICAgIHJldHVybiBuZXcgRWRnZUZlYXR1cmUodnIsIHZtLCB2bSwgcmlnaHQudG8obWF4aW11bSksIGluZGV4KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL1BvbHlnb24uanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udmV4IHtcblxuICAgIC8qKlxuICAgICAqIOuwqe2WpeyXkOyEnCDqsIDsnqUg66i8IOuyoe2EsOydmCDsnbjrjbHsiqQgKEZlYXR1cmUp66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICovXG4gICAgZ2V0RmFydGhlc3RGZWF0dXJlKGRpcmVjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tDb252ZXhdIGltcGxtZW50cyBnZXRGYXJ0aGVzdEZlYXR1cmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrsKntlqXsl5DshJwg6rCA7J6lIOuovCDtj6zsnbjtirjrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBnZXRGYXJ0aGVzdFBvaW50KGRpcmVjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tDb252ZXhdIGltcGxtZW50cyBnZXRGYXJ0aGVzdFBvaW50Jyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9Db252ZXguanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvbWV0cnkge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBub3JtYWxpemVkIHZlY3RvcnMgcmVwcmVzZW50aW5nIHRoZSBub3JtYWxzIG9mIGFsbCB0aGVcbiAgICAgKiBlZGdlcyBnaXZlbiB0aGUgdmVydGljZXMuXG4gICAgICogPHA+XG4gICAgICogVGhpcyBtZXRob2QgYXNzdW1lcyBjb3VudGVyLWNsb2Nrd2lzZSBvcmRlcmluZy5cbiAgICAgKiA8cD5cbiAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIHZlcnRpY2VzIGFycmF5IGlzIG51bGwgb3IgZW1wdHkuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q291bnRlckNsb2Nrd2lzZUVkZ2VOb3JtYWxzKHZlcnRpY2VzKSB7XG4gICAgICAgIGlmICh2ZXJ0aWNlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpemUgPSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbHMgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVkZ2UgcG9pbnRzXG4gICAgICAgICAgICBjb25zdCBwMSA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgY29uc3QgcDIgPSAoaSArIDEgPT09IHNpemUpID8gdmVydGljZXNbMF0gOiB2ZXJ0aWNlc1tpICsgMV07XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGVkZ2UgYW5kIGdldCBpdHMgbGVmdCBwZXJwZWRpY3VsYXIgdmVjdG9yXG4gICAgICAgICAgICBjb25zdCBuID0gcDEudG8ocDIpLmxlZnQoKTtcbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBpdFxuICAgICAgICAgICAgbi5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgIG5vcm1hbHNbaV0gPSBuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vcm1hbHM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9HZW9tZXRyeS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW5ldHJhdGlvbiB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbm9ybWFsIHtWZWN0b3J9IGNvbnZleDEg7JeQ7IScIGNvbnZleDIg66GcIOy5qO2IrO2VnCBub3JtYWxcbiAgICAgKiBAcGFyYW0gZGVwdGgge251bWJlcn0g7Lmo7YisIOq5iuydtFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5vcm1hbCA9IG5ldyBWZWN0b3IoKSwgZGVwdGggPSAwKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0Tm9ybWFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gICAgfVxuXG4gICAgZ2V0RGVwdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOy5qO2IrCDrsKntlqXsnYQg7ISk7KCV7ZWp64uI64ukLiDrsJjrk5zsi5wgbm9ybWFsaXplZCDtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBub3JtYWwge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzZXROb3JtYWwobm9ybWFsKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOy5qO2IrCDquYrsnbTrpbwg7ISk7KCV7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBkZXB0aCB7bnVtYmVyfVxuICAgICAqL1xuICAgIHNldERlcHRoKGRlcHRoKSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL1BlbmV0cmF0aW9uLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEdKSyBmcm9tICcuLi9namsvR0pLJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyXG57XG4gICAgc3RhdGljIGRyYXdNaW5rb3dza2lTdW0odmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygnZHJhd01pbmtvd3NraVN1bSgnLCB2ZXJ0aWNlczEubGVuZ3RoICogdmVydGljZXMyLmxlbmd0aCwgJyknKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgICAgICBjb25zdCBwYXRoID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZlcnRpY2VzMi5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHYxID0gdmVydGljZXMxW2ldLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IHYyID0gdmVydGljZXMyW2pdLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBWZWN0b3Iuc3VidHJhY3QodjEsIHYyKTtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goZGlmZik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSwgaiwgYHZlY1ske2RpZmYueH0sICR7ZGlmZi55fV1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZleEh1bGxQYXRoID0gR0pLLmNyZWF0ZUNvbnZleEh1bGwocGF0aCk7XG4gICAgICAgIFBhaW50ZXIuZHJhd1BvbHlnb24oY29udmV4SHVsbFBhdGgsIDEsIDB4RERERERELCAxKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9seWdvbih2ZXJ0aWNlcywgbGluZVdpZHRoID0gMSwgY29sb3IgPSAweDYwN0Q4QiwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBjb25zdCBncmFwaGljcyA9IHdpbmRvdy5nO1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGNvbnN0IHZlYzAgPSB2ZXJ0aWNlc1swXS5jbG9uZSgpO1xuICAgICAgICB2ZWMwLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcblxuICAgICAgICBncmFwaGljcy5tb3ZlVG8odmVjMC54LCB2ZWMwLnkpO1xuXG4gICAgICAgIC8vIHRoaXMuZHJhd1RleHQod2luZG93LnN0YWdlLCAnKCcgKyB2ZWMwLngudG9GaXhlZCgwKSArICcsJyArIHZlYzAueS50b0ZpeGVkKDApICsgJyknLCB2ZWMwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmVjID0gdmVydGljZXNbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgIHZlYy5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odmVjLngsIHZlYy55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMwLngsIHZlYzAueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1RleHQoc3RhZ2UsIHN0cmluZywgcG9pbnQsIGNvbG9yID0gJyNmZjMzMDAnKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoc3RyaW5nLCB7XG4gICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgLy8gZm9udFNpemU6IDQsXG4gICAgICAgICAgICAvLyBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBmaWxsOiBjb2xvcixcbiAgICAgICAgICAgIC8vIHN0cm9rZTogJyM0YTE4NTAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0ZXh0LnggPSBwb2ludC54O1xuICAgICAgICB0ZXh0LnkgPSBwb2ludC55O1xuXG4gICAgICAgIHN0YWdlLmFkZENoaWxkKHRleHQpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludChncmFwaGljcywgcG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocG9pbnQueCwgcG9pbnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlCb3VuZHMoZ3JhcGhpY3MsIGJvdW5kcywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3UmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJ0LngsIHJlY3QucnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJiLngsIHJlY3QucmIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LmxiLngsIHJlY3QubGIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50c0J5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubHQueCwgcmVjdC5sdC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucnQueCwgcmVjdC5ydC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucmIueCwgcmVjdC5yYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubGIueCwgcmVjdC5sYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHMoZ3JhcGhpY3MsIHBvaW50cywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcDEgPSBwb2ludHNbaV07XG4gICAgICAgICAgICB2YXIgcDIgPSBwb2ludHNbaSArIDEgPCBwb2ludHMubGVuZ3RoID8gaSArIDEgOiAwXTtcblxuICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdMaW5lKGdyYXBoaWNzLCBwMCwgcDEsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAwLngsIHAwLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocDEueCwgcDEueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0Fycm93KGdyYXBoaWNzLCBtb3ZlUG9pbnQsIHRvUG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNywgc2NhbGUgPSA1KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKmdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKHRvUG9pbnQueCAtIG1vdmVQb2ludC54LCB0b1BvaW50LnkgLSBtb3ZlUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoMTUpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTsqL1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKG1vdmVQb2ludC54IC0gdG9Qb2ludC54LCBtb3ZlUG9pbnQueSAtIHRvUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHZlY3Rvci5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcihzY2FsZSAqIDMpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3RGlyZWN0aW9uKGdyYXBoaWNzLCBtZSwgdGFyZ2V0LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcsIHNjYWxlID0gNSlcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuXG4gICAgICAgIHZhciB0byA9IG1lLnRvKHRhcmdldCk7XG4gICAgICAgIHZhciBsZWZ0ID0gdG8uY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB0by5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICB0by5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcihzY2FsZSAqIDMpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtZS54ICsgdG8ueCwgbWUueSArIHRvLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obWUueCwgbWUueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtZS54ICsgbGVmdC54LCBtZS55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIHJpZ2h0LngsIG1lLnkgKyByaWdodC55KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFpbnRlci5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBFcHNpbG9uIGZyb20gJy4uL2R5bjRqL0Vwc2lsb24nO1xuaW1wb3J0IE1pbmtvd3NraVN1bVBvaW50IGZyb20gXCIuL01pbmtvd3NraVN1bVBvaW50XCI7XG5cbi8qKlxuICogR0pLIEFsZ29yaXRobSAoR2lsYmVydC1Kb2huc29uLUtlZXJ0aGkpXG4gKiBodHRwczovL2dpdGh1Yi5jb20va3JvaXRvci9namsuY1xuICogaHR0cDovL3d3dy5keW40ai5vcmcvMjAxMC8wNC9namstZ2lsYmVydC1qb2huc29uLWtlZXJ0aGkvI2dqay10b3BcbiAqIGh0dHBzOi8vd3d3Lmhhcm9sZHNlcnJhbm8uY29tL2Jsb2cvdmlzdWFsaXppbmctdGhlLWdqay1jb2xsaXNpb24tYWxnb3JpdGhtXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanVobC9jb2xsaXNpb24tZGV0ZWN0aW9uLTJkXG4gKi9cblxuY29uc3QgT1JJR0lOID0gbmV3IFZlY3RvcigwLCAwKVxuICAgICwgREVGQVVMVF9NQVhfSVRFUkFUSU9OUyA9IDMwXG4gICAgLCBUT0xFUkFOQ0UgPSBNYXRoLnNxcnQoRXBzaWxvbi5FKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0pLXG57XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0byBjb21wdXRlIGF2ZXJhZ2UgY2VudGVyIChyb3VnaGx5KS4gSXQgbWlnaHQgYmUgZGlmZmVyZW50IGZyb21cbiAgICAgKiBDZW50ZXIgb2YgR3Jhdml0eSwgZXNwZWNpYWxseSBmb3IgYm9kaWVzIHdpdGggbm9udW5pZm9ybSBkZW5zaXR5LFxuICAgICAqIGJ1dCB0aGlzIGlzIG9rIGFzIGluaXRpYWwgZGlyZWN0aW9uIG9mIHNpbXBsZXggc2VhcmNoIGluIEdKS1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBhdmVyYWdlUG9pbnQodmVydGljZXMpXG4gICAge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhdmcueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZnLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2Zy54IC89IGNvdW50O1xuICAgICAgICBhdmcueSAvPSBjb3VudDtcblxuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1cnRoZXN0IHZlcnRleCBhbG9uZyBhIGNlcnRhaW4gZGlyZWN0aW9uXG4gICAgICog6ryt7KeA7KCQ6rO8IOuwqe2WpeydhCDsoITri6ztlZjrqbQg64K07KCBICjtiKzsmIEp7J2EIO2Gte2VtCDstZzrjIDroZwg66i8IOyijO2RnOydmCDsnbjrjbHsiqTrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBpbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlcywgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1heFByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzWzBdKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0ID4gbWF4UHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG1heFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1pbmtvd3NraSBzdW0gc3VwcG9ydCBmdW5jdGlvbiBmb3IgR0pLXG4gICAgICog7KeA7JuQIO2VqOyImOyXkOyEnCDtj7Trpqzqs6TsnZgg7Y+s7J247Yq47JmAIOuwqe2WpeycvOuhnCDshJzroZwg64uk66W4IOuwqe2WpeydmCDsoJDsnYQg6rWs7ZWY6rOgIE1pbmtvd3NraSBEaWZmZXJlbmNlIOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSDrsqHthLBcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgLy8gc3VidHJhY3QgKE1pbmtvd3NraSBzdW0pIHRoZSB0d28gcG9pbnRzIHRvIHNlZSBpZiBib2RpZXMgJ292ZXJsYXAnXG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1cHBvcnQyKHZlcnRpY2VzMSwgdmVydGljZXMyLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2YgZmlyc3QgYm9keSBhbG9uZyBhbiBhcmJpdHJhcnkgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMSwgZGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2Ygc2Vjb25kIGJvZHkgYWxvbmcgdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBqID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczIsIFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihkaXJlY3Rpb24sIHRydWUpLCAnaTonICsgc3RyKHZlcnRpY2VzMVtpXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSwgdHJ1ZSksICdqOicgKyBzdHIodmVydGljZXMyW2pdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdXBwb3J0KCcgKyBzdHIoVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKSkgKyAnKScpO1xuICAgICAgICByZXR1cm4gbmV3IE1pbmtvd3NraVN1bVBvaW50KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gdmVydGljZXMxIHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gdmVydGljZXMyIHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW4gaGlzdG9yeSB7SGlzdG9yeX0gc2ltcGxleCDsmYAgZGlyZWN0aW9uIO2eiOyKpO2GoOumrFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDstqnrj4wg7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGNoZWNrQ29sbGlzaW9uKHZlcnRpY2VzMSwgdmVydGljZXMyLCBoaXN0b3J5ID0gbnVsbClcbiAgICB7XG4gICAgICAgIC8vIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMik7XG5cbiAgICAgICAgbGV0IGl0ZXJDb3VudCA9IDAsIGluZGV4ID0gMDsgICAvLyBpbmRleCBvZiBjdXJyZW50IHZlcnRleCBvZiBzaW1wbGV4XG4gICAgICAgIGxldCBhLCBiLCBjLCBkLCBhbywgYWIsIGFjLCBhYnBlcnAsIGFjcGVycCxcbiAgICAgICAgICAgIHNpbXBsZXggPSBuZXcgQXJyYXkoMyksIGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMyk7XG5cbiAgICAgICAgLy8g65GQIO2PtOumrOqzpCDspJHsi6wg7KKM7ZGc66W8IO2Gte2VtOyEnCDrsKntlqXsnYQg6rWs7ZWp64uI64ukLlxuICAgICAgICBjb25zdCBwb3NpdGlvbjEgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczEpOyAvLyBub3QgYSBDb0cgYnV0XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uMiA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMik7IC8vIGl0J3Mgb2sgZm9yIEdKSyApXG5cbiAgICAgICAgLy8gaW5pdGlhbCBkaXJlY3Rpb24gZnJvbSB0aGUgY2VudGVyIG9mIDFzdCBib2R5IHRvIHRoZSBjZW50ZXIgb2YgMm5kIGJvZHlcbiAgICAgICAgLy8g67Cp7ZalIHZlY3RvclxuICAgICAgICBkID0gVmVjdG9yLnN1YnRyYWN0KHBvc2l0aW9uMSwgcG9zaXRpb24yKTtcblxuICAgICAgICAvLyBpZiBpbml0aWFsIGRpcmVjdGlvbiBpcyB6ZXJvIOKAkyBzZXQgaXQgdG8gYW55IGFyYml0cmFyeSBheGlzICh3ZSBjaG9vc2UgWClcbiAgICAgICAgaWYgKChkLnggPT0gMCkgJiYgKGQueSA9PSAwKSkge1xuICAgICAgICAgICAgZC54ID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBzdXBwb3J0IGFzIGluaXRpYWwgcG9pbnQgb2YgdGhlIG5ldyBzaW1wbGV4XG4gICAgICAgIGEgPSBzaW1wbGV4WzBdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgZGlyZWN0aW9uc1swXSA9IGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAvLyBzdXBwb3J0IOygkOqzvCDrsKntlqXsnbQg6rCZ7J2AIOuwqe2WpeydtCDslYTri5Ag6rK97JqwXG4gICAgICAgIGlmIChhLmRvdChkKSA8PSAwKSB7XG4gICAgICAgICAgICAvLyDrp4jsp4Drp4nsl5Ag7LaU6rCAIOuQnCDsoJDsnbQgZOydmCDrsKntlqXsnLzroZwg7JuQ7KCQ7J2EIOyngOuCmOy5mOyngCDslYrsnYAg6rK97JqwXG4gICAgICAgICAgICAvLyDqt7gg64uk7J2MIE1pbmtvd3NraSDtlansnYAg7JuQ7KCQ7J2EIO2PrO2VqCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cbiAgICAgICAgICAgIC8vIOy2lOqwgCDrkJwg66eI7KeA66eJIOygkOydgCBNaW5rb3dza2kgRGlmZmVyZW5jZeydmCDqsIDsnqXsnpDrpqzsl5Ag7J6I7Iq164uI64ukLlxuICAgICAgICAgICAgY29uc29sZS5sb2coJyAgICAgICBDQVNFMVsnLCAnTk8nLCAnXScpO1xuXG4gICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGQgPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBUaGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIGFsd2F5cyB0b3dhcmRzIHRoZSBvcmlnaW4sIHNvIHRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgbmVnYXRlKGEpXG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGl0ZXJDb3VudCsrO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVyQ291bnQpO1xuXG4gICAgICAgICAgICBhID0gc2ltcGxleFsrK2luZGV4XSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgICAgICBkaXJlY3Rpb25zW2luZGV4XSA9IGQ7XG5cbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhLCBkKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RyKGEpLCBzdHIoZCwgdHJ1ZSksIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgICAgICAgQ0FTRTJbJywgJ05PJywgJ10nKTtcblxuICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBh6rCAIOybkOygkOycvOuhnCDtlqXtlZjripQg67Kh7YSw64qUIC1hIOulvCDtlZjrqbQg65Cp64uI64ukLlxuICAgICAgICAgICAgYW8gPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gT3JpZ2luIGlzIGp1c3QgbmVnYXRpdmUgQVxuXG4gICAgICAgICAgICAvLyBzaW1wbGV4IGhhcyAyIHBvaW50cyAoYSBsaW5lIHNlZ21lbnQsIG5vdCBhIHRyaWFuZ2xlIHlldClcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDIpIHtcblxuICAgICAgICAgICAgICAgIGIgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgICAgIGFiID0gVmVjdG9yLnN1YnRyYWN0KGIsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQlxuICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKTsgLy8gbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG5cbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmxlbmd0aFNxKGQpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IucGVycGVuZGljdWxhcihhYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBza2lwIHRvIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGIgPSBzaW1wbGV4WzFdO1xuICAgICAgICAgICAgYyA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgIGFjID0gVmVjdG9yLnN1YnRyYWN0KGMsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQ1xuXG4gICAgICAgICAgICAvL2Fj7JmAIOyImOyngVxuICAgICAgICAgICAgYWNwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFjLCBhYyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJywgYSwgJ2InLCBiLCAnYycsIGMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FvJywgYW8sICdhYicsIGFiLCAnYWMnLCBhYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWNwZXJwJywgYWNwZXJwLCBhY3BlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdFByb2R1Y3QoYWNwZXJwLCBhbyknLCBWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSk7XG5cbiAgICAgICAgICAgIC8vIGFjIOyImOyngSDshKDrtoTsnbQgYeqwgCDsm5DsoJDsnYQg7Zal7ZWY64qUIOuwqe2WpSDrsJjrjIDtjrjsl5Ag7J6I6rOgXG4gICAgICAgICAgICAvLyDspoksIGFjIOyImOyngSDshKDrtoQg7JWI7Kq97JeQIOybkOygkOydtCDsnojsnLzrqbRcbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZCA9IGFjcGVycDsgLy8gbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW4nLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoRcbiAgICAgICAgICAgICAgICBhYnBlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYWIsIGFiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWJwZXJwJywgYWJwZXJwLCBhYnBlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFicGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWIg7IiY7KeBIOyEoOu2hOydtCDsm5DsoJAg67CY64yAIOuwqe2WpeydhCDtlqXtlZjqs6Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgLy8g7KaJLCDsm5DsoJDsnbQg7IK86rCB7ZiVIOyViOyXkCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykgPCAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaW1wbGV4WzBdID0gc2ltcGxleFsxXTsgLy8gc3dhcCBmaXJzdCBlbGVtZW50IChwb2ludCBDKVxuICAgICAgICAgICAgICAgIGQgPSBhYnBlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpbXBsZXhbMV0gPSBzaW1wbGV4WzJdOyAvLyBzd2FwIGVsZW1lbnQgaW4gdGhlIG1pZGRsZSAocG9pbnQgQilcbiAgICAgICAgICAgIC0taW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXN0YW5jZSh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgc2VwYXJhdGlvbiA9IG51bGwpXG4gICAge1xuICAgICAgICBsZXQgYSwgYiwgYywgZCwgcDEsIHAyLCBwMU1hZywgcDJNYWcsIHByb2plY3Rpb247XG5cbiAgICAgICAgLy8g65GQIO2PtOumrOqzpCDspJHsi6wg7KKM7ZGc66W8IO2Gte2VtOyEnCDrsKntlqXsnYQg6rWs7ZWp64uI64ukLlxuICAgICAgICBjb25zdCBjMSA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMSk7IC8vIG5vdCBhIENvRyBidXRcbiAgICAgICAgY29uc3QgYzIgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIGQgPSBWZWN0b3Iuc3VidHJhY3QoYzEsIGMyKTtcblxuICAgICAgICBpZiAoZC5pc1plcm8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYSA9IHRoaXMuc3VwcG9ydDIodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuICAgICAgICBiID0gdGhpcy5zdXBwb3J0Mih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZC5pbnZlcnQoKSk7XG5cbiAgICAgICAgZCA9IEdKSy5nZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50KE9SSUdJTiwgYS5wb2ludCwgYi5wb2ludCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUZBVUxUX01BWF9JVEVSQVRJT05TOyBpKyspIHtcbiAgICAgICAgICAgIGQgPSBkLmludmVydCgpO1xuXG4gICAgICAgICAgICBpZihkLmxlbmd0aFNxKCkgPD0gVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNsb3Nlc3QgcG9pbnQgaXMgdGhlIG9yaWdpbiB0aGVuIHRoZSBzaGFwZXMgYXJlIG5vdCBzZXBhcmF0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGMgPSB0aGlzLnN1cHBvcnQyKHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcblxuICAgICAgICAgICAgaWYgKEdKSy5jb250YWluc09yaWdpbihhLnBvaW50LCBiLnBvaW50LCBjLnBvaW50KSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGRvZXMgdGhlbiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZWUgaWYgdGhlIG5ldyBwb2ludCBpcyBmYXIgZW5vdWdoIGFsb25nIGRcbiAgICAgICAgICAgIHByb2plY3Rpb24gPSBjLnBvaW50LmRvdChkKTtcblxuICAgICAgICAgICAgaWYgKChwcm9qZWN0aW9uIC0gYS5wb2ludC5kb3QoZCkpIDwgVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlbiB0aGUgbmV3IHBvaW50IHdlIGp1c3QgbWFkZSBpcyBub3QgZmFyIGVub3VnaFxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBkaXJlY3Rpb24gb2YgbiBzbyB3ZSBjYW4gc3RvcCBub3dcbiAgICAgICAgICAgICAgICAvLyBub3JtYWxpemUgZFxuICAgICAgICAgICAgICAgIGQubm9ybWFsaXplKCk7XG5cbiAgICAgICAgICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgICAgICAgICAgc2VwYXJhdGlvbi5kaXN0YW5jZSA9IC1jLnBvaW50LmRvdChkKTtcbiAgICAgICAgICAgICAgICBHSksuZmluZENsb3Nlc3RQb2ludHMoYSwgYiwgc2VwYXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTk9OTzEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcDEgPSBHSksuZ2V0UG9pbnRPblNlZ21lbnRDbG9zZXN0VG9Qb2ludChPUklHSU4sIGEucG9pbnQsIGMucG9pbnQpO1xuICAgICAgICAgICAgcDIgPSBHSksuZ2V0UG9pbnRPblNlZ21lbnRDbG9zZXN0VG9Qb2ludChPUklHSU4sIGMucG9pbnQsIGIucG9pbnQpO1xuICAgICAgICAgICAgcDFNYWcgPSBwMS5sZW5ndGhTcSgpO1xuICAgICAgICAgICAgcDJNYWcgPSBwMi5sZW5ndGhTcSgpO1xuXG4gICAgICAgICAgICBpZiAocDFNYWcgPD0gVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICAgICAgZC5ub3JtYWxpemUoKSgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSBwMS5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgICAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGEsIGMsIHNlcGFyYXRpb24pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOT05PMicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwMk1hZyA8PSBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSBwMi5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgICAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGMsIGIsIHNlcGFyYXRpb24pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOT05PMycpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocDFNYWcgPCBwMk1hZykge1xuICAgICAgICAgICAgICAgIGIgPSBjO1xuICAgICAgICAgICAgICAgIGQgPSBwMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYSA9IGM7XG4gICAgICAgICAgICAgICAgZCA9IHAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSAtYy5wb2ludC5kb3QoZCk7XG4gICAgICAgIEdKSy5maW5kQ2xvc2VzdFBvaW50cyhhLCBiLCBzZXBhcmF0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coJ05PTk80Jyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb3JpZ2luIGlzIHdpdGhpbiB0aGUgdHJpYW5nbGUgZ2l2ZW4gYnlcbiAgICAgKiBhLCBiLCBhbmQgYy5cbiAgICAgKiA8cD5cbiAgICAgKiBJZiB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIHNhbWUgc2lkZSBvZiBhbGwgdGhlIHBvaW50cyB0aGVuIHdlXG4gICAgICoga25vdyB0aGF0IHRoZSBvcmlnaW4gaXMgaW4gdGhlIHRyaWFuZ2xlLlxuICAgICAqIDxwcmU+IHNpZ24obG9jYXRpb24ob3JpZ2luLCBhLCBiKSkgPT0gc2lnbihsb2NhdGlvbihvcmlnaW4sIGIsIGMpKSA9PSBzaWduKGxvY2F0aW9uKG9yaWdpbiwgYywgYSkpPC9wcmU+XG4gICAgICogVGhlIHtAbGluayBTZWdtZW50I2dldExvY2F0aW9uKFZlY3RvcjIsIFZlY3RvcjIsIFZlY3RvcjIpfSBtZXRob2RcbiAgICAgKiBjYW4gYmUgc2ltcGxpZmllZCBiZWNhdXNlIHdlIGFyZSB1c2luZyB0aGUgb3JpZ2luIGFzIHRoZSBzZWFyY2ggcG9pbnQ6XG4gICAgICogPHByZT4gPSAoYi54IC0gYS54KSAqIChvcmlnaW4ueSAtIGEueSkgLSAob3JpZ2luLnggLSBhLngpICogKGIueSAtIGEueSlcbiAgICAgKiA9IChiLnggLSBhLngpICogKC1hLnkpIC0gKC1hLngpICogKGIueSAtIGEueSlcbiAgICAgKiA9IC1hLnkgKiBiLnggKyBhLnkgKiBhLnggKyBhLnggKiBiLnkgLSBhLnggKiBhLnlcbiAgICAgKiA9IC1hLnkgKiBiLnggKyBhLnggKiBiLnlcbiAgICAgKiA9IGEueCAqIGIueSAtIGEueSAqIGIueFxuICAgICAqID0gYS5jcm9zcyhiKTwvcHJlPlxuICAgICAqIEBwYXJhbSBhIHRoZSBmaXJzdCBwb2ludFxuICAgICAqIEBwYXJhbSBiIHRoZSBzZWNvbmQgcG9pbnRcbiAgICAgKiBAcGFyYW0gYyB0aGUgdGhpcmQgcG9pbnRcbiAgICAgKiBAcmV0dXJuIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29udGFpbnNPcmlnaW4oYSwgYiwgYykge1xuICAgICAgICBjb25zdCBzYSA9IGEuY3Jvc3MoYilcbiAgICAgICAgICAgICwgc2IgPSBiLmNyb3NzKGMpXG4gICAgICAgICAgICAsIHNjID0gYy5jcm9zcyhhKTtcbiAgICAgICAgcmV0dXJuIChzYSAqIHNiID4gMCAmJiBzYSAqIHNjID4gMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIGNsb3Nlc3QgcG9pbnRzIG9uIEEgYW5kIEIgZ2l2ZW4gdGhlIHRlcm1pbmF0aW9uIHNpbXBsZXggYW5kIHBsYWNlc1xuICAgICAqIHRoZW0gaW50byBwb2ludDEgYW5kIHBvaW50MiBvZiB0aGUgZ2l2ZW4ge0BsaW5rIFNlcGFyYXRpb259IG9iamVjdC5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGUgc3VwcG9ydCBwb2ludHMgdXNlZCB0byBvYnRhaW4gYSBhbmQgYiBhcmUgbm90IGdvb2QgZW5vdWdoIHNpbmNlIHRoZSBzdXBwb3J0XG4gICAgICogbWV0aG9kcyBvZiB7QGxpbmsgQ29udmV4fSB7QGxpbmsgU2hhcGV9cyBvbmx5IHJldHVybiB0aGUgZmFydGhlc3QgPGVtPnZlcnRleDwvZW0+LCBub3RcbiAgICAgKiBuZWNlc3NhcmlseSB0aGUgZmFydGhlc3QgcG9pbnQuXG4gICAgICogQHBhcmFtIGEgdGhlIGZpcnN0IHNpbXBsZXggcG9pbnRcbiAgICAgKiBAcGFyYW0gYiB0aGUgc2Vjb25kIHNpbXBsZXggcG9pbnRcbiAgICAgKiBAcGFyYW0gc2VwYXJhdGlvbiB0aGUge0BsaW5rIFNlcGFyYXRpb259IG9iamVjdCB0byBwb3B1bGF0ZVxuICAgICAqIEBzZWUgPGEgaHJlZj1cImh0dHA6Ly93d3cuZHluNGoub3JnLzIwMTAvMDQvZ2prLWRpc3RhbmNlLWNsb3Nlc3QtcG9pbnRzL1wiIHRhcmdldD1cIl9ibGFua1wiPkdKSyAtIERpc3RhbmNlICZhbXA7IENsb3Nlc3QgUG9pbnRzPC9hPlxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kQ2xvc2VzdFBvaW50cyhhLCBiLCBzZXBhcmF0aW9uKVxuICAgIHtcbiAgICAgICAgY29uc3QgcDEgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgcDIgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgbCA9IFZlY3Rvci5zdWJ0cmFjdChhLnBvaW50LCBiLnBvaW50KTtcblxuICAgICAgICBpZiAobC5pc1plcm8oKSkge1xuICAgICAgICAgICAgcDEuc2V0KGEuc3VwcG9ydFBvaW50MSk7XG4gICAgICAgICAgICBwMi5zZXQoYS5zdXBwb3J0UG9pbnQyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxsID0gbC5kb3QobClcbiAgICAgICAgICAgICAgICAsIGwyID0gLWwuZG90KGEucG9pbnQpIC8gbGxcbiAgICAgICAgICAgICAgICAsIGwxID0gMSAtIGwyO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBlaXRoZXIgbGFtYmRhMSBvciBsYW1iZGEyIGlzIGxlc3MgdGhhbiB6ZXJvXG4gICAgICAgICAgICBpZiAobDEgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbGFtYmRhMSBpcyBsZXNzIHRoYW4gemVybyB0aGVuIHRoYXQgbWVhbnMgdGhhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSBzdXBwb3J0IHBvaW50cyBvZiB0aGUgTWlua293c2tpIHBvaW50IEIgYXJlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGNsb3Nlc3QgcG9pbnRzXG4gICAgICAgICAgICAgICAgcDEuc2V0KGIuc3VwcG9ydFBvaW50MSk7XG4gICAgICAgICAgICAgICAgcDIuc2V0KGIuc3VwcG9ydFBvaW50Mik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGwyIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGxhbWJkYTIgaXMgbGVzcyB0aGFuIHplcm8gdGhlbiB0aGF0IG1lYW5zIHRoYXRcbiAgICAgICAgICAgICAgICAvLyB0aGUgc3VwcG9ydCBwb2ludHMgb2YgdGhlIE1pbmtvd3NraSBwb2ludCBBIGFyZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBjbG9zZXN0IHBvaW50c1xuICAgICAgICAgICAgICAgIHAxLnNldChhLnN1cHBvcnRQb2ludDEpO1xuICAgICAgICAgICAgICAgIHAyLnNldChhLnN1cHBvcnRQb2ludDIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb21wdXRlIHRoZSBjbG9zZXN0IHBvaW50cyB1c2luZyBsYW1iZGExIGFuZCBsYW1iZGEyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZXhwYW5kZWQgdmVyc2lvbiBvZlxuICAgICAgICAgICAgICAgIC8vIHAxID0gYS5wMS5tdWx0aXBseShsMSkuYWRkKGIucDEubXVsdGlwbHkobDIpKTtcbiAgICAgICAgICAgICAgICAvLyBwMiA9IGEucDIubXVsdGlwbHkobDEpLmFkZChiLnAyLm11bHRpcGx5KGwyKSk7XG4gICAgICAgICAgICAgICAgcDEueCA9IGEuc3VwcG9ydFBvaW50MS54ICogbDEgKyBiLnN1cHBvcnRQb2ludDEueCAqIGwyO1xuICAgICAgICAgICAgICAgIHAxLnkgPSBhLnN1cHBvcnRQb2ludDEueSAqIGwxICsgYi5zdXBwb3J0UG9pbnQxLnkgKiBsMjtcbiAgICAgICAgICAgICAgICBwMi54ID0gYS5zdXBwb3J0UG9pbnQyLnggKiBsMSArIGIuc3VwcG9ydFBvaW50Mi54ICogbDI7XG4gICAgICAgICAgICAgICAgcDIueSA9IGEuc3VwcG9ydFBvaW50Mi55ICogbDEgKyBiLnN1cHBvcnRQb2ludDIueSAqIGwyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHNldCB0aGUgbmV3IHBvaW50cyBpbiB0aGUgc2VwYXJhdGlvbiBvYmplY3RcbiAgICAgICAgc2VwYXJhdGlvbi5wb2ludDEgPSBwMTtcbiAgICAgICAgc2VwYXJhdGlvbi5wb2ludDIgPSBwMjtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VzdFBvaW50VG9PcmlnaW4oYSwgYilcbiAgICB7XG4gICAgICAgIGNvbnN0IGFiID0gYS50byhiKVxuICAgICAgICAgICAgLCBhbyA9IGEudG8obmV3IFZlY3RvcigpKVxuICAgICAgICAgICAgLCBwcm9qQW9PbnRvQWIgPSBhby5kb3QoYWIpXG4gICAgICAgICAgICAsIGxlbmd0aFNxdWFyZWQgPSBhYi5kb3QoYWIpXG4gICAgICAgICAgICAsIHQgPSBwcm9qQW9PbnRvQWIgLyBsZW5ndGhTcXVhcmVkXG4gICAgICAgICAgICAsIGNsb3NldFBvaW50ID0gVmVjdG9yLm11bHRpcGx5U2NhbGFyKGFiLCB0KS5hZGQoYSlcbiAgICAgICAgICAgICwgZCA9IGNsb3NldFBvaW50Lm1hZ25pdHVkZSgpO1xuXG4gICAgICAgIHJldHVybiB7cG9pbnQ6IGNsb3NldFBvaW50LCBkZXB0aDogZH07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwb2ludCBvbiB0aGUgZ2l2ZW4gbGluZSBzZWdtZW50IGNsb3Nlc3QgdG8gdGhlIGdpdmVuIHBvaW50LlxuICAgICAqIDxwPlxuICAgICAqIElmIHRoZSBwb2ludCBjbG9zZXN0IHRvIHRoZSBnaXZlbiBwb2ludCBpcyBvbiB0aGUgbGluZSBjcmVhdGVkIGJ5IHRoZVxuICAgICAqIGdpdmVuIGxpbmUgc2VnbWVudCwgYnV0IGlzIG5vdCBvbiB0aGUgbGluZSBzZWdtZW50IHRoZW4gZWl0aGVyIG9mIHRoZSBzZWdtZW50c1xuICAgICAqIGVuZCBwb2ludHMgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKiA8cD5cbiAgICAgKiBBc3N1bWVzIGFsbCBwb2ludHMgYXJlIGluIHdvcmxkIHNwYWNlLlxuICAgICAqIEBzZWUgU2VnbWVudCNnZXRQb2ludE9uTGluZUNsb3Nlc3RUb1BvaW50KFZlY3RvcjIsIFZlY3RvcjIsIFZlY3RvcjIpXG4gICAgICogQHBhcmFtIHBvaW50IHRoZSBwb2ludFxuICAgICAqIEBwYXJhbSBsaW5lUG9pbnQxIHRoZSBmaXJzdCBwb2ludCBvZiB0aGUgbGluZVxuICAgICAqIEBwYXJhbSBsaW5lUG9pbnQyIHRoZSBzZWNvbmQgcG9pbnQgb2YgdGhlIGxpbmVcbiAgICAgKiBAcmV0dXJuIHtAbGluayBWZWN0b3IyfVxuICAgICAqIEB0aHJvd3MgTnVsbFBvaW50ZXJFeGNlcHRpb24gaWYgcG9pbnQsIGxpbmVQb2ludDEsIG9yIGxpbmVQb2ludDIgaXMgbnVsbFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50KHBvaW50LCBsaW5lUG9pbnQxLCBsaW5lUG9pbnQyKVxuICAgIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgdmVjdG9yIGZyb20gdGhlIHBvaW50IHRvIHRoZSBmaXJzdCBsaW5lIHBvaW50XG4gICAgICAgIGNvbnN0IHAxVG9QID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50LCBsaW5lUG9pbnQxKVxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgbGluZVxuICAgICAgICAgICAgLCBsaW5lID0gVmVjdG9yLnN1YnRyYWN0KGxpbmVQb2ludDIsIGxpbmVQb2ludDEpXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGxlbmd0aCBzcXVhcmVkIG9mIHRoZSBsaW5lXG4gICAgICAgICAgICAsIGFiMiA9IGxpbmUuZG90KGxpbmUpXG4gICAgICAgICAgICAsIGFwX2FiID0gcDFUb1AuZG90KGxpbmUpO1xuXG4gICAgICAgIGlmIChhYjIgPD0gVE9MRVJBTkNFKSB7XG4gICAgICAgICAgICByZXR1cm4gbGluZVBvaW50MS5jbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHQgPSBhcF9hYiAvIGFiMjtcbiAgICAgICAgdCA9IGNsYW1wKHQsIDAuMCwgMS4wKTtcbiAgICAgICAgcmV0dXJuIGxpbmUubXVsdGlwbHlTY2FsYXIodCkuYWRkKGxpbmVQb2ludDEpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnZleEh1bGwocG9pbnRzKVxuICAgIHtcbiAgICAgICAgLy8gRmluZCB0aGUgcmlnaHQgbW9zdCBwb2ludCBvbiB0aGUgaHVsbFxuICAgICAgICB2YXIgaTAgPSAwO1xuICAgICAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgICAgIGkwID0gaTtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBodWxsID0gW107XG4gICAgICAgIHZhciBtID0gMDtcbiAgICAgICAgdmFyIGloID0gaTA7XG5cbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGh1bGxbbV0gPSBpaDtcblxuICAgICAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGllID09IGloKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHIgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBWZWN0b3IuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgICAgICBpZiAoYyA9PSAwICYmIHYubGVuZ3RoU3EoKSA+IHIubGVuZ3RoU3EoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtKys7XG4gICAgICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgICAgICBpZiAoaWUgPT0gaTApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgdmVydGljZXNcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2h1bGxbaV1dO1xuICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gobmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UG9pbnRzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG1pZHBvaW50KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigoYS54ICsgYi54KSAvIDIsIChhLnkgKyBiLnkpIC8gMik7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIGlmICh2YWx1ZSA8PSBtYXggJiYgdmFsdWUgPj0gbWluKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKG1heCA8IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICBjb25zb2xlLmxvZyhpbmRleCwgdmVydGV4LngsIHZlcnRleC55KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMxJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMSk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMyJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMik7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbn1cblxuZnVuY3Rpb24gc3RyKHZlcnRleCwgaXNGaXhlZCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBgKCR7dmVydGV4Lnh9LCR7dmVydGV4Lnl9KWA7XG4gICAgfVxuICAgIHJldHVybiBgKCR7dmVydGV4LngudG9GaXhlZCgyKX0sJHt2ZXJ0ZXgueS50b0ZpeGVkKDIpfSlgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9HSksuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlua293c2tpU3VtUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHN1cHBvcnRQb2ludDEsIHN1cHBvcnRQb2ludDIpIHtcbiAgICAgICAgdGhpcy5zdXBwb3J0UG9pbnQxID0gc3VwcG9ydFBvaW50MTtcbiAgICAgICAgdGhpcy5zdXBwb3J0UG9pbnQyID0gc3VwcG9ydFBvaW50MjtcbiAgICAgICAgdGhpcy5wb2ludCA9IFZlY3Rvci5zdWJ0cmFjdChzdXBwb3J0UG9pbnQxLCBzdXBwb3J0UG9pbnQyKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9NaW5rb3dza2lTdW1Qb2ludC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
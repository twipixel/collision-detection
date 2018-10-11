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
	        }
	    }, {
	        key: 'checkCollision',
	        value: function checkCollision() {
	            var index1 = Math.floor(Math.random() * triangles.length),
	                index2 = Math.floor(Math.random() * rectangles.length),
	                vertices1 = new _Vertices2.default(triangles[index1]),
	                vertices2 = new _Vertices2.default(rectangles[index2]);
	
	            /*const index1 = Math.floor(Math.random() * errorCase1.length)
	                , index2 = Math.floor(Math.random() * errorCase2.length)
	                , vertices1 = new Vertices(errorCase1[index1])
	                , vertices2 = new Vertices(errorCase2[index2]);*/
	
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
	
	            // perform the detection
	            if (this.detect2(ms, simplex, direction)) {
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
	            // check for a zero direction vector
	            if (direction.isZero()) {
	                direction.set(1, 0);
	            }
	            // add the first point
	            simplex[0] = ms.getSupportPoint(direction);
	            // is the support point past the origin along d?
	            // support point 방향을 따라 원점을 지나는지 체크 (원점을 지나지 않는다면X)
	            if (simplex[0].dot(direction) <= 0) {
	                return false;
	            }
	            // negate the search direction
	            direction.invert();
	            // start the loop
	            for (var i = 0; i < DEFAULT_MAX_ITERATIONS; i++) {
	                // always add another point to the simplex at the beginning of the loop
	                simplex.push(ms.getSupportPoint(direction));
	                // make sure that the last point we added was past the origin
	                if (simplex[simplex.length - 1].dot(direction) <= DEFAULT_DETECT_EPSILON) {
	                    // a is not past the origin so therefore the shapes do not intersect
	                    // here we treat the origin on the line as no intersection
	                    // immediately return with null indicating no penetration
	                    return false;
	                } else {
	                    // if it is past the origin, then test whether the simplex contains the origin
	                    if (this.checkSimplex(simplex, direction)) {
	                        // if the simplex contains the origin then we know that there is an intersection.
	                        // if we broke out of the loop then we know there was an intersection
	                        return true;
	                    }
	                    // if the simplex does not contain the origin then we need to loop using the new
	                    // search direction and simplex
	                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vUG9pbnQuanM/ZjA1YSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanM/OTZmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsLmpzP2YyOTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdXNlLmpzPzkyNDEiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9lcGEvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvQ29uc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvVmVydGljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9HamsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0Vwc2lsb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL01pbmtvd3NraVN1bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovQ29udmV4LmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9Qb2x5Z29uLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9HZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovUGVuZXRyYXRpb24uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibWFpbiIsIk1haW4iLCJjYW52YXMiLCJyZW5kZXJlciIsInN0YWdlIiwidGVzdCIsImNvbnRhaW5lciIsImluaXQiLCJhZGRFdmVudCIsIm9uUmVzaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlBJWEkiLCJDYW52YXNSZW5kZXJlciIsIndpZHRoIiwiaGVpZ2h0IiwidmlldyIsImF1dG9SZXNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb250YWluZXIiLCJhZGRDaGlsZCIsInVwZGF0ZUxvb3AiLCJyZXNpemVXaW5kb3ciLCJvbnJlc2l6ZSIsImJpbmQiLCJtcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltRnJhbWUiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJyZXNpemUiLCJkZWdyZWVzIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwibWluIiwibWF4IiwiZmxvb3IiLCJyYWRpYW4yZGVncmVlcyIsInJhZCIsImRlZ3JlZXMycmFkaWFuIiwiZGVnIiwiVmVjdG9yIiwiYXJyIiwib2JqIiwieCIsInkiLCJ2ZWMiLCJzY2FsYXIiLCJzdWJ0cmFjdCIsInZlY3RvciIsImludmVydFgiLCJpbnZlcnRZIiwibGVuZ3RoIiwiZGl2aWRlIiwibm9ybWFsaXplIiwiZmFjdG9yIiwiYWJzIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwicmFuZG9taXplWCIsInJhbmRvbWl6ZVkiLCJyb3VuZCIsInByZWNpc2lvbiIsInRvRml4ZWQiLCJhbW91bnQiLCJtaXhYIiwibWl4WSIsImNvcHlYIiwiY29weVkiLCJ0ZW1wIiwidmVjMiIsImRvdCIsImNvZWZmIiwiYXRhbjIiLCJob3Jpem9udGFsQW5nbGUiLCJ2ZXJ0aWNhbEFuZ2xlIiwiaG9yaXpvbnRhbEFuZ2xlRGVnIiwiYW5nbGUiLCJueCIsImNvcyIsInNpbiIsIm55Iiwicm90YXRlIiwicm90YXRpb24iLCJyb3RhdGVUbyIsInJvdGF0ZUJ5IiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3FydCIsImRpc3RhbmNlU3EiLCJkaXJlY3Rpb24iLCJkeCIsImR5IiwibGVuZ3RoU3EiLCJhIiwiYiIsInYiLCJjbG9uZSIsInJldCIsIm11bHRpcGx5U2NhbGFyIiwiYyIsInIiLCJhYyIsImJjIiwidmVjMSIsInRvIiwiYWRkIiwiUG9pbnQiLCJyYWRpdXMiLCJjb2xvciIsImdlbmVyYXRlIiwiaGV4IiwiYWxwaGEiLCJidXR0b25Nb2RlIiwiaW50ZXJhY3RpdmUiLCJjbGVhciIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwibHQiLCJyYiIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiZnJvbU9iamVjdCIsIkdyYXBoaWNzIiwiUGFzdGVsQ29sb3IiLCJoQmFzZSIsIm5ld0giLCJuZXdMIiwiSFNMdG9SR0IiLCJnIiwiaHNsIiwicmdiIiwiUkdCdG9IZXgiLCJoZXhTaGFwIiwiaCIsInMiLCJsIiwicmQiLCJodWVUb1JHQiIsIm0iLCJuIiwibyIsInEiLCJwIiwicHJlZml4IiwidG9TdHJpbmciLCJDb252ZXhIdWxsIiwicG9pbnRzIiwic3RhY2siLCJzb3J0Iiwic29ydExvd2VyWVgiLCJiYXNlUG9pbnQiLCJpIiwicmVsYXRpdmVQb3NpdGlvbiIsInNvcnRDY3ciLCJwdXNoIiwibmV4dCIsImZpcnN0Iiwic2Vjb25kIiwicG9wIiwiaXNDY3ciLCJjb252ZXhIdWxsIiwiaW5kZXgiLCJwb2ludCIsInBvaW50QSIsInBvaW50QiIsInBvaW50QyIsInRyaWFuZ2xlQXJlYSIsImRlYnVnQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQ29udmV4SHVsbCIsImkwIiwieDAiLCJodWxsIiwiaWgiLCJpZSIsImoiLCJzdWIiLCJjcm9zcyIsImxlbmd0aHNxIiwibmV3UG9pbnRzIiwiTW91c2UiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJwcmV2VGltZSIsImN1cnJlbnRUaW1lIiwiZGlmZlgiLCJkaWZmWSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImdsb2JhbCIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIiwiVE9UQUwiLCJJTlRFUlZBTCIsIlNDQUxFIiwiU1RBR0UiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIlJBRF9UT19ERUciLCJ0cmlhbmdsZXMiLCJjcmVhdGVQb2x5Z29ucyIsInJlY3RhbmdsZXMiLCJUZXN0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJpbml0aWFsaXplIiwic2hhcGVzIiwiZGlzcGxheSIsImRpc3BsYXlDb2xsaXNpb24iLCJrZXlVcExpc3RlbmVyIiwib25LZXlVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd25MaXN0ZW5lciIsIm9uTW91c2VEb3duIiwib24iLCJjaGVja0NvbGxpc2lvbiIsImZvckVhY2giLCJzaGFwZSIsInJlbW92ZUNoaWxkIiwiZGVzdHJveSIsIm1pbmtvd3NraSIsImluZGV4MSIsImluZGV4MiIsInZlcnRpY2VzMSIsInZlcnRpY2VzMiIsIm11bHRpcGx5Iiwic2hhcGUxIiwidmVydGljZXMiLCJzaGFwZTIiLCJwb2x5Z29uMSIsInBvbHlnb24yIiwiZ2prIiwicGVuZXRyYXRpb24iLCJpc0NvbGxpc2lvbiIsImRldGVjdCIsImludGVydmFsSWQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJoaXRBcmVhIiwiUmVjdGFuZ2xlIiwiZSIsImtleUNvZGUiLCJTUEFDRSIsImdldEFuZ2xlIiwibm9ybSIsInJhZGlhbiIsImFjb3MiLCJkb3RQcm9kdWN0IiwicG9seWdvbiIsInRvdGFsIiwicG9seWdvbnMiLCJ2ZXJ0ZXgiLCJGT05UX1NJWkUiLCJTaGFwZSIsImxpbmVDb2xvciIsInRleHRDb2xvciIsImdyYXBoaWNzIiwibGFiZWxzIiwiY3JlYXRlTGFiZWwiLCJkcmF3IiwidGV4dCIsIlRleHQiLCJhbGlnbiIsImZvbnQiLCJmaWxsIiwidmlzaWJsZSIsIm9yaWdpbiIsImxpbmVTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsImxhYmVsIiwiZGl2aWRlU2NhbGFyIiwiQ29uc3RzIiwiVmVydGljZXMiLCJGT05UX0NPTE9SIiwiQVhFU19MSU5FX0NPTE9SIiwiQ09OVkVYX0hVTExfTElORV9DT0xPUiIsIk1pbmtvd3NraURpZmZlcmVuY2UiLCJnZXRWZXJ0aWNlcyIsInRleHRzIiwiZHJhd0F4ZXMiLCJkcmF3VmV0aWNlcyIsImRyYXdQb2x5Z29uIiwiZHJhd1RleHQiLCJodyIsImhoIiwiREVGQVVMVF9NQVhfSVRFUkFUSU9OUyIsIkRFRkFVTFRfREVURUNUX0VQU0lMT04iLCJHamsiLCJtaW5rb3dza2lQZW5ldHJhdGlvblNvbHZlciIsImNvbnZleDEiLCJjb252ZXgyIiwiYzEiLCJnZXRDZW50ZXIiLCJjMiIsInNpbXBsZXgiLCJnZXRJbml0aWFsRGlyZWN0aW9uIiwiZGV0ZWN0MiIsImlzWmVybyIsInNldCIsImdldFN1cHBvcnRQb2ludCIsImludmVydCIsImNoZWNrU2ltcGxleCIsImFvIiwibmVnYXRlIiwiYWIiLCJhY1BlcnAiLCJ0cmlwbGVQcm9kdWN0IiwiYWNMb2NhdGlvbiIsInNwbGljZSIsImFiUGVycCIsImFiTG9jYXRpb24iLCJnZXRNYWduaXR1ZGVTcXVhcmVkIiwiRSIsImxlZnQiLCJFcHNpbG9uIiwiY29tcHV0ZSIsIk1pbmtvd3NraVN1bSIsInBvaW50MSIsImdldEZhcnRoZXN0UG9pbnQiLCJwb2ludDIiLCJDb252ZXgiLCJFcnJvciIsIlBvbHlnb24iLCJub3JtYWxzIiwiZ2V0Q291bnRlckNsb2Nrd2lzZUVkZ2VOb3JtYWxzIiwiY2VudGVyIiwiYXZnIiwiY291bnQiLCJzaXplIiwicHJvamVjdGlvbiIsIm1heGltdW0iLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJsZWZ0TiIsInJpZ2h0TiIsInZtIiwiUG9pbnRGZWF0dXJlIiwidmwiLCJFZGdlRmVhdHVyZSIsInJpZ2h0IiwidnIiLCJHZW9tZXRyeSIsIkFycmF5IiwicDEiLCJwMiIsIlBlbmV0cmF0aW9uIiwibm9ybWFsIiwiZGVwdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQyxjQUFZO0FBQ1RBLFlBQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QixhQUFNQyxPQUFPLElBQUlDLElBQUosRUFBYjtBQUNILE1BRkQ7QUFH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QUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7O2lDQUVPO0FBQ0osa0JBQUtELE1BQUwsR0FBYyxJQUFkO0FBQ0Esa0JBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0g7OztxQ0FFVztBQUNSLG9CQUFPLEtBQUtELE1BQVo7QUFDSDs7O29DQUVVO0FBQ1Asb0JBQU8sS0FBS0MsS0FBWjtBQUNIOztBQUVEOzs7Ozs7O21DQUlVRCxNLEVBQVE7QUFDZCxrQkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7O0FBRUQ7Ozs7Ozs7a0NBSVNDLEssRUFBTztBQUNaLGtCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7Ozs7O21CQXRDZ0JGLFciLCJmaWxlIjoiZXBhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi8uLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvTW91c2VcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiAgICB9XG59KCkpO1xuXG5sZXQgY2FudmFzLCByZW5kZXJlciwgc3RhZ2UsIHRlc3QsIGNvbnRhaW5lcjtcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHtcbiAgICAgICAgICAgIHZpZXc6IGNhbnZhcyxcbiAgICAgICAgICAgIGF1dG9SZXNpemU6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MzMzODNEXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1vdXNlLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgLy8g7JyE7LmY6rCAIOygleyImOqwgCDslYTri5Dqsr3smrAg7Z2Q66a/7ZWY6rKMIOuztOydtOuKlCDrrLjsoJzqsIAg7J6I7Ja0XG4gICAgICAgIC8vIOugjOuNlOufrOydmCDsnITsuZjrpbwg7KCV7IiY66GcIOyXsOyCsOuQoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cbiAgICAgICAgLy9yZW5kZXJlci5yb3VuZFBpeGVscyA9IHRydWU7XG5cbiAgICAgICAgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGVzdCA9IG5ldyBUZXN0KHJlbmRlcmVyKTtcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGVzdCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb29wKCk7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHt9XG5cbiAgICB1cGRhdGVMb29wIChtcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShtcyk7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGVMb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZShtcykge1xuICAgICAgICB0ZXN0LnVwZGF0ZSgpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpO1xuICAgIH1cblxuICAgIHJlc2l6ZVdpbmRvdygpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvKipcbiAgICAgICAgICog7LqU67KE7IqkIOyCrOydtOymiOyZgCDrlJTsiqTtlIzroIjsnbQg7IKs7J207KaIIOyEpOyglVxuICAgICAgICAgKiDroIjti7Drgpgg6re4656Y7ZS9IOyngOybkCDsvZTrk5xcbiAgICAgICAgICovXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQSVhJIHJlbmRlcmVyIOumrOyCrOydtOymiFxuICAgICAgICAgKiBQSVhJIOyXkOqyjCB2aWV3cG9ydCDsgqzsnbTspogg67OA6rK9IOyVjOumvFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICB0ZXN0LnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9lcGEvaW5kZXguanMiLCJcblxuY29uc3QgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG4gICAgcmV0dXJuIHJhZCAqIGRlZ3JlZXM7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMycmFkaWFuIChkZWcpIHtcbiAgICByZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cblxuXG4vKipcbiAqIFZpY3Rvci5qc+ulvCBFUzbroZwg67OA7ZmY7ZWY7JesIOyCrOyaqe2VmOqzoCDsnojsirXri4jri6QuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF4a3VlbmcvdmljdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvclxue1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tQXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21BcnJheShhcnIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tT2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBWZWN0b3IoNDIsIDEzMzcpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6MTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMSwgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdWJ0cmFjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgIH1cblxuXG4gICAgZWRnZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGVkZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QoYSwgYik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAyMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWSgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSB4IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIHkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVZKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgYSBheGlzIHZhbHVlcyBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLyBiLngsIGEueSAvIGIueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFgoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WCgpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRZKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFkoKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydCgpXG4gICAge1xuICAgICAgICB0aGlzLmludmVydFgoKTtcbiAgICAgICAgdGhpcy5pbnZlcnRZKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG5lZ2F0ZSh2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCB2ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIHYueCA9IC12ZWMueDtcbiAgICAgICAgdi55ID0gLXZlYy55O1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG11bHRpcGx5U2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiBzY2FsYXIsIHZlY3Rvci55ICogc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGVTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAvIHNjYWxhciwgdmVjdG9yLnkgLyBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKDkwIOuPhCDtmozsoIQpXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gLXZlYy55O1xuICAgICAgICBjbG9uZS55ID0gdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICgtOTAg64+EIO2ajOyghClcbiAgICAgKi9cbiAgICByZXR1cm5QZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueSwgLXRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmV0dXJuUGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuyhOumvFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlKHZlYywgbGVuZ3RoKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgICAgIGlmIChsZW5ndGhTcSA+IGxlbmd0aCAqIGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0Lm11bHRpcGx5U2NhbGFyKGxlbmd0aCAvIE1hdGguc3FydChsZW5ndGhTcSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG5vcm1hbGl6ZSgpXG4gICAge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZpZGUobmV3IFZlY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbm9ybSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBhYnNvbHV0ZSB2ZWN0b3IgYXhpcyBpcyBncmVhdGVyIHRoYW4gYG1heGAsIG11bHRpcGxpZXMgdGhlIGF4aXMgYnkgYGZhY3RvcmBcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgYm90aCB4IGFuZCB5IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGltaXQobWF4LCBmYWN0b3IpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9taXplcyBib3RoIHZlY3RvciBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODBgKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSwgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB0aGlzLnggPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIGxlZnQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0TGVmdEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICBsZWZ0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gLXRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgcmlnaHQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtAbGluayBWZWN0b3IyfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldFJpZ2h0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIHJpZ2h0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gICAgICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJpcGxlX3Byb2R1Y3QjVmVjdG9yX3RyaXBsZV9wcm9kdWN0XG4gICAgICog7IS46re466i87Yq47JeQ7IScIOybkOygkOycvOuhnCDtlqXtlZjripQg67Cp7Zal7J2EIOywvuydhCDrlYwg7IKs7JqpXG4gICAgICovXG4gICAgc3RhdGljIHRyaXBsZVByb2R1Y3QoYSwgYiwgYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGNvbnN0IGFjID0gYS54ICogYy54ICsgYS55ICogYy55ICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgICAgICwgYmMgPSBiLnggKiBjLnggKyBiLnkgKiBjLnk7ICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuXG4gICAgICAgIC8vIHBlcmZvcm0gYiAqIGEuZG90KGMpIC0gYSAqIGIuZG90KGMpXG4gICAgICAgIHIueCA9IGIueCAqIGFjIC0gYS54ICogYmM7XG4gICAgICAgIHIueSA9IGIueSAqIGFjIC0gYS55ICogYmM7XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBwcm9qZWN0T250byh2ZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgICAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICAgICAgdGhpcy55ID0gY29lZmYgKiB2ZWMyLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ISg7ZiVIOuztOqwhFxuICAgICAqIGh0dHA6Ly9kZXZlbG9wdWcuYmxvZ3Nwb3QuY29tLzIwMTQvMDkvdW5pdHktdmVjdG9yLWxlcnAuaHRtbFxuICAgICAqIEBwYXJhbSB2ZWMxXG4gICAgICogQHBhcmFtIHZlYzJcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyBsZXJwKHZlYzEsIHZlYzIsIHRvKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMxLCAxIC0gdG8pLCBWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMiwgdG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsl63siJhcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmNwKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxIC8gdmVjdG9yLngsIDEgLyB2ZWN0b3IueSk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgYW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICBhbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGVEZWcoKTtcbiAgICB9XG5cblxuICAgIGRpcmVjdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZShhbmdsZSlcbiAgICB7XG4gICAgICAgIHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcm90YXRlRGVnKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgYW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUbyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyb3RhdGlvbi10aGlzLmFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG9EZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnkocm90YXRpb24pXG4gICAge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnlEZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB2ZWMueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFkgYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSAtIHZlYy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGVTcXVhcmVkKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VTcSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVNxKHZlYylcbiAgICB7XG4gICAgICAgIHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG4gICAgICAgICAgICBkeSA9IHRoaXMuZGlzdGFuY2VZKHZlYyk7XG5cbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGgoKTtcbiAgICAgKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLqOyInO2eiCDquLjsnbQg67mE6rWQ66W8IO2VmOugpOuptCBsZW5ndGgg66W8IOyCrOyaqe2VmOq4sCDrs7Tri6TripQgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOqyjCDruaDrpbTri6QuXG4gICAgICogbGVuZ3RoIOuKlCBNYXRoLnNxcnQgKOygnOqzseq3vCkg7LKY66as66W8IO2VmOq4sCDrlYzrrLjsl5Ag64uo7IicIOq4uOydtCDruYTqtZDsi5wgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg67mg66aF64uI64ukLlxuICAgICAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGhTcSgpO1xuICAgICAqICAgICAvLyA9PiAxMjUwMFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aFNxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbGVuZ3RoU3EodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgIH1cblxuXG4gICAgbWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuXG4gICAgdG8odmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjLnggLSB0aGlzLngsIHZlYy55IC0gdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHNldCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjLnplcm8oKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNaZXJvKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdGhpcyB2ZWN0b3IgaXMgdGhlIHNhbWUgYXMgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRXF1YWxUbyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBVdGlsaXR5IE1ldGhvZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9BcnJheSgpO1xuICAgICAqICAgICAvLyA9PiBbMTAsIDIwXVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0FycmF5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gICAgICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvT2JqZWN0KClcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlY3Rvci5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi91dGlscy9QYXN0ZWxDb2xvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzXG57XG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAxMCwgY29sb3IgPSBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmVuZGVyKHJhZGl1cywgY29sb3IsIGFscGhhKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcihyYWRpdXMgPSAxMCwgY29sb3IgPSAweGZmMzMwMCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIHRoaXMuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplKGx0LCByYilcbiAgICB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy52ZWN0b3IucmFuZG9taXplKGx0LCByYik7XG4gICAgICAgIHRoaXMueCA9IHBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMueSA9IHBvc2l0aW9uLnk7XG4gICAgfVxuXG5cbiAgICBnZXQgdmVjdG9yKClcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuZnJvbU9iamVjdCh0aGlzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbS9Qb2ludC5qcyIsIi8qKlxuICogaHR0cHM6Ly9jb2RlcGVuLmlvL3BsaXUvcGVuL0JMRUt3QVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXN0ZWxDb2xvciB7XG4gICAgc3RhdGljIGdlbmVyYXRlKCkge1xuICAgICAgICBjb25zdCBoQmFzZSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGNvbnN0IG5ld0ggPSBNYXRoLmZsb29yKGhCYXNlICogMzYwKTtcbiAgICAgICAgY29uc3QgbmV3TCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KSArIDc1O1xuICAgICAgICBjb25zdCBjb2xvciA9IGBoc2woJHtuZXdIfSwgMTAwJSwgJHtuZXdMfSUpYDtcbiAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gdGhpcy5IU0x0b1JHQihoQmFzZSwgMSwgbmV3TCAqIC4wMSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhzbDogY29sb3IsIC8vIGhzbCgwLCAxMDAlLCA4NSUpO1xuICAgICAgICAgICAgcmdiOiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYCwgLy8gcmdiKDI1NSwgMTI4LCAxMjgpO1xuICAgICAgICAgICAgaGV4OiBgJHt0aGlzLlJHQnRvSGV4KHIsIGcsIGIpfWAsIC8vIDB4ZmY4MDgwXG4gICAgICAgICAgICBoZXhTaGFwOmAke3RoaXMuUkdCdG9IZXgociwgZywgYiwgJyMnKX1gLCAvLyAjZmY4MDgwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSFNMIHRvIFJHQiBmb3JtdWxhIGFkYXB0ZWQgZnJvbTpcbiAgICAgKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9tamFja3Nvbi81MzExMjU2XG4gICAgICogKHNraXBwaW5nIHRvIGVsc2V7fSBzaW5jZSBzIHdpbGwgYWx3YXlzIGJlIDEwMCUpXG4gICAgICogQHBhcmFtIGhcbiAgICAgKiBAcGFyYW0gc1xuICAgICAqIEBwYXJhbSBsXG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgSFNMdG9SR0IoaCwgcywgbCkge1xuICAgICAgICBsZXQgciwgZywgYjtcblxuICAgICAgICBjb25zdCByZCA9IChhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heChNYXRoLm1pbihhICogMjU2LCAyNTUpLCAwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaHVlVG9SR0IgPSAobSwgbiwgbykgPT4ge1xuICAgICAgICAgICAgaWYgKG8gPCAwKSBvICs9IDE7XG4gICAgICAgICAgICBpZiAobyA+IDEpIG8gLT0gMTtcbiAgICAgICAgICAgIGlmIChvIDwgMSAvIDYpIHJldHVybiBtICsgKG4gLSBtKSAqIDYgKiBvO1xuICAgICAgICAgICAgaWYgKG8gPCAxIC8gMikgcmV0dXJuIG47XG4gICAgICAgICAgICBpZiAobyA8IDIgLyAzKSByZXR1cm4gbSArIChuIC0gbSkgKiAoMiAvIDMgLSBvKSAqIDY7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcblxuICAgICAgICByID0gaHVlVG9SR0IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgICAgZyA9IGh1ZVRvUkdCKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlVG9SR0IocCwgcSwgaCAtIDEgLyAzKTtcblxuICAgICAgICByZXR1cm4gW3JkKHIpLCByZChnKSwgcmQoYildXG4gICAgfVxuXG4gICAgc3RhdGljIFJHQnRvSGV4KHIsIGcsIGIsIHByZWZpeCA9ICcweCcpIHtcbiAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0ke3IudG9TdHJpbmcoMTYpfSR7Zy50b1N0cmluZygxNil9JHtiLnRvU3RyaW5nKDE2KX1gO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9QYXN0ZWxDb2xvci5qcyIsIi8qKlxuICogaHR0cHM6Ly93d3cuY3JvY3VzLmNvLmtyLzEyODhcbiAqL1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vVmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZleEh1bGwge1xuICAgIHN0YXRpYyBnZW5lcmF0ZShwb2ludHMpIHtcblxuICAgICAgICBjb25zdCBzdGFjayA9IFtdLFxuICAgICAgICAgICAgbiA9IHBvaW50cy5sZW5ndGg7XG5cbiAgICAgICAgLy8geeyijO2RnCwgeOyijO2RnCDsnpHsnYAg7Iic7Jy866GcIOygleugrFxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRMb3dlcllYKTtcblxuICAgICAgICAvLyDquLDspIDsoJAg7ISk7KCVXG4gICAgICAgIGNvbnN0IGJhc2VQb2ludCA9IHBvaW50c1swXTtcblxuICAgICAgICAvLyDquLDspIDsoJAg6riw7KSA7Jy866GcIHZlY3RvciDrpbwg7IOd7ISx7ZWY6rOgIOyZuOyggeydhCDqtaztlbTshJwg67CYIOyLnOqzhCDrsKntlqXsnLzroZwgKGNjdykg7KCV66CsIO2VqeuLiOuLpC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50c1tpXS5yZWxhdGl2ZVBvc2l0aW9uID0gbmV3IFZlY3RvcihcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueCAtIGJhc2VQb2ludC54LFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXS55IC0gYmFzZVBvaW50LnlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2ludHMuc29ydCh0aGlzLnNvcnRDY3cpO1xuXG4gICAgICAgIC8vIOyKpO2DneyXkCBmaXJzdCwgc2Vjb25kIOulvCDrhKPsirXri4jri6QuXG4gICAgICAgIHN0YWNrLnB1c2goMCk7XG4gICAgICAgIHN0YWNrLnB1c2goMSk7XG5cbiAgICAgICAgbGV0IG5leHQgPSAyO1xuXG4gICAgICAgIHdoaWxlIChuZXh0IDwgbikge1xuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0LCBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgc2Vjb25kID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpcnN0LCBzZWNvbmQsIG5leHTqsIAg7KKM7ZqM7KCEICggMCDrs7Tri6Qg7YGs66m0ICnsnbTrnbzrqbQgc2Vjb25kIHB1c2hcbiAgICAgICAgICAgICAgICAvLyDsmrDtmozsoIQoIDAg67O064ukIOyekeycvOuptCApIOydtOudvOuptCDsnITsnZggd2hpbGXrrLgg6rOE7IaNIOuwmOuztVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2N3KHBvaW50c1tmaXJzdF0sIHBvaW50c1tzZWNvbmRdLCBwb2ludHNbbmV4dF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc2Vjb25kKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHQrKyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gc3RhY2subGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YWNrW2ldO1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaW5kZXhdO1xuICAgICAgICAgICAgY29udmV4SHVsbC5wdXNoKG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnZleEh1bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeSwgeCDqsIAg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBzb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICBpZiAocG9pbnRBLnkgIT09IHBvaW50Qi55KSB7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnRBLnkgLSBwb2ludEIueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRBLnggLSBwb2ludEIueDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDquLDspIAg7KKM7ZGcIOq4sOykgOycvOuhnCDsg4HrjIAg7KKM7ZGc66W8IOq1rO2VtOyEnCDsi5zqs4Qg67CY64yAIOuwqe2WpeycvOuhnCDsoJXroKztlanri4jri6QuXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydENjdyhwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAvLyDspJHsi6wg7KKM7ZGc7J24IOqyveyasCByZWxhdGl2ZVBvc2l0aW9uIOydtCDsl4bsirXri4jri6QuIOykkeyLrCDsooztkZzrpbwgMOuyiOycvOuhnCDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBpZiAoIXBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGEgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi55ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgYiA9IHBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uLnggKiBwb2ludEIucmVsYXRpdmVQb3NpdGlvbi55O1xuXG4gICAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29udmV4SHVsbC5zb3J0TG93ZXJZWChwb2ludEEsIHBvaW50Qik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67CYIOyLnOqzhCDrsKntlqXsnbjsp4Ag7Jes67aAXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcGFyYW0gcG9pbnRDXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQ2N3KHBvaW50QSwgcG9pbnRCLCBwb2ludEMpIHtcbiAgICAgICAgLy8gY29uc3QgdHJpYW5nbGVBcmVhID0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpO1xuICAgICAgICBjb25zdCB0cmlhbmdsZUFyZWEgPSAgKHBvaW50Qy54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpIC0gKHBvaW50Qi54IC0gcG9pbnRBLngpICogKHBvaW50Qy55IC0gcG9pbnRBLnkpO1xuICAgICAgICBpZiAodHJpYW5nbGVBcmVhID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z0FycmF5KGFycikge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYXJyLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJbaV0ueCwgYXJyW2ldLnkpO1xuICAgIH1cbn1cblxuXG4vKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTIgSnUgSHl1bmcgTGVlXG4qXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZVxuKiBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbiogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4qIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Jcbiogc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElOR1xuKiBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbiogREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIENyZWF0ZSB0aGUgY29udmV4IGh1bGwgdXNpbmcgdGhlIEdpZnQgd3JhcHBpbmcgYWxnb3JpdGhtXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dpZnRfd3JhcHBpbmdfYWxnb3JpdGhtXG5mdW5jdGlvbiBjcmVhdGVDb252ZXhIdWxsKHBvaW50cykge1xuICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICB2YXIgaTAgPSAwO1xuICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGh1bGwgPSBbXTtcbiAgICB2YXIgbSA9IDA7XG4gICAgdmFyIGloID0gaTA7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHIgPSB2ZWMyLnN1Yihwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIHYgPSB2ZWMyLnN1Yihwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICB2YXIgYyA9IHZlYzIuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aHNxKCkgPiByLmxlbmd0aHNxKCkpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtKys7XG4gICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvcHkgdmVydGljZXNcbiAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgbmV3UG9pbnRzLnB1c2gocG9pbnRzW2h1bGxbaV1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UG9pbnRzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vc3JjL2dqay9TaGFwZSc7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uLy4uL3NyYy9namsvQ29uc3RzJztcbmltcG9ydCBWZXJ0aWNlcyBmcm9tICcuLi8uLi9zcmMvZ2prL1ZlcnRpY2VzJztcbmltcG9ydCBDb252ZXhIdWxsIGZyb20gJy4uLy4uL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwnO1xuaW1wb3J0IE1pbmtvd3NraURpZmZlcmVuY2UgZnJvbSAnLi4vLi4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlJztcbmltcG9ydCBHamsgZnJvbSAnLi4vLi4vc3JjL2R5bjRqL0dqayc7XG5pbXBvcnQgQ29udmV4IGZyb20gJy4uLy4uL3NyYy9keW40ai9Db252ZXgnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc3JjL2R5bjRqL1BvbHlnb24nO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcIi4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZVwiO1xuaW1wb3J0IFBlbmV0cmF0aW9uIGZyb20gXCIuLi8uLi9zcmMvZHluNGovUGVuZXRyYXRpb25cIjtcblxuY29uc3QgVE9UQUwgPSAzMFxuICAgICwgSU5URVJWQUwgPSA2MDAwMDBcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFXG4gICAgLCBTVEFHRSA9IENvbnN0cy5TVEFHRVxuICAgICwgVE9QX0xFRlQgPSB7eDogMiwgeTogMn1cbiAgICAsIFRPUF9SSUdIVCA9IHt4OiAxNywgeTogMTd9XG4gICAgLCBSQURfVE9fREVHID0gMTgwIC8gTWF0aC5QSTtcblxuY29uc3QgdHJpYW5nbGVzID0gY3JlYXRlUG9seWdvbnMoMywgVE9UQUwpO1xuY29uc3QgcmVjdGFuZ2xlcyA9IGNyZWF0ZVBvbHlnb25zKDQsIFRPVEFMKTtcblxuLypjb25zdCB0cmlhbmdsZXMgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMywgNSksIG5ldyBWZWN0b3IoNiwgNCldLFxuICAgIFtuZXcgVmVjdG9yKDQsIDExKSwgbmV3IFZlY3Rvcig0LCA1KSwgbmV3IFZlY3Rvcig5LCA5KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoMCwgLTEpLCBuZXcgVmVjdG9yKDMsIDEpLCBuZXcgVmVjdG9yKDEsIDMpXSxcbl07XG5jb25zdCByZWN0YW5nbGVzID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDgsIDEpLCBuZXcgVmVjdG9yKDgsIDUpLCBuZXcgVmVjdG9yKDExLCA1KSwgbmV3IFZlY3RvcigxMSwgMSldLFxuICAgIFtuZXcgVmVjdG9yKDUsIDcpLCBuZXcgVmVjdG9yKDcsIDMpLCBuZXcgVmVjdG9yKDEwLCAyKSwgbmV3IFZlY3RvcigxMiwgNyldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDIsIC0yKSwgbmV3IFZlY3Rvcig1LCAtMSksIG5ldyBWZWN0b3IoNCwgMiksIG5ldyBWZWN0b3IoMSwgMSldLFxuXTsqL1xuXG4vKmNvbnN0IGVycm9yQ2FzZTEgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMiwgNyksIG5ldyBWZWN0b3IoMTIsIDMpLCBuZXcgVmVjdG9yKDEyLCAxNyldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDgsIDgpLCBuZXcgVmVjdG9yKDEwLCA3KSwgbmV3IFZlY3RvcigxNCwgOCldLFxuICAgIFtuZXcgVmVjdG9yKDEwLCAxMyksIG5ldyBWZWN0b3IoMTQsIDE1KSwgbmV3IFZlY3RvcigxMSwgMTQpXSxcbl07XG5cbmNvbnN0IGVycm9yQ2FzZTIgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMTQsIDIpLCBuZXcgVmVjdG9yKDE3LCAyKSwgbmV3IFZlY3RvcigxNCwgNyksIG5ldyBWZWN0b3IoOSwgNyldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDcsIDUpLCBuZXcgVmVjdG9yKDE1LCAxMCksIG5ldyBWZWN0b3IoMTYsIDExKSwgbmV3IFZlY3RvcigxNSwgMTQpXSxcbiAgICBbbmV3IFZlY3Rvcig5LCA4KSwgbmV3IFZlY3RvcigxNCwgMTUpLCBuZXcgVmVjdG9yKDQsIDE1KSwgbmV3IFZlY3RvcigzLCAxMildLFxuXTsqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMucmVuZGVyZXIudmlldztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheUNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5rZXlVcExpc3RlbmVyID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXBMaXN0ZW5lcik7XG5cbiAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25MaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgZGlzcGxheUNvbGxpc2lvbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHNoYXBlKTtcbiAgICAgICAgICAgIHNoYXBlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaGFwZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMubWlua293c2tpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLm1pbmtvd3NraSk7XG4gICAgICAgIHRoaXMubWlua293c2tpLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbigpIHtcbiAgICAgICAgY29uc3QgaW5kZXgxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdHJpYW5nbGVzLmxlbmd0aClcbiAgICAgICAgICAgICwgaW5kZXgyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVjdGFuZ2xlcy5sZW5ndGgpXG4gICAgICAgICAgICAsIHZlcnRpY2VzMSA9IG5ldyBWZXJ0aWNlcyh0cmlhbmdsZXNbaW5kZXgxXSlcbiAgICAgICAgICAgICwgdmVydGljZXMyID0gbmV3IFZlcnRpY2VzKHJlY3RhbmdsZXNbaW5kZXgyXSk7XG5cbiAgICAgICAgLypjb25zdCBpbmRleDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcnJvckNhc2UxLmxlbmd0aClcbiAgICAgICAgICAgICwgaW5kZXgyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXJyb3JDYXNlMi5sZW5ndGgpXG4gICAgICAgICAgICAsIHZlcnRpY2VzMSA9IG5ldyBWZXJ0aWNlcyhlcnJvckNhc2UxW2luZGV4MV0pXG4gICAgICAgICAgICAsIHZlcnRpY2VzMiA9IG5ldyBWZXJ0aWNlcyhlcnJvckNhc2UyW2luZGV4Ml0pOyovXG5cbiAgICAgICAgdmVydGljZXMxLm11bHRpcGx5KFNDQUxFKTtcbiAgICAgICAgdmVydGljZXMyLm11bHRpcGx5KFNDQUxFKTtcblxuICAgICAgICBjb25zdCBzaGFwZTEgPSBuZXcgU2hhcGUodmVydGljZXMxLnZlcnRpY2VzLCBTQ0FMRSlcbiAgICAgICAgICAgICwgc2hhcGUyID0gbmV3IFNoYXBlKHZlcnRpY2VzMi52ZXJ0aWNlcywgU0NBTEUpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraSA9IG5ldyBNaW5rb3dza2lEaWZmZXJlbmNlKHZlcnRpY2VzMS52ZXJ0aWNlcywgdmVydGljZXMyLnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kueCA9IChTVEFHRS53aWR0aCAvIDMpICogMjtcbiAgICAgICAgdGhpcy5taW5rb3dza2kueSA9IChTVEFHRS5oZWlnaHQgLyAzKSAqIDI7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChzaGFwZTEpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHNoYXBlMik7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5taW5rb3dza2kpO1xuXG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUxKTtcbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZTIpO1xuXG4gICAgICAgIHZlcnRpY2VzMS5kaXZpZGUoU0NBTEUpO1xuICAgICAgICB2ZXJ0aWNlczIuZGl2aWRlKFNDQUxFKTtcblxuICAgICAgICBjb25zdCBwb2x5Z29uMSA9IG5ldyBQb2x5Z29uKHZlcnRpY2VzMS52ZXJ0aWNlcylcbiAgICAgICAgICAgICwgcG9seWdvbjIgPSBuZXcgUG9seWdvbih2ZXJ0aWNlczIudmVydGljZXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb2x5Z29uMScsIHBvbHlnb24xKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BvbHlnb24yJywgcG9seWdvbjIpO1xuXG5cbiAgICAgICAgY29uc3QgZ2prID0gbmV3IEdqaygpXG4gICAgICAgICAgICAsIHBlbmV0cmF0aW9uID0gbmV3IFBlbmV0cmF0aW9uKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc0NvbGxpc2lvbiA9IGdqay5kZXRlY3QocG9seWdvbjEsIHBvbHlnb24yLCBwZW5ldHJhdGlvbik7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2lzQ29sbGlzaW9uJywgaXNDb2xsaXNpb24pO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGxheUNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmRpc3BsYXlDb2xsaXNpb24sIElOVEVSVkFMKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cblxuICAgIG9uS2V5VXAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICog65GQ67Kh7YSwIOyCrOydtOqwgSDqtaztlZjquLBcbiAqIEBwYXJhbSBhXG4gKiBAcGFyYW0gYlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0QW5nbGUoYSwgYikge1xuICAgIGEgPSBuZXcgVmVjdG9yKGEueCwgYS55KS5ub3JtKCk7XG4gICAgYiA9IG5ldyBWZWN0b3IoYi54LCBiLnkpLm5vcm0oKTtcbiAgICBjb25zdCByYWRpYW4gPSBNYXRoLmFjb3MoVmVjdG9yLmRvdFByb2R1Y3QoYSwgYikpO1xuICAgIHJldHVybiByYWRpYW4gKiBSQURfVE9fREVHO1xufVxuXG5cbi8qKlxuICog656c642k7Jy866GcIOyijO2RnOulvCDsg53shLHtlZjqs6AgY29udmV4IGh1bGwg7J2EIOunjOuTpOuptCBPS1xuICogQHBhcmFtIHBvbHlnb25cbiAqIEBwYXJhbSB0b3RhbFxuICovXG5mdW5jdGlvbiBjcmVhdGVQb2x5Z29ucyhwb2x5Z29uLCB0b3RhbCkge1xuICAgIGxldCB2ZXJ0aWNlcztcbiAgICBjb25zdCBwb2x5Z29ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgIHZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb2x5Z29uOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlY3Rvci5yYW5kb21pemUoVE9QX0xFRlQsIFRPUF9SSUdIVCk7XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG5cbiAgICAgICAgICAgIGlmIChqID09PSBwb2x5Z29uIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZleEh1bGwgPSBDb252ZXhIdWxsLmdlbmVyYXRlKHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IGNvbnZleEh1bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwb2x5Z29ucy5wdXNoKHZlcnRpY2VzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9seWdvbnM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L2VwYS9UZXN0LmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IENvbnN0cyBmcm9tICcuLi9namsvQ29uc3RzJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi8uLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3InO1xuXG5jb25zdCBGT05UX1NJWkUgPSAnOXB4J1xuICAgICwgU0NBTEUgPSBDb25zdHMuU0NBTEU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzID0gW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgICAgIHRoaXMubGluZUNvbG9yID0gY29sb3IuaGV4O1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9IGNvbG9yLmhleFNoYXA7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmxhYmVscyA9IHRoaXMuY3JlYXRlTGFiZWwoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChpLCB7XG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGZvbnQ6IEZPTlRfU0laRSxcbiAgICAgICAgICAgICAgICBmaWxsOiB0aGlzLnRleHRDb2xvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGV4dC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBsYWJlbHMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVscztcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFwaGljc1xuICAgICAgICAgICAgLCB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXNcbiAgICAgICAgICAgICwgb3JpZ2luID0gdmVydGljZXNbMF07XG5cbiAgICAgICAgZy5jbGVhcigpO1xuICAgICAgICBnLmxpbmVTdHlsZSgxLCB0aGlzLmxpbmVDb2xvciwgMC41KTtcbiAgICAgICAgZy5tb3ZlVG8ob3JpZ2luLngsIG9yaWdpbi55KTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZy5saW5lVG8odmVydGV4LngsIHZlcnRleC55KTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbHNbaW5kZXhdXG4gICAgICAgICAgICAgICAgLCB2ZWMgPSBWZWN0b3IuZGl2aWRlU2NhbGFyKHZlcnRleCwgU0NBTEUpO1xuXG4gICAgICAgICAgICBsYWJlbC54ID0gdmVydGV4Lng7XG4gICAgICAgICAgICBsYWJlbC55ID0gdmVydGV4Lnk7XG5cbiAgICAgICAgICAgIGxhYmVsLnRleHQgPSBgKCR7dmVjLnh9LCR7dmVjLnl9KWA7XG4gICAgICAgICAgICBsYWJlbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGcubGluZVRvKG9yaWdpbi54LCBvcmlnaW4ueSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxhYmVscy5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChsYWJlbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGFiZWxzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMubGFiZWxzID0gbnVsbDtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvU2hhcGUuanMiLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RzIHtcbiAgICBzdGF0aWMgZ2V0IFNDQUxFKCkge1xuICAgICAgICByZXR1cm4gMTQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFHRSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlID0ge3g6IDAsIHk6IDAsIHdpZHRoOiA2MDAsIGhlaWdodDogNjAwfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFnZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9Db25zdHMuanMiLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljZXMge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzID0gW10pIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KHNjYWxhcikge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggKj0gc2NhbGFyO1xuICAgICAgICAgICAgdmVydGV4LnkgKj0gc2NhbGFyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXZpZGUoc2NhbGFyKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICB2ZXJ0ZXgueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB2ZXJ0ZXgueSAvPSBzY2FsYXI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvVmVydGljZXMuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9Qb2ludCc7XG5pbXBvcnQgQ29udmV4SHVsbCBmcm9tICcuLi9jb252ZXhodWxsL0NvbnZleEh1bGwnO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uL3V0aWxzL1Bhc3RlbENvbG9yJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vZ2prL0NvbnN0cyc7XG5cblxuY29uc3QgU0NBTEUgPSBDb25zdHMuU0NBTEVcbiAgICAsIFNUQUdFID0gQ29uc3RzLlNUQUdFXG4gICAgLCBGT05UX0NPTE9SID0gJyNGRkZGRkYnXG4gICAgLCBBWEVTX0xJTkVfQ09MT1IgPSAnMHhGRkZGRkYnXG4gICAgLCBDT05WRVhfSFVMTF9MSU5FX0NPTE9SID0gUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKS5oZXg7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlua293c2tpRGlmZmVyZW5jZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuXG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMilcbiAgICAgICAgICAgICwgY29udmV4SHVsbCA9IHRoaXMuY29udmV4SHVsbCA9IENvbnZleEh1bGwuZ2VuZXJhdGUodmVydGljZXMpO1xuXG4gICAgICAgIHRoaXMudGV4dHMgPSBbXTtcbiAgICAgICAgdGhpcy5kcmF3QXhlcygpO1xuICAgICAgICB0aGlzLmRyYXdWZXRpY2VzKHZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5kcmF3UG9seWdvbihjb252ZXhIdWxsKTtcbiAgICB9XG5cbiAgICBkcmF3VmV0aWNlcyh2ZXJ0aWNlcykge1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KHZlcnRleC54LCB2ZXJ0ZXgueSwgMywgUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKS5oZXgpO1xuICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHBvaW50KTtcblxuICAgICAgICAgICAgY29uc3QgdmVjID0gVmVjdG9yLmRpdmlkZVNjYWxhcih2ZXJ0ZXgsIFNDQUxFKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RleHQoYCgke3ZlYy54fSwgJHt2ZWMueX0pYCwgcG9pbnQudmVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd1BvbHlnb24odmVydGljZXMpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3M7XG5cbiAgICAgICAgZy5saW5lU3R5bGUoMSwgQ09OVkVYX0hVTExfTElORV9DT0xPUiwgMC41KTtcbiAgICAgICAgZy5tb3ZlVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4geyBnLmxpbmVUbyh2ZXJ0ZXgueCwgdmVydGV4LnkpO30pO1xuICAgICAgICBnLmxpbmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgICB9XG5cbiAgICBkcmF3QXhlcygpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3NcbiAgICAgICAgICAgICwgaHcgPSBTVEFHRS53aWR0aCAvIDJcbiAgICAgICAgICAgICwgaGggPSBTVEFHRS5oZWlnaHQgLyAyO1xuXG4gICAgICAgIGcubGluZVN0eWxlKDEsIEFYRVNfTElORV9DT0xPUiwgMC41KTtcbiAgICAgICAgZy5tb3ZlVG8oLWh3LCAwKTtcbiAgICAgICAgZy5saW5lVG8oaHcsIDApO1xuICAgICAgICBnLm1vdmVUbygwLCAtaGgpO1xuICAgICAgICBnLmxpbmVUbygwLCBoaCk7XG4gICAgfVxuXG4gICAgZHJhd1RleHQodGV4dCwgdmVydGV4ID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gbmV3IFBJWEkuVGV4dCh0ZXh0LCB7XG4gICAgICAgICAgICBmb250OiAnMjBweCcsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmaWxsOiBGT05UX0NPTE9SXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxhYmVsLnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgbGFiZWwueSA9IHZlcnRleC55O1xuICAgICAgICB0aGlzLnRleHRzLnB1c2gobGFiZWwpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGxhYmVsKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudGV4dHMuZm9yRWFjaCgodGV4dCkgPT4ge1xuICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHBvaW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICB9XG5cbiAgICBnZXRWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB2ZXJ0aWNlczEuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgdmVydGljZXMyLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKFZlY3Rvci5zdWJ0cmFjdChhLCBiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9NaW5rb3dza2lEaWZmZXJlbmNlLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEVwc2lsb24gZnJvbSAnLi9FcHNpbG9uJztcbmltcG9ydCBNaW5rb3dza2lTdW0gZnJvbSAnLi9NaW5rb3dza2lTdW0nO1xuXG5jb25zdCBERUZBVUxUX01BWF9JVEVSQVRJT05TID0gMzA7XG5jb25zdCBERUZBVUxUX0RFVEVDVF9FUFNJTE9OID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2prIHtcbiAgICBjb25zdHJ1Y3RvcihtaW5rb3dza2lQZW5ldHJhdGlvblNvbHZlcikge1xuICAgICAgICB0aGlzLm1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyID0gbWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXI7XG4gICAgfVxuXG4gICAgZ2V0SW5pdGlhbERpcmVjdGlvbihjb252ZXgxLCBjb252ZXgyKSB7XG4gICAgICAgIC8vIHRyYW5zZm9ybSBpbnRvIHdvcmxkIHNwYWNlIGlmIHRyYW5zZm9ybSBpcyBub3QgbnVsbFxuICAgICAgICBjb25zdCBjMSA9IGNvbnZleDEuZ2V0Q2VudGVyKCk7XG4gICAgICAgIGNvbnN0IGMyID0gY29udmV4Mi5nZXRDZW50ZXIoKTtcbiAgICAgICAgLy8gY2hvb3NlIHNvbWUgc2VhcmNoIGRpcmVjdGlvblxuICAgICAgICByZXR1cm4gYzIuc3VidHJhY3QoYzEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnZleDEge0NvbnZleH1cbiAgICAgKiBAcGFyYW0gY29udmV4MiB7Q29udmV4fVxuICAgICAqIEBwYXJhbSBwZW5ldHJhdGlvbiB7UGVuZXRyYWlvbn1cbiAgICAgKi9cbiAgICBkZXRlY3QoY29udmV4MSwgY29udmV4MiwgcGVuZXRyYXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2ltcGxleCA9IFtdO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIE1pbmtvd3NraSBzdW1cbiAgICAgICAgY29uc3QgbXMgPSBuZXcgTWlua293c2tpU3VtKGNvbnZleDEsIGNvbnZleDIpO1xuXG4gICAgICAgIC8vIGNob29zZSBzb21lIHNlYXJjaCBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXRJbml0aWFsRGlyZWN0aW9uKGNvbnZleDEsIGNvbnZleDIpO1xuXG4gICAgICAgIC8vIHBlcmZvcm0gdGhlIGRldGVjdGlvblxuICAgICAgICBpZiAodGhpcy5kZXRlY3QyKG1zLCBzaW1wbGV4LCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAvLyB0aGlzLm1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyLmdldFBlbmV0cmF0aW9uKHNpbXBsZXgsIG1zLCBwZW5ldHJhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtcyB7TWlua293c2tpU3VtfVxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGV0ZWN0Mihtcywgc2ltcGxleCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBhIHplcm8gZGlyZWN0aW9uIHZlY3RvclxuICAgICAgICBpZiAoZGlyZWN0aW9uLmlzWmVybygpKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24uc2V0KDEsIDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0aGUgZmlyc3QgcG9pbnRcbiAgICAgICAgc2ltcGxleFswXSA9IG1zLmdldFN1cHBvcnRQb2ludChkaXJlY3Rpb24pO1xuICAgICAgICAvLyBpcyB0aGUgc3VwcG9ydCBwb2ludCBwYXN0IHRoZSBvcmlnaW4gYWxvbmcgZD9cbiAgICAgICAgLy8gc3VwcG9ydCBwb2ludCDrsKntlqXsnYQg65Sw6528IOybkOygkOydhCDsp4DrgpjripTsp4Ag7LK07YGsICjsm5DsoJDsnYQg7KeA64KY7KeAIOyViuuKlOuLpOuptFgpXG4gICAgICAgIGlmIChzaW1wbGV4WzBdLmRvdChkaXJlY3Rpb24pIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZWdhdGUgdGhlIHNlYXJjaCBkaXJlY3Rpb25cbiAgICAgICAgZGlyZWN0aW9uLmludmVydCgpO1xuICAgICAgICAvLyBzdGFydCB0aGUgbG9vcFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERFRkFVTFRfTUFYX0lURVJBVElPTlM7IGkrKykge1xuICAgICAgICAgICAgLy8gYWx3YXlzIGFkZCBhbm90aGVyIHBvaW50IHRvIHRoZSBzaW1wbGV4IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxvb3BcbiAgICAgICAgICAgIHNpbXBsZXgucHVzaChtcy5nZXRTdXBwb3J0UG9pbnQoZGlyZWN0aW9uKSk7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgbGFzdCBwb2ludCB3ZSBhZGRlZCB3YXMgcGFzdCB0aGUgb3JpZ2luXG4gICAgICAgICAgICBpZiAoc2ltcGxleFtzaW1wbGV4Lmxlbmd0aCAtIDFdLmRvdChkaXJlY3Rpb24pIDw9IERFRkFVTFRfREVURUNUX0VQU0lMT04pIHtcbiAgICAgICAgICAgICAgICAvLyBhIGlzIG5vdCBwYXN0IHRoZSBvcmlnaW4gc28gdGhlcmVmb3JlIHRoZSBzaGFwZXMgZG8gbm90IGludGVyc2VjdFxuICAgICAgICAgICAgICAgIC8vIGhlcmUgd2UgdHJlYXQgdGhlIG9yaWdpbiBvbiB0aGUgbGluZSBhcyBubyBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBpbW1lZGlhdGVseSByZXR1cm4gd2l0aCBudWxsIGluZGljYXRpbmcgbm8gcGVuZXRyYXRpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIHBhc3QgdGhlIG9yaWdpbiwgdGhlbiB0ZXN0IHdoZXRoZXIgdGhlIHNpbXBsZXggY29udGFpbnMgdGhlIG9yaWdpblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU2ltcGxleChzaW1wbGV4LCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzaW1wbGV4IGNvbnRhaW5zIHRoZSBvcmlnaW4gdGhlbiB3ZSBrbm93IHRoYXQgdGhlcmUgaXMgYW4gaW50ZXJzZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBicm9rZSBvdXQgb2YgdGhlIGxvb3AgdGhlbiB3ZSBrbm93IHRoZXJlIHdhcyBhbiBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzaW1wbGV4IGRvZXMgbm90IGNvbnRhaW4gdGhlIG9yaWdpbiB0aGVuIHdlIG5lZWQgdG8gbG9vcCB1c2luZyB0aGUgbmV3XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIGRpcmVjdGlvbiBhbmQgc2ltcGxleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHNpbXBsZXggY29udGFpbnMgdGhlIG9yaWdpbi4gIElmIGl0IGRvZXMgY29udGFpbiB0aGUgb3JpZ2luLFxuICAgICAqIHRoZW4gdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gdHJ1ZS4gIElmIGl0IGRvZXMgbm90LCB0aGlzIG1ldGhvZCB3aWxsIHVwZGF0ZSBib3RoIHRoZSBnaXZlblxuICAgICAqIHNpbXBsZXggYW5kIGFsc28gdGhlIGdpdmVuIHNlYXJjaCBkaXJlY3Rpb24uXG4gICAgICogPHA+XG4gICAgICogVGhpcyBtZXRob2Qgb25seSBoYW5kbGVzIHRoZSBsaW5lIHNlZ21lbnQgYW5kIHRyaWFuZ2xlIHNpbXBsZXggY2FzZXMsIGhvd2V2ZXIsIHRoZXNlIHR3byBjYXNlc1xuICAgICAqIHNob3VsZCBiZSB0aGUgb25seSBvbmVzIG5lZWRlZCBmb3IgMiBkaW1lbnNpb25hbCB7QGxpbmsgR2prfS4gIFRoZSBzaW5nbGUgcG9pbnQgY2FzZSBpcyBoYW5kbGVkXG4gICAgICogaW4ge0BsaW5rICNkZXRlY3QoTWlua293c2tpU3VtLCBMaXN0LCBWZWN0b3IyKX0uXG4gICAgICogPHA+XG4gICAgICogVGhpcyBtZXRob2QgYWxzbyBhc3N1bWVzIHRoYXQgdGhlIGxhc3QgcG9pbnQgaW4gdGhlIHNpbXBsZXggaXMgdGhlIG1vc3QgcmVjZW50bHkgYWRkZWQgcG9pbnQuXG4gICAgICogVGhpcyBtYXR0ZXJzIGJlY2F1c2Ugb3B0aW1pemF0aW9ucyBhcmUgYXZhaWxhYmxlIHdoZW4geW91IGtub3cgdGhpcyBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNoZWNrU2ltcGxleChzaW1wbGV4LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIG5ldmVyIGJlIHN1cHBsaWVkIGFueXRoaW5nIG90aGVyIHRoYW4gMiBvciAzIHBvaW50cyBmb3IgdGhlIHNpbXBsZXhcbiAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IHBvaW50IGFkZGVkIChhKVxuICAgICAgICBjb25zdCBhID0gc2ltcGxleFtzaW1wbGV4Lmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSBzYW1lIGFzIGEudG8oT1JJR0lOKTtcbiAgICAgICAgY29uc3QgYW8gPSBWZWN0b3IubmVnYXRlKGEpO1xuICAgICAgICAvLyBjaGVjayB0byBzZWUgd2hhdCB0eXBlIG9mIHNpbXBsZXggd2UgaGF2ZVxuICAgICAgICBpZiAoc2ltcGxleC5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgLy8gdGhlbiB3ZSBoYXZlIGEgdHJpYW5nbGVcbiAgICAgICAgICAgIGNvbnN0IGIgPSBzaW1wbGV4WzFdO1xuICAgICAgICAgICAgY29uc3QgYyA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVkZ2VzXG4gICAgICAgICAgICBjb25zdCBhYiA9IGEudG8oYik7XG4gICAgICAgICAgICBjb25zdCBhYyA9IGEudG8oYyk7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVkZ2Ugbm9ybWFsXG4gICAgICAgICAgICBjb25zdCBhY1BlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYWMsIGFjKTtcbiAgICAgICAgICAgIC8vIHNlZSB3aGVyZSB0aGUgb3JpZ2luIGlzIGF0XG4gICAgICAgICAgICBjb25zdCBhY0xvY2F0aW9uID0gYWNQZXJwLmRvdChhbyk7XG4gICAgICAgICAgICBpZiAoYWNMb2NhdGlvbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8g7JuQ7KCQ7J2AIEEgLT4gQ+ydmCDsmKTrpbjsqr3sl5Dsnojri6QuXG4gICAgICAgICAgICAgICAgLy8gdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSByaWdodCBzaWRlIG9mIEEtPkNcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIG9mIHRoZSBjb25kaXRpb24gZm9yIHRoZSBnamsgbG9vcCB0byBjb250aW51ZSB0aGUgb3JpZ2luXG4gICAgICAgICAgICAgICAgLy8gbXVzdCBsaWUgYmV0d2VlbiBBIGFuZCBDIHNvIHJlbW92ZSBCIGFuZCBzZXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gbmV3IHNlYXJjaCBkaXJlY3Rpb24gdG8gQS0+QyBwZXJwZW5kaWN1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgIHNpbXBsZXguc3BsaWNlKDEsIDEpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgdXNlZCB0byBiZSBkaXJlY3Rpb24uc2V0KFZlY3Rvci50cmlwbGVQcm9kdWN0KGFjLCBhbywgYWMpKTtcbiAgICAgICAgICAgICAgICAvLyBidXQgd2FzIGNoYW5nZWQgc2luY2UgdGhlIG9yaWdpbiBtYXkgbGllIG9uIHRoZSBzZWdtZW50IGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAvLyBieSBhIC0+IGMgaW4gd2hpY2ggY2FzZSB3b3VsZCBwcm9kdWNlIGEgemVybyB2ZWN0b3Igbm9ybWFsXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRpbmcgYWMncyBub3JtYWwgdXNpbmcgYiBpcyBtb3JlIHJvYnVzdFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoYWNQZXJwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWJQZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgY29uc3QgYWJMb2NhdGlvbiA9IGFiUGVycC5kb3QoYW8pO1xuICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgbGVmdCBzaWRlIG9mIEEtPkNcbiAgICAgICAgICAgICAgICBpZiAoYWJMb2NhdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSByaWdodCBzaWRlIG9mIEEtPkIgYW5kIHRoZXJlZm9yZSBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJpYW5nbGUsIHdlIGhhdmUgYW4gaW50ZXJzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gbGllcyBiZXR3ZWVuIEEgYW5kIEIgc28gcmVtb3ZlIEMgYW5kIHNldCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VhcmNoIGRpcmVjdGlvbiB0byBBLT5CIHBlcnBlbmRpY3VsYXIgdmVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsZXguc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHVzZWQgdG8gYmUgZGlyZWN0aW9uLnNldChWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3YXMgY2hhbmdlZCBzaW5jZSB0aGUgb3JpZ2luIG1heSBsaWUgb24gdGhlIHNlZ21lbnQgY3JlYXRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBieSBhIC0+IGIgaW4gd2hpY2ggY2FzZSB3b3VsZCBwcm9kdWNlIGEgemVybyB2ZWN0b3Igbm9ybWFsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0aW5nIGFiJ3Mgbm9ybWFsIHVzaW5nIGMgaXMgbW9yZSByb2J1c3RcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLnNldChhYlBlcnApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgYiBwb2ludFxuICAgICAgICAgICAgY29uc3QgYiA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBjb25zdCBhYiA9IGEudG8oYik7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2Ugd2UgaGF2ZSAyIHBvaW50cyAobGluZSBzZWdtZW50KVxuICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiB0aGUgY29uZGl0aW9uIGZvciB0aGUgZ2prIGxvb3AgdG8gY29udGludWUgdGhlIG9yaWdpblxuICAgICAgICAgICAgLy8gbXVzdCBsaWUgaW4gYmV0d2VlbiBBIGFuZCBCLCBzbyBrZWVwIGJvdGggcG9pbnRzIGluIHRoZSBzaW1wbGV4IGFuZFxuICAgICAgICAgICAgLy8gc2V0IHRoZSBkaXJlY3Rpb24gdG8gdGhlIHBlcnAgb2YgdGhlIGxpbmUgc2VnbWVudCB0b3dhcmRzIHRoZSBvcmlnaW5cbiAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYikpO1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGRlZ2VuZXJhdGUgY2FzZXMgd2hlcmUgdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSBzZWdtZW50XG4gICAgICAgICAgICAvLyBjcmVhdGVkIGJ5IGEgLT4gYiB3aGljaCB3aWxsIHlpZWxkIGEgemVybyBlZGdlIG5vcm1hbFxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi5nZXRNYWduaXR1ZGVTcXVhcmVkKCkgPD0gRXBzaWxvbi5FKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIGp1c3QgY2hvb3NlIGVpdGhlciBub3JtYWwgKGxlZnQgb3IgcmlnaHQpXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLnNldChhYi5sZWZ0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0dqay5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uIHtcblxuICAgIHN0YXRpYyBnZXQgRSgpIHtcbiAgICAgICAgcmV0dXJuIEVwc2lsb24uY29tcHV0ZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb21wdXRlKCkge1xuICAgICAgICBsZXQgZSA9IDAuNTtcbiAgICAgICAgd2hpbGUgKDEuMCArIGUgPiAxLjApIHtcbiAgICAgICAgICAgIGUgKj0gMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovRXBzaWxvbi5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5rb3dza2lTdW0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbnZleDEg7Lap64+MIOyytO2BrO2VoCDrj4TtmJUgMVxuICAgICAqIEBwYXJhbSBjb252ZXgyIOy2qeuPjCDssrTtgaztlaAg64+E7ZiVIDJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb252ZXgxLCBjb252ZXgyKSB7XG4gICAgICAgIHRoaXMuY29udmV4MSA9IGNvbnZleDE7XG4gICAgICAgIHRoaXMuY29udmV4MiA9IGNvbnZleDI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3VwcG9ydFBvaW50IOulvCDqtaztlanri4jri6QuICjsi6ztlIzroInsiqQg66eM65Ok6riwKVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBnZXRTdXBwb3J0UG9pbnQoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGdldCB0aGUgZmFydGhlc3QgcG9pbnQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiBpbiBjb252ZXgxXG4gICAgICAgIGNvbnN0IHBvaW50MSA9IHRoaXMuY29udmV4MS5nZXRGYXJ0aGVzdFBvaW50KGRpcmVjdGlvbik7XG4gICAgICAgIC8vIGdldCB0aGUgZmFydGhlc3QgcG9pbnQgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiBpbiBjb252ZXgyXG4gICAgICAgIGNvbnN0IHBvaW50MiA9IHRoaXMuY29udmV4Mi5nZXRGYXJ0aGVzdFBvaW50KFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSk7XG4gICAgICAgIC8vIHJldHVybiB0aGUgTWlua293c2tpIHN1bSBwb2ludFxuICAgICAgICByZXR1cm4gcG9pbnQxLnN1YnRyYWN0KHBvaW50Mik7XG4gICAgfVxuXG4gICAgZ2V0Q29udmV4MSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmV4MTtcbiAgICB9XG5cbiAgICBnZXRDb252ZXgyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXgyO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovTWlua293c2tpU3VtLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZleCB7XG5cbiAgICAvKipcbiAgICAgKiDrsKntlqXsl5DshJwg6rCA7J6lIOuovCDrsqHthLDsnZgg7J24642x7IqkIChGZWF0dXJlKeulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqL1xuICAgIGdldEZhcnRoZXN0RmVhdHVyZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQ29udmV4XSBpbXBsbWVudHMgZ2V0RmFydGhlc3RGZWF0dXJlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67Cp7Zal7JeQ7IScIOqwgOyepSDrqLwg7Y+s7J247Yq466W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICovXG4gICAgZ2V0RmFydGhlc3RQb2ludChkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQ29udmV4XSBpbXBsbWVudHMgZ2V0RmFydGhlc3RQb2ludCcpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovQ29udmV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBDb252ZXggZnJvbSAnLi9Db252ZXgnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEdlb21ldHJ5IGZyb20gJy4vR2VvbWV0cnknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBDb252ZXgge1xuXG4gICAgLyoqXG4gICAgICog7Y+066as6rOkXG4gICAgICogQHBhcmFtIGNlbnRlciB7VmVjdG9yfVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIG5vcm1hbHMge1ZlY3RvcltdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzID0gW10sIG5vcm1hbHMgPSBbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgICAgIHRoaXMubm9ybWFscyA9ICh2ZXJ0aWNlcy5sZW5ndGggIT09IDApID9cbiAgICAgICAgICAgIEdlb21ldHJ5LmdldENvdW50ZXJDbG9ja3dpc2VFZGdlTm9ybWFscyh2ZXJ0aWNlcykgOiBub3JtYWxzO1xuICAgICAgICB0aGlzLmNlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0Q2VudGVyKCkge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG4gICAgICAgICAgICAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgYXZnLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2Zy55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhdmcueCAvPSBjb3VudDtcbiAgICAgICAgYXZnLnkgLz0gY291bnQ7XG4gICAgICAgIHJldHVybiBhdmc7XG4gICAgfVxuXG4gICAgZ2V0RmFydGhlc3RQb2ludChkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIC8vIHNldCB0aGUgZmFydGhlc3QgcG9pbnQgdG8gdGhlIGZpcnN0IG9uZVxuICAgICAgICBwb2ludC5zZXQodGhpcy52ZXJ0aWNlc1swXSk7XG4gICAgICAgIC8vIHByaW1lIHRoZSBwcm9qZWN0aW9uIGFtb3VudFxuICAgICAgICBsZXQgbWF4ID0gZGlyZWN0aW9uLmRvdCh0aGlzLnZlcnRpY2VzWzBdKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXVxuICAgICAgICAgICAgICAgICwgcHJvamVjdGlvbiA9IGRpcmVjdGlvbi5kb3QodmVydGV4KTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3Rpb24gPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBwb2ludC5zZXQodmVydGV4KTtcbiAgICAgICAgICAgICAgICBtYXggPSBwcm9qZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgIH1cblxuICAgIGdldEZhcnRoZXN0RmVhdHVyZShkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgbWF4aW11bSA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgbGV0IG1heCA9IC1OdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHZlcnRleFxuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgc2NhbGFyIHByb2plY3Rpb24gb2YgdiBvbnRvIGF4aXNcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBkaXJlY3Rpb24uZG90KHZlcnRleCk7XG4gICAgICAgICAgICAvLyBrZWVwIHRoZSBtYXhpbXVtIHByb2plY3Rpb24gcG9pbnRcbiAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBtYXggcG9pbnRcbiAgICAgICAgICAgICAgICBtYXhpbXVtLnNldCh2KTtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIG5ldyBtYXhpbXVtXG4gICAgICAgICAgICAgICAgbWF4ID0gcHJvamVjdGlvbjtcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBpbmRleFxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9uY2Ugd2UgaGF2ZSB0aGUgcG9pbnQgb2YgbWF4aW11bVxuICAgICAgICAvLyBzZWUgd2hpY2ggZWRnZSBpcyBtb3N0IHBlcnBlbmRpY3VsYXJcbiAgICAgICAgY29uc3QgbCA9IGluZGV4ICsgMSA9PSBjb3VudCA/IDAgOiBpbmRleCArIDE7XG4gICAgICAgIGNvbnN0IHIgPSBpbmRleCAtIDEgPCAwID8gY291bnQgLSAxIDogaW5kZXggLSAxO1xuXG4gICAgICAgIGNvbnN0IGxlZnROID0gdGhpcy5ub3JtYWxzW2luZGV4ID09IDAgPyBjb3VudCAtIDEgOiBpbmRleCAtIDFdO1xuICAgICAgICBjb25zdCByaWdodE4gPSB0aGlzLm5vcm1hbHNbaW5kZXhdO1xuICAgICAgICAvLyBjcmVhdGUgdGhlIG1heGltdW0gcG9pbnQgZm9yIHRoZSBmZWF0dXJlICh0cmFuc2Zvcm0gdGhlIG1heGltdW0gaW50byB3b3JsZCBzcGFjZSlcbiAgICAgICAgY29uc3Qgdm0gPSBuZXcgUG9pbnRGZWF0dXJlKG1heGltdW0sIGluZGV4KTtcbiAgICAgICAgLy8gaXMgdGhlIGxlZnQgb3IgcmlnaHQgZWRnZSBtb3JlIHBlcnBlbmRpY3VsYXI/XG4gICAgICAgIGlmIChsZWZ0Ti5kb3QoZGlyZWN0aW9uKSA8IHJpZ2h0Ti5kb3QoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMudmVydGljZXNbbF07XG4gICAgICAgICAgICBjb25zdCB2bCA9IG5ldyBQb2ludEZlYXR1cmUobGVmdCwgbCk7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGVkZ2UgaXMgdGhlIHJpZ2h0IHdpbmRpbmdcbiAgICAgICAgICAgIHJldHVybiBuZXcgRWRnZUZlYXR1cmUodm0sIHZsLCB2bSwgbWF4aW11bS50byhsZWZ0KSwgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy52ZXJ0aWNlc1tyXTtcbiAgICAgICAgY29uc3QgdnIgPSBuZXcgUG9pbnRGZWF0dXJlKHJpZ2h0LCByKTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBlZGdlIGlzIHRoZSByaWdodCB3aW5kaW5nXG4gICAgICAgIHJldHVybiBuZXcgRWRnZUZlYXR1cmUodnIsIHZtLCB2bSwgcmlnaHQudG8obWF4aW11bSksIGluZGV4KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL1BvbHlnb24uanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvbWV0cnkge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBub3JtYWxpemVkIHZlY3RvcnMgcmVwcmVzZW50aW5nIHRoZSBub3JtYWxzIG9mIGFsbCB0aGVcbiAgICAgKiBlZGdlcyBnaXZlbiB0aGUgdmVydGljZXMuXG4gICAgICogPHA+XG4gICAgICogVGhpcyBtZXRob2QgYXNzdW1lcyBjb3VudGVyLWNsb2Nrd2lzZSBvcmRlcmluZy5cbiAgICAgKiA8cD5cbiAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIHZlcnRpY2VzIGFycmF5IGlzIG51bGwgb3IgZW1wdHkuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q291bnRlckNsb2Nrd2lzZUVkZ2VOb3JtYWxzKHZlcnRpY2VzKSB7XG4gICAgICAgIGlmICh2ZXJ0aWNlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpemUgPSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbHMgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVkZ2UgcG9pbnRzXG4gICAgICAgICAgICBjb25zdCBwMSA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgY29uc3QgcDIgPSAoaSArIDEgPT09IHNpemUpID8gdmVydGljZXNbMF0gOiB2ZXJ0aWNlc1tpICsgMV07XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGVkZ2UgYW5kIGdldCBpdHMgbGVmdCBwZXJwZWRpY3VsYXIgdmVjdG9yXG4gICAgICAgICAgICBjb25zdCBuID0gcDEudG8ocDIpLmxlZnQoKTtcbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBpdFxuICAgICAgICAgICAgbi5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgIG5vcm1hbHNbaV0gPSBuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vcm1hbHM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9HZW9tZXRyeS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW5ldHJhdGlvbiB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbm9ybWFsIHtWZWN0b3J9IGNvbnZleDEg7JeQ7IScIGNvbnZleDIg66GcIOy5qO2IrO2VnCBub3JtYWxcbiAgICAgKiBAcGFyYW0gZGVwdGgge251bWJlcn0g7Lmo7YisIOq5iuydtFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5vcm1hbCA9IG5ldyBWZWN0b3IoKSwgZGVwdGggPSAwKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0Tm9ybWFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gICAgfVxuXG4gICAgZ2V0RGVwdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOy5qO2IrCDrsKntlqXsnYQg7ISk7KCV7ZWp64uI64ukLiDrsJjrk5zsi5wgbm9ybWFsaXplZCDtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBub3JtYWwge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzZXROb3JtYWwobm9ybWFsKSB7XG4gICAgICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOy5qO2IrCDquYrsnbTrpbwg7ISk7KCV7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBkZXB0aCB7bnVtYmVyfVxuICAgICAqL1xuICAgIHNldERlcHRoKGRlcHRoKSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL1BlbmV0cmF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(337);
	
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

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _History = __webpack_require__(364);
	
	var _History2 = _interopRequireDefault(_History);
	
	var _Shape = __webpack_require__(338);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Consts = __webpack_require__(339);
	
	var _Consts2 = _interopRequireDefault(_Consts);
	
	var _Vertices = __webpack_require__(340);
	
	var _Vertices2 = _interopRequireDefault(_Vertices);
	
	var _ConvexHull = __webpack_require__(331);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _MinkowskiDifference = __webpack_require__(341);
	
	var _MinkowskiDifference2 = _interopRequireDefault(_MinkowskiDifference);
	
	var _Gjk = __webpack_require__(342);
	
	var _Gjk2 = _interopRequireDefault(_Gjk);
	
	var _Convex = __webpack_require__(345);
	
	var _Convex2 = _interopRequireDefault(_Convex);
	
	var _Polygon = __webpack_require__(346);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _KeyCode = __webpack_require__(332);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _Penetration = __webpack_require__(348);
	
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
	                penetration = new _Penetration2.default(),
	                history = new _History2.default();
	
	            var isCollision = gjk.detect(polygon1, polygon2, penetration, history);
	
	            console.log('isCollision', isCollision);
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

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Consts = __webpack_require__(339);
	
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

/***/ 341:
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
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Epsilon = __webpack_require__(343);
	
	var _Epsilon2 = _interopRequireDefault(_Epsilon);
	
	var _MinkowskiSum = __webpack_require__(344);
	
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
	         * @param history {History}
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'detect2',
	        value: function detect2(ms, simplex, direction, history) {
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
	                history.setHistory(simplex, directions);
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
	                    history.setHistory(simplex, directions);
	                    return false;
	                } else {
	                    // if it is past the origin, then test whether the simplex contains the origin
	                    if (this.checkSimplex(simplex, direction)) {
	                        // if the simplex contains the origin then we know that there is an intersection.
	                        // if we broke out of the loop then we know there was an intersection
	                        history.setHistory(simplex, directions);
	                        return true;
	                    }
	                    // if the simplex does not contain the origin then we need to loop using the new
	                    // search direction and simplex
	                }
	            }
	            history.setHistory(simplex, directions);
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
	
	var _Vector = __webpack_require__(328);
	
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

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Convex2 = __webpack_require__(345);
	
	var _Convex3 = _interopRequireDefault(_Convex2);
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Geometry = __webpack_require__(347);
	
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
	
	var _Vector = __webpack_require__(328);
	
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

/***/ 348:
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
	
	var _Vector = __webpack_require__(328);
	
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

/***/ 364:
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9QYXN0ZWxDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9namsvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9Db25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9WZXJ0aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0dqay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovRXBzaWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovTWlua293c2tpU3VtLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9Db252ZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL1BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0dlb21ldHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9QZW5ldHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSGlzdG9yeS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJtYWluIiwiTWFpbiIsImNhbnZhcyIsInJlbmRlcmVyIiwic3RhZ2UiLCJ0ZXN0IiwiY29udGFpbmVyIiwiaW5pdCIsImFkZEV2ZW50Iiwib25SZXNpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUElYSSIsIkNhbnZhc1JlbmRlcmVyIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3IiwiYXV0b1Jlc2l6ZSIsImJhY2tncm91bmRDb2xvciIsIk1vdXNlIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJUZXN0IiwidXBkYXRlTG9vcCIsInJlc2l6ZVdpbmRvdyIsIm9ucmVzaXplIiwiYmluZCIsIm1zIiwidXBkYXRlIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlbmRlciIsImlubmVyV2lkdGgiLCJkZXZpY2VQaXhlbFJhdGlvIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInJlc2l6ZSIsImRlZ3JlZXMiLCJNYXRoIiwiUEkiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJmbG9vciIsInJhZGlhbjJkZWdyZWVzIiwicmFkIiwiZGVncmVlczJyYWRpYW4iLCJkZWciLCJWZWN0b3IiLCJhcnIiLCJvYmoiLCJ4IiwieSIsInZlYyIsInNjYWxhciIsInN1YnRyYWN0IiwidmVjdG9yIiwiaW52ZXJ0WCIsImludmVydFkiLCJsZW5ndGgiLCJkaXZpZGUiLCJub3JtYWxpemUiLCJmYWN0b3IiLCJhYnMiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJyYW5kb21pemVYIiwicmFuZG9taXplWSIsInJvdW5kIiwicHJlY2lzaW9uIiwidG9GaXhlZCIsImFtb3VudCIsIm1peFgiLCJtaXhZIiwiY29weVgiLCJjb3B5WSIsInRlbXAiLCJ2ZWMyIiwiZG90IiwiY29lZmYiLCJhdGFuMiIsImhvcml6b250YWxBbmdsZSIsInZlcnRpY2FsQW5nbGUiLCJob3Jpem9udGFsQW5nbGVEZWciLCJhbmdsZSIsIm54IiwiY29zIiwic2luIiwibnkiLCJyb3RhdGUiLCJyb3RhdGlvbiIsInJvdGF0ZVRvIiwicm90YXRlQnkiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcXJ0IiwiZGlzdGFuY2VTcSIsImRpcmVjdGlvbiIsImR4IiwiZHkiLCJsZW5ndGhTcSIsImEiLCJiIiwidiIsImNsb25lIiwicmV0IiwibXVsdGlwbHlTY2FsYXIiLCJjIiwiciIsImFjIiwiYmMiLCJ2ZWMxIiwidG8iLCJhZGQiLCJQb2ludCIsInJhZGl1cyIsImNvbG9yIiwiUGFzdGVsQ29sb3IiLCJnZW5lcmF0ZSIsImhleCIsImFscGhhIiwiYnV0dG9uTW9kZSIsImludGVyYWN0aXZlIiwiY2xlYXIiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImx0IiwicmIiLCJwb3NpdGlvbiIsInJhbmRvbWl6ZSIsImZyb21PYmplY3QiLCJHcmFwaGljcyIsImhCYXNlIiwibmV3SCIsIm5ld0wiLCJIU0x0b1JHQiIsImciLCJoc2wiLCJyZ2IiLCJSR0J0b0hleCIsImhleFNoYXAiLCJoIiwicyIsImwiLCJyZCIsImh1ZVRvUkdCIiwibSIsIm4iLCJvIiwicSIsInAiLCJwcmVmaXgiLCJ0b1N0cmluZyIsIkNvbnZleEh1bGwiLCJwb2ludHMiLCJzdGFjayIsInNvcnQiLCJzb3J0TG93ZXJZWCIsImJhc2VQb2ludCIsImkiLCJyZWxhdGl2ZVBvc2l0aW9uIiwic29ydENjdyIsInB1c2giLCJuZXh0IiwiZmlyc3QiLCJzZWNvbmQiLCJwb3AiLCJpc0NjdyIsImNvbnZleEh1bGwiLCJpbmRleCIsInBvaW50IiwicG9pbnRBIiwicG9pbnRCIiwicG9pbnRDIiwidHJpYW5nbGVBcmVhIiwiZGVidWdBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVDb252ZXhIdWxsIiwiaTAiLCJ4MCIsImh1bGwiLCJpaCIsImllIiwiaiIsInN1YiIsImNyb3NzIiwibGVuZ3Roc3EiLCJuZXdQb2ludHMiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJwcmV2VGltZSIsImN1cnJlbnRUaW1lIiwiZGlmZlgiLCJkaWZmWSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImdsb2JhbCIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIiwiVE9UQUwiLCJJTlRFUlZBTCIsIlNDQUxFIiwiQ29uc3RzIiwiU1RBR0UiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIlJBRF9UT19ERUciLCJ0cmlhbmdsZXMiLCJjcmVhdGVQb2x5Z29ucyIsInJlY3RhbmdsZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJzaGFwZXMiLCJkaXNwbGF5IiwiZGlzcGxheUNvbGxpc2lvbiIsImtleVVwTGlzdGVuZXIiLCJvbktleVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRG93bkxpc3RlbmVyIiwib25Nb3VzZURvd24iLCJvbiIsImNoZWNrQ29sbGlzaW9uIiwiZm9yRWFjaCIsInNoYXBlIiwicmVtb3ZlQ2hpbGQiLCJkZXN0cm95IiwibWlua293c2tpIiwiaW5kZXgxIiwiaW5kZXgyIiwidmVydGljZXMxIiwiVmVydGljZXMiLCJ2ZXJ0aWNlczIiLCJtdWx0aXBseSIsInNoYXBlMSIsIlNoYXBlIiwidmVydGljZXMiLCJzaGFwZTIiLCJNaW5rb3dza2lEaWZmZXJlbmNlIiwicG9seWdvbjEiLCJQb2x5Z29uIiwicG9seWdvbjIiLCJnamsiLCJHamsiLCJwZW5ldHJhdGlvbiIsIlBlbmV0cmF0aW9uIiwiaGlzdG9yeSIsIkhpc3RvcnkiLCJpc0NvbGxpc2lvbiIsImRldGVjdCIsImludGVydmFsSWQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJoaXRBcmVhIiwiUmVjdGFuZ2xlIiwiZSIsImtleUNvZGUiLCJLZXlDb2RlIiwiU1BBQ0UiLCJnZXRBbmdsZSIsIm5vcm0iLCJyYWRpYW4iLCJhY29zIiwiZG90UHJvZHVjdCIsInBvbHlnb24iLCJ0b3RhbCIsInBvbHlnb25zIiwidmVydGV4IiwiRk9OVF9TSVpFIiwibGluZUNvbG9yIiwidGV4dENvbG9yIiwiZ3JhcGhpY3MiLCJsYWJlbHMiLCJjcmVhdGVMYWJlbCIsImRyYXciLCJ0ZXh0IiwiVGV4dCIsImFsaWduIiwiZm9udCIsImZpbGwiLCJ2aXNpYmxlIiwib3JpZ2luIiwibGluZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwibGFiZWwiLCJkaXZpZGVTY2FsYXIiLCJGT05UX0NPTE9SIiwiQVhFU19MSU5FX0NPTE9SIiwiQ09OVkVYX0hVTExfTElORV9DT0xPUiIsImdldFZlcnRpY2VzIiwidGV4dHMiLCJkcmF3QXhlcyIsImRyYXdWZXRpY2VzIiwiZHJhd1BvbHlnb24iLCJkcmF3VGV4dCIsImh3IiwiaGgiLCJERUZBVUxUX01BWF9JVEVSQVRJT05TIiwiREVGQVVMVF9ERVRFQ1RfRVBTSUxPTiIsIm1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyIiwiY29udmV4MSIsImNvbnZleDIiLCJjMSIsImdldENlbnRlciIsImMyIiwic2ltcGxleCIsIk1pbmtvd3NraVN1bSIsImdldEluaXRpYWxEaXJlY3Rpb24iLCJkZXRlY3QyIiwiZGlyZWN0aW9ucyIsIkFycmF5IiwiaXNaZXJvIiwic2V0IiwiZ2V0U3VwcG9ydFBvaW50Iiwic2V0SGlzdG9yeSIsImludmVydCIsImNoZWNrU2ltcGxleCIsImFvIiwibmVnYXRlIiwiYWIiLCJhY1BlcnAiLCJ0cmlwbGVQcm9kdWN0IiwiYWNMb2NhdGlvbiIsInNwbGljZSIsImFiUGVycCIsImFiTG9jYXRpb24iLCJnZXRNYWduaXR1ZGVTcXVhcmVkIiwiRXBzaWxvbiIsIkUiLCJsZWZ0IiwiY29tcHV0ZSIsInBvaW50MSIsImdldEZhcnRoZXN0UG9pbnQiLCJwb2ludDIiLCJDb252ZXgiLCJFcnJvciIsIm5vcm1hbHMiLCJHZW9tZXRyeSIsImdldENvdW50ZXJDbG9ja3dpc2VFZGdlTm9ybWFscyIsImNlbnRlciIsImF2ZyIsImNvdW50Iiwic2l6ZSIsInByb2plY3Rpb24iLCJtYXhpbXVtIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwibGVmdE4iLCJyaWdodE4iLCJ2bSIsIlBvaW50RmVhdHVyZSIsInZsIiwiRWRnZUZlYXR1cmUiLCJyaWdodCIsInZyIiwicDEiLCJwMiIsIm5vcm1hbCIsImRlcHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUMsY0FBWTtBQUNUQSxZQUFPQyxN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QUNIOzs7cUNBRVc7QUFDUixvQkFBTyxLQUFLRCxNQUFaO0FBQ0g7OztvQ0FFVTtBQUNQLG9CQUFPLEtBQUtDLEtBQVo7QUFDSDs7QUFFRDs7Ozs7OzttQ0FJVUQsTSxFQUFRO0FBQ2Qsa0JBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOztBQUVEOzs7Ozs7O2tDQUlTQyxLLEVBQU87QUFDWixrQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7OzttQkF0Q2dCbEgsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0MzQkFFLE87O0FBRWpCOzs7O0FBSUEsd0JBQStEO0FBQUEsYUFBbkQyRCxPQUFtRCx1RUFBekMsSUFBSUssS0FBSixDQUFVLENBQVYsQ0FBeUM7QUFBQSxhQUEzQkQsVUFBMkIsdUVBQWQsSUFBSUMsS0FBSixDQUFVLENBQVYsQ0FBYzs7QUFBQTs7QUFDM0QsY0FBS0wsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0ksVUFBTCxHQUFrQkEsVUFBbEI7QUFDSDs7OztvQ0FFVUosTyxFQUFTSSxVLEVBQVk7QUFDNUIsa0JBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGtCQUFLSSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNIOzs7Ozs7bUJBZGdCL0QsTyIsImZpbGUiOiJlcGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9Nb3VzZVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xuICAgIH1cbn0oKSk7XG5cbmxldCBjYW52YXMsIHJlbmRlcmVyLCBzdGFnZSwgdGVzdCwgY29udGFpbmVyO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwge1xuICAgICAgICAgICAgdmlldzogY2FudmFzLFxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgzMzM4M0RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTW91c2UucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgICAgICAvLyDsnITsuZjqsIAg7KCV7IiY6rCAIOyVhOuLkOqyveyasCDtnZDrpr/tlZjqsowg67O07J2064qUIOusuOygnOqwgCDsnojslrRcbiAgICAgICAgLy8g66CM642U65+s7J2YIOychOy5mOulvCDsoJXsiJjroZwg7Jew7IKw65CgIOyImCDsnojrj4TroZ0g7ZWc64ukLlxuICAgICAgICAvL3JlbmRlcmVyLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcblxuICAgICAgICBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICB0ZXN0ID0gbmV3IFRlc3QocmVuZGVyZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXN0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AoKTtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCkge31cblxuICAgIHVwZGF0ZUxvb3AgKG1zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1zKTtcbiAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG1zKSB7XG4gICAgICAgIHRlc3QudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzdGFnZSk7XG4gICAgfVxuXG4gICAgcmVzaXplV2luZG93KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDsupTrsoTsiqQg7IKs7J207KaI7JmAIOuUlOyKpO2UjOugiOydtCDsgqzsnbTspogg7ISk7KCVXG4gICAgICAgICAqIOugiO2LsOuCmCDqt7jrnpjtlL0g7KeA7JuQIOy9lOuTnFxuICAgICAgICAgKi9cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBJWEkgcmVuZGVyZXIg66as7IKs7J207KaIXG4gICAgICAgICAqIFBJWEkg7JeQ6rKMIHZpZXdwb3J0IOyCrOydtOymiCDrs4Dqsr0g7JWM66a8XG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIHRlc3QucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L2VwYS9pbmRleC5qcyIsIlxuXG5jb25zdCBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuXG5mdW5jdGlvbiByYW5kb20gKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhZGlhbjJkZWdyZWVzIChyYWQpIHtcbiAgICByZXR1cm4gcmFkICogZGVncmVlcztcbn1cblxuZnVuY3Rpb24gZGVncmVlczJyYWRpYW4gKGRlZykge1xuICAgIHJldHVybiBkZWcgLyBkZWdyZWVzO1xufVxuXG5cbi8qKlxuICogVmljdG9yLmpz66W8IEVTNuuhnCDrs4DtmZjtlZjsl6wg7IKs7Jqp7ZWY6rOgIOyeiOyKteuLiOuLpC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhrdWVuZy92aWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yXG57XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbUFycmF5KFs0MiwgMjFdKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21BcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHdpdGggdGhlIHggYW5kIHkgdmFsdWVzIGF0IGluZGV4IDAgYW5kIDEgcmVzcGVjdGl2ZWx5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGFyclswXSB8fCAwLCBhcnJbMV0gfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbU9iamVjdCh7IHg6IDQyLCB5OiAyMSB9KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21PYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgZm9yIHggYW5kIHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tT2JqZWN0KG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKG9iai54IHx8IDAsIG9iai55IHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuIFdpbGwgYWxzbyB3b3JrIHdpdGhvdXQgdGhlIGBuZXdgIGtleXdvcmRcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IFZlY3Rvcig0MiwgMTMzNyk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBWYWx1ZSBvZiB0aGUgeCBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVmFsdWUgb2YgdGhlIHkgYXhpc1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMClcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWCBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeToxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBZIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGQodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggKyBiLngsIGEueSArIGIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIGJvdGggdmVjdG9yIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWCBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBZIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0KHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3QodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1YnRyYWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLSBiLngsIGEueSAtIGIueSk7XG4gICAgfVxuXG5cbiAgICBlZGdlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZWRnZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdChhLCBiKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXIoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclgoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDIwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJZKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEwMCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIHggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgeSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSBhIGF4aXMgdmFsdWVzIG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGUodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGUoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAvIGIueCwgYS55IC8gYi55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRYKClcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFkoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WSgpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuaW52ZXJ0WCgpO1xuICAgICAgICB0aGlzLmludmVydFkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmVnYXRlKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHYgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgdi54ID0gLXZlYy54O1xuICAgICAgICB2LnkgPSAtdmVjLnk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBYIGF4aXMgYnkgWCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWSBheGlzIGJ5IFkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdmFsdWVzIGZyb20gYSBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5KHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbXVsdGlwbHlTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHNjYWxhciwgdmVjdG9yLnkgKiBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54IC8gc2NhbGFyLCB2ZWN0b3IueSAvIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoOTAg64+EIO2ajOyghClcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBwZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSAtdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKC05MCDrj4Qg7ZqM7KCEKVxuICAgICAqL1xuICAgIHJldHVyblBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy55LCAtdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZXR1cm5QZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSB2ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IC12ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog67KE66a8XG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJ1bmNhdGUodmVjLCBsZW5ndGgpXG4gICAge1xuICAgICAgICBjb25zdCByZXQgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoU3EgPSB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICAgICAgaWYgKGxlbmd0aFNxID4gbGVuZ3RoICogbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXQubXVsdGlwbHlTY2FsYXIobGVuZ3RoIC8gTWF0aC5zcXJ0KGxlbmd0aFNxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbm9ybWFsaXplKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpdmlkZShuZXcgVmVjdG9yKGxlbmd0aCwgbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBub3JtKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGFic29sdXRlIHZlY3RvciBheGlzIGlzIGdyZWF0ZXIgdGhhbiBgbWF4YCwgbXVsdGlwbGllcyB0aGUgYXhpcyBieSBgZmFjdG9yYFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGltaXQoODAsIDAuOSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjkwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIGZvciBib3RoIHggYW5kIHkgYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmYWN0b3IgRmFjdG9yIGJ5IHdoaWNoIHRoZSBheGlzIGFyZSB0byBiZSBtdWx0aXBsaWVkIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsaW1pdChtYXgsIGZhY3RvcilcbiAgICB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLngpID4gbWF4KXsgdGhpcy54ICo9IGZhY3RvcjsgfVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55KSA+IG1heCl7IHRoaXMueSAqPSBmYWN0b3I7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21pemVzIGJvdGggdmVjdG9yIGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemUobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MGApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NjcsIHk6NzNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpLCB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHRoaXMueCA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHRoaXMueSA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IHJhbmRvbWl6ZXMgZWl0aGVyIGF4aXMgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZUFueShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo3N1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemVBbnkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBpZiAoISEgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGFuIGludGVnZXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdW5mbG9hdCgpXG4gICAge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGEgY2VydGFpbiBwcmVjaXNpb25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFByZWNpc2lvbiAoZGVmYXVsdDogOClcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0ZpeGVkKHByZWNpc2lvbilcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJlY2lzaW9uID09PSAndW5kZWZpbmVkJykgeyBwcmVjaXNpb24gPSA4OyB9XG4gICAgICAgIHRoaXMueCA9IHRoaXMueC50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBYIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gKDEgLSBhbW91bnQpICogdGhpcy54ICsgYW1vdW50ICogdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBZIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WSh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WSh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0gKDEgLSBhbW91bnQpICogdGhpcy55ICsgYW1vdW50ICogdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4KHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5taXhYKHZlYywgYW1vdW50KTtcbiAgICAgICAgdGhpcy5taXhZKHZlYywgYW1vdW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFByb2R1Y3RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jbG9uZSgpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBBIGNsb25lIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNsb25lKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVgodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBZIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlZKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBhbmQgWSBjb21wb25lbnRzIGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb3B5WCh2ZWMpO1xuICAgICAgICB0aGlzLmNvcHlZKHZlYyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmVjdG9yIHRvIHplcm8gKDAsMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICpcdFx0IHZhcjEuemVybygpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MCwgeTowXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB6ZXJvKClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgbGVmdC1oYW5kZWQgbm9ybWFsIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gdGhpcyB2ZWN0b3JcbiAgICAgKiBAc2VlICNnZXRMZWZ0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIGxlZnQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSAtdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgdmVjdG9yIHRvIHRoZSByaWdodC1oYW5kZWQgbm9ybWFsIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqIEByZXR1cm4ge0BsaW5rIFZlY3RvcjJ9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0UmlnaHRIYW5kT3J0aG9nb25hbFZlY3RvcigpXG4gICAgICovXG4gICAgcmlnaHQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kb3QodmVjMik7XG4gICAgICogICAgIC8vID0+IDIzMDAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEb3QgcHJvZHVjdFxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZG90KHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjMi54ICsgdGhpcy55ICogdmVjMi55O1xuICAgIH1cblxuXG4gICAgZG90UHJvZHVjdCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkb3RQcm9kdWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55O1xuICAgIH1cblxuXG4gICAgY3Jvc3ModmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy54ICogdmVjMi55KSAtICh0aGlzLnkgKiB2ZWMyLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi55IC0gYS55ICogYi54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAgICAgKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UcmlwbGVfcHJvZHVjdCNWZWN0b3JfdHJpcGxlX3Byb2R1Y3RcbiAgICAgKiDshLjqt7jrqLztirjsl5DshJwg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsKntlqXsnYQg7LC+7J2EIOuVjCDsgqzsmqlcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpcGxlUHJvZHVjdChhLCBiLCBjKVxuICAgIHtcbiAgICAgICAgY29uc3QgciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgY29uc3QgYWMgPSBhLnggKiBjLnggKyBhLnkgKiBjLnkgICAgLy8gcGVyZm9ybSBhLmRvdChjKVxuICAgICAgICAgICAgLCBiYyA9IGIueCAqIGMueCArIGIueSAqIGMueTsgICAvLyBwZXJmb3JtIGIuZG90KGMpXG5cbiAgICAgICAgLy8gcGVyZm9ybSBiICogYS5kb3QoYykgLSBhICogYi5kb3QoYylcbiAgICAgICAgci54ID0gYi54ICogYWMgLSBhLnggKiBiYztcbiAgICAgICAgci55ID0gYi55ICogYWMgLSBhLnkgKiBiYztcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIGEgdmVjdG9yIG9udG8gYW5vdGhlciB2ZWN0b3IsIHNldHRpbmcgaXRzZWxmIHRvIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnByb2plY3RPbnRvKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIHByb2plY3QgdGhpcyB2ZWN0b3Igb250b1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHByb2plY3RPbnRvKHZlYzIpXG4gICAge1xuICAgICAgICB2YXIgY29lZmYgPSAoICh0aGlzLnggKiB2ZWMyLngpKyh0aGlzLnkgKiB2ZWMyLnkpICkgLyAoKHZlYzIueCp2ZWMyLngpKyh2ZWMyLnkqdmVjMi55KSk7XG4gICAgICAgIHRoaXMueCA9IGNvZWZmICogdmVjMi54O1xuICAgICAgICB0aGlzLnkgPSBjb2VmZiAqIHZlYzIueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDshKDtmJUg67O06rCEXG4gICAgICogaHR0cDovL2RldmVsb3B1Zy5ibG9nc3BvdC5jb20vMjAxNC8wOS91bml0eS12ZWN0b3ItbGVycC5odG1sXG4gICAgICogQHBhcmFtIHZlYzFcbiAgICAgKiBAcGFyYW0gdmVjMlxuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIGxlcnAodmVjMSwgdmVjMiwgdG8pIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5hZGQoVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzEsIDEgLSB0byksIFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMyLCB0bykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOyXreyImFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyByY3AodmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEgLyB2ZWN0b3IueCwgMSAvIHZlY3Rvci55KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLnZlcnRpY2FsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICBhbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZURlZygpO1xuICAgIH1cblxuXG4gICAgZGlyZWN0aW9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgcm90YXRlKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG54ID0gKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSkgLSAodGhpcy55ICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgdmFyIG55ID0gKHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSkgKyAodGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKTtcblxuICAgICAgICB0aGlzLnggPSBueDtcbiAgICAgICAgdGhpcy55ID0gbnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICByb3RhdGVEZWcoYW5nbGUpXG4gICAge1xuICAgICAgICBhbmdsZSA9IGRlZ3JlZXMycmFkaWFuKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKHJvdGF0aW9uLXRoaXMuYW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUb0RlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVUbyhyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeShyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMuYW5nbGUoKSArIHJvdGF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeURlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVCeShyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWCBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAtIHZlYy54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VYKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hYnNEaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVgodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWSBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55IC0gdmVjLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVkoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VZKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwLjQ5ODc1NjIxMTIwODlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24oKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZVNxdWFyZWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVNxKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlU3EodmVjKVxuICAgIHtcbiAgICAgICAgdmFyIGR4ID0gdGhpcy5kaXN0YW5jZVgodmVjKSxcbiAgICAgICAgICAgIGR5ID0gdGhpcy5kaXN0YW5jZVkodmVjKTtcblxuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb3IgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aCgpO1xuICAgICAqICAgICAvLyA9PiAxMTEuODAzMzk4ODc0OTg5NDhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uo7Iic7Z6IIOq4uOydtCDruYTqtZDrpbwg7ZWY66Ck66m0IGxlbmd0aCDrpbwg7IKs7Jqp7ZWY6riwIOuztOuLpOuKlCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY6rKMIOu5oOultOuLpC5cbiAgICAgKiBsZW5ndGgg64qUIE1hdGguc3FydCAo7KCc6rOx6re8KSDsspjrpqzrpbwg7ZWY6riwIOuVjOusuOyXkCDri6jsiJwg6ri47J20IOu5hOq1kOyLnCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY64qUIOqyg+ydtCDruaDrpoXri4jri6QuXG4gICAgICogU3F1YXJlZCBsZW5ndGggLyBtYWduaXR1ZGVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aFNxKCk7XG4gICAgICogICAgIC8vID0+IDEyNTAwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoU3EoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsZW5ndGhTcSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgfVxuXG5cbiAgICBtYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoKCk7XG4gICAgfVxuXG5cbiAgICB0byh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWMueCAtIHRoaXMueCwgdmVjLnkgLSB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgc2V0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB2ZWN0b3IgaXMgKDAsIDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMuemVybygpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc1plcm8oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB0aGlzIHZlY3RvciBpcyB0aGUgc2FtZSBhcyBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMxLmlzRXF1YWxUbyh2ZWMyKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNFcXVhbFRvKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSB2ZWMyLnggJiYgdGhpcy55ID09PSB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFV0aWxpdHkgTWV0aG9kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICByZXR1cm4gJ3g6JyArIHRoaXMueCArICcsIHk6JyArIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b0FycmF5KCk7XG4gICAgICogICAgIC8vID0+IFsxMCwgMjBdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvQXJyYXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFsgdGhpcy54LCB0aGlzLnkgXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9PYmplY3QoKTtcbiAgICAgKiAgICAgLy8gPT4geyB4OiAxMCwgeTogMjAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9PYmplY3QoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmVjdG9yLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uL3V0aWxzL1Bhc3RlbENvbG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCBleHRlbmRzIFBJWEkuR3JhcGhpY3NcbntcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDEwLCBjb2xvciA9IFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4LCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yZW5kZXIocmFkaXVzLCBjb2xvciwgYWxwaGEpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKHJhZGl1cyA9IDEwLCBjb2xvciA9IDB4ZmYzMzAwLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKDAsIDAsIHJhZGl1cywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgdGhpcy5lbmRGaWxsKCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemUobHQsIHJiKVxuICAgIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnZlY3Rvci5yYW5kb21pemUobHQsIHJiKTtcbiAgICAgICAgdGhpcy54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy55ID0gcG9zaXRpb24ueTtcbiAgICB9XG5cblxuICAgIGdldCB2ZWN0b3IoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5mcm9tT2JqZWN0KHRoaXMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tL1BvaW50LmpzIiwiLyoqXG4gKiBodHRwczovL2NvZGVwZW4uaW8vcGxpdS9wZW4vQkxFS3dBXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3RlbENvbG9yIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGUoKSB7XG4gICAgICAgIGNvbnN0IGhCYXNlID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgY29uc3QgbmV3SCA9IE1hdGguZmxvb3IoaEJhc2UgKiAzNjApO1xuICAgICAgICBjb25zdCBuZXdMID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpICsgNzU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gYGhzbCgke25ld0h9LCAxMDAlLCAke25ld0x9JSlgO1xuICAgICAgICBjb25zdCBbciwgZywgYl0gPSB0aGlzLkhTTHRvUkdCKGhCYXNlLCAxLCBuZXdMICogLjAxKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHNsOiBjb2xvciwgLy8gaHNsKDAsIDEwMCUsIDg1JSk7XG4gICAgICAgICAgICByZ2I6IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgLCAvLyByZ2IoMjU1LCAxMjgsIDEyOCk7XG4gICAgICAgICAgICBoZXg6IGAke3RoaXMuUkdCdG9IZXgociwgZywgYil9YCwgLy8gMHhmZjgwODBcbiAgICAgICAgICAgIGhleFNoYXA6YCR7dGhpcy5SR0J0b0hleChyLCBnLCBiLCAnIycpfWAsIC8vICNmZjgwODBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIU0wgdG8gUkdCIGZvcm11bGEgYWRhcHRlZCBmcm9tOlxuICAgICAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL21qYWNrc29uLzUzMTEyNTZcbiAgICAgKiAoc2tpcHBpbmcgdG8gZWxzZXt9IHNpbmNlIHMgd2lsbCBhbHdheXMgYmUgMTAwJSlcbiAgICAgKiBAcGFyYW0gaFxuICAgICAqIEBwYXJhbSBzXG4gICAgICogQHBhcmFtIGxcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBIU0x0b1JHQihoLCBzLCBsKSB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuXG4gICAgICAgIGNvbnN0IHJkID0gKGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubWF4KE1hdGgubWluKGEgKiAyNTYsIDI1NSksIDApKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBodWVUb1JHQiA9IChtLCBuLCBvKSA9PiB7XG4gICAgICAgICAgICBpZiAobyA8IDApIG8gKz0gMTtcbiAgICAgICAgICAgIGlmIChvID4gMSkgbyAtPSAxO1xuICAgICAgICAgICAgaWYgKG8gPCAxIC8gNikgcmV0dXJuIG0gKyAobiAtIG0pICogNiAqIG87XG4gICAgICAgICAgICBpZiAobyA8IDEgLyAyKSByZXR1cm4gbjtcbiAgICAgICAgICAgIGlmIChvIDwgMiAvIDMpIHJldHVybiBtICsgKG4gLSBtKSAqICgyIC8gMyAtIG8pICogNjtcbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuXG4gICAgICAgIHIgPSBodWVUb1JHQihwLCBxLCBoICsgMSAvIDMpO1xuICAgICAgICBnID0gaHVlVG9SR0IocCwgcSwgaCk7XG4gICAgICAgIGIgPSBodWVUb1JHQihwLCBxLCBoIC0gMSAvIDMpO1xuXG4gICAgICAgIHJldHVybiBbcmQociksIHJkKGcpLCByZChiKV1cbiAgICB9XG5cbiAgICBzdGF0aWMgUkdCdG9IZXgociwgZywgYiwgcHJlZml4ID0gJzB4Jykge1xuICAgICAgICByZXR1cm4gYCR7cHJlZml4fSR7ci50b1N0cmluZygxNil9JHtnLnRvU3RyaW5nKDE2KX0ke2IudG9TdHJpbmcoMTYpfWA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yLmpzIiwiLyoqXG4gKiBodHRwczovL3d3dy5jcm9jdXMuY28ua3IvMTI4OFxuICovXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi9WZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udmV4SHVsbCB7XG4gICAgc3RhdGljIGdlbmVyYXRlKHBvaW50cykge1xuXG4gICAgICAgIGNvbnN0IHN0YWNrID0gW10sXG4gICAgICAgICAgICBuID0gcG9pbnRzLmxlbmd0aDtcblxuICAgICAgICAvLyB57KKM7ZGcLCB47KKM7ZGcIOyekeydgCDsiJzsnLzroZwg7KCV66CsXG4gICAgICAgIHBvaW50cy5zb3J0KHRoaXMuc29ydExvd2VyWVgpO1xuXG4gICAgICAgIC8vIOq4sOykgOygkCDshKTsoJVcbiAgICAgICAgY29uc3QgYmFzZVBvaW50ID0gcG9pbnRzWzBdO1xuXG4gICAgICAgIC8vIOq4sOykgOygkCDquLDspIDsnLzroZwgdmVjdG9yIOulvCDsg53shLHtlZjqs6Ag7Jm47KCB7J2EIOq1rO2VtOyEnCDrsJgg7Iuc6rOEIOuwqe2WpeycvOuhnCAoY2N3KSDsoJXroKwg7ZWp64uI64ukLlxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcG9pbnRzW2ldLnJlbGF0aXZlUG9zaXRpb24gPSBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgICAgIHBvaW50c1tpXS54IC0gYmFzZVBvaW50LngsXG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldLnkgLSBiYXNlUG9pbnQueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvaW50cy5zb3J0KHRoaXMuc29ydENjdyk7XG5cbiAgICAgICAgLy8g7Iqk7YOd7JeQIGZpcnN0LCBzZWNvbmQg66W8IOuEo+yKteuLiOuLpC5cbiAgICAgICAgc3RhY2sucHVzaCgwKTtcbiAgICAgICAgc3RhY2sucHVzaCgxKTtcblxuICAgICAgICBsZXQgbmV4dCA9IDI7XG5cbiAgICAgICAgd2hpbGUgKG5leHQgPCBuKSB7XG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3QsIHNlY29uZDtcbiAgICAgICAgICAgICAgICBzZWNvbmQgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgLy8gZmlyc3QsIHNlY29uZCwgbmV4dOqwgCDsooztmozsoIQgKCAwIOuztOuLpCDtgazrqbQgKeydtOudvOuptCBzZWNvbmQgcHVzaFxuICAgICAgICAgICAgICAgIC8vIOyasO2ajOyghCggMCDrs7Tri6Qg7J6R7Jy866m0ICkg7J20652866m0IOychOydmCB3aGlsZeusuCDqs4Tsho0g67CY67O1XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDY3cocG9pbnRzW2ZpcnN0XSwgcG9pbnRzW3NlY29uZF0sIHBvaW50c1tuZXh0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dCsrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZleEh1bGwgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSBzdGFjay5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhY2tbaV07XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpbmRleF07XG4gICAgICAgICAgICBjb252ZXhIdWxsLnB1c2gobmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udmV4SHVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB5LCB4IOqwgCDsnpHsnYAg7Iic7Jy866GcIOygleugrFxuICAgICAqIEBwYXJhbSBwb2ludEFcbiAgICAgKiBAcGFyYW0gcG9pbnRCXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIHNvcnRMb3dlcllYKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIGlmIChwb2ludEEueSAhPT0gcG9pbnRCLnkpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludEEueSAtIHBvaW50Qi55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludEEueCAtIHBvaW50Qi54O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOq4sOykgCDsooztkZwg6riw7KSA7Jy866GcIOyDgeuMgCDsooztkZzrpbwg6rWs7ZW07IScIOyLnOqzhCDrsJjrjIAg67Cp7Zal7Jy866GcIOygleugrO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBzb3J0Q2N3KHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIC8vIOykkeyLrCDsooztkZzsnbgg6rK97JqwIHJlbGF0aXZlUG9zaXRpb24g7J20IOyXhuyKteuLiOuLpC4g7KSR7IusIOyijO2RnOulvCAw67KI7Jy866GcIOygleugrCDtlanri4jri6QuXG4gICAgICAgIGlmICghcG9pbnRBLnJlbGF0aXZlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYSA9IHBvaW50QS5yZWxhdGl2ZVBvc2l0aW9uLnkgKiBwb2ludEIucmVsYXRpdmVQb3NpdGlvbi54O1xuICAgICAgICBjb25zdCBiID0gcG9pbnRBLnJlbGF0aXZlUG9zaXRpb24ueCAqIHBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uLnk7XG5cbiAgICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiIC0gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDb252ZXhIdWxsLnNvcnRMb3dlcllYKHBvaW50QSwgcG9pbnRCKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrsJgg7Iuc6rOEIOuwqe2WpeyduOyngCDsl6zrtoBcbiAgICAgKiBAcGFyYW0gcG9pbnRBXG4gICAgICogQHBhcmFtIHBvaW50QlxuICAgICAqIEBwYXJhbSBwb2ludENcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNDY3cocG9pbnRBLCBwb2ludEIsIHBvaW50Qykge1xuICAgICAgICAvLyBjb25zdCB0cmlhbmdsZUFyZWEgPSAocG9pbnRCLnggLSBwb2ludEEueCkgKiAocG9pbnRDLnkgLSBwb2ludEEueSkgLSAocG9pbnRDLnggLSBwb2ludEEueCkgKiAocG9pbnRCLnkgLSBwb2ludEEueSk7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlQXJlYSA9ICAocG9pbnRDLnggLSBwb2ludEEueCkgKiAocG9pbnRCLnkgLSBwb2ludEEueSkgLSAocG9pbnRCLnggLSBwb2ludEEueCkgKiAocG9pbnRDLnkgLSBwb2ludEEueSk7XG4gICAgICAgIGlmICh0cmlhbmdsZUFyZWEgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRlYnVnQXJyYXkoYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBhcnIubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycltpXS54LCBhcnJbaV0ueSk7XG4gICAgfVxufVxuXG5cbi8qXG4qIENvcHlyaWdodCAoYykgMjAxMiBKdSBIeXVuZyBMZWVcbipcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlXG4qIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4qIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuKiBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbipcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvclxuKiBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HXG4qIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuKiBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gQ3JlYXRlIHRoZSBjb252ZXggaHVsbCB1c2luZyB0aGUgR2lmdCB3cmFwcGluZyBhbGdvcml0aG1cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2lmdF93cmFwcGluZ19hbGdvcml0aG1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnZleEh1bGwocG9pbnRzKSB7XG4gICAgLy8gRmluZCB0aGUgcmlnaHQgbW9zdCBwb2ludCBvbiB0aGUgaHVsbFxuICAgIHZhciBpMCA9IDA7XG4gICAgdmFyIHgwID0gcG9pbnRzWzBdLng7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHggPSBwb2ludHNbaV0ueDtcbiAgICAgICAgaWYgKHggPiB4MCB8fCAoeCA9PSB4MCAmJiBwb2ludHNbaV0ueSA8IHBvaW50c1tpMF0ueSkpIHtcbiAgICAgICAgICAgIGkwID0gaTtcbiAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICB2YXIgaHVsbCA9IFtdO1xuICAgIHZhciBtID0gMDtcbiAgICB2YXIgaWggPSBpMDtcblxuICAgIHdoaWxlICgxKSB7XG4gICAgICAgIGh1bGxbbV0gPSBpaDtcblxuICAgICAgICB2YXIgaWUgPSAwO1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgaWYgKGllID09IGloKSB7XG4gICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgciA9IHZlYzIuc3ViKHBvaW50c1tpZV0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICB2YXIgdiA9IHZlYzIuc3ViKHBvaW50c1tqXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgIHZhciBjID0gdmVjMi5jcm9zcyhyLCB2KTtcbiAgICAgICAgICAgIGlmIChjIDwgMCkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ29sbGluZWFyaXR5IGNoZWNrXG4gICAgICAgICAgICBpZiAoYyA9PSAwICYmIHYubGVuZ3Roc3EoKSA+IHIubGVuZ3Roc3EoKSkge1xuICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG0rKztcbiAgICAgICAgaWggPSBpZTtcblxuICAgICAgICBpZiAoaWUgPT0gaTApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29weSB2ZXJ0aWNlc1xuICAgIHZhciBuZXdQb2ludHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICBuZXdQb2ludHMucHVzaChwb2ludHNbaHVsbFtpXV0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQb2ludHM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VcbntcbiAgICBzdGF0aWMgZ2V0IERFU0tUT1BfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE1PQklMRV9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLnBvaW50ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUElYSS5BcHBsaWNhdGlvbi5yZW5kZXJlclxuICAgICAqIOuenOuNlOufrOyXkOyEnCBpbnRlcmFjdGlvIOqwneyytOulvCDssLjsobDtlaAg7IiYIOyeiOyWtOyEnCDsgqzsmqntlZjroKTrqbQg66CM642U65+s66W8IOyFi+2Mhe2VtOyVvCDtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZhbHVlIHtQSVhJLldlYkdMUmVuZGVycmVyfFBJWEkuQ2FudmFzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgc3RhdGljIHNldCByZW5kZXJlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog66qo67CU7J28IOuMgOydkeydhCDsnITtlbTshJxcbiAgICAgKiBQQyDrsoTsoITsl5DshJzripQgbW91c2Ug6rCd7LK066W8LCDrqqjrsJTsnbwg67KE7KCE7JeQ7ISc64qUIHBvaW50ZXIg6rCd7LK066W8IOyFi+2Mhe2VmOuptFxuICAgICAqIGdsb2JhbCDqsJ3ssrTsl5DshJwg7LC47KGw7ZW07IScIOyijO2RnOqwkuydhCDsoITri6ztlZjrj4TroZ0g7ZWp64uI64ukLlxuICAgICAqXG4gICAgICog66eM7JW9IOyEpOygle2VmOyngCDslYrsnLzrqbQg6riw67O4IFBD66eMIOuMgOydke2VmOuPhOuhnSBtb3VzZSDqsJ3ssrTrpbwg7ISk7KCV7ZWp64uI64ukLlxuICAgICAqXG4gICAgICogRGVza3RvcCA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2VcbiAgICAgKiBNb2JpbGUgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLnBvaW50ZXJcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IG1vdXNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21vdXNlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgbW91c2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW91c2UpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlID0gdGhpcy5ERVNLVE9QX01PVVNFO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb3VzZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsLng7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2V0IGN1cnJlbnRDdXJzb3JTdHlsZSh2YWx1ZSkge1xuICAgICAgICBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRDdXJzb3JTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7J2064+ZIOqxsOumrOqwgCA1cHgg7J207ZWY7J206rOgIDUwMG1zIOyViOyXkCDrkZDrsogg7YG066at7ZWY66m0IOuNlOu4lCDtgbTrpq3snLzroZwg7J247KCVXG4gICAgICogQHBhcmFtIHByZXZQb2ludCDsnbTsoITsooztkZxcbiAgICAgKiBAcGFyYW0gY3VycmVudFBvaW50IO2YhOyerOyijO2RnFxuICAgICAqIEBwYXJhbSBwcmV2VGltZSDsnbTsoIQg7YG066atIO2DgOyehFxuICAgICAqIEBwYXJhbSBjdXJyZW50VGltZSDtmITsnqwg7YG066atIO2DgOyehFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDrjZTruJQg7YG066atIOyXrOu2gFxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RvdWJsZUNsaWNrKHByZXZQb2ludCwgY3VycmVudFBvaW50LCBwcmV2VGltZSwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgdmFyIGRpZmZYID0gY3VycmVudFBvaW50LnggLSBwcmV2UG9pbnQueDtcblxuICAgICAgICBpZiAoZGlmZlggPCAwKSB7XG4gICAgICAgICAgICBkaWZmWCA9IGRpZmZYICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGlmZlkgPSBjdXJyZW50UG9pbnQueSAtIHByZXZQb2ludC55O1xuXG4gICAgICAgIGlmIChkaWZmWSA8IDApIHtcbiAgICAgICAgICAgIGRpZmZZID0gZGlmZlkgKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWZmWCA+IDUgfHwgZGlmZlkgPiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBwcmV2VGltZSA+IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL01vdXNlLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi8uLi9zcmMvVmVjdG9yJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL3NyYy9IaXN0b3J5JztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9zcmMvZ2prL1NoYXBlJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vLi4vc3JjL2dqay9Db25zdHMnO1xuaW1wb3J0IFZlcnRpY2VzIGZyb20gJy4uLy4uL3NyYy9namsvVmVydGljZXMnO1xuaW1wb3J0IENvbnZleEh1bGwgZnJvbSAnLi4vLi4vc3JjL2NvbnZleGh1bGwvQ29udmV4SHVsbCc7XG5pbXBvcnQgTWlua293c2tpRGlmZmVyZW5jZSBmcm9tICcuLi8uLi9zcmMvZ2prL01pbmtvd3NraURpZmZlcmVuY2UnO1xuaW1wb3J0IEdqayBmcm9tICcuLi8uLi9zcmMvZHluNGovR2prJztcbmltcG9ydCBDb252ZXggZnJvbSAnLi4vLi4vc3JjL2R5bjRqL0NvbnZleCc7XG5pbXBvcnQgUG9seWdvbiBmcm9tICcuLi8uLi9zcmMvZHluNGovUG9seWdvbic7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwiLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlXCI7XG5pbXBvcnQgUGVuZXRyYXRpb24gZnJvbSBcIi4uLy4uL3NyYy9keW40ai9QZW5ldHJhdGlvblwiO1xuXG5jb25zdCBUT1RBTCA9IDMwXG4gICAgLCBJTlRFUlZBTCA9IDYwMDAwMFxuICAgICwgU0NBTEUgPSBDb25zdHMuU0NBTEVcbiAgICAsIFNUQUdFID0gQ29uc3RzLlNUQUdFXG4gICAgLCBUT1BfTEVGVCA9IHt4OiAyLCB5OiAyfVxuICAgICwgVE9QX1JJR0hUID0ge3g6IDE3LCB5OiAxN31cbiAgICAsIFJBRF9UT19ERUcgPSAxODAgLyBNYXRoLlBJO1xuXG5jb25zdCB0cmlhbmdsZXMgPSBjcmVhdGVQb2x5Z29ucygzLCBUT1RBTCk7XG5jb25zdCByZWN0YW5nbGVzID0gY3JlYXRlUG9seWdvbnMoNCwgVE9UQUwpO1xuXG4vKmNvbnN0IHRyaWFuZ2xlcyA9IFtcbiAgICAvLyBbbmV3IFZlY3RvcigzLCAxKSwgbmV3IFZlY3RvcigzLCA1KSwgbmV3IFZlY3Rvcig2LCA0KV0sXG4gICAgW25ldyBWZWN0b3IoNCwgMTEpLCBuZXcgVmVjdG9yKDQsIDUpLCBuZXcgVmVjdG9yKDksIDkpXSxcbiAgICAvLyBbbmV3IFZlY3RvcigwLCAtMSksIG5ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMSwgMyldLFxuXTtcbmNvbnN0IHJlY3RhbmdsZXMgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoOCwgMSksIG5ldyBWZWN0b3IoOCwgNSksIG5ldyBWZWN0b3IoMTEsIDUpLCBuZXcgVmVjdG9yKDExLCAxKV0sXG4gICAgW25ldyBWZWN0b3IoNSwgNyksIG5ldyBWZWN0b3IoNywgMyksIG5ldyBWZWN0b3IoMTAsIDIpLCBuZXcgVmVjdG9yKDEyLCA3KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoMiwgLTIpLCBuZXcgVmVjdG9yKDUsIC0xKSwgbmV3IFZlY3Rvcig0LCAyKSwgbmV3IFZlY3RvcigxLCAxKV0sXG5dOyovXG5cbi8qY29uc3QgZXJyb3JDYXNlMSA9IFtcbiAgICAvLyBbbmV3IFZlY3RvcigyLCA3KSwgbmV3IFZlY3RvcigxMiwgMyksIG5ldyBWZWN0b3IoMTIsIDE3KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoOCwgOCksIG5ldyBWZWN0b3IoMTAsIDcpLCBuZXcgVmVjdG9yKDE0LCA4KV0sXG4gICAgW25ldyBWZWN0b3IoMTAsIDEzKSwgbmV3IFZlY3RvcigxNCwgMTUpLCBuZXcgVmVjdG9yKDExLCAxNCldLFxuXTtcblxuY29uc3QgZXJyb3JDYXNlMiA9IFtcbiAgICAvLyBbbmV3IFZlY3RvcigxNCwgMiksIG5ldyBWZWN0b3IoMTcsIDIpLCBuZXcgVmVjdG9yKDE0LCA3KSwgbmV3IFZlY3Rvcig5LCA3KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoNywgNSksIG5ldyBWZWN0b3IoMTUsIDEwKSwgbmV3IFZlY3RvcigxNiwgMTEpLCBuZXcgVmVjdG9yKDE1LCAxNCldLFxuICAgIFtuZXcgVmVjdG9yKDksIDgpLCBuZXcgVmVjdG9yKDE0LCAxNSksIG5ldyBWZWN0b3IoNCwgMTUpLCBuZXcgVmVjdG9yKDMsIDEyKV0sXG5dOyovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci52aWV3O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICB0aGlzLmtleVVwTGlzdGVuZXIgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcExpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Q29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoc2hhcGUpO1xuICAgICAgICAgICAgc2hhcGUuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNoYXBlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnNoYXBlcyA9IFtdO1xuXG4gICAgICAgIGlmICghdGhpcy5taW5rb3dza2kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubWlua293c2tpKTtcbiAgICAgICAgdGhpcy5taW5rb3dza2kuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCBpbmRleDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0cmlhbmdsZXMubGVuZ3RoKVxuICAgICAgICAgICAgLCBpbmRleDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZWN0YW5nbGVzLmxlbmd0aClcbiAgICAgICAgICAgICwgdmVydGljZXMxID0gbmV3IFZlcnRpY2VzKHRyaWFuZ2xlc1tpbmRleDFdKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczIgPSBuZXcgVmVydGljZXMocmVjdGFuZ2xlc1tpbmRleDJdKTtcblxuICAgICAgICAvKmNvbnN0IGluZGV4MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVycm9yQ2FzZTEubGVuZ3RoKVxuICAgICAgICAgICAgLCBpbmRleDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcnJvckNhc2UyLmxlbmd0aClcbiAgICAgICAgICAgICwgdmVydGljZXMxID0gbmV3IFZlcnRpY2VzKGVycm9yQ2FzZTFbaW5kZXgxXSlcbiAgICAgICAgICAgICwgdmVydGljZXMyID0gbmV3IFZlcnRpY2VzKGVycm9yQ2FzZTJbaW5kZXgyXSk7Ki9cblxuICAgICAgICB2ZXJ0aWNlczEubXVsdGlwbHkoU0NBTEUpO1xuICAgICAgICB2ZXJ0aWNlczIubXVsdGlwbHkoU0NBTEUpO1xuXG4gICAgICAgIGNvbnN0IHNoYXBlMSA9IG5ldyBTaGFwZSh2ZXJ0aWNlczEudmVydGljZXMsIFNDQUxFKVxuICAgICAgICAgICAgLCBzaGFwZTIgPSBuZXcgU2hhcGUodmVydGljZXMyLnZlcnRpY2VzLCBTQ0FMRSk7XG4gICAgICAgIHRoaXMubWlua293c2tpID0gbmV3IE1pbmtvd3NraURpZmZlcmVuY2UodmVydGljZXMxLnZlcnRpY2VzLCB2ZXJ0aWNlczIudmVydGljZXMpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS54ID0gKFNUQUdFLndpZHRoIC8gMykgKiAyO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS55ID0gKFNUQUdFLmhlaWdodCAvIDMpICogMjtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKHNoYXBlMSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2hhcGUyKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pbmtvd3NraSk7XG5cbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZTEpO1xuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlMik7XG5cbiAgICAgICAgdmVydGljZXMxLmRpdmlkZShTQ0FMRSk7XG4gICAgICAgIHZlcnRpY2VzMi5kaXZpZGUoU0NBTEUpO1xuXG4gICAgICAgIGNvbnN0IHBvbHlnb24xID0gbmV3IFBvbHlnb24odmVydGljZXMxLnZlcnRpY2VzKVxuICAgICAgICAgICAgLCBwb2x5Z29uMiA9IG5ldyBQb2x5Z29uKHZlcnRpY2VzMi52ZXJ0aWNlcyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3BvbHlnb24xJywgcG9seWdvbjEpO1xuICAgICAgICBjb25zb2xlLmxvZygncG9seWdvbjInLCBwb2x5Z29uMik7XG5cblxuICAgICAgICBjb25zdCBnamsgPSBuZXcgR2prKClcbiAgICAgICAgICAgICwgcGVuZXRyYXRpb24gPSBuZXcgUGVuZXRyYXRpb24oKVxuICAgICAgICAgICAgLCBoaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlzQ29sbGlzaW9uID0gZ2prLmRldGVjdChwb2x5Z29uMSwgcG9seWdvbjIsIHBlbmV0cmF0aW9uLCBoaXN0b3J5KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnaXNDb2xsaXNpb24nLCBpc0NvbGxpc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0NvbGxpc2lvbicsIGlzQ29sbGlzaW9uKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BsYXlDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5kaXNwbGF5Q29sbGlzaW9uLCBJTlRFUlZBTCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgICBvbktleVVwKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIOuRkOuyoe2EsCDsgqzsnbTqsIEg6rWs7ZWY6riwXG4gKiBAcGFyYW0gYVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldEFuZ2xlKGEsIGIpIHtcbiAgICBhID0gbmV3IFZlY3RvcihhLngsIGEueSkubm9ybSgpO1xuICAgIGIgPSBuZXcgVmVjdG9yKGIueCwgYi55KS5ub3JtKCk7XG4gICAgY29uc3QgcmFkaWFuID0gTWF0aC5hY29zKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGIpKTtcbiAgICByZXR1cm4gcmFkaWFuICogUkFEX1RPX0RFRztcbn1cblxuXG4vKipcbiAqIOuenOuNpOycvOuhnCDsooztkZzrpbwg7IOd7ISx7ZWY6rOgIGNvbnZleCBodWxsIOydhCDrp4zrk6TrqbQgT0tcbiAqIEBwYXJhbSBwb2x5Z29uXG4gKiBAcGFyYW0gdG90YWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9seWdvbnMocG9seWdvbiwgdG90YWwpIHtcbiAgICBsZXQgdmVydGljZXM7XG4gICAgY29uc3QgcG9seWdvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9seWdvbjsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZWN0b3IucmFuZG9taXplKFRPUF9MRUZULCBUT1BfUklHSFQpO1xuICAgICAgICAgICAgdmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gcG9seWdvbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb252ZXhIdWxsID0gQ29udmV4SHVsbC5nZW5lcmF0ZSh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSBjb252ZXhIdWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcG9seWdvbnMucHVzaCh2ZXJ0aWNlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvbHlnb25zO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9lcGEvVGVzdC5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBDb25zdHMgZnJvbSAnLi4vZ2prL0NvbnN0cyc7XG5pbXBvcnQgUGFzdGVsQ29sb3IgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yJztcblxuY29uc3QgRk9OVF9TSVpFID0gJzlweCdcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB0aGlzLmxpbmVDb2xvciA9IGNvbG9yLmhleDtcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBjb2xvci5oZXhTaGFwO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSB0aGlzLmNyZWF0ZUxhYmVsKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxhYmVsKCkge1xuICAgICAgICBjb25zdCBuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoaSwge1xuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBmb250OiBGT05UX1NJWkUsXG4gICAgICAgICAgICAgICAgZmlsbDogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRleHQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGFiZWxzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhcGhpY3NcbiAgICAgICAgICAgICwgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG4gICAgICAgICAgICAsIG9yaWdpbiA9IHZlcnRpY2VzWzBdO1xuXG4gICAgICAgIGcuY2xlYXIoKTtcbiAgICAgICAgZy5saW5lU3R5bGUoMSwgdGhpcy5saW5lQ29sb3IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKG9yaWdpbi54LCBvcmlnaW4ueSk7XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGcubGluZVRvKHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWxzW2luZGV4XVxuICAgICAgICAgICAgICAgICwgdmVjID0gVmVjdG9yLmRpdmlkZVNjYWxhcih2ZXJ0ZXgsIFNDQUxFKTtcblxuICAgICAgICAgICAgbGFiZWwueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgbGFiZWwueSA9IHZlcnRleC55O1xuXG4gICAgICAgICAgICBsYWJlbC50ZXh0ID0gYCgke3ZlYy54fSwke3ZlYy55fSlgO1xuICAgICAgICAgICAgbGFiZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBnLmxpbmVUbyhvcmlnaW4ueCwgb3JpZ2luLnkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5sYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQobGFiZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxhYmVscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmxhYmVscyA9IG51bGw7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1NoYXBlLmpzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cyB7XG4gICAgc3RhdGljIGdldCBTQ0FMRSgpIHtcbiAgICAgICAgcmV0dXJuIDE0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBR0UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogNjAwLCBoZWlnaHQ6IDYwMH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhZ2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvQ29uc3RzLmpzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB9XG5cbiAgICBtdWx0aXBseShzY2FsYXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRleC54ICo9IHNjYWxhcjtcbiAgICAgICAgICAgIHZlcnRleC55ICo9IHNjYWxhcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGl2aWRlKHNjYWxhcikge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdmVydGV4LnkgLz0gc2NhbGFyO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1ZlcnRpY2VzLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vUG9pbnQnO1xuaW1wb3J0IENvbnZleEh1bGwgZnJvbSAnLi4vY29udmV4aHVsbC9Db252ZXhIdWxsJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi91dGlscy9QYXN0ZWxDb2xvcic7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uL2dqay9Db25zdHMnO1xuXG5cbmNvbnN0IFNDQUxFID0gQ29uc3RzLlNDQUxFXG4gICAgLCBTVEFHRSA9IENvbnN0cy5TVEFHRVxuICAgICwgRk9OVF9DT0xPUiA9ICcjRkZGRkZGJ1xuICAgICwgQVhFU19MSU5FX0NPTE9SID0gJzB4RkZGRkZGJ1xuICAgICwgQ09OVkVYX0hVTExfTElORV9DT0xPUiA9IFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmtvd3NraURpZmZlcmVuY2UgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcblxuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAgICAgICAgICAsIGNvbnZleEh1bGwgPSB0aGlzLmNvbnZleEh1bGwgPSBDb252ZXhIdWxsLmdlbmVyYXRlKHZlcnRpY2VzKTtcblxuICAgICAgICB0aGlzLnRleHRzID0gW107XG4gICAgICAgIHRoaXMuZHJhd0F4ZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3VmV0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMuZHJhd1BvbHlnb24oY29udmV4SHVsbCk7XG4gICAgfVxuXG4gICAgZHJhd1ZldGljZXModmVydGljZXMpIHtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh2ZXJ0ZXgueCwgdmVydGV4LnksIDMsIFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4KTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChwb2ludCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZlYyA9IFZlY3Rvci5kaXZpZGVTY2FsYXIodmVydGV4LCBTQ0FMRSk7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGAoJHt2ZWMueH0sICR7dmVjLnl9KWAsIHBvaW50LnZlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdQb2x5Z29uKHZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzO1xuXG4gICAgICAgIGcubGluZVN0eWxlKDEsIENPTlZFWF9IVUxMX0xJTkVfQ09MT1IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHsgZy5saW5lVG8odmVydGV4LngsIHZlcnRleC55KTt9KTtcbiAgICAgICAgZy5saW5lVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gICAgfVxuXG4gICAgZHJhd0F4ZXMoKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzXG4gICAgICAgICAgICAsIGh3ID0gU1RBR0Uud2lkdGggLyAyXG4gICAgICAgICAgICAsIGhoID0gU1RBR0UuaGVpZ2h0IC8gMjtcblxuICAgICAgICBnLmxpbmVTdHlsZSgxLCBBWEVTX0xJTkVfQ09MT1IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKC1odywgMCk7XG4gICAgICAgIGcubGluZVRvKGh3LCAwKTtcbiAgICAgICAgZy5tb3ZlVG8oMCwgLWhoKTtcbiAgICAgICAgZy5saW5lVG8oMCwgaGgpO1xuICAgIH1cblxuICAgIGRyYXdUZXh0KHRleHQsIHZlcnRleCA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBQSVhJLlRleHQodGV4dCwge1xuICAgICAgICAgICAgZm9udDogJzIwcHgnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZmlsbDogRk9OVF9DT0xPUlxuICAgICAgICB9KTtcblxuICAgICAgICBsYWJlbC54ID0gdmVydGV4Lng7XG4gICAgICAgIGxhYmVsLnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgdGhpcy50ZXh0cy5wdXNoKGxhYmVsKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChsYWJlbCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRleHRzLmZvckVhY2goKHRleHQpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChwb2ludCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgfVxuXG4gICAgZ2V0VmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgICAgICAgdmVydGljZXMxLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2VzMi5mb3JFYWNoKChiKSA9PiB7XG4gICAgICAgICAgICAgICAgdmVydGljZXMucHVzaChWZWN0b3Iuc3VidHJhY3QoYSwgYikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvTWlua293c2tpRGlmZmVyZW5jZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBFcHNpbG9uIGZyb20gJy4vRXBzaWxvbic7XG5pbXBvcnQgTWlua293c2tpU3VtIGZyb20gJy4vTWlua293c2tpU3VtJztcblxuY29uc3QgREVGQVVMVF9NQVhfSVRFUkFUSU9OUyA9IDMwO1xuY29uc3QgREVGQVVMVF9ERVRFQ1RfRVBTSUxPTiA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdqayB7XG4gICAgY29uc3RydWN0b3IobWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5taW5rb3dza2lQZW5ldHJhdGlvblNvbHZlciA9IG1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyO1xuICAgIH1cblxuICAgIGdldEluaXRpYWxEaXJlY3Rpb24oY29udmV4MSwgY29udmV4Mikge1xuICAgICAgICAvLyB0cmFuc2Zvcm0gaW50byB3b3JsZCBzcGFjZSBpZiB0cmFuc2Zvcm0gaXMgbm90IG51bGxcbiAgICAgICAgY29uc3QgYzEgPSBjb252ZXgxLmdldENlbnRlcigpO1xuICAgICAgICBjb25zdCBjMiA9IGNvbnZleDIuZ2V0Q2VudGVyKCk7XG4gICAgICAgIC8vIGNob29zZSBzb21lIHNlYXJjaCBkaXJlY3Rpb25cbiAgICAgICAgcmV0dXJuIGMyLnN1YnRyYWN0KGMxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb252ZXgxIHtDb252ZXh9XG4gICAgICogQHBhcmFtIGNvbnZleDIge0NvbnZleH1cbiAgICAgKiBAcGFyYW0gcGVuZXRyYXRpb24ge1BlbmV0cmFpb259XG4gICAgICogQHBhcmFtIGhpc3Rvcnkge0hpc3Rvcnl9XG4gICAgICovXG4gICAgZGV0ZWN0KGNvbnZleDEsIGNvbnZleDIsIHBlbmV0cmF0aW9uLCBoaXN0b3J5KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZXggPSBbXTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBNaW5rb3dza2kgc3VtXG4gICAgICAgIGNvbnN0IG1zID0gbmV3IE1pbmtvd3NraVN1bShjb252ZXgxLCBjb252ZXgyKTtcblxuICAgICAgICAvLyBjaG9vc2Ugc29tZSBzZWFyY2ggZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0SW5pdGlhbERpcmVjdGlvbihjb252ZXgxLCBjb252ZXgyKTtcblxuICAgICAgICAvLyBwZXJmb3JtIHRoZSBkZXRlY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0Mihtcywgc2ltcGxleCwgZGlyZWN0aW9uLCBoaXN0b3J5KSkge1xuICAgICAgICAgICAgLy8gdGhpcy5taW5rb3dza2lQZW5ldHJhdGlvblNvbHZlci5nZXRQZW5ldHJhdGlvbihzaW1wbGV4LCBtcywgcGVuZXRyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbXMge01pbmtvd3NraVN1bX1cbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqIEBwYXJhbSBoaXN0b3J5IHtIaXN0b3J5fVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRldGVjdDIobXMsIHNpbXBsZXgsIGRpcmVjdGlvbiwgaGlzdG9yeSkge1xuICAgICAgICAvLyDrlJTrsoTqt7jsmqkg7Z6I7Iqk7Yag66asXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMyk7XG4gICAgICAgIC8vIGNoZWNrIGZvciBhIHplcm8gZGlyZWN0aW9uIHZlY3RvclxuICAgICAgICBpZiAoZGlyZWN0aW9uLmlzWmVybygpKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24uc2V0KDEsIDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0aGUgZmlyc3QgcG9pbnRcbiAgICAgICAgc2ltcGxleFswXSA9IG1zLmdldFN1cHBvcnRQb2ludChkaXJlY3Rpb24pO1xuICAgICAgICBkaXJlY3Rpb25zWzBdID0gZGlyZWN0aW9uO1xuICAgICAgICAvLyBpcyB0aGUgc3VwcG9ydCBwb2ludCBwYXN0IHRoZSBvcmlnaW4gYWxvbmcgZD9cbiAgICAgICAgLy8gc3VwcG9ydCBwb2ludCDrsKntlqXsnYQg65Sw6528IOybkOygkOydhCDsp4DrgpjripTsp4Ag7LK07YGsICjsm5DsoJDsnYQg7KeA64KY7KeAIOyViuuKlOuLpOuptFgpXG4gICAgICAgIGlmIChzaW1wbGV4WzBdLmRvdChkaXJlY3Rpb24pIDw9IDApIHtcbiAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZWdhdGUgdGhlIHNlYXJjaCBkaXJlY3Rpb25cbiAgICAgICAgZGlyZWN0aW9uLmludmVydCgpO1xuICAgICAgICAvLyBzdGFydCB0aGUgbG9vcFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERFRkFVTFRfTUFYX0lURVJBVElPTlM7IGkrKykge1xuICAgICAgICAgICAgLy8gYWx3YXlzIGFkZCBhbm90aGVyIHBvaW50IHRvIHRoZSBzaW1wbGV4IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxvb3BcbiAgICAgICAgICAgIHNpbXBsZXgucHVzaChtcy5nZXRTdXBwb3J0UG9pbnQoZGlyZWN0aW9uKSk7XG4gICAgICAgICAgICBkaXJlY3Rpb25zW3NpbXBsZXgubGVuZ3RoIC0gMV0gPSBkaXJlY3Rpb247XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgbGFzdCBwb2ludCB3ZSBhZGRlZCB3YXMgcGFzdCB0aGUgb3JpZ2luXG4gICAgICAgICAgICBpZiAoc2ltcGxleFtzaW1wbGV4Lmxlbmd0aCAtIDFdLmRvdChkaXJlY3Rpb24pIDw9IERFRkFVTFRfREVURUNUX0VQU0lMT04pIHtcbiAgICAgICAgICAgICAgICAvLyBhIGlzIG5vdCBwYXN0IHRoZSBvcmlnaW4gc28gdGhlcmVmb3JlIHRoZSBzaGFwZXMgZG8gbm90IGludGVyc2VjdFxuICAgICAgICAgICAgICAgIC8vIGhlcmUgd2UgdHJlYXQgdGhlIG9yaWdpbiBvbiB0aGUgbGluZSBhcyBubyBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBpbW1lZGlhdGVseSByZXR1cm4gd2l0aCBudWxsIGluZGljYXRpbmcgbm8gcGVuZXRyYXRpb25cbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyBwYXN0IHRoZSBvcmlnaW4sIHRoZW4gdGVzdCB3aGV0aGVyIHRoZSBzaW1wbGV4IGNvbnRhaW5zIHRoZSBvcmlnaW5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1NpbXBsZXgoc2ltcGxleCwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc2ltcGxleCBjb250YWlucyB0aGUgb3JpZ2luIHRoZW4gd2Uga25vdyB0aGF0IHRoZXJlIGlzIGFuIGludGVyc2VjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgYnJva2Ugb3V0IG9mIHRoZSBsb29wIHRoZW4gd2Uga25vdyB0aGVyZSB3YXMgYW4gaW50ZXJzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzaW1wbGV4IGRvZXMgbm90IGNvbnRhaW4gdGhlIG9yaWdpbiB0aGVuIHdlIG5lZWQgdG8gbG9vcCB1c2luZyB0aGUgbmV3XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIGRpcmVjdGlvbiBhbmQgc2ltcGxleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gc2ltcGxleCBjb250YWlucyB0aGUgb3JpZ2luLiAgSWYgaXQgZG9lcyBjb250YWluIHRoZSBvcmlnaW4sXG4gICAgICogdGhlbiB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0cnVlLiAgSWYgaXQgZG9lcyBub3QsIHRoaXMgbWV0aG9kIHdpbGwgdXBkYXRlIGJvdGggdGhlIGdpdmVuXG4gICAgICogc2ltcGxleCBhbmQgYWxzbyB0aGUgZ2l2ZW4gc2VhcmNoIGRpcmVjdGlvbi5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIG1ldGhvZCBvbmx5IGhhbmRsZXMgdGhlIGxpbmUgc2VnbWVudCBhbmQgdHJpYW5nbGUgc2ltcGxleCBjYXNlcywgaG93ZXZlciwgdGhlc2UgdHdvIGNhc2VzXG4gICAgICogc2hvdWxkIGJlIHRoZSBvbmx5IG9uZXMgbmVlZGVkIGZvciAyIGRpbWVuc2lvbmFsIHtAbGluayBHamt9LiAgVGhlIHNpbmdsZSBwb2ludCBjYXNlIGlzIGhhbmRsZWRcbiAgICAgKiBpbiB7QGxpbmsgI2RldGVjdChNaW5rb3dza2lTdW0sIExpc3QsIFZlY3RvcjIpfS5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIG1ldGhvZCBhbHNvIGFzc3VtZXMgdGhhdCB0aGUgbGFzdCBwb2ludCBpbiB0aGUgc2ltcGxleCBpcyB0aGUgbW9zdCByZWNlbnRseSBhZGRlZCBwb2ludC5cbiAgICAgKiBUaGlzIG1hdHRlcnMgYmVjYXVzZSBvcHRpbWl6YXRpb25zIGFyZSBhdmFpbGFibGUgd2hlbiB5b3Uga25vdyB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSBzaW1wbGV4IHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY2hlY2tTaW1wbGV4KHNpbXBsZXgsIGRpcmVjdGlvbikge1xuICAgICAgICAvLyB0aGlzIG1ldGhvZCBzaG91bGQgbmV2ZXIgYmUgc3VwcGxpZWQgYW55dGhpbmcgb3RoZXIgdGhhbiAyIG9yIDMgcG9pbnRzIGZvciB0aGUgc2ltcGxleFxuICAgICAgICAvLyBnZXQgdGhlIGxhc3QgcG9pbnQgYWRkZWQgKGEpXG4gICAgICAgIGNvbnN0IGEgPSBzaW1wbGV4W3NpbXBsZXgubGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgYS50byhPUklHSU4pO1xuICAgICAgICBjb25zdCBhbyA9IFZlY3Rvci5uZWdhdGUoYSk7XG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSB3aGF0IHR5cGUgb2Ygc2ltcGxleCB3ZSBoYXZlXG4gICAgICAgIGlmIChzaW1wbGV4Lmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICAvLyB0aGVuIHdlIGhhdmUgYSB0cmlhbmdsZVxuICAgICAgICAgICAgY29uc3QgYiA9IHNpbXBsZXhbMV07XG4gICAgICAgICAgICBjb25zdCBjID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZWRnZXNcbiAgICAgICAgICAgIGNvbnN0IGFiID0gYS50byhiKTtcbiAgICAgICAgICAgIGNvbnN0IGFjID0gYS50byhjKTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZWRnZSBub3JtYWxcbiAgICAgICAgICAgIGNvbnN0IGFjUGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhYywgYWMpO1xuICAgICAgICAgICAgLy8gc2VlIHdoZXJlIHRoZSBvcmlnaW4gaXMgYXRcbiAgICAgICAgICAgIGNvbnN0IGFjTG9jYXRpb24gPSBhY1BlcnAuZG90KGFvKTtcbiAgICAgICAgICAgIGlmIChhY0xvY2F0aW9uID49IDApIHtcbiAgICAgICAgICAgICAgICAvLyDsm5DsoJDsnYAgQSAtPiBD7J2YIOyYpOuluOyqveyXkOyeiOuLpC5cbiAgICAgICAgICAgICAgICAvLyB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIHJpZ2h0IHNpZGUgb2YgQS0+Q1xuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgdGhlIGNvbmRpdGlvbiBmb3IgdGhlIGdqayBsb29wIHRvIGNvbnRpbnVlIHRoZSBvcmlnaW5cbiAgICAgICAgICAgICAgICAvLyBtdXN0IGxpZSBiZXR3ZWVuIEEgYW5kIEMgc28gcmVtb3ZlIEIgYW5kIHNldCB0aGVcbiAgICAgICAgICAgICAgICAvLyBuZXcgc2VhcmNoIGRpcmVjdGlvbiB0byBBLT5DIHBlcnBlbmRpY3VsYXIgdmVjdG9yXG4gICAgICAgICAgICAgICAgc2ltcGxleC5zcGxpY2UoMSwgMSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB1c2VkIHRvIGJlIGRpcmVjdGlvbi5zZXQoVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFvLCBhYykpO1xuICAgICAgICAgICAgICAgIC8vIGJ1dCB3YXMgY2hhbmdlZCBzaW5jZSB0aGUgb3JpZ2luIG1heSBsaWUgb24gdGhlIHNlZ21lbnQgY3JlYXRlZFxuICAgICAgICAgICAgICAgIC8vIGJ5IGEgLT4gYyBpbiB3aGljaCBjYXNlIHdvdWxkIHByb2R1Y2UgYSB6ZXJvIHZlY3RvciBub3JtYWxcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGluZyBhYydzIG5vcm1hbCB1c2luZyBiIGlzIG1vcmUgcm9idXN0XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLnNldChhY1BlcnApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhYlBlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYWIsIGFiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhYkxvY2F0aW9uID0gYWJQZXJwLmRvdChhbyk7XG4gICAgICAgICAgICAgICAgLy8gdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSBsZWZ0IHNpZGUgb2YgQS0+Q1xuICAgICAgICAgICAgICAgIGlmIChhYkxvY2F0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIHJpZ2h0IHNpZGUgb2YgQS0+QiBhbmQgdGhlcmVmb3JlIGluIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB0cmlhbmdsZSwgd2UgaGF2ZSBhbiBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG9yaWdpbiBsaWVzIGJldHdlZW4gQSBhbmQgQiBzbyByZW1vdmUgQyBhbmQgc2V0IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2ggZGlyZWN0aW9uIHRvIEEtPkIgcGVycGVuZGljdWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxleC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgdXNlZCB0byBiZSBkaXJlY3Rpb24uc2V0KFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhbywgYWIpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdhcyBjaGFuZ2VkIHNpbmNlIHRoZSBvcmlnaW4gbWF5IGxpZSBvbiB0aGUgc2VnbWVudCBjcmVhdGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ5IGEgLT4gYiBpbiB3aGljaCBjYXNlIHdvdWxkIHByb2R1Y2UgYSB6ZXJvIHZlY3RvciBub3JtYWxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRpbmcgYWIncyBub3JtYWwgdXNpbmcgYyBpcyBtb3JlIHJvYnVzdFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24uc2V0KGFiUGVycCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBiIHBvaW50XG4gICAgICAgICAgICBjb25zdCBiID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgIGNvbnN0IGFiID0gYS50byhiKTtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSB3ZSBoYXZlIDIgcG9pbnRzIChsaW5lIHNlZ21lbnQpXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9mIHRoZSBjb25kaXRpb24gZm9yIHRoZSBnamsgbG9vcCB0byBjb250aW51ZSB0aGUgb3JpZ2luXG4gICAgICAgICAgICAvLyBtdXN0IGxpZSBpbiBiZXR3ZWVuIEEgYW5kIEIsIHNvIGtlZXAgYm90aCBwb2ludHMgaW4gdGhlIHNpbXBsZXggYW5kXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGRpcmVjdGlvbiB0byB0aGUgcGVycCBvZiB0aGUgbGluZSBzZWdtZW50IHRvd2FyZHMgdGhlIG9yaWdpblxuICAgICAgICAgICAgZGlyZWN0aW9uLnNldChWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKSk7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgZGVnZW5lcmF0ZSBjYXNlcyB3aGVyZSB0aGUgb3JpZ2luIGxpZXMgb24gdGhlIHNlZ21lbnRcbiAgICAgICAgICAgIC8vIGNyZWF0ZWQgYnkgYSAtPiBiIHdoaWNoIHdpbGwgeWllbGQgYSB6ZXJvIGVkZ2Ugbm9ybWFsXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLmdldE1hZ25pdHVkZVNxdWFyZWQoKSA8PSBFcHNpbG9uLkUpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UganVzdCBjaG9vc2UgZWl0aGVyIG5vcm1hbCAobGVmdCBvciByaWdodClcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24uc2V0KGFiLmxlZnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9HamsuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvbiB7XG5cbiAgICBzdGF0aWMgZ2V0IEUoKSB7XG4gICAgICAgIHJldHVybiBFcHNpbG9uLmNvbXB1dGUoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcHV0ZSgpIHtcbiAgICAgICAgbGV0IGUgPSAwLjU7XG4gICAgICAgIHdoaWxlICgxLjAgKyBlID4gMS4wKSB7XG4gICAgICAgICAgICBlICo9IDAuNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0Vwc2lsb24uanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlua293c2tpU3VtIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb252ZXgxIOy2qeuPjCDssrTtgaztlaAg64+E7ZiVIDFcbiAgICAgKiBAcGFyYW0gY29udmV4MiDstqnrj4wg7LK07YGs7ZWgIOuPhO2YlSAyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udmV4MSwgY29udmV4Mikge1xuICAgICAgICB0aGlzLmNvbnZleDEgPSBjb252ZXgxO1xuICAgICAgICB0aGlzLmNvbnZleDIgPSBjb252ZXgyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHN1cHBvcnRQb2ludCDrpbwg6rWs7ZWp64uI64ukLiAo7Ius7ZSM66CJ7IqkIOunjOuTpOq4sClcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICovXG4gICAgZ2V0U3VwcG9ydFBvaW50KGRpcmVjdGlvbikge1xuICAgICAgICAvLyBnZXQgdGhlIGZhcnRoZXN0IHBvaW50IGluIHRoZSBnaXZlbiBkaXJlY3Rpb24gaW4gY29udmV4MVxuICAgICAgICBjb25zdCBwb2ludDEgPSB0aGlzLmNvbnZleDEuZ2V0RmFydGhlc3RQb2ludChkaXJlY3Rpb24pO1xuICAgICAgICAvLyBnZXQgdGhlIGZhcnRoZXN0IHBvaW50IGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gaW4gY29udmV4MlxuICAgICAgICBjb25zdCBwb2ludDIgPSB0aGlzLmNvbnZleDIuZ2V0RmFydGhlc3RQb2ludChWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuICAgICAgICAvLyByZXR1cm4gdGhlIE1pbmtvd3NraSBzdW0gcG9pbnRcbiAgICAgICAgcmV0dXJuIHBvaW50MS5zdWJ0cmFjdChwb2ludDIpO1xuICAgIH1cblxuICAgIGdldENvbnZleDEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZleDE7XG4gICAgfVxuXG4gICAgZ2V0Q29udmV4MigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmV4MjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL01pbmtvd3NraVN1bS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb252ZXgge1xuXG4gICAgLyoqXG4gICAgICog67Cp7Zal7JeQ7IScIOqwgOyepSDrqLwg67Kh7YSw7J2YIOyduOuNseyKpCAoRmVhdHVyZSnrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBnZXRGYXJ0aGVzdEZlYXR1cmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0NvbnZleF0gaW1wbG1lbnRzIGdldEZhcnRoZXN0RmVhdHVyZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuwqe2WpeyXkOyEnCDqsIDsnqUg66i8IO2PrOyduO2KuOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqL1xuICAgIGdldEZhcnRoZXN0UG9pbnQoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0NvbnZleF0gaW1wbG1lbnRzIGdldEZhcnRoZXN0UG9pbnQnKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0NvbnZleC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5pbXBvcnQgQ29udmV4IGZyb20gJy4vQ29udmV4JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBHZW9tZXRyeSBmcm9tICcuL0dlb21ldHJ5JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgQ29udmV4IHtcblxuICAgIC8qKlxuICAgICAqIO2PtOumrOqzpFxuICAgICAqIEBwYXJhbSBjZW50ZXIge1ZlY3Rvcn1cbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSBub3JtYWxzIHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdLCBub3JtYWxzID0gW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB0aGlzLm5vcm1hbHMgPSAodmVydGljZXMubGVuZ3RoICE9PSAwKSA/XG4gICAgICAgICAgICBHZW9tZXRyeS5nZXRDb3VudGVyQ2xvY2t3aXNlRWRnZU5vcm1hbHModmVydGljZXMpIDogbm9ybWFscztcbiAgICAgICAgdGhpcy5jZW50ZXIgPSB0aGlzLmdldENlbnRlcigpO1xuICAgIH1cblxuICAgIGdldENlbnRlcigpIHtcbiAgICAgICAgY29uc3QgYXZnID0gbmV3IFZlY3RvcigpXG4gICAgICAgICAgICAsIHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlc1xuICAgICAgICAgICAgLCBjb3VudCA9IHZlcnRpY2VzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGF2Zy54ICs9IHZlcnRpY2VzW2ldLng7XG4gICAgICAgICAgICBhdmcueSArPSB2ZXJ0aWNlc1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgYXZnLnggLz0gY291bnQ7XG4gICAgICAgIGF2Zy55IC89IGNvdW50O1xuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuICAgIGdldEZhcnRoZXN0UG9pbnQoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFZlY3RvcigpO1xuICAgICAgICAvLyBzZXQgdGhlIGZhcnRoZXN0IHBvaW50IHRvIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgcG9pbnQuc2V0KHRoaXMudmVydGljZXNbMF0pO1xuICAgICAgICAvLyBwcmltZSB0aGUgcHJvamVjdGlvbiBhbW91bnRcbiAgICAgICAgbGV0IG1heCA9IGRpcmVjdGlvbi5kb3QodGhpcy52ZXJ0aWNlc1swXSk7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXNbaV1cbiAgICAgICAgICAgICAgICAsIHByb2plY3Rpb24gPSBkaXJlY3Rpb24uZG90KHZlcnRleCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgcG9pbnQuc2V0KHZlcnRleCk7XG4gICAgICAgICAgICAgICAgbWF4ID0gcHJvamVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG5cbiAgICBnZXRGYXJ0aGVzdEZlYXR1cmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IG1heGltdW0gPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGxldCBtYXggPSAtTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcblxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCB2ZXJ0ZXhcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXNbaV07XG4gICAgICAgICAgICAvLyBnZXQgdGhlIHNjYWxhciBwcm9qZWN0aW9uIG9mIHYgb250byBheGlzXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gZGlyZWN0aW9uLmRvdCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgLy8ga2VlcCB0aGUgbWF4aW11bSBwcm9qZWN0aW9uIHBvaW50XG4gICAgICAgICAgICBpZiAocHJvamVjdGlvbiA+IG1heCkge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgbWF4IHBvaW50XG4gICAgICAgICAgICAgICAgbWF4aW11bS5zZXQodik7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBuZXcgbWF4aW11bVxuICAgICAgICAgICAgICAgIG1heCA9IHByb2plY3Rpb247XG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaW5kZXhcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmNlIHdlIGhhdmUgdGhlIHBvaW50IG9mIG1heGltdW1cbiAgICAgICAgLy8gc2VlIHdoaWNoIGVkZ2UgaXMgbW9zdCBwZXJwZW5kaWN1bGFyXG4gICAgICAgIGNvbnN0IGwgPSBpbmRleCArIDEgPT0gY291bnQgPyAwIDogaW5kZXggKyAxO1xuICAgICAgICBjb25zdCByID0gaW5kZXggLSAxIDwgMCA/IGNvdW50IC0gMSA6IGluZGV4IC0gMTtcblxuICAgICAgICBjb25zdCBsZWZ0TiA9IHRoaXMubm9ybWFsc1tpbmRleCA9PSAwID8gY291bnQgLSAxIDogaW5kZXggLSAxXTtcbiAgICAgICAgY29uc3QgcmlnaHROID0gdGhpcy5ub3JtYWxzW2luZGV4XTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBtYXhpbXVtIHBvaW50IGZvciB0aGUgZmVhdHVyZSAodHJhbnNmb3JtIHRoZSBtYXhpbXVtIGludG8gd29ybGQgc3BhY2UpXG4gICAgICAgIGNvbnN0IHZtID0gbmV3IFBvaW50RmVhdHVyZShtYXhpbXVtLCBpbmRleCk7XG4gICAgICAgIC8vIGlzIHRoZSBsZWZ0IG9yIHJpZ2h0IGVkZ2UgbW9yZSBwZXJwZW5kaWN1bGFyP1xuICAgICAgICBpZiAobGVmdE4uZG90KGRpcmVjdGlvbikgPCByaWdodE4uZG90KGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnZlcnRpY2VzW2xdO1xuICAgICAgICAgICAgY29uc3QgdmwgPSBuZXcgUG9pbnRGZWF0dXJlKGxlZnQsIGwpO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBlZGdlIGlzIHRoZSByaWdodCB3aW5kaW5nXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVkZ2VGZWF0dXJlKHZtLCB2bCwgdm0sIG1heGltdW0udG8obGVmdCksIGluZGV4ICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMudmVydGljZXNbcl07XG4gICAgICAgIGNvbnN0IHZyID0gbmV3IFBvaW50RmVhdHVyZShyaWdodCwgcik7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgZWRnZSBpcyB0aGUgcmlnaHQgd2luZGluZ1xuICAgICAgICByZXR1cm4gbmV3IEVkZ2VGZWF0dXJlKHZyLCB2bSwgdm0sIHJpZ2h0LnRvKG1heGltdW0pLCBpbmRleCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9Qb2x5Z29uLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb21ldHJ5IHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2Ygbm9ybWFsaXplZCB2ZWN0b3JzIHJlcHJlc2VudGluZyB0aGUgbm9ybWFscyBvZiBhbGwgdGhlXG4gICAgICogZWRnZXMgZ2l2ZW4gdGhlIHZlcnRpY2VzLlxuICAgICAqIDxwPlxuICAgICAqIFRoaXMgbWV0aG9kIGFzc3VtZXMgY291bnRlci1jbG9ja3dpc2Ugb3JkZXJpbmcuXG4gICAgICogPHA+XG4gICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBnaXZlbiB2ZXJ0aWNlcyBhcnJheSBpcyBudWxsIG9yIGVtcHR5LlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119XG4gICAgICovXG4gICAgc3RhdGljIGdldENvdW50ZXJDbG9ja3dpc2VFZGdlTm9ybWFscyh2ZXJ0aWNlcykge1xuICAgICAgICBpZiAodmVydGljZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaXplID0gdmVydGljZXMubGVuZ3RoO1xuICAgICAgICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxzID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBlZGdlIHBvaW50c1xuICAgICAgICAgICAgY29uc3QgcDEgPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHAyID0gKGkgKyAxID09PSBzaXplKSA/IHZlcnRpY2VzWzBdIDogdmVydGljZXNbaSArIDFdO1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBlZGdlIGFuZCBnZXQgaXRzIGxlZnQgcGVycGVkaWN1bGFyIHZlY3RvclxuICAgICAgICAgICAgY29uc3QgbiA9IHAxLnRvKHAyKS5sZWZ0KCk7XG4gICAgICAgICAgICAvLyBub3JtYWxpemUgaXRcbiAgICAgICAgICAgIG4ubm9ybWFsaXplKCk7XG4gICAgICAgICAgICBub3JtYWxzW2ldID0gbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxzO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovR2VvbWV0cnkuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuZXRyYXRpb24ge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5vcm1hbCB7VmVjdG9yfSBjb252ZXgxIOyXkOyEnCBjb252ZXgyIOuhnCDsuajtiKztlZwgbm9ybWFsXG4gICAgICogQHBhcmFtIGRlcHRoIHtudW1iZXJ9IOy5qO2IrCDquYrsnbRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihub3JtYWwgPSBuZXcgVmVjdG9yKCksIGRlcHRoID0gMCkge1xuICAgICAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm5vcm1hbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgIH1cblxuICAgIGdldE5vcm1hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICAgIH1cblxuICAgIGdldERlcHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXB0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsuajtiKwg67Cp7Zal7J2EIOyEpOygle2VqeuLiOuLpC4g67CY65Oc7IucIG5vcm1hbGl6ZWQg7ZW07JW8IO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gbm9ybWFsIHtWZWN0b3J9XG4gICAgICovXG4gICAgc2V0Tm9ybWFsKG5vcm1hbCkge1xuICAgICAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsuajtiKwg6rmK7J2066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gZGVwdGgge251bWJlcn1cbiAgICAgKi9cbiAgICBzZXREZXB0aChkZXB0aCkge1xuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9QZW5ldHJhdGlvbi5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9yeSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbnMge1ZlY3RvcltdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpbXBsZXggPSBuZXcgQXJyYXkoMyksIGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMykpIHtcbiAgICAgICAgdGhpcy5zaW1wbGV4ID0gc2ltcGxleDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB9XG5cbiAgICBzZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zaW1wbGV4ID0gc2ltcGxleDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGlzdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
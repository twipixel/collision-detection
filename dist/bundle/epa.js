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

/***/ 337:
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
	
	var _ConvexHull = __webpack_require__(331);
	
	var _ConvexHull2 = _interopRequireDefault(_ConvexHull);
	
	var _MinkowskiDifference = __webpack_require__(342);
	
	var _MinkowskiDifference2 = _interopRequireDefault(_MinkowskiDifference);
	
	var _Gjk = __webpack_require__(343);
	
	var _Gjk2 = _interopRequireDefault(_Gjk);
	
	var _Epa = __webpack_require__(350);
	
	var _Epa2 = _interopRequireDefault(_Epa);
	
	var _Polygon = __webpack_require__(351);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _KeyCode = __webpack_require__(332);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _PastelColor = __webpack_require__(330);
	
	var _PastelColor2 = _interopRequireDefault(_PastelColor);
	
	var _Penetration = __webpack_require__(354);
	
	var _Penetration2 = _interopRequireDefault(_Penetration);
	
	var _Painter = __webpack_require__(355);
	
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
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Epsilon = __webpack_require__(344);
	
	var _Epsilon2 = _interopRequireDefault(_Epsilon);
	
	var _MinkowskiSum = __webpack_require__(345);
	
	var _MinkowskiSum2 = _interopRequireDefault(_MinkowskiSum);
	
	var _ExpandingSimplex = __webpack_require__(346);
	
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
	
	var _stablepriorityqueue = __webpack_require__(347);
	
	var _stablepriorityqueue2 = _interopRequireDefault(_stablepriorityqueue);
	
	var _ExpandingSimplexEdge = __webpack_require__(349);
	
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

/***/ 347:
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(348)(module)))

/***/ }),

/***/ 348:
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

/***/ 349:
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

/***/ 350:
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
	
	var _Epsilon = __webpack_require__(344);
	
	var _Epsilon2 = _interopRequireDefault(_Epsilon);
	
	var _ExpandingSimplex = __webpack_require__(346);
	
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

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Convex2 = __webpack_require__(352);
	
	var _Convex3 = _interopRequireDefault(_Convex2);
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Geometry = __webpack_require__(353);
	
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

/***/ 352:
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

/***/ 354:
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

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _GJK = __webpack_require__(356);
	
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2VwYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqIiwid2VicGFjazovLy8uL3NyYy9nZW9tL1BvaW50LmpzP2YwNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1Bhc3RlbENvbG9yLmpzPzk2ZjUqIiwid2VicGFjazovLy8uL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwuanM/ZjI5NioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdXNlLmpzPzkyNDEqIiwid2VicGFjazovLy8uL3Rlc3QvZXBhL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9TaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL1ZlcnRpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvTWlua293c2tpRGlmZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovR2prLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9FcHNpbG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9NaW5rb3dza2lTdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0V4cGFuZGluZ1NpbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdGFibGVwcmlvcml0eXF1ZXVlL1N0YWJsZVByaW9yaXR5UXVldWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovRXhwYW5kaW5nU2ltcGxleEVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0VwYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovUG9seWdvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovQ29udmV4LmpzIiwid2VicGFjazovLy8uL3NyYy9keW40ai9HZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluNGovUGVuZXRyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9HSksuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9NaW5rb3dza2lTdW1Qb2ludC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJtYWluIiwiTWFpbiIsImNhbnZhcyIsInJlbmRlcmVyIiwic3RhZ2UiLCJ0ZXN0IiwiY29udGFpbmVyIiwiaW5pdCIsImFkZEV2ZW50Iiwib25SZXNpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUElYSSIsIkNhbnZhc1JlbmRlcmVyIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3IiwiYXV0b1Jlc2l6ZSIsImJhY2tncm91bmRDb2xvciIsIk1vdXNlIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJUZXN0IiwidXBkYXRlTG9vcCIsInJlc2l6ZVdpbmRvdyIsIm9ucmVzaXplIiwiYmluZCIsIm1zIiwidXBkYXRlIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlbmRlciIsImlubmVyV2lkdGgiLCJkZXZpY2VQaXhlbFJhdGlvIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInJlc2l6ZSIsImRlZ3JlZXMiLCJNYXRoIiwiUEkiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJmbG9vciIsInJhZGlhbjJkZWdyZWVzIiwicmFkIiwiZGVncmVlczJyYWRpYW4iLCJkZWciLCJWZWN0b3IiLCJhcnIiLCJvYmoiLCJ4IiwieSIsInZlYyIsInNjYWxhciIsInN1YnRyYWN0IiwidmVjdG9yIiwiaW52ZXJ0WCIsImludmVydFkiLCJsZW5ndGgiLCJkaXZpZGUiLCJub3JtYWxpemUiLCJmYWN0b3IiLCJhYnMiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJyYW5kb21pemVYIiwicmFuZG9taXplWSIsInJvdW5kIiwicHJlY2lzaW9uIiwidG9GaXhlZCIsImFtb3VudCIsIm1peFgiLCJtaXhZIiwiY29weVgiLCJjb3B5WSIsInRlbXAiLCJ2ZWMyIiwiZG90IiwiY29lZmYiLCJhdGFuMiIsImhvcml6b250YWxBbmdsZSIsInZlcnRpY2FsQW5nbGUiLCJob3Jpem9udGFsQW5nbGVEZWciLCJhbmdsZSIsIm54IiwiY29zIiwic2luIiwibnkiLCJyb3RhdGUiLCJyb3RhdGlvbiIsInJvdGF0ZVRvIiwicm90YXRlQnkiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcXJ0IiwiZGlzdGFuY2VTcSIsImRpcmVjdGlvbiIsImR4IiwiZHkiLCJsZW5ndGhTcSIsImEiLCJiIiwidiIsImNsb25lIiwicmV0IiwibXVsdGlwbHlTY2FsYXIiLCJjIiwiciIsImFjIiwiYmMiLCJ2ZWMxIiwidG8iLCJhZGQiLCJQb2ludCIsInJhZGl1cyIsImNvbG9yIiwiUGFzdGVsQ29sb3IiLCJnZW5lcmF0ZSIsImhleCIsImFscGhhIiwiYnV0dG9uTW9kZSIsImludGVyYWN0aXZlIiwiY2xlYXIiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImx0IiwicmIiLCJwb3NpdGlvbiIsInJhbmRvbWl6ZSIsImZyb21PYmplY3QiLCJHcmFwaGljcyIsImhCYXNlIiwibmV3SCIsIm5ld0wiLCJIU0x0b1JHQiIsImciLCJoc2wiLCJyZ2IiLCJSR0J0b0hleCIsImhleFNoYXAiLCJoIiwicyIsImwiLCJyZCIsImh1ZVRvUkdCIiwibSIsIm4iLCJvIiwicSIsInAiLCJwcmVmaXgiLCJ0b1N0cmluZyIsIkNvbnZleEh1bGwiLCJwb2ludHMiLCJzdGFjayIsInNvcnQiLCJzb3J0TG93ZXJZWCIsImJhc2VQb2ludCIsImkiLCJyZWxhdGl2ZVBvc2l0aW9uIiwic29ydENjdyIsInB1c2giLCJuZXh0IiwiZmlyc3QiLCJzZWNvbmQiLCJwb3AiLCJpc0NjdyIsImNvbnZleEh1bGwiLCJpbmRleCIsInBvaW50IiwicG9pbnRBIiwicG9pbnRCIiwicG9pbnRDIiwidHJpYW5nbGVBcmVhIiwiZGVidWdBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVDb252ZXhIdWxsIiwiaTAiLCJ4MCIsImh1bGwiLCJpaCIsImllIiwiaiIsInN1YiIsImNyb3NzIiwibGVuZ3Roc3EiLCJuZXdQb2ludHMiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJwcmV2VGltZSIsImN1cnJlbnRUaW1lIiwiZGlmZlgiLCJkaWZmWSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImdsb2JhbCIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIiwiVE9UQUwiLCJJTlRFUlZBTCIsIlNDQUxFIiwiQ29uc3RzIiwiU1RBR0UiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIlJBRF9UT19ERUciLCJ0cmlhbmdsZXMiLCJjcmVhdGVQb2x5Z29ucyIsInJlY3RhbmdsZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJzaGFwZXMiLCJncmFwaGljcyIsImRpc3BsYXkiLCJkaXNwbGF5Q29sbGlzaW9uIiwia2V5VXBMaXN0ZW5lciIsIm9uS2V5VXAiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VEb3duTGlzdGVuZXIiLCJvbk1vdXNlRG93biIsIm9uIiwiY2hlY2tDb2xsaXNpb24iLCJmb3JFYWNoIiwic2hhcGUiLCJyZW1vdmVDaGlsZCIsImRlc3Ryb3kiLCJtaW5rb3dza2kiLCJpbmRleDEiLCJpbmRleDIiLCJ2ZXJ0aWNlczEiLCJWZXJ0aWNlcyIsInZlcnRpY2VzMiIsInBlbmV0cmF0aW9uQ29sb3IiLCJwZW5ldHJhdGlvbkFscGhhIiwibXVsdGlwbHkiLCJzaGFwZTEiLCJTaGFwZSIsInZlcnRpY2VzIiwic2hhcGUyIiwic2hhcGUzIiwiTWlua293c2tpRGlmZmVyZW5jZSIsInBvbHlnb24xIiwiUG9seWdvbiIsInBvbHlnb24yIiwiZ2prIiwiR2prIiwiRXBhIiwicGVuZXRyYXRpb24iLCJQZW5ldHJhdGlvbiIsImhpc3RvcnkiLCJIaXN0b3J5IiwiaXNDb2xsaXNpb24iLCJkZXRlY3QiLCJhcnJvdyIsIm5vcm1hbCIsImRlcHRoIiwibGluZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwidmlzaWJsZSIsImludGVydmFsSWQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJoaXRBcmVhIiwiUmVjdGFuZ2xlIiwiZSIsImtleUNvZGUiLCJLZXlDb2RlIiwiU1BBQ0UiLCJnZXRBbmdsZSIsIm5vcm0iLCJyYWRpYW4iLCJhY29zIiwiZG90UHJvZHVjdCIsInBvbHlnb24iLCJ0b3RhbCIsInBvbHlnb25zIiwidmVydGV4Iiwic2ltcGxleCIsIkFycmF5IiwiZGlyZWN0aW9ucyIsIkZPTlRfU0laRSIsImxpbmVDb2xvciIsImxpbmVBbHBoYSIsInRleHRDb2xvciIsInJlcGxhY2UiLCJsYWJlbHMiLCJjcmVhdGVMYWJlbCIsImRyYXciLCJ0ZXh0IiwiVGV4dCIsImFsaWduIiwiZm9udCIsImZpbGwiLCJvcmlnaW4iLCJsYWJlbCIsImRpdmlkZVNjYWxhciIsIkZPTlRfQ09MT1IiLCJBWEVTX0xJTkVfQ09MT1IiLCJDT05WRVhfSFVMTF9MSU5FX0NPTE9SIiwiZ2V0VmVydGljZXMiLCJ0ZXh0cyIsImRyYXdBeGVzIiwiZHJhd1ZldGljZXMiLCJkcmF3UG9seWdvbiIsImRyYXdUZXh0IiwiaHciLCJoaCIsIkRFRkFVTFRfTUFYX0lURVJBVElPTlMiLCJERUZBVUxUX0RFVEVDVF9FUFNJTE9OIiwibWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXIiLCJjb252ZXgxIiwiY29udmV4MiIsImMxIiwiZ2V0Q2VudGVyIiwiYzIiLCJNaW5rb3dza2lTdW0iLCJnZXRJbml0aWFsRGlyZWN0aW9uIiwiZGV0ZWN0MiIsImdldFBlbmV0cmF0aW9uIiwiaXNaZXJvIiwic2V0IiwiZ2V0U3VwcG9ydFBvaW50Iiwic2V0SGlzdG9yeSIsImludmVydCIsImNoZWNrU2ltcGxleCIsImFvIiwibmVnYXRlIiwiYWIiLCJhY1BlcnAiLCJ0cmlwbGVQcm9kdWN0IiwiYWNMb2NhdGlvbiIsInNwbGljZSIsImFiUGVycCIsImFiTG9jYXRpb24iLCJnZXRNYWduaXR1ZGVTcXVhcmVkIiwiRXBzaWxvbiIsIkUiLCJsZWZ0IiwiY29tcHV0ZSIsInBvaW50MSIsImdldEZhcnRoZXN0UG9pbnQiLCJwb2ludDIiLCJFeHBhbmRpbmdTaW1wbGV4Iiwid2luZGluZyIsImdldFdpbmRpbmciLCJxdWV1ZSIsIlByaW9yaXR5UXVldWUiLCJkaXN0YW5jZSIsInNpemUiLCJFeHBhbmRpbmdTaW1wbGV4RWRnZSIsInBlZWsiLCJlZGdlIiwicG9sbCIsImVkZ2UxIiwiZWRnZTIiLCJyaWdodCIsIkRFRkFVTFRfRElTVEFOQ0VfRVBTSUxPTiIsIm1heEl0ZXJhdGlvbnMiLCJkaXN0YW5jZUVwc2lsb24iLCJtaW5rb3dza2lTdW0iLCJzbXBseCIsImdldENsb3Nlc3RFZGdlIiwicHJvamVjdGlvbiIsImV4cGFuZCIsIkVycm9yIiwibm9ybWFscyIsIkdlb21ldHJ5IiwiZ2V0Q291bnRlckNsb2Nrd2lzZUVkZ2VOb3JtYWxzIiwiY2VudGVyIiwiYXZnIiwiY291bnQiLCJtYXhpbXVtIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwibGVmdE4iLCJyaWdodE4iLCJ2bSIsIlBvaW50RmVhdHVyZSIsInZsIiwiRWRnZUZlYXR1cmUiLCJ2ciIsIkNvbnZleCIsInAxIiwicDIiLCJQYWludGVyIiwicGF0aCIsInYxIiwidjIiLCJkaWZmIiwiY29udmV4SHVsbFBhdGgiLCJHSksiLCJsaW5lV2lkdGgiLCJ2ZWMwIiwibWFnbmlmaWNhdGlvbiIsInN0cmluZyIsImlzQ2xlYXIiLCJib3VuZHMiLCJ0aGlja25lc3MiLCJkcmF3UmVjdCIsInJlY3QiLCJydCIsImxiIiwicDAiLCJtb3ZlUG9pbnQiLCJ0b1BvaW50Iiwic2NhbGUiLCJtZSIsInRhcmdldCIsIk9SSUdJTiIsIlRPTEVSQU5DRSIsIm1heFByb2R1Y3QiLCJwcm9kdWN0IiwiaW5kZXhPZkZ1cnRoZXN0UG9pbnQiLCJzdHIiLCJNaW5rb3dza2lTdW1Qb2ludCIsIml0ZXJDb3VudCIsImQiLCJhYnBlcnAiLCJhY3BlcnAiLCJwb3NpdGlvbjEiLCJhdmVyYWdlUG9pbnQiLCJwb3NpdGlvbjIiLCJzdXBwb3J0IiwicGVycGVuZGljdWxhciIsInNlcGFyYXRpb24iLCJwMU1hZyIsInAyTWFnIiwic3VwcG9ydDIiLCJnZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50IiwiY29udGFpbnNPcmlnaW4iLCJmaW5kQ2xvc2VzdFBvaW50cyIsInNhIiwic2IiLCJzYyIsInN1cHBvcnRQb2ludDEiLCJzdXBwb3J0UG9pbnQyIiwibGwiLCJsMiIsImwxIiwicHJvakFvT250b0FiIiwibGVuZ3RoU3F1YXJlZCIsInQiLCJjbG9zZXRQb2ludCIsIm1hZ25pdHVkZSIsImxpbmVQb2ludDEiLCJsaW5lUG9pbnQyIiwicDFUb1AiLCJsaW5lIiwiYWIyIiwiYXBfYWIiLCJjbGFtcCIsImRlYnVnVmVydGljZXMiLCJjb25zb2xlVmVydGljZXMiLCJpc0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUMsY0FBWTtBQUNUQSxZQUFPQyxNQUFQLEdBQWdCLFlBQVk7QUFDeEIsYUFBTUMsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDSCxNQUZEO0FBR0gsRUFKQSxHQUFEOztBQU1BLEtBQUlDLGVBQUo7QUFBQSxLQUFZQyxpQkFBWjtBQUFBLEtBQXNCQyxjQUF0QjtBQUFBLEtBQTZCQyxhQUE3QjtBQUFBLEtBQW1DQyxrQkFBbkM7O0tBRU1MLEk7QUFDRixxQkFBYztBQUFBOztBQUNWLGNBQUtNLElBQUw7QUFDQSxjQUFLQyxRQUFMO0FBQ0EsY0FBS0MsUUFBTDtBQUNIOzs7O2dDQUVNO0FBQ0hQLHNCQUFTUSxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQVQ7O0FBRUFSLHdCQUFXLElBQUlTLEtBQUtDLGNBQVQsQ0FBd0JYLE9BQU9ZLEtBQS9CLEVBQXND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LENBQWxCLFNBQXVCNk8sT0FBTzVPLENBQTlCO0FBQ0g7QUFDRCxrQkFBVzRPLE9BQU83TyxDQUFQLENBQVNtQixPQUFULENBQWlCLENBQWpCLENBQVgsU0FBa0MwTixPQUFPNU8sQ0FBUCxDQUFTa0IsT0FBVCxDQUFpQixDQUFqQixDQUFsQztBQUNILEU7Ozs7Ozs7Ozs7Ozs7QUM3aUJEOzs7Ozs7OztLQUdxQm9XLGlCLEdBQ2pCLDJCQUFZb0IsYUFBWixFQUEyQkMsYUFBM0IsRUFBMEM7QUFBQTs7QUFDdEMsVUFBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFVBQUtwUixLQUFMLEdBQWEzSCxpQkFBT08sUUFBUCxDQUFnQnVZLGFBQWhCLEVBQStCQyxhQUEvQixDQUFiO0FBQ0gsRTs7bUJBTGdCckIsaUIiLCJmaWxlIjoiZXBhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi8uLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvTW91c2VcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiAgICB9XG59KCkpO1xuXG5sZXQgY2FudmFzLCByZW5kZXJlciwgc3RhZ2UsIHRlc3QsIGNvbnRhaW5lcjtcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHtcbiAgICAgICAgICAgIHZpZXc6IGNhbnZhcyxcbiAgICAgICAgICAgIGF1dG9SZXNpemU6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MzMzODNEXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1vdXNlLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgLy8g7JyE7LmY6rCAIOygleyImOqwgCDslYTri5Dqsr3smrAg7Z2Q66a/7ZWY6rKMIOuztOydtOuKlCDrrLjsoJzqsIAg7J6I7Ja0XG4gICAgICAgIC8vIOugjOuNlOufrOydmCDsnITsuZjrpbwg7KCV7IiY66GcIOyXsOyCsOuQoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cbiAgICAgICAgLy9yZW5kZXJlci5yb3VuZFBpeGVscyA9IHRydWU7XG5cbiAgICAgICAgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGVzdCA9IG5ldyBUZXN0KHJlbmRlcmVyKTtcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGVzdCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb29wKCk7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHt9XG5cbiAgICB1cGRhdGVMb29wIChtcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShtcyk7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGVMb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZShtcykge1xuICAgICAgICB0ZXN0LnVwZGF0ZSgpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpO1xuICAgIH1cblxuICAgIHJlc2l6ZVdpbmRvdygpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvKipcbiAgICAgICAgICog7LqU67KE7IqkIOyCrOydtOymiOyZgCDrlJTsiqTtlIzroIjsnbQg7IKs7J207KaIIOyEpOyglVxuICAgICAgICAgKiDroIjti7Drgpgg6re4656Y7ZS9IOyngOybkCDsvZTrk5xcbiAgICAgICAgICovXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQSVhJIHJlbmRlcmVyIOumrOyCrOydtOymiFxuICAgICAgICAgKiBQSVhJIOyXkOqyjCB2aWV3cG9ydCDsgqzsnbTspogg67OA6rK9IOyVjOumvFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICB0ZXN0LnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9lcGEvaW5kZXguanMiLCJcblxuY29uc3QgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG4gICAgcmV0dXJuIHJhZCAqIGRlZ3JlZXM7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMycmFkaWFuIChkZWcpIHtcbiAgICByZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cblxuXG4vKipcbiAqIFZpY3Rvci5qc+ulvCBFUzbroZwg67OA7ZmY7ZWY7JesIOyCrOyaqe2VmOqzoCDsnojsirXri4jri6QuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF4a3VlbmcvdmljdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvclxue1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tQXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21BcnJheShhcnIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tT2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBWZWN0b3IoNDIsIDEzMzcpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6MTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMSwgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdWJ0cmFjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgIH1cblxuXG4gICAgZWRnZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGVkZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QoYSwgYik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAyMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWSgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSB4IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIHkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVZKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgYSBheGlzIHZhbHVlcyBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLyBiLngsIGEueSAvIGIueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFgoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WCgpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRZKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFkoKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydCgpXG4gICAge1xuICAgICAgICB0aGlzLmludmVydFgoKTtcbiAgICAgICAgdGhpcy5pbnZlcnRZKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG5lZ2F0ZSh2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCB2ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIHYueCA9IC12ZWMueDtcbiAgICAgICAgdi55ID0gLXZlYy55O1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG11bHRpcGx5U2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiBzY2FsYXIsIHZlY3Rvci55ICogc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGVTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAvIHNjYWxhciwgdmVjdG9yLnkgLyBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKDkwIOuPhCDtmozsoIQpXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gLXZlYy55O1xuICAgICAgICBjbG9uZS55ID0gdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICgtOTAg64+EIO2ajOyghClcbiAgICAgKi9cbiAgICByZXR1cm5QZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueSwgLXRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmV0dXJuUGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuyhOumvFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlKHZlYywgbGVuZ3RoKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgICAgIGlmIChsZW5ndGhTcSA+IGxlbmd0aCAqIGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0Lm11bHRpcGx5U2NhbGFyKGxlbmd0aCAvIE1hdGguc3FydChsZW5ndGhTcSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG5vcm1hbGl6ZSgpXG4gICAge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZpZGUobmV3IFZlY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbm9ybSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBhYnNvbHV0ZSB2ZWN0b3IgYXhpcyBpcyBncmVhdGVyIHRoYW4gYG1heGAsIG11bHRpcGxpZXMgdGhlIGF4aXMgYnkgYGZhY3RvcmBcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgYm90aCB4IGFuZCB5IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGltaXQobWF4LCBmYWN0b3IpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9taXplcyBib3RoIHZlY3RvciBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODBgKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSwgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB0aGlzLnggPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIGxlZnQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0TGVmdEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICBsZWZ0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gLXRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgcmlnaHQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtAbGluayBWZWN0b3IyfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldFJpZ2h0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIHJpZ2h0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gICAgICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJpcGxlX3Byb2R1Y3QjVmVjdG9yX3RyaXBsZV9wcm9kdWN0XG4gICAgICog7IS46re466i87Yq47JeQ7IScIOybkOygkOycvOuhnCDtlqXtlZjripQg67Cp7Zal7J2EIOywvuydhCDrlYwg7IKs7JqpXG4gICAgICovXG4gICAgc3RhdGljIHRyaXBsZVByb2R1Y3QoYSwgYiwgYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGNvbnN0IGFjID0gYS54ICogYy54ICsgYS55ICogYy55ICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgICAgICwgYmMgPSBiLnggKiBjLnggKyBiLnkgKiBjLnk7ICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuXG4gICAgICAgIC8vIHBlcmZvcm0gYiAqIGEuZG90KGMpIC0gYSAqIGIuZG90KGMpXG4gICAgICAgIHIueCA9IGIueCAqIGFjIC0gYS54ICogYmM7XG4gICAgICAgIHIueSA9IGIueSAqIGFjIC0gYS55ICogYmM7XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBwcm9qZWN0T250byh2ZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgICAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICAgICAgdGhpcy55ID0gY29lZmYgKiB2ZWMyLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ISg7ZiVIOuztOqwhFxuICAgICAqIGh0dHA6Ly9kZXZlbG9wdWcuYmxvZ3Nwb3QuY29tLzIwMTQvMDkvdW5pdHktdmVjdG9yLWxlcnAuaHRtbFxuICAgICAqIEBwYXJhbSB2ZWMxXG4gICAgICogQHBhcmFtIHZlYzJcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyBsZXJwKHZlYzEsIHZlYzIsIHRvKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMxLCAxIC0gdG8pLCBWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMiwgdG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsl63siJhcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmNwKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxIC8gdmVjdG9yLngsIDEgLyB2ZWN0b3IueSk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgYW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICBhbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGVEZWcoKTtcbiAgICB9XG5cblxuICAgIGRpcmVjdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZShhbmdsZSlcbiAgICB7XG4gICAgICAgIHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcm90YXRlRGVnKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgYW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUbyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyb3RhdGlvbi10aGlzLmFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG9EZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnkocm90YXRpb24pXG4gICAge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnlEZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB2ZWMueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFkgYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSAtIHZlYy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGVTcXVhcmVkKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VTcSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVNxKHZlYylcbiAgICB7XG4gICAgICAgIHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG4gICAgICAgICAgICBkeSA9IHRoaXMuZGlzdGFuY2VZKHZlYyk7XG5cbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGgoKTtcbiAgICAgKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLqOyInO2eiCDquLjsnbQg67mE6rWQ66W8IO2VmOugpOuptCBsZW5ndGgg66W8IOyCrOyaqe2VmOq4sCDrs7Tri6TripQgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOqyjCDruaDrpbTri6QuXG4gICAgICogbGVuZ3RoIOuKlCBNYXRoLnNxcnQgKOygnOqzseq3vCkg7LKY66as66W8IO2VmOq4sCDrlYzrrLjsl5Ag64uo7IicIOq4uOydtCDruYTqtZDsi5wgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg67mg66aF64uI64ukLlxuICAgICAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGhTcSgpO1xuICAgICAqICAgICAvLyA9PiAxMjUwMFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aFNxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbGVuZ3RoU3EodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgIH1cblxuXG4gICAgbWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuXG4gICAgdG8odmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjLnggLSB0aGlzLngsIHZlYy55IC0gdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHNldCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjLnplcm8oKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNaZXJvKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdGhpcyB2ZWN0b3IgaXMgdGhlIHNhbWUgYXMgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRXF1YWxUbyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBVdGlsaXR5IE1ldGhvZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9BcnJheSgpO1xuICAgICAqICAgICAvLyA9PiBbMTAsIDIwXVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0FycmF5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gICAgICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvT2JqZWN0KClcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlY3Rvci5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi91dGlscy9QYXN0ZWxDb2xvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzXG57XG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAxMCwgY29sb3IgPSBQYXN0ZWxDb2xvci5nZW5lcmF0ZSgpLmhleCwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbHBoYSA9IGFscGhhO1xuICAgICAgICB0aGlzLnJlbmRlcihyYWRpdXMsIGNvbG9yLCBhbHBoYSk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIocmFkaXVzID0gMTAsIGNvbG9yID0gMHhmZjMzMDAsIGFscGhhID0gMC41KVxuICAgIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB0aGlzLmRyYXdDaXJjbGUoMCwgMCwgcmFkaXVzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICB0aGlzLmVuZEZpbGwoKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZShsdCwgcmIpXG4gICAge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMudmVjdG9yLnJhbmRvbWl6ZShsdCwgcmIpO1xuICAgICAgICB0aGlzLnggPSBwb3NpdGlvbi54O1xuICAgICAgICB0aGlzLnkgPSBwb3NpdGlvbi55O1xuICAgIH1cblxuXG4gICAgZ2V0IHZlY3RvcigpXG4gICAge1xuICAgICAgICByZXR1cm4gVmVjdG9yLmZyb21PYmplY3QodGhpcyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb20vUG9pbnQuanMiLCIvKipcbiAqIGh0dHBzOi8vY29kZXBlbi5pby9wbGl1L3Blbi9CTEVLd0FcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzdGVsQ29sb3Ige1xuICAgIHN0YXRpYyBnZW5lcmF0ZSgpIHtcbiAgICAgICAgY29uc3QgaEJhc2UgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBjb25zdCBuZXdIID0gTWF0aC5mbG9vcihoQmFzZSAqIDM2MCk7XG4gICAgICAgIGNvbnN0IG5ld0wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNikgKyA3NTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBgaHNsKCR7bmV3SH0sIDEwMCUsICR7bmV3TH0lKWA7XG4gICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IHRoaXMuSFNMdG9SR0IoaEJhc2UsIDEsIG5ld0wgKiAuMDEpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoc2w6IGNvbG9yLCAvLyBoc2woMCwgMTAwJSwgODUlKTtcbiAgICAgICAgICAgIHJnYjogYHJnYigke3J9LCAke2d9LCAke2J9KWAsIC8vIHJnYigyNTUsIDEyOCwgMTI4KTtcbiAgICAgICAgICAgIGhleDogYCR7dGhpcy5SR0J0b0hleChyLCBnLCBiKX1gLCAvLyAweGZmODA4MFxuICAgICAgICAgICAgaGV4U2hhcDpgJHt0aGlzLlJHQnRvSGV4KHIsIGcsIGIsICcjJyl9YCwgLy8gI2ZmODA4MFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhTTCB0byBSR0IgZm9ybXVsYSBhZGFwdGVkIGZyb206XG4gICAgICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWphY2tzb24vNTMxMTI1NlxuICAgICAqIChza2lwcGluZyB0byBlbHNle30gc2luY2UgcyB3aWxsIGFsd2F5cyBiZSAxMDAlKVxuICAgICAqIEBwYXJhbSBoXG4gICAgICogQHBhcmFtIHNcbiAgICAgKiBAcGFyYW0gbFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIEhTTHRvUkdCKGgsIHMsIGwpIHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG5cbiAgICAgICAgY29uc3QgcmQgPSAoYSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5tYXgoTWF0aC5taW4oYSAqIDI1NiwgMjU1KSwgMCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGh1ZVRvUkdCID0gKG0sIG4sIG8pID0+IHtcbiAgICAgICAgICAgIGlmIChvIDwgMCkgbyArPSAxO1xuICAgICAgICAgICAgaWYgKG8gPiAxKSBvIC09IDE7XG4gICAgICAgICAgICBpZiAobyA8IDEgLyA2KSByZXR1cm4gbSArIChuIC0gbSkgKiA2ICogbztcbiAgICAgICAgICAgIGlmIChvIDwgMSAvIDIpIHJldHVybiBuO1xuICAgICAgICAgICAgaWYgKG8gPCAyIC8gMykgcmV0dXJuIG0gKyAobiAtIG0pICogKDIgLyAzIC0gbykgKiA2O1xuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XG5cbiAgICAgICAgciA9IGh1ZVRvUkdCKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgICAgIGcgPSBodWVUb1JHQihwLCBxLCBoKTtcbiAgICAgICAgYiA9IGh1ZVRvUkdCKHAsIHEsIGggLSAxIC8gMyk7XG5cbiAgICAgICAgcmV0dXJuIFtyZChyKSwgcmQoZyksIHJkKGIpXVxuICAgIH1cblxuICAgIHN0YXRpYyBSR0J0b0hleChyLCBnLCBiLCBwcmVmaXggPSAnMHgnKSB7XG4gICAgICAgIHJldHVybiBgJHtwcmVmaXh9JHtyLnRvU3RyaW5nKDE2KX0ke2cudG9TdHJpbmcoMTYpfSR7Yi50b1N0cmluZygxNil9YDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3IuanMiLCIvKipcbiAqIGh0dHBzOi8vd3d3LmNyb2N1cy5jby5rci8xMjg4XG4gKi9cbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL1ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb252ZXhIdWxsIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGUocG9pbnRzKSB7XG5cbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXSxcbiAgICAgICAgICAgIG4gPSBwb2ludHMubGVuZ3RoO1xuXG4gICAgICAgIC8vIHnsooztkZwsIHjsooztkZwg7J6R7J2AIOyInOycvOuhnCDsoJXroKxcbiAgICAgICAgcG9pbnRzLnNvcnQodGhpcy5zb3J0TG93ZXJZWCk7XG5cbiAgICAgICAgLy8g6riw7KSA7KCQIOyEpOyglVxuICAgICAgICBjb25zdCBiYXNlUG9pbnQgPSBwb2ludHNbMF07XG5cbiAgICAgICAgLy8g6riw7KSA7KCQIOq4sOykgOycvOuhnCB2ZWN0b3Ig66W8IOyDneyEse2VmOqzoCDsmbjsoIHsnYQg6rWs7ZW07IScIOuwmCDsi5zqs4Qg67Cp7Zal7Jy866GcIChjY3cpIOygleugrCDtlanri4jri6QuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBwb2ludHNbaV0ucmVsYXRpdmVQb3NpdGlvbiA9IG5ldyBWZWN0b3IoXG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldLnggLSBiYXNlUG9pbnQueCxcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0ueSAtIGJhc2VQb2ludC55XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9pbnRzLnNvcnQodGhpcy5zb3J0Q2N3KTtcblxuICAgICAgICAvLyDsiqTtg53sl5AgZmlyc3QsIHNlY29uZCDrpbwg64Sj7Iq164uI64ukLlxuICAgICAgICBzdGFjay5wdXNoKDApO1xuICAgICAgICBzdGFjay5wdXNoKDEpO1xuXG4gICAgICAgIGxldCBuZXh0ID0gMjtcblxuICAgICAgICB3aGlsZSAobmV4dCA8IG4pIHtcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdCwgc2Vjb25kO1xuICAgICAgICAgICAgICAgIHNlY29uZCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJzdCwgc2Vjb25kLCBuZXh06rCAIOyijO2ajOyghCAoIDAg67O064ukIO2BrOuptCAp7J20652866m0IHNlY29uZCBwdXNoXG4gICAgICAgICAgICAgICAgLy8g7Jqw7ZqM7KCEKCAwIOuztOuLpCDsnpHsnLzrqbQgKSDsnbTrnbzrqbQg7JyE7J2YIHdoaWxl66y4IOqzhOyGjSDrsJjrs7VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Njdyhwb2ludHNbZmlyc3RdLCBwb2ludHNbc2Vjb25kXSwgcG9pbnRzW25leHRdKSkge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHNlY29uZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0KyspO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udmV4SHVsbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IHN0YWNrLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGFja1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnZleEh1bGwucHVzaChuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb252ZXhIdWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHksIHgg6rCAIOyekeydgCDsiJzsnLzroZwg7KCV66CsXG4gICAgICogQHBhcmFtIHBvaW50QVxuICAgICAqIEBwYXJhbSBwb2ludEJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc29ydExvd2VyWVgocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgaWYgKHBvaW50QS55ICE9PSBwb2ludEIueSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvaW50QS55IC0gcG9pbnRCLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50QS54IC0gcG9pbnRCLng7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6riw7KSAIOyijO2RnCDquLDspIDsnLzroZwg7IOB64yAIOyijO2RnOulvCDqtaztlbTshJwg7Iuc6rOEIOuwmOuMgCDrsKntlqXsnLzroZwg7KCV66Cs7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSBwb2ludEFcbiAgICAgKiBAcGFyYW0gcG9pbnRCXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIHNvcnRDY3cocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgLy8g7KSR7IusIOyijO2RnOyduCDqsr3smrAgcmVsYXRpdmVQb3NpdGlvbiDsnbQg7JeG7Iq164uI64ukLiDspJHsi6wg7KKM7ZGc66W8IDDrsojsnLzroZwg7KCV66CsIO2VqeuLiOuLpC5cbiAgICAgICAgaWYgKCFwb2ludEEucmVsYXRpdmVQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb2ludEIucmVsYXRpdmVQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhID0gcG9pbnRBLnJlbGF0aXZlUG9zaXRpb24ueSAqIHBvaW50Qi5yZWxhdGl2ZVBvc2l0aW9uLng7XG4gICAgICAgIGNvbnN0IGIgPSBwb2ludEEucmVsYXRpdmVQb3NpdGlvbi54ICogcG9pbnRCLnJlbGF0aXZlUG9zaXRpb24ueTtcblxuICAgICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENvbnZleEh1bGwuc29ydExvd2VyWVgocG9pbnRBLCBwb2ludEIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuwmCDsi5zqs4Qg67Cp7Zal7J247KeAIOyXrOu2gFxuICAgICAqIEBwYXJhbSBwb2ludEFcbiAgICAgKiBAcGFyYW0gcG9pbnRCXG4gICAgICogQHBhcmFtIHBvaW50Q1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Njdyhwb2ludEEsIHBvaW50QiwgcG9pbnRDKSB7XG4gICAgICAgIC8vIGNvbnN0IHRyaWFuZ2xlQXJlYSA9IChwb2ludEIueCAtIHBvaW50QS54KSAqIChwb2ludEMueSAtIHBvaW50QS55KSAtIChwb2ludEMueCAtIHBvaW50QS54KSAqIChwb2ludEIueSAtIHBvaW50QS55KTtcbiAgICAgICAgY29uc3QgdHJpYW5nbGVBcmVhID0gIChwb2ludEMueCAtIHBvaW50QS54KSAqIChwb2ludEIueSAtIHBvaW50QS55KSAtIChwb2ludEIueCAtIHBvaW50QS54KSAqIChwb2ludEMueSAtIHBvaW50QS55KTtcbiAgICAgICAgaWYgKHRyaWFuZ2xlQXJlYSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGVidWdBcnJheShhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGFyci5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJyW2ldLngsIGFycltpXS55KTtcbiAgICB9XG59XG5cblxuLypcbiogQ29weXJpZ2h0IChjKSAyMDEyIEp1IEh5dW5nIExlZVxuKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmVcbiogYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4qIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yXG4qIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbipcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkdcbiogQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4qIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4qIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBDcmVhdGUgdGhlIGNvbnZleCBodWxsIHVzaW5nIHRoZSBHaWZ0IHdyYXBwaW5nIGFsZ29yaXRobVxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HaWZ0X3dyYXBwaW5nX2FsZ29yaXRobVxuZnVuY3Rpb24gY3JlYXRlQ29udmV4SHVsbChwb2ludHMpIHtcbiAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgdmFyIGkwID0gMDtcbiAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgeCA9IHBvaW50c1tpXS54O1xuICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG4gPSBwb2ludHMubGVuZ3RoO1xuICAgIHZhciBodWxsID0gW107XG4gICAgdmFyIG0gPSAwO1xuICAgIHZhciBpaCA9IGkwO1xuXG4gICAgd2hpbGUgKDEpIHtcbiAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgIHZhciBpZSA9IDA7XG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByID0gdmVjMi5zdWIocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgIHZhciB2ID0gdmVjMi5zdWIocG9pbnRzW2pdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgdmFyIGMgPSB2ZWMyLmNyb3NzKHIsIHYpO1xuICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhzcSgpID4gci5sZW5ndGhzcSgpKSB7XG4gICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbSsrO1xuICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb3B5IHZlcnRpY2VzXG4gICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgIG5ld1BvaW50cy5wdXNoKHBvaW50c1todWxsW2ldXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1BvaW50cztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb252ZXhodWxsL0NvbnZleEh1bGwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZVxue1xuICAgIHN0YXRpYyBnZXQgREVTS1RPUF9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTU9CSUxFX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQSVhJLkFwcGxpY2F0aW9uLnJlbmRlcmVyXG4gICAgICog656c642U65+s7JeQ7IScIGludGVyYWN0aW8g6rCd7LK066W8IOywuOyhsO2VoCDsiJgg7J6I7Ja07IScIOyCrOyaqe2VmOugpOuptCDroIzrjZTrn6zrpbwg7IWL7YyF7ZW07JW8IO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmFsdWUge1BJWEkuV2ViR0xSZW5kZXJyZXJ8UElYSS5DYW52YXNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IHJlbmRlcmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrqqjrsJTsnbwg64yA7J2R7J2EIOychO2VtOyEnFxuICAgICAqIFBDIOuyhOyghOyXkOyEnOuKlCBtb3VzZSDqsJ3ssrTrpbwsIOuqqOuwlOydvCDrsoTsoITsl5DshJzripQgcG9pbnRlciDqsJ3ssrTrpbwg7IWL7YyF7ZWY66m0XG4gICAgICogZ2xvYmFsIOqwneyytOyXkOyEnCDssLjsobDtlbTshJwg7KKM7ZGc6rCS7J2EIOyghOuLrO2VmOuPhOuhnSDtlanri4jri6QuXG4gICAgICpcbiAgICAgKiDrp4zslb0g7ISk7KCV7ZWY7KeAIOyViuycvOuptCDquLDrs7ggUEPrp4wg64yA7J2R7ZWY64+E66GdIG1vdXNlIOqwneyytOulvCDshKTsoJXtlanri4jri6QuXG4gICAgICpcbiAgICAgKiBEZXNrdG9wIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZVxuICAgICAqIE1vYmlsZSA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlclxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgbW91c2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbW91c2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBtb3VzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3VzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2UgPSB0aGlzLkRFU0tUT1BfTU9VU0U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdXNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBnbG9iYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzZXQgY3VycmVudEN1cnNvclN0eWxlKHZhbHVlKSB7XG4gICAgICAgIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgY3VycmVudEN1cnNvclN0eWxlKCkge1xuICAgICAgICByZXR1cm4gTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsnbTrj5kg6rGw66as6rCAIDVweCDsnbTtlZjsnbTqs6AgNTAwbXMg7JWI7JeQIOuRkOuyiCDtgbTrpq3tlZjrqbQg642U67iUIO2BtOumreycvOuhnCDsnbjsoJVcbiAgICAgKiBAcGFyYW0gcHJldlBvaW50IOydtOyghOyijO2RnFxuICAgICAqIEBwYXJhbSBjdXJyZW50UG9pbnQg7ZiE7J6s7KKM7ZGcXG4gICAgICogQHBhcmFtIHByZXZUaW1lIOydtOyghCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHBhcmFtIGN1cnJlbnRUaW1lIO2YhOyerCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOuNlOu4lCDtgbTrpq0g7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGlzRG91YmxlQ2xpY2socHJldlBvaW50LCBjdXJyZW50UG9pbnQsIHByZXZUaW1lLCBjdXJyZW50VGltZSkge1xuICAgICAgICB2YXIgZGlmZlggPSBjdXJyZW50UG9pbnQueCAtIHByZXZQb2ludC54O1xuXG4gICAgICAgIGlmIChkaWZmWCA8IDApIHtcbiAgICAgICAgICAgIGRpZmZYID0gZGlmZlggKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaWZmWSA9IGN1cnJlbnRQb2ludC55IC0gcHJldlBvaW50Lnk7XG5cbiAgICAgICAgaWYgKGRpZmZZIDwgMCkge1xuICAgICAgICAgICAgZGlmZlkgPSBkaWZmWSAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZmZYID4gNSB8fCBkaWZmWSA+IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIHByZXZUaW1lID4gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvTW91c2UuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uLy4uL3NyYy9WZWN0b3InO1xuaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi4vLi4vc3JjL0hpc3RvcnknO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uLy4uL3NyYy9namsvU2hhcGUnO1xuaW1wb3J0IENvbnN0cyBmcm9tICcuLi8uLi9zcmMvZ2prL0NvbnN0cyc7XG5pbXBvcnQgVmVydGljZXMgZnJvbSAnLi4vLi4vc3JjL2dqay9WZXJ0aWNlcyc7XG5pbXBvcnQgQ29udmV4SHVsbCBmcm9tICcuLi8uLi9zcmMvY29udmV4aHVsbC9Db252ZXhIdWxsJztcbmltcG9ydCBNaW5rb3dza2lEaWZmZXJlbmNlIGZyb20gJy4uLy4uL3NyYy9namsvTWlua293c2tpRGlmZmVyZW5jZSc7XG5pbXBvcnQgR2prIGZyb20gJy4uLy4uL3NyYy9keW40ai9HamsnO1xuaW1wb3J0IEVwYSBmcm9tICcuLi8uLi9zcmMvZHluNGovRXBhJztcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4uLy4uL3NyYy9keW40ai9Qb2x5Z29uJztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCIuLi8uLi9zcmMvY29uc3RzL0tleUNvZGVcIjtcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi8uLi9zcmMvdXRpbHMvUGFzdGVsQ29sb3InO1xuaW1wb3J0IFBlbmV0cmF0aW9uIGZyb20gJy4uLy4uL3NyYy9keW40ai9QZW5ldHJhdGlvbic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi8uLi9zcmMvdXRpbHMvUGFpbnRlcic7XG5cblxuY29uc3QgVE9UQUwgPSAzMFxuICAgICwgSU5URVJWQUwgPSA2MDAwMDBcbiAgICAsIFNDQUxFID0gQ29uc3RzLlNDQUxFXG4gICAgLCBTVEFHRSA9IENvbnN0cy5TVEFHRVxuICAgICwgVE9QX0xFRlQgPSB7eDogMiwgeTogMn1cbiAgICAsIFRPUF9SSUdIVCA9IHt4OiAxNywgeTogMTd9XG4gICAgLCBSQURfVE9fREVHID0gMTgwIC8gTWF0aC5QSTtcblxuY29uc3QgdHJpYW5nbGVzID0gY3JlYXRlUG9seWdvbnMoMywgVE9UQUwpO1xuY29uc3QgcmVjdGFuZ2xlcyA9IGNyZWF0ZVBvbHlnb25zKDQsIFRPVEFMKTtcblxuLypjb25zdCB0cmlhbmdsZXMgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMywgMSksIG5ldyBWZWN0b3IoMywgNSksIG5ldyBWZWN0b3IoNiwgNCldLFxuICAgIFtuZXcgVmVjdG9yKDQsIDExKSwgbmV3IFZlY3Rvcig0LCA1KSwgbmV3IFZlY3Rvcig5LCA5KV0sXG4gICAgLy8gW25ldyBWZWN0b3IoMCwgLTEpLCBuZXcgVmVjdG9yKDMsIDEpLCBuZXcgVmVjdG9yKDEsIDMpXSxcbl07XG5jb25zdCByZWN0YW5nbGVzID0gW1xuICAgIC8vIFtuZXcgVmVjdG9yKDgsIDEpLCBuZXcgVmVjdG9yKDgsIDUpLCBuZXcgVmVjdG9yKDExLCA1KSwgbmV3IFZlY3RvcigxMSwgMSldLFxuICAgIFtuZXcgVmVjdG9yKDUsIDcpLCBuZXcgVmVjdG9yKDcsIDMpLCBuZXcgVmVjdG9yKDEwLCAyKSwgbmV3IFZlY3RvcigxMiwgNyldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDIsIC0yKSwgbmV3IFZlY3Rvcig1LCAtMSksIG5ldyBWZWN0b3IoNCwgMiksIG5ldyBWZWN0b3IoMSwgMSldLFxuXTsqL1xuXG4vKmNvbnN0IGVycm9yQ2FzZTEgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMiwgNyksIG5ldyBWZWN0b3IoMTIsIDMpLCBuZXcgVmVjdG9yKDEyLCAxNyldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDgsIDgpLCBuZXcgVmVjdG9yKDEwLCA3KSwgbmV3IFZlY3RvcigxNCwgOCldLFxuICAgIFtuZXcgVmVjdG9yKDEwLCAxMyksIG5ldyBWZWN0b3IoMTQsIDE1KSwgbmV3IFZlY3RvcigxMSwgMTQpXSxcbl07XG5cbmNvbnN0IGVycm9yQ2FzZTIgPSBbXG4gICAgLy8gW25ldyBWZWN0b3IoMTQsIDIpLCBuZXcgVmVjdG9yKDE3LCAyKSwgbmV3IFZlY3RvcigxNCwgNyksIG5ldyBWZWN0b3IoOSwgNyldLFxuICAgIC8vIFtuZXcgVmVjdG9yKDcsIDUpLCBuZXcgVmVjdG9yKDE1LCAxMCksIG5ldyBWZWN0b3IoMTYsIDExKSwgbmV3IFZlY3RvcigxNSwgMTQpXSxcbiAgICBbbmV3IFZlY3Rvcig5LCA4KSwgbmV3IFZlY3RvcigxNCwgMTUpLCBuZXcgVmVjdG9yKDQsIDE1KSwgbmV3IFZlY3RvcigzLCAxMildLFxuXTsqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMucmVuZGVyZXIudmlldztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXlDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMua2V5VXBMaXN0ZW5lciA9IHRoaXMub25LZXlVcC5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwTGlzdGVuZXIpO1xuXG4gICAgICAgIHRoaXMubW91c2VEb3duTGlzdGVuZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlDb2xsaXNpb24oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChzaGFwZSk7XG4gICAgICAgICAgICBzaGFwZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hhcGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuc2hhcGVzID0gW107XG5cbiAgICAgICAgaWYgKCF0aGlzLm1pbmtvd3NraSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5taW5rb3dza2kpO1xuICAgICAgICB0aGlzLm1pbmtvd3NraS5kZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCBpbmRleDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0cmlhbmdsZXMubGVuZ3RoKVxuICAgICAgICAgICAgLCBpbmRleDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZWN0YW5nbGVzLmxlbmd0aClcbiAgICAgICAgICAgICwgdmVydGljZXMxID0gbmV3IFZlcnRpY2VzKHRyaWFuZ2xlc1tpbmRleDFdKVxuICAgICAgICAgICAgLCB2ZXJ0aWNlczIgPSBuZXcgVmVydGljZXMocmVjdGFuZ2xlc1tpbmRleDJdKVxuICAgICAgICAgICAgLCBwZW5ldHJhdGlvbkNvbG9yID0gMHhGRjMzMDBcbiAgICAgICAgICAgICwgcGVuZXRyYXRpb25BbHBoYSA9IDAuNztcblxuICAgICAgICAvKmNvbnN0IGluZGV4MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVycm9yQ2FzZTEubGVuZ3RoKVxuICAgICAgICAgICAgLCBpbmRleDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcnJvckNhc2UyLmxlbmd0aClcbiAgICAgICAgICAgICwgdmVydGljZXMxID0gbmV3IFZlcnRpY2VzKGVycm9yQ2FzZTFbaW5kZXgxXSlcbiAgICAgICAgICAgICwgdmVydGljZXMyID0gbmV3IFZlcnRpY2VzKGVycm9yQ2FzZTJbaW5kZXgyXSk7Ki9cblxuICAgICAgICB2ZXJ0aWNlczEubXVsdGlwbHkoU0NBTEUpO1xuICAgICAgICB2ZXJ0aWNlczIubXVsdGlwbHkoU0NBTEUpO1xuXG4gICAgICAgIGNvbnN0IHNoYXBlMSA9IG5ldyBTaGFwZSh2ZXJ0aWNlczEudmVydGljZXMpXG4gICAgICAgICAgICAsIHNoYXBlMiA9IG5ldyBTaGFwZSh2ZXJ0aWNlczIudmVydGljZXMpXG4gICAgICAgICAgICAsIHNoYXBlMyA9IG5ldyBTaGFwZSh2ZXJ0aWNlczIuY2xvbmUoKSwgcGVuZXRyYXRpb25Db2xvciwgcGVuZXRyYXRpb25BbHBoYSk7XG5cbiAgICAgICAgdGhpcy5taW5rb3dza2kgPSBuZXcgTWlua293c2tpRGlmZmVyZW5jZSh2ZXJ0aWNlczEudmVydGljZXMsIHZlcnRpY2VzMi52ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMubWlua293c2tpLnggPSAoU1RBR0Uud2lkdGggLyAzKSAqIDI7XG4gICAgICAgIHRoaXMubWlua293c2tpLnkgPSAoU1RBR0UuaGVpZ2h0IC8gMykgKiAyO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2hhcGUxKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChzaGFwZTIpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHNoYXBlMyk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5taW5rb3dza2kpO1xuXG4gICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUxKTtcbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZTIpO1xuICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlMyk7XG5cbiAgICAgICAgdmVydGljZXMxLmRpdmlkZShTQ0FMRSk7XG4gICAgICAgIHZlcnRpY2VzMi5kaXZpZGUoU0NBTEUpO1xuXG4gICAgICAgIGNvbnN0IHBvbHlnb24xID0gbmV3IFBvbHlnb24odmVydGljZXMxLnZlcnRpY2VzKVxuICAgICAgICAgICAgLCBwb2x5Z29uMiA9IG5ldyBQb2x5Z29uKHZlcnRpY2VzMi52ZXJ0aWNlcyk7XG5cbiAgICAgICAgY29uc3QgZ2prID0gbmV3IEdqayhuZXcgRXBhKCkpXG4gICAgICAgICAgICAsIHBlbmV0cmF0aW9uID0gbmV3IFBlbmV0cmF0aW9uKClcbiAgICAgICAgICAgICwgaGlzdG9yeSA9IG5ldyBIaXN0b3J5KCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc0NvbGxpc2lvbiA9IGdqay5kZXRlY3QocG9seWdvbjEsIHBvbHlnb24yLCBwZW5ldHJhdGlvbiwgaGlzdG9yeSlcbiAgICAgICAgICAgICwgYXJyb3cgPSBWZWN0b3IubXVsdGlwbHlTY2FsYXIocGVuZXRyYXRpb24ubm9ybWFsLCBwZW5ldHJhdGlvbi5kZXB0aCkubXVsdGlwbHlTY2FsYXIoU0NBTEUpO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MueCA9IHRoaXMubWlua293c2tpLng7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MueSA9IHRoaXMubWlua293c2tpLnk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDIsIHBlbmV0cmF0aW9uQ29sb3IsIHBlbmV0cmF0aW9uQWxwaGEpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbygwLCAwKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oYXJyb3cueCwgYXJyb3cueSk7XG5cbiAgICAgICAgc2hhcGUzLnggPSBhcnJvdy54O1xuICAgICAgICBzaGFwZTMueSA9IGFycm93Lnk7XG4gICAgICAgIGlmICghaXNDb2xsaXNpb24pIHtcbiAgICAgICAgICAgIHNoYXBlMy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygncG9seWdvbjEnLCBwb2x5Z29uMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb2x5Z29uMicsIHBvbHlnb24yKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2lzQ29sbGlzaW9uJywgaXNDb2xsaXNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZygncGVuZXRyYXRpb24nLCBwZW5ldHJhdGlvbik7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuZGlzcGxheSwgSU5URVJWQUwpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bigpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgb25LZXlVcChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiDrkZDrsqHthLAg7IKs7J206rCBIOq1rO2VmOq4sFxuICogQHBhcmFtIGFcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRBbmdsZShhLCBiKSB7XG4gICAgYSA9IG5ldyBWZWN0b3IoYS54LCBhLnkpLm5vcm0oKTtcbiAgICBiID0gbmV3IFZlY3RvcihiLngsIGIueSkubm9ybSgpO1xuICAgIGNvbnN0IHJhZGlhbiA9IE1hdGguYWNvcyhWZWN0b3IuZG90UHJvZHVjdChhLCBiKSk7XG4gICAgcmV0dXJuIHJhZGlhbiAqIFJBRF9UT19ERUc7XG59XG5cblxuLyoqXG4gKiDrnpzrjaTsnLzroZwg7KKM7ZGc66W8IOyDneyEse2VmOqzoCBjb252ZXggaHVsbCDsnYQg66eM65Ok66m0IE9LXG4gKiBAcGFyYW0gcG9seWdvblxuICogQHBhcmFtIHRvdGFsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvbHlnb25zKHBvbHlnb24sIHRvdGFsKSB7XG4gICAgbGV0IHZlcnRpY2VzO1xuICAgIGNvbnN0IHBvbHlnb25zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvbHlnb247IGorKykge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVjdG9yLnJhbmRvbWl6ZShUT1BfTEVGVCwgVE9QX1JJR0hUKTtcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2godmVydGV4KTtcblxuICAgICAgICAgICAgaWYgKGogPT09IHBvbHlnb24gLSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udmV4SHVsbCA9IENvbnZleEh1bGwuZ2VuZXJhdGUodmVydGljZXMpO1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gY29udmV4SHVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBvbHlnb25zLnB1c2godmVydGljZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBwb2x5Z29ucztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvZXBhL1Rlc3QuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpc3Rvcnkge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNpbXBsZXgge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb25zIHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaW1wbGV4ID0gbmV3IEFycmF5KDMpLCBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDMpKSB7XG4gICAgICAgIHRoaXMuc2ltcGxleCA9IHNpbXBsZXg7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuc2ltcGxleCA9IHNpbXBsZXg7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0hpc3RvcnkuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uL2dqay9Db25zdHMnO1xuaW1wb3J0IFBhc3RlbENvbG9yIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYXN0ZWxDb2xvcic7XG5cbmNvbnN0IEZPTlRfU0laRSA9ICc5cHgnXG4gICAgLCBTQ0FMRSA9IENvbnN0cy5TQ0FMRTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMgPSBbXSwgbGluZUNvbG9yLCBsaW5lQWxwaGEgPSAwLjUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGluZUNvbG9yID0gbGluZUNvbG9yID8gbGluZUNvbG9yIDogUGFzdGVsQ29sb3IuZ2VuZXJhdGUoKS5oZXg7XG4gICAgICAgIGxpbmVDb2xvciA9IHR5cGVvZiBsaW5lQ29sb3IgPT09ICdudW1iZXInID8gJzB4JyArIGxpbmVDb2xvci50b1N0cmluZygxNikgOiBsaW5lQ29sb3I7XG4gICAgICAgIGNvbnN0IHRleHRDb2xvciA9IGxpbmVDb2xvci5yZXBsYWNlKCcweCcsICcjJyk7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICAgICAgdGhpcy5saW5lQ29sb3IgPSBsaW5lQ29sb3I7XG4gICAgICAgIHRoaXMubGluZUFscGhhID0gbGluZUFscGhhO1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9IHRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgICAgIHRoaXMubGFiZWxzID0gdGhpcy5jcmVhdGVMYWJlbCgpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBuZXcgUElYSS5UZXh0KGksIHtcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZm9udDogRk9OVF9TSVpFLFxuICAgICAgICAgICAgICAgIGZpbGw6IHRoaXMudGV4dENvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0ZXh0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxhYmVscy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWxzO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzXG4gICAgICAgICAgICAsIHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlc1xuICAgICAgICAgICAgLCBvcmlnaW4gPSB2ZXJ0aWNlc1swXTtcblxuICAgICAgICBnLmNsZWFyKCk7XG4gICAgICAgIGcubGluZVN0eWxlKDEsIHRoaXMubGluZUNvbG9yLCB0aGlzLmxpbmVBbHBoYSk7XG4gICAgICAgIGcubW92ZVRvKG9yaWdpbi54LCBvcmlnaW4ueSk7XG4gICAgICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGcubGluZVRvKHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWxzW2luZGV4XVxuICAgICAgICAgICAgICAgICwgdmVjID0gVmVjdG9yLmRpdmlkZVNjYWxhcih2ZXJ0ZXgsIFNDQUxFKTtcblxuICAgICAgICAgICAgbGFiZWwueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgbGFiZWwueSA9IHZlcnRleC55O1xuXG4gICAgICAgICAgICBsYWJlbC50ZXh0ID0gYCgke3ZlYy54fSwke3ZlYy55fSlgO1xuICAgICAgICAgICAgbGFiZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBnLmxpbmVUbyhvcmlnaW4ueCwgb3JpZ2luLnkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5sYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQobGFiZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxhYmVscy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmxhYmVscyA9IG51bGw7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1NoYXBlLmpzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cyB7XG4gICAgc3RhdGljIGdldCBTQ0FMRSgpIHtcbiAgICAgICAgcmV0dXJuIDE0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBR0UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogNjAwLCBoZWlnaHQ6IDYwMH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhZ2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvQ29uc3RzLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2VzIHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB9XG5cbiAgICBtdWx0aXBseShzY2FsYXIpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIHZlcnRleC54ICo9IHNjYWxhcjtcbiAgICAgICAgICAgIHZlcnRleC55ICo9IHNjYWxhcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGl2aWRlKHNjYWxhcikge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4LnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdmVydGV4LnkgLz0gc2NhbGFyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpbmRleF0gPSB2ZXJ0ZXguY2xvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL1ZlcnRpY2VzLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vUG9pbnQnO1xuaW1wb3J0IENvbnZleEh1bGwgZnJvbSAnLi4vY29udmV4aHVsbC9Db252ZXhIdWxsJztcbmltcG9ydCBQYXN0ZWxDb2xvciBmcm9tICcuLi91dGlscy9QYXN0ZWxDb2xvcic7XG5pbXBvcnQgQ29uc3RzIGZyb20gJy4uL2dqay9Db25zdHMnO1xuXG5cbmNvbnN0IFNDQUxFID0gQ29uc3RzLlNDQUxFXG4gICAgLCBTVEFHRSA9IENvbnN0cy5TVEFHRVxuICAgICwgRk9OVF9DT0xPUiA9ICcjRkZGRkZGJ1xuICAgICwgQVhFU19MSU5FX0NPTE9SID0gJzB4RkZGRkZGJ1xuICAgICwgQ09OVkVYX0hVTExfTElORV9DT0xPUiA9IFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmtvd3NraURpZmZlcmVuY2UgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IodmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWNzKTtcblxuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAgICAgICAgICAsIGNvbnZleEh1bGwgPSB0aGlzLmNvbnZleEh1bGwgPSBDb252ZXhIdWxsLmdlbmVyYXRlKHZlcnRpY2VzKTtcblxuICAgICAgICB0aGlzLnRleHRzID0gW107XG4gICAgICAgIHRoaXMuZHJhd0F4ZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3VmV0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMuZHJhd1BvbHlnb24oY29udmV4SHVsbCk7XG4gICAgfVxuXG4gICAgZHJhd1ZldGljZXModmVydGljZXMpIHtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh2ZXJ0ZXgueCwgdmVydGV4LnksIDMsIFBhc3RlbENvbG9yLmdlbmVyYXRlKCkuaGV4KTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChwb2ludCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZlYyA9IFZlY3Rvci5kaXZpZGVTY2FsYXIodmVydGV4LCBTQ0FMRSk7XG4gICAgICAgICAgICB0aGlzLmRyYXdUZXh0KGAoJHt2ZWMueH0sICR7dmVjLnl9KWAsIHBvaW50LnZlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdQb2x5Z29uKHZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzO1xuXG4gICAgICAgIGcubGluZVN0eWxlKDEsIENPTlZFWF9IVUxMX0xJTkVfQ09MT1IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICAgICAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHsgZy5saW5lVG8odmVydGV4LngsIHZlcnRleC55KTt9KTtcbiAgICAgICAgZy5saW5lVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gICAgfVxuXG4gICAgZHJhd0F4ZXMoKSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYXBoaWNzXG4gICAgICAgICAgICAsIGh3ID0gU1RBR0Uud2lkdGggLyAyXG4gICAgICAgICAgICAsIGhoID0gU1RBR0UuaGVpZ2h0IC8gMjtcblxuICAgICAgICBnLmxpbmVTdHlsZSgxLCBBWEVTX0xJTkVfQ09MT1IsIDAuNSk7XG4gICAgICAgIGcubW92ZVRvKC1odywgMCk7XG4gICAgICAgIGcubGluZVRvKGh3LCAwKTtcbiAgICAgICAgZy5tb3ZlVG8oMCwgLWhoKTtcbiAgICAgICAgZy5saW5lVG8oMCwgaGgpO1xuICAgIH1cblxuICAgIGRyYXdUZXh0KHRleHQsIHZlcnRleCA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBQSVhJLlRleHQodGV4dCwge1xuICAgICAgICAgICAgZm9udDogJzIwcHgnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZmlsbDogRk9OVF9DT0xPUlxuICAgICAgICB9KTtcblxuICAgICAgICBsYWJlbC54ID0gdmVydGV4Lng7XG4gICAgICAgIGxhYmVsLnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgdGhpcy50ZXh0cy5wdXNoKGxhYmVsKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChsYWJlbCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRleHRzLmZvckVhY2goKHRleHQpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChwb2ludCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgfVxuXG4gICAgZ2V0VmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgICAgICAgdmVydGljZXMxLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2VzMi5mb3JFYWNoKChiKSA9PiB7XG4gICAgICAgICAgICAgICAgdmVydGljZXMucHVzaChWZWN0b3Iuc3VidHJhY3QoYSwgYikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvTWlua293c2tpRGlmZmVyZW5jZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBFcHNpbG9uIGZyb20gJy4vRXBzaWxvbic7XG5pbXBvcnQgTWlua293c2tpU3VtIGZyb20gJy4vTWlua293c2tpU3VtJztcbmltcG9ydCBFeHBhbmRpbmdTaW1wbGV4IGZyb20gXCIuL0V4cGFuZGluZ1NpbXBsZXhcIjtcblxuY29uc3QgREVGQVVMVF9NQVhfSVRFUkFUSU9OUyA9IDMwO1xuY29uc3QgREVGQVVMVF9ERVRFQ1RfRVBTSUxPTiA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdqayB7XG4gICAgY29uc3RydWN0b3IobWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5taW5rb3dza2lQZW5ldHJhdGlvblNvbHZlciA9IG1pbmtvd3NraVBlbmV0cmF0aW9uU29sdmVyO1xuICAgIH1cblxuICAgIGdldEluaXRpYWxEaXJlY3Rpb24oY29udmV4MSwgY29udmV4Mikge1xuICAgICAgICAvLyB0cmFuc2Zvcm0gaW50byB3b3JsZCBzcGFjZSBpZiB0cmFuc2Zvcm0gaXMgbm90IG51bGxcbiAgICAgICAgY29uc3QgYzEgPSBjb252ZXgxLmdldENlbnRlcigpO1xuICAgICAgICBjb25zdCBjMiA9IGNvbnZleDIuZ2V0Q2VudGVyKCk7XG4gICAgICAgIC8vIGNob29zZSBzb21lIHNlYXJjaCBkaXJlY3Rpb25cbiAgICAgICAgcmV0dXJuIGMyLnN1YnRyYWN0KGMxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb252ZXgxIHtDb252ZXh9XG4gICAgICogQHBhcmFtIGNvbnZleDIge0NvbnZleH1cbiAgICAgKiBAcGFyYW0gcGVuZXRyYXRpb24ge1BlbmV0cmFpb259XG4gICAgICogQHBhcmFtIGhpc3Rvcnkge0hpc3Rvcnl9XG4gICAgICovXG4gICAgZGV0ZWN0KGNvbnZleDEsIGNvbnZleDIsIHBlbmV0cmF0aW9uLCBoaXN0b3J5KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZXggPSBbXTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBNaW5rb3dza2kgc3VtXG4gICAgICAgIGNvbnN0IG1zID0gbmV3IE1pbmtvd3NraVN1bShjb252ZXgxLCBjb252ZXgyKTtcblxuICAgICAgICAvLyBjaG9vc2Ugc29tZSBzZWFyY2ggZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0SW5pdGlhbERpcmVjdGlvbihjb252ZXgxLCBjb252ZXgyKTtcblxuICAgICAgICAvLyBwZXJmb3JtIHRoZSBkZXRlY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0Mihtcywgc2ltcGxleCwgZGlyZWN0aW9uLCBoaXN0b3J5KSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5taW5rb3dza2lQZW5ldHJhdGlvblNvbHZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubWlua293c2tpUGVuZXRyYXRpb25Tb2x2ZXIuZ2V0UGVuZXRyYXRpb24oc2ltcGxleCwgbXMsIHBlbmV0cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG1zIHtNaW5rb3dza2lTdW19XG4gICAgICogQHBhcmFtIHNpbXBsZXgge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn1cbiAgICAgKiBAcGFyYW0gaGlzdG9yeSB7SGlzdG9yeX0g65SU67KE6re47JqpXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGV0ZWN0Mihtcywgc2ltcGxleCwgZGlyZWN0aW9uLCBoaXN0b3J5ID0gbnVsbCkge1xuICAgICAgICAvLyDrlJTrsoTqt7jsmqkg7Z6I7Iqk7Yag66asXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMyk7XG4gICAgICAgIC8vIGNoZWNrIGZvciBhIHplcm8gZGlyZWN0aW9uIHZlY3RvclxuICAgICAgICBpZiAoZGlyZWN0aW9uLmlzWmVybygpKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24uc2V0KDEsIDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0aGUgZmlyc3QgcG9pbnRcbiAgICAgICAgc2ltcGxleFswXSA9IG1zLmdldFN1cHBvcnRQb2ludChkaXJlY3Rpb24pO1xuICAgICAgICBkaXJlY3Rpb25zWzBdID0gZGlyZWN0aW9uO1xuICAgICAgICAvLyBpcyB0aGUgc3VwcG9ydCBwb2ludCBwYXN0IHRoZSBvcmlnaW4gYWxvbmcgZD9cbiAgICAgICAgLy8gc3VwcG9ydCBwb2ludCDrsKntlqXsnYQg65Sw6528IOybkOygkOydhCDsp4DrgpjripTsp4Ag7LK07YGsICjsm5DsoJDsnYQg7KeA64KY7KeAIOyViuuKlOuLpOuptFgpXG4gICAgICAgIGlmIChzaW1wbGV4WzBdLmRvdChkaXJlY3Rpb24pIDw9IDApIHtcblxuICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZWdhdGUgdGhlIHNlYXJjaCBkaXJlY3Rpb25cbiAgICAgICAgZGlyZWN0aW9uLmludmVydCgpO1xuICAgICAgICAvLyBzdGFydCB0aGUgbG9vcFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERFRkFVTFRfTUFYX0lURVJBVElPTlM7IGkrKykge1xuICAgICAgICAgICAgLy8gYWx3YXlzIGFkZCBhbm90aGVyIHBvaW50IHRvIHRoZSBzaW1wbGV4IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxvb3BcbiAgICAgICAgICAgIHNpbXBsZXgucHVzaChtcy5nZXRTdXBwb3J0UG9pbnQoZGlyZWN0aW9uKSk7XG4gICAgICAgICAgICBkaXJlY3Rpb25zW3NpbXBsZXgubGVuZ3RoIC0gMV0gPSBkaXJlY3Rpb247XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgbGFzdCBwb2ludCB3ZSBhZGRlZCB3YXMgcGFzdCB0aGUgb3JpZ2luXG4gICAgICAgICAgICBpZiAoc2ltcGxleFtzaW1wbGV4Lmxlbmd0aCAtIDFdLmRvdChkaXJlY3Rpb24pIDw9IERFRkFVTFRfREVURUNUX0VQU0lMT04pIHtcbiAgICAgICAgICAgICAgICAvLyBhIGlzIG5vdCBwYXN0IHRoZSBvcmlnaW4gc28gdGhlcmVmb3JlIHRoZSBzaGFwZXMgZG8gbm90IGludGVyc2VjdFxuICAgICAgICAgICAgICAgIC8vIGhlcmUgd2UgdHJlYXQgdGhlIG9yaWdpbiBvbiB0aGUgbGluZSBhcyBubyBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBpbW1lZGlhdGVseSByZXR1cm4gd2l0aCBudWxsIGluZGljYXRpbmcgbm8gcGVuZXRyYXRpb25cblxuICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIHBhc3QgdGhlIG9yaWdpbiwgdGhlbiB0ZXN0IHdoZXRoZXIgdGhlIHNpbXBsZXggY29udGFpbnMgdGhlIG9yaWdpblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU2ltcGxleChzaW1wbGV4LCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzaW1wbGV4IGNvbnRhaW5zIHRoZSBvcmlnaW4gdGhlbiB3ZSBrbm93IHRoYXQgdGhlcmUgaXMgYW4gaW50ZXJzZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBicm9rZSBvdXQgb2YgdGhlIGxvb3AgdGhlbiB3ZSBrbm93IHRoZXJlIHdhcyBhbiBpbnRlcnNlY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzaW1wbGV4IGRvZXMgbm90IGNvbnRhaW4gdGhlIG9yaWdpbiB0aGVuIHdlIG5lZWQgdG8gbG9vcCB1c2luZyB0aGUgbmV3XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIGRpcmVjdGlvbiBhbmQgc2ltcGxleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHNpbXBsZXggY29udGFpbnMgdGhlIG9yaWdpbi4gIElmIGl0IGRvZXMgY29udGFpbiB0aGUgb3JpZ2luLFxuICAgICAqIHRoZW4gdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gdHJ1ZS4gIElmIGl0IGRvZXMgbm90LCB0aGlzIG1ldGhvZCB3aWxsIHVwZGF0ZSBib3RoIHRoZSBnaXZlblxuICAgICAqIHNpbXBsZXggYW5kIGFsc28gdGhlIGdpdmVuIHNlYXJjaCBkaXJlY3Rpb24uXG4gICAgICogPHA+XG4gICAgICogVGhpcyBtZXRob2Qgb25seSBoYW5kbGVzIHRoZSBsaW5lIHNlZ21lbnQgYW5kIHRyaWFuZ2xlIHNpbXBsZXggY2FzZXMsIGhvd2V2ZXIsIHRoZXNlIHR3byBjYXNlc1xuICAgICAqIHNob3VsZCBiZSB0aGUgb25seSBvbmVzIG5lZWRlZCBmb3IgMiBkaW1lbnNpb25hbCB7QGxpbmsgR2prfS4gIFRoZSBzaW5nbGUgcG9pbnQgY2FzZSBpcyBoYW5kbGVkXG4gICAgICogaW4ge0BsaW5rICNkZXRlY3QoTWlua293c2tpU3VtLCBMaXN0LCBWZWN0b3IyKX0uXG4gICAgICogPHA+XG4gICAgICogVGhpcyBtZXRob2QgYWxzbyBhc3N1bWVzIHRoYXQgdGhlIGxhc3QgcG9pbnQgaW4gdGhlIHNpbXBsZXggaXMgdGhlIG1vc3QgcmVjZW50bHkgYWRkZWQgcG9pbnQuXG4gICAgICogVGhpcyBtYXR0ZXJzIGJlY2F1c2Ugb3B0aW1pemF0aW9ucyBhcmUgYXZhaWxhYmxlIHdoZW4geW91IGtub3cgdGhpcyBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNoZWNrU2ltcGxleChzaW1wbGV4LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIG5ldmVyIGJlIHN1cHBsaWVkIGFueXRoaW5nIG90aGVyIHRoYW4gMiBvciAzIHBvaW50cyBmb3IgdGhlIHNpbXBsZXhcbiAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IHBvaW50IGFkZGVkIChhKVxuICAgICAgICBjb25zdCBhID0gc2ltcGxleFtzaW1wbGV4Lmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSBzYW1lIGFzIGEudG8oT1JJR0lOKTtcbiAgICAgICAgY29uc3QgYW8gPSBWZWN0b3IubmVnYXRlKGEpO1xuICAgICAgICAvLyBjaGVjayB0byBzZWUgd2hhdCB0eXBlIG9mIHNpbXBsZXggd2UgaGF2ZVxuICAgICAgICBpZiAoc2ltcGxleC5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgLy8gdGhlbiB3ZSBoYXZlIGEgdHJpYW5nbGVcbiAgICAgICAgICAgIGNvbnN0IGIgPSBzaW1wbGV4WzFdO1xuICAgICAgICAgICAgY29uc3QgYyA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVkZ2VzXG4gICAgICAgICAgICBjb25zdCBhYiA9IGEudG8oYik7XG4gICAgICAgICAgICBjb25zdCBhYyA9IGEudG8oYyk7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVkZ2Ugbm9ybWFsXG4gICAgICAgICAgICBjb25zdCBhY1BlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYWMsIGFjKTtcbiAgICAgICAgICAgIC8vIHNlZSB3aGVyZSB0aGUgb3JpZ2luIGlzIGF0XG4gICAgICAgICAgICBjb25zdCBhY0xvY2F0aW9uID0gYWNQZXJwLmRvdChhbyk7XG4gICAgICAgICAgICBpZiAoYWNMb2NhdGlvbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8g7JuQ7KCQ7J2AIEEgLT4gQ+ydmCDsmKTrpbjsqr3sl5Dsnojri6QuXG4gICAgICAgICAgICAgICAgLy8gdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSByaWdodCBzaWRlIG9mIEEtPkNcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIG9mIHRoZSBjb25kaXRpb24gZm9yIHRoZSBnamsgbG9vcCB0byBjb250aW51ZSB0aGUgb3JpZ2luXG4gICAgICAgICAgICAgICAgLy8gbXVzdCBsaWUgYmV0d2VlbiBBIGFuZCBDIHNvIHJlbW92ZSBCIGFuZCBzZXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gbmV3IHNlYXJjaCBkaXJlY3Rpb24gdG8gQS0+QyBwZXJwZW5kaWN1bGFyIHZlY3RvclxuICAgICAgICAgICAgICAgIHNpbXBsZXguc3BsaWNlKDEsIDEpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgdXNlZCB0byBiZSBkaXJlY3Rpb24uc2V0KFZlY3Rvci50cmlwbGVQcm9kdWN0KGFjLCBhbywgYWMpKTtcbiAgICAgICAgICAgICAgICAvLyBidXQgd2FzIGNoYW5nZWQgc2luY2UgdGhlIG9yaWdpbiBtYXkgbGllIG9uIHRoZSBzZWdtZW50IGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAvLyBieSBhIC0+IGMgaW4gd2hpY2ggY2FzZSB3b3VsZCBwcm9kdWNlIGEgemVybyB2ZWN0b3Igbm9ybWFsXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRpbmcgYWMncyBub3JtYWwgdXNpbmcgYiBpcyBtb3JlIHJvYnVzdFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoYWNQZXJwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWJQZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgY29uc3QgYWJMb2NhdGlvbiA9IGFiUGVycC5kb3QoYW8pO1xuICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgbGVmdCBzaWRlIG9mIEEtPkNcbiAgICAgICAgICAgICAgICBpZiAoYWJMb2NhdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSByaWdodCBzaWRlIG9mIEEtPkIgYW5kIHRoZXJlZm9yZSBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJpYW5nbGUsIHdlIGhhdmUgYW4gaW50ZXJzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvcmlnaW4gbGllcyBiZXR3ZWVuIEEgYW5kIEIgc28gcmVtb3ZlIEMgYW5kIHNldCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VhcmNoIGRpcmVjdGlvbiB0byBBLT5CIHBlcnBlbmRpY3VsYXIgdmVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsZXguc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHVzZWQgdG8gYmUgZGlyZWN0aW9uLnNldChWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3YXMgY2hhbmdlZCBzaW5jZSB0aGUgb3JpZ2luIG1heSBsaWUgb24gdGhlIHNlZ21lbnQgY3JlYXRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBieSBhIC0+IGIgaW4gd2hpY2ggY2FzZSB3b3VsZCBwcm9kdWNlIGEgemVybyB2ZWN0b3Igbm9ybWFsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0aW5nIGFiJ3Mgbm9ybWFsIHVzaW5nIGMgaXMgbW9yZSByb2J1c3RcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLnNldChhYlBlcnApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgYiBwb2ludFxuICAgICAgICAgICAgY29uc3QgYiA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBjb25zdCBhYiA9IGEudG8oYik7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2Ugd2UgaGF2ZSAyIHBvaW50cyAobGluZSBzZWdtZW50KVxuICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiB0aGUgY29uZGl0aW9uIGZvciB0aGUgZ2prIGxvb3AgdG8gY29udGludWUgdGhlIG9yaWdpblxuICAgICAgICAgICAgLy8gbXVzdCBsaWUgaW4gYmV0d2VlbiBBIGFuZCBCLCBzbyBrZWVwIGJvdGggcG9pbnRzIGluIHRoZSBzaW1wbGV4IGFuZFxuICAgICAgICAgICAgLy8gc2V0IHRoZSBkaXJlY3Rpb24gdG8gdGhlIHBlcnAgb2YgdGhlIGxpbmUgc2VnbWVudCB0b3dhcmRzIHRoZSBvcmlnaW5cbiAgICAgICAgICAgIGRpcmVjdGlvbi5zZXQoVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYikpO1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGRlZ2VuZXJhdGUgY2FzZXMgd2hlcmUgdGhlIG9yaWdpbiBsaWVzIG9uIHRoZSBzZWdtZW50XG4gICAgICAgICAgICAvLyBjcmVhdGVkIGJ5IGEgLT4gYiB3aGljaCB3aWxsIHlpZWxkIGEgemVybyBlZGdlIG5vcm1hbFxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi5nZXRNYWduaXR1ZGVTcXVhcmVkKCkgPD0gRXBzaWxvbi5FKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIGp1c3QgY2hvb3NlIGVpdGhlciBub3JtYWwgKGxlZnQgb3IgcmlnaHQpXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLnNldChhYi5sZWZ0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovR2prLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb24ge1xuXG4gICAgc3RhdGljIGdldCBFKCkge1xuICAgICAgICByZXR1cm4gRXBzaWxvbi5jb21wdXRlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbXB1dGUoKSB7XG4gICAgICAgIGxldCBlID0gMC41O1xuICAgICAgICB3aGlsZSAoMS4wICsgZSA+IDEuMCkge1xuICAgICAgICAgICAgZSAqPSAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9FcHNpbG9uLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmtvd3NraVN1bSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29udmV4MSDstqnrj4wg7LK07YGs7ZWgIOuPhO2YlSAxXG4gICAgICogQHBhcmFtIGNvbnZleDIg7Lap64+MIOyytO2BrO2VoCDrj4TtmJUgMlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnZleDEsIGNvbnZleDIpIHtcbiAgICAgICAgdGhpcy5jb252ZXgxID0gY29udmV4MTtcbiAgICAgICAgdGhpcy5jb252ZXgyID0gY29udmV4MjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdXBwb3J0UG9pbnQg66W8IOq1rO2VqeuLiOuLpC4gKOyLrO2UjOugieyKpCDrp4zrk6TquLApXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqL1xuICAgIGdldFN1cHBvcnRQb2ludChkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBmYXJ0aGVzdCBwb2ludCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uIGluIGNvbnZleDFcbiAgICAgICAgY29uc3QgcG9pbnQxID0gdGhpcy5jb252ZXgxLmdldEZhcnRoZXN0UG9pbnQoZGlyZWN0aW9uKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBmYXJ0aGVzdCBwb2ludCBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uIGluIGNvbnZleDJcbiAgICAgICAgY29uc3QgcG9pbnQyID0gdGhpcy5jb252ZXgyLmdldEZhcnRoZXN0UG9pbnQoVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pKTtcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBNaW5rb3dza2kgc3VtIHBvaW50XG4gICAgICAgIHJldHVybiBwb2ludDEuc3VidHJhY3QocG9pbnQyKTtcbiAgICB9XG5cbiAgICBnZXRDb252ZXgxKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXgxO1xuICAgIH1cblxuICAgIGdldENvbnZleDIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZleDI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9NaW5rb3dza2lTdW0uanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgUHJpb3JpdHlRdWV1ZSBmcm9tICdzdGFibGVwcmlvcml0eXF1ZXVlJztcbmltcG9ydCBFeHBhbmRpbmdTaW1wbGV4RWRnZSBmcm9tICcuL0V4cGFuZGluZ1NpbXBsZXhFZGdlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBhbmRpbmdTaW1wbGV4IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHNpbXBsZXgge1ZlY3RvcltdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpbXBsZXgpIHtcbiAgICAgICAgdGhpcy53aW5kaW5nID0gdGhpcy5nZXRXaW5kaW5nKHNpbXBsZXgpO1xuXG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUHJpb3JpdHlRdWV1ZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuZGlzdGFuY2UgPCBiLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuZGlzdGFuY2UgPiBiLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IHNpbXBsZXgubGVuZ3RoO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaXplJywgc2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb21wdXRlIGpcbiAgICAgICAgICAgIGxldCBqID0gaSArIDEgPT0gc2l6ZSA/IDAgOiBpICsgMTtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgcG9pbnRzIHRoYXQgbWFrZSB1cCB0aGUgY3VycmVudCBlZGdlXG4gICAgICAgICAgICBjb25zdCBhID0gc2ltcGxleFtpXVxuICAgICAgICAgICAgICAgICwgYiA9IHNpbXBsZXhbal07XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGVkZ2VcbiAgICAgICAgICAgIHRoaXMucXVldWUuYWRkKG5ldyBFeHBhbmRpbmdTaW1wbGV4RWRnZShhLCBiLCB0aGlzLndpbmRpbmcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnF1ZXVlLnNpemUnLCB0aGlzLnF1ZXVlLnNpemUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7Ius7ZSM66CJ7Iqk7JeQIOyjvOyWtOynhCDrsKntlqXsnYQg66as7YS07ZWp64uI64ukLlxuICAgICAqXG4gICAgICogLTEg7Iuc6rOEIOuwqe2WpVxuICAgICAqIDEg67CYIOyLnOqzhCDrsKntlqVcbiAgICAgKiBAcGFyYW0gc2ltcGxleCB7VmVjdG9yW119XG4gICAgICovXG4gICAgZ2V0V2luZGluZyhzaW1wbGV4KSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBzaW1wbGV4Lmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgbGV0IGogPSBpICsgMSA9PT0gc2l6ZSA/IDAgOiBpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzaW1wbGV4W2ldXG4gICAgICAgICAgICAgICAgLCBiID0gc2ltcGxleFtqXTtcblxuICAgICAgICAgICAgaWYgKGEuY3Jvc3MoYikgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8g7Jm47KCB7J2EIO2Gte2VtCDsmbjsoIEg6rCS7J20IOyWkeyImOuptCDrsJjsi5zqs4Qg67Cp7ZalXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGEuY3Jvc3MoYikgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8g7J2M7IiY66m0IOuwmOyLnOqzhCDrsKntlqVcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7RXhwYW5kaW5nU2ltcGxleEVkZ2V9XG4gICAgICovXG4gICAgZ2V0Q2xvc2VzdEVkZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXVlLnBlZWsoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwb2ludCB7VmVjdG9yfVxuICAgICAqL1xuICAgIGV4cGFuZChwb2ludCkge1xuICAgICAgICBjb25zdCBlZGdlID0gdGhpcy5xdWV1ZS5wb2xsKCk7XG4gICAgICAgIGNvbnN0IGVkZ2UxID0gbmV3IEV4cGFuZGluZ1NpbXBsZXhFZGdlKGVkZ2UucG9pbnQxLCBwb2ludCwgdGhpcy53aW5kaW5nKTtcbiAgICAgICAgY29uc3QgZWRnZTIgPSBuZXcgRXhwYW5kaW5nU2ltcGxleEVkZ2UocG9pbnQsIGVkZ2UucG9pbnQyLCB0aGlzLndpbmRpbmcpO1xuICAgICAgICB0aGlzLnF1ZXVlLmFkZChlZGdlMSk7XG4gICAgICAgIHRoaXMucXVldWUuYWRkKGVkZ2UyKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovRXhwYW5kaW5nU2ltcGxleC5qcyIsIi8qKlxuICogU3RhYmxlUHJpb3JpdHlRdWV1ZS5qcyA6IGEgc3RhYmxlIGhlYXAtYmFzZWQgcHJpb3JpdHkgcXVldWUgIGluIEphdmFTY3JpcHQuXG4gKiAoYykgdGhlIGF1dGhvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKlxuICogU3RhYmxlIGhlYXAtYmFzZWQgcHJpb3JpdHkgcXVldWUgZm9yIG1vZGVybiBicm93c2VycyBhbmQgSmF2YVNjcmlwdCBlbmdpbmVzLlxuICpcbiAqIFVzYWdlIDpcbiAgICAgICAgIEluc3RhbGxhdGlvbiAoaW4gc2hlbGwsIGlmIHlvdSB1c2Ugbm9kZSk6XG4gICAgICAgICAkIG5wbSBpbnN0YWxsIHN0YWJsZXByaW9yaXR5cXVldWVcblxuICAgICAgICAgUnVubmluZyB0ZXN0IHByb2dyYW0gKGluIEphdmFTY3JpcHQpOlxuXG4gICAgICAgICAvLyB2YXIgU3RhYmxlUHJpb3JpdHlRdWV1ZSA9IHJlcXVpcmUoXCJzdGFibGVwcmlvcml0eXF1ZXVlXCIpOy8vIGluIG5vZGVcbiAgICAgICAgIHZhciB4ID0gbmV3IFN0YWJsZVByaW9yaXR5UXVldWUoKTtcbiAgICAgICAgIHguYWRkKDEpO1xuICAgICAgICAgeC5hZGQoMCk7XG4gICAgICAgICB4LmFkZCg1KTtcbiAgICAgICAgIHguYWRkKDQpO1xuICAgICAgICAgeC5hZGQoMyk7XG4gICAgICAgICB4LnBlZWsoKTsgLy8gc2hvdWxkIHJldHVybiAwLCBsZWF2ZXMgeCB1bmNoYW5nZWRcbiAgICAgICAgIHguc2l6ZTsgLy8gc2hvdWxkIHJldHVybiA1LCBsZWF2ZXMgeCB1bmNoYW5nZWRcbiAgICAgICAgIHdoaWxlKCF4LmlzRW1wdHkoKSkge1xuICAgICAgICAgICBjb25zb2xlLmxvZyh4LnBvbGwoKSk7XG4gICAgICAgICB9IC8vIHdpbGwgcHJpbnQgMCAxIDMgNCA1XG4gICAgICAgICB4LnRyaW0oKTsgLy8gKG9wdGlvbmFsKSBvcHRpbWl6ZXMgbWVtb3J5IHVzYWdlXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVmYXVsdGNvbXBhcmF0b3IgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiAgIGEgPCBiID8gLTEgOiAoYSA+IGIgPyAxIDogMCkgO1xufTtcblxuXG4vLyB0aGUgcHJvdmlkZWQgY29tcGFyYXRvciBmdW5jdGlvbiBzaG91bGQgdGFrZSBhLCBiIGFuZCByZXR1cm4gYSBuZWdhdGl2ZSBudW1iZXIgd2hlbiBhIDwgYiBhbmQgZXF1YWxpdHkgd2hlbiBhID09IGJcbmZ1bmN0aW9uIFN0YWJsZVByaW9yaXR5UXVldWUoY29tcGFyYXRvcikge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgICB0aGlzLnNpemUgPSAwO1xuICAgIHRoaXMucnVubmluZ2NvdW50ZXIgPSAwO1xuICAgIHRoaXMuY29tcGFyZSA9IGNvbXBhcmF0b3IgfHwgZGVmYXVsdGNvbXBhcmF0b3I7XG4gICAgdGhpcy5zdGFibGVfY29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHZhciBjbXAgPSB0aGlzLmNvbXBhcmUoYS52YWx1ZSxiLnZhbHVlKTtcbiAgICAgIHJldHVybiAoY21wIDwgMCkgfHwgKCAoY21wID09IDApICYmIChhLmNvdW50ZXIgPCBiLmNvdW50ZXIpICk7XG4gICAgfVxufVxuXG4vLyBUaGUgc3RhYmxlIHF1ZXVlIHVzZXMgaW50ZXJuYWwgY291bnRlcnMsIHRoaXMgcmVwYWNrcyB0aGVtXG4vLyBydW5zIGluIE8obikgdGltZSwgY2FsbGVkIGF1dG9tYXRpY2FsbHkgYXMgbmVlZGVkXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZW51bWJlciA9IGZ1bmN0aW9uIChteXZhbCkge1xuICAgICAgLy8gdGhlIGNvdW50ZXIgaXMgZXhoYXVzdGVkLCBsZXQgdXMgcmVwYWNrIHRoZSBudW1iZXJzXG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiBoZXJlIGlzIHByb2JhYmx5IG5vdCBvcHRpbWFsIHBlcmZvcm1hbmNlLXdpc2VcbiAgICAgIC8vIHdlIGZpcnN0IGVtcHR5IHRoZSBjb250ZW50XG4gICAgICB2YXIgYnVmZmVyID0gW107XG4gICAgICB2YXIgaiwgc2l6ZTtcbiAgICAgIHdoaWxlKCEgdGhpcy5pc0VtcHR5KCkgKSB7XG4gICAgICAgIGJ1ZmZlci5wdXNoKHRoaXMucG9sbCgpKTtcbiAgICAgIH1cbiAgICAgIHNpemUgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgdGhpcy5ydW5uaW5nY291bnRlciA9IDA7IC8vIGJlY2F1c2UgdGhlIGJ1ZmZlciBpcyBzYWZlLCB0aGlzIGlzIG5vdyBzYWZlXG4gICAgICAvLyBhbmQgd2UgcmVpbnNlcnQgaXRcbiAgICAgIGZvciAoaiA9IDA7IGogPCBzaXplIDsgaisrKSB7XG4gICAgICAgIHRoaXMuYWRkKGJ1ZmZlcltqXSk7XG4gICAgICB9XG59XG5cbi8vIEFkZCBhbiBlbGVtZW50IHRoZSB0aGUgcXVldWVcbi8vIHJ1bnMgaW4gTyhsb2cgbikgdGltZVxuU3RhYmxlUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG15dmFsKSB7XG4gICAgdmFyIGkgPSB0aGlzLnNpemU7XG4gICAgaWYgKCB0aGlzLnJ1bm5pbmdjb3VudGVyICsgMSA9PSAwKSB7XG4gICAgICB0aGlzLnJlbnVtYmVyKCk7XG4gICAgfVxuICAgIHZhciBleHRlbmRlZG15dmFsID0ge3ZhbHVlOiBteXZhbCwgY291bnRlcjogdGhpcy5ydW5uaW5nY291bnRlcn07XG4gICAgdGhpcy5hcnJheVt0aGlzLnNpemVdID0gZXh0ZW5kZWRteXZhbDtcbiAgICB0aGlzLnJ1bm5pbmdjb3VudGVyICs9IDE7XG4gICAgdGhpcy5zaXplICs9IDE7XG4gICAgdmFyIHA7XG4gICAgdmFyIGFwO1xuICAgIHZhciBjbXA7XG4gICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgIHAgPSAoaSAtIDEpID4+IDE7XG4gICAgICAgIGFwID0gdGhpcy5hcnJheVtwXTtcbiAgICAgICAgaWYgKCF0aGlzLnN0YWJsZV9jb21wYXJlKGV4dGVuZGVkbXl2YWwsIGFwKSkge1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJyYXlbaV0gPSBhcDtcbiAgICAgICAgaSA9IHA7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBleHRlbmRlZG15dmFsO1xufTtcblxuLy8gZm9yIGludGVybmFsIHVzZVxuU3RhYmxlUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX3BlcmNvbGF0ZVVwID0gZnVuY3Rpb24gKGkpIHtcbiAgICB2YXIgbXl2YWwgPSB0aGlzLmFycmF5W2ldO1xuICAgIHZhciBwO1xuICAgIHZhciBhcDtcbiAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgcCA9IChpIC0gMSkgPj4gMTtcbiAgICAgICAgYXAgPSB0aGlzLmFycmF5W3BdO1xuICAgICAgICBpZiAoIXRoaXMuc3RhYmxlX2NvbXBhcmUobXl2YWwsIGFwKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJheVtpXSA9IGFwO1xuICAgICAgICBpID0gcDtcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IG15dmFsO1xufTtcblxuXG4vLyBmb3IgaW50ZXJuYWwgdXNlXG5TdGFibGVQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcGVyY29sYXRlRG93biA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gICAgdmFyIGhzaXplID0gdGhpcy5zaXplID4+PiAxO1xuICAgIHZhciBhaSA9IHRoaXMuYXJyYXlbaV07XG4gICAgdmFyIGw7XG4gICAgdmFyIHI7XG4gICAgdmFyIGJlc3RjO1xuICAgIHdoaWxlIChpIDwgaHNpemUpIHtcbiAgICAgICAgbCA9IChpIDw8IDEpICsgMTtcbiAgICAgICAgciA9IGwgKyAxO1xuICAgICAgICBiZXN0YyA9IHRoaXMuYXJyYXlbbF07XG4gICAgICAgIGlmIChyIDwgc2l6ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhYmxlX2NvbXBhcmUodGhpcy5hcnJheVtyXSwgYmVzdGMpKSB7XG4gICAgICAgICAgICAgICAgbCA9IHI7XG4gICAgICAgICAgICAgICAgYmVzdGMgPSB0aGlzLmFycmF5W3JdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGFibGVfY29tcGFyZShiZXN0YyxhaSkpICB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFycmF5W2ldID0gYmVzdGM7XG4gICAgICAgIGkgPSBsO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gYWk7XG59O1xuXG4vLyBMb29rIGF0IHRoZSB0b3Agb2YgdGhlIHF1ZXVlIChhIHNtYWxsZXN0IGVsZW1lbnQpXG4vLyBleGVjdXRlcyBpbiBjb25zdGFudCB0aW1lXG4vL1xuLy8gQ2FsbGluZyBwZWVrIG9uIGFuIGVtcHR5IHByaW9yaXR5IHF1ZXVlIHJldHVybnNcbi8vIHRoZSBcInVuZGVmaW5lZFwiIHZhbHVlLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvdW5kZWZpbmVkXG4vL1xuU3RhYmxlUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZih0aGlzLnNpemUgPT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcy5hcnJheVswXS52YWx1ZTtcbn07XG5cbi8vIHJlbW92ZSB0aGUgZWxlbWVudCBvbiB0b3Agb2YgdGhlIGhlYXAgKGEgc21hbGxlc3QgZWxlbWVudClcbi8vIHJ1bnMgaW4gbG9nYXJpdGhtaWMgdGltZVxuLy9cbi8vIElmIHRoZSBwcmlvcml0eSBxdWV1ZSBpcyBlbXB0eSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlXG4vLyBcInVuZGVmaW5lZFwiIHZhbHVlLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvdW5kZWZpbmVkXG4vL1xuLy8gRm9yIGxvbmctcnVubmluZyBhbmQgbGFyZ2UgcHJpb3JpdHkgcXVldWVzLCBvciBwcmlvcml0eSBxdWV1ZXNcbi8vIHN0b3JpbmcgbGFyZ2Ugb2JqZWN0cywgeW91IG1heSAgd2FudCB0byBjYWxsIHRoZSB0cmltIGZ1bmN0aW9uXG4vLyBhdCBzdHJhdGVnaWMgdGltZXMgdG8gcmVjb3ZlciBhbGxvY2F0ZWQgbWVtb3J5LlxuU3RhYmxlUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zaXplID09IDApXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIGFucyA9IHRoaXMuYXJyYXlbMF07XG4gICAgaWYgKHRoaXMuc2l6ZSA+IDEpIHtcbiAgICAgICAgdGhpcy5hcnJheVswXSA9IHRoaXMuYXJyYXlbLS10aGlzLnNpemVdO1xuICAgICAgICB0aGlzLl9wZXJjb2xhdGVEb3duKDAgfCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNpemUgLT0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGFucy52YWx1ZTtcbn07XG5cblxuLy8gcmVjb3ZlciB1bnVzZWQgbWVtb3J5IChmb3IgbG9uZy1ydW5uaW5nIHByaW9yaXR5IHF1ZXVlcylcblN0YWJsZVByaW9yaXR5UXVldWUucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuc2xpY2UoMCwgdGhpcy5zaXplKTtcbn07XG5cbi8vIENoZWNrIHdoZXRoZXIgdGhlIGhlYXAgaXMgZW1wdHlcblN0YWJsZVByaW9yaXR5UXVldWUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gMDtcbn07XG5cblxuLy8ganVzdCBmb3IgaWxsdXN0cmF0aW9uIHB1cnBvc2VzXG52YXIgbWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBtYWluIGNvZGVcbiAgICB2YXIgeCA9IG5ldyBTdGFibGVQcmlvcml0eVF1ZXVlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLm5hbWUgPCBiLm5hbWUgPyAtMSA6IChhLm5hbWUgPiBiLm5hbWUgPyAxIDogMCkgO1xuICAgIH0pO1xuICAgIHguYWRkKHtuYW1lOlwiSmFja1wiLCBhZ2U6MzF9KTtcbiAgICB4LmFkZCh7bmFtZTpcIkFubmFcIiwgYWdlOjExMX0pO1xuICAgIHguYWRkKHtuYW1lOlwiSmFja1wiLCBhZ2U6NDZ9KTtcbiAgICB4LmFkZCh7bmFtZTpcIkphY2tcIiwgYWdlOjExfSk7XG4gICAgeC5hZGQoe25hbWU6XCJBYmJhXCIsIGFnZTozMX0pO1xuICAgIHguYWRkKHtuYW1lOlwiQWJiYVwiLCBhZ2U6MzB9KTtcbiAgICB3aGlsZSAoIXguaXNFbXB0eSgpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgucG9sbCgpKTtcbiAgICB9XG4gICAgeCA9IG5ldyBTdGFibGVQcmlvcml0eVF1ZXVlKGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYS5lbmVyZ3kgLSBiLmVuZXJneTtcbiAgICB9KTtcbiAgICBbeyBuYW1lOiAncGxheWVyJywgZW5lcmd5OiAxMH0sXG4gICAgIHsgbmFtZTogJ21vbnN0ZXIxJywgZW5lcmd5OiAxMH0sXG4gICAgIHsgbmFtZTogJ21vbnN0ZXIyJywgZW5lcmd5OiAxMH0sXG4gICAgIHsgbmFtZTogJ21vbnN0ZXIzJywgZW5lcmd5OiAxMH1cbiAgICBdLmZvckVhY2goZnVuY3Rpb24obyl7XG4gICAgICAgICAgeC5hZGQobyk7XG4gICAgfSlcbiAgICB3aGlsZSAoIXguaXNFbXB0eSgpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgucG9sbCgpKTtcbiAgICB9XG5cbn07XG5cbmlmIChyZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xuICAgIG1haW4oKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFibGVQcmlvcml0eVF1ZXVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0YWJsZXByaW9yaXR5cXVldWUvU3RhYmxlUHJpb3JpdHlRdWV1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IDgiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5kaW5nU2ltcGxleEVkZ2Uge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBvaW50MSB7VmVjdG9yfVxuICAgICAqIEBwYXJhbSBwb2ludDIge1ZlY3Rvcn1cbiAgICAgKiBAcGFyYW0gd2luZGluZyB7bnVtYmVyfSAtMSDsi5zqs4Qg67Cp7ZalLCAxIOuwmOyLnOqzhCDrsKntlqVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwb2ludDEsIHBvaW50Miwgd2luZGluZykge1xuICAgICAgICAvLyBjcmVhdGUgdGhlIGVkZ2VcbiAgICAgICAgLy8gaW5saW5lIGIgLSBhXG4gICAgICAgIHRoaXMubm9ybWFsID0gbmV3IFZlY3Rvcihwb2ludDIueCAtIHBvaW50MS54LCBwb2ludDIueSAtIHBvaW50MS55KTtcblxuICAgICAgICAvLyDsmYDsnbjrlKnsl5Ag65Sw6528IOqwgOyepeyekOumrOqwgCDsoJXsg4HsoIHsnLzroZzrkKnri4jri6QuXG4gICAgICAgIC8vIFZlY3Rvci50cmlwbGVQcm9kdWN0IChhYiwgYW8sIGFiKeulvCDsgqzsmqntlZjripQg6rKD7J20IOyii+yKteuLiOuLpC5cbiAgICAgICAgLy8gYWLripQg6rCA7J6l7J6Q66as7J206rOgIGFv64qUIGEudG8gKE9SSUdJTinsnbTsp4Drp4wg7J206rKD7J2AXG4gICAgICAgIC8vIOybkOygkOydtCBhYiDshLjqt7jrqLztirjsl5Ag7J6I7Jy866m0IOyemOuqu+uQnCDrspXshKDsnYQg67CY7ZmY7ZWp64uI64ukLlxuICAgICAgICAvLyDqt7jrn6zrr4DroZwg7Jqw66as64qUIOyLrO2UjOydmCDsmYDsnbjrlKnsnYQg7IKs7Jqp7ZWY7JesXG4gICAgICAgIC8vIOuyleyEoCDrsKntlqVcbiAgICAgICAgLy8g7KaJLCDsm5DsoJHsnLzroZwg7Zal7ZWY64qUIG5vcm1hbCDrsLHthLDrpbwg66eM65Ot64uI64ukLlxuICAgICAgICBpZiAod2luZGluZyA8IDApIHtcbiAgICAgICAgICAgIC8vIOyLnOqzhCDrsKntlqXsnbTrqbQg7Jik66W47Kq9XG4gICAgICAgICAgICB0aGlzLm5vcm1hbC5yaWdodCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g67CY7Iuc6rOEIOuwqe2WpeydtOuptCDsmbzsqr1cbiAgICAgICAgICAgIHRoaXMubm9ybWFsLmxlZnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9ybWFsLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIC8vIGRvdWJsZSBkID0gTWF0aC5hYnMoYS5kb3Qobm9ybWFsKSlcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IE1hdGguYWJzKHBvaW50MS54ICogdGhpcy5ub3JtYWwueCArIHBvaW50MS55ICogdGhpcy5ub3JtYWwueSk7XG4gICAgICAgIHRoaXMucG9pbnQxID0gcG9pbnQxO1xuICAgICAgICB0aGlzLnBvaW50MiA9IHBvaW50MjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvIHtFeHBhbmRpbmdTaW1wbGV4RWRnZX1cbiAgICAgKi9cbiAgICBjb21wYXJlVG8obykge1xuICAgICAgICBpZiAodGhpcy5kaXN0YW5jZSA8IG8uZGlzdGFuY2UpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2UgPiBvLmRpc3RhbmNlKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9FeHBhbmRpbmdTaW1wbGV4RWRnZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBFcHNpbG9uIGZyb20gJy4vRXBzaWxvbic7XG5pbXBvcnQgRXhwYW5kaW5nU2ltcGxleCBmcm9tICcuL0V4cGFuZGluZ1NpbXBsZXgnO1xuXG5cbmNvbnN0IERFRkFVTFRfTUFYX0lURVJBVElPTlMgPSAxMDBcbiAgICAsIERFRkFVTFRfRElTVEFOQ0VfRVBTSUxPTiA9IE1hdGguc3FydChFcHNpbG9uLkUpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwYSB7XG5cbiAgICBzdGF0aWMgZ2V0IERFRkFVTFRfTUFYX0lURVJBVElPTlMoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX01BWF9JVEVSQVRJT05TO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgREVGQVVMVF9ESVNUQU5DRV9FUFNJTE9OKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9ESVNUQU5DRV9FUFNJTE9OO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1heEl0ZXJhdGlvbnMgPSBERUZBVUxUX01BWF9JVEVSQVRJT05TO1xuICAgICAgICB0aGlzLmRpc3RhbmNlRXBzaWxvbiA9IERFRkFVTFRfRElTVEFOQ0VfRVBTSUxPTjtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRVBBJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXhJdGVyYXRpb25zJywgdGhpcy5tYXhJdGVyYXRpb25zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Rpc3RhbmNlRXBzaWxvbicsIHRoaXMuZGlzdGFuY2VFcHNpbG9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsuajtiKwg6rKw6rO866W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiDsi5zsnpHsoJAgR0pLIOydmCBTaW1wbGV4IOuhnCDsi5zsnpHtlanri4jri6QuXG4gICAgICogQHBhcmFtIHNpbXBsZXgge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSBtaW5rb3dza2lTdW0ge01pbmtvd3NraVN1bX1cbiAgICAgKiBAcGFyYW0gcGVuZXRyYXRpb24ge1BlbmV0cmF0aW9ufVxuICAgICAqL1xuICAgIGdldFBlbmV0cmF0aW9uKHNpbXBsZXgsIG1pbmtvd3NraVN1bSwgcGVuZXRyYXRpb24pIHtcbiAgICAgICAgLy8gRXhwYWRpbmdTaW1wbGV466W8IOyDneyEse2VmOyXrCBFZGdlIOydmCBub3JtYWwg6rO8IGRlcHRoIOulvCDsg53shLHtlanri4jri6QuXG4gICAgICAgIGNvbnN0IHNtcGx4ID0gbmV3IEV4cGFuZGluZ1NpbXBsZXgoc2ltcGxleClcbiAgICAgICAgICAgICwgcGVlayA9IHNtcGx4LnF1ZXVlLnBlZWsoKTtcbiAgICAgICAgbGV0IGVkZ2UgPSBudWxsLCBwb2ludCA9IG51bGw7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2dldFBlbmV0cmF0aW9uJywgJ3NtcGx4LnNpemUnLCBzbXBseC5xdWV1ZS5zaXplKTtcblxuICAgICAgICAvLyBHSksg7J2YIOy2qeuPjCDqsrDqs7zsnZggU2ltcGxleCDroZwg7Iuc7J6R7ZWp64uI64ukLlxuICAgICAgICAvLyBQcmlvcml0eVF1ZXVlIOuhnCDqsIDsnqUg6re87KCR7ZWpIEVkZ2Ug7J2YIG5vcm1hbCDroZwgc3VwcG9ydCDtlajsiJjrpbwg7Ya17ZW0IHNpbXBsZXgg66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgICAgLy8gc2ltcGxleOulvCDqsIDsnqUg6re87KCR7ZWcIEVkZ2Ugbm9ybWFsIOyXkCBwcm9qZWN0aW9uIOydhCDtlanri4jri6QuXG4gICAgICAgIC8vIOqwgOyepSDqt7zsoJHtlZwgZWRnZSDsnZgg6rmK7J207JmAIO2IrOyYgSDqsbDrpqzqsIAg7ZeI7JqpIOyYpOywqCDslYjsl5Ag7J6I7Jy866m0IOy5qO2IrCBub3JtYWwg6rO8IOqxsOumrOulvCDrpbwg6rWs7ZWcIOqyg+yeheuLiOuLpC5cbiAgICAgICAgLy8g7ZeI7JqpIOyYpOywqOyXkCDsnojsp4Ag7JWK64uk64qUIOqxtCBFZGdlIOqwgCDrs7zroZ3tlZjsp4Ag7JWK64uk64qUIOqyg+ydtOyXrOyEnCDrs7zroZ3tlZjrj4TroZ0g7ZmV7J6l7ZWp64uI64ukLlxuICAgICAgICAvLyDtmZXsnqXtlaAg65WM64qUIOqwgOyepSDqsIDquYzsmrQgRWRnZSDsgqzsnbTsl5Ag7IOIIOygkOydhCDstpTqsIDtlbTslbztlanri4jri6QuXG4gICAgICAgIC8vIOydtOugh+qyjCDtlZjrqbQg66qo7JaR7J20IOuzvOuhne2VmOqyjCDsnKDsp4DrkKnri4jri6QuXG4gICAgICAgIC8vIOuzvOuhne2VmOqyjCDtmZXsnqUg7ZWcIO2bhCDri6Tsi5wg6rCA7J6lIOq3vOygke2VnCBFZGdlIOulvCDqtaztlZjqs6BcbiAgICAgICAgLy8g7ZW064u5IG5vcm1hbCDroZwgc3VwcG9ydCDtlajsiJjrpbwg7Ya17ZW0IHNpbXBsZXgg66W8IOq1rO2VtOyEnCDqsIDsnqUg6re87KCR7ZWcIEVkZ2Ug7J2YIOq5iuydtOyZgCDtiKzsmIEg6rGw66as6rCAIOyYpOywqCDslYjsl5Ag7J6I64qU7KeAIOyytO2BrFxuICAgICAgICAvLyDtl4jsmqkg7Jik7LCo66m0IO2VtOuLuSBFZGdlIG5vcm1hbCDqs7wg7ZSE66Gc7KCd7IWY7J20IOy5qO2IrCDqsbDrpqzqsIAg65Cp64uI64ukLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBlZGdlID0gc21wbHguZ2V0Q2xvc2VzdEVkZ2UoKTtcbiAgICAgICAgICAgIHBvaW50ID0gbWlua293c2tpU3VtLmdldFN1cHBvcnRQb2ludChlZGdlLm5vcm1hbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBwb2ludC5kb3QoZWRnZS5ub3JtYWwpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLCAnZWRnZS5kaXN0YW5jZTonLCBlZGdlLmRpc3RhbmNlLCAncHJvamVjdGlvbicsIHByb2plY3Rpb24sICcocHJvamVjdGlvbiAtIGVkZ2UuZGlzdGFuY2UpJywgKHByb2plY3Rpb24gLSBlZGdlLmRpc3RhbmNlKSk7XG4gICAgICAgICAgICBpZiAoKHByb2plY3Rpb24gLSBlZGdlLmRpc3RhbmNlKSA8IHRoaXMuZGlzdGFuY2VFcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgcGVuZXRyYXRpb24ubm9ybWFsID0gZWRnZS5ub3JtYWw7XG4gICAgICAgICAgICAgICAgcGVuZXRyYXRpb24uZGVwdGggPSBwcm9qZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGVuZXRyYXRpb24nLCBwZW5ldHJhdGlvbi5ub3JtYWwsIHBlbmV0cmF0aW9uLmRlcHRoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZWVrJywgcGVlay5ub3JtYWwsIHBlZWsuZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzbXBseC5leHBhbmQocG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGVuZXRyYXRpb24ubm9ybWFsID0gZWRnZS5ub3JtYWw7XG4gICAgICAgIHBlbmV0cmF0aW9uLmRlcHRoID0gcG9pbnQuZG90KGVkZ2Uubm9ybWFsKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygncGVuZXRyYXRpb24nLCBwZW5ldHJhdGlvbi5ub3JtYWwsIHBlbmV0cmF0aW9uLmRlcHRoKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BlZWsnLCBwZWVrLm5vcm1hbCwgcGVlay5kaXN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgfVxuXG4gICAgZ2V0TXhJdHJhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heEl0ZXJhdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0TWF4SXRlcmF0aW9ucyhtYXhJdGVyYXRpb25zKSB7XG4gICAgICAgIGlmIChtYXhJdGVyYXRpb25zIDwgNSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb2xsaXNpb24ubmFycm93cGhhc2UuZXBhLmludmFsaWRNYXhpbXVtSXRlcmF0aW9ucycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9ucyA9IG1heEl0ZXJhdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0RGlzdGFuY2VFcHNpbG9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXN0YW5jZUVwc2lsb247XG4gICAgfVxuXG4gICAgc2V0RGlzdGFuY2VFcHNpbG9uKGRpc3RhbmNlRXBzaWxvbikge1xuICAgICAgICBpZiAoZGlzdGFuY2VFcHNpbG9uIDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29sbGlzaW9uLm5hcnJvd3BoYXNlLmVwYS5pbnZhbGlkRGlzdGFuY2VFcHNpbG9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXN0YW5jZUVwc2lsb24gPSBkaXN0YW5jZUVwc2lsb247XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2R5bjRqL0VwYS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5pbXBvcnQgQ29udmV4IGZyb20gJy4vQ29udmV4JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBHZW9tZXRyeSBmcm9tICcuL0dlb21ldHJ5JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgQ29udmV4IHtcblxuICAgIC8qKlxuICAgICAqIO2PtOumrOqzpFxuICAgICAqIEBwYXJhbSBjZW50ZXIge1ZlY3Rvcn1cbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSBub3JtYWxzIHtWZWN0b3JbXX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcyA9IFtdLCBub3JtYWxzID0gW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB0aGlzLm5vcm1hbHMgPSAodmVydGljZXMubGVuZ3RoICE9PSAwKSA/XG4gICAgICAgICAgICBHZW9tZXRyeS5nZXRDb3VudGVyQ2xvY2t3aXNlRWRnZU5vcm1hbHModmVydGljZXMpIDogbm9ybWFscztcbiAgICAgICAgdGhpcy5jZW50ZXIgPSB0aGlzLmdldENlbnRlcigpO1xuICAgIH1cblxuICAgIGdldENlbnRlcigpIHtcbiAgICAgICAgY29uc3QgYXZnID0gbmV3IFZlY3RvcigpXG4gICAgICAgICAgICAsIHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlc1xuICAgICAgICAgICAgLCBjb3VudCA9IHZlcnRpY2VzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGF2Zy54ICs9IHZlcnRpY2VzW2ldLng7XG4gICAgICAgICAgICBhdmcueSArPSB2ZXJ0aWNlc1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgYXZnLnggLz0gY291bnQ7XG4gICAgICAgIGF2Zy55IC89IGNvdW50O1xuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuICAgIGdldEZhcnRoZXN0UG9pbnQoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFZlY3RvcigpO1xuICAgICAgICAvLyBzZXQgdGhlIGZhcnRoZXN0IHBvaW50IHRvIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgcG9pbnQuc2V0KHRoaXMudmVydGljZXNbMF0pO1xuICAgICAgICAvLyBwcmltZSB0aGUgcHJvamVjdGlvbiBhbW91bnRcbiAgICAgICAgbGV0IG1heCA9IGRpcmVjdGlvbi5kb3QodGhpcy52ZXJ0aWNlc1swXSk7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXNbaV1cbiAgICAgICAgICAgICAgICAsIHByb2plY3Rpb24gPSBkaXJlY3Rpb24uZG90KHZlcnRleCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0aW9uID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgcG9pbnQuc2V0KHZlcnRleCk7XG4gICAgICAgICAgICAgICAgbWF4ID0gcHJvamVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG5cbiAgICBnZXRGYXJ0aGVzdEZlYXR1cmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IG1heGltdW0gPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGxldCBtYXggPSAtTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcblxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCB2ZXJ0ZXhcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXNbaV07XG4gICAgICAgICAgICAvLyBnZXQgdGhlIHNjYWxhciBwcm9qZWN0aW9uIG9mIHYgb250byBheGlzXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gZGlyZWN0aW9uLmRvdCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgLy8ga2VlcCB0aGUgbWF4aW11bSBwcm9qZWN0aW9uIHBvaW50XG4gICAgICAgICAgICBpZiAocHJvamVjdGlvbiA+IG1heCkge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgbWF4IHBvaW50XG4gICAgICAgICAgICAgICAgbWF4aW11bS5zZXQodik7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBuZXcgbWF4aW11bVxuICAgICAgICAgICAgICAgIG1heCA9IHByb2plY3Rpb247XG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgaW5kZXhcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmNlIHdlIGhhdmUgdGhlIHBvaW50IG9mIG1heGltdW1cbiAgICAgICAgLy8gc2VlIHdoaWNoIGVkZ2UgaXMgbW9zdCBwZXJwZW5kaWN1bGFyXG4gICAgICAgIGNvbnN0IGwgPSBpbmRleCArIDEgPT0gY291bnQgPyAwIDogaW5kZXggKyAxO1xuICAgICAgICBjb25zdCByID0gaW5kZXggLSAxIDwgMCA/IGNvdW50IC0gMSA6IGluZGV4IC0gMTtcblxuICAgICAgICBjb25zdCBsZWZ0TiA9IHRoaXMubm9ybWFsc1tpbmRleCA9PSAwID8gY291bnQgLSAxIDogaW5kZXggLSAxXTtcbiAgICAgICAgY29uc3QgcmlnaHROID0gdGhpcy5ub3JtYWxzW2luZGV4XTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBtYXhpbXVtIHBvaW50IGZvciB0aGUgZmVhdHVyZSAodHJhbnNmb3JtIHRoZSBtYXhpbXVtIGludG8gd29ybGQgc3BhY2UpXG4gICAgICAgIGNvbnN0IHZtID0gbmV3IFBvaW50RmVhdHVyZShtYXhpbXVtLCBpbmRleCk7XG4gICAgICAgIC8vIGlzIHRoZSBsZWZ0IG9yIHJpZ2h0IGVkZ2UgbW9yZSBwZXJwZW5kaWN1bGFyP1xuICAgICAgICBpZiAobGVmdE4uZG90KGRpcmVjdGlvbikgPCByaWdodE4uZG90KGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnZlcnRpY2VzW2xdO1xuICAgICAgICAgICAgY29uc3QgdmwgPSBuZXcgUG9pbnRGZWF0dXJlKGxlZnQsIGwpO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBlZGdlIGlzIHRoZSByaWdodCB3aW5kaW5nXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVkZ2VGZWF0dXJlKHZtLCB2bCwgdm0sIG1heGltdW0udG8obGVmdCksIGluZGV4ICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMudmVydGljZXNbcl07XG4gICAgICAgIGNvbnN0IHZyID0gbmV3IFBvaW50RmVhdHVyZShyaWdodCwgcik7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgZWRnZSBpcyB0aGUgcmlnaHQgd2luZGluZ1xuICAgICAgICByZXR1cm4gbmV3IEVkZ2VGZWF0dXJlKHZyLCB2bSwgdm0sIHJpZ2h0LnRvKG1heGltdW0pLCBpbmRleCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9Qb2x5Z29uLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZleCB7XG5cbiAgICAvKipcbiAgICAgKiDrsKntlqXsl5DshJwg6rCA7J6lIOuovCDrsqHthLDsnZgg7J24642x7IqkIChGZWF0dXJlKeulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfVxuICAgICAqL1xuICAgIGdldEZhcnRoZXN0RmVhdHVyZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQ29udmV4XSBpbXBsbWVudHMgZ2V0RmFydGhlc3RGZWF0dXJlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog67Cp7Zal7JeQ7IScIOqwgOyepSDrqLwg7Y+s7J247Yq466W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9XG4gICAgICovXG4gICAgZ2V0RmFydGhlc3RQb2ludChkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQ29udmV4XSBpbXBsbWVudHMgZ2V0RmFydGhlc3RQb2ludCcpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovQ29udmV4LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE2IFdpbGxpYW0gQml0dGxlICBodHRwOi8vd3d3LmR5bjRqLm9yZy9cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxuICogcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9uc1xuICogICAgIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogICAgIGRpc3RyaWJ1dGlvbi5cbiAqICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIGR5bjRqIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yXG4gKiAgICAgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbiAqIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbiAqIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG4gKiBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb21ldHJ5IHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2Ygbm9ybWFsaXplZCB2ZWN0b3JzIHJlcHJlc2VudGluZyB0aGUgbm9ybWFscyBvZiBhbGwgdGhlXG4gICAgICogZWRnZXMgZ2l2ZW4gdGhlIHZlcnRpY2VzLlxuICAgICAqIDxwPlxuICAgICAqIFRoaXMgbWV0aG9kIGFzc3VtZXMgY291bnRlci1jbG9ja3dpc2Ugb3JkZXJpbmcuXG4gICAgICogPHA+XG4gICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBnaXZlbiB2ZXJ0aWNlcyBhcnJheSBpcyBudWxsIG9yIGVtcHR5LlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119XG4gICAgICovXG4gICAgc3RhdGljIGdldENvdW50ZXJDbG9ja3dpc2VFZGdlTm9ybWFscyh2ZXJ0aWNlcykge1xuICAgICAgICBpZiAodmVydGljZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaXplID0gdmVydGljZXMubGVuZ3RoO1xuICAgICAgICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxzID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBlZGdlIHBvaW50c1xuICAgICAgICAgICAgY29uc3QgcDEgPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHAyID0gKGkgKyAxID09PSBzaXplKSA/IHZlcnRpY2VzWzBdIDogdmVydGljZXNbaSArIDFdO1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBlZGdlIGFuZCBnZXQgaXRzIGxlZnQgcGVycGVkaWN1bGFyIHZlY3RvclxuICAgICAgICAgICAgY29uc3QgbiA9IHAxLnRvKHAyKS5sZWZ0KCk7XG4gICAgICAgICAgICAvLyBub3JtYWxpemUgaXRcbiAgICAgICAgICAgIG4ubm9ybWFsaXplKCk7XG4gICAgICAgICAgICBub3JtYWxzW2ldID0gbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxzO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovR2VvbWV0cnkuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTYgV2lsbGlhbSBCaXR0bGUgIGh0dHA6Ly93d3cuZHluNGoub3JnL1xuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkXG4gKiBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zXG4gKiAgICAgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiAgICAgZGlzdHJpYnV0aW9uLlxuICogICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgZHluNGogbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3JcbiAqICAgICBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuICogSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuICogREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbiAqIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbiAqIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuZXRyYXRpb24ge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5vcm1hbCB7VmVjdG9yfSBjb252ZXgxIOyXkOyEnCBjb252ZXgyIOuhnCDsuajtiKztlZwgbm9ybWFsXG4gICAgICogQHBhcmFtIGRlcHRoIHtudW1iZXJ9IOy5qO2IrCDquYrsnbRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihub3JtYWwgPSBuZXcgVmVjdG9yKCksIGRlcHRoID0gMCkge1xuICAgICAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm5vcm1hbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgIH1cblxuICAgIGdldE5vcm1hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICAgIH1cblxuICAgIGdldERlcHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXB0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsuajtiKwg67Cp7Zal7J2EIOyEpOygle2VqeuLiOuLpC4g67CY65Oc7IucIG5vcm1hbGl6ZWQg7ZW07JW8IO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gbm9ybWFsIHtWZWN0b3J9XG4gICAgICovXG4gICAgc2V0Tm9ybWFsKG5vcm1hbCkge1xuICAgICAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsuajtiKwg6rmK7J2066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gZGVwdGgge251bWJlcn1cbiAgICAgKi9cbiAgICBzZXREZXB0aChkZXB0aCkge1xuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keW40ai9QZW5ldHJhdGlvbi5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBHSksgZnJvbSAnLi4vZ2prL0dKSyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlclxue1xuICAgIHN0YXRpYyBkcmF3TWlua293c2tpU3VtKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYXdNaW5rb3dza2lTdW0oJywgdmVydGljZXMxLmxlbmd0aCAqIHZlcnRpY2VzMi5sZW5ndGgsICcpJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2ZXJ0aWNlczIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCB2MSA9IHZlcnRpY2VzMVtpXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCB2MiA9IHZlcnRpY2VzMltqXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCBkaWZmID0gVmVjdG9yLnN1YnRyYWN0KHYxLCB2Mik7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGRpZmYpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGosIGB2ZWNbJHtkaWZmLnh9LCAke2RpZmYueX1dYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsUGF0aCA9IEdKSy5jcmVhdGVDb252ZXhIdWxsKHBhdGgpO1xuICAgICAgICBQYWludGVyLmRyYXdQb2x5Z29uKGNvbnZleEh1bGxQYXRoLCAxLCAweERERERERCwgMSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvbHlnb24odmVydGljZXMsIGxpbmVXaWR0aCA9IDEsIGNvbG9yID0gMHg2MDdEOEIsIGFscGhhID0gMC41KVxuICAgIHtcbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSB3aW5kb3cuZztcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKGxpbmVXaWR0aCwgY29sb3IsIGFscGhhKTtcblxuICAgICAgICBjb25zdCB2ZWMwID0gdmVydGljZXNbMF0uY2xvbmUoKTtcbiAgICAgICAgdmVjMC5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG5cbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHZlYzAueCwgdmVjMC55KTtcblxuICAgICAgICAvLyB0aGlzLmRyYXdUZXh0KHdpbmRvdy5zdGFnZSwgJygnICsgdmVjMC54LnRvRml4ZWQoMCkgKyAnLCcgKyB2ZWMwLnkudG9GaXhlZCgwKSArICcpJywgdmVjMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlYyA9IHZlcnRpY2VzW2ldLmNsb25lKCk7XG4gICAgICAgICAgICB2ZWMubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYy54LCB2ZWMueSk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lVG8odmVjMC54LCB2ZWMwLnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdUZXh0KHN0YWdlLCBzdHJpbmcsIHBvaW50LCBjb2xvciA9ICcjZmYzMzAwJylcbiAgICB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXcgUElYSS5UZXh0KHN0cmluZywge1xuICAgICAgICAgICAgLy8gZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIC8vIGZvbnRTaXplOiA0LFxuICAgICAgICAgICAgLy8gZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgZmlsbDogY29sb3IsXG4gICAgICAgICAgICAvLyBzdHJva2U6ICcjNGExODUwJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGV4dC54ID0gcG9pbnQueDtcbiAgICAgICAgdGV4dC55ID0gcG9pbnQueTtcblxuICAgICAgICBzdGFnZS5hZGRDaGlsZCh0ZXh0KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnQoZ3JhcGhpY3MsIHBvaW50LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBjb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHBvaW50LngsIHBvaW50LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5Qm91bmRzKGdyYXBoaWNzLCBib3VuZHMsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKVxuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocmVjdC5sdC54LCByZWN0Lmx0LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5ydC54LCByZWN0LnJ0LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5yYi54LCByZWN0LnJiLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5sYi54LCByZWN0LmxiLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5sdC54LCByZWN0Lmx0LnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHNCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0Lmx0LngsIHJlY3QubHQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LnJ0LngsIHJlY3QucnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LnJiLngsIHJlY3QucmIueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LmxiLngsIHJlY3QubGIueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzKGdyYXBoaWNzLCBwb2ludHMsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHAxID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgdmFyIHAyID0gcG9pbnRzW2kgKyAxIDwgcG9pbnRzLmxlbmd0aCA/IGkgKyAxIDogMF07XG5cbiAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICAgICBncmFwaGljcy5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3TGluZShncmFwaGljcywgcDAsIHAxLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMC54LCBwMC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAxLngsIHAxLnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdBcnJvdyhncmFwaGljcywgbW92ZVBvaW50LCB0b1BvaW50LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcsIHNjYWxlID0gNSlcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcih0b1BvaW50LnggLSBtb3ZlUG9pbnQueCwgdG9Qb2ludC55IC0gbW92ZVBvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgdmVjdG9yLmludmVydCgpLm11bHRpcGx5U2NhbGFyKDE1KTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7Ki9cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcihtb3ZlUG9pbnQueCAtIHRvUG9pbnQueCwgbW92ZVBvaW50LnkgLSB0b1BvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0RpcmVjdGlvbihncmFwaGljcywgbWUsIHRhcmdldCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43LCBzY2FsZSA9IDUpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcblxuICAgICAgICB2YXIgdG8gPSBtZS50byh0YXJnZXQpO1xuICAgICAgICB2YXIgbGVmdCA9IHRvLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdG8uY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgdG8uaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIHRvLngsIG1lLnkgKyB0by55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIGxlZnQueCwgbWUueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1lLnggKyByaWdodC54LCBtZS55ICsgcmlnaHQueSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1BhaW50ZXIuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgRXBzaWxvbiBmcm9tICcuLi9keW40ai9FcHNpbG9uJztcbmltcG9ydCBNaW5rb3dza2lTdW1Qb2ludCBmcm9tIFwiLi9NaW5rb3dza2lTdW1Qb2ludFwiO1xuXG4vKipcbiAqIEdKSyBBbGdvcml0aG0gKEdpbGJlcnQtSm9obnNvbi1LZWVydGhpKVxuICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAqIGh0dHA6Ly93d3cuZHluNGoub3JnLzIwMTAvMDQvZ2prLWdpbGJlcnQtam9obnNvbi1rZWVydGhpLyNnamstdG9wXG4gKiBodHRwczovL3d3dy5oYXJvbGRzZXJyYW5vLmNvbS9ibG9nL3Zpc3VhbGl6aW5nLXRoZS1namstY29sbGlzaW9uLWFsZ29yaXRobVxuICogaHR0cHM6Ly9naXRodWIuY29tL2p1aGwvY29sbGlzaW9uLWRldGVjdGlvbi0yZFxuICovXG5cbmNvbnN0IE9SSUdJTiA9IG5ldyBWZWN0b3IoMCwgMClcbiAgICAsIERFRkFVTFRfTUFYX0lURVJBVElPTlMgPSAzMFxuICAgICwgVE9MRVJBTkNFID0gTWF0aC5zcXJ0KEVwc2lsb24uRSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdKS1xue1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdG8gY29tcHV0ZSBhdmVyYWdlIGNlbnRlciAocm91Z2hseSkuIEl0IG1pZ2h0IGJlIGRpZmZlcmVudCBmcm9tXG4gICAgICogQ2VudGVyIG9mIEdyYXZpdHksIGVzcGVjaWFsbHkgZm9yIGJvZGllcyB3aXRoIG5vbnVuaWZvcm0gZGVuc2l0eSxcbiAgICAgKiBidXQgdGhpcyBpcyBvayBhcyBpbml0aWFsIGRpcmVjdGlvbiBvZiBzaW1wbGV4IHNlYXJjaCBpbiBHSktcbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgYXZlcmFnZVBvaW50KHZlcnRpY2VzKVxuICAgIHtcbiAgICAgICAgY29uc3QgYXZnID0gbmV3IFZlY3RvcigpXG4gICAgICAgICAgICAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgYXZnLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2Zy55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhdmcueCAvPSBjb3VudDtcbiAgICAgICAgYXZnLnkgLz0gY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIGF2ZztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBmdXJ0aGVzdCB2ZXJ0ZXggYWxvbmcgYSBjZXJ0YWluIGRpcmVjdGlvblxuICAgICAqIOq8reyngOygkOqzvCDrsKntlqXsnYQg7KCE64us7ZWY66m0IOuCtOyggSAo7Yis7JiBKeydhCDthrXtlbQg7LWc64yA66GcIOuovCDsooztkZzsnZgg7J24642x7Iqk66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMsIGRpcmVjdGlvbilcbiAgICB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXhQcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IFZlY3Rvci5kb3RQcm9kdWN0KGRpcmVjdGlvbiwgdmVydGljZXNbaV0pO1xuXG4gICAgICAgICAgICBpZiAocHJvZHVjdCA+IG1heFByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBtYXhQcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNaW5rb3dza2kgc3VtIHN1cHBvcnQgZnVuY3Rpb24gZm9yIEdKS1xuICAgICAqIOyngOybkCDtlajsiJjsl5DshJwg7Y+066as6rOk7J2YIO2PrOyduO2KuOyZgCDrsKntlqXsnLzroZwg7ISc66GcIOuLpOuluCDrsKntlqXsnZgg7KCQ7J2EIOq1rO2VmOqzoCBNaW5rb3dza2kgRGlmZmVyZW5jZSDrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gdmVydGljZXMyIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUg67Kh7YSwXG4gICAgICovXG4gICAgc3RhdGljIHN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGRpcmVjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIGdldCBmdXJ0aGVzdCBwb2ludCBvZiBmaXJzdCBib2R5IGFsb25nIGFuIGFyYml0cmFyeSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaSA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMxLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIC8vIGdldCBmdXJ0aGVzdCBwb2ludCBvZiBzZWNvbmQgYm9keSBhbG9uZyB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGogPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMiwgVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKGRpcmVjdGlvbiwgdHJ1ZSksICdpOicgKyBzdHIodmVydGljZXMxW2ldKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pLCB0cnVlKSwgJ2o6JyArIHN0cih2ZXJ0aWNlczJbal0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1cHBvcnQoJyArIHN0cihWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pKSArICcpJyk7XG4gICAgICAgIC8vIHN1YnRyYWN0IChNaW5rb3dza2kgc3VtKSB0aGUgdHdvIHBvaW50cyB0byBzZWUgaWYgYm9kaWVzICdvdmVybGFwJ1xuICAgICAgICByZXR1cm4gVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdXBwb3J0Mih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgcmV0dXJuIG5ldyBNaW5rb3dza2lTdW1Qb2ludCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIHZlcnRpY2VzMiB7VmVjdG9yW119XG4gICAgICogQHBhcmFuIGhpc3Rvcnkge0hpc3Rvcnl9IHNpbXBsZXgg7JmAIGRpcmVjdGlvbiDtnojsiqTthqDrpqxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g7Lap64+MIOyXrOu2gFxuICAgICAqL1xuICAgIHN0YXRpYyBjaGVja0NvbGxpc2lvbih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgaGlzdG9yeSA9IG51bGwpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpO1xuXG4gICAgICAgIGxldCBpdGVyQ291bnQgPSAwLCBpbmRleCA9IDA7ICAgLy8gaW5kZXggb2YgY3VycmVudCB2ZXJ0ZXggb2Ygc2ltcGxleFxuICAgICAgICBsZXQgYSwgYiwgYywgZCwgYW8sIGFiLCBhYywgYWJwZXJwLCBhY3BlcnAsXG4gICAgICAgICAgICBzaW1wbGV4ID0gbmV3IEFycmF5KDMpLCBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDMpO1xuXG4gICAgICAgIC8vIOuRkCDtj7Trpqzqs6Qg7KSR7IusIOyijO2RnOulvCDthrXtlbTshJwg67Cp7Zal7J2EIOq1rO2VqeuLiOuLpC5cbiAgICAgICAgY29uc3QgcG9zaXRpb24xID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMxKTsgLy8gbm90IGEgQ29HIGJ1dFxuICAgICAgICBjb25zdCBwb3NpdGlvbjIgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIC8vIOuwqe2WpSB2ZWN0b3JcbiAgICAgICAgZCA9IFZlY3Rvci5zdWJ0cmFjdChwb3NpdGlvbjEsIHBvc2l0aW9uMik7XG5cbiAgICAgICAgLy8gaWYgaW5pdGlhbCBkaXJlY3Rpb24gaXMgemVybyDigJMgc2V0IGl0IHRvIGFueSBhcmJpdHJhcnkgYXhpcyAod2UgY2hvb3NlIFgpXG4gICAgICAgIGlmICgoZC54ID09IDApICYmIChkLnkgPT0gMCkpIHtcbiAgICAgICAgICAgIGQueCA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgc3VwcG9ydCBhcyBpbml0aWFsIHBvaW50IG9mIHRoZSBuZXcgc2ltcGxleFxuICAgICAgICBhID0gc2ltcGxleFswXSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgIGRpcmVjdGlvbnNbMF0gPSBkO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG5cbiAgICAgICAgLy8gc3VwcG9ydCDsoJDqs7wg67Cp7Zal7J20IOqwmeydgCDrsKntlqXsnbQg7JWE64uQIOqyveyasFxuICAgICAgICBpZiAoYS5kb3QoZCkgPD0gMCkge1xuICAgICAgICAgICAgLy8g66eI7KeA66eJ7JeQIOy2lOqwgCDrkJwg7KCQ7J20IGTsnZgg67Cp7Zal7Jy866GcIOybkOygkOydhCDsp4DrgpjsuZjsp4Ag7JWK7J2AIOqyveyasFxuICAgICAgICAgICAgLy8g6re4IOuLpOydjCBNaW5rb3dza2kg7ZWp7J2AIOybkOygkOydhCDtj6ztlagg7ZWgIOyImCDsl4bsirXri4jri6QuXG4gICAgICAgICAgICAvLyDstpTqsIAg65CcIOuniOyngOuniSDsoJDsnYAgTWlua293c2tpIERpZmZlcmVuY2XsnZgg6rCA7J6l7J6Q66as7JeQIOyeiOyKteuLiOuLpC5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgICAgICAgQ0FTRTFbJywgJ05PJywgJ10nKTtcblxuICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgIH1cblxuICAgICAgICBkID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gVGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBhbHdheXMgdG93YXJkcyB0aGUgb3JpZ2luLCBzbyB0aGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIG5lZ2F0ZShhKVxuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpdGVyQ291bnQrKztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlckNvdW50KTtcblxuICAgICAgICAgICAgYSA9IHNpbXBsZXhbKytpbmRleF0gPSB0aGlzLnN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuICAgICAgICAgICAgZGlyZWN0aW9uc1tpbmRleF0gPSBkO1xuXG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICAgICAgIENBU0UyWycsICdOTycsICddJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYeqwgCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuyoe2EsOuKlCAtYSDrpbwg7ZWY66m0IOuQqeuLiOuLpC5cbiAgICAgICAgICAgIGFvID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gZnJvbSBwb2ludCBBIHRvIE9yaWdpbiBpcyBqdXN0IG5lZ2F0aXZlIEFcblxuICAgICAgICAgICAgLy8gc2ltcGxleCBoYXMgMiBwb2ludHMgKGEgbGluZSBzZWdtZW50LCBub3QgYSB0cmlhbmdsZSB5ZXQpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAyKSB7XG5cbiAgICAgICAgICAgICAgICBiID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYik7IC8vIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuXG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5sZW5ndGhTcShkKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnBlcnBlbmRpY3VsYXIoYWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gc2tpcCB0byBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiID0gc2ltcGxleFsxXTtcbiAgICAgICAgICAgIGMgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICBhYyA9IFZlY3Rvci5zdWJ0cmFjdChjLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIENcblxuICAgICAgICAgICAgLy9hY+yZgCDsiJjsp4FcbiAgICAgICAgICAgIGFjcGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhYywgYWMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYScsIGEsICdiJywgYiwgJ2MnLCBjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbycsIGFvLCAnYWInLCBhYiwgJ2FjJywgYWMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjcGVycCcsIGFjcGVycCwgYWNwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFjcGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAvLyBhYyDsiJjsp4Eg7ISg67aE7J20IGHqsIAg7JuQ7KCQ7J2EIO2Wpe2VmOuKlCDrsKntlqUg67CY64yA7Y647JeQIOyeiOqzoFxuICAgICAgICAgICAgLy8g7KaJLCBhYyDsiJjsp4Eg7ISg67aEIOyViOyqveyXkCDsm5DsoJDsnbQg7J6I7Jy866m0XG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGQgPSBhY3BlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luJywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aEXG4gICAgICAgICAgICAgICAgYWJwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FicGVycCcsIGFicGVycCwgYWJwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhYnBlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pKTtcblxuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoTsnbQg7JuQ7KCQIOuwmOuMgCDrsKntlqXsnYQg7Zal7ZWY6rOgIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIC8vIOymiSwg7JuQ7KCQ7J20IOyCvOqwge2YlSDslYjsl5Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pIDwgMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2ltcGxleFswXSA9IHNpbXBsZXhbMV07IC8vIHN3YXAgZmlyc3QgZWxlbWVudCAocG9pbnQgQylcbiAgICAgICAgICAgICAgICBkID0gYWJwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaW1wbGV4WzFdID0gc2ltcGxleFsyXTsgLy8gc3dhcCBlbGVtZW50IGluIHRoZSBtaWRkbGUgKHBvaW50IEIpXG4gICAgICAgICAgICAtLWluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzdGFuY2UodmVydGljZXMxLCB2ZXJ0aWNlczIsIHNlcGFyYXRpb24gPSBudWxsKVxuICAgIHtcbiAgICAgICAgbGV0IGEsIGIsIGMsIGQsIHAxLCBwMiwgcDFNYWcsIHAyTWFnLCBwcm9qZWN0aW9uO1xuXG4gICAgICAgIC8vIOuRkCDtj7Trpqzqs6Qg7KSR7IusIOyijO2RnOulvCDthrXtlbTshJwg67Cp7Zal7J2EIOq1rO2VqeuLiOuLpC5cbiAgICAgICAgY29uc3QgYzEgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczEpOyAvLyBub3QgYSBDb0cgYnV0XG4gICAgICAgIGNvbnN0IGMyID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMyKTsgLy8gaXQncyBvayBmb3IgR0pLIClcblxuICAgICAgICAvLyBpbml0aWFsIGRpcmVjdGlvbiBmcm9tIHRoZSBjZW50ZXIgb2YgMXN0IGJvZHkgdG8gdGhlIGNlbnRlciBvZiAybmQgYm9keVxuICAgICAgICBkID0gVmVjdG9yLnN1YnRyYWN0KGMxLCBjMik7XG5cbiAgICAgICAgaWYgKGQuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEgPSB0aGlzLnN1cHBvcnQyKHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgYiA9IHRoaXMuc3VwcG9ydDIodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQuaW52ZXJ0KCkpO1xuXG4gICAgICAgIGQgPSBHSksuZ2V0UG9pbnRPblNlZ21lbnRDbG9zZXN0VG9Qb2ludChPUklHSU4sIGEucG9pbnQsIGIucG9pbnQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgREVGQVVMVF9NQVhfSVRFUkFUSU9OUzsgaSsrKSB7XG4gICAgICAgICAgICBkID0gZC5pbnZlcnQoKTtcblxuICAgICAgICAgICAgaWYoZC5sZW5ndGhTcSgpIDw9IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjbG9zZXN0IHBvaW50IGlzIHRoZSBvcmlnaW4gdGhlbiB0aGUgc2hhcGVzIGFyZSBub3Qgc2VwYXJhdGVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjID0gdGhpcy5zdXBwb3J0Mih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG5cbiAgICAgICAgICAgIGlmIChHSksuY29udGFpbnNPcmlnaW4oYS5wb2ludCwgYi5wb2ludCwgYy5wb2ludCkpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBkb2VzIHRoZW4gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2VlIGlmIHRoZSBuZXcgcG9pbnQgaXMgZmFyIGVub3VnaCBhbG9uZyBkXG4gICAgICAgICAgICBwcm9qZWN0aW9uID0gYy5wb2ludC5kb3QoZCk7XG5cbiAgICAgICAgICAgIGlmICgocHJvamVjdGlvbiAtIGEucG9pbnQuZG90KGQpKSA8IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZW4gdGhlIG5ldyBwb2ludCB3ZSBqdXN0IG1hZGUgaXMgbm90IGZhciBlbm91Z2hcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZGlyZWN0aW9uIG9mIG4gc28gd2UgY2FuIHN0b3Agbm93XG4gICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplIGRcbiAgICAgICAgICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgICAgICAgICAgc2VwYXJhdGlvbi5ub3JtYWwgPSBkO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSAtYy5wb2ludC5kb3QoZCk7XG4gICAgICAgICAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGEsIGIsIHNlcGFyYXRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwMSA9IEdKSy5nZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50KE9SSUdJTiwgYS5wb2ludCwgYy5wb2ludCk7XG4gICAgICAgICAgICBwMiA9IEdKSy5nZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50KE9SSUdJTiwgYy5wb2ludCwgYi5wb2ludCk7XG4gICAgICAgICAgICBwMU1hZyA9IHAxLmxlbmd0aFNxKCk7XG4gICAgICAgICAgICBwMk1hZyA9IHAyLmxlbmd0aFNxKCk7XG5cbiAgICAgICAgICAgIGlmIChwMU1hZyA8PSBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSBwMS5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgICAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGEsIGMsIHNlcGFyYXRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwMk1hZyA8PSBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSBwMi5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgICAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGMsIGIsIHNlcGFyYXRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocDFNYWcgPCBwMk1hZykge1xuICAgICAgICAgICAgICAgIGIgPSBjO1xuICAgICAgICAgICAgICAgIGQgPSBwMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYSA9IGM7XG4gICAgICAgICAgICAgICAgZCA9IHAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSAtYy5wb2ludC5kb3QoZCk7XG4gICAgICAgIEdKSy5maW5kQ2xvc2VzdFBvaW50cyhhLCBiLCBzZXBhcmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvcmlnaW4gaXMgd2l0aGluIHRoZSB0cmlhbmdsZSBnaXZlbiBieVxuICAgICAqIGEsIGIsIGFuZCBjLlxuICAgICAqIDxwPlxuICAgICAqIElmIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgc2FtZSBzaWRlIG9mIGFsbCB0aGUgcG9pbnRzIHRoZW4gd2VcbiAgICAgKiBrbm93IHRoYXQgdGhlIG9yaWdpbiBpcyBpbiB0aGUgdHJpYW5nbGUuXG4gICAgICogPHByZT4gc2lnbihsb2NhdGlvbihvcmlnaW4sIGEsIGIpKSA9PSBzaWduKGxvY2F0aW9uKG9yaWdpbiwgYiwgYykpID09IHNpZ24obG9jYXRpb24ob3JpZ2luLCBjLCBhKSk8L3ByZT5cbiAgICAgKiBUaGUge0BsaW5rIFNlZ21lbnQjZ2V0TG9jYXRpb24oVmVjdG9yMiwgVmVjdG9yMiwgVmVjdG9yMil9IG1ldGhvZFxuICAgICAqIGNhbiBiZSBzaW1wbGlmaWVkIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIHRoZSBvcmlnaW4gYXMgdGhlIHNlYXJjaCBwb2ludDpcbiAgICAgKiA8cHJlPiA9IChiLnggLSBhLngpICogKG9yaWdpbi55IC0gYS55KSAtIChvcmlnaW4ueCAtIGEueCkgKiAoYi55IC0gYS55KVxuICAgICAqID0gKGIueCAtIGEueCkgKiAoLWEueSkgLSAoLWEueCkgKiAoYi55IC0gYS55KVxuICAgICAqID0gLWEueSAqIGIueCArIGEueSAqIGEueCArIGEueCAqIGIueSAtIGEueCAqIGEueVxuICAgICAqID0gLWEueSAqIGIueCArIGEueCAqIGIueVxuICAgICAqID0gYS54ICogYi55IC0gYS55ICogYi54XG4gICAgICogPSBhLmNyb3NzKGIpPC9wcmU+XG4gICAgICogQHBhcmFtIGEgdGhlIGZpcnN0IHBvaW50XG4gICAgICogQHBhcmFtIGIgdGhlIHNlY29uZCBwb2ludFxuICAgICAqIEBwYXJhbSBjIHRoZSB0aGlyZCBwb2ludFxuICAgICAqIEByZXR1cm4gYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBjb250YWluc09yaWdpbihhLCBiLCBjKSB7XG4gICAgICAgIGNvbnN0IHNhID0gYS5jcm9zcyhiKVxuICAgICAgICAgICAgLCBzYiA9IGIuY3Jvc3MoYylcbiAgICAgICAgICAgICwgc2MgPSBjLmNyb3NzKGEpO1xuICAgICAgICByZXR1cm4gKHNhICogc2IgPiAwICYmIHNhICogc2MgPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgY2xvc2VzdCBwb2ludHMgb24gQSBhbmQgQiBnaXZlbiB0aGUgdGVybWluYXRpb24gc2ltcGxleCBhbmQgcGxhY2VzXG4gICAgICogdGhlbSBpbnRvIHBvaW50MSBhbmQgcG9pbnQyIG9mIHRoZSBnaXZlbiB7QGxpbmsgU2VwYXJhdGlvbn0gb2JqZWN0LlxuICAgICAqIDxwPlxuICAgICAqIFRoZSBzdXBwb3J0IHBvaW50cyB1c2VkIHRvIG9idGFpbiBhIGFuZCBiIGFyZSBub3QgZ29vZCBlbm91Z2ggc2luY2UgdGhlIHN1cHBvcnRcbiAgICAgKiBtZXRob2RzIG9mIHtAbGluayBDb252ZXh9IHtAbGluayBTaGFwZX1zIG9ubHkgcmV0dXJuIHRoZSBmYXJ0aGVzdCA8ZW0+dmVydGV4PC9lbT4sIG5vdFxuICAgICAqIG5lY2Vzc2FyaWx5IHRoZSBmYXJ0aGVzdCBwb2ludC5cbiAgICAgKiBAcGFyYW0gYSB0aGUgZmlyc3Qgc2ltcGxleCBwb2ludFxuICAgICAqIEBwYXJhbSBiIHRoZSBzZWNvbmQgc2ltcGxleCBwb2ludFxuICAgICAqIEBwYXJhbSBzZXBhcmF0aW9uIHRoZSB7QGxpbmsgU2VwYXJhdGlvbn0gb2JqZWN0IHRvIHBvcHVsYXRlXG4gICAgICogQHNlZSA8YSBocmVmPVwiaHR0cDovL3d3dy5keW40ai5vcmcvMjAxMC8wNC9namstZGlzdGFuY2UtY2xvc2VzdC1wb2ludHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R0pLIC0gRGlzdGFuY2UgJmFtcDsgQ2xvc2VzdCBQb2ludHM8L2E+XG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDbG9zZXN0UG9pbnRzKGEsIGIsIHNlcGFyYXRpb24pXG4gICAge1xuICAgICAgICBjb25zdCBwMSA9IG5ldyBWZWN0b3IoKVxuICAgICAgICAgICAgLCBwMiA9IG5ldyBWZWN0b3IoKVxuICAgICAgICAgICAgLCBsID0gVmVjdG9yLnN1YnRyYWN0KGEucG9pbnQsIGIucG9pbnQpO1xuXG4gICAgICAgIGlmIChsLmlzWmVybygpKSB7XG4gICAgICAgICAgICBwMS5zZXQoYS5zdXBwb3J0UG9pbnQxKTtcbiAgICAgICAgICAgIHAyLnNldChhLnN1cHBvcnRQb2ludDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGwgPSBsLmRvdChsKVxuICAgICAgICAgICAgICAgICwgbDIgPSAtbC5kb3QoYS5wb2ludCkgLyBsbFxuICAgICAgICAgICAgICAgICwgbDEgPSAxIC0gbDI7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGVpdGhlciBsYW1iZGExIG9yIGxhbWJkYTIgaXMgbGVzcyB0aGFuIHplcm9cbiAgICAgICAgICAgIGlmIChsMSA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBsYW1iZGExIGlzIGxlc3MgdGhhbiB6ZXJvIHRoZW4gdGhhdCBtZWFucyB0aGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHN1cHBvcnQgcG9pbnRzIG9mIHRoZSBNaW5rb3dza2kgcG9pbnQgQiBhcmVcbiAgICAgICAgICAgICAgICAvLyB0aGUgY2xvc2VzdCBwb2ludHNcbiAgICAgICAgICAgICAgICBwMS5zZXQoYi5zdXBwb3J0UG9pbnQxKTtcbiAgICAgICAgICAgICAgICBwMi5zZXQoYi5zdXBwb3J0UG9pbnQyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobDIgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbGFtYmRhMiBpcyBsZXNzIHRoYW4gemVybyB0aGVuIHRoYXQgbWVhbnMgdGhhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSBzdXBwb3J0IHBvaW50cyBvZiB0aGUgTWlua293c2tpIHBvaW50IEEgYXJlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGNsb3Nlc3QgcG9pbnRzXG4gICAgICAgICAgICAgICAgcDEuc2V0KGEuc3VwcG9ydFBvaW50MSk7XG4gICAgICAgICAgICAgICAgcDIuc2V0KGEuc3VwcG9ydFBvaW50Mik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGUgdGhlIGNsb3Nlc3QgcG9pbnRzIHVzaW5nIGxhbWJkYTEgYW5kIGxhbWJkYTJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBleHBhbmRlZCB2ZXJzaW9uIG9mXG4gICAgICAgICAgICAgICAgLy8gcDEgPSBhLnAxLm11bHRpcGx5KGwxKS5hZGQoYi5wMS5tdWx0aXBseShsMikpO1xuICAgICAgICAgICAgICAgIC8vIHAyID0gYS5wMi5tdWx0aXBseShsMSkuYWRkKGIucDIubXVsdGlwbHkobDIpKTtcbiAgICAgICAgICAgICAgICBwMS54ID0gYS5zdXBwb3J0UG9pbnQxLnggKiBsMSArIGIuc3VwcG9ydFBvaW50MS54ICogbDI7XG4gICAgICAgICAgICAgICAgcDEueSA9IGEuc3VwcG9ydFBvaW50MS55ICogbDEgKyBiLnN1cHBvcnRQb2ludDEueSAqIGwyO1xuICAgICAgICAgICAgICAgIHAyLnggPSBhLnN1cHBvcnRQb2ludDIueCAqIGwxICsgYi5zdXBwb3J0UG9pbnQyLnggKiBsMjtcbiAgICAgICAgICAgICAgICBwMi55ID0gYS5zdXBwb3J0UG9pbnQyLnkgKiBsMSArIGIuc3VwcG9ydFBvaW50Mi55ICogbDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IHRoZSBuZXcgcG9pbnRzIGluIHRoZSBzZXBhcmF0aW9uIG9iamVjdFxuICAgICAgICBzZXBhcmF0aW9uLnBvaW50MSA9IHAxO1xuICAgICAgICBzZXBhcmF0aW9uLnBvaW50MiA9IHAyO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9zZXN0UG9pbnRUb09yaWdpbihhLCBiKVxuICAgIHtcbiAgICAgICAgY29uc3QgYWIgPSBhLnRvKGIpXG4gICAgICAgICAgICAsIGFvID0gYS50byhuZXcgVmVjdG9yKCkpXG4gICAgICAgICAgICAsIHByb2pBb09udG9BYiA9IGFvLmRvdChhYilcbiAgICAgICAgICAgICwgbGVuZ3RoU3F1YXJlZCA9IGFiLmRvdChhYilcbiAgICAgICAgICAgICwgdCA9IHByb2pBb09udG9BYiAvIGxlbmd0aFNxdWFyZWRcbiAgICAgICAgICAgICwgY2xvc2V0UG9pbnQgPSBWZWN0b3IubXVsdGlwbHlTY2FsYXIoYWIsIHQpLmFkZChhKVxuICAgICAgICAgICAgLCBkID0gY2xvc2V0UG9pbnQubWFnbml0dWRlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtwb2ludDogY2xvc2V0UG9pbnQsIGRlcHRoOiBkfTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBvaW50IG9uIHRoZSBnaXZlbiBsaW5lIHNlZ21lbnQgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAgICogPHA+XG4gICAgICogSWYgdGhlIHBvaW50IGNsb3Nlc3QgdG8gdGhlIGdpdmVuIHBvaW50IGlzIG9uIHRoZSBsaW5lIGNyZWF0ZWQgYnkgdGhlXG4gICAgICogZ2l2ZW4gbGluZSBzZWdtZW50LCBidXQgaXMgbm90IG9uIHRoZSBsaW5lIHNlZ21lbnQgdGhlbiBlaXRoZXIgb2YgdGhlIHNlZ21lbnRzXG4gICAgICogZW5kIHBvaW50cyB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIDxwPlxuICAgICAqIEFzc3VtZXMgYWxsIHBvaW50cyBhcmUgaW4gd29ybGQgc3BhY2UuXG4gICAgICogQHNlZSBTZWdtZW50I2dldFBvaW50T25MaW5lQ2xvc2VzdFRvUG9pbnQoVmVjdG9yMiwgVmVjdG9yMiwgVmVjdG9yMilcbiAgICAgKiBAcGFyYW0gcG9pbnQgdGhlIHBvaW50XG4gICAgICogQHBhcmFtIGxpbmVQb2ludDEgdGhlIGZpcnN0IHBvaW50IG9mIHRoZSBsaW5lXG4gICAgICogQHBhcmFtIGxpbmVQb2ludDIgdGhlIHNlY29uZCBwb2ludCBvZiB0aGUgbGluZVxuICAgICAqIEByZXR1cm4ge0BsaW5rIFZlY3RvcjJ9XG4gICAgICogQHRocm93cyBOdWxsUG9pbnRlckV4Y2VwdGlvbiBpZiBwb2ludCwgbGluZVBvaW50MSwgb3IgbGluZVBvaW50MiBpcyBudWxsXG4gICAgICovXG4gICAgc3RhdGljIGdldFBvaW50T25TZWdtZW50Q2xvc2VzdFRvUG9pbnQocG9pbnQsIGxpbmVQb2ludDEsIGxpbmVQb2ludDIpXG4gICAge1xuICAgICAgICAvLyBjcmVhdGUgYSB2ZWN0b3IgZnJvbSB0aGUgcG9pbnQgdG8gdGhlIGZpcnN0IGxpbmUgcG9pbnRcbiAgICAgICAgY29uc3QgcDFUb1AgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnQsIGxpbmVQb2ludDEpXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsaW5lXG4gICAgICAgICAgICAsIGxpbmUgPSBWZWN0b3Iuc3VidHJhY3QobGluZVBvaW50MiwgbGluZVBvaW50MSlcbiAgICAgICAgICAgIC8vIGdldCB0aGUgbGVuZ3RoIHNxdWFyZWQgb2YgdGhlIGxpbmVcbiAgICAgICAgICAgICwgYWIyID0gbGluZS5kb3QobGluZSlcbiAgICAgICAgICAgICwgYXBfYWIgPSBwMVRvUC5kb3QobGluZSk7XG5cbiAgICAgICAgaWYgKGFiMiA8PSBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lUG9pbnQxLmNsb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdCA9IGFwX2FiIC8gYWIyO1xuICAgICAgICB0ID0gY2xhbXAodCwgMC4wLCAxLjApO1xuICAgICAgICByZXR1cm4gbGluZS5tdWx0aXBseVNjYWxhcih0KS5hZGQobGluZVBvaW50MSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3JlYXRlQ29udmV4SHVsbChwb2ludHMpXG4gICAge1xuICAgICAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgICAgIHZhciBpMCA9IDA7XG4gICAgICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGh1bGwgPSBbXTtcbiAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICB2YXIgaWggPSBpMDtcblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgICAgICB2YXIgaWUgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgciA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tqXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IFZlY3Rvci5jcm9zcyhyLCB2KTtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhTcSgpID4gci5sZW5ndGhTcSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29weSB2ZXJ0aWNlc1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaHVsbFtpXV07XG4gICAgICAgICAgICBuZXdQb2ludHMucHVzaChuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQb2ludHM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbWlkcG9pbnQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKChhLnggKyBiLngpIC8gMiwgKGEueSArIGIueSkgLyAyKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgaWYgKHZhbHVlIDw9IG1heCAmJiB2YWx1ZSA+PSBtaW4pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSBpZiAobWF4IDwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKGluZGV4LCB2ZXJ0ZXgueCwgdmVydGV4LnkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczEnKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGRlYnVnVmVydGljZXModmVydGljZXMxKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczInKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGRlYnVnVmVydGljZXModmVydGljZXMyKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xufVxuXG5mdW5jdGlvbiBzdHIodmVydGV4LCBpc0ZpeGVkID0gZmFsc2UpIHtcbiAgICBpZiAoaXNGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGAoJHt2ZXJ0ZXgueH0sJHt2ZXJ0ZXgueX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGAoJHt2ZXJ0ZXgueC50b0ZpeGVkKDIpfSwke3ZlcnRleC55LnRvRml4ZWQoMil9KWA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL0dKSy5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5rb3dza2lTdW1Qb2ludCB7XG4gICAgY29uc3RydWN0b3Ioc3VwcG9ydFBvaW50MSwgc3VwcG9ydFBvaW50Mikge1xuICAgICAgICB0aGlzLnN1cHBvcnRQb2ludDEgPSBzdXBwb3J0UG9pbnQxO1xuICAgICAgICB0aGlzLnN1cHBvcnRQb2ludDIgPSBzdXBwb3J0UG9pbnQyO1xuICAgICAgICB0aGlzLnBvaW50ID0gVmVjdG9yLnN1YnRyYWN0KHN1cHBvcnRQb2ludDEsIHN1cHBvcnRQb2ludDIpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL01pbmtvd3NraVN1bVBvaW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
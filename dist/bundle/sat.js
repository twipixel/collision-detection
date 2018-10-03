webpackJsonp([5],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(345);
	
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
	            window.addEventListener('keyup', this.onKeyUp.bind(this));
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
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(e) {
	            switch (e.keyCode) {
	                case _KeyCode2.default.TILDE:
	                    break;
	
	                case _KeyCode2.default.ESC:
	                    break;
	
	                case _KeyCode2.default.SPACE:
	                    break;
	
	                case _KeyCode2.default.DOWN_ARROW:
	                    break;
	
	                case _KeyCode2.default.UP_ARROW:
	                    break;
	
	                case _KeyCode2.default.LEFT_ARROW:
	                    break;
	
	                case _KeyCode2.default.RIGHT_ARROW:
	                    break;
	
	                case _KeyCode2.default.BACK_SPACE:
	                    console.clear();
	                    break;
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

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(346);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Circle = __webpack_require__(347);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _Polygon = __webpack_require__(351);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(341);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
	var _Mouse = __webpack_require__(332);
	
	var _Mouse2 = _interopRequireDefault(_Mouse);
	
	var _KeyCode = __webpack_require__(331);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var graphics = new PIXI.Graphics(),
	    debugGraphics = new PIXI.Graphics(),
	    shapes = [],
	    LINE_COLOR = 0x84D2F6,
	    ARROW_COLOR = 0xE57373;
	
	var polygonPoints = [[new _Point2.default(350, 350), new _Point2.default(350, 500), new _Point2.default(500, 500)], [new _Point2.default(500, 200), new _Point2.default(480, 250), new _Point2.default(600, 250), new _Point2.default(620, 200)], [new _Point2.default(258, 120), new _Point2.default(295, 230), new _Point2.default(200, 300), new _Point2.default(105, 230), new _Point2.default(142, 120)]];
	
	var Test = function (_PIXI$Container) {
	    _inherits(Test, _PIXI$Container);
	
	    function Test(renderer) {
	        _classCallCheck(this, Test);
	
	        var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this));
	
	        window['g'] = debugGraphics;
	
	        _this.isInit = false;
	        _this.interactive = true;
	        _this.renderer = renderer;
	        _this.canvas = _this.renderer.view;
	        _this.context = _this.canvas.getContext('2d');
	
	        _this.initialize();
	        return _this;
	    }
	
	    _createClass(Test, [{
	        key: 'initialize',
	        value: function initialize() {
	            if (this.isInit) {
	                return;
	            }
	
	            this.addChild(graphics);
	            this.addChild(debugGraphics);
	
	            this.mouseDownPoint = new PIXI.Point(0, 0);
	            this.lastdrag = new PIXI.Point(0, 0);
	            this.shapeBeingDragged = undefined;
	
	            //this.createPolygon();
	            this.createPolygonManual();
	
	            this.addEvent();
	
	            this.isInit = true;
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent() {
	            this.onMouseDown = this.onMouseDown.bind(this);
	            this.onMouseMove = this.onMouseMove.bind(this);
	            this.onMouseUp = this.onMouseUp.bind(this);
	
	            this.on('mousedown', this.onMouseDown);
	            this.on('mousemove', this.onMouseMove);
	            this.on('mouseup', this.onMouseUp);
	
	            window.addEventListener('keyup', this.onKeyUp.bind(this));
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
	        key: 'getPolygonPoints',
	        value: function getPolygonPoints(tx, ty, angle) {
	            var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
	
	            var points = [];
	
	            // making points, path
	            for (var i = 0; i < angle; i++) {
	                var x = tx + radius * -Math.sin(this.toRadian(360 / angle * i));
	                var y = ty + radius * Math.cos(this.toRadian(360 / angle * i));
	                var point = new PIXI.Point(x, y);
	                points.push(point);
	            }
	
	            return points;
	        }
	    }, {
	        key: 'toRadian',
	        value: function toRadian(degree) {
	            return degree * Math.PI / 180;
	        }
	    }, {
	        key: 'createPolygon',
	        value: function createPolygon() {
	            var _this2 = this;
	
	            var useRandomRotate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	            var context = this.context;
	
	            var _loop = function _loop(i) {
	                var polygon = new _Polygon2.default(context),
	                    points = polygonPoints[i];
	
	                points.forEach(function (point) {
	                    polygon.addPoint(point.x, point.y);
	                });
	
	                if (useRandomRotate) {
	                    _this2.rotateShape(polygon, Math.random() * 45);
	                }
	
	                shapes.push(polygon);
	
	                polygon.createPath(graphics, LINE_COLOR);
	            };
	
	            for (var i = 0; i < polygonPoints.length; ++i) {
	                _loop(i);
	            }
	        }
	    }, {
	        key: 'createPolygonManual',
	        value: function createPolygonManual() {
	            var radius = 100,
	                diameter = 200,
	                space = 20,
	                a = radius + space,
	                b = radius + diameter + space * 2,
	                c = radius + diameter * 2 + space * 3;
	
	            polygonPoints = [];
	            polygonPoints.push(this.getPolygonPoints(a, a, 3));
	            polygonPoints.push(this.getPolygonPoints(b, a, 4));
	            polygonPoints.push(this.getPolygonPoints(c, a, 5));
	            polygonPoints.push(this.getPolygonPoints(a, b, 6));
	            polygonPoints.push(this.getPolygonPoints(b, b, 7));
	            polygonPoints.push(this.getPolygonPoints(c, b, 8));
	            polygonPoints.push(this.getPolygonPoints(a, c, 9));
	            polygonPoints.push(this.getPolygonPoints(b, c, 10));
	            this.addCircle(c, c, radius);
	            //this.addCircle(c, c, radius);
	
	            this.createPolygon(true);
	        }
	    }, {
	        key: 'addPolygon',
	        value: function addPolygon(index) {
	            var useRandomRotate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	            var polygon = new _Polygon2.default(this.context);
	
	            var points = polygonPoints[index];
	
	            points.forEach(function (point) {
	                polygon.addPoint(point.x, point.y);
	            });
	
	            if (useRandomRotate) {
	                this.rotateShape(polygon, Math.random() * 45 * Math.PI / 180);
	            }
	
	            polygon.createPath(graphics, LINE_COLOR);
	            shapes.push(polygon);
	        }
	    }, {
	        key: 'addCircle',
	        value: function addCircle(x, y, radius) {
	            var circle = new _Circle2.default(this.context, x, y, radius);
	            circle.createPath(graphics, LINE_COLOR);
	            shapes.push(circle);
	            this.circle = circle;
	        }
	    }, {
	        key: 'updateRender',
	        value: function updateRender() {
	            graphics.clear();
	
	            shapes.forEach(function (polygon) {
	                polygon.createPath(graphics, LINE_COLOR);
	            });
	        }
	    }, {
	        key: 'detectCollisions',
	        value: function detectCollisions() {
	            var _this3 = this;
	
	            var dragShape = this.shapeBeingDragged;
	
	            if (!dragShape) {
	                return;
	            }
	
	            shapes.forEach(function (shape) {
	
	                if (shape !== dragShape) {
	                    var mtv = dragShape.collidesWith(shape);
	
	                    // 충돌 판정
	                    if (_this3.collisionDetected(mtv)) {
	                        _this3.moveShapeByMTV(mtv, dragShape, shape);
	                    }
	                }
	            });
	        }
	
	        /**
	         * mtv로 충돌 판정
	         * @param mtv
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'collisionDetected',
	        value: function collisionDetected(mtv) {
	            // 충돌 판정
	            if (mtv.axis != undefined || mtv.overlap !== 0) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'checkMTVAxisDirection',
	        value: function checkMTVAxisDirection(mtv, collider, collidee) {
	            if (mtv.axis === undefined) return;
	
	            var colliderCenter = _Vector2.default.fromObject(collider.getCenter()),
	                collideeCenter = _Vector2.default.fromObject(collidee.getCenter()),
	                centerVector = collideeCenter.subtract(colliderCenter),
	                centerUnitVector = _Vector2.default.fromObject(centerVector).normalize();
	
	            if (centerUnitVector.dotProduct(mtv.axis) > 0) {
	                mtv.axis.x = -mtv.axis.x;
	                mtv.axis.y = -mtv.axis.y;
	            }
	        }
	    }, {
	        key: 'moveShapeByMTV',
	
	
	        /**
	         *
	         * @param mtv
	         * @param collider 충돌한 객체
	         * @param collidee 충돌을 당한 객체
	         */
	        value: function moveShapeByMTV(mtv, collider, collidee) {
	            if (mtv.axis === undefined) {
	                mtv.axis = new _Vector2.default(1, 1);
	            }
	
	            var dx = mtv.axis.x * mtv.overlap,
	                dy = mtv.axis.y * mtv.overlap;
	
	            var dragVector = this.dragVector,
	                centerCollider = collider.getCenter(),
	                centerCollidee = collidee.getCenter(),
	                direction = new _Vector2.default(centerCollidee.x - centerCollider.x, centerCollidee.y - centerCollider.y),
	                directionNorm = direction.norm(),
	                overlapVector = new _Vector2.default(dx, dy);
	
	            /**
	             * 내적이 -1이면 반대 방향을 보는 것
	             * 내적이 0이면 수직
	             * 내적이 1인 경우 같은 방향을 가리키는 것
	             * 내적이 > 0.8 다면 같은 방향을 보고 있는 상태
	             */
	            var dot = dragVector.dotProduct(overlapVector);
	
	            if (dot < 0) {
	                dx = -dx;
	                dy = -dy;
	            }
	
	            var c = collidee.getCenter(),
	                to = new _Vector2.default(dx, dy),
	                toNormalize = to.clone().norm(),
	                dotTo = directionNorm.dotProduct(toNormalize),
	                center = new _Vector2.default(c.x, c.y);
	            to = center.clone().subtract(to);
	
	            // 두 객체의 방향 벡터와 밀어내는 백터(to)의 내적이 0보다 클 경우, 즉 밀어 내는 방향이 밀어내는 방향일 때만 적용
	            if (dotTo >= 0) {
	                _Painter2.default.drawArrow(window.g, center, to, false, 1, ARROW_COLOR);
	                //Painter.drawPoint(window.g, this.circle.getCenter(), false, 10, 0xff3300, 0.2);
	                collidee.move(dx, dy);
	            }
	        }
	    }, {
	        key: 'rotateShape',
	        value: function rotateShape(shape, degrees) {
	            //degrees = 90;
	            var points = shape.points;
	
	            if (points) {
	                var center = shape.getCenter();
	
	                for (var i = 0; i < points.length; i++) {
	                    var point = points[i];
	                    points[i] = this.rotationPoint(center, point, degrees);
	                }
	            }
	        }
	
	        /**
	         * 회전하는 좌표 구하기
	         * @param pivot 사각형의 중심점
	         * @param point 계산하고 싶은 포인트
	         * @param degrees 회전각 degrees
	         * @returns {{x: (number|*), y: (number|*)}}
	         */
	
	    }, {
	        key: 'rotationPoint',
	        value: function rotationPoint(pivot, point, degrees) {
	            var diffX = point.x - pivot.x;
	            var diffY = point.y - pivot.y;
	            var dist = Math.sqrt(diffX * diffX + diffY * diffY);
	            var ca = Math.atan2(diffY, diffX) * (180 / Math.PI);
	            var na = (ca + degrees) % 360 * (Math.PI / 180);
	            var x = pivot.x + dist * Math.cos(na) + 0.5 | 0;
	            var y = pivot.y + dist * Math.sin(na) + 0.5 | 0;
	            return { x: x, y: y };
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown() {
	            var _this4 = this;
	
	            debugGraphics.clear();
	
	            var currentPoint = _Vector2.default.fromObject(_Mouse2.default.global);
	
	            shapes.forEach(function (shape) {
	                if (shape.isPointInPath(currentPoint.x, currentPoint.y)) {
	                    _this4.shapeBeingDragged = shape;
	                    _this4.mouseDownPoint.x = currentPoint.x;
	                    _this4.mouseDownPoint.y = currentPoint.y;
	                    _this4.lastdrag.x = currentPoint.x;
	                    _this4.lastdrag.y = currentPoint.y;
	                }
	            });
	        }
	    }, {
	        key: 'onMouseMove',
	        value: function onMouseMove() {
	            debugGraphics.clear();
	
	            var currentPoint = void 0,
	                dragVector = void 0;
	
	            if (this.shapeBeingDragged) {
	                currentPoint = _Vector2.default.fromObject(_Mouse2.default.global);
	
	                this.dragVector = dragVector = currentPoint.clone().subtract(this.lastdrag);
	
	                this.shapeBeingDragged.move(dragVector.x, dragVector.y);
	
	                this.lastdrag.x = currentPoint.x;
	                this.lastdrag.y = currentPoint.y;
	
	                this.detectCollisions();
	                this.updateRender();
	            }
	        }
	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp() {
	            debugGraphics.clear();
	            this.shapeBeingDragged = undefined;
	        }
	
	        /////////////////////////////////////////////////////////////////////////////
	        //
	        // Test 함수
	        //
	        /////////////////////////////////////////////////////////////////////////////
	
	
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(e) {
	            switch (e.keyCode) {
	                case _KeyCode2.default.ESCAPE:
	                    console.clear();
	
	                    if (window.g) {
	                        window.g.clear();
	                    }
	
	                    break;
	                case _KeyCode2.default.SPACE:
	                    //
	                    break;
	                case _KeyCode2.default.NUMBER_1:
	                    //
	                    break;
	                case _KeyCode2.default.NUMBER_2:
	                    //
	                    break;
	            }
	        }
	    }]);
	
	    return Test;
	}(PIXI.Container);
	
	exports.default = Test;

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Point = function Point(x, y) {
	    _classCallCheck(this, Point);
	
	    this.x = x;
	    this.y = y;
	};
	
	exports.default = Point;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(348);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(350);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(341);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Circle = function (_Shape) {
	    _inherits(Circle, _Shape);
	
	    function Circle(context, x, y, radius) {
	        _classCallCheck(this, Circle);
	
	        var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));
	
	        _this.name = 'Circle';
	        _this.context = context;
	        _this.x = x;
	        _this.y = y;
	        _this.radius = radius;
	        return _this;
	    }
	
	    /**
	     * 중점 좌표 반환
	     * @returns {PIXI.Point|*|svg.Point}
	     */
	
	
	    _createClass(Circle, [{
	        key: 'getCenter',
	        value: function getCenter() {
	            return new PIXI.Point(this.x, this.y);
	        }
	    }, {
	        key: 'collidesWith',
	        value: function collidesWith(shape) {
	            if (shape.radius === undefined) {
	                return this.polygonCollidesWithCircle(shape, this);
	            } else {
	                return this.circleCollidesWithCircle(this, shape);
	            }
	        }
	
	        /*
	        collidesWith(shape)
	        {
	            var axes = shape.getAxes(), distance;
	             if (axes === undefined) { //원
	                distance = Math.sqrt(
	                    Math.pow(shape.x - this.x, 2) +
	                    Math.pow(shape.y - this.y, 2));
	                return distance < Math.abs(this.radius + shape.radius);
	            }
	            else {
	                return this.polygonCollidesWithCircle(shape, this);
	            }
	        }
	        */
	
	    }, {
	        key: 'getPolygonPointClosestToCircle',
	        value: function getPolygonPointClosestToCircle(polygon, circle) {
	            var min = Number.MAX_VALUE,
	                circleVector = _Vector2.default.fromObject(circle),
	                length = void 0,
	                testPointVector = void 0,
	                closestPoint = void 0;
	
	            for (var i = 0; i < polygon.points.length; i++) {
	                testPointVector = _Vector2.default.fromObject(polygon.points[i]);
	                testPointVector.index = i;
	                length = testPointVector.clone().distance(circle);
	
	                if (length < min) {
	                    min = length;
	                    closestPoint = testPointVector;
	                }
	            }
	
	            return closestPoint.clone();
	        }
	
	        /**
	         * 다각형과 원형 충돌 검사
	         * @param polygon
	         * @param circle
	         * @returns {boolean}
	         */
	        /*polygonCollidesWithCircle(polygon, circle)
	        {
	            var min = Number.MAX_VALUE,
	                axes = polygon.getAxes(),
	                closestPoint = this.getPolygonPointClosestToCircle(polygon, circle);
	             axes.push(this.getCircleAxis(circle, closestPoint));
	             return !polygon.separationOnAxes(axes, circle);
	        }*/
	
	    }, {
	        key: 'getCircleAxis',
	        value: function getCircleAxis(circle, closestPoint) {
	            var v1 = new _Vector2.default(circle.x, circle.y),
	                v2 = new _Vector2.default(closestPoint.x, closestPoint.y),
	                surfaceVector = v1.subtract(v2);
	
	            _Painter2.default.drawPoint(window.g, closestPoint, false, 5, 0xff3300, 0.3);
	            //Painter.drawLine(window.g, Vector.fromObject(circle), Vector.fromObject(closestPoint), false, 1, 0xff3300, 0.3);
	
	            return surfaceVector.normalize();
	        }
	    }, {
	        key: 'project',
	        value: function project(axis) {
	            var scalars = [],
	                point = new PIXI.Point(this.x, this.y),
	                pointVector = new _Vector2.default(point.x, point.y),
	                dotProduct = pointVector.dotProduct(axis);
	
	            scalars.push(dotProduct);
	            scalars.push(dotProduct + this.radius);
	            scalars.push(dotProduct - this.radius);
	
	            return new _Projection2.default(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars));
	        }
	    }, {
	        key: 'getAxes',
	        value: function getAxes() {
	            return undefined;
	        }
	    }, {
	        key: 'createPath',
	        value: function createPath(graphics) {
	            var lineColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xFFFFFF;
	
	            graphics.lineStyle(1, lineColor);
	            graphics.moveTo(this.x + this.radius, this.y);
	            graphics.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	        }
	    }, {
	        key: 'move',
	        value: function move(dx, dy) {
	            this.x += dx;
	            this.y += dy;
	        }
	    }, {
	        key: 'isPointInPath',
	        value: function isPointInPath(x, y) {
	            this.context.save();
	            this.context.save();
	            this.context.beginPath();
	            this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	            var isPointInPath = this.context.isPointInPath(x, y);
	            this.context.restore();
	            return isPointInPath;
	        }
	    }]);
	
	    return Circle;
	}(_Shape3.default);
	
	exports.default = Circle;

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MTV = __webpack_require__(349);
	
	var _MTV2 = _interopRequireDefault(_MTV);
	
	var _Painter = __webpack_require__(341);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Shape = function () {
	    function Shape() {
	        _classCallCheck(this, Shape);
	
	        this.interactive = true;
	    }
	
	    _createClass(Shape, [{
	        key: 'minimumTranslationVector',
	        value: function minimumTranslationVector(axes, shape) {
	            var minimumOverlap = Number.MAX_VALUE,
	                overlap,
	                axisWithSmallestOverlap,
	                axis,
	                projection1,
	                projection2;
	
	            for (var i = 0; i < axes.length; ++i) {
	                axis = axes[i];
	                projection1 = shape.project(axis);
	                projection2 = this.project(axis);
	                overlap = projection1.getOverlap(projection2);
	
	                /*Painter.drawLine(window.g,
	                    {x:axis.x * projection1.min, y:axis.y * projection1.min},
	                    {x:axis.x * projection2.max, y:axis.y * projection2.max},
	                    false
	                );*/
	
	                if (overlap === 0) {
	                    //충돌 없슴.
	                    return new _MTV2.default(0);
	                } else {
	                    if (overlap < minimumOverlap) {
	                        minimumOverlap = overlap;
	                        axisWithSmallestOverlap = axis;
	                    }
	                }
	            }
	
	            return new _MTV2.default(minimumOverlap, axisWithSmallestOverlap);
	        }
	
	        /**
	         * 두 다각형 사이에서 충돌
	         * @param p1
	         * @param p2
	         * @returns {*}
	         */
	
	    }, {
	        key: 'polygonCollidesWithPolygon',
	        value: function polygonCollidesWithPolygon(p1, p2) {
	            var mtv1 = p1.minimumTranslationVector(p1.getAxes(), p2),
	                mtv2 = p1.minimumTranslationVector(p2.getAxes(), p2);
	
	            if (mtv1.overlap === 0 && mtv2.overlap === 0) {
	                return new _MTV2.default(0);
	            } else {
	                return mtv1.overlap < mtv2.overlap ? mtv1 : mtv2;
	            }
	        }
	
	        /**
	         * 두 원형에 대한 충돌
	         * @param c1
	         * @param c2
	         */
	
	    }, {
	        key: 'circleCollidesWithCircle',
	        value: function circleCollidesWithCircle(c1, c2) {
	            var distance = Math.sqrt(Math.pow(c2.x - c1.x, 2) + Math.pow(c2.y - c1.y, 2)),
	                overlap = Math.abs(c1.radius + c2.radius) - distance;
	
	            return overlap < 0 ? new _MTV2.default(0) : new _MTV2.default(overlap);
	        }
	
	        /**
	         * 다각형과 원형 충돌 검사
	         * @param polygon
	         * @param circle
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'polygonCollidesWithCircle',
	        value: function polygonCollidesWithCircle(polygon, circle) {
	            var axes = polygon.getAxes(),
	                closestPoint = circle.getPolygonPointClosestToCircle(polygon, circle);
	
	            // Painter.drawPoint(window.g, closestPoint, false, 5, 0xE57373);
	
	            axes.push(circle.getCircleAxis(circle, closestPoint));
	
	            return polygon.minimumTranslationVector(axes, circle);
	        }
	
	        /**
	         * 축에 투영하여 분리가 있으면 true 반환(충돌되지 않았다면 true 반환)
	         * @param otherShape
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'collidesWith',
	        value: function collidesWith(shape) {
	            var axes = this.getAxes().concat(shape.getAxes());
	            return !this.separationOnAxes(axes, shape);
	        }
	
	        /**
	         * 분리축이 있는지 여부 (분리축이 있다는 이야기는 충돌하지 않았다는 이야기 입니다.)
	         * @param axes
	         * @param shape
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'separationOnAxes',
	        value: function separationOnAxes(axes, shape) {
	            for (var i = 0; i < axes.length; ++i) {
	                var axis = axes[i];
	                var projection1 = shape.project(axis);
	                var projection2 = this.project(axis);
	
	                if (!projection1.overlaps(projection2)) {
	                    return true; // don't have to test remaining axes
	                }
	            }
	            return false;
	        }
	    }]);
	
	    return Shape;
	}();
	
	exports.default = Shape;

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MTV =
	/**
	 * 최소 이동 벡터
	 * Minimum Translation Vector (MTV)
	 * @param axis
	 * @param overlap
	 */
	function MTV() {
	    var overlap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
	    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	
	    _classCallCheck(this, MTV);
	
	    this.axis = axis;
	    this.overlap = overlap;
	};
	
	exports.default = MTV;

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Projection = function () {
	    function Projection(min, max) {
	        _classCallCheck(this, Projection);
	
	        this.min = min;
	        this.max = max;
	    }
	
	    _createClass(Projection, [{
	        key: "getOverlap",
	        value: function getOverlap(projection) {
	            var overlap;
	
	            if (!this.overlaps(projection)) return 0;
	
	            if (this.max > projection.max) {
	                overlap = projection.max - this.min;
	            } else {
	                overlap = this.max - projection.min;
	            }
	            return overlap;
	        }
	    }, {
	        key: "overlaps",
	        value: function overlaps(projection) {
	            return this.max > projection.min && projection.max > this.min;
	        }
	    }]);
	
	    return Projection;
	}();
	
	exports.default = Projection;

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(348);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(346);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(350);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(341);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Polygon = function (_Shape) {
	    _inherits(Polygon, _Shape);
	
	    function Polygon(context) {
	        _classCallCheck(this, Polygon);
	
	        var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this));
	
	        _this.points = [];
	        _this.context = context;
	        _this.name = _this.points.length + ' Polygon';
	        return _this;
	    }
	
	    /**
	     * 중점 좌표
	     * @returns {PIXI.Point|*|svg.Point}
	     */
	
	
	    _createClass(Polygon, [{
	        key: 'getCenter',
	        value: function getCenter() {
	            var pointSum = new PIXI.Point();
	
	            for (var i = 0, point; i < this.points.length; ++i) {
	                point = this.points[i];
	                pointSum.x += point.x;
	                pointSum.y += point.y;
	            }
	            return new PIXI.Point(pointSum.x / this.points.length, pointSum.y / this.points.length);
	        }
	
	        /**
	         * 충돌 체크 (분리축이 없으면 충돌), !separationOnAxes
	         * @param shape
	         * @returns {*}
	         */
	
	    }, {
	        key: 'collidesWith',
	        value: function collidesWith(shape) {
	            if (shape.radius !== undefined) {
	                return this.polygonCollidesWithCircle(this, shape);
	            } else {
	                return this.polygonCollidesWithPolygon(this, shape);
	            }
	        }
	
	        /*
	        collidesWith(shape)
	        {
	            var axes = shape.getAxes();
	             if (axes === undefined) {
	                return shape.polygonCollidesWithCircle(this, shape);
	            }
	            else {
	                axes.concat(this.getAxes());
	                return !this.separationOnAxes(axes, shape);
	            }
	        }
	        */
	
	        /**
	         * 투영
	         * @param axis
	         * @returns {Projection}
	         */
	
	    }, {
	        key: 'project',
	        value: function project(axis) {
	            var scalars = [],
	                v = new _Vector2.default();
	
	            this.points.forEach(function (point) {
	                v.x = point.x;
	                v.y = point.y;
	                scalars.push(v.dotProduct(axis));
	            });
	
	            return new _Projection2.default(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars));
	        }
	
	        /**
	         * 축 구하기 (edge에 노말을 축으로 합니다)
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'getAxes',
	        value: function getAxes() {
	            var v1 = new _Vector2.default(),
	                v2 = new _Vector2.default(),
	                axes = [];
	
	            for (var i = 0; i < this.points.length - 1; i++) {
	                v1.x = this.points[i].x;
	                v1.y = this.points[i].y;
	
	                v2.x = this.points[i + 1].x;
	                v2.y = this.points[i + 1].y;
	
	                // 모서리에서 수직인 노말(법선) 벡터를 만듭니다. (축 생성)
	                axes.push(v1.edge(v2).perpendicular().normalize());
	            }
	
	            v1.x = this.points[this.points.length - 1].x;
	            v1.y = this.points[this.points.length - 1].y;
	
	            v2.x = this.points[0].x;
	            v2.y = this.points[0].y;
	
	            // 모서리에서 수직인 노말(법선) 벡터를 만듭니다. (축 생성)
	            axes.push(v1.edge(v2).perpendicular().normalize());
	            return axes;
	        }
	    }, {
	        key: 'createPath',
	        value: function createPath(graphics) {
	            var lineColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xFFFFFF;
	
	            graphics.lineStyle(1, lineColor);
	            graphics.moveTo(this.points[0].x, this.points[0].y);
	
	            for (var i = 0; i < this.points.length; i++) {
	                graphics.lineTo(this.points[i].x, this.points[i].y);
	            }
	            graphics.lineTo(this.points[0].x, this.points[0].y);
	        }
	    }, {
	        key: 'move',
	        value: function move(dx, dy) {
	            for (var i = 0; i < this.points.length; ++i) {
	                var point = this.points[i];
	                point.x += dx;
	                point.y += dy;
	            }
	        }
	    }, {
	        key: 'isPointInPath',
	        value: function isPointInPath(x, y) {
	            if (this.points.length === 0) {
	                return;
	            }
	
	            this.context.save();
	            this.context.beginPath();
	            this.context.moveTo(this.points[0].x, this.points[0].y);
	
	            for (var i = 0; i < this.points.length; i++) {
	                this.context.lineTo(this.points[i].x, this.points[i].y);
	            }
	
	            this.context.lineTo(this.points[0].x, this.points[0].y);
	            this.context.closePath();
	
	            var isPointInPath = this.context.isPointInPath(x, y);
	            this.context.restore();
	            return isPointInPath;
	        }
	    }, {
	        key: 'addPoint',
	        value: function addPoint(x, y) {
	            this.points.push(new _Point2.default(x, y));
	            this.name = this.points.length + ' Polygon';
	        }
	    }]);
	
	    return Polygon;
	}(_Shape3.default);
	
	exports.default = Polygon;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0dKSy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFpbnRlci5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9TaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L01UVi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9Qb2x5Z29uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uS2V5VXAiLCJtcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltRnJhbWUiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJyZXNpemUiLCJlIiwia2V5Q29kZSIsIlRJTERFIiwiRVNDIiwiU1BBQ0UiLCJET1dOX0FSUk9XIiwiVVBfQVJST1ciLCJMRUZUX0FSUk9XIiwiUklHSFRfQVJST1ciLCJCQUNLX1NQQUNFIiwiY29uc29sZSIsImNsZWFyIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidmVjMiIsImRvdCIsImNvZWZmIiwiYXRhbjIiLCJob3Jpem9udGFsQW5nbGUiLCJ2ZXJ0aWNhbEFuZ2xlIiwiaG9yaXpvbnRhbEFuZ2xlRGVnIiwiYW5nbGUiLCJueCIsImNvcyIsInNpbiIsIm55Iiwicm90YXRlIiwicm90YXRpb24iLCJyb3RhdGVUbyIsInJvdGF0ZUJ5IiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3FydCIsImRpc3RhbmNlU3EiLCJkaXJlY3Rpb24iLCJkeCIsImR5IiwibGVuZ3RoU3EiLCJhIiwiYiIsInYiLCJjbG9uZSIsInJldCIsIm11bHRpcGx5U2NhbGFyIiwiYyIsInIiLCJhYyIsImJjIiwidmVjMSIsInRvIiwiYWRkIiwiTW91c2UiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJwcmV2VGltZSIsImN1cnJlbnRUaW1lIiwiZGlmZlgiLCJkaWZmWSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImdsb2JhbCIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIiwiR0pLIiwidmVydGljZXMiLCJhdmciLCJjb3VudCIsImkiLCJpbmRleCIsIm1heFByb2R1Y3QiLCJkb3RQcm9kdWN0IiwicHJvZHVjdCIsInZlcnRpY2VzMSIsInZlcnRpY2VzMiIsImluZGV4T2ZGdXJ0aGVzdFBvaW50IiwiaiIsIm5lZ2F0ZSIsImxvZyIsInN0ciIsIml0ZXJDb3VudCIsImQiLCJhbyIsImFiIiwiYWJwZXJwIiwiYWNwZXJwIiwic2ltcGxleCIsIkFycmF5IiwicG9zaXRpb24xIiwiYXZlcmFnZVBvaW50IiwicG9zaXRpb24yIiwic3VwcG9ydCIsInRyaXBsZVByb2R1Y3QiLCJwZXJwZW5kaWN1bGFyIiwibm9ybSIsInBvaW50cyIsImkwIiwieDAiLCJuIiwiaHVsbCIsIm0iLCJpaCIsImllIiwiY3Jvc3MiLCJuZXdQb2ludHMiLCJwb2ludCIsInB1c2giLCJkZWJ1Z1ZlcnRpY2VzIiwiZm9yRWFjaCIsInZlcnRleCIsImNvbnNvbGVWZXJ0aWNlcyIsImlzRml4ZWQiLCJQYWludGVyIiwicGF0aCIsInYxIiwidjIiLCJkaWZmIiwiY29udmV4SHVsbFBhdGgiLCJjcmVhdGVDb252ZXhIdWxsIiwiZHJhd1BvbHlnb24iLCJsaW5lV2lkdGgiLCJjb2xvciIsImFscGhhIiwiZ3JhcGhpY3MiLCJnIiwibGluZVN0eWxlIiwidmVjMCIsIm1hZ25pZmljYXRpb24iLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJpbmciLCJ0ZXh0IiwiVGV4dCIsImZpbGwiLCJpc0NsZWFyIiwicmFkaXVzIiwiYmVnaW5GaWxsIiwiZHJhd0NpcmNsZSIsImVuZEZpbGwiLCJib3VuZHMiLCJ0aGlja25lc3MiLCJkcmF3UmVjdCIsInJlY3QiLCJsdCIsInJ0IiwicmIiLCJsYiIsInAxIiwicDIiLCJwMCIsIm1vdmVQb2ludCIsInRvUG9pbnQiLCJsZWZ0IiwiaW52ZXJ0IiwicmlnaHQiLCJHcmFwaGljcyIsImRlYnVnR3JhcGhpY3MiLCJzaGFwZXMiLCJMSU5FX0NPTE9SIiwiQVJST1dfQ09MT1IiLCJwb2x5Z29uUG9pbnRzIiwiVGVzdCIsImlzSW5pdCIsImludGVyYWN0aXZlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJpbml0aWFsaXplIiwibW91c2VEb3duUG9pbnQiLCJQb2ludCIsImxhc3RkcmFnIiwic2hhcGVCZWluZ0RyYWdnZWQiLCJ1bmRlZmluZWQiLCJjcmVhdGVQb2x5Z29uTWFudWFsIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uIiwiaGl0QXJlYSIsIlJlY3RhbmdsZSIsInR4IiwidHkiLCJ0b1JhZGlhbiIsImRlZ3JlZSIsInVzZVJhbmRvbVJvdGF0ZSIsInBvbHlnb24iLCJhZGRQb2ludCIsInJvdGF0ZVNoYXBlIiwiY3JlYXRlUGF0aCIsImRpYW1ldGVyIiwic3BhY2UiLCJnZXRQb2x5Z29uUG9pbnRzIiwiYWRkQ2lyY2xlIiwiY3JlYXRlUG9seWdvbiIsImNpcmNsZSIsImRyYWdTaGFwZSIsInNoYXBlIiwibXR2IiwiY29sbGlkZXNXaXRoIiwiY29sbGlzaW9uRGV0ZWN0ZWQiLCJtb3ZlU2hhcGVCeU1UViIsImF4aXMiLCJvdmVybGFwIiwiY29sbGlkZXIiLCJjb2xsaWRlZSIsImNvbGxpZGVyQ2VudGVyIiwiZnJvbU9iamVjdCIsImdldENlbnRlciIsImNvbGxpZGVlQ2VudGVyIiwiY2VudGVyVmVjdG9yIiwiY2VudGVyVW5pdFZlY3RvciIsImRyYWdWZWN0b3IiLCJjZW50ZXJDb2xsaWRlciIsImNlbnRlckNvbGxpZGVlIiwiZGlyZWN0aW9uTm9ybSIsIm92ZXJsYXBWZWN0b3IiLCJ0b05vcm1hbGl6ZSIsImRvdFRvIiwiY2VudGVyIiwiZHJhd0Fycm93IiwibW92ZSIsInJvdGF0aW9uUG9pbnQiLCJwaXZvdCIsImRpc3QiLCJjYSIsIm5hIiwiaXNQb2ludEluUGF0aCIsImRldGVjdENvbGxpc2lvbnMiLCJ1cGRhdGVSZW5kZXIiLCJFU0NBUEUiLCJOVU1CRVJfMSIsIk5VTUJFUl8yIiwiQ2lyY2xlIiwibmFtZSIsInBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUiLCJjaXJjbGVDb2xsaWRlc1dpdGhDaXJjbGUiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJjaXJjbGVWZWN0b3IiLCJ0ZXN0UG9pbnRWZWN0b3IiLCJjbG9zZXN0UG9pbnQiLCJkaXN0YW5jZSIsInN1cmZhY2VWZWN0b3IiLCJkcmF3UG9pbnQiLCJzY2FsYXJzIiwicG9pbnRWZWN0b3IiLCJhcHBseSIsImxpbmVDb2xvciIsImFyYyIsInNhdmUiLCJiZWdpblBhdGgiLCJyZXN0b3JlIiwiU2hhcGUiLCJheGVzIiwibWluaW11bU92ZXJsYXAiLCJheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCIsInByb2plY3Rpb24xIiwicHJvamVjdGlvbjIiLCJwcm9qZWN0IiwiZ2V0T3ZlcmxhcCIsIm10djEiLCJtaW5pbXVtVHJhbnNsYXRpb25WZWN0b3IiLCJnZXRBeGVzIiwibXR2MiIsImMxIiwiYzIiLCJwb3ciLCJnZXRQb2x5Z29uUG9pbnRDbG9zZXN0VG9DaXJjbGUiLCJnZXRDaXJjbGVBeGlzIiwiY29uY2F0Iiwic2VwYXJhdGlvbk9uQXhlcyIsIm92ZXJsYXBzIiwiTVRWIiwiUHJvamVjdGlvbiIsInByb2plY3Rpb24iLCJQb2x5Z29uIiwicG9pbnRTdW0iLCJwb2x5Z29uQ29sbGlkZXNXaXRoUG9seWdvbiIsImVkZ2UiLCJjbG9zZVBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQyxjQUFZO0FBQ1RBLFlBQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QixhQUFNQyxPQUFPLElBQUlDLElBQUosRUFBYjtBQUNILE1BRkQ7QUFHSCxFQUpBLEdBQUQ7O0FBTUEsS0FBSUMsZUFBSjtBQUFBLEtBQVlDLGlCQUFaO0FBQUEsS0FBc0JDLGNBQXRCO0FBQUEsS0FBNkJDLGFBQTdCO0FBQUEsS0FBbUNDLGtCQUFuQzs7S0FFTUwsSTtBQUNGLHFCQUFjO0FBQUE7O0FBQ1YsY0FBS00sSUFBTDtBQUNB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bnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlJztcbmltcG9ydCBNb3VzZSBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL01vdXNlXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG4gICAgfVxufSgpKTtcblxubGV0IGNhbnZhcywgcmVuZGVyZXIsIHN0YWdlLCB0ZXN0LCBjb250YWluZXI7XG5cbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG4gICAgICAgIHJlbmRlcmVyID0gbmV3IFBJWEkuQ2FudmFzUmVuZGVyZXIoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCB7XG4gICAgICAgICAgICB2aWV3OiBjYW52YXMsXG4gICAgICAgICAgICBhdXRvUmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDMzMzgzRFxuICAgICAgICB9KTtcblxuICAgICAgICBNb3VzZS5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgICAgIC8vIOychOy5mOqwgCDsoJXsiJjqsIAg7JWE64uQ6rK97JqwIO2dkOumv+2VmOqyjCDrs7TsnbTripQg66y47KCc6rCAIOyeiOyWtFxuICAgICAgICAvLyDroIzrjZTrn6zsnZgg7JyE7LmY66W8IOygleyImOuhnCDsl7DsgrDrkKAg7IiYIOyeiOuPhOuhnSDtlZzri6QuXG4gICAgICAgIC8vcmVuZGVyZXIucm91bmRQaXhlbHMgPSB0cnVlO1xuXG4gICAgICAgIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBzdGFnZS5hZGRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHRlc3QgPSBuZXcgVGVzdChyZW5kZXJlcik7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRlc3QpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTG9vcCgpO1xuICAgICAgICB0aGlzLnJlc2l6ZVdpbmRvdygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMb29wIChtcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShtcyk7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGVMb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZShtcykge1xuICAgICAgICB0ZXN0LnVwZGF0ZSgpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpO1xuICAgIH1cblxuICAgIHJlc2l6ZVdpbmRvdygpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvKipcbiAgICAgICAgICog7LqU67KE7IqkIOyCrOydtOymiOyZgCDrlJTsiqTtlIzroIjsnbQg7IKs7J207KaIIOyEpOyglVxuICAgICAgICAgKiDroIjti7Drgpgg6re4656Y7ZS9IOyngOybkCDsvZTrk5xcbiAgICAgICAgICovXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQSVhJIHJlbmRlcmVyIOumrOyCrOydtOymiFxuICAgICAgICAgKiBQSVhJIOyXkOqyjCB2aWV3cG9ydCDsgqzsnbTspogg67OA6rK9IOyVjOumvFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICB0ZXN0LnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlVcCAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlRJTERFOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5ET1dOX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVVBfQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MRUZUX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUklHSFRfQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5CQUNLX1NQQUNFOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L3NhdC9pbmRleC5qcyIsIlxuXG5jb25zdCBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuXG5mdW5jdGlvbiByYW5kb20gKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhZGlhbjJkZWdyZWVzIChyYWQpIHtcbiAgICByZXR1cm4gcmFkICogZGVncmVlcztcbn1cblxuZnVuY3Rpb24gZGVncmVlczJyYWRpYW4gKGRlZykge1xuICAgIHJldHVybiBkZWcgLyBkZWdyZWVzO1xufVxuXG5cbi8qKlxuICogVmljdG9yLmpz66W8IEVTNuuhnCDrs4DtmZjtlZjsl6wg7IKs7Jqp7ZWY6rOgIOyeiOyKteuLiOuLpC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhrdWVuZy92aWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yXG57XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbUFycmF5KFs0MiwgMjFdKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21BcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHdpdGggdGhlIHggYW5kIHkgdmFsdWVzIGF0IGluZGV4IDAgYW5kIDEgcmVzcGVjdGl2ZWx5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGFyclswXSB8fCAwLCBhcnJbMV0gfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbU9iamVjdCh7IHg6IDQyLCB5OiAyMSB9KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21PYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgZm9yIHggYW5kIHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tT2JqZWN0KG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKG9iai54IHx8IDAsIG9iai55IHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuIFdpbGwgYWxzbyB3b3JrIHdpdGhvdXQgdGhlIGBuZXdgIGtleXdvcmRcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IFZlY3Rvcig0MiwgMTMzNyk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBWYWx1ZSBvZiB0aGUgeCBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVmFsdWUgb2YgdGhlIHkgYXhpc1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMClcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWCBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeToxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBZIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGQodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggKyBiLngsIGEueSArIGIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIGJvdGggdmVjdG9yIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWCBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBZIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0KHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3QodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1YnRyYWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLSBiLngsIGEueSAtIGIueSk7XG4gICAgfVxuXG5cbiAgICBlZGdlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZWRnZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdChhLCBiKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXIoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclgoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDIwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJZKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEwMCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIHggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgeSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSBhIGF4aXMgdmFsdWVzIG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGUodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGUoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAvIGIueCwgYS55IC8gYi55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRYKClcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFkoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WSgpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuaW52ZXJ0WCgpO1xuICAgICAgICB0aGlzLmludmVydFkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmVnYXRlKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHYgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgdi54ID0gLXZlYy54O1xuICAgICAgICB2LnkgPSAtdmVjLnk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBYIGF4aXMgYnkgWCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWSBheGlzIGJ5IFkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdmFsdWVzIGZyb20gYSBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5KHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbXVsdGlwbHlTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHNjYWxhciwgdmVjdG9yLnkgKiBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54IC8gc2NhbGFyLCB2ZWN0b3IueSAvIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoOTAg64+EIO2ajOyghClcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBwZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSAtdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKC05MCDrj4Qg7ZqM7KCEKVxuICAgICAqL1xuICAgIHJldHVyblBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy55LCAtdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZXR1cm5QZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSB2ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IC12ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog67KE66a8XG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJ1bmNhdGUodmVjLCBsZW5ndGgpXG4gICAge1xuICAgICAgICBjb25zdCByZXQgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoU3EgPSB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICAgICAgaWYgKGxlbmd0aFNxID4gbGVuZ3RoICogbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXQubXVsdGlwbHlTY2FsYXIobGVuZ3RoIC8gTWF0aC5zcXJ0KGxlbmd0aFNxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbm9ybWFsaXplKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpdmlkZShuZXcgVmVjdG9yKGxlbmd0aCwgbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBub3JtKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGFic29sdXRlIHZlY3RvciBheGlzIGlzIGdyZWF0ZXIgdGhhbiBgbWF4YCwgbXVsdGlwbGllcyB0aGUgYXhpcyBieSBgZmFjdG9yYFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGltaXQoODAsIDAuOSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjkwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIGZvciBib3RoIHggYW5kIHkgYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmYWN0b3IgRmFjdG9yIGJ5IHdoaWNoIHRoZSBheGlzIGFyZSB0byBiZSBtdWx0aXBsaWVkIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsaW1pdChtYXgsIGZhY3RvcilcbiAgICB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLngpID4gbWF4KXsgdGhpcy54ICo9IGZhY3RvcjsgfVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55KSA+IG1heCl7IHRoaXMueSAqPSBmYWN0b3I7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21pemVzIGJvdGggdmVjdG9yIGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemUobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MGApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NjcsIHk6NzNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpLCB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHRoaXMueCA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHRoaXMueSA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IHJhbmRvbWl6ZXMgZWl0aGVyIGF4aXMgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZUFueShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo3N1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemVBbnkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBpZiAoISEgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGFuIGludGVnZXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdW5mbG9hdCgpXG4gICAge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGEgY2VydGFpbiBwcmVjaXNpb25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFByZWNpc2lvbiAoZGVmYXVsdDogOClcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0ZpeGVkKHByZWNpc2lvbilcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJlY2lzaW9uID09PSAndW5kZWZpbmVkJykgeyBwcmVjaXNpb24gPSA4OyB9XG4gICAgICAgIHRoaXMueCA9IHRoaXMueC50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBYIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gKDEgLSBhbW91bnQpICogdGhpcy54ICsgYW1vdW50ICogdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBZIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WSh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WSh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0gKDEgLSBhbW91bnQpICogdGhpcy55ICsgYW1vdW50ICogdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4KHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5taXhYKHZlYywgYW1vdW50KTtcbiAgICAgICAgdGhpcy5taXhZKHZlYywgYW1vdW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFByb2R1Y3RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jbG9uZSgpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBBIGNsb25lIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNsb25lKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVgodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBZIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlZKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBhbmQgWSBjb21wb25lbnRzIGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb3B5WCh2ZWMpO1xuICAgICAgICB0aGlzLmNvcHlZKHZlYyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmVjdG9yIHRvIHplcm8gKDAsMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICpcdFx0IHZhcjEuemVybygpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MCwgeTowXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB6ZXJvKClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kb3QodmVjMik7XG4gICAgICogICAgIC8vID0+IDIzMDAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEb3QgcHJvZHVjdFxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZG90KHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjMi54ICsgdGhpcy55ICogdmVjMi55O1xuICAgIH1cblxuXG4gICAgZG90UHJvZHVjdCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkb3RQcm9kdWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55O1xuICAgIH1cblxuXG4gICAgY3Jvc3ModmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy54ICogdmVjMi55KSAtICh0aGlzLnkgKiB2ZWMyLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi55IC0gYS55ICogYi54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAgICAgKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UcmlwbGVfcHJvZHVjdCNWZWN0b3JfdHJpcGxlX3Byb2R1Y3RcbiAgICAgKiDshLjqt7jrqLztirjsl5DshJwg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsKntlqXsnYQg7LC+7J2EIOuVjCDsgqzsmqlcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpcGxlUHJvZHVjdChhLCBiLCBjKVxuICAgIHtcbiAgICAgICAgY29uc3QgciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgY29uc3QgYWMgPSBhLnggKiBjLnggKyBhLnkgKiBjLnkgICAgLy8gcGVyZm9ybSBhLmRvdChjKVxuICAgICAgICAgICAgLCBiYyA9IGIueCAqIGMueCArIGIueSAqIGMueTsgICAvLyBwZXJmb3JtIGIuZG90KGMpXG5cbiAgICAgICAgLy8gcGVyZm9ybSBiICogYS5kb3QoYykgLSBhICogYi5kb3QoYylcbiAgICAgICAgci54ID0gYi54ICogYWMgLSBhLnggKiBiYztcbiAgICAgICAgci55ID0gYi55ICogYWMgLSBhLnkgKiBiYztcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIGEgdmVjdG9yIG9udG8gYW5vdGhlciB2ZWN0b3IsIHNldHRpbmcgaXRzZWxmIHRvIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnByb2plY3RPbnRvKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIHByb2plY3QgdGhpcyB2ZWN0b3Igb250b1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHByb2plY3RPbnRvKHZlYzIpXG4gICAge1xuICAgICAgICB2YXIgY29lZmYgPSAoICh0aGlzLnggKiB2ZWMyLngpKyh0aGlzLnkgKiB2ZWMyLnkpICkgLyAoKHZlYzIueCp2ZWMyLngpKyh2ZWMyLnkqdmVjMi55KSk7XG4gICAgICAgIHRoaXMueCA9IGNvZWZmICogdmVjMi54O1xuICAgICAgICB0aGlzLnkgPSBjb2VmZiAqIHZlYzIueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDshKDtmJUg67O06rCEXG4gICAgICogaHR0cDovL2RldmVsb3B1Zy5ibG9nc3BvdC5jb20vMjAxNC8wOS91bml0eS12ZWN0b3ItbGVycC5odG1sXG4gICAgICogQHBhcmFtIHZlYzFcbiAgICAgKiBAcGFyYW0gdmVjMlxuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIGxlcnAodmVjMSwgdmVjMiwgdG8pIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5hZGQoVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzEsIDEgLSB0byksIFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMyLCB0bykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOyXreyImFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyByY3AodmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEgLyB2ZWN0b3IueCwgMSAvIHZlY3Rvci55KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLnZlcnRpY2FsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICBhbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZURlZygpO1xuICAgIH1cblxuXG4gICAgZGlyZWN0aW9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgcm90YXRlKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG54ID0gKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSkgLSAodGhpcy55ICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgdmFyIG55ID0gKHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSkgKyAodGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKTtcblxuICAgICAgICB0aGlzLnggPSBueDtcbiAgICAgICAgdGhpcy55ID0gbnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICByb3RhdGVEZWcoYW5nbGUpXG4gICAge1xuICAgICAgICBhbmdsZSA9IGRlZ3JlZXMycmFkaWFuKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKHJvdGF0aW9uLXRoaXMuYW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUb0RlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVUbyhyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeShyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMuYW5nbGUoKSArIHJvdGF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeURlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVCeShyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWCBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAtIHZlYy54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VYKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hYnNEaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVgodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWSBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55IC0gdmVjLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVkoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VZKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwLjQ5ODc1NjIxMTIwODlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24oKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVNxKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlU3EodmVjKVxuICAgIHtcbiAgICAgICAgdmFyIGR4ID0gdGhpcy5kaXN0YW5jZVgodmVjKSxcbiAgICAgICAgICAgIGR5ID0gdGhpcy5kaXN0YW5jZVkodmVjKTtcblxuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb3IgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aCgpO1xuICAgICAqICAgICAvLyA9PiAxMTEuODAzMzk4ODc0OTg5NDhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uo7Iic7Z6IIOq4uOydtCDruYTqtZDrpbwg7ZWY66Ck66m0IGxlbmd0aCDrpbwg7IKs7Jqp7ZWY6riwIOuztOuLpOuKlCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY6rKMIOu5oOultOuLpC5cbiAgICAgKiBsZW5ndGgg64qUIE1hdGguc3FydCAo7KCc6rOx6re8KSDsspjrpqzrpbwg7ZWY6riwIOuVjOusuOyXkCDri6jsiJwg6ri47J20IOu5hOq1kOyLnCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY64qUIOqyg+ydtCDruaDrpoXri4jri6QuXG4gICAgICogU3F1YXJlZCBsZW5ndGggLyBtYWduaXR1ZGVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aFNxKCk7XG4gICAgICogICAgIC8vID0+IDEyNTAwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoU3EoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsZW5ndGhTcSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgfVxuXG5cbiAgICBtYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB2ZWN0b3IgaXMgKDAsIDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMuemVybygpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc1plcm8oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB0aGlzIHZlY3RvciBpcyB0aGUgc2FtZSBhcyBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMxLmlzRXF1YWxUbyh2ZWMyKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNFcXVhbFRvKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSB2ZWMyLnggJiYgdGhpcy55ID09PSB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFV0aWxpdHkgTWV0aG9kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICByZXR1cm4gJ3g6JyArIHRoaXMueCArICcsIHk6JyArIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b0FycmF5KCk7XG4gICAgICogICAgIC8vID0+IFsxMCwgMjBdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvQXJyYXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFsgdGhpcy54LCB0aGlzLnkgXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9PYmplY3QoKTtcbiAgICAgKiAgICAgLy8gPT4geyB4OiAxMCwgeTogMjAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9PYmplY3QoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmVjdG9yLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VcbntcbiAgICBzdGF0aWMgZ2V0IERFU0tUT1BfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE1PQklMRV9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLnBvaW50ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUElYSS5BcHBsaWNhdGlvbi5yZW5kZXJlclxuICAgICAqIOuenOuNlOufrOyXkOyEnCBpbnRlcmFjdGlvIOqwneyytOulvCDssLjsobDtlaAg7IiYIOyeiOyWtOyEnCDsgqzsmqntlZjroKTrqbQg66CM642U65+s66W8IOyFi+2Mhe2VtOyVvCDtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZhbHVlIHtQSVhJLldlYkdMUmVuZGVycmVyfFBJWEkuQ2FudmFzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgc3RhdGljIHNldCByZW5kZXJlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog66qo67CU7J28IOuMgOydkeydhCDsnITtlbTshJxcbiAgICAgKiBQQyDrsoTsoITsl5DshJzripQgbW91c2Ug6rCd7LK066W8LCDrqqjrsJTsnbwg67KE7KCE7JeQ7ISc64qUIHBvaW50ZXIg6rCd7LK066W8IOyFi+2Mhe2VmOuptFxuICAgICAqIGdsb2JhbCDqsJ3ssrTsl5DshJwg7LC47KGw7ZW07IScIOyijO2RnOqwkuydhCDsoITri6ztlZjrj4TroZ0g7ZWp64uI64ukLlxuICAgICAqXG4gICAgICog66eM7JW9IOyEpOygle2VmOyngCDslYrsnLzrqbQg6riw67O4IFBD66eMIOuMgOydke2VmOuPhOuhnSBtb3VzZSDqsJ3ssrTrpbwg7ISk7KCV7ZWp64uI64ukLlxuICAgICAqXG4gICAgICogRGVza3RvcCA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2VcbiAgICAgKiBNb2JpbGUgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLnBvaW50ZXJcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IG1vdXNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21vdXNlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgbW91c2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW91c2UpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlID0gdGhpcy5ERVNLVE9QX01PVVNFO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb3VzZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsLng7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2V0IGN1cnJlbnRDdXJzb3JTdHlsZSh2YWx1ZSkge1xuICAgICAgICBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRDdXJzb3JTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7J2064+ZIOqxsOumrOqwgCA1cHgg7J207ZWY7J206rOgIDUwMG1zIOyViOyXkCDrkZDrsogg7YG066at7ZWY66m0IOuNlOu4lCDtgbTrpq3snLzroZwg7J247KCVXG4gICAgICogQHBhcmFtIHByZXZQb2ludCDsnbTsoITsooztkZxcbiAgICAgKiBAcGFyYW0gY3VycmVudFBvaW50IO2YhOyerOyijO2RnFxuICAgICAqIEBwYXJhbSBwcmV2VGltZSDsnbTsoIQg7YG066atIO2DgOyehFxuICAgICAqIEBwYXJhbSBjdXJyZW50VGltZSDtmITsnqwg7YG066atIO2DgOyehFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDrjZTruJQg7YG066atIOyXrOu2gFxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RvdWJsZUNsaWNrKHByZXZQb2ludCwgY3VycmVudFBvaW50LCBwcmV2VGltZSwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgdmFyIGRpZmZYID0gY3VycmVudFBvaW50LnggLSBwcmV2UG9pbnQueDtcblxuICAgICAgICBpZiAoZGlmZlggPCAwKSB7XG4gICAgICAgICAgICBkaWZmWCA9IGRpZmZYICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGlmZlkgPSBjdXJyZW50UG9pbnQueSAtIHByZXZQb2ludC55O1xuXG4gICAgICAgIGlmIChkaWZmWSA8IDApIHtcbiAgICAgICAgICAgIGRpZmZZID0gZGlmZlkgKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWZmWCA+IDUgfHwgZGlmZlkgPiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBwcmV2VGltZSA+IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL01vdXNlLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuLyoqXG4gKiBHSksgQWxnb3JpdGhtIChHaWxiZXJ0LUpvaG5zb24tS2VlcnRoaSlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gKiBodHRwOi8vd3d3LmR5bjRqLm9yZy8yMDEwLzA0L2dqay1naWxiZXJ0LWpvaG5zb24ta2VlcnRoaS8jZ2prLXRvcFxuICogaHR0cHM6Ly93d3cuaGFyb2xkc2VycmFuby5jb20vYmxvZy92aXN1YWxpemluZy10aGUtZ2prLWNvbGxpc2lvbi1hbGdvcml0aG1cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qdWhsL2NvbGxpc2lvbi1kZXRlY3Rpb24tMmRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0pLXG57XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0byBjb21wdXRlIGF2ZXJhZ2UgY2VudGVyIChyb3VnaGx5KS4gSXQgbWlnaHQgYmUgZGlmZmVyZW50IGZyb21cbiAgICAgKiBDZW50ZXIgb2YgR3Jhdml0eSwgZXNwZWNpYWxseSBmb3IgYm9kaWVzIHdpdGggbm9udW5pZm9ybSBkZW5zaXR5LFxuICAgICAqIGJ1dCB0aGlzIGlzIG9rIGFzIGluaXRpYWwgZGlyZWN0aW9uIG9mIHNpbXBsZXggc2VhcmNoIGluIEdKS1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBhdmVyYWdlUG9pbnQodmVydGljZXMpXG4gICAge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhdmcueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZnLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2Zy54IC89IGNvdW50O1xuICAgICAgICBhdmcueSAvPSBjb3VudDtcblxuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1cnRoZXN0IHZlcnRleCBhbG9uZyBhIGNlcnRhaW4gZGlyZWN0aW9uXG4gICAgICog6ryt7KeA7KCQ6rO8IOuwqe2WpeydhCDsoITri6ztlZjrqbQg64K07KCBICjtiKzsmIEp7J2EIO2Gte2VtCDstZzrjIDroZwg66i8IOyijO2RnOydmCDsnbjrjbHsiqTrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBpbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlcywgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1heFByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzWzBdKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0ID4gbWF4UHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG1heFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1pbmtvd3NraSBzdW0gc3VwcG9ydCBmdW5jdGlvbiBmb3IgR0pLXG4gICAgICog7KeA7JuQIO2VqOyImOyXkOyEnCDtj7Trpqzqs6TsnZgg7Y+s7J247Yq47JmAIOuwqe2WpeycvOuhnCDshJzroZwg64uk66W4IOuwqe2WpeydmCDsoJDsnYQg6rWs7ZWY6rOgIE1pbmtvd3NraSBEaWZmZXJlbmNlIOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSDrsqHthLBcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgLy8gc3VidHJhY3QgKE1pbmtvd3NraSBzdW0pIHRoZSB0d28gcG9pbnRzIHRvIHNlZSBpZiBib2RpZXMgJ292ZXJsYXAnXG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDstqnrj4wg7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGNoZWNrQ29sbGlzaW9uKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKTtcblxuICAgICAgICBsZXQgaXRlckNvdW50ID0gMCwgaW5kZXggPSAwOyAgIC8vIGluZGV4IG9mIGN1cnJlbnQgdmVydGV4IG9mIHNpbXBsZXhcbiAgICAgICAgbGV0IGEsIGIsIGMsIGQsIGFvLCBhYiwgYWMsIGFicGVycCwgYWNwZXJwLCBzaW1wbGV4ID0gbmV3IEFycmF5KDMpO1xuXG4gICAgICAgIC8vIOuRkCDtj7Trpqzqs6Qg7KSR7IusIOyijO2RnOulvCDthrXtlbTshJwg67Cp7Zal7J2EIOq1rO2VqeuLiOuLpC5cbiAgICAgICAgY29uc3QgcG9zaXRpb24xID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMxKTsgLy8gbm90IGEgQ29HIGJ1dFxuICAgICAgICBjb25zdCBwb3NpdGlvbjIgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIC8vIOuwqe2WpSB2ZWN0b3JcbiAgICAgICAgZCA9IFZlY3Rvci5zdWJ0cmFjdChwb3NpdGlvbjEsIHBvc2l0aW9uMik7XG5cbiAgICAgICAgLy8gaWYgaW5pdGlhbCBkaXJlY3Rpb24gaXMgemVybyDigJMgc2V0IGl0IHRvIGFueSBhcmJpdHJhcnkgYXhpcyAod2UgY2hvb3NlIFgpXG4gICAgICAgIGlmICgoZC54ID09IDApICYmIChkLnkgPT0gMCkpIHtcbiAgICAgICAgICAgIGQueCA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgc3VwcG9ydCBhcyBpbml0aWFsIHBvaW50IG9mIHRoZSBuZXcgc2ltcGxleFxuICAgICAgICBhID0gc2ltcGxleFswXSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAvLyBzdXBwb3J0IOygkOqzvCDrsKntlqXsnbQg6rCZ7J2AIOuwqe2WpeydtCDslYTri5Ag6rK97JqwXG4gICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhLCBkKSA8PSAwKSB7XG4gICAgICAgICAgICAvLyDrp4jsp4Drp4nsl5Ag7LaU6rCAIOuQnCDsoJDsnbQgZOydmCDrsKntlqXsnLzroZwg7JuQ7KCQ7J2EIOyngOuCmOy5mOyngCDslYrsnYAg6rK97JqwXG4gICAgICAgICAgICAvLyDqt7gg64uk7J2MIE1pbmtvd3NraSDtlansnYAg7JuQ7KCQ7J2EIO2PrO2VqCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cbiAgICAgICAgICAgIC8vIOy2lOqwgCDrkJwg66eI7KeA66eJIOygkOydgCBNaW5rb3dza2kgRGlmZmVyZW5jZeydmCDqsIDsnqXsnpDrpqzsl5Ag7J6I7Iq164uI64ukLlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NBU0UxWycsICdOTycsICddJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICB9XG5cbiAgICAgICAgZCA9IFZlY3Rvci5uZWdhdGUoYSk7IC8vIFRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgYWx3YXlzIHRvd2FyZHMgdGhlIG9yaWdpbiwgc28gdGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBuZWdhdGUoYSlcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaXRlckNvdW50Kys7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZXJDb3VudCk7XG5cbiAgICAgICAgICAgIGEgPSBzaW1wbGV4WysraW5kZXhdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcblxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NBU0UyWycsICdOTycsICddJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYeqwgCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuyoe2EsOuKlCAtYSDrpbwg7ZWY66m0IOuQqeuLiOuLpC5cbiAgICAgICAgICAgIGFvID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gZnJvbSBwb2ludCBBIHRvIE9yaWdpbiBpcyBqdXN0IG5lZ2F0aXZlIEFcblxuICAgICAgICAgICAgLy8gc2ltcGxleCBoYXMgMiBwb2ludHMgKGEgbGluZSBzZWdtZW50LCBub3QgYSB0cmlhbmdsZSB5ZXQpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAyKSB7XG5cbiAgICAgICAgICAgICAgICBiID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYik7IC8vIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuXG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5sZW5ndGhTcShkKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnBlcnBlbmRpY3VsYXIoYWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gc2tpcCB0byBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiID0gc2ltcGxleFsxXTtcbiAgICAgICAgICAgIGMgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICBhYyA9IFZlY3Rvci5zdWJ0cmFjdChjLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIENcblxuICAgICAgICAgICAgLy9hY+yZgCDsiJjsp4FcbiAgICAgICAgICAgIGFjcGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhYywgYWMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYScsIGEsICdiJywgYiwgJ2MnLCBjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbycsIGFvLCAnYWInLCBhYiwgJ2FjJywgYWMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjcGVycCcsIGFjcGVycCwgYWNwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFjcGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAvLyBhYyDsiJjsp4Eg7ISg67aE7J20IGHqsIAg7JuQ7KCQ7J2EIO2Wpe2VmOuKlCDrsKntlqUg67CY64yA7Y647JeQIOyeiOqzoFxuICAgICAgICAgICAgLy8g7KaJLCBhYyDsiJjsp4Eg7ISg67aEIOyViOyqveyXkCDsm5DsoJDsnbQg7J6I7Jy866m0XG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGQgPSBhY3BlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luJywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aEXG4gICAgICAgICAgICAgICAgYWJwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FicGVycCcsIGFicGVycCwgYWJwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhYnBlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pKTtcblxuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoTsnbQg7JuQ7KCQIOuwmOuMgCDrsKntlqXsnYQg7Zal7ZWY6rOgIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIC8vIOymiSwg7JuQ7KCQ7J20IOyCvOqwge2YlSDslYjsl5Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2ltcGxleFswXSA9IHNpbXBsZXhbMV07IC8vIHN3YXAgZmlyc3QgZWxlbWVudCAocG9pbnQgQylcbiAgICAgICAgICAgICAgICBkID0gYWJwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaW1wbGV4WzFdID0gc2ltcGxleFsyXTsgLy8gc3dhcCBlbGVtZW50IGluIHRoZSBtaWRkbGUgKHBvaW50IEIpXG4gICAgICAgICAgICAtLWluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnZleEh1bGwocG9pbnRzKVxuICAgIHtcbiAgICAgICAgLy8gRmluZCB0aGUgcmlnaHQgbW9zdCBwb2ludCBvbiB0aGUgaHVsbFxuICAgICAgICB2YXIgaTAgPSAwO1xuICAgICAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgICAgIGkwID0gaTtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBodWxsID0gW107XG4gICAgICAgIHZhciBtID0gMDtcbiAgICAgICAgdmFyIGloID0gaTA7XG5cbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGh1bGxbbV0gPSBpaDtcblxuICAgICAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGllID09IGloKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHIgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBWZWN0b3IuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgICAgICBpZiAoYyA9PSAwICYmIHYubGVuZ3RoU3EoKSA+IHIubGVuZ3RoU3EoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtKys7XG4gICAgICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgICAgICBpZiAoaWUgPT0gaTApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgdmVydGljZXNcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2h1bGxbaV1dO1xuICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gobmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UG9pbnRzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG1pZHBvaW50KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigoYS54ICsgYi54KSAvIDIsIChhLnkgKyBiLnkpIC8gMik7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRlYnVnVmVydGljZXModmVydGljZXMpIHtcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coaW5kZXgsIHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMikge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMScpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczEpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ3ZlcnRpY2VzMicpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlczIpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG59XG5cbmZ1bmN0aW9uIHN0cih2ZXJ0ZXgsIGlzRml4ZWQgPSBmYWxzZSkge1xuICAgIGlmIChpc0ZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYCgke3ZlcnRleC54fSwke3ZlcnRleC55fSlgO1xuICAgIH1cbiAgICByZXR1cm4gYCgke3ZlcnRleC54LnRvRml4ZWQoMil9LCR7dmVydGV4LnkudG9GaXhlZCgyKX0pYDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9namsvR0pLLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IEdKSyBmcm9tICcuLi9namsvR0pLJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludGVyXG57XG4gICAgc3RhdGljIGRyYXdNaW5rb3dza2lTdW0odmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZygnZHJhd01pbmtvd3NraVN1bSgnLCB2ZXJ0aWNlczEubGVuZ3RoICogdmVydGljZXMyLmxlbmd0aCwgJyknKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgICAgICBjb25zdCBwYXRoID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZlcnRpY2VzMi5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHYxID0gdmVydGljZXMxW2ldLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IHYyID0gdmVydGljZXMyW2pdLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBWZWN0b3Iuc3VidHJhY3QodjEsIHYyKTtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goZGlmZik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSwgaiwgYHZlY1ske2RpZmYueH0sICR7ZGlmZi55fV1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnZleEh1bGxQYXRoID0gR0pLLmNyZWF0ZUNvbnZleEh1bGwocGF0aCk7XG4gICAgICAgIFBhaW50ZXIuZHJhd1BvbHlnb24oY29udmV4SHVsbFBhdGgsIDEsIDB4RERERERELCAxKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9seWdvbih2ZXJ0aWNlcywgbGluZVdpZHRoID0gMSwgY29sb3IgPSAweDYwN0Q4QiwgYWxwaGEgPSAwLjUpXG4gICAge1xuICAgICAgICBjb25zdCBncmFwaGljcyA9IHdpbmRvdy5nO1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUobGluZVdpZHRoLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGNvbnN0IHZlYzAgPSB2ZXJ0aWNlc1swXS5jbG9uZSgpO1xuICAgICAgICB2ZWMwLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcblxuICAgICAgICBncmFwaGljcy5tb3ZlVG8odmVjMC54LCB2ZWMwLnkpO1xuXG4gICAgICAgIC8vIHRoaXMuZHJhd1RleHQod2luZG93LnN0YWdlLCAnKCcgKyB2ZWMwLngudG9GaXhlZCgwKSArICcsJyArIHZlYzAueS50b0ZpeGVkKDApICsgJyknLCB2ZWMwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmVjID0gdmVydGljZXNbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgIHZlYy5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odmVjLngsIHZlYy55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMwLngsIHZlYzAueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1RleHQoc3RhZ2UsIHN0cmluZywgcG9pbnQsIGNvbG9yID0gJyNmZjMzMDAnKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBQSVhJLlRleHQoc3RyaW5nLCB7XG4gICAgICAgICAgICAvLyBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgLy8gZm9udFNpemU6IDQsXG4gICAgICAgICAgICAvLyBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBmaWxsOiBjb2xvcixcbiAgICAgICAgICAgIC8vIHN0cm9rZTogJyM0YTE4NTAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0ZXh0LnggPSBwb2ludC54O1xuICAgICAgICB0ZXh0LnkgPSBwb2ludC55O1xuXG4gICAgICAgIHN0YWdlLmFkZENoaWxkKHRleHQpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludChncmFwaGljcywgcG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocG9pbnQueCwgcG9pbnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlCb3VuZHMoZ3JhcGhpY3MsIGJvdW5kcywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3UmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJ0LngsIHJlY3QucnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LnJiLngsIHJlY3QucmIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0LmxiLngsIHJlY3QubGIueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyZWN0Lmx0LngsIHJlY3QubHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50c0J5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubHQueCwgcmVjdC5sdC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucnQueCwgcmVjdC5ydC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QucmIueCwgcmVjdC5yYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHJlY3QubGIueCwgcmVjdC5sYi55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHMoZ3JhcGhpY3MsIHBvaW50cywgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcDEgPSBwb2ludHNbaV07XG4gICAgICAgICAgICB2YXIgcDIgPSBwb2ludHNbaSArIDEgPCBwb2ludHMubGVuZ3RoID8gaSArIDEgOiAwXTtcblxuICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdMaW5lKGdyYXBoaWNzLCBwMCwgcDEsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAwLngsIHAwLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocDEueCwgcDEueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0Fycm93KGdyYXBoaWNzLCBtb3ZlUG9pbnQsIHRvUG9pbnQsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcih0b1BvaW50LnggLSBtb3ZlUG9pbnQueCwgdG9Qb2ludC55IC0gbW92ZVBvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgdmVjdG9yLmludmVydCgpLm11bHRpcGx5U2NhbGFyKDE1KTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7Ki9cblxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKG1vdmVQb2ludC54IC0gdG9Qb2ludC54LCBtb3ZlUG9pbnQueSAtIHRvUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoMTUpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFpbnRlci5qcyIsImltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9zcmMvc2F0L1BvaW50JztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi4vLi4vc3JjL3NhdC9DaXJjbGUnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc3JjL3NhdC9Qb2x5Z29uJztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi8uLi9zcmMvdXRpbHMvUGFpbnRlcic7XG5pbXBvcnQgTW91c2UgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL01vdXNlJztcbmltcG9ydCBLZXlDb2RlIGZyb20gJy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5cbmNvbnN0IGdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICwgZGVidWdHcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAsIHNoYXBlcyA9IFtdXG4gICAgLCBMSU5FX0NPTE9SID0gMHg4NEQyRjZcbiAgICAsIEFSUk9XX0NPTE9SID0gMHhFNTczNzM7XG5cbmxldCBwb2x5Z29uUG9pbnRzID0gW1xuICAgIFtuZXcgUG9pbnQoMzUwLCAzNTApLCBuZXcgUG9pbnQoMzUwLCA1MDApLCBuZXcgUG9pbnQoNTAwLCA1MDApXSxcbiAgICBbbmV3IFBvaW50KDUwMCwgMjAwKSwgbmV3IFBvaW50KDQ4MCwgMjUwKSwgbmV3IFBvaW50KDYwMCwgMjUwKSwgbmV3IFBvaW50KDYyMCwgMjAwKV0sXG4gICAgW25ldyBQb2ludCgyNTgsIDEyMCksIG5ldyBQb2ludCgyOTUsIDIzMCksIG5ldyBQb2ludCgyMDAsIDMwMCksIG5ldyBQb2ludCgxMDUsIDIzMCksIG5ldyBQb2ludCgxNDIsIDEyMCldXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgUElYSS5Db250YWluZXJcbntcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgd2luZG93WydnJ10gPSBkZWJ1Z0dyYXBoaWNzO1xuXG4gICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci52aWV3O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgaW5pdGlhbGl6ZSgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGRlYnVnR3JhcGhpY3MpO1xuXG4gICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcbiAgICAgICAgdGhpcy5sYXN0ZHJhZyA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vdGhpcy5jcmVhdGVQb2x5Z29uKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlUG9seWdvbk1hbnVhbCgpO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcblxuICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBhZGRFdmVudCgpXG4gICAge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XG4gICAgICAgIHRoaXMub24oJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZSgpIHt9XG5cblxuICAgIHJlc2l6ZSgpXG4gICAge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG5cbiAgICBnZXRQb2x5Z29uUG9pbnRzKHR4LCB0eSwgYW5nbGUsIHJhZGl1cyA9IDEwMClcbiAgICB7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuXG4gICAgICAgIC8vIG1ha2luZyBwb2ludHMsIHBhdGhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmdsZTsgaSArKykge1xuICAgICAgICAgICAgbGV0IHggPSB0eCArIChyYWRpdXMgKiAtTWF0aC5zaW4odGhpcy50b1JhZGlhbigzNjAgLyBhbmdsZSAqIGkpKSk7XG4gICAgICAgICAgICBsZXQgeSA9IHR5ICsgKHJhZGl1cyAqICBNYXRoLmNvcyh0aGlzLnRvUmFkaWFuKDM2MCAvIGFuZ2xlICogaSkpKTtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG5ldyBQSVhJLlBvaW50KHgsIHkpO1xuICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cblxuICAgIHRvUmFkaWFuKGRlZ3JlZSlcbiAgICB7XG4gICAgICAgIHJldHVybiBkZWdyZWUgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUG9seWdvbih1c2VSYW5kb21Sb3RhdGUgPSBmYWxzZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2x5Z29uUG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9seWdvbiA9IG5ldyBQb2x5Z29uKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHBvaW50cyA9IHBvbHlnb25Qb2ludHNbaV07XG5cbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHVzZVJhbmRvbVJvdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlU2hhcGUocG9seWdvbiwgTWF0aC5yYW5kb20oKSAqIDQ1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hhcGVzLnB1c2gocG9seWdvbik7XG5cbiAgICAgICAgICAgIHBvbHlnb24uY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNyZWF0ZVBvbHlnb25NYW51YWwoKVxuICAgIHtcbiAgICAgICAgbGV0IHJhZGl1cyA9IDEwMCxcbiAgICAgICAgICAgIGRpYW1ldGVyID0gMjAwLFxuICAgICAgICAgICAgc3BhY2UgPSAyMCxcbiAgICAgICAgICAgIGEgPSByYWRpdXMgKyBzcGFjZSxcbiAgICAgICAgICAgIGIgPSByYWRpdXMgKyBkaWFtZXRlciArIHNwYWNlICogMixcbiAgICAgICAgICAgIGMgPSByYWRpdXMgKyBkaWFtZXRlciAqIDIgKyBzcGFjZSAqIDM7XG5cbiAgICAgICAgcG9seWdvblBvaW50cyA9IFtdO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGEsIDMpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBhLCA0KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYywgYSwgNSkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGIsIDYpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBiLCA3KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYywgYiwgOCkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGMsIDkpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBjLCAxMCkpO1xuICAgICAgICB0aGlzLmFkZENpcmNsZShjLCBjLCByYWRpdXMpO1xuICAgICAgICAvL3RoaXMuYWRkQ2lyY2xlKGMsIGMsIHJhZGl1cyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVQb2x5Z29uKHRydWUpO1xuICAgIH1cblxuXG4gICAgYWRkUG9seWdvbihpbmRleCwgdXNlUmFuZG9tUm90YXRlID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIGxldCBwb2x5Z29uID0gbmV3IFBvbHlnb24odGhpcy5jb250ZXh0KTtcblxuICAgICAgICBsZXQgcG9pbnRzID0gcG9seWdvblBvaW50c1tpbmRleF07XG5cbiAgICAgICAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgICBwb2x5Z29uLmFkZFBvaW50KHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXNlUmFuZG9tUm90YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNoYXBlKHBvbHlnb24sIChNYXRoLnJhbmRvbSgpICogNDUpICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2x5Z29uLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICBzaGFwZXMucHVzaChwb2x5Z29uKTtcbiAgICB9XG5cblxuICAgIGFkZENpcmNsZSh4LCB5LCByYWRpdXMpXG4gICAge1xuICAgICAgICBsZXQgY2lyY2xlID0gbmV3IENpcmNsZSh0aGlzLmNvbnRleHQsIHgsIHksIHJhZGl1cyk7XG4gICAgICAgIGNpcmNsZS5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgc2hhcGVzLnB1c2goY2lyY2xlKTtcbiAgICAgICAgdGhpcy5jaXJjbGUgPSBjaXJjbGU7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVSZW5kZXIoKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgcG9seWdvbi5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBkZXRlY3RDb2xsaXNpb25zKClcbiAgICB7XG4gICAgICAgIGxldCBkcmFnU2hhcGUgPSB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkO1xuXG4gICAgICAgIGlmICghZHJhZ1NoYXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcblxuICAgICAgICAgICAgaWYgKHNoYXBlICE9PSBkcmFnU2hhcGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbXR2ID0gZHJhZ1NoYXBlLmNvbGxpZGVzV2l0aChzaGFwZSk7XG5cbiAgICAgICAgICAgICAgICAvLyDstqnrj4wg7YyQ7KCVXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uRGV0ZWN0ZWQobXR2KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVTaGFwZUJ5TVRWKG10diwgZHJhZ1NoYXBlLCBzaGFwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIG10duuhnCDstqnrj4wg7YyQ7KCVXG4gICAgICogQHBhcmFtIG10dlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbGxpc2lvbkRldGVjdGVkKG10dilcbiAgICB7XG4gICAgICAgIC8vIOy2qeuPjCDtjJDsoJVcbiAgICAgICAgaWYgKG10di5heGlzICE9IHVuZGVmaW5lZCB8fCBtdHYub3ZlcmxhcCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgY2hlY2tNVFZBeGlzRGlyZWN0aW9uKG10diwgY29sbGlkZXIsIGNvbGxpZGVlKVxuICAgIHtcbiAgICAgICAgaWYgKG10di5heGlzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IGNvbGxpZGVyQ2VudGVyID0gVmVjdG9yLmZyb21PYmplY3QoY29sbGlkZXIuZ2V0Q2VudGVyKCkpLFxuICAgICAgICAgICAgY29sbGlkZWVDZW50ZXIgPSBWZWN0b3IuZnJvbU9iamVjdChjb2xsaWRlZS5nZXRDZW50ZXIoKSksXG4gICAgICAgICAgICBjZW50ZXJWZWN0b3IgPSBjb2xsaWRlZUNlbnRlci5zdWJ0cmFjdChjb2xsaWRlckNlbnRlciksXG4gICAgICAgICAgICBjZW50ZXJVbml0VmVjdG9yID0gVmVjdG9yLmZyb21PYmplY3QoY2VudGVyVmVjdG9yKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBpZiAoY2VudGVyVW5pdFZlY3Rvci5kb3RQcm9kdWN0KG10di5heGlzKSA+IDApIHtcbiAgICAgICAgICAgIG10di5heGlzLnggPSAtbXR2LmF4aXMueDtcbiAgICAgICAgICAgIG10di5heGlzLnkgPSAtbXR2LmF4aXMueTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG10dlxuICAgICAqIEBwYXJhbSBjb2xsaWRlciDstqnrj4ztlZwg6rCd7LK0XG4gICAgICogQHBhcmFtIGNvbGxpZGVlIOy2qeuPjOydhCDri7ntlZwg6rCd7LK0XG4gICAgICovXG4gICAgbW92ZVNoYXBlQnlNVFYobXR2LCBjb2xsaWRlciwgY29sbGlkZWUpXG4gICAge1xuICAgICAgICBpZiAobXR2LmF4aXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbXR2LmF4aXMgPSBuZXcgVmVjdG9yKDEsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGR4ID0gbXR2LmF4aXMueCAqIG10di5vdmVybGFwLFxuICAgICAgICAgICAgZHkgPSBtdHYuYXhpcy55ICogbXR2Lm92ZXJsYXA7XG5cbiAgICAgICAgbGV0IGRyYWdWZWN0b3IgPSB0aGlzLmRyYWdWZWN0b3IsXG4gICAgICAgICAgICBjZW50ZXJDb2xsaWRlciA9IGNvbGxpZGVyLmdldENlbnRlcigpLFxuICAgICAgICAgICAgY2VudGVyQ29sbGlkZWUgPSBjb2xsaWRlZS5nZXRDZW50ZXIoKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IoY2VudGVyQ29sbGlkZWUueCAtIGNlbnRlckNvbGxpZGVyLngsIGNlbnRlckNvbGxpZGVlLnkgLSBjZW50ZXJDb2xsaWRlci55KSxcbiAgICAgICAgICAgIGRpcmVjdGlvbk5vcm0gPSBkaXJlY3Rpb24ubm9ybSgpLFxuICAgICAgICAgICAgb3ZlcmxhcFZlY3RvciA9IG5ldyBWZWN0b3IoZHgsIGR5KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog64K07KCB7J20IC0x7J2066m0IOuwmOuMgCDrsKntlqXsnYQg67O064qUIOqyg1xuICAgICAgICAgKiDrgrTsoIHsnbQgMOydtOuptCDsiJjsp4FcbiAgICAgICAgICog64K07KCB7J20IDHsnbgg6rK97JqwIOqwmeydgCDrsKntlqXsnYQg6rCA66as7YKk64qUIOqyg1xuICAgICAgICAgKiDrgrTsoIHsnbQgPiAwLjgg64uk66m0IOqwmeydgCDrsKntlqXsnYQg67O06rOgIOyeiOuKlCDsg4Htg5xcbiAgICAgICAgICovXG4gICAgICAgIGxldCBkb3QgPSBkcmFnVmVjdG9yLmRvdFByb2R1Y3Qob3ZlcmxhcFZlY3Rvcik7XG5cbiAgICAgICAgaWYgKGRvdCA8IDApIHtcbiAgICAgICAgICAgIGR4ID0gLWR4O1xuICAgICAgICAgICAgZHkgPSAtZHk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYyA9IGNvbGxpZGVlLmdldENlbnRlcigpLFxuICAgICAgICAgICAgdG8gPSBuZXcgVmVjdG9yKGR4LCBkeSksXG4gICAgICAgICAgICB0b05vcm1hbGl6ZSA9IHRvLmNsb25lKCkubm9ybSgpLFxuICAgICAgICAgICAgZG90VG8gPSBkaXJlY3Rpb25Ob3JtLmRvdFByb2R1Y3QodG9Ob3JtYWxpemUpLFxuICAgICAgICAgICAgY2VudGVyID0gbmV3IFZlY3RvcihjLngsIGMueSk7XG4gICAgICAgIHRvID0gY2VudGVyLmNsb25lKCkuc3VidHJhY3QodG8pO1xuXG4gICAgICAgIC8vIOuRkCDqsJ3ssrTsnZgg67Cp7ZalIOuyoe2EsOyZgCDrsIDslrTrgrTripQg67Cx7YSwKHRvKeydmCDrgrTsoIHsnbQgMOuztOuLpCDtgbQg6rK97JqwLCDspokg67CA7Ja0IOuCtOuKlCDrsKntlqXsnbQg67CA7Ja064K064qUIOuwqe2WpeydvCDrlYzrp4wg7KCB7JqpXG4gICAgICAgIGlmIChkb3RUbyA+PSAwKSB7XG4gICAgICAgICAgICBQYWludGVyLmRyYXdBcnJvdyh3aW5kb3cuZywgY2VudGVyLCB0bywgZmFsc2UsIDEsIEFSUk9XX0NPTE9SKTtcbiAgICAgICAgICAgIC8vUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIHRoaXMuY2lyY2xlLmdldENlbnRlcigpLCBmYWxzZSwgMTAsIDB4ZmYzMzAwLCAwLjIpO1xuICAgICAgICAgICAgY29sbGlkZWUubW92ZShkeCwgZHkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByb3RhdGVTaGFwZShzaGFwZSwgZGVncmVlcylcbiAgICB7XG4gICAgICAgIC8vZGVncmVlcyA9IDkwO1xuICAgICAgICBsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXG4gICAgICAgIGlmIChwb2ludHMpIHtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSBzaGFwZS5nZXRDZW50ZXIoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgIHBvaW50c1tpXSA9IHRoaXMucm90YXRpb25Qb2ludChjZW50ZXIsIHBvaW50LCBkZWdyZWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ZqM7KCE7ZWY64qUIOyijO2RnCDqtaztlZjquLBcbiAgICAgKiBAcGFyYW0gcGl2b3Qg7IKs6rCB7ZiV7J2YIOykkeyLrOygkFxuICAgICAqIEBwYXJhbSBwb2ludCDqs4TsgrDtlZjqs6Ag7Iu27J2AIO2PrOyduO2KuFxuICAgICAqIEBwYXJhbSBkZWdyZWVzIO2ajOyghOqwgSBkZWdyZWVzXG4gICAgICogQHJldHVybnMge3t4OiAobnVtYmVyfCopLCB5OiAobnVtYmVyfCopfX1cbiAgICAgKi9cbiAgICByb3RhdGlvblBvaW50KHBpdm90LCBwb2ludCwgZGVncmVlcylcbiAgICB7XG4gICAgICAgIGxldCBkaWZmWCA9IHBvaW50LnggLSBwaXZvdC54O1xuICAgICAgICBsZXQgZGlmZlkgPSBwb2ludC55IC0gcGl2b3QueTtcbiAgICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkpO1xuICAgICAgICBsZXQgY2EgPSBNYXRoLmF0YW4yKGRpZmZZLCBkaWZmWCkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGxldCBuYSA9ICgoY2EgKyBkZWdyZWVzKSAlIDM2MCkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGxldCB4ID0gKHBpdm90LnggKyBkaXN0ICogTWF0aC5jb3MobmEpICsgMC41KSB8IDA7XG4gICAgICAgIGxldCB5ID0gKHBpdm90LnkgKyBkaXN0ICogTWF0aC5zaW4obmEpICsgMC41KSB8IDA7XG4gICAgICAgIHJldHVybiB7eDogeCwgeTogeX07XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlRG93bigpXG4gICAge1xuICAgICAgICBkZWJ1Z0dyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQb2ludCA9IFZlY3Rvci5mcm9tT2JqZWN0KE1vdXNlLmdsb2JhbCk7XG5cbiAgICAgICAgc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hhcGUuaXNQb2ludEluUGF0aChjdXJyZW50UG9pbnQueCwgY3VycmVudFBvaW50LnkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQueSA9IGN1cnJlbnRQb2ludC55O1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueSA9IGN1cnJlbnRQb2ludC55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG9uTW91c2VNb3ZlKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudFBvaW50LCBkcmFnVmVjdG9yO1xuXG4gICAgICAgIGlmICh0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9pbnQgPSBWZWN0b3IuZnJvbU9iamVjdChNb3VzZS5nbG9iYWwpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdWZWN0b3IgPSBkcmFnVmVjdG9yID0gY3VycmVudFBvaW50LmNsb25lKCkuc3VidHJhY3QodGhpcy5sYXN0ZHJhZyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQubW92ZShkcmFnVmVjdG9yLngsIGRyYWdWZWN0b3IueSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy55ID0gY3VycmVudFBvaW50Lnk7XG5cbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9ucygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25Nb3VzZVVwKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvL1xuICAgIC8vIFRlc3Qg7ZWo7IiYXG4gICAgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICBvbktleVVwKGUpXG4gICAge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQ0FQRTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmcuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLk5VTUJFUl8xOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTlVNQkVSXzI6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3Qvc2F0L1Rlc3QuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFxue1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1BvaW50LmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFByb2plY3Rpb24gZnJvbSAnLi9Qcm9qZWN0aW9uJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIFNoYXBlXG57XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgeCwgeSwgcmFkaXVzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSAnQ2lyY2xlJztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDspJHsoJAg7KKM7ZGcIOuwmO2ZmFxuICAgICAqIEByZXR1cm5zIHtQSVhJLlBvaW50fCp8c3ZnLlBvaW50fVxuICAgICAqL1xuICAgIGdldENlbnRlcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFBJWEkuUG9pbnQodGhpcy54LHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICBpZiAoc2hhcGUucmFkaXVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUoc2hhcGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLypcbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICB2YXIgYXhlcyA9IHNoYXBlLmdldEF4ZXMoKSwgZGlzdGFuY2U7XG5cbiAgICAgICAgaWYgKGF4ZXMgPT09IHVuZGVmaW5lZCkgeyAvL+ybkFxuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coc2hhcGUueCAtIHRoaXMueCwgMikgK1xuICAgICAgICAgICAgICAgIE1hdGgucG93KHNoYXBlLnkgLSB0aGlzLnksIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZSA8IE1hdGguYWJzKHRoaXMucmFkaXVzICsgc2hhcGUucmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUoc2hhcGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgICovXG5cblxuICAgIGdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpXG4gICAge1xuICAgICAgICBsZXQgbWluID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNpcmNsZVZlY3RvciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNpcmNsZSksXG4gICAgICAgICAgICBsZW5ndGgsIHRlc3RQb2ludFZlY3RvciwgY2xvc2VzdFBvaW50O1xuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IHBvbHlnb24ucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXN0UG9pbnRWZWN0b3IgPSBWZWN0b3IuZnJvbU9iamVjdChwb2x5Z29uLnBvaW50c1tpXSk7XG4gICAgICAgICAgICB0ZXN0UG9pbnRWZWN0b3IuaW5kZXggPSBpO1xuICAgICAgICAgICAgbGVuZ3RoID0gdGVzdFBvaW50VmVjdG9yLmNsb25lKCkuZGlzdGFuY2UoY2lyY2xlKTtcblxuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGxlbmd0aDtcbiAgICAgICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSB0ZXN0UG9pbnRWZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xvc2VzdFBvaW50LmNsb25lKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6TqsIHtmJXqs7wg7JuQ7ZiVIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gcG9seWdvblxuICAgICAqIEBwYXJhbSBjaXJjbGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICAvKnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUocG9seWdvbiwgY2lyY2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBheGVzID0gcG9seWdvbi5nZXRBeGVzKCksXG4gICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSB0aGlzLmdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpO1xuXG4gICAgICAgIGF4ZXMucHVzaCh0aGlzLmdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpKTtcblxuICAgICAgICByZXR1cm4gIXBvbHlnb24uc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBjaXJjbGUpO1xuICAgIH0qL1xuXG5cbiAgICBnZXRDaXJjbGVBeGlzKGNpcmNsZSwgY2xvc2VzdFBvaW50KVxuICAgIHtcbiAgICAgICAgdmFyIHYxID0gbmV3IFZlY3RvcihjaXJjbGUueCwgY2lyY2xlLnkpLFxuICAgICAgICAgICAgdjIgPSBuZXcgVmVjdG9yKGNsb3Nlc3RQb2ludC54LCBjbG9zZXN0UG9pbnQueSksXG4gICAgICAgICAgICBzdXJmYWNlVmVjdG9yID0gdjEuc3VidHJhY3QodjIpO1xuXG4gICAgICAgIFBhaW50ZXIuZHJhd1BvaW50KHdpbmRvdy5nLCBjbG9zZXN0UG9pbnQsIGZhbHNlLCA1LCAweGZmMzMwMCwgMC4zKTtcbiAgICAgICAgLy9QYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLCBWZWN0b3IuZnJvbU9iamVjdChjaXJjbGUpLCBWZWN0b3IuZnJvbU9iamVjdChjbG9zZXN0UG9pbnQpLCBmYWxzZSwgMSwgMHhmZjMzMDAsIDAuMyk7XG5cbiAgICAgICAgcmV0dXJuIHN1cmZhY2VWZWN0b3Iubm9ybWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICBwcm9qZWN0KGF4aXMpXG4gICAge1xuICAgICAgICBsZXQgc2NhbGFycyA9IFtdLFxuICAgICAgICAgICAgcG9pbnQgPSBuZXcgUElYSS5Qb2ludCh0aGlzLngsIHRoaXMueSksXG4gICAgICAgICAgICBwb2ludFZlY3RvciA9IG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSksXG4gICAgICAgICAgICBkb3RQcm9kdWN0ID0gcG9pbnRWZWN0b3IuZG90UHJvZHVjdChheGlzKTtcblxuICAgICAgICBzY2FsYXJzLnB1c2goZG90UHJvZHVjdCk7XG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0ICsgdGhpcy5yYWRpdXMpO1xuICAgICAgICBzY2FsYXJzLnB1c2goZG90UHJvZHVjdCAtIHRoaXMucmFkaXVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3Rpb24oXG4gICAgICAgICAgICBNYXRoLm1pbi5hcHBseShNYXRoLCBzY2FsYXJzKSxcbiAgICAgICAgICAgIE1hdGgubWF4LmFwcGx5KE1hdGgsIHNjYWxhcnMpXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBnZXRBeGVzKClcbiAgICB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQYXRoKGdyYXBoaWNzLCBsaW5lQ29sb3IgPSAweEZGRkZGRilcbiAgICB7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBsaW5lQ29sb3IpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8odGhpcy54ICsgdGhpcy5yYWRpdXMsIHRoaXMueSk7XG4gICAgICAgIGdyYXBoaWNzLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgfVxuXG5cbiAgICBtb3ZlKGR4LCBkeSlcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBkeDtcbiAgICAgICAgdGhpcy55ICs9IGR5O1xuICAgIH1cblxuXG4gICAgaXNQb2ludEluUGF0aCh4LCB5KVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgaXNQb2ludEluUGF0aCA9IHRoaXMuY29udGV4dC5pc1BvaW50SW5QYXRoKHgsIHkpO1xuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gaXNQb2ludEluUGF0aDtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvQ2lyY2xlLmpzIiwiaW1wb3J0IE1UViBmcm9tICcuL01UVic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgbWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKGF4ZXMsIHNoYXBlKSB7XG4gICAgICAgIHZhciBtaW5pbXVtT3ZlcmxhcCA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBvdmVybGFwLCBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCxcbiAgICAgICAgICAgIGF4aXMsIHByb2plY3Rpb24xLCBwcm9qZWN0aW9uMjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF4ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGF4aXMgPSBheGVzW2ldO1xuICAgICAgICAgICAgcHJvamVjdGlvbjEgPSBzaGFwZS5wcm9qZWN0KGF4aXMpO1xuICAgICAgICAgICAgcHJvamVjdGlvbjIgPSB0aGlzLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICBvdmVybGFwID0gcHJvamVjdGlvbjEuZ2V0T3ZlcmxhcChwcm9qZWN0aW9uMik7XG5cbiAgICAgICAgICAgIC8qUGFpbnRlci5kcmF3TGluZSh3aW5kb3cuZyxcbiAgICAgICAgICAgICAgICB7eDpheGlzLnggKiBwcm9qZWN0aW9uMS5taW4sIHk6YXhpcy55ICogcHJvamVjdGlvbjEubWlufSxcbiAgICAgICAgICAgICAgICB7eDpheGlzLnggKiBwcm9qZWN0aW9uMi5tYXgsIHk6YXhpcy55ICogcHJvamVjdGlvbjIubWF4fSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTsqL1xuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcCA9PT0gMCkgeyAvL+y2qeuPjCDsl4bsirQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBNVFYoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCA8IG1pbmltdW1PdmVybGFwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1PdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXAgPSBheGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTVRWKG1pbmltdW1PdmVybGFwLCBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrkZAg64uk6rCB7ZiVIOyCrOydtOyXkOyEnCDstqnrj4xcbiAgICAgKiBAcGFyYW0gcDFcbiAgICAgKiBAcGFyYW0gcDJcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBwb2x5Z29uQ29sbGlkZXNXaXRoUG9seWdvbihwMSwgcDIpIHtcbiAgICAgICAgdmFyIG10djEgPSBwMS5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IocDEuZ2V0QXhlcygpLCBwMiksXG4gICAgICAgICAgICBtdHYyID0gcDEubWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKHAyLmdldEF4ZXMoKSwgcDIpO1xuXG4gICAgICAgIGlmIChtdHYxLm92ZXJsYXAgPT09IDAgJiYgbXR2Mi5vdmVybGFwID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1UVigwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtdHYxLm92ZXJsYXAgPCBtdHYyLm92ZXJsYXAgPyBtdHYxIDogbXR2MjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog65GQIOybkO2YleyXkCDrjIDtlZwg7Lap64+MXG4gICAgICogQHBhcmFtIGMxXG4gICAgICogQHBhcmFtIGMyXG4gICAgICovXG4gICAgY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlKGMxLCBjMikge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coYzIueCAtIGMxLngsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KGMyLnkgLSBjMS55LCAyKSksXG4gICAgICAgICAgICBvdmVybGFwID0gTWF0aC5hYnMoYzEucmFkaXVzICsgYzIucmFkaXVzKSAtIGRpc3RhbmNlO1xuXG4gICAgICAgIHJldHVybiBvdmVybGFwIDwgMCA/XG4gICAgICAgICAgICBuZXcgTVRWKDApIDpcbiAgICAgICAgICAgIG5ldyBNVFYob3ZlcmxhcCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6TqsIHtmJXqs7wg7JuQ7ZiVIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gcG9seWdvblxuICAgICAqIEBwYXJhbSBjaXJjbGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSkge1xuICAgICAgICB2YXIgYXhlcyA9IHBvbHlnb24uZ2V0QXhlcygpLFxuICAgICAgICAgICAgY2xvc2VzdFBvaW50ID0gY2lyY2xlLmdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpO1xuXG4gICAgICAgIC8vIFBhaW50ZXIuZHJhd1BvaW50KHdpbmRvdy5nLCBjbG9zZXN0UG9pbnQsIGZhbHNlLCA1LCAweEU1NzM3Myk7XG5cbiAgICAgICAgYXhlcy5wdXNoKGNpcmNsZS5nZXRDaXJjbGVBeGlzKGNpcmNsZSwgY2xvc2VzdFBvaW50KSk7XG5cbiAgICAgICAgcmV0dXJuIHBvbHlnb24ubWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKGF4ZXMsIGNpcmNsZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstpXsl5Ag7Yis7JiB7ZWY7JesIOu2hOumrOqwgCDsnojsnLzrqbQgdHJ1ZSDrsJjtmZgo7Lap64+M65CY7KeAIOyViuyVmOuLpOuptCB0cnVlIOuwmO2ZmClcbiAgICAgKiBAcGFyYW0gb3RoZXJTaGFwZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbGxpZGVzV2l0aChzaGFwZSkge1xuICAgICAgICB2YXIgYXhlcyA9IHRoaXMuZ2V0QXhlcygpLmNvbmNhdChzaGFwZS5nZXRBeGVzKCkpO1xuICAgICAgICByZXR1cm4gIXRoaXMuc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBzaGFwZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrtoTrpqzstpXsnbQg7J6I64qU7KeAIOyXrOu2gCAo67aE66as7LaV7J20IOyeiOuLpOuKlCDsnbTslbzquLDripQg7Lap64+M7ZWY7KeAIOyViuyVmOuLpOuKlCDsnbTslbzquLAg7J6F64uI64ukLilcbiAgICAgKiBAcGFyYW0gYXhlc1xuICAgICAqIEBwYXJhbSBzaGFwZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHNlcGFyYXRpb25PbkF4ZXMoYXhlcywgc2hhcGUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbaV07XG4gICAgICAgICAgICB2YXIgcHJvamVjdGlvbjEgPSBzaGFwZS5wcm9qZWN0KGF4aXMpO1xuICAgICAgICAgICAgdmFyIHByb2plY3Rpb24yID0gdGhpcy5wcm9qZWN0KGF4aXMpO1xuXG4gICAgICAgICAgICBpZiAoIXByb2plY3Rpb24xLm92ZXJsYXBzKHByb2plY3Rpb24yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBkb24ndCBoYXZlIHRvIHRlc3QgcmVtYWluaW5nIGF4ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvU2hhcGUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNVFZcbntcbiAgICAvKipcbiAgICAgKiDstZzshowg7J2064+ZIOuyoe2EsFxuICAgICAqIE1pbmltdW0gVHJhbnNsYXRpb24gVmVjdG9yIChNVFYpXG4gICAgICogQHBhcmFtIGF4aXNcbiAgICAgKiBAcGFyYW0gb3ZlcmxhcFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG92ZXJsYXAgPSB1bmRlZmluZWQsIGF4aXMgPSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xuICAgICAgICB0aGlzLm92ZXJsYXAgPSBvdmVybGFwO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L01UVi5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Rpb25cbntcbiAgICBjb25zdHJ1Y3RvcihtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHRoaXMubWluID0gbWluO1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICB9XG5cblxuICAgIGdldE92ZXJsYXAocHJvamVjdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBvdmVybGFwO1xuXG4gICAgICAgIGlmICghdGhpcy5vdmVybGFwcyhwcm9qZWN0aW9uKSlcbiAgICAgICAgICAgIHJldHVybiAwO1xuXG4gICAgICAgIGlmICh0aGlzLm1heCA+IHByb2plY3Rpb24ubWF4KSB7XG4gICAgICAgICAgICBvdmVybGFwID0gcHJvamVjdGlvbi5tYXggLSB0aGlzLm1pbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG92ZXJsYXAgPSB0aGlzLm1heCAtIHByb2plY3Rpb24ubWluO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdmVybGFwO1xuICAgIH1cblxuXG4gICAgb3ZlcmxhcHMocHJvamVjdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heCA+IHByb2plY3Rpb24ubWluICYmIHByb2plY3Rpb24ubWF4ID4gdGhpcy5taW47XG4gICAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJpbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tICcuL1Byb2plY3Rpb24nO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiBleHRlbmRzIFNoYXBlXG57XG4gICAgY29uc3RydWN0b3IoY29udGV4dClcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludHMubGVuZ3RoICsgJyBQb2x5Z29uJztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOykkeygkCDsooztkZxcbiAgICAgKiBAcmV0dXJucyB7UElYSS5Qb2ludHwqfHN2Zy5Qb2ludH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXIoKVxuICAgIHtcbiAgICAgICAgdmFyIHBvaW50U3VtID0gbmV3IFBJWEkuUG9pbnQoKTtcblxuICAgICAgICBmb3IgKHZhciBpPTAsIHBvaW50OyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHBvaW50ID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgICAgICBwb2ludFN1bS54ICs9IHBvaW50Lng7XG4gICAgICAgICAgICBwb2ludFN1bS55ICs9IHBvaW50Lnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlBvaW50KHBvaW50U3VtLnggLyB0aGlzLnBvaW50cy5sZW5ndGgsXG4gICAgICAgICAgICBwb2ludFN1bS55IC8gdGhpcy5wb2ludHMubGVuZ3RoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2qeuPjCDssrTtgawgKOu2hOumrOy2leydtCDsl4bsnLzrqbQg7Lap64+MKSwgIXNlcGFyYXRpb25PbkF4ZXNcbiAgICAgKiBAcGFyYW0gc2hhcGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICBpZiAoc2hhcGUucmFkaXVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aFBvbHlnb24odGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIHZhciBheGVzID0gc2hhcGUuZ2V0QXhlcygpO1xuXG4gICAgICAgIGlmIChheGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZS5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF4ZXMuY29uY2F0KHRoaXMuZ2V0QXhlcygpKTtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiDtiKzsmIFcbiAgICAgKiBAcGFyYW0gYXhpc1xuICAgICAqIEByZXR1cm5zIHtQcm9qZWN0aW9ufVxuICAgICAqL1xuICAgIHByb2plY3QoYXhpcylcbiAgICB7XG4gICAgICAgIHZhciBzY2FsYXJzID0gW10sXG4gICAgICAgICAgICB2ID0gbmV3IFZlY3RvcigpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goIGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgdi54ID0gcG9pbnQueDtcbiAgICAgICAgICAgIHYueSA9IHBvaW50Lnk7XG4gICAgICAgICAgICBzY2FsYXJzLnB1c2godi5kb3RQcm9kdWN0KGF4aXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0aW9uKE1hdGgubWluLmFwcGx5KE1hdGgsIHNjYWxhcnMpLFxuICAgICAgICAgICAgTWF0aC5tYXguYXBwbHkoTWF0aCwgc2NhbGFycykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7LaVIOq1rO2VmOq4sCAoZWRnZeyXkCDrhbjrp5DsnYQg7LaV7Jy866GcIO2VqeuLiOuLpClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0QXhlcygpXG4gICAge1xuICAgICAgICB2YXIgdjEgPSBuZXcgVmVjdG9yKCksXG4gICAgICAgICAgICB2MiA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgICAgIGF4ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgICB2MS54ID0gdGhpcy5wb2ludHNbaV0ueDtcbiAgICAgICAgICAgIHYxLnkgPSB0aGlzLnBvaW50c1tpXS55O1xuXG4gICAgICAgICAgICB2Mi54ID0gdGhpcy5wb2ludHNbaSsxXS54O1xuICAgICAgICAgICAgdjIueSA9IHRoaXMucG9pbnRzW2krMV0ueTtcblxuICAgICAgICAgICAgLy8g66qo7ISc66as7JeQ7IScIOyImOyngeyduCDrhbjrp5Ao67KV7ISgKSDrsqHthLDrpbwg66eM65Ot64uI64ukLiAo7LaVIOyDneyEsSlcbiAgICAgICAgICAgIGF4ZXMucHVzaCh2MS5lZGdlKHYyKS5wZXJwZW5kaWN1bGFyKCkubm9ybWFsaXplKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdjEueCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS54O1xuICAgICAgICB2MS55ID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLnk7XG5cbiAgICAgICAgdjIueCA9IHRoaXMucG9pbnRzWzBdLng7XG4gICAgICAgIHYyLnkgPSB0aGlzLnBvaW50c1swXS55O1xuXG4gICAgICAgIC8vIOuqqOyEnOumrOyXkOyEnCDsiJjsp4Hsnbgg64W466eQKOuyleyEoCkg67Kh7YSw66W8IOunjOuTreuLiOuLpC4gKOy2lSDsg53shLEpXG4gICAgICAgIGF4ZXMucHVzaCh2MS5lZGdlKHYyKS5wZXJwZW5kaWN1bGFyKCkubm9ybWFsaXplKCkpO1xuICAgICAgICByZXR1cm4gYXhlcztcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBhdGgoZ3JhcGhpY3MsIGxpbmVDb2xvciA9IDB4RkZGRkZGKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGxpbmVDb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odGhpcy5wb2ludHNbaV0ueCwgdGhpcy5wb2ludHNbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuICAgIH1cblxuXG4gICAgbW92ZShkeCwgZHkpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgICAgIHBvaW50LnggKz0gZHg7XG4gICAgICAgICAgICBwb2ludC55ICs9IGR5O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpc1BvaW50SW5QYXRoKHgsIHkpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgICBjb25zdCBpc1BvaW50SW5QYXRoID0gdGhpcy5jb250ZXh0LmlzUG9pbnRJblBhdGgoeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiBpc1BvaW50SW5QYXRoO1xuICAgIH1cblxuXG4gICAgYWRkUG9pbnQoeCwgeSlcbiAgICB7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHgsIHkpKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludHMubGVuZ3RoICsgJyBQb2x5Z29uJztcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvUG9seWdvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=
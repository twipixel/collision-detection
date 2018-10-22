webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(360);
	
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

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(361);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Circle = __webpack_require__(362);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _Polygon = __webpack_require__(366);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(354);
	
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

/***/ 361:
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

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(363);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(365);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(354);
	
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

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MTV = __webpack_require__(364);
	
	var _MTV2 = _interopRequireDefault(_MTV);
	
	var _Painter = __webpack_require__(354);
	
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

/***/ 364:
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

/***/ 365:
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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(363);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(361);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(365);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(354);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqKioqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcz85MjQxKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFpbnRlci5qcz9lZjA2KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9HSksuanM/NTBjMCoqIiwid2VicGFjazovLy8uL3Rlc3Qvc2F0L1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvTVRWLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvUHJvamVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1BvbHlnb24uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibWFpbiIsIk1haW4iLCJjYW52YXMiLCJyZW5kZXJlciIsInN0YWdlIiwidGVzdCIsImNvbnRhaW5lciIsImluaXQiLCJhZGRFdmVudCIsIm9uUmVzaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlBJWEkiLCJDYW52YXNSZW5kZXJlciIsIndpZHRoIiwiaGVpZ2h0IiwidmlldyIsImF1dG9SZXNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb250YWluZXIiLCJhZGRDaGlsZCIsInVwZGF0ZUxvb3AiLCJyZXNpemVXaW5kb3ciLCJvbnJlc2l6ZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwib25LZXlVcCIsIm1zIiwidXBkYXRlIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlbmRlciIsImlubmVyV2lkdGgiLCJkZXZpY2VQaXhlbFJhdGlvIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInJlc2l6ZSIsImUiLCJrZXlDb2RlIiwiVElMREUiLCJFU0MiLCJTUEFDRSIsIkRPV05fQVJST1ciLCJVUF9BUlJPVyIsIkxFRlRfQVJST1ciLCJSSUdIVF9BUlJPVyIsIkJBQ0tfU1BBQ0UiLCJjb25zb2xlIiwiY2xlYXIiLCJkZWdyZWVzIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwibWluIiwibWF4IiwiZmxvb3IiLCJyYWRpYW4yZGVncmVlcyIsInJhZCIsImRlZ3JlZXMycmFkaWFuIiwiZGVnIiwiVmVjdG9yIiwiYXJyIiwib2JqIiwieCIsInkiLCJ2ZWMiLCJzY2FsYXIiLCJzdWJ0cmFjdCIsInZlY3RvciIsImludmVydFgiLCJpbnZlcnRZIiwibGVuZ3RoIiwiZGl2aWRlIiwibm9ybWFsaXplIiwiZmFjdG9yIiwiYWJzIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwicmFuZG9taXplWCIsInJhbmRvbWl6ZVkiLCJyb3VuZCIsInByZWNpc2lvbiIsInRvRml4ZWQiLCJhbW91bnQiLCJtaXhYIiwibWl4WSIsImNvcHlYIiwiY29weVkiLCJ0ZW1wIiwidmVjMiIsImRvdCIsImNvZWZmIiwiYXRhbjIiLCJob3Jpem9udGFsQW5nbGUiLCJ2ZXJ0aWNhbEFuZ2xlIiwiaG9yaXpvbnRhbEFuZ2xlRGVnIiwiYW5nbGUiLCJueCIsImNvcyIsInNpbiIsIm55Iiwicm90YXRlIiwicm90YXRpb24iLCJyb3RhdGVUbyIsInJvdGF0ZUJ5IiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3FydCIsImRpc3RhbmNlU3EiLCJkaXJlY3Rpb24iLCJkeCIsImR5IiwibGVuZ3RoU3EiLCJhIiwiYiIsInYiLCJjbG9uZSIsInJldCIsIm11bHRpcGx5U2NhbGFyIiwiYyIsInIiLCJhYyIsImJjIiwidmVjMSIsInRvIiwiYWRkIiwiTW91c2UiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJwcmV2VGltZSIsImN1cnJlbnRUaW1lIiwiZGlmZlgiLCJkaWZmWSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImdsb2JhbCIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIiwiUGFpbnRlciIsInZlcnRpY2VzMSIsInZlcnRpY2VzMiIsImxvZyIsInBhdGgiLCJpIiwiaiIsInYxIiwidjIiLCJkaWZmIiwicHVzaCIsImNvbnZleEh1bGxQYXRoIiwiY3JlYXRlQ29udmV4SHVsbCIsImRyYXdQb2x5Z29uIiwidmVydGljZXMiLCJsaW5lV2lkdGgiLCJjb2xvciIsImFscGhhIiwiZ3JhcGhpY3MiLCJnIiwibGluZVN0eWxlIiwidmVjMCIsIm1hZ25pZmljYXRpb24iLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJpbmciLCJwb2ludCIsInRleHQiLCJUZXh0IiwiZmlsbCIsImlzQ2xlYXIiLCJyYWRpdXMiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImJvdW5kcyIsInRoaWNrbmVzcyIsImRyYXdSZWN0IiwicmVjdCIsImx0IiwicnQiLCJyYiIsImxiIiwicG9pbnRzIiwicDEiLCJwMiIsInAwIiwibW92ZVBvaW50IiwidG9Qb2ludCIsInNjYWxlIiwibGVmdCIsImludmVydCIsInJpZ2h0IiwibWUiLCJ0YXJnZXQiLCJHSksiLCJhdmciLCJjb3VudCIsImluZGV4IiwibWF4UHJvZHVjdCIsImRvdFByb2R1Y3QiLCJwcm9kdWN0IiwiaW5kZXhPZkZ1cnRoZXN0UG9pbnQiLCJuZWdhdGUiLCJzdHIiLCJoaXN0b3J5IiwiaXRlckNvdW50IiwiZCIsImFvIiwiYWIiLCJhYnBlcnAiLCJhY3BlcnAiLCJzaW1wbGV4IiwiQXJyYXkiLCJkaXJlY3Rpb25zIiwicG9zaXRpb24xIiwiYXZlcmFnZVBvaW50IiwicG9zaXRpb24yIiwic3VwcG9ydCIsInNldEhpc3RvcnkiLCJ0cmlwbGVQcm9kdWN0IiwicGVycGVuZGljdWxhciIsIm5vcm0iLCJpMCIsIngwIiwibiIsImh1bGwiLCJtIiwiaWgiLCJpZSIsImNyb3NzIiwibmV3UG9pbnRzIiwiZGVidWdWZXJ0aWNlcyIsImZvckVhY2giLCJ2ZXJ0ZXgiLCJjb25zb2xlVmVydGljZXMiLCJpc0ZpeGVkIiwiR3JhcGhpY3MiLCJkZWJ1Z0dyYXBoaWNzIiwic2hhcGVzIiwiTElORV9DT0xPUiIsIkFSUk9XX0NPTE9SIiwicG9seWdvblBvaW50cyIsIlRlc3QiLCJpc0luaXQiLCJpbnRlcmFjdGl2ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW5pdGlhbGl6ZSIsIm1vdXNlRG93blBvaW50IiwiUG9pbnQiLCJsYXN0ZHJhZyIsInNoYXBlQmVpbmdEcmFnZ2VkIiwidW5kZWZpbmVkIiwiY3JlYXRlUG9seWdvbk1hbnVhbCIsIm9uTW91c2VEb3duIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbiIsImhpdEFyZWEiLCJSZWN0YW5nbGUiLCJ0eCIsInR5IiwidG9SYWRpYW4iLCJkZWdyZWUiLCJ1c2VSYW5kb21Sb3RhdGUiLCJwb2x5Z29uIiwiYWRkUG9pbnQiLCJyb3RhdGVTaGFwZSIsImNyZWF0ZVBhdGgiLCJkaWFtZXRlciIsInNwYWNlIiwiZ2V0UG9seWdvblBvaW50cyIsImFkZENpcmNsZSIsImNyZWF0ZVBvbHlnb24iLCJjaXJjbGUiLCJkcmFnU2hhcGUiLCJzaGFwZSIsIm10diIsImNvbGxpZGVzV2l0aCIsImNvbGxpc2lvbkRldGVjdGVkIiwibW92ZVNoYXBlQnlNVFYiLCJheGlzIiwib3ZlcmxhcCIsImNvbGxpZGVyIiwiY29sbGlkZWUiLCJjb2xsaWRlckNlbnRlciIsImZyb21PYmplY3QiLCJnZXRDZW50ZXIiLCJjb2xsaWRlZUNlbnRlciIsImNlbnRlclZlY3RvciIsImNlbnRlclVuaXRWZWN0b3IiLCJkcmFnVmVjdG9yIiwiY2VudGVyQ29sbGlkZXIiLCJjZW50ZXJDb2xsaWRlZSIsImRpcmVjdGlvbk5vcm0iLCJvdmVybGFwVmVjdG9yIiwidG9Ob3JtYWxpemUiLCJkb3RUbyIsImNlbnRlciIsImRyYXdBcnJvdyIsIm1vdmUiLCJyb3RhdGlvblBvaW50IiwicGl2b3QiLCJkaXN0IiwiY2EiLCJuYSIsImlzUG9pbnRJblBhdGgiLCJkZXRlY3RDb2xsaXNpb25zIiwidXBkYXRlUmVuZGVyIiwiRVNDQVBFIiwiTlVNQkVSXzEiLCJOVU1CRVJfMiIsIkNpcmNsZSIsIm5hbWUiLCJwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlIiwiY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiY2lyY2xlVmVjdG9yIiwidGVzdFBvaW50VmVjdG9yIiwiY2xvc2VzdFBvaW50IiwiZGlzdGFuY2UiLCJzdXJmYWNlVmVjdG9yIiwiZHJhd1BvaW50Iiwic2NhbGFycyIsInBvaW50VmVjdG9yIiwiYXBwbHkiLCJsaW5lQ29sb3IiLCJhcmMiLCJzYXZlIiwiYmVnaW5QYXRoIiwicmVzdG9yZSIsIlNoYXBlIiwiYXhlcyIsIm1pbmltdW1PdmVybGFwIiwiYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXAiLCJwcm9qZWN0aW9uMSIsInByb2plY3Rpb24yIiwicHJvamVjdCIsImdldE92ZXJsYXAiLCJtdHYxIiwibWluaW11bVRyYW5zbGF0aW9uVmVjdG9yIiwiZ2V0QXhlcyIsIm10djIiLCJjMSIsImMyIiwicG93IiwiZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlIiwiZ2V0Q2lyY2xlQXhpcyIsImNvbmNhdCIsInNlcGFyYXRpb25PbkF4ZXMiLCJvdmVybGFwcyIsIk1UViIsIlByb2plY3Rpb24iLCJwcm9qZWN0aW9uIiwiUG9seWdvbiIsInBvaW50U3VtIiwicG9seWdvbkNvbGxpZGVzV2l0aFBvbHlnb24iLCJlZGdlIiwiY2xvc2VQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUMsY0FBWTtBQUNUQSxZQUFPQyxNQUFQLEdBQWdCLFlBQVk7QUFDeEIsYUFBTUMsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDSCxNQUZEO0FBR0gsRUFKQSxHQUFEOztBQU1BLEtBQUlDLGVBQUo7QUFBQSxLQUFZQyxpQkFBWjtBQUFB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WixFQUFldEYsQ0FBckQ7QUFDSDs7QUFFRCxrQkFBSzJMLE9BQUwsQ0FBYWxGLE1BQWIsQ0FBb0IsS0FBS21CLE1BQUwsQ0FBWSxDQUFaLEVBQWU3SCxDQUFuQyxFQUFzQyxLQUFLNkgsTUFBTCxDQUFZLENBQVosRUFBZTVILENBQXJEO0FBQ0Esa0JBQUsyTCxPQUFMLENBQWFrSCxTQUFiOztBQUVBLGlCQUFNckQsZ0JBQWdCLEtBQUs3RCxPQUFMLENBQWE2RCxhQUFiLENBQTJCelAsQ0FBM0IsRUFBOEJDLENBQTlCLENBQXRCO0FBQ0Esa0JBQUsyTCxPQUFMLENBQWFzRixPQUFiO0FBQ0Esb0JBQU96QixhQUFQO0FBQ0g7OztrQ0FHUXpQLEMsRUFBR0MsQyxFQUNaO0FBQ0ksa0JBQUs0SCxNQUFMLENBQVlqQyxJQUFaLENBQWlCLG9CQUFVNUYsQ0FBVixFQUFhQyxDQUFiLENBQWpCO0FBQ0Esa0JBQUsrUCxJQUFMLEdBQVksS0FBS25JLE1BQUwsQ0FBWXJILE1BQVosR0FBcUIsVUFBakM7QUFDSDs7Ozs7O21CQXJLZ0JrUyxPIiwiZmlsZSI6InNhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi9UZXN0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gJy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9Nb3VzZVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xuICAgIH1cbn0oKSk7XG5cbmxldCBjYW52YXMsIHJlbmRlcmVyLCBzdGFnZSwgdGVzdCwgY29udGFpbmVyO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwge1xuICAgICAgICAgICAgdmlldzogY2FudmFzLFxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgzMzM4M0RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTW91c2UucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgICAgICAvLyDsnITsuZjqsIAg7KCV7IiY6rCAIOyVhOuLkOqyveyasCDtnZDrpr/tlZjqsowg67O07J2064qUIOusuOygnOqwgCDsnojslrRcbiAgICAgICAgLy8g66CM642U65+s7J2YIOychOy5mOulvCDsoJXsiJjroZwg7Jew7IKw65CgIOyImCDsnojrj4TroZ0g7ZWc64ukLlxuICAgICAgICAvL3JlbmRlcmVyLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcblxuICAgICAgICBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICB0ZXN0ID0gbmV3IFRlc3QocmVuZGVyZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXN0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AoKTtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTG9vcCAobXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobXMpO1xuICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobXMpIHtcbiAgICAgICAgdGVzdC51cGRhdGUoKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHN0YWdlKTtcbiAgICB9XG5cbiAgICByZXNpemVXaW5kb3coKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOy6lOuyhOyKpCDsgqzsnbTspojsmYAg65SU7Iqk7ZSM66CI7J20IOyCrOydtOymiCDshKTsoJVcbiAgICAgICAgICog66CI7Yuw64KYIOq3uOuemO2UvSDsp4Dsm5Ag7L2U65OcXG4gICAgICAgICAqL1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUElYSSByZW5kZXJlciDrpqzsgqzsnbTspohcbiAgICAgICAgICogUElYSSDsl5Dqsowgdmlld3BvcnQg7IKs7J207KaIIOuzgOqyvSDslYzrprxcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgdGVzdC5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5VXAgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5USUxERTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRE9XTl9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVQX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTEVGVF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuQkFDS19TUEFDRTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9zYXQvaW5kZXguanMiLCJcblxuY29uc3QgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG4gICAgcmV0dXJuIHJhZCAqIGRlZ3JlZXM7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMycmFkaWFuIChkZWcpIHtcbiAgICByZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cblxuXG4vKipcbiAqIFZpY3Rvci5qc+ulvCBFUzbroZwg67OA7ZmY7ZWY7JesIOyCrOyaqe2VmOqzoCDsnojsirXri4jri6QuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF4a3VlbmcvdmljdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvclxue1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tQXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21BcnJheShhcnIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tT2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBWZWN0b3IoNDIsIDEzMzcpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6MTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMSwgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdWJ0cmFjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgIH1cblxuXG4gICAgZWRnZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGVkZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QoYSwgYik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAyMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWSgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSB4IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIHkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVZKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgYSBheGlzIHZhbHVlcyBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLyBiLngsIGEueSAvIGIueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFgoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WCgpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRZKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFkoKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydCgpXG4gICAge1xuICAgICAgICB0aGlzLmludmVydFgoKTtcbiAgICAgICAgdGhpcy5pbnZlcnRZKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG5lZ2F0ZSh2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCB2ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIHYueCA9IC12ZWMueDtcbiAgICAgICAgdi55ID0gLXZlYy55O1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG11bHRpcGx5U2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiBzY2FsYXIsIHZlY3Rvci55ICogc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGVTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAvIHNjYWxhciwgdmVjdG9yLnkgLyBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKDkwIOuPhCDtmozsoIQpXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gLXZlYy55O1xuICAgICAgICBjbG9uZS55ID0gdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICgtOTAg64+EIO2ajOyghClcbiAgICAgKi9cbiAgICByZXR1cm5QZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueSwgLXRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmV0dXJuUGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuyhOumvFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlKHZlYywgbGVuZ3RoKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgICAgIGlmIChsZW5ndGhTcSA+IGxlbmd0aCAqIGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0Lm11bHRpcGx5U2NhbGFyKGxlbmd0aCAvIE1hdGguc3FydChsZW5ndGhTcSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG5vcm1hbGl6ZSgpXG4gICAge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZpZGUobmV3IFZlY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbm9ybSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBhYnNvbHV0ZSB2ZWN0b3IgYXhpcyBpcyBncmVhdGVyIHRoYW4gYG1heGAsIG11bHRpcGxpZXMgdGhlIGF4aXMgYnkgYGZhY3RvcmBcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgYm90aCB4IGFuZCB5IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGltaXQobWF4LCBmYWN0b3IpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9taXplcyBib3RoIHZlY3RvciBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODBgKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSwgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB0aGlzLnggPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIGxlZnQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0TGVmdEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICBsZWZ0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gLXRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgcmlnaHQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtAbGluayBWZWN0b3IyfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldFJpZ2h0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIHJpZ2h0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gICAgICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJpcGxlX3Byb2R1Y3QjVmVjdG9yX3RyaXBsZV9wcm9kdWN0XG4gICAgICog7IS46re466i87Yq47JeQ7IScIOybkOygkOycvOuhnCDtlqXtlZjripQg67Cp7Zal7J2EIOywvuydhCDrlYwg7IKs7JqpXG4gICAgICovXG4gICAgc3RhdGljIHRyaXBsZVByb2R1Y3QoYSwgYiwgYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGNvbnN0IGFjID0gYS54ICogYy54ICsgYS55ICogYy55ICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgICAgICwgYmMgPSBiLnggKiBjLnggKyBiLnkgKiBjLnk7ICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuXG4gICAgICAgIC8vIHBlcmZvcm0gYiAqIGEuZG90KGMpIC0gYSAqIGIuZG90KGMpXG4gICAgICAgIHIueCA9IGIueCAqIGFjIC0gYS54ICogYmM7XG4gICAgICAgIHIueSA9IGIueSAqIGFjIC0gYS55ICogYmM7XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBwcm9qZWN0T250byh2ZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgICAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICAgICAgdGhpcy55ID0gY29lZmYgKiB2ZWMyLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ISg7ZiVIOuztOqwhFxuICAgICAqIGh0dHA6Ly9kZXZlbG9wdWcuYmxvZ3Nwb3QuY29tLzIwMTQvMDkvdW5pdHktdmVjdG9yLWxlcnAuaHRtbFxuICAgICAqIEBwYXJhbSB2ZWMxXG4gICAgICogQHBhcmFtIHZlYzJcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyBsZXJwKHZlYzEsIHZlYzIsIHRvKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMxLCAxIC0gdG8pLCBWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMiwgdG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsl63siJhcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmNwKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxIC8gdmVjdG9yLngsIDEgLyB2ZWN0b3IueSk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgYW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICBhbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGVEZWcoKTtcbiAgICB9XG5cblxuICAgIGRpcmVjdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZShhbmdsZSlcbiAgICB7XG4gICAgICAgIHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcm90YXRlRGVnKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgYW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUbyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyb3RhdGlvbi10aGlzLmFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG9EZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnkocm90YXRpb24pXG4gICAge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnlEZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB2ZWMueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFkgYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSAtIHZlYy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGVTcXVhcmVkKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VTcSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVNxKHZlYylcbiAgICB7XG4gICAgICAgIHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG4gICAgICAgICAgICBkeSA9IHRoaXMuZGlzdGFuY2VZKHZlYyk7XG5cbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGgoKTtcbiAgICAgKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLqOyInO2eiCDquLjsnbQg67mE6rWQ66W8IO2VmOugpOuptCBsZW5ndGgg66W8IOyCrOyaqe2VmOq4sCDrs7Tri6TripQgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOqyjCDruaDrpbTri6QuXG4gICAgICogbGVuZ3RoIOuKlCBNYXRoLnNxcnQgKOygnOqzseq3vCkg7LKY66as66W8IO2VmOq4sCDrlYzrrLjsl5Ag64uo7IicIOq4uOydtCDruYTqtZDsi5wgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg67mg66aF64uI64ukLlxuICAgICAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGhTcSgpO1xuICAgICAqICAgICAvLyA9PiAxMjUwMFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aFNxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbGVuZ3RoU3EodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgIH1cblxuXG4gICAgbWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuXG4gICAgdG8odmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjLnggLSB0aGlzLngsIHZlYy55IC0gdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHNldCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjLnplcm8oKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNaZXJvKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdGhpcyB2ZWN0b3IgaXMgdGhlIHNhbWUgYXMgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRXF1YWxUbyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBVdGlsaXR5IE1ldGhvZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9BcnJheSgpO1xuICAgICAqICAgICAvLyA9PiBbMTAsIDIwXVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0FycmF5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gICAgICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvT2JqZWN0KClcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlY3Rvci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBHSksgZnJvbSAnLi4vZ2prL0dKSyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlclxue1xuICAgIHN0YXRpYyBkcmF3TWlua293c2tpU3VtKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYXdNaW5rb3dza2lTdW0oJywgdmVydGljZXMxLmxlbmd0aCAqIHZlcnRpY2VzMi5sZW5ndGgsICcpJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2ZXJ0aWNlczIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCB2MSA9IHZlcnRpY2VzMVtpXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCB2MiA9IHZlcnRpY2VzMltqXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCBkaWZmID0gVmVjdG9yLnN1YnRyYWN0KHYxLCB2Mik7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGRpZmYpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGosIGB2ZWNbJHtkaWZmLnh9LCAke2RpZmYueX1dYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsUGF0aCA9IEdKSy5jcmVhdGVDb252ZXhIdWxsKHBhdGgpO1xuICAgICAgICBQYWludGVyLmRyYXdQb2x5Z29uKGNvbnZleEh1bGxQYXRoLCAxLCAweERERERERCwgMSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvbHlnb24odmVydGljZXMsIGxpbmVXaWR0aCA9IDEsIGNvbG9yID0gMHg2MDdEOEIsIGFscGhhID0gMC41KVxuICAgIHtcbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSB3aW5kb3cuZztcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKGxpbmVXaWR0aCwgY29sb3IsIGFscGhhKTtcblxuICAgICAgICBjb25zdCB2ZWMwID0gdmVydGljZXNbMF0uY2xvbmUoKTtcbiAgICAgICAgdmVjMC5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG5cbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHZlYzAueCwgdmVjMC55KTtcblxuICAgICAgICAvLyB0aGlzLmRyYXdUZXh0KHdpbmRvdy5zdGFnZSwgJygnICsgdmVjMC54LnRvRml4ZWQoMCkgKyAnLCcgKyB2ZWMwLnkudG9GaXhlZCgwKSArICcpJywgdmVjMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlYyA9IHZlcnRpY2VzW2ldLmNsb25lKCk7XG4gICAgICAgICAgICB2ZWMubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYy54LCB2ZWMueSk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lVG8odmVjMC54LCB2ZWMwLnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdUZXh0KHN0YWdlLCBzdHJpbmcsIHBvaW50LCBjb2xvciA9ICcjZmYzMzAwJylcbiAgICB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXcgUElYSS5UZXh0KHN0cmluZywge1xuICAgICAgICAgICAgLy8gZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIC8vIGZvbnRTaXplOiA0LFxuICAgICAgICAgICAgLy8gZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgZmlsbDogY29sb3IsXG4gICAgICAgICAgICAvLyBzdHJva2U6ICcjNGExODUwJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGV4dC54ID0gcG9pbnQueDtcbiAgICAgICAgdGV4dC55ID0gcG9pbnQueTtcblxuICAgICAgICBzdGFnZS5hZGRDaGlsZCh0ZXh0KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnQoZ3JhcGhpY3MsIHBvaW50LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBjb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHBvaW50LngsIHBvaW50LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5Qm91bmRzKGdyYXBoaWNzLCBib3VuZHMsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKVxuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocmVjdC5sdC54LCByZWN0Lmx0LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5ydC54LCByZWN0LnJ0LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5yYi54LCByZWN0LnJiLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5sYi54LCByZWN0LmxiLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5sdC54LCByZWN0Lmx0LnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHNCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0Lmx0LngsIHJlY3QubHQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LnJ0LngsIHJlY3QucnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LnJiLngsIHJlY3QucmIueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LmxiLngsIHJlY3QubGIueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzKGdyYXBoaWNzLCBwb2ludHMsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHAxID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgdmFyIHAyID0gcG9pbnRzW2kgKyAxIDwgcG9pbnRzLmxlbmd0aCA/IGkgKyAxIDogMF07XG5cbiAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICAgICBncmFwaGljcy5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3TGluZShncmFwaGljcywgcDAsIHAxLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMC54LCBwMC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAxLngsIHAxLnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdBcnJvdyhncmFwaGljcywgbW92ZVBvaW50LCB0b1BvaW50LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcsIHNjYWxlID0gNSlcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcih0b1BvaW50LnggLSBtb3ZlUG9pbnQueCwgdG9Qb2ludC55IC0gbW92ZVBvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgdmVjdG9yLmludmVydCgpLm11bHRpcGx5U2NhbGFyKDE1KTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7Ki9cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcihtb3ZlUG9pbnQueCAtIHRvUG9pbnQueCwgbW92ZVBvaW50LnkgLSB0b1BvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0RpcmVjdGlvbihncmFwaGljcywgbWUsIHRhcmdldCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43LCBzY2FsZSA9IDUpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcblxuICAgICAgICB2YXIgdG8gPSBtZS50byh0YXJnZXQpO1xuICAgICAgICB2YXIgbGVmdCA9IHRvLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdG8uY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgdG8uaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIHRvLngsIG1lLnkgKyB0by55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIGxlZnQueCwgbWUueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1lLnggKyByaWdodC54LCBtZS55ICsgcmlnaHQueSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1BhaW50ZXIuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG4vKipcbiAqIEdKSyBBbGdvcml0aG0gKEdpbGJlcnQtSm9obnNvbi1LZWVydGhpKVxuICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAqIGh0dHA6Ly93d3cuZHluNGoub3JnLzIwMTAvMDQvZ2prLWdpbGJlcnQtam9obnNvbi1rZWVydGhpLyNnamstdG9wXG4gKiBodHRwczovL3d3dy5oYXJvbGRzZXJyYW5vLmNvbS9ibG9nL3Zpc3VhbGl6aW5nLXRoZS1namstY29sbGlzaW9uLWFsZ29yaXRobVxuICogaHR0cHM6Ly9naXRodWIuY29tL2p1aGwvY29sbGlzaW9uLWRldGVjdGlvbi0yZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHSktcbntcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRvIGNvbXB1dGUgYXZlcmFnZSBjZW50ZXIgKHJvdWdobHkpLiBJdCBtaWdodCBiZSBkaWZmZXJlbnQgZnJvbVxuICAgICAqIENlbnRlciBvZiBHcmF2aXR5LCBlc3BlY2lhbGx5IGZvciBib2RpZXMgd2l0aCBub251bmlmb3JtIGRlbnNpdHksXG4gICAgICogYnV0IHRoaXMgaXMgb2sgYXMgaW5pdGlhbCBkaXJlY3Rpb24gb2Ygc2ltcGxleCBzZWFyY2ggaW4gR0pLXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUgdmVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIGF2ZXJhZ2VQb2ludCh2ZXJ0aWNlcylcbiAgICB7XG4gICAgICAgIGNvbnN0IGF2ZyA9IG5ldyBWZWN0b3IoKVxuICAgICAgICAgICAgLCBjb3VudCA9IHZlcnRpY2VzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGF2Zy54ICs9IHZlcnRpY2VzW2ldLng7XG4gICAgICAgICAgICBhdmcueSArPSB2ZXJ0aWNlc1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgYXZnLnggLz0gY291bnQ7XG4gICAgICAgIGF2Zy55IC89IGNvdW50O1xuXG4gICAgICAgIHJldHVybiBhdmc7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgZnVydGhlc3QgdmVydGV4IGFsb25nIGEgY2VydGFpbiBkaXJlY3Rpb25cbiAgICAgKiDqvK3sp4DsoJDqs7wg67Cp7Zal7J2EIOyghOuLrO2VmOuptCDrgrTsoIEgKO2IrOyYgSnsnYQg7Ya17ZW0IOy1nOuMgOuhnCDrqLwg7KKM7ZGc7J2YIOyduOuNseyKpOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUgdmVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIGluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgbWF4UHJvZHVjdCA9IFZlY3Rvci5kb3RQcm9kdWN0KGRpcmVjdGlvbiwgdmVydGljZXNbMF0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBjb3VudCA9IHZlcnRpY2VzLmxlbmd0aDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2R1Y3QgPiBtYXhQcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgbWF4UHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTWlua293c2tpIHN1bSBzdXBwb3J0IGZ1bmN0aW9uIGZvciBHSktcbiAgICAgKiDsp4Dsm5Ag7ZWo7IiY7JeQ7IScIO2PtOumrOqzpOydmCDtj6zsnbjtirjsmYAg67Cp7Zal7Jy866GcIOyEnOuhnCDri6Trpbgg67Cp7Zal7J2YIOygkOydhCDqtaztlZjqs6AgTWlua293c2tpIERpZmZlcmVuY2Ug66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmVydGljZXMxIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMiB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIOuyoe2EsFxuICAgICAqL1xuICAgIHN0YXRpYyBzdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2YgZmlyc3QgYm9keSBhbG9uZyBhbiBhcmJpdHJhcnkgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMSwgZGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2Ygc2Vjb25kIGJvZHkgYWxvbmcgdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBqID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczIsIFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihkaXJlY3Rpb24sIHRydWUpLCAnaTonICsgc3RyKHZlcnRpY2VzMVtpXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSwgdHJ1ZSksICdqOicgKyBzdHIodmVydGljZXMyW2pdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdXBwb3J0KCcgKyBzdHIoVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKSkgKyAnKScpO1xuICAgICAgICAvLyBzdWJ0cmFjdCAoTWlua293c2tpIHN1bSkgdGhlIHR3byBwb2ludHMgdG8gc2VlIGlmIGJvZGllcyAnb3ZlcmxhcCdcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIHZlcnRpY2VzMiB7VmVjdG9yW119XG4gICAgICogQHBhcmFuIGhpc3Rvcnkge0hpc3Rvcnl9IHNpbXBsZXgg7JmAIGRpcmVjdGlvbiDtnojsiqTthqDrpqxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g7Lap64+MIOyXrOu2gFxuICAgICAqL1xuICAgIHN0YXRpYyBjaGVja0NvbGxpc2lvbih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgaGlzdG9yeSA9IG51bGwpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpO1xuXG4gICAgICAgIGxldCBpdGVyQ291bnQgPSAwLCBpbmRleCA9IDA7ICAgLy8gaW5kZXggb2YgY3VycmVudCB2ZXJ0ZXggb2Ygc2ltcGxleFxuICAgICAgICBsZXQgYSwgYiwgYywgZCwgYW8sIGFiLCBhYywgYWJwZXJwLCBhY3BlcnAsXG4gICAgICAgICAgICBzaW1wbGV4ID0gbmV3IEFycmF5KDMpLCBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDMpO1xuXG4gICAgICAgIC8vIOuRkCDtj7Trpqzqs6Qg7KSR7IusIOyijO2RnOulvCDthrXtlbTshJwg67Cp7Zal7J2EIOq1rO2VqeuLiOuLpC5cbiAgICAgICAgY29uc3QgcG9zaXRpb24xID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMxKTsgLy8gbm90IGEgQ29HIGJ1dFxuICAgICAgICBjb25zdCBwb3NpdGlvbjIgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIC8vIOuwqe2WpSB2ZWN0b3JcbiAgICAgICAgZCA9IFZlY3Rvci5zdWJ0cmFjdChwb3NpdGlvbjEsIHBvc2l0aW9uMik7XG5cbiAgICAgICAgLy8gaWYgaW5pdGlhbCBkaXJlY3Rpb24gaXMgemVybyDigJMgc2V0IGl0IHRvIGFueSBhcmJpdHJhcnkgYXhpcyAod2UgY2hvb3NlIFgpXG4gICAgICAgIGlmICgoZC54ID09IDApICYmIChkLnkgPT0gMCkpIHtcbiAgICAgICAgICAgIGQueCA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgc3VwcG9ydCBhcyBpbml0aWFsIHBvaW50IG9mIHRoZSBuZXcgc2ltcGxleFxuICAgICAgICBhID0gc2ltcGxleFswXSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgIGRpcmVjdGlvbnNbMF0gPSBkO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG5cbiAgICAgICAgLy8gc3VwcG9ydCDsoJDqs7wg67Cp7Zal7J20IOqwmeydgCDrsKntlqXsnbQg7JWE64uQIOqyveyasFxuICAgICAgICBpZiAoYS5kb3QoZCkgPD0gMCkge1xuICAgICAgICAgICAgLy8g66eI7KeA66eJ7JeQIOy2lOqwgCDrkJwg7KCQ7J20IGTsnZgg67Cp7Zal7Jy866GcIOybkOygkOydhCDsp4DrgpjsuZjsp4Ag7JWK7J2AIOqyveyasFxuICAgICAgICAgICAgLy8g6re4IOuLpOydjCBNaW5rb3dza2kg7ZWp7J2AIOybkOygkOydhCDtj6ztlagg7ZWgIOyImCDsl4bsirXri4jri6QuXG4gICAgICAgICAgICAvLyDstpTqsIAg65CcIOuniOyngOuniSDsoJDsnYAgTWlua293c2tpIERpZmZlcmVuY2XsnZgg6rCA7J6l7J6Q66as7JeQIOyeiOyKteuLiOuLpC5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgICAgICAgQ0FTRTFbJywgJ05PJywgJ10nKTtcblxuICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgIH1cblxuICAgICAgICBkID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gVGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBhbHdheXMgdG93YXJkcyB0aGUgb3JpZ2luLCBzbyB0aGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIG5lZ2F0ZShhKVxuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpdGVyQ291bnQrKztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlckNvdW50KTtcblxuICAgICAgICAgICAgYSA9IHNpbXBsZXhbKytpbmRleF0gPSB0aGlzLnN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuICAgICAgICAgICAgZGlyZWN0aW9uc1tpbmRleF0gPSBkO1xuXG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICAgICAgIENBU0UyWycsICdOTycsICddJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYeqwgCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuyoe2EsOuKlCAtYSDrpbwg7ZWY66m0IOuQqeuLiOuLpC5cbiAgICAgICAgICAgIGFvID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gZnJvbSBwb2ludCBBIHRvIE9yaWdpbiBpcyBqdXN0IG5lZ2F0aXZlIEFcblxuICAgICAgICAgICAgLy8gc2ltcGxleCBoYXMgMiBwb2ludHMgKGEgbGluZSBzZWdtZW50LCBub3QgYSB0cmlhbmdsZSB5ZXQpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAyKSB7XG5cbiAgICAgICAgICAgICAgICBiID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYik7IC8vIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuXG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5sZW5ndGhTcShkKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnBlcnBlbmRpY3VsYXIoYWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gc2tpcCB0byBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiID0gc2ltcGxleFsxXTtcbiAgICAgICAgICAgIGMgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICBhYyA9IFZlY3Rvci5zdWJ0cmFjdChjLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIENcblxuICAgICAgICAgICAgLy9hY+yZgCDsiJjsp4FcbiAgICAgICAgICAgIGFjcGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhYywgYWMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYScsIGEsICdiJywgYiwgJ2MnLCBjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbycsIGFvLCAnYWInLCBhYiwgJ2FjJywgYWMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjcGVycCcsIGFjcGVycCwgYWNwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFjcGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAvLyBhYyDsiJjsp4Eg7ISg67aE7J20IGHqsIAg7JuQ7KCQ7J2EIO2Wpe2VmOuKlCDrsKntlqUg67CY64yA7Y647JeQIOyeiOqzoFxuICAgICAgICAgICAgLy8g7KaJLCBhYyDsiJjsp4Eg7ISg67aEIOyViOyqveyXkCDsm5DsoJDsnbQg7J6I7Jy866m0XG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGQgPSBhY3BlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luJywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aEXG4gICAgICAgICAgICAgICAgYWJwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FicGVycCcsIGFicGVycCwgYWJwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhYnBlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pKTtcblxuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoTsnbQg7JuQ7KCQIOuwmOuMgCDrsKntlqXsnYQg7Zal7ZWY6rOgIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIC8vIOymiSwg7JuQ7KCQ7J20IOyCvOqwge2YlSDslYjsl5Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pIDwgMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2ltcGxleFswXSA9IHNpbXBsZXhbMV07IC8vIHN3YXAgZmlyc3QgZWxlbWVudCAocG9pbnQgQylcbiAgICAgICAgICAgICAgICBkID0gYWJwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaW1wbGV4WzFdID0gc2ltcGxleFsyXTsgLy8gc3dhcCBlbGVtZW50IGluIHRoZSBtaWRkbGUgKHBvaW50IEIpXG4gICAgICAgICAgICAtLWluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcmVhdGVDb252ZXhIdWxsKHBvaW50cylcbiAgICB7XG4gICAgICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICAgICAgdmFyIGkwID0gMDtcbiAgICAgICAgdmFyIHgwID0gcG9pbnRzWzBdLng7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHBvaW50c1tpXS54O1xuICAgICAgICAgICAgaWYgKHggPiB4MCB8fCAoeCA9PSB4MCAmJiBwb2ludHNbaV0ueSA8IHBvaW50c1tpMF0ueSkpIHtcbiAgICAgICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG4gPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICB2YXIgaHVsbCA9IFtdO1xuICAgICAgICB2YXIgbSA9IDA7XG4gICAgICAgIHZhciBpaCA9IGkwO1xuXG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgICAgIHZhciBpZSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciByID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tpZV0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2pdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciBjID0gVmVjdG9yLmNyb3NzKHIsIHYpO1xuICAgICAgICAgICAgICAgIGlmIChjIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ29sbGluZWFyaXR5IGNoZWNrXG4gICAgICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aFNxKCkgPiByLmxlbmd0aFNxKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbSsrO1xuICAgICAgICAgICAgaWggPSBpZTtcblxuICAgICAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb3B5IHZlcnRpY2VzXG4gICAgICAgIHZhciBuZXdQb2ludHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHBvaW50c1todWxsW2ldXTtcbiAgICAgICAgICAgIG5ld1BvaW50cy5wdXNoKG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1BvaW50cztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtaWRwb2ludChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoKGEueCArIGIueCkgLyAyLCAoYS55ICsgYi55KSAvIDIpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKGluZGV4LCB2ZXJ0ZXgueCwgdmVydGV4LnkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczEnKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGRlYnVnVmVydGljZXModmVydGljZXMxKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczInKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGRlYnVnVmVydGljZXModmVydGljZXMyKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xufVxuXG5mdW5jdGlvbiBzdHIodmVydGV4LCBpc0ZpeGVkID0gZmFsc2UpIHtcbiAgICBpZiAoaXNGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGAoJHt2ZXJ0ZXgueH0sJHt2ZXJ0ZXgueX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGAoJHt2ZXJ0ZXgueC50b0ZpeGVkKDIpfSwke3ZlcnRleC55LnRvRml4ZWQoMil9KWA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL0dKSy5qcyIsImltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9zcmMvc2F0L1BvaW50JztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi4vLi4vc3JjL3NhdC9DaXJjbGUnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc3JjL3NhdC9Qb2x5Z29uJztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi8uLi9zcmMvdXRpbHMvUGFpbnRlcic7XG5pbXBvcnQgTW91c2UgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL01vdXNlJztcbmltcG9ydCBLZXlDb2RlIGZyb20gJy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5cbmNvbnN0IGdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICwgZGVidWdHcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAsIHNoYXBlcyA9IFtdXG4gICAgLCBMSU5FX0NPTE9SID0gMHg4NEQyRjZcbiAgICAsIEFSUk9XX0NPTE9SID0gMHhFNTczNzM7XG5cbmxldCBwb2x5Z29uUG9pbnRzID0gW1xuICAgIFtuZXcgUG9pbnQoMzUwLCAzNTApLCBuZXcgUG9pbnQoMzUwLCA1MDApLCBuZXcgUG9pbnQoNTAwLCA1MDApXSxcbiAgICBbbmV3IFBvaW50KDUwMCwgMjAwKSwgbmV3IFBvaW50KDQ4MCwgMjUwKSwgbmV3IFBvaW50KDYwMCwgMjUwKSwgbmV3IFBvaW50KDYyMCwgMjAwKV0sXG4gICAgW25ldyBQb2ludCgyNTgsIDEyMCksIG5ldyBQb2ludCgyOTUsIDIzMCksIG5ldyBQb2ludCgyMDAsIDMwMCksIG5ldyBQb2ludCgxMDUsIDIzMCksIG5ldyBQb2ludCgxNDIsIDEyMCldXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgUElYSS5Db250YWluZXJcbntcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgd2luZG93WydnJ10gPSBkZWJ1Z0dyYXBoaWNzO1xuXG4gICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci52aWV3O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgaW5pdGlhbGl6ZSgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGRlYnVnR3JhcGhpY3MpO1xuXG4gICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcbiAgICAgICAgdGhpcy5sYXN0ZHJhZyA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vdGhpcy5jcmVhdGVQb2x5Z29uKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlUG9seWdvbk1hbnVhbCgpO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcblxuICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBhZGRFdmVudCgpXG4gICAge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XG4gICAgICAgIHRoaXMub24oJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZSgpIHt9XG5cblxuICAgIHJlc2l6ZSgpXG4gICAge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG5cbiAgICBnZXRQb2x5Z29uUG9pbnRzKHR4LCB0eSwgYW5nbGUsIHJhZGl1cyA9IDEwMClcbiAgICB7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuXG4gICAgICAgIC8vIG1ha2luZyBwb2ludHMsIHBhdGhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmdsZTsgaSArKykge1xuICAgICAgICAgICAgbGV0IHggPSB0eCArIChyYWRpdXMgKiAtTWF0aC5zaW4odGhpcy50b1JhZGlhbigzNjAgLyBhbmdsZSAqIGkpKSk7XG4gICAgICAgICAgICBsZXQgeSA9IHR5ICsgKHJhZGl1cyAqICBNYXRoLmNvcyh0aGlzLnRvUmFkaWFuKDM2MCAvIGFuZ2xlICogaSkpKTtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG5ldyBQSVhJLlBvaW50KHgsIHkpO1xuICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cblxuICAgIHRvUmFkaWFuKGRlZ3JlZSlcbiAgICB7XG4gICAgICAgIHJldHVybiBkZWdyZWUgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUG9seWdvbih1c2VSYW5kb21Sb3RhdGUgPSBmYWxzZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2x5Z29uUG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9seWdvbiA9IG5ldyBQb2x5Z29uKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHBvaW50cyA9IHBvbHlnb25Qb2ludHNbaV07XG5cbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHVzZVJhbmRvbVJvdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlU2hhcGUocG9seWdvbiwgTWF0aC5yYW5kb20oKSAqIDQ1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hhcGVzLnB1c2gocG9seWdvbik7XG5cbiAgICAgICAgICAgIHBvbHlnb24uY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNyZWF0ZVBvbHlnb25NYW51YWwoKVxuICAgIHtcbiAgICAgICAgbGV0IHJhZGl1cyA9IDEwMCxcbiAgICAgICAgICAgIGRpYW1ldGVyID0gMjAwLFxuICAgICAgICAgICAgc3BhY2UgPSAyMCxcbiAgICAgICAgICAgIGEgPSByYWRpdXMgKyBzcGFjZSxcbiAgICAgICAgICAgIGIgPSByYWRpdXMgKyBkaWFtZXRlciArIHNwYWNlICogMixcbiAgICAgICAgICAgIGMgPSByYWRpdXMgKyBkaWFtZXRlciAqIDIgKyBzcGFjZSAqIDM7XG5cbiAgICAgICAgcG9seWdvblBvaW50cyA9IFtdO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGEsIDMpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBhLCA0KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYywgYSwgNSkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGIsIDYpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBiLCA3KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYywgYiwgOCkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGMsIDkpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBjLCAxMCkpO1xuICAgICAgICB0aGlzLmFkZENpcmNsZShjLCBjLCByYWRpdXMpO1xuICAgICAgICAvL3RoaXMuYWRkQ2lyY2xlKGMsIGMsIHJhZGl1cyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVQb2x5Z29uKHRydWUpO1xuICAgIH1cblxuXG4gICAgYWRkUG9seWdvbihpbmRleCwgdXNlUmFuZG9tUm90YXRlID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIGxldCBwb2x5Z29uID0gbmV3IFBvbHlnb24odGhpcy5jb250ZXh0KTtcblxuICAgICAgICBsZXQgcG9pbnRzID0gcG9seWdvblBvaW50c1tpbmRleF07XG5cbiAgICAgICAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgICBwb2x5Z29uLmFkZFBvaW50KHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXNlUmFuZG9tUm90YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNoYXBlKHBvbHlnb24sIChNYXRoLnJhbmRvbSgpICogNDUpICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2x5Z29uLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICBzaGFwZXMucHVzaChwb2x5Z29uKTtcbiAgICB9XG5cblxuICAgIGFkZENpcmNsZSh4LCB5LCByYWRpdXMpXG4gICAge1xuICAgICAgICBsZXQgY2lyY2xlID0gbmV3IENpcmNsZSh0aGlzLmNvbnRleHQsIHgsIHksIHJhZGl1cyk7XG4gICAgICAgIGNpcmNsZS5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgc2hhcGVzLnB1c2goY2lyY2xlKTtcbiAgICAgICAgdGhpcy5jaXJjbGUgPSBjaXJjbGU7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVSZW5kZXIoKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgcG9seWdvbi5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBkZXRlY3RDb2xsaXNpb25zKClcbiAgICB7XG4gICAgICAgIGxldCBkcmFnU2hhcGUgPSB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkO1xuXG4gICAgICAgIGlmICghZHJhZ1NoYXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcblxuICAgICAgICAgICAgaWYgKHNoYXBlICE9PSBkcmFnU2hhcGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbXR2ID0gZHJhZ1NoYXBlLmNvbGxpZGVzV2l0aChzaGFwZSk7XG5cbiAgICAgICAgICAgICAgICAvLyDstqnrj4wg7YyQ7KCVXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uRGV0ZWN0ZWQobXR2KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVTaGFwZUJ5TVRWKG10diwgZHJhZ1NoYXBlLCBzaGFwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIG10duuhnCDstqnrj4wg7YyQ7KCVXG4gICAgICogQHBhcmFtIG10dlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbGxpc2lvbkRldGVjdGVkKG10dilcbiAgICB7XG4gICAgICAgIC8vIOy2qeuPjCDtjJDsoJVcbiAgICAgICAgaWYgKG10di5heGlzICE9IHVuZGVmaW5lZCB8fCBtdHYub3ZlcmxhcCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgY2hlY2tNVFZBeGlzRGlyZWN0aW9uKG10diwgY29sbGlkZXIsIGNvbGxpZGVlKVxuICAgIHtcbiAgICAgICAgaWYgKG10di5heGlzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IGNvbGxpZGVyQ2VudGVyID0gVmVjdG9yLmZyb21PYmplY3QoY29sbGlkZXIuZ2V0Q2VudGVyKCkpLFxuICAgICAgICAgICAgY29sbGlkZWVDZW50ZXIgPSBWZWN0b3IuZnJvbU9iamVjdChjb2xsaWRlZS5nZXRDZW50ZXIoKSksXG4gICAgICAgICAgICBjZW50ZXJWZWN0b3IgPSBjb2xsaWRlZUNlbnRlci5zdWJ0cmFjdChjb2xsaWRlckNlbnRlciksXG4gICAgICAgICAgICBjZW50ZXJVbml0VmVjdG9yID0gVmVjdG9yLmZyb21PYmplY3QoY2VudGVyVmVjdG9yKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBpZiAoY2VudGVyVW5pdFZlY3Rvci5kb3RQcm9kdWN0KG10di5heGlzKSA+IDApIHtcbiAgICAgICAgICAgIG10di5heGlzLnggPSAtbXR2LmF4aXMueDtcbiAgICAgICAgICAgIG10di5heGlzLnkgPSAtbXR2LmF4aXMueTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG10dlxuICAgICAqIEBwYXJhbSBjb2xsaWRlciDstqnrj4ztlZwg6rCd7LK0XG4gICAgICogQHBhcmFtIGNvbGxpZGVlIOy2qeuPjOydhCDri7ntlZwg6rCd7LK0XG4gICAgICovXG4gICAgbW92ZVNoYXBlQnlNVFYobXR2LCBjb2xsaWRlciwgY29sbGlkZWUpXG4gICAge1xuICAgICAgICBpZiAobXR2LmF4aXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbXR2LmF4aXMgPSBuZXcgVmVjdG9yKDEsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGR4ID0gbXR2LmF4aXMueCAqIG10di5vdmVybGFwLFxuICAgICAgICAgICAgZHkgPSBtdHYuYXhpcy55ICogbXR2Lm92ZXJsYXA7XG5cbiAgICAgICAgbGV0IGRyYWdWZWN0b3IgPSB0aGlzLmRyYWdWZWN0b3IsXG4gICAgICAgICAgICBjZW50ZXJDb2xsaWRlciA9IGNvbGxpZGVyLmdldENlbnRlcigpLFxuICAgICAgICAgICAgY2VudGVyQ29sbGlkZWUgPSBjb2xsaWRlZS5nZXRDZW50ZXIoKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IoY2VudGVyQ29sbGlkZWUueCAtIGNlbnRlckNvbGxpZGVyLngsIGNlbnRlckNvbGxpZGVlLnkgLSBjZW50ZXJDb2xsaWRlci55KSxcbiAgICAgICAgICAgIGRpcmVjdGlvbk5vcm0gPSBkaXJlY3Rpb24ubm9ybSgpLFxuICAgICAgICAgICAgb3ZlcmxhcFZlY3RvciA9IG5ldyBWZWN0b3IoZHgsIGR5KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog64K07KCB7J20IC0x7J2066m0IOuwmOuMgCDrsKntlqXsnYQg67O064qUIOqyg1xuICAgICAgICAgKiDrgrTsoIHsnbQgMOydtOuptCDsiJjsp4FcbiAgICAgICAgICog64K07KCB7J20IDHsnbgg6rK97JqwIOqwmeydgCDrsKntlqXsnYQg6rCA66as7YKk64qUIOqyg1xuICAgICAgICAgKiDrgrTsoIHsnbQgPiAwLjgg64uk66m0IOqwmeydgCDrsKntlqXsnYQg67O06rOgIOyeiOuKlCDsg4Htg5xcbiAgICAgICAgICovXG4gICAgICAgIGxldCBkb3QgPSBkcmFnVmVjdG9yLmRvdFByb2R1Y3Qob3ZlcmxhcFZlY3Rvcik7XG5cbiAgICAgICAgaWYgKGRvdCA8IDApIHtcbiAgICAgICAgICAgIGR4ID0gLWR4O1xuICAgICAgICAgICAgZHkgPSAtZHk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYyA9IGNvbGxpZGVlLmdldENlbnRlcigpLFxuICAgICAgICAgICAgdG8gPSBuZXcgVmVjdG9yKGR4LCBkeSksXG4gICAgICAgICAgICB0b05vcm1hbGl6ZSA9IHRvLmNsb25lKCkubm9ybSgpLFxuICAgICAgICAgICAgZG90VG8gPSBkaXJlY3Rpb25Ob3JtLmRvdFByb2R1Y3QodG9Ob3JtYWxpemUpLFxuICAgICAgICAgICAgY2VudGVyID0gbmV3IFZlY3RvcihjLngsIGMueSk7XG4gICAgICAgIHRvID0gY2VudGVyLmNsb25lKCkuc3VidHJhY3QodG8pO1xuXG4gICAgICAgIC8vIOuRkCDqsJ3ssrTsnZgg67Cp7ZalIOuyoe2EsOyZgCDrsIDslrTrgrTripQg67Cx7YSwKHRvKeydmCDrgrTsoIHsnbQgMOuztOuLpCDtgbQg6rK97JqwLCDspokg67CA7Ja0IOuCtOuKlCDrsKntlqXsnbQg67CA7Ja064K064qUIOuwqe2WpeydvCDrlYzrp4wg7KCB7JqpXG4gICAgICAgIGlmIChkb3RUbyA+PSAwKSB7XG4gICAgICAgICAgICBQYWludGVyLmRyYXdBcnJvdyh3aW5kb3cuZywgY2VudGVyLCB0bywgZmFsc2UsIDEsIEFSUk9XX0NPTE9SKTtcbiAgICAgICAgICAgIC8vUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIHRoaXMuY2lyY2xlLmdldENlbnRlcigpLCBmYWxzZSwgMTAsIDB4ZmYzMzAwLCAwLjIpO1xuICAgICAgICAgICAgY29sbGlkZWUubW92ZShkeCwgZHkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByb3RhdGVTaGFwZShzaGFwZSwgZGVncmVlcylcbiAgICB7XG4gICAgICAgIC8vZGVncmVlcyA9IDkwO1xuICAgICAgICBsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXG4gICAgICAgIGlmIChwb2ludHMpIHtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSBzaGFwZS5nZXRDZW50ZXIoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgIHBvaW50c1tpXSA9IHRoaXMucm90YXRpb25Qb2ludChjZW50ZXIsIHBvaW50LCBkZWdyZWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ZqM7KCE7ZWY64qUIOyijO2RnCDqtaztlZjquLBcbiAgICAgKiBAcGFyYW0gcGl2b3Qg7IKs6rCB7ZiV7J2YIOykkeyLrOygkFxuICAgICAqIEBwYXJhbSBwb2ludCDqs4TsgrDtlZjqs6Ag7Iu27J2AIO2PrOyduO2KuFxuICAgICAqIEBwYXJhbSBkZWdyZWVzIO2ajOyghOqwgSBkZWdyZWVzXG4gICAgICogQHJldHVybnMge3t4OiAobnVtYmVyfCopLCB5OiAobnVtYmVyfCopfX1cbiAgICAgKi9cbiAgICByb3RhdGlvblBvaW50KHBpdm90LCBwb2ludCwgZGVncmVlcylcbiAgICB7XG4gICAgICAgIGxldCBkaWZmWCA9IHBvaW50LnggLSBwaXZvdC54O1xuICAgICAgICBsZXQgZGlmZlkgPSBwb2ludC55IC0gcGl2b3QueTtcbiAgICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkpO1xuICAgICAgICBsZXQgY2EgPSBNYXRoLmF0YW4yKGRpZmZZLCBkaWZmWCkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGxldCBuYSA9ICgoY2EgKyBkZWdyZWVzKSAlIDM2MCkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGxldCB4ID0gKHBpdm90LnggKyBkaXN0ICogTWF0aC5jb3MobmEpICsgMC41KSB8IDA7XG4gICAgICAgIGxldCB5ID0gKHBpdm90LnkgKyBkaXN0ICogTWF0aC5zaW4obmEpICsgMC41KSB8IDA7XG4gICAgICAgIHJldHVybiB7eDogeCwgeTogeX07XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlRG93bigpXG4gICAge1xuICAgICAgICBkZWJ1Z0dyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQb2ludCA9IFZlY3Rvci5mcm9tT2JqZWN0KE1vdXNlLmdsb2JhbCk7XG5cbiAgICAgICAgc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hhcGUuaXNQb2ludEluUGF0aChjdXJyZW50UG9pbnQueCwgY3VycmVudFBvaW50LnkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQueSA9IGN1cnJlbnRQb2ludC55O1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueSA9IGN1cnJlbnRQb2ludC55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG9uTW91c2VNb3ZlKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudFBvaW50LCBkcmFnVmVjdG9yO1xuXG4gICAgICAgIGlmICh0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9pbnQgPSBWZWN0b3IuZnJvbU9iamVjdChNb3VzZS5nbG9iYWwpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdWZWN0b3IgPSBkcmFnVmVjdG9yID0gY3VycmVudFBvaW50LmNsb25lKCkuc3VidHJhY3QodGhpcy5sYXN0ZHJhZyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQubW92ZShkcmFnVmVjdG9yLngsIGRyYWdWZWN0b3IueSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy55ID0gY3VycmVudFBvaW50Lnk7XG5cbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9ucygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25Nb3VzZVVwKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvL1xuICAgIC8vIFRlc3Qg7ZWo7IiYXG4gICAgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICBvbktleVVwKGUpXG4gICAge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQ0FQRTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmcuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLk5VTUJFUl8xOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTlVNQkVSXzI6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3Qvc2F0L1Rlc3QuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFxue1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1BvaW50LmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFByb2plY3Rpb24gZnJvbSAnLi9Qcm9qZWN0aW9uJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIFNoYXBlXG57XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgeCwgeSwgcmFkaXVzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSAnQ2lyY2xlJztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDspJHsoJAg7KKM7ZGcIOuwmO2ZmFxuICAgICAqIEByZXR1cm5zIHtQSVhJLlBvaW50fCp8c3ZnLlBvaW50fVxuICAgICAqL1xuICAgIGdldENlbnRlcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFBJWEkuUG9pbnQodGhpcy54LHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICBpZiAoc2hhcGUucmFkaXVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUoc2hhcGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLypcbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICB2YXIgYXhlcyA9IHNoYXBlLmdldEF4ZXMoKSwgZGlzdGFuY2U7XG5cbiAgICAgICAgaWYgKGF4ZXMgPT09IHVuZGVmaW5lZCkgeyAvL+ybkFxuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coc2hhcGUueCAtIHRoaXMueCwgMikgK1xuICAgICAgICAgICAgICAgIE1hdGgucG93KHNoYXBlLnkgLSB0aGlzLnksIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZSA8IE1hdGguYWJzKHRoaXMucmFkaXVzICsgc2hhcGUucmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUoc2hhcGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgICovXG5cblxuICAgIGdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpXG4gICAge1xuICAgICAgICBsZXQgbWluID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNpcmNsZVZlY3RvciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNpcmNsZSksXG4gICAgICAgICAgICBsZW5ndGgsIHRlc3RQb2ludFZlY3RvciwgY2xvc2VzdFBvaW50O1xuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IHBvbHlnb24ucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXN0UG9pbnRWZWN0b3IgPSBWZWN0b3IuZnJvbU9iamVjdChwb2x5Z29uLnBvaW50c1tpXSk7XG4gICAgICAgICAgICB0ZXN0UG9pbnRWZWN0b3IuaW5kZXggPSBpO1xuICAgICAgICAgICAgbGVuZ3RoID0gdGVzdFBvaW50VmVjdG9yLmNsb25lKCkuZGlzdGFuY2UoY2lyY2xlKTtcblxuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGxlbmd0aDtcbiAgICAgICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSB0ZXN0UG9pbnRWZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xvc2VzdFBvaW50LmNsb25lKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6TqsIHtmJXqs7wg7JuQ7ZiVIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gcG9seWdvblxuICAgICAqIEBwYXJhbSBjaXJjbGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICAvKnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUocG9seWdvbiwgY2lyY2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBheGVzID0gcG9seWdvbi5nZXRBeGVzKCksXG4gICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSB0aGlzLmdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpO1xuXG4gICAgICAgIGF4ZXMucHVzaCh0aGlzLmdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpKTtcblxuICAgICAgICByZXR1cm4gIXBvbHlnb24uc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBjaXJjbGUpO1xuICAgIH0qL1xuXG5cbiAgICBnZXRDaXJjbGVBeGlzKGNpcmNsZSwgY2xvc2VzdFBvaW50KVxuICAgIHtcbiAgICAgICAgdmFyIHYxID0gbmV3IFZlY3RvcihjaXJjbGUueCwgY2lyY2xlLnkpLFxuICAgICAgICAgICAgdjIgPSBuZXcgVmVjdG9yKGNsb3Nlc3RQb2ludC54LCBjbG9zZXN0UG9pbnQueSksXG4gICAgICAgICAgICBzdXJmYWNlVmVjdG9yID0gdjEuc3VidHJhY3QodjIpO1xuXG4gICAgICAgIFBhaW50ZXIuZHJhd1BvaW50KHdpbmRvdy5nLCBjbG9zZXN0UG9pbnQsIGZhbHNlLCA1LCAweGZmMzMwMCwgMC4zKTtcbiAgICAgICAgLy9QYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLCBWZWN0b3IuZnJvbU9iamVjdChjaXJjbGUpLCBWZWN0b3IuZnJvbU9iamVjdChjbG9zZXN0UG9pbnQpLCBmYWxzZSwgMSwgMHhmZjMzMDAsIDAuMyk7XG5cbiAgICAgICAgcmV0dXJuIHN1cmZhY2VWZWN0b3Iubm9ybWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICBwcm9qZWN0KGF4aXMpXG4gICAge1xuICAgICAgICBsZXQgc2NhbGFycyA9IFtdLFxuICAgICAgICAgICAgcG9pbnQgPSBuZXcgUElYSS5Qb2ludCh0aGlzLngsIHRoaXMueSksXG4gICAgICAgICAgICBwb2ludFZlY3RvciA9IG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSksXG4gICAgICAgICAgICBkb3RQcm9kdWN0ID0gcG9pbnRWZWN0b3IuZG90UHJvZHVjdChheGlzKTtcblxuICAgICAgICBzY2FsYXJzLnB1c2goZG90UHJvZHVjdCk7XG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0ICsgdGhpcy5yYWRpdXMpO1xuICAgICAgICBzY2FsYXJzLnB1c2goZG90UHJvZHVjdCAtIHRoaXMucmFkaXVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3Rpb24oXG4gICAgICAgICAgICBNYXRoLm1pbi5hcHBseShNYXRoLCBzY2FsYXJzKSxcbiAgICAgICAgICAgIE1hdGgubWF4LmFwcGx5KE1hdGgsIHNjYWxhcnMpXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBnZXRBeGVzKClcbiAgICB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQYXRoKGdyYXBoaWNzLCBsaW5lQ29sb3IgPSAweEZGRkZGRilcbiAgICB7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBsaW5lQ29sb3IpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8odGhpcy54ICsgdGhpcy5yYWRpdXMsIHRoaXMueSk7XG4gICAgICAgIGdyYXBoaWNzLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgfVxuXG5cbiAgICBtb3ZlKGR4LCBkeSlcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBkeDtcbiAgICAgICAgdGhpcy55ICs9IGR5O1xuICAgIH1cblxuXG4gICAgaXNQb2ludEluUGF0aCh4LCB5KVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgaXNQb2ludEluUGF0aCA9IHRoaXMuY29udGV4dC5pc1BvaW50SW5QYXRoKHgsIHkpO1xuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gaXNQb2ludEluUGF0aDtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvQ2lyY2xlLmpzIiwiaW1wb3J0IE1UViBmcm9tICcuL01UVic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgbWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKGF4ZXMsIHNoYXBlKSB7XG4gICAgICAgIHZhciBtaW5pbXVtT3ZlcmxhcCA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBvdmVybGFwLCBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCxcbiAgICAgICAgICAgIGF4aXMsIHByb2plY3Rpb24xLCBwcm9qZWN0aW9uMjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF4ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGF4aXMgPSBheGVzW2ldO1xuICAgICAgICAgICAgcHJvamVjdGlvbjEgPSBzaGFwZS5wcm9qZWN0KGF4aXMpO1xuICAgICAgICAgICAgcHJvamVjdGlvbjIgPSB0aGlzLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICBvdmVybGFwID0gcHJvamVjdGlvbjEuZ2V0T3ZlcmxhcChwcm9qZWN0aW9uMik7XG5cbiAgICAgICAgICAgIC8qUGFpbnRlci5kcmF3TGluZSh3aW5kb3cuZyxcbiAgICAgICAgICAgICAgICB7eDpheGlzLnggKiBwcm9qZWN0aW9uMS5taW4sIHk6YXhpcy55ICogcHJvamVjdGlvbjEubWlufSxcbiAgICAgICAgICAgICAgICB7eDpheGlzLnggKiBwcm9qZWN0aW9uMi5tYXgsIHk6YXhpcy55ICogcHJvamVjdGlvbjIubWF4fSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTsqL1xuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcCA9PT0gMCkgeyAvL+y2qeuPjCDsl4bsirQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBNVFYoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCA8IG1pbmltdW1PdmVybGFwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1PdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXAgPSBheGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTVRWKG1pbmltdW1PdmVybGFwLCBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrkZAg64uk6rCB7ZiVIOyCrOydtOyXkOyEnCDstqnrj4xcbiAgICAgKiBAcGFyYW0gcDFcbiAgICAgKiBAcGFyYW0gcDJcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBwb2x5Z29uQ29sbGlkZXNXaXRoUG9seWdvbihwMSwgcDIpIHtcbiAgICAgICAgdmFyIG10djEgPSBwMS5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IocDEuZ2V0QXhlcygpLCBwMiksXG4gICAgICAgICAgICBtdHYyID0gcDEubWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKHAyLmdldEF4ZXMoKSwgcDIpO1xuXG4gICAgICAgIGlmIChtdHYxLm92ZXJsYXAgPT09IDAgJiYgbXR2Mi5vdmVybGFwID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1UVigwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtdHYxLm92ZXJsYXAgPCBtdHYyLm92ZXJsYXAgPyBtdHYxIDogbXR2MjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog65GQIOybkO2YleyXkCDrjIDtlZwg7Lap64+MXG4gICAgICogQHBhcmFtIGMxXG4gICAgICogQHBhcmFtIGMyXG4gICAgICovXG4gICAgY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlKGMxLCBjMikge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coYzIueCAtIGMxLngsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KGMyLnkgLSBjMS55LCAyKSksXG4gICAgICAgICAgICBvdmVybGFwID0gTWF0aC5hYnMoYzEucmFkaXVzICsgYzIucmFkaXVzKSAtIGRpc3RhbmNlO1xuXG4gICAgICAgIHJldHVybiBvdmVybGFwIDwgMCA/XG4gICAgICAgICAgICBuZXcgTVRWKDApIDpcbiAgICAgICAgICAgIG5ldyBNVFYob3ZlcmxhcCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6TqsIHtmJXqs7wg7JuQ7ZiVIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gcG9seWdvblxuICAgICAqIEBwYXJhbSBjaXJjbGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSkge1xuICAgICAgICB2YXIgYXhlcyA9IHBvbHlnb24uZ2V0QXhlcygpLFxuICAgICAgICAgICAgY2xvc2VzdFBvaW50ID0gY2lyY2xlLmdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpO1xuXG4gICAgICAgIC8vIFBhaW50ZXIuZHJhd1BvaW50KHdpbmRvdy5nLCBjbG9zZXN0UG9pbnQsIGZhbHNlLCA1LCAweEU1NzM3Myk7XG5cbiAgICAgICAgYXhlcy5wdXNoKGNpcmNsZS5nZXRDaXJjbGVBeGlzKGNpcmNsZSwgY2xvc2VzdFBvaW50KSk7XG5cbiAgICAgICAgcmV0dXJuIHBvbHlnb24ubWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKGF4ZXMsIGNpcmNsZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstpXsl5Ag7Yis7JiB7ZWY7JesIOu2hOumrOqwgCDsnojsnLzrqbQgdHJ1ZSDrsJjtmZgo7Lap64+M65CY7KeAIOyViuyVmOuLpOuptCB0cnVlIOuwmO2ZmClcbiAgICAgKiBAcGFyYW0gb3RoZXJTaGFwZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbGxpZGVzV2l0aChzaGFwZSkge1xuICAgICAgICB2YXIgYXhlcyA9IHRoaXMuZ2V0QXhlcygpLmNvbmNhdChzaGFwZS5nZXRBeGVzKCkpO1xuICAgICAgICByZXR1cm4gIXRoaXMuc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBzaGFwZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrtoTrpqzstpXsnbQg7J6I64qU7KeAIOyXrOu2gCAo67aE66as7LaV7J20IOyeiOuLpOuKlCDsnbTslbzquLDripQg7Lap64+M7ZWY7KeAIOyViuyVmOuLpOuKlCDsnbTslbzquLAg7J6F64uI64ukLilcbiAgICAgKiBAcGFyYW0gYXhlc1xuICAgICAqIEBwYXJhbSBzaGFwZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHNlcGFyYXRpb25PbkF4ZXMoYXhlcywgc2hhcGUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbaV07XG4gICAgICAgICAgICB2YXIgcHJvamVjdGlvbjEgPSBzaGFwZS5wcm9qZWN0KGF4aXMpO1xuICAgICAgICAgICAgdmFyIHByb2plY3Rpb24yID0gdGhpcy5wcm9qZWN0KGF4aXMpO1xuXG4gICAgICAgICAgICBpZiAoIXByb2plY3Rpb24xLm92ZXJsYXBzKHByb2plY3Rpb24yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBkb24ndCBoYXZlIHRvIHRlc3QgcmVtYWluaW5nIGF4ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvU2hhcGUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNVFZcbntcbiAgICAvKipcbiAgICAgKiDstZzshowg7J2064+ZIOuyoe2EsFxuICAgICAqIE1pbmltdW0gVHJhbnNsYXRpb24gVmVjdG9yIChNVFYpXG4gICAgICogQHBhcmFtIGF4aXNcbiAgICAgKiBAcGFyYW0gb3ZlcmxhcFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG92ZXJsYXAgPSB1bmRlZmluZWQsIGF4aXMgPSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xuICAgICAgICB0aGlzLm92ZXJsYXAgPSBvdmVybGFwO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L01UVi5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Rpb25cbntcbiAgICBjb25zdHJ1Y3RvcihtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHRoaXMubWluID0gbWluO1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICB9XG5cblxuICAgIGdldE92ZXJsYXAocHJvamVjdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBvdmVybGFwO1xuXG4gICAgICAgIGlmICghdGhpcy5vdmVybGFwcyhwcm9qZWN0aW9uKSlcbiAgICAgICAgICAgIHJldHVybiAwO1xuXG4gICAgICAgIGlmICh0aGlzLm1heCA+IHByb2plY3Rpb24ubWF4KSB7XG4gICAgICAgICAgICBvdmVybGFwID0gcHJvamVjdGlvbi5tYXggLSB0aGlzLm1pbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG92ZXJsYXAgPSB0aGlzLm1heCAtIHByb2plY3Rpb24ubWluO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdmVybGFwO1xuICAgIH1cblxuXG4gICAgb3ZlcmxhcHMocHJvamVjdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heCA+IHByb2plY3Rpb24ubWluICYmIHByb2plY3Rpb24ubWF4ID4gdGhpcy5taW47XG4gICAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJpbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tICcuL1Byb2plY3Rpb24nO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiBleHRlbmRzIFNoYXBlXG57XG4gICAgY29uc3RydWN0b3IoY29udGV4dClcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludHMubGVuZ3RoICsgJyBQb2x5Z29uJztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOykkeygkCDsooztkZxcbiAgICAgKiBAcmV0dXJucyB7UElYSS5Qb2ludHwqfHN2Zy5Qb2ludH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXIoKVxuICAgIHtcbiAgICAgICAgdmFyIHBvaW50U3VtID0gbmV3IFBJWEkuUG9pbnQoKTtcblxuICAgICAgICBmb3IgKHZhciBpPTAsIHBvaW50OyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHBvaW50ID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgICAgICBwb2ludFN1bS54ICs9IHBvaW50Lng7XG4gICAgICAgICAgICBwb2ludFN1bS55ICs9IHBvaW50Lnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlBvaW50KHBvaW50U3VtLnggLyB0aGlzLnBvaW50cy5sZW5ndGgsXG4gICAgICAgICAgICBwb2ludFN1bS55IC8gdGhpcy5wb2ludHMubGVuZ3RoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2qeuPjCDssrTtgawgKOu2hOumrOy2leydtCDsl4bsnLzrqbQg7Lap64+MKSwgIXNlcGFyYXRpb25PbkF4ZXNcbiAgICAgKiBAcGFyYW0gc2hhcGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICBpZiAoc2hhcGUucmFkaXVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aFBvbHlnb24odGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIHZhciBheGVzID0gc2hhcGUuZ2V0QXhlcygpO1xuXG4gICAgICAgIGlmIChheGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZS5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF4ZXMuY29uY2F0KHRoaXMuZ2V0QXhlcygpKTtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiDtiKzsmIFcbiAgICAgKiBAcGFyYW0gYXhpc1xuICAgICAqIEByZXR1cm5zIHtQcm9qZWN0aW9ufVxuICAgICAqL1xuICAgIHByb2plY3QoYXhpcylcbiAgICB7XG4gICAgICAgIHZhciBzY2FsYXJzID0gW10sXG4gICAgICAgICAgICB2ID0gbmV3IFZlY3RvcigpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goIGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgdi54ID0gcG9pbnQueDtcbiAgICAgICAgICAgIHYueSA9IHBvaW50Lnk7XG4gICAgICAgICAgICBzY2FsYXJzLnB1c2godi5kb3RQcm9kdWN0KGF4aXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0aW9uKE1hdGgubWluLmFwcGx5KE1hdGgsIHNjYWxhcnMpLFxuICAgICAgICAgICAgTWF0aC5tYXguYXBwbHkoTWF0aCwgc2NhbGFycykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7LaVIOq1rO2VmOq4sCAoZWRnZeyXkCDrhbjrp5DsnYQg7LaV7Jy866GcIO2VqeuLiOuLpClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0QXhlcygpXG4gICAge1xuICAgICAgICB2YXIgdjEgPSBuZXcgVmVjdG9yKCksXG4gICAgICAgICAgICB2MiA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgICAgIGF4ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgICB2MS54ID0gdGhpcy5wb2ludHNbaV0ueDtcbiAgICAgICAgICAgIHYxLnkgPSB0aGlzLnBvaW50c1tpXS55O1xuXG4gICAgICAgICAgICB2Mi54ID0gdGhpcy5wb2ludHNbaSsxXS54O1xuICAgICAgICAgICAgdjIueSA9IHRoaXMucG9pbnRzW2krMV0ueTtcblxuICAgICAgICAgICAgLy8g66qo7ISc66as7JeQ7IScIOyImOyngeyduCDrhbjrp5Ao67KV7ISgKSDrsqHthLDrpbwg66eM65Ot64uI64ukLiAo7LaVIOyDneyEsSlcbiAgICAgICAgICAgIGF4ZXMucHVzaCh2MS5lZGdlKHYyKS5wZXJwZW5kaWN1bGFyKCkubm9ybWFsaXplKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdjEueCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS54O1xuICAgICAgICB2MS55ID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLnk7XG5cbiAgICAgICAgdjIueCA9IHRoaXMucG9pbnRzWzBdLng7XG4gICAgICAgIHYyLnkgPSB0aGlzLnBvaW50c1swXS55O1xuXG4gICAgICAgIC8vIOuqqOyEnOumrOyXkOyEnCDsiJjsp4Hsnbgg64W466eQKOuyleyEoCkg67Kh7YSw66W8IOunjOuTreuLiOuLpC4gKOy2lSDsg53shLEpXG4gICAgICAgIGF4ZXMucHVzaCh2MS5lZGdlKHYyKS5wZXJwZW5kaWN1bGFyKCkubm9ybWFsaXplKCkpO1xuICAgICAgICByZXR1cm4gYXhlcztcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBhdGgoZ3JhcGhpY3MsIGxpbmVDb2xvciA9IDB4RkZGRkZGKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGxpbmVDb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odGhpcy5wb2ludHNbaV0ueCwgdGhpcy5wb2ludHNbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuICAgIH1cblxuXG4gICAgbW92ZShkeCwgZHkpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgICAgIHBvaW50LnggKz0gZHg7XG4gICAgICAgICAgICBwb2ludC55ICs9IGR5O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpc1BvaW50SW5QYXRoKHgsIHkpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgICBjb25zdCBpc1BvaW50SW5QYXRoID0gdGhpcy5jb250ZXh0LmlzUG9pbnRJblBhdGgoeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiBpc1BvaW50SW5QYXRoO1xuICAgIH1cblxuXG4gICAgYWRkUG9pbnQoeCwgeSlcbiAgICB7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHgsIHkpKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludHMubGVuZ3RoICsgJyBQb2x5Z29uJztcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvUG9seWdvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=
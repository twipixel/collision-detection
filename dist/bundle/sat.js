webpackJsonp([6],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(355);
	
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

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(352);
	
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

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _GJK = __webpack_require__(351);
	
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
	
	var _Point = __webpack_require__(356);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Circle = __webpack_require__(357);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _Polygon = __webpack_require__(361);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(352);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
	var _Mouse = __webpack_require__(333);
	
	var _Mouse2 = _interopRequireDefault(_Mouse);
	
	var _KeyCode = __webpack_require__(332);
	
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

/***/ 356:
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

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(358);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(360);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(352);
	
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

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MTV = __webpack_require__(359);
	
	var _MTV2 = _interopRequireDefault(_MTV);
	
	var _Painter = __webpack_require__(352);
	
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

/***/ 359:
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

/***/ 360:
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

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(358);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(356);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(360);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(352);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqKioqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcz85MjQxKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0dKSy5qcz81MGMwKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFpbnRlci5qcz9lZjA2KiIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9TaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L01UVi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9Qb2x5Z29uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiTW91c2UiLCJDb250YWluZXIiLCJhZGRDaGlsZCIsIlRlc3QiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uS2V5VXAiLCJtcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltRnJhbWUiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJyZXNpemUiLCJlIiwia2V5Q29kZSIsIktleUNvZGUiLCJUSUxERSIsIkVTQyIsIlNQQUNFIiwiRE9XTl9BUlJPVyIsIlVQX0FSUk9XIiwiTEVGVF9BUlJPVyIsIlJJR0hUX0FSUk9XIiwiQkFDS19TUEFDRSIsImNvbnNvbGUiLCJjbGVhciIsImRlZ3JlZXMiLCJNYXRoIiwiUEkiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJmbG9vciIsInJhZGlhbjJkZWdyZWVzIiwicmFkIiwiZGVncmVlczJyYWRpYW4iLCJkZWciLCJWZWN0b3IiLCJhcnIiLCJvYmoiLCJ4IiwieSIsInZlYyIsInNjYWxhciIsInN1YnRyYWN0IiwidmVjdG9yIiwiaW52ZXJ0WCIsImludmVydFkiLCJsZW5ndGgiLCJkaXZpZGUiLCJub3JtYWxpemUiLCJmYWN0b3IiLCJhYnMiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJyYW5kb21pemVYIiwicmFuZG9taXplWSIsInJvdW5kIiwicHJlY2lzaW9uIiwidG9GaXhlZCIsImFtb3VudCIsIm1peFgiLCJtaXhZIiwiY29weVgiLCJjb3B5WSIsInRlbXAiLCJ2ZWMyIiwiZG90IiwiY29lZmYiLCJhdGFuMiIsImhvcml6b250YWxBbmdsZSIsInZlcnRpY2FsQW5nbGUiLCJob3Jpem9udGFsQW5nbGVEZWciLCJhbmdsZSIsIm54IiwiY29zIiwic2luIiwibnkiLCJyb3RhdGUiLCJyb3RhdGlvbiIsInJvdGF0ZVRvIiwicm90YXRlQnkiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcXJ0IiwiZGlzdGFuY2VTcSIsImRpcmVjdGlvbiIsImR4IiwiZHkiLCJsZW5ndGhTcSIsImEiLCJiIiwidiIsImNsb25lIiwicmV0IiwibXVsdGlwbHlTY2FsYXIiLCJjIiwiciIsImFjIiwiYmMiLCJ2ZWMxIiwidG8iLCJhZGQiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJwcmV2VGltZSIsImN1cnJlbnRUaW1lIiwiZGlmZlgiLCJkaWZmWSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImdsb2JhbCIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIiwiR0pLIiwidmVydGljZXMiLCJhdmciLCJjb3VudCIsImkiLCJpbmRleCIsIm1heFByb2R1Y3QiLCJkb3RQcm9kdWN0IiwicHJvZHVjdCIsInZlcnRpY2VzMSIsInZlcnRpY2VzMiIsImluZGV4T2ZGdXJ0aGVzdFBvaW50IiwiaiIsIm5lZ2F0ZSIsImxvZyIsInN0ciIsImhpc3RvcnkiLCJpdGVyQ291bnQiLCJkIiwiYW8iLCJhYiIsImFicGVycCIsImFjcGVycCIsInNpbXBsZXgiLCJBcnJheSIsImRpcmVjdGlvbnMiLCJwb3NpdGlvbjEiLCJhdmVyYWdlUG9pbnQiLCJwb3NpdGlvbjIiLCJzdXBwb3J0Iiwic2V0SGlzdG9yeSIsInRyaXBsZVByb2R1Y3QiLCJwZXJwZW5kaWN1bGFyIiwibm9ybSIsInBvaW50cyIsImkwIiwieDAiLCJuIiwiaHVsbCIsIm0iLCJpaCIsImllIiwiY3Jvc3MiLCJuZXdQb2ludHMiLCJwb2ludCIsInB1c2giLCJkZWJ1Z1ZlcnRpY2VzIiwiZm9yRWFjaCIsInZlcnRleCIsImNvbnNvbGVWZXJ0aWNlcyIsImlzRml4ZWQiLCJQYWludGVyIiwicGF0aCIsInYxIiwidjIiLCJkaWZmIiwiY29udmV4SHVsbFBhdGgiLCJjcmVhdGVDb252ZXhIdWxsIiwiZHJhd1BvbHlnb24iLCJsaW5lV2lkdGgiLCJjb2xvciIsImFscGhhIiwiZ3JhcGhpY3MiLCJnIiwibGluZVN0eWxlIiwidmVjMCIsIm1hZ25pZmljYXRpb24iLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJpbmciLCJ0ZXh0IiwiVGV4dCIsImZpbGwiLCJpc0NsZWFyIiwicmFkaXVzIiwiYmVnaW5GaWxsIiwiZHJhd0NpcmNsZSIsImVuZEZpbGwiLCJib3VuZHMiLCJ0aGlja25lc3MiLCJkcmF3UmVjdCIsInJlY3QiLCJsdCIsInJ0IiwicmIiLCJsYiIsInAxIiwicDIiLCJwMCIsIm1vdmVQb2ludCIsInRvUG9pbnQiLCJzY2FsZSIsImxlZnQiLCJpbnZlcnQiLCJyaWdodCIsIm1lIiwidGFyZ2V0IiwiR3JhcGhpY3MiLCJkZWJ1Z0dyYXBoaWNzIiwic2hhcGVzIiwiTElORV9DT0xPUiIsIkFSUk9XX0NPTE9SIiwicG9seWdvblBvaW50cyIsIlBvaW50IiwiaXNJbml0IiwiaW50ZXJhY3RpdmUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJtb3VzZURvd25Qb2ludCIsImxhc3RkcmFnIiwic2hhcGVCZWluZ0RyYWdnZWQiLCJ1bmRlZmluZWQiLCJjcmVhdGVQb2x5Z29uTWFudWFsIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uIiwiaGl0QXJlYSIsIlJlY3RhbmdsZSIsInR4IiwidHkiLCJ0b1JhZGlhbiIsImRlZ3JlZSIsInVzZVJhbmRvbVJvdGF0ZSIsInBvbHlnb24iLCJQb2x5Z29uIiwiYWRkUG9pbnQiLCJyb3RhdGVTaGFwZSIsImNyZWF0ZVBhdGgiLCJkaWFtZXRlciIsInNwYWNlIiwiZ2V0UG9seWdvblBvaW50cyIsImFkZENpcmNsZSIsImNyZWF0ZVBvbHlnb24iLCJjaXJjbGUiLCJDaXJjbGUiLCJkcmFnU2hhcGUiLCJzaGFwZSIsIm10diIsImNvbGxpZGVzV2l0aCIsImNvbGxpc2lvbkRldGVjdGVkIiwibW92ZVNoYXBlQnlNVFYiLCJheGlzIiwib3ZlcmxhcCIsImNvbGxpZGVyIiwiY29sbGlkZWUiLCJjb2xsaWRlckNlbnRlciIsImZyb21PYmplY3QiLCJnZXRDZW50ZXIiLCJjb2xsaWRlZUNlbnRlciIsImNlbnRlclZlY3RvciIsImNlbnRlclVuaXRWZWN0b3IiLCJkcmFnVmVjdG9yIiwiY2VudGVyQ29sbGlkZXIiLCJjZW50ZXJDb2xsaWRlZSIsImRpcmVjdGlvbk5vcm0iLCJvdmVybGFwVmVjdG9yIiwidG9Ob3JtYWxpemUiLCJkb3RUbyIsImNlbnRlciIsImRyYXdBcnJvdyIsIm1vdmUiLCJyb3RhdGlvblBvaW50IiwicGl2b3QiLCJkaXN0IiwiY2EiLCJuYSIsImlzUG9pbnRJblBhdGgiLCJkZXRlY3RDb2xsaXNpb25zIiwidXBkYXRlUmVuZGVyIiwiRVNDQVBFIiwiTlVNQkVSXzEiLCJOVU1CRVJfMiIsIm5hbWUiLCJwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlIiwiY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiY2lyY2xlVmVjdG9yIiwidGVzdFBvaW50VmVjdG9yIiwiY2xvc2VzdFBvaW50IiwiZGlzdGFuY2UiLCJzdXJmYWNlVmVjdG9yIiwiZHJhd1BvaW50Iiwic2NhbGFycyIsInBvaW50VmVjdG9yIiwiUHJvamVjdGlvbiIsImFwcGx5IiwibGluZUNvbG9yIiwiYXJjIiwic2F2ZSIsImJlZ2luUGF0aCIsInJlc3RvcmUiLCJTaGFwZSIsImF4ZXMiLCJtaW5pbXVtT3ZlcmxhcCIsImF4aXNXaXRoU21hbGxlc3RPdmVybGFwIiwicHJvamVjdGlvbjEiLCJwcm9qZWN0aW9uMiIsInByb2plY3QiLCJnZXRPdmVybGFwIiwiTVRWIiwibXR2MSIsIm1pbmltdW1UcmFuc2xhdGlvblZlY3RvciIsImdldEF4ZXMiLCJtdHYyIiwiYzEiLCJjMiIsInBvdyIsImdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZSIsImdldENpcmNsZUF4aXMiLCJjb25jYXQiLCJzZXBhcmF0aW9uT25BeGVzIiwib3ZlcmxhcHMiLCJwcm9qZWN0aW9uIiwicG9pbnRTdW0iLCJwb2x5Z29uQ29sbGlkZXNXaXRoUG9seWdvbiIsImVkZ2UiLCJjbG9zZVBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQyxjQUFZO0FBQ1RBLFlBQU9DLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QixhQUFNQyxPQUFPLElBQUlDLElBQUosRUFBYjtBQUNILE1BRkQ7QUFHSCxFQUpBLEdBQUQ7O0FBTUEsS0FBSUMsZUFBSjtBQUFBLEtBQVlDLGlC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QUFDQSxrQkFBSzhQLElBQUwsR0FBWSxLQUFLNUksTUFBTCxDQUFZM0csTUFBWixHQUFxQixVQUFqQztBQUNIOzs7O0dBcktnQzJRLGU7O21CQUFoQnBFLE8iLCJmaWxlIjoic2F0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlJztcbmltcG9ydCBNb3VzZSBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL01vdXNlXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG4gICAgfVxufSgpKTtcblxubGV0IGNhbnZhcywgcmVuZGVyZXIsIHN0YWdlLCB0ZXN0LCBjb250YWluZXI7XG5cbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG4gICAgICAgIHJlbmRlcmVyID0gbmV3IFBJWEkuQ2FudmFzUmVuZGVyZXIoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCB7XG4gICAgICAgICAgICB2aWV3OiBjYW52YXMsXG4gICAgICAgICAgICBhdXRvUmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDMzMzgzRFxuICAgICAgICB9KTtcblxuICAgICAgICBNb3VzZS5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgICAgIC8vIOychOy5mOqwgCDsoJXsiJjqsIAg7JWE64uQ6rK97JqwIO2dkOumv+2VmOqyjCDrs7TsnbTripQg66y47KCc6rCAIOyeiOyWtFxuICAgICAgICAvLyDroIzrjZTrn6zsnZgg7JyE7LmY66W8IOygleyImOuhnCDsl7DsgrDrkKAg7IiYIOyeiOuPhOuhnSDtlZzri6QuXG4gICAgICAgIC8vcmVuZGVyZXIucm91bmRQaXhlbHMgPSB0cnVlO1xuXG4gICAgICAgIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBzdGFnZS5hZGRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHRlc3QgPSBuZXcgVGVzdChyZW5kZXJlcik7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRlc3QpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTG9vcCgpO1xuICAgICAgICB0aGlzLnJlc2l6ZVdpbmRvdygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMb29wIChtcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShtcyk7XG4gICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGVMb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZShtcykge1xuICAgICAgICB0ZXN0LnVwZGF0ZSgpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpO1xuICAgIH1cblxuICAgIHJlc2l6ZVdpbmRvdygpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvKipcbiAgICAgICAgICog7LqU67KE7IqkIOyCrOydtOymiOyZgCDrlJTsiqTtlIzroIjsnbQg7IKs7J207KaIIOyEpOyglVxuICAgICAgICAgKiDroIjti7Drgpgg6re4656Y7ZS9IOyngOybkCDsvZTrk5xcbiAgICAgICAgICovXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQSVhJIHJlbmRlcmVyIOumrOyCrOydtOymiFxuICAgICAgICAgKiBQSVhJIOyXkOqyjCB2aWV3cG9ydCDsgqzsnbTspogg67OA6rK9IOyVjOumvFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICB0ZXN0LnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlVcCAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlRJTERFOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5ET1dOX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVVBfQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MRUZUX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUklHSFRfQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5CQUNLX1NQQUNFOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L3NhdC9pbmRleC5qcyIsIlxuXG5jb25zdCBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuXG5mdW5jdGlvbiByYW5kb20gKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhZGlhbjJkZWdyZWVzIChyYWQpIHtcbiAgICByZXR1cm4gcmFkICogZGVncmVlcztcbn1cblxuZnVuY3Rpb24gZGVncmVlczJyYWRpYW4gKGRlZykge1xuICAgIHJldHVybiBkZWcgLyBkZWdyZWVzO1xufVxuXG5cbi8qKlxuICogVmljdG9yLmpz66W8IEVTNuuhnCDrs4DtmZjtlZjsl6wg7IKs7Jqp7ZWY6rOgIOyeiOyKteuLiOuLpC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhrdWVuZy92aWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yXG57XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbUFycmF5KFs0MiwgMjFdKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21BcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHdpdGggdGhlIHggYW5kIHkgdmFsdWVzIGF0IGluZGV4IDAgYW5kIDEgcmVzcGVjdGl2ZWx5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGFyclswXSB8fCAwLCBhcnJbMV0gfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbU9iamVjdCh7IHg6IDQyLCB5OiAyMSB9KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21PYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgZm9yIHggYW5kIHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tT2JqZWN0KG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKG9iai54IHx8IDAsIG9iai55IHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuIFdpbGwgYWxzbyB3b3JrIHdpdGhvdXQgdGhlIGBuZXdgIGtleXdvcmRcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IFZlY3Rvcig0MiwgMTMzNyk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBWYWx1ZSBvZiB0aGUgeCBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVmFsdWUgb2YgdGhlIHkgYXhpc1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMClcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWCBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeToxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBZIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGQodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggKyBiLngsIGEueSArIGIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIGJvdGggdmVjdG9yIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWCBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBZIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0KHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3QodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1YnRyYWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLSBiLngsIGEueSAtIGIueSk7XG4gICAgfVxuXG5cbiAgICBlZGdlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZWRnZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdChhLCBiKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXIoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclgoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDIwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJZKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEwMCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIHggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgeSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSBhIGF4aXMgdmFsdWVzIG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGUodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGUoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAvIGIueCwgYS55IC8gYi55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRYKClcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFkoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WSgpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuaW52ZXJ0WCgpO1xuICAgICAgICB0aGlzLmludmVydFkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmVnYXRlKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHYgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgdi54ID0gLXZlYy54O1xuICAgICAgICB2LnkgPSAtdmVjLnk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBYIGF4aXMgYnkgWCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWSBheGlzIGJ5IFkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdmFsdWVzIGZyb20gYSBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5KHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbXVsdGlwbHlTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHNjYWxhciwgdmVjdG9yLnkgKiBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54IC8gc2NhbGFyLCB2ZWN0b3IueSAvIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBtdWx0aXBseVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoOTAg64+EIO2ajOyghClcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBwZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSAtdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKC05MCDrj4Qg7ZqM7KCEKVxuICAgICAqL1xuICAgIHJldHVyblBlcnBlbmRpY3VsYXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy55LCAtdGhpcy54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZXR1cm5QZXJwZW5kaWN1bGFyKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNsb25lLnggPSB2ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IC12ZWMueDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog67KE66a8XG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEBwYXJhbSBsZW5ndGhcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJ1bmNhdGUodmVjLCBsZW5ndGgpXG4gICAge1xuICAgICAgICBjb25zdCByZXQgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoU3EgPSB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICAgICAgaWYgKGxlbmd0aFNxID4gbGVuZ3RoICogbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXQubXVsdGlwbHlTY2FsYXIobGVuZ3RoIC8gTWF0aC5zcXJ0KGxlbmd0aFNxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbm9ybWFsaXplKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpdmlkZShuZXcgVmVjdG9yKGxlbmd0aCwgbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBub3JtKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGFic29sdXRlIHZlY3RvciBheGlzIGlzIGdyZWF0ZXIgdGhhbiBgbWF4YCwgbXVsdGlwbGllcyB0aGUgYXhpcyBieSBgZmFjdG9yYFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGltaXQoODAsIDAuOSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjkwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIGZvciBib3RoIHggYW5kIHkgYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmYWN0b3IgRmFjdG9yIGJ5IHdoaWNoIHRoZSBheGlzIGFyZSB0byBiZSBtdWx0aXBsaWVkIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsaW1pdChtYXgsIGZhY3RvcilcbiAgICB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLngpID4gbWF4KXsgdGhpcy54ICo9IGZhY3RvcjsgfVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55KSA+IG1heCl7IHRoaXMueSAqPSBmYWN0b3I7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21pemVzIGJvdGggdmVjdG9yIGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemUobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MGApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NjcsIHk6NzNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpLCB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpKTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHRoaXMueCA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHRoaXMueSA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICByZXR1cm4gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IHJhbmRvbWl6ZXMgZWl0aGVyIGF4aXMgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZUFueShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo3N1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemVBbnkodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICBpZiAoISEgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGFuIGludGVnZXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdW5mbG9hdCgpXG4gICAge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSb3VuZHMgYm90aCBheGlzIHRvIGEgY2VydGFpbiBwcmVjaXNpb25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLjIsIDUwLjkpO1xuICAgICAqXG4gICAgICogICAgIHZlYy51bmZsb2F0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFByZWNpc2lvbiAoZGVmYXVsdDogOClcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0ZpeGVkKHByZWNpc2lvbilcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJlY2lzaW9uID09PSAndW5kZWZpbmVkJykgeyBwcmVjaXNpb24gPSA4OyB9XG4gICAgICAgIHRoaXMueCA9IHRoaXMueC50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBYIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gKDEgLSBhbW91bnQpICogdGhpcy54ICsgYW1vdW50ICogdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIG9mIHRoZSBZIGF4aXMgdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4WSh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4WSh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYW1vdW50ID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0gKDEgLSBhbW91bnQpICogdGhpcy55ICsgYW1vdW50ICogdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBsaW5lYXIgYmxlbmQgLyBpbnRlcnBvbGF0aW9uIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peCh2ZWMyLCAwLjUpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxNTAsIHk6MTUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbWl4KHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5taXhYKHZlYywgYW1vdW50KTtcbiAgICAgICAgdGhpcy5taXhZKHZlYywgYW1vdW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFByb2R1Y3RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jbG9uZSgpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBBIGNsb25lIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNsb25lKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVgodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBZIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlZKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBhbmQgWSBjb21wb25lbnRzIGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb3B5WCh2ZWMpO1xuICAgICAgICB0aGlzLmNvcHlZKHZlYyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmVjdG9yIHRvIHplcm8gKDAsMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICpcdFx0IHZhcjEuemVybygpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MCwgeTowXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB6ZXJvKClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgbGVmdC1oYW5kZWQgbm9ybWFsIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gdGhpcyB2ZWN0b3JcbiAgICAgKiBAc2VlICNnZXRMZWZ0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIGxlZnQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSAtdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgdmVjdG9yIHRvIHRoZSByaWdodC1oYW5kZWQgbm9ybWFsIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqIEByZXR1cm4ge0BsaW5rIFZlY3RvcjJ9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0UmlnaHRIYW5kT3J0aG9nb25hbFZlY3RvcigpXG4gICAgICovXG4gICAgcmlnaHQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kb3QodmVjMik7XG4gICAgICogICAgIC8vID0+IDIzMDAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEb3QgcHJvZHVjdFxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZG90KHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjMi54ICsgdGhpcy55ICogdmVjMi55O1xuICAgIH1cblxuXG4gICAgZG90UHJvZHVjdCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkb3RQcm9kdWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55O1xuICAgIH1cblxuXG4gICAgY3Jvc3ModmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiAodGhpcy54ICogdmVjMi55KSAtICh0aGlzLnkgKiB2ZWMyLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYS54ICogYi55IC0gYS55ICogYi54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAgICAgKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UcmlwbGVfcHJvZHVjdCNWZWN0b3JfdHJpcGxlX3Byb2R1Y3RcbiAgICAgKiDshLjqt7jrqLztirjsl5DshJwg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsKntlqXsnYQg7LC+7J2EIOuVjCDsgqzsmqlcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpcGxlUHJvZHVjdChhLCBiLCBjKVxuICAgIHtcbiAgICAgICAgY29uc3QgciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgY29uc3QgYWMgPSBhLnggKiBjLnggKyBhLnkgKiBjLnkgICAgLy8gcGVyZm9ybSBhLmRvdChjKVxuICAgICAgICAgICAgLCBiYyA9IGIueCAqIGMueCArIGIueSAqIGMueTsgICAvLyBwZXJmb3JtIGIuZG90KGMpXG5cbiAgICAgICAgLy8gcGVyZm9ybSBiICogYS5kb3QoYykgLSBhICogYi5kb3QoYylcbiAgICAgICAgci54ID0gYi54ICogYWMgLSBhLnggKiBiYztcbiAgICAgICAgci55ID0gYi55ICogYWMgLSBhLnkgKiBiYztcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIGEgdmVjdG9yIG9udG8gYW5vdGhlciB2ZWN0b3IsIHNldHRpbmcgaXRzZWxmIHRvIHRoZSByZXN1bHQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnByb2plY3RPbnRvKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIHByb2plY3QgdGhpcyB2ZWN0b3Igb250b1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHByb2plY3RPbnRvKHZlYzIpXG4gICAge1xuICAgICAgICB2YXIgY29lZmYgPSAoICh0aGlzLnggKiB2ZWMyLngpKyh0aGlzLnkgKiB2ZWMyLnkpICkgLyAoKHZlYzIueCp2ZWMyLngpKyh2ZWMyLnkqdmVjMi55KSk7XG4gICAgICAgIHRoaXMueCA9IGNvZWZmICogdmVjMi54O1xuICAgICAgICB0aGlzLnkgPSBjb2VmZiAqIHZlYzIueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDshKDtmJUg67O06rCEXG4gICAgICogaHR0cDovL2RldmVsb3B1Zy5ibG9nc3BvdC5jb20vMjAxNC8wOS91bml0eS12ZWN0b3ItbGVycC5odG1sXG4gICAgICogQHBhcmFtIHZlYzFcbiAgICAgKiBAcGFyYW0gdmVjMlxuICAgICAqIEBwYXJhbSB0b1xuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIGxlcnAodmVjMSwgdmVjMiwgdG8pIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5hZGQoVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzEsIDEgLSB0byksIFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMyLCB0bykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOyXreyImFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyByY3AodmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEgLyB2ZWN0b3IueCwgMSAvIHZlY3Rvci55KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLnZlcnRpY2FsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICBhbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZURlZygpO1xuICAgIH1cblxuXG4gICAgZGlyZWN0aW9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgcm90YXRlKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG54ID0gKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSkgLSAodGhpcy55ICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgdmFyIG55ID0gKHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSkgKyAodGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKTtcblxuICAgICAgICB0aGlzLnggPSBueDtcbiAgICAgICAgdGhpcy55ID0gbnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICByb3RhdGVEZWcoYW5nbGUpXG4gICAge1xuICAgICAgICBhbmdsZSA9IGRlZ3JlZXMycmFkaWFuKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKHJvdGF0aW9uLXRoaXMuYW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUb0RlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVUbyhyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeShyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMuYW5nbGUoKSArIHJvdGF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeURlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVCeShyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWCBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAtIHZlYy54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VYKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hYnNEaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVgodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWSBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55IC0gdmVjLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVkoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VZKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwLjQ5ODc1NjIxMTIwODlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24oKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZVNxdWFyZWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVNxKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlU3EodmVjKVxuICAgIHtcbiAgICAgICAgdmFyIGR4ID0gdGhpcy5kaXN0YW5jZVgodmVjKSxcbiAgICAgICAgICAgIGR5ID0gdGhpcy5kaXN0YW5jZVkodmVjKTtcblxuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb3IgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aCgpO1xuICAgICAqICAgICAvLyA9PiAxMTEuODAzMzk4ODc0OTg5NDhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uo7Iic7Z6IIOq4uOydtCDruYTqtZDrpbwg7ZWY66Ck66m0IGxlbmd0aCDrpbwg7IKs7Jqp7ZWY6riwIOuztOuLpOuKlCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY6rKMIOu5oOultOuLpC5cbiAgICAgKiBsZW5ndGgg64qUIE1hdGguc3FydCAo7KCc6rOx6re8KSDsspjrpqzrpbwg7ZWY6riwIOuVjOusuOyXkCDri6jsiJwg6ri47J20IOu5hOq1kOyLnCBsZW5ndGhTcSDrpbwg7IKs7Jqp7ZWY64qUIOqyg+ydtCDruaDrpoXri4jri6QuXG4gICAgICogU3F1YXJlZCBsZW5ndGggLyBtYWduaXR1ZGVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aFNxKCk7XG4gICAgICogICAgIC8vID0+IDEyNTAwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoU3EoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsZW5ndGhTcSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgfVxuXG5cbiAgICBtYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoKCk7XG4gICAgfVxuXG5cbiAgICB0byh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWMueCAtIHRoaXMueCwgdmVjLnkgLSB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgc2V0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB2ZWN0b3IgaXMgKDAsIDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMuemVybygpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc1plcm8oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB0aGlzIHZlY3RvciBpcyB0aGUgc2FtZSBhcyBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMxLmlzRXF1YWxUbyh2ZWMyKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNFcXVhbFRvKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSB2ZWMyLnggJiYgdGhpcy55ID09PSB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFV0aWxpdHkgTWV0aG9kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICByZXR1cm4gJ3g6JyArIHRoaXMueCArICcsIHk6JyArIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b0FycmF5KCk7XG4gICAgICogICAgIC8vID0+IFsxMCwgMjBdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvQXJyYXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFsgdGhpcy54LCB0aGlzLnkgXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9PYmplY3QoKTtcbiAgICAgKiAgICAgLy8gPT4geyB4OiAxMCwgeTogMjAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9PYmplY3QoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmVjdG9yLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VcbntcbiAgICBzdGF0aWMgZ2V0IERFU0tUT1BfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE1PQklMRV9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLnBvaW50ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUElYSS5BcHBsaWNhdGlvbi5yZW5kZXJlclxuICAgICAqIOuenOuNlOufrOyXkOyEnCBpbnRlcmFjdGlvIOqwneyytOulvCDssLjsobDtlaAg7IiYIOyeiOyWtOyEnCDsgqzsmqntlZjroKTrqbQg66CM642U65+s66W8IOyFi+2Mhe2VtOyVvCDtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZhbHVlIHtQSVhJLldlYkdMUmVuZGVycmVyfFBJWEkuQ2FudmFzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgc3RhdGljIHNldCByZW5kZXJlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog66qo67CU7J28IOuMgOydkeydhCDsnITtlbTshJxcbiAgICAgKiBQQyDrsoTsoITsl5DshJzripQgbW91c2Ug6rCd7LK066W8LCDrqqjrsJTsnbwg67KE7KCE7JeQ7ISc64qUIHBvaW50ZXIg6rCd7LK066W8IOyFi+2Mhe2VmOuptFxuICAgICAqIGdsb2JhbCDqsJ3ssrTsl5DshJwg7LC47KGw7ZW07IScIOyijO2RnOqwkuydhCDsoITri6ztlZjrj4TroZ0g7ZWp64uI64ukLlxuICAgICAqXG4gICAgICog66eM7JW9IOyEpOygle2VmOyngCDslYrsnLzrqbQg6riw67O4IFBD66eMIOuMgOydke2VmOuPhOuhnSBtb3VzZSDqsJ3ssrTrpbwg7ISk7KCV7ZWp64uI64ukLlxuICAgICAqXG4gICAgICogRGVza3RvcCA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2VcbiAgICAgKiBNb2JpbGUgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLnBvaW50ZXJcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IG1vdXNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21vdXNlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgbW91c2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW91c2UpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlID0gdGhpcy5ERVNLVE9QX01PVVNFO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb3VzZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsLng7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2V0IGN1cnJlbnRDdXJzb3JTdHlsZSh2YWx1ZSkge1xuICAgICAgICBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRDdXJzb3JTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7J2064+ZIOqxsOumrOqwgCA1cHgg7J207ZWY7J206rOgIDUwMG1zIOyViOyXkCDrkZDrsogg7YG066at7ZWY66m0IOuNlOu4lCDtgbTrpq3snLzroZwg7J247KCVXG4gICAgICogQHBhcmFtIHByZXZQb2ludCDsnbTsoITsooztkZxcbiAgICAgKiBAcGFyYW0gY3VycmVudFBvaW50IO2YhOyerOyijO2RnFxuICAgICAqIEBwYXJhbSBwcmV2VGltZSDsnbTsoIQg7YG066atIO2DgOyehFxuICAgICAqIEBwYXJhbSBjdXJyZW50VGltZSDtmITsnqwg7YG066atIO2DgOyehFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDrjZTruJQg7YG066atIOyXrOu2gFxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RvdWJsZUNsaWNrKHByZXZQb2ludCwgY3VycmVudFBvaW50LCBwcmV2VGltZSwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgdmFyIGRpZmZYID0gY3VycmVudFBvaW50LnggLSBwcmV2UG9pbnQueDtcblxuICAgICAgICBpZiAoZGlmZlggPCAwKSB7XG4gICAgICAgICAgICBkaWZmWCA9IGRpZmZYICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGlmZlkgPSBjdXJyZW50UG9pbnQueSAtIHByZXZQb2ludC55O1xuXG4gICAgICAgIGlmIChkaWZmWSA8IDApIHtcbiAgICAgICAgICAgIGRpZmZZID0gZGlmZlkgKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWZmWCA+IDUgfHwgZGlmZlkgPiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBwcmV2VGltZSA+IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL01vdXNlLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuLyoqXG4gKiBHSksgQWxnb3JpdGhtIChHaWxiZXJ0LUpvaG5zb24tS2VlcnRoaSlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gKiBodHRwOi8vd3d3LmR5bjRqLm9yZy8yMDEwLzA0L2dqay1naWxiZXJ0LWpvaG5zb24ta2VlcnRoaS8jZ2prLXRvcFxuICogaHR0cHM6Ly93d3cuaGFyb2xkc2VycmFuby5jb20vYmxvZy92aXN1YWxpemluZy10aGUtZ2prLWNvbGxpc2lvbi1hbGdvcml0aG1cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qdWhsL2NvbGxpc2lvbi1kZXRlY3Rpb24tMmRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0pLXG57XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0byBjb21wdXRlIGF2ZXJhZ2UgY2VudGVyIChyb3VnaGx5KS4gSXQgbWlnaHQgYmUgZGlmZmVyZW50IGZyb21cbiAgICAgKiBDZW50ZXIgb2YgR3Jhdml0eSwgZXNwZWNpYWxseSBmb3IgYm9kaWVzIHdpdGggbm9udW5pZm9ybSBkZW5zaXR5LFxuICAgICAqIGJ1dCB0aGlzIGlzIG9rIGFzIGluaXRpYWwgZGlyZWN0aW9uIG9mIHNpbXBsZXggc2VhcmNoIGluIEdKS1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBhdmVyYWdlUG9pbnQodmVydGljZXMpXG4gICAge1xuICAgICAgICBjb25zdCBhdmcgPSBuZXcgVmVjdG9yKClcbiAgICAgICAgICAgICwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhdmcueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZnLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2Zy54IC89IGNvdW50O1xuICAgICAgICBhdmcueSAvPSBjb3VudDtcblxuICAgICAgICByZXR1cm4gYXZnO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1cnRoZXN0IHZlcnRleCBhbG9uZyBhIGNlcnRhaW4gZGlyZWN0aW9uXG4gICAgICog6ryt7KeA7KCQ6rO8IOuwqe2WpeydhCDsoITri6ztlZjrqbQg64K07KCBICjtiKzsmIEp7J2EIO2Gte2VtCDstZzrjIDroZwg66i8IOyijO2RnOydmCDsnbjrjbHsiqTrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlcyB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBpbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlcywgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1heFByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzWzBdKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB2ZXJ0aWNlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0ID4gbWF4UHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIG1heFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1pbmtvd3NraSBzdW0gc3VwcG9ydCBmdW5jdGlvbiBmb3IgR0pLXG4gICAgICog7KeA7JuQIO2VqOyImOyXkOyEnCDtj7Trpqzqs6TsnZgg7Y+s7J247Yq47JmAIOuwqe2WpeycvOuhnCDshJzroZwg64uk66W4IOuwqe2WpeydmCDsoJDsnYQg6rWs7ZWY6rOgIE1pbmtvd3NraSBEaWZmZXJlbmNlIOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSDrsqHthLBcbiAgICAgKi9cbiAgICBzdGF0aWMgc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgLy8gc3VidHJhY3QgKE1pbmtvd3NraSBzdW0pIHRoZSB0d28gcG9pbnRzIHRvIHNlZSBpZiBib2RpZXMgJ292ZXJsYXAnXG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczIge1ZlY3RvcltdfVxuICAgICAqIEBwYXJhbiBoaXN0b3J5IHtIaXN0b3J5fSBzaW1wbGV4IOyZgCBkaXJlY3Rpb24g7Z6I7Iqk7Yag66asXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOy2qeuPjCDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hlY2tDb2xsaXNpb24odmVydGljZXMxLCB2ZXJ0aWNlczIsIGhpc3RvcnkgPSBudWxsKVxuICAgIHtcbiAgICAgICAgLy8gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKTtcblxuICAgICAgICBsZXQgaXRlckNvdW50ID0gMCwgaW5kZXggPSAwOyAgIC8vIGluZGV4IG9mIGN1cnJlbnQgdmVydGV4IG9mIHNpbXBsZXhcbiAgICAgICAgbGV0IGEsIGIsIGMsIGQsIGFvLCBhYiwgYWMsIGFicGVycCwgYWNwZXJwLFxuICAgICAgICAgICAgc2ltcGxleCA9IG5ldyBBcnJheSgzKSwgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgzKTtcblxuICAgICAgICAvLyDrkZAg7Y+066as6rOkIOykkeyLrCDsooztkZzrpbwg7Ya17ZW07IScIOuwqe2WpeydhCDqtaztlanri4jri6QuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uMSA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMSk7IC8vIG5vdCBhIENvRyBidXRcbiAgICAgICAgY29uc3QgcG9zaXRpb24yID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMyKTsgLy8gaXQncyBvayBmb3IgR0pLIClcblxuICAgICAgICAvLyBpbml0aWFsIGRpcmVjdGlvbiBmcm9tIHRoZSBjZW50ZXIgb2YgMXN0IGJvZHkgdG8gdGhlIGNlbnRlciBvZiAybmQgYm9keVxuICAgICAgICAvLyDrsKntlqUgdmVjdG9yXG4gICAgICAgIGQgPSBWZWN0b3Iuc3VidHJhY3QocG9zaXRpb24xLCBwb3NpdGlvbjIpO1xuXG4gICAgICAgIC8vIGlmIGluaXRpYWwgZGlyZWN0aW9uIGlzIHplcm8g4oCTIHNldCBpdCB0byBhbnkgYXJiaXRyYXJ5IGF4aXMgKHdlIGNob29zZSBYKVxuICAgICAgICBpZiAoKGQueCA9PSAwKSAmJiAoZC55ID09IDApKSB7XG4gICAgICAgICAgICBkLnggPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IHN1cHBvcnQgYXMgaW5pdGlhbCBwb2ludCBvZiB0aGUgbmV3IHNpbXBsZXhcbiAgICAgICAgYSA9IHNpbXBsZXhbMF0gPSB0aGlzLnN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuICAgICAgICBkaXJlY3Rpb25zWzBdID0gZDtcbiAgICAgICAgY29uc29sZS5sb2coc3RyKGEpLCBzdHIoZCwgdHJ1ZSksIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpLnRvRml4ZWQoMikpO1xuXG4gICAgICAgIC8vIHN1cHBvcnQg7KCQ6rO8IOuwqe2WpeydtCDqsJnsnYAg67Cp7Zal7J20IOyVhOuLkCDqsr3smrBcbiAgICAgICAgaWYgKGEuZG90KGQpIDw9IDApIHtcbiAgICAgICAgICAgIC8vIOuniOyngOunieyXkCDstpTqsIAg65CcIOygkOydtCBk7J2YIOuwqe2WpeycvOuhnCDsm5DsoJDsnYQg7KeA64KY7LmY7KeAIOyViuydgCDqsr3smrBcbiAgICAgICAgICAgIC8vIOq3uCDri6TsnYwgTWlua293c2tpIO2VqeydgCDsm5DsoJDsnYQg7Y+s7ZWoIO2VoCDsiJgg7JeG7Iq164uI64ukLlxuICAgICAgICAgICAgLy8g7LaU6rCAIOuQnCDrp4jsp4Drp4kg7KCQ7J2AIE1pbmtvd3NraSBEaWZmZXJlbmNl7J2YIOqwgOyepeyekOumrOyXkCDsnojsirXri4jri6QuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnICAgICAgIENBU0UxWycsICdOTycsICddJyk7XG5cbiAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICB9XG5cbiAgICAgICAgZCA9IFZlY3Rvci5uZWdhdGUoYSk7IC8vIFRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgYWx3YXlzIHRvd2FyZHMgdGhlIG9yaWdpbiwgc28gdGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBuZWdhdGUoYSlcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaXRlckNvdW50Kys7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZXJDb3VudCk7XG5cbiAgICAgICAgICAgIGEgPSBzaW1wbGV4WysraW5kZXhdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbnNbaW5kZXhdID0gZDtcblxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAgICAgICBDQVNFMlsnLCAnTk8nLCAnXScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGHqsIAg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsqHthLDripQgLWEg66W8IO2VmOuptCDrkKnri4jri6QuXG4gICAgICAgICAgICBhbyA9IFZlY3Rvci5uZWdhdGUoYSk7IC8vIGZyb20gcG9pbnQgQSB0byBPcmlnaW4gaXMganVzdCBuZWdhdGl2ZSBBXG5cbiAgICAgICAgICAgIC8vIHNpbXBsZXggaGFzIDIgcG9pbnRzIChhIGxpbmUgc2VnbWVudCwgbm90IGEgdHJpYW5nbGUgeWV0KVxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMikge1xuXG4gICAgICAgICAgICAgICAgYiA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICAgICAgZCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhbywgYWIpOyAvLyBub3JtYWwgdG8gQUIgdG93YXJkcyBPcmlnaW5cblxuICAgICAgICAgICAgICAgIGlmIChWZWN0b3IubGVuZ3RoU3EoZCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IFZlY3Rvci5wZXJwZW5kaWN1bGFyKGFiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7IC8vIHNraXAgdG8gbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYiA9IHNpbXBsZXhbMV07XG4gICAgICAgICAgICBjID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgIGFiID0gVmVjdG9yLnN1YnRyYWN0KGIsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQlxuICAgICAgICAgICAgYWMgPSBWZWN0b3Iuc3VidHJhY3QoYywgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBDXG5cbiAgICAgICAgICAgIC8vYWPsmYAg7IiY7KeBXG4gICAgICAgICAgICBhY3BlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYWMsIGFjKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnLCBhLCAnYicsIGIsICdjJywgYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW8nLCBhbywgJ2FiJywgYWIsICdhYycsIGFjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3BlcnAnLCBhY3BlcnAsIGFjcGVycC5jbG9uZSgpLm5vcm0oKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhY3BlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFjcGVycCwgYW8pKTtcblxuICAgICAgICAgICAgLy8gYWMg7IiY7KeBIOyEoOu2hOydtCBh6rCAIOybkOygkOydhCDtlqXtlZjripQg67Cp7ZalIOuwmOuMgO2OuOyXkCDsnojqs6BcbiAgICAgICAgICAgIC8vIOymiSwgYWMg7IiY7KeBIOyEoOu2hCDslYjsqr3sl5Ag7JuQ7KCQ7J20IOyeiOycvOuptFxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFjcGVycCwgYW8pID49IDApIHtcbiAgICAgICAgICAgICAgICBkID0gYWNwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQyB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQyB0b3dhcmRzIE9yaWdpbicsIGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWIg7IiY7KeBIOyEoOu2hFxuICAgICAgICAgICAgICAgIGFicGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFjLCBhYiwgYWIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYnBlcnAnLCBhYnBlcnAsIGFicGVycC5jbG9uZSgpLm5vcm0oKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdFByb2R1Y3QoYWJwZXJwLCBhbyknLCBWZWN0b3IuZG90UHJvZHVjdChhYnBlcnAsIGFvKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aE7J20IOybkOygkCDrsJjrjIAg67Cp7Zal7J2EIO2Wpe2VmOqzoCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICAvLyDspoksIOybkOygkOydtCDsgrzqsIHtmJUg7JWI7JeQIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhYnBlcnAsIGFvKSA8IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5zZXRIaXN0b3J5KHNpbXBsZXgsIGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIGNvbGxpc2lvblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNpbXBsZXhbMF0gPSBzaW1wbGV4WzFdOyAvLyBzd2FwIGZpcnN0IGVsZW1lbnQgKHBvaW50IEMpXG4gICAgICAgICAgICAgICAgZCA9IGFicGVycDsgLy8gbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUIgdG93YXJkcyBPcmlnaW5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2ltcGxleFsxXSA9IHNpbXBsZXhbMl07IC8vIHN3YXAgZWxlbWVudCBpbiB0aGUgbWlkZGxlIChwb2ludCBCKVxuICAgICAgICAgICAgLS1pbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3JlYXRlQ29udmV4SHVsbChwb2ludHMpXG4gICAge1xuICAgICAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgICAgIHZhciBpMCA9IDA7XG4gICAgICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGh1bGwgPSBbXTtcbiAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICB2YXIgaWggPSBpMDtcblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgICAgICB2YXIgaWUgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgciA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tqXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IFZlY3Rvci5jcm9zcyhyLCB2KTtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhTcSgpID4gci5sZW5ndGhTcSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29weSB2ZXJ0aWNlc1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaHVsbFtpXV07XG4gICAgICAgICAgICBuZXdQb2ludHMucHVzaChuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQb2ludHM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbWlkcG9pbnQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKChhLnggKyBiLngpIC8gMiwgKGEueSArIGIueSkgLyAyKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICBjb25zb2xlLmxvZyhpbmRleCwgdmVydGV4LngsIHZlcnRleC55KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMxJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMSk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMyJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMik7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbn1cblxuZnVuY3Rpb24gc3RyKHZlcnRleCwgaXNGaXhlZCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBgKCR7dmVydGV4Lnh9LCR7dmVydGV4Lnl9KWA7XG4gICAgfVxuICAgIHJldHVybiBgKCR7dmVydGV4LngudG9GaXhlZCgyKX0sJHt2ZXJ0ZXgueS50b0ZpeGVkKDIpfSlgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9HSksuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgR0pLIGZyb20gJy4uL2dqay9HSksnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXJcbntcbiAgICBzdGF0aWMgZHJhd01pbmtvd3NraVN1bSh2ZXJ0aWNlczEsIHZlcnRpY2VzMilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmF3TWlua293c2tpU3VtKCcsIHZlcnRpY2VzMS5sZW5ndGggKiB2ZXJ0aWNlczIubGVuZ3RoLCAnKScpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlczEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmVydGljZXMyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdjEgPSB2ZXJ0aWNlczFbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgdjIgPSB2ZXJ0aWNlczJbal0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IFZlY3Rvci5zdWJ0cmFjdCh2MSwgdjIpO1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChkaWZmKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpLCBqLCBgdmVjWyR7ZGlmZi54fSwgJHtkaWZmLnl9XWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udmV4SHVsbFBhdGggPSBHSksuY3JlYXRlQ29udmV4SHVsbChwYXRoKTtcbiAgICAgICAgUGFpbnRlci5kcmF3UG9seWdvbihjb252ZXhIdWxsUGF0aCwgMSwgMHhEREREREQsIDEpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2x5Z29uKHZlcnRpY2VzLCBsaW5lV2lkdGggPSAxLCBjb2xvciA9IDB4NjA3RDhCLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gd2luZG93Lmc7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZShsaW5lV2lkdGgsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgY29uc3QgdmVjMCA9IHZlcnRpY2VzWzBdLmNsb25lKCk7XG4gICAgICAgIHZlYzAubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh2ZWMwLngsIHZlYzAueSk7XG5cbiAgICAgICAgLy8gdGhpcy5kcmF3VGV4dCh3aW5kb3cuc3RhZ2UsICcoJyArIHZlYzAueC50b0ZpeGVkKDApICsgJywnICsgdmVjMC55LnRvRml4ZWQoMCkgKyAnKScsIHZlYzApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2ZWMgPSB2ZXJ0aWNlc1tpXS5jbG9uZSgpO1xuICAgICAgICAgICAgdmVjLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMueCwgdmVjLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYzAueCwgdmVjMC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3VGV4dChzdGFnZSwgc3RyaW5nLCBwb2ludCwgY29sb3IgPSAnI2ZmMzMwMCcpXG4gICAge1xuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChzdHJpbmcsIHtcbiAgICAgICAgICAgIC8vIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICAvLyBmb250U2l6ZTogNCxcbiAgICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIGZpbGw6IGNvbG9yLFxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnIzRhMTg1MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRleHQueCA9IHBvaW50Lng7XG4gICAgICAgIHRleHQueSA9IHBvaW50Lnk7XG5cbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQodGV4dCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50KGdyYXBoaWNzLCBwb2ludCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgY29sb3IpO1xuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShwb2ludC54LCBwb2ludC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeUJvdW5kcyhncmFwaGljcywgYm91bmRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSlcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucnQueCwgcmVjdC5ydC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucmIueCwgcmVjdC5yYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubGIueCwgcmVjdC5sYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzQnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sdC54LCByZWN0Lmx0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5ydC54LCByZWN0LnJ0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5yYi54LCByZWN0LnJiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sYi54LCByZWN0LmxiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50cyhncmFwaGljcywgcG9pbnRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwMSA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIHZhciBwMiA9IHBvaW50c1tpICsgMSA8IHBvaW50cy5sZW5ndGggPyBpICsgMSA6IDBdO1xuXG4gICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0xpbmUoZ3JhcGhpY3MsIHAwLCBwMSwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDAueCwgcDAueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMS54LCBwMS55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3QXJyb3coZ3JhcGhpY3MsIG1vdmVQb2ludCwgdG9Qb2ludCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43LCBzY2FsZSA9IDUpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG5cbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IodG9Qb2ludC54IC0gbW92ZVBvaW50LngsIHRvUG9pbnQueSAtIG1vdmVQb2ludC55KTtcbiAgICAgICAgdmFyIGxlZnQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHZlY3Rvci5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcigxNSk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgdmVjdG9yLngsIG1vdmVQb2ludC55ICsgdmVjdG9yLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgbGVmdC54LCBtb3ZlUG9pbnQueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyByaWdodC54LCBtb3ZlUG9pbnQueSArIHJpZ2h0LnkpOyovXG5cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcihtb3ZlUG9pbnQueCAtIHRvUG9pbnQueCwgbW92ZVBvaW50LnkgLSB0b1BvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0RpcmVjdGlvbihncmFwaGljcywgbWUsIHRhcmdldCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43LCBzY2FsZSA9IDUpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcblxuICAgICAgICB2YXIgdG8gPSBtZS50byh0YXJnZXQpO1xuICAgICAgICB2YXIgbGVmdCA9IHRvLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdG8uY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgdG8uaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIHRvLngsIG1lLnkgKyB0by55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIGxlZnQueCwgbWUueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1lLnggKyByaWdodC54LCBtZS55ICsgcmlnaHQueSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1BhaW50ZXIuanMiLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi4vLi4vc3JjL3NhdC9Qb2ludCc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4uLy4uL3NyYy9zYXQvQ2lyY2xlJztcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4uLy4uL3NyYy9zYXQvUG9seWdvbic7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uLy4uL3NyYy9WZWN0b3InO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1BhaW50ZXInO1xuaW1wb3J0IE1vdXNlIGZyb20gJy4uLy4uL3NyYy91dGlscy9Nb3VzZSc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuXG5jb25zdCBncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAsIGRlYnVnR3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpXG4gICAgLCBzaGFwZXMgPSBbXVxuICAgICwgTElORV9DT0xPUiA9IDB4ODREMkY2XG4gICAgLCBBUlJPV19DT0xPUiA9IDB4RTU3MzczO1xuXG5sZXQgcG9seWdvblBvaW50cyA9IFtcbiAgICBbbmV3IFBvaW50KDM1MCwgMzUwKSwgbmV3IFBvaW50KDM1MCwgNTAwKSwgbmV3IFBvaW50KDUwMCwgNTAwKV0sXG4gICAgW25ldyBQb2ludCg1MDAsIDIwMCksIG5ldyBQb2ludCg0ODAsIDI1MCksIG5ldyBQb2ludCg2MDAsIDI1MCksIG5ldyBQb2ludCg2MjAsIDIwMCldLFxuICAgIFtuZXcgUG9pbnQoMjU4LCAxMjApLCBuZXcgUG9pbnQoMjk1LCAyMzApLCBuZXcgUG9pbnQoMjAwLCAzMDApLCBuZXcgUG9pbnQoMTA1LCAyMzApLCBuZXcgUG9pbnQoMTQyLCAxMjApXVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFBJWEkuQ29udGFpbmVyXG57XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHdpbmRvd1snZyddID0gZGVidWdHcmFwaGljcztcblxuICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMucmVuZGVyZXIudmlldztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cblxuICAgIGluaXRpYWxpemUoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENoaWxkKGdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChkZWJ1Z0dyYXBoaWNzKTtcblxuICAgICAgICB0aGlzLm1vdXNlRG93blBvaW50ID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIHRoaXMubGFzdGRyYWcgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcbiAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvL3RoaXMuY3JlYXRlUG9seWdvbigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBvbHlnb25NYW51YWwoKTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG5cbiAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgYWRkRXZlbnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5vbignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoKSB7fVxuXG5cbiAgICByZXNpemUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuXG4gICAgZ2V0UG9seWdvblBvaW50cyh0eCwgdHksIGFuZ2xlLCByYWRpdXMgPSAxMDApXG4gICAge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBbXTtcblxuICAgICAgICAvLyBtYWtpbmcgcG9pbnRzLCBwYXRoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5nbGU7IGkgKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gdHggKyAocmFkaXVzICogLU1hdGguc2luKHRoaXMudG9SYWRpYW4oMzYwIC8gYW5nbGUgKiBpKSkpO1xuICAgICAgICAgICAgbGV0IHkgPSB0eSArIChyYWRpdXMgKiAgTWF0aC5jb3ModGhpcy50b1JhZGlhbigzNjAgLyBhbmdsZSAqIGkpKSk7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUElYSS5Qb2ludCh4LCB5KTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuXG5cbiAgICB0b1JhZGlhbihkZWdyZWUpXG4gICAge1xuICAgICAgICByZXR1cm4gZGVncmVlICogTWF0aC5QSSAvIDE4MDtcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBvbHlnb24odXNlUmFuZG9tUm90YXRlID0gZmFsc2UpXG4gICAge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9seWdvblBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvbHlnb24gPSBuZXcgUG9seWdvbihjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBwb2ludHMgPSBwb2x5Z29uUG9pbnRzW2ldO1xuXG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgICAgICBwb2x5Z29uLmFkZFBvaW50KHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh1c2VSYW5kb21Sb3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVNoYXBlKHBvbHlnb24sIE1hdGgucmFuZG9tKCkgKiA0NSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNoYXBlcy5wdXNoKHBvbHlnb24pO1xuXG4gICAgICAgICAgICBwb2x5Z29uLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQb2x5Z29uTWFudWFsKClcbiAgICB7XG4gICAgICAgIGxldCByYWRpdXMgPSAxMDAsXG4gICAgICAgICAgICBkaWFtZXRlciA9IDIwMCxcbiAgICAgICAgICAgIHNwYWNlID0gMjAsXG4gICAgICAgICAgICBhID0gcmFkaXVzICsgc3BhY2UsXG4gICAgICAgICAgICBiID0gcmFkaXVzICsgZGlhbWV0ZXIgKyBzcGFjZSAqIDIsXG4gICAgICAgICAgICBjID0gcmFkaXVzICsgZGlhbWV0ZXIgKiAyICsgc3BhY2UgKiAzO1xuXG4gICAgICAgIHBvbHlnb25Qb2ludHMgPSBbXTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhhLCBhLCAzKSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYiwgYSwgNCkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGMsIGEsIDUpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhhLCBiLCA2KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYiwgYiwgNykpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGMsIGIsIDgpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhhLCBjLCA5KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYiwgYywgMTApKTtcbiAgICAgICAgdGhpcy5hZGRDaXJjbGUoYywgYywgcmFkaXVzKTtcbiAgICAgICAgLy90aGlzLmFkZENpcmNsZShjLCBjLCByYWRpdXMpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUG9seWdvbih0cnVlKTtcbiAgICB9XG5cblxuICAgIGFkZFBvbHlnb24oaW5kZXgsIHVzZVJhbmRvbVJvdGF0ZSA9IHRydWUpXG4gICAge1xuICAgICAgICBsZXQgcG9seWdvbiA9IG5ldyBQb2x5Z29uKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgbGV0IHBvaW50cyA9IHBvbHlnb25Qb2ludHNbaW5kZXhdO1xuXG4gICAgICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgcG9seWdvbi5hZGRQb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVzZVJhbmRvbVJvdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVTaGFwZShwb2x5Z29uLCAoTWF0aC5yYW5kb20oKSAqIDQ1KSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9seWdvbi5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgc2hhcGVzLnB1c2gocG9seWdvbik7XG4gICAgfVxuXG5cbiAgICBhZGRDaXJjbGUoeCwgeSwgcmFkaXVzKVxuICAgIHtcbiAgICAgICAgbGV0IGNpcmNsZSA9IG5ldyBDaXJjbGUodGhpcy5jb250ZXh0LCB4LCB5LCByYWRpdXMpO1xuICAgICAgICBjaXJjbGUuY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIHNoYXBlcy5wdXNoKGNpcmNsZSk7XG4gICAgICAgIHRoaXMuY2lyY2xlID0gY2lyY2xlO1xuICAgIH1cblxuXG4gICAgdXBkYXRlUmVuZGVyKClcbiAgICB7XG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgc2hhcGVzLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIHBvbHlnb24uY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZGV0ZWN0Q29sbGlzaW9ucygpXG4gICAge1xuICAgICAgICBsZXQgZHJhZ1NoYXBlID0gdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZDtcblxuICAgICAgICBpZiAoIWRyYWdTaGFwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChzaGFwZSAhPT0gZHJhZ1NoYXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG10diA9IGRyYWdTaGFwZS5jb2xsaWRlc1dpdGgoc2hhcGUpO1xuXG4gICAgICAgICAgICAgICAgLy8g7Lap64+MIO2MkOyglVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkRldGVjdGVkKG10dikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlU2hhcGVCeU1UVihtdHYsIGRyYWdTaGFwZSwgc2hhcGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBtdHbroZwg7Lap64+MIO2MkOyglVxuICAgICAqIEBwYXJhbSBtdHZcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjb2xsaXNpb25EZXRlY3RlZChtdHYpXG4gICAge1xuICAgICAgICAvLyDstqnrj4wg7YyQ7KCVXG4gICAgICAgIGlmIChtdHYuYXhpcyAhPSB1bmRlZmluZWQgfHwgbXR2Lm92ZXJsYXAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGNoZWNrTVRWQXhpc0RpcmVjdGlvbihtdHYsIGNvbGxpZGVyLCBjb2xsaWRlZSlcbiAgICB7XG4gICAgICAgIGlmIChtdHYuYXhpcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBjb2xsaWRlckNlbnRlciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNvbGxpZGVyLmdldENlbnRlcigpKSxcbiAgICAgICAgICAgIGNvbGxpZGVlQ2VudGVyID0gVmVjdG9yLmZyb21PYmplY3QoY29sbGlkZWUuZ2V0Q2VudGVyKCkpLFxuICAgICAgICAgICAgY2VudGVyVmVjdG9yID0gY29sbGlkZWVDZW50ZXIuc3VidHJhY3QoY29sbGlkZXJDZW50ZXIpLFxuICAgICAgICAgICAgY2VudGVyVW5pdFZlY3RvciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNlbnRlclZlY3Rvcikubm9ybWFsaXplKCk7XG5cbiAgICAgICAgaWYgKGNlbnRlclVuaXRWZWN0b3IuZG90UHJvZHVjdChtdHYuYXhpcykgPiAwKSB7XG4gICAgICAgICAgICBtdHYuYXhpcy54ID0gLW10di5heGlzLng7XG4gICAgICAgICAgICBtdHYuYXhpcy55ID0gLW10di5heGlzLnk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtdHZcbiAgICAgKiBAcGFyYW0gY29sbGlkZXIg7Lap64+M7ZWcIOqwneyytFxuICAgICAqIEBwYXJhbSBjb2xsaWRlZSDstqnrj4zsnYQg64u57ZWcIOqwneyytFxuICAgICAqL1xuICAgIG1vdmVTaGFwZUJ5TVRWKG10diwgY29sbGlkZXIsIGNvbGxpZGVlKVxuICAgIHtcbiAgICAgICAgaWYgKG10di5heGlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG10di5heGlzID0gbmV3IFZlY3RvcigxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkeCA9IG10di5heGlzLnggKiBtdHYub3ZlcmxhcCxcbiAgICAgICAgICAgIGR5ID0gbXR2LmF4aXMueSAqIG10di5vdmVybGFwO1xuXG4gICAgICAgIGxldCBkcmFnVmVjdG9yID0gdGhpcy5kcmFnVmVjdG9yLFxuICAgICAgICAgICAgY2VudGVyQ29sbGlkZXIgPSBjb2xsaWRlci5nZXRDZW50ZXIoKSxcbiAgICAgICAgICAgIGNlbnRlckNvbGxpZGVlID0gY29sbGlkZWUuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yKGNlbnRlckNvbGxpZGVlLnggLSBjZW50ZXJDb2xsaWRlci54LCBjZW50ZXJDb2xsaWRlZS55IC0gY2VudGVyQ29sbGlkZXIueSksXG4gICAgICAgICAgICBkaXJlY3Rpb25Ob3JtID0gZGlyZWN0aW9uLm5vcm0oKSxcbiAgICAgICAgICAgIG92ZXJsYXBWZWN0b3IgPSBuZXcgVmVjdG9yKGR4LCBkeSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOuCtOyggeydtCAtMeydtOuptCDrsJjrjIAg67Cp7Zal7J2EIOuztOuKlCDqsoNcbiAgICAgICAgICog64K07KCB7J20IDDsnbTrqbQg7IiY7KeBXG4gICAgICAgICAqIOuCtOyggeydtCAx7J24IOqyveyasCDqsJnsnYAg67Cp7Zal7J2EIOqwgOumrO2CpOuKlCDqsoNcbiAgICAgICAgICog64K07KCB7J20ID4gMC44IOuLpOuptCDqsJnsnYAg67Cp7Zal7J2EIOuztOqzoCDsnojripQg7IOB7YOcXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgZG90ID0gZHJhZ1ZlY3Rvci5kb3RQcm9kdWN0KG92ZXJsYXBWZWN0b3IpO1xuXG4gICAgICAgIGlmIChkb3QgPCAwKSB7XG4gICAgICAgICAgICBkeCA9IC1keDtcbiAgICAgICAgICAgIGR5ID0gLWR5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGMgPSBjb2xsaWRlZS5nZXRDZW50ZXIoKSxcbiAgICAgICAgICAgIHRvID0gbmV3IFZlY3RvcihkeCwgZHkpLFxuICAgICAgICAgICAgdG9Ob3JtYWxpemUgPSB0by5jbG9uZSgpLm5vcm0oKSxcbiAgICAgICAgICAgIGRvdFRvID0gZGlyZWN0aW9uTm9ybS5kb3RQcm9kdWN0KHRvTm9ybWFsaXplKSxcbiAgICAgICAgICAgIGNlbnRlciA9IG5ldyBWZWN0b3IoYy54LCBjLnkpO1xuICAgICAgICB0byA9IGNlbnRlci5jbG9uZSgpLnN1YnRyYWN0KHRvKTtcblxuICAgICAgICAvLyDrkZAg6rCd7LK07J2YIOuwqe2WpSDrsqHthLDsmYAg67CA7Ja064K064qUIOuwse2EsCh0bynsnZgg64K07KCB7J20IDDrs7Tri6Qg7YG0IOqyveyasCwg7KaJIOuwgOyWtCDrgrTripQg67Cp7Zal7J20IOuwgOyWtOuCtOuKlCDrsKntlqXsnbwg65WM66eMIOyggeyaqVxuICAgICAgICBpZiAoZG90VG8gPj0gMCkge1xuICAgICAgICAgICAgUGFpbnRlci5kcmF3QXJyb3cod2luZG93LmcsIGNlbnRlciwgdG8sIGZhbHNlLCAxLCBBUlJPV19DT0xPUik7XG4gICAgICAgICAgICAvL1BhaW50ZXIuZHJhd1BvaW50KHdpbmRvdy5nLCB0aGlzLmNpcmNsZS5nZXRDZW50ZXIoKSwgZmFsc2UsIDEwLCAweGZmMzMwMCwgMC4yKTtcbiAgICAgICAgICAgIGNvbGxpZGVlLm1vdmUoZHgsIGR5KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcm90YXRlU2hhcGUoc2hhcGUsIGRlZ3JlZXMpXG4gICAge1xuICAgICAgICAvL2RlZ3JlZXMgPSA5MDtcbiAgICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLnBvaW50cztcblxuICAgICAgICBpZiAocG9pbnRzKSB7XG4gICAgICAgICAgICBsZXQgY2VudGVyID0gc2hhcGUuZ2V0Q2VudGVyKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0ICBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0gPSB0aGlzLnJvdGF0aW9uUG9pbnQoY2VudGVyLCBwb2ludCwgZGVncmVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIO2ajOyghO2VmOuKlCDsooztkZwg6rWs7ZWY6riwXG4gICAgICogQHBhcmFtIHBpdm90IOyCrOqwge2YleydmCDspJHsi6zsoJBcbiAgICAgKiBAcGFyYW0gcG9pbnQg6rOE7IKw7ZWY6rOgIOyLtuydgCDtj6zsnbjtirhcbiAgICAgKiBAcGFyYW0gZGVncmVlcyDtmozsoITqsIEgZGVncmVlc1xuICAgICAqIEByZXR1cm5zIHt7eDogKG51bWJlcnwqKSwgeTogKG51bWJlcnwqKX19XG4gICAgICovXG4gICAgcm90YXRpb25Qb2ludChwaXZvdCwgcG9pbnQsIGRlZ3JlZXMpXG4gICAge1xuICAgICAgICBsZXQgZGlmZlggPSBwb2ludC54IC0gcGl2b3QueDtcbiAgICAgICAgbGV0IGRpZmZZID0gcG9pbnQueSAtIHBpdm90Lnk7XG4gICAgICAgIGxldCBkaXN0ID0gTWF0aC5zcXJ0KGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZKTtcbiAgICAgICAgbGV0IGNhID0gTWF0aC5hdGFuMihkaWZmWSwgZGlmZlgpICogKDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBsZXQgbmEgPSAoKGNhICsgZGVncmVlcykgJSAzNjApICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICBsZXQgeCA9IChwaXZvdC54ICsgZGlzdCAqIE1hdGguY29zKG5hKSArIDAuNSkgfCAwO1xuICAgICAgICBsZXQgeSA9IChwaXZvdC55ICsgZGlzdCAqIE1hdGguc2luKG5hKSArIDAuNSkgfCAwO1xuICAgICAgICByZXR1cm4ge3g6IHgsIHk6IHl9O1xuICAgIH1cblxuXG4gICAgb25Nb3VzZURvd24oKVxuICAgIHtcbiAgICAgICAgZGVidWdHcmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgIGxldCBjdXJyZW50UG9pbnQgPSBWZWN0b3IuZnJvbU9iamVjdChNb3VzZS5nbG9iYWwpO1xuXG4gICAgICAgIHNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoYXBlLmlzUG9pbnRJblBhdGgoY3VycmVudFBvaW50LngsIGN1cnJlbnRQb2ludC55KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93blBvaW50LnggPSBjdXJyZW50UG9pbnQueDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93blBvaW50LnkgPSBjdXJyZW50UG9pbnQueTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnggPSBjdXJyZW50UG9pbnQueDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnkgPSBjdXJyZW50UG9pbnQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlTW92ZSgpXG4gICAge1xuICAgICAgICBkZWJ1Z0dyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQb2ludCwgZHJhZ1ZlY3RvcjtcblxuICAgICAgICBpZiAodGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCkge1xuICAgICAgICAgICAgY3VycmVudFBvaW50ID0gVmVjdG9yLmZyb21PYmplY3QoTW91c2UuZ2xvYmFsKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnVmVjdG9yID0gZHJhZ1ZlY3RvciA9IGN1cnJlbnRQb2ludC5jbG9uZSgpLnN1YnRyYWN0KHRoaXMubGFzdGRyYWcpO1xuXG4gICAgICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkLm1vdmUoZHJhZ1ZlY3Rvci54LCBkcmFnVmVjdG9yLnkpO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnggPSBjdXJyZW50UG9pbnQueDtcbiAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueSA9IGN1cnJlbnRQb2ludC55O1xuXG4gICAgICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbnMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uTW91c2VVcCgpXG4gICAge1xuICAgICAgICBkZWJ1Z0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG5cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy9cbiAgICAvLyBUZXN0IO2VqOyImFxuICAgIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgb25LZXlVcChlKVxuICAgIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FU0NBUEU6XG4gICAgICAgICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5OVU1CRVJfMTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLk5VTUJFUl8yOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L3NhdC9UZXN0LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRcbntcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9Qb2ludC5qcyIsImltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQcm9qZWN0aW9uIGZyb20gJy4vUHJvamVjdGlvbic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBTaGFwZVxue1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHgsIHksIHJhZGl1cylcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gJ0NpcmNsZSc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7KSR7KCQIOyijO2RnCDrsJjtmZhcbiAgICAgKiBAcmV0dXJucyB7UElYSS5Qb2ludHwqfHN2Zy5Qb2ludH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlBvaW50KHRoaXMueCx0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKVxuICAgIHtcbiAgICAgICAgaWYgKHNoYXBlLnJhZGl1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHNoYXBlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZUNvbGxpZGVzV2l0aENpcmNsZSh0aGlzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKVxuICAgIHtcbiAgICAgICAgdmFyIGF4ZXMgPSBzaGFwZS5nZXRBeGVzKCksIGRpc3RhbmNlO1xuXG4gICAgICAgIGlmIChheGVzID09PSB1bmRlZmluZWQpIHsgLy/sm5BcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KHNoYXBlLnggLSB0aGlzLngsIDIpICtcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhzaGFwZS55IC0gdGhpcy55LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2UgPCBNYXRoLmFicyh0aGlzLnJhZGl1cyArIHNoYXBlLnJhZGl1cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHNoYXBlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuXG5cbiAgICBnZXRQb2x5Z29uUG9pbnRDbG9zZXN0VG9DaXJjbGUocG9seWdvbiwgY2lyY2xlKVxuICAgIHtcbiAgICAgICAgbGV0IG1pbiA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjaXJjbGVWZWN0b3IgPSBWZWN0b3IuZnJvbU9iamVjdChjaXJjbGUpLFxuICAgICAgICAgICAgbGVuZ3RoLCB0ZXN0UG9pbnRWZWN0b3IsIGNsb3Nlc3RQb2ludDtcblxuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBwb2x5Z29uLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVzdFBvaW50VmVjdG9yID0gVmVjdG9yLmZyb21PYmplY3QocG9seWdvbi5wb2ludHNbaV0pO1xuICAgICAgICAgICAgdGVzdFBvaW50VmVjdG9yLmluZGV4ID0gaTtcbiAgICAgICAgICAgIGxlbmd0aCA9IHRlc3RQb2ludFZlY3Rvci5jbG9uZSgpLmRpc3RhbmNlKGNpcmNsZSk7XG5cbiAgICAgICAgICAgIGlmIChsZW5ndGggPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBsZW5ndGg7XG4gICAgICAgICAgICAgICAgY2xvc2VzdFBvaW50ID0gdGVzdFBvaW50VmVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RQb2ludC5jbG9uZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uk6rCB7ZiV6rO8IOybkO2YlSDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHBvbHlnb25cbiAgICAgKiBAcGFyYW0gY2lyY2xlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgLypwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSlcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgYXhlcyA9IHBvbHlnb24uZ2V0QXhlcygpLFxuICAgICAgICAgICAgY2xvc2VzdFBvaW50ID0gdGhpcy5nZXRQb2x5Z29uUG9pbnRDbG9zZXN0VG9DaXJjbGUocG9seWdvbiwgY2lyY2xlKTtcblxuICAgICAgICBheGVzLnB1c2godGhpcy5nZXRDaXJjbGVBeGlzKGNpcmNsZSwgY2xvc2VzdFBvaW50KSk7XG5cbiAgICAgICAgcmV0dXJuICFwb2x5Z29uLnNlcGFyYXRpb25PbkF4ZXMoYXhlcywgY2lyY2xlKTtcbiAgICB9Ki9cblxuXG4gICAgZ2V0Q2lyY2xlQXhpcyhjaXJjbGUsIGNsb3Nlc3RQb2ludClcbiAgICB7XG4gICAgICAgIHZhciB2MSA9IG5ldyBWZWN0b3IoY2lyY2xlLngsIGNpcmNsZS55KSxcbiAgICAgICAgICAgIHYyID0gbmV3IFZlY3RvcihjbG9zZXN0UG9pbnQueCwgY2xvc2VzdFBvaW50LnkpLFxuICAgICAgICAgICAgc3VyZmFjZVZlY3RvciA9IHYxLnN1YnRyYWN0KHYyKTtcblxuICAgICAgICBQYWludGVyLmRyYXdQb2ludCh3aW5kb3cuZywgY2xvc2VzdFBvaW50LCBmYWxzZSwgNSwgMHhmZjMzMDAsIDAuMyk7XG4gICAgICAgIC8vUGFpbnRlci5kcmF3TGluZSh3aW5kb3cuZywgVmVjdG9yLmZyb21PYmplY3QoY2lyY2xlKSwgVmVjdG9yLmZyb21PYmplY3QoY2xvc2VzdFBvaW50KSwgZmFsc2UsIDEsIDB4ZmYzMzAwLCAwLjMpO1xuXG4gICAgICAgIHJldHVybiBzdXJmYWNlVmVjdG9yLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgcHJvamVjdChheGlzKVxuICAgIHtcbiAgICAgICAgbGV0IHNjYWxhcnMgPSBbXSxcbiAgICAgICAgICAgIHBvaW50ID0gbmV3IFBJWEkuUG9pbnQodGhpcy54LCB0aGlzLnkpLFxuICAgICAgICAgICAgcG9pbnRWZWN0b3IgPSBuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpLFxuICAgICAgICAgICAgZG90UHJvZHVjdCA9IHBvaW50VmVjdG9yLmRvdFByb2R1Y3QoYXhpcyk7XG5cbiAgICAgICAgc2NhbGFycy5wdXNoKGRvdFByb2R1Y3QpO1xuICAgICAgICBzY2FsYXJzLnB1c2goZG90UHJvZHVjdCArIHRoaXMucmFkaXVzKTtcbiAgICAgICAgc2NhbGFycy5wdXNoKGRvdFByb2R1Y3QgLSB0aGlzLnJhZGl1cyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0aW9uKFxuICAgICAgICAgICAgTWF0aC5taW4uYXBwbHkoTWF0aCwgc2NhbGFycyksXG4gICAgICAgICAgICBNYXRoLm1heC5hcHBseShNYXRoLCBzY2FsYXJzKVxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgZ2V0QXhlcygpXG4gICAge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUGF0aChncmFwaGljcywgbGluZUNvbG9yID0gMHhGRkZGRkYpXG4gICAge1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgbGluZUNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHRoaXMueCArIHRoaXMucmFkaXVzLCB0aGlzLnkpO1xuICAgICAgICBncmFwaGljcy5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIH1cblxuXG4gICAgbW92ZShkeCwgZHkpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gZHg7XG4gICAgICAgIHRoaXMueSArPSBkeTtcbiAgICB9XG5cblxuICAgIGlzUG9pbnRJblBhdGgoeCwgeSlcbiAgICB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGlzUG9pbnRJblBhdGggPSB0aGlzLmNvbnRleHQuaXNQb2ludEluUGF0aCh4LCB5KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgcmV0dXJuIGlzUG9pbnRJblBhdGg7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L0NpcmNsZS5qcyIsImltcG9ydCBNVFYgZnJvbSAnLi9NVFYnO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIG1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihheGVzLCBzaGFwZSkge1xuICAgICAgICB2YXIgbWluaW11bU92ZXJsYXAgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgb3ZlcmxhcCwgYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXAsXG4gICAgICAgICAgICBheGlzLCBwcm9qZWN0aW9uMSwgcHJvamVjdGlvbjI7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBheGlzID0gYXhlc1tpXTtcbiAgICAgICAgICAgIHByb2plY3Rpb24xID0gc2hhcGUucHJvamVjdChheGlzKTtcbiAgICAgICAgICAgIHByb2plY3Rpb24yID0gdGhpcy5wcm9qZWN0KGF4aXMpO1xuICAgICAgICAgICAgb3ZlcmxhcCA9IHByb2plY3Rpb24xLmdldE92ZXJsYXAocHJvamVjdGlvbjIpO1xuXG4gICAgICAgICAgICAvKlBhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsXG4gICAgICAgICAgICAgICAge3g6YXhpcy54ICogcHJvamVjdGlvbjEubWluLCB5OmF4aXMueSAqIHByb2plY3Rpb24xLm1pbn0sXG4gICAgICAgICAgICAgICAge3g6YXhpcy54ICogcHJvamVjdGlvbjIubWF4LCB5OmF4aXMueSAqIHByb2plY3Rpb24yLm1heH0sXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7Ki9cblxuICAgICAgICAgICAgaWYgKG92ZXJsYXAgPT09IDApIHsgLy/stqnrj4wg7JeG7Iq0LlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTVRWKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXAgPCBtaW5pbXVtT3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtT3ZlcmxhcCA9IG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgICAgIGF4aXNXaXRoU21hbGxlc3RPdmVybGFwID0gYXhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IE1UVihtaW5pbXVtT3ZlcmxhcCwgYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog65GQIOuLpOqwge2YlSDsgqzsnbTsl5DshJwg7Lap64+MXG4gICAgICogQHBhcmFtIHAxXG4gICAgICogQHBhcmFtIHAyXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcG9seWdvbkNvbGxpZGVzV2l0aFBvbHlnb24ocDEsIHAyKSB7XG4gICAgICAgIHZhciBtdHYxID0gcDEubWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKHAxLmdldEF4ZXMoKSwgcDIpLFxuICAgICAgICAgICAgbXR2MiA9IHAxLm1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihwMi5nZXRBeGVzKCksIHAyKTtcblxuICAgICAgICBpZiAobXR2MS5vdmVybGFwID09PSAwICYmIG10djIub3ZlcmxhcCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNVFYoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbXR2MS5vdmVybGFwIDwgbXR2Mi5vdmVybGFwID8gbXR2MSA6IG10djI7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuRkCDsm5DtmJXsl5Ag64yA7ZWcIOy2qeuPjFxuICAgICAqIEBwYXJhbSBjMVxuICAgICAqIEBwYXJhbSBjMlxuICAgICAqL1xuICAgIGNpcmNsZUNvbGxpZGVzV2l0aENpcmNsZShjMSwgYzIpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KGMyLnggLSBjMS54LCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdyhjMi55IC0gYzEueSwgMikpLFxuICAgICAgICAgICAgb3ZlcmxhcCA9IE1hdGguYWJzKGMxLnJhZGl1cyArIGMyLnJhZGl1cykgLSBkaXN0YW5jZTtcblxuICAgICAgICByZXR1cm4gb3ZlcmxhcCA8IDAgP1xuICAgICAgICAgICAgbmV3IE1UVigwKSA6XG4gICAgICAgICAgICBuZXcgTVRWKG92ZXJsYXApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uk6rCB7ZiV6rO8IOybkO2YlSDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHBvbHlnb25cbiAgICAgKiBAcGFyYW0gY2lyY2xlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShwb2x5Z29uLCBjaXJjbGUpIHtcbiAgICAgICAgdmFyIGF4ZXMgPSBwb2x5Z29uLmdldEF4ZXMoKSxcbiAgICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IGNpcmNsZS5nZXRQb2x5Z29uUG9pbnRDbG9zZXN0VG9DaXJjbGUocG9seWdvbiwgY2lyY2xlKTtcblxuICAgICAgICAvLyBQYWludGVyLmRyYXdQb2ludCh3aW5kb3cuZywgY2xvc2VzdFBvaW50LCBmYWxzZSwgNSwgMHhFNTczNzMpO1xuXG4gICAgICAgIGF4ZXMucHVzaChjaXJjbGUuZ2V0Q2lyY2xlQXhpcyhjaXJjbGUsIGNsb3Nlc3RQb2ludCkpO1xuXG4gICAgICAgIHJldHVybiBwb2x5Z29uLm1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihheGVzLCBjaXJjbGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7LaV7JeQIO2IrOyYge2VmOyXrCDrtoTrpqzqsIAg7J6I7Jy866m0IHRydWUg67CY7ZmYKOy2qeuPjOuQmOyngCDslYrslZjri6TrqbQgdHJ1ZSDrsJjtmZgpXG4gICAgICogQHBhcmFtIG90aGVyU2hhcGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpIHtcbiAgICAgICAgdmFyIGF4ZXMgPSB0aGlzLmdldEF4ZXMoKS5jb25jYXQoc2hhcGUuZ2V0QXhlcygpKTtcbiAgICAgICAgcmV0dXJuICF0aGlzLnNlcGFyYXRpb25PbkF4ZXMoYXhlcywgc2hhcGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog67aE66as7LaV7J20IOyeiOuKlOyngCDsl6zrtoAgKOu2hOumrOy2leydtCDsnojri6TripQg7J207JW86riw64qUIOy2qeuPjO2VmOyngCDslYrslZjri6TripQg7J207JW86riwIOyeheuLiOuLpC4pXG4gICAgICogQHBhcmFtIGF4ZXNcbiAgICAgKiBAcGFyYW0gc2hhcGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2ldO1xuICAgICAgICAgICAgdmFyIHByb2plY3Rpb24xID0gc2hhcGUucHJvamVjdChheGlzKTtcbiAgICAgICAgICAgIHZhciBwcm9qZWN0aW9uMiA9IHRoaXMucHJvamVjdChheGlzKTtcblxuICAgICAgICAgICAgaWYgKCFwcm9qZWN0aW9uMS5vdmVybGFwcyhwcm9qZWN0aW9uMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gZG9uJ3QgaGF2ZSB0byB0ZXN0IHJlbWFpbmluZyBheGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1NoYXBlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTVRWXG57XG4gICAgLyoqXG4gICAgICog7LWc7IaMIOydtOuPmSDrsqHthLBcbiAgICAgKiBNaW5pbXVtIFRyYW5zbGF0aW9uIFZlY3RvciAoTVRWKVxuICAgICAqIEBwYXJhbSBheGlzXG4gICAgICogQHBhcmFtIG92ZXJsYXBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvdmVybGFwID0gdW5kZWZpbmVkLCBheGlzID0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpcztcbiAgICAgICAgdGhpcy5vdmVybGFwID0gb3ZlcmxhcDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9NVFYuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0aW9uXG57XG4gICAgY29uc3RydWN0b3IobWluLCBtYXgpXG4gICAge1xuICAgICAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgfVxuXG5cbiAgICBnZXRPdmVybGFwKHByb2plY3Rpb24pXG4gICAge1xuICAgICAgICB2YXIgb3ZlcmxhcDtcblxuICAgICAgICBpZiAoIXRoaXMub3ZlcmxhcHMocHJvamVjdGlvbikpXG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICBpZiAodGhpcy5tYXggPiBwcm9qZWN0aW9uLm1heCkge1xuICAgICAgICAgICAgb3ZlcmxhcCA9IHByb2plY3Rpb24ubWF4IC0gdGhpcy5taW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvdmVybGFwID0gdGhpcy5tYXggLSBwcm9qZWN0aW9uLm1pbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3ZlcmxhcDtcbiAgICB9XG5cblxuICAgIG92ZXJsYXBzKHByb2plY3Rpb24pXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXggPiBwcm9qZWN0aW9uLm1pbiAmJiBwcm9qZWN0aW9uLm1heCA+IHRoaXMubWluO1xuICAgIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9Qcm9qZWN0aW9uLmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFByb2plY3Rpb24gZnJvbSAnLi9Qcm9qZWN0aW9uJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBTaGFwZVxue1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucG9pbnRzLmxlbmd0aCArICcgUG9seWdvbic7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDspJHsoJAg7KKM7ZGcXG4gICAgICogQHJldHVybnMge1BJWEkuUG9pbnR8KnxzdmcuUG9pbnR9XG4gICAgICovXG4gICAgZ2V0Q2VudGVyKClcbiAgICB7XG4gICAgICAgIHZhciBwb2ludFN1bSA9IG5ldyBQSVhJLlBvaW50KCk7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wLCBwb2ludDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBwb2ludCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICAgICAgcG9pbnRTdW0ueCArPSBwb2ludC54O1xuICAgICAgICAgICAgcG9pbnRTdW0ueSArPSBwb2ludC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUElYSS5Qb2ludChwb2ludFN1bS54IC8gdGhpcy5wb2ludHMubGVuZ3RoLFxuICAgICAgICAgICAgcG9pbnRTdW0ueSAvIHRoaXMucG9pbnRzLmxlbmd0aCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstqnrj4wg7LK07YGsICjrtoTrpqzstpXsnbQg7JeG7Jy866m0IOy2qeuPjCksICFzZXBhcmF0aW9uT25BeGVzXG4gICAgICogQHBhcmFtIHNoYXBlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKVxuICAgIHtcbiAgICAgICAgaWYgKHNoYXBlLnJhZGl1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLypcbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICB2YXIgYXhlcyA9IHNoYXBlLmdldEF4ZXMoKTtcblxuICAgICAgICBpZiAoYXhlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hhcGUucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZSh0aGlzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBheGVzLmNvbmNhdCh0aGlzLmdldEF4ZXMoKSk7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgKi9cblxuXG4gICAgLyoqXG4gICAgICog7Yis7JiBXG4gICAgICogQHBhcmFtIGF4aXNcbiAgICAgKiBAcmV0dXJucyB7UHJvamVjdGlvbn1cbiAgICAgKi9cbiAgICBwcm9qZWN0KGF4aXMpXG4gICAge1xuICAgICAgICB2YXIgc2NhbGFycyA9IFtdLFxuICAgICAgICAgICAgdiA9IG5ldyBWZWN0b3IoKTtcblxuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKCBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgIHYueCA9IHBvaW50Lng7XG4gICAgICAgICAgICB2LnkgPSBwb2ludC55O1xuICAgICAgICAgICAgc2NhbGFycy5wdXNoKHYuZG90UHJvZHVjdChheGlzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdGlvbihNYXRoLm1pbi5hcHBseShNYXRoLCBzY2FsYXJzKSxcbiAgICAgICAgICAgIE1hdGgubWF4LmFwcGx5KE1hdGgsIHNjYWxhcnMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2lSDqtaztlZjquLAgKGVkZ2Xsl5Ag64W466eQ7J2EIOy2leycvOuhnCDtlanri4jri6QpXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldEF4ZXMoKVxuICAgIHtcbiAgICAgICAgdmFyIHYxID0gbmV3IFZlY3RvcigpLFxuICAgICAgICAgICAgdjIgPSBuZXcgVmVjdG9yKCksXG4gICAgICAgICAgICBheGVzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdjEueCA9IHRoaXMucG9pbnRzW2ldLng7XG4gICAgICAgICAgICB2MS55ID0gdGhpcy5wb2ludHNbaV0ueTtcblxuICAgICAgICAgICAgdjIueCA9IHRoaXMucG9pbnRzW2krMV0ueDtcbiAgICAgICAgICAgIHYyLnkgPSB0aGlzLnBvaW50c1tpKzFdLnk7XG5cbiAgICAgICAgICAgIC8vIOuqqOyEnOumrOyXkOyEnCDsiJjsp4Hsnbgg64W466eQKOuyleyEoCkg67Kh7YSw66W8IOunjOuTreuLiOuLpC4gKOy2lSDsg53shLEpXG4gICAgICAgICAgICBheGVzLnB1c2godjEuZWRnZSh2MikucGVycGVuZGljdWxhcigpLm5vcm1hbGl6ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHYxLnggPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0ueDtcbiAgICAgICAgdjEueSA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS55O1xuXG4gICAgICAgIHYyLnggPSB0aGlzLnBvaW50c1swXS54O1xuICAgICAgICB2Mi55ID0gdGhpcy5wb2ludHNbMF0ueTtcblxuICAgICAgICAvLyDrqqjshJzrpqzsl5DshJwg7IiY7KeB7J24IOuFuOunkCjrspXshKApIOuyoe2EsOulvCDrp4zrk63ri4jri6QuICjstpUg7IOd7ISxKVxuICAgICAgICBheGVzLnB1c2godjEuZWRnZSh2MikucGVycGVuZGljdWxhcigpLm5vcm1hbGl6ZSgpKTtcbiAgICAgICAgcmV0dXJuIGF4ZXM7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQYXRoKGdyYXBoaWNzLCBsaW5lQ29sb3IgPSAweEZGRkZGRilcbiAgICB7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBsaW5lQ29sb3IpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpO1xuICAgICAgICB9XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcbiAgICB9XG5cblxuICAgIG1vdmUoZHgsIGR5KVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgICAgICBwb2ludC54ICs9IGR4O1xuICAgICAgICAgICAgcG9pbnQueSArPSBkeTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaXNQb2ludEluUGF0aCh4LCB5KVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5wb2ludHNbaV0ueCwgdGhpcy5wb2ludHNbaV0ueSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgY29uc3QgaXNQb2ludEluUGF0aCA9IHRoaXMuY29udGV4dC5pc1BvaW50SW5QYXRoKHgsIHkpO1xuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gaXNQb2ludEluUGF0aDtcbiAgICB9XG5cblxuICAgIGFkZFBvaW50KHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludCh4LCB5KSk7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucG9pbnRzLmxlbmd0aCArICcgUG9seWdvbic7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1BvbHlnb24uanMiXSwic291cmNlUm9vdCI6IiJ9
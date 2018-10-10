webpackJsonp([6],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(353);
	
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

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(350);
	
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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _GJK = __webpack_require__(349);
	
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

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(354);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Circle = __webpack_require__(355);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _Polygon = __webpack_require__(359);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(350);
	
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

/***/ 354:
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

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(356);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(358);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(350);
	
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

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MTV = __webpack_require__(357);
	
	var _MTV2 = _interopRequireDefault(_MTV);
	
	var _Painter = __webpack_require__(350);
	
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

/***/ 357:
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

/***/ 358:
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

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(356);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(354);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Vector = __webpack_require__(327);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(358);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(350);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqKioqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcz85MjQxKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0dKSy5qcz81MGMwKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFpbnRlci5qcz9lZjA2KiIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9TaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L01UVi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9Qb2x5Z29uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uS2V5VXAiLCJtcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltRnJhbWUiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJyZXNpemUiLCJlIiwia2V5Q29kZSIsIlRJTERFIiwiRVNDIiwiU1BBQ0UiLCJET1dOX0FSUk9XIiwiVVBfQVJST1ciLCJMRUZUX0FSUk9XIiwiUklHSFRfQVJST1ciLCJCQUNLX1NQQUNFIiwiY29uc29sZSIsImNsZWFyIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidGVtcCIsInZlYzIiLCJkb3QiLCJjb2VmZiIsImF0YW4yIiwiaG9yaXpvbnRhbEFuZ2xlIiwidmVydGljYWxBbmdsZSIsImhvcml6b250YWxBbmdsZURlZyIsImFuZ2xlIiwibngiLCJjb3MiLCJzaW4iLCJueSIsInJvdGF0ZSIsInJvdGF0aW9uIiwicm90YXRlVG8iLCJyb3RhdGVCeSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNxcnQiLCJkaXN0YW5jZVNxIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImxlbmd0aFNxIiwiYSIsImIiLCJ2IiwiY2xvbmUiLCJyZXQiLCJtdWx0aXBseVNjYWxhciIsImMiLCJyIiwiYWMiLCJiYyIsInZlYzEiLCJ0byIsImFkZCIsIk1vdXNlIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwicHJldlRpbWUiLCJjdXJyZW50VGltZSIsImRpZmZYIiwiZGlmZlkiLCJwbHVnaW5zIiwiaW50ZXJhY3Rpb24iLCJtb3VzZSIsInBvaW50ZXIiLCJ2YWx1ZSIsIl9yZW5kZXJlciIsIl9tb3VzZSIsIkRFU0tUT1BfTU9VU0UiLCJnbG9iYWwiLCJjdXJyZW50Q3Vyc29yU3R5bGUiLCJEYXRlIiwiZ2V0VGltZSIsIkdKSyIsInZlcnRpY2VzIiwiYXZnIiwiY291bnQiLCJpIiwiaW5kZXgiLCJtYXhQcm9kdWN0IiwiZG90UHJvZHVjdCIsInByb2R1Y3QiLCJ2ZXJ0aWNlczEiLCJ2ZXJ0aWNlczIiLCJpbmRleE9mRnVydGhlc3RQb2ludCIsImoiLCJuZWdhdGUiLCJsb2ciLCJzdHIiLCJpdGVyQ291bnQiLCJkIiwiYW8iLCJhYiIsImFicGVycCIsImFjcGVycCIsInNpbXBsZXgiLCJBcnJheSIsInBvc2l0aW9uMSIsImF2ZXJhZ2VQb2ludCIsInBvc2l0aW9uMiIsInN1cHBvcnQiLCJ0cmlwbGVQcm9kdWN0IiwicGVycGVuZGljdWxhciIsIm5vcm0iLCJwb2ludHMiLCJpMCIsIngwIiwibiIsImh1bGwiLCJtIiwiaWgiLCJpZSIsImNyb3NzIiwibmV3UG9pbnRzIiwicG9pbnQiLCJwdXNoIiwiZGVidWdWZXJ0aWNlcyIsImZvckVhY2giLCJ2ZXJ0ZXgiLCJjb25zb2xlVmVydGljZXMiLCJpc0ZpeGVkIiwiUGFpbnRlciIsInBhdGgiLCJ2MSIsInYyIiwiZGlmZiIsImNvbnZleEh1bGxQYXRoIiwiY3JlYXRlQ29udmV4SHVsbCIsImRyYXdQb2x5Z29uIiwibGluZVdpZHRoIiwiY29sb3IiLCJhbHBoYSIsImdyYXBoaWNzIiwiZyIsImxpbmVTdHlsZSIsInZlYzAiLCJtYWduaWZpY2F0aW9uIiwibW92ZVRvIiwibGluZVRvIiwic3RyaW5nIiwidGV4dCIsIlRleHQiLCJmaWxsIiwiaXNDbGVhciIsInJhZGl1cyIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwiYm91bmRzIiwidGhpY2tuZXNzIiwiZHJhd1JlY3QiLCJyZWN0IiwibHQiLCJydCIsInJiIiwibGIiLCJwMSIsInAyIiwicDAiLCJtb3ZlUG9pbnQiLCJ0b1BvaW50IiwibGVmdCIsImludmVydCIsInJpZ2h0IiwiR3JhcGhpY3MiLCJkZWJ1Z0dyYXBoaWNzIiwic2hhcGVzIiwiTElORV9DT0xPUiIsIkFSUk9XX0NPTE9SIiwicG9seWdvblBvaW50cyIsIlRlc3QiLCJpc0luaXQiLCJpbnRlcmFjdGl2ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW5pdGlhbGl6ZSIsIm1vdXNlRG93blBvaW50IiwiUG9pbnQiLCJsYXN0ZHJhZyIsInNoYXBlQmVpbmdEcmFnZ2VkIiwidW5kZWZpbmVkIiwiY3JlYXRlUG9seWdvbk1hbnVhbCIsIm9uTW91c2VEb3duIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbiIsImhpdEFyZWEiLCJSZWN0YW5nbGUiLCJ0eCIsInR5IiwidG9SYWRpYW4iLCJkZWdyZWUiLCJ1c2VSYW5kb21Sb3RhdGUiLCJwb2x5Z29uIiwiYWRkUG9pbnQiLCJyb3RhdGVTaGFwZSIsImNyZWF0ZVBhdGgiLCJkaWFtZXRlciIsInNwYWNlIiwiZ2V0UG9seWdvblBvaW50cyIsImFkZENpcmNsZSIsImNyZWF0ZVBvbHlnb24iLCJjaXJjbGUiLCJkcmFnU2hhcGUiLCJzaGFwZSIsIm10diIsImNvbGxpZGVzV2l0aCIsImNvbGxpc2lvbkRldGVjdGVkIiwibW92ZVNoYXBlQnlNVFYiLCJheGlzIiwib3ZlcmxhcCIsImNvbGxpZGVyIiwiY29sbGlkZWUiLCJjb2xsaWRlckNlbnRlciIsImZyb21PYmplY3QiLCJnZXRDZW50ZXIiLCJjb2xsaWRlZUNlbnRlciIsImNlbnRlclZlY3RvciIsImNlbnRlclVuaXRWZWN0b3IiLCJkcmFnVmVjdG9yIiwiY2VudGVyQ29sbGlkZXIiLCJjZW50ZXJDb2xsaWRlZSIsImRpcmVjdGlvbk5vcm0iLCJvdmVybGFwVmVjdG9yIiwidG9Ob3JtYWxpemUiLCJkb3RUbyIsImNlbnRlciIsImRyYXdBcnJvdyIsIm1vdmUiLCJyb3RhdGlvblBvaW50IiwicGl2b3QiLCJkaXN0IiwiY2EiLCJuYSIsImlzUG9pbnRJblBhdGgiLCJkZXRlY3RDb2xsaXNpb25zIiwidXBkYXRlUmVuZGVyIiwiRVNDQVBFIiwiTlVNQkVSXzEiLCJOVU1CRVJfMiIsIkNpcmNsZSIsIm5hbWUiLCJwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlIiwiY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiY2lyY2xlVmVjdG9yIiwidGVzdFBvaW50VmVjdG9yIiwiY2xvc2VzdFBvaW50IiwiZGlzdGFuY2UiLCJzdXJmYWNlVmVjdG9yIiwiZHJhd1BvaW50Iiwic2NhbGFycyIsInBvaW50VmVjdG9yIiwiYXBwbHkiLCJsaW5lQ29sb3IiLCJhcmMiLCJzYXZlIiwiYmVnaW5QYXRoIiwicmVzdG9yZSIsIlNoYXBlIiwiYXhlcyIsIm1pbmltdW1PdmVybGFwIiwiYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXAiLCJwcm9qZWN0aW9uMSIsInByb2plY3Rpb24yIiwicHJvamVjdCIsImdldE92ZXJsYXAiLCJtdHYxIiwibWluaW11bVRyYW5zbGF0aW9uVmVjdG9yIiwiZ2V0QXhlcyIsIm10djIiLCJjMSIsImMyIiwicG93IiwiZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlIiwiZ2V0Q2lyY2xlQXhpcyIsImNvbmNhdCIsInNlcGFyYXRpb25PbkF4ZXMiLCJvdmVybGFwcyIsIk1UViIsIlByb2plY3Rpb24iLCJwcm9qZWN0aW9uIiwiUG9seWdvbiIsInBvaW50U3VtIiwicG9seWdvbkNvbGxpZGVzV2l0aFBvbHlnb24iLCJlZGdlIiwiY2xvc2VQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUMsY0FBWTtBQUNUQSxZQUFPQyxNQUFQLEdBQWdCLFlBQVk7QUFDeEIsYUFBTUMsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDSCxNQUZEO0FBR0gsRUFKQSxHQUFEOztBQU1BLEtBQUlDLGVBQUo7QUFBQSxLQUFZQyxpQkFBWjtBQUFBLEtBQXNCQyxjQUF0QjtBQUFBLEtBQTZCQyxhQUE3QjtBQUFBLEtBQW1DQyxrQkFBbkM7O0tBRU1MLEk7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QUE2QztBQUN6QyxzQkFBS2dHLE9BQUwsQ0FBYW5DLE1BQWIsQ0FBb0IsS0FBS2xDLE1BQUwsQ0FBWTNCLENBQVosRUFBZXRGLENBQW5DLEVBQXNDLEtBQUtpSCxNQUFMLENBQVkzQixDQUFaLEVBQWVyRixDQUFyRDtBQUNIOztBQUVELGtCQUFLcUwsT0FBTCxDQUFhbkMsTUFBYixDQUFvQixLQUFLbEMsTUFBTCxDQUFZLENBQVosRUFBZWpILENBQW5DLEVBQXNDLEtBQUtpSCxNQUFMLENBQVksQ0FBWixFQUFlaEgsQ0FBckQ7QUFDQSxrQkFBS3FMLE9BQUwsQ0FBYWtILFNBQWI7O0FBRUEsaUJBQU1yRCxnQkFBZ0IsS0FBSzdELE9BQUwsQ0FBYTZELGFBQWIsQ0FBMkJuUCxDQUEzQixFQUE4QkMsQ0FBOUIsQ0FBdEI7QUFDQSxrQkFBS3FMLE9BQUwsQ0FBYXNGLE9BQWI7QUFDQSxvQkFBT3pCLGFBQVA7QUFDSDs7O2tDQUdRblAsQyxFQUFHQyxDLEVBQ1o7QUFDSSxrQkFBS2dILE1BQUwsQ0FBWVcsSUFBWixDQUFpQixvQkFBVTVILENBQVYsRUFBYUMsQ0FBYixDQUFqQjtBQUNBLGtCQUFLeVAsSUFBTCxHQUFZLEtBQUt6SSxNQUFMLENBQVl6RyxNQUFaLEdBQXFCLFVBQWpDO0FBQ0g7Ozs7OzttQkFyS2dCNFIsTyIsImZpbGUiOiJzYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvTW91c2VcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiAgICB9XG59KCkpO1xuXG5sZXQgY2FudmFzLCByZW5kZXJlciwgc3RhZ2UsIHRlc3QsIGNvbnRhaW5lcjtcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHtcbiAgICAgICAgICAgIHZpZXc6IGNhbnZhcyxcbiAgICAgICAgICAgIGF1dG9SZXNpemU6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MzMzODNEXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1vdXNlLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgLy8g7JyE7LmY6rCAIOygleyImOqwgCDslYTri5Dqsr3smrAg7Z2Q66a/7ZWY6rKMIOuztOydtOuKlCDrrLjsoJzqsIAg7J6I7Ja0XG4gICAgICAgIC8vIOugjOuNlOufrOydmCDsnITsuZjrpbwg7KCV7IiY66GcIOyXsOyCsOuQoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cbiAgICAgICAgLy9yZW5kZXJlci5yb3VuZFBpeGVscyA9IHRydWU7XG5cbiAgICAgICAgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGVzdCA9IG5ldyBUZXN0KHJlbmRlcmVyKTtcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGVzdCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb29wKCk7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZVdpbmRvdygpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxvb3AgKG1zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1zKTtcbiAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG1zKSB7XG4gICAgICAgIHRlc3QudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzdGFnZSk7XG4gICAgfVxuXG4gICAgcmVzaXplV2luZG93KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDsupTrsoTsiqQg7IKs7J207KaI7JmAIOuUlOyKpO2UjOugiOydtCDsgqzsnbTspogg7ISk7KCVXG4gICAgICAgICAqIOugiO2LsOuCmCDqt7jrnpjtlL0g7KeA7JuQIOy9lOuTnFxuICAgICAgICAgKi9cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBJWEkgcmVuZGVyZXIg66as7IKs7J207KaIXG4gICAgICAgICAqIFBJWEkg7JeQ6rKMIHZpZXdwb3J0IOyCrOydtOymiCDrs4Dqsr0g7JWM66a8XG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIHRlc3QucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVVwIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVElMREU6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRPV05fQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VUF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkxFRlRfQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SSUdIVF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkJBQ0tfU1BBQ0U6XG4gICAgICAgICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3Qvc2F0L2luZGV4LmpzIiwiXG5cbmNvbnN0IGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5cbmZ1bmN0aW9uIHJhbmRvbSAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn1cblxuZnVuY3Rpb24gcmFkaWFuMmRlZ3JlZXMgKHJhZCkge1xuICAgIHJldHVybiByYWQgKiBkZWdyZWVzO1xufVxuXG5mdW5jdGlvbiBkZWdyZWVzMnJhZGlhbiAoZGVnKSB7XG4gICAgcmV0dXJuIGRlZyAvIGRlZ3JlZXM7XG59XG5cblxuLyoqXG4gKiBWaWN0b3IuanPrpbwgRVM266GcIOuzgO2ZmO2VmOyXrCDsgqzsmqntlZjqs6Ag7J6I7Iq164uI64ukLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21heGt1ZW5nL3ZpY3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JcbntcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gYXJyYXlcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IFZlY3Rvci5mcm9tQXJyYXkoWzQyLCAyMV0pO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gICAgICpcbiAgICAgKiBAbmFtZSBWZWN0b3IuZnJvbUFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgd2l0aCB0aGUgeCBhbmQgeSB2YWx1ZXMgYXQgaW5kZXggMCBhbmQgMSByZXNwZWN0aXZlbHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYXJyWzBdIHx8IDAsIGFyclsxXSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3RcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IFZlY3Rvci5mcm9tT2JqZWN0KHsgeDogNDIsIHk6IDIxIH0pO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gICAgICpcbiAgICAgKiBAbmFtZSBWZWN0b3IuZnJvbU9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHdpdGggdGhlIHZhbHVlcyBmb3IgeCBhbmQgeVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21PYmplY3Qob2JqKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3Iob2JqLnggfHwgMCwgb2JqLnkgfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci4gV2lsbCBhbHNvIHdvcmsgd2l0aG91dCB0aGUgYG5ld2Aga2V5d29yZFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gVmVjdG9yKDQyLCAxMzM3KTtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IFZhbHVlIG9mIHRoZSB4IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSBWYWx1ZSBvZiB0aGUgeSBheGlzXG4gICAgICogQHJldHVybiB7VmVjdG9yfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKVxuICAgIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBYIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjMwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFkgYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjMwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCArIGIueCwgYS55ICsgYi55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gYm90aCB2ZWN0b3IgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMywgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMywgeTogMlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWSgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBYIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFkgYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3QodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc3VidHJhY3QoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAtIGIueCwgYS55IC0gYi55KTtcbiAgICB9XG5cblxuICAgIGVkZ2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBlZGdlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gVmVjdG9yLnN1YnRyYWN0KGEsIGIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhcigyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiA4MCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWCgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiA4MCwgeTogMjAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclkoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMTAwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgeCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlWCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSB5IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlWSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgLz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IGEgYXhpcyB2YWx1ZXMgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGUodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgLz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC8gYi54LCBhLnkgLyBiLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWSgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRYKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4Oi0xMDAsIHk6NTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFgoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WSgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6LTUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRZKClcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4Oi0xMDAsIHk6LTUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pbnZlcnRYKCk7XG4gICAgICAgIHRoaXMuaW52ZXJ0WSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBuZWdhdGUodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgdiA9IHZlYy5jbG9uZSgpO1xuICAgICAgICB2LnggPSAtdmVjLng7XG4gICAgICAgIHYueSA9IC12ZWMueTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFggYXhpcyBieSBYIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBZIGF4aXMgYnkgWSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB2YWx1ZXMgZnJvbSBhIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtdWx0aXBseVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogc2NhbGFyLCB2ZWN0b3IueSAqIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlU2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggLyBzY2FsYXIsIHZlY3Rvci55IC8gc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICg5MCDrj4Qg7ZqM7KCEKVxuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgcGVycGVuZGljdWxhcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHBlcnBlbmRpY3VsYXIodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUueCA9IC12ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IHZlYy54O1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoLTkwIOuPhCDtmozsoIQpXG4gICAgICovXG4gICAgcmV0dXJuUGVycGVuZGljdWxhcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnksIC10aGlzLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJldHVyblBlcnBlbmRpY3VsYXIodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUueCA9IHZlYy55O1xuICAgICAgICBjbG9uZS55ID0gLXZlYy54O1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrsoTrprxcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHBhcmFtIGxlbmd0aFxuICAgICAqL1xuICAgIHN0YXRpYyB0cnVuY2F0ZSh2ZWMsIGxlbmd0aClcbiAgICB7XG4gICAgICAgIGNvbnN0IHJldCA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBsZW5ndGhTcSA9IHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgICAgICBpZiAobGVuZ3RoU3EgPiBsZW5ndGggKiBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldC5tdWx0aXBseVNjYWxhcihsZW5ndGggLyBNYXRoLnNxcnQobGVuZ3RoU3EpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXplXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBub3JtYWxpemUoKVxuICAgIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAxO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGl2aWRlKG5ldyBWZWN0b3IobGVuZ3RoLCBsZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG5vcm0oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgYWJzb2x1dGUgdmVjdG9yIGF4aXMgaXMgZ3JlYXRlciB0aGFuIGBtYXhgLCBtdWx0aXBsaWVzIHRoZSBheGlzIGJ5IGBmYWN0b3JgXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5saW1pdCg4MCwgMC45KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6OTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggVGhlIG1heGltdW0gdmFsdWUgZm9yIGJvdGggeCBhbmQgeSBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZhY3RvciBGYWN0b3IgYnkgd2hpY2ggdGhlIGF4aXMgYXJlIHRvIGJlIG11bHRpcGxpZWQgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxpbWl0KG1heCwgZmFjdG9yKVxuICAgIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueCkgPiBtYXgpeyB0aGlzLnggKj0gZmFjdG9yOyB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnkpID4gbWF4KXsgdGhpcy55ICo9IGZhY3RvcjsgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWl6ZXMgYm90aCB2ZWN0b3IgYXhpcyB3aXRoIGEgdmFsdWUgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwYCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo2NywgeTo3M1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCksIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCkpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdGhpcy54ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHJldHVybiByYW5kb20obWluLCBtYXgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdGhpcy55ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHJldHVybiByYW5kb20obWluLCBtYXgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9tbHkgcmFuZG9taXplcyBlaXRoZXIgYXhpcyBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplQW55KG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Ojc3XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZUFueSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGlmICghISBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYW4gaW50ZWdlciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAuMiwgNTAuOSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB1bmZsb2F0KClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYSBjZXJ0YWluIHByZWNpc2lvblxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAuMiwgNTAuOSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gUHJlY2lzaW9uIChkZWZhdWx0OiA4KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvRml4ZWQocHJlY2lzaW9uKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVjaXNpb24gPT09ICd1bmRlZmluZWQnKSB7IHByZWNpc2lvbiA9IDg7IH1cbiAgICAgICAgdGhpcy54ID0gdGhpcy54LnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55LnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFggYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXhYKHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjE1MCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXhYKHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSAoMSAtIGFtb3VudCkgKiB0aGlzLnggKyBhbW91bnQgKiB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFkgYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXhZKHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxNTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXhZKHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnkgPSAoMSAtIGFtb3VudCkgKiB0aGlzLnkgKyBhbW91bnQgKiB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4KHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjE1MCwgeToxNTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICB0aGlzLm1peFgodmVjLCBhbW91bnQpO1xuICAgICAgICB0aGlzLm1peFkodmVjLCBhbW91bnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICMgUHJvZHVjdHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNsb25lKCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IEEgY2xvbmUgb2YgdGhlIHZlY3RvclxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY2xvbmUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WCh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFkgY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGFuZCBZIGNvbXBvbmVudHMgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5KHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLmNvcHlYKHZlYyk7XG4gICAgICAgIHRoaXMuY29weVkodmVjKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2ZWN0b3IgdG8gemVybyAoMCwwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKlx0XHQgdmFyMS56ZXJvKCk7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDowLCB5OjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHplcm8oKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgdmVjdG9yIHRvIHRoZSBsZWZ0LWhhbmRlZCBub3JtYWwgb2YgdGhpcyB2ZWN0b3IuXG4gICAgICogQHJldHVybiB7VmVjdG9yfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldExlZnRIYW5kT3J0aG9nb25hbFZlY3RvcigpXG4gICAgICovXG4gICAgbGVmdCgpXG4gICAge1xuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IC10ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIHJpZ2h0LWhhbmRlZCBub3JtYWwgb2YgdGhpcyB2ZWN0b3IuXG4gICAgICogQHJldHVybiB7QGxpbmsgVmVjdG9yMn0gdGhpcyB2ZWN0b3JcbiAgICAgKiBAc2VlICNnZXRSaWdodEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICByaWdodCgpXG4gICAge1xuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSAtdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSB0ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRvdCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMjMwMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERvdCBwcm9kdWN0XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkb3QodmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2ZWMyLnggKyB0aGlzLnkgKiB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICBkb3RQcm9kdWN0KHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRvdFByb2R1Y3QoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG4gICAgfVxuXG5cbiAgICBjcm9zcyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKiB2ZWMyLnkpIC0gKHRoaXMueSAqIHZlYzIueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3Jvc3MoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnkgLSBhLnkgKiBiLng7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20va3JvaXRvci9namsuY1xuICAgICAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RyaXBsZV9wcm9kdWN0I1ZlY3Rvcl90cmlwbGVfcHJvZHVjdFxuICAgICAqIOyEuOq3uOuovO2KuOyXkOyEnCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuwqe2WpeydhCDssL7snYQg65WMIOyCrOyaqVxuICAgICAqL1xuICAgIHN0YXRpYyB0cmlwbGVQcm9kdWN0KGEsIGIsIGMpXG4gICAge1xuICAgICAgICBjb25zdCByID0gbmV3IFZlY3RvcigpO1xuICAgICAgICBjb25zdCBhYyA9IGEueCAqIGMueCArIGEueSAqIGMueSAgICAvLyBwZXJmb3JtIGEuZG90KGMpXG4gICAgICAgICAgICAsIGJjID0gYi54ICogYy54ICsgYi55ICogYy55OyAgIC8vIHBlcmZvcm0gYi5kb3QoYylcblxuICAgICAgICAvLyBwZXJmb3JtIGIgKiBhLmRvdChjKSAtIGEgKiBiLmRvdChjKVxuICAgICAgICByLnggPSBiLnggKiBhYyAtIGEueCAqIGJjO1xuICAgICAgICByLnkgPSBiLnkgKiBhYyAtIGEueSAqIGJjO1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHJvamVjdHMgYSB2ZWN0b3Igb250byBhbm90aGVyIHZlY3Rvciwgc2V0dGluZyBpdHNlbGYgdG8gdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucHJvamVjdE9udG8odmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gcHJvamVjdCB0aGlzIHZlY3RvciBvbnRvXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcHJvamVjdE9udG8odmVjMilcbiAgICB7XG4gICAgICAgIHZhciBjb2VmZiA9ICggKHRoaXMueCAqIHZlYzIueCkrKHRoaXMueSAqIHZlYzIueSkgKSAvICgodmVjMi54KnZlYzIueCkrKHZlYzIueSp2ZWMyLnkpKTtcbiAgICAgICAgdGhpcy54ID0gY29lZmYgKiB2ZWMyLng7XG4gICAgICAgIHRoaXMueSA9IGNvZWZmICogdmVjMi55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyEoO2YlSDrs7TqsIRcbiAgICAgKiBodHRwOi8vZGV2ZWxvcHVnLmJsb2dzcG90LmNvbS8yMDE0LzA5L3VuaXR5LXZlY3Rvci1sZXJwLmh0bWxcbiAgICAgKiBAcGFyYW0gdmVjMVxuICAgICAqIEBwYXJhbSB2ZWMyXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgbGVycCh2ZWMxLCB2ZWMyLCB0bykge1xuICAgICAgICByZXR1cm4gVmVjdG9yLmFkZChWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMSwgMSAtIHRvKSwgVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzIsIHRvKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog7Jet7IiYXG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIHJjcCh2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMSAvIHZlY3Rvci54LCAxIC8gdmVjdG9yLnkpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy5ob3Jpem9udGFsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMudmVydGljYWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgYW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlRGVnKCk7XG4gICAgfVxuXG5cbiAgICBkaXJlY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICByb3RhdGUoYW5nbGUpXG4gICAge1xuICAgICAgICB2YXIgbnggPSAodGhpcy54ICogTWF0aC5jb3MoYW5nbGUpKSAtICh0aGlzLnkgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICB2YXIgbnkgPSAodGhpcy54ICogTWF0aC5zaW4oYW5nbGUpKSArICh0aGlzLnkgKiBNYXRoLmNvcyhhbmdsZSkpO1xuXG4gICAgICAgIHRoaXMueCA9IG54O1xuICAgICAgICB0aGlzLnkgPSBueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHJvdGF0ZURlZyhhbmdsZSlcbiAgICB7XG4gICAgICAgIGFuZ2xlID0gZGVncmVlczJyYWRpYW4oYW5nbGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG8ocm90YXRpb24pXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUocm90YXRpb24tdGhpcy5hbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvRGVnKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZVRvKHJvdGF0aW9uKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZUJ5KHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gdGhpcy5hbmdsZSgpICsgcm90YXRpb247XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZUJ5RGVnKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZUJ5KHJvdGF0aW9uKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBYIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gLTEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54IC0gdmVjLng7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVgoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFic0Rpc3RhbmNlWCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWCh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBZIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gLTEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgLSB2ZWMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWSgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVkodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDAuNDk4NzU2MjExMjA4OVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxKHZlYykpO1xuICAgIH1cblxuXG4gICAgZ2V0TWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbigpO1xuICAgIH1cblxuXG4gICAgZ2V0TWFnbml0dWRlU3F1YXJlZCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlU3EodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VTcSh2ZWMpXG4gICAge1xuICAgICAgICB2YXIgZHggPSB0aGlzLmRpc3RhbmNlWCh2ZWMpLFxuICAgICAgICAgICAgZHkgPSB0aGlzLmRpc3RhbmNlWSh2ZWMpO1xuXG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvciBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGVuZ3RoKCk7XG4gICAgICogICAgIC8vID0+IDExMS44MDMzOTg4NzQ5ODk0OFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aCgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoU3EoKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6jsiJztnogg6ri47J20IOu5hOq1kOulvCDtlZjroKTrqbQgbGVuZ3RoIOulvCDsgqzsmqntlZjquLAg67O064uk64qUIGxlbmd0aFNxIOulvCDsgqzsmqntlZjqsowg67mg66W064ukLlxuICAgICAqIGxlbmd0aCDripQgTWF0aC5zcXJ0ICjsoJzqs7Hqt7wpIOyymOumrOulvCDtlZjquLAg65WM66y47JeQIOuLqOyInCDquLjsnbQg67mE6rWQ7IucIGxlbmd0aFNxIOulvCDsgqzsmqntlZjripQg6rKD7J20IOu5oOumheuLiOuLpC5cbiAgICAgKiBTcXVhcmVkIGxlbmd0aCAvIG1hZ25pdHVkZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGVuZ3RoU3EoKTtcbiAgICAgKiAgICAgLy8gPT4gMTI1MDBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGhTcSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIGxlbmd0aFNxKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICB9XG5cblxuICAgIG1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGgoKTtcbiAgICB9XG5cblxuICAgIHRvKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlYy54IC0gdGhpcy54LCB2ZWMueSAtIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBzZXQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cnVlIGlmIHZlY3RvciBpcyAoMCwgMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZlYy56ZXJvKCk7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzWmVybygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSAwICYmIHRoaXMueSA9PT0gMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cnVlIGlmIHRoaXMgdmVjdG9yIGlzIHRoZSBzYW1lIGFzIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZlYzEuaXNFcXVhbFRvKHZlYzIpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc0VxdWFsVG8odmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IHZlYzIueCAmJiB0aGlzLnkgPT09IHZlYzIueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICMgVXRpbGl0eSBNZXRob2RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIHJldHVybiAneDonICsgdGhpcy54ICsgJywgeTonICsgdGhpcy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvQXJyYXkoKTtcbiAgICAgKiAgICAgLy8gPT4gWzEwLCAyMF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9BcnJheSgpXG4gICAge1xuICAgICAgICByZXR1cm4gWyB0aGlzLngsIHRoaXMueSBdO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b09iamVjdCgpO1xuICAgICAqICAgICAvLyA9PiB7IHg6IDEwLCB5OiAyMCB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b09iamVjdCgpXG4gICAge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WZWN0b3IuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZVxue1xuICAgIHN0YXRpYyBnZXQgREVTS1RPUF9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTU9CSUxFX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQSVhJLkFwcGxpY2F0aW9uLnJlbmRlcmVyXG4gICAgICog656c642U65+s7JeQ7IScIGludGVyYWN0aW8g6rCd7LK066W8IOywuOyhsO2VoCDsiJgg7J6I7Ja07IScIOyCrOyaqe2VmOugpOuptCDroIzrjZTrn6zrpbwg7IWL7YyF7ZW07JW8IO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmFsdWUge1BJWEkuV2ViR0xSZW5kZXJyZXJ8UElYSS5DYW52YXNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IHJlbmRlcmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrqqjrsJTsnbwg64yA7J2R7J2EIOychO2VtOyEnFxuICAgICAqIFBDIOuyhOyghOyXkOyEnOuKlCBtb3VzZSDqsJ3ssrTrpbwsIOuqqOuwlOydvCDrsoTsoITsl5DshJzripQgcG9pbnRlciDqsJ3ssrTrpbwg7IWL7YyF7ZWY66m0XG4gICAgICogZ2xvYmFsIOqwneyytOyXkOyEnCDssLjsobDtlbTshJwg7KKM7ZGc6rCS7J2EIOyghOuLrO2VmOuPhOuhnSDtlanri4jri6QuXG4gICAgICpcbiAgICAgKiDrp4zslb0g7ISk7KCV7ZWY7KeAIOyViuycvOuptCDquLDrs7ggUEPrp4wg64yA7J2R7ZWY64+E66GdIG1vdXNlIOqwneyytOulvCDshKTsoJXtlanri4jri6QuXG4gICAgICpcbiAgICAgKiBEZXNrdG9wIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZVxuICAgICAqIE1vYmlsZSA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlclxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgbW91c2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbW91c2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBtb3VzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3VzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2UgPSB0aGlzLkRFU0tUT1BfTU9VU0U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdXNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBnbG9iYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzZXQgY3VycmVudEN1cnNvclN0eWxlKHZhbHVlKSB7XG4gICAgICAgIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgY3VycmVudEN1cnNvclN0eWxlKCkge1xuICAgICAgICByZXR1cm4gTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsnbTrj5kg6rGw66as6rCAIDVweCDsnbTtlZjsnbTqs6AgNTAwbXMg7JWI7JeQIOuRkOuyiCDtgbTrpq3tlZjrqbQg642U67iUIO2BtOumreycvOuhnCDsnbjsoJVcbiAgICAgKiBAcGFyYW0gcHJldlBvaW50IOydtOyghOyijO2RnFxuICAgICAqIEBwYXJhbSBjdXJyZW50UG9pbnQg7ZiE7J6s7KKM7ZGcXG4gICAgICogQHBhcmFtIHByZXZUaW1lIOydtOyghCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHBhcmFtIGN1cnJlbnRUaW1lIO2YhOyerCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOuNlOu4lCDtgbTrpq0g7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGlzRG91YmxlQ2xpY2socHJldlBvaW50LCBjdXJyZW50UG9pbnQsIHByZXZUaW1lLCBjdXJyZW50VGltZSkge1xuICAgICAgICB2YXIgZGlmZlggPSBjdXJyZW50UG9pbnQueCAtIHByZXZQb2ludC54O1xuXG4gICAgICAgIGlmIChkaWZmWCA8IDApIHtcbiAgICAgICAgICAgIGRpZmZYID0gZGlmZlggKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaWZmWSA9IGN1cnJlbnRQb2ludC55IC0gcHJldlBvaW50Lnk7XG5cbiAgICAgICAgaWYgKGRpZmZZIDwgMCkge1xuICAgICAgICAgICAgZGlmZlkgPSBkaWZmWSAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZmZYID4gNSB8fCBkaWZmWSA+IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIHByZXZUaW1lID4gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvTW91c2UuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG4vKipcbiAqIEdKSyBBbGdvcml0aG0gKEdpbGJlcnQtSm9obnNvbi1LZWVydGhpKVxuICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAqIGh0dHA6Ly93d3cuZHluNGoub3JnLzIwMTAvMDQvZ2prLWdpbGJlcnQtam9obnNvbi1rZWVydGhpLyNnamstdG9wXG4gKiBodHRwczovL3d3dy5oYXJvbGRzZXJyYW5vLmNvbS9ibG9nL3Zpc3VhbGl6aW5nLXRoZS1namstY29sbGlzaW9uLWFsZ29yaXRobVxuICogaHR0cHM6Ly9naXRodWIuY29tL2p1aGwvY29sbGlzaW9uLWRldGVjdGlvbi0yZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHSktcbntcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRvIGNvbXB1dGUgYXZlcmFnZSBjZW50ZXIgKHJvdWdobHkpLiBJdCBtaWdodCBiZSBkaWZmZXJlbnQgZnJvbVxuICAgICAqIENlbnRlciBvZiBHcmF2aXR5LCBlc3BlY2lhbGx5IGZvciBib2RpZXMgd2l0aCBub251bmlmb3JtIGRlbnNpdHksXG4gICAgICogYnV0IHRoaXMgaXMgb2sgYXMgaW5pdGlhbCBkaXJlY3Rpb24gb2Ygc2ltcGxleCBzZWFyY2ggaW4gR0pLXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUgdmVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIGF2ZXJhZ2VQb2ludCh2ZXJ0aWNlcylcbiAgICB7XG4gICAgICAgIGNvbnN0IGF2ZyA9IG5ldyBWZWN0b3IoKVxuICAgICAgICAgICAgLCBjb3VudCA9IHZlcnRpY2VzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGF2Zy54ICs9IHZlcnRpY2VzW2ldLng7XG4gICAgICAgICAgICBhdmcueSArPSB2ZXJ0aWNlc1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgYXZnLnggLz0gY291bnQ7XG4gICAgICAgIGF2Zy55IC89IGNvdW50O1xuXG4gICAgICAgIHJldHVybiBhdmc7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgZnVydGhlc3QgdmVydGV4IGFsb25nIGEgY2VydGFpbiBkaXJlY3Rpb25cbiAgICAgKiDqvK3sp4DsoJDqs7wg67Cp7Zal7J2EIOyghOuLrO2VmOuptCDrgrTsoIEgKO2IrOyYgSnsnYQg7Ya17ZW0IOy1nOuMgOuhnCDrqLwg7KKM7ZGc7J2YIOyduOuNseyKpOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUgdmVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIGluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgbWF4UHJvZHVjdCA9IFZlY3Rvci5kb3RQcm9kdWN0KGRpcmVjdGlvbiwgdmVydGljZXNbMF0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBjb3VudCA9IHZlcnRpY2VzLmxlbmd0aDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2R1Y3QgPiBtYXhQcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgbWF4UHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTWlua293c2tpIHN1bSBzdXBwb3J0IGZ1bmN0aW9uIGZvciBHSktcbiAgICAgKiDsp4Dsm5Ag7ZWo7IiY7JeQ7IScIO2PtOumrOqzpOydmCDtj6zsnbjtirjsmYAg67Cp7Zal7Jy866GcIOyEnOuhnCDri6Trpbgg67Cp7Zal7J2YIOygkOydhCDqtaztlZjqs6AgTWlua293c2tpIERpZmZlcmVuY2Ug66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmVydGljZXMxIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMiB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIOuyoe2EsFxuICAgICAqL1xuICAgIHN0YXRpYyBzdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2YgZmlyc3QgYm9keSBhbG9uZyBhbiBhcmJpdHJhcnkgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMSwgZGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2Ygc2Vjb25kIGJvZHkgYWxvbmcgdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBqID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczIsIFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihkaXJlY3Rpb24sIHRydWUpLCAnaTonICsgc3RyKHZlcnRpY2VzMVtpXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSwgdHJ1ZSksICdqOicgKyBzdHIodmVydGljZXMyW2pdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdXBwb3J0KCcgKyBzdHIoVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKSkgKyAnKScpO1xuICAgICAgICAvLyBzdWJ0cmFjdCAoTWlua293c2tpIHN1bSkgdGhlIHR3byBwb2ludHMgdG8gc2VlIGlmIGJvZGllcyAnb3ZlcmxhcCdcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIHZlcnRpY2VzMiB7VmVjdG9yW119XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOy2qeuPjCDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hlY2tDb2xsaXNpb24odmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpO1xuXG4gICAgICAgIGxldCBpdGVyQ291bnQgPSAwLCBpbmRleCA9IDA7ICAgLy8gaW5kZXggb2YgY3VycmVudCB2ZXJ0ZXggb2Ygc2ltcGxleFxuICAgICAgICBsZXQgYSwgYiwgYywgZCwgYW8sIGFiLCBhYywgYWJwZXJwLCBhY3BlcnAsIHNpbXBsZXggPSBuZXcgQXJyYXkoMyk7XG5cbiAgICAgICAgLy8g65GQIO2PtOumrOqzpCDspJHsi6wg7KKM7ZGc66W8IO2Gte2VtOyEnCDrsKntlqXsnYQg6rWs7ZWp64uI64ukLlxuICAgICAgICBjb25zdCBwb3NpdGlvbjEgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczEpOyAvLyBub3QgYSBDb0cgYnV0XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uMiA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMik7IC8vIGl0J3Mgb2sgZm9yIEdKSyApXG5cbiAgICAgICAgLy8gaW5pdGlhbCBkaXJlY3Rpb24gZnJvbSB0aGUgY2VudGVyIG9mIDFzdCBib2R5IHRvIHRoZSBjZW50ZXIgb2YgMm5kIGJvZHlcbiAgICAgICAgLy8g67Cp7ZalIHZlY3RvclxuICAgICAgICBkID0gVmVjdG9yLnN1YnRyYWN0KHBvc2l0aW9uMSwgcG9zaXRpb24yKTtcblxuICAgICAgICAvLyBpZiBpbml0aWFsIGRpcmVjdGlvbiBpcyB6ZXJvIOKAkyBzZXQgaXQgdG8gYW55IGFyYml0cmFyeSBheGlzICh3ZSBjaG9vc2UgWClcbiAgICAgICAgaWYgKChkLnggPT0gMCkgJiYgKGQueSA9PSAwKSkge1xuICAgICAgICAgICAgZC54ID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBzdXBwb3J0IGFzIGluaXRpYWwgcG9pbnQgb2YgdGhlIG5ldyBzaW1wbGV4XG4gICAgICAgIGEgPSBzaW1wbGV4WzBdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RyKGEpLCBzdHIoZCwgdHJ1ZSksIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpLnRvRml4ZWQoMikpO1xuXG4gICAgICAgIC8vIHN1cHBvcnQg7KCQ6rO8IOuwqe2WpeydtCDqsJnsnYAg67Cp7Zal7J20IOyVhOuLkCDqsr3smrBcbiAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpIDw9IDApIHtcbiAgICAgICAgICAgIC8vIOuniOyngOunieyXkCDstpTqsIAg65CcIOygkOydtCBk7J2YIOuwqe2WpeycvOuhnCDsm5DsoJDsnYQg7KeA64KY7LmY7KeAIOyViuydgCDqsr3smrBcbiAgICAgICAgICAgIC8vIOq3uCDri6TsnYwgTWlua293c2tpIO2VqeydgCDsm5DsoJDsnYQg7Y+s7ZWoIO2VoCDsiJgg7JeG7Iq164uI64ukLlxuICAgICAgICAgICAgLy8g7LaU6rCAIOuQnCDrp4jsp4Drp4kg7KCQ7J2AIE1pbmtvd3NraSBEaWZmZXJlbmNl7J2YIOqwgOyepeyekOumrOyXkCDsnojsirXri4jri6QuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ0FTRTFbJywgJ05PJywgJ10nKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgIH1cblxuICAgICAgICBkID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gVGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBhbHdheXMgdG93YXJkcyB0aGUgb3JpZ2luLCBzbyB0aGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIG5lZ2F0ZShhKVxuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpdGVyQ291bnQrKztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlckNvdW50KTtcblxuICAgICAgICAgICAgYSA9IHNpbXBsZXhbKytpbmRleF0gPSB0aGlzLnN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuXG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0FTRTJbJywgJ05PJywgJ10nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBh6rCAIOybkOygkOycvOuhnCDtlqXtlZjripQg67Kh7YSw64qUIC1hIOulvCDtlZjrqbQg65Cp64uI64ukLlxuICAgICAgICAgICAgYW8gPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gT3JpZ2luIGlzIGp1c3QgbmVnYXRpdmUgQVxuXG4gICAgICAgICAgICAvLyBzaW1wbGV4IGhhcyAyIHBvaW50cyAoYSBsaW5lIHNlZ21lbnQsIG5vdCBhIHRyaWFuZ2xlIHlldClcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDIpIHtcblxuICAgICAgICAgICAgICAgIGIgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgICAgIGFiID0gVmVjdG9yLnN1YnRyYWN0KGIsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQlxuICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKTsgLy8gbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG5cbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmxlbmd0aFNxKGQpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IucGVycGVuZGljdWxhcihhYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBza2lwIHRvIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGIgPSBzaW1wbGV4WzFdO1xuICAgICAgICAgICAgYyA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgIGFjID0gVmVjdG9yLnN1YnRyYWN0KGMsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQ1xuXG4gICAgICAgICAgICAvL2Fj7JmAIOyImOyngVxuICAgICAgICAgICAgYWNwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFjLCBhYyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJywgYSwgJ2InLCBiLCAnYycsIGMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FvJywgYW8sICdhYicsIGFiLCAnYWMnLCBhYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWNwZXJwJywgYWNwZXJwLCBhY3BlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdFByb2R1Y3QoYWNwZXJwLCBhbyknLCBWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSk7XG5cbiAgICAgICAgICAgIC8vIGFjIOyImOyngSDshKDrtoTsnbQgYeqwgCDsm5DsoJDsnYQg7Zal7ZWY64qUIOuwqe2WpSDrsJjrjIDtjrjsl5Ag7J6I6rOgXG4gICAgICAgICAgICAvLyDspoksIGFjIOyImOyngSDshKDrtoQg7JWI7Kq97JeQIOybkOygkOydtCDsnojsnLzrqbRcbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZCA9IGFjcGVycDsgLy8gbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW4nLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoRcbiAgICAgICAgICAgICAgICBhYnBlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYWIsIGFiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWJwZXJwJywgYWJwZXJwLCBhYnBlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFicGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWIg7IiY7KeBIOyEoOu2hOydtCDsm5DsoJAg67CY64yAIOuwqe2WpeydhCDtlqXtlZjqs6Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgLy8g7KaJLCDsm5DsoJDsnbQg7IK86rCB7ZiVIOyViOyXkCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaW1wbGV4WzBdID0gc2ltcGxleFsxXTsgLy8gc3dhcCBmaXJzdCBlbGVtZW50IChwb2ludCBDKVxuICAgICAgICAgICAgICAgIGQgPSBhYnBlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpbXBsZXhbMV0gPSBzaW1wbGV4WzJdOyAvLyBzd2FwIGVsZW1lbnQgaW4gdGhlIG1pZGRsZSAocG9pbnQgQilcbiAgICAgICAgICAgIC0taW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3JlYXRlQ29udmV4SHVsbChwb2ludHMpXG4gICAge1xuICAgICAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgICAgIHZhciBpMCA9IDA7XG4gICAgICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGh1bGwgPSBbXTtcbiAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICB2YXIgaWggPSBpMDtcblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgICAgICB2YXIgaWUgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgciA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tqXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IFZlY3Rvci5jcm9zcyhyLCB2KTtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhTcSgpID4gci5sZW5ndGhTcSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29weSB2ZXJ0aWNlc1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaHVsbFtpXV07XG4gICAgICAgICAgICBuZXdQb2ludHMucHVzaChuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQb2ludHM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbWlkcG9pbnQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKChhLnggKyBiLngpIC8gMiwgKGEueSArIGIueSkgLyAyKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICBjb25zb2xlLmxvZyhpbmRleCwgdmVydGV4LngsIHZlcnRleC55KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMxJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMSk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMyJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMik7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbn1cblxuZnVuY3Rpb24gc3RyKHZlcnRleCwgaXNGaXhlZCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBgKCR7dmVydGV4Lnh9LCR7dmVydGV4Lnl9KWA7XG4gICAgfVxuICAgIHJldHVybiBgKCR7dmVydGV4LngudG9GaXhlZCgyKX0sJHt2ZXJ0ZXgueS50b0ZpeGVkKDIpfSlgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9HSksuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgR0pLIGZyb20gJy4uL2dqay9HSksnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXJcbntcbiAgICBzdGF0aWMgZHJhd01pbmtvd3NraVN1bSh2ZXJ0aWNlczEsIHZlcnRpY2VzMilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmF3TWlua293c2tpU3VtKCcsIHZlcnRpY2VzMS5sZW5ndGggKiB2ZXJ0aWNlczIubGVuZ3RoLCAnKScpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlczEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmVydGljZXMyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdjEgPSB2ZXJ0aWNlczFbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgdjIgPSB2ZXJ0aWNlczJbal0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IFZlY3Rvci5zdWJ0cmFjdCh2MSwgdjIpO1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChkaWZmKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpLCBqLCBgdmVjWyR7ZGlmZi54fSwgJHtkaWZmLnl9XWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udmV4SHVsbFBhdGggPSBHSksuY3JlYXRlQ29udmV4SHVsbChwYXRoKTtcbiAgICAgICAgUGFpbnRlci5kcmF3UG9seWdvbihjb252ZXhIdWxsUGF0aCwgMSwgMHhEREREREQsIDEpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2x5Z29uKHZlcnRpY2VzLCBsaW5lV2lkdGggPSAxLCBjb2xvciA9IDB4NjA3RDhCLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gd2luZG93Lmc7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZShsaW5lV2lkdGgsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgY29uc3QgdmVjMCA9IHZlcnRpY2VzWzBdLmNsb25lKCk7XG4gICAgICAgIHZlYzAubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh2ZWMwLngsIHZlYzAueSk7XG5cbiAgICAgICAgLy8gdGhpcy5kcmF3VGV4dCh3aW5kb3cuc3RhZ2UsICcoJyArIHZlYzAueC50b0ZpeGVkKDApICsgJywnICsgdmVjMC55LnRvRml4ZWQoMCkgKyAnKScsIHZlYzApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2ZWMgPSB2ZXJ0aWNlc1tpXS5jbG9uZSgpO1xuICAgICAgICAgICAgdmVjLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMueCwgdmVjLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYzAueCwgdmVjMC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3VGV4dChzdGFnZSwgc3RyaW5nLCBwb2ludCwgY29sb3IgPSAnI2ZmMzMwMCcpXG4gICAge1xuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChzdHJpbmcsIHtcbiAgICAgICAgICAgIC8vIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICAvLyBmb250U2l6ZTogNCxcbiAgICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIGZpbGw6IGNvbG9yLFxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnIzRhMTg1MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRleHQueCA9IHBvaW50Lng7XG4gICAgICAgIHRleHQueSA9IHBvaW50Lnk7XG5cbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQodGV4dCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50KGdyYXBoaWNzLCBwb2ludCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgY29sb3IpO1xuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShwb2ludC54LCBwb2ludC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeUJvdW5kcyhncmFwaGljcywgYm91bmRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSlcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucnQueCwgcmVjdC5ydC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucmIueCwgcmVjdC5yYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubGIueCwgcmVjdC5sYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzQnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sdC54LCByZWN0Lmx0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5ydC54LCByZWN0LnJ0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5yYi54LCByZWN0LnJiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sYi54LCByZWN0LmxiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50cyhncmFwaGljcywgcG9pbnRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwMSA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIHZhciBwMiA9IHBvaW50c1tpICsgMSA8IHBvaW50cy5sZW5ndGggPyBpICsgMSA6IDBdO1xuXG4gICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0xpbmUoZ3JhcGhpY3MsIHAwLCBwMSwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDAueCwgcDAueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMS54LCBwMS55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3QXJyb3coZ3JhcGhpY3MsIG1vdmVQb2ludCwgdG9Qb2ludCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKmdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKHRvUG9pbnQueCAtIG1vdmVQb2ludC54LCB0b1BvaW50LnkgLSBtb3ZlUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoMTUpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTsqL1xuXG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG5cbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IobW92ZVBvaW50LnggLSB0b1BvaW50LngsIG1vdmVQb2ludC55IC0gdG9Qb2ludC55KTtcbiAgICAgICAgdmFyIGxlZnQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHZlY3Rvci5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcigxNSk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgdmVjdG9yLngsIG1vdmVQb2ludC55ICsgdmVjdG9yLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgbGVmdC54LCBtb3ZlUG9pbnQueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyByaWdodC54LCBtb3ZlUG9pbnQueSArIHJpZ2h0LnkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9QYWludGVyLmpzIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uLy4uL3NyYy9zYXQvUG9pbnQnO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi8uLi9zcmMvc2F0L0NpcmNsZSc7XG5pbXBvcnQgUG9seWdvbiBmcm9tICcuLi8uLi9zcmMvc2F0L1BvbHlnb24nO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi8uLi9zcmMvVmVjdG9yJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYWludGVyJztcbmltcG9ydCBNb3VzZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMvTW91c2UnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlJztcblxuY29uc3QgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpXG4gICAgLCBkZWJ1Z0dyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICwgc2hhcGVzID0gW11cbiAgICAsIExJTkVfQ09MT1IgPSAweDg0RDJGNlxuICAgICwgQVJST1dfQ09MT1IgPSAweEU1NzM3MztcblxubGV0IHBvbHlnb25Qb2ludHMgPSBbXG4gICAgW25ldyBQb2ludCgzNTAsIDM1MCksIG5ldyBQb2ludCgzNTAsIDUwMCksIG5ldyBQb2ludCg1MDAsIDUwMCldLFxuICAgIFtuZXcgUG9pbnQoNTAwLCAyMDApLCBuZXcgUG9pbnQoNDgwLCAyNTApLCBuZXcgUG9pbnQoNjAwLCAyNTApLCBuZXcgUG9pbnQoNjIwLCAyMDApXSxcbiAgICBbbmV3IFBvaW50KDI1OCwgMTIwKSwgbmV3IFBvaW50KDI5NSwgMjMwKSwgbmV3IFBvaW50KDIwMCwgMzAwKSwgbmV3IFBvaW50KDEwNSwgMjMwKSwgbmV3IFBvaW50KDE0MiwgMTIwKV1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lclxue1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB3aW5kb3dbJ2cnXSA9IGRlYnVnR3JhcGhpY3M7XG5cbiAgICAgICAgdGhpcy5pc0luaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICBpbml0aWFsaXplKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChncmFwaGljcyk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZGVidWdHcmFwaGljcyk7XG5cbiAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludCA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICB0aGlzLmxhc3RkcmFnID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy90aGlzLmNyZWF0ZVBvbHlnb24oKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQb2x5Z29uTWFudWFsKCk7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIGFkZEV2ZW50KClcbiAgICB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm9uKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcbiAgICAgICAgdGhpcy5vbignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMub24oJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlKCkge31cblxuXG4gICAgcmVzaXplKClcbiAgICB7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cblxuICAgIGdldFBvbHlnb25Qb2ludHModHgsIHR5LCBhbmdsZSwgcmFkaXVzID0gMTAwKVxuICAgIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG5cbiAgICAgICAgLy8gbWFraW5nIHBvaW50cywgcGF0aFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuZ2xlOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgeCA9IHR4ICsgKHJhZGl1cyAqIC1NYXRoLnNpbih0aGlzLnRvUmFkaWFuKDM2MCAvIGFuZ2xlICogaSkpKTtcbiAgICAgICAgICAgIGxldCB5ID0gdHkgKyAocmFkaXVzICogIE1hdGguY29zKHRoaXMudG9SYWRpYW4oMzYwIC8gYW5nbGUgKiBpKSkpO1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gbmV3IFBJWEkuUG9pbnQoeCwgeSk7XG4gICAgICAgICAgICBwb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cblxuXG4gICAgdG9SYWRpYW4oZGVncmVlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGRlZ3JlZSAqIE1hdGguUEkgLyAxODA7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQb2x5Z29uKHVzZVJhbmRvbVJvdGF0ZSA9IGZhbHNlKVxuICAgIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvbHlnb25Qb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwb2x5Z29uID0gbmV3IFBvbHlnb24oY29udGV4dCksXG4gICAgICAgICAgICAgICAgcG9pbnRzID0gcG9seWdvblBvaW50c1tpXTtcblxuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcG9seWdvbi5hZGRQb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXNlUmFuZG9tUm90YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVTaGFwZShwb2x5Z29uLCBNYXRoLnJhbmRvbSgpICogNDUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGFwZXMucHVzaChwb2x5Z29uKTtcblxuICAgICAgICAgICAgcG9seWdvbi5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY3JlYXRlUG9seWdvbk1hbnVhbCgpXG4gICAge1xuICAgICAgICBsZXQgcmFkaXVzID0gMTAwLFxuICAgICAgICAgICAgZGlhbWV0ZXIgPSAyMDAsXG4gICAgICAgICAgICBzcGFjZSA9IDIwLFxuICAgICAgICAgICAgYSA9IHJhZGl1cyArIHNwYWNlLFxuICAgICAgICAgICAgYiA9IHJhZGl1cyArIGRpYW1ldGVyICsgc3BhY2UgKiAyLFxuICAgICAgICAgICAgYyA9IHJhZGl1cyArIGRpYW1ldGVyICogMiArIHNwYWNlICogMztcblxuICAgICAgICBwb2x5Z29uUG9pbnRzID0gW107XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYSwgMykpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGEsIDQpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhjLCBhLCA1KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYiwgNikpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGIsIDcpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhjLCBiLCA4KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYywgOSkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGMsIDEwKSk7XG4gICAgICAgIHRoaXMuYWRkQ2lyY2xlKGMsIGMsIHJhZGl1cyk7XG4gICAgICAgIC8vdGhpcy5hZGRDaXJjbGUoYywgYywgcmFkaXVzKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVBvbHlnb24odHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBhZGRQb2x5Z29uKGluZGV4LCB1c2VSYW5kb21Sb3RhdGUgPSB0cnVlKVxuICAgIHtcbiAgICAgICAgbGV0IHBvbHlnb24gPSBuZXcgUG9seWdvbih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGxldCBwb2ludHMgPSBwb2x5Z29uUG9pbnRzW2luZGV4XTtcblxuICAgICAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgIHBvbHlnb24uYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1c2VSYW5kb21Sb3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU2hhcGUocG9seWdvbiwgKE1hdGgucmFuZG9tKCkgKiA0NSkgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvbHlnb24uY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIHNoYXBlcy5wdXNoKHBvbHlnb24pO1xuICAgIH1cblxuXG4gICAgYWRkQ2lyY2xlKHgsIHksIHJhZGl1cylcbiAgICB7XG4gICAgICAgIGxldCBjaXJjbGUgPSBuZXcgQ2lyY2xlKHRoaXMuY29udGV4dCwgeCwgeSwgcmFkaXVzKTtcbiAgICAgICAgY2lyY2xlLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICBzaGFwZXMucHVzaChjaXJjbGUpO1xuICAgICAgICB0aGlzLmNpcmNsZSA9IGNpcmNsZTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVJlbmRlcigpXG4gICAge1xuICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgIHNoYXBlcy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBwb2x5Z29uLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGRldGVjdENvbGxpc2lvbnMoKVxuICAgIHtcbiAgICAgICAgbGV0IGRyYWdTaGFwZSA9IHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQ7XG5cbiAgICAgICAgaWYgKCFkcmFnU2hhcGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoc2hhcGUgIT09IGRyYWdTaGFwZSkge1xuICAgICAgICAgICAgICAgIGxldCBtdHYgPSBkcmFnU2hhcGUuY29sbGlkZXNXaXRoKHNoYXBlKTtcblxuICAgICAgICAgICAgICAgIC8vIOy2qeuPjCDtjJDsoJVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25EZXRlY3RlZChtdHYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVNoYXBlQnlNVFYobXR2LCBkcmFnU2hhcGUsIHNoYXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogbXR266GcIOy2qeuPjCDtjJDsoJVcbiAgICAgKiBAcGFyYW0gbXR2XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY29sbGlzaW9uRGV0ZWN0ZWQobXR2KVxuICAgIHtcbiAgICAgICAgLy8g7Lap64+MIO2MkOyglVxuICAgICAgICBpZiAobXR2LmF4aXMgIT0gdW5kZWZpbmVkIHx8IG10di5vdmVybGFwICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjaGVja01UVkF4aXNEaXJlY3Rpb24obXR2LCBjb2xsaWRlciwgY29sbGlkZWUpXG4gICAge1xuICAgICAgICBpZiAobXR2LmF4aXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgY29sbGlkZXJDZW50ZXIgPSBWZWN0b3IuZnJvbU9iamVjdChjb2xsaWRlci5nZXRDZW50ZXIoKSksXG4gICAgICAgICAgICBjb2xsaWRlZUNlbnRlciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNvbGxpZGVlLmdldENlbnRlcigpKSxcbiAgICAgICAgICAgIGNlbnRlclZlY3RvciA9IGNvbGxpZGVlQ2VudGVyLnN1YnRyYWN0KGNvbGxpZGVyQ2VudGVyKSxcbiAgICAgICAgICAgIGNlbnRlclVuaXRWZWN0b3IgPSBWZWN0b3IuZnJvbU9iamVjdChjZW50ZXJWZWN0b3IpLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIGlmIChjZW50ZXJVbml0VmVjdG9yLmRvdFByb2R1Y3QobXR2LmF4aXMpID4gMCkge1xuICAgICAgICAgICAgbXR2LmF4aXMueCA9IC1tdHYuYXhpcy54O1xuICAgICAgICAgICAgbXR2LmF4aXMueSA9IC1tdHYuYXhpcy55O1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbXR2XG4gICAgICogQHBhcmFtIGNvbGxpZGVyIOy2qeuPjO2VnCDqsJ3ssrRcbiAgICAgKiBAcGFyYW0gY29sbGlkZWUg7Lap64+M7J2EIOuLue2VnCDqsJ3ssrRcbiAgICAgKi9cbiAgICBtb3ZlU2hhcGVCeU1UVihtdHYsIGNvbGxpZGVyLCBjb2xsaWRlZSlcbiAgICB7XG4gICAgICAgIGlmIChtdHYuYXhpcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtdHYuYXhpcyA9IG5ldyBWZWN0b3IoMSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZHggPSBtdHYuYXhpcy54ICogbXR2Lm92ZXJsYXAsXG4gICAgICAgICAgICBkeSA9IG10di5heGlzLnkgKiBtdHYub3ZlcmxhcDtcblxuICAgICAgICBsZXQgZHJhZ1ZlY3RvciA9IHRoaXMuZHJhZ1ZlY3RvcixcbiAgICAgICAgICAgIGNlbnRlckNvbGxpZGVyID0gY29sbGlkZXIuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICBjZW50ZXJDb2xsaWRlZSA9IGNvbGxpZGVlLmdldENlbnRlcigpLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcihjZW50ZXJDb2xsaWRlZS54IC0gY2VudGVyQ29sbGlkZXIueCwgY2VudGVyQ29sbGlkZWUueSAtIGNlbnRlckNvbGxpZGVyLnkpLFxuICAgICAgICAgICAgZGlyZWN0aW9uTm9ybSA9IGRpcmVjdGlvbi5ub3JtKCksXG4gICAgICAgICAgICBvdmVybGFwVmVjdG9yID0gbmV3IFZlY3RvcihkeCwgZHkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDrgrTsoIHsnbQgLTHsnbTrqbQg67CY64yAIOuwqe2WpeydhCDrs7TripQg6rKDXG4gICAgICAgICAqIOuCtOyggeydtCAw7J2066m0IOyImOyngVxuICAgICAgICAgKiDrgrTsoIHsnbQgMeyduCDqsr3smrAg6rCZ7J2AIOuwqe2WpeydhCDqsIDrpqztgqTripQg6rKDXG4gICAgICAgICAqIOuCtOyggeydtCA+IDAuOCDri6TrqbQg6rCZ7J2AIOuwqe2WpeydhCDrs7Tqs6Ag7J6I64qUIOyDge2DnFxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRvdCA9IGRyYWdWZWN0b3IuZG90UHJvZHVjdChvdmVybGFwVmVjdG9yKTtcblxuICAgICAgICBpZiAoZG90IDwgMCkge1xuICAgICAgICAgICAgZHggPSAtZHg7XG4gICAgICAgICAgICBkeSA9IC1keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjID0gY29sbGlkZWUuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICB0byA9IG5ldyBWZWN0b3IoZHgsIGR5KSxcbiAgICAgICAgICAgIHRvTm9ybWFsaXplID0gdG8uY2xvbmUoKS5ub3JtKCksXG4gICAgICAgICAgICBkb3RUbyA9IGRpcmVjdGlvbk5vcm0uZG90UHJvZHVjdCh0b05vcm1hbGl6ZSksXG4gICAgICAgICAgICBjZW50ZXIgPSBuZXcgVmVjdG9yKGMueCwgYy55KTtcbiAgICAgICAgdG8gPSBjZW50ZXIuY2xvbmUoKS5zdWJ0cmFjdCh0byk7XG5cbiAgICAgICAgLy8g65GQIOqwneyytOydmCDrsKntlqUg67Kh7YSw7JmAIOuwgOyWtOuCtOuKlCDrsLHthLAodG8p7J2YIOuCtOyggeydtCAw67O064ukIO2BtCDqsr3smrAsIOymiSDrsIDslrQg64K064qUIOuwqe2WpeydtCDrsIDslrTrgrTripQg67Cp7Zal7J28IOuVjOunjCDsoIHsmqlcbiAgICAgICAgaWYgKGRvdFRvID49IDApIHtcbiAgICAgICAgICAgIFBhaW50ZXIuZHJhd0Fycm93KHdpbmRvdy5nLCBjZW50ZXIsIHRvLCBmYWxzZSwgMSwgQVJST1dfQ09MT1IpO1xuICAgICAgICAgICAgLy9QYWludGVyLmRyYXdQb2ludCh3aW5kb3cuZywgdGhpcy5jaXJjbGUuZ2V0Q2VudGVyKCksIGZhbHNlLCAxMCwgMHhmZjMzMDAsIDAuMik7XG4gICAgICAgICAgICBjb2xsaWRlZS5tb3ZlKGR4LCBkeSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJvdGF0ZVNoYXBlKHNoYXBlLCBkZWdyZWVzKVxuICAgIHtcbiAgICAgICAgLy9kZWdyZWVzID0gOTA7XG4gICAgICAgIGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cbiAgICAgICAgaWYgKHBvaW50cykge1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHNoYXBlLmdldENlbnRlcigpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCAgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldID0gdGhpcy5yb3RhdGlvblBvaW50KGNlbnRlciwgcG9pbnQsIGRlZ3JlZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDtmozsoITtlZjripQg7KKM7ZGcIOq1rO2VmOq4sFxuICAgICAqIEBwYXJhbSBwaXZvdCDsgqzqsIHtmJXsnZgg7KSR7Ius7KCQXG4gICAgICogQHBhcmFtIHBvaW50IOqzhOyCsO2VmOqzoCDsi7bsnYAg7Y+s7J247Yq4XG4gICAgICogQHBhcmFtIGRlZ3JlZXMg7ZqM7KCE6rCBIGRlZ3JlZXNcbiAgICAgKiBAcmV0dXJucyB7e3g6IChudW1iZXJ8KiksIHk6IChudW1iZXJ8Kil9fVxuICAgICAqL1xuICAgIHJvdGF0aW9uUG9pbnQocGl2b3QsIHBvaW50LCBkZWdyZWVzKVxuICAgIHtcbiAgICAgICAgbGV0IGRpZmZYID0gcG9pbnQueCAtIHBpdm90Lng7XG4gICAgICAgIGxldCBkaWZmWSA9IHBvaW50LnkgLSBwaXZvdC55O1xuICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSk7XG4gICAgICAgIGxldCBjYSA9IE1hdGguYXRhbjIoZGlmZlksIGRpZmZYKSAqICgxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgbGV0IG5hID0gKChjYSArIGRlZ3JlZXMpICUgMzYwKSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IHggPSAocGl2b3QueCArIGRpc3QgKiBNYXRoLmNvcyhuYSkgKyAwLjUpIHwgMDtcbiAgICAgICAgbGV0IHkgPSAocGl2b3QueSArIGRpc3QgKiBNYXRoLnNpbihuYSkgKyAwLjUpIHwgMDtcbiAgICAgICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcbiAgICB9XG5cblxuICAgIG9uTW91c2VEb3duKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gVmVjdG9yLmZyb21PYmplY3QoTW91c2UuZ2xvYmFsKTtcblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGFwZS5pc1BvaW50SW5QYXRoKGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludC54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludC55ID0gY3VycmVudFBvaW50Lnk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy55ID0gY3VycmVudFBvaW50Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgb25Nb3VzZU1vdmUoKVxuICAgIHtcbiAgICAgICAgZGVidWdHcmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgIGxldCBjdXJyZW50UG9pbnQsIGRyYWdWZWN0b3I7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQb2ludCA9IFZlY3Rvci5mcm9tT2JqZWN0KE1vdXNlLmdsb2JhbCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ1ZlY3RvciA9IGRyYWdWZWN0b3IgPSBjdXJyZW50UG9pbnQuY2xvbmUoKS5zdWJ0cmFjdCh0aGlzLmxhc3RkcmFnKTtcblxuICAgICAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZC5tb3ZlKGRyYWdWZWN0b3IueCwgZHJhZ1ZlY3Rvci55KTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnkgPSBjdXJyZW50UG9pbnQueTtcblxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlVXAoKVxuICAgIHtcbiAgICAgICAgZGVidWdHcmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vXG4gICAgLy8gVGVzdCDtlajsiJhcbiAgICAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgIG9uS2V5VXAoZSlcbiAgICB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRVNDQVBFOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTlVNQkVSXzE6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5OVU1CRVJfMjpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9zYXQvVGVzdC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50XG57XG4gICAgY29uc3RydWN0b3IoeCwgeSlcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvUG9pbnQuanMiLCJpbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tICcuL1Byb2plY3Rpb24nO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgU2hhcGVcbntcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB4LCB5LCByYWRpdXMpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9ICdDaXJjbGUnO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOykkeygkCDsooztkZwg67CY7ZmYXG4gICAgICogQHJldHVybnMge1BJWEkuUG9pbnR8KnxzdmcuUG9pbnR9XG4gICAgICovXG4gICAgZ2V0Q2VudGVyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUElYSS5Qb2ludCh0aGlzLngsdGhpcy55KTtcbiAgICB9XG5cblxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIGlmIChzaGFwZS5yYWRpdXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShzaGFwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaXJjbGVDb2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIHZhciBheGVzID0gc2hhcGUuZ2V0QXhlcygpLCBkaXN0YW5jZTtcblxuICAgICAgICBpZiAoYXhlcyA9PT0gdW5kZWZpbmVkKSB7IC8v7JuQXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhzaGFwZS54IC0gdGhpcy54LCAyKSArXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coc2hhcGUueSAtIHRoaXMueSwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgTWF0aC5hYnModGhpcy5yYWRpdXMgKyBzaGFwZS5yYWRpdXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShzaGFwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgKi9cblxuXG4gICAgZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSlcbiAgICB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY2lyY2xlVmVjdG9yID0gVmVjdG9yLmZyb21PYmplY3QoY2lyY2xlKSxcbiAgICAgICAgICAgIGxlbmd0aCwgdGVzdFBvaW50VmVjdG9yLCBjbG9zZXN0UG9pbnQ7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgcG9seWdvbi5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3RQb2ludFZlY3RvciA9IFZlY3Rvci5mcm9tT2JqZWN0KHBvbHlnb24ucG9pbnRzW2ldKTtcbiAgICAgICAgICAgIHRlc3RQb2ludFZlY3Rvci5pbmRleCA9IGk7XG4gICAgICAgICAgICBsZW5ndGggPSB0ZXN0UG9pbnRWZWN0b3IuY2xvbmUoKS5kaXN0YW5jZShjaXJjbGUpO1xuXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gbGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHRlc3RQb2ludFZlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0UG9pbnQuY2xvbmUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLpOqwge2YleqzvCDsm5DtmJUg7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGNpcmNsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIC8qcG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShwb2x5Z29uLCBjaXJjbGUpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGF4ZXMgPSBwb2x5Z29uLmdldEF4ZXMoKSxcbiAgICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHRoaXMuZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSk7XG5cbiAgICAgICAgYXhlcy5wdXNoKHRoaXMuZ2V0Q2lyY2xlQXhpcyhjaXJjbGUsIGNsb3Nlc3RQb2ludCkpO1xuXG4gICAgICAgIHJldHVybiAhcG9seWdvbi5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIGNpcmNsZSk7XG4gICAgfSovXG5cblxuICAgIGdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpXG4gICAge1xuICAgICAgICB2YXIgdjEgPSBuZXcgVmVjdG9yKGNpcmNsZS54LCBjaXJjbGUueSksXG4gICAgICAgICAgICB2MiA9IG5ldyBWZWN0b3IoY2xvc2VzdFBvaW50LngsIGNsb3Nlc3RQb2ludC55KSxcbiAgICAgICAgICAgIHN1cmZhY2VWZWN0b3IgPSB2MS5zdWJ0cmFjdCh2Mik7XG5cbiAgICAgICAgUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIGNsb3Nlc3RQb2ludCwgZmFsc2UsIDUsIDB4ZmYzMzAwLCAwLjMpO1xuICAgICAgICAvL1BhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsIFZlY3Rvci5mcm9tT2JqZWN0KGNpcmNsZSksIFZlY3Rvci5mcm9tT2JqZWN0KGNsb3Nlc3RQb2ludCksIGZhbHNlLCAxLCAweGZmMzMwMCwgMC4zKTtcblxuICAgICAgICByZXR1cm4gc3VyZmFjZVZlY3Rvci5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIHByb2plY3QoYXhpcylcbiAgICB7XG4gICAgICAgIGxldCBzY2FsYXJzID0gW10sXG4gICAgICAgICAgICBwb2ludCA9IG5ldyBQSVhJLlBvaW50KHRoaXMueCwgdGhpcy55KSxcbiAgICAgICAgICAgIHBvaW50VmVjdG9yID0gbmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSxcbiAgICAgICAgICAgIGRvdFByb2R1Y3QgPSBwb2ludFZlY3Rvci5kb3RQcm9kdWN0KGF4aXMpO1xuXG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0KTtcbiAgICAgICAgc2NhbGFycy5wdXNoKGRvdFByb2R1Y3QgKyB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0IC0gdGhpcy5yYWRpdXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdGlvbihcbiAgICAgICAgICAgIE1hdGgubWluLmFwcGx5KE1hdGgsIHNjYWxhcnMpLFxuICAgICAgICAgICAgTWF0aC5tYXguYXBwbHkoTWF0aCwgc2NhbGFycylcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGdldEF4ZXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBhdGgoZ3JhcGhpY3MsIGxpbmVDb2xvciA9IDB4RkZGRkZGKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGxpbmVDb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh0aGlzLnggKyB0aGlzLnJhZGl1cywgdGhpcy55KTtcbiAgICAgICAgZ3JhcGhpY3MuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICB9XG5cblxuICAgIG1vdmUoZHgsIGR5KVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IGR4O1xuICAgICAgICB0aGlzLnkgKz0gZHk7XG4gICAgfVxuXG5cbiAgICBpc1BvaW50SW5QYXRoKHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICBjb25zdCBpc1BvaW50SW5QYXRoID0gdGhpcy5jb250ZXh0LmlzUG9pbnRJblBhdGgoeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiBpc1BvaW50SW5QYXRoO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9DaXJjbGUuanMiLCJpbXBvcnQgTVRWIGZyb20gJy4vTVRWJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBtaW5pbXVtVHJhbnNsYXRpb25WZWN0b3IoYXhlcywgc2hhcGUpIHtcbiAgICAgICAgdmFyIG1pbmltdW1PdmVybGFwID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG92ZXJsYXAsIGF4aXNXaXRoU21hbGxlc3RPdmVybGFwLFxuICAgICAgICAgICAgYXhpcywgcHJvamVjdGlvbjEsIHByb2plY3Rpb24yO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYXhpcyA9IGF4ZXNbaV07XG4gICAgICAgICAgICBwcm9qZWN0aW9uMSA9IHNoYXBlLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICBwcm9qZWN0aW9uMiA9IHRoaXMucHJvamVjdChheGlzKTtcbiAgICAgICAgICAgIG92ZXJsYXAgPSBwcm9qZWN0aW9uMS5nZXRPdmVybGFwKHByb2plY3Rpb24yKTtcblxuICAgICAgICAgICAgLypQYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLFxuICAgICAgICAgICAgICAgIHt4OmF4aXMueCAqIHByb2plY3Rpb24xLm1pbiwgeTpheGlzLnkgKiBwcm9qZWN0aW9uMS5taW59LFxuICAgICAgICAgICAgICAgIHt4OmF4aXMueCAqIHByb2plY3Rpb24yLm1heCwgeTpheGlzLnkgKiBwcm9qZWN0aW9uMi5tYXh9LFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApOyovXG5cbiAgICAgICAgICAgIGlmIChvdmVybGFwID09PSAwKSB7IC8v7Lap64+MIOyXhuyKtC5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1UVigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvdmVybGFwIDwgbWluaW11bU92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bU92ZXJsYXAgPSBvdmVybGFwO1xuICAgICAgICAgICAgICAgICAgICBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCA9IGF4aXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBNVFYobWluaW11bU92ZXJsYXAsIGF4aXNXaXRoU21hbGxlc3RPdmVybGFwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuRkCDri6TqsIHtmJUg7IKs7J207JeQ7IScIOy2qeuPjFxuICAgICAqIEBwYXJhbSBwMVxuICAgICAqIEBwYXJhbSBwMlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uKHAxLCBwMikge1xuICAgICAgICB2YXIgbXR2MSA9IHAxLm1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihwMS5nZXRBeGVzKCksIHAyKSxcbiAgICAgICAgICAgIG10djIgPSBwMS5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IocDIuZ2V0QXhlcygpLCBwMik7XG5cbiAgICAgICAgaWYgKG10djEub3ZlcmxhcCA9PT0gMCAmJiBtdHYyLm92ZXJsYXAgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTVRWKDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG10djEub3ZlcmxhcCA8IG10djIub3ZlcmxhcCA/IG10djEgOiBtdHYyO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrkZAg7JuQ7ZiV7JeQIOuMgO2VnCDstqnrj4xcbiAgICAgKiBAcGFyYW0gYzFcbiAgICAgKiBAcGFyYW0gYzJcbiAgICAgKi9cbiAgICBjaXJjbGVDb2xsaWRlc1dpdGhDaXJjbGUoYzEsIGMyKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhjMi54IC0gYzEueCwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3coYzIueSAtIGMxLnksIDIpKSxcbiAgICAgICAgICAgIG92ZXJsYXAgPSBNYXRoLmFicyhjMS5yYWRpdXMgKyBjMi5yYWRpdXMpIC0gZGlzdGFuY2U7XG5cbiAgICAgICAgcmV0dXJuIG92ZXJsYXAgPCAwID9cbiAgICAgICAgICAgIG5ldyBNVFYoMCkgOlxuICAgICAgICAgICAgbmV3IE1UVihvdmVybGFwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLpOqwge2YleqzvCDsm5DtmJUg7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGNpcmNsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUocG9seWdvbiwgY2lyY2xlKSB7XG4gICAgICAgIHZhciBheGVzID0gcG9seWdvbi5nZXRBeGVzKCksXG4gICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSBjaXJjbGUuZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSk7XG5cbiAgICAgICAgLy8gUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIGNsb3Nlc3RQb2ludCwgZmFsc2UsIDUsIDB4RTU3MzczKTtcblxuICAgICAgICBheGVzLnB1c2goY2lyY2xlLmdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpKTtcblxuICAgICAgICByZXR1cm4gcG9seWdvbi5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IoYXhlcywgY2lyY2xlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2leyXkCDtiKzsmIHtlZjsl6wg67aE66as6rCAIOyeiOycvOuptCB0cnVlIOuwmO2ZmCjstqnrj4zrkJjsp4Ag7JWK7JWY64uk66m0IHRydWUg67CY7ZmYKVxuICAgICAqIEBwYXJhbSBvdGhlclNoYXBlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKSB7XG4gICAgICAgIHZhciBheGVzID0gdGhpcy5nZXRBeGVzKCkuY29uY2F0KHNoYXBlLmdldEF4ZXMoKSk7XG4gICAgICAgIHJldHVybiAhdGhpcy5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOu2hOumrOy2leydtCDsnojripTsp4Ag7Jes67aAICjrtoTrpqzstpXsnbQg7J6I64uk64qUIOydtOyVvOq4sOuKlCDstqnrj4ztlZjsp4Ag7JWK7JWY64uk64qUIOydtOyVvOq4sCDsnoXri4jri6QuKVxuICAgICAqIEBwYXJhbSBheGVzXG4gICAgICogQHBhcmFtIHNoYXBlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBzaGFwZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF4ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9qZWN0aW9uMSA9IHNoYXBlLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICB2YXIgcHJvamVjdGlvbjIgPSB0aGlzLnByb2plY3QoYXhpcyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvamVjdGlvbjEub3ZlcmxhcHMocHJvamVjdGlvbjIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIGRvbid0IGhhdmUgdG8gdGVzdCByZW1haW5pbmcgYXhlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9TaGFwZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1UVlxue1xuICAgIC8qKlxuICAgICAqIOy1nOyGjCDsnbTrj5kg67Kh7YSwXG4gICAgICogTWluaW11bSBUcmFuc2xhdGlvbiBWZWN0b3IgKE1UVilcbiAgICAgKiBAcGFyYW0gYXhpc1xuICAgICAqIEBwYXJhbSBvdmVybGFwXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3ZlcmxhcCA9IHVuZGVmaW5lZCwgYXhpcyA9IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXM7XG4gICAgICAgIHRoaXMub3ZlcmxhcCA9IG92ZXJsYXA7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvTVRWLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdGlvblxue1xuICAgIGNvbnN0cnVjdG9yKG1pbiwgbWF4KVxuICAgIHtcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgIH1cblxuXG4gICAgZ2V0T3ZlcmxhcChwcm9qZWN0aW9uKVxuICAgIHtcbiAgICAgICAgdmFyIG92ZXJsYXA7XG5cbiAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXBzKHByb2plY3Rpb24pKVxuICAgICAgICAgICAgcmV0dXJuIDA7XG5cbiAgICAgICAgaWYgKHRoaXMubWF4ID4gcHJvamVjdGlvbi5tYXgpIHtcbiAgICAgICAgICAgIG92ZXJsYXAgPSBwcm9qZWN0aW9uLm1heCAtIHRoaXMubWluO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3ZlcmxhcCA9IHRoaXMubWF4IC0gcHJvamVjdGlvbi5taW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG92ZXJsYXA7XG4gICAgfVxuXG5cbiAgICBvdmVybGFwcyhwcm9qZWN0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4ID4gcHJvamVjdGlvbi5taW4gJiYgcHJvamVjdGlvbi5tYXggPiB0aGlzLm1pbjtcbiAgICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvUHJvamVjdGlvbi5qcyIsImltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQcm9qZWN0aW9uIGZyb20gJy4vUHJvamVjdGlvbic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgU2hhcGVcbntcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnBvaW50cy5sZW5ndGggKyAnIFBvbHlnb24nO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7KSR7KCQIOyijO2RnFxuICAgICAqIEByZXR1cm5zIHtQSVhJLlBvaW50fCp8c3ZnLlBvaW50fVxuICAgICAqL1xuICAgIGdldENlbnRlcigpXG4gICAge1xuICAgICAgICB2YXIgcG9pbnRTdW0gPSBuZXcgUElYSS5Qb2ludCgpO1xuXG4gICAgICAgIGZvciAodmFyIGk9MCwgcG9pbnQ7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcG9pbnQgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgICAgIHBvaW50U3VtLnggKz0gcG9pbnQueDtcbiAgICAgICAgICAgIHBvaW50U3VtLnkgKz0gcG9pbnQueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFBJWEkuUG9pbnQocG9pbnRTdW0ueCAvIHRoaXMucG9pbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIHBvaW50U3VtLnkgLyB0aGlzLnBvaW50cy5sZW5ndGgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7Lap64+MIOyytO2BrCAo67aE66as7LaV7J20IOyXhuycvOuptCDstqnrj4wpLCAhc2VwYXJhdGlvbk9uQXhlc1xuICAgICAqIEBwYXJhbSBzaGFwZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIGlmIChzaGFwZS5yYWRpdXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZSh0aGlzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ29sbGlkZXNXaXRoUG9seWdvbih0aGlzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKVxuICAgIHtcbiAgICAgICAgdmFyIGF4ZXMgPSBzaGFwZS5nZXRBeGVzKCk7XG5cbiAgICAgICAgaWYgKGF4ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYXBlLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXhlcy5jb25jYXQodGhpcy5nZXRBeGVzKCkpO1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlcGFyYXRpb25PbkF4ZXMoYXhlcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIO2IrOyYgVxuICAgICAqIEBwYXJhbSBheGlzXG4gICAgICogQHJldHVybnMge1Byb2plY3Rpb259XG4gICAgICovXG4gICAgcHJvamVjdChheGlzKVxuICAgIHtcbiAgICAgICAgdmFyIHNjYWxhcnMgPSBbXSxcbiAgICAgICAgICAgIHYgPSBuZXcgVmVjdG9yKCk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCggZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICB2LnggPSBwb2ludC54O1xuICAgICAgICAgICAgdi55ID0gcG9pbnQueTtcbiAgICAgICAgICAgIHNjYWxhcnMucHVzaCh2LmRvdFByb2R1Y3QoYXhpcykpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3Rpb24oTWF0aC5taW4uYXBwbHkoTWF0aCwgc2NhbGFycyksXG4gICAgICAgICAgICBNYXRoLm1heC5hcHBseShNYXRoLCBzY2FsYXJzKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstpUg6rWs7ZWY6riwIChlZGdl7JeQIOuFuOunkOydhCDstpXsnLzroZwg7ZWp64uI64ukKVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBnZXRBeGVzKClcbiAgICB7XG4gICAgICAgIHZhciB2MSA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgICAgIHYyID0gbmV3IFZlY3RvcigpLFxuICAgICAgICAgICAgYXhlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgIHYxLnggPSB0aGlzLnBvaW50c1tpXS54O1xuICAgICAgICAgICAgdjEueSA9IHRoaXMucG9pbnRzW2ldLnk7XG5cbiAgICAgICAgICAgIHYyLnggPSB0aGlzLnBvaW50c1tpKzFdLng7XG4gICAgICAgICAgICB2Mi55ID0gdGhpcy5wb2ludHNbaSsxXS55O1xuXG4gICAgICAgICAgICAvLyDrqqjshJzrpqzsl5DshJwg7IiY7KeB7J24IOuFuOunkCjrspXshKApIOuyoe2EsOulvCDrp4zrk63ri4jri6QuICjstpUg7IOd7ISxKVxuICAgICAgICAgICAgYXhlcy5wdXNoKHYxLmVkZ2UodjIpLnBlcnBlbmRpY3VsYXIoKS5ub3JtYWxpemUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2MS54ID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLng7XG4gICAgICAgIHYxLnkgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0ueTtcblxuICAgICAgICB2Mi54ID0gdGhpcy5wb2ludHNbMF0ueDtcbiAgICAgICAgdjIueSA9IHRoaXMucG9pbnRzWzBdLnk7XG5cbiAgICAgICAgLy8g66qo7ISc66as7JeQ7IScIOyImOyngeyduCDrhbjrp5Ao67KV7ISgKSDrsqHthLDrpbwg66eM65Ot64uI64ukLiAo7LaVIOyDneyEsSlcbiAgICAgICAgYXhlcy5wdXNoKHYxLmVkZ2UodjIpLnBlcnBlbmRpY3VsYXIoKS5ub3JtYWxpemUoKSk7XG4gICAgICAgIHJldHVybiBheGVzO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUGF0aChncmFwaGljcywgbGluZUNvbG9yID0gMHhGRkZGRkYpXG4gICAge1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgbGluZUNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICAgfVxuICAgICAgICBncmFwaGljcy5saW5lVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG4gICAgfVxuXG5cbiAgICBtb3ZlKGR4LCBkeSlcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICAgICAgcG9pbnQueCArPSBkeDtcbiAgICAgICAgICAgIHBvaW50LnkgKz0gZHk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGlzUG9pbnRJblBhdGgoeCwgeSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIGNvbnN0IGlzUG9pbnRJblBhdGggPSB0aGlzLmNvbnRleHQuaXNQb2ludEluUGF0aCh4LCB5KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgcmV0dXJuIGlzUG9pbnRJblBhdGg7XG4gICAgfVxuXG5cbiAgICBhZGRQb2ludCh4LCB5KVxuICAgIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQoeCwgeSkpO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnBvaW50cy5sZW5ndGggKyAnIFBvbHlnb24nO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9Qb2x5Z29uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcz85MjQxKiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0dKSy5qcz81MGMwKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFpbnRlci5qcz9lZjA2KiIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9TaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L01UVi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9Qb2x5Z29uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uS2V5VXAiLCJtcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltRnJhbWUiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJyZXNpemUiLCJlIiwia2V5Q29kZSIsIlRJTERFIiwiRVNDIiwiU1BBQ0UiLCJET1dOX0FSUk9XIiwiVVBfQVJST1ciLCJMRUZUX0FSUk9XIiwiUklHSFRfQVJST1ciLCJCQUNLX1NQQUNFIiwiY29uc29sZSIsImNsZWFyIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidGVtcCIsInZlYzIiLCJkb3QiLCJjb2VmZiIsImF0YW4yIiwiaG9yaXpvbnRhbEFuZ2xlIiwidmVydGljYWxBbmdsZSIsImhvcml6b250YWxBbmdsZURlZyIsImFuZ2xlIiwibngiLCJjb3MiLCJzaW4iLCJueSIsInJvdGF0ZSIsInJvdGF0aW9uIiwicm90YXRlVG8iLCJyb3RhdGVCeSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNxcnQiLCJkaXN0YW5jZVNxIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImxlbmd0aFNxIiwiYSIsImIiLCJ2IiwiY2xvbmUiLCJyZXQiLCJtdWx0aXBseVNjYWxhciIsImMiLCJyIiwiYWMiLCJiYyIsInZlYzEiLCJ0byIsImFkZCIsIk1vdXNlIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwicHJldlRpbWUiLCJjdXJyZW50VGltZSIsImRpZmZYIiwiZGlmZlkiLCJwbHVnaW5zIiwiaW50ZXJhY3Rpb24iLCJtb3VzZSIsInBvaW50ZXIiLCJ2YWx1ZSIsIl9yZW5kZXJlciIsIl9tb3VzZSIsIkRFU0tUT1BfTU9VU0UiLCJnbG9iYWwiLCJjdXJyZW50Q3Vyc29yU3R5bGUiLCJEYXRlIiwiZ2V0VGltZSIsIkdKSyIsInZlcnRpY2VzIiwiYXZnIiwiY291bnQiLCJpIiwiaW5kZXgiLCJtYXhQcm9kdWN0IiwiZG90UHJvZHVjdCIsInByb2R1Y3QiLCJ2ZXJ0aWNlczEiLCJ2ZXJ0aWNlczIiLCJpbmRleE9mRnVydGhlc3RQb2ludCIsImoiLCJuZWdhdGUiLCJsb2ciLCJzdHIiLCJpdGVyQ291bnQiLCJkIiwiYW8iLCJhYiIsImFicGVycCIsImFjcGVycCIsInNpbXBsZXgiLCJBcnJheSIsInBvc2l0aW9uMSIsImF2ZXJhZ2VQb2ludCIsInBvc2l0aW9uMiIsInN1cHBvcnQiLCJ0cmlwbGVQcm9kdWN0IiwicGVycGVuZGljdWxhciIsIm5vcm0iLCJwb2ludHMiLCJpMCIsIngwIiwibiIsImh1bGwiLCJtIiwiaWgiLCJpZSIsImNyb3NzIiwibmV3UG9pbnRzIiwicG9pbnQiLCJwdXNoIiwiZGVidWdWZXJ0aWNlcyIsImZvckVhY2giLCJ2ZXJ0ZXgiLCJjb25zb2xlVmVydGljZXMiLCJpc0ZpeGVkIiwiUGFpbnRlciIsInBhdGgiLCJ2MSIsInYyIiwiZGlmZiIsImNvbnZleEh1bGxQYXRoIiwiY3JlYXRlQ29udmV4SHVsbCIsImRyYXdQb2x5Z29uIiwibGluZVdpZHRoIiwiY29sb3IiLCJhbHBoYSIsImdyYXBoaWNzIiwiZyIsImxpbmVTdHlsZSIsInZlYzAiLCJtYWduaWZpY2F0aW9uIiwibW92ZVRvIiwibGluZVRvIiwic3RyaW5nIiwidGV4dCIsIlRleHQiLCJmaWxsIiwiaXNDbGVhciIsInJhZGl1cyIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwiYm91bmRzIiwidGhpY2tuZXNzIiwiZHJhd1JlY3QiLCJyZWN0IiwibHQiLCJydCIsInJiIiwibGIiLCJwMSIsInAyIiwicDAiLCJtb3ZlUG9pbnQiLCJ0b1BvaW50Iiwic2NhbGUiLCJsZWZ0IiwiaW52ZXJ0IiwicmlnaHQiLCJtZSIsInRhcmdldCIsIkdyYXBoaWNzIiwiZGVidWdHcmFwaGljcyIsInNoYXBlcyIsIkxJTkVfQ09MT1IiLCJBUlJPV19DT0xPUiIsInBvbHlnb25Qb2ludHMiLCJUZXN0IiwiaXNJbml0IiwiaW50ZXJhY3RpdmUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJtb3VzZURvd25Qb2ludCIsIlBvaW50IiwibGFzdGRyYWciLCJzaGFwZUJlaW5nRHJhZ2dlZCIsInVuZGVmaW5lZCIsImNyZWF0ZVBvbHlnb25NYW51YWwiLCJvbk1vdXNlRG93biIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib24iLCJoaXRBcmVhIiwiUmVjdGFuZ2xlIiwidHgiLCJ0eSIsInRvUmFkaWFuIiwiZGVncmVlIiwidXNlUmFuZG9tUm90YXRlIiwicG9seWdvbiIsImFkZFBvaW50Iiwicm90YXRlU2hhcGUiLCJjcmVhdGVQYXRoIiwiZGlhbWV0ZXIiLCJzcGFjZSIsImdldFBvbHlnb25Qb2ludHMiLCJhZGRDaXJjbGUiLCJjcmVhdGVQb2x5Z29uIiwiY2lyY2xlIiwiZHJhZ1NoYXBlIiwic2hhcGUiLCJtdHYiLCJjb2xsaWRlc1dpdGgiLCJjb2xsaXNpb25EZXRlY3RlZCIsIm1vdmVTaGFwZUJ5TVRWIiwiYXhpcyIsIm92ZXJsYXAiLCJjb2xsaWRlciIsImNvbGxpZGVlIiwiY29sbGlkZXJDZW50ZXIiLCJmcm9tT2JqZWN0IiwiZ2V0Q2VudGVyIiwiY29sbGlkZWVDZW50ZXIiLCJjZW50ZXJWZWN0b3IiLCJjZW50ZXJVbml0VmVjdG9yIiwiZHJhZ1ZlY3RvciIsImNlbnRlckNvbGxpZGVyIiwiY2VudGVyQ29sbGlkZWUiLCJkaXJlY3Rpb25Ob3JtIiwib3ZlcmxhcFZlY3RvciIsInRvTm9ybWFsaXplIiwiZG90VG8iLCJjZW50ZXIiLCJkcmF3QXJyb3ciLCJtb3ZlIiwicm90YXRpb25Qb2ludCIsInBpdm90IiwiZGlzdCIsImNhIiwibmEiLCJpc1BvaW50SW5QYXRoIiwiZGV0ZWN0Q29sbGlzaW9ucyIsInVwZGF0ZVJlbmRlciIsIkVTQ0FQRSIsIk5VTUJFUl8xIiwiTlVNQkVSXzIiLCJDaXJjbGUiLCJuYW1lIiwicG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZSIsImNpcmNsZUNvbGxpZGVzV2l0aENpcmNsZSIsIk51bWJlciIsIk1BWF9WQUxVRSIsImNpcmNsZVZlY3RvciIsInRlc3RQb2ludFZlY3RvciIsImNsb3Nlc3RQb2ludCIsImRpc3RhbmNlIiwic3VyZmFjZVZlY3RvciIsImRyYXdQb2ludCIsInNjYWxhcnMiLCJwb2ludFZlY3RvciIsImFwcGx5IiwibGluZUNvbG9yIiwiYXJjIiwic2F2ZSIsImJlZ2luUGF0aCIsInJlc3RvcmUiLCJTaGFwZSIsImF4ZXMiLCJtaW5pbXVtT3ZlcmxhcCIsImF4aXNXaXRoU21hbGxlc3RPdmVybGFwIiwicHJvamVjdGlvbjEiLCJwcm9qZWN0aW9uMiIsInByb2plY3QiLCJnZXRPdmVybGFwIiwibXR2MSIsIm1pbmltdW1UcmFuc2xhdGlvblZlY3RvciIsImdldEF4ZXMiLCJtdHYyIiwiYzEiLCJjMiIsInBvdyIsImdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZSIsImdldENpcmNsZUF4aXMiLCJjb25jYXQiLCJzZXBhcmF0aW9uT25BeGVzIiwib3ZlcmxhcHMiLCJNVFYiLCJQcm9qZWN0aW9uIiwicHJvamVjdGlvbiIsIlBvbHlnb24iLCJwb2ludFN1bSIsInBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uIiwiZWRnZSIsImNsb3NlUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVDLGNBQVk7QUFDVEEsWUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGFBQU1DLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0gsTUFGRDtBQUdILEVBSkEsR0FBRDs7QUFNQSxLQUFJQyxlQUFKO0FBQUEsS0FBWUMsaUJBQVo7QUFBQSxLQUFzQkMsY0FBdEI7QUFBQSxLQUE2QkMsYUFBN0I7QUFBQSxLQUFtQ0Ms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bHlmaWxsJztcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuaW1wb3J0IE1vdXNlIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvTW91c2VcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiAgICB9XG59KCkpO1xuXG5sZXQgY2FudmFzLCByZW5kZXJlciwgc3RhZ2UsIHRlc3QsIGNvbnRhaW5lcjtcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIHtcbiAgICAgICAgICAgIHZpZXc6IGNhbnZhcyxcbiAgICAgICAgICAgIGF1dG9SZXNpemU6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MzMzODNEXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1vdXNlLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgLy8g7JyE7LmY6rCAIOygleyImOqwgCDslYTri5Dqsr3smrAg7Z2Q66a/7ZWY6rKMIOuztOydtOuKlCDrrLjsoJzqsIAg7J6I7Ja0XG4gICAgICAgIC8vIOugjOuNlOufrOydmCDsnITsuZjrpbwg7KCV7IiY66GcIOyXsOyCsOuQoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cbiAgICAgICAgLy9yZW5kZXJlci5yb3VuZFBpeGVscyA9IHRydWU7XG5cbiAgICAgICAgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGVzdCA9IG5ldyBUZXN0KHJlbmRlcmVyKTtcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGVzdCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVMb29wKCk7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZVdpbmRvdygpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxvb3AgKG1zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1zKTtcbiAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG1zKSB7XG4gICAgICAgIHRlc3QudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzdGFnZSk7XG4gICAgfVxuXG4gICAgcmVzaXplV2luZG93KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDsupTrsoTsiqQg7IKs7J207KaI7JmAIOuUlOyKpO2UjOugiOydtCDsgqzsnbTspogg7ISk7KCVXG4gICAgICAgICAqIOugiO2LsOuCmCDqt7jrnpjtlL0g7KeA7JuQIOy9lOuTnFxuICAgICAgICAgKi9cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBJWEkgcmVuZGVyZXIg66as7IKs7J207KaIXG4gICAgICAgICAqIFBJWEkg7JeQ6rKMIHZpZXdwb3J0IOyCrOydtOymiCDrs4Dqsr0g7JWM66a8XG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIHRlc3QucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVVwIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVElMREU6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRPV05fQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VUF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkxFRlRfQVJST1c6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SSUdIVF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkJBQ0tfU1BBQ0U6XG4gICAgICAgICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3Qvc2F0L2luZGV4LmpzIiwiXG5cbmNvbnN0IGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5cbmZ1bmN0aW9uIHJhbmRvbSAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn1cblxuZnVuY3Rpb24gcmFkaWFuMmRlZ3JlZXMgKHJhZCkge1xuICAgIHJldHVybiByYWQgKiBkZWdyZWVzO1xufVxuXG5mdW5jdGlvbiBkZWdyZWVzMnJhZGlhbiAoZGVnKSB7XG4gICAgcmV0dXJuIGRlZyAvIGRlZ3JlZXM7XG59XG5cblxuLyoqXG4gKiBWaWN0b3IuanPrpbwgRVM266GcIOuzgO2ZmO2VmOyXrCDsgqzsmqntlZjqs6Ag7J6I7Iq164uI64ukLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21heGt1ZW5nL3ZpY3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JcbntcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gYXJyYXlcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IFZlY3Rvci5mcm9tQXJyYXkoWzQyLCAyMV0pO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gICAgICpcbiAgICAgKiBAbmFtZSBWZWN0b3IuZnJvbUFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgd2l0aCB0aGUgeCBhbmQgeSB2YWx1ZXMgYXQgaW5kZXggMCBhbmQgMSByZXNwZWN0aXZlbHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYXJyWzBdIHx8IDAsIGFyclsxXSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3RcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IFZlY3Rvci5mcm9tT2JqZWN0KHsgeDogNDIsIHk6IDIxIH0pO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gICAgICpcbiAgICAgKiBAbmFtZSBWZWN0b3IuZnJvbU9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHdpdGggdGhlIHZhbHVlcyBmb3IgeCBhbmQgeVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21PYmplY3Qob2JqKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3Iob2JqLnggfHwgMCwgb2JqLnkgfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci4gV2lsbCBhbHNvIHdvcmsgd2l0aG91dCB0aGUgYG5ld2Aga2V5d29yZFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gVmVjdG9yKDQyLCAxMzM3KTtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IFZhbHVlIG9mIHRoZSB4IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSBWYWx1ZSBvZiB0aGUgeSBheGlzXG4gICAgICogQHJldHVybiB7VmVjdG9yfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKVxuICAgIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBYIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjMwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFkgYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjMwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCArIGIueCwgYS55ICsgYi55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gYm90aCB2ZWN0b3IgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMywgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMywgeTogMlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWSgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBYIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFkgYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3QodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc3VidHJhY3QoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAtIGIueCwgYS55IC0gYi55KTtcbiAgICB9XG5cblxuICAgIGVkZ2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3QodmVjKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBlZGdlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gVmVjdG9yLnN1YnRyYWN0KGEsIGIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhcigyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiA4MCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWCgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiA4MCwgeTogMjAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclkoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMTAwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgeCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlWCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSB5IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlWSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgLz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IGEgYXhpcyB2YWx1ZXMgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGUodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgLz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRpdmlkZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC8gYi54LCBhLnkgLyBiLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclgoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWSgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRYKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4Oi0xMDAsIHk6NTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFgoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WSgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6LTUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRZKClcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0KCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4Oi0xMDAsIHk6LTUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pbnZlcnRYKCk7XG4gICAgICAgIHRoaXMuaW52ZXJ0WSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBuZWdhdGUodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgdiA9IHZlYy5jbG9uZSgpO1xuICAgICAgICB2LnggPSAtdmVjLng7XG4gICAgICAgIHYueSA9IC12ZWMueTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFggYXhpcyBieSBYIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBZIGF4aXMgYnkgWSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB2YWx1ZXMgZnJvbSBhIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtdWx0aXBseVNjYWxhcih2ZWN0b3IsIHNjYWxhcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogc2NhbGFyLCB2ZWN0b3IueSAqIHNjYWxhcik7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlU2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggLyBzY2FsYXIsIHZlY3Rvci55IC8gc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICg5MCDrj4Qg7ZqM7KCEKVxuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgcGVycGVuZGljdWxhcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHBlcnBlbmRpY3VsYXIodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUueCA9IC12ZWMueTtcbiAgICAgICAgY2xvbmUueSA9IHZlYy54O1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsiJjsp4Eg67Kh7YSwIOyDneyEsSAoLTkwIOuPhCDtmozsoIQpXG4gICAgICovXG4gICAgcmV0dXJuUGVycGVuZGljdWxhcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnksIC10aGlzLngpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJldHVyblBlcnBlbmRpY3VsYXIodmVjKVxuICAgIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUueCA9IHZlYy55O1xuICAgICAgICBjbG9uZS55ID0gLXZlYy54O1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrsoTrprxcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHBhcmFtIGxlbmd0aFxuICAgICAqL1xuICAgIHN0YXRpYyB0cnVuY2F0ZSh2ZWMsIGxlbmd0aClcbiAgICB7XG4gICAgICAgIGNvbnN0IHJldCA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBsZW5ndGhTcSA9IHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgICAgICBpZiAobGVuZ3RoU3EgPiBsZW5ndGggKiBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldC5tdWx0aXBseVNjYWxhcihsZW5ndGggLyBNYXRoLnNxcnQobGVuZ3RoU3EpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXplXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBub3JtYWxpemUoKVxuICAgIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAxO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGl2aWRlKG5ldyBWZWN0b3IobGVuZ3RoLCBsZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG5vcm0oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgYWJzb2x1dGUgdmVjdG9yIGF4aXMgaXMgZ3JlYXRlciB0aGFuIGBtYXhgLCBtdWx0aXBsaWVzIHRoZSBheGlzIGJ5IGBmYWN0b3JgXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5saW1pdCg4MCwgMC45KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6OTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggVGhlIG1heGltdW0gdmFsdWUgZm9yIGJvdGggeCBhbmQgeSBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZhY3RvciBGYWN0b3IgYnkgd2hpY2ggdGhlIGF4aXMgYXJlIHRvIGJlIG11bHRpcGxpZWQgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxpbWl0KG1heCwgZmFjdG9yKVxuICAgIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueCkgPiBtYXgpeyB0aGlzLnggKj0gZmFjdG9yOyB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnkpID4gbWF4KXsgdGhpcy55ICo9IGZhY3RvcjsgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWl6ZXMgYm90aCB2ZWN0b3IgYXhpcyB3aXRoIGEgdmFsdWUgYmV0d2VlbiAyIHZlY3RvcnNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnJhbmRvbWl6ZShuZXcgVmVjdG9yKDUwLCA2MCksIG5ldyBWZWN0b3IoNzAsIDgwYCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo2NywgeTo3M1xuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICByYW5kb21pemUodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCksIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCkpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdGhpcy54ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHJldHVybiByYW5kb20obWluLCBtYXgpO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdGhpcy55ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHJldHVybiByYW5kb20obWluLCBtYXgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9tbHkgcmFuZG9taXplcyBlaXRoZXIgYXhpcyBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplQW55KG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Ojc3XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZUFueSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIGlmICghISBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYW4gaW50ZWdlciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAuMiwgNTAuOSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB1bmZsb2F0KClcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYSBjZXJ0YWluIHByZWNpc2lvblxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAuMiwgNTAuOSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gUHJlY2lzaW9uIChkZWZhdWx0OiA4KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvRml4ZWQocHJlY2lzaW9uKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVjaXNpb24gPT09ICd1bmRlZmluZWQnKSB7IHByZWNpc2lvbiA9IDg7IH1cbiAgICAgICAgdGhpcy54ID0gdGhpcy54LnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55LnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFggYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXhYKHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjE1MCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXhYKHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSAoMSAtIGFtb3VudCkgKiB0aGlzLnggKyBhbW91bnQgKiB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFkgYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXhZKHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxNTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXhZKHZlYywgYW1vdW50KVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnkgPSAoMSAtIGFtb3VudCkgKiB0aGlzLnkgKyBhbW91bnQgKiB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEubWl4KHZlYzIsIDAuNSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjE1MCwgeToxNTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtaXgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICB0aGlzLm1peFgodmVjLCBhbW91bnQpO1xuICAgICAgICB0aGlzLm1peFkodmVjLCBhbW91bnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICMgUHJvZHVjdHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNsb25lKCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjEwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IEEgY2xvbmUgb2YgdGhlIHZlY3RvclxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY2xvbmUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WCh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFkgY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMjApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGFuZCBZIGNvbXBvbmVudHMgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5KHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLmNvcHlYKHZlYyk7XG4gICAgICAgIHRoaXMuY29weVkodmVjKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2ZWN0b3IgdG8gemVybyAoMCwwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKlx0XHQgdmFyMS56ZXJvKCk7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDowLCB5OjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHplcm8oKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgdmVjdG9yIHRvIHRoZSBsZWZ0LWhhbmRlZCBub3JtYWwgb2YgdGhpcyB2ZWN0b3IuXG4gICAgICogQHJldHVybiB7VmVjdG9yfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldExlZnRIYW5kT3J0aG9nb25hbFZlY3RvcigpXG4gICAgICovXG4gICAgbGVmdCgpXG4gICAge1xuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IC10ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIHJpZ2h0LWhhbmRlZCBub3JtYWwgb2YgdGhpcyB2ZWN0b3IuXG4gICAgICogQHJldHVybiB7QGxpbmsgVmVjdG9yMn0gdGhpcyB2ZWN0b3JcbiAgICAgKiBAc2VlICNnZXRSaWdodEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICByaWdodCgpXG4gICAge1xuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSAtdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSB0ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRvdCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMjMwMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERvdCBwcm9kdWN0XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkb3QodmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2ZWMyLnggKyB0aGlzLnkgKiB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICBkb3RQcm9kdWN0KHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRvdFByb2R1Y3QoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG4gICAgfVxuXG5cbiAgICBjcm9zcyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKiB2ZWMyLnkpIC0gKHRoaXMueSAqIHZlYzIueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3Jvc3MoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnkgLSBhLnkgKiBiLng7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20va3JvaXRvci9namsuY1xuICAgICAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RyaXBsZV9wcm9kdWN0I1ZlY3Rvcl90cmlwbGVfcHJvZHVjdFxuICAgICAqIOyEuOq3uOuovO2KuOyXkOyEnCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuwqe2WpeydhCDssL7snYQg65WMIOyCrOyaqVxuICAgICAqL1xuICAgIHN0YXRpYyB0cmlwbGVQcm9kdWN0KGEsIGIsIGMpXG4gICAge1xuICAgICAgICBjb25zdCByID0gbmV3IFZlY3RvcigpO1xuICAgICAgICBjb25zdCBhYyA9IGEueCAqIGMueCArIGEueSAqIGMueSAgICAvLyBwZXJmb3JtIGEuZG90KGMpXG4gICAgICAgICAgICAsIGJjID0gYi54ICogYy54ICsgYi55ICogYy55OyAgIC8vIHBlcmZvcm0gYi5kb3QoYylcblxuICAgICAgICAvLyBwZXJmb3JtIGIgKiBhLmRvdChjKSAtIGEgKiBiLmRvdChjKVxuICAgICAgICByLnggPSBiLnggKiBhYyAtIGEueCAqIGJjO1xuICAgICAgICByLnkgPSBiLnkgKiBhYyAtIGEueSAqIGJjO1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHJvamVjdHMgYSB2ZWN0b3Igb250byBhbm90aGVyIHZlY3Rvciwgc2V0dGluZyBpdHNlbGYgdG8gdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucHJvamVjdE9udG8odmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gcHJvamVjdCB0aGlzIHZlY3RvciBvbnRvXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcHJvamVjdE9udG8odmVjMilcbiAgICB7XG4gICAgICAgIHZhciBjb2VmZiA9ICggKHRoaXMueCAqIHZlYzIueCkrKHRoaXMueSAqIHZlYzIueSkgKSAvICgodmVjMi54KnZlYzIueCkrKHZlYzIueSp2ZWMyLnkpKTtcbiAgICAgICAgdGhpcy54ID0gY29lZmYgKiB2ZWMyLng7XG4gICAgICAgIHRoaXMueSA9IGNvZWZmICogdmVjMi55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyEoO2YlSDrs7TqsIRcbiAgICAgKiBodHRwOi8vZGV2ZWxvcHVnLmJsb2dzcG90LmNvbS8yMDE0LzA5L3VuaXR5LXZlY3Rvci1sZXJwLmh0bWxcbiAgICAgKiBAcGFyYW0gdmVjMVxuICAgICAqIEBwYXJhbSB2ZWMyXG4gICAgICogQHBhcmFtIHRvXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgbGVycCh2ZWMxLCB2ZWMyLCB0bykge1xuICAgICAgICByZXR1cm4gVmVjdG9yLmFkZChWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMSwgMSAtIHRvKSwgVmVjdG9yLm11bHRpcGx5U2NhbGFyKHZlYzIsIHRvKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog7Jet7IiYXG4gICAgICogQHBhcmFtIHZlY3RvclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3J9XG4gICAgICovXG4gICAgc3RhdGljIHJjcCh2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMSAvIHZlY3Rvci54LCAxIC8gdmVjdG9yLnkpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy5ob3Jpem9udGFsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMudmVydGljYWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgYW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlRGVnKCk7XG4gICAgfVxuXG5cbiAgICBkaXJlY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICByb3RhdGUoYW5nbGUpXG4gICAge1xuICAgICAgICB2YXIgbnggPSAodGhpcy54ICogTWF0aC5jb3MoYW5nbGUpKSAtICh0aGlzLnkgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICB2YXIgbnkgPSAodGhpcy54ICogTWF0aC5zaW4oYW5nbGUpKSArICh0aGlzLnkgKiBNYXRoLmNvcyhhbmdsZSkpO1xuXG4gICAgICAgIHRoaXMueCA9IG54O1xuICAgICAgICB0aGlzLnkgPSBueTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHJvdGF0ZURlZyhhbmdsZSlcbiAgICB7XG4gICAgICAgIGFuZ2xlID0gZGVncmVlczJyYWRpYW4oYW5nbGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG8ocm90YXRpb24pXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUocm90YXRpb24tdGhpcy5hbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvRGVnKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZVRvKHJvdGF0aW9uKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZUJ5KHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gdGhpcy5hbmdsZSgpICsgcm90YXRpb247XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZUJ5RGVnKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZUJ5KHJvdGF0aW9uKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBYIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gLTEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54IC0gdmVjLng7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVgoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFic0Rpc3RhbmNlWCh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWCh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBZIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gLTEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgLSB2ZWMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWSgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVkodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDAuNDk4NzU2MjExMjA4OVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxKHZlYykpO1xuICAgIH1cblxuXG4gICAgZ2V0TWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbigpO1xuICAgIH1cblxuXG4gICAgZ2V0TWFnbml0dWRlU3F1YXJlZCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlU3EodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VTcSh2ZWMpXG4gICAge1xuICAgICAgICB2YXIgZHggPSB0aGlzLmRpc3RhbmNlWCh2ZWMpLFxuICAgICAgICAgICAgZHkgPSB0aGlzLmRpc3RhbmNlWSh2ZWMpO1xuXG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvciBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGVuZ3RoKCk7XG4gICAgICogICAgIC8vID0+IDExMS44MDMzOTg4NzQ5ODk0OFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aCgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoU3EoKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6jsiJztnogg6ri47J20IOu5hOq1kOulvCDtlZjroKTrqbQgbGVuZ3RoIOulvCDsgqzsmqntlZjquLAg67O064uk64qUIGxlbmd0aFNxIOulvCDsgqzsmqntlZjqsowg67mg66W064ukLlxuICAgICAqIGxlbmd0aCDripQgTWF0aC5zcXJ0ICjsoJzqs7Hqt7wpIOyymOumrOulvCDtlZjquLAg65WM66y47JeQIOuLqOyInCDquLjsnbQg67mE6rWQ7IucIGxlbmd0aFNxIOulvCDsgqzsmqntlZjripQg6rKD7J20IOu5oOumheuLiOuLpC5cbiAgICAgKiBTcXVhcmVkIGxlbmd0aCAvIG1hZ25pdHVkZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGVuZ3RoU3EoKTtcbiAgICAgKiAgICAgLy8gPT4gMTI1MDBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGhTcSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIGxlbmd0aFNxKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHZlYy54ICsgdmVjLnkgKiB2ZWMueTtcbiAgICB9XG5cblxuICAgIG1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGgoKTtcbiAgICB9XG5cblxuICAgIHRvKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlYy54IC0gdGhpcy54LCB2ZWMueSAtIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBzZXQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cnVlIGlmIHZlY3RvciBpcyAoMCwgMClcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZlYy56ZXJvKCk7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzWmVybygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSAwICYmIHRoaXMueSA9PT0gMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cnVlIGlmIHRoaXMgdmVjdG9yIGlzIHRoZSBzYW1lIGFzIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZlYzEuaXNFcXVhbFRvKHZlYzIpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc0VxdWFsVG8odmVjMilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IHZlYzIueCAmJiB0aGlzLnkgPT09IHZlYzIueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICMgVXRpbGl0eSBNZXRob2RzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIHJldHVybiAneDonICsgdGhpcy54ICsgJywgeTonICsgdGhpcy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvQXJyYXkoKTtcbiAgICAgKiAgICAgLy8gPT4gWzEwLCAyMF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9BcnJheSgpXG4gICAge1xuICAgICAgICByZXR1cm4gWyB0aGlzLngsIHRoaXMueSBdO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b09iamVjdCgpO1xuICAgICAqICAgICAvLyA9PiB7IHg6IDEwLCB5OiAyMCB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b09iamVjdCgpXG4gICAge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WZWN0b3IuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZVxue1xuICAgIHN0YXRpYyBnZXQgREVTS1RPUF9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTU9CSUxFX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQSVhJLkFwcGxpY2F0aW9uLnJlbmRlcmVyXG4gICAgICog656c642U65+s7JeQ7IScIGludGVyYWN0aW8g6rCd7LK066W8IOywuOyhsO2VoCDsiJgg7J6I7Ja07IScIOyCrOyaqe2VmOugpOuptCDroIzrjZTrn6zrpbwg7IWL7YyF7ZW07JW8IO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmFsdWUge1BJWEkuV2ViR0xSZW5kZXJyZXJ8UElYSS5DYW52YXNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IHJlbmRlcmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrqqjrsJTsnbwg64yA7J2R7J2EIOychO2VtOyEnFxuICAgICAqIFBDIOuyhOyghOyXkOyEnOuKlCBtb3VzZSDqsJ3ssrTrpbwsIOuqqOuwlOydvCDrsoTsoITsl5DshJzripQgcG9pbnRlciDqsJ3ssrTrpbwg7IWL7YyF7ZWY66m0XG4gICAgICogZ2xvYmFsIOqwneyytOyXkOyEnCDssLjsobDtlbTshJwg7KKM7ZGc6rCS7J2EIOyghOuLrO2VmOuPhOuhnSDtlanri4jri6QuXG4gICAgICpcbiAgICAgKiDrp4zslb0g7ISk7KCV7ZWY7KeAIOyViuycvOuptCDquLDrs7ggUEPrp4wg64yA7J2R7ZWY64+E66GdIG1vdXNlIOqwneyytOulvCDshKTsoJXtlanri4jri6QuXG4gICAgICpcbiAgICAgKiBEZXNrdG9wIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZVxuICAgICAqIE1vYmlsZSA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlclxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgbW91c2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbW91c2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBtb3VzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3VzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2UgPSB0aGlzLkRFU0tUT1BfTU9VU0U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdXNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBnbG9iYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzZXQgY3VycmVudEN1cnNvclN0eWxlKHZhbHVlKSB7XG4gICAgICAgIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgY3VycmVudEN1cnNvclN0eWxlKCkge1xuICAgICAgICByZXR1cm4gTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsnbTrj5kg6rGw66as6rCAIDVweCDsnbTtlZjsnbTqs6AgNTAwbXMg7JWI7JeQIOuRkOuyiCDtgbTrpq3tlZjrqbQg642U67iUIO2BtOumreycvOuhnCDsnbjsoJVcbiAgICAgKiBAcGFyYW0gcHJldlBvaW50IOydtOyghOyijO2RnFxuICAgICAqIEBwYXJhbSBjdXJyZW50UG9pbnQg7ZiE7J6s7KKM7ZGcXG4gICAgICogQHBhcmFtIHByZXZUaW1lIOydtOyghCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHBhcmFtIGN1cnJlbnRUaW1lIO2YhOyerCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOuNlOu4lCDtgbTrpq0g7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGlzRG91YmxlQ2xpY2socHJldlBvaW50LCBjdXJyZW50UG9pbnQsIHByZXZUaW1lLCBjdXJyZW50VGltZSkge1xuICAgICAgICB2YXIgZGlmZlggPSBjdXJyZW50UG9pbnQueCAtIHByZXZQb2ludC54O1xuXG4gICAgICAgIGlmIChkaWZmWCA8IDApIHtcbiAgICAgICAgICAgIGRpZmZYID0gZGlmZlggKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaWZmWSA9IGN1cnJlbnRQb2ludC55IC0gcHJldlBvaW50Lnk7XG5cbiAgICAgICAgaWYgKGRpZmZZIDwgMCkge1xuICAgICAgICAgICAgZGlmZlkgPSBkaWZmWSAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZmZYID4gNSB8fCBkaWZmWSA+IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIHByZXZUaW1lID4gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvTW91c2UuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG4vKipcbiAqIEdKSyBBbGdvcml0aG0gKEdpbGJlcnQtSm9obnNvbi1LZWVydGhpKVxuICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAqIGh0dHA6Ly93d3cuZHluNGoub3JnLzIwMTAvMDQvZ2prLWdpbGJlcnQtam9obnNvbi1rZWVydGhpLyNnamstdG9wXG4gKiBodHRwczovL3d3dy5oYXJvbGRzZXJyYW5vLmNvbS9ibG9nL3Zpc3VhbGl6aW5nLXRoZS1namstY29sbGlzaW9uLWFsZ29yaXRobVxuICogaHR0cHM6Ly9naXRodWIuY29tL2p1aGwvY29sbGlzaW9uLWRldGVjdGlvbi0yZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHSktcbntcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRvIGNvbXB1dGUgYXZlcmFnZSBjZW50ZXIgKHJvdWdobHkpLiBJdCBtaWdodCBiZSBkaWZmZXJlbnQgZnJvbVxuICAgICAqIENlbnRlciBvZiBHcmF2aXR5LCBlc3BlY2lhbGx5IGZvciBib2RpZXMgd2l0aCBub251bmlmb3JtIGRlbnNpdHksXG4gICAgICogYnV0IHRoaXMgaXMgb2sgYXMgaW5pdGlhbCBkaXJlY3Rpb24gb2Ygc2ltcGxleCBzZWFyY2ggaW4gR0pLXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUgdmVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIGF2ZXJhZ2VQb2ludCh2ZXJ0aWNlcylcbiAgICB7XG4gICAgICAgIGNvbnN0IGF2ZyA9IG5ldyBWZWN0b3IoKVxuICAgICAgICAgICAgLCBjb3VudCA9IHZlcnRpY2VzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGF2Zy54ICs9IHZlcnRpY2VzW2ldLng7XG4gICAgICAgICAgICBhdmcueSArPSB2ZXJ0aWNlc1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgYXZnLnggLz0gY291bnQ7XG4gICAgICAgIGF2Zy55IC89IGNvdW50O1xuXG4gICAgICAgIHJldHVybiBhdmc7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgZnVydGhlc3QgdmVydGV4IGFsb25nIGEgY2VydGFpbiBkaXJlY3Rpb25cbiAgICAgKiDqvK3sp4DsoJDqs7wg67Cp7Zal7J2EIOyghOuLrO2VmOuptCDrgrTsoIEgKO2IrOyYgSnsnYQg7Ya17ZW0IOy1nOuMgOuhnCDrqLwg7KKM7ZGc7J2YIOyduOuNseyKpOulvCDrsJjtmZjtlanri4jri6QuXG4gICAgICogQHBhcmFtIHZlcnRpY2VzIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUgdmVjdG9yXG4gICAgICovXG4gICAgc3RhdGljIGluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgbWF4UHJvZHVjdCA9IFZlY3Rvci5kb3RQcm9kdWN0KGRpcmVjdGlvbiwgdmVydGljZXNbMF0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBjb3VudCA9IHZlcnRpY2VzLmxlbmd0aDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2R1Y3QgPiBtYXhQcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgbWF4UHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTWlua293c2tpIHN1bSBzdXBwb3J0IGZ1bmN0aW9uIGZvciBHSktcbiAgICAgKiDsp4Dsm5Ag7ZWo7IiY7JeQ7IScIO2PtOumrOqzpOydmCDtj6zsnbjtirjsmYAg67Cp7Zal7Jy866GcIOyEnOuhnCDri6Trpbgg67Cp7Zal7J2YIOygkOydhCDqtaztlZjqs6AgTWlua293c2tpIERpZmZlcmVuY2Ug66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmVydGljZXMxIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMiB7VmVjdG9yW119IO2PtOumrOqzpCB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24ge1ZlY3Rvcn0g67Cp7ZalIOuyoe2EsFxuICAgICAqL1xuICAgIHN0YXRpYyBzdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2YgZmlyc3QgYm9keSBhbG9uZyBhbiBhcmJpdHJhcnkgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMSwgZGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2Ygc2Vjb25kIGJvZHkgYWxvbmcgdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBqID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczIsIFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihkaXJlY3Rpb24sIHRydWUpLCAnaTonICsgc3RyKHZlcnRpY2VzMVtpXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKFZlY3Rvci5uZWdhdGUoZGlyZWN0aW9uKSwgdHJ1ZSksICdqOicgKyBzdHIodmVydGljZXMyW2pdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdXBwb3J0KCcgKyBzdHIoVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKSkgKyAnKScpO1xuICAgICAgICAvLyBzdWJ0cmFjdCAoTWlua293c2tpIHN1bSkgdGhlIHR3byBwb2ludHMgdG8gc2VlIGlmIGJvZGllcyAnb3ZlcmxhcCdcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIHZlcnRpY2VzMiB7VmVjdG9yW119XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOy2qeuPjCDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hlY2tDb2xsaXNpb24odmVydGljZXMxLCB2ZXJ0aWNlczIpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpO1xuXG4gICAgICAgIGxldCBpdGVyQ291bnQgPSAwLCBpbmRleCA9IDA7ICAgLy8gaW5kZXggb2YgY3VycmVudCB2ZXJ0ZXggb2Ygc2ltcGxleFxuICAgICAgICBsZXQgYSwgYiwgYywgZCwgYW8sIGFiLCBhYywgYWJwZXJwLCBhY3BlcnAsIHNpbXBsZXggPSBuZXcgQXJyYXkoMyk7XG5cbiAgICAgICAgLy8g65GQIO2PtOumrOqzpCDspJHsi6wg7KKM7ZGc66W8IO2Gte2VtOyEnCDrsKntlqXsnYQg6rWs7ZWp64uI64ukLlxuICAgICAgICBjb25zdCBwb3NpdGlvbjEgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczEpOyAvLyBub3QgYSBDb0cgYnV0XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uMiA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMik7IC8vIGl0J3Mgb2sgZm9yIEdKSyApXG5cbiAgICAgICAgLy8gaW5pdGlhbCBkaXJlY3Rpb24gZnJvbSB0aGUgY2VudGVyIG9mIDFzdCBib2R5IHRvIHRoZSBjZW50ZXIgb2YgMm5kIGJvZHlcbiAgICAgICAgLy8g67Cp7ZalIHZlY3RvclxuICAgICAgICBkID0gVmVjdG9yLnN1YnRyYWN0KHBvc2l0aW9uMSwgcG9zaXRpb24yKTtcblxuICAgICAgICAvLyBpZiBpbml0aWFsIGRpcmVjdGlvbiBpcyB6ZXJvIOKAkyBzZXQgaXQgdG8gYW55IGFyYml0cmFyeSBheGlzICh3ZSBjaG9vc2UgWClcbiAgICAgICAgaWYgKChkLnggPT0gMCkgJiYgKGQueSA9PSAwKSkge1xuICAgICAgICAgICAgZC54ID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBzdXBwb3J0IGFzIGluaXRpYWwgcG9pbnQgb2YgdGhlIG5ldyBzaW1wbGV4XG4gICAgICAgIGEgPSBzaW1wbGV4WzBdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RyKGEpLCBzdHIoZCwgdHJ1ZSksIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpLnRvRml4ZWQoMikpO1xuXG4gICAgICAgIC8vIHN1cHBvcnQg7KCQ6rO8IOuwqe2WpeydtCDqsJnsnYAg67Cp7Zal7J20IOyVhOuLkCDqsr3smrBcbiAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpIDw9IDApIHtcbiAgICAgICAgICAgIC8vIOuniOyngOunieyXkCDstpTqsIAg65CcIOygkOydtCBk7J2YIOuwqe2WpeycvOuhnCDsm5DsoJDsnYQg7KeA64KY7LmY7KeAIOyViuydgCDqsr3smrBcbiAgICAgICAgICAgIC8vIOq3uCDri6TsnYwgTWlua293c2tpIO2VqeydgCDsm5DsoJDsnYQg7Y+s7ZWoIO2VoCDsiJgg7JeG7Iq164uI64ukLlxuICAgICAgICAgICAgLy8g7LaU6rCAIOuQnCDrp4jsp4Drp4kg7KCQ7J2AIE1pbmtvd3NraSBEaWZmZXJlbmNl7J2YIOqwgOyepeyekOumrOyXkCDsnojsirXri4jri6QuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ0FTRTFbJywgJ05PJywgJ10nKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgIH1cblxuICAgICAgICBkID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gVGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBhbHdheXMgdG93YXJkcyB0aGUgb3JpZ2luLCBzbyB0aGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIG5lZ2F0ZShhKVxuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpdGVyQ291bnQrKztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlckNvdW50KTtcblxuICAgICAgICAgICAgYSA9IHNpbXBsZXhbKytpbmRleF0gPSB0aGlzLnN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuXG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0FTRTJbJywgJ05PJywgJ10nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBh6rCAIOybkOygkOycvOuhnCDtlqXtlZjripQg67Kh7YSw64qUIC1hIOulvCDtlZjrqbQg65Cp64uI64ukLlxuICAgICAgICAgICAgYW8gPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gT3JpZ2luIGlzIGp1c3QgbmVnYXRpdmUgQVxuXG4gICAgICAgICAgICAvLyBzaW1wbGV4IGhhcyAyIHBvaW50cyAoYSBsaW5lIHNlZ21lbnQsIG5vdCBhIHRyaWFuZ2xlIHlldClcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDIpIHtcblxuICAgICAgICAgICAgICAgIGIgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgICAgIGFiID0gVmVjdG9yLnN1YnRyYWN0KGIsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQlxuICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYW8sIGFiKTsgLy8gbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG5cbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmxlbmd0aFNxKGQpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBWZWN0b3IucGVycGVuZGljdWxhcihhYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBza2lwIHRvIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGIgPSBzaW1wbGV4WzFdO1xuICAgICAgICAgICAgYyA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgIGFjID0gVmVjdG9yLnN1YnRyYWN0KGMsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQ1xuXG4gICAgICAgICAgICAvL2Fj7JmAIOyImOyngVxuICAgICAgICAgICAgYWNwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFjLCBhYyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJywgYSwgJ2InLCBiLCAnYycsIGMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FvJywgYW8sICdhYicsIGFiLCAnYWMnLCBhYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWNwZXJwJywgYWNwZXJwLCBhY3BlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdFByb2R1Y3QoYWNwZXJwLCBhbyknLCBWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSk7XG5cbiAgICAgICAgICAgIC8vIGFjIOyImOyngSDshKDrtoTsnbQgYeqwgCDsm5DsoJDsnYQg7Zal7ZWY64qUIOuwqe2WpSDrsJjrjIDtjrjsl5Ag7J6I6rOgXG4gICAgICAgICAgICAvLyDspoksIGFjIOyImOyngSDshKDrtoQg7JWI7Kq97JeQIOybkOygkOydtCDsnojsnLzrqbRcbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZCA9IGFjcGVycDsgLy8gbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUMgdG93YXJkcyBPcmlnaW4nLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoRcbiAgICAgICAgICAgICAgICBhYnBlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYywgYWIsIGFiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWJwZXJwJywgYWJwZXJwLCBhYnBlcnAuY2xvbmUoKS5ub3JtKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFicGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWIg7IiY7KeBIOyEoOu2hOydtCDsm5DsoJAg67CY64yAIOuwqe2WpeydhCDtlqXtlZjqs6Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgLy8g7KaJLCDsm5DsoJDsnbQg7IK86rCB7ZiVIOyViOyXkCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaW1wbGV4WzBdID0gc2ltcGxleFsxXTsgLy8gc3dhcCBmaXJzdCBlbGVtZW50IChwb2ludCBDKVxuICAgICAgICAgICAgICAgIGQgPSBhYnBlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpbXBsZXhbMV0gPSBzaW1wbGV4WzJdOyAvLyBzd2FwIGVsZW1lbnQgaW4gdGhlIG1pZGRsZSAocG9pbnQgQilcbiAgICAgICAgICAgIC0taW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3JlYXRlQ29udmV4SHVsbChwb2ludHMpXG4gICAge1xuICAgICAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgICAgIHZhciBpMCA9IDA7XG4gICAgICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGh1bGwgPSBbXTtcbiAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICB2YXIgaWggPSBpMDtcblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgICAgICB2YXIgaWUgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgciA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tqXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IFZlY3Rvci5jcm9zcyhyLCB2KTtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhTcSgpID4gci5sZW5ndGhTcSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29weSB2ZXJ0aWNlc1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaHVsbFtpXV07XG4gICAgICAgICAgICBuZXdQb2ludHMucHVzaChuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQb2ludHM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbWlkcG9pbnQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKChhLnggKyBiLngpIC8gMiwgKGEueSArIGIueSkgLyAyKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGVidWdWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICBjb25zb2xlLmxvZyhpbmRleCwgdmVydGV4LngsIHZlcnRleC55KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uc29sZVZlcnRpY2VzKHZlcnRpY2VzMSwgdmVydGljZXMyKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMxJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMSk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygndmVydGljZXMyJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzMik7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbn1cblxuZnVuY3Rpb24gc3RyKHZlcnRleCwgaXNGaXhlZCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBgKCR7dmVydGV4Lnh9LCR7dmVydGV4Lnl9KWA7XG4gICAgfVxuICAgIHJldHVybiBgKCR7dmVydGV4LngudG9GaXhlZCgyKX0sJHt2ZXJ0ZXgueS50b0ZpeGVkKDIpfSlgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dqay9HSksuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgR0pLIGZyb20gJy4uL2dqay9HSksnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXJcbntcbiAgICBzdGF0aWMgZHJhd01pbmtvd3NraVN1bSh2ZXJ0aWNlczEsIHZlcnRpY2VzMilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmF3TWlua293c2tpU3VtKCcsIHZlcnRpY2VzMS5sZW5ndGggKiB2ZXJ0aWNlczIubGVuZ3RoLCAnKScpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlczEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmVydGljZXMyLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdjEgPSB2ZXJ0aWNlczFbaV0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgdjIgPSB2ZXJ0aWNlczJbal0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IFZlY3Rvci5zdWJ0cmFjdCh2MSwgdjIpO1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChkaWZmKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpLCBqLCBgdmVjWyR7ZGlmZi54fSwgJHtkaWZmLnl9XWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udmV4SHVsbFBhdGggPSBHSksuY3JlYXRlQ29udmV4SHVsbChwYXRoKTtcbiAgICAgICAgUGFpbnRlci5kcmF3UG9seWdvbihjb252ZXhIdWxsUGF0aCwgMSwgMHhEREREREQsIDEpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2x5Z29uKHZlcnRpY2VzLCBsaW5lV2lkdGggPSAxLCBjb2xvciA9IDB4NjA3RDhCLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gd2luZG93Lmc7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZShsaW5lV2lkdGgsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgY29uc3QgdmVjMCA9IHZlcnRpY2VzWzBdLmNsb25lKCk7XG4gICAgICAgIHZlYzAubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh2ZWMwLngsIHZlYzAueSk7XG5cbiAgICAgICAgLy8gdGhpcy5kcmF3VGV4dCh3aW5kb3cuc3RhZ2UsICcoJyArIHZlYzAueC50b0ZpeGVkKDApICsgJywnICsgdmVjMC55LnRvRml4ZWQoMCkgKyAnKScsIHZlYzApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2ZWMgPSB2ZXJ0aWNlc1tpXS5jbG9uZSgpO1xuICAgICAgICAgICAgdmVjLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMueCwgdmVjLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYzAueCwgdmVjMC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3VGV4dChzdGFnZSwgc3RyaW5nLCBwb2ludCwgY29sb3IgPSAnI2ZmMzMwMCcpXG4gICAge1xuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChzdHJpbmcsIHtcbiAgICAgICAgICAgIC8vIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICAvLyBmb250U2l6ZTogNCxcbiAgICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIGZpbGw6IGNvbG9yLFxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnIzRhMTg1MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRleHQueCA9IHBvaW50Lng7XG4gICAgICAgIHRleHQueSA9IHBvaW50Lnk7XG5cbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQodGV4dCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50KGdyYXBoaWNzLCBwb2ludCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgY29sb3IpO1xuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShwb2ludC54LCBwb2ludC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeUJvdW5kcyhncmFwaGljcywgYm91bmRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSlcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucnQueCwgcmVjdC5ydC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucmIueCwgcmVjdC5yYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubGIueCwgcmVjdC5sYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzQnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sdC54LCByZWN0Lmx0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5ydC54LCByZWN0LnJ0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5yYi54LCByZWN0LnJiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sYi54LCByZWN0LmxiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50cyhncmFwaGljcywgcG9pbnRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwMSA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIHZhciBwMiA9IHBvaW50c1tpICsgMSA8IHBvaW50cy5sZW5ndGggPyBpICsgMSA6IDBdO1xuXG4gICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0xpbmUoZ3JhcGhpY3MsIHAwLCBwMSwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDAueCwgcDAueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMS54LCBwMS55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3QXJyb3coZ3JhcGhpY3MsIG1vdmVQb2ludCwgdG9Qb2ludCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43LCBzY2FsZSA9IDUpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG5cbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IodG9Qb2ludC54IC0gbW92ZVBvaW50LngsIHRvUG9pbnQueSAtIG1vdmVQb2ludC55KTtcbiAgICAgICAgdmFyIGxlZnQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHZlY3Rvci5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcigxNSk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgdmVjdG9yLngsIG1vdmVQb2ludC55ICsgdmVjdG9yLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgbGVmdC54LCBtb3ZlUG9pbnQueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyByaWdodC54LCBtb3ZlUG9pbnQueSArIHJpZ2h0LnkpOyovXG5cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcihtb3ZlUG9pbnQueCAtIHRvUG9pbnQueCwgbW92ZVBvaW50LnkgLSB0b1BvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0RpcmVjdGlvbihncmFwaGljcywgbWUsIHRhcmdldCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43LCBzY2FsZSA9IDUpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcblxuICAgICAgICB2YXIgdG8gPSBtZS50byh0YXJnZXQpO1xuICAgICAgICB2YXIgbGVmdCA9IHRvLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdG8uY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgdG8uaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIHRvLngsIG1lLnkgKyB0by55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIGxlZnQueCwgbWUueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1lLnggKyByaWdodC54LCBtZS55ICsgcmlnaHQueSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1BhaW50ZXIuanMiLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi4vLi4vc3JjL3NhdC9Qb2ludCc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4uLy4uL3NyYy9zYXQvQ2lyY2xlJztcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4uLy4uL3NyYy9zYXQvUG9seWdvbic7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uLy4uL3NyYy9WZWN0b3InO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL1BhaW50ZXInO1xuaW1wb3J0IE1vdXNlIGZyb20gJy4uLy4uL3NyYy91dGlscy9Nb3VzZSc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuXG5jb25zdCBncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAsIGRlYnVnR3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpXG4gICAgLCBzaGFwZXMgPSBbXVxuICAgICwgTElORV9DT0xPUiA9IDB4ODREMkY2XG4gICAgLCBBUlJPV19DT0xPUiA9IDB4RTU3MzczO1xuXG5sZXQgcG9seWdvblBvaW50cyA9IFtcbiAgICBbbmV3IFBvaW50KDM1MCwgMzUwKSwgbmV3IFBvaW50KDM1MCwgNTAwKSwgbmV3IFBvaW50KDUwMCwgNTAwKV0sXG4gICAgW25ldyBQb2ludCg1MDAsIDIwMCksIG5ldyBQb2ludCg0ODAsIDI1MCksIG5ldyBQb2ludCg2MDAsIDI1MCksIG5ldyBQb2ludCg2MjAsIDIwMCldLFxuICAgIFtuZXcgUG9pbnQoMjU4LCAxMjApLCBuZXcgUG9pbnQoMjk1LCAyMzApLCBuZXcgUG9pbnQoMjAwLCAzMDApLCBuZXcgUG9pbnQoMTA1LCAyMzApLCBuZXcgUG9pbnQoMTQyLCAxMjApXVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIFBJWEkuQ29udGFpbmVyXG57XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHdpbmRvd1snZyddID0gZGVidWdHcmFwaGljcztcblxuICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMucmVuZGVyZXIudmlldztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cblxuICAgIGluaXRpYWxpemUoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENoaWxkKGdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChkZWJ1Z0dyYXBoaWNzKTtcblxuICAgICAgICB0aGlzLm1vdXNlRG93blBvaW50ID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIHRoaXMubGFzdGRyYWcgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcbiAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvL3RoaXMuY3JlYXRlUG9seWdvbigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBvbHlnb25NYW51YWwoKTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG5cbiAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgYWRkRXZlbnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5vbignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoKSB7fVxuXG5cbiAgICByZXNpemUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuXG4gICAgZ2V0UG9seWdvblBvaW50cyh0eCwgdHksIGFuZ2xlLCByYWRpdXMgPSAxMDApXG4gICAge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBbXTtcblxuICAgICAgICAvLyBtYWtpbmcgcG9pbnRzLCBwYXRoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5nbGU7IGkgKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gdHggKyAocmFkaXVzICogLU1hdGguc2luKHRoaXMudG9SYWRpYW4oMzYwIC8gYW5nbGUgKiBpKSkpO1xuICAgICAgICAgICAgbGV0IHkgPSB0eSArIChyYWRpdXMgKiAgTWF0aC5jb3ModGhpcy50b1JhZGlhbigzNjAgLyBhbmdsZSAqIGkpKSk7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUElYSS5Qb2ludCh4LCB5KTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuXG5cbiAgICB0b1JhZGlhbihkZWdyZWUpXG4gICAge1xuICAgICAgICByZXR1cm4gZGVncmVlICogTWF0aC5QSSAvIDE4MDtcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBvbHlnb24odXNlUmFuZG9tUm90YXRlID0gZmFsc2UpXG4gICAge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9seWdvblBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvbHlnb24gPSBuZXcgUG9seWdvbihjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBwb2ludHMgPSBwb2x5Z29uUG9pbnRzW2ldO1xuXG4gICAgICAgICAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgICAgICBwb2x5Z29uLmFkZFBvaW50KHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh1c2VSYW5kb21Sb3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVNoYXBlKHBvbHlnb24sIE1hdGgucmFuZG9tKCkgKiA0NSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNoYXBlcy5wdXNoKHBvbHlnb24pO1xuXG4gICAgICAgICAgICBwb2x5Z29uLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQb2x5Z29uTWFudWFsKClcbiAgICB7XG4gICAgICAgIGxldCByYWRpdXMgPSAxMDAsXG4gICAgICAgICAgICBkaWFtZXRlciA9IDIwMCxcbiAgICAgICAgICAgIHNwYWNlID0gMjAsXG4gICAgICAgICAgICBhID0gcmFkaXVzICsgc3BhY2UsXG4gICAgICAgICAgICBiID0gcmFkaXVzICsgZGlhbWV0ZXIgKyBzcGFjZSAqIDIsXG4gICAgICAgICAgICBjID0gcmFkaXVzICsgZGlhbWV0ZXIgKiAyICsgc3BhY2UgKiAzO1xuXG4gICAgICAgIHBvbHlnb25Qb2ludHMgPSBbXTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhhLCBhLCAzKSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYiwgYSwgNCkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGMsIGEsIDUpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhhLCBiLCA2KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYiwgYiwgNykpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGMsIGIsIDgpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhhLCBjLCA5KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYiwgYywgMTApKTtcbiAgICAgICAgdGhpcy5hZGRDaXJjbGUoYywgYywgcmFkaXVzKTtcbiAgICAgICAgLy90aGlzLmFkZENpcmNsZShjLCBjLCByYWRpdXMpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUG9seWdvbih0cnVlKTtcbiAgICB9XG5cblxuICAgIGFkZFBvbHlnb24oaW5kZXgsIHVzZVJhbmRvbVJvdGF0ZSA9IHRydWUpXG4gICAge1xuICAgICAgICBsZXQgcG9seWdvbiA9IG5ldyBQb2x5Z29uKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgbGV0IHBvaW50cyA9IHBvbHlnb25Qb2ludHNbaW5kZXhdO1xuXG4gICAgICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgcG9seWdvbi5hZGRQb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVzZVJhbmRvbVJvdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVTaGFwZShwb2x5Z29uLCAoTWF0aC5yYW5kb20oKSAqIDQ1KSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9seWdvbi5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgc2hhcGVzLnB1c2gocG9seWdvbik7XG4gICAgfVxuXG5cbiAgICBhZGRDaXJjbGUoeCwgeSwgcmFkaXVzKVxuICAgIHtcbiAgICAgICAgbGV0IGNpcmNsZSA9IG5ldyBDaXJjbGUodGhpcy5jb250ZXh0LCB4LCB5LCByYWRpdXMpO1xuICAgICAgICBjaXJjbGUuY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIHNoYXBlcy5wdXNoKGNpcmNsZSk7XG4gICAgICAgIHRoaXMuY2lyY2xlID0gY2lyY2xlO1xuICAgIH1cblxuXG4gICAgdXBkYXRlUmVuZGVyKClcbiAgICB7XG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgc2hhcGVzLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIHBvbHlnb24uY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZGV0ZWN0Q29sbGlzaW9ucygpXG4gICAge1xuICAgICAgICBsZXQgZHJhZ1NoYXBlID0gdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZDtcblxuICAgICAgICBpZiAoIWRyYWdTaGFwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChzaGFwZSAhPT0gZHJhZ1NoYXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG10diA9IGRyYWdTaGFwZS5jb2xsaWRlc1dpdGgoc2hhcGUpO1xuXG4gICAgICAgICAgICAgICAgLy8g7Lap64+MIO2MkOyglVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkRldGVjdGVkKG10dikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlU2hhcGVCeU1UVihtdHYsIGRyYWdTaGFwZSwgc2hhcGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBtdHbroZwg7Lap64+MIO2MkOyglVxuICAgICAqIEBwYXJhbSBtdHZcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjb2xsaXNpb25EZXRlY3RlZChtdHYpXG4gICAge1xuICAgICAgICAvLyDstqnrj4wg7YyQ7KCVXG4gICAgICAgIGlmIChtdHYuYXhpcyAhPSB1bmRlZmluZWQgfHwgbXR2Lm92ZXJsYXAgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGNoZWNrTVRWQXhpc0RpcmVjdGlvbihtdHYsIGNvbGxpZGVyLCBjb2xsaWRlZSlcbiAgICB7XG4gICAgICAgIGlmIChtdHYuYXhpcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBjb2xsaWRlckNlbnRlciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNvbGxpZGVyLmdldENlbnRlcigpKSxcbiAgICAgICAgICAgIGNvbGxpZGVlQ2VudGVyID0gVmVjdG9yLmZyb21PYmplY3QoY29sbGlkZWUuZ2V0Q2VudGVyKCkpLFxuICAgICAgICAgICAgY2VudGVyVmVjdG9yID0gY29sbGlkZWVDZW50ZXIuc3VidHJhY3QoY29sbGlkZXJDZW50ZXIpLFxuICAgICAgICAgICAgY2VudGVyVW5pdFZlY3RvciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNlbnRlclZlY3Rvcikubm9ybWFsaXplKCk7XG5cbiAgICAgICAgaWYgKGNlbnRlclVuaXRWZWN0b3IuZG90UHJvZHVjdChtdHYuYXhpcykgPiAwKSB7XG4gICAgICAgICAgICBtdHYuYXhpcy54ID0gLW10di5heGlzLng7XG4gICAgICAgICAgICBtdHYuYXhpcy55ID0gLW10di5heGlzLnk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtdHZcbiAgICAgKiBAcGFyYW0gY29sbGlkZXIg7Lap64+M7ZWcIOqwneyytFxuICAgICAqIEBwYXJhbSBjb2xsaWRlZSDstqnrj4zsnYQg64u57ZWcIOqwneyytFxuICAgICAqL1xuICAgIG1vdmVTaGFwZUJ5TVRWKG10diwgY29sbGlkZXIsIGNvbGxpZGVlKVxuICAgIHtcbiAgICAgICAgaWYgKG10di5heGlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG10di5heGlzID0gbmV3IFZlY3RvcigxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkeCA9IG10di5heGlzLnggKiBtdHYub3ZlcmxhcCxcbiAgICAgICAgICAgIGR5ID0gbXR2LmF4aXMueSAqIG10di5vdmVybGFwO1xuXG4gICAgICAgIGxldCBkcmFnVmVjdG9yID0gdGhpcy5kcmFnVmVjdG9yLFxuICAgICAgICAgICAgY2VudGVyQ29sbGlkZXIgPSBjb2xsaWRlci5nZXRDZW50ZXIoKSxcbiAgICAgICAgICAgIGNlbnRlckNvbGxpZGVlID0gY29sbGlkZWUuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yKGNlbnRlckNvbGxpZGVlLnggLSBjZW50ZXJDb2xsaWRlci54LCBjZW50ZXJDb2xsaWRlZS55IC0gY2VudGVyQ29sbGlkZXIueSksXG4gICAgICAgICAgICBkaXJlY3Rpb25Ob3JtID0gZGlyZWN0aW9uLm5vcm0oKSxcbiAgICAgICAgICAgIG92ZXJsYXBWZWN0b3IgPSBuZXcgVmVjdG9yKGR4LCBkeSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOuCtOyggeydtCAtMeydtOuptCDrsJjrjIAg67Cp7Zal7J2EIOuztOuKlCDqsoNcbiAgICAgICAgICog64K07KCB7J20IDDsnbTrqbQg7IiY7KeBXG4gICAgICAgICAqIOuCtOyggeydtCAx7J24IOqyveyasCDqsJnsnYAg67Cp7Zal7J2EIOqwgOumrO2CpOuKlCDqsoNcbiAgICAgICAgICog64K07KCB7J20ID4gMC44IOuLpOuptCDqsJnsnYAg67Cp7Zal7J2EIOuztOqzoCDsnojripQg7IOB7YOcXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgZG90ID0gZHJhZ1ZlY3Rvci5kb3RQcm9kdWN0KG92ZXJsYXBWZWN0b3IpO1xuXG4gICAgICAgIGlmIChkb3QgPCAwKSB7XG4gICAgICAgICAgICBkeCA9IC1keDtcbiAgICAgICAgICAgIGR5ID0gLWR5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGMgPSBjb2xsaWRlZS5nZXRDZW50ZXIoKSxcbiAgICAgICAgICAgIHRvID0gbmV3IFZlY3RvcihkeCwgZHkpLFxuICAgICAgICAgICAgdG9Ob3JtYWxpemUgPSB0by5jbG9uZSgpLm5vcm0oKSxcbiAgICAgICAgICAgIGRvdFRvID0gZGlyZWN0aW9uTm9ybS5kb3RQcm9kdWN0KHRvTm9ybWFsaXplKSxcbiAgICAgICAgICAgIGNlbnRlciA9IG5ldyBWZWN0b3IoYy54LCBjLnkpO1xuICAgICAgICB0byA9IGNlbnRlci5jbG9uZSgpLnN1YnRyYWN0KHRvKTtcblxuICAgICAgICAvLyDrkZAg6rCd7LK07J2YIOuwqe2WpSDrsqHthLDsmYAg67CA7Ja064K064qUIOuwse2EsCh0bynsnZgg64K07KCB7J20IDDrs7Tri6Qg7YG0IOqyveyasCwg7KaJIOuwgOyWtCDrgrTripQg67Cp7Zal7J20IOuwgOyWtOuCtOuKlCDrsKntlqXsnbwg65WM66eMIOyggeyaqVxuICAgICAgICBpZiAoZG90VG8gPj0gMCkge1xuICAgICAgICAgICAgUGFpbnRlci5kcmF3QXJyb3cod2luZG93LmcsIGNlbnRlciwgdG8sIGZhbHNlLCAxLCBBUlJPV19DT0xPUik7XG4gICAgICAgICAgICAvL1BhaW50ZXIuZHJhd1BvaW50KHdpbmRvdy5nLCB0aGlzLmNpcmNsZS5nZXRDZW50ZXIoKSwgZmFsc2UsIDEwLCAweGZmMzMwMCwgMC4yKTtcbiAgICAgICAgICAgIGNvbGxpZGVlLm1vdmUoZHgsIGR5KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcm90YXRlU2hhcGUoc2hhcGUsIGRlZ3JlZXMpXG4gICAge1xuICAgICAgICAvL2RlZ3JlZXMgPSA5MDtcbiAgICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLnBvaW50cztcblxuICAgICAgICBpZiAocG9pbnRzKSB7XG4gICAgICAgICAgICBsZXQgY2VudGVyID0gc2hhcGUuZ2V0Q2VudGVyKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0ICBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgICAgICBwb2ludHNbaV0gPSB0aGlzLnJvdGF0aW9uUG9pbnQoY2VudGVyLCBwb2ludCwgZGVncmVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIO2ajOyghO2VmOuKlCDsooztkZwg6rWs7ZWY6riwXG4gICAgICogQHBhcmFtIHBpdm90IOyCrOqwge2YleydmCDspJHsi6zsoJBcbiAgICAgKiBAcGFyYW0gcG9pbnQg6rOE7IKw7ZWY6rOgIOyLtuydgCDtj6zsnbjtirhcbiAgICAgKiBAcGFyYW0gZGVncmVlcyDtmozsoITqsIEgZGVncmVlc1xuICAgICAqIEByZXR1cm5zIHt7eDogKG51bWJlcnwqKSwgeTogKG51bWJlcnwqKX19XG4gICAgICovXG4gICAgcm90YXRpb25Qb2ludChwaXZvdCwgcG9pbnQsIGRlZ3JlZXMpXG4gICAge1xuICAgICAgICBsZXQgZGlmZlggPSBwb2ludC54IC0gcGl2b3QueDtcbiAgICAgICAgbGV0IGRpZmZZID0gcG9pbnQueSAtIHBpdm90Lnk7XG4gICAgICAgIGxldCBkaXN0ID0gTWF0aC5zcXJ0KGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZKTtcbiAgICAgICAgbGV0IGNhID0gTWF0aC5hdGFuMihkaWZmWSwgZGlmZlgpICogKDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBsZXQgbmEgPSAoKGNhICsgZGVncmVlcykgJSAzNjApICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICBsZXQgeCA9IChwaXZvdC54ICsgZGlzdCAqIE1hdGguY29zKG5hKSArIDAuNSkgfCAwO1xuICAgICAgICBsZXQgeSA9IChwaXZvdC55ICsgZGlzdCAqIE1hdGguc2luKG5hKSArIDAuNSkgfCAwO1xuICAgICAgICByZXR1cm4ge3g6IHgsIHk6IHl9O1xuICAgIH1cblxuXG4gICAgb25Nb3VzZURvd24oKVxuICAgIHtcbiAgICAgICAgZGVidWdHcmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgIGxldCBjdXJyZW50UG9pbnQgPSBWZWN0b3IuZnJvbU9iamVjdChNb3VzZS5nbG9iYWwpO1xuXG4gICAgICAgIHNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoYXBlLmlzUG9pbnRJblBhdGgoY3VycmVudFBvaW50LngsIGN1cnJlbnRQb2ludC55KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93blBvaW50LnggPSBjdXJyZW50UG9pbnQueDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93blBvaW50LnkgPSBjdXJyZW50UG9pbnQueTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnggPSBjdXJyZW50UG9pbnQueDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnkgPSBjdXJyZW50UG9pbnQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlTW92ZSgpXG4gICAge1xuICAgICAgICBkZWJ1Z0dyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQb2ludCwgZHJhZ1ZlY3RvcjtcblxuICAgICAgICBpZiAodGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCkge1xuICAgICAgICAgICAgY3VycmVudFBvaW50ID0gVmVjdG9yLmZyb21PYmplY3QoTW91c2UuZ2xvYmFsKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnVmVjdG9yID0gZHJhZ1ZlY3RvciA9IGN1cnJlbnRQb2ludC5jbG9uZSgpLnN1YnRyYWN0KHRoaXMubGFzdGRyYWcpO1xuXG4gICAgICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkLm1vdmUoZHJhZ1ZlY3Rvci54LCBkcmFnVmVjdG9yLnkpO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnggPSBjdXJyZW50UG9pbnQueDtcbiAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueSA9IGN1cnJlbnRQb2ludC55O1xuXG4gICAgICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbnMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uTW91c2VVcCgpXG4gICAge1xuICAgICAgICBkZWJ1Z0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG5cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy9cbiAgICAvLyBUZXN0IO2VqOyImFxuICAgIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgb25LZXlVcChlKVxuICAgIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FU0NBUEU6XG4gICAgICAgICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5OVU1CRVJfMTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLk5VTUJFUl8yOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L3NhdC9UZXN0LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRcbntcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9Qb2ludC5qcyIsImltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQcm9qZWN0aW9uIGZyb20gJy4vUHJvamVjdGlvbic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBTaGFwZVxue1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHgsIHksIHJhZGl1cylcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gJ0NpcmNsZSc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7KSR7KCQIOyijO2RnCDrsJjtmZhcbiAgICAgKiBAcmV0dXJucyB7UElYSS5Qb2ludHwqfHN2Zy5Qb2ludH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlBvaW50KHRoaXMueCx0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKVxuICAgIHtcbiAgICAgICAgaWYgKHNoYXBlLnJhZGl1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHNoYXBlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZUNvbGxpZGVzV2l0aENpcmNsZSh0aGlzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKVxuICAgIHtcbiAgICAgICAgdmFyIGF4ZXMgPSBzaGFwZS5nZXRBeGVzKCksIGRpc3RhbmNlO1xuXG4gICAgICAgIGlmIChheGVzID09PSB1bmRlZmluZWQpIHsgLy/sm5BcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KHNoYXBlLnggLSB0aGlzLngsIDIpICtcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhzaGFwZS55IC0gdGhpcy55LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2UgPCBNYXRoLmFicyh0aGlzLnJhZGl1cyArIHNoYXBlLnJhZGl1cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHNoYXBlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuXG5cbiAgICBnZXRQb2x5Z29uUG9pbnRDbG9zZXN0VG9DaXJjbGUocG9seWdvbiwgY2lyY2xlKVxuICAgIHtcbiAgICAgICAgbGV0IG1pbiA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBjaXJjbGVWZWN0b3IgPSBWZWN0b3IuZnJvbU9iamVjdChjaXJjbGUpLFxuICAgICAgICAgICAgbGVuZ3RoLCB0ZXN0UG9pbnRWZWN0b3IsIGNsb3Nlc3RQb2ludDtcblxuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBwb2x5Z29uLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVzdFBvaW50VmVjdG9yID0gVmVjdG9yLmZyb21PYmplY3QocG9seWdvbi5wb2ludHNbaV0pO1xuICAgICAgICAgICAgdGVzdFBvaW50VmVjdG9yLmluZGV4ID0gaTtcbiAgICAgICAgICAgIGxlbmd0aCA9IHRlc3RQb2ludFZlY3Rvci5jbG9uZSgpLmRpc3RhbmNlKGNpcmNsZSk7XG5cbiAgICAgICAgICAgIGlmIChsZW5ndGggPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBsZW5ndGg7XG4gICAgICAgICAgICAgICAgY2xvc2VzdFBvaW50ID0gdGVzdFBvaW50VmVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RQb2ludC5jbG9uZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uk6rCB7ZiV6rO8IOybkO2YlSDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHBvbHlnb25cbiAgICAgKiBAcGFyYW0gY2lyY2xlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgLypwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSlcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgYXhlcyA9IHBvbHlnb24uZ2V0QXhlcygpLFxuICAgICAgICAgICAgY2xvc2VzdFBvaW50ID0gdGhpcy5nZXRQb2x5Z29uUG9pbnRDbG9zZXN0VG9DaXJjbGUocG9seWdvbiwgY2lyY2xlKTtcblxuICAgICAgICBheGVzLnB1c2godGhpcy5nZXRDaXJjbGVBeGlzKGNpcmNsZSwgY2xvc2VzdFBvaW50KSk7XG5cbiAgICAgICAgcmV0dXJuICFwb2x5Z29uLnNlcGFyYXRpb25PbkF4ZXMoYXhlcywgY2lyY2xlKTtcbiAgICB9Ki9cblxuXG4gICAgZ2V0Q2lyY2xlQXhpcyhjaXJjbGUsIGNsb3Nlc3RQb2ludClcbiAgICB7XG4gICAgICAgIHZhciB2MSA9IG5ldyBWZWN0b3IoY2lyY2xlLngsIGNpcmNsZS55KSxcbiAgICAgICAgICAgIHYyID0gbmV3IFZlY3RvcihjbG9zZXN0UG9pbnQueCwgY2xvc2VzdFBvaW50LnkpLFxuICAgICAgICAgICAgc3VyZmFjZVZlY3RvciA9IHYxLnN1YnRyYWN0KHYyKTtcblxuICAgICAgICBQYWludGVyLmRyYXdQb2ludCh3aW5kb3cuZywgY2xvc2VzdFBvaW50LCBmYWxzZSwgNSwgMHhmZjMzMDAsIDAuMyk7XG4gICAgICAgIC8vUGFpbnRlci5kcmF3TGluZSh3aW5kb3cuZywgVmVjdG9yLmZyb21PYmplY3QoY2lyY2xlKSwgVmVjdG9yLmZyb21PYmplY3QoY2xvc2VzdFBvaW50KSwgZmFsc2UsIDEsIDB4ZmYzMzAwLCAwLjMpO1xuXG4gICAgICAgIHJldHVybiBzdXJmYWNlVmVjdG9yLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgcHJvamVjdChheGlzKVxuICAgIHtcbiAgICAgICAgbGV0IHNjYWxhcnMgPSBbXSxcbiAgICAgICAgICAgIHBvaW50ID0gbmV3IFBJWEkuUG9pbnQodGhpcy54LCB0aGlzLnkpLFxuICAgICAgICAgICAgcG9pbnRWZWN0b3IgPSBuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpLFxuICAgICAgICAgICAgZG90UHJvZHVjdCA9IHBvaW50VmVjdG9yLmRvdFByb2R1Y3QoYXhpcyk7XG5cbiAgICAgICAgc2NhbGFycy5wdXNoKGRvdFByb2R1Y3QpO1xuICAgICAgICBzY2FsYXJzLnB1c2goZG90UHJvZHVjdCArIHRoaXMucmFkaXVzKTtcbiAgICAgICAgc2NhbGFycy5wdXNoKGRvdFByb2R1Y3QgLSB0aGlzLnJhZGl1cyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0aW9uKFxuICAgICAgICAgICAgTWF0aC5taW4uYXBwbHkoTWF0aCwgc2NhbGFycyksXG4gICAgICAgICAgICBNYXRoLm1heC5hcHBseShNYXRoLCBzY2FsYXJzKVxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgZ2V0QXhlcygpXG4gICAge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUGF0aChncmFwaGljcywgbGluZUNvbG9yID0gMHhGRkZGRkYpXG4gICAge1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgbGluZUNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHRoaXMueCArIHRoaXMucmFkaXVzLCB0aGlzLnkpO1xuICAgICAgICBncmFwaGljcy5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIH1cblxuXG4gICAgbW92ZShkeCwgZHkpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gZHg7XG4gICAgICAgIHRoaXMueSArPSBkeTtcbiAgICB9XG5cblxuICAgIGlzUG9pbnRJblBhdGgoeCwgeSlcbiAgICB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGlzUG9pbnRJblBhdGggPSB0aGlzLmNvbnRleHQuaXNQb2ludEluUGF0aCh4LCB5KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgcmV0dXJuIGlzUG9pbnRJblBhdGg7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L0NpcmNsZS5qcyIsImltcG9ydCBNVFYgZnJvbSAnLi9NVFYnO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIG1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihheGVzLCBzaGFwZSkge1xuICAgICAgICB2YXIgbWluaW11bU92ZXJsYXAgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgb3ZlcmxhcCwgYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXAsXG4gICAgICAgICAgICBheGlzLCBwcm9qZWN0aW9uMSwgcHJvamVjdGlvbjI7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBheGlzID0gYXhlc1tpXTtcbiAgICAgICAgICAgIHByb2plY3Rpb24xID0gc2hhcGUucHJvamVjdChheGlzKTtcbiAgICAgICAgICAgIHByb2plY3Rpb24yID0gdGhpcy5wcm9qZWN0KGF4aXMpO1xuICAgICAgICAgICAgb3ZlcmxhcCA9IHByb2plY3Rpb24xLmdldE92ZXJsYXAocHJvamVjdGlvbjIpO1xuXG4gICAgICAgICAgICAvKlBhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsXG4gICAgICAgICAgICAgICAge3g6YXhpcy54ICogcHJvamVjdGlvbjEubWluLCB5OmF4aXMueSAqIHByb2plY3Rpb24xLm1pbn0sXG4gICAgICAgICAgICAgICAge3g6YXhpcy54ICogcHJvamVjdGlvbjIubWF4LCB5OmF4aXMueSAqIHByb2plY3Rpb24yLm1heH0sXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7Ki9cblxuICAgICAgICAgICAgaWYgKG92ZXJsYXAgPT09IDApIHsgLy/stqnrj4wg7JeG7Iq0LlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTVRWKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXAgPCBtaW5pbXVtT3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtT3ZlcmxhcCA9IG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgICAgIGF4aXNXaXRoU21hbGxlc3RPdmVybGFwID0gYXhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IE1UVihtaW5pbXVtT3ZlcmxhcCwgYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog65GQIOuLpOqwge2YlSDsgqzsnbTsl5DshJwg7Lap64+MXG4gICAgICogQHBhcmFtIHAxXG4gICAgICogQHBhcmFtIHAyXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcG9seWdvbkNvbGxpZGVzV2l0aFBvbHlnb24ocDEsIHAyKSB7XG4gICAgICAgIHZhciBtdHYxID0gcDEubWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKHAxLmdldEF4ZXMoKSwgcDIpLFxuICAgICAgICAgICAgbXR2MiA9IHAxLm1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihwMi5nZXRBeGVzKCksIHAyKTtcblxuICAgICAgICBpZiAobXR2MS5vdmVybGFwID09PSAwICYmIG10djIub3ZlcmxhcCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNVFYoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbXR2MS5vdmVybGFwIDwgbXR2Mi5vdmVybGFwID8gbXR2MSA6IG10djI7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuRkCDsm5DtmJXsl5Ag64yA7ZWcIOy2qeuPjFxuICAgICAqIEBwYXJhbSBjMVxuICAgICAqIEBwYXJhbSBjMlxuICAgICAqL1xuICAgIGNpcmNsZUNvbGxpZGVzV2l0aENpcmNsZShjMSwgYzIpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KGMyLnggLSBjMS54LCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdyhjMi55IC0gYzEueSwgMikpLFxuICAgICAgICAgICAgb3ZlcmxhcCA9IE1hdGguYWJzKGMxLnJhZGl1cyArIGMyLnJhZGl1cykgLSBkaXN0YW5jZTtcblxuICAgICAgICByZXR1cm4gb3ZlcmxhcCA8IDAgP1xuICAgICAgICAgICAgbmV3IE1UVigwKSA6XG4gICAgICAgICAgICBuZXcgTVRWKG92ZXJsYXApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog64uk6rCB7ZiV6rO8IOybkO2YlSDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHBvbHlnb25cbiAgICAgKiBAcGFyYW0gY2lyY2xlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShwb2x5Z29uLCBjaXJjbGUpIHtcbiAgICAgICAgdmFyIGF4ZXMgPSBwb2x5Z29uLmdldEF4ZXMoKSxcbiAgICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IGNpcmNsZS5nZXRQb2x5Z29uUG9pbnRDbG9zZXN0VG9DaXJjbGUocG9seWdvbiwgY2lyY2xlKTtcblxuICAgICAgICAvLyBQYWludGVyLmRyYXdQb2ludCh3aW5kb3cuZywgY2xvc2VzdFBvaW50LCBmYWxzZSwgNSwgMHhFNTczNzMpO1xuXG4gICAgICAgIGF4ZXMucHVzaChjaXJjbGUuZ2V0Q2lyY2xlQXhpcyhjaXJjbGUsIGNsb3Nlc3RQb2ludCkpO1xuXG4gICAgICAgIHJldHVybiBwb2x5Z29uLm1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihheGVzLCBjaXJjbGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7LaV7JeQIO2IrOyYge2VmOyXrCDrtoTrpqzqsIAg7J6I7Jy866m0IHRydWUg67CY7ZmYKOy2qeuPjOuQmOyngCDslYrslZjri6TrqbQgdHJ1ZSDrsJjtmZgpXG4gICAgICogQHBhcmFtIG90aGVyU2hhcGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpIHtcbiAgICAgICAgdmFyIGF4ZXMgPSB0aGlzLmdldEF4ZXMoKS5jb25jYXQoc2hhcGUuZ2V0QXhlcygpKTtcbiAgICAgICAgcmV0dXJuICF0aGlzLnNlcGFyYXRpb25PbkF4ZXMoYXhlcywgc2hhcGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog67aE66as7LaV7J20IOyeiOuKlOyngCDsl6zrtoAgKOu2hOumrOy2leydtCDsnojri6TripQg7J207JW86riw64qUIOy2qeuPjO2VmOyngCDslYrslZjri6TripQg7J207JW86riwIOyeheuLiOuLpC4pXG4gICAgICogQHBhcmFtIGF4ZXNcbiAgICAgKiBAcGFyYW0gc2hhcGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2ldO1xuICAgICAgICAgICAgdmFyIHByb2plY3Rpb24xID0gc2hhcGUucHJvamVjdChheGlzKTtcbiAgICAgICAgICAgIHZhciBwcm9qZWN0aW9uMiA9IHRoaXMucHJvamVjdChheGlzKTtcblxuICAgICAgICAgICAgaWYgKCFwcm9qZWN0aW9uMS5vdmVybGFwcyhwcm9qZWN0aW9uMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gZG9uJ3QgaGF2ZSB0byB0ZXN0IHJlbWFpbmluZyBheGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1NoYXBlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTVRWXG57XG4gICAgLyoqXG4gICAgICog7LWc7IaMIOydtOuPmSDrsqHthLBcbiAgICAgKiBNaW5pbXVtIFRyYW5zbGF0aW9uIFZlY3RvciAoTVRWKVxuICAgICAqIEBwYXJhbSBheGlzXG4gICAgICogQHBhcmFtIG92ZXJsYXBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvdmVybGFwID0gdW5kZWZpbmVkLCBheGlzID0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpcztcbiAgICAgICAgdGhpcy5vdmVybGFwID0gb3ZlcmxhcDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9NVFYuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0aW9uXG57XG4gICAgY29uc3RydWN0b3IobWluLCBtYXgpXG4gICAge1xuICAgICAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgfVxuXG5cbiAgICBnZXRPdmVybGFwKHByb2plY3Rpb24pXG4gICAge1xuICAgICAgICB2YXIgb3ZlcmxhcDtcblxuICAgICAgICBpZiAoIXRoaXMub3ZlcmxhcHMocHJvamVjdGlvbikpXG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICBpZiAodGhpcy5tYXggPiBwcm9qZWN0aW9uLm1heCkge1xuICAgICAgICAgICAgb3ZlcmxhcCA9IHByb2plY3Rpb24ubWF4IC0gdGhpcy5taW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvdmVybGFwID0gdGhpcy5tYXggLSBwcm9qZWN0aW9uLm1pbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3ZlcmxhcDtcbiAgICB9XG5cblxuICAgIG92ZXJsYXBzKHByb2plY3Rpb24pXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXggPiBwcm9qZWN0aW9uLm1pbiAmJiBwcm9qZWN0aW9uLm1heCA+IHRoaXMubWluO1xuICAgIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9Qcm9qZWN0aW9uLmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFByb2plY3Rpb24gZnJvbSAnLi9Qcm9qZWN0aW9uJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBTaGFwZVxue1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucG9pbnRzLmxlbmd0aCArICcgUG9seWdvbic7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDspJHsoJAg7KKM7ZGcXG4gICAgICogQHJldHVybnMge1BJWEkuUG9pbnR8KnxzdmcuUG9pbnR9XG4gICAgICovXG4gICAgZ2V0Q2VudGVyKClcbiAgICB7XG4gICAgICAgIHZhciBwb2ludFN1bSA9IG5ldyBQSVhJLlBvaW50KCk7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wLCBwb2ludDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBwb2ludCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICAgICAgcG9pbnRTdW0ueCArPSBwb2ludC54O1xuICAgICAgICAgICAgcG9pbnRTdW0ueSArPSBwb2ludC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUElYSS5Qb2ludChwb2ludFN1bS54IC8gdGhpcy5wb2ludHMubGVuZ3RoLFxuICAgICAgICAgICAgcG9pbnRTdW0ueSAvIHRoaXMucG9pbnRzLmxlbmd0aCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstqnrj4wg7LK07YGsICjrtoTrpqzstpXsnbQg7JeG7Jy866m0IOy2qeuPjCksICFzZXBhcmF0aW9uT25BeGVzXG4gICAgICogQHBhcmFtIHNoYXBlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKVxuICAgIHtcbiAgICAgICAgaWYgKHNoYXBlLnJhZGl1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLypcbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICB2YXIgYXhlcyA9IHNoYXBlLmdldEF4ZXMoKTtcblxuICAgICAgICBpZiAoYXhlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hhcGUucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZSh0aGlzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBheGVzLmNvbmNhdCh0aGlzLmdldEF4ZXMoKSk7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgKi9cblxuXG4gICAgLyoqXG4gICAgICog7Yis7JiBXG4gICAgICogQHBhcmFtIGF4aXNcbiAgICAgKiBAcmV0dXJucyB7UHJvamVjdGlvbn1cbiAgICAgKi9cbiAgICBwcm9qZWN0KGF4aXMpXG4gICAge1xuICAgICAgICB2YXIgc2NhbGFycyA9IFtdLFxuICAgICAgICAgICAgdiA9IG5ldyBWZWN0b3IoKTtcblxuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKCBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgIHYueCA9IHBvaW50Lng7XG4gICAgICAgICAgICB2LnkgPSBwb2ludC55O1xuICAgICAgICAgICAgc2NhbGFycy5wdXNoKHYuZG90UHJvZHVjdChheGlzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdGlvbihNYXRoLm1pbi5hcHBseShNYXRoLCBzY2FsYXJzKSxcbiAgICAgICAgICAgIE1hdGgubWF4LmFwcGx5KE1hdGgsIHNjYWxhcnMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2lSDqtaztlZjquLAgKGVkZ2Xsl5Ag64W466eQ7J2EIOy2leycvOuhnCDtlanri4jri6QpXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldEF4ZXMoKVxuICAgIHtcbiAgICAgICAgdmFyIHYxID0gbmV3IFZlY3RvcigpLFxuICAgICAgICAgICAgdjIgPSBuZXcgVmVjdG9yKCksXG4gICAgICAgICAgICBheGVzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdjEueCA9IHRoaXMucG9pbnRzW2ldLng7XG4gICAgICAgICAgICB2MS55ID0gdGhpcy5wb2ludHNbaV0ueTtcblxuICAgICAgICAgICAgdjIueCA9IHRoaXMucG9pbnRzW2krMV0ueDtcbiAgICAgICAgICAgIHYyLnkgPSB0aGlzLnBvaW50c1tpKzFdLnk7XG5cbiAgICAgICAgICAgIC8vIOuqqOyEnOumrOyXkOyEnCDsiJjsp4Hsnbgg64W466eQKOuyleyEoCkg67Kh7YSw66W8IOunjOuTreuLiOuLpC4gKOy2lSDsg53shLEpXG4gICAgICAgICAgICBheGVzLnB1c2godjEuZWRnZSh2MikucGVycGVuZGljdWxhcigpLm5vcm1hbGl6ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHYxLnggPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0ueDtcbiAgICAgICAgdjEueSA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS55O1xuXG4gICAgICAgIHYyLnggPSB0aGlzLnBvaW50c1swXS54O1xuICAgICAgICB2Mi55ID0gdGhpcy5wb2ludHNbMF0ueTtcblxuICAgICAgICAvLyDrqqjshJzrpqzsl5DshJwg7IiY7KeB7J24IOuFuOunkCjrspXshKApIOuyoe2EsOulvCDrp4zrk63ri4jri6QuICjstpUg7IOd7ISxKVxuICAgICAgICBheGVzLnB1c2godjEuZWRnZSh2MikucGVycGVuZGljdWxhcigpLm5vcm1hbGl6ZSgpKTtcbiAgICAgICAgcmV0dXJuIGF4ZXM7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQYXRoKGdyYXBoaWNzLCBsaW5lQ29sb3IgPSAweEZGRkZGRilcbiAgICB7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBsaW5lQ29sb3IpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpO1xuICAgICAgICB9XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcbiAgICB9XG5cblxuICAgIG1vdmUoZHgsIGR5KVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgICAgICBwb2ludC54ICs9IGR4O1xuICAgICAgICAgICAgcG9pbnQueSArPSBkeTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaXNQb2ludEluUGF0aCh4LCB5KVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5wb2ludHNbaV0ueCwgdGhpcy5wb2ludHNbaV0ueSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgY29uc3QgaXNQb2ludEluUGF0aCA9IHRoaXMuY29udGV4dC5pc1BvaW50SW5QYXRoKHgsIHkpO1xuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gaXNQb2ludEluUGF0aDtcbiAgICB9XG5cblxuICAgIGFkZFBvaW50KHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludCh4LCB5KSk7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucG9pbnRzLmxlbmd0aCArICcgUG9seWdvbic7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1BvbHlnb24uanMiXSwic291cmNlUm9vdCI6IiJ9
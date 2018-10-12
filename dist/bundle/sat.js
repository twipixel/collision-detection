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
	            if (a.dot(d) <= 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqKioqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcz85MjQxKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvZ2prL0dKSy5qcz81MGMwKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFpbnRlci5qcz9lZjA2KiIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9TaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L01UVi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9Qb2x5Z29uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIm1haW4iLCJNYWluIiwiY2FudmFzIiwicmVuZGVyZXIiLCJzdGFnZSIsInRlc3QiLCJjb250YWluZXIiLCJpbml0IiwiYWRkRXZlbnQiLCJvblJlc2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQSVhJIiwiQ2FudmFzUmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXciLCJhdXRvUmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiQ29udGFpbmVyIiwiYWRkQ2hpbGQiLCJ1cGRhdGVMb29wIiwicmVzaXplV2luZG93Iiwib25yZXNpemUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uS2V5VXAiLCJtcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltRnJhbWUiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJyZXNpemUiLCJlIiwia2V5Q29kZSIsIlRJTERFIiwiRVNDIiwiU1BBQ0UiLCJET1dOX0FSUk9XIiwiVVBfQVJST1ciLCJMRUZUX0FSUk9XIiwiUklHSFRfQVJST1ciLCJCQUNLX1NQQUNFIiwiY29uc29sZSIsImNsZWFyIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidGVtcCIsInZlYzIiLCJkb3QiLCJjb2VmZiIsImF0YW4yIiwiaG9yaXpvbnRhbEFuZ2xlIiwidmVydGljYWxBbmdsZSIsImhvcml6b250YWxBbmdsZURlZyIsImFuZ2xlIiwibngiLCJjb3MiLCJzaW4iLCJueSIsInJvdGF0ZSIsInJvdGF0aW9uIiwicm90YXRlVG8iLCJyb3RhdGVCeSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNxcnQiLCJkaXN0YW5jZVNxIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImxlbmd0aFNxIiwiYSIsImIiLCJ2IiwiY2xvbmUiLCJyZXQiLCJtdWx0aXBseVNjYWxhciIsImMiLCJyIiwiYWMiLCJiYyIsInZlYzEiLCJ0byIsImFkZCIsIk1vdXNlIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwicHJldlRpbWUiLCJjdXJyZW50VGltZSIsImRpZmZYIiwiZGlmZlkiLCJwbHVnaW5zIiwiaW50ZXJhY3Rpb24iLCJtb3VzZSIsInBvaW50ZXIiLCJ2YWx1ZSIsIl9yZW5kZXJlciIsIl9tb3VzZSIsIkRFU0tUT1BfTU9VU0UiLCJnbG9iYWwiLCJjdXJyZW50Q3Vyc29yU3R5bGUiLCJEYXRlIiwiZ2V0VGltZSIsIkdKSyIsInZlcnRpY2VzIiwiYXZnIiwiY291bnQiLCJpIiwiaW5kZXgiLCJtYXhQcm9kdWN0IiwiZG90UHJvZHVjdCIsInByb2R1Y3QiLCJ2ZXJ0aWNlczEiLCJ2ZXJ0aWNlczIiLCJpbmRleE9mRnVydGhlc3RQb2ludCIsImoiLCJuZWdhdGUiLCJsb2ciLCJzdHIiLCJpdGVyQ291bnQiLCJkIiwiYW8iLCJhYiIsImFicGVycCIsImFjcGVycCIsInNpbXBsZXgiLCJBcnJheSIsInBvc2l0aW9uMSIsImF2ZXJhZ2VQb2ludCIsInBvc2l0aW9uMiIsInN1cHBvcnQiLCJ0cmlwbGVQcm9kdWN0IiwicGVycGVuZGljdWxhciIsIm5vcm0iLCJwb2ludHMiLCJpMCIsIngwIiwibiIsImh1bGwiLCJtIiwiaWgiLCJpZSIsImNyb3NzIiwibmV3UG9pbnRzIiwicG9pbnQiLCJwdXNoIiwiZGVidWdWZXJ0aWNlcyIsImZvckVhY2giLCJ2ZXJ0ZXgiLCJjb25zb2xlVmVydGljZXMiLCJpc0ZpeGVkIiwiUGFpbnRlciIsInBhdGgiLCJ2MSIsInYyIiwiZGlmZiIsImNvbnZleEh1bGxQYXRoIiwiY3JlYXRlQ29udmV4SHVsbCIsImRyYXdQb2x5Z29uIiwibGluZVdpZHRoIiwiY29sb3IiLCJhbHBoYSIsImdyYXBoaWNzIiwiZyIsImxpbmVTdHlsZSIsInZlYzAiLCJtYWduaWZpY2F0aW9uIiwibW92ZVRvIiwibGluZVRvIiwic3RyaW5nIiwidGV4dCIsIlRleHQiLCJmaWxsIiwiaXNDbGVhciIsInJhZGl1cyIsImJlZ2luRmlsbCIsImRyYXdDaXJjbGUiLCJlbmRGaWxsIiwiYm91bmRzIiwidGhpY2tuZXNzIiwiZHJhd1JlY3QiLCJyZWN0IiwibHQiLCJydCIsInJiIiwibGIiLCJwMSIsInAyIiwicDAiLCJtb3ZlUG9pbnQiLCJ0b1BvaW50Iiwic2NhbGUiLCJsZWZ0IiwiaW52ZXJ0IiwicmlnaHQiLCJtZSIsInRhcmdldCIsIkdyYXBoaWNzIiwiZGVidWdHcmFwaGljcyIsInNoYXBlcyIsIkxJTkVfQ09MT1IiLCJBUlJPV19DT0xPUiIsInBvbHlnb25Qb2ludHMiLCJUZXN0IiwiaXNJbml0IiwiaW50ZXJhY3RpdmUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJtb3VzZURvd25Qb2ludCIsIlBvaW50IiwibGFzdGRyYWciLCJzaGFwZUJlaW5nRHJhZ2dlZCIsInVuZGVmaW5lZCIsImNyZWF0ZVBvbHlnb25NYW51YWwiLCJvbk1vdXNlRG93biIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib24iLCJoaXRBcmVhIiwiUmVjdGFuZ2xlIiwidHgiLCJ0eSIsInRvUmFkaWFuIiwiZGVncmVlIiwidXNlUmFuZG9tUm90YXRlIiwicG9seWdvbiIsImFkZFBvaW50Iiwicm90YXRlU2hhcGUiLCJjcmVhdGVQYXRoIiwiZGlhbWV0ZXIiLCJzcGFjZSIsImdldFBvbHlnb25Qb2ludHMiLCJhZGRDaXJjbGUiLCJjcmVhdGVQb2x5Z29uIiwiY2lyY2xlIiwiZHJhZ1NoYXBlIiwic2hhcGUiLCJtdHYiLCJjb2xsaWRlc1dpdGgiLCJjb2xsaXNpb25EZXRlY3RlZCIsIm1vdmVTaGFwZUJ5TVRWIiwiYXhpcyIsIm92ZXJsYXAiLCJjb2xsaWRlciIsImNvbGxpZGVlIiwiY29sbGlkZXJDZW50ZXIiLCJmcm9tT2JqZWN0IiwiZ2V0Q2VudGVyIiwiY29sbGlkZWVDZW50ZXIiLCJjZW50ZXJWZWN0b3IiLCJjZW50ZXJVbml0VmVjdG9yIiwiZHJhZ1ZlY3RvciIsImNlbnRlckNvbGxpZGVyIiwiY2VudGVyQ29sbGlkZWUiLCJkaXJlY3Rpb25Ob3JtIiwib3ZlcmxhcFZlY3RvciIsInRvTm9ybWFsaXplIiwiZG90VG8iLCJjZW50ZXIiLCJkcmF3QXJyb3ciLCJtb3ZlIiwicm90YXRpb25Qb2ludCIsInBpdm90IiwiZGlzdCIsImNhIiwibmEiLCJpc1BvaW50SW5QYXRoIiwiZGV0ZWN0Q29sbGlzaW9ucyIsInVwZGF0ZVJlbmRlciIsIkVTQ0FQRSIsIk5VTUJFUl8xIiwiTlVNQkVSXzIiLCJDaXJjbGUiLCJuYW1lIiwicG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZSIsImNpcmNsZUNvbGxpZGVzV2l0aENpcmNsZSIsIk51bWJlciIsIk1BWF9WQUxVRSIsImNpcmNsZVZlY3RvciIsInRlc3RQb2ludFZlY3RvciIsImNsb3Nlc3RQb2ludCIsImRpc3RhbmNlIiwic3VyZmFjZVZlY3RvciIsImRyYXdQb2ludCIsInNjYWxhcnMiLCJwb2ludFZlY3RvciIsImFwcGx5IiwibGluZUNvbG9yIiwiYXJjIiwic2F2ZSIsImJlZ2luUGF0aCIsInJlc3RvcmUiLCJTaGFwZSIsImF4ZXMiLCJtaW5pbXVtT3ZlcmxhcCIsImF4aXNXaXRoU21hbGxlc3RPdmVybGFwIiwicHJvamVjdGlvbjEiLCJwcm9qZWN0aW9uMiIsInByb2plY3QiLCJnZXRPdmVybGFwIiwibXR2MSIsIm1pbmltdW1UcmFuc2xhdGlvblZlY3RvciIsImdldEF4ZXMiLCJtdHYyIiwiYzEiLCJjMiIsInBvdyIsImdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZSIsImdldENpcmNsZUF4aXMiLCJjb25jYXQiLCJzZXBhcmF0aW9uT25BeGVzIiwib3ZlcmxhcHMiLCJNVFYiLCJQcm9qZWN0aW9uIiwicHJvamVjdGlvbiIsIlBvbHlnb24iLCJwb2ludFN1bSIsInBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uIiwiZWRnZSIsImNsb3NlUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVDLGNBQVk7QUFDVEEsWUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGFBQU1DLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0gsTUFGRDtBQUdILEVBSkEsR0FBRDs7QUFNQSxLQUFJQyxlQUFKO0FBQUEsS0FBWUMsaUJBQVo7QUFBQSxLQUFzQkMsY0FBdEI7QUFBQSxLQUE2QkMsYUFBN0I7QUFBQSxLQUFtQ0Msa0JBQW5DOztLQUVNTCxJO0FBQ0YscUJBQWM7QUFBQTs7QUFDVixjQUFLTSxJQUFMO0FBQ0EsY0FBS0MsUUFBTDtBQUNBLGNBQUtDLFFBQUw7QUFDSDs7OztnQ0FFTTtBQUNIUCxzQkFBU1EsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFUOztBQUVBUix3QkFBVyxJQUFJUyxLQUFLQyxjQUFULENBQXdCWCxPQUFPWSxLQUEvQixFQUFzQ1osT0FBT2EsTUFBN0MsRUFBcUQ7QUFDNURDLHVCQUFNZCxNQURzRDtBQUU1RGUsNkJBQVksSUFGZ0Q7QUFHNURDLGtDQUFpQjtBQUgyQyxjQUFyRCxDQUFYOztBQU1BLDZCQUFNZixRQUFOLEdBQWlCQSxRQUFqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFDLHFCQUFRLElBQUlRLEtBQUtPLFNBQVQsRUFBUjtBQUNBYix5QkFBWSxJQUFJTSxLQUFLTyxTQUFULEVBQVo7QUFDQWYsbUJBQU1nQixRQUFOLENBQWVkLFNBQWY7O0FBRUFELG9CQUFPLG1CQUFTRixRQUFULENBQVA7O0FBRUFHLHVCQUFVYyxRQUFWLENBQW1CZixJQUFuQjs7QUFFQSxrQkFBS2dCLFVBQUw7QUFDQSxrQkFBS0MsWUFBTDtBQUNIOzs7b0NBRVU7QUFDUHhCLG9CQUFPeUIsUUFBUCxHQUFrQixLQUFLZCxRQUFMLENBQWNlLElBQWQsQ0FBbUIsSUFBbkIsQ0FBbEI7QUFDQTFCLG9CQUFPMkIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS0MsT0FBTCxDQUFhRixJQUFiLENBQWtCLElBQWxCLENBQWpDO0FBQ0g7OztvQ0FFVTtBQUNQLGtCQUFLRixZQUFMO0FBQ0g7OztvQ0FFV0ssRSxFQUFJO0FBQ1osa0JBQUtDLE1BQUwsQ0FBWUQsRUFBWjtBQUNBRSw4QkFBaUIsS0FBS1IsVUFBTCxDQUFnQkcsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBakI7QUFDSDs7O2dDQUVNRyxFLEVBQUk7QUFDUHRCLGtCQUFLdUIsTUFBTDtBQUNBekIsc0JBQVMyQixNQUFULENBQWdCMUIsS0FBaEI7QUFDSDs7O3dDQUVjO0FBQ1gsaUJBQU1VLFFBQVFoQixPQUFPaUMsVUFBUCxHQUFvQmpDLE9BQU9rQyxnQkFBekM7QUFDQSxpQkFBTWpCLFNBQVNqQixPQUFPbUMsV0FBUCxHQUFxQm5DLE9BQU9rQyxnQkFBM0M7O0FBRUE7Ozs7QUFJQTlCLG9CQUFPWSxLQUFQLEdBQWVBLEtBQWY7QUFDQVosb0JBQU9hLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0FiLG9CQUFPZ0MsS0FBUCxDQUFhcEIsS0FBYixHQUFxQkEsUUFBUSxJQUE3QjtBQUNBWixvQkFBT2dDLEtBQVAsQ0FBYW5CLE1BQWIsR0FBc0JBLFNBQVMsSUFBL0I7O0FBRUE7Ozs7QUFJQVosc0JBQVNnQyxNQUFULENBQWdCckIsS0FBaEIsRUFBdUJDLE1BQXZCOztBQUVBLGlCQUFJVixJQUFKLEVBQVU7QUFDTkEsc0JBQUs4QixNQUFMO0FBQ0g7QUFDSjs7O2lDQUVRQyxDLEVBQUc7QUFDUixxQkFBUUEsRUFBRUMsT0FBVjtBQUNJLHNCQUFLLGtCQUFRQyxLQUFiO0FBQ0k7O0FBRUosc0JBQUssa0JBQVFDLEdBQWI7QUFDSTs7QUFFSixzQkFBSyxrQkFBUUMsS0FBYjtBQUNJOztBQUVKLHNCQUFLLGtCQUFRQyxVQUFiO0FBQ0k7O0FBRUosc0JBQUssa0JBQVFDLFFBQWI7QUFDSTs7QUFFSixzQkFBSyxrQkFBUUMsVUFBYjtBQUNJOztBQUVKLHNCQUFLLGtCQUFRQyxXQUFiO0FBQ0k7O0FBRUosc0JBQUssa0JBQVFDLFVBQWI7QUFDSUMsNkJBQVFDLEtBQVI7QUFDQTtBQXhCUjtBQTBCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhMLEtBQU1DLFVBQVUsTUFBTUMsS0FBS0MsRUFBM0I7O0FBR0EsVUFBU0MsTUFBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3ZCLFlBQU9KLEtBQUtLLEtBQUwsQ0FBV0wsS0FBS0UsTUFBTCxNQUFpQkUsTUFBTUQsR0FBTixHQUFZLENBQTdCLElBQWtDQSxHQUE3QyxDQUFQO0FBQ0g7O0FBRUQsVUFBU0csY0FBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDMUIsWUFBT0EsTUFBTVIsT0FBYjtBQUNIOztBQUVELFVBQVNTLGNBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQzFCLFlBQU9BLE1BQU1WLE9BQWI7QUFDSDs7QUFHRDs7Ozs7S0FJcUJXLE07Ozs7QUFFakI7Ozs7Ozs7Ozs7Ozs7O21DQWNpQkMsRyxFQUNqQjtBQUNJLG9CQUFPLElBQUlELE1BQUosQ0FBV0MsSUFBSSxDQUFKLEtBQVUsQ0FBckIsRUFBd0JBLElBQUksQ0FBSixLQUFVLENBQWxDLENBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBY2tCQyxHLEVBQ2xCO0FBQ0ksb0JBQU8sSUFBSUYsTUFBSixDQUFXRSxJQUFJQyxDQUFKLElBQVMsQ0FBcEIsRUFBdUJELElBQUlFLENBQUosSUFBUyxDQUFoQyxDQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7OztBQVlBLHVCQUNBO0FBQUEsYUFEWUQsQ0FDWix1RUFEZ0IsQ0FDaEI7QUFBQSxhQURtQkMsQ0FDbkIsdUVBRHVCLENBQ3ZCOztBQUFBOztBQUNJLGFBQUksRUFBRSxnQkFBZ0JKLE1BQWxCLENBQUosRUFBK0I7QUFDM0Isb0JBQU8sSUFBSUEsTUFBSixDQUFXRyxDQUFYLEVBQWNDLENBQWQsQ0FBUDtBQUNIOztBQUVELGNBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLGNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWVLQyxHLEVBQ0w7QUFDSSxrQkFBS0YsQ0FBTCxJQUFVRSxJQUFJRixDQUFkO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBZUtFLEcsRUFDTDtBQUNJLGtCQUFLRCxDQUFMLElBQVVDLElBQUlELENBQWQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFlSUMsRyxFQUNKO0FBQ0ksa0JBQUtGLENBQUwsSUFBVUUsSUFBSUYsQ0FBZDtBQUNBLGtCQUFLQyxDQUFMLElBQVVDLElBQUlELENBQWQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7Ozs7O0FBUUQ7Ozs7Ozs7Ozs7Ozs7O21DQWNVRSxNLEVBQ1Y7QUFDSSxrQkFBS0gsQ0FBTCxJQUFVRyxNQUFWO0FBQ0Esa0JBQUtGLENBQUwsSUFBVUUsTUFBVjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBY1dBLE0sRUFDWDtBQUNJLGtCQUFLSCxDQUFMLElBQVVHLE1BQVY7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWNXQSxNLEVBQ1g7QUFDSSxrQkFBS0YsQ0FBTCxJQUFVRSxNQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBZVVELEcsRUFDVjtBQUNJLGtCQUFLRixDQUFMLElBQVVFLElBQUlGLENBQWQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FlVUUsRyxFQUNWO0FBQ0ksa0JBQUtELENBQUwsSUFBVUMsSUFBSUQsQ0FBZDtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQWVTQyxHLEVBQ1Q7QUFDSSxrQkFBS0YsQ0FBTCxJQUFVRSxJQUFJRixDQUFkO0FBQ0Esa0JBQUtDLENBQUwsSUFBVUMsSUFBSUQsQ0FBZDtBQUNBLG9CQUFPLElBQVA7QUFDSDs7OzhCQVNJQyxHLEVBQ0w7QUFDSSxvQkFBTyxLQUFLRSxRQUFMLENBQWNGLEdBQWQsQ0FBUDtBQUNIOzs7OztBQVNEOzs7Ozs7Ozs7Ozs7Ozt3Q0FjZUMsTSxFQUNmO0FBQ0ksa0JBQUtILENBQUwsSUFBVUcsTUFBVjtBQUNBLGtCQUFLRixDQUFMLElBQVVFLE1BQVY7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQWNnQkEsTSxFQUNoQjtBQUNJLGtCQUFLSCxDQUFMLElBQVVHLE1BQVY7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQWNnQkEsTSxFQUNoQjtBQUNJLGtCQUFLRixDQUFMLElBQVVFLE1BQVY7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FlUUUsTSxFQUNSO0FBQ0ksa0JBQUtMLENBQUwsSUFBVUssT0FBT0wsQ0FBakI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FlUUssTSxFQUNSO0FBQ0ksa0JBQUtKLENBQUwsSUFBVUksT0FBT0osQ0FBakI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FlT0ksTSxFQUNQO0FBQ0ksa0JBQUtMLENBQUwsSUFBVUssT0FBT0wsQ0FBakI7QUFDQSxrQkFBS0MsQ0FBTCxJQUFVSSxPQUFPSixDQUFqQjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7Ozs7QUFTRDs7Ozs7Ozs7Ozs7Ozs7c0NBY2FFLE0sRUFDYjtBQUNJLGlCQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDZCxzQkFBS0gsQ0FBTCxJQUFVRyxNQUFWO0FBQ0Esc0JBQUtGLENBQUwsSUFBVUUsTUFBVjtBQUNILGNBSEQsTUFHTztBQUNILHNCQUFLSCxDQUFMLEdBQVMsQ0FBVDtBQUNBLHNCQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNIOztBQUVELG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBY2NFLE0sRUFDZDtBQUNJLGlCQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDZCxzQkFBS0gsQ0FBTCxJQUFVRyxNQUFWO0FBQ0gsY0FGRCxNQUVPO0FBQ0gsc0JBQUtILENBQUwsR0FBUyxDQUFUO0FBQ0g7QUFDRCxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQWNjRyxNLEVBQ2Q7QUFDSSxpQkFBSUEsV0FBVyxDQUFmLEVBQWtCO0FBQ2Qsc0JBQUtGLENBQUwsSUFBVUUsTUFBVjtBQUNILGNBRkQsTUFFTztBQUNILHNCQUFLRixDQUFMLEdBQVMsQ0FBVDtBQUNIO0FBQ0Qsb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7O21DQWNBO0FBQ0ksa0JBQUtELENBQUwsSUFBVSxDQUFDLENBQVg7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBY0E7QUFDSSxrQkFBS0MsQ0FBTCxJQUFVLENBQUMsQ0FBWDtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7OztrQ0FjQTtBQUNJLGtCQUFLSyxPQUFMO0FBQ0Esa0JBQUtDLE9BQUw7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7Ozs7O0FBYUQ7Ozs7Ozs7Ozs7Ozs7OzttQ0FlVUYsTSxFQUNWO0FBQ0ksa0JBQUtMLENBQUwsSUFBVUssT0FBT0wsQ0FBakI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FlVUssTSxFQUNWO0FBQ0ksa0JBQUtKLENBQUwsSUFBVUksT0FBT0osQ0FBakI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FlU0ksTSxFQUNUO0FBQ0ksa0JBQUtMLENBQUwsSUFBVUssT0FBT0wsQ0FBakI7QUFDQSxrQkFBS0MsQ0FBTCxJQUFVSSxPQUFPSixDQUFqQjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBY2VFLE0sRUFDZjtBQUNJLGtCQUFLSCxDQUFMLElBQVVHLE1BQVY7QUFDQSxrQkFBS0YsQ0FBTCxJQUFVRSxNQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOzs7eUNBZWVBLE0sRUFDaEI7QUFDSSxrQkFBS0gsQ0FBTCxJQUFVRyxNQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOzs7eUNBR2VBLE0sRUFDaEI7QUFDSSxrQkFBS0YsQ0FBTCxJQUFVRSxNQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7O3lDQUtBO0FBQ0ksb0JBQU8sSUFBSU4sTUFBSixDQUFXLENBQUMsS0FBS0ksQ0FBakIsRUFBb0IsS0FBS0QsQ0FBekIsQ0FBUDtBQUNIOzs7OztBQVlEOzs7K0NBSUE7QUFDSSxvQkFBTyxJQUFJSCxNQUFKLENBQVcsS0FBS0ksQ0FBaEIsRUFBbUIsQ0FBQyxLQUFLRCxDQUF6QixDQUFQO0FBQ0g7Ozs7O0FBNEJEOzs7Ozs7cUNBT0E7QUFDSSxpQkFBTVEsU0FBUyxLQUFLQSxNQUFMLEVBQWY7O0FBRUEsaUJBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNkLHNCQUFLUixDQUFMLEdBQVMsQ0FBVDtBQUNBLHNCQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNILGNBSEQsTUFHTztBQUNILHNCQUFLUSxNQUFMLENBQVksSUFBSVosTUFBSixDQUFXVyxNQUFYLEVBQW1CQSxNQUFuQixDQUFaO0FBQ0g7QUFDRCxvQkFBTyxJQUFQO0FBQ0g7OztnQ0FJRDtBQUNJLG9CQUFPLEtBQUtFLFNBQUwsRUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBZU1uQixHLEVBQUtvQixNLEVBQ1g7QUFDSSxpQkFBSXhCLEtBQUt5QixHQUFMLENBQVMsS0FBS1osQ0FBZCxJQUFtQlQsR0FBdkIsRUFBMkI7QUFBRSxzQkFBS1MsQ0FBTCxJQUFVVyxNQUFWO0FBQW1CO0FBQ2hELGlCQUFJeEIsS0FBS3lCLEdBQUwsQ0FBUyxLQUFLWCxDQUFkLElBQW1CVixHQUF2QixFQUEyQjtBQUFFLHNCQUFLVSxDQUFMLElBQVVVLE1BQVY7QUFBbUI7QUFDaEQsb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBZVVFLE8sRUFBU0MsVyxFQUNuQjtBQUNJLGtCQUFLQyxVQUFMLENBQWdCRixPQUFoQixFQUF5QkMsV0FBekI7QUFDQSxrQkFBS0UsVUFBTCxDQUFnQkgsT0FBaEIsRUFBeUJDLFdBQXpCOztBQUVBLG9CQUFPLElBQVA7QUFDSDs7O29DQVNVRCxPLEVBQVNDLFcsRUFDcEI7QUFDSSxpQkFBSXhCLE1BQU1ILEtBQUtHLEdBQUwsQ0FBU3VCLFFBQVFiLENBQWpCLEVBQW9CYyxZQUFZZCxDQUFoQyxDQUFWO0FBQ0EsaUJBQUlULE1BQU1KLEtBQUtJLEdBQUwsQ0FBU3NCLFFBQVFiLENBQWpCLEVBQW9CYyxZQUFZZCxDQUFoQyxDQUFWO0FBQ0Esa0JBQUtBLENBQUwsR0FBU1gsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLENBQVQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7OztvQ0FXVXNCLE8sRUFBU0MsVyxFQUNwQjtBQUNJLGlCQUFJeEIsTUFBTUgsS0FBS0csR0FBTCxDQUFTdUIsUUFBUVosQ0FBakIsRUFBb0JhLFlBQVliLENBQWhDLENBQVY7QUFDQSxpQkFBSVYsTUFBTUosS0FBS0ksR0FBTCxDQUFTc0IsUUFBUVosQ0FBakIsRUFBb0JhLFlBQVliLENBQWhDLENBQVY7QUFDQSxrQkFBS0EsQ0FBTCxHQUFTWixPQUFPQyxHQUFQLEVBQVlDLEdBQVosQ0FBVDtBQUNBLG9CQUFPLElBQVA7QUFDSDs7Ozs7QUFXRDs7Ozs7Ozs7Ozs7Ozs7O3NDQWVhc0IsTyxFQUFTQyxXLEVBQ3RCO0FBQ0ksaUJBQUksQ0FBQyxDQUFFM0IsS0FBSzhCLEtBQUwsQ0FBVzlCLEtBQUtFLE1BQUwsRUFBWCxDQUFQLEVBQWtDO0FBQzlCLHNCQUFLMEIsVUFBTCxDQUFnQkYsT0FBaEIsRUFBeUJDLFdBQXpCO0FBQ0gsY0FGRCxNQUVPO0FBQ0gsc0JBQUtFLFVBQUwsQ0FBZ0JILE9BQWhCLEVBQXlCQyxXQUF6QjtBQUNIO0FBQ0Qsb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7O21DQWNBO0FBQ0ksa0JBQUtkLENBQUwsR0FBU2IsS0FBSzhCLEtBQUwsQ0FBVyxLQUFLakIsQ0FBaEIsQ0FBVDtBQUNBLGtCQUFLQyxDQUFMLEdBQVNkLEtBQUs4QixLQUFMLENBQVcsS0FBS2hCLENBQWhCLENBQVQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQWNRaUIsUyxFQUNSO0FBQ0ksaUJBQUksT0FBT0EsU0FBUCxLQUFxQixXQUF6QixFQUFzQztBQUFFQSw2QkFBWSxDQUFaO0FBQWdCO0FBQ3hELGtCQUFLbEIsQ0FBTCxHQUFTLEtBQUtBLENBQUwsQ0FBT21CLE9BQVAsQ0FBZUQsU0FBZixDQUFUO0FBQ0Esa0JBQUtqQixDQUFMLEdBQVMsS0FBS0EsQ0FBTCxDQUFPa0IsT0FBUCxDQUFlRCxTQUFmLENBQVQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBZ0JLaEIsRyxFQUFLa0IsTSxFQUNWO0FBQ0ksaUJBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUMvQkEsMEJBQVMsR0FBVDtBQUNIOztBQUVELGtCQUFLcEIsQ0FBTCxHQUFTLENBQUMsSUFBSW9CLE1BQUwsSUFBZSxLQUFLcEIsQ0FBcEIsR0FBd0JvQixTQUFTbEIsSUFBSUYsQ0FBOUM7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBZ0JLRSxHLEVBQUtrQixNLEVBQ1Y7QUFDSSxpQkFBSSxPQUFPQSxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQy9CQSwwQkFBUyxHQUFUO0FBQ0g7O0FBRUQsa0JBQUtuQixDQUFMLEdBQVMsQ0FBQyxJQUFJbUIsTUFBTCxJQUFlLEtBQUtuQixDQUFwQixHQUF3Qm1CLFNBQVNsQixJQUFJRCxDQUE5QztBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFnQklDLEcsRUFBS2tCLE0sRUFDVDtBQUNJLGtCQUFLQyxJQUFMLENBQVVuQixHQUFWLEVBQWVrQixNQUFmO0FBQ0Esa0JBQUtFLElBQUwsQ0FBVXBCLEdBQVYsRUFBZWtCLE1BQWY7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztpQ0FjQTtBQUNJLG9CQUFPLElBQUl2QixNQUFKLENBQVcsS0FBS0csQ0FBaEIsRUFBbUIsS0FBS0MsQ0FBeEIsQ0FBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OzsrQkFjTUMsRyxFQUNOO0FBQ0ksa0JBQUtGLENBQUwsR0FBU0UsSUFBSUYsQ0FBYjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBY01FLEcsRUFDTjtBQUNJLGtCQUFLRCxDQUFMLEdBQVNDLElBQUlELENBQWI7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWNLQyxHLEVBQ0w7QUFDSSxrQkFBS3FCLEtBQUwsQ0FBV3JCLEdBQVg7QUFDQSxrQkFBS3NCLEtBQUwsQ0FBV3RCLEdBQVg7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7OztnQ0FhQTtBQUNJLGtCQUFLRixDQUFMLEdBQVMsS0FBS0MsQ0FBTCxHQUFTLENBQWxCO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7OztnQ0FNQTtBQUNJLGlCQUFNd0IsT0FBTyxLQUFLekIsQ0FBbEI7QUFDQSxrQkFBS0EsQ0FBTCxHQUFTLEtBQUtDLENBQWQ7QUFDQSxrQkFBS0EsQ0FBTCxHQUFTLENBQUN3QixJQUFWO0FBQ0Esb0JBQU8sSUFBUDtBQUNIOztBQUdEOzs7Ozs7OztpQ0FNQTtBQUNJLGlCQUFNQSxPQUFPLEtBQUt6QixDQUFsQjtBQUNBLGtCQUFLQSxDQUFMLEdBQVMsQ0FBQyxLQUFLQyxDQUFmO0FBQ0Esa0JBQUtBLENBQUwsR0FBU3dCLElBQVQ7QUFDQSxvQkFBTyxJQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWNJQyxJLEVBQ0o7QUFDSSxvQkFBTyxLQUFLMUIsQ0FBTCxHQUFTMEIsS0FBSzFCLENBQWQsR0FBa0IsS0FBS0MsQ0FBTCxHQUFTeUIsS0FBS3pCLENBQXZDO0FBQ0g7OztvQ0FHVUMsRyxFQUNYO0FBQ0ksb0JBQU8sS0FBS3lCLEdBQUwsQ0FBU3pCLEdBQVQsQ0FBUDtBQUNIOzs7K0JBU0t3QixJLEVBQ047QUFDSSxvQkFBUSxLQUFLMUIsQ0FBTCxHQUFTMEIsS0FBS3pCLENBQWYsR0FBcUIsS0FBS0EsQ0FBTCxHQUFTeUIsS0FBSzFCLENBQTFDO0FBQ0g7Ozs7O0FBNEJEOzs7Ozs7Ozs7Ozs7Ozs7cUNBZVkwQixJLEVBQ1o7QUFDSSxpQkFBSUUsUUFBUSxDQUFHLEtBQUs1QixDQUFMLEdBQVMwQixLQUFLMUIsQ0FBZixHQUFtQixLQUFLQyxDQUFMLEdBQVN5QixLQUFLekIsQ0FBbkMsS0FBNEN5QixLQUFLMUIsQ0FBTCxHQUFPMEIsS0FBSzFCLENBQWIsR0FBaUIwQixLQUFLekIsQ0FBTCxHQUFPeUIsS0FBS3pCLENBQXhFLENBQVo7QUFDQSxrQkFBS0QsQ0FBTCxHQUFTNEIsUUFBUUYsS0FBSzFCLENBQXRCO0FBQ0Esa0JBQUtDLENBQUwsR0FBUzJCLFFBQVFGLEtBQUt6QixDQUF0QjtBQUNBLG9CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7MkNBdUJBO0FBQ0ksb0JBQU9kLEtBQUswQyxLQUFMLENBQVcsS0FBSzVCLENBQWhCLEVBQW1CLEtBQUtELENBQXhCLENBQVA7QUFDSDs7OzhDQUlEO0FBQ0ksb0JBQU9QLGVBQWUsS0FBS3FDLGVBQUwsRUFBZixDQUFQO0FBQ0g7Ozt5Q0FJRDtBQUNJLG9CQUFPM0MsS0FBSzBDLEtBQUwsQ0FBVyxLQUFLN0IsQ0FBaEIsRUFBbUIsS0FBS0MsQ0FBeEIsQ0FBUDtBQUNIOzs7NENBSUQ7QUFDSSxvQkFBT1IsZUFBZSxLQUFLc0MsYUFBTCxFQUFmLENBQVA7QUFDSDs7O2lDQUlEO0FBQ0ksb0JBQU8sS0FBS0QsZUFBTCxFQUFQO0FBQ0g7OztvQ0FJRDtBQUNJLG9CQUFPLEtBQUtFLGtCQUFMLEVBQVA7QUFDSDs7O3FDQUlEO0FBQ0ksb0JBQU8sS0FBS0YsZUFBTCxFQUFQO0FBQ0g7OztnQ0FHTUcsSyxFQUNQO0FBQ0ksaUJBQUlDLEtBQU0sS0FBS2xDLENBQUwsR0FBU2IsS0FBS2dELEdBQUwsQ0FBU0YsS0FBVCxDQUFWLEdBQThCLEtBQUtoQyxDQUFMLEdBQVNkLEtBQUtpRCxHQUFMLENBQVNILEtBQVQsQ0FBaEQ7QUFDQSxpQkFBSUksS0FBTSxLQUFLckMsQ0FBTCxHQUFTYixLQUFLaUQsR0FBTCxDQUFTSCxLQUFULENBQVYsR0FBOEIsS0FBS2hDLENBQUwsR0FBU2QsS0FBS2dELEdBQUwsQ0FBU0YsS0FBVCxDQUFoRDs7QUFFQSxrQkFBS2pDLENBQUwsR0FBU2tDLEVBQVQ7QUFDQSxrQkFBS2pDLENBQUwsR0FBU29DLEVBQVQ7O0FBRUEsb0JBQU8sSUFBUDtBQUNIOzs7bUNBR1NKLEssRUFDVjtBQUNJQSxxQkFBUXRDLGVBQWVzQyxLQUFmLENBQVI7QUFDQSxvQkFBTyxLQUFLSyxNQUFMLENBQVlMLEtBQVosQ0FBUDtBQUNIOzs7a0NBR1FNLFEsRUFDVDtBQUNJLG9CQUFPLEtBQUtELE1BQUwsQ0FBWUMsV0FBUyxLQUFLTixLQUFMLEVBQXJCLENBQVA7QUFDSDs7O3FDQUdXTSxRLEVBQ1o7QUFDSUEsd0JBQVc1QyxlQUFlNEMsUUFBZixDQUFYO0FBQ0Esb0JBQU8sS0FBS0MsUUFBTCxDQUFjRCxRQUFkLENBQVA7QUFDSDs7O2tDQUdRQSxRLEVBQ1Q7QUFDSSxpQkFBSU4sUUFBUSxLQUFLQSxLQUFMLEtBQWVNLFFBQTNCOztBQUVBLG9CQUFPLEtBQUtELE1BQUwsQ0FBWUwsS0FBWixDQUFQO0FBQ0g7OztxQ0FHV00sUSxFQUNaO0FBQ0lBLHdCQUFXNUMsZUFBZTRDLFFBQWYsQ0FBWDtBQUNBLG9CQUFPLEtBQUtFLFFBQUwsQ0FBY0YsUUFBZCxDQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWNVckMsRyxFQUNWO0FBQ0ksb0JBQU8sS0FBS0YsQ0FBTCxHQUFTRSxJQUFJRixDQUFwQjtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FjYUUsRyxFQUNiO0FBQ0ksb0JBQU9mLEtBQUt5QixHQUFMLENBQVMsS0FBSzhCLFNBQUwsQ0FBZXhDLEdBQWYsQ0FBVCxDQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWNVQSxHLEVBQ1Y7QUFDSSxvQkFBTyxLQUFLRCxDQUFMLEdBQVNDLElBQUlELENBQXBCO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQWNhQyxHLEVBQ2I7QUFDSSxvQkFBT2YsS0FBS3lCLEdBQUwsQ0FBUyxLQUFLK0IsU0FBTCxDQUFlekMsR0FBZixDQUFULENBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBY1NBLEcsRUFDVDtBQUNJLG9CQUFPZixLQUFLeUQsSUFBTCxDQUFVLEtBQUtDLFVBQUwsQ0FBZ0IzQyxHQUFoQixDQUFWLENBQVA7QUFDSDs7O3dDQUlEO0FBQ0ksb0JBQU8sS0FBSzRDLFNBQUwsRUFBUDtBQUNIOzs7K0NBSUQ7QUFDSSxvQkFBTyxLQUFLOUMsQ0FBTCxHQUFTLEtBQUtBLENBQWQsR0FBa0IsS0FBS0MsQ0FBTCxHQUFTLEtBQUtBLENBQXZDO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWNXQyxHLEVBQ1g7QUFDSSxpQkFBSTZDLEtBQUssS0FBS0wsU0FBTCxDQUFleEMsR0FBZixDQUFUO0FBQUEsaUJBQ0k4QyxLQUFLLEtBQUtMLFNBQUwsQ0FBZXpDLEdBQWYsQ0FEVDs7QUFHQSxvQkFBTzZDLEtBQUtBLEVBQUwsR0FBVUMsS0FBS0EsRUFBdEI7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7O2tDQWFBO0FBQ0ksb0JBQU83RCxLQUFLeUQsSUFBTCxDQUFVLEtBQUtLLFFBQUwsRUFBVixDQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWVBO0FBQ0ksb0JBQU8sS0FBS2pELENBQUwsR0FBUyxLQUFLQSxDQUFkLEdBQWtCLEtBQUtDLENBQUwsR0FBUyxLQUFLQSxDQUF2QztBQUNIOzs7cUNBVUQ7QUFDSSxvQkFBTyxLQUFLTyxNQUFMLEVBQVA7QUFDSDs7OzRCQUdFTixHLEVBQ0g7QUFDSSxvQkFBTyxJQUFJTCxNQUFKLENBQVdLLElBQUlGLENBQUosR0FBUSxLQUFLQSxDQUF4QixFQUEyQkUsSUFBSUQsQ0FBSixHQUFRLEtBQUtBLENBQXhDLENBQVA7QUFDSDs7OzZCQUdHQyxHLEVBQ0o7QUFDSSxrQkFBS0YsQ0FBTCxHQUFTRSxJQUFJRixDQUFiO0FBQ0Esa0JBQUtDLENBQUwsR0FBU0MsSUFBSUQsQ0FBYjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7a0NBYUE7QUFDSSxvQkFBTyxLQUFLRCxDQUFMLEtBQVcsQ0FBWCxJQUFnQixLQUFLQyxDQUFMLEtBQVcsQ0FBbEM7QUFDSDs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7OzttQ0FhVXlCLEksRUFDVjtBQUNJLG9CQUFPLEtBQUsxQixDQUFMLEtBQVcwQixLQUFLMUIsQ0FBaEIsSUFBcUIsS0FBS0MsQ0FBTCxLQUFXeUIsS0FBS3pCLENBQTVDO0FBQ0g7O0FBR0Q7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O29DQWFBO0FBQ0ksb0JBQU8sT0FBTyxLQUFLRCxDQUFaLEdBQWdCLE1BQWhCLEdBQXlCLEtBQUtDLENBQXJDO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7OzttQ0FhQTtBQUNJLG9CQUFPLENBQUUsS0FBS0QsQ0FBUCxFQUFVLEtBQUtDLENBQWYsQ0FBUDtBQUNIOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7b0NBYUE7QUFDSSxvQkFBTyxFQUFFRCxHQUFHLEtBQUtBLENBQVYsRUFBYUMsR0FBRyxLQUFLQSxDQUFyQixFQUFQO0FBQ0g7Ozs2QkFoOUNVaUQsQyxFQUFHQyxDLEVBQ2Q7QUFDSSxvQkFBTyxJQUFJdEQsTUFBSixDQUFXcUQsRUFBRWxELENBQUYsR0FBTW1ELEVBQUVuRCxDQUFuQixFQUFzQmtELEVBQUVqRCxDQUFGLEdBQU1rRCxFQUFFbEQsQ0FBOUIsQ0FBUDtBQUNIOzs7a0NBcUllaUQsQyxFQUFHQyxDLEVBQ25CO0FBQ0ksb0JBQU8sSUFBSXRELE1BQUosQ0FBV3FELEVBQUVsRCxDQUFGLEdBQU1tRCxFQUFFbkQsQ0FBbkIsRUFBc0JrRCxFQUFFakQsQ0FBRixHQUFNa0QsRUFBRWxELENBQTlCLENBQVA7QUFDSDs7OzhCQVNXaUQsQyxFQUFHQyxDLEVBQ2Y7QUFDSSxvQkFBT3RELE9BQU9PLFFBQVAsQ0FBZ0I4QyxDQUFoQixFQUFtQkMsQ0FBbkIsQ0FBUDtBQUNIOzs7Z0NBc0lhRCxDLEVBQUdDLEMsRUFDakI7QUFDSSxvQkFBTyxJQUFJdEQsTUFBSixDQUFXcUQsRUFBRWxELENBQUYsR0FBTW1ELEVBQUVuRCxDQUFuQixFQUFzQmtELEVBQUVqRCxDQUFGLEdBQU1rRCxFQUFFbEQsQ0FBOUIsQ0FBUDtBQUNIOzs7Z0NBOElhQyxHLEVBQ2Q7QUFDSSxpQkFBTWtELElBQUlsRCxJQUFJbUQsS0FBSixFQUFWO0FBQ0FELGVBQUVwRCxDQUFGLEdBQU0sQ0FBQ0UsSUFBSUYsQ0FBWDtBQUNBb0QsZUFBRW5ELENBQUYsR0FBTSxDQUFDQyxJQUFJRCxDQUFYO0FBQ0Esb0JBQU9tRCxDQUFQO0FBQ0g7Ozt3Q0E0RnFCL0MsTSxFQUFRRixNLEVBQzlCO0FBQ0ksb0JBQU8sSUFBSU4sTUFBSixDQUFXUSxPQUFPTCxDQUFQLEdBQVdHLE1BQXRCLEVBQThCRSxPQUFPSixDQUFQLEdBQVdFLE1BQXpDLENBQVA7QUFDSDs7O3NDQUdtQkUsTSxFQUFRRixNLEVBQzVCO0FBQ0ksb0JBQU8sSUFBSU4sTUFBSixDQUFXUSxPQUFPTCxDQUFQLEdBQVdHLE1BQXRCLEVBQThCRSxPQUFPSixDQUFQLEdBQVdFLE1BQXpDLENBQVA7QUFDSDs7O3VDQTJCb0JELEcsRUFDckI7QUFDSSxpQkFBTW1ELFFBQVFuRCxJQUFJbUQsS0FBSixFQUFkO0FBQ0FBLG1CQUFNckQsQ0FBTixHQUFVLENBQUNFLElBQUlELENBQWY7QUFDQW9ELG1CQUFNcEQsQ0FBTixHQUFVQyxJQUFJRixDQUFkO0FBQ0Esb0JBQU9xRCxLQUFQO0FBQ0g7Ozs2Q0FZMEJuRCxHLEVBQzNCO0FBQ0ksaUJBQU1tRCxRQUFRbkQsSUFBSW1ELEtBQUosRUFBZDtBQUNBQSxtQkFBTXJELENBQU4sR0FBVUUsSUFBSUQsQ0FBZDtBQUNBb0QsbUJBQU1wRCxDQUFOLEdBQVUsQ0FBQ0MsSUFBSUYsQ0FBZjtBQUNBLG9CQUFPcUQsS0FBUDtBQUNIOztBQUdEOzs7Ozs7OztrQ0FLZ0JuRCxHLEVBQUtNLE0sRUFDckI7QUFDSSxpQkFBTThDLE1BQU1wRCxJQUFJbUQsS0FBSixFQUFaO0FBQ0EsaUJBQU1KLFdBQVcvQyxJQUFJRixDQUFKLEdBQVFFLElBQUlGLENBQVosR0FBZ0JFLElBQUlELENBQUosR0FBUUMsSUFBSUQsQ0FBN0M7QUFDQSxpQkFBSWdELFdBQVd6QyxTQUFTQSxNQUF4QixFQUFnQztBQUM1QjhDLHFCQUFJQyxjQUFKLENBQW1CL0MsU0FBU3JCLEtBQUt5RCxJQUFMLENBQVVLLFFBQVYsQ0FBNUI7QUFDSDtBQUNELG9CQUFPSyxHQUFQO0FBQ0g7OzttQ0E0RWdCekMsTyxFQUFTQyxXLEVBQzFCO0FBQ0ksb0JBQU8sSUFBSWpCLE1BQUosQ0FBVyxLQUFLa0IsVUFBTCxDQUFnQkYsT0FBaEIsRUFBeUJDLFdBQXpCLENBQVgsRUFBa0QsS0FBS0UsVUFBTCxDQUFnQkgsT0FBaEIsRUFBeUJDLFdBQXpCLENBQWxELENBQVA7QUFDSDs7O29DQVlpQkQsTyxFQUFTQyxXLEVBQzNCO0FBQ0ksaUJBQU14QixNQUFNSCxLQUFLRyxHQUFMLENBQVN1QixRQUFRYixDQUFqQixFQUFvQmMsWUFBWWQsQ0FBaEMsQ0FBWjtBQUNBLGlCQUFNVCxNQUFNSixLQUFLSSxHQUFMLENBQVNzQixRQUFRYixDQUFqQixFQUFvQmMsWUFBWWQsQ0FBaEMsQ0FBWjtBQUNBLG9CQUFPWCxPQUFPQyxHQUFQLEVBQVlDLEdBQVosQ0FBUDtBQUNIOzs7b0NBWWlCc0IsTyxFQUFTQyxXLEVBQzNCO0FBQ0ksaUJBQU14QixNQUFNSCxLQUFLRyxHQUFMLENBQVN1QixRQUFRWixDQUFqQixFQUFvQmEsWUFBWWIsQ0FBaEMsQ0FBWjtBQUNBLGlCQUFNVixNQUFNSixLQUFLSSxHQUFMLENBQVNzQixRQUFRWixDQUFqQixFQUFvQmEsWUFBWWIsQ0FBaEMsQ0FBWjtBQUNBLG9CQUFPWixPQUFPQyxHQUFQLEVBQVlDLEdBQVosQ0FBUDtBQUNIOzs7b0NBc1RpQjJELEMsRUFBR0MsQyxFQUNyQjtBQUNJLG9CQUFPRCxFQUFFbEQsQ0FBRixHQUFNbUQsRUFBRW5ELENBQVIsR0FBWWtELEVBQUVqRCxDQUFGLEdBQU1rRCxFQUFFbEQsQ0FBM0I7QUFDSDs7OytCQVNZaUQsQyxFQUFHQyxDLEVBQ2hCO0FBQ0ksb0JBQU9ELEVBQUVsRCxDQUFGLEdBQU1tRCxFQUFFbEQsQ0FBUixHQUFZaUQsRUFBRWpELENBQUYsR0FBTWtELEVBQUVuRCxDQUEzQjtBQUNIOztBQUdEOzs7Ozs7Ozt1Q0FLcUJrRCxDLEVBQUdDLEMsRUFBR0ssQyxFQUMzQjtBQUNJLGlCQUFNQyxJQUFJLElBQUk1RCxNQUFKLEVBQVY7QUFDQSxpQkFBTTZELEtBQUtSLEVBQUVsRCxDQUFGLEdBQU13RCxFQUFFeEQsQ0FBUixHQUFZa0QsRUFBRWpELENBQUYsR0FBTXVELEVBQUV2RCxDQUEvQixDQUFvQztBQUFwQztBQUFBLGlCQUNNMEQsS0FBS1IsRUFBRW5ELENBQUYsR0FBTXdELEVBQUV4RCxDQUFSLEdBQVltRCxFQUFFbEQsQ0FBRixHQUFNdUQsRUFBRXZELENBRC9CLENBRkosQ0FHd0M7O0FBRXBDO0FBQ0F3RCxlQUFFekQsQ0FBRixHQUFNbUQsRUFBRW5ELENBQUYsR0FBTTBELEVBQU4sR0FBV1IsRUFBRWxELENBQUYsR0FBTTJELEVBQXZCO0FBQ0FGLGVBQUV4RCxDQUFGLEdBQU1rRCxFQUFFbEQsQ0FBRixHQUFNeUQsRUFBTixHQUFXUixFQUFFakQsQ0FBRixHQUFNMEQsRUFBdkI7O0FBRUEsb0JBQU9GLENBQVA7QUFDSDs7OzhCQW1DV0csSSxFQUFNbEMsSSxFQUFNbUMsRSxFQUFJO0FBQ3hCLG9CQUFPaEUsT0FBT2lFLEdBQVAsQ0FBV2pFLE9BQU8wRCxjQUFQLENBQXNCSyxJQUF0QixFQUE0QixJQUFJQyxFQUFoQyxDQUFYLEVBQWdEaEUsT0FBTzBELGNBQVAsQ0FBc0I3QixJQUF0QixFQUE0Qm1DLEVBQTVCLENBQWhELENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7NkJBS1d4RCxNLEVBQVE7QUFDZixvQkFBTyxJQUFJUixNQUFKLENBQVcsSUFBSVEsT0FBT0wsQ0FBdEIsRUFBeUIsSUFBSUssT0FBT0osQ0FBcEMsQ0FBUDtBQUNIOzs7a0NBeVFlQyxHLEVBQ2hCO0FBQ0ksb0JBQU9BLElBQUlGLENBQUosR0FBUUUsSUFBSUYsQ0FBWixHQUFnQkUsSUFBSUQsQ0FBSixHQUFRQyxJQUFJRCxDQUFuQztBQUNIOzs7Ozs7bUJBbitDZ0JKLE07Ozs7Ozs7Ozs7Ozs7Ozs7O0tDdEJBa0UsSzs7Ozs7Ozs7O0FBaUVqQjs7Ozs7Ozs7dUNBUXFCQyxTLEVBQVdDLFksRUFBY0MsUSxFQUFVQyxXLEVBQWE7QUFDakUsaUJBQUlDLFFBQVFILGFBQWFqRSxDQUFiLEdBQWlCZ0UsVUFBVWhFLENBQXZDOztBQUVBLGlCQUFJb0UsUUFBUSxDQUFaLEVBQWU7QUFDWEEseUJBQVFBLFFBQVEsQ0FBQyxDQUFqQjtBQUNIOztBQUVELGlCQUFJQyxRQUFRSixhQUFhaEUsQ0FBYixHQUFpQitELFVBQVUvRCxDQUF2Qzs7QUFFQSxpQkFBSW9FLFFBQVEsQ0FBWixFQUFlO0FBQ1hBLHlCQUFRQSxRQUFRLENBQUMsQ0FBakI7QUFDSDs7QUFFRCxpQkFBSUQsUUFBUSxDQUFSLElBQWFDLFFBQVEsQ0FBekIsRUFBNEI7QUFDeEIsd0JBQU8sS0FBUDtBQUNIOztBQUVELGlCQUFJRixjQUFjRCxRQUFkLEdBQXlCLEdBQTdCLEVBQWtDO0FBQzlCLHdCQUFPLEtBQVA7QUFDSDs7QUFFRCxvQkFBTyxJQUFQO0FBQ0g7Ozs2QkE1RkQ7QUFDSSxvQkFBTyxLQUFLN0gsUUFBTCxDQUFjaUksT0FBZCxDQUFzQkMsV0FBdEIsQ0FBa0NDLEtBQXpDO0FBQ0g7Ozs2QkFHRDtBQUNJLG9CQUFPLEtBQUtuSSxRQUFMLENBQWNpSSxPQUFkLENBQXNCQyxXQUF0QixDQUFrQ0UsT0FBekM7QUFDSDs7QUFFRDs7Ozs7Ozs7MkJBS29CQyxLLEVBQU87QUFDdkIsa0JBQUtDLFNBQUwsR0FBaUJELEtBQWpCO0FBQ0gsVTs2QkFDcUI7QUFDbEIsb0JBQU8sS0FBS0MsU0FBWjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7OzsyQkFXaUJELEssRUFBTztBQUNwQixrQkFBS0UsTUFBTCxHQUFjRixLQUFkO0FBQ0gsVTs2QkFDa0I7QUFDZixpQkFBSSxDQUFDLEtBQUtFLE1BQVYsRUFBa0I7QUFDZCxzQkFBS0EsTUFBTCxHQUFjLEtBQUtDLGFBQW5CO0FBQ0g7QUFDRCxvQkFBTyxLQUFLRCxNQUFaO0FBQ0g7Ozs2QkFHbUI7QUFDaEIsb0JBQU8sS0FBS0osS0FBTCxDQUFXTSxNQUFsQjtBQUNIOzs7NkJBQ29CO0FBQ2pCLG9CQUFPLEtBQUtOLEtBQUwsQ0FBV00sTUFBWCxDQUFrQjlFLENBQXpCO0FBQ0g7Ozs2QkFDb0I7QUFDakIsb0JBQU8sS0FBS3dFLEtBQUwsQ0FBV00sTUFBWCxDQUFrQjdFLENBQXpCO0FBQ0g7OzsyQkFHNkJ5RSxLLEVBQU87QUFDakNYLG1CQUFNMUgsUUFBTixDQUFlaUksT0FBZixDQUF1QkMsV0FBdkIsQ0FBbUNRLGtCQUFuQyxHQUF3REwsS0FBeEQ7QUFDSCxVOzZCQUMrQjtBQUM1QixvQkFBT1gsTUFBTTFILFFBQU4sQ0FBZWlJLE9BQWYsQ0FBdUJDLFdBQXZCLENBQW1DUSxrQkFBMUM7QUFDSDs7OzZCQW9Dd0I7QUFDckIsb0JBQU8sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVA7QUFDSDs7Ozs7O21CQXBHZ0JsQixLOzs7Ozs7Ozs7Ozs7Ozs7QUNBckI7Ozs7QUFDQTs7Ozs7Ozs7QUFHQTs7Ozs7OztLQU9xQm1CLEc7Ozs7Ozs7O0FBRWpCOzs7Ozs7O3NDQU9vQkMsUSxFQUNwQjtBQUNJLGlCQUFNQyxNQUFNLHNCQUFaO0FBQUEsaUJBQ01DLFFBQVFGLFNBQVMzRSxNQUR2Qjs7QUFHQSxrQkFBSyxJQUFJOEUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxLQUFwQixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDNUJGLHFCQUFJcEYsQ0FBSixJQUFTbUYsU0FBU0csQ0FBVCxFQUFZdEYsQ0FBckI7QUFDQW9GLHFCQUFJbkYsQ0FBSixJQUFTa0YsU0FBU0csQ0FBVCxFQUFZckYsQ0FBckI7QUFDSDs7QUFFRG1GLGlCQUFJcEYsQ0FBSixJQUFTcUYsS0FBVDtBQUNBRCxpQkFBSW5GLENBQUosSUFBU29GLEtBQVQ7O0FBRUEsb0JBQU9ELEdBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7OzhDQU00QkQsUSxFQUFVckMsUyxFQUN0QztBQUNJLGlCQUFJeUMsUUFBUSxDQUFaO0FBQ0EsaUJBQUlDLGFBQWEsaUJBQU9DLFVBQVAsQ0FBa0IzQyxTQUFsQixFQUE2QnFDLFNBQVMsQ0FBVCxDQUE3QixDQUFqQjs7QUFFQSxrQkFBSyxJQUFJRyxJQUFJLENBQVIsRUFBV0QsUUFBUUYsU0FBUzNFLE1BQWpDLEVBQXlDOEUsSUFBSUQsS0FBN0MsRUFBb0RDLEdBQXBELEVBQXlEO0FBQ3JELHFCQUFNSSxVQUFVLGlCQUFPRCxVQUFQLENBQWtCM0MsU0FBbEIsRUFBNkJxQyxTQUFTRyxDQUFULENBQTdCLENBQWhCOztBQUVBLHFCQUFJSSxVQUFVRixVQUFkLEVBQTBCO0FBQ3RCQSxrQ0FBYUUsT0FBYjtBQUNBSCw2QkFBUUQsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQsb0JBQU9DLEtBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7OztpQ0FPZUksUyxFQUFXQyxTLEVBQVc5QyxTLEVBQ3JDO0FBQ0k7QUFDQSxpQkFBTXdDLElBQUksS0FBS08sb0JBQUwsQ0FBMEJGLFNBQTFCLEVBQXFDN0MsU0FBckMsQ0FBVjs7QUFFQTtBQUNBLGlCQUFNZ0QsSUFBSSxLQUFLRCxvQkFBTCxDQUEwQkQsU0FBMUIsRUFBcUMsaUJBQU9HLE1BQVAsQ0FBY2pELFNBQWQsQ0FBckMsQ0FBVjs7QUFFQTlELHFCQUFRZ0gsR0FBUixDQUFZLE9BQU9DLElBQUluRCxTQUFKLEVBQWUsSUFBZixDQUFuQixFQUF5QyxPQUFPbUQsSUFBSU4sVUFBVUwsQ0FBVixDQUFKLENBQWhEO0FBQ0F0RyxxQkFBUWdILEdBQVIsQ0FBWSxPQUFPQyxJQUFJLGlCQUFPRixNQUFQLENBQWNqRCxTQUFkLENBQUosRUFBOEIsSUFBOUIsQ0FBbkIsRUFBd0QsT0FBT21ELElBQUlMLFVBQVVFLENBQVYsQ0FBSixDQUEvRDtBQUNBOUcscUJBQVFnSCxHQUFSLENBQVksYUFBYUMsSUFBSSxpQkFBTzdGLFFBQVAsQ0FBZ0J1RixVQUFVTCxDQUFWLENBQWhCLEVBQThCTSxVQUFVRSxDQUFWLENBQTlCLENBQUosQ0FBYixHQUFnRSxHQUE1RTtBQUNBO0FBQ0Esb0JBQU8saUJBQU8xRixRQUFQLENBQWdCdUYsVUFBVUwsQ0FBVixDQUFoQixFQUE4Qk0sVUFBVUUsQ0FBVixDQUE5QixDQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7Ozt3Q0FNc0JILFMsRUFBV0MsUyxFQUNqQztBQUNJOztBQUVBLGlCQUFJTSxZQUFZLENBQWhCO0FBQUEsaUJBQW1CWCxRQUFRLENBQTNCLENBSEosQ0FHb0M7QUFDaEMsaUJBQUlyQyxVQUFKO0FBQUEsaUJBQU9DLFVBQVA7QUFBQSxpQkFBVUssVUFBVjtBQUFBLGlCQUFhMkMsVUFBYjtBQUFBLGlCQUFnQkMsV0FBaEI7QUFBQSxpQkFBb0JDLFdBQXBCO0FBQUEsaUJBQXdCM0MsV0FBeEI7QUFBQSxpQkFBNEI0QyxlQUE1QjtBQUFBLGlCQUFvQ0MsZUFBcEM7QUFBQSxpQkFBNENDLFVBQVUsSUFBSUMsS0FBSixDQUFVLENBQVYsQ0FBdEQ7O0FBRUE7QUFDQSxpQkFBTUMsWUFBWSxLQUFLQyxZQUFMLENBQWtCaEIsU0FBbEIsQ0FBbEIsQ0FQSixDQU9vRDtBQUNoRCxpQkFBTWlCLFlBQVksS0FBS0QsWUFBTCxDQUFrQmYsU0FBbEIsQ0FBbEIsQ0FSSixDQVFvRDs7QUFFaEQ7QUFDQTtBQUNBTyxpQkFBSSxpQkFBTy9GLFFBQVAsQ0FBZ0JzRyxTQUFoQixFQUEyQkUsU0FBM0IsQ0FBSjs7QUFFQTtBQUNBLGlCQUFLVCxFQUFFbkcsQ0FBRixJQUFPLENBQVIsSUFBZW1HLEVBQUVsRyxDQUFGLElBQU8sQ0FBMUIsRUFBOEI7QUFDMUJrRyxtQkFBRW5HLENBQUYsR0FBTSxHQUFOO0FBQ0g7O0FBRUQ7QUFDQWtELGlCQUFJc0QsUUFBUSxDQUFSLElBQWEsS0FBS0ssT0FBTCxDQUFhbEIsU0FBYixFQUF3QkMsU0FBeEIsRUFBbUNPLENBQW5DLENBQWpCO0FBQ0FuSCxxQkFBUWdILEdBQVIsQ0FBWUMsSUFBSS9DLENBQUosQ0FBWixFQUFvQitDLElBQUlFLENBQUosRUFBTyxJQUFQLENBQXBCLEVBQWtDLGlCQUFPVixVQUFQLENBQWtCdkMsQ0FBbEIsRUFBcUJpRCxDQUFyQixFQUF3QmhGLE9BQXhCLENBQWdDLENBQWhDLENBQWxDOztBQUVBO0FBQ0EsaUJBQUkrQixFQUFFdkIsR0FBRixDQUFNd0UsQ0FBTixLQUFZLENBQWhCLEVBQW1CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0FuSCx5QkFBUWdILEdBQVIsQ0FBWSxRQUFaLEVBQXNCLElBQXRCLEVBQTRCLEdBQTVCO0FBQ0Esd0JBQU8sS0FBUCxDQUxlLENBS0Q7QUFDakI7O0FBRURHLGlCQUFJLGlCQUFPSixNQUFQLENBQWM3QyxDQUFkLENBQUosQ0FoQ0osQ0FnQzBCOztBQUV0QixvQkFBTyxJQUFQLEVBQWE7QUFDVGdEOztBQUVBbEgseUJBQVFnSCxHQUFSLENBQVksRUFBWjtBQUNBaEgseUJBQVFnSCxHQUFSLENBQVlFLFNBQVo7O0FBRUFoRCxxQkFBSXNELFFBQVEsRUFBRWpCLEtBQVYsSUFBbUIsS0FBS3NCLE9BQUwsQ0FBYWxCLFNBQWIsRUFBd0JDLFNBQXhCLEVBQW1DTyxDQUFuQyxDQUF2Qjs7QUFFQSxxQkFBSSxpQkFBT1YsVUFBUCxDQUFrQnZDLENBQWxCLEVBQXFCaUQsQ0FBckIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUJuSCw2QkFBUWdILEdBQVIsQ0FBWUMsSUFBSS9DLENBQUosQ0FBWixFQUFvQitDLElBQUlFLENBQUosRUFBTyxJQUFQLENBQXBCLEVBQWtDLGlCQUFPVixVQUFQLENBQWtCdkMsQ0FBbEIsRUFBcUJpRCxDQUFyQixFQUF3QmhGLE9BQXhCLENBQWdDLENBQWhDLENBQWxDO0FBQ0FuQyw2QkFBUWdILEdBQVIsQ0FBWSxRQUFaLEVBQXNCLElBQXRCLEVBQTRCLEdBQTVCO0FBQ0EsNEJBQU8sS0FBUCxDQUg4QixDQUdoQjtBQUNqQjs7QUFFRDtBQUNBSSxzQkFBSyxpQkFBT0wsTUFBUCxDQUFjN0MsQ0FBZCxDQUFMLENBZlMsQ0FlYzs7QUFFdkI7QUFDQSxxQkFBSXFDLFFBQVEsQ0FBWixFQUFlOztBQUVYcEMseUJBQUlxRCxRQUFRLENBQVIsQ0FBSjtBQUNBSCwwQkFBSyxpQkFBT2pHLFFBQVAsQ0FBZ0IrQyxDQUFoQixFQUFtQkQsQ0FBbkIsQ0FBTCxDQUhXLENBR2lCO0FBQzVCaUQseUJBQUksaUJBQU9XLGFBQVAsQ0FBcUJULEVBQXJCLEVBQXlCRCxFQUF6QixFQUE2QkMsRUFBN0IsQ0FBSixDQUpXLENBSTJCOztBQUV0Qyx5QkFBSSxpQkFBT3BELFFBQVAsQ0FBZ0JrRCxDQUFoQixNQUF1QixDQUEzQixFQUE4QjtBQUMxQkEsNkJBQUksaUJBQU9ZLGFBQVAsQ0FBcUJWLEVBQXJCLENBQUo7QUFDSDtBQUNELDhCQVRXLENBU0Q7QUFDYjs7QUFFRGxELHFCQUFJcUQsUUFBUSxDQUFSLENBQUo7QUFDQWhELHFCQUFJZ0QsUUFBUSxDQUFSLENBQUo7QUFDQUgsc0JBQUssaUJBQU9qRyxRQUFQLENBQWdCK0MsQ0FBaEIsRUFBbUJELENBQW5CLENBQUwsQ0FoQ1MsQ0FnQ21CO0FBQzVCUSxzQkFBSyxpQkFBT3RELFFBQVAsQ0FBZ0JvRCxDQUFoQixFQUFtQk4sQ0FBbkIsQ0FBTCxDQWpDUyxDQWlDbUI7O0FBRTVCO0FBQ0FxRCwwQkFBUyxpQkFBT08sYUFBUCxDQUFxQlQsRUFBckIsRUFBeUIzQyxFQUF6QixFQUE2QkEsRUFBN0IsQ0FBVDs7QUFFQTFFLHlCQUFRZ0gsR0FBUixDQUFZLEdBQVosRUFBaUI5QyxDQUFqQixFQUFvQixHQUFwQixFQUF5QkMsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNLLENBQWpDO0FBQ0F4RSx5QkFBUWdILEdBQVIsQ0FBWSxJQUFaLEVBQWtCSSxFQUFsQixFQUFzQixJQUF0QixFQUE0QkMsRUFBNUIsRUFBZ0MsSUFBaEMsRUFBc0MzQyxFQUF0QztBQUNBMUUseUJBQVFnSCxHQUFSLENBQVksUUFBWixFQUFzQk8sTUFBdEIsRUFBOEJBLE9BQU9sRCxLQUFQLEdBQWUyRCxJQUFmLEVBQTlCO0FBQ0FoSSx5QkFBUWdILEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxpQkFBT1AsVUFBUCxDQUFrQmMsTUFBbEIsRUFBMEJILEVBQTFCLENBQXRDOztBQUVBO0FBQ0E7QUFDQSxxQkFBSSxpQkFBT1gsVUFBUCxDQUFrQmMsTUFBbEIsRUFBMEJILEVBQTFCLEtBQWlDLENBQXJDLEVBQXdDO0FBQ3BDRCx5QkFBSUksTUFBSixDQURvQyxDQUN4QjtBQUNadkgsNkJBQVFnSCxHQUFSLENBQVksOENBQVosRUFBNERHLENBQTVEO0FBQ0gsa0JBSEQsTUFJSztBQUNEO0FBQ0FHLDhCQUFTLGlCQUFPUSxhQUFQLENBQXFCcEQsRUFBckIsRUFBeUIyQyxFQUF6QixFQUE2QkEsRUFBN0IsQ0FBVDtBQUNBckgsNkJBQVFnSCxHQUFSLENBQVksUUFBWixFQUFzQk0sTUFBdEIsRUFBOEJBLE9BQU9qRCxLQUFQLEdBQWUyRCxJQUFmLEVBQTlCO0FBQ0FoSSw2QkFBUWdILEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxpQkFBT1AsVUFBUCxDQUFrQmEsTUFBbEIsRUFBMEJGLEVBQTFCLENBQXRDOztBQUVBO0FBQ0E7QUFDQSx5QkFBSSxpQkFBT1gsVUFBUCxDQUFrQmEsTUFBbEIsRUFBMEJGLEVBQTFCLElBQWdDLENBQXBDLEVBQXVDO0FBQ25DLGdDQUFPLElBQVAsQ0FEbUMsQ0FDdEI7QUFDaEI7O0FBRURJLDZCQUFRLENBQVIsSUFBYUEsUUFBUSxDQUFSLENBQWIsQ0FaQyxDQVl3QjtBQUN6QkwseUJBQUlHLE1BQUosQ0FiQyxDQWFXO0FBQ2Y7O0FBRURFLHlCQUFRLENBQVIsSUFBYUEsUUFBUSxDQUFSLENBQWIsQ0FqRVMsQ0FpRWdCO0FBQ3pCLG1CQUFFakIsS0FBRjtBQUNIOztBQUVELG9CQUFPLEtBQVA7QUFDSDs7OzBDQUd1QjBCLE0sRUFDeEI7QUFDSTtBQUNBLGlCQUFJQyxLQUFLLENBQVQ7QUFDQSxpQkFBSUMsS0FBS0YsT0FBTyxDQUFQLEVBQVVqSCxDQUFuQjtBQUNBLGtCQUFLLElBQUlzRixJQUFJLENBQWIsRUFBZ0JBLElBQUkyQixPQUFPekcsTUFBM0IsRUFBbUM4RSxHQUFuQyxFQUF3QztBQUNwQyxxQkFBSXRGLElBQUlpSCxPQUFPM0IsQ0FBUCxFQUFVdEYsQ0FBbEI7QUFDQSxxQkFBSUEsSUFBSW1ILEVBQUosSUFBV25ILEtBQUttSCxFQUFMLElBQVdGLE9BQU8zQixDQUFQLEVBQVVyRixDQUFWLEdBQWNnSCxPQUFPQyxFQUFQLEVBQVdqSCxDQUFuRCxFQUF1RDtBQUNuRGlILDBCQUFLNUIsQ0FBTDtBQUNBNkIsMEJBQUtuSCxDQUFMO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSW9ILElBQUlILE9BQU96RyxNQUFmO0FBQ0EsaUJBQUk2RyxPQUFPLEVBQVg7QUFDQSxpQkFBSUMsSUFBSSxDQUFSO0FBQ0EsaUJBQUlDLEtBQUtMLEVBQVQ7O0FBRUEsb0JBQU8sQ0FBUCxFQUFVO0FBQ05HLHNCQUFLQyxDQUFMLElBQVVDLEVBQVY7O0FBRUEscUJBQUlDLEtBQUssQ0FBVDtBQUNBLHNCQUFLLElBQUkxQixJQUFJLENBQWIsRUFBZ0JBLElBQUlzQixDQUFwQixFQUF1QnRCLEdBQXZCLEVBQTRCO0FBQ3hCLHlCQUFJMEIsTUFBTUQsRUFBVixFQUFjO0FBQ1ZDLDhCQUFLMUIsQ0FBTDtBQUNBO0FBQ0g7O0FBRUQseUJBQUlyQyxJQUFJLGlCQUFPckQsUUFBUCxDQUFnQjZHLE9BQU9PLEVBQVAsQ0FBaEIsRUFBNEJQLE9BQU9JLEtBQUtDLENBQUwsQ0FBUCxDQUE1QixDQUFSO0FBQ0EseUJBQUlsRSxJQUFJLGlCQUFPaEQsUUFBUCxDQUFnQjZHLE9BQU9uQixDQUFQLENBQWhCLEVBQTJCbUIsT0FBT0ksS0FBS0MsQ0FBTCxDQUFQLENBQTNCLENBQVI7QUFDQSx5QkFBSTlELElBQUksaUJBQU9pRSxLQUFQLENBQWFoRSxDQUFiLEVBQWdCTCxDQUFoQixDQUFSO0FBQ0EseUJBQUlJLElBQUksQ0FBUixFQUFXO0FBQ1BnRSw4QkFBSzFCLENBQUw7QUFDSDs7QUFFRDtBQUNBLHlCQUFJdEMsS0FBSyxDQUFMLElBQVVKLEVBQUVILFFBQUYsS0FBZVEsRUFBRVIsUUFBRixFQUE3QixFQUEyQztBQUN2Q3VFLDhCQUFLMUIsQ0FBTDtBQUNIO0FBQ0o7O0FBRUR3QjtBQUNBQyxzQkFBS0MsRUFBTDs7QUFFQSxxQkFBSUEsTUFBTU4sRUFBVixFQUFjO0FBQ1Y7QUFDSDtBQUNKOztBQUVEO0FBQ0EsaUJBQUlRLFlBQVksRUFBaEI7QUFDQSxrQkFBSyxJQUFJcEMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ0MsQ0FBcEIsRUFBdUIsRUFBRWhDLENBQXpCLEVBQTRCO0FBQ3hCLHFCQUFJcUMsUUFBUVYsT0FBT0ksS0FBSy9CLENBQUwsQ0FBUCxDQUFaO0FBQ0FvQywyQkFBVUUsSUFBVixDQUFlLHFCQUFXRCxNQUFNM0gsQ0FBakIsRUFBb0IySCxNQUFNMUgsQ0FBMUIsQ0FBZjtBQUNIOztBQUVELG9CQUFPeUgsU0FBUDtBQUNIOzs7a0NBR2V4RSxDLEVBQUdDLEMsRUFDbkI7QUFDSSxvQkFBTyxxQkFBVyxDQUFDRCxFQUFFbEQsQ0FBRixHQUFNbUQsRUFBRW5ELENBQVQsSUFBYyxDQUF6QixFQUE0QixDQUFDa0QsRUFBRWpELENBQUYsR0FBTWtELEVBQUVsRCxDQUFULElBQWMsQ0FBMUMsQ0FBUDtBQUNIOzs7Ozs7bUJBMVBnQmlGLEc7OztBQThQckIsVUFBUzJDLGFBQVQsQ0FBdUIxQyxRQUF2QixFQUFpQztBQUM3QkEsY0FBUzJDLE9BQVQsQ0FBaUIsVUFBQ0MsTUFBRCxFQUFTeEMsS0FBVCxFQUFtQjtBQUNqQ3ZHLGlCQUFRZ0gsR0FBUixDQUFZVCxLQUFaLEVBQW1Cd0MsT0FBTy9ILENBQTFCLEVBQTZCK0gsT0FBTzlILENBQXBDO0FBQ0YsTUFGRDtBQUdIOztBQUVELFVBQVMrSCxlQUFULENBQXlCckMsU0FBekIsRUFBb0NDLFNBQXBDLEVBQStDO0FBQzNDNUcsYUFBUWdILEdBQVIsQ0FBWSxtREFBWjtBQUNBaEgsYUFBUWdILEdBQVIsQ0FBWSxXQUFaO0FBQ0FoSCxhQUFRZ0gsR0FBUixDQUFZLG1EQUFaO0FBQ0E2QixtQkFBY2xDLFNBQWQ7QUFDQTNHLGFBQVFnSCxHQUFSLENBQVksbURBQVo7QUFDQWhILGFBQVFnSCxHQUFSLENBQVksV0FBWjtBQUNBaEgsYUFBUWdILEdBQVIsQ0FBWSxtREFBWjtBQUNBNkIsbUJBQWNqQyxTQUFkO0FBQ0E1RyxhQUFRZ0gsR0FBUixDQUFZLG1EQUFaO0FBQ0g7O0FBRUQsVUFBU0MsR0FBVCxDQUFhOEIsTUFBYixFQUFzQztBQUFBLFNBQWpCRSxPQUFpQix1RUFBUCxLQUFPOztBQUNsQyxTQUFJQSxZQUFZLEtBQWhCLEVBQXVCO0FBQ25CLHNCQUFXRixPQUFPL0gsQ0FBbEIsU0FBdUIrSCxPQUFPOUgsQ0FBOUI7QUFDSDtBQUNELGtCQUFXOEgsT0FBTy9ILENBQVAsQ0FBU21CLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBWCxTQUFrQzRHLE9BQU85SCxDQUFQLENBQVNrQixPQUFULENBQWlCLENBQWpCLENBQWxDO0FBQ0gsRTs7Ozs7Ozs7Ozs7Ozs7O0FDaFNEOzs7O0FBQ0E7Ozs7Ozs7O0tBR3FCK0csTzs7Ozs7OzswQ0FFT3ZDLFMsRUFBV0MsUyxFQUNuQztBQUNJNUcscUJBQVFnSCxHQUFSLENBQVksbURBQVo7QUFDQWhILHFCQUFRZ0gsR0FBUixDQUFZLG1CQUFaLEVBQWlDTCxVQUFVbkYsTUFBVixHQUFtQm9GLFVBQVVwRixNQUE5RCxFQUFzRSxHQUF0RTtBQUNBeEIscUJBQVFnSCxHQUFSLENBQVksbURBQVo7O0FBRUEsaUJBQU1tQyxPQUFPLEVBQWI7QUFDQSxrQkFBSyxJQUFJN0MsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSyxVQUFVbkYsTUFBOUIsRUFBc0M4RSxHQUF0QyxFQUEyQztBQUN2QyxzQkFBSyxJQUFJUSxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLFVBQVVwRixNQUE5QixFQUFzQ3NGLEdBQXRDLEVBQTJDOztBQUV2Qyx5QkFBSXNDLEtBQUt6QyxVQUFVTCxDQUFWLEVBQWFqQyxLQUFiLEVBQVQ7QUFDQSx5QkFBSWdGLEtBQUt6QyxVQUFVRSxDQUFWLEVBQWF6QyxLQUFiLEVBQVQ7QUFDQSx5QkFBSWlGLE9BQU8saUJBQU9sSSxRQUFQLENBQWdCZ0ksRUFBaEIsRUFBb0JDLEVBQXBCLENBQVg7QUFDQUYsMEJBQUtQLElBQUwsQ0FBVVUsSUFBVjtBQUNBdEosNkJBQVFnSCxHQUFSLENBQVlWLENBQVosRUFBZVEsQ0FBZixXQUF5QndDLEtBQUt0SSxDQUE5QixVQUFvQ3NJLEtBQUtySSxDQUF6QztBQUNIO0FBQ0o7O0FBRUQsaUJBQU1zSSxpQkFBaUIsY0FBSUMsZ0JBQUosQ0FBcUJMLElBQXJCLENBQXZCO0FBQ0FELHFCQUFRTyxXQUFSLENBQW9CRixjQUFwQixFQUFvQyxDQUFwQyxFQUF1QyxRQUF2QyxFQUFpRCxDQUFqRDtBQUNIOzs7cUNBR2tCcEQsUSxFQUNuQjtBQUFBLGlCQUQ2QnVELFNBQzdCLHVFQUR5QyxDQUN6QztBQUFBLGlCQUQ0Q0MsS0FDNUMsdUVBRG9ELFFBQ3BEO0FBQUEsaUJBRDhEQyxLQUM5RCx1RUFEc0UsR0FDdEU7O0FBQ0ksaUJBQU1DLFdBQVc3TSxPQUFPOE0sQ0FBeEI7QUFDQUQsc0JBQVNFLFNBQVQsQ0FBbUJMLFNBQW5CLEVBQThCQyxLQUE5QixFQUFxQ0MsS0FBckM7O0FBRUEsaUJBQU1JLE9BQU83RCxTQUFTLENBQVQsRUFBWTlCLEtBQVosRUFBYjtBQUNBMkYsa0JBQUt6RixjQUFMLENBQW9CdkgsT0FBT2lOLGFBQTNCOztBQUVBSixzQkFBU0ssTUFBVCxDQUFnQkYsS0FBS2hKLENBQXJCLEVBQXdCZ0osS0FBSy9JLENBQTdCOztBQUVBOztBQUVBLGtCQUFLLElBQUlxRixJQUFJLENBQWIsRUFBZ0JBLElBQUlILFNBQVMzRSxNQUE3QixFQUFxQzhFLEdBQXJDLEVBQTBDO0FBQ3RDLHFCQUFJcEYsTUFBTWlGLFNBQVNHLENBQVQsRUFBWWpDLEtBQVosRUFBVjtBQUNBbkQscUJBQUlxRCxjQUFKLENBQW1CdkgsT0FBT2lOLGFBQTFCO0FBQ0FKLDBCQUFTTSxNQUFULENBQWdCakosSUFBSUYsQ0FBcEIsRUFBdUJFLElBQUlELENBQTNCO0FBQ0g7O0FBRUQ0SSxzQkFBU00sTUFBVCxDQUFnQkgsS0FBS2hKLENBQXJCLEVBQXdCZ0osS0FBSy9JLENBQTdCO0FBQ0g7OztrQ0FHZTNELEssRUFBTzhNLE0sRUFBUXpCLEssRUFDL0I7QUFBQSxpQkFEc0NnQixLQUN0Qyx1RUFEOEMsU0FDOUM7O0FBQ0ksaUJBQU1VLE9BQU8sSUFBSXZNLEtBQUt3TSxJQUFULENBQWNGLE1BQWQsRUFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0FHLHVCQUFNWjtBQUNOO0FBTCtCLGNBQXRCLENBQWI7O0FBUUFVLGtCQUFLckosQ0FBTCxHQUFTMkgsTUFBTTNILENBQWY7QUFDQXFKLGtCQUFLcEosQ0FBTCxHQUFTMEgsTUFBTTFILENBQWY7O0FBRUEzRCxtQkFBTWdCLFFBQU4sQ0FBZStMLElBQWY7QUFDSDs7O21DQUdnQlIsUSxFQUFVbEIsSyxFQUMzQjtBQUFBLGlCQURrQzZCLE9BQ2xDLHVFQUQ0QyxJQUM1QztBQUFBLGlCQURrREMsTUFDbEQsdUVBRDJELENBQzNEO0FBQUEsaUJBRDhEZCxLQUM5RCx1RUFEc0UsUUFDdEU7QUFBQSxpQkFEZ0ZDLEtBQ2hGLHVFQUR3RixHQUN4Rjs7QUFDSSxpQkFBSVksWUFBWSxJQUFoQixFQUFzQjtBQUNsQlgsMEJBQVM1SixLQUFUO0FBQ0g7O0FBRUQ0SixzQkFBU0UsU0FBVCxDQUFtQixDQUFuQixFQUFzQkosS0FBdEI7QUFDQUUsc0JBQVNhLFNBQVQsQ0FBbUJmLEtBQW5CLEVBQTBCQyxLQUExQjtBQUNBQyxzQkFBU2MsVUFBVCxDQUFvQmhDLE1BQU0zSCxDQUExQixFQUE2QjJILE1BQU0xSCxDQUFuQyxFQUFzQ3dKLE1BQXRDO0FBQ0FaLHNCQUFTZSxPQUFUO0FBQ0g7OzswQ0FHdUJmLFEsRUFBVWdCLE0sRUFDbEM7QUFBQSxpQkFEMENMLE9BQzFDLHVFQURvRCxJQUNwRDtBQUFBLGlCQUQwRE0sU0FDMUQsdUVBRHNFLENBQ3RFO0FBQUEsaUJBRHlFbkIsS0FDekUsdUVBRGlGLFFBQ2pGO0FBQUEsaUJBRDJGQyxLQUMzRix1RUFEbUcsR0FDbkc7O0FBQ0ksaUJBQUlZLFlBQVksSUFBaEIsRUFBc0I7QUFDbEJYLDBCQUFTNUosS0FBVDtBQUNIOztBQUVENEosc0JBQVNFLFNBQVQsQ0FBbUJlLFNBQW5CLEVBQThCbkIsS0FBOUIsRUFBcUNDLEtBQXJDO0FBQ0FDLHNCQUFTa0IsUUFBVCxDQUFrQkYsT0FBTzdKLENBQXpCLEVBQTRCNkosT0FBTzVKLENBQW5DLEVBQXNDNEosT0FBTzdNLEtBQTdDLEVBQW9ENk0sT0FBTzVNLE1BQTNEO0FBQ0E0TCxzQkFBU2UsT0FBVDtBQUNIOzs7MENBR3VCZixRLEVBQVVtQixJLEVBQ2xDO0FBQUEsaUJBRHdDUixPQUN4Qyx1RUFEa0QsSUFDbEQ7QUFBQSxpQkFEd0RNLFNBQ3hELHVFQURvRSxDQUNwRTtBQUFBLGlCQUR1RW5CLEtBQ3ZFLHVFQUQrRSxRQUMvRTtBQUFBLGlCQUR5RkMsS0FDekYsdUVBRGlHLEdBQ2pHOztBQUNJLGlCQUFJWSxZQUFZLElBQWhCLEVBQXNCO0FBQ2xCWCwwQkFBUzVKLEtBQVQ7QUFDSDs7QUFFRDRKLHNCQUFTRSxTQUFULENBQW1CZSxTQUFuQixFQUE4Qm5CLEtBQTlCLEVBQXFDQyxLQUFyQztBQUNBQyxzQkFBU0ssTUFBVCxDQUFnQmMsS0FBS0MsRUFBTCxDQUFRakssQ0FBeEIsRUFBMkJnSyxLQUFLQyxFQUFMLENBQVFoSyxDQUFuQztBQUNBNEksc0JBQVNNLE1BQVQsQ0FBZ0JhLEtBQUtFLEVBQUwsQ0FBUWxLLENBQXhCLEVBQTJCZ0ssS0FBS0UsRUFBTCxDQUFRakssQ0FBbkM7QUFDQTRJLHNCQUFTTSxNQUFULENBQWdCYSxLQUFLRyxFQUFMLENBQVFuSyxDQUF4QixFQUEyQmdLLEtBQUtHLEVBQUwsQ0FBUWxLLENBQW5DO0FBQ0E0SSxzQkFBU00sTUFBVCxDQUFnQmEsS0FBS0ksRUFBTCxDQUFRcEssQ0FBeEIsRUFBMkJnSyxLQUFLSSxFQUFMLENBQVFuSyxDQUFuQztBQUNBNEksc0JBQVNNLE1BQVQsQ0FBZ0JhLEtBQUtDLEVBQUwsQ0FBUWpLLENBQXhCLEVBQTJCZ0ssS0FBS0MsRUFBTCxDQUFRaEssQ0FBbkM7QUFDSDs7OzRDQUd5QjRJLFEsRUFBVW1CLEksRUFDcEM7QUFBQSxpQkFEMENSLE9BQzFDLHVFQURvRCxJQUNwRDtBQUFBLGlCQUQwREMsTUFDMUQsdUVBRG1FLENBQ25FO0FBQUEsaUJBRHNFZCxLQUN0RSx1RUFEOEUsUUFDOUU7QUFBQSxpQkFEd0ZDLEtBQ3hGLHVFQURnRyxHQUNoRzs7QUFDSSxpQkFBSVksWUFBWSxJQUFoQixFQUFzQjtBQUNsQlgsMEJBQVM1SixLQUFUO0FBQ0g7O0FBRUQ0SixzQkFBU2EsU0FBVCxDQUFtQmYsS0FBbkIsRUFBMEJDLEtBQTFCO0FBQ0FDLHNCQUFTYyxVQUFULENBQW9CSyxLQUFLQyxFQUFMLENBQVFqSyxDQUE1QixFQUErQmdLLEtBQUtDLEVBQUwsQ0FBUWhLLENBQXZDLEVBQTBDd0osTUFBMUM7QUFDQVosc0JBQVNjLFVBQVQsQ0FBb0JLLEtBQUtFLEVBQUwsQ0FBUWxLLENBQTVCLEVBQStCZ0ssS0FBS0UsRUFBTCxDQUFRakssQ0FBdkMsRUFBMEN3SixNQUExQztBQUNBWixzQkFBU2MsVUFBVCxDQUFvQkssS0FBS0csRUFBTCxDQUFRbkssQ0FBNUIsRUFBK0JnSyxLQUFLRyxFQUFMLENBQVFsSyxDQUF2QyxFQUEwQ3dKLE1BQTFDO0FBQ0FaLHNCQUFTYyxVQUFULENBQW9CSyxLQUFLSSxFQUFMLENBQVFwSyxDQUE1QixFQUErQmdLLEtBQUtJLEVBQUwsQ0FBUW5LLENBQXZDLEVBQTBDd0osTUFBMUM7QUFDQVosc0JBQVNlLE9BQVQ7QUFDSDs7O29DQUdpQmYsUSxFQUFVNUIsTSxFQUM1QjtBQUFBLGlCQURvQ3VDLE9BQ3BDLHVFQUQ4QyxJQUM5QztBQUFBLGlCQURvRE0sU0FDcEQsdUVBRGdFLENBQ2hFO0FBQUEsaUJBRG1FbkIsS0FDbkUsdUVBRDJFLFFBQzNFO0FBQUEsaUJBRHFGQyxLQUNyRix1RUFENkYsR0FDN0Y7O0FBQ0ksaUJBQUlZLFlBQVksSUFBaEIsRUFBc0I7QUFDbEJYLDBCQUFTNUosS0FBVDtBQUNIOztBQUVENEosc0JBQVNFLFNBQVQsQ0FBbUJlLFNBQW5CLEVBQThCbkIsS0FBOUIsRUFBcUNDLEtBQXJDOztBQUVBLGtCQUFLLElBQUl0RCxJQUFJLENBQWIsRUFBZ0JBLElBQUkyQixPQUFPekcsTUFBM0IsRUFBbUM4RSxHQUFuQyxFQUF3QztBQUNwQyxxQkFBSStFLEtBQUtwRCxPQUFPM0IsQ0FBUCxDQUFUO0FBQ0EscUJBQUlnRixLQUFLckQsT0FBTzNCLElBQUksQ0FBSixHQUFRMkIsT0FBT3pHLE1BQWYsR0FBd0I4RSxJQUFJLENBQTVCLEdBQWdDLENBQXZDLENBQVQ7O0FBRUR1RCwwQkFBU0ssTUFBVCxDQUFnQm1CLEdBQUdySyxDQUFuQixFQUFzQnFLLEdBQUdwSyxDQUF6QjtBQUNBNEksMEJBQVNNLE1BQVQsQ0FBZ0JtQixHQUFHdEssQ0FBbkIsRUFBc0JzSyxHQUFHckssQ0FBekI7QUFDRjtBQUNKOzs7a0NBR2U0SSxRLEVBQVUwQixFLEVBQUlGLEUsRUFDOUI7QUFBQSxpQkFEa0NiLE9BQ2xDLHVFQUQ0QyxJQUM1QztBQUFBLGlCQURrRE0sU0FDbEQsdUVBRDhELENBQzlEO0FBQUEsaUJBRGlFbkIsS0FDakUsdUVBRHlFLFFBQ3pFO0FBQUEsaUJBRG1GQyxLQUNuRix1RUFEMkYsR0FDM0Y7O0FBQ0ksaUJBQUlZLFlBQVksSUFBaEIsRUFBc0I7QUFDbEJYLDBCQUFTNUosS0FBVDtBQUNIOztBQUVENEosc0JBQVNFLFNBQVQsQ0FBbUJlLFNBQW5CLEVBQThCbkIsS0FBOUIsRUFBcUNDLEtBQXJDO0FBQ0FDLHNCQUFTSyxNQUFULENBQWdCcUIsR0FBR3ZLLENBQW5CLEVBQXNCdUssR0FBR3RLLENBQXpCO0FBQ0E0SSxzQkFBU00sTUFBVCxDQUFnQmtCLEdBQUdySyxDQUFuQixFQUFzQnFLLEdBQUdwSyxDQUF6QjtBQUNIOzs7bUNBR2dCNEksUSxFQUFVMkIsUyxFQUFXQyxPLEVBQ3RDO0FBQUEsaUJBRCtDakIsT0FDL0MsdUVBRHlELElBQ3pEO0FBQUEsaUJBRCtETSxTQUMvRCx1RUFEMkUsQ0FDM0U7QUFBQSxpQkFEOEVuQixLQUM5RSx1RUFEc0YsUUFDdEY7QUFBQSxpQkFEZ0dDLEtBQ2hHLHVFQUR3RyxHQUN4RztBQUFBLGlCQUQ2RzhCLEtBQzdHLHVFQURxSCxDQUNySDs7QUFDSSxpQkFBSWxCLFlBQVksSUFBaEIsRUFBc0I7QUFDbEJYLDBCQUFTNUosS0FBVDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQWlCQTRKLHNCQUFTRSxTQUFULENBQW1CZSxTQUFuQixFQUE4Qm5CLEtBQTlCLEVBQXFDQyxLQUFyQztBQUNBQyxzQkFBU0ssTUFBVCxDQUFnQnNCLFVBQVV4SyxDQUExQixFQUE2QndLLFVBQVV2SyxDQUF2Qzs7QUFFQSxpQkFBSUksU0FBUyxxQkFBV21LLFVBQVV4SyxDQUFWLEdBQWN5SyxRQUFRekssQ0FBakMsRUFBb0N3SyxVQUFVdkssQ0FBVixHQUFjd0ssUUFBUXhLLENBQTFELENBQWI7QUFDQSxpQkFBSTBLLE9BQU90SyxPQUFPZ0QsS0FBUCxHQUFlZixNQUFmLENBQXNCLEVBQXRCLEVBQTBCc0ksTUFBMUIsRUFBWDtBQUNBLGlCQUFJQyxRQUFReEssT0FBT2dELEtBQVAsR0FBZWYsTUFBZixDQUFzQixDQUFDLEVBQXZCLEVBQTJCc0ksTUFBM0IsRUFBWjtBQUNBRCxrQkFBS3BILGNBQUwsQ0FBb0JtSCxLQUFwQjtBQUNBRyxtQkFBTXRILGNBQU4sQ0FBcUJtSCxLQUFyQjtBQUNBckssb0JBQU91SyxNQUFQLEdBQWdCckgsY0FBaEIsQ0FBK0JtSCxRQUFRLENBQXZDOztBQUVBN0Isc0JBQVNNLE1BQVQsQ0FBZ0JxQixVQUFVeEssQ0FBVixHQUFjSyxPQUFPTCxDQUFyQyxFQUF3Q3dLLFVBQVV2SyxDQUFWLEdBQWNJLE9BQU9KLENBQTdEO0FBQ0E0SSxzQkFBU0ssTUFBVCxDQUFnQnNCLFVBQVV4SyxDQUExQixFQUE2QndLLFVBQVV2SyxDQUF2QztBQUNBNEksc0JBQVNNLE1BQVQsQ0FBZ0JxQixVQUFVeEssQ0FBVixHQUFjMkssS0FBSzNLLENBQW5DLEVBQXNDd0ssVUFBVXZLLENBQVYsR0FBYzBLLEtBQUsxSyxDQUF6RDtBQUNBNEksc0JBQVNLLE1BQVQsQ0FBZ0JzQixVQUFVeEssQ0FBMUIsRUFBNkJ3SyxVQUFVdkssQ0FBdkM7QUFDQTRJLHNCQUFTTSxNQUFULENBQWdCcUIsVUFBVXhLLENBQVYsR0FBYzZLLE1BQU03SyxDQUFwQyxFQUF1Q3dLLFVBQVV2SyxDQUFWLEdBQWM0SyxNQUFNNUssQ0FBM0Q7QUFDSDs7O3VDQUdvQjRJLFEsRUFBVWlDLEUsRUFBSUMsTSxFQUNuQztBQUFBLGlCQUQyQ3ZCLE9BQzNDLHVFQURxRCxJQUNyRDtBQUFBLGlCQUQyRE0sU0FDM0QsdUVBRHVFLENBQ3ZFO0FBQUEsaUJBRDBFbkIsS0FDMUUsdUVBRGtGLFFBQ2xGO0FBQUEsaUJBRDRGQyxLQUM1Rix1RUFEb0csR0FDcEc7QUFBQSxpQkFEeUc4QixLQUN6Ryx1RUFEaUgsQ0FDakg7O0FBQ0ksaUJBQUlsQixZQUFZLElBQWhCLEVBQXNCO0FBQ2xCWCwwQkFBUzVKLEtBQVQ7QUFDSDs7QUFFRDRKLHNCQUFTRSxTQUFULENBQW1CZSxTQUFuQixFQUE4Qm5CLEtBQTlCLEVBQXFDQyxLQUFyQztBQUNBQyxzQkFBU0ssTUFBVCxDQUFnQjRCLEdBQUc5SyxDQUFuQixFQUFzQjhLLEdBQUc3SyxDQUF6Qjs7QUFFQSxpQkFBSTRELEtBQUtpSCxHQUFHakgsRUFBSCxDQUFNa0gsTUFBTixDQUFUO0FBQ0EsaUJBQUlKLE9BQU85RyxHQUFHUixLQUFILEdBQVdmLE1BQVgsQ0FBa0IsRUFBbEIsRUFBc0JzSSxNQUF0QixFQUFYO0FBQ0EsaUJBQUlDLFFBQVFoSCxHQUFHUixLQUFILEdBQVdmLE1BQVgsQ0FBa0IsQ0FBQyxFQUFuQixFQUF1QnNJLE1BQXZCLEVBQVo7QUFDQUQsa0JBQUtwSCxjQUFMLENBQW9CbUgsS0FBcEI7QUFDQUcsbUJBQU10SCxjQUFOLENBQXFCbUgsS0FBckI7QUFDQTdHLGdCQUFHK0csTUFBSCxHQUFZckgsY0FBWixDQUEyQm1ILFFBQVEsQ0FBbkM7O0FBRUE3QixzQkFBU00sTUFBVCxDQUFnQjJCLEdBQUc5SyxDQUFILEdBQU82RCxHQUFHN0QsQ0FBMUIsRUFBNkI4SyxHQUFHN0ssQ0FBSCxHQUFPNEQsR0FBRzVELENBQXZDO0FBQ0E0SSxzQkFBU0ssTUFBVCxDQUFnQjRCLEdBQUc5SyxDQUFuQixFQUFzQjhLLEdBQUc3SyxDQUF6QjtBQUNBNEksc0JBQVNNLE1BQVQsQ0FBZ0IyQixHQUFHOUssQ0FBSCxHQUFPMkssS0FBSzNLLENBQTVCLEVBQStCOEssR0FBRzdLLENBQUgsR0FBTzBLLEtBQUsxSyxDQUEzQztBQUNBNEksc0JBQVNLLE1BQVQsQ0FBZ0I0QixHQUFHOUssQ0FBbkIsRUFBc0I4SyxHQUFHN0ssQ0FBekI7QUFDQTRJLHNCQUFTTSxNQUFULENBQWdCMkIsR0FBRzlLLENBQUgsR0FBTzZLLE1BQU03SyxDQUE3QixFQUFnQzhLLEdBQUc3SyxDQUFILEdBQU80SyxNQUFNNUssQ0FBN0M7QUFDSDs7Ozs7O21CQW5OZ0JpSSxPOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1XLFdBQVcsSUFBSS9MLEtBQUtrTyxRQUFULEVBQWpCO0FBQUEsS0FDTUMsZ0JBQWdCLElBQUluTyxLQUFLa08sUUFBVCxFQUR0QjtBQUFBLEtBRU1FLFNBQVMsRUFGZjtBQUFBLEtBR01DLGFBQWEsUUFIbkI7QUFBQSxLQUlNQyxjQUFjLFFBSnBCOztBQU1BLEtBQUlDLGdCQUFnQixDQUNoQixDQUFDLG9CQUFVLEdBQVYsRUFBZSxHQUFmLENBQUQsRUFBc0Isb0JBQVUsR0FBVixFQUFlLEdBQWYsQ0FBdEIsRUFBMkMsb0JBQVUsR0FBVixFQUFlLEdBQWYsQ0FBM0MsQ0FEZ0IsRUFFaEIsQ0FBQyxvQkFBVSxHQUFWLEVBQWUsR0FBZixDQUFELEVBQXNCLG9CQUFVLEdBQVYsRUFBZSxHQUFmLENBQXRCLEVBQTJDLG9CQUFVLEdBQVYsRUFBZSxHQUFmLENBQTNDLEVBQWdFLG9CQUFVLEdBQVYsRUFBZSxHQUFmLENBQWhFLENBRmdCLEVBR2hCLENBQUMsb0JBQVUsR0FBVixFQUFlLEdBQWYsQ0FBRCxFQUFzQixvQkFBVSxHQUFWLEVBQWUsR0FBZixDQUF0QixFQUEyQyxvQkFBVSxHQUFWLEVBQWUsR0FBZixDQUEzQyxFQUFnRSxvQkFBVSxHQUFWLEVBQWUsR0FBZixDQUFoRSxFQUFxRixvQkFBVSxHQUFWLEVBQWUsR0FBZixDQUFyRixDQUhnQixDQUFwQjs7S0FNcUJDLEk7OztBQUVqQixtQkFBWWpQLFFBQVosRUFDQTtBQUFBOztBQUFBOztBQUdJTCxnQkFBTyxHQUFQLElBQWNpUCxhQUFkOztBQUVBLGVBQUtNLE1BQUwsR0FBYyxLQUFkO0FBQ0EsZUFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLGVBQUtuUCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGVBQUtELE1BQUwsR0FBYyxNQUFLQyxRQUFMLENBQWNhLElBQTVCO0FBQ0EsZUFBS3VPLE9BQUwsR0FBZSxNQUFLclAsTUFBTCxDQUFZc1AsVUFBWixDQUF1QixJQUF2QixDQUFmOztBQUVBLGVBQUtDLFVBQUw7QUFYSjtBQVlDOzs7O3NDQUlEO0FBQ0ksaUJBQUksS0FBS0osTUFBVCxFQUFpQjtBQUNiO0FBQ0g7O0FBRUQsa0JBQUtqTyxRQUFMLENBQWN1TCxRQUFkO0FBQ0Esa0JBQUt2TCxRQUFMLENBQWMyTixhQUFkOztBQUVBLGtCQUFLVyxjQUFMLEdBQXNCLElBQUk5TyxLQUFLK08sS0FBVCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBdEI7QUFDQSxrQkFBS0MsUUFBTCxHQUFnQixJQUFJaFAsS0FBSytPLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQWhCO0FBQ0Esa0JBQUtFLGlCQUFMLEdBQXlCQyxTQUF6Qjs7QUFFQTtBQUNBLGtCQUFLQyxtQkFBTDs7QUFFQSxrQkFBS3ZQLFFBQUw7O0FBRUEsa0JBQUs2TyxNQUFMLEdBQWMsSUFBZDtBQUNIOzs7b0NBSUQ7QUFDSSxrQkFBS1csV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCeE8sSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxrQkFBS3lPLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnpPLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0Esa0JBQUswTyxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZTFPLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7O0FBRUEsa0JBQUsyTyxFQUFMLENBQVEsV0FBUixFQUFxQixLQUFLSCxXQUExQjtBQUNBLGtCQUFLRyxFQUFMLENBQVEsV0FBUixFQUFxQixLQUFLRixXQUExQjtBQUNBLGtCQUFLRSxFQUFMLENBQVEsU0FBUixFQUFtQixLQUFLRCxTQUF4Qjs7QUFFQXBRLG9CQUFPMkIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS0MsT0FBTCxDQUFhRixJQUFiLENBQWtCLElBQWxCLENBQWpDO0FBQ0g7OztrQ0FHUSxDQUFFOzs7a0NBSVg7QUFDSSxrQkFBSzRPLE9BQUwsR0FBZSxJQUFJeFAsS0FBS3lQLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS25RLE1BQUwsQ0FBWVksS0FBckMsRUFBNEMsS0FBS1osTUFBTCxDQUFZYSxNQUF4RCxDQUFmO0FBQ0g7OzswQ0FHZ0J1UCxFLEVBQUlDLEUsRUFBSXhLLEssRUFDekI7QUFBQSxpQkFEZ0N3SCxNQUNoQyx1RUFEeUMsR0FDekM7O0FBQ0ksaUJBQU14QyxTQUFTLEVBQWY7O0FBRUE7QUFDQSxrQkFBSyxJQUFJM0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJckQsS0FBcEIsRUFBMkJxRCxHQUEzQixFQUFpQztBQUM3QixxQkFBSXRGLElBQUl3TSxLQUFNL0MsU0FBUyxDQUFDdEssS0FBS2lELEdBQUwsQ0FBUyxLQUFLc0ssUUFBTCxDQUFjLE1BQU16SyxLQUFOLEdBQWNxRCxDQUE1QixDQUFULENBQXhCO0FBQ0EscUJBQUlyRixJQUFJd00sS0FBTWhELFNBQVV0SyxLQUFLZ0QsR0FBTCxDQUFTLEtBQUt1SyxRQUFMLENBQWMsTUFBTXpLLEtBQU4sR0FBY3FELENBQTVCLENBQVQsQ0FBeEI7QUFDQSxxQkFBSXFDLFFBQVEsSUFBSTdLLEtBQUsrTyxLQUFULENBQWU3TCxDQUFmLEVBQWtCQyxDQUFsQixDQUFaO0FBQ0FnSCx3QkFBT1csSUFBUCxDQUFZRCxLQUFaO0FBQ0g7O0FBRUQsb0JBQU9WLE1BQVA7QUFDSDs7O2tDQUdRMEYsTSxFQUNUO0FBQ0ksb0JBQU9BLFNBQVN4TixLQUFLQyxFQUFkLEdBQW1CLEdBQTFCO0FBQ0g7Ozt5Q0FJRDtBQUFBOztBQUFBLGlCQURjd04sZUFDZCx1RUFEZ0MsS0FDaEM7O0FBQ0ksaUJBQU1uQixVQUFVLEtBQUtBLE9BQXJCOztBQURKLHdDQUdhbkcsQ0FIYjtBQUlRLHFCQUFJdUgsVUFBVSxzQkFBWXBCLE9BQVosQ0FBZDtBQUFBLHFCQUNJeEUsU0FBU29FLGNBQWMvRixDQUFkLENBRGI7O0FBR0EyQix3QkFBT2EsT0FBUCxDQUFlLFVBQUNILEtBQUQsRUFBVztBQUN0QmtGLDZCQUFRQyxRQUFSLENBQWlCbkYsTUFBTTNILENBQXZCLEVBQTBCMkgsTUFBTTFILENBQWhDO0FBQ0gsa0JBRkQ7O0FBSUEscUJBQUkyTSxlQUFKLEVBQXFCO0FBQ2pCLDRCQUFLRyxXQUFMLENBQWlCRixPQUFqQixFQUEwQjFOLEtBQUtFLE1BQUwsS0FBZ0IsRUFBMUM7QUFDSDs7QUFFRDZMLHdCQUFPdEQsSUFBUCxDQUFZaUYsT0FBWjs7QUFFQUEseUJBQVFHLFVBQVIsQ0FBbUJuRSxRQUFuQixFQUE2QnNDLFVBQTdCO0FBakJSOztBQUdJLGtCQUFLLElBQUk3RixJQUFJLENBQWIsRUFBZ0JBLElBQUkrRixjQUFjN0ssTUFBbEMsRUFBMEMsRUFBRThFLENBQTVDLEVBQStDO0FBQUEsdUJBQXRDQSxDQUFzQztBQWU5QztBQUNKOzs7K0NBSUQ7QUFDSSxpQkFBSW1FLFNBQVMsR0FBYjtBQUFBLGlCQUNJd0QsV0FBVyxHQURmO0FBQUEsaUJBRUlDLFFBQVEsRUFGWjtBQUFBLGlCQUdJaEssSUFBSXVHLFNBQVN5RCxLQUhqQjtBQUFBLGlCQUlJL0osSUFBSXNHLFNBQVN3RCxRQUFULEdBQW9CQyxRQUFRLENBSnBDO0FBQUEsaUJBS0kxSixJQUFJaUcsU0FBU3dELFdBQVcsQ0FBcEIsR0FBd0JDLFFBQVEsQ0FMeEM7O0FBT0E3Qiw2QkFBZ0IsRUFBaEI7QUFDQUEsMkJBQWN6RCxJQUFkLENBQW1CLEtBQUt1RixnQkFBTCxDQUFzQmpLLENBQXRCLEVBQXlCQSxDQUF6QixFQUE0QixDQUE1QixDQUFuQjtBQUNBbUksMkJBQWN6RCxJQUFkLENBQW1CLEtBQUt1RixnQkFBTCxDQUFzQmhLLENBQXRCLEVBQXlCRCxDQUF6QixFQUE0QixDQUE1QixDQUFuQjtBQUNBbUksMkJBQWN6RCxJQUFkLENBQW1CLEtBQUt1RixnQkFBTCxDQUFzQjNKLENBQXRCLEVBQXlCTixDQUF6QixFQUE0QixDQUE1QixDQUFuQjtBQUNBbUksMkJBQWN6RCxJQUFkLENBQW1CLEtBQUt1RixnQkFBTCxDQUFzQmpLLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QixDQUE1QixDQUFuQjtBQUNBa0ksMkJBQWN6RCxJQUFkLENBQW1CLEtBQUt1RixnQkFBTCxDQUFzQmhLLENBQXRCLEVBQXlCQSxDQUF6QixFQUE0QixDQUE1QixDQUFuQjtBQUNBa0ksMkJBQWN6RCxJQUFkLENBQW1CLEtBQUt1RixnQkFBTCxDQUFzQjNKLENBQXRCLEVBQXlCTCxDQUF6QixFQUE0QixDQUE1QixDQUFuQjtBQUNBa0ksMkJBQWN6RCxJQUFkLENBQW1CLEtBQUt1RixnQkFBTCxDQUFzQmpLLENBQXRCLEVBQXlCTSxDQUF6QixFQUE0QixDQUE1QixDQUFuQjtBQUNBNkgsMkJBQWN6RCxJQUFkLENBQW1CLEtBQUt1RixnQkFBTCxDQUFzQmhLLENBQXRCLEVBQXlCSyxDQUF6QixFQUE0QixFQUE1QixDQUFuQjtBQUNBLGtCQUFLNEosU0FBTCxDQUFlNUosQ0FBZixFQUFrQkEsQ0FBbEIsRUFBcUJpRyxNQUFyQjtBQUNBOztBQUVBLGtCQUFLNEQsYUFBTCxDQUFtQixJQUFuQjtBQUNIOzs7b0NBR1U5SCxLLEVBQ1g7QUFBQSxpQkFEa0JxSCxlQUNsQix1RUFEb0MsSUFDcEM7O0FBQ0ksaUJBQUlDLFVBQVUsc0JBQVksS0FBS3BCLE9BQWpCLENBQWQ7O0FBRUEsaUJBQUl4RSxTQUFTb0UsY0FBYzlGLEtBQWQsQ0FBYjs7QUFFQTBCLG9CQUFPYSxPQUFQLENBQWUsVUFBQ0gsS0FBRCxFQUFXO0FBQ3RCa0YseUJBQVFDLFFBQVIsQ0FBaUJuRixNQUFNM0gsQ0FBdkIsRUFBMEIySCxNQUFNMUgsQ0FBaEM7QUFDSCxjQUZEOztBQUlBLGlCQUFJMk0sZUFBSixFQUFxQjtBQUNqQixzQkFBS0csV0FBTCxDQUFpQkYsT0FBakIsRUFBMkIxTixLQUFLRSxNQUFMLEtBQWdCLEVBQWpCLEdBQXVCRixLQUFLQyxFQUE1QixHQUFpQyxHQUEzRDtBQUNIOztBQUVEeU4scUJBQVFHLFVBQVIsQ0FBbUJuRSxRQUFuQixFQUE2QnNDLFVBQTdCO0FBQ0FELG9CQUFPdEQsSUFBUCxDQUFZaUYsT0FBWjtBQUNIOzs7bUNBR1M3TSxDLEVBQUdDLEMsRUFBR3dKLE0sRUFDaEI7QUFDSSxpQkFBSTZELFNBQVMscUJBQVcsS0FBSzdCLE9BQWhCLEVBQXlCekwsQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCd0osTUFBL0IsQ0FBYjtBQUNBNkQsb0JBQU9OLFVBQVAsQ0FBa0JuRSxRQUFsQixFQUE0QnNDLFVBQTVCO0FBQ0FELG9CQUFPdEQsSUFBUCxDQUFZMEYsTUFBWjtBQUNBLGtCQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7O3dDQUlEO0FBQ0l6RSxzQkFBUzVKLEtBQVQ7O0FBRUFpTSxvQkFBT3BELE9BQVAsQ0FBZSxVQUFDK0UsT0FBRCxFQUFhO0FBQ3hCQSx5QkFBUUcsVUFBUixDQUFtQm5FLFFBQW5CLEVBQTZCc0MsVUFBN0I7QUFDSCxjQUZEO0FBR0g7Ozs0Q0FJRDtBQUFBOztBQUNJLGlCQUFJb0MsWUFBWSxLQUFLeEIsaUJBQXJCOztBQUVBLGlCQUFJLENBQUN3QixTQUFMLEVBQWdCO0FBQ1o7QUFDSDs7QUFFRHJDLG9CQUFPcEQsT0FBUCxDQUFlLFVBQUMwRixLQUFELEVBQVc7O0FBRXRCLHFCQUFJQSxVQUFVRCxTQUFkLEVBQXlCO0FBQ3JCLHlCQUFJRSxNQUFNRixVQUFVRyxZQUFWLENBQXVCRixLQUF2QixDQUFWOztBQUVBO0FBQ0EseUJBQUksT0FBS0csaUJBQUwsQ0FBdUJGLEdBQXZCLENBQUosRUFBaUM7QUFDN0IsZ0NBQUtHLGNBQUwsQ0FBb0JILEdBQXBCLEVBQXlCRixTQUF6QixFQUFvQ0MsS0FBcEM7QUFDSDtBQUNKO0FBQ0osY0FWRDtBQVdIOztBQUdEOzs7Ozs7OzsyQ0FLa0JDLEcsRUFDbEI7QUFDSTtBQUNBLGlCQUFJQSxJQUFJSSxJQUFKLElBQVk3QixTQUFaLElBQXlCeUIsSUFBSUssT0FBSixLQUFnQixDQUE3QyxFQUFnRDtBQUM1Qyx3QkFBTyxJQUFQO0FBQ0g7QUFDRCxvQkFBTyxLQUFQO0FBQ0g7OzsrQ0FHcUJMLEcsRUFBS00sUSxFQUFVQyxRLEVBQ3JDO0FBQ0ksaUJBQUlQLElBQUlJLElBQUosS0FBYTdCLFNBQWpCLEVBQ0k7O0FBRUosaUJBQUlpQyxpQkFBaUIsaUJBQU9DLFVBQVAsQ0FBa0JILFNBQVNJLFNBQVQsRUFBbEIsQ0FBckI7QUFBQSxpQkFDSUMsaUJBQWlCLGlCQUFPRixVQUFQLENBQWtCRixTQUFTRyxTQUFULEVBQWxCLENBRHJCO0FBQUEsaUJBRUlFLGVBQWVELGVBQWVoTyxRQUFmLENBQXdCNk4sY0FBeEIsQ0FGbkI7QUFBQSxpQkFHSUssbUJBQW1CLGlCQUFPSixVQUFQLENBQWtCRyxZQUFsQixFQUFnQzNOLFNBQWhDLEVBSHZCOztBQUtBLGlCQUFJNE4saUJBQWlCN0ksVUFBakIsQ0FBNEJnSSxJQUFJSSxJQUFoQyxJQUF3QyxDQUE1QyxFQUErQztBQUMzQ0oscUJBQUlJLElBQUosQ0FBUzdOLENBQVQsR0FBYSxDQUFDeU4sSUFBSUksSUFBSixDQUFTN04sQ0FBdkI7QUFDQXlOLHFCQUFJSSxJQUFKLENBQVM1TixDQUFULEdBQWEsQ0FBQ3dOLElBQUlJLElBQUosQ0FBUzVOLENBQXZCO0FBQ0g7QUFDSjs7Ozs7QUFHRDs7Ozs7O3dDQU1ld04sRyxFQUFLTSxRLEVBQVVDLFEsRUFDOUI7QUFDSSxpQkFBSVAsSUFBSUksSUFBSixLQUFhN0IsU0FBakIsRUFBNEI7QUFDeEJ5QixxQkFBSUksSUFBSixHQUFXLHFCQUFXLENBQVgsRUFBYyxDQUFkLENBQVg7QUFDSDs7QUFFRCxpQkFBSTlLLEtBQUswSyxJQUFJSSxJQUFKLENBQVM3TixDQUFULEdBQWF5TixJQUFJSyxPQUExQjtBQUFBLGlCQUNJOUssS0FBS3lLLElBQUlJLElBQUosQ0FBUzVOLENBQVQsR0FBYXdOLElBQUlLLE9BRDFCOztBQUdBLGlCQUFJUyxhQUFhLEtBQUtBLFVBQXRCO0FBQUEsaUJBQ0lDLGlCQUFpQlQsU0FBU0ksU0FBVCxFQURyQjtBQUFBLGlCQUVJTSxpQkFBaUJULFNBQVNHLFNBQVQsRUFGckI7QUFBQSxpQkFHSXJMLFlBQVkscUJBQVcyTCxlQUFlek8sQ0FBZixHQUFtQndPLGVBQWV4TyxDQUE3QyxFQUFnRHlPLGVBQWV4TyxDQUFmLEdBQW1CdU8sZUFBZXZPLENBQWxGLENBSGhCO0FBQUEsaUJBSUl5TyxnQkFBZ0I1TCxVQUFVa0UsSUFBVixFQUpwQjtBQUFBLGlCQUtJMkgsZ0JBQWdCLHFCQUFXNUwsRUFBWCxFQUFlQyxFQUFmLENBTHBCOztBQU9BOzs7Ozs7QUFNQSxpQkFBSXJCLE1BQU00TSxXQUFXOUksVUFBWCxDQUFzQmtKLGFBQXRCLENBQVY7O0FBRUEsaUJBQUloTixNQUFNLENBQVYsRUFBYTtBQUNUb0Isc0JBQUssQ0FBQ0EsRUFBTjtBQUNBQyxzQkFBSyxDQUFDQSxFQUFOO0FBQ0g7O0FBRUQsaUJBQUlRLElBQUl3SyxTQUFTRyxTQUFULEVBQVI7QUFBQSxpQkFDSXRLLEtBQUsscUJBQVdkLEVBQVgsRUFBZUMsRUFBZixDQURUO0FBQUEsaUJBRUk0TCxjQUFjL0ssR0FBR1IsS0FBSCxHQUFXMkQsSUFBWCxFQUZsQjtBQUFBLGlCQUdJNkgsUUFBUUgsY0FBY2pKLFVBQWQsQ0FBeUJtSixXQUF6QixDQUhaO0FBQUEsaUJBSUlFLFNBQVMscUJBQVd0TCxFQUFFeEQsQ0FBYixFQUFnQndELEVBQUV2RCxDQUFsQixDQUpiO0FBS0E0RCxrQkFBS2lMLE9BQU96TCxLQUFQLEdBQWVqRCxRQUFmLENBQXdCeUQsRUFBeEIsQ0FBTDs7QUFFQTtBQUNBLGlCQUFJZ0wsU0FBUyxDQUFiLEVBQWdCO0FBQ1osbUNBQVFFLFNBQVIsQ0FBa0IvUyxPQUFPOE0sQ0FBekIsRUFBNEJnRyxNQUE1QixFQUFvQ2pMLEVBQXBDLEVBQXdDLEtBQXhDLEVBQStDLENBQS9DLEVBQWtEdUgsV0FBbEQ7QUFDQTtBQUNBNEMsMEJBQVNnQixJQUFULENBQWNqTSxFQUFkLEVBQWtCQyxFQUFsQjtBQUNIO0FBQ0o7OztxQ0FHV3dLLEssRUFBT3RPLE8sRUFDbkI7QUFDSTtBQUNBLGlCQUFJK0gsU0FBU3VHLE1BQU12RyxNQUFuQjs7QUFFQSxpQkFBSUEsTUFBSixFQUFZO0FBQ1IscUJBQUk2SCxTQUFTdEIsTUFBTVcsU0FBTixFQUFiOztBQUVBLHNCQUFLLElBQUs3SSxJQUFJLENBQWQsRUFBaUJBLElBQUkyQixPQUFPekcsTUFBNUIsRUFBb0M4RSxHQUFwQyxFQUF5QztBQUNyQyx5QkFBSXFDLFFBQVFWLE9BQU8zQixDQUFQLENBQVo7QUFDQTJCLDRCQUFPM0IsQ0FBUCxJQUFZLEtBQUsySixhQUFMLENBQW1CSCxNQUFuQixFQUEyQm5ILEtBQTNCLEVBQWtDekksT0FBbEMsQ0FBWjtBQUNIO0FBQ0o7QUFDSjs7QUFHRDs7Ozs7Ozs7Ozt1Q0FPY2dRLEssRUFBT3ZILEssRUFBT3pJLE8sRUFDNUI7QUFDSSxpQkFBSWtGLFFBQVF1RCxNQUFNM0gsQ0FBTixHQUFVa1AsTUFBTWxQLENBQTVCO0FBQ0EsaUJBQUlxRSxRQUFRc0QsTUFBTTFILENBQU4sR0FBVWlQLE1BQU1qUCxDQUE1QjtBQUNBLGlCQUFJa1AsT0FBT2hRLEtBQUt5RCxJQUFMLENBQVV3QixRQUFRQSxLQUFSLEdBQWdCQyxRQUFRQSxLQUFsQyxDQUFYO0FBQ0EsaUJBQUkrSyxLQUFLalEsS0FBSzBDLEtBQUwsQ0FBV3dDLEtBQVgsRUFBa0JELEtBQWxCLEtBQTRCLE1BQU1qRixLQUFLQyxFQUF2QyxDQUFUO0FBQ0EsaUJBQUlpUSxLQUFNLENBQUNELEtBQUtsUSxPQUFOLElBQWlCLEdBQWxCLElBQTBCQyxLQUFLQyxFQUFMLEdBQVUsR0FBcEMsQ0FBVDtBQUNBLGlCQUFJWSxJQUFLa1AsTUFBTWxQLENBQU4sR0FBVW1QLE9BQU9oUSxLQUFLZ0QsR0FBTCxDQUFTa04sRUFBVCxDQUFqQixHQUFnQyxHQUFqQyxHQUF3QyxDQUFoRDtBQUNBLGlCQUFJcFAsSUFBS2lQLE1BQU1qUCxDQUFOLEdBQVVrUCxPQUFPaFEsS0FBS2lELEdBQUwsQ0FBU2lOLEVBQVQsQ0FBakIsR0FBZ0MsR0FBakMsR0FBd0MsQ0FBaEQ7QUFDQSxvQkFBTyxFQUFDclAsR0FBR0EsQ0FBSixFQUFPQyxHQUFHQSxDQUFWLEVBQVA7QUFDSDs7O3VDQUlEO0FBQUE7O0FBQ0lnTCwyQkFBY2hNLEtBQWQ7O0FBRUEsaUJBQUlnRixlQUFlLGlCQUFPaUssVUFBUCxDQUFrQixnQkFBTXBKLE1BQXhCLENBQW5COztBQUVBb0csb0JBQU9wRCxPQUFQLENBQWUsVUFBQzBGLEtBQUQsRUFBVztBQUN0QixxQkFBSUEsTUFBTThCLGFBQU4sQ0FBb0JyTCxhQUFhakUsQ0FBakMsRUFBb0NpRSxhQUFhaEUsQ0FBakQsQ0FBSixFQUF5RDtBQUNyRCw0QkFBSzhMLGlCQUFMLEdBQXlCeUIsS0FBekI7QUFDQSw0QkFBSzVCLGNBQUwsQ0FBb0I1TCxDQUFwQixHQUF3QmlFLGFBQWFqRSxDQUFyQztBQUNBLDRCQUFLNEwsY0FBTCxDQUFvQjNMLENBQXBCLEdBQXdCZ0UsYUFBYWhFLENBQXJDO0FBQ0EsNEJBQUs2TCxRQUFMLENBQWM5TCxDQUFkLEdBQWtCaUUsYUFBYWpFLENBQS9CO0FBQ0EsNEJBQUs4TCxRQUFMLENBQWM3TCxDQUFkLEdBQWtCZ0UsYUFBYWhFLENBQS9CO0FBQ0g7QUFDSixjQVJEO0FBU0g7Ozt1Q0FJRDtBQUNJZ0wsMkJBQWNoTSxLQUFkOztBQUVBLGlCQUFJZ0YscUJBQUo7QUFBQSxpQkFBa0JzSyxtQkFBbEI7O0FBRUEsaUJBQUksS0FBS3hDLGlCQUFULEVBQTRCO0FBQ3hCOUgsZ0NBQWUsaUJBQU9pSyxVQUFQLENBQWtCLGdCQUFNcEosTUFBeEIsQ0FBZjs7QUFFQSxzQkFBS3lKLFVBQUwsR0FBa0JBLGFBQWF0SyxhQUFhWixLQUFiLEdBQXFCakQsUUFBckIsQ0FBOEIsS0FBSzBMLFFBQW5DLENBQS9COztBQUVBLHNCQUFLQyxpQkFBTCxDQUF1QmlELElBQXZCLENBQTRCVCxXQUFXdk8sQ0FBdkMsRUFBMEN1TyxXQUFXdE8sQ0FBckQ7O0FBRUEsc0JBQUs2TCxRQUFMLENBQWM5TCxDQUFkLEdBQWtCaUUsYUFBYWpFLENBQS9CO0FBQ0Esc0JBQUs4TCxRQUFMLENBQWM3TCxDQUFkLEdBQWtCZ0UsYUFBYWhFLENBQS9COztBQUVBLHNCQUFLc1AsZ0JBQUw7QUFDQSxzQkFBS0MsWUFBTDtBQUNIO0FBQ0o7OztxQ0FJRDtBQUNJdkUsMkJBQWNoTSxLQUFkO0FBQ0Esa0JBQUs4TSxpQkFBTCxHQUF5QkMsU0FBekI7QUFDSDs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztpQ0FHUTFOLEMsRUFDUjtBQUNJLHFCQUFRQSxFQUFFQyxPQUFWO0FBQ0ksc0JBQUssa0JBQVFrUixNQUFiO0FBQ0l6USw2QkFBUUMsS0FBUjs7QUFFQSx5QkFBSWpELE9BQU84TSxDQUFYLEVBQWM7QUFDVjlNLGdDQUFPOE0sQ0FBUCxDQUFTN0osS0FBVDtBQUNIOztBQUVEO0FBQ0osc0JBQUssa0JBQVFQLEtBQWI7QUFDSTtBQUNBO0FBQ0osc0JBQUssa0JBQVFnUixRQUFiO0FBQ0k7QUFDQTtBQUNKLHNCQUFLLGtCQUFRQyxRQUFiO0FBQ0k7QUFDQTtBQWpCUjtBQW1CSDs7OztHQXBZNkI3UyxLQUFLTyxTOzttQkFBbEJpTyxJOzs7Ozs7Ozs7Ozs7Ozs7S0NwQkFPLEssR0FFakIsZUFBWTdMLENBQVosRUFBZUMsQ0FBZixFQUNBO0FBQUE7O0FBQ0ksVUFBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsVUFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0gsRTs7bUJBTmdCNEwsSzs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FHcUIrRCxNOzs7QUFFakIscUJBQVluRSxPQUFaLEVBQXFCekwsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCd0osTUFBM0IsRUFDQTtBQUFBOztBQUFBOztBQUdJLGVBQUtvRyxJQUFMLEdBQVksUUFBWjtBQUNBLGVBQUtwRSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxlQUFLekwsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsZUFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsZUFBS3dKLE1BQUwsR0FBY0EsTUFBZDtBQVBKO0FBUUM7O0FBR0Q7Ozs7Ozs7O3FDQUtBO0FBQ0ksb0JBQU8sSUFBSTNNLEtBQUsrTyxLQUFULENBQWUsS0FBSzdMLENBQXBCLEVBQXNCLEtBQUtDLENBQTNCLENBQVA7QUFDSDs7O3NDQUdZdU4sSyxFQUNiO0FBQ0ksaUJBQUlBLE1BQU0vRCxNQUFOLEtBQWlCdUMsU0FBckIsRUFBZ0M7QUFDNUIsd0JBQU8sS0FBSzhELHlCQUFMLENBQStCdEMsS0FBL0IsRUFBc0MsSUFBdEMsQ0FBUDtBQUNILGNBRkQsTUFHSztBQUNELHdCQUFPLEtBQUt1Qyx3QkFBTCxDQUE4QixJQUE5QixFQUFvQ3ZDLEtBQXBDLENBQVA7QUFDSDtBQUNKOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBa0IrQlgsTyxFQUFTUyxNLEVBQ3hDO0FBQ0ksaUJBQUloTyxNQUFNMFEsT0FBT0MsU0FBakI7QUFBQSxpQkFDSUMsZUFBZSxpQkFBT2hDLFVBQVAsQ0FBa0JaLE1BQWxCLENBRG5CO0FBQUEsaUJBRUk5TSxlQUZKO0FBQUEsaUJBRVkyUCx3QkFGWjtBQUFBLGlCQUU2QkMscUJBRjdCOztBQUlBLGtCQUFLLElBQUk5SyxJQUFFLENBQVgsRUFBY0EsSUFBSXVILFFBQVE1RixNQUFSLENBQWV6RyxNQUFqQyxFQUF5QzhFLEdBQXpDLEVBQThDO0FBQzFDNkssbUNBQWtCLGlCQUFPakMsVUFBUCxDQUFrQnJCLFFBQVE1RixNQUFSLENBQWUzQixDQUFmLENBQWxCLENBQWxCO0FBQ0E2SyxpQ0FBZ0I1SyxLQUFoQixHQUF3QkQsQ0FBeEI7QUFDQTlFLDBCQUFTMlAsZ0JBQWdCOU0sS0FBaEIsR0FBd0JnTixRQUF4QixDQUFpQy9DLE1BQWpDLENBQVQ7O0FBRUEscUJBQUk5TSxTQUFTbEIsR0FBYixFQUFrQjtBQUNkQSwyQkFBTWtCLE1BQU47QUFDQTRQLG9DQUFlRCxlQUFmO0FBQ0g7QUFDSjs7QUFFRCxvQkFBT0MsYUFBYS9NLEtBQWIsRUFBUDtBQUNIOztBQUdEOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7dUNBWWNpSyxNLEVBQVE4QyxZLEVBQ3RCO0FBQ0ksaUJBQUloSSxLQUFLLHFCQUFXa0YsT0FBT3ROLENBQWxCLEVBQXFCc04sT0FBT3JOLENBQTVCLENBQVQ7QUFBQSxpQkFDSW9JLEtBQUsscUJBQVcrSCxhQUFhcFEsQ0FBeEIsRUFBMkJvUSxhQUFhblEsQ0FBeEMsQ0FEVDtBQUFBLGlCQUVJcVEsZ0JBQWdCbEksR0FBR2hJLFFBQUgsQ0FBWWlJLEVBQVosQ0FGcEI7O0FBSUEsK0JBQVFrSSxTQUFSLENBQWtCdlUsT0FBTzhNLENBQXpCLEVBQTRCc0gsWUFBNUIsRUFBMEMsS0FBMUMsRUFBaUQsQ0FBakQsRUFBb0QsUUFBcEQsRUFBOEQsR0FBOUQ7QUFDQTs7QUFFQSxvQkFBT0UsY0FBYzVQLFNBQWQsRUFBUDtBQUNIOzs7aUNBR09tTixJLEVBQ1I7QUFDSSxpQkFBSTJDLFVBQVUsRUFBZDtBQUFBLGlCQUNJN0ksUUFBUSxJQUFJN0ssS0FBSytPLEtBQVQsQ0FBZSxLQUFLN0wsQ0FBcEIsRUFBdUIsS0FBS0MsQ0FBNUIsQ0FEWjtBQUFBLGlCQUVJd1EsY0FBYyxxQkFBVzlJLE1BQU0zSCxDQUFqQixFQUFvQjJILE1BQU0xSCxDQUExQixDQUZsQjtBQUFBLGlCQUdJd0YsYUFBYWdMLFlBQVloTCxVQUFaLENBQXVCb0ksSUFBdkIsQ0FIakI7O0FBS0EyQyxxQkFBUTVJLElBQVIsQ0FBYW5DLFVBQWI7QUFDQStLLHFCQUFRNUksSUFBUixDQUFhbkMsYUFBYSxLQUFLZ0UsTUFBL0I7QUFDQStHLHFCQUFRNUksSUFBUixDQUFhbkMsYUFBYSxLQUFLZ0UsTUFBL0I7O0FBRUEsb0JBQU8seUJBQ0h0SyxLQUFLRyxHQUFMLENBQVNvUixLQUFULENBQWV2UixJQUFmLEVBQXFCcVIsT0FBckIsQ0FERyxFQUVIclIsS0FBS0ksR0FBTCxDQUFTbVIsS0FBVCxDQUFldlIsSUFBZixFQUFxQnFSLE9BQXJCLENBRkcsQ0FBUDtBQUlIOzs7bUNBSUQ7QUFDSSxvQkFBT3hFLFNBQVA7QUFDSDs7O29DQUdVbkQsUSxFQUNYO0FBQUEsaUJBRHFCOEgsU0FDckIsdUVBRGlDLFFBQ2pDOztBQUNJOUgsc0JBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0I0SCxTQUF0QjtBQUNBOUgsc0JBQVNLLE1BQVQsQ0FBZ0IsS0FBS2xKLENBQUwsR0FBUyxLQUFLeUosTUFBOUIsRUFBc0MsS0FBS3hKLENBQTNDO0FBQ0E0SSxzQkFBUytILEdBQVQsQ0FBYSxLQUFLNVEsQ0FBbEIsRUFBcUIsS0FBS0MsQ0FBMUIsRUFBNkIsS0FBS3dKLE1BQWxDLEVBQTBDLENBQTFDLEVBQTZDdEssS0FBS0MsRUFBTCxHQUFVLENBQXZELEVBQTBELEtBQTFEO0FBQ0g7Ozs4QkFHSTJELEUsRUFBSUMsRSxFQUNUO0FBQ0ksa0JBQUtoRCxDQUFMLElBQVUrQyxFQUFWO0FBQ0Esa0JBQUs5QyxDQUFMLElBQVUrQyxFQUFWO0FBQ0g7Ozt1Q0FHYWhELEMsRUFBR0MsQyxFQUNqQjtBQUNJLGtCQUFLd0wsT0FBTCxDQUFhb0YsSUFBYjtBQUNBLGtCQUFLcEYsT0FBTCxDQUFhb0YsSUFBYjtBQUNBLGtCQUFLcEYsT0FBTCxDQUFhcUYsU0FBYjtBQUNBLGtCQUFLckYsT0FBTCxDQUFhbUYsR0FBYixDQUFpQixLQUFLNVEsQ0FBdEIsRUFBeUIsS0FBS0MsQ0FBOUIsRUFBaUMsS0FBS3dKLE1BQXRDLEVBQThDLENBQTlDLEVBQWlEdEssS0FBS0MsRUFBTCxHQUFVLENBQTNELEVBQThELEtBQTlEO0FBQ0EsaUJBQU1rUSxnQkFBZ0IsS0FBSzdELE9BQUwsQ0FBYTZELGFBQWIsQ0FBMkJ0UCxDQUEzQixFQUE4QkMsQ0FBOUIsQ0FBdEI7QUFDQSxrQkFBS3dMLE9BQUwsQ0FBYXNGLE9BQWI7QUFDQSxvQkFBT3pCLGFBQVA7QUFDSDs7Ozs7O21CQXpKZ0JNLE07Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7OztLQUdxQm9CLEs7QUFDakIsc0JBQWM7QUFBQTs7QUFDVixjQUFLeEYsV0FBTCxHQUFtQixJQUFuQjtBQUNIOzs7O2tEQUd3QnlGLEksRUFBTXpELEssRUFBTztBQUNsQyxpQkFBSTBELGlCQUFpQmxCLE9BQU9DLFNBQTVCO0FBQUEsaUJBQ0luQyxPQURKO0FBQUEsaUJBQ2FxRCx1QkFEYjtBQUFBLGlCQUVJdEQsSUFGSjtBQUFBLGlCQUVVdUQsV0FGVjtBQUFBLGlCQUV1QkMsV0FGdkI7O0FBSUEsa0JBQUssSUFBSS9MLElBQUksQ0FBYixFQUFnQkEsSUFBSTJMLEtBQUt6USxNQUF6QixFQUFpQyxFQUFFOEUsQ0FBbkMsRUFBc0M7QUFDbEN1SSx3QkFBT29ELEtBQUszTCxDQUFMLENBQVA7QUFDQThMLCtCQUFjNUQsTUFBTThELE9BQU4sQ0FBY3pELElBQWQsQ0FBZDtBQUNBd0QsK0JBQWMsS0FBS0MsT0FBTCxDQUFhekQsSUFBYixDQUFkO0FBQ0FDLDJCQUFVc0QsWUFBWUcsVUFBWixDQUF1QkYsV0FBdkIsQ0FBVjs7QUFFQTs7Ozs7O0FBTUEscUJBQUl2RCxZQUFZLENBQWhCLEVBQW1CO0FBQUU7QUFDakIsNEJBQU8sa0JBQVEsQ0FBUixDQUFQO0FBQ0gsa0JBRkQsTUFHSztBQUNELHlCQUFJQSxVQUFVb0QsY0FBZCxFQUE4QjtBQUMxQkEsMENBQWlCcEQsT0FBakI7QUFDQXFELG1EQUEwQnRELElBQTFCO0FBQ0g7QUFDSjtBQUNKOztBQUVELG9CQUFPLGtCQUFRcUQsY0FBUixFQUF3QkMsdUJBQXhCLENBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7O29EQU0yQjlHLEUsRUFBSUMsRSxFQUFJO0FBQy9CLGlCQUFJa0gsT0FBT25ILEdBQUdvSCx3QkFBSCxDQUE0QnBILEdBQUdxSCxPQUFILEVBQTVCLEVBQTBDcEgsRUFBMUMsQ0FBWDtBQUFBLGlCQUNJcUgsT0FBT3RILEdBQUdvSCx3QkFBSCxDQUE0Qm5ILEdBQUdvSCxPQUFILEVBQTVCLEVBQTBDcEgsRUFBMUMsQ0FEWDs7QUFHQSxpQkFBSWtILEtBQUsxRCxPQUFMLEtBQWlCLENBQWpCLElBQXNCNkQsS0FBSzdELE9BQUwsS0FBaUIsQ0FBM0MsRUFBOEM7QUFDMUMsd0JBQU8sa0JBQVEsQ0FBUixDQUFQO0FBQ0gsY0FGRCxNQUdLO0FBQ0Qsd0JBQU8wRCxLQUFLMUQsT0FBTCxHQUFlNkQsS0FBSzdELE9BQXBCLEdBQThCMEQsSUFBOUIsR0FBcUNHLElBQTVDO0FBQ0g7QUFDSjs7QUFHRDs7Ozs7Ozs7a0RBS3lCQyxFLEVBQUlDLEUsRUFBSTtBQUM3QixpQkFBSXhCLFdBQVdsUixLQUFLeUQsSUFBTCxDQUFVekQsS0FBSzJTLEdBQUwsQ0FBU0QsR0FBRzdSLENBQUgsR0FBTzRSLEdBQUc1UixDQUFuQixFQUFzQixDQUF0QixJQUNyQmIsS0FBSzJTLEdBQUwsQ0FBU0QsR0FBRzVSLENBQUgsR0FBTzJSLEdBQUczUixDQUFuQixFQUFzQixDQUF0QixDQURXLENBQWY7QUFBQSxpQkFFSTZOLFVBQVUzTyxLQUFLeUIsR0FBTCxDQUFTZ1IsR0FBR25JLE1BQUgsR0FBWW9JLEdBQUdwSSxNQUF4QixJQUFrQzRHLFFBRmhEOztBQUlBLG9CQUFPdkMsVUFBVSxDQUFWLEdBQ0gsa0JBQVEsQ0FBUixDQURHLEdBRUgsa0JBQVFBLE9BQVIsQ0FGSjtBQUdIOztBQUdEOzs7Ozs7Ozs7bURBTTBCakIsTyxFQUFTUyxNLEVBQVE7QUFDdkMsaUJBQUkyRCxPQUFPcEUsUUFBUTZFLE9BQVIsRUFBWDtBQUFBLGlCQUNJdEIsZUFBZTlDLE9BQU95RSw4QkFBUCxDQUFzQ2xGLE9BQXRDLEVBQStDUyxNQUEvQyxDQURuQjs7QUFHQTs7QUFFQTJELGtCQUFLckosSUFBTCxDQUFVMEYsT0FBTzBFLGFBQVAsQ0FBcUIxRSxNQUFyQixFQUE2QjhDLFlBQTdCLENBQVY7O0FBRUEsb0JBQU92RCxRQUFRNEUsd0JBQVIsQ0FBaUNSLElBQWpDLEVBQXVDM0QsTUFBdkMsQ0FBUDtBQUNIOztBQUdEOzs7Ozs7OztzQ0FLYUUsSyxFQUFPO0FBQ2hCLGlCQUFJeUQsT0FBTyxLQUFLUyxPQUFMLEdBQWVPLE1BQWYsQ0FBc0J6RSxNQUFNa0UsT0FBTixFQUF0QixDQUFYO0FBQ0Esb0JBQU8sQ0FBQyxLQUFLUSxnQkFBTCxDQUFzQmpCLElBQXRCLEVBQTRCekQsS0FBNUIsQ0FBUjtBQUNIOztBQUdEOzs7Ozs7Ozs7MENBTWlCeUQsSSxFQUFNekQsSyxFQUFPO0FBQzFCLGtCQUFLLElBQUlsSSxJQUFJLENBQWIsRUFBZ0JBLElBQUkyTCxLQUFLelEsTUFBekIsRUFBaUMsRUFBRThFLENBQW5DLEVBQXNDO0FBQ2xDLHFCQUFJdUksT0FBT29ELEtBQUszTCxDQUFMLENBQVg7QUFDQSxxQkFBSThMLGNBQWM1RCxNQUFNOEQsT0FBTixDQUFjekQsSUFBZCxDQUFsQjtBQUNBLHFCQUFJd0QsY0FBYyxLQUFLQyxPQUFMLENBQWF6RCxJQUFiLENBQWxCOztBQUVBLHFCQUFJLENBQUN1RCxZQUFZZSxRQUFaLENBQXFCZCxXQUFyQixDQUFMLEVBQXdDO0FBQ3BDLDRCQUFPLElBQVAsQ0FEb0MsQ0FDdkI7QUFDaEI7QUFDSjtBQUNELG9CQUFPLEtBQVA7QUFDSDs7Ozs7O21CQXZIZ0JMLEs7Ozs7Ozs7Ozs7Ozs7OztLQ0pBb0IsRztBQUVqQjs7Ozs7O0FBTUEsZ0JBQ0E7QUFBQSxTQURZdEUsT0FDWix1RUFEc0I5QixTQUN0QjtBQUFBLFNBRGlDNkIsSUFDakMsdUVBRHdDN0IsU0FDeEM7O0FBQUE7O0FBQ0ksVUFBSzZCLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNILEU7O21CQVpnQnNFLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDQUFDLFU7QUFFakIseUJBQVkvUyxHQUFaLEVBQWlCQyxHQUFqQixFQUNBO0FBQUE7O0FBQ0ksY0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsY0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7Ozs7b0NBR1UrUyxVLEVBQ1g7QUFDSSxpQkFBSXhFLE9BQUo7O0FBRUEsaUJBQUksQ0FBQyxLQUFLcUUsUUFBTCxDQUFjRyxVQUFkLENBQUwsRUFDSSxPQUFPLENBQVA7O0FBRUosaUJBQUksS0FBSy9TLEdBQUwsR0FBVytTLFdBQVcvUyxHQUExQixFQUErQjtBQUMzQnVPLDJCQUFVd0UsV0FBVy9TLEdBQVgsR0FBaUIsS0FBS0QsR0FBaEM7QUFDSCxjQUZELE1BR0s7QUFDRHdPLDJCQUFVLEtBQUt2TyxHQUFMLEdBQVcrUyxXQUFXaFQsR0FBaEM7QUFDSDtBQUNELG9CQUFPd08sT0FBUDtBQUNIOzs7a0NBR1F3RSxVLEVBQ1Q7QUFDSSxvQkFBTyxLQUFLL1MsR0FBTCxHQUFXK1MsV0FBV2hULEdBQXRCLElBQTZCZ1QsV0FBVy9TLEdBQVgsR0FBaUIsS0FBS0QsR0FBMUQ7QUFDSDs7Ozs7O21CQTdCZ0IrUyxVOzs7Ozs7Ozs7Ozs7Ozs7QUNBckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBR3FCRSxPOzs7QUFFakIsc0JBQVk5RyxPQUFaLEVBQ0E7QUFBQTs7QUFBQTs7QUFHSSxlQUFLeEUsTUFBTCxHQUFjLEVBQWQ7QUFDQSxlQUFLd0UsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsZUFBS29FLElBQUwsR0FBWSxNQUFLNUksTUFBTCxDQUFZekcsTUFBWixHQUFxQixVQUFqQztBQUxKO0FBTUM7O0FBR0Q7Ozs7Ozs7O3FDQUtBO0FBQ0ksaUJBQUlnUyxXQUFXLElBQUkxVixLQUFLK08sS0FBVCxFQUFmOztBQUVBLGtCQUFLLElBQUl2RyxJQUFFLENBQU4sRUFBU3FDLEtBQWQsRUFBcUJyQyxJQUFJLEtBQUsyQixNQUFMLENBQVl6RyxNQUFyQyxFQUE2QyxFQUFFOEUsQ0FBL0MsRUFBa0Q7QUFDOUNxQyx5QkFBUSxLQUFLVixNQUFMLENBQVkzQixDQUFaLENBQVI7QUFDQWtOLDBCQUFTeFMsQ0FBVCxJQUFjMkgsTUFBTTNILENBQXBCO0FBQ0F3UywwQkFBU3ZTLENBQVQsSUFBYzBILE1BQU0xSCxDQUFwQjtBQUNIO0FBQ0Qsb0JBQU8sSUFBSW5ELEtBQUsrTyxLQUFULENBQWUyRyxTQUFTeFMsQ0FBVCxHQUFhLEtBQUtpSCxNQUFMLENBQVl6RyxNQUF4QyxFQUNIZ1MsU0FBU3ZTLENBQVQsR0FBYSxLQUFLZ0gsTUFBTCxDQUFZekcsTUFEdEIsQ0FBUDtBQUVIOztBQUdEOzs7Ozs7OztzQ0FLYWdOLEssRUFDYjtBQUNJLGlCQUFJQSxNQUFNL0QsTUFBTixLQUFpQnVDLFNBQXJCLEVBQWdDO0FBQzVCLHdCQUFPLEtBQUs4RCx5QkFBTCxDQUErQixJQUEvQixFQUFxQ3RDLEtBQXJDLENBQVA7QUFDSCxjQUZELE1BR0s7QUFDRCx3QkFBTyxLQUFLaUYsMEJBQUwsQ0FBZ0MsSUFBaEMsRUFBc0NqRixLQUF0QyxDQUFQO0FBQ0g7QUFDSjs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7O2lDQUtRSyxJLEVBQ1I7QUFDSSxpQkFBSTJDLFVBQVUsRUFBZDtBQUFBLGlCQUNJcE4sSUFBSSxzQkFEUjs7QUFHQSxrQkFBSzZELE1BQUwsQ0FBWWEsT0FBWixDQUFxQixVQUFVSCxLQUFWLEVBQWlCO0FBQ2xDdkUsbUJBQUVwRCxDQUFGLEdBQU0ySCxNQUFNM0gsQ0FBWjtBQUNBb0QsbUJBQUVuRCxDQUFGLEdBQU0wSCxNQUFNMUgsQ0FBWjtBQUNBdVEseUJBQVE1SSxJQUFSLENBQWF4RSxFQUFFcUMsVUFBRixDQUFhb0ksSUFBYixDQUFiO0FBQ0gsY0FKRDs7QUFNQSxvQkFBTyx5QkFBZTFPLEtBQUtHLEdBQUwsQ0FBU29SLEtBQVQsQ0FBZXZSLElBQWYsRUFBcUJxUixPQUFyQixDQUFmLEVBQ0hyUixLQUFLSSxHQUFMLENBQVNtUixLQUFULENBQWV2UixJQUFmLEVBQXFCcVIsT0FBckIsQ0FERyxDQUFQO0FBRUg7O0FBR0Q7Ozs7Ozs7bUNBS0E7QUFDSSxpQkFBSXBJLEtBQUssc0JBQVQ7QUFBQSxpQkFDSUMsS0FBSyxzQkFEVDtBQUFBLGlCQUVJNEksT0FBTyxFQUZYOztBQUlBLGtCQUFLLElBQUkzTCxJQUFFLENBQVgsRUFBY0EsSUFBSSxLQUFLMkIsTUFBTCxDQUFZekcsTUFBWixHQUFtQixDQUFyQyxFQUF3QzhFLEdBQXhDLEVBQTZDO0FBQ3pDOEMsb0JBQUdwSSxDQUFILEdBQU8sS0FBS2lILE1BQUwsQ0FBWTNCLENBQVosRUFBZXRGLENBQXRCO0FBQ0FvSSxvQkFBR25JLENBQUgsR0FBTyxLQUFLZ0gsTUFBTCxDQUFZM0IsQ0FBWixFQUFlckYsQ0FBdEI7O0FBRUFvSSxvQkFBR3JJLENBQUgsR0FBTyxLQUFLaUgsTUFBTCxDQUFZM0IsSUFBRSxDQUFkLEVBQWlCdEYsQ0FBeEI7QUFDQXFJLG9CQUFHcEksQ0FBSCxHQUFPLEtBQUtnSCxNQUFMLENBQVkzQixJQUFFLENBQWQsRUFBaUJyRixDQUF4Qjs7QUFFQTtBQUNBZ1Isc0JBQUtySixJQUFMLENBQVVRLEdBQUdzSyxJQUFILENBQVFySyxFQUFSLEVBQVl0QixhQUFaLEdBQTRCckcsU0FBNUIsRUFBVjtBQUNIOztBQUVEMEgsZ0JBQUdwSSxDQUFILEdBQU8sS0FBS2lILE1BQUwsQ0FBWSxLQUFLQSxNQUFMLENBQVl6RyxNQUFaLEdBQW1CLENBQS9CLEVBQWtDUixDQUF6QztBQUNBb0ksZ0JBQUduSSxDQUFILEdBQU8sS0FBS2dILE1BQUwsQ0FBWSxLQUFLQSxNQUFMLENBQVl6RyxNQUFaLEdBQW1CLENBQS9CLEVBQWtDUCxDQUF6Qzs7QUFFQW9JLGdCQUFHckksQ0FBSCxHQUFPLEtBQUtpSCxNQUFMLENBQVksQ0FBWixFQUFlakgsQ0FBdEI7QUFDQXFJLGdCQUFHcEksQ0FBSCxHQUFPLEtBQUtnSCxNQUFMLENBQVksQ0FBWixFQUFlaEgsQ0FBdEI7O0FBRUE7QUFDQWdSLGtCQUFLckosSUFBTCxDQUFVUSxHQUFHc0ssSUFBSCxDQUFRckssRUFBUixFQUFZdEIsYUFBWixHQUE0QnJHLFNBQTVCLEVBQVY7QUFDQSxvQkFBT3VRLElBQVA7QUFDSDs7O29DQUdVcEksUSxFQUNYO0FBQUEsaUJBRHFCOEgsU0FDckIsdUVBRGlDLFFBQ2pDOztBQUNJOUgsc0JBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0I0SCxTQUF0QjtBQUNBOUgsc0JBQVNLLE1BQVQsQ0FBZ0IsS0FBS2pDLE1BQUwsQ0FBWSxDQUFaLEVBQWVqSCxDQUEvQixFQUFrQyxLQUFLaUgsTUFBTCxDQUFZLENBQVosRUFBZWhILENBQWpEOztBQUVBLGtCQUFLLElBQUlxRixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzJCLE1BQUwsQ0FBWXpHLE1BQWhDLEVBQXdDOEUsR0FBeEMsRUFBNkM7QUFDekN1RCwwQkFBU00sTUFBVCxDQUFnQixLQUFLbEMsTUFBTCxDQUFZM0IsQ0FBWixFQUFldEYsQ0FBL0IsRUFBa0MsS0FBS2lILE1BQUwsQ0FBWTNCLENBQVosRUFBZXJGLENBQWpEO0FBQ0g7QUFDRDRJLHNCQUFTTSxNQUFULENBQWdCLEtBQUtsQyxNQUFMLENBQVksQ0FBWixFQUFlakgsQ0FBL0IsRUFBa0MsS0FBS2lILE1BQUwsQ0FBWSxDQUFaLEVBQWVoSCxDQUFqRDtBQUNIOzs7OEJBR0k4QyxFLEVBQUlDLEUsRUFDVDtBQUNJLGtCQUFLLElBQUlzQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzJCLE1BQUwsQ0FBWXpHLE1BQWhDLEVBQXdDLEVBQUU4RSxDQUExQyxFQUE2QztBQUN6QyxxQkFBSXFDLFFBQVEsS0FBS1YsTUFBTCxDQUFZM0IsQ0FBWixDQUFaO0FBQ0FxQyx1QkFBTTNILENBQU4sSUFBVytDLEVBQVg7QUFDQTRFLHVCQUFNMUgsQ0FBTixJQUFXK0MsRUFBWDtBQUNIO0FBQ0o7Ozt1Q0FHYWhELEMsRUFBR0MsQyxFQUNqQjtBQUNJLGlCQUFJLEtBQUtnSCxNQUFMLENBQVl6RyxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCO0FBQ0g7O0FBRUQsa0JBQUtpTCxPQUFMLENBQWFvRixJQUFiO0FBQ0Esa0JBQUtwRixPQUFMLENBQWFxRixTQUFiO0FBQ0Esa0JBQUtyRixPQUFMLENBQWF2QyxNQUFiLENBQW9CLEtBQUtqQyxNQUFMLENBQVksQ0FBWixFQUFlakgsQ0FBbkMsRUFBc0MsS0FBS2lILE1BQUwsQ0FBWSxDQUFaLEVBQWVoSCxDQUFyRDs7QUFFQSxrQkFBSyxJQUFJcUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUsyQixNQUFMLENBQVl6RyxNQUFoQyxFQUF3QzhFLEdBQXhDLEVBQTZDO0FBQ3pDLHNCQUFLbUcsT0FBTCxDQUFhdEMsTUFBYixDQUFvQixLQUFLbEMsTUFBTCxDQUFZM0IsQ0FBWixFQUFldEYsQ0FBbkMsRUFBc0MsS0FBS2lILE1BQUwsQ0FBWTNCLENBQVosRUFBZXJGLENBQXJEO0FBQ0g7O0FBRUQsa0JBQUt3TCxPQUFMLENBQWF0QyxNQUFiLENBQW9CLEtBQUtsQyxNQUFMLENBQVksQ0FBWixFQUFlakgsQ0FBbkMsRUFBc0MsS0FBS2lILE1BQUwsQ0FBWSxDQUFaLEVBQWVoSCxDQUFyRDtBQUNBLGtCQUFLd0wsT0FBTCxDQUFha0gsU0FBYjs7QUFFQSxpQkFBTXJELGdCQUFnQixLQUFLN0QsT0FBTCxDQUFhNkQsYUFBYixDQUEyQnRQLENBQTNCLEVBQThCQyxDQUE5QixDQUF0QjtBQUNBLGtCQUFLd0wsT0FBTCxDQUFhc0YsT0FBYjtBQUNBLG9CQUFPekIsYUFBUDtBQUNIOzs7a0NBR1F0UCxDLEVBQUdDLEMsRUFDWjtBQUNJLGtCQUFLZ0gsTUFBTCxDQUFZVyxJQUFaLENBQWlCLG9CQUFVNUgsQ0FBVixFQUFhQyxDQUFiLENBQWpCO0FBQ0Esa0JBQUs0UCxJQUFMLEdBQVksS0FBSzVJLE1BQUwsQ0FBWXpHLE1BQVosR0FBcUIsVUFBakM7QUFDSDs7Ozs7O21CQXJLZ0IrUixPIiwiZmlsZSI6InNhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi9UZXN0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gJy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9Nb3VzZVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xuICAgIH1cbn0oKSk7XG5cbmxldCBjYW52YXMsIHJlbmRlcmVyLCBzdGFnZSwgdGVzdCwgY29udGFpbmVyO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwge1xuICAgICAgICAgICAgdmlldzogY2FudmFzLFxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgzMzM4M0RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTW91c2UucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgICAgICAvLyDsnITsuZjqsIAg7KCV7IiY6rCAIOyVhOuLkOqyveyasCDtnZDrpr/tlZjqsowg67O07J2064qUIOusuOygnOqwgCDsnojslrRcbiAgICAgICAgLy8g66CM642U65+s7J2YIOychOy5mOulvCDsoJXsiJjroZwg7Jew7IKw65CgIOyImCDsnojrj4TroZ0g7ZWc64ukLlxuICAgICAgICAvL3JlbmRlcmVyLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcblxuICAgICAgICBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICB0ZXN0ID0gbmV3IFRlc3QocmVuZGVyZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXN0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AoKTtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTG9vcCAobXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobXMpO1xuICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobXMpIHtcbiAgICAgICAgdGVzdC51cGRhdGUoKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHN0YWdlKTtcbiAgICB9XG5cbiAgICByZXNpemVXaW5kb3coKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOy6lOuyhOyKpCDsgqzsnbTspojsmYAg65SU7Iqk7ZSM66CI7J20IOyCrOydtOymiCDshKTsoJVcbiAgICAgICAgICog66CI7Yuw64KYIOq3uOuemO2UvSDsp4Dsm5Ag7L2U65OcXG4gICAgICAgICAqL1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUElYSSByZW5kZXJlciDrpqzsgqzsnbTspohcbiAgICAgICAgICogUElYSSDsl5Dqsowgdmlld3BvcnQg7IKs7J207KaIIOuzgOqyvSDslYzrprxcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgdGVzdC5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5VXAgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5USUxERTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRE9XTl9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVQX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTEVGVF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuQkFDS19TUEFDRTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9zYXQvaW5kZXguanMiLCJcblxuY29uc3QgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG4gICAgcmV0dXJuIHJhZCAqIGRlZ3JlZXM7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMycmFkaWFuIChkZWcpIHtcbiAgICByZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cblxuXG4vKipcbiAqIFZpY3Rvci5qc+ulvCBFUzbroZwg67OA7ZmY7ZWY7JesIOyCrOyaqe2VmOqzoCDsnojsirXri4jri6QuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF4a3VlbmcvdmljdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvclxue1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tQXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21BcnJheShhcnIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tT2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBWZWN0b3IoNDIsIDEzMzcpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6MTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMSwgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdWJ0cmFjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgIH1cblxuXG4gICAgZWRnZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGVkZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QoYSwgYik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAyMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWSgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSB4IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIHkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVZKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgYSBheGlzIHZhbHVlcyBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLyBiLngsIGEueSAvIGIueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFgoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WCgpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRZKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFkoKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydCgpXG4gICAge1xuICAgICAgICB0aGlzLmludmVydFgoKTtcbiAgICAgICAgdGhpcy5pbnZlcnRZKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG5lZ2F0ZSh2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCB2ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIHYueCA9IC12ZWMueDtcbiAgICAgICAgdi55ID0gLXZlYy55O1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG11bHRpcGx5U2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiBzY2FsYXIsIHZlY3Rvci55ICogc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGVTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAvIHNjYWxhciwgdmVjdG9yLnkgLyBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKDkwIOuPhCDtmozsoIQpXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gLXZlYy55O1xuICAgICAgICBjbG9uZS55ID0gdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICgtOTAg64+EIO2ajOyghClcbiAgICAgKi9cbiAgICByZXR1cm5QZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueSwgLXRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmV0dXJuUGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuyhOumvFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlKHZlYywgbGVuZ3RoKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgICAgIGlmIChsZW5ndGhTcSA+IGxlbmd0aCAqIGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0Lm11bHRpcGx5U2NhbGFyKGxlbmd0aCAvIE1hdGguc3FydChsZW5ndGhTcSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG5vcm1hbGl6ZSgpXG4gICAge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZpZGUobmV3IFZlY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbm9ybSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBhYnNvbHV0ZSB2ZWN0b3IgYXhpcyBpcyBncmVhdGVyIHRoYW4gYG1heGAsIG11bHRpcGxpZXMgdGhlIGF4aXMgYnkgYGZhY3RvcmBcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgYm90aCB4IGFuZCB5IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGltaXQobWF4LCBmYWN0b3IpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9taXplcyBib3RoIHZlY3RvciBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODBgKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSwgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB0aGlzLnggPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIGxlZnQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0TGVmdEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICBsZWZ0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gLXRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgcmlnaHQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtAbGluayBWZWN0b3IyfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldFJpZ2h0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIHJpZ2h0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gICAgICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJpcGxlX3Byb2R1Y3QjVmVjdG9yX3RyaXBsZV9wcm9kdWN0XG4gICAgICog7IS46re466i87Yq47JeQ7IScIOybkOygkOycvOuhnCDtlqXtlZjripQg67Cp7Zal7J2EIOywvuydhCDrlYwg7IKs7JqpXG4gICAgICovXG4gICAgc3RhdGljIHRyaXBsZVByb2R1Y3QoYSwgYiwgYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGNvbnN0IGFjID0gYS54ICogYy54ICsgYS55ICogYy55ICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgICAgICwgYmMgPSBiLnggKiBjLnggKyBiLnkgKiBjLnk7ICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuXG4gICAgICAgIC8vIHBlcmZvcm0gYiAqIGEuZG90KGMpIC0gYSAqIGIuZG90KGMpXG4gICAgICAgIHIueCA9IGIueCAqIGFjIC0gYS54ICogYmM7XG4gICAgICAgIHIueSA9IGIueSAqIGFjIC0gYS55ICogYmM7XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBwcm9qZWN0T250byh2ZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgICAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICAgICAgdGhpcy55ID0gY29lZmYgKiB2ZWMyLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ISg7ZiVIOuztOqwhFxuICAgICAqIGh0dHA6Ly9kZXZlbG9wdWcuYmxvZ3Nwb3QuY29tLzIwMTQvMDkvdW5pdHktdmVjdG9yLWxlcnAuaHRtbFxuICAgICAqIEBwYXJhbSB2ZWMxXG4gICAgICogQHBhcmFtIHZlYzJcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyBsZXJwKHZlYzEsIHZlYzIsIHRvKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMxLCAxIC0gdG8pLCBWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMiwgdG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsl63siJhcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmNwKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxIC8gdmVjdG9yLngsIDEgLyB2ZWN0b3IueSk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgYW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICBhbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGVEZWcoKTtcbiAgICB9XG5cblxuICAgIGRpcmVjdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZShhbmdsZSlcbiAgICB7XG4gICAgICAgIHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcm90YXRlRGVnKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgYW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUbyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyb3RhdGlvbi10aGlzLmFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG9EZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnkocm90YXRpb24pXG4gICAge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnlEZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB2ZWMueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFkgYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSAtIHZlYy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGVTcXVhcmVkKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VTcSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVNxKHZlYylcbiAgICB7XG4gICAgICAgIHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG4gICAgICAgICAgICBkeSA9IHRoaXMuZGlzdGFuY2VZKHZlYyk7XG5cbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGgoKTtcbiAgICAgKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLqOyInO2eiCDquLjsnbQg67mE6rWQ66W8IO2VmOugpOuptCBsZW5ndGgg66W8IOyCrOyaqe2VmOq4sCDrs7Tri6TripQgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOqyjCDruaDrpbTri6QuXG4gICAgICogbGVuZ3RoIOuKlCBNYXRoLnNxcnQgKOygnOqzseq3vCkg7LKY66as66W8IO2VmOq4sCDrlYzrrLjsl5Ag64uo7IicIOq4uOydtCDruYTqtZDsi5wgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg67mg66aF64uI64ukLlxuICAgICAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGhTcSgpO1xuICAgICAqICAgICAvLyA9PiAxMjUwMFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aFNxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbGVuZ3RoU3EodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgIH1cblxuXG4gICAgbWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuXG4gICAgdG8odmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjLnggLSB0aGlzLngsIHZlYy55IC0gdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHNldCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjLnplcm8oKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNaZXJvKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdGhpcyB2ZWN0b3IgaXMgdGhlIHNhbWUgYXMgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRXF1YWxUbyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBVdGlsaXR5IE1ldGhvZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9BcnJheSgpO1xuICAgICAqICAgICAvLyA9PiBbMTAsIDIwXVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0FycmF5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gICAgICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvT2JqZWN0KClcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlY3Rvci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbi8qKlxuICogR0pLIEFsZ29yaXRobSAoR2lsYmVydC1Kb2huc29uLUtlZXJ0aGkpXG4gKiBodHRwczovL2dpdGh1Yi5jb20va3JvaXRvci9namsuY1xuICogaHR0cDovL3d3dy5keW40ai5vcmcvMjAxMC8wNC9namstZ2lsYmVydC1qb2huc29uLWtlZXJ0aGkvI2dqay10b3BcbiAqIGh0dHBzOi8vd3d3Lmhhcm9sZHNlcnJhbm8uY29tL2Jsb2cvdmlzdWFsaXppbmctdGhlLWdqay1jb2xsaXNpb24tYWxnb3JpdGhtXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanVobC9jb2xsaXNpb24tZGV0ZWN0aW9uLTJkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdKS1xue1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdG8gY29tcHV0ZSBhdmVyYWdlIGNlbnRlciAocm91Z2hseSkuIEl0IG1pZ2h0IGJlIGRpZmZlcmVudCBmcm9tXG4gICAgICogQ2VudGVyIG9mIEdyYXZpdHksIGVzcGVjaWFsbHkgZm9yIGJvZGllcyB3aXRoIG5vbnVuaWZvcm0gZGVuc2l0eSxcbiAgICAgKiBidXQgdGhpcyBpcyBvayBhcyBpbml0aWFsIGRpcmVjdGlvbiBvZiBzaW1wbGV4IHNlYXJjaCBpbiBHSktcbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgYXZlcmFnZVBvaW50KHZlcnRpY2VzKVxuICAgIHtcbiAgICAgICAgY29uc3QgYXZnID0gbmV3IFZlY3RvcigpXG4gICAgICAgICAgICAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgYXZnLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2Zy55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhdmcueCAvPSBjb3VudDtcbiAgICAgICAgYXZnLnkgLz0gY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIGF2ZztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBmdXJ0aGVzdCB2ZXJ0ZXggYWxvbmcgYSBjZXJ0YWluIGRpcmVjdGlvblxuICAgICAqIOq8reyngOygkOqzvCDrsKntlqXsnYQg7KCE64us7ZWY66m0IOuCtOyggSAo7Yis7JiBKeydhCDthrXtlbQg7LWc64yA66GcIOuovCDsooztkZzsnZgg7J24642x7Iqk66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMsIGRpcmVjdGlvbilcbiAgICB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXhQcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IFZlY3Rvci5kb3RQcm9kdWN0KGRpcmVjdGlvbiwgdmVydGljZXNbaV0pO1xuXG4gICAgICAgICAgICBpZiAocHJvZHVjdCA+IG1heFByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBtYXhQcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNaW5rb3dza2kgc3VtIHN1cHBvcnQgZnVuY3Rpb24gZm9yIEdKS1xuICAgICAqIOyngOybkCDtlajsiJjsl5DshJwg7Y+066as6rOk7J2YIO2PrOyduO2KuOyZgCDrsKntlqXsnLzroZwg7ISc66GcIOuLpOuluCDrsKntlqXsnZgg7KCQ7J2EIOq1rO2VmOqzoCBNaW5rb3dza2kgRGlmZmVyZW5jZSDrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gdmVydGljZXMyIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUg67Kh7YSwXG4gICAgICovXG4gICAgc3RhdGljIHN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGRpcmVjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIGdldCBmdXJ0aGVzdCBwb2ludCBvZiBmaXJzdCBib2R5IGFsb25nIGFuIGFyYml0cmFyeSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaSA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMxLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIC8vIGdldCBmdXJ0aGVzdCBwb2ludCBvZiBzZWNvbmQgYm9keSBhbG9uZyB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGogPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMiwgVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKGRpcmVjdGlvbiwgdHJ1ZSksICdpOicgKyBzdHIodmVydGljZXMxW2ldKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pLCB0cnVlKSwgJ2o6JyArIHN0cih2ZXJ0aWNlczJbal0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1cHBvcnQoJyArIHN0cihWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pKSArICcpJyk7XG4gICAgICAgIC8vIHN1YnRyYWN0IChNaW5rb3dza2kgc3VtKSB0aGUgdHdvIHBvaW50cyB0byBzZWUgaWYgYm9kaWVzICdvdmVybGFwJ1xuICAgICAgICByZXR1cm4gVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gdmVydGljZXMxIHtWZWN0b3JbXX1cbiAgICAgKiBAcGFyYW0gdmVydGljZXMyIHtWZWN0b3JbXX1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g7Lap64+MIOyXrOu2gFxuICAgICAqL1xuICAgIHN0YXRpYyBjaGVja0NvbGxpc2lvbih2ZXJ0aWNlczEsIHZlcnRpY2VzMilcbiAgICB7XG4gICAgICAgIC8vIGNvbnNvbGVWZXJ0aWNlcyh2ZXJ0aWNlczEsIHZlcnRpY2VzMik7XG5cbiAgICAgICAgbGV0IGl0ZXJDb3VudCA9IDAsIGluZGV4ID0gMDsgICAvLyBpbmRleCBvZiBjdXJyZW50IHZlcnRleCBvZiBzaW1wbGV4XG4gICAgICAgIGxldCBhLCBiLCBjLCBkLCBhbywgYWIsIGFjLCBhYnBlcnAsIGFjcGVycCwgc2ltcGxleCA9IG5ldyBBcnJheSgzKTtcblxuICAgICAgICAvLyDrkZAg7Y+066as6rOkIOykkeyLrCDsooztkZzrpbwg7Ya17ZW07IScIOuwqe2WpeydhCDqtaztlanri4jri6QuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uMSA9IHRoaXMuYXZlcmFnZVBvaW50KHZlcnRpY2VzMSk7IC8vIG5vdCBhIENvRyBidXRcbiAgICAgICAgY29uc3QgcG9zaXRpb24yID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMyKTsgLy8gaXQncyBvayBmb3IgR0pLIClcblxuICAgICAgICAvLyBpbml0aWFsIGRpcmVjdGlvbiBmcm9tIHRoZSBjZW50ZXIgb2YgMXN0IGJvZHkgdG8gdGhlIGNlbnRlciBvZiAybmQgYm9keVxuICAgICAgICAvLyDrsKntlqUgdmVjdG9yXG4gICAgICAgIGQgPSBWZWN0b3Iuc3VidHJhY3QocG9zaXRpb24xLCBwb3NpdGlvbjIpO1xuXG4gICAgICAgIC8vIGlmIGluaXRpYWwgZGlyZWN0aW9uIGlzIHplcm8g4oCTIHNldCBpdCB0byBhbnkgYXJiaXRyYXJ5IGF4aXMgKHdlIGNob29zZSBYKVxuICAgICAgICBpZiAoKGQueCA9PSAwKSAmJiAoZC55ID09IDApKSB7XG4gICAgICAgICAgICBkLnggPSAxLjA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IHN1cHBvcnQgYXMgaW5pdGlhbCBwb2ludCBvZiB0aGUgbmV3IHNpbXBsZXhcbiAgICAgICAgYSA9IHNpbXBsZXhbMF0gPSB0aGlzLnN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG5cbiAgICAgICAgLy8gc3VwcG9ydCDsoJDqs7wg67Cp7Zal7J20IOqwmeydgCDrsKntlqXsnbQg7JWE64uQIOqyveyasFxuICAgICAgICBpZiAoYS5kb3QoZCkgPD0gMCkge1xuICAgICAgICAgICAgLy8g66eI7KeA66eJ7JeQIOy2lOqwgCDrkJwg7KCQ7J20IGTsnZgg67Cp7Zal7Jy866GcIOybkOygkOydhCDsp4DrgpjsuZjsp4Ag7JWK7J2AIOqyveyasFxuICAgICAgICAgICAgLy8g6re4IOuLpOydjCBNaW5rb3dza2kg7ZWp7J2AIOybkOygkOydhCDtj6ztlagg7ZWgIOyImCDsl4bsirXri4jri6QuXG4gICAgICAgICAgICAvLyDstpTqsIAg65CcIOuniOyngOuniSDsoJDsnYAgTWlua293c2tpIERpZmZlcmVuY2XsnZgg6rCA7J6l7J6Q66as7JeQIOyeiOyKteuLiOuLpC5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDQVNFMVsnLCAnTk8nLCAnXScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGQgPSBWZWN0b3IubmVnYXRlKGEpOyAvLyBUaGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIGFsd2F5cyB0b3dhcmRzIHRoZSBvcmlnaW4sIHNvIHRoZSBuZXh0IHNlYXJjaCBkaXJlY3Rpb24gaXMgbmVnYXRlKGEpXG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGl0ZXJDb3VudCsrO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVyQ291bnQpO1xuXG4gICAgICAgICAgICBhID0gc2ltcGxleFsrK2luZGV4XSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG5cbiAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhLCBkKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RyKGEpLCBzdHIoZCwgdHJ1ZSksIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDQVNFMlsnLCAnTk8nLCAnXScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGHqsIAg7JuQ7KCQ7Jy866GcIO2Wpe2VmOuKlCDrsqHthLDripQgLWEg66W8IO2VmOuptCDrkKnri4jri6QuXG4gICAgICAgICAgICBhbyA9IFZlY3Rvci5uZWdhdGUoYSk7IC8vIGZyb20gcG9pbnQgQSB0byBPcmlnaW4gaXMganVzdCBuZWdhdGl2ZSBBXG5cbiAgICAgICAgICAgIC8vIHNpbXBsZXggaGFzIDIgcG9pbnRzIChhIGxpbmUgc2VnbWVudCwgbm90IGEgdHJpYW5nbGUgeWV0KVxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMikge1xuXG4gICAgICAgICAgICAgICAgYiA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICAgICAgZCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhbywgYWIpOyAvLyBub3JtYWwgdG8gQUIgdG93YXJkcyBPcmlnaW5cblxuICAgICAgICAgICAgICAgIGlmIChWZWN0b3IubGVuZ3RoU3EoZCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IFZlY3Rvci5wZXJwZW5kaWN1bGFyKGFiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7IC8vIHNraXAgdG8gbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYiA9IHNpbXBsZXhbMV07XG4gICAgICAgICAgICBjID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgIGFiID0gVmVjdG9yLnN1YnRyYWN0KGIsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQlxuICAgICAgICAgICAgYWMgPSBWZWN0b3Iuc3VidHJhY3QoYywgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBDXG5cbiAgICAgICAgICAgIC8vYWPsmYAg7IiY7KeBXG4gICAgICAgICAgICBhY3BlcnAgPSBWZWN0b3IudHJpcGxlUHJvZHVjdChhYiwgYWMsIGFjKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnLCBhLCAnYicsIGIsICdjJywgYyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW8nLCBhbywgJ2FiJywgYWIsICdhYycsIGFjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3BlcnAnLCBhY3BlcnAsIGFjcGVycC5jbG9uZSgpLm5vcm0oKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhY3BlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFjcGVycCwgYW8pKTtcblxuICAgICAgICAgICAgLy8gYWMg7IiY7KeBIOyEoOu2hOydtCBh6rCAIOybkOygkOydhCDtlqXtlZjripQg67Cp7ZalIOuwmOuMgO2OuOyXkCDsnojqs6BcbiAgICAgICAgICAgIC8vIOymiSwgYWMg7IiY7KeBIOyEoOu2hCDslYjsqr3sl5Ag7JuQ7KCQ7J20IOyeiOycvOuptFxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFjcGVycCwgYW8pID49IDApIHtcbiAgICAgICAgICAgICAgICBkID0gYWNwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQyB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQyB0b3dhcmRzIE9yaWdpbicsIGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWIg7IiY7KeBIOyEoOu2hFxuICAgICAgICAgICAgICAgIGFicGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFjLCBhYiwgYWIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYnBlcnAnLCBhYnBlcnAsIGFicGVycC5jbG9uZSgpLm5vcm0oKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdFByb2R1Y3QoYWJwZXJwLCBhbyknLCBWZWN0b3IuZG90UHJvZHVjdChhYnBlcnAsIGFvKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aE7J20IOybkOygkCDrsJjrjIAg67Cp7Zal7J2EIO2Wpe2VmOqzoCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICAvLyDspoksIOybkOygkOydtCDsgrzqsIHtmJUg7JWI7JeQIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhYnBlcnAsIGFvKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIGNvbGxpc2lvblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNpbXBsZXhbMF0gPSBzaW1wbGV4WzFdOyAvLyBzd2FwIGZpcnN0IGVsZW1lbnQgKHBvaW50IEMpXG4gICAgICAgICAgICAgICAgZCA9IGFicGVycDsgLy8gbmV3IGRpcmVjdGlvbiBpcyBub3JtYWwgdG8gQUIgdG93YXJkcyBPcmlnaW5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2ltcGxleFsxXSA9IHNpbXBsZXhbMl07IC8vIHN3YXAgZWxlbWVudCBpbiB0aGUgbWlkZGxlIChwb2ludCBCKVxuICAgICAgICAgICAgLS1pbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcmVhdGVDb252ZXhIdWxsKHBvaW50cylcbiAgICB7XG4gICAgICAgIC8vIEZpbmQgdGhlIHJpZ2h0IG1vc3QgcG9pbnQgb24gdGhlIGh1bGxcbiAgICAgICAgdmFyIGkwID0gMDtcbiAgICAgICAgdmFyIHgwID0gcG9pbnRzWzBdLng7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHBvaW50c1tpXS54O1xuICAgICAgICAgICAgaWYgKHggPiB4MCB8fCAoeCA9PSB4MCAmJiBwb2ludHNbaV0ueSA8IHBvaW50c1tpMF0ueSkpIHtcbiAgICAgICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG4gPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICB2YXIgaHVsbCA9IFtdO1xuICAgICAgICB2YXIgbSA9IDA7XG4gICAgICAgIHZhciBpaCA9IGkwO1xuXG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBodWxsW21dID0gaWg7XG5cbiAgICAgICAgICAgIHZhciBpZSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpZSA9PSBpaCkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciByID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tpZV0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2pdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciBjID0gVmVjdG9yLmNyb3NzKHIsIHYpO1xuICAgICAgICAgICAgICAgIGlmIChjIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ29sbGluZWFyaXR5IGNoZWNrXG4gICAgICAgICAgICAgICAgaWYgKGMgPT0gMCAmJiB2Lmxlbmd0aFNxKCkgPiByLmxlbmd0aFNxKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbSsrO1xuICAgICAgICAgICAgaWggPSBpZTtcblxuICAgICAgICAgICAgaWYgKGllID09IGkwKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb3B5IHZlcnRpY2VzXG4gICAgICAgIHZhciBuZXdQb2ludHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHBvaW50c1todWxsW2ldXTtcbiAgICAgICAgICAgIG5ld1BvaW50cy5wdXNoKG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1BvaW50cztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtaWRwb2ludChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoKGEueCArIGIueCkgLyAyLCAoYS55ICsgYi55KSAvIDIpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKGluZGV4LCB2ZXJ0ZXgueCwgdmVydGV4LnkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczEnKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGRlYnVnVmVydGljZXModmVydGljZXMxKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczInKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGRlYnVnVmVydGljZXModmVydGljZXMyKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xufVxuXG5mdW5jdGlvbiBzdHIodmVydGV4LCBpc0ZpeGVkID0gZmFsc2UpIHtcbiAgICBpZiAoaXNGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGAoJHt2ZXJ0ZXgueH0sJHt2ZXJ0ZXgueX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGAoJHt2ZXJ0ZXgueC50b0ZpeGVkKDIpfSwke3ZlcnRleC55LnRvRml4ZWQoMil9KWA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL0dKSy5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBHSksgZnJvbSAnLi4vZ2prL0dKSyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlclxue1xuICAgIHN0YXRpYyBkcmF3TWlua293c2tpU3VtKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYXdNaW5rb3dza2lTdW0oJywgdmVydGljZXMxLmxlbmd0aCAqIHZlcnRpY2VzMi5sZW5ndGgsICcpJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2ZXJ0aWNlczIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCB2MSA9IHZlcnRpY2VzMVtpXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCB2MiA9IHZlcnRpY2VzMltqXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCBkaWZmID0gVmVjdG9yLnN1YnRyYWN0KHYxLCB2Mik7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGRpZmYpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGosIGB2ZWNbJHtkaWZmLnh9LCAke2RpZmYueX1dYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsUGF0aCA9IEdKSy5jcmVhdGVDb252ZXhIdWxsKHBhdGgpO1xuICAgICAgICBQYWludGVyLmRyYXdQb2x5Z29uKGNvbnZleEh1bGxQYXRoLCAxLCAweERERERERCwgMSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvbHlnb24odmVydGljZXMsIGxpbmVXaWR0aCA9IDEsIGNvbG9yID0gMHg2MDdEOEIsIGFscGhhID0gMC41KVxuICAgIHtcbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSB3aW5kb3cuZztcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKGxpbmVXaWR0aCwgY29sb3IsIGFscGhhKTtcblxuICAgICAgICBjb25zdCB2ZWMwID0gdmVydGljZXNbMF0uY2xvbmUoKTtcbiAgICAgICAgdmVjMC5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG5cbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHZlYzAueCwgdmVjMC55KTtcblxuICAgICAgICAvLyB0aGlzLmRyYXdUZXh0KHdpbmRvdy5zdGFnZSwgJygnICsgdmVjMC54LnRvRml4ZWQoMCkgKyAnLCcgKyB2ZWMwLnkudG9GaXhlZCgwKSArICcpJywgdmVjMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlYyA9IHZlcnRpY2VzW2ldLmNsb25lKCk7XG4gICAgICAgICAgICB2ZWMubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYy54LCB2ZWMueSk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lVG8odmVjMC54LCB2ZWMwLnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdUZXh0KHN0YWdlLCBzdHJpbmcsIHBvaW50LCBjb2xvciA9ICcjZmYzMzAwJylcbiAgICB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXcgUElYSS5UZXh0KHN0cmluZywge1xuICAgICAgICAgICAgLy8gZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIC8vIGZvbnRTaXplOiA0LFxuICAgICAgICAgICAgLy8gZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgZmlsbDogY29sb3IsXG4gICAgICAgICAgICAvLyBzdHJva2U6ICcjNGExODUwJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGV4dC54ID0gcG9pbnQueDtcbiAgICAgICAgdGV4dC55ID0gcG9pbnQueTtcblxuICAgICAgICBzdGFnZS5hZGRDaGlsZCh0ZXh0KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnQoZ3JhcGhpY3MsIHBvaW50LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBjb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHBvaW50LngsIHBvaW50LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5Qm91bmRzKGdyYXBoaWNzLCBib3VuZHMsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKVxuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocmVjdC5sdC54LCByZWN0Lmx0LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5ydC54LCByZWN0LnJ0LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5yYi54LCByZWN0LnJiLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5sYi54LCByZWN0LmxiLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5sdC54LCByZWN0Lmx0LnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHNCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0Lmx0LngsIHJlY3QubHQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LnJ0LngsIHJlY3QucnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LnJiLngsIHJlY3QucmIueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LmxiLngsIHJlY3QubGIueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzKGdyYXBoaWNzLCBwb2ludHMsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHAxID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgdmFyIHAyID0gcG9pbnRzW2kgKyAxIDwgcG9pbnRzLmxlbmd0aCA/IGkgKyAxIDogMF07XG5cbiAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICAgICBncmFwaGljcy5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3TGluZShncmFwaGljcywgcDAsIHAxLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMC54LCBwMC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAxLngsIHAxLnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdBcnJvdyhncmFwaGljcywgbW92ZVBvaW50LCB0b1BvaW50LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcsIHNjYWxlID0gNSlcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcih0b1BvaW50LnggLSBtb3ZlUG9pbnQueCwgdG9Qb2ludC55IC0gbW92ZVBvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgdmVjdG9yLmludmVydCgpLm11bHRpcGx5U2NhbGFyKDE1KTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7Ki9cblxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKG1vdmVQb2ludC54IC0gdG9Qb2ludC54LCBtb3ZlUG9pbnQueSAtIHRvUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHZlY3Rvci5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcihzY2FsZSAqIDMpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3RGlyZWN0aW9uKGdyYXBoaWNzLCBtZSwgdGFyZ2V0LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcsIHNjYWxlID0gNSlcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuXG4gICAgICAgIHZhciB0byA9IG1lLnRvKHRhcmdldCk7XG4gICAgICAgIHZhciBsZWZ0ID0gdG8uY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB0by5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICB0by5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcihzY2FsZSAqIDMpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtZS54ICsgdG8ueCwgbWUueSArIHRvLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obWUueCwgbWUueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtZS54ICsgbGVmdC54LCBtZS55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIHJpZ2h0LngsIG1lLnkgKyByaWdodC55KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFpbnRlci5qcyIsImltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9zcmMvc2F0L1BvaW50JztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi4vLi4vc3JjL3NhdC9DaXJjbGUnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc3JjL3NhdC9Qb2x5Z29uJztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL1ZlY3Rvcic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi8uLi9zcmMvdXRpbHMvUGFpbnRlcic7XG5pbXBvcnQgTW91c2UgZnJvbSAnLi4vLi4vc3JjL3V0aWxzL01vdXNlJztcbmltcG9ydCBLZXlDb2RlIGZyb20gJy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5cbmNvbnN0IGdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICwgZGVidWdHcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAsIHNoYXBlcyA9IFtdXG4gICAgLCBMSU5FX0NPTE9SID0gMHg4NEQyRjZcbiAgICAsIEFSUk9XX0NPTE9SID0gMHhFNTczNzM7XG5cbmxldCBwb2x5Z29uUG9pbnRzID0gW1xuICAgIFtuZXcgUG9pbnQoMzUwLCAzNTApLCBuZXcgUG9pbnQoMzUwLCA1MDApLCBuZXcgUG9pbnQoNTAwLCA1MDApXSxcbiAgICBbbmV3IFBvaW50KDUwMCwgMjAwKSwgbmV3IFBvaW50KDQ4MCwgMjUwKSwgbmV3IFBvaW50KDYwMCwgMjUwKSwgbmV3IFBvaW50KDYyMCwgMjAwKV0sXG4gICAgW25ldyBQb2ludCgyNTgsIDEyMCksIG5ldyBQb2ludCgyOTUsIDIzMCksIG5ldyBQb2ludCgyMDAsIDMwMCksIG5ldyBQb2ludCgxMDUsIDIzMCksIG5ldyBQb2ludCgxNDIsIDEyMCldXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgUElYSS5Db250YWluZXJcbntcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgd2luZG93WydnJ10gPSBkZWJ1Z0dyYXBoaWNzO1xuXG4gICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci52aWV3O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgaW5pdGlhbGl6ZSgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZ3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGRlYnVnR3JhcGhpY3MpO1xuXG4gICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcbiAgICAgICAgdGhpcy5sYXN0ZHJhZyA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vdGhpcy5jcmVhdGVQb2x5Z29uKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlUG9seWdvbk1hbnVhbCgpO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcblxuICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBhZGRFdmVudCgpXG4gICAge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XG4gICAgICAgIHRoaXMub24oJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZSgpIHt9XG5cblxuICAgIHJlc2l6ZSgpXG4gICAge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG5cbiAgICBnZXRQb2x5Z29uUG9pbnRzKHR4LCB0eSwgYW5nbGUsIHJhZGl1cyA9IDEwMClcbiAgICB7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuXG4gICAgICAgIC8vIG1ha2luZyBwb2ludHMsIHBhdGhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmdsZTsgaSArKykge1xuICAgICAgICAgICAgbGV0IHggPSB0eCArIChyYWRpdXMgKiAtTWF0aC5zaW4odGhpcy50b1JhZGlhbigzNjAgLyBhbmdsZSAqIGkpKSk7XG4gICAgICAgICAgICBsZXQgeSA9IHR5ICsgKHJhZGl1cyAqICBNYXRoLmNvcyh0aGlzLnRvUmFkaWFuKDM2MCAvIGFuZ2xlICogaSkpKTtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG5ldyBQSVhJLlBvaW50KHgsIHkpO1xuICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cblxuICAgIHRvUmFkaWFuKGRlZ3JlZSlcbiAgICB7XG4gICAgICAgIHJldHVybiBkZWdyZWUgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUG9seWdvbih1c2VSYW5kb21Sb3RhdGUgPSBmYWxzZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2x5Z29uUG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9seWdvbiA9IG5ldyBQb2x5Z29uKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHBvaW50cyA9IHBvbHlnb25Qb2ludHNbaV07XG5cbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHVzZVJhbmRvbVJvdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlU2hhcGUocG9seWdvbiwgTWF0aC5yYW5kb20oKSAqIDQ1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hhcGVzLnB1c2gocG9seWdvbik7XG5cbiAgICAgICAgICAgIHBvbHlnb24uY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNyZWF0ZVBvbHlnb25NYW51YWwoKVxuICAgIHtcbiAgICAgICAgbGV0IHJhZGl1cyA9IDEwMCxcbiAgICAgICAgICAgIGRpYW1ldGVyID0gMjAwLFxuICAgICAgICAgICAgc3BhY2UgPSAyMCxcbiAgICAgICAgICAgIGEgPSByYWRpdXMgKyBzcGFjZSxcbiAgICAgICAgICAgIGIgPSByYWRpdXMgKyBkaWFtZXRlciArIHNwYWNlICogMixcbiAgICAgICAgICAgIGMgPSByYWRpdXMgKyBkaWFtZXRlciAqIDIgKyBzcGFjZSAqIDM7XG5cbiAgICAgICAgcG9seWdvblBvaW50cyA9IFtdO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGEsIDMpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBhLCA0KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYywgYSwgNSkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGIsIDYpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBiLCA3KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYywgYiwgOCkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGEsIGMsIDkpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhiLCBjLCAxMCkpO1xuICAgICAgICB0aGlzLmFkZENpcmNsZShjLCBjLCByYWRpdXMpO1xuICAgICAgICAvL3RoaXMuYWRkQ2lyY2xlKGMsIGMsIHJhZGl1cyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVQb2x5Z29uKHRydWUpO1xuICAgIH1cblxuXG4gICAgYWRkUG9seWdvbihpbmRleCwgdXNlUmFuZG9tUm90YXRlID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIGxldCBwb2x5Z29uID0gbmV3IFBvbHlnb24odGhpcy5jb250ZXh0KTtcblxuICAgICAgICBsZXQgcG9pbnRzID0gcG9seWdvblBvaW50c1tpbmRleF07XG5cbiAgICAgICAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgICBwb2x5Z29uLmFkZFBvaW50KHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXNlUmFuZG9tUm90YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNoYXBlKHBvbHlnb24sIChNYXRoLnJhbmRvbSgpICogNDUpICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2x5Z29uLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICBzaGFwZXMucHVzaChwb2x5Z29uKTtcbiAgICB9XG5cblxuICAgIGFkZENpcmNsZSh4LCB5LCByYWRpdXMpXG4gICAge1xuICAgICAgICBsZXQgY2lyY2xlID0gbmV3IENpcmNsZSh0aGlzLmNvbnRleHQsIHgsIHksIHJhZGl1cyk7XG4gICAgICAgIGNpcmNsZS5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgc2hhcGVzLnB1c2goY2lyY2xlKTtcbiAgICAgICAgdGhpcy5jaXJjbGUgPSBjaXJjbGU7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVSZW5kZXIoKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgcG9seWdvbi5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBkZXRlY3RDb2xsaXNpb25zKClcbiAgICB7XG4gICAgICAgIGxldCBkcmFnU2hhcGUgPSB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkO1xuXG4gICAgICAgIGlmICghZHJhZ1NoYXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcblxuICAgICAgICAgICAgaWYgKHNoYXBlICE9PSBkcmFnU2hhcGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbXR2ID0gZHJhZ1NoYXBlLmNvbGxpZGVzV2l0aChzaGFwZSk7XG5cbiAgICAgICAgICAgICAgICAvLyDstqnrj4wg7YyQ7KCVXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uRGV0ZWN0ZWQobXR2KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVTaGFwZUJ5TVRWKG10diwgZHJhZ1NoYXBlLCBzaGFwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIG10duuhnCDstqnrj4wg7YyQ7KCVXG4gICAgICogQHBhcmFtIG10dlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbGxpc2lvbkRldGVjdGVkKG10dilcbiAgICB7XG4gICAgICAgIC8vIOy2qeuPjCDtjJDsoJVcbiAgICAgICAgaWYgKG10di5heGlzICE9IHVuZGVmaW5lZCB8fCBtdHYub3ZlcmxhcCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgY2hlY2tNVFZBeGlzRGlyZWN0aW9uKG10diwgY29sbGlkZXIsIGNvbGxpZGVlKVxuICAgIHtcbiAgICAgICAgaWYgKG10di5heGlzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IGNvbGxpZGVyQ2VudGVyID0gVmVjdG9yLmZyb21PYmplY3QoY29sbGlkZXIuZ2V0Q2VudGVyKCkpLFxuICAgICAgICAgICAgY29sbGlkZWVDZW50ZXIgPSBWZWN0b3IuZnJvbU9iamVjdChjb2xsaWRlZS5nZXRDZW50ZXIoKSksXG4gICAgICAgICAgICBjZW50ZXJWZWN0b3IgPSBjb2xsaWRlZUNlbnRlci5zdWJ0cmFjdChjb2xsaWRlckNlbnRlciksXG4gICAgICAgICAgICBjZW50ZXJVbml0VmVjdG9yID0gVmVjdG9yLmZyb21PYmplY3QoY2VudGVyVmVjdG9yKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBpZiAoY2VudGVyVW5pdFZlY3Rvci5kb3RQcm9kdWN0KG10di5heGlzKSA+IDApIHtcbiAgICAgICAgICAgIG10di5heGlzLnggPSAtbXR2LmF4aXMueDtcbiAgICAgICAgICAgIG10di5heGlzLnkgPSAtbXR2LmF4aXMueTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG10dlxuICAgICAqIEBwYXJhbSBjb2xsaWRlciDstqnrj4ztlZwg6rCd7LK0XG4gICAgICogQHBhcmFtIGNvbGxpZGVlIOy2qeuPjOydhCDri7ntlZwg6rCd7LK0XG4gICAgICovXG4gICAgbW92ZVNoYXBlQnlNVFYobXR2LCBjb2xsaWRlciwgY29sbGlkZWUpXG4gICAge1xuICAgICAgICBpZiAobXR2LmF4aXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbXR2LmF4aXMgPSBuZXcgVmVjdG9yKDEsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGR4ID0gbXR2LmF4aXMueCAqIG10di5vdmVybGFwLFxuICAgICAgICAgICAgZHkgPSBtdHYuYXhpcy55ICogbXR2Lm92ZXJsYXA7XG5cbiAgICAgICAgbGV0IGRyYWdWZWN0b3IgPSB0aGlzLmRyYWdWZWN0b3IsXG4gICAgICAgICAgICBjZW50ZXJDb2xsaWRlciA9IGNvbGxpZGVyLmdldENlbnRlcigpLFxuICAgICAgICAgICAgY2VudGVyQ29sbGlkZWUgPSBjb2xsaWRlZS5nZXRDZW50ZXIoKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IoY2VudGVyQ29sbGlkZWUueCAtIGNlbnRlckNvbGxpZGVyLngsIGNlbnRlckNvbGxpZGVlLnkgLSBjZW50ZXJDb2xsaWRlci55KSxcbiAgICAgICAgICAgIGRpcmVjdGlvbk5vcm0gPSBkaXJlY3Rpb24ubm9ybSgpLFxuICAgICAgICAgICAgb3ZlcmxhcFZlY3RvciA9IG5ldyBWZWN0b3IoZHgsIGR5KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog64K07KCB7J20IC0x7J2066m0IOuwmOuMgCDrsKntlqXsnYQg67O064qUIOqyg1xuICAgICAgICAgKiDrgrTsoIHsnbQgMOydtOuptCDsiJjsp4FcbiAgICAgICAgICog64K07KCB7J20IDHsnbgg6rK97JqwIOqwmeydgCDrsKntlqXsnYQg6rCA66as7YKk64qUIOqyg1xuICAgICAgICAgKiDrgrTsoIHsnbQgPiAwLjgg64uk66m0IOqwmeydgCDrsKntlqXsnYQg67O06rOgIOyeiOuKlCDsg4Htg5xcbiAgICAgICAgICovXG4gICAgICAgIGxldCBkb3QgPSBkcmFnVmVjdG9yLmRvdFByb2R1Y3Qob3ZlcmxhcFZlY3Rvcik7XG5cbiAgICAgICAgaWYgKGRvdCA8IDApIHtcbiAgICAgICAgICAgIGR4ID0gLWR4O1xuICAgICAgICAgICAgZHkgPSAtZHk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYyA9IGNvbGxpZGVlLmdldENlbnRlcigpLFxuICAgICAgICAgICAgdG8gPSBuZXcgVmVjdG9yKGR4LCBkeSksXG4gICAgICAgICAgICB0b05vcm1hbGl6ZSA9IHRvLmNsb25lKCkubm9ybSgpLFxuICAgICAgICAgICAgZG90VG8gPSBkaXJlY3Rpb25Ob3JtLmRvdFByb2R1Y3QodG9Ob3JtYWxpemUpLFxuICAgICAgICAgICAgY2VudGVyID0gbmV3IFZlY3RvcihjLngsIGMueSk7XG4gICAgICAgIHRvID0gY2VudGVyLmNsb25lKCkuc3VidHJhY3QodG8pO1xuXG4gICAgICAgIC8vIOuRkCDqsJ3ssrTsnZgg67Cp7ZalIOuyoe2EsOyZgCDrsIDslrTrgrTripQg67Cx7YSwKHRvKeydmCDrgrTsoIHsnbQgMOuztOuLpCDtgbQg6rK97JqwLCDspokg67CA7Ja0IOuCtOuKlCDrsKntlqXsnbQg67CA7Ja064K064qUIOuwqe2WpeydvCDrlYzrp4wg7KCB7JqpXG4gICAgICAgIGlmIChkb3RUbyA+PSAwKSB7XG4gICAgICAgICAgICBQYWludGVyLmRyYXdBcnJvdyh3aW5kb3cuZywgY2VudGVyLCB0bywgZmFsc2UsIDEsIEFSUk9XX0NPTE9SKTtcbiAgICAgICAgICAgIC8vUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIHRoaXMuY2lyY2xlLmdldENlbnRlcigpLCBmYWxzZSwgMTAsIDB4ZmYzMzAwLCAwLjIpO1xuICAgICAgICAgICAgY29sbGlkZWUubW92ZShkeCwgZHkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByb3RhdGVTaGFwZShzaGFwZSwgZGVncmVlcylcbiAgICB7XG4gICAgICAgIC8vZGVncmVlcyA9IDkwO1xuICAgICAgICBsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXG4gICAgICAgIGlmIChwb2ludHMpIHtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSBzaGFwZS5nZXRDZW50ZXIoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgIHBvaW50c1tpXSA9IHRoaXMucm90YXRpb25Qb2ludChjZW50ZXIsIHBvaW50LCBkZWdyZWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ZqM7KCE7ZWY64qUIOyijO2RnCDqtaztlZjquLBcbiAgICAgKiBAcGFyYW0gcGl2b3Qg7IKs6rCB7ZiV7J2YIOykkeyLrOygkFxuICAgICAqIEBwYXJhbSBwb2ludCDqs4TsgrDtlZjqs6Ag7Iu27J2AIO2PrOyduO2KuFxuICAgICAqIEBwYXJhbSBkZWdyZWVzIO2ajOyghOqwgSBkZWdyZWVzXG4gICAgICogQHJldHVybnMge3t4OiAobnVtYmVyfCopLCB5OiAobnVtYmVyfCopfX1cbiAgICAgKi9cbiAgICByb3RhdGlvblBvaW50KHBpdm90LCBwb2ludCwgZGVncmVlcylcbiAgICB7XG4gICAgICAgIGxldCBkaWZmWCA9IHBvaW50LnggLSBwaXZvdC54O1xuICAgICAgICBsZXQgZGlmZlkgPSBwb2ludC55IC0gcGl2b3QueTtcbiAgICAgICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkpO1xuICAgICAgICBsZXQgY2EgPSBNYXRoLmF0YW4yKGRpZmZZLCBkaWZmWCkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGxldCBuYSA9ICgoY2EgKyBkZWdyZWVzKSAlIDM2MCkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGxldCB4ID0gKHBpdm90LnggKyBkaXN0ICogTWF0aC5jb3MobmEpICsgMC41KSB8IDA7XG4gICAgICAgIGxldCB5ID0gKHBpdm90LnkgKyBkaXN0ICogTWF0aC5zaW4obmEpICsgMC41KSB8IDA7XG4gICAgICAgIHJldHVybiB7eDogeCwgeTogeX07XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlRG93bigpXG4gICAge1xuICAgICAgICBkZWJ1Z0dyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQb2ludCA9IFZlY3Rvci5mcm9tT2JqZWN0KE1vdXNlLmdsb2JhbCk7XG5cbiAgICAgICAgc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hhcGUuaXNQb2ludEluUGF0aChjdXJyZW50UG9pbnQueCwgY3VycmVudFBvaW50LnkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duUG9pbnQueSA9IGN1cnJlbnRQb2ludC55O1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueSA9IGN1cnJlbnRQb2ludC55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG9uTW91c2VNb3ZlKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudFBvaW50LCBkcmFnVmVjdG9yO1xuXG4gICAgICAgIGlmICh0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9pbnQgPSBWZWN0b3IuZnJvbU9iamVjdChNb3VzZS5nbG9iYWwpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdWZWN0b3IgPSBkcmFnVmVjdG9yID0gY3VycmVudFBvaW50LmNsb25lKCkuc3VidHJhY3QodGhpcy5sYXN0ZHJhZyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQubW92ZShkcmFnVmVjdG9yLngsIGRyYWdWZWN0b3IueSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdGRyYWcueCA9IGN1cnJlbnRQb2ludC54O1xuICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy55ID0gY3VycmVudFBvaW50Lnk7XG5cbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9ucygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25Nb3VzZVVwKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvL1xuICAgIC8vIFRlc3Qg7ZWo7IiYXG4gICAgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICBvbktleVVwKGUpXG4gICAge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQ0FQRTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmcuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLk5VTUJFUl8xOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTlVNQkVSXzI6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3Qvc2F0L1Rlc3QuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFxue1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1BvaW50LmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xuaW1wb3J0IFByb2plY3Rpb24gZnJvbSAnLi9Qcm9qZWN0aW9uJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIFNoYXBlXG57XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgeCwgeSwgcmFkaXVzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSAnQ2lyY2xlJztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDspJHsoJAg7KKM7ZGcIOuwmO2ZmFxuICAgICAqIEByZXR1cm5zIHtQSVhJLlBvaW50fCp8c3ZnLlBvaW50fVxuICAgICAqL1xuICAgIGdldENlbnRlcigpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFBJWEkuUG9pbnQodGhpcy54LHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICBpZiAoc2hhcGUucmFkaXVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUoc2hhcGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLypcbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICB2YXIgYXhlcyA9IHNoYXBlLmdldEF4ZXMoKSwgZGlzdGFuY2U7XG5cbiAgICAgICAgaWYgKGF4ZXMgPT09IHVuZGVmaW5lZCkgeyAvL+ybkFxuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coc2hhcGUueCAtIHRoaXMueCwgMikgK1xuICAgICAgICAgICAgICAgIE1hdGgucG93KHNoYXBlLnkgLSB0aGlzLnksIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZSA8IE1hdGguYWJzKHRoaXMucmFkaXVzICsgc2hhcGUucmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUoc2hhcGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgICovXG5cblxuICAgIGdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpXG4gICAge1xuICAgICAgICBsZXQgbWluID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGNpcmNsZVZlY3RvciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNpcmNsZSksXG4gICAgICAgICAgICBsZW5ndGgsIHRlc3RQb2ludFZlY3RvciwgY2xvc2VzdFBvaW50O1xuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IHBvbHlnb24ucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXN0UG9pbnRWZWN0b3IgPSBWZWN0b3IuZnJvbU9iamVjdChwb2x5Z29uLnBvaW50c1tpXSk7XG4gICAgICAgICAgICB0ZXN0UG9pbnRWZWN0b3IuaW5kZXggPSBpO1xuICAgICAgICAgICAgbGVuZ3RoID0gdGVzdFBvaW50VmVjdG9yLmNsb25lKCkuZGlzdGFuY2UoY2lyY2xlKTtcblxuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGxlbmd0aDtcbiAgICAgICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSB0ZXN0UG9pbnRWZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xvc2VzdFBvaW50LmNsb25lKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6TqsIHtmJXqs7wg7JuQ7ZiVIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gcG9seWdvblxuICAgICAqIEBwYXJhbSBjaXJjbGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICAvKnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUocG9seWdvbiwgY2lyY2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBheGVzID0gcG9seWdvbi5nZXRBeGVzKCksXG4gICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSB0aGlzLmdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpO1xuXG4gICAgICAgIGF4ZXMucHVzaCh0aGlzLmdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpKTtcblxuICAgICAgICByZXR1cm4gIXBvbHlnb24uc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBjaXJjbGUpO1xuICAgIH0qL1xuXG5cbiAgICBnZXRDaXJjbGVBeGlzKGNpcmNsZSwgY2xvc2VzdFBvaW50KVxuICAgIHtcbiAgICAgICAgdmFyIHYxID0gbmV3IFZlY3RvcihjaXJjbGUueCwgY2lyY2xlLnkpLFxuICAgICAgICAgICAgdjIgPSBuZXcgVmVjdG9yKGNsb3Nlc3RQb2ludC54LCBjbG9zZXN0UG9pbnQueSksXG4gICAgICAgICAgICBzdXJmYWNlVmVjdG9yID0gdjEuc3VidHJhY3QodjIpO1xuXG4gICAgICAgIFBhaW50ZXIuZHJhd1BvaW50KHdpbmRvdy5nLCBjbG9zZXN0UG9pbnQsIGZhbHNlLCA1LCAweGZmMzMwMCwgMC4zKTtcbiAgICAgICAgLy9QYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLCBWZWN0b3IuZnJvbU9iamVjdChjaXJjbGUpLCBWZWN0b3IuZnJvbU9iamVjdChjbG9zZXN0UG9pbnQpLCBmYWxzZSwgMSwgMHhmZjMzMDAsIDAuMyk7XG5cbiAgICAgICAgcmV0dXJuIHN1cmZhY2VWZWN0b3Iubm9ybWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICBwcm9qZWN0KGF4aXMpXG4gICAge1xuICAgICAgICBsZXQgc2NhbGFycyA9IFtdLFxuICAgICAgICAgICAgcG9pbnQgPSBuZXcgUElYSS5Qb2ludCh0aGlzLngsIHRoaXMueSksXG4gICAgICAgICAgICBwb2ludFZlY3RvciA9IG5ldyBWZWN0b3IocG9pbnQueCwgcG9pbnQueSksXG4gICAgICAgICAgICBkb3RQcm9kdWN0ID0gcG9pbnRWZWN0b3IuZG90UHJvZHVjdChheGlzKTtcblxuICAgICAgICBzY2FsYXJzLnB1c2goZG90UHJvZHVjdCk7XG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0ICsgdGhpcy5yYWRpdXMpO1xuICAgICAgICBzY2FsYXJzLnB1c2goZG90UHJvZHVjdCAtIHRoaXMucmFkaXVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3Rpb24oXG4gICAgICAgICAgICBNYXRoLm1pbi5hcHBseShNYXRoLCBzY2FsYXJzKSxcbiAgICAgICAgICAgIE1hdGgubWF4LmFwcGx5KE1hdGgsIHNjYWxhcnMpXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBnZXRBeGVzKClcbiAgICB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQYXRoKGdyYXBoaWNzLCBsaW5lQ29sb3IgPSAweEZGRkZGRilcbiAgICB7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBsaW5lQ29sb3IpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8odGhpcy54ICsgdGhpcy5yYWRpdXMsIHRoaXMueSk7XG4gICAgICAgIGdyYXBoaWNzLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgfVxuXG5cbiAgICBtb3ZlKGR4LCBkeSlcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBkeDtcbiAgICAgICAgdGhpcy55ICs9IGR5O1xuICAgIH1cblxuXG4gICAgaXNQb2ludEluUGF0aCh4LCB5KVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgaXNQb2ludEluUGF0aCA9IHRoaXMuY29udGV4dC5pc1BvaW50SW5QYXRoKHgsIHkpO1xuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gaXNQb2ludEluUGF0aDtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvQ2lyY2xlLmpzIiwiaW1wb3J0IE1UViBmcm9tICcuL01UVic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgbWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKGF4ZXMsIHNoYXBlKSB7XG4gICAgICAgIHZhciBtaW5pbXVtT3ZlcmxhcCA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBvdmVybGFwLCBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCxcbiAgICAgICAgICAgIGF4aXMsIHByb2plY3Rpb24xLCBwcm9qZWN0aW9uMjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF4ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGF4aXMgPSBheGVzW2ldO1xuICAgICAgICAgICAgcHJvamVjdGlvbjEgPSBzaGFwZS5wcm9qZWN0KGF4aXMpO1xuICAgICAgICAgICAgcHJvamVjdGlvbjIgPSB0aGlzLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICBvdmVybGFwID0gcHJvamVjdGlvbjEuZ2V0T3ZlcmxhcChwcm9qZWN0aW9uMik7XG5cbiAgICAgICAgICAgIC8qUGFpbnRlci5kcmF3TGluZSh3aW5kb3cuZyxcbiAgICAgICAgICAgICAgICB7eDpheGlzLnggKiBwcm9qZWN0aW9uMS5taW4sIHk6YXhpcy55ICogcHJvamVjdGlvbjEubWlufSxcbiAgICAgICAgICAgICAgICB7eDpheGlzLnggKiBwcm9qZWN0aW9uMi5tYXgsIHk6YXhpcy55ICogcHJvamVjdGlvbjIubWF4fSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTsqL1xuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcCA9PT0gMCkgeyAvL+y2qeuPjCDsl4bsirQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBNVFYoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCA8IG1pbmltdW1PdmVybGFwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1PdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgYXhpc1dpdGhTbWFsbGVzdE92ZXJsYXAgPSBheGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTVRWKG1pbmltdW1PdmVybGFwLCBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrkZAg64uk6rCB7ZiVIOyCrOydtOyXkOyEnCDstqnrj4xcbiAgICAgKiBAcGFyYW0gcDFcbiAgICAgKiBAcGFyYW0gcDJcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBwb2x5Z29uQ29sbGlkZXNXaXRoUG9seWdvbihwMSwgcDIpIHtcbiAgICAgICAgdmFyIG10djEgPSBwMS5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IocDEuZ2V0QXhlcygpLCBwMiksXG4gICAgICAgICAgICBtdHYyID0gcDEubWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKHAyLmdldEF4ZXMoKSwgcDIpO1xuXG4gICAgICAgIGlmIChtdHYxLm92ZXJsYXAgPT09IDAgJiYgbXR2Mi5vdmVybGFwID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1UVigwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtdHYxLm92ZXJsYXAgPCBtdHYyLm92ZXJsYXAgPyBtdHYxIDogbXR2MjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog65GQIOybkO2YleyXkCDrjIDtlZwg7Lap64+MXG4gICAgICogQHBhcmFtIGMxXG4gICAgICogQHBhcmFtIGMyXG4gICAgICovXG4gICAgY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlKGMxLCBjMikge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coYzIueCAtIGMxLngsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KGMyLnkgLSBjMS55LCAyKSksXG4gICAgICAgICAgICBvdmVybGFwID0gTWF0aC5hYnMoYzEucmFkaXVzICsgYzIucmFkaXVzKSAtIGRpc3RhbmNlO1xuXG4gICAgICAgIHJldHVybiBvdmVybGFwIDwgMCA/XG4gICAgICAgICAgICBuZXcgTVRWKDApIDpcbiAgICAgICAgICAgIG5ldyBNVFYob3ZlcmxhcCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDri6TqsIHtmJXqs7wg7JuQ7ZiVIOy2qeuPjCDqsoDsgqxcbiAgICAgKiBAcGFyYW0gcG9seWdvblxuICAgICAqIEBwYXJhbSBjaXJjbGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSkge1xuICAgICAgICB2YXIgYXhlcyA9IHBvbHlnb24uZ2V0QXhlcygpLFxuICAgICAgICAgICAgY2xvc2VzdFBvaW50ID0gY2lyY2xlLmdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZShwb2x5Z29uLCBjaXJjbGUpO1xuXG4gICAgICAgIC8vIFBhaW50ZXIuZHJhd1BvaW50KHdpbmRvdy5nLCBjbG9zZXN0UG9pbnQsIGZhbHNlLCA1LCAweEU1NzM3Myk7XG5cbiAgICAgICAgYXhlcy5wdXNoKGNpcmNsZS5nZXRDaXJjbGVBeGlzKGNpcmNsZSwgY2xvc2VzdFBvaW50KSk7XG5cbiAgICAgICAgcmV0dXJuIHBvbHlnb24ubWluaW11bVRyYW5zbGF0aW9uVmVjdG9yKGF4ZXMsIGNpcmNsZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstpXsl5Ag7Yis7JiB7ZWY7JesIOu2hOumrOqwgCDsnojsnLzrqbQgdHJ1ZSDrsJjtmZgo7Lap64+M65CY7KeAIOyViuyVmOuLpOuptCB0cnVlIOuwmO2ZmClcbiAgICAgKiBAcGFyYW0gb3RoZXJTaGFwZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbGxpZGVzV2l0aChzaGFwZSkge1xuICAgICAgICB2YXIgYXhlcyA9IHRoaXMuZ2V0QXhlcygpLmNvbmNhdChzaGFwZS5nZXRBeGVzKCkpO1xuICAgICAgICByZXR1cm4gIXRoaXMuc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBzaGFwZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrtoTrpqzstpXsnbQg7J6I64qU7KeAIOyXrOu2gCAo67aE66as7LaV7J20IOyeiOuLpOuKlCDsnbTslbzquLDripQg7Lap64+M7ZWY7KeAIOyViuyVmOuLpOuKlCDsnbTslbzquLAg7J6F64uI64ukLilcbiAgICAgKiBAcGFyYW0gYXhlc1xuICAgICAqIEBwYXJhbSBzaGFwZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHNlcGFyYXRpb25PbkF4ZXMoYXhlcywgc2hhcGUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbaV07XG4gICAgICAgICAgICB2YXIgcHJvamVjdGlvbjEgPSBzaGFwZS5wcm9qZWN0KGF4aXMpO1xuICAgICAgICAgICAgdmFyIHByb2plY3Rpb24yID0gdGhpcy5wcm9qZWN0KGF4aXMpO1xuXG4gICAgICAgICAgICBpZiAoIXByb2plY3Rpb24xLm92ZXJsYXBzKHByb2plY3Rpb24yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBkb24ndCBoYXZlIHRvIHRlc3QgcmVtYWluaW5nIGF4ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvU2hhcGUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNVFZcbntcbiAgICAvKipcbiAgICAgKiDstZzshowg7J2064+ZIOuyoe2EsFxuICAgICAqIE1pbmltdW0gVHJhbnNsYXRpb24gVmVjdG9yIChNVFYpXG4gICAgICogQHBhcmFtIGF4aXNcbiAgICAgKiBAcGFyYW0gb3ZlcmxhcFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG92ZXJsYXAgPSB1bmRlZmluZWQsIGF4aXMgPSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xuICAgICAgICB0aGlzLm92ZXJsYXAgPSBvdmVybGFwO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L01UVi5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Rpb25cbntcbiAgICBjb25zdHJ1Y3RvcihtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHRoaXMubWluID0gbWluO1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICB9XG5cblxuICAgIGdldE92ZXJsYXAocHJvamVjdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBvdmVybGFwO1xuXG4gICAgICAgIGlmICghdGhpcy5vdmVybGFwcyhwcm9qZWN0aW9uKSlcbiAgICAgICAgICAgIHJldHVybiAwO1xuXG4gICAgICAgIGlmICh0aGlzLm1heCA+IHByb2plY3Rpb24ubWF4KSB7XG4gICAgICAgICAgICBvdmVybGFwID0gcHJvamVjdGlvbi5tYXggLSB0aGlzLm1pbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG92ZXJsYXAgPSB0aGlzLm1heCAtIHByb2plY3Rpb24ubWluO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdmVybGFwO1xuICAgIH1cblxuXG4gICAgb3ZlcmxhcHMocHJvamVjdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heCA+IHByb2plY3Rpb24ubWluICYmIHByb2plY3Rpb24ubWF4ID4gdGhpcy5taW47XG4gICAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJpbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tICcuL1Byb2plY3Rpb24nO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiBleHRlbmRzIFNoYXBlXG57XG4gICAgY29uc3RydWN0b3IoY29udGV4dClcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludHMubGVuZ3RoICsgJyBQb2x5Z29uJztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOykkeygkCDsooztkZxcbiAgICAgKiBAcmV0dXJucyB7UElYSS5Qb2ludHwqfHN2Zy5Qb2ludH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXIoKVxuICAgIHtcbiAgICAgICAgdmFyIHBvaW50U3VtID0gbmV3IFBJWEkuUG9pbnQoKTtcblxuICAgICAgICBmb3IgKHZhciBpPTAsIHBvaW50OyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHBvaW50ID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgICAgICBwb2ludFN1bS54ICs9IHBvaW50Lng7XG4gICAgICAgICAgICBwb2ludFN1bS55ICs9IHBvaW50Lnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlBvaW50KHBvaW50U3VtLnggLyB0aGlzLnBvaW50cy5sZW5ndGgsXG4gICAgICAgICAgICBwb2ludFN1bS55IC8gdGhpcy5wb2ludHMubGVuZ3RoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2qeuPjCDssrTtgawgKOu2hOumrOy2leydtCDsl4bsnLzrqbQg7Lap64+MKSwgIXNlcGFyYXRpb25PbkF4ZXNcbiAgICAgKiBAcGFyYW0gc2hhcGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICBpZiAoc2hhcGUucmFkaXVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aFBvbHlnb24odGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIHZhciBheGVzID0gc2hhcGUuZ2V0QXhlcygpO1xuXG4gICAgICAgIGlmIChheGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZS5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF4ZXMuY29uY2F0KHRoaXMuZ2V0QXhlcygpKTtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiDtiKzsmIFcbiAgICAgKiBAcGFyYW0gYXhpc1xuICAgICAqIEByZXR1cm5zIHtQcm9qZWN0aW9ufVxuICAgICAqL1xuICAgIHByb2plY3QoYXhpcylcbiAgICB7XG4gICAgICAgIHZhciBzY2FsYXJzID0gW10sXG4gICAgICAgICAgICB2ID0gbmV3IFZlY3RvcigpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goIGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgdi54ID0gcG9pbnQueDtcbiAgICAgICAgICAgIHYueSA9IHBvaW50Lnk7XG4gICAgICAgICAgICBzY2FsYXJzLnB1c2godi5kb3RQcm9kdWN0KGF4aXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0aW9uKE1hdGgubWluLmFwcGx5KE1hdGgsIHNjYWxhcnMpLFxuICAgICAgICAgICAgTWF0aC5tYXguYXBwbHkoTWF0aCwgc2NhbGFycykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7LaVIOq1rO2VmOq4sCAoZWRnZeyXkCDrhbjrp5DsnYQg7LaV7Jy866GcIO2VqeuLiOuLpClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0QXhlcygpXG4gICAge1xuICAgICAgICB2YXIgdjEgPSBuZXcgVmVjdG9yKCksXG4gICAgICAgICAgICB2MiA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgICAgIGF4ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgICB2MS54ID0gdGhpcy5wb2ludHNbaV0ueDtcbiAgICAgICAgICAgIHYxLnkgPSB0aGlzLnBvaW50c1tpXS55O1xuXG4gICAgICAgICAgICB2Mi54ID0gdGhpcy5wb2ludHNbaSsxXS54O1xuICAgICAgICAgICAgdjIueSA9IHRoaXMucG9pbnRzW2krMV0ueTtcblxuICAgICAgICAgICAgLy8g66qo7ISc66as7JeQ7IScIOyImOyngeyduCDrhbjrp5Ao67KV7ISgKSDrsqHthLDrpbwg66eM65Ot64uI64ukLiAo7LaVIOyDneyEsSlcbiAgICAgICAgICAgIGF4ZXMucHVzaCh2MS5lZGdlKHYyKS5wZXJwZW5kaWN1bGFyKCkubm9ybWFsaXplKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdjEueCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS54O1xuICAgICAgICB2MS55ID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLnk7XG5cbiAgICAgICAgdjIueCA9IHRoaXMucG9pbnRzWzBdLng7XG4gICAgICAgIHYyLnkgPSB0aGlzLnBvaW50c1swXS55O1xuXG4gICAgICAgIC8vIOuqqOyEnOumrOyXkOyEnCDsiJjsp4Hsnbgg64W466eQKOuyleyEoCkg67Kh7YSw66W8IOunjOuTreuLiOuLpC4gKOy2lSDsg53shLEpXG4gICAgICAgIGF4ZXMucHVzaCh2MS5lZGdlKHYyKS5wZXJwZW5kaWN1bGFyKCkubm9ybWFsaXplKCkpO1xuICAgICAgICByZXR1cm4gYXhlcztcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBhdGgoZ3JhcGhpY3MsIGxpbmVDb2xvciA9IDB4RkZGRkZGKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGxpbmVDb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odGhpcy5wb2ludHNbaV0ueCwgdGhpcy5wb2ludHNbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuICAgIH1cblxuXG4gICAgbW92ZShkeCwgZHkpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgICAgIHBvaW50LnggKz0gZHg7XG4gICAgICAgICAgICBwb2ludC55ICs9IGR5O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpc1BvaW50SW5QYXRoKHgsIHkpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgICBjb25zdCBpc1BvaW50SW5QYXRoID0gdGhpcy5jb250ZXh0LmlzUG9pbnRJblBhdGgoeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiBpc1BvaW50SW5QYXRoO1xuICAgIH1cblxuXG4gICAgYWRkUG9pbnQoeCwgeSlcbiAgICB7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHgsIHkpKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludHMubGVuZ3RoICsgJyBQb2x5Z29uJztcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvUG9seWdvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=
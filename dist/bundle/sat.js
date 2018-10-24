webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(363);
	
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

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(364);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Circle = __webpack_require__(365);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _Polygon = __webpack_require__(369);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(355);
	
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

/***/ 364:
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

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(366);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(368);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(355);
	
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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MTV = __webpack_require__(367);
	
	var _MTV2 = _interopRequireDefault(_MTV);
	
	var _Painter = __webpack_require__(355);
	
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

/***/ 367:
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

/***/ 368:
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

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(366);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(364);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Vector = __webpack_require__(328);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(368);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(355);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVjdG9yLmpzPzkyYTgqKioqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcz85MjQxKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bjRqL0Vwc2lsb24uanM/NmUxMSoqIiwid2VicGFjazovLy8uL3NyYy91dGlscy9QYWludGVyLmpzP2VmMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dqay9HSksuanM/NTBjMCoqIiwid2VicGFjazovLy8uL3NyYy9namsvTWlua293c2tpU3VtUG9pbnQuanM/MTlkMCoqIiwid2VicGFjazovLy8uL3Rlc3Qvc2F0L1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvTVRWLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvUHJvamVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1BvbHlnb24uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibWFpbiIsIk1haW4iLCJjYW52YXMiLCJyZW5kZXJlciIsInN0YWdlIiwidGVzdCIsImNvbnRhaW5lciIsImluaXQiLCJhZGRFdmVudCIsIm9uUmVzaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlBJWEkiLCJDYW52YXNSZW5kZXJlciIsIndpZHRoIiwiaGVpZ2h0IiwidmlldyIsImF1dG9SZXNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNb3VzZSIsIkNvbnRhaW5lciIsImFkZENoaWxkIiwiVGVzdCIsInVwZGF0ZUxvb3AiLCJyZXNpemVXaW5kb3ciLCJvbnJlc2l6ZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwib25LZXlVcCIsIm1zIiwidXBkYXRlIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlbmRlciIsImlubmVyV2lkdGgiLCJkZXZpY2VQaXhlbFJhdGlvIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInJlc2l6ZSIsImUiLCJrZXlDb2RlIiwiS2V5Q29kZSIsIlRJTERFIiwiRVNDIiwiU1BBQ0UiLCJET1dOX0FSUk9XIiwiVVBfQVJST1ciLCJMRUZUX0FSUk9XIiwiUklHSFRfQVJST1ciLCJCQUNLX1NQQUNFIiwiY29uc29sZSIsImNsZWFyIiwiZGVncmVlcyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsIm1pbiIsIm1heCIsImZsb29yIiwicmFkaWFuMmRlZ3JlZXMiLCJyYWQiLCJkZWdyZWVzMnJhZGlhbiIsImRlZyIsIlZlY3RvciIsImFyciIsIm9iaiIsIngiLCJ5IiwidmVjIiwic2NhbGFyIiwic3VidHJhY3QiLCJ2ZWN0b3IiLCJpbnZlcnRYIiwiaW52ZXJ0WSIsImxlbmd0aCIsImRpdmlkZSIsIm5vcm1hbGl6ZSIsImZhY3RvciIsImFicyIsInRvcExlZnQiLCJib3R0b21SaWdodCIsInJhbmRvbWl6ZVgiLCJyYW5kb21pemVZIiwicm91bmQiLCJwcmVjaXNpb24iLCJ0b0ZpeGVkIiwiYW1vdW50IiwibWl4WCIsIm1peFkiLCJjb3B5WCIsImNvcHlZIiwidGVtcCIsInZlYzIiLCJkb3QiLCJjb2VmZiIsImF0YW4yIiwiaG9yaXpvbnRhbEFuZ2xlIiwidmVydGljYWxBbmdsZSIsImhvcml6b250YWxBbmdsZURlZyIsImFuZ2xlIiwibngiLCJjb3MiLCJzaW4iLCJueSIsInJvdGF0ZSIsInJvdGF0aW9uIiwicm90YXRlVG8iLCJyb3RhdGVCeSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNxcnQiLCJkaXN0YW5jZVNxIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImxlbmd0aFNxIiwiYSIsImIiLCJ2IiwiY2xvbmUiLCJyZXQiLCJtdWx0aXBseVNjYWxhciIsImMiLCJyIiwiYWMiLCJiYyIsInZlYzEiLCJ0byIsImFkZCIsInByZXZQb2ludCIsImN1cnJlbnRQb2ludCIsInByZXZUaW1lIiwiY3VycmVudFRpbWUiLCJkaWZmWCIsImRpZmZZIiwicGx1Z2lucyIsImludGVyYWN0aW9uIiwibW91c2UiLCJwb2ludGVyIiwidmFsdWUiLCJfcmVuZGVyZXIiLCJfbW91c2UiLCJERVNLVE9QX01PVVNFIiwiZ2xvYmFsIiwiY3VycmVudEN1cnNvclN0eWxlIiwiRGF0ZSIsImdldFRpbWUiLCJFcHNpbG9uIiwiY29tcHV0ZSIsIlBhaW50ZXIiLCJ2ZXJ0aWNlczEiLCJ2ZXJ0aWNlczIiLCJsb2ciLCJwYXRoIiwiaSIsImoiLCJ2MSIsInYyIiwiZGlmZiIsInB1c2giLCJjb252ZXhIdWxsUGF0aCIsIkdKSyIsImNyZWF0ZUNvbnZleEh1bGwiLCJkcmF3UG9seWdvbiIsInZlcnRpY2VzIiwibGluZVdpZHRoIiwiY29sb3IiLCJhbHBoYSIsImdyYXBoaWNzIiwiZyIsImxpbmVTdHlsZSIsInZlYzAiLCJtYWduaWZpY2F0aW9uIiwibW92ZVRvIiwibGluZVRvIiwic3RyaW5nIiwicG9pbnQiLCJ0ZXh0IiwiVGV4dCIsImZpbGwiLCJpc0NsZWFyIiwicmFkaXVzIiwiYmVnaW5GaWxsIiwiZHJhd0NpcmNsZSIsImVuZEZpbGwiLCJib3VuZHMiLCJ0aGlja25lc3MiLCJkcmF3UmVjdCIsInJlY3QiLCJsdCIsInJ0IiwicmIiLCJsYiIsInBvaW50cyIsInAxIiwicDIiLCJwMCIsIm1vdmVQb2ludCIsInRvUG9pbnQiLCJzY2FsZSIsImxlZnQiLCJpbnZlcnQiLCJyaWdodCIsIm1lIiwidGFyZ2V0IiwiT1JJR0lOIiwiREVGQVVMVF9NQVhfSVRFUkFUSU9OUyIsIlRPTEVSQU5DRSIsIkUiLCJhdmciLCJjb3VudCIsImluZGV4IiwibWF4UHJvZHVjdCIsImRvdFByb2R1Y3QiLCJwcm9kdWN0IiwiaW5kZXhPZkZ1cnRoZXN0UG9pbnQiLCJuZWdhdGUiLCJzdHIiLCJNaW5rb3dza2lTdW1Qb2ludCIsImhpc3RvcnkiLCJpdGVyQ291bnQiLCJkIiwiYW8iLCJhYiIsImFicGVycCIsImFjcGVycCIsInNpbXBsZXgiLCJBcnJheSIsImRpcmVjdGlvbnMiLCJwb3NpdGlvbjEiLCJhdmVyYWdlUG9pbnQiLCJwb3NpdGlvbjIiLCJzdXBwb3J0Iiwic2V0SGlzdG9yeSIsInRyaXBsZVByb2R1Y3QiLCJwZXJwZW5kaWN1bGFyIiwibm9ybSIsInNlcGFyYXRpb24iLCJwMU1hZyIsInAyTWFnIiwicHJvamVjdGlvbiIsImMxIiwiYzIiLCJpc1plcm8iLCJzdXBwb3J0MiIsImdldFBvaW50T25TZWdtZW50Q2xvc2VzdFRvUG9pbnQiLCJjb250YWluc09yaWdpbiIsIm5vcm1hbCIsImRpc3RhbmNlIiwiZmluZENsb3Nlc3RQb2ludHMiLCJzYSIsImNyb3NzIiwic2IiLCJzYyIsImwiLCJzZXQiLCJzdXBwb3J0UG9pbnQxIiwic3VwcG9ydFBvaW50MiIsImxsIiwibDIiLCJsMSIsInBvaW50MSIsInBvaW50MiIsInByb2pBb09udG9BYiIsImxlbmd0aFNxdWFyZWQiLCJ0IiwiY2xvc2V0UG9pbnQiLCJtYWduaXR1ZGUiLCJkZXB0aCIsImxpbmVQb2ludDEiLCJsaW5lUG9pbnQyIiwicDFUb1AiLCJsaW5lIiwiYWIyIiwiYXBfYWIiLCJjbGFtcCIsImkwIiwieDAiLCJuIiwiaHVsbCIsIm0iLCJpaCIsImllIiwibmV3UG9pbnRzIiwiZGVidWdWZXJ0aWNlcyIsImZvckVhY2giLCJ2ZXJ0ZXgiLCJjb25zb2xlVmVydGljZXMiLCJpc0ZpeGVkIiwiR3JhcGhpY3MiLCJkZWJ1Z0dyYXBoaWNzIiwic2hhcGVzIiwiTElORV9DT0xPUiIsIkFSUk9XX0NPTE9SIiwicG9seWdvblBvaW50cyIsIlBvaW50IiwiaXNJbml0IiwiaW50ZXJhY3RpdmUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJtb3VzZURvd25Qb2ludCIsImxhc3RkcmFnIiwic2hhcGVCZWluZ0RyYWdnZWQiLCJ1bmRlZmluZWQiLCJjcmVhdGVQb2x5Z29uTWFudWFsIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uIiwiaGl0QXJlYSIsIlJlY3RhbmdsZSIsInR4IiwidHkiLCJ0b1JhZGlhbiIsImRlZ3JlZSIsInVzZVJhbmRvbVJvdGF0ZSIsInBvbHlnb24iLCJQb2x5Z29uIiwiYWRkUG9pbnQiLCJyb3RhdGVTaGFwZSIsImNyZWF0ZVBhdGgiLCJkaWFtZXRlciIsInNwYWNlIiwiZ2V0UG9seWdvblBvaW50cyIsImFkZENpcmNsZSIsImNyZWF0ZVBvbHlnb24iLCJjaXJjbGUiLCJDaXJjbGUiLCJkcmFnU2hhcGUiLCJzaGFwZSIsIm10diIsImNvbGxpZGVzV2l0aCIsImNvbGxpc2lvbkRldGVjdGVkIiwibW92ZVNoYXBlQnlNVFYiLCJheGlzIiwib3ZlcmxhcCIsImNvbGxpZGVyIiwiY29sbGlkZWUiLCJjb2xsaWRlckNlbnRlciIsImZyb21PYmplY3QiLCJnZXRDZW50ZXIiLCJjb2xsaWRlZUNlbnRlciIsImNlbnRlclZlY3RvciIsImNlbnRlclVuaXRWZWN0b3IiLCJkcmFnVmVjdG9yIiwiY2VudGVyQ29sbGlkZXIiLCJjZW50ZXJDb2xsaWRlZSIsImRpcmVjdGlvbk5vcm0iLCJvdmVybGFwVmVjdG9yIiwidG9Ob3JtYWxpemUiLCJkb3RUbyIsImNlbnRlciIsImRyYXdBcnJvdyIsIm1vdmUiLCJyb3RhdGlvblBvaW50IiwicGl2b3QiLCJkaXN0IiwiY2EiLCJuYSIsImlzUG9pbnRJblBhdGgiLCJkZXRlY3RDb2xsaXNpb25zIiwidXBkYXRlUmVuZGVyIiwiRVNDQVBFIiwiTlVNQkVSXzEiLCJOVU1CRVJfMiIsIm5hbWUiLCJwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlIiwiY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiY2lyY2xlVmVjdG9yIiwidGVzdFBvaW50VmVjdG9yIiwiY2xvc2VzdFBvaW50Iiwic3VyZmFjZVZlY3RvciIsImRyYXdQb2ludCIsInNjYWxhcnMiLCJwb2ludFZlY3RvciIsIlByb2plY3Rpb24iLCJhcHBseSIsImxpbmVDb2xvciIsImFyYyIsInNhdmUiLCJiZWdpblBhdGgiLCJyZXN0b3JlIiwiU2hhcGUiLCJheGVzIiwibWluaW11bU92ZXJsYXAiLCJheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCIsInByb2plY3Rpb24xIiwicHJvamVjdGlvbjIiLCJwcm9qZWN0IiwiZ2V0T3ZlcmxhcCIsIk1UViIsIm10djEiLCJtaW5pbXVtVHJhbnNsYXRpb25WZWN0b3IiLCJnZXRBeGVzIiwibXR2MiIsInBvdyIsImdldFBvbHlnb25Qb2ludENsb3Nlc3RUb0NpcmNsZSIsImdldENpcmNsZUF4aXMiLCJjb25jYXQiLCJzZXBhcmF0aW9uT25BeGVzIiwib3ZlcmxhcHMiLCJwb2ludFN1bSIsInBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uIiwiZWRnZSIsImNsb3NlUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVDLGNBQVk7QUFDVEEsWUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGFBQU1DLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0gsTUFGRDtBQUdILEVBSkEsR0FBRDs7QUFNQSxLQUFJQyxlQUFKO0FBQUEsS0FBWUMsaUJBQVo7QUFBQSxLQUFzQkMsY0FBdEI7QUFBQSxLQUE2QkMsYUFBN0I7QUFBQSxLQUFtQ0Msa0JBQW5DOztLQUVNTCxJO0FBQ0YscUJBQWM7QUFBQTs7QUFDVixjQUFLTSxJQUFMO0FBQ0EsY0FBS0MsUUFBTDtBQUNBLGNBQUtDLFFBQUw7QUFDSDs7OztnQ0FFTTtBQUNIUCxzQkFBU1EsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFUOztBQUVBUix3QkFBVyxJQUFJUyxLQUFLQyxjQUFULENBQXdCWCxPQUFPWSxLQUEvQixFQUFzQ1osT0FBT2EsTUFBN0MsRUFBcUQ7QUFDNURDLHVCQUFNZCxNQURzRDtBQUU1RGUsNkJBQVksSUFGZ0Q7QUFHNURDLGtDQUFpQjtBQUgyQyxjQUFyRCxDQUFYOztBQU1BQyw2QkFBTWhCLFFBQU4sR0FBaUJBLFFBQWpC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IiwiZmlsZSI6InNhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi9UZXN0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gJy4uLy4uL3NyYy9jb25zdHMvS2V5Q29kZSc7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9Nb3VzZVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xuICAgIH1cbn0oKSk7XG5cbmxldCBjYW52YXMsIHJlbmRlcmVyLCBzdGFnZSwgdGVzdCwgY29udGFpbmVyO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwge1xuICAgICAgICAgICAgdmlldzogY2FudmFzLFxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgzMzM4M0RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTW91c2UucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgICAgICAvLyDsnITsuZjqsIAg7KCV7IiY6rCAIOyVhOuLkOqyveyasCDtnZDrpr/tlZjqsowg67O07J2064qUIOusuOygnOqwgCDsnojslrRcbiAgICAgICAgLy8g66CM642U65+s7J2YIOychOy5mOulvCDsoJXsiJjroZwg7Jew7IKw65CgIOyImCDsnojrj4TroZ0g7ZWc64ukLlxuICAgICAgICAvL3JlbmRlcmVyLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcblxuICAgICAgICBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICB0ZXN0ID0gbmV3IFRlc3QocmVuZGVyZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXN0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AoKTtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMucmVzaXplV2luZG93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTG9vcCAobXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobXMpO1xuICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobXMpIHtcbiAgICAgICAgdGVzdC51cGRhdGUoKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHN0YWdlKTtcbiAgICB9XG5cbiAgICByZXNpemVXaW5kb3coKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOy6lOuyhOyKpCDsgqzsnbTspojsmYAg65SU7Iqk7ZSM66CI7J20IOyCrOydtOymiCDshKTsoJVcbiAgICAgICAgICog66CI7Yuw64KYIOq3uOuemO2UvSDsp4Dsm5Ag7L2U65OcXG4gICAgICAgICAqL1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUElYSSByZW5kZXJlciDrpqzsgqzsnbTspohcbiAgICAgICAgICogUElYSSDsl5Dqsowgdmlld3BvcnQg7IKs7J207KaIIOuzgOqyvSDslYzrprxcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgdGVzdC5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5VXAgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5USUxERTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRE9XTl9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVQX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTEVGVF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuQkFDS19TUEFDRTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9zYXQvaW5kZXguanMiLCJcblxuY29uc3QgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG4gICAgcmV0dXJuIHJhZCAqIGRlZ3JlZXM7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXMycmFkaWFuIChkZWcpIHtcbiAgICByZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cblxuXG4vKipcbiAqIFZpY3Rvci5qc+ulvCBFUzbroZwg67OA7ZmY7ZWY7JesIOyCrOyaqe2VmOqzoCDsnojsirXri4jri6QuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF4a3VlbmcvdmljdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvclxue1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tQXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGZyb21BcnJheShhcnIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gVmVjdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAgICAgKlxuICAgICAqIEBuYW1lIFZlY3Rvci5mcm9tT2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBWZWN0b3IoNDIsIDEzMzcpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6MTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRYKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MzAsIHk6NDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGQodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogMSwgeTogNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFkodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdWJ0cmFjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgIH1cblxuXG4gICAgZWRnZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdCh2ZWMpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGVkZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBWZWN0b3Iuc3VidHJhY3QoYSwgYik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIGJvdGggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDgwLCB5OiAyMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWSgyMCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSB4IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlWCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVYKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIHkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVZKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgYSBheGlzIHZhbHVlcyBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggLz0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZGl2aWRlKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLyBiLngsIGEueSAvIGIueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJYKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXJZKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy55IC89IHNjYWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFgoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WCgpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnRZKCk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydFkoKVxuICAgIHtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5pbnZlcnQoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGludmVydCgpXG4gICAge1xuICAgICAgICB0aGlzLmludmVydFgoKTtcbiAgICAgICAgdGhpcy5pbnZlcnRZKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG5lZ2F0ZSh2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCB2ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIHYueCA9IC12ZWMueDtcbiAgICAgICAgdi55ID0gLXZlYy55O1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICo9IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigwLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseSh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMDAsIHk6MTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5U2NhbGFyKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG11bHRpcGx5U2NhbGFyKHZlY3Rvciwgc2NhbGFyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiBzY2FsYXIsIHZlY3Rvci55ICogc2NhbGFyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGVTY2FsYXIodmVjdG9yLCBzY2FsYXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAvIHNjYWxhciwgdmVjdG9yLnkgLyBzY2FsYXIpO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbXVsdGlwbHlTY2FsYXJZKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7IiY7KeBIOuyoe2EsCDsg53shLEgKDkwIOuPhCDtmozsoIQpXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gLXZlYy55O1xuICAgICAgICBjbG9uZS55ID0gdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxICgtOTAg64+EIO2ajOyghClcbiAgICAgKi9cbiAgICByZXR1cm5QZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueSwgLXRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmV0dXJuUGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuyhOumvFxuICAgICAqIEBwYXJhbSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAgICovXG4gICAgc3RhdGljIHRydW5jYXRlKHZlYywgbGVuZ3RoKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdmVjLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aFNxID0gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgICAgIGlmIChsZW5ndGhTcSA+IGxlbmd0aCAqIGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0Lm11bHRpcGx5U2NhbGFyKGxlbmd0aCAvIE1hdGguc3FydChsZW5ndGhTcSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG5vcm1hbGl6ZSgpXG4gICAge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZpZGUobmV3IFZlY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgbm9ybSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBhYnNvbHV0ZSB2ZWN0b3IgYXhpcyBpcyBncmVhdGVyIHRoYW4gYG1heGAsIG11bHRpcGxpZXMgdGhlIGF4aXMgYnkgYGZhY3RvcmBcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBmb3IgYm90aCB4IGFuZCB5IGF4aXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGltaXQobWF4LCBmYWN0b3IpXG4gICAge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmFuZG9taXplcyBib3RoIHZlY3RvciBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWZWN0b3IoNTAsIDYwKSwgbmV3IFZlY3Rvcig3MCwgODBgKSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHJhbmRvbWl6ZSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSwgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuICAgICAgICB0aGlzLnggPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyByYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4odG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbShtaW4sIG1heCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyB2ZWN0b3IgdG8gdGhlIGxlZnQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IHRoaXMgdmVjdG9yXG4gICAgICogQHNlZSAjZ2V0TGVmdEhhbmRPcnRob2dvbmFsVmVjdG9yKClcbiAgICAgKi9cbiAgICBsZWZ0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gLXRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIHZlY3RvciB0byB0aGUgcmlnaHQtaGFuZGVkIG5vcm1hbCBvZiB0aGlzIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJuIHtAbGluayBWZWN0b3IyfSB0aGlzIHZlY3RvclxuICAgICAqIEBzZWUgI2dldFJpZ2h0SGFuZE9ydGhvZ29uYWxWZWN0b3IoKVxuICAgICAqL1xuICAgIHJpZ2h0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rcm9pdG9yL2dqay5jXG4gICAgICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJpcGxlX3Byb2R1Y3QjVmVjdG9yX3RyaXBsZV9wcm9kdWN0XG4gICAgICog7IS46re466i87Yq47JeQ7IScIOybkOygkOycvOuhnCDtlqXtlZjripQg67Cp7Zal7J2EIOywvuydhCDrlYwg7IKs7JqpXG4gICAgICovXG4gICAgc3RhdGljIHRyaXBsZVByb2R1Y3QoYSwgYiwgYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIGNvbnN0IGFjID0gYS54ICogYy54ICsgYS55ICogYy55ICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgICAgICwgYmMgPSBiLnggKiBjLnggKyBiLnkgKiBjLnk7ICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuXG4gICAgICAgIC8vIHBlcmZvcm0gYiAqIGEuZG90KGMpIC0gYSAqIGIuZG90KGMpXG4gICAgICAgIHIueCA9IGIueCAqIGFjIC0gYS54ICogYmM7XG4gICAgICAgIHIueSA9IGIueSAqIGFjIC0gYS55ICogYmM7XG5cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMTAwLCAxMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBwcm9qZWN0T250byh2ZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgICAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICAgICAgdGhpcy55ID0gY29lZmYgKiB2ZWMyLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7ISg7ZiVIOuztOqwhFxuICAgICAqIGh0dHA6Ly9kZXZlbG9wdWcuYmxvZ3Nwb3QuY29tLzIwMTQvMDkvdW5pdHktdmVjdG9yLWxlcnAuaHRtbFxuICAgICAqIEBwYXJhbSB2ZWMxXG4gICAgICogQHBhcmFtIHZlYzJcbiAgICAgKiBAcGFyYW0gdG9cbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yfVxuICAgICAqL1xuICAgIHN0YXRpYyBsZXJwKHZlYzEsIHZlYzIsIHRvKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKFZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWMxLCAxIC0gdG8pLCBWZWN0b3IubXVsdGlwbHlTY2FsYXIodmVjMiwgdG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDsl63siJhcbiAgICAgKiBAcGFyYW0gdmVjdG9yXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmNwKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxIC8gdmVjdG9yLngsIDEgLyB2ZWN0b3IueSk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuXG4gICAgaG9yaXpvbnRhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbiAgICB9XG5cblxuICAgIHZlcnRpY2FsQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgYW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCk7XG4gICAgfVxuXG5cbiAgICBhbmdsZURlZygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGVEZWcoKTtcbiAgICB9XG5cblxuICAgIGRpcmVjdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZShhbmdsZSlcbiAgICB7XG4gICAgICAgIHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cbiAgICAgICAgdGhpcy54ID0gbng7XG4gICAgICAgIHRoaXMueSA9IG55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcm90YXRlRGVnKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgYW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUbyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyb3RhdGlvbi10aGlzLmFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgcm90YXRlVG9EZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnkocm90YXRpb24pXG4gICAge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgIH1cblxuXG4gICAgcm90YXRlQnlEZWcocm90YXRpb24pXG4gICAge1xuICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2VYKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB2ZWMueDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFkgYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VZKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAtMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSAtIHZlYy55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBYnNvbHV0ZSBkaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWJzRGlzdGFuY2VZKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3RhbmNlWSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzdGFuY2UodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uKCk7XG4gICAgfVxuXG5cbiAgICBnZXRNYWduaXR1ZGVTcXVhcmVkKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZGlzdGFuY2VTcSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVNxKHZlYylcbiAgICB7XG4gICAgICAgIHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG4gICAgICAgICAgICBkeSA9IHRoaXMuZGlzdGFuY2VZKHZlYyk7XG5cbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGgoKTtcbiAgICAgKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoKClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcSgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLqOyInO2eiCDquLjsnbQg67mE6rWQ66W8IO2VmOugpOuptCBsZW5ndGgg66W8IOyCrOyaqe2VmOq4sCDrs7Tri6TripQgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOqyjCDruaDrpbTri6QuXG4gICAgICogbGVuZ3RoIOuKlCBNYXRoLnNxcnQgKOygnOqzseq3vCkg7LKY66as66W8IO2VmOq4sCDrlYzrrLjsl5Ag64uo7IicIOq4uOydtCDruYTqtZDsi5wgbGVuZ3RoU3Eg66W8IOyCrOyaqe2VmOuKlCDqsoPsnbQg67mg66aF64uI64ukLlxuICAgICAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5sZW5ndGhTcSgpO1xuICAgICAqICAgICAvLyA9PiAxMjUwMFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGxlbmd0aFNxKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbGVuZ3RoU3EodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdmVjLnggKyB2ZWMueSAqIHZlYy55O1xuICAgIH1cblxuXG4gICAgbWFnbml0dWRlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCgpO1xuICAgIH1cblxuXG4gICAgdG8odmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjLnggLSB0aGlzLngsIHZlYy55IC0gdGhpcy55KTtcbiAgICB9XG5cblxuICAgIHNldCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ID0gdmVjLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjLnplcm8oKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNaZXJvKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRydWUgaWYgdGhpcyB2ZWN0b3IgaXMgdGhlIHNhbWUgYXMgYW5vdGhlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gICAgICpcbiAgICAgKiAgICAgLy8gPT4gdHJ1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRXF1YWxUbyh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBVdGlsaXR5IE1ldGhvZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9BcnJheSgpO1xuICAgICAqICAgICAvLyA9PiBbMTAsIDIwXVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b0FycmF5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwLCAyMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gICAgICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvT2JqZWN0KClcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlY3Rvci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlXG57XG4gICAgc3RhdGljIGdldCBERVNLVE9QX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBNT0JJTEVfTU9VU0UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBJWEkuQXBwbGljYXRpb24ucmVuZGVyZXJcbiAgICAgKiDrnpzrjZTrn6zsl5DshJwgaW50ZXJhY3RpbyDqsJ3ssrTrpbwg7LC47KGw7ZWgIOyImCDsnojslrTshJwg7IKs7Jqp7ZWY66Ck66m0IOugjOuNlOufrOulvCDshYvtjIXtlbTslbwg7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7UElYSS5XZWJHTFJlbmRlcnJlcnxQSVhJLkNhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgcmVuZGVyZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOuqqOuwlOydvCDrjIDsnZHsnYQg7JyE7ZW07IScXG4gICAgICogUEMg67KE7KCE7JeQ7ISc64qUIG1vdXNlIOqwneyytOulvCwg66qo67CU7J28IOuyhOyghOyXkOyEnOuKlCBwb2ludGVyIOqwneyytOulvCDshYvtjIXtlZjrqbRcbiAgICAgKiBnbG9iYWwg6rCd7LK07JeQ7IScIOywuOyhsO2VtOyEnCDsooztkZzqsJLsnYQg7KCE64us7ZWY64+E66GdIO2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIOunjOyVvSDshKTsoJXtlZjsp4Ag7JWK7Jy866m0IOq4sOuzuCBQQ+unjCDrjIDsnZHtlZjrj4TroZ0gbW91c2Ug6rCd7LK066W8IOyEpOygle2VqeuLiOuLpC5cbiAgICAgKlxuICAgICAqIERlc2t0b3AgOiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlXG4gICAgICogTW9iaWxlIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5wb2ludGVyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHNldCBtb3VzZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb3VzZSA9IHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG1vdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuREVTS1RPUF9NT1VTRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW91c2U7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2UuZ2xvYmFsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC54O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGdsb2JhbFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbC55O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNldCBjdXJyZW50Q3Vyc29yU3R5bGUodmFsdWUpIHtcbiAgICAgICAgTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50Q3Vyc29yU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBNb3VzZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLmN1cnJlbnRDdXJzb3JTdHlsZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOydtOuPmSDqsbDrpqzqsIAgNXB4IOydtO2VmOydtOqzoCA1MDBtcyDslYjsl5Ag65GQ67KIIO2BtOumre2VmOuptCDrjZTruJQg7YG066at7Jy866GcIOyduOyglVxuICAgICAqIEBwYXJhbSBwcmV2UG9pbnQg7J207KCE7KKM7ZGcXG4gICAgICogQHBhcmFtIGN1cnJlbnRQb2ludCDtmITsnqzsooztkZxcbiAgICAgKiBAcGFyYW0gcHJldlRpbWUg7J207KCEIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcGFyYW0gY3VycmVudFRpbWUg7ZiE7J6sIO2BtOumrSDtg4DsnoRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g642U67iUIO2BtOumrSDsl6zrtoBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEb3VibGVDbGljayhwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgcHJldlRpbWUsIGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHZhciBkaWZmWCA9IGN1cnJlbnRQb2ludC54IC0gcHJldlBvaW50Lng7XG5cbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgZGlmZlggPSBkaWZmWCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZZID0gY3VycmVudFBvaW50LnkgLSBwcmV2UG9pbnQueTtcblxuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBkaWZmWSA9IGRpZmZZICogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlmZlggPiA1IHx8IGRpZmZZID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUgPiA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9Nb3VzZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNiBXaWxsaWFtIEJpdHRsZSAgaHR0cDovL3d3dy5keW40ai5vcmcvXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbiAqIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnNcbiAqICAgICBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqICAgICBkaXN0cmlidXRpb24uXG4gKiAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBkeW40aiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvclxuICogICAgIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gKiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG4gKiBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuICogT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uIHtcblxuICAgIHN0YXRpYyBnZXQgRSgpIHtcbiAgICAgICAgcmV0dXJuIEVwc2lsb24uY29tcHV0ZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb21wdXRlKCkge1xuICAgICAgICBsZXQgZSA9IDAuNTtcbiAgICAgICAgd2hpbGUgKDEuMCArIGUgPiAxLjApIHtcbiAgICAgICAgICAgIGUgKj0gMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHluNGovRXBzaWxvbi5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBHSksgZnJvbSAnLi4vZ2prL0dKSyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlclxue1xuICAgIHN0YXRpYyBkcmF3TWlua293c2tpU3VtKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYXdNaW5rb3dza2lTdW0oJywgdmVydGljZXMxLmxlbmd0aCAqIHZlcnRpY2VzMi5sZW5ndGgsICcpJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2ZXJ0aWNlczIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCB2MSA9IHZlcnRpY2VzMVtpXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCB2MiA9IHZlcnRpY2VzMltqXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCBkaWZmID0gVmVjdG9yLnN1YnRyYWN0KHYxLCB2Mik7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGRpZmYpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGosIGB2ZWNbJHtkaWZmLnh9LCAke2RpZmYueX1dYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsUGF0aCA9IEdKSy5jcmVhdGVDb252ZXhIdWxsKHBhdGgpO1xuICAgICAgICBQYWludGVyLmRyYXdQb2x5Z29uKGNvbnZleEh1bGxQYXRoLCAxLCAweERERERERCwgMSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvbHlnb24odmVydGljZXMsIGxpbmVXaWR0aCA9IDEsIGNvbG9yID0gMHg2MDdEOEIsIGFscGhhID0gMC41KVxuICAgIHtcbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSB3aW5kb3cuZztcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKGxpbmVXaWR0aCwgY29sb3IsIGFscGhhKTtcblxuICAgICAgICBjb25zdCB2ZWMwID0gdmVydGljZXNbMF0uY2xvbmUoKTtcbiAgICAgICAgdmVjMC5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbik7XG5cbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHZlYzAueCwgdmVjMC55KTtcblxuICAgICAgICAvLyB0aGlzLmRyYXdUZXh0KHdpbmRvdy5zdGFnZSwgJygnICsgdmVjMC54LnRvRml4ZWQoMCkgKyAnLCcgKyB2ZWMwLnkudG9GaXhlZCgwKSArICcpJywgdmVjMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlYyA9IHZlcnRpY2VzW2ldLmNsb25lKCk7XG4gICAgICAgICAgICB2ZWMubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYy54LCB2ZWMueSk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lVG8odmVjMC54LCB2ZWMwLnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdUZXh0KHN0YWdlLCBzdHJpbmcsIHBvaW50LCBjb2xvciA9ICcjZmYzMzAwJylcbiAgICB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXcgUElYSS5UZXh0KHN0cmluZywge1xuICAgICAgICAgICAgLy8gZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIC8vIGZvbnRTaXplOiA0LFxuICAgICAgICAgICAgLy8gZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgZmlsbDogY29sb3IsXG4gICAgICAgICAgICAvLyBzdHJva2U6ICcjNGExODUwJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGV4dC54ID0gcG9pbnQueDtcbiAgICAgICAgdGV4dC55ID0gcG9pbnQueTtcblxuICAgICAgICBzdGFnZS5hZGRDaGlsZCh0ZXh0KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnQoZ3JhcGhpY3MsIHBvaW50LCBpc0NsZWFyID0gdHJ1ZSwgcmFkaXVzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCBjb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHBvaW50LngsIHBvaW50LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5Qm91bmRzKGdyYXBoaWNzLCBib3VuZHMsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfTtcblxuXG4gICAgc3RhdGljIGRyYXdSZWN0QnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKVxuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocmVjdC5sdC54LCByZWN0Lmx0LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5ydC54LCByZWN0LnJ0LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5yYi54LCByZWN0LnJiLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5sYi54LCByZWN0LmxiLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocmVjdC5sdC54LCByZWN0Lmx0LnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2ludHNCeVBvaW50cyhncmFwaGljcywgcmVjdCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0Lmx0LngsIHJlY3QubHQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LnJ0LngsIHJlY3QucnQueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LnJiLngsIHJlY3QucmIueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShyZWN0LmxiLngsIHJlY3QubGIueSwgcmFkaXVzKTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzKGdyYXBoaWNzLCBwb2ludHMsIGlzQ2xlYXIgPSB0cnVlLCB0aGlja25lc3MgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHAxID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgdmFyIHAyID0gcG9pbnRzW2kgKyAxIDwgcG9pbnRzLmxlbmd0aCA/IGkgKyAxIDogMF07XG5cbiAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICAgICBncmFwaGljcy5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3TGluZShncmFwaGljcywgcDAsIHAxLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMC54LCBwMC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAxLngsIHAxLnkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdBcnJvdyhncmFwaGljcywgbW92ZVBvaW50LCB0b1BvaW50LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcsIHNjYWxlID0gNSlcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcih0b1BvaW50LnggLSBtb3ZlUG9pbnQueCwgdG9Qb2ludC55IC0gbW92ZVBvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICByaWdodC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgdmVjdG9yLmludmVydCgpLm11bHRpcGx5U2NhbGFyKDE1KTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7Ki9cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcblxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3Rvcihtb3ZlUG9pbnQueCAtIHRvUG9pbnQueCwgbW92ZVBvaW50LnkgLSB0b1BvaW50LnkpO1xuICAgICAgICB2YXIgbGVmdCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSg0NSkuaW52ZXJ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHZlY3Rvci5jbG9uZSgpLnJvdGF0ZSgtNDUpLmludmVydCgpO1xuICAgICAgICBsZWZ0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoc2NhbGUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyB2ZWN0b3IueCwgbW92ZVBvaW50LnkgKyB2ZWN0b3IueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyBsZWZ0LngsIG1vdmVQb2ludC55ICsgbGVmdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHJpZ2h0LngsIG1vdmVQb2ludC55ICsgcmlnaHQueSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0RpcmVjdGlvbihncmFwaGljcywgbWUsIHRhcmdldCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43LCBzY2FsZSA9IDUpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcblxuICAgICAgICB2YXIgdG8gPSBtZS50byh0YXJnZXQpO1xuICAgICAgICB2YXIgbGVmdCA9IHRvLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdG8uY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcihzY2FsZSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKHNjYWxlKTtcbiAgICAgICAgdG8uaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoc2NhbGUgKiAzKTtcblxuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIHRvLngsIG1lLnkgKyB0by55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1lLngsIG1lLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obWUueCArIGxlZnQueCwgbWUueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtZS54LCBtZS55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1lLnggKyByaWdodC54LCBtZS55ICsgcmlnaHQueSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL1BhaW50ZXIuanMiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgRXBzaWxvbiBmcm9tICcuLi9keW40ai9FcHNpbG9uJztcbmltcG9ydCBNaW5rb3dza2lTdW1Qb2ludCBmcm9tIFwiLi9NaW5rb3dza2lTdW1Qb2ludFwiO1xuXG4vKipcbiAqIEdKSyBBbGdvcml0aG0gKEdpbGJlcnQtSm9obnNvbi1LZWVydGhpKVxuICogaHR0cHM6Ly9naXRodWIuY29tL2tyb2l0b3IvZ2prLmNcbiAqIGh0dHA6Ly93d3cuZHluNGoub3JnLzIwMTAvMDQvZ2prLWdpbGJlcnQtam9obnNvbi1rZWVydGhpLyNnamstdG9wXG4gKiBodHRwczovL3d3dy5oYXJvbGRzZXJyYW5vLmNvbS9ibG9nL3Zpc3VhbGl6aW5nLXRoZS1namstY29sbGlzaW9uLWFsZ29yaXRobVxuICogaHR0cHM6Ly9naXRodWIuY29tL2p1aGwvY29sbGlzaW9uLWRldGVjdGlvbi0yZFxuICovXG5cbmNvbnN0IE9SSUdJTiA9IG5ldyBWZWN0b3IoMCwgMClcbiAgICAsIERFRkFVTFRfTUFYX0lURVJBVElPTlMgPSAzMFxuICAgICwgVE9MRVJBTkNFID0gTWF0aC5zcXJ0KEVwc2lsb24uRSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdKS1xue1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdG8gY29tcHV0ZSBhdmVyYWdlIGNlbnRlciAocm91Z2hseSkuIEl0IG1pZ2h0IGJlIGRpZmZlcmVudCBmcm9tXG4gICAgICogQ2VudGVyIG9mIEdyYXZpdHksIGVzcGVjaWFsbHkgZm9yIGJvZGllcyB3aXRoIG5vbnVuaWZvcm0gZGVuc2l0eSxcbiAgICAgKiBidXQgdGhpcyBpcyBvayBhcyBpbml0aWFsIGRpcmVjdGlvbiBvZiBzaW1wbGV4IHNlYXJjaCBpbiBHSktcbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgYXZlcmFnZVBvaW50KHZlcnRpY2VzKVxuICAgIHtcbiAgICAgICAgY29uc3QgYXZnID0gbmV3IFZlY3RvcigpXG4gICAgICAgICAgICAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgYXZnLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2Zy55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhdmcueCAvPSBjb3VudDtcbiAgICAgICAgYXZnLnkgLz0gY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIGF2ZztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBmdXJ0aGVzdCB2ZXJ0ZXggYWxvbmcgYSBjZXJ0YWluIGRpcmVjdGlvblxuICAgICAqIOq8reyngOygkOqzvCDrsKntlqXsnYQg7KCE64us7ZWY66m0IOuCtOyggSAo7Yis7JiBKeydhCDthrXtlbQg7LWc64yA66GcIOuovCDsooztkZzsnZgg7J24642x7Iqk66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmVydGljZXMge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIHtWZWN0b3J9IOuwqe2WpSB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMsIGRpcmVjdGlvbilcbiAgICB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXhQcm9kdWN0ID0gVmVjdG9yLmRvdFByb2R1Y3QoZGlyZWN0aW9uLCB2ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGNvdW50ID0gdmVydGljZXMubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IFZlY3Rvci5kb3RQcm9kdWN0KGRpcmVjdGlvbiwgdmVydGljZXNbaV0pO1xuXG4gICAgICAgICAgICBpZiAocHJvZHVjdCA+IG1heFByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBtYXhQcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNaW5rb3dza2kgc3VtIHN1cHBvcnQgZnVuY3Rpb24gZm9yIEdKS1xuICAgICAqIOyngOybkCDtlajsiJjsl5DshJwg7Y+066as6rOk7J2YIO2PrOyduO2KuOyZgCDrsKntlqXsnLzroZwg7ISc66GcIOuLpOuluCDrsKntlqXsnZgg7KCQ7J2EIOq1rO2VmOqzoCBNaW5rb3dza2kgRGlmZmVyZW5jZSDrpbwg67CY7ZmY7ZWp64uI64ukLlxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczEge1ZlY3RvcltdfSDtj7Trpqzqs6QgdmVydGljZXNcbiAgICAgKiBAcGFyYW0gdmVydGljZXMyIHtWZWN0b3JbXX0g7Y+066as6rOkIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiB7VmVjdG9yfSDrsKntlqUg67Kh7YSwXG4gICAgICovXG4gICAgc3RhdGljIHN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGRpcmVjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIGdldCBmdXJ0aGVzdCBwb2ludCBvZiBmaXJzdCBib2R5IGFsb25nIGFuIGFyYml0cmFyeSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaSA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMxLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIC8vIGdldCBmdXJ0aGVzdCBwb2ludCBvZiBzZWNvbmQgYm9keSBhbG9uZyB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IGogPSB0aGlzLmluZGV4T2ZGdXJ0aGVzdFBvaW50KHZlcnRpY2VzMiwgVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZDonICsgc3RyKGRpcmVjdGlvbiwgdHJ1ZSksICdpOicgKyBzdHIodmVydGljZXMxW2ldKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pLCB0cnVlKSwgJ2o6JyArIHN0cih2ZXJ0aWNlczJbal0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1cHBvcnQoJyArIHN0cihWZWN0b3Iuc3VidHJhY3QodmVydGljZXMxW2ldLCB2ZXJ0aWNlczJbal0pKSArICcpJyk7XG4gICAgICAgIC8vIHN1YnRyYWN0IChNaW5rb3dza2kgc3VtKSB0aGUgdHdvIHBvaW50cyB0byBzZWUgaWYgYm9kaWVzICdvdmVybGFwJ1xuICAgICAgICByZXR1cm4gVmVjdG9yLnN1YnRyYWN0KHZlcnRpY2VzMVtpXSwgdmVydGljZXMyW2pdKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzdXBwb3J0Mih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIHNlY29uZCBib2R5IGFsb25nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgaiA9IHRoaXMuaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMyLCBWZWN0b3IubmVnYXRlKGRpcmVjdGlvbikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdkOicgKyBzdHIoZGlyZWN0aW9uLCB0cnVlKSwgJ2k6JyArIHN0cih2ZXJ0aWNlczFbaV0pKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Q6JyArIHN0cihWZWN0b3IubmVnYXRlKGRpcmVjdGlvbiksIHRydWUpLCAnajonICsgc3RyKHZlcnRpY2VzMltqXSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCgnICsgc3RyKFZlY3Rvci5zdWJ0cmFjdCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSkpICsgJyknKTtcbiAgICAgICAgcmV0dXJuIG5ldyBNaW5rb3dza2lTdW1Qb2ludCh2ZXJ0aWNlczFbaV0sIHZlcnRpY2VzMltqXSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstqnrj4wg6rKA7IKsXG4gICAgICogQHBhcmFtIHZlcnRpY2VzMSB7VmVjdG9yW119XG4gICAgICogQHBhcmFtIHZlcnRpY2VzMiB7VmVjdG9yW119XG4gICAgICogQHBhcmFuIGhpc3Rvcnkge0hpc3Rvcnl9IHNpbXBsZXgg7JmAIGRpcmVjdGlvbiDtnojsiqTthqDrpqxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g7Lap64+MIOyXrOu2gFxuICAgICAqL1xuICAgIHN0YXRpYyBjaGVja0NvbGxpc2lvbih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgaGlzdG9yeSA9IG51bGwpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpO1xuXG4gICAgICAgIGxldCBpdGVyQ291bnQgPSAwLCBpbmRleCA9IDA7ICAgLy8gaW5kZXggb2YgY3VycmVudCB2ZXJ0ZXggb2Ygc2ltcGxleFxuICAgICAgICBsZXQgYSwgYiwgYywgZCwgYW8sIGFiLCBhYywgYWJwZXJwLCBhY3BlcnAsXG4gICAgICAgICAgICBzaW1wbGV4ID0gbmV3IEFycmF5KDMpLCBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDMpO1xuXG4gICAgICAgIC8vIOuRkCDtj7Trpqzqs6Qg7KSR7IusIOyijO2RnOulvCDthrXtlbTshJwg67Cp7Zal7J2EIOq1rO2VqeuLiOuLpC5cbiAgICAgICAgY29uc3QgcG9zaXRpb24xID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMxKTsgLy8gbm90IGEgQ29HIGJ1dFxuICAgICAgICBjb25zdCBwb3NpdGlvbjIgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIC8vIOuwqe2WpSB2ZWN0b3JcbiAgICAgICAgZCA9IFZlY3Rvci5zdWJ0cmFjdChwb3NpdGlvbjEsIHBvc2l0aW9uMik7XG5cbiAgICAgICAgLy8gaWYgaW5pdGlhbCBkaXJlY3Rpb24gaXMgemVybyDigJMgc2V0IGl0IHRvIGFueSBhcmJpdHJhcnkgYXhpcyAod2UgY2hvb3NlIFgpXG4gICAgICAgIGlmICgoZC54ID09IDApICYmIChkLnkgPT0gMCkpIHtcbiAgICAgICAgICAgIGQueCA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgc3VwcG9ydCBhcyBpbml0aWFsIHBvaW50IG9mIHRoZSBuZXcgc2ltcGxleFxuICAgICAgICBhID0gc2ltcGxleFswXSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG4gICAgICAgIGRpcmVjdGlvbnNbMF0gPSBkO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHIoYSksIHN0cihkLCB0cnVlKSwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG5cbiAgICAgICAgLy8gc3VwcG9ydCDsoJDqs7wg67Cp7Zal7J20IOqwmeydgCDrsKntlqXsnbQg7JWE64uQIOqyveyasFxuICAgICAgICBpZiAoYS5kb3QoZCkgPD0gMCkge1xuICAgICAgICAgICAgLy8g66eI7KeA66eJ7JeQIOy2lOqwgCDrkJwg7KCQ7J20IGTsnZgg67Cp7Zal7Jy866GcIOybkOygkOydhCDsp4DrgpjsuZjsp4Ag7JWK7J2AIOqyveyasFxuICAgICAgICAgICAgLy8g6re4IOuLpOydjCBNaW5rb3dza2kg7ZWp7J2AIOybkOygkOydhCDtj6ztlagg7ZWgIOyImCDsl4bsirXri4jri6QuXG4gICAgICAgICAgICAvLyDstpTqsIAg65CcIOuniOyngOuniSDsoJDsnYAgTWlua293c2tpIERpZmZlcmVuY2XsnZgg6rCA7J6l7J6Q66as7JeQIOyeiOyKteuLiOuLpC5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgICAgICAgQ0FTRTFbJywgJ05PJywgJ10nKTtcblxuICAgICAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgIH1cblxuICAgICAgICBkID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gVGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBhbHdheXMgdG93YXJkcyB0aGUgb3JpZ2luLCBzbyB0aGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIG5lZ2F0ZShhKVxuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpdGVyQ291bnQrKztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlckNvdW50KTtcblxuICAgICAgICAgICAgYSA9IHNpbXBsZXhbKytpbmRleF0gPSB0aGlzLnN1cHBvcnQodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQpO1xuICAgICAgICAgICAgZGlyZWN0aW9uc1tpbmRleF0gPSBkO1xuXG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cihhKSwgc3RyKGQsIHRydWUpLCBWZWN0b3IuZG90UHJvZHVjdChhLCBkKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICAgICAgIENBU0UyWycsICdOTycsICddJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYeqwgCDsm5DsoJDsnLzroZwg7Zal7ZWY64qUIOuyoe2EsOuKlCAtYSDrpbwg7ZWY66m0IOuQqeuLiOuLpC5cbiAgICAgICAgICAgIGFvID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gZnJvbSBwb2ludCBBIHRvIE9yaWdpbiBpcyBqdXN0IG5lZ2F0aXZlIEFcblxuICAgICAgICAgICAgLy8gc2ltcGxleCBoYXMgMiBwb2ludHMgKGEgbGluZSBzZWdtZW50LCBub3QgYSB0cmlhbmdsZSB5ZXQpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAyKSB7XG5cbiAgICAgICAgICAgICAgICBiID0gc2ltcGxleFswXTtcbiAgICAgICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFvLCBhYik7IC8vIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuXG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5sZW5ndGhTcShkKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnBlcnBlbmRpY3VsYXIoYWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gc2tpcCB0byBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiID0gc2ltcGxleFsxXTtcbiAgICAgICAgICAgIGMgPSBzaW1wbGV4WzBdO1xuICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICBhYyA9IFZlY3Rvci5zdWJ0cmFjdChjLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIENcblxuICAgICAgICAgICAgLy9hY+yZgCDsiJjsp4FcbiAgICAgICAgICAgIGFjcGVycCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhYywgYWMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYScsIGEsICdiJywgYiwgJ2MnLCBjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbycsIGFvLCAnYWInLCBhYiwgJ2FjJywgYWMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjcGVycCcsIGFjcGVycCwgYWNwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3RQcm9kdWN0KGFjcGVycCwgYW8pJywgVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykpO1xuXG4gICAgICAgICAgICAvLyBhYyDsiJjsp4Eg7ISg67aE7J20IGHqsIAg7JuQ7KCQ7J2EIO2Wpe2VmOuKlCDrsKntlqUg67CY64yA7Y647JeQIOyeiOqzoFxuICAgICAgICAgICAgLy8g7KaJLCBhYyDsiJjsp4Eg7ISg67aEIOyViOyqveyXkCDsm5DsoJDsnbQg7J6I7Jy866m0XG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGQgPSBhY3BlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFDIHRvd2FyZHMgT3JpZ2luJywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aEXG4gICAgICAgICAgICAgICAgYWJwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FicGVycCcsIGFicGVycCwgYWJwZXJwLmNsb25lKCkubm9ybSgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG90UHJvZHVjdChhYnBlcnAsIGFvKScsIFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pKTtcblxuICAgICAgICAgICAgICAgIC8vIGFiIOyImOyngSDshKDrtoTsnbQg7JuQ7KCQIOuwmOuMgCDrsKntlqXsnYQg7Zal7ZWY6rOgIOyeiOycvOuptFxuICAgICAgICAgICAgICAgIC8vIOymiSwg7JuQ7KCQ7J20IOyCvOqwge2YlSDslYjsl5Ag7J6I7Jy866m0XG4gICAgICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFicGVycCwgYW8pIDwgMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnNldEhpc3Rvcnkoc2ltcGxleCwgZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2ltcGxleFswXSA9IHNpbXBsZXhbMV07IC8vIHN3YXAgZmlyc3QgZWxlbWVudCAocG9pbnQgQylcbiAgICAgICAgICAgICAgICBkID0gYWJwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQiB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaW1wbGV4WzFdID0gc2ltcGxleFsyXTsgLy8gc3dhcCBlbGVtZW50IGluIHRoZSBtaWRkbGUgKHBvaW50IEIpXG4gICAgICAgICAgICAtLWluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICAgICAgIGhpc3Rvcnkuc2V0SGlzdG9yeShzaW1wbGV4LCBkaXJlY3Rpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzdGFuY2UodmVydGljZXMxLCB2ZXJ0aWNlczIsIHNlcGFyYXRpb24gPSBudWxsKVxuICAgIHtcbiAgICAgICAgbGV0IGEsIGIsIGMsIGQsIHAxLCBwMiwgcDFNYWcsIHAyTWFnLCBwcm9qZWN0aW9uO1xuXG4gICAgICAgIC8vIOuRkCDtj7Trpqzqs6Qg7KSR7IusIOyijO2RnOulvCDthrXtlbTshJwg67Cp7Zal7J2EIOq1rO2VqeuLiOuLpC5cbiAgICAgICAgY29uc3QgYzEgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczEpOyAvLyBub3QgYSBDb0cgYnV0XG4gICAgICAgIGNvbnN0IGMyID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMyKTsgLy8gaXQncyBvayBmb3IgR0pLIClcblxuICAgICAgICAvLyBpbml0aWFsIGRpcmVjdGlvbiBmcm9tIHRoZSBjZW50ZXIgb2YgMXN0IGJvZHkgdG8gdGhlIGNlbnRlciBvZiAybmQgYm9keVxuICAgICAgICBkID0gVmVjdG9yLnN1YnRyYWN0KGMxLCBjMik7XG5cbiAgICAgICAgaWYgKGQuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEgPSB0aGlzLnN1cHBvcnQyKHZlcnRpY2VzMSwgdmVydGljZXMyLCBkKTtcbiAgICAgICAgYiA9IHRoaXMuc3VwcG9ydDIodmVydGljZXMxLCB2ZXJ0aWNlczIsIGQuaW52ZXJ0KCkpO1xuXG4gICAgICAgIGQgPSBHSksuZ2V0UG9pbnRPblNlZ21lbnRDbG9zZXN0VG9Qb2ludChPUklHSU4sIGEucG9pbnQsIGIucG9pbnQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgREVGQVVMVF9NQVhfSVRFUkFUSU9OUzsgaSsrKSB7XG4gICAgICAgICAgICBkID0gZC5pbnZlcnQoKTtcblxuICAgICAgICAgICAgaWYoZC5sZW5ndGhTcSgpIDw9IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjbG9zZXN0IHBvaW50IGlzIHRoZSBvcmlnaW4gdGhlbiB0aGUgc2hhcGVzIGFyZSBub3Qgc2VwYXJhdGVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjID0gdGhpcy5zdXBwb3J0Mih2ZXJ0aWNlczEsIHZlcnRpY2VzMiwgZCk7XG5cbiAgICAgICAgICAgIGlmIChHSksuY29udGFpbnNPcmlnaW4oYS5wb2ludCwgYi5wb2ludCwgYy5wb2ludCkpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBkb2VzIHRoZW4gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2VlIGlmIHRoZSBuZXcgcG9pbnQgaXMgZmFyIGVub3VnaCBhbG9uZyBkXG4gICAgICAgICAgICBwcm9qZWN0aW9uID0gYy5wb2ludC5kb3QoZCk7XG5cbiAgICAgICAgICAgIGlmICgocHJvamVjdGlvbiAtIGEucG9pbnQuZG90KGQpKSA8IFRPTEVSQU5DRSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZW4gdGhlIG5ldyBwb2ludCB3ZSBqdXN0IG1hZGUgaXMgbm90IGZhciBlbm91Z2hcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZGlyZWN0aW9uIG9mIG4gc28gd2UgY2FuIHN0b3Agbm93XG4gICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplIGRcbiAgICAgICAgICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgICAgICAgICAgc2VwYXJhdGlvbi5ub3JtYWwgPSBkO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSAtYy5wb2ludC5kb3QoZCk7XG4gICAgICAgICAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGEsIGIsIHNlcGFyYXRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwMSA9IEdKSy5nZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50KE9SSUdJTiwgYS5wb2ludCwgYy5wb2ludCk7XG4gICAgICAgICAgICBwMiA9IEdKSy5nZXRQb2ludE9uU2VnbWVudENsb3Nlc3RUb1BvaW50KE9SSUdJTiwgYy5wb2ludCwgYi5wb2ludCk7XG4gICAgICAgICAgICBwMU1hZyA9IHAxLmxlbmd0aFNxKCk7XG4gICAgICAgICAgICBwMk1hZyA9IHAyLmxlbmd0aFNxKCk7XG5cbiAgICAgICAgICAgIGlmIChwMU1hZyA8PSBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSBwMS5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgICAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGEsIGMsIHNlcGFyYXRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwMk1hZyA8PSBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSBwMi5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgICAgICAgICAgR0pLLmZpbmRDbG9zZXN0UG9pbnRzKGMsIGIsIHNlcGFyYXRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocDFNYWcgPCBwMk1hZykge1xuICAgICAgICAgICAgICAgIGIgPSBjO1xuICAgICAgICAgICAgICAgIGQgPSBwMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYSA9IGM7XG4gICAgICAgICAgICAgICAgZCA9IHAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkLm5vcm1hbGl6ZSgpO1xuICAgICAgICBzZXBhcmF0aW9uLm5vcm1hbCA9IGQ7XG4gICAgICAgIHNlcGFyYXRpb24uZGlzdGFuY2UgPSAtYy5wb2ludC5kb3QoZCk7XG4gICAgICAgIEdKSy5maW5kQ2xvc2VzdFBvaW50cyhhLCBiLCBzZXBhcmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvcmlnaW4gaXMgd2l0aGluIHRoZSB0cmlhbmdsZSBnaXZlbiBieVxuICAgICAqIGEsIGIsIGFuZCBjLlxuICAgICAqIDxwPlxuICAgICAqIElmIHRoZSBvcmlnaW4gbGllcyBvbiB0aGUgc2FtZSBzaWRlIG9mIGFsbCB0aGUgcG9pbnRzIHRoZW4gd2VcbiAgICAgKiBrbm93IHRoYXQgdGhlIG9yaWdpbiBpcyBpbiB0aGUgdHJpYW5nbGUuXG4gICAgICogPHByZT4gc2lnbihsb2NhdGlvbihvcmlnaW4sIGEsIGIpKSA9PSBzaWduKGxvY2F0aW9uKG9yaWdpbiwgYiwgYykpID09IHNpZ24obG9jYXRpb24ob3JpZ2luLCBjLCBhKSk8L3ByZT5cbiAgICAgKiBUaGUge0BsaW5rIFNlZ21lbnQjZ2V0TG9jYXRpb24oVmVjdG9yMiwgVmVjdG9yMiwgVmVjdG9yMil9IG1ldGhvZFxuICAgICAqIGNhbiBiZSBzaW1wbGlmaWVkIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIHRoZSBvcmlnaW4gYXMgdGhlIHNlYXJjaCBwb2ludDpcbiAgICAgKiA8cHJlPiA9IChiLnggLSBhLngpICogKG9yaWdpbi55IC0gYS55KSAtIChvcmlnaW4ueCAtIGEueCkgKiAoYi55IC0gYS55KVxuICAgICAqID0gKGIueCAtIGEueCkgKiAoLWEueSkgLSAoLWEueCkgKiAoYi55IC0gYS55KVxuICAgICAqID0gLWEueSAqIGIueCArIGEueSAqIGEueCArIGEueCAqIGIueSAtIGEueCAqIGEueVxuICAgICAqID0gLWEueSAqIGIueCArIGEueCAqIGIueVxuICAgICAqID0gYS54ICogYi55IC0gYS55ICogYi54XG4gICAgICogPSBhLmNyb3NzKGIpPC9wcmU+XG4gICAgICogQHBhcmFtIGEgdGhlIGZpcnN0IHBvaW50XG4gICAgICogQHBhcmFtIGIgdGhlIHNlY29uZCBwb2ludFxuICAgICAqIEBwYXJhbSBjIHRoZSB0aGlyZCBwb2ludFxuICAgICAqIEByZXR1cm4gYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBjb250YWluc09yaWdpbihhLCBiLCBjKSB7XG4gICAgICAgIGNvbnN0IHNhID0gYS5jcm9zcyhiKVxuICAgICAgICAgICAgLCBzYiA9IGIuY3Jvc3MoYylcbiAgICAgICAgICAgICwgc2MgPSBjLmNyb3NzKGEpO1xuICAgICAgICByZXR1cm4gKHNhICogc2IgPiAwICYmIHNhICogc2MgPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgY2xvc2VzdCBwb2ludHMgb24gQSBhbmQgQiBnaXZlbiB0aGUgdGVybWluYXRpb24gc2ltcGxleCBhbmQgcGxhY2VzXG4gICAgICogdGhlbSBpbnRvIHBvaW50MSBhbmQgcG9pbnQyIG9mIHRoZSBnaXZlbiB7QGxpbmsgU2VwYXJhdGlvbn0gb2JqZWN0LlxuICAgICAqIDxwPlxuICAgICAqIFRoZSBzdXBwb3J0IHBvaW50cyB1c2VkIHRvIG9idGFpbiBhIGFuZCBiIGFyZSBub3QgZ29vZCBlbm91Z2ggc2luY2UgdGhlIHN1cHBvcnRcbiAgICAgKiBtZXRob2RzIG9mIHtAbGluayBDb252ZXh9IHtAbGluayBTaGFwZX1zIG9ubHkgcmV0dXJuIHRoZSBmYXJ0aGVzdCA8ZW0+dmVydGV4PC9lbT4sIG5vdFxuICAgICAqIG5lY2Vzc2FyaWx5IHRoZSBmYXJ0aGVzdCBwb2ludC5cbiAgICAgKiBAcGFyYW0gYSB0aGUgZmlyc3Qgc2ltcGxleCBwb2ludFxuICAgICAqIEBwYXJhbSBiIHRoZSBzZWNvbmQgc2ltcGxleCBwb2ludFxuICAgICAqIEBwYXJhbSBzZXBhcmF0aW9uIHRoZSB7QGxpbmsgU2VwYXJhdGlvbn0gb2JqZWN0IHRvIHBvcHVsYXRlXG4gICAgICogQHNlZSA8YSBocmVmPVwiaHR0cDovL3d3dy5keW40ai5vcmcvMjAxMC8wNC9namstZGlzdGFuY2UtY2xvc2VzdC1wb2ludHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R0pLIC0gRGlzdGFuY2UgJmFtcDsgQ2xvc2VzdCBQb2ludHM8L2E+XG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDbG9zZXN0UG9pbnRzKGEsIGIsIHNlcGFyYXRpb24pXG4gICAge1xuICAgICAgICBjb25zdCBwMSA9IG5ldyBWZWN0b3IoKVxuICAgICAgICAgICAgLCBwMiA9IG5ldyBWZWN0b3IoKVxuICAgICAgICAgICAgLCBsID0gVmVjdG9yLnN1YnRyYWN0KGEucG9pbnQsIGIucG9pbnQpO1xuXG4gICAgICAgIGlmIChsLmlzWmVybygpKSB7XG4gICAgICAgICAgICBwMS5zZXQoYS5zdXBwb3J0UG9pbnQxKTtcbiAgICAgICAgICAgIHAyLnNldChhLnN1cHBvcnRQb2ludDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGwgPSBsLmRvdChsKVxuICAgICAgICAgICAgICAgICwgbDIgPSAtbC5kb3QoYS5wb2ludCkgLyBsbFxuICAgICAgICAgICAgICAgICwgbDEgPSAxIC0gbDI7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGVpdGhlciBsYW1iZGExIG9yIGxhbWJkYTIgaXMgbGVzcyB0aGFuIHplcm9cbiAgICAgICAgICAgIGlmIChsMSA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBsYW1iZGExIGlzIGxlc3MgdGhhbiB6ZXJvIHRoZW4gdGhhdCBtZWFucyB0aGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHN1cHBvcnQgcG9pbnRzIG9mIHRoZSBNaW5rb3dza2kgcG9pbnQgQiBhcmVcbiAgICAgICAgICAgICAgICAvLyB0aGUgY2xvc2VzdCBwb2ludHNcbiAgICAgICAgICAgICAgICBwMS5zZXQoYi5zdXBwb3J0UG9pbnQxKTtcbiAgICAgICAgICAgICAgICBwMi5zZXQoYi5zdXBwb3J0UG9pbnQyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobDIgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbGFtYmRhMiBpcyBsZXNzIHRoYW4gemVybyB0aGVuIHRoYXQgbWVhbnMgdGhhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSBzdXBwb3J0IHBvaW50cyBvZiB0aGUgTWlua293c2tpIHBvaW50IEEgYXJlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGNsb3Nlc3QgcG9pbnRzXG4gICAgICAgICAgICAgICAgcDEuc2V0KGEuc3VwcG9ydFBvaW50MSk7XG4gICAgICAgICAgICAgICAgcDIuc2V0KGEuc3VwcG9ydFBvaW50Mik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGUgdGhlIGNsb3Nlc3QgcG9pbnRzIHVzaW5nIGxhbWJkYTEgYW5kIGxhbWJkYTJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBleHBhbmRlZCB2ZXJzaW9uIG9mXG4gICAgICAgICAgICAgICAgLy8gcDEgPSBhLnAxLm11bHRpcGx5KGwxKS5hZGQoYi5wMS5tdWx0aXBseShsMikpO1xuICAgICAgICAgICAgICAgIC8vIHAyID0gYS5wMi5tdWx0aXBseShsMSkuYWRkKGIucDIubXVsdGlwbHkobDIpKTtcbiAgICAgICAgICAgICAgICBwMS54ID0gYS5zdXBwb3J0UG9pbnQxLnggKiBsMSArIGIuc3VwcG9ydFBvaW50MS54ICogbDI7XG4gICAgICAgICAgICAgICAgcDEueSA9IGEuc3VwcG9ydFBvaW50MS55ICogbDEgKyBiLnN1cHBvcnRQb2ludDEueSAqIGwyO1xuICAgICAgICAgICAgICAgIHAyLnggPSBhLnN1cHBvcnRQb2ludDIueCAqIGwxICsgYi5zdXBwb3J0UG9pbnQyLnggKiBsMjtcbiAgICAgICAgICAgICAgICBwMi55ID0gYS5zdXBwb3J0UG9pbnQyLnkgKiBsMSArIGIuc3VwcG9ydFBvaW50Mi55ICogbDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IHRoZSBuZXcgcG9pbnRzIGluIHRoZSBzZXBhcmF0aW9uIG9iamVjdFxuICAgICAgICBzZXBhcmF0aW9uLnBvaW50MSA9IHAxO1xuICAgICAgICBzZXBhcmF0aW9uLnBvaW50MiA9IHAyO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9zZXN0UG9pbnRUb09yaWdpbihhLCBiKVxuICAgIHtcbiAgICAgICAgY29uc3QgYWIgPSBhLnRvKGIpXG4gICAgICAgICAgICAsIGFvID0gYS50byhuZXcgVmVjdG9yKCkpXG4gICAgICAgICAgICAsIHByb2pBb09udG9BYiA9IGFvLmRvdChhYilcbiAgICAgICAgICAgICwgbGVuZ3RoU3F1YXJlZCA9IGFiLmRvdChhYilcbiAgICAgICAgICAgICwgdCA9IHByb2pBb09udG9BYiAvIGxlbmd0aFNxdWFyZWRcbiAgICAgICAgICAgICwgY2xvc2V0UG9pbnQgPSBWZWN0b3IubXVsdGlwbHlTY2FsYXIoYWIsIHQpLmFkZChhKVxuICAgICAgICAgICAgLCBkID0gY2xvc2V0UG9pbnQubWFnbml0dWRlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtwb2ludDogY2xvc2V0UG9pbnQsIGRlcHRoOiBkfTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBvaW50IG9uIHRoZSBnaXZlbiBsaW5lIHNlZ21lbnQgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAgICogPHA+XG4gICAgICogSWYgdGhlIHBvaW50IGNsb3Nlc3QgdG8gdGhlIGdpdmVuIHBvaW50IGlzIG9uIHRoZSBsaW5lIGNyZWF0ZWQgYnkgdGhlXG4gICAgICogZ2l2ZW4gbGluZSBzZWdtZW50LCBidXQgaXMgbm90IG9uIHRoZSBsaW5lIHNlZ21lbnQgdGhlbiBlaXRoZXIgb2YgdGhlIHNlZ21lbnRzXG4gICAgICogZW5kIHBvaW50cyB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIDxwPlxuICAgICAqIEFzc3VtZXMgYWxsIHBvaW50cyBhcmUgaW4gd29ybGQgc3BhY2UuXG4gICAgICogQHNlZSBTZWdtZW50I2dldFBvaW50T25MaW5lQ2xvc2VzdFRvUG9pbnQoVmVjdG9yMiwgVmVjdG9yMiwgVmVjdG9yMilcbiAgICAgKiBAcGFyYW0gcG9pbnQgdGhlIHBvaW50XG4gICAgICogQHBhcmFtIGxpbmVQb2ludDEgdGhlIGZpcnN0IHBvaW50IG9mIHRoZSBsaW5lXG4gICAgICogQHBhcmFtIGxpbmVQb2ludDIgdGhlIHNlY29uZCBwb2ludCBvZiB0aGUgbGluZVxuICAgICAqIEByZXR1cm4ge0BsaW5rIFZlY3RvcjJ9XG4gICAgICogQHRocm93cyBOdWxsUG9pbnRlckV4Y2VwdGlvbiBpZiBwb2ludCwgbGluZVBvaW50MSwgb3IgbGluZVBvaW50MiBpcyBudWxsXG4gICAgICovXG4gICAgc3RhdGljIGdldFBvaW50T25TZWdtZW50Q2xvc2VzdFRvUG9pbnQocG9pbnQsIGxpbmVQb2ludDEsIGxpbmVQb2ludDIpXG4gICAge1xuICAgICAgICAvLyBjcmVhdGUgYSB2ZWN0b3IgZnJvbSB0aGUgcG9pbnQgdG8gdGhlIGZpcnN0IGxpbmUgcG9pbnRcbiAgICAgICAgY29uc3QgcDFUb1AgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnQsIGxpbmVQb2ludDEpXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsaW5lXG4gICAgICAgICAgICAsIGxpbmUgPSBWZWN0b3Iuc3VidHJhY3QobGluZVBvaW50MiwgbGluZVBvaW50MSlcbiAgICAgICAgICAgIC8vIGdldCB0aGUgbGVuZ3RoIHNxdWFyZWQgb2YgdGhlIGxpbmVcbiAgICAgICAgICAgICwgYWIyID0gbGluZS5kb3QobGluZSlcbiAgICAgICAgICAgICwgYXBfYWIgPSBwMVRvUC5kb3QobGluZSk7XG5cbiAgICAgICAgaWYgKGFiMiA8PSBUT0xFUkFOQ0UpIHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lUG9pbnQxLmNsb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdCA9IGFwX2FiIC8gYWIyO1xuICAgICAgICB0ID0gY2xhbXAodCwgMC4wLCAxLjApO1xuICAgICAgICByZXR1cm4gbGluZS5tdWx0aXBseVNjYWxhcih0KS5hZGQobGluZVBvaW50MSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3JlYXRlQ29udmV4SHVsbChwb2ludHMpXG4gICAge1xuICAgICAgICAvLyBGaW5kIHRoZSByaWdodCBtb3N0IHBvaW50IG9uIHRoZSBodWxsXG4gICAgICAgIHZhciBpMCA9IDA7XG4gICAgICAgIHZhciB4MCA9IHBvaW50c1swXS54O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGlmICh4ID4geDAgfHwgKHggPT0geDAgJiYgcG9pbnRzW2ldLnkgPCBwb2ludHNbaTBdLnkpKSB7XG4gICAgICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGh1bGwgPSBbXTtcbiAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICB2YXIgaWggPSBpMDtcblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaHVsbFttXSA9IGloO1xuXG4gICAgICAgICAgICB2YXIgaWUgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWUgPT0gaWgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgciA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbaWVdLCBwb2ludHNbaHVsbFttXV0pO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gVmVjdG9yLnN1YnRyYWN0KHBvaW50c1tqXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IFZlY3Rvci5jcm9zcyhyLCB2KTtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWUgPSBqO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbGxpbmVhcml0eSBjaGVja1xuICAgICAgICAgICAgICAgIGlmIChjID09IDAgJiYgdi5sZW5ndGhTcSgpID4gci5sZW5ndGhTcSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgIGloID0gaWU7XG5cbiAgICAgICAgICAgIGlmIChpZSA9PSBpMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29weSB2ZXJ0aWNlc1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaHVsbFtpXV07XG4gICAgICAgICAgICBuZXdQb2ludHMucHVzaChuZXcgVmVjdG9yKHBvaW50LngsIHBvaW50LnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQb2ludHM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbWlkcG9pbnQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKChhLnggKyBiLngpIC8gMiwgKGEueSArIGIueSkgLyAyKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgaWYgKHZhbHVlIDw9IG1heCAmJiB2YWx1ZSA+PSBtaW4pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSBpZiAobWF4IDwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkZWJ1Z1ZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKGluZGV4LCB2ZXJ0ZXgueCwgdmVydGV4LnkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb25zb2xlVmVydGljZXModmVydGljZXMxLCB2ZXJ0aWNlczIpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczEnKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGRlYnVnVmVydGljZXModmVydGljZXMxKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczInKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIGRlYnVnVmVydGljZXModmVydGljZXMyKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xufVxuXG5mdW5jdGlvbiBzdHIodmVydGV4LCBpc0ZpeGVkID0gZmFsc2UpIHtcbiAgICBpZiAoaXNGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGAoJHt2ZXJ0ZXgueH0sJHt2ZXJ0ZXgueX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGAoJHt2ZXJ0ZXgueC50b0ZpeGVkKDIpfSwke3ZlcnRleC55LnRvRml4ZWQoMil9KWA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL0dKSy5qcyIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5rb3dza2lTdW1Qb2ludCB7XG4gICAgY29uc3RydWN0b3Ioc3VwcG9ydFBvaW50MSwgc3VwcG9ydFBvaW50Mikge1xuICAgICAgICB0aGlzLnN1cHBvcnRQb2ludDEgPSBzdXBwb3J0UG9pbnQxO1xuICAgICAgICB0aGlzLnN1cHBvcnRQb2ludDIgPSBzdXBwb3J0UG9pbnQyO1xuICAgICAgICB0aGlzLnBvaW50ID0gVmVjdG9yLnN1YnRyYWN0KHN1cHBvcnRQb2ludDEsIHN1cHBvcnRQb2ludDIpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL01pbmtvd3NraVN1bVBvaW50LmpzIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uLy4uL3NyYy9zYXQvUG9pbnQnO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi8uLi9zcmMvc2F0L0NpcmNsZSc7XG5pbXBvcnQgUG9seWdvbiBmcm9tICcuLi8uLi9zcmMvc2F0L1BvbHlnb24nO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi8uLi9zcmMvVmVjdG9yJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYWludGVyJztcbmltcG9ydCBNb3VzZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMvTW91c2UnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlJztcblxuY29uc3QgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpXG4gICAgLCBkZWJ1Z0dyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICwgc2hhcGVzID0gW11cbiAgICAsIExJTkVfQ09MT1IgPSAweDg0RDJGNlxuICAgICwgQVJST1dfQ09MT1IgPSAweEU1NzM3MztcblxubGV0IHBvbHlnb25Qb2ludHMgPSBbXG4gICAgW25ldyBQb2ludCgzNTAsIDM1MCksIG5ldyBQb2ludCgzNTAsIDUwMCksIG5ldyBQb2ludCg1MDAsIDUwMCldLFxuICAgIFtuZXcgUG9pbnQoNTAwLCAyMDApLCBuZXcgUG9pbnQoNDgwLCAyNTApLCBuZXcgUG9pbnQoNjAwLCAyNTApLCBuZXcgUG9pbnQoNjIwLCAyMDApXSxcbiAgICBbbmV3IFBvaW50KDI1OCwgMTIwKSwgbmV3IFBvaW50KDI5NSwgMjMwKSwgbmV3IFBvaW50KDIwMCwgMzAwKSwgbmV3IFBvaW50KDEwNSwgMjMwKSwgbmV3IFBvaW50KDE0MiwgMTIwKV1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lclxue1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB3aW5kb3dbJ2cnXSA9IGRlYnVnR3JhcGhpY3M7XG5cbiAgICAgICAgdGhpcy5pc0luaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG5cbiAgICBpbml0aWFsaXplKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChncmFwaGljcyk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZGVidWdHcmFwaGljcyk7XG5cbiAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludCA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICB0aGlzLmxhc3RkcmFnID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy90aGlzLmNyZWF0ZVBvbHlnb24oKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQb2x5Z29uTWFudWFsKCk7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIGFkZEV2ZW50KClcbiAgICB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm9uKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcbiAgICAgICAgdGhpcy5vbignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMub24oJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlKCkge31cblxuXG4gICAgcmVzaXplKClcbiAgICB7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cblxuICAgIGdldFBvbHlnb25Qb2ludHModHgsIHR5LCBhbmdsZSwgcmFkaXVzID0gMTAwKVxuICAgIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG5cbiAgICAgICAgLy8gbWFraW5nIHBvaW50cywgcGF0aFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuZ2xlOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgeCA9IHR4ICsgKHJhZGl1cyAqIC1NYXRoLnNpbih0aGlzLnRvUmFkaWFuKDM2MCAvIGFuZ2xlICogaSkpKTtcbiAgICAgICAgICAgIGxldCB5ID0gdHkgKyAocmFkaXVzICogIE1hdGguY29zKHRoaXMudG9SYWRpYW4oMzYwIC8gYW5nbGUgKiBpKSkpO1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gbmV3IFBJWEkuUG9pbnQoeCwgeSk7XG4gICAgICAgICAgICBwb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cblxuXG4gICAgdG9SYWRpYW4oZGVncmVlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGRlZ3JlZSAqIE1hdGguUEkgLyAxODA7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQb2x5Z29uKHVzZVJhbmRvbVJvdGF0ZSA9IGZhbHNlKVxuICAgIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvbHlnb25Qb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwb2x5Z29uID0gbmV3IFBvbHlnb24oY29udGV4dCksXG4gICAgICAgICAgICAgICAgcG9pbnRzID0gcG9seWdvblBvaW50c1tpXTtcblxuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcG9seWdvbi5hZGRQb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXNlUmFuZG9tUm90YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVTaGFwZShwb2x5Z29uLCBNYXRoLnJhbmRvbSgpICogNDUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGFwZXMucHVzaChwb2x5Z29uKTtcblxuICAgICAgICAgICAgcG9seWdvbi5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY3JlYXRlUG9seWdvbk1hbnVhbCgpXG4gICAge1xuICAgICAgICBsZXQgcmFkaXVzID0gMTAwLFxuICAgICAgICAgICAgZGlhbWV0ZXIgPSAyMDAsXG4gICAgICAgICAgICBzcGFjZSA9IDIwLFxuICAgICAgICAgICAgYSA9IHJhZGl1cyArIHNwYWNlLFxuICAgICAgICAgICAgYiA9IHJhZGl1cyArIGRpYW1ldGVyICsgc3BhY2UgKiAyLFxuICAgICAgICAgICAgYyA9IHJhZGl1cyArIGRpYW1ldGVyICogMiArIHNwYWNlICogMztcblxuICAgICAgICBwb2x5Z29uUG9pbnRzID0gW107XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYSwgMykpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGEsIDQpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhjLCBhLCA1KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYiwgNikpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGIsIDcpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhjLCBiLCA4KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYywgOSkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGMsIDEwKSk7XG4gICAgICAgIHRoaXMuYWRkQ2lyY2xlKGMsIGMsIHJhZGl1cyk7XG4gICAgICAgIC8vdGhpcy5hZGRDaXJjbGUoYywgYywgcmFkaXVzKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVBvbHlnb24odHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBhZGRQb2x5Z29uKGluZGV4LCB1c2VSYW5kb21Sb3RhdGUgPSB0cnVlKVxuICAgIHtcbiAgICAgICAgbGV0IHBvbHlnb24gPSBuZXcgUG9seWdvbih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGxldCBwb2ludHMgPSBwb2x5Z29uUG9pbnRzW2luZGV4XTtcblxuICAgICAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgIHBvbHlnb24uYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1c2VSYW5kb21Sb3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU2hhcGUocG9seWdvbiwgKE1hdGgucmFuZG9tKCkgKiA0NSkgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvbHlnb24uY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIHNoYXBlcy5wdXNoKHBvbHlnb24pO1xuICAgIH1cblxuXG4gICAgYWRkQ2lyY2xlKHgsIHksIHJhZGl1cylcbiAgICB7XG4gICAgICAgIGxldCBjaXJjbGUgPSBuZXcgQ2lyY2xlKHRoaXMuY29udGV4dCwgeCwgeSwgcmFkaXVzKTtcbiAgICAgICAgY2lyY2xlLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICBzaGFwZXMucHVzaChjaXJjbGUpO1xuICAgICAgICB0aGlzLmNpcmNsZSA9IGNpcmNsZTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVJlbmRlcigpXG4gICAge1xuICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgIHNoYXBlcy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBwb2x5Z29uLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGRldGVjdENvbGxpc2lvbnMoKVxuICAgIHtcbiAgICAgICAgbGV0IGRyYWdTaGFwZSA9IHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQ7XG5cbiAgICAgICAgaWYgKCFkcmFnU2hhcGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoc2hhcGUgIT09IGRyYWdTaGFwZSkge1xuICAgICAgICAgICAgICAgIGxldCBtdHYgPSBkcmFnU2hhcGUuY29sbGlkZXNXaXRoKHNoYXBlKTtcblxuICAgICAgICAgICAgICAgIC8vIOy2qeuPjCDtjJDsoJVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25EZXRlY3RlZChtdHYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVNoYXBlQnlNVFYobXR2LCBkcmFnU2hhcGUsIHNoYXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogbXR266GcIOy2qeuPjCDtjJDsoJVcbiAgICAgKiBAcGFyYW0gbXR2XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY29sbGlzaW9uRGV0ZWN0ZWQobXR2KVxuICAgIHtcbiAgICAgICAgLy8g7Lap64+MIO2MkOyglVxuICAgICAgICBpZiAobXR2LmF4aXMgIT0gdW5kZWZpbmVkIHx8IG10di5vdmVybGFwICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjaGVja01UVkF4aXNEaXJlY3Rpb24obXR2LCBjb2xsaWRlciwgY29sbGlkZWUpXG4gICAge1xuICAgICAgICBpZiAobXR2LmF4aXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgY29sbGlkZXJDZW50ZXIgPSBWZWN0b3IuZnJvbU9iamVjdChjb2xsaWRlci5nZXRDZW50ZXIoKSksXG4gICAgICAgICAgICBjb2xsaWRlZUNlbnRlciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNvbGxpZGVlLmdldENlbnRlcigpKSxcbiAgICAgICAgICAgIGNlbnRlclZlY3RvciA9IGNvbGxpZGVlQ2VudGVyLnN1YnRyYWN0KGNvbGxpZGVyQ2VudGVyKSxcbiAgICAgICAgICAgIGNlbnRlclVuaXRWZWN0b3IgPSBWZWN0b3IuZnJvbU9iamVjdChjZW50ZXJWZWN0b3IpLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIGlmIChjZW50ZXJVbml0VmVjdG9yLmRvdFByb2R1Y3QobXR2LmF4aXMpID4gMCkge1xuICAgICAgICAgICAgbXR2LmF4aXMueCA9IC1tdHYuYXhpcy54O1xuICAgICAgICAgICAgbXR2LmF4aXMueSA9IC1tdHYuYXhpcy55O1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbXR2XG4gICAgICogQHBhcmFtIGNvbGxpZGVyIOy2qeuPjO2VnCDqsJ3ssrRcbiAgICAgKiBAcGFyYW0gY29sbGlkZWUg7Lap64+M7J2EIOuLue2VnCDqsJ3ssrRcbiAgICAgKi9cbiAgICBtb3ZlU2hhcGVCeU1UVihtdHYsIGNvbGxpZGVyLCBjb2xsaWRlZSlcbiAgICB7XG4gICAgICAgIGlmIChtdHYuYXhpcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtdHYuYXhpcyA9IG5ldyBWZWN0b3IoMSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZHggPSBtdHYuYXhpcy54ICogbXR2Lm92ZXJsYXAsXG4gICAgICAgICAgICBkeSA9IG10di5heGlzLnkgKiBtdHYub3ZlcmxhcDtcblxuICAgICAgICBsZXQgZHJhZ1ZlY3RvciA9IHRoaXMuZHJhZ1ZlY3RvcixcbiAgICAgICAgICAgIGNlbnRlckNvbGxpZGVyID0gY29sbGlkZXIuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICBjZW50ZXJDb2xsaWRlZSA9IGNvbGxpZGVlLmdldENlbnRlcigpLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcihjZW50ZXJDb2xsaWRlZS54IC0gY2VudGVyQ29sbGlkZXIueCwgY2VudGVyQ29sbGlkZWUueSAtIGNlbnRlckNvbGxpZGVyLnkpLFxuICAgICAgICAgICAgZGlyZWN0aW9uTm9ybSA9IGRpcmVjdGlvbi5ub3JtKCksXG4gICAgICAgICAgICBvdmVybGFwVmVjdG9yID0gbmV3IFZlY3RvcihkeCwgZHkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDrgrTsoIHsnbQgLTHsnbTrqbQg67CY64yAIOuwqe2WpeydhCDrs7TripQg6rKDXG4gICAgICAgICAqIOuCtOyggeydtCAw7J2066m0IOyImOyngVxuICAgICAgICAgKiDrgrTsoIHsnbQgMeyduCDqsr3smrAg6rCZ7J2AIOuwqe2WpeydhCDqsIDrpqztgqTripQg6rKDXG4gICAgICAgICAqIOuCtOyggeydtCA+IDAuOCDri6TrqbQg6rCZ7J2AIOuwqe2WpeydhCDrs7Tqs6Ag7J6I64qUIOyDge2DnFxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRvdCA9IGRyYWdWZWN0b3IuZG90UHJvZHVjdChvdmVybGFwVmVjdG9yKTtcblxuICAgICAgICBpZiAoZG90IDwgMCkge1xuICAgICAgICAgICAgZHggPSAtZHg7XG4gICAgICAgICAgICBkeSA9IC1keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjID0gY29sbGlkZWUuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICB0byA9IG5ldyBWZWN0b3IoZHgsIGR5KSxcbiAgICAgICAgICAgIHRvTm9ybWFsaXplID0gdG8uY2xvbmUoKS5ub3JtKCksXG4gICAgICAgICAgICBkb3RUbyA9IGRpcmVjdGlvbk5vcm0uZG90UHJvZHVjdCh0b05vcm1hbGl6ZSksXG4gICAgICAgICAgICBjZW50ZXIgPSBuZXcgVmVjdG9yKGMueCwgYy55KTtcbiAgICAgICAgdG8gPSBjZW50ZXIuY2xvbmUoKS5zdWJ0cmFjdCh0byk7XG5cbiAgICAgICAgLy8g65GQIOqwneyytOydmCDrsKntlqUg67Kh7YSw7JmAIOuwgOyWtOuCtOuKlCDrsLHthLAodG8p7J2YIOuCtOyggeydtCAw67O064ukIO2BtCDqsr3smrAsIOymiSDrsIDslrQg64K064qUIOuwqe2WpeydtCDrsIDslrTrgrTripQg67Cp7Zal7J28IOuVjOunjCDsoIHsmqlcbiAgICAgICAgaWYgKGRvdFRvID49IDApIHtcbiAgICAgICAgICAgIFBhaW50ZXIuZHJhd0Fycm93KHdpbmRvdy5nLCBjZW50ZXIsIHRvLCBmYWxzZSwgMSwgQVJST1dfQ09MT1IpO1xuICAgICAgICAgICAgLy9QYWludGVyLmRyYXdQb2ludCh3aW5kb3cuZywgdGhpcy5jaXJjbGUuZ2V0Q2VudGVyKCksIGZhbHNlLCAxMCwgMHhmZjMzMDAsIDAuMik7XG4gICAgICAgICAgICBjb2xsaWRlZS5tb3ZlKGR4LCBkeSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJvdGF0ZVNoYXBlKHNoYXBlLCBkZWdyZWVzKVxuICAgIHtcbiAgICAgICAgLy9kZWdyZWVzID0gOTA7XG4gICAgICAgIGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cbiAgICAgICAgaWYgKHBvaW50cykge1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHNoYXBlLmdldENlbnRlcigpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCAgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldID0gdGhpcy5yb3RhdGlvblBvaW50KGNlbnRlciwgcG9pbnQsIGRlZ3JlZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDtmozsoITtlZjripQg7KKM7ZGcIOq1rO2VmOq4sFxuICAgICAqIEBwYXJhbSBwaXZvdCDsgqzqsIHtmJXsnZgg7KSR7Ius7KCQXG4gICAgICogQHBhcmFtIHBvaW50IOqzhOyCsO2VmOqzoCDsi7bsnYAg7Y+s7J247Yq4XG4gICAgICogQHBhcmFtIGRlZ3JlZXMg7ZqM7KCE6rCBIGRlZ3JlZXNcbiAgICAgKiBAcmV0dXJucyB7e3g6IChudW1iZXJ8KiksIHk6IChudW1iZXJ8Kil9fVxuICAgICAqL1xuICAgIHJvdGF0aW9uUG9pbnQocGl2b3QsIHBvaW50LCBkZWdyZWVzKVxuICAgIHtcbiAgICAgICAgbGV0IGRpZmZYID0gcG9pbnQueCAtIHBpdm90Lng7XG4gICAgICAgIGxldCBkaWZmWSA9IHBvaW50LnkgLSBwaXZvdC55O1xuICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSk7XG4gICAgICAgIGxldCBjYSA9IE1hdGguYXRhbjIoZGlmZlksIGRpZmZYKSAqICgxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgbGV0IG5hID0gKChjYSArIGRlZ3JlZXMpICUgMzYwKSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IHggPSAocGl2b3QueCArIGRpc3QgKiBNYXRoLmNvcyhuYSkgKyAwLjUpIHwgMDtcbiAgICAgICAgbGV0IHkgPSAocGl2b3QueSArIGRpc3QgKiBNYXRoLnNpbihuYSkgKyAwLjUpIHwgMDtcbiAgICAgICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcbiAgICB9XG5cblxuICAgIG9uTW91c2VEb3duKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gVmVjdG9yLmZyb21PYmplY3QoTW91c2UuZ2xvYmFsKTtcblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGFwZS5pc1BvaW50SW5QYXRoKGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludC54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludC55ID0gY3VycmVudFBvaW50Lnk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy55ID0gY3VycmVudFBvaW50Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgb25Nb3VzZU1vdmUoKVxuICAgIHtcbiAgICAgICAgZGVidWdHcmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgIGxldCBjdXJyZW50UG9pbnQsIGRyYWdWZWN0b3I7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQb2ludCA9IFZlY3Rvci5mcm9tT2JqZWN0KE1vdXNlLmdsb2JhbCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ1ZlY3RvciA9IGRyYWdWZWN0b3IgPSBjdXJyZW50UG9pbnQuY2xvbmUoKS5zdWJ0cmFjdCh0aGlzLmxhc3RkcmFnKTtcblxuICAgICAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZC5tb3ZlKGRyYWdWZWN0b3IueCwgZHJhZ1ZlY3Rvci55KTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnkgPSBjdXJyZW50UG9pbnQueTtcblxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlVXAoKVxuICAgIHtcbiAgICAgICAgZGVidWdHcmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vXG4gICAgLy8gVGVzdCDtlajsiJhcbiAgICAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgIG9uS2V5VXAoZSlcbiAgICB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRVNDQVBFOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTlVNQkVSXzE6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5OVU1CRVJfMjpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9zYXQvVGVzdC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50XG57XG4gICAgY29uc3RydWN0b3IoeCwgeSlcbiAgICB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvUG9pbnQuanMiLCJpbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tICcuL1Byb2plY3Rpb24nO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgU2hhcGVcbntcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB4LCB5LCByYWRpdXMpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9ICdDaXJjbGUnO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOykkeygkCDsooztkZwg67CY7ZmYXG4gICAgICogQHJldHVybnMge1BJWEkuUG9pbnR8KnxzdmcuUG9pbnR9XG4gICAgICovXG4gICAgZ2V0Q2VudGVyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUElYSS5Qb2ludCh0aGlzLngsdGhpcy55KTtcbiAgICB9XG5cblxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIGlmIChzaGFwZS5yYWRpdXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShzaGFwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaXJjbGVDb2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIHZhciBheGVzID0gc2hhcGUuZ2V0QXhlcygpLCBkaXN0YW5jZTtcblxuICAgICAgICBpZiAoYXhlcyA9PT0gdW5kZWZpbmVkKSB7IC8v7JuQXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhzaGFwZS54IC0gdGhpcy54LCAyKSArXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coc2hhcGUueSAtIHRoaXMueSwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgTWF0aC5hYnModGhpcy5yYWRpdXMgKyBzaGFwZS5yYWRpdXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShzaGFwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgKi9cblxuXG4gICAgZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSlcbiAgICB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY2lyY2xlVmVjdG9yID0gVmVjdG9yLmZyb21PYmplY3QoY2lyY2xlKSxcbiAgICAgICAgICAgIGxlbmd0aCwgdGVzdFBvaW50VmVjdG9yLCBjbG9zZXN0UG9pbnQ7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgcG9seWdvbi5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3RQb2ludFZlY3RvciA9IFZlY3Rvci5mcm9tT2JqZWN0KHBvbHlnb24ucG9pbnRzW2ldKTtcbiAgICAgICAgICAgIHRlc3RQb2ludFZlY3Rvci5pbmRleCA9IGk7XG4gICAgICAgICAgICBsZW5ndGggPSB0ZXN0UG9pbnRWZWN0b3IuY2xvbmUoKS5kaXN0YW5jZShjaXJjbGUpO1xuXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gbGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHRlc3RQb2ludFZlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0UG9pbnQuY2xvbmUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLpOqwge2YleqzvCDsm5DtmJUg7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGNpcmNsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIC8qcG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShwb2x5Z29uLCBjaXJjbGUpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGF4ZXMgPSBwb2x5Z29uLmdldEF4ZXMoKSxcbiAgICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHRoaXMuZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSk7XG5cbiAgICAgICAgYXhlcy5wdXNoKHRoaXMuZ2V0Q2lyY2xlQXhpcyhjaXJjbGUsIGNsb3Nlc3RQb2ludCkpO1xuXG4gICAgICAgIHJldHVybiAhcG9seWdvbi5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIGNpcmNsZSk7XG4gICAgfSovXG5cblxuICAgIGdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpXG4gICAge1xuICAgICAgICB2YXIgdjEgPSBuZXcgVmVjdG9yKGNpcmNsZS54LCBjaXJjbGUueSksXG4gICAgICAgICAgICB2MiA9IG5ldyBWZWN0b3IoY2xvc2VzdFBvaW50LngsIGNsb3Nlc3RQb2ludC55KSxcbiAgICAgICAgICAgIHN1cmZhY2VWZWN0b3IgPSB2MS5zdWJ0cmFjdCh2Mik7XG5cbiAgICAgICAgUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIGNsb3Nlc3RQb2ludCwgZmFsc2UsIDUsIDB4ZmYzMzAwLCAwLjMpO1xuICAgICAgICAvL1BhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsIFZlY3Rvci5mcm9tT2JqZWN0KGNpcmNsZSksIFZlY3Rvci5mcm9tT2JqZWN0KGNsb3Nlc3RQb2ludCksIGZhbHNlLCAxLCAweGZmMzMwMCwgMC4zKTtcblxuICAgICAgICByZXR1cm4gc3VyZmFjZVZlY3Rvci5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIHByb2plY3QoYXhpcylcbiAgICB7XG4gICAgICAgIGxldCBzY2FsYXJzID0gW10sXG4gICAgICAgICAgICBwb2ludCA9IG5ldyBQSVhJLlBvaW50KHRoaXMueCwgdGhpcy55KSxcbiAgICAgICAgICAgIHBvaW50VmVjdG9yID0gbmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSxcbiAgICAgICAgICAgIGRvdFByb2R1Y3QgPSBwb2ludFZlY3Rvci5kb3RQcm9kdWN0KGF4aXMpO1xuXG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0KTtcbiAgICAgICAgc2NhbGFycy5wdXNoKGRvdFByb2R1Y3QgKyB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0IC0gdGhpcy5yYWRpdXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdGlvbihcbiAgICAgICAgICAgIE1hdGgubWluLmFwcGx5KE1hdGgsIHNjYWxhcnMpLFxuICAgICAgICAgICAgTWF0aC5tYXguYXBwbHkoTWF0aCwgc2NhbGFycylcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGdldEF4ZXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBhdGgoZ3JhcGhpY3MsIGxpbmVDb2xvciA9IDB4RkZGRkZGKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGxpbmVDb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh0aGlzLnggKyB0aGlzLnJhZGl1cywgdGhpcy55KTtcbiAgICAgICAgZ3JhcGhpY3MuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICB9XG5cblxuICAgIG1vdmUoZHgsIGR5KVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IGR4O1xuICAgICAgICB0aGlzLnkgKz0gZHk7XG4gICAgfVxuXG5cbiAgICBpc1BvaW50SW5QYXRoKHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICBjb25zdCBpc1BvaW50SW5QYXRoID0gdGhpcy5jb250ZXh0LmlzUG9pbnRJblBhdGgoeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiBpc1BvaW50SW5QYXRoO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9DaXJjbGUuanMiLCJpbXBvcnQgTVRWIGZyb20gJy4vTVRWJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBtaW5pbXVtVHJhbnNsYXRpb25WZWN0b3IoYXhlcywgc2hhcGUpIHtcbiAgICAgICAgdmFyIG1pbmltdW1PdmVybGFwID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG92ZXJsYXAsIGF4aXNXaXRoU21hbGxlc3RPdmVybGFwLFxuICAgICAgICAgICAgYXhpcywgcHJvamVjdGlvbjEsIHByb2plY3Rpb24yO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYXhpcyA9IGF4ZXNbaV07XG4gICAgICAgICAgICBwcm9qZWN0aW9uMSA9IHNoYXBlLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICBwcm9qZWN0aW9uMiA9IHRoaXMucHJvamVjdChheGlzKTtcbiAgICAgICAgICAgIG92ZXJsYXAgPSBwcm9qZWN0aW9uMS5nZXRPdmVybGFwKHByb2plY3Rpb24yKTtcblxuICAgICAgICAgICAgLypQYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLFxuICAgICAgICAgICAgICAgIHt4OmF4aXMueCAqIHByb2plY3Rpb24xLm1pbiwgeTpheGlzLnkgKiBwcm9qZWN0aW9uMS5taW59LFxuICAgICAgICAgICAgICAgIHt4OmF4aXMueCAqIHByb2plY3Rpb24yLm1heCwgeTpheGlzLnkgKiBwcm9qZWN0aW9uMi5tYXh9LFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApOyovXG5cbiAgICAgICAgICAgIGlmIChvdmVybGFwID09PSAwKSB7IC8v7Lap64+MIOyXhuyKtC5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1UVigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvdmVybGFwIDwgbWluaW11bU92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bU92ZXJsYXAgPSBvdmVybGFwO1xuICAgICAgICAgICAgICAgICAgICBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCA9IGF4aXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBNVFYobWluaW11bU92ZXJsYXAsIGF4aXNXaXRoU21hbGxlc3RPdmVybGFwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuRkCDri6TqsIHtmJUg7IKs7J207JeQ7IScIOy2qeuPjFxuICAgICAqIEBwYXJhbSBwMVxuICAgICAqIEBwYXJhbSBwMlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uKHAxLCBwMikge1xuICAgICAgICB2YXIgbXR2MSA9IHAxLm1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihwMS5nZXRBeGVzKCksIHAyKSxcbiAgICAgICAgICAgIG10djIgPSBwMS5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IocDIuZ2V0QXhlcygpLCBwMik7XG5cbiAgICAgICAgaWYgKG10djEub3ZlcmxhcCA9PT0gMCAmJiBtdHYyLm92ZXJsYXAgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTVRWKDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG10djEub3ZlcmxhcCA8IG10djIub3ZlcmxhcCA/IG10djEgOiBtdHYyO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrkZAg7JuQ7ZiV7JeQIOuMgO2VnCDstqnrj4xcbiAgICAgKiBAcGFyYW0gYzFcbiAgICAgKiBAcGFyYW0gYzJcbiAgICAgKi9cbiAgICBjaXJjbGVDb2xsaWRlc1dpdGhDaXJjbGUoYzEsIGMyKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhjMi54IC0gYzEueCwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3coYzIueSAtIGMxLnksIDIpKSxcbiAgICAgICAgICAgIG92ZXJsYXAgPSBNYXRoLmFicyhjMS5yYWRpdXMgKyBjMi5yYWRpdXMpIC0gZGlzdGFuY2U7XG5cbiAgICAgICAgcmV0dXJuIG92ZXJsYXAgPCAwID9cbiAgICAgICAgICAgIG5ldyBNVFYoMCkgOlxuICAgICAgICAgICAgbmV3IE1UVihvdmVybGFwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLpOqwge2YleqzvCDsm5DtmJUg7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGNpcmNsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUocG9seWdvbiwgY2lyY2xlKSB7XG4gICAgICAgIHZhciBheGVzID0gcG9seWdvbi5nZXRBeGVzKCksXG4gICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSBjaXJjbGUuZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSk7XG5cbiAgICAgICAgLy8gUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIGNsb3Nlc3RQb2ludCwgZmFsc2UsIDUsIDB4RTU3MzczKTtcblxuICAgICAgICBheGVzLnB1c2goY2lyY2xlLmdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpKTtcblxuICAgICAgICByZXR1cm4gcG9seWdvbi5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IoYXhlcywgY2lyY2xlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2leyXkCDtiKzsmIHtlZjsl6wg67aE66as6rCAIOyeiOycvOuptCB0cnVlIOuwmO2ZmCjstqnrj4zrkJjsp4Ag7JWK7JWY64uk66m0IHRydWUg67CY7ZmYKVxuICAgICAqIEBwYXJhbSBvdGhlclNoYXBlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKSB7XG4gICAgICAgIHZhciBheGVzID0gdGhpcy5nZXRBeGVzKCkuY29uY2F0KHNoYXBlLmdldEF4ZXMoKSk7XG4gICAgICAgIHJldHVybiAhdGhpcy5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOu2hOumrOy2leydtCDsnojripTsp4Ag7Jes67aAICjrtoTrpqzstpXsnbQg7J6I64uk64qUIOydtOyVvOq4sOuKlCDstqnrj4ztlZjsp4Ag7JWK7JWY64uk64qUIOydtOyVvOq4sCDsnoXri4jri6QuKVxuICAgICAqIEBwYXJhbSBheGVzXG4gICAgICogQHBhcmFtIHNoYXBlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBzaGFwZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF4ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9qZWN0aW9uMSA9IHNoYXBlLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICB2YXIgcHJvamVjdGlvbjIgPSB0aGlzLnByb2plY3QoYXhpcyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvamVjdGlvbjEub3ZlcmxhcHMocHJvamVjdGlvbjIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIGRvbid0IGhhdmUgdG8gdGVzdCByZW1haW5pbmcgYXhlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9TaGFwZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1UVlxue1xuICAgIC8qKlxuICAgICAqIOy1nOyGjCDsnbTrj5kg67Kh7YSwXG4gICAgICogTWluaW11bSBUcmFuc2xhdGlvbiBWZWN0b3IgKE1UVilcbiAgICAgKiBAcGFyYW0gYXhpc1xuICAgICAqIEBwYXJhbSBvdmVybGFwXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3ZlcmxhcCA9IHVuZGVmaW5lZCwgYXhpcyA9IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXM7XG4gICAgICAgIHRoaXMub3ZlcmxhcCA9IG92ZXJsYXA7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvTVRWLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdGlvblxue1xuICAgIGNvbnN0cnVjdG9yKG1pbiwgbWF4KVxuICAgIHtcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgIH1cblxuXG4gICAgZ2V0T3ZlcmxhcChwcm9qZWN0aW9uKVxuICAgIHtcbiAgICAgICAgdmFyIG92ZXJsYXA7XG5cbiAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXBzKHByb2plY3Rpb24pKVxuICAgICAgICAgICAgcmV0dXJuIDA7XG5cbiAgICAgICAgaWYgKHRoaXMubWF4ID4gcHJvamVjdGlvbi5tYXgpIHtcbiAgICAgICAgICAgIG92ZXJsYXAgPSBwcm9qZWN0aW9uLm1heCAtIHRoaXMubWluO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3ZlcmxhcCA9IHRoaXMubWF4IC0gcHJvamVjdGlvbi5taW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG92ZXJsYXA7XG4gICAgfVxuXG5cbiAgICBvdmVybGFwcyhwcm9qZWN0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4ID4gcHJvamVjdGlvbi5taW4gJiYgcHJvamVjdGlvbi5tYXggPiB0aGlzLm1pbjtcbiAgICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvUHJvamVjdGlvbi5qcyIsImltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vVmVjdG9yJztcbmltcG9ydCBQcm9qZWN0aW9uIGZyb20gJy4vUHJvamVjdGlvbic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgU2hhcGVcbntcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnBvaW50cy5sZW5ndGggKyAnIFBvbHlnb24nO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7KSR7KCQIOyijO2RnFxuICAgICAqIEByZXR1cm5zIHtQSVhJLlBvaW50fCp8c3ZnLlBvaW50fVxuICAgICAqL1xuICAgIGdldENlbnRlcigpXG4gICAge1xuICAgICAgICB2YXIgcG9pbnRTdW0gPSBuZXcgUElYSS5Qb2ludCgpO1xuXG4gICAgICAgIGZvciAodmFyIGk9MCwgcG9pbnQ7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcG9pbnQgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgICAgIHBvaW50U3VtLnggKz0gcG9pbnQueDtcbiAgICAgICAgICAgIHBvaW50U3VtLnkgKz0gcG9pbnQueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFBJWEkuUG9pbnQocG9pbnRTdW0ueCAvIHRoaXMucG9pbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIHBvaW50U3VtLnkgLyB0aGlzLnBvaW50cy5sZW5ndGgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7Lap64+MIOyytO2BrCAo67aE66as7LaV7J20IOyXhuycvOuptCDstqnrj4wpLCAhc2VwYXJhdGlvbk9uQXhlc1xuICAgICAqIEBwYXJhbSBzaGFwZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIGlmIChzaGFwZS5yYWRpdXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZSh0aGlzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ29sbGlkZXNXaXRoUG9seWdvbih0aGlzLCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKVxuICAgIHtcbiAgICAgICAgdmFyIGF4ZXMgPSBzaGFwZS5nZXRBeGVzKCk7XG5cbiAgICAgICAgaWYgKGF4ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYXBlLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXhlcy5jb25jYXQodGhpcy5nZXRBeGVzKCkpO1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlcGFyYXRpb25PbkF4ZXMoYXhlcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIO2IrOyYgVxuICAgICAqIEBwYXJhbSBheGlzXG4gICAgICogQHJldHVybnMge1Byb2plY3Rpb259XG4gICAgICovXG4gICAgcHJvamVjdChheGlzKVxuICAgIHtcbiAgICAgICAgdmFyIHNjYWxhcnMgPSBbXSxcbiAgICAgICAgICAgIHYgPSBuZXcgVmVjdG9yKCk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCggZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICB2LnggPSBwb2ludC54O1xuICAgICAgICAgICAgdi55ID0gcG9pbnQueTtcbiAgICAgICAgICAgIHNjYWxhcnMucHVzaCh2LmRvdFByb2R1Y3QoYXhpcykpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3Rpb24oTWF0aC5taW4uYXBwbHkoTWF0aCwgc2NhbGFycyksXG4gICAgICAgICAgICBNYXRoLm1heC5hcHBseShNYXRoLCBzY2FsYXJzKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDstpUg6rWs7ZWY6riwIChlZGdl7JeQIOuFuOunkOydhCDstpXsnLzroZwg7ZWp64uI64ukKVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBnZXRBeGVzKClcbiAgICB7XG4gICAgICAgIHZhciB2MSA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgICAgIHYyID0gbmV3IFZlY3RvcigpLFxuICAgICAgICAgICAgYXhlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgIHYxLnggPSB0aGlzLnBvaW50c1tpXS54O1xuICAgICAgICAgICAgdjEueSA9IHRoaXMucG9pbnRzW2ldLnk7XG5cbiAgICAgICAgICAgIHYyLnggPSB0aGlzLnBvaW50c1tpKzFdLng7XG4gICAgICAgICAgICB2Mi55ID0gdGhpcy5wb2ludHNbaSsxXS55O1xuXG4gICAgICAgICAgICAvLyDrqqjshJzrpqzsl5DshJwg7IiY7KeB7J24IOuFuOunkCjrspXshKApIOuyoe2EsOulvCDrp4zrk63ri4jri6QuICjstpUg7IOd7ISxKVxuICAgICAgICAgICAgYXhlcy5wdXNoKHYxLmVkZ2UodjIpLnBlcnBlbmRpY3VsYXIoKS5ub3JtYWxpemUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2MS54ID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLng7XG4gICAgICAgIHYxLnkgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0ueTtcblxuICAgICAgICB2Mi54ID0gdGhpcy5wb2ludHNbMF0ueDtcbiAgICAgICAgdjIueSA9IHRoaXMucG9pbnRzWzBdLnk7XG5cbiAgICAgICAgLy8g66qo7ISc66as7JeQ7IScIOyImOyngeyduCDrhbjrp5Ao67KV7ISgKSDrsqHthLDrpbwg66eM65Ot64uI64ukLiAo7LaVIOyDneyEsSlcbiAgICAgICAgYXhlcy5wdXNoKHYxLmVkZ2UodjIpLnBlcnBlbmRpY3VsYXIoKS5ub3JtYWxpemUoKSk7XG4gICAgICAgIHJldHVybiBheGVzO1xuICAgIH1cblxuXG4gICAgY3JlYXRlUGF0aChncmFwaGljcywgbGluZUNvbG9yID0gMHhGRkZGRkYpXG4gICAge1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgbGluZUNvbG9yKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICAgfVxuICAgICAgICBncmFwaGljcy5saW5lVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG4gICAgfVxuXG5cbiAgICBtb3ZlKGR4LCBkeSlcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICAgICAgcG9pbnQueCArPSBkeDtcbiAgICAgICAgICAgIHBvaW50LnkgKz0gZHk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGlzUG9pbnRJblBhdGgoeCwgeSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIGNvbnN0IGlzUG9pbnRJblBhdGggPSB0aGlzLmNvbnRleHQuaXNQb2ludEluUGF0aCh4LCB5KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgcmV0dXJuIGlzUG9pbnRJblBhdGg7XG4gICAgfVxuXG5cbiAgICBhZGRQb2ludCh4LCB5KVxuICAgIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQoeCwgeSkpO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnBvaW50cy5sZW5ndGggKyAnIFBvbHlnb24nO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9Qb2x5Z29uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
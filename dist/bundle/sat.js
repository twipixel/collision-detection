webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(330);
	
	var _Test2 = _interopRequireDefault(_Test);
	
	var _KeyCode = __webpack_require__(329);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _Mouse = __webpack_require__(340);
	
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

/***/ 329:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KeyCode = function () {
	  function KeyCode() {
	    _classCallCheck(this, KeyCode);
	  }
	
	  _createClass(KeyCode, null, [{
	    key: "BREAK",
	    get: function get() {
	      return 3;
	    }
	  }, {
	    key: "BACKSPACE",
	    get: function get() {
	      return 8;
	    }
	  }, {
	    key: "TAB",
	    get: function get() {
	      return 9;
	    }
	  }, {
	    key: "CLEAR",
	    get: function get() {
	      return 12;
	    }
	  }, {
	    key: "ENTER",
	    get: function get() {
	      return 13;
	    }
	  }, {
	    key: "COMMAND",
	    get: function get() {
	      return 15;
	    }
	  }, {
	    key: "SHIFT",
	    get: function get() {
	      return 16;
	    }
	  }, {
	    key: "CONTROL",
	    get: function get() {
	      return 17;
	    }
	  }, {
	    key: "ALTERNATE",
	    get: function get() {
	      return 18;
	    }
	  }, {
	    key: "PAUSE",
	    get: function get() {
	      return 18;
	    }
	  }, {
	    key: "CAPSLOCK",
	    get: function get() {
	      return 18;
	    }
	  }, {
	    key: "ESCAPE",
	    get: function get() {
	      return 27;
	    }
	  }, {
	    key: "SPACE",
	    get: function get() {
	      return 32;
	    }
	  }, {
	    key: "PAGE_UP",
	    get: function get() {
	      return 33;
	    }
	  }, {
	    key: "PAGE_DOWN",
	    get: function get() {
	      return 34;
	    }
	  }, {
	    key: "END",
	    get: function get() {
	      return 35;
	    }
	  }, {
	    key: "HOME",
	    get: function get() {
	      return 36;
	    }
	  }, {
	    key: "LEFT",
	    get: function get() {
	      return 37;
	    }
	  }, {
	    key: "UP",
	    get: function get() {
	      return 38;
	    }
	  }, {
	    key: "RIGHT",
	    get: function get() {
	      return 39;
	    }
	  }, {
	    key: "DOWN",
	    get: function get() {
	      return 40;
	    }
	  }, {
	    key: "INSERT",
	    get: function get() {
	      return 45;
	    }
	  }, {
	    key: "DELETE",
	    get: function get() {
	      return 46;
	    }
	  }, {
	    key: "NUMBER_0",
	    get: function get() {
	      return 48;
	    }
	  }, {
	    key: "NUMBER_1",
	    get: function get() {
	      return 49;
	    }
	  }, {
	    key: "NUMBER_2",
	    get: function get() {
	      return 50;
	    }
	  }, {
	    key: "NUMBER_3",
	    get: function get() {
	      return 51;
	    }
	  }, {
	    key: "NUMBER_4",
	    get: function get() {
	      return 52;
	    }
	  }, {
	    key: "NUMBER_5",
	    get: function get() {
	      return 53;
	    }
	  }, {
	    key: "NUMBER_6",
	    get: function get() {
	      return 54;
	    }
	  }, {
	    key: "NUMBER_7",
	    get: function get() {
	      return 55;
	    }
	  }, {
	    key: "NUMBER_8",
	    get: function get() {
	      return 56;
	    }
	  }, {
	    key: "NUMBER_9",
	    get: function get() {
	      return 57;
	    }
	  }, {
	    key: "A",
	    get: function get() {
	      return 65;
	    }
	  }, {
	    key: "B",
	    get: function get() {
	      return 66;
	    }
	  }, {
	    key: "C",
	    get: function get() {
	      return 67;
	    }
	  }, {
	    key: "D",
	    get: function get() {
	      return 68;
	    }
	  }, {
	    key: "E",
	    get: function get() {
	      return 69;
	    }
	  }, {
	    key: "F",
	    get: function get() {
	      return 70;
	    }
	  }, {
	    key: "G",
	    get: function get() {
	      return 71;
	    }
	  }, {
	    key: "H",
	    get: function get() {
	      return 72;
	    }
	  }, {
	    key: "I",
	    get: function get() {
	      return 73;
	    }
	  }, {
	    key: "J",
	    get: function get() {
	      return 74;
	    }
	  }, {
	    key: "K",
	    get: function get() {
	      return 75;
	    }
	  }, {
	    key: "L",
	    get: function get() {
	      return 76;
	    }
	  }, {
	    key: "M",
	    get: function get() {
	      return 77;
	    }
	  }, {
	    key: "N",
	    get: function get() {
	      return 78;
	    }
	  }, {
	    key: "O",
	    get: function get() {
	      return 79;
	    }
	  }, {
	    key: "P",
	    get: function get() {
	      return 80;
	    }
	  }, {
	    key: "Q",
	    get: function get() {
	      return 81;
	    }
	  }, {
	    key: "R",
	    get: function get() {
	      return 82;
	    }
	  }, {
	    key: "S",
	    get: function get() {
	      return 83;
	    }
	  }, {
	    key: "T",
	    get: function get() {
	      return 84;
	    }
	  }, {
	    key: "U",
	    get: function get() {
	      return 85;
	    }
	  }, {
	    key: "V",
	    get: function get() {
	      return 86;
	    }
	  }, {
	    key: "W",
	    get: function get() {
	      return 87;
	    }
	  }, {
	    key: "X",
	    get: function get() {
	      return 88;
	    }
	  }, {
	    key: "Y",
	    get: function get() {
	      return 89;
	    }
	  }, {
	    key: "Z",
	    get: function get() {
	      return 90;
	    }
	  }, {
	    key: "LEFT_WINDOW",
	    get: function get() {
	      return 91;
	    }
	  }, {
	    key: "RIGHT_WINDOW",
	    get: function get() {
	      return 92;
	    }
	  }, {
	    key: "RIGHT_MENU",
	    get: function get() {
	      return 93;
	    }
	  }, {
	    key: "NUMPAD_0",
	    get: function get() {
	      return 96;
	    }
	  }, {
	    key: "NUMPAD_1",
	    get: function get() {
	      return 97;
	    }
	  }, {
	    key: "NUMPAD_2",
	    get: function get() {
	      return 98;
	    }
	  }, {
	    key: "NUMPAD_3",
	    get: function get() {
	      return 99;
	    }
	  }, {
	    key: "NUMPAD_4",
	    get: function get() {
	      return 100;
	    }
	  }, {
	    key: "NUMPAD_5",
	    get: function get() {
	      return 101;
	    }
	  }, {
	    key: "NUMPAD_6",
	    get: function get() {
	      return 102;
	    }
	  }, {
	    key: "NUMPAD_7",
	    get: function get() {
	      return 103;
	    }
	  }, {
	    key: "NUMPAD_8",
	    get: function get() {
	      return 104;
	    }
	  }, {
	    key: "NUMPAD_9",
	    get: function get() {
	      return 105;
	    }
	  }, {
	    key: "NUMPAD_MULTIPLY",
	    get: function get() {
	      return 106;
	    }
	  }, {
	    key: "NUMPAD_ADD",
	    get: function get() {
	      return 107;
	    }
	  }, {
	    key: "NUMPAD_ENTER",
	    get: function get() {
	      return 108;
	    }
	  }, {
	    key: "NUMPAD_SUBTRACT",
	    get: function get() {
	      return 109;
	    }
	  }, {
	    key: "NUMPAD_DECIMAL",
	    get: function get() {
	      return 110;
	    }
	  }, {
	    key: "NUMPAD_DIVIDE",
	    get: function get() {
	      return 111;
	    }
	  }, {
	    key: "F1",
	    get: function get() {
	      return 112;
	    }
	  }, {
	    key: "F2",
	    get: function get() {
	      return 113;
	    }
	  }, {
	    key: "F3",
	    get: function get() {
	      return 114;
	    }
	  }, {
	    key: "F4",
	    get: function get() {
	      return 115;
	    }
	  }, {
	    key: "F5",
	    get: function get() {
	      return 116;
	    }
	  }, {
	    key: "F6",
	    get: function get() {
	      return 117;
	    }
	  }, {
	    key: "F7",
	    get: function get() {
	      return 118;
	    }
	  }, {
	    key: "F8",
	    get: function get() {
	      return 119;
	    }
	  }, {
	    key: "F9",
	    get: function get() {
	      return 120;
	    }
	  }, {
	    key: "F10",
	    get: function get() {
	      return 121;
	    }
	  }, {
	    key: "F11",
	    get: function get() {
	      return 122;
	    }
	  }, {
	    key: "F12",
	    get: function get() {
	      return 123;
	    }
	  }, {
	    key: "F13",
	    get: function get() {
	      return 124;
	    }
	  }, {
	    key: "F14",
	    get: function get() {
	      return 125;
	    }
	  }, {
	    key: "F15",
	    get: function get() {
	      return 126;
	    }
	  }, {
	    key: "SEMICOLON",
	    get: function get() {
	      return 186;
	    }
	  }, {
	    key: "EQUAL",
	    get: function get() {
	      return 187;
	    }
	  }, {
	    key: "COMMA",
	    get: function get() {
	      return 188;
	    }
	  }, {
	    key: "DASH",
	    get: function get() {
	      return 189;
	    }
	  }, {
	    key: "PERIOD",
	    get: function get() {
	      return 190;
	    }
	  }, {
	    key: "BACKQUOTE",
	    get: function get() {
	      return 192;
	    }
	  }, {
	    key: "BACKSLASH",
	    get: function get() {
	      return 220;
	    }
	  }, {
	    key: "QUOTE",
	    get: function get() {
	      return 222;
	    }
	
	    /*
	     const keyCodes = {
	     3 : "break",
	     8 : "backspace / delete",
	     9 : "tab",
	     12 : 'clear',
	     13 : "enter",
	     16 : "shift",
	     17 : "ctrl",
	     18 : "alt",
	     19 : "pause/break",
	     20 : "caps lock",
	     27 : "escape",
	     32 : "spacebar",
	     33 : "page up",
	     34 : "page down",
	     35 : "end",
	     36 : "home ",
	     37 : "left arrow ",
	     38 : "up arrow ",
	     39 : "right arrow",
	     40 : "down arrow ",
	     41 : "select",
	     42 : "print",
	     43 : "execute",
	     44 : "Print Screen",
	     45 : "insert ",
	     46 : "delete",
	     48 : "0",
	     49 : "1",
	     50 : "2",
	     51 : "3",
	     52 : "4",
	     53 : "5",
	     54 : "6",
	     55 : "7",
	     56 : "8",
	     57 : "9",
	     58 : ":",
	     59 : "semicolon (firefox), equals",
	     60 : "<",
	     61 : "equals (firefox)",
	     63 : "ß",
	     64 : "@ (firefox)",
	     65 : "a",
	     66 : "b",
	     67 : "c",
	     68 : "d",
	     69 : "e",
	     70 : "f",
	     71 : "g",
	     72 : "h",
	     73 : "i",
	     74 : "j",
	     75 : "k",
	     76 : "l",
	     77 : "m",
	     78 : "n",
	     79 : "o",
	     80 : "p",
	     81 : "q",
	     82 : "r",
	     83 : "s",
	     84 : "t",
	     85 : "u",
	     86 : "v",
	     87 : "w",
	     88 : "x",
	     89 : "y",
	     90 : "z",
	     91 : "Windows Key / Left ⌘ / Chromebook Search key",
	     92 : "right window key ",
	     93 : "Windows Menu / Right ⌘",
	     96 : "numpad 0 ",
	     97 : "numpad 1 ",
	     98 : "numpad 2 ",
	     99 : "numpad 3 ",
	     100 : "numpad 4 ",
	     101 : "numpad 5 ",
	     102 : "numpad 6 ",
	     103 : "numpad 7 ",
	     104 : "numpad 8 ",
	     105 : "numpad 9 ",
	     106 : "multiply ",
	     107 : "add",
	     108 : "numpad period (firefox)",
	     109 : "subtract ",
	     110 : "decimal point",
	     111 : "divide ",
	     112 : "f1 ",
	     113 : "f2 ",
	     114 : "f3 ",
	     115 : "f4 ",
	     116 : "f5 ",
	     117 : "f6 ",
	     118 : "f7 ",
	     119 : "f8 ",
	     120 : "f9 ",
	     121 : "f10",
	     122 : "f11",
	     123 : "f12",
	     124 : "f13",
	     125 : "f14",
	     126 : "f15",
	     127 : "f16",
	     128 : "f17",
	     129 : "f18",
	     130 : "f19",
	     131 : "f20",
	     132 : "f21",
	     133 : "f22",
	     134 : "f23",
	     135 : "f24",
	     144 : "num lock ",
	     145 : "scroll lock",
	     160 : "^",
	     161: '!',
	     163 : "#",
	     164: '$',
	     165: 'ù',
	     166 : "page backward",
	     167 : "page forward",
	     169 : "closing paren (AZERTY)",
	     170: '*',
	     171 : "~ + * key",
	     173 : "minus (firefox), mute/unmute",
	     174 : "decrease volume level",
	     175 : "increase volume level",
	     176 : "next",
	     177 : "previous",
	     178 : "stop",
	     179 : "play/pause",
	     180 : "e-mail",
	     181 : "mute/unmute (firefox)",
	     182 : "decrease volume level (firefox)",
	     183 : "increase volume level (firefox)",
	     186 : "semi-colon / ñ",
	     187 : "equal sign ",
	     188 : "comma",
	     189 : "dash ",
	     190 : "period ",
	     191 : "forward slash / ç",
	     192 : "grave accent / ñ / æ",
	     193 : "?, / or °",
	     194 : "numpad period (chrome)",
	     219 : "open bracket ",
	     220 : "back slash ",
	     221 : "close bracket / å",
	     222 : "single quote / ø",
	     223 : "`",
	     224 : "left or right ⌘ key (firefox)",
	     225 : "altgr",
	     226 : "< /git >",
	     230 : "GNOME Compose Key",
	     231 : "ç",
	     233 : "XF86Forward",
	     234 : "XF86Back",
	     255 : "toggle touchpad"
	     };
	     */
	
	  }]);
	
	  return KeyCode;
	}();
	
	exports.default = KeyCode;

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(331);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Circle = __webpack_require__(332);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _Polygon = __webpack_require__(339);
	
	var _Polygon2 = _interopRequireDefault(_Polygon);
	
	var _Vector = __webpack_require__(336);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(335);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
	var _Mouse = __webpack_require__(340);
	
	var _Mouse2 = _interopRequireDefault(_Mouse);
	
	var _KeyCode = __webpack_require__(329);
	
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
	
	        _this.interactive = true;
	        _this.renderer = renderer;
	        _this.canvas = _this.renderer.view;
	        _this.context = _this.canvas.getContext('2d');
	        return _this;
	    }
	
	    _createClass(Test, [{
	        key: 'initialize',
	        value: function initialize() {
	            if (!this.isInit) {
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
	            this.initialize();
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

/***/ 331:
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

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(333);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Vector = __webpack_require__(336);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(338);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(335);
	
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

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MTV = __webpack_require__(334);
	
	var _MTV2 = _interopRequireDefault(_MTV);
	
	var _Painter = __webpack_require__(335);
	
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

/***/ 334:
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

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(336);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Calculator = __webpack_require__(337);
	
	var _Calculator2 = _interopRequireDefault(_Calculator);
	
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
	
	            var convexHullPath = _Calculator2.default.createConvexHull(path);
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

/***/ 336:
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
	         * 수직 벡터 생성
	         * @returns {Vector}
	         */
	
	    }, {
	        key: 'perpendicular',
	        value: function perpendicular() {
	            var v = new Vector();
	            v.x = this.y;
	            v.y = 0 - this.x;
	            return v;
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
	
	    }, {
	        key: 'randomizeAny',
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
	        key: 'perpendicular',
	        value: function perpendicular(vec) {
	            var clone = vec.clone();
	            clone.x = vec.y;
	            clone.y = -vec.x;
	            return clone;
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
	    }, {
	        key: 'tripleProduct',
	        value: function tripleProduct(a, b, c) {
	            var r = new Vector();
	
	            // perform a.dot(c)
	            // perform b.dot(c)
	            var ac = a.x * c.x + a.y * c.y,
	                bc = b.x * c.x + b.y * c.y;
	
	            // perform b * a.dot(c) - a * b.dot(c)
	            r.x = b.x * ac - a.x * bc;
	            r.y = b.y * ac - a.y * bc;
	
	            return r;
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

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(336);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Painter = __webpack_require__(335);
	
	var _Painter2 = _interopRequireDefault(_Painter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Calculator = function () {
	    function Calculator() {
	        _classCallCheck(this, Calculator);
	    }
	
	    _createClass(Calculator, null, [{
	        key: 'averagePoint',
	
	        /**
	         * This is to compute average center (roughly). It might be different from
	         * Center of Gravity, especially for bodies with nonuniform density,
	         * but this is ok as initial direction of simplex search in GJK
	         * @param vertices
	         * @param count
	         * @param direction
	         */
	        value: function averagePoint(vertices, count) {
	            var avg = new _Vector2.default();
	
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
	         * @param vertices
	         * @param count
	         * @param direction
	         */
	
	    }, {
	        key: 'indexOfFurthestPoint',
	        value: function indexOfFurthestPoint(vertices, count, direction) {
	            var index = 0;
	            var maxProduct = _Vector2.default.dotProduct(direction, vertices[0]);
	
	            for (var i = 0; i < count; i++) {
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
	         * @param vertices1
	         * @param count1
	         * @param vertices2
	         * @param count2
	         * @param direction
	         */
	
	    }, {
	        key: 'support',
	        value: function support(vertices1, count1, vertices2, count2, direction) {
	            // get furthest point of first body along an arbitrary direction
	            var i = this.indexOfFurthestPoint(vertices1, count1, direction);
	
	            // get furthest point of second body along the opposite direction
	            var j = this.indexOfFurthestPoint(vertices2, count2, _Vector2.default.negate(direction));
	
	            var v1 = vertices1[i],
	                v2 = vertices2[j];
	
	            var diff = _Vector2.default.subtract(v1, v2);
	
	            var d = direction.clone().normalize();
	            console.log('support', 'Minkowski sum[' + diff.x + ', ' + diff.y + ']', 'v1[' + v1.x + ', ' + v1.y + ']', 'v2[' + v2.x + ', ' + v2.y + ']', 'd[' + d.x.toFixed(2) + ', ' + d.y.toFixed(2) + ']');
	
	            _Painter2.default.drawPoint(window.g, diff.clone().multiplyScalar(window.magnification), false, 2, 0xdddddd);
	
	            // subtract (Minkowski sum) the two points to see if bodies 'overlap'
	            return diff;
	        }
	    }, {
	        key: 'gjk',
	        value: function gjk(vertices1, count1, vertices2, count2) {
	            console.log('-------------------------------------------------');
	            console.log('gjk(', vertices1, count1, vertices2, count2, ')');
	            console.log('-------------------------------------------------');
	
	            // const vertices = [...vertices1, ...vertices2];
	
	            console.log('vertices1');
	            console.log('-------------------------------------------------');
	            vertices1.forEach(function (vec, index) {
	                console.log(index, 'vec[' + vec.x + ', ' + vec.y + ']');
	            });
	
	            console.log('-------------------------------------------------');
	            console.log('vertices2');
	            console.log('-------------------------------------------------');
	            vertices2.forEach(function (vec, index) {
	                console.log(index, 'vec[' + vec.x + ', ' + vec.y + ']');
	            });
	            console.log('-------------------------------------------------');
	
	            // 디버그용
	            var lineAlpha = 0.5
	            // 블루
	            ,
	                abBlue = 0x00BCD4
	            // 당금색
	            ,
	                acCarrot = 0xe67e22;
	
	            // index of current vertex of simplex
	            var iter_count = 0,
	                index = 0;
	            var a = void 0,
	                b = void 0,
	                c = void 0,
	                d = void 0,
	                dn = void 0,
	                ao = void 0,
	                ab = void 0,
	                ac = void 0,
	                abperp = void 0,
	                acperp = void 0,
	                simplex = [];
	
	            var position1 = this.averagePoint(vertices1, count1); // not a CoG but
	            var position2 = this.averagePoint(vertices2, count2); // it's ok for GJK )
	
	            var c1 = position1.clone().multiplyScalar(window.magnification),
	                c2 = position2.clone().multiplyScalar(window.magnification);
	
	            _Painter2.default.drawLine(window.g, c1, c2, false, 1, 0xdddddd, 0.3);
	
	            // initial direction from the center of 1st body to the center of 2nd body
	            d = _Vector2.default.subtract(position1, position2);
	
	            console.log('c1[' + position1.x.toFixed(2) + ', ' + position1.y.toFixed(2) + ']', 'c2[' + position2.x.toFixed(2) + ', ' + position2.y.toFixed(2) + ']', 'd[' + d.x.toFixed(2) + ', ' + d.y.toFixed(2) + ']');
	            console.log('-------------------------------------------------');
	
	            // if initial direction is zero – set it to any arbitrary axis (we choose X)
	            if (d.x == 0 && d.y == 0) {
	                d.x = 1.0;
	
	                console.log('** direction is zero **');
	            }
	
	            // set the first support as initial point of the new simplex
	            a = simplex[0] = this.support(vertices1, count1, vertices2, count2, d);
	
	            dn = d.clone().normalize();
	            console.log('-------------------------------------------------');
	            console.log('Simplex[' + index + ']', 'a[' + a.x.toFixed() + ', ' + a.y.toFixed() + '][0]', 'd[' + dn.x.toFixed(2) + ', ' + dn.y.toFixed(2) + ']', _Vector2.default.dotProduct(a, d));
	            console.log('-------------------------------------------------');
	            console.log('Vector.dotProduct((' + a.x.toFixed() + ', ' + a.y.toFixed() + '),(' + dn.x.toFixed(2) + ', ' + dn.y.toFixed(2) + ')) <= 0', _Vector2.default.dotProduct(a, d));
	
	            if (_Vector2.default.dotProduct(a, d) <= 0) {
	                console.log('1. no collision');
	                return 0; // no collision
	            }
	
	            d = _Vector2.default.negate(a); // The next search direction is always towards the origin, so the next search direction is negate(a)
	
	            console.log('Vector.negate(' + a + ') = ' + d);
	
	            while (1) {
	                iter_count++;
	
	                a = simplex[++index] = this.support(vertices1, count1, vertices2, count2, d);
	
	                dn = d.clone().normalize();
	                console.log('-------------------------------------------------');
	                console.log('Simplex[' + index + ']', 'a[' + a.x.toFixed() + ', ' + a.y.toFixed() + '][1]', 'd[' + dn.x.toFixed(2) + ', ' + dn.y.toFixed(2) + ']', _Vector2.default.dotProduct(a, d).toFixed(2));
	                console.log('-------------------------------------------------');
	                console.log('Vector.dotProduct((' + a.x.toFixed() + ', ' + a.y.toFixed() + '),(' + dn.x.toFixed(2) + ', ' + dn.y.toFixed(2) + ')) <= 0', _Vector2.default.dotProduct(a, d));
	
	                if (_Vector2.default.dotProduct(a, d) <= 0) {
	                    console.log('2. no collision');
	                    return 0; // no collision
	                }
	
	                ao = _Vector2.default.negate(a); // from point A to Origin is just negative A
	
	                console.log('ao[' + ao.x.toFixed(2) + ', ' + ao.y.toFixed(2) + ']');
	                console.log('-------------------------------------------------');
	
	                // simplex has 2 points (a line segment, not a triangle yet)
	                if (index < 2) {
	                    b = simplex[0];
	                    ab = _Vector2.default.subtract(b, a); // from point A to B
	                    d = _Vector2.default.tripleProduct(ab, ao, ab); // normal to AB towards Origin
	
	                    if (_Vector2.default.lengthSq(d) == 0) {
	                        d = _Vector2.default.perpendicular(ab);
	                    }
	
	                    // a -> b
	                    _Painter2.default.drawLine(window.g, a.clone().multiplyScalar(window.magnification), b.clone().multiplyScalar(window.magnification), false, 1, abBlue, lineAlpha);
	
	                    // ab -> ao
	                    _Painter2.default.drawLine(window.g, this.midpoint(a, b).multiplyScalar(window.magnification), d, false, 1, abBlue, lineAlpha);
	
	                    // console.log('Simplex 2개 로직, 첫 루프만 여길 실행');
	                    dn = d.clone().normalize();
	                    console.log('Simplex[' + index + ']', 'a[' + a.x.toFixed() + ', ' + a.y.toFixed() + '][1]', 'b[' + b.x.toFixed() + ', ' + b.y.toFixed() + '][0]', 'd[' + dn.x.toFixed(2) + ', ' + dn.y.toFixed(2) + ']');
	                    console.log('-------------------------------------------------');
	                    continue; // skip to next iteration
	                }
	
	                b = simplex[1];
	                c = simplex[0];
	                ab = _Vector2.default.subtract(b, a); // from point A to B
	                ac = _Vector2.default.subtract(c, a); // from point A to C
	
	                //ac와 수직
	                acperp = _Vector2.default.tripleProduct(ab, ac, ac);
	
	                // a -> b
	                _Painter2.default.drawLine(window.g, a.clone().multiplyScalar(window.magnification), b.clone().multiplyScalar(window.magnification), false, 1, abBlue, lineAlpha);
	
	                // a -> c
	                _Painter2.default.drawLine(window.g, a.clone().multiplyScalar(window.magnification), c.clone().multiplyScalar(window.magnification), false, 1, acCarrot, lineAlpha);
	
	                // ac -> acperp
	                _Painter2.default.drawLine(window.g, this.midpoint(a, c).clone().multiplyScalar(window.magnification), acperp, false, 1, acCarrot, lineAlpha);
	                // Painter.drawLine(window.g, this.averagePoint([a, b, c], 3).multiplyScalar(window.magnification), acperp, false, 1, acBlue, lineAlpha);
	
	                // console.log('Simplex 3개 로직, 두 번째 루프부터 여기 계속 실행');
	                dn = d.clone().normalize();
	                console.log('Simplex[' + index + ']', 'a[' + a.x.toFixed() + ', ' + a.y.toFixed() + '][2]', 'b[' + b.x.toFixed() + ', ' + b.y.toFixed() + '][1]', 'c[' + c.x.toFixed() + ', ' + c.y.toFixed() + '][0]', 'd[' + dn.x.toFixed(2) + ', ' + dn.y.toFixed(2) + ']', 'acperp[' + acperp.clone().normalize().x.toFixed(2) + ', ' + acperp.clone().normalize().y.toFixed(2) + ']', _Vector2.default.dotProduct(acperp, ao), _Vector2.default.dotProduct(acperp, ao) >= 0);
	                console.log('-------------------------------------------------');
	
	                // ac 수직 선분이 원점을 보도록 방향 설정
	                if (_Vector2.default.dotProduct(acperp, ao) >= 0) {
	                    d = acperp; // new direction is normal to AC towards Origin
	                    dn = d.clone().normalize();
	                    console.log('>>>', 'd[' + dn.x + ', ' + dn.y + ']');
	                } else {
	                    abperp = _Vector2.default.tripleProduct(ac, ab, ab);
	                    // abperp = Vector.tripleProduct(ac, Vector.negate(ab), ab);
	
	                    dn = abperp.clone().normalize();
	
	                    console.log('abperp[' + dn.x.toFixed(2) + ', ' + dn.y.toFixed(2) + ']');
	
	                    // a -> b
	                    _Painter2.default.drawLine(window.g, a.clone().multiplyScalar(window.magnification), b.clone().multiplyScalar(window.magnification), false, 1, abBlue, lineAlpha);
	
	                    // ab -> abperp
	                    _Painter2.default.drawLine(window.g, this.midpoint(a, b).clone().multiplyScalar(window.magnification), abperp, false, 1, abBlue, lineAlpha);
	
	                    // ab 수직 선분이 원점 반대 방향을 향하고 있으면 즉, 원점이 삼각형 안에 있으면
	                    if (_Vector2.default.dotProduct(abperp, ao) < 0) {
	                        console.log('>>> collision');
	                        return 1; // collision
	                    }
	
	                    simplex[0] = simplex[1]; // swap first element (point C)
	                    d = abperp; // new direction is normal to AB towards Origin
	                }
	
	                simplex[1] = simplex[2]; // swap element in the middle (point B)
	                --index;
	            }
	
	            console.log('3. no collision');
	            return 0;
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
	
	    return Calculator;
	}();
	
	exports.default = Calculator;

/***/ }),

/***/ 338:
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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(333);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(331);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Vector = __webpack_require__(336);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Projection = __webpack_require__(338);
	
	var _Projection2 = _interopRequireDefault(_Projection);
	
	var _Painter = __webpack_require__(335);
	
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

/***/ }),

/***/ 340:
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3NhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RzL0tleUNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zYXQvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvQ2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXQvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9NVFYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1BhaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vVmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9namsvQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F0L1Byb2plY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdC9Qb2x5Z29uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Nb3VzZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJtYWluIiwiTWFpbiIsImNhbnZhcyIsInJlbmRlcmVyIiwic3RhZ2UiLCJ0ZXN0IiwiY29udGFpbmVyIiwiaW5pdCIsImFkZEV2ZW50Iiwib25SZXNpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUElYSSIsIkNhbnZhc1JlbmRlcmVyIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3IiwiYXV0b1Jlc2l6ZSIsImJhY2tncm91bmRDb2xvciIsIkNvbnRhaW5lciIsImFkZENoaWxkIiwidXBkYXRlTG9vcCIsInJlc2l6ZVdpbmRvdyIsIm9ucmVzaXplIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbktleVVwIiwibXMiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJpbm5lckhlaWdodCIsInN0eWxlIiwicmVzaXplIiwiZSIsImtleUNvZGUiLCJUSUxERSIsIkVTQyIsIlNQQUNFIiwiRE9XTl9BUlJPVyIsIlVQX0FSUk9XIiwiTEVGVF9BUlJPVyIsIlJJR0hUX0FSUk9XIiwiQkFDS19TUEFDRSIsImNvbnNvbGUiLCJjbGVhciIsIktleUNvZGUiLCJncmFwaGljcyIsIkdyYXBoaWNzIiwiZGVidWdHcmFwaGljcyIsInNoYXBlcyIsIkxJTkVfQ09MT1IiLCJBUlJPV19DT0xPUiIsInBvbHlnb25Qb2ludHMiLCJUZXN0IiwiaW50ZXJhY3RpdmUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImlzSW5pdCIsIm1vdXNlRG93blBvaW50IiwiUG9pbnQiLCJsYXN0ZHJhZyIsInNoYXBlQmVpbmdEcmFnZ2VkIiwidW5kZWZpbmVkIiwiY3JlYXRlUG9seWdvbk1hbnVhbCIsIm9uTW91c2VEb3duIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbiIsImhpdEFyZWEiLCJSZWN0YW5nbGUiLCJpbml0aWFsaXplIiwidHgiLCJ0eSIsImFuZ2xlIiwicmFkaXVzIiwicG9pbnRzIiwiaSIsIngiLCJNYXRoIiwic2luIiwidG9SYWRpYW4iLCJ5IiwiY29zIiwicG9pbnQiLCJwdXNoIiwiZGVncmVlIiwiUEkiLCJ1c2VSYW5kb21Sb3RhdGUiLCJwb2x5Z29uIiwiZm9yRWFjaCIsImFkZFBvaW50Iiwicm90YXRlU2hhcGUiLCJyYW5kb20iLCJjcmVhdGVQYXRoIiwibGVuZ3RoIiwiZGlhbWV0ZXIiLCJzcGFjZSIsImEiLCJiIiwiYyIsImdldFBvbHlnb25Qb2ludHMiLCJhZGRDaXJjbGUiLCJjcmVhdGVQb2x5Z29uIiwiaW5kZXgiLCJjaXJjbGUiLCJkcmFnU2hhcGUiLCJzaGFwZSIsIm10diIsImNvbGxpZGVzV2l0aCIsImNvbGxpc2lvbkRldGVjdGVkIiwibW92ZVNoYXBlQnlNVFYiLCJheGlzIiwib3ZlcmxhcCIsImNvbGxpZGVyIiwiY29sbGlkZWUiLCJjb2xsaWRlckNlbnRlciIsImZyb21PYmplY3QiLCJnZXRDZW50ZXIiLCJjb2xsaWRlZUNlbnRlciIsImNlbnRlclZlY3RvciIsInN1YnRyYWN0IiwiY2VudGVyVW5pdFZlY3RvciIsIm5vcm1hbGl6ZSIsImRvdFByb2R1Y3QiLCJkeCIsImR5IiwiZHJhZ1ZlY3RvciIsImNlbnRlckNvbGxpZGVyIiwiY2VudGVyQ29sbGlkZWUiLCJkaXJlY3Rpb24iLCJkaXJlY3Rpb25Ob3JtIiwibm9ybSIsIm92ZXJsYXBWZWN0b3IiLCJkb3QiLCJ0byIsInRvTm9ybWFsaXplIiwiY2xvbmUiLCJkb3RUbyIsImNlbnRlciIsImRyYXdBcnJvdyIsImciLCJtb3ZlIiwiZGVncmVlcyIsInJvdGF0aW9uUG9pbnQiLCJwaXZvdCIsImRpZmZYIiwiZGlmZlkiLCJkaXN0Iiwic3FydCIsImNhIiwiYXRhbjIiLCJuYSIsImN1cnJlbnRQb2ludCIsImdsb2JhbCIsImlzUG9pbnRJblBhdGgiLCJkZXRlY3RDb2xsaXNpb25zIiwidXBkYXRlUmVuZGVyIiwiRVNDQVBFIiwiTlVNQkVSXzEiLCJOVU1CRVJfMiIsIkNpcmNsZSIsIm5hbWUiLCJwb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlIiwiY2lyY2xlQ29sbGlkZXNXaXRoQ2lyY2xlIiwibWluIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiY2lyY2xlVmVjdG9yIiwidGVzdFBvaW50VmVjdG9yIiwiY2xvc2VzdFBvaW50IiwiZGlzdGFuY2UiLCJ2MSIsInYyIiwic3VyZmFjZVZlY3RvciIsImRyYXdQb2ludCIsInNjYWxhcnMiLCJwb2ludFZlY3RvciIsImFwcGx5IiwibWF4IiwibGluZUNvbG9yIiwibGluZVN0eWxlIiwibW92ZVRvIiwiYXJjIiwic2F2ZSIsImJlZ2luUGF0aCIsInJlc3RvcmUiLCJTaGFwZSIsImF4ZXMiLCJtaW5pbXVtT3ZlcmxhcCIsImF4aXNXaXRoU21hbGxlc3RPdmVybGFwIiwicHJvamVjdGlvbjEiLCJwcm9qZWN0aW9uMiIsInByb2plY3QiLCJnZXRPdmVybGFwIiwicDEiLCJwMiIsIm10djEiLCJtaW5pbXVtVHJhbnNsYXRpb25WZWN0b3IiLCJnZXRBeGVzIiwibXR2MiIsImMxIiwiYzIiLCJwb3ciLCJhYnMiLCJnZXRQb2x5Z29uUG9pbnRDbG9zZXN0VG9DaXJjbGUiLCJnZXRDaXJjbGVBeGlzIiwiY29uY2F0Iiwic2VwYXJhdGlvbk9uQXhlcyIsIm92ZXJsYXBzIiwiTVRWIiwiUGFpbnRlciIsInZlcnRpY2VzMSIsInZlcnRpY2VzMiIsImxvZyIsInBhdGgiLCJqIiwiZGlmZiIsImNvbnZleEh1bGxQYXRoIiwiY3JlYXRlQ29udmV4SHVsbCIsImRyYXdQb2x5Z29uIiwidmVydGljZXMiLCJsaW5lV2lkdGgiLCJjb2xvciIsImFscGhhIiwidmVjMCIsIm11bHRpcGx5U2NhbGFyIiwibWFnbmlmaWNhdGlvbiIsInZlYyIsImxpbmVUbyIsInN0cmluZyIsInRleHQiLCJUZXh0IiwiZmlsbCIsImlzQ2xlYXIiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImJvdW5kcyIsInRoaWNrbmVzcyIsImRyYXdSZWN0IiwicmVjdCIsImx0IiwicnQiLCJyYiIsImxiIiwicDAiLCJtb3ZlUG9pbnQiLCJ0b1BvaW50IiwidmVjdG9yIiwibGVmdCIsInJvdGF0ZSIsImludmVydCIsInJpZ2h0IiwiZmxvb3IiLCJyYWRpYW4yZGVncmVlcyIsInJhZCIsImRlZ3JlZXMycmFkaWFuIiwiZGVnIiwiVmVjdG9yIiwiYXJyIiwib2JqIiwic2NhbGFyIiwiaW52ZXJ0WCIsImludmVydFkiLCJ2IiwiZGl2aWRlIiwiZmFjdG9yIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwicmFuZG9taXplWCIsInJhbmRvbWl6ZVkiLCJyb3VuZCIsInByZWNpc2lvbiIsInRvRml4ZWQiLCJhbW91bnQiLCJtaXhYIiwibWl4WSIsImNvcHlYIiwiY29weVkiLCJ2ZWMyIiwiY29lZmYiLCJob3Jpem9udGFsQW5nbGUiLCJ2ZXJ0aWNhbEFuZ2xlIiwiaG9yaXpvbnRhbEFuZ2xlRGVnIiwibngiLCJueSIsInJvdGF0aW9uIiwicm90YXRlVG8iLCJyb3RhdGVCeSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsImRpc3RhbmNlU3EiLCJsZW5ndGhTcSIsInIiLCJhYyIsImJjIiwiQ2FsY3VsYXRvciIsImNvdW50IiwiYXZnIiwibWF4UHJvZHVjdCIsInByb2R1Y3QiLCJjb3VudDEiLCJjb3VudDIiLCJpbmRleE9mRnVydGhlc3RQb2ludCIsIm5lZ2F0ZSIsImQiLCJsaW5lQWxwaGEiLCJhYkJsdWUiLCJhY0NhcnJvdCIsIml0ZXJfY291bnQiLCJkbiIsImFvIiwiYWIiLCJhYnBlcnAiLCJhY3BlcnAiLCJzaW1wbGV4IiwicG9zaXRpb24xIiwiYXZlcmFnZVBvaW50IiwicG9zaXRpb24yIiwiZHJhd0xpbmUiLCJzdXBwb3J0IiwidHJpcGxlUHJvZHVjdCIsInBlcnBlbmRpY3VsYXIiLCJtaWRwb2ludCIsImkwIiwieDAiLCJuIiwiaHVsbCIsIm0iLCJpaCIsImllIiwiY3Jvc3MiLCJuZXdQb2ludHMiLCJQcm9qZWN0aW9uIiwicHJvamVjdGlvbiIsIlBvbHlnb24iLCJwb2ludFN1bSIsInBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uIiwiZWRnZSIsImNsb3NlUGF0aCIsIk1vdXNlIiwicHJldlBvaW50IiwicHJldlRpbWUiLCJjdXJyZW50VGltZSIsInBsdWdpbnMiLCJpbnRlcmFjdGlvbiIsIm1vdXNlIiwicG9pbnRlciIsInZhbHVlIiwiX3JlbmRlcmVyIiwiX21vdXNlIiwiREVTS1RPUF9NT1VTRSIsImN1cnJlbnRDdXJzb3JTdHlsZSIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUMsY0FBWTtBQUNUQSxZQUFPQyxNQUFQLEdBQWdCLFlBQVk7QUFDeEIsYUFBSUMsT0FBTyxJQUFJQyxJQUFKLEVBQVg7QUFDSCxNQUZEO0FBR0gsRUFKQSxHQUFEOztBQU1BLEtBQUlDLGVBQUo7QUFBQSxLQUFZQyxpQkFBWjtBQUFBLEtBQXNCQyxjQUF0QjtBQUFBLEtBQTZCQyxhQUE3QjtBQUFBLEtB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QXpCO0FBQ0g7OzsyQkFHNkIyUSxLLEVBQU87QUFDakNSLG1CQUFNcFYsUUFBTixDQUFld1YsT0FBZixDQUF1QkMsV0FBdkIsQ0FBbUNPLGtCQUFuQyxHQUF3REosS0FBeEQ7QUFDSCxVOzZCQUMrQjtBQUM1QixvQkFBT1IsTUFBTXBWLFFBQU4sQ0FBZXdWLE9BQWYsQ0FBdUJDLFdBQXZCLENBQW1DTyxrQkFBMUM7QUFDSDs7OzZCQW9Dd0I7QUFDckIsb0JBQU8sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVA7QUFDSDs7Ozs7O21CQXBHZ0JkLEsiLCJmaWxlIjoic2F0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlJztcbmltcG9ydCBNb3VzZSBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL01vdXNlXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1haW4gPSBuZXcgTWFpbigpO1xuICAgIH1cbn0oKSk7XG5cbmxldCBjYW52YXMsIHJlbmRlcmVyLCBzdGFnZSwgdGVzdCwgY29udGFpbmVyO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwge1xuICAgICAgICAgICAgdmlldzogY2FudmFzLFxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgzMzM4M0RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTW91c2UucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgICAgICAvLyDsnITsuZjqsIAg7KCV7IiY6rCAIOyVhOuLkOqyveyasCDtnZDrpr/tlZjqsowg67O07J2064qUIOusuOygnOqwgCDsnojslrRcbiAgICAgICAgLy8g66CM642U65+s7J2YIOychOy5mOulvCDsoJXsiJjroZwg7Jew7IKw65CgIOyImCDsnojrj4TroZ0g7ZWc64ukLlxuICAgICAgICAvL3JlbmRlcmVyLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcblxuICAgICAgICBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICB0ZXN0ID0gbmV3IFRlc3QocmVuZGVyZXIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0ZXN0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AoKTtcbiAgICAgICAgdGhpcy5yZXNpemVXaW5kb3coKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoKSB7fVxuXG4gICAgdXBkYXRlTG9vcCAobXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobXMpO1xuICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobXMpIHtcbiAgICAgICAgdGVzdC51cGRhdGUoKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHN0YWdlKTtcbiAgICB9XG5cbiAgICByZXNpemVXaW5kb3coKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOy6lOuyhOyKpCDsgqzsnbTspojsmYAg65SU7Iqk7ZSM66CI7J20IOyCrOydtOymiCDshKTsoJVcbiAgICAgICAgICog66CI7Yuw64KYIOq3uOuemO2UvSDsp4Dsm5Ag7L2U65OcXG4gICAgICAgICAqL1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUElYSSByZW5kZXJlciDrpqzsgqzsnbTspohcbiAgICAgICAgICogUElYSSDsl5Dqsowgdmlld3BvcnQg7IKs7J207KaIIOuzgOqyvSDslYzrprxcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgdGVzdC5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5VXAgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5USUxERTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRE9XTl9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVQX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTEVGVF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuQkFDS19TUEFDRTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9zYXQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlDb2RlIHtcbiAgICBzdGF0aWMgZ2V0IEJSRUFLKCkgeyByZXR1cm4gMzsgfVxuICAgIHN0YXRpYyBnZXQgQkFDS1NQQUNFKCkgeyByZXR1cm4gODsgfVxuICAgIHN0YXRpYyBnZXQgVEFCKCkgeyByZXR1cm4gOTsgfVxuICAgIHN0YXRpYyBnZXQgQ0xFQVIoKSB7IHJldHVybiAxMjsgfVxuICAgIHN0YXRpYyBnZXQgRU5URVIoKSB7IHJldHVybiAxMzsgfVxuICAgIHN0YXRpYyBnZXQgQ09NTUFORCgpIHsgcmV0dXJuIDE1OyB9XG4gICAgc3RhdGljIGdldCBTSElGVCgpIHsgcmV0dXJuIDE2OyB9XG4gICAgc3RhdGljIGdldCBDT05UUk9MKCkgeyByZXR1cm4gMTc7IH1cbiAgICBzdGF0aWMgZ2V0IEFMVEVSTkFURSgpIHsgcmV0dXJuIDE4OyB9XG4gICAgc3RhdGljIGdldCBQQVVTRSgpIHsgcmV0dXJuIDE4OyB9XG4gICAgc3RhdGljIGdldCBDQVBTTE9DSygpIHsgcmV0dXJuIDE4OyB9XG4gICAgc3RhdGljIGdldCBFU0NBUEUoKSB7IHJldHVybiAyNzsgfVxuICAgIHN0YXRpYyBnZXQgU1BBQ0UoKSB7IHJldHVybiAzMjsgfVxuICAgIHN0YXRpYyBnZXQgUEFHRV9VUCgpIHsgcmV0dXJuIDMzOyB9XG4gICAgc3RhdGljIGdldCBQQUdFX0RPV04oKSB7IHJldHVybiAzNDsgfVxuICAgIHN0YXRpYyBnZXQgRU5EKCkgeyByZXR1cm4gMzU7IH1cbiAgICBzdGF0aWMgZ2V0IEhPTUUoKSB7IHJldHVybiAzNjsgfVxuICAgIHN0YXRpYyBnZXQgTEVGVCgpIHsgcmV0dXJuIDM3OyB9XG4gICAgc3RhdGljIGdldCBVUCgpIHsgcmV0dXJuIDM4OyB9XG4gICAgc3RhdGljIGdldCBSSUdIVCgpIHsgcmV0dXJuIDM5OyB9XG4gICAgc3RhdGljIGdldCBET1dOKCkgeyByZXR1cm4gNDA7IH1cbiAgICBzdGF0aWMgZ2V0IElOU0VSVCgpIHsgcmV0dXJuIDQ1OyB9XG4gICAgc3RhdGljIGdldCBERUxFVEUoKSB7IHJldHVybiA0NjsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzAoKSB7IHJldHVybiA0ODsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzEoKSB7IHJldHVybiA0OTsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzIoKSB7IHJldHVybiA1MDsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzMoKSB7IHJldHVybiA1MTsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzQoKSB7IHJldHVybiA1MjsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzUoKSB7IHJldHVybiA1MzsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzYoKSB7IHJldHVybiA1NDsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzcoKSB7IHJldHVybiA1NTsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzgoKSB7IHJldHVybiA1NjsgfVxuICAgIHN0YXRpYyBnZXQgTlVNQkVSXzkoKSB7IHJldHVybiA1NzsgfVxuICAgIHN0YXRpYyBnZXQgQSgpIHsgcmV0dXJuIDY1OyB9XG4gICAgc3RhdGljIGdldCBCKCkgeyByZXR1cm4gNjY7IH1cbiAgICBzdGF0aWMgZ2V0IEMoKSB7IHJldHVybiA2NzsgfVxuICAgIHN0YXRpYyBnZXQgRCgpIHsgcmV0dXJuIDY4OyB9XG4gICAgc3RhdGljIGdldCBFKCkgeyByZXR1cm4gNjk7IH1cbiAgICBzdGF0aWMgZ2V0IEYoKSB7IHJldHVybiA3MDsgfVxuICAgIHN0YXRpYyBnZXQgRygpIHsgcmV0dXJuIDcxOyB9XG4gICAgc3RhdGljIGdldCBIKCkgeyByZXR1cm4gNzI7IH1cbiAgICBzdGF0aWMgZ2V0IEkoKSB7IHJldHVybiA3MzsgfVxuICAgIHN0YXRpYyBnZXQgSigpIHsgcmV0dXJuIDc0OyB9XG4gICAgc3RhdGljIGdldCBLKCkgeyByZXR1cm4gNzU7IH1cbiAgICBzdGF0aWMgZ2V0IEwoKSB7IHJldHVybiA3NjsgfVxuICAgIHN0YXRpYyBnZXQgTSgpIHsgcmV0dXJuIDc3OyB9XG4gICAgc3RhdGljIGdldCBOKCkgeyByZXR1cm4gNzg7IH1cbiAgICBzdGF0aWMgZ2V0IE8oKSB7IHJldHVybiA3OTsgfVxuICAgIHN0YXRpYyBnZXQgUCgpIHsgcmV0dXJuIDgwOyB9XG4gICAgc3RhdGljIGdldCBRKCkgeyByZXR1cm4gODE7IH1cbiAgICBzdGF0aWMgZ2V0IFIoKSB7IHJldHVybiA4MjsgfVxuICAgIHN0YXRpYyBnZXQgUygpIHsgcmV0dXJuIDgzOyB9XG4gICAgc3RhdGljIGdldCBUKCkgeyByZXR1cm4gODQ7IH1cbiAgICBzdGF0aWMgZ2V0IFUoKSB7IHJldHVybiA4NTsgfVxuICAgIHN0YXRpYyBnZXQgVigpIHsgcmV0dXJuIDg2OyB9XG4gICAgc3RhdGljIGdldCBXKCkgeyByZXR1cm4gODc7IH1cbiAgICBzdGF0aWMgZ2V0IFgoKSB7IHJldHVybiA4ODsgfVxuICAgIHN0YXRpYyBnZXQgWSgpIHsgcmV0dXJuIDg5OyB9XG4gICAgc3RhdGljIGdldCBaKCkgeyByZXR1cm4gOTA7IH1cbiAgICBzdGF0aWMgZ2V0IExFRlRfV0lORE9XKCkgeyByZXR1cm4gOTE7IH1cbiAgICBzdGF0aWMgZ2V0IFJJR0hUX1dJTkRPVygpIHsgcmV0dXJuIDkyOyB9XG4gICAgc3RhdGljIGdldCBSSUdIVF9NRU5VKCkgeyByZXR1cm4gOTM7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF8wKCkgeyByZXR1cm4gOTY7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF8xKCkgeyByZXR1cm4gOTc7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF8yKCkgeyByZXR1cm4gOTg7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF8zKCkgeyByZXR1cm4gOTk7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF80KCkgeyByZXR1cm4gMTAwOyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfNSgpIHsgcmV0dXJuIDEwMTsgfVxuICAgIHN0YXRpYyBnZXQgTlVNUEFEXzYoKSB7IHJldHVybiAxMDI7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF83KCkgeyByZXR1cm4gMTAzOyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfOCgpIHsgcmV0dXJuIDEwNDsgfVxuICAgIHN0YXRpYyBnZXQgTlVNUEFEXzkoKSB7IHJldHVybiAxMDU7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF9NVUxUSVBMWSgpIHsgcmV0dXJuIDEwNjsgfVxuICAgIHN0YXRpYyBnZXQgTlVNUEFEX0FERCgpIHsgcmV0dXJuIDEwNzsgfVxuICAgIHN0YXRpYyBnZXQgTlVNUEFEX0VOVEVSKCkgeyByZXR1cm4gMTA4OyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfU1VCVFJBQ1QoKSB7IHJldHVybiAxMDk7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF9ERUNJTUFMKCkgeyByZXR1cm4gMTEwOyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfRElWSURFKCkgeyByZXR1cm4gMTExOyB9XG4gICAgc3RhdGljIGdldCBGMSgpIHsgcmV0dXJuIDExMjsgfVxuICAgIHN0YXRpYyBnZXQgRjIoKSB7IHJldHVybiAxMTM7IH1cbiAgICBzdGF0aWMgZ2V0IEYzKCkgeyByZXR1cm4gMTE0OyB9XG4gICAgc3RhdGljIGdldCBGNCgpIHsgcmV0dXJuIDExNTsgfVxuICAgIHN0YXRpYyBnZXQgRjUoKSB7IHJldHVybiAxMTY7IH1cbiAgICBzdGF0aWMgZ2V0IEY2KCkgeyByZXR1cm4gMTE3OyB9XG4gICAgc3RhdGljIGdldCBGNygpIHsgcmV0dXJuIDExODsgfVxuICAgIHN0YXRpYyBnZXQgRjgoKSB7IHJldHVybiAxMTk7IH1cbiAgICBzdGF0aWMgZ2V0IEY5KCkgeyByZXR1cm4gMTIwOyB9XG4gICAgc3RhdGljIGdldCBGMTAoKSB7IHJldHVybiAxMjE7IH1cbiAgICBzdGF0aWMgZ2V0IEYxMSgpIHsgcmV0dXJuIDEyMjsgfVxuICAgIHN0YXRpYyBnZXQgRjEyKCkgeyByZXR1cm4gMTIzOyB9XG4gICAgc3RhdGljIGdldCBGMTMoKSB7IHJldHVybiAxMjQ7IH1cbiAgICBzdGF0aWMgZ2V0IEYxNCgpIHsgcmV0dXJuIDEyNTsgfVxuICAgIHN0YXRpYyBnZXQgRjE1KCkgeyByZXR1cm4gMTI2OyB9XG4gICAgc3RhdGljIGdldCBTRU1JQ09MT04oKSB7IHJldHVybiAxODY7IH1cbiAgICBzdGF0aWMgZ2V0IEVRVUFMKCkgeyByZXR1cm4gMTg3OyB9XG4gICAgc3RhdGljIGdldCBDT01NQSgpIHsgcmV0dXJuIDE4ODsgfVxuICAgIHN0YXRpYyBnZXQgREFTSCgpIHsgcmV0dXJuIDE4OTsgfVxuICAgIHN0YXRpYyBnZXQgUEVSSU9EKCkgeyByZXR1cm4gMTkwOyB9XG4gICAgc3RhdGljIGdldCBCQUNLUVVPVEUoKSB7IHJldHVybiAxOTI7IH1cbiAgICBzdGF0aWMgZ2V0IEJBQ0tTTEFTSCgpIHsgcmV0dXJuIDIyMDsgfVxuICAgIHN0YXRpYyBnZXQgUVVPVEUoKSB7IHJldHVybiAyMjI7IH1cblxuXG4gICAgLypcbiAgICAgY29uc3Qga2V5Q29kZXMgPSB7XG4gICAgIDMgOiBcImJyZWFrXCIsXG4gICAgIDggOiBcImJhY2tzcGFjZSAvIGRlbGV0ZVwiLFxuICAgICA5IDogXCJ0YWJcIixcbiAgICAgMTIgOiAnY2xlYXInLFxuICAgICAxMyA6IFwiZW50ZXJcIixcbiAgICAgMTYgOiBcInNoaWZ0XCIsXG4gICAgIDE3IDogXCJjdHJsXCIsXG4gICAgIDE4IDogXCJhbHRcIixcbiAgICAgMTkgOiBcInBhdXNlL2JyZWFrXCIsXG4gICAgIDIwIDogXCJjYXBzIGxvY2tcIixcbiAgICAgMjcgOiBcImVzY2FwZVwiLFxuICAgICAzMiA6IFwic3BhY2ViYXJcIixcbiAgICAgMzMgOiBcInBhZ2UgdXBcIixcbiAgICAgMzQgOiBcInBhZ2UgZG93blwiLFxuICAgICAzNSA6IFwiZW5kXCIsXG4gICAgIDM2IDogXCJob21lIFwiLFxuICAgICAzNyA6IFwibGVmdCBhcnJvdyBcIixcbiAgICAgMzggOiBcInVwIGFycm93IFwiLFxuICAgICAzOSA6IFwicmlnaHQgYXJyb3dcIixcbiAgICAgNDAgOiBcImRvd24gYXJyb3cgXCIsXG4gICAgIDQxIDogXCJzZWxlY3RcIixcbiAgICAgNDIgOiBcInByaW50XCIsXG4gICAgIDQzIDogXCJleGVjdXRlXCIsXG4gICAgIDQ0IDogXCJQcmludCBTY3JlZW5cIixcbiAgICAgNDUgOiBcImluc2VydCBcIixcbiAgICAgNDYgOiBcImRlbGV0ZVwiLFxuICAgICA0OCA6IFwiMFwiLFxuICAgICA0OSA6IFwiMVwiLFxuICAgICA1MCA6IFwiMlwiLFxuICAgICA1MSA6IFwiM1wiLFxuICAgICA1MiA6IFwiNFwiLFxuICAgICA1MyA6IFwiNVwiLFxuICAgICA1NCA6IFwiNlwiLFxuICAgICA1NSA6IFwiN1wiLFxuICAgICA1NiA6IFwiOFwiLFxuICAgICA1NyA6IFwiOVwiLFxuICAgICA1OCA6IFwiOlwiLFxuICAgICA1OSA6IFwic2VtaWNvbG9uIChmaXJlZm94KSwgZXF1YWxzXCIsXG4gICAgIDYwIDogXCI8XCIsXG4gICAgIDYxIDogXCJlcXVhbHMgKGZpcmVmb3gpXCIsXG4gICAgIDYzIDogXCLDn1wiLFxuICAgICA2NCA6IFwiQCAoZmlyZWZveClcIixcbiAgICAgNjUgOiBcImFcIixcbiAgICAgNjYgOiBcImJcIixcbiAgICAgNjcgOiBcImNcIixcbiAgICAgNjggOiBcImRcIixcbiAgICAgNjkgOiBcImVcIixcbiAgICAgNzAgOiBcImZcIixcbiAgICAgNzEgOiBcImdcIixcbiAgICAgNzIgOiBcImhcIixcbiAgICAgNzMgOiBcImlcIixcbiAgICAgNzQgOiBcImpcIixcbiAgICAgNzUgOiBcImtcIixcbiAgICAgNzYgOiBcImxcIixcbiAgICAgNzcgOiBcIm1cIixcbiAgICAgNzggOiBcIm5cIixcbiAgICAgNzkgOiBcIm9cIixcbiAgICAgODAgOiBcInBcIixcbiAgICAgODEgOiBcInFcIixcbiAgICAgODIgOiBcInJcIixcbiAgICAgODMgOiBcInNcIixcbiAgICAgODQgOiBcInRcIixcbiAgICAgODUgOiBcInVcIixcbiAgICAgODYgOiBcInZcIixcbiAgICAgODcgOiBcIndcIixcbiAgICAgODggOiBcInhcIixcbiAgICAgODkgOiBcInlcIixcbiAgICAgOTAgOiBcInpcIixcbiAgICAgOTEgOiBcIldpbmRvd3MgS2V5IC8gTGVmdCDijJggLyBDaHJvbWVib29rIFNlYXJjaCBrZXlcIixcbiAgICAgOTIgOiBcInJpZ2h0IHdpbmRvdyBrZXkgXCIsXG4gICAgIDkzIDogXCJXaW5kb3dzIE1lbnUgLyBSaWdodCDijJhcIixcbiAgICAgOTYgOiBcIm51bXBhZCAwIFwiLFxuICAgICA5NyA6IFwibnVtcGFkIDEgXCIsXG4gICAgIDk4IDogXCJudW1wYWQgMiBcIixcbiAgICAgOTkgOiBcIm51bXBhZCAzIFwiLFxuICAgICAxMDAgOiBcIm51bXBhZCA0IFwiLFxuICAgICAxMDEgOiBcIm51bXBhZCA1IFwiLFxuICAgICAxMDIgOiBcIm51bXBhZCA2IFwiLFxuICAgICAxMDMgOiBcIm51bXBhZCA3IFwiLFxuICAgICAxMDQgOiBcIm51bXBhZCA4IFwiLFxuICAgICAxMDUgOiBcIm51bXBhZCA5IFwiLFxuICAgICAxMDYgOiBcIm11bHRpcGx5IFwiLFxuICAgICAxMDcgOiBcImFkZFwiLFxuICAgICAxMDggOiBcIm51bXBhZCBwZXJpb2QgKGZpcmVmb3gpXCIsXG4gICAgIDEwOSA6IFwic3VidHJhY3QgXCIsXG4gICAgIDExMCA6IFwiZGVjaW1hbCBwb2ludFwiLFxuICAgICAxMTEgOiBcImRpdmlkZSBcIixcbiAgICAgMTEyIDogXCJmMSBcIixcbiAgICAgMTEzIDogXCJmMiBcIixcbiAgICAgMTE0IDogXCJmMyBcIixcbiAgICAgMTE1IDogXCJmNCBcIixcbiAgICAgMTE2IDogXCJmNSBcIixcbiAgICAgMTE3IDogXCJmNiBcIixcbiAgICAgMTE4IDogXCJmNyBcIixcbiAgICAgMTE5IDogXCJmOCBcIixcbiAgICAgMTIwIDogXCJmOSBcIixcbiAgICAgMTIxIDogXCJmMTBcIixcbiAgICAgMTIyIDogXCJmMTFcIixcbiAgICAgMTIzIDogXCJmMTJcIixcbiAgICAgMTI0IDogXCJmMTNcIixcbiAgICAgMTI1IDogXCJmMTRcIixcbiAgICAgMTI2IDogXCJmMTVcIixcbiAgICAgMTI3IDogXCJmMTZcIixcbiAgICAgMTI4IDogXCJmMTdcIixcbiAgICAgMTI5IDogXCJmMThcIixcbiAgICAgMTMwIDogXCJmMTlcIixcbiAgICAgMTMxIDogXCJmMjBcIixcbiAgICAgMTMyIDogXCJmMjFcIixcbiAgICAgMTMzIDogXCJmMjJcIixcbiAgICAgMTM0IDogXCJmMjNcIixcbiAgICAgMTM1IDogXCJmMjRcIixcbiAgICAgMTQ0IDogXCJudW0gbG9jayBcIixcbiAgICAgMTQ1IDogXCJzY3JvbGwgbG9ja1wiLFxuICAgICAxNjAgOiBcIl5cIixcbiAgICAgMTYxOiAnIScsXG4gICAgIDE2MyA6IFwiI1wiLFxuICAgICAxNjQ6ICckJyxcbiAgICAgMTY1OiAnw7knLFxuICAgICAxNjYgOiBcInBhZ2UgYmFja3dhcmRcIixcbiAgICAgMTY3IDogXCJwYWdlIGZvcndhcmRcIixcbiAgICAgMTY5IDogXCJjbG9zaW5nIHBhcmVuIChBWkVSVFkpXCIsXG4gICAgIDE3MDogJyonLFxuICAgICAxNzEgOiBcIn4gKyAqIGtleVwiLFxuICAgICAxNzMgOiBcIm1pbnVzIChmaXJlZm94KSwgbXV0ZS91bm11dGVcIixcbiAgICAgMTc0IDogXCJkZWNyZWFzZSB2b2x1bWUgbGV2ZWxcIixcbiAgICAgMTc1IDogXCJpbmNyZWFzZSB2b2x1bWUgbGV2ZWxcIixcbiAgICAgMTc2IDogXCJuZXh0XCIsXG4gICAgIDE3NyA6IFwicHJldmlvdXNcIixcbiAgICAgMTc4IDogXCJzdG9wXCIsXG4gICAgIDE3OSA6IFwicGxheS9wYXVzZVwiLFxuICAgICAxODAgOiBcImUtbWFpbFwiLFxuICAgICAxODEgOiBcIm11dGUvdW5tdXRlIChmaXJlZm94KVwiLFxuICAgICAxODIgOiBcImRlY3JlYXNlIHZvbHVtZSBsZXZlbCAoZmlyZWZveClcIixcbiAgICAgMTgzIDogXCJpbmNyZWFzZSB2b2x1bWUgbGV2ZWwgKGZpcmVmb3gpXCIsXG4gICAgIDE4NiA6IFwic2VtaS1jb2xvbiAvIMOxXCIsXG4gICAgIDE4NyA6IFwiZXF1YWwgc2lnbiBcIixcbiAgICAgMTg4IDogXCJjb21tYVwiLFxuICAgICAxODkgOiBcImRhc2ggXCIsXG4gICAgIDE5MCA6IFwicGVyaW9kIFwiLFxuICAgICAxOTEgOiBcImZvcndhcmQgc2xhc2ggLyDDp1wiLFxuICAgICAxOTIgOiBcImdyYXZlIGFjY2VudCAvIMOxIC8gw6ZcIixcbiAgICAgMTkzIDogXCI/LCAvIG9yIMKwXCIsXG4gICAgIDE5NCA6IFwibnVtcGFkIHBlcmlvZCAoY2hyb21lKVwiLFxuICAgICAyMTkgOiBcIm9wZW4gYnJhY2tldCBcIixcbiAgICAgMjIwIDogXCJiYWNrIHNsYXNoIFwiLFxuICAgICAyMjEgOiBcImNsb3NlIGJyYWNrZXQgLyDDpVwiLFxuICAgICAyMjIgOiBcInNpbmdsZSBxdW90ZSAvIMO4XCIsXG4gICAgIDIyMyA6IFwiYFwiLFxuICAgICAyMjQgOiBcImxlZnQgb3IgcmlnaHQg4oyYIGtleSAoZmlyZWZveClcIixcbiAgICAgMjI1IDogXCJhbHRnclwiLFxuICAgICAyMjYgOiBcIjwgL2dpdCA+XCIsXG4gICAgIDIzMCA6IFwiR05PTUUgQ29tcG9zZSBLZXlcIixcbiAgICAgMjMxIDogXCLDp1wiLFxuICAgICAyMzMgOiBcIlhGODZGb3J3YXJkXCIsXG4gICAgIDIzNCA6IFwiWEY4NkJhY2tcIixcbiAgICAgMjU1IDogXCJ0b2dnbGUgdG91Y2hwYWRcIlxuICAgICB9O1xuICAgICAqL1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdHMvS2V5Q29kZS5qcyIsImltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9zcmMvc2F0L1BvaW50JztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi4vLi4vc3JjL3NhdC9DaXJjbGUnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi4vLi4vc3JjL3NhdC9Qb2x5Z29uJztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vc3JjL2dlb20vVmVjdG9yJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uLy4uL3NyYy91dGlscy9QYWludGVyJztcbmltcG9ydCBNb3VzZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMvTW91c2UnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi4vLi4vc3JjL2NvbnN0cy9LZXlDb2RlJztcblxuY29uc3QgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpXG4gICAgLCBkZWJ1Z0dyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICwgc2hhcGVzID0gW11cbiAgICAsIExJTkVfQ09MT1IgPSAweDg0RDJGNlxuICAgICwgQVJST1dfQ09MT1IgPSAweEU1NzM3MztcblxubGV0IHBvbHlnb25Qb2ludHMgPSBbXG4gICAgW25ldyBQb2ludCgzNTAsIDM1MCksIG5ldyBQb2ludCgzNTAsIDUwMCksIG5ldyBQb2ludCg1MDAsIDUwMCldLFxuICAgIFtuZXcgUG9pbnQoNTAwLCAyMDApLCBuZXcgUG9pbnQoNDgwLCAyNTApLCBuZXcgUG9pbnQoNjAwLCAyNTApLCBuZXcgUG9pbnQoNjIwLCAyMDApXSxcbiAgICBbbmV3IFBvaW50KDI1OCwgMTIwKSwgbmV3IFBvaW50KDI5NSwgMjMwKSwgbmV3IFBvaW50KDIwMCwgMzAwKSwgbmV3IFBvaW50KDEwNSwgMjMwKSwgbmV3IFBvaW50KDE0MiwgMTIwKV1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lclxue1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB3aW5kb3dbJ2cnXSA9IGRlYnVnR3JhcGhpY3M7XG5cbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG5cbiAgICBpbml0aWFsaXplKClcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoZ3JhcGhpY3MpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChkZWJ1Z0dyYXBoaWNzKTtcblxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludCA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZyA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgLy90aGlzLmNyZWF0ZVBvbHlnb24oKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9seWdvbk1hbnVhbCgpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWRkRXZlbnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5vbignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoKSB7fVxuXG5cbiAgICByZXNpemUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cblxuICAgIGdldFBvbHlnb25Qb2ludHModHgsIHR5LCBhbmdsZSwgcmFkaXVzID0gMTAwKVxuICAgIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG5cbiAgICAgICAgLy8gbWFraW5nIHBvaW50cywgcGF0aFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuZ2xlOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgeCA9IHR4ICsgKHJhZGl1cyAqIC1NYXRoLnNpbih0aGlzLnRvUmFkaWFuKDM2MCAvIGFuZ2xlICogaSkpKTtcbiAgICAgICAgICAgIGxldCB5ID0gdHkgKyAocmFkaXVzICogIE1hdGguY29zKHRoaXMudG9SYWRpYW4oMzYwIC8gYW5nbGUgKiBpKSkpO1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gbmV3IFBJWEkuUG9pbnQoeCwgeSk7XG4gICAgICAgICAgICBwb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cblxuXG4gICAgdG9SYWRpYW4oZGVncmVlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGRlZ3JlZSAqIE1hdGguUEkgLyAxODA7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVQb2x5Z29uKHVzZVJhbmRvbVJvdGF0ZSA9IGZhbHNlKVxuICAgIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvbHlnb25Qb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwb2x5Z29uID0gbmV3IFBvbHlnb24oY29udGV4dCksXG4gICAgICAgICAgICAgICAgcG9pbnRzID0gcG9seWdvblBvaW50c1tpXTtcblxuICAgICAgICAgICAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcG9seWdvbi5hZGRQb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXNlUmFuZG9tUm90YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVTaGFwZShwb2x5Z29uLCBNYXRoLnJhbmRvbSgpICogNDUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGFwZXMucHVzaChwb2x5Z29uKTtcblxuICAgICAgICAgICAgcG9seWdvbi5jcmVhdGVQYXRoKGdyYXBoaWNzLCBMSU5FX0NPTE9SKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY3JlYXRlUG9seWdvbk1hbnVhbCgpXG4gICAge1xuICAgICAgICBsZXQgcmFkaXVzID0gMTAwLFxuICAgICAgICAgICAgZGlhbWV0ZXIgPSAyMDAsXG4gICAgICAgICAgICBzcGFjZSA9IDIwLFxuICAgICAgICAgICAgYSA9IHJhZGl1cyArIHNwYWNlLFxuICAgICAgICAgICAgYiA9IHJhZGl1cyArIGRpYW1ldGVyICsgc3BhY2UgKiAyLFxuICAgICAgICAgICAgYyA9IHJhZGl1cyArIGRpYW1ldGVyICogMiArIHNwYWNlICogMztcblxuICAgICAgICBwb2x5Z29uUG9pbnRzID0gW107XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYSwgMykpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGEsIDQpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhjLCBhLCA1KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYiwgNikpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGIsIDcpKTtcbiAgICAgICAgcG9seWdvblBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seWdvblBvaW50cyhjLCBiLCA4KSk7XG4gICAgICAgIHBvbHlnb25Qb2ludHMucHVzaCh0aGlzLmdldFBvbHlnb25Qb2ludHMoYSwgYywgOSkpO1xuICAgICAgICBwb2x5Z29uUG9pbnRzLnB1c2godGhpcy5nZXRQb2x5Z29uUG9pbnRzKGIsIGMsIDEwKSk7XG4gICAgICAgIHRoaXMuYWRkQ2lyY2xlKGMsIGMsIHJhZGl1cyk7XG4gICAgICAgIC8vdGhpcy5hZGRDaXJjbGUoYywgYywgcmFkaXVzKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVBvbHlnb24odHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBhZGRQb2x5Z29uKGluZGV4LCB1c2VSYW5kb21Sb3RhdGUgPSB0cnVlKVxuICAgIHtcbiAgICAgICAgbGV0IHBvbHlnb24gPSBuZXcgUG9seWdvbih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGxldCBwb2ludHMgPSBwb2x5Z29uUG9pbnRzW2luZGV4XTtcblxuICAgICAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgIHBvbHlnb24uYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1c2VSYW5kb21Sb3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU2hhcGUocG9seWdvbiwgKE1hdGgucmFuZG9tKCkgKiA0NSkgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvbHlnb24uY3JlYXRlUGF0aChncmFwaGljcywgTElORV9DT0xPUik7XG4gICAgICAgIHNoYXBlcy5wdXNoKHBvbHlnb24pO1xuICAgIH1cblxuXG4gICAgYWRkQ2lyY2xlKHgsIHksIHJhZGl1cylcbiAgICB7XG4gICAgICAgIGxldCBjaXJjbGUgPSBuZXcgQ2lyY2xlKHRoaXMuY29udGV4dCwgeCwgeSwgcmFkaXVzKTtcbiAgICAgICAgY2lyY2xlLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICBzaGFwZXMucHVzaChjaXJjbGUpO1xuICAgICAgICB0aGlzLmNpcmNsZSA9IGNpcmNsZTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVJlbmRlcigpXG4gICAge1xuICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgIHNoYXBlcy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBwb2x5Z29uLmNyZWF0ZVBhdGgoZ3JhcGhpY3MsIExJTkVfQ09MT1IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGRldGVjdENvbGxpc2lvbnMoKVxuICAgIHtcbiAgICAgICAgbGV0IGRyYWdTaGFwZSA9IHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQ7XG5cbiAgICAgICAgaWYgKCFkcmFnU2hhcGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoc2hhcGUgIT09IGRyYWdTaGFwZSkge1xuICAgICAgICAgICAgICAgIGxldCBtdHYgPSBkcmFnU2hhcGUuY29sbGlkZXNXaXRoKHNoYXBlKTtcblxuICAgICAgICAgICAgICAgIC8vIOy2qeuPjCDtjJDsoJVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25EZXRlY3RlZChtdHYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVNoYXBlQnlNVFYobXR2LCBkcmFnU2hhcGUsIHNoYXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogbXR266GcIOy2qeuPjCDtjJDsoJVcbiAgICAgKiBAcGFyYW0gbXR2XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY29sbGlzaW9uRGV0ZWN0ZWQobXR2KVxuICAgIHtcbiAgICAgICAgLy8g7Lap64+MIO2MkOyglVxuICAgICAgICBpZiAobXR2LmF4aXMgIT0gdW5kZWZpbmVkIHx8IG10di5vdmVybGFwICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjaGVja01UVkF4aXNEaXJlY3Rpb24obXR2LCBjb2xsaWRlciwgY29sbGlkZWUpXG4gICAge1xuICAgICAgICBpZiAobXR2LmF4aXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgY29sbGlkZXJDZW50ZXIgPSBWZWN0b3IuZnJvbU9iamVjdChjb2xsaWRlci5nZXRDZW50ZXIoKSksXG4gICAgICAgICAgICBjb2xsaWRlZUNlbnRlciA9IFZlY3Rvci5mcm9tT2JqZWN0KGNvbGxpZGVlLmdldENlbnRlcigpKSxcbiAgICAgICAgICAgIGNlbnRlclZlY3RvciA9IGNvbGxpZGVlQ2VudGVyLnN1YnRyYWN0KGNvbGxpZGVyQ2VudGVyKSxcbiAgICAgICAgICAgIGNlbnRlclVuaXRWZWN0b3IgPSBWZWN0b3IuZnJvbU9iamVjdChjZW50ZXJWZWN0b3IpLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIGlmIChjZW50ZXJVbml0VmVjdG9yLmRvdFByb2R1Y3QobXR2LmF4aXMpID4gMCkge1xuICAgICAgICAgICAgbXR2LmF4aXMueCA9IC1tdHYuYXhpcy54O1xuICAgICAgICAgICAgbXR2LmF4aXMueSA9IC1tdHYuYXhpcy55O1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbXR2XG4gICAgICogQHBhcmFtIGNvbGxpZGVyIOy2qeuPjO2VnCDqsJ3ssrRcbiAgICAgKiBAcGFyYW0gY29sbGlkZWUg7Lap64+M7J2EIOuLue2VnCDqsJ3ssrRcbiAgICAgKi9cbiAgICBtb3ZlU2hhcGVCeU1UVihtdHYsIGNvbGxpZGVyLCBjb2xsaWRlZSlcbiAgICB7XG4gICAgICAgIGlmIChtdHYuYXhpcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtdHYuYXhpcyA9IG5ldyBWZWN0b3IoMSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZHggPSBtdHYuYXhpcy54ICogbXR2Lm92ZXJsYXAsXG4gICAgICAgICAgICBkeSA9IG10di5heGlzLnkgKiBtdHYub3ZlcmxhcDtcblxuICAgICAgICBsZXQgZHJhZ1ZlY3RvciA9IHRoaXMuZHJhZ1ZlY3RvcixcbiAgICAgICAgICAgIGNlbnRlckNvbGxpZGVyID0gY29sbGlkZXIuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICBjZW50ZXJDb2xsaWRlZSA9IGNvbGxpZGVlLmdldENlbnRlcigpLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcihjZW50ZXJDb2xsaWRlZS54IC0gY2VudGVyQ29sbGlkZXIueCwgY2VudGVyQ29sbGlkZWUueSAtIGNlbnRlckNvbGxpZGVyLnkpLFxuICAgICAgICAgICAgZGlyZWN0aW9uTm9ybSA9IGRpcmVjdGlvbi5ub3JtKCksXG4gICAgICAgICAgICBvdmVybGFwVmVjdG9yID0gbmV3IFZlY3RvcihkeCwgZHkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDrgrTsoIHsnbQgLTHsnbTrqbQg67CY64yAIOuwqe2WpeydhCDrs7TripQg6rKDXG4gICAgICAgICAqIOuCtOyggeydtCAw7J2066m0IOyImOyngVxuICAgICAgICAgKiDrgrTsoIHsnbQgMeyduCDqsr3smrAg6rCZ7J2AIOuwqe2WpeydhCDqsIDrpqztgqTripQg6rKDXG4gICAgICAgICAqIOuCtOyggeydtCA+IDAuOCDri6TrqbQg6rCZ7J2AIOuwqe2WpeydhCDrs7Tqs6Ag7J6I64qUIOyDge2DnFxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRvdCA9IGRyYWdWZWN0b3IuZG90UHJvZHVjdChvdmVybGFwVmVjdG9yKTtcblxuICAgICAgICBpZiAoZG90IDwgMCkge1xuICAgICAgICAgICAgZHggPSAtZHg7XG4gICAgICAgICAgICBkeSA9IC1keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjID0gY29sbGlkZWUuZ2V0Q2VudGVyKCksXG4gICAgICAgICAgICB0byA9IG5ldyBWZWN0b3IoZHgsIGR5KSxcbiAgICAgICAgICAgIHRvTm9ybWFsaXplID0gdG8uY2xvbmUoKS5ub3JtKCksXG4gICAgICAgICAgICBkb3RUbyA9IGRpcmVjdGlvbk5vcm0uZG90UHJvZHVjdCh0b05vcm1hbGl6ZSksXG4gICAgICAgICAgICBjZW50ZXIgPSBuZXcgVmVjdG9yKGMueCwgYy55KTtcbiAgICAgICAgdG8gPSBjZW50ZXIuY2xvbmUoKS5zdWJ0cmFjdCh0byk7XG5cbiAgICAgICAgLy8g65GQIOqwneyytOydmCDrsKntlqUg67Kh7YSw7JmAIOuwgOyWtOuCtOuKlCDrsLHthLAodG8p7J2YIOuCtOyggeydtCAw67O064ukIO2BtCDqsr3smrAsIOymiSDrsIDslrQg64K064qUIOuwqe2WpeydtCDrsIDslrTrgrTripQg67Cp7Zal7J28IOuVjOunjCDsoIHsmqlcbiAgICAgICAgaWYgKGRvdFRvID49IDApIHtcbiAgICAgICAgICAgIFBhaW50ZXIuZHJhd0Fycm93KHdpbmRvdy5nLCBjZW50ZXIsIHRvLCBmYWxzZSwgMSwgQVJST1dfQ09MT1IpO1xuICAgICAgICAgICAgLy9QYWludGVyLmRyYXdQb2ludCh3aW5kb3cuZywgdGhpcy5jaXJjbGUuZ2V0Q2VudGVyKCksIGZhbHNlLCAxMCwgMHhmZjMzMDAsIDAuMik7XG4gICAgICAgICAgICBjb2xsaWRlZS5tb3ZlKGR4LCBkeSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJvdGF0ZVNoYXBlKHNoYXBlLCBkZWdyZWVzKVxuICAgIHtcbiAgICAgICAgLy9kZWdyZWVzID0gOTA7XG4gICAgICAgIGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cbiAgICAgICAgaWYgKHBvaW50cykge1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHNoYXBlLmdldENlbnRlcigpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCAgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICAgICAgICAgICAgcG9pbnRzW2ldID0gdGhpcy5yb3RhdGlvblBvaW50KGNlbnRlciwgcG9pbnQsIGRlZ3JlZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDtmozsoITtlZjripQg7KKM7ZGcIOq1rO2VmOq4sFxuICAgICAqIEBwYXJhbSBwaXZvdCDsgqzqsIHtmJXsnZgg7KSR7Ius7KCQXG4gICAgICogQHBhcmFtIHBvaW50IOqzhOyCsO2VmOqzoCDsi7bsnYAg7Y+s7J247Yq4XG4gICAgICogQHBhcmFtIGRlZ3JlZXMg7ZqM7KCE6rCBIGRlZ3JlZXNcbiAgICAgKiBAcmV0dXJucyB7e3g6IChudW1iZXJ8KiksIHk6IChudW1iZXJ8Kil9fVxuICAgICAqL1xuICAgIHJvdGF0aW9uUG9pbnQocGl2b3QsIHBvaW50LCBkZWdyZWVzKVxuICAgIHtcbiAgICAgICAgbGV0IGRpZmZYID0gcG9pbnQueCAtIHBpdm90Lng7XG4gICAgICAgIGxldCBkaWZmWSA9IHBvaW50LnkgLSBwaXZvdC55O1xuICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSk7XG4gICAgICAgIGxldCBjYSA9IE1hdGguYXRhbjIoZGlmZlksIGRpZmZYKSAqICgxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgbGV0IG5hID0gKChjYSArIGRlZ3JlZXMpICUgMzYwKSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IHggPSAocGl2b3QueCArIGRpc3QgKiBNYXRoLmNvcyhuYSkgKyAwLjUpIHwgMDtcbiAgICAgICAgbGV0IHkgPSAocGl2b3QueSArIGRpc3QgKiBNYXRoLnNpbihuYSkgKyAwLjUpIHwgMDtcbiAgICAgICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcbiAgICB9XG5cblxuICAgIG9uTW91c2VEb3duKClcbiAgICB7XG4gICAgICAgIGRlYnVnR3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gVmVjdG9yLmZyb21PYmplY3QoTW91c2UuZ2xvYmFsKTtcblxuICAgICAgICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGFwZS5pc1BvaW50SW5QYXRoKGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludC54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25Qb2ludC55ID0gY3VycmVudFBvaW50Lnk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy55ID0gY3VycmVudFBvaW50Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgb25Nb3VzZU1vdmUoKVxuICAgIHtcbiAgICAgICAgZGVidWdHcmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgIGxldCBjdXJyZW50UG9pbnQsIGRyYWdWZWN0b3I7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hhcGVCZWluZ0RyYWdnZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQb2ludCA9IFZlY3Rvci5mcm9tT2JqZWN0KE1vdXNlLmdsb2JhbCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ1ZlY3RvciA9IGRyYWdWZWN0b3IgPSBjdXJyZW50UG9pbnQuY2xvbmUoKS5zdWJ0cmFjdCh0aGlzLmxhc3RkcmFnKTtcblxuICAgICAgICAgICAgdGhpcy5zaGFwZUJlaW5nRHJhZ2dlZC5tb3ZlKGRyYWdWZWN0b3IueCwgZHJhZ1ZlY3Rvci55KTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0ZHJhZy54ID0gY3VycmVudFBvaW50Lng7XG4gICAgICAgICAgICB0aGlzLmxhc3RkcmFnLnkgPSBjdXJyZW50UG9pbnQueTtcblxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlVXAoKVxuICAgIHtcbiAgICAgICAgZGVidWdHcmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnNoYXBlQmVpbmdEcmFnZ2VkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vXG4gICAgLy8gVGVzdCDtlajsiJhcbiAgICAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgIG9uS2V5VXAoZSlcbiAgICB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRVNDQVBFOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTlVNQkVSXzE6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5OVU1CRVJfMjpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3Qvc2F0L1Rlc3QuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFxue1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1BvaW50LmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9nZW9tL1ZlY3Rvcic7XG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tICcuL1Byb2plY3Rpb24nO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgU2hhcGVcbntcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB4LCB5LCByYWRpdXMpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9ICdDaXJjbGUnO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOykkeygkCDsooztkZwg67CY7ZmYXG4gICAgICogQHJldHVybnMge1BJWEkuUG9pbnR8KnxzdmcuUG9pbnR9XG4gICAgICovXG4gICAgZ2V0Q2VudGVyKClcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUElYSS5Qb2ludCh0aGlzLngsdGhpcy55KTtcbiAgICB9XG5cblxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIGlmIChzaGFwZS5yYWRpdXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShzaGFwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaXJjbGVDb2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIHZhciBheGVzID0gc2hhcGUuZ2V0QXhlcygpLCBkaXN0YW5jZTtcblxuICAgICAgICBpZiAoYXhlcyA9PT0gdW5kZWZpbmVkKSB7IC8v7JuQXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhzaGFwZS54IC0gdGhpcy54LCAyKSArXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coc2hhcGUueSAtIHRoaXMueSwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgTWF0aC5hYnModGhpcy5yYWRpdXMgKyBzaGFwZS5yYWRpdXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShzaGFwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgKi9cblxuXG4gICAgZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSlcbiAgICB7XG4gICAgICAgIGxldCBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgY2lyY2xlVmVjdG9yID0gVmVjdG9yLmZyb21PYmplY3QoY2lyY2xlKSxcbiAgICAgICAgICAgIGxlbmd0aCwgdGVzdFBvaW50VmVjdG9yLCBjbG9zZXN0UG9pbnQ7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgcG9seWdvbi5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3RQb2ludFZlY3RvciA9IFZlY3Rvci5mcm9tT2JqZWN0KHBvbHlnb24ucG9pbnRzW2ldKTtcbiAgICAgICAgICAgIHRlc3RQb2ludFZlY3Rvci5pbmRleCA9IGk7XG4gICAgICAgICAgICBsZW5ndGggPSB0ZXN0UG9pbnRWZWN0b3IuY2xvbmUoKS5kaXN0YW5jZShjaXJjbGUpO1xuXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gbGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHRlc3RQb2ludFZlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0UG9pbnQuY2xvbmUoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLpOqwge2YleqzvCDsm5DtmJUg7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGNpcmNsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIC8qcG9seWdvbkNvbGxpZGVzV2l0aENpcmNsZShwb2x5Z29uLCBjaXJjbGUpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIGF4ZXMgPSBwb2x5Z29uLmdldEF4ZXMoKSxcbiAgICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHRoaXMuZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSk7XG5cbiAgICAgICAgYXhlcy5wdXNoKHRoaXMuZ2V0Q2lyY2xlQXhpcyhjaXJjbGUsIGNsb3Nlc3RQb2ludCkpO1xuXG4gICAgICAgIHJldHVybiAhcG9seWdvbi5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIGNpcmNsZSk7XG4gICAgfSovXG5cblxuICAgIGdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpXG4gICAge1xuICAgICAgICB2YXIgdjEgPSBuZXcgVmVjdG9yKGNpcmNsZS54LCBjaXJjbGUueSksXG4gICAgICAgICAgICB2MiA9IG5ldyBWZWN0b3IoY2xvc2VzdFBvaW50LngsIGNsb3Nlc3RQb2ludC55KSxcbiAgICAgICAgICAgIHN1cmZhY2VWZWN0b3IgPSB2MS5zdWJ0cmFjdCh2Mik7XG5cbiAgICAgICAgUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIGNsb3Nlc3RQb2ludCwgZmFsc2UsIDUsIDB4ZmYzMzAwLCAwLjMpO1xuICAgICAgICAvL1BhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsIFZlY3Rvci5mcm9tT2JqZWN0KGNpcmNsZSksIFZlY3Rvci5mcm9tT2JqZWN0KGNsb3Nlc3RQb2ludCksIGZhbHNlLCAxLCAweGZmMzMwMCwgMC4zKTtcblxuICAgICAgICByZXR1cm4gc3VyZmFjZVZlY3Rvci5ub3JtYWxpemUoKTtcbiAgICB9XG5cblxuICAgIHByb2plY3QoYXhpcylcbiAgICB7XG4gICAgICAgIGxldCBzY2FsYXJzID0gW10sXG4gICAgICAgICAgICBwb2ludCA9IG5ldyBQSVhJLlBvaW50KHRoaXMueCwgdGhpcy55KSxcbiAgICAgICAgICAgIHBvaW50VmVjdG9yID0gbmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSxcbiAgICAgICAgICAgIGRvdFByb2R1Y3QgPSBwb2ludFZlY3Rvci5kb3RQcm9kdWN0KGF4aXMpO1xuXG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0KTtcbiAgICAgICAgc2NhbGFycy5wdXNoKGRvdFByb2R1Y3QgKyB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHNjYWxhcnMucHVzaChkb3RQcm9kdWN0IC0gdGhpcy5yYWRpdXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdGlvbihcbiAgICAgICAgICAgIE1hdGgubWluLmFwcGx5KE1hdGgsIHNjYWxhcnMpLFxuICAgICAgICAgICAgTWF0aC5tYXguYXBwbHkoTWF0aCwgc2NhbGFycylcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGdldEF4ZXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBhdGgoZ3JhcGhpY3MsIGxpbmVDb2xvciA9IDB4RkZGRkZGKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGxpbmVDb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh0aGlzLnggKyB0aGlzLnJhZGl1cywgdGhpcy55KTtcbiAgICAgICAgZ3JhcGhpY3MuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICB9XG5cblxuICAgIG1vdmUoZHgsIGR5KVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IGR4O1xuICAgICAgICB0aGlzLnkgKz0gZHk7XG4gICAgfVxuXG5cbiAgICBpc1BvaW50SW5QYXRoKHgsIHkpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICBjb25zdCBpc1BvaW50SW5QYXRoID0gdGhpcy5jb250ZXh0LmlzUG9pbnRJblBhdGgoeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiBpc1BvaW50SW5QYXRoO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9DaXJjbGUuanMiLCJpbXBvcnQgTVRWIGZyb20gJy4vTVRWJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4uL3V0aWxzL1BhaW50ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBtaW5pbXVtVHJhbnNsYXRpb25WZWN0b3IoYXhlcywgc2hhcGUpIHtcbiAgICAgICAgdmFyIG1pbmltdW1PdmVybGFwID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG92ZXJsYXAsIGF4aXNXaXRoU21hbGxlc3RPdmVybGFwLFxuICAgICAgICAgICAgYXhpcywgcHJvamVjdGlvbjEsIHByb2plY3Rpb24yO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYXhpcyA9IGF4ZXNbaV07XG4gICAgICAgICAgICBwcm9qZWN0aW9uMSA9IHNoYXBlLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICBwcm9qZWN0aW9uMiA9IHRoaXMucHJvamVjdChheGlzKTtcbiAgICAgICAgICAgIG92ZXJsYXAgPSBwcm9qZWN0aW9uMS5nZXRPdmVybGFwKHByb2plY3Rpb24yKTtcblxuICAgICAgICAgICAgLypQYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLFxuICAgICAgICAgICAgICAgIHt4OmF4aXMueCAqIHByb2plY3Rpb24xLm1pbiwgeTpheGlzLnkgKiBwcm9qZWN0aW9uMS5taW59LFxuICAgICAgICAgICAgICAgIHt4OmF4aXMueCAqIHByb2plY3Rpb24yLm1heCwgeTpheGlzLnkgKiBwcm9qZWN0aW9uMi5tYXh9LFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApOyovXG5cbiAgICAgICAgICAgIGlmIChvdmVybGFwID09PSAwKSB7IC8v7Lap64+MIOyXhuyKtC5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1UVigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvdmVybGFwIDwgbWluaW11bU92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bU92ZXJsYXAgPSBvdmVybGFwO1xuICAgICAgICAgICAgICAgICAgICBheGlzV2l0aFNtYWxsZXN0T3ZlcmxhcCA9IGF4aXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBNVFYobWluaW11bU92ZXJsYXAsIGF4aXNXaXRoU21hbGxlc3RPdmVybGFwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuRkCDri6TqsIHtmJUg7IKs7J207JeQ7IScIOy2qeuPjFxuICAgICAqIEBwYXJhbSBwMVxuICAgICAqIEBwYXJhbSBwMlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBvbHlnb25Db2xsaWRlc1dpdGhQb2x5Z29uKHAxLCBwMikge1xuICAgICAgICB2YXIgbXR2MSA9IHAxLm1pbmltdW1UcmFuc2xhdGlvblZlY3RvcihwMS5nZXRBeGVzKCksIHAyKSxcbiAgICAgICAgICAgIG10djIgPSBwMS5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IocDIuZ2V0QXhlcygpLCBwMik7XG5cbiAgICAgICAgaWYgKG10djEub3ZlcmxhcCA9PT0gMCAmJiBtdHYyLm92ZXJsYXAgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTVRWKDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG10djEub3ZlcmxhcCA8IG10djIub3ZlcmxhcCA/IG10djEgOiBtdHYyO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDrkZAg7JuQ7ZiV7JeQIOuMgO2VnCDstqnrj4xcbiAgICAgKiBAcGFyYW0gYzFcbiAgICAgKiBAcGFyYW0gYzJcbiAgICAgKi9cbiAgICBjaXJjbGVDb2xsaWRlc1dpdGhDaXJjbGUoYzEsIGMyKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhjMi54IC0gYzEueCwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3coYzIueSAtIGMxLnksIDIpKSxcbiAgICAgICAgICAgIG92ZXJsYXAgPSBNYXRoLmFicyhjMS5yYWRpdXMgKyBjMi5yYWRpdXMpIC0gZGlzdGFuY2U7XG5cbiAgICAgICAgcmV0dXJuIG92ZXJsYXAgPCAwID9cbiAgICAgICAgICAgIG5ldyBNVFYoMCkgOlxuICAgICAgICAgICAgbmV3IE1UVihvdmVybGFwKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOuLpOqwge2YleqzvCDsm5DtmJUg7Lap64+MIOqygOyCrFxuICAgICAqIEBwYXJhbSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGNpcmNsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUocG9seWdvbiwgY2lyY2xlKSB7XG4gICAgICAgIHZhciBheGVzID0gcG9seWdvbi5nZXRBeGVzKCksXG4gICAgICAgICAgICBjbG9zZXN0UG9pbnQgPSBjaXJjbGUuZ2V0UG9seWdvblBvaW50Q2xvc2VzdFRvQ2lyY2xlKHBvbHlnb24sIGNpcmNsZSk7XG5cbiAgICAgICAgLy8gUGFpbnRlci5kcmF3UG9pbnQod2luZG93LmcsIGNsb3Nlc3RQb2ludCwgZmFsc2UsIDUsIDB4RTU3MzczKTtcblxuICAgICAgICBheGVzLnB1c2goY2lyY2xlLmdldENpcmNsZUF4aXMoY2lyY2xlLCBjbG9zZXN0UG9pbnQpKTtcblxuICAgICAgICByZXR1cm4gcG9seWdvbi5taW5pbXVtVHJhbnNsYXRpb25WZWN0b3IoYXhlcywgY2lyY2xlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2leyXkCDtiKzsmIHtlZjsl6wg67aE66as6rCAIOyeiOycvOuptCB0cnVlIOuwmO2ZmCjstqnrj4zrkJjsp4Ag7JWK7JWY64uk66m0IHRydWUg67CY7ZmYKVxuICAgICAqIEBwYXJhbSBvdGhlclNoYXBlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY29sbGlkZXNXaXRoKHNoYXBlKSB7XG4gICAgICAgIHZhciBheGVzID0gdGhpcy5nZXRBeGVzKCkuY29uY2F0KHNoYXBlLmdldEF4ZXMoKSk7XG4gICAgICAgIHJldHVybiAhdGhpcy5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOu2hOumrOy2leydtCDsnojripTsp4Ag7Jes67aAICjrtoTrpqzstpXsnbQg7J6I64uk64qUIOydtOyVvOq4sOuKlCDstqnrj4ztlZjsp4Ag7JWK7JWY64uk64qUIOydtOyVvOq4sCDsnoXri4jri6QuKVxuICAgICAqIEBwYXJhbSBheGVzXG4gICAgICogQHBhcmFtIHNoYXBlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2VwYXJhdGlvbk9uQXhlcyhheGVzLCBzaGFwZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF4ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9qZWN0aW9uMSA9IHNoYXBlLnByb2plY3QoYXhpcyk7XG4gICAgICAgICAgICB2YXIgcHJvamVjdGlvbjIgPSB0aGlzLnByb2plY3QoYXhpcyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvamVjdGlvbjEub3ZlcmxhcHMocHJvamVjdGlvbjIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIGRvbid0IGhhdmUgdG8gdGVzdCByZW1haW5pbmcgYXhlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9TaGFwZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1UVlxue1xuICAgIC8qKlxuICAgICAqIOy1nOyGjCDsnbTrj5kg67Kh7YSwXG4gICAgICogTWluaW11bSBUcmFuc2xhdGlvbiBWZWN0b3IgKE1UVilcbiAgICAgKiBAcGFyYW0gYXhpc1xuICAgICAqIEBwYXJhbSBvdmVybGFwXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3ZlcmxhcCA9IHVuZGVmaW5lZCwgYXhpcyA9IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXM7XG4gICAgICAgIHRoaXMub3ZlcmxhcCA9IG92ZXJsYXA7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXQvTVRWLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9nZW9tL1ZlY3Rvcic7XG5pbXBvcnQgQ2FsYyBmcm9tICcuLi9namsvQ2FsY3VsYXRvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpbnRlclxue1xuICAgIHN0YXRpYyBkcmF3TWlua293c2tpU3VtKHZlcnRpY2VzMSwgdmVydGljZXMyKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYXdNaW5rb3dza2lTdW0oJywgdmVydGljZXMxLmxlbmd0aCAqIHZlcnRpY2VzMi5sZW5ndGgsICcpJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2ZXJ0aWNlczIubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCB2MSA9IHZlcnRpY2VzMVtpXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCB2MiA9IHZlcnRpY2VzMltqXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGxldCBkaWZmID0gVmVjdG9yLnN1YnRyYWN0KHYxLCB2Mik7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGRpZmYpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGosIGB2ZWNbJHtkaWZmLnh9LCAke2RpZmYueX1dYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb252ZXhIdWxsUGF0aCA9IENhbGMuY3JlYXRlQ29udmV4SHVsbChwYXRoKTtcbiAgICAgICAgUGFpbnRlci5kcmF3UG9seWdvbihjb252ZXhIdWxsUGF0aCwgMSwgMHhEREREREQsIDEpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGRyYXdQb2x5Z29uKHZlcnRpY2VzLCBsaW5lV2lkdGggPSAxLCBjb2xvciA9IDB4NjA3RDhCLCBhbHBoYSA9IDAuNSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gd2luZG93Lmc7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZShsaW5lV2lkdGgsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgY29uc3QgdmVjMCA9IHZlcnRpY2VzWzBdLmNsb25lKCk7XG4gICAgICAgIHZlYzAubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh2ZWMwLngsIHZlYzAueSk7XG5cbiAgICAgICAgLy8gdGhpcy5kcmF3VGV4dCh3aW5kb3cuc3RhZ2UsICcoJyArIHZlYzAueC50b0ZpeGVkKDApICsgJywnICsgdmVjMC55LnRvRml4ZWQoMCkgKyAnKScsIHZlYzApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2ZWMgPSB2ZXJ0aWNlc1tpXS5jbG9uZSgpO1xuICAgICAgICAgICAgdmVjLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2ZWMueCwgdmVjLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHZlYzAueCwgdmVjMC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3VGV4dChzdGFnZSwgc3RyaW5nLCBwb2ludCwgY29sb3IgPSAnI2ZmMzMwMCcpXG4gICAge1xuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChzdHJpbmcsIHtcbiAgICAgICAgICAgIC8vIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICAvLyBmb250U2l6ZTogNCxcbiAgICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIGZpbGw6IGNvbG9yLFxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnIzRhMTg1MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRleHQueCA9IHBvaW50Lng7XG4gICAgICAgIHRleHQueSA9IHBvaW50Lnk7XG5cbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQodGV4dCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50KGdyYXBoaWNzLCBwb2ludCwgaXNDbGVhciA9IHRydWUsIHJhZGl1cyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgY29sb3IpO1xuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShwb2ludC54LCBwb2ludC55LCByYWRpdXMpO1xuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd1JlY3RCeUJvdW5kcyhncmFwaGljcywgYm91bmRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG5cblxuICAgIHN0YXRpYyBkcmF3UmVjdEJ5UG9pbnRzKGdyYXBoaWNzLCByZWN0LCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSlcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucnQueCwgcmVjdC5ydC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QucmIueCwgcmVjdC5yYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubGIueCwgcmVjdC5sYi55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJlY3QubHQueCwgcmVjdC5sdC55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3UG9pbnRzQnlQb2ludHMoZ3JhcGhpY3MsIHJlY3QsIGlzQ2xlYXIgPSB0cnVlLCByYWRpdXMgPSAxLCBjb2xvciA9IDB4RkYzMzAwLCBhbHBoYSA9IDAuNylcbiAgICB7XG4gICAgICAgIGlmIChpc0NsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sdC54LCByZWN0Lmx0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5ydC54LCByZWN0LnJ0LnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5yYi54LCByZWN0LnJiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUocmVjdC5sYi54LCByZWN0LmxiLnksIHJhZGl1cyk7XG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuXG5cbiAgICBzdGF0aWMgZHJhd1BvaW50cyhncmFwaGljcywgcG9pbnRzLCBpc0NsZWFyID0gdHJ1ZSwgdGhpY2tuZXNzID0gMSwgY29sb3IgPSAweEZGMzMwMCwgYWxwaGEgPSAwLjcpXG4gICAge1xuICAgICAgICBpZiAoaXNDbGVhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwMSA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIHZhciBwMiA9IHBvaW50c1tpICsgMSA8IHBvaW50cy5sZW5ndGggPyBpICsgMSA6IDBdO1xuXG4gICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZHJhd0xpbmUoZ3JhcGhpY3MsIHAwLCBwMSwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUodGhpY2tuZXNzLCBjb2xvciwgYWxwaGEpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocDAueCwgcDAueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwMS54LCBwMS55KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkcmF3QXJyb3coZ3JhcGhpY3MsIG1vdmVQb2ludCwgdG9Qb2ludCwgaXNDbGVhciA9IHRydWUsIHRoaWNrbmVzcyA9IDEsIGNvbG9yID0gMHhGRjMzMDAsIGFscGhhID0gMC43KVxuICAgIHtcbiAgICAgICAgaWYgKGlzQ2xlYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKmdyYXBoaWNzLmxpbmVTdHlsZSh0aGlja25lc3MsIGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yKHRvUG9pbnQueCAtIG1vdmVQb2ludC54LCB0b1BvaW50LnkgLSBtb3ZlUG9pbnQueSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKDQ1KS5pbnZlcnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdmVjdG9yLmNsb25lKCkucm90YXRlKC00NSkuaW52ZXJ0KCk7XG4gICAgICAgIGxlZnQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHJpZ2h0Lm11bHRpcGx5U2NhbGFyKDUpO1xuICAgICAgICB2ZWN0b3IuaW52ZXJ0KCkubXVsdGlwbHlTY2FsYXIoMTUpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIHZlY3Rvci54LCBtb3ZlUG9pbnQueSArIHZlY3Rvci55KTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhtb3ZlUG9pbnQueCArIGxlZnQueCwgbW92ZVBvaW50LnkgKyBsZWZ0LnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgcmlnaHQueCwgbW92ZVBvaW50LnkgKyByaWdodC55KTsqL1xuXG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKHRoaWNrbmVzcywgY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKG1vdmVQb2ludC54LCBtb3ZlUG9pbnQueSk7XG5cbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IobW92ZVBvaW50LnggLSB0b1BvaW50LngsIG1vdmVQb2ludC55IC0gdG9Qb2ludC55KTtcbiAgICAgICAgdmFyIGxlZnQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoNDUpLmludmVydCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB2ZWN0b3IuY2xvbmUoKS5yb3RhdGUoLTQ1KS5pbnZlcnQoKTtcbiAgICAgICAgbGVmdC5tdWx0aXBseVNjYWxhcig1KTtcbiAgICAgICAgcmlnaHQubXVsdGlwbHlTY2FsYXIoNSk7XG4gICAgICAgIHZlY3Rvci5pbnZlcnQoKS5tdWx0aXBseVNjYWxhcigxNSk7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgdmVjdG9yLngsIG1vdmVQb2ludC55ICsgdmVjdG9yLnkpO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8obW92ZVBvaW50LngsIG1vdmVQb2ludC55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKG1vdmVQb2ludC54ICsgbGVmdC54LCBtb3ZlUG9pbnQueSArIGxlZnQueSk7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhtb3ZlUG9pbnQueCwgbW92ZVBvaW50LnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8obW92ZVBvaW50LnggKyByaWdodC54LCBtb3ZlUG9pbnQueSArIHJpZ2h0LnkpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvUGFpbnRlci5qcyIsIlxuXG5jb25zdCBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuXG5mdW5jdGlvbiByYW5kb20gKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhZGlhbjJkZWdyZWVzIChyYWQpIHtcbiAgICByZXR1cm4gcmFkICogZGVncmVlcztcbn1cblxuZnVuY3Rpb24gZGVncmVlczJyYWRpYW4gKGRlZykge1xuICAgIHJldHVybiBkZWcgLyBkZWdyZWVzO1xufVxuXG5cbi8qKlxuICogVmljdG9yLmpz66W8IEVTNuuhnCDrs4DtmZjtlZjsl6wg7IKs7Jqp7ZWY6rOgIOyeiOyKteuLiOuLpC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhrdWVuZy92aWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yXG57XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbUFycmF5KFs0MiwgMjFdKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21BcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFycmF5IHdpdGggdGhlIHggYW5kIHkgdmFsdWVzIGF0IGluZGV4IDAgYW5kIDEgcmVzcGVjdGl2ZWx5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGFyclswXSB8fCAwLCBhcnJbMV0gfHwgMCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBWZWN0b3IuZnJvbU9iamVjdCh7IHg6IDQyLCB5OiAyMSB9KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICAgICAqXG4gICAgICogQG5hbWUgVmVjdG9yLmZyb21PYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgZm9yIHggYW5kIHlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tT2JqZWN0KG9iailcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKG9iai54IHx8IDAsIG9iai55IHx8IDApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuIFdpbGwgYWxzbyB3b3JrIHdpdGhvdXQgdGhlIGBuZXdgIGtleXdvcmRcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IFZlY3Rvcig0MiwgMTMzNyk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCBWYWx1ZSBvZiB0aGUgeCBheGlzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVmFsdWUgb2YgdGhlIHkgYXhpc1xuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMClcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWCBheGlzIHRvIHRoaXMgb25lXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmFkZFgodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeToxMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZFgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBZIGF4aXMgdG8gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwLCAxMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuYWRkWSh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjQwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkWSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbm90aGVyIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAzMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hZGQodmVjMik7XG4gICAgICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDozMCwgeTo0MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFkZCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkKGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggKyBiLngsIGEueSArIGIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIGJvdGggdmVjdG9yIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54ICs9IHNjYWxhcjtcbiAgICAgICAgdGhpcy55ICs9IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuYWRkU2NhbGFyWCgyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDMsIHk6IDJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhZGRTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCArPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMSwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmFkZFNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OiAxLCB5OiA0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYWRkU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKz0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgWCBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjgwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WCh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBZIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMCwgMzApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuc3VidHJhY3RZKHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHN1YnRyYWN0WSh2ZWMpXG4gICAge1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDMwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLnN1YnRyYWN0KHZlYzIpO1xuICAgICAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6ODAsIHk6MjBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3QodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHN1YnRyYWN0KGEsIGIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihhLnggLSBiLngsIGEueSAtIGIueSk7XG4gICAgfVxuXG5cbiAgICBlZGdlKHZlYylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZWRnZShhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5zdWJ0cmFjdChhLCBiKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gYm90aCBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXIoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDE4MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC09IHNjYWxhcjtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBYIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAyMDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclgoMjApO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDogODAsIHk6IDIwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgc3VidHJhY3RTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAtPSBzY2FsYXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWSBheGlzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJZKDIwKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6IDEwMCwgeTogMTgwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBzdWJ0cmFjdFNjYWxhclkoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC09IHNjYWxhcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIHggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVYKHZlYzIpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVgodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy54IC89IHZlY3Rvci54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgeSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMCwgMik7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IGRpdmlkZSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpdmlkZVkodmVjdG9yKVxuICAgIHtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSBhIGF4aXMgdmFsdWVzIG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGUodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55IC89IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkaXZpZGUoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKGEueCAvIGIueCwgYS55IC8gYi55KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5kaXZpZGVTY2FsYXIoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXIoc2NhbGFyKVxuICAgIHtcbiAgICAgICAgaWYgKHNjYWxhciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcbiAgICAgICAgICAgIHRoaXMueSAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclgoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXZpZGVTY2FsYXJYKHNjYWxhcilcbiAgICB7XG4gICAgICAgIGlmIChzY2FsYXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBzY2FsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmRpdmlkZVNjYWxhclkoMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGl2aWRlU2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICBpZiAoc2NhbGFyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludmVydHMgdGhlIFggYXhpc1xuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMuaW52ZXJ0WCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpbnZlcnRYKClcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnZlcnRzIHRoZSBZIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydFkoKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0WSgpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW52ZXJ0cyBib3RoIGF4aXNcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmludmVydCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDotMTAwLCB5Oi01MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaW52ZXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuaW52ZXJ0WCgpO1xuICAgICAgICB0aGlzLmludmVydFkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmVnYXRlKHZlYylcbiAgICB7XG4gICAgICAgIGNvbnN0IHYgPSB2ZWMuY2xvbmUoKTtcbiAgICAgICAgdi54ID0gLXZlYy54O1xuICAgICAgICB2LnkgPSAtdmVjLnk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBYIGF4aXMgYnkgWCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMiwgMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5WCh2ZWN0b3IpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gdmVjdG9yLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGUgWSBheGlzIGJ5IFkgY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDAsIDIpO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbXVsdGlwbHlZKHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueSAqPSB2ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdmFsdWVzIGZyb20gYSBnaXZlbiB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyLCAyKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubXVsdGlwbHkodmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSBieVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG11bHRpcGx5KHZlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWN0b3IueDtcbiAgICAgICAgdGhpcy55ICo9IHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5tdWx0aXBseVNjYWxhcigyKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gbXVsdGlwbHkgYnlcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBtdWx0aXBseVNjYWxhcihzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWChzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIG11bHRpcGx5U2NhbGFyWShzY2FsYXIpXG4gICAge1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOyImOyngSDrsqHthLAg7IOd7ISxXG4gICAgICogQHJldHVybnMge1ZlY3Rvcn1cbiAgICAgKi9cbiAgICBwZXJwZW5kaWN1bGFyKClcbiAgICB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIHYueCA9IHRoaXMueTtcbiAgICAgICAgdi55ID0gMCAtIHRoaXMueDtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhcih2ZWMpXG4gICAge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHZlYy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS54ID0gdmVjLnk7XG4gICAgICAgIGNsb25lLnkgPSAtdmVjLng7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbm9ybWFsaXplKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpdmlkZShuZXcgVmVjdG9yKGxlbmd0aCwgbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBub3JtKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGFic29sdXRlIHZlY3RvciBheGlzIGlzIGdyZWF0ZXIgdGhhbiBgbWF4YCwgbXVsdGlwbGllcyB0aGUgYXhpcyBieSBgZmFjdG9yYFxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMubGltaXQoODAsIDAuOSk7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjkwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIGZvciBib3RoIHggYW5kIHkgYXhpc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmYWN0b3IgRmFjdG9yIGJ5IHdoaWNoIHRoZSBheGlzIGFyZSB0byBiZSBtdWx0aXBsaWVkIHdpdGhcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsaW1pdChtYXgsIGZhY3RvcilcbiAgICB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLngpID4gbWF4KXsgdGhpcy54ICo9IGZhY3RvcjsgfVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55KSA+IG1heCl7IHRoaXMueSAqPSBmYWN0b3I7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21pemVzIGJvdGggdmVjdG9yIGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemUobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MGApKTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6NjcsIHk6NzNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplKHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgdGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIHJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpXG4gICAge1xuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG4gICAgICAgIHRoaXMueCA9IHJhbmRvbShtaW4sIG1heCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgcmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodClcbiAgICB7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcbiAgICAgICAgdGhpcy55ID0gcmFuZG9tKG1pbiwgbWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSByYW5kb21pemVzIGVpdGhlciBheGlzIGJldHdlZW4gMiB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqXG4gICAgICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZlY3Rvcig1MCwgNjApLCBuZXcgVmVjdG9yKDcwLCA4MCkpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcmFuZG9taXplQW55KHRvcExlZnQsIGJvdHRvbVJpZ2h0KVxuICAgIHtcbiAgICAgICAgaWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVkodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHVuZmxvYXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMC4yLCA1MC45KTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudW5mbG9hdCgpO1xuICAgICAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9GaXhlZChwcmVjaXNpb24pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHByZWNpc2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHsgcHJlY2lzaW9uID0gODsgfVxuICAgICAgICB0aGlzLnggPSB0aGlzLngudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkudG9GaXhlZChwcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFgodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9ICgxIC0gYW1vdW50KSAqIHRoaXMueCArIGFtb3VudCAqIHZlYy54O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgMjAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peFkodmVjLCBhbW91bnQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9ICgxIC0gYW1vdW50KSAqIHRoaXMueSArIGFtb3VudCAqIHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDEwMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDIwMCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAgICAgKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTUwLCB5OjE1MFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCBUaGUgYmxlbmQgYW1vdW50IChvcHRpb25hbCwgZGVmYXVsdDogMC41KVxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIG1peCh2ZWMsIGFtb3VudClcbiAgICB7XG4gICAgICAgIHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIyBQcm9kdWN0c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IHZlYzEuY2xvbmUoKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MTBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9uZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICAgICAqXG4gICAgICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAgICAgKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgY29weVgodmVjKVxuICAgIHtcbiAgICAgICAgdGhpcy54ID0gdmVjLng7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAsIDEwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwLCAyMCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gICAgICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZlY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNvcHlZKHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMueSA9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAsIDIwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHkodmVjMSk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMi50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjIwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWZWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBjb3B5KHZlYylcbiAgICB7XG4gICAgICAgIHRoaXMuY29weVgodmVjKTtcbiAgICAgICAgdGhpcy5jb3B5WSh2ZWMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZlY3RvciB0byB6ZXJvICgwLDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMCwgMTApO1xuICAgICAqXHRcdCB2YXIxLnplcm8oKTtcbiAgICAgKiAgICAgdmVjMS50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjAsIHk6MFxuICAgICAqXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgemVybygpXG4gICAge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDIwMCwgNjApO1xuICAgICAqXG4gICAgICogICAgIHZlYzEuZG90KHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAyMzAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRvdCh2ZWMyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbiAgICB9XG5cblxuICAgIGRvdFByb2R1Y3QodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KHZlYyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZG90UHJvZHVjdChhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cblxuICAgIGNyb3NzKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHZlYzIueSkgLSAodGhpcy55ICogdmVjMi54KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbiAgICB9XG5cblxuICAgIHN0YXRpYyB0cmlwbGVQcm9kdWN0KGEsIGIsIGMpXG4gICAge1xuICAgICAgICBjb25zdCByID0gbmV3IFZlY3RvcigpO1xuXG4gICAgICAgIC8vIHBlcmZvcm0gYS5kb3QoYylcbiAgICAgICAgLy8gcGVyZm9ybSBiLmRvdChjKVxuICAgICAgICBjb25zdCBhYyA9IGEueCAqIGMueCArIGEueSAqIGMueVxuICAgICAgICAgICAgLCBiYyA9IGIueCAqIGMueCArIGIueSAqIGMueTtcblxuICAgICAgICAvLyBwZXJmb3JtIGIgKiBhLmRvdChjKSAtIGEgKiBiLmRvdChjKVxuICAgICAgICByLnggPSBiLnggKiBhYyAtIGEueCAqIGJjO1xuICAgICAgICByLnkgPSBiLnkgKiBhYyAtIGEueSAqIGJjO1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHJvamVjdHMgYSB2ZWN0b3Igb250byBhbm90aGVyIHZlY3Rvciwgc2V0dGluZyBpdHNlbGYgdG8gdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCAwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgMTAwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMucHJvamVjdE9udG8odmVjMik7XG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gcHJvamVjdCB0aGlzIHZlY3RvciBvbnRvXG4gICAgICogQHJldHVybiB7VmVjdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcHJvamVjdE9udG8odmVjMilcbiAgICB7XG4gICAgICAgIHZhciBjb2VmZiA9ICggKHRoaXMueCAqIHZlYzIueCkrKHRoaXMueSAqIHZlYzIueSkgKSAvICgodmVjMi54KnZlYzIueCkrKHZlYzIueSp2ZWMyLnkpKTtcbiAgICAgICAgdGhpcy54ID0gY29lZmYgKiB2ZWMyLng7XG4gICAgICAgIHRoaXMueSA9IGNvZWZmICogdmVjMi55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIGhvcml6b250YWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG5cbiAgICBob3Jpem9udGFsQW5nbGVEZWcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMuaG9yaXpvbnRhbEFuZ2xlKCkpO1xuICAgIH1cblxuXG4gICAgdmVydGljYWxBbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG5cbiAgICB2ZXJ0aWNhbEFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLnZlcnRpY2FsQW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICBhbmdsZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQW5nbGUoKTtcbiAgICB9XG5cblxuICAgIGFuZ2xlRGVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZURlZygpO1xuICAgIH1cblxuXG4gICAgZGlyZWN0aW9uKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbmdsZSgpO1xuICAgIH1cblxuXG4gICAgcm90YXRlKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgdmFyIG54ID0gKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSkgLSAodGhpcy55ICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgdmFyIG55ID0gKHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSkgKyAodGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKTtcblxuICAgICAgICB0aGlzLnggPSBueDtcbiAgICAgICAgdGhpcy55ID0gbnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICByb3RhdGVEZWcoYW5nbGUpXG4gICAge1xuICAgICAgICBhbmdsZSA9IGRlZ3JlZXMycmFkaWFuKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbiAgICB9XG5cblxuICAgIHJvdGF0ZVRvKHJvdGF0aW9uKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKHJvdGF0aW9uLXRoaXMuYW5nbGUoKSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVUb0RlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVUbyhyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeShyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMuYW5nbGUoKSArIHJvdGF0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG5cbiAgICByb3RhdGVCeURlZyhyb3RhdGlvbilcbiAgICB7XG4gICAgICAgIHJvdGF0aW9uID0gZGVncmVlczJyYWRpYW4ocm90YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVCeShyb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWCBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZVgodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAtIHZlYy54O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgZGlzdGFuY2VYKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5hYnNEaXN0YW5jZVgodmVjMik7XG4gICAgICogICAgIC8vID0+IDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGFic0Rpc3RhbmNlWCh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVgodmVjKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWSBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gICAgICogICAgIC8vID0+IC0xMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlWSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55IC0gdmVjLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBkaXN0YW5jZVkoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjMSA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICogICAgIHZhciB2ZWMyID0gbmV3IFZlY3RvcigyMDAsIDYwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBhYnNEaXN0YW5jZVkodmVjKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VZKHZlYykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZSh2ZWMyKTtcbiAgICAgKiAgICAgLy8gPT4gMTAwLjQ5ODc1NjIxMTIwODlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXN0YW5jZSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcSh2ZWMpKTtcbiAgICB9XG5cblxuICAgIGdldE1hZ25pdHVkZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24oKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYzEgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2YXIgdmVjMiA9IG5ldyBWZWN0b3IoMjAwLCA2MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjMS5kaXN0YW5jZVNxKHZlYzIpO1xuICAgICAqICAgICAvLyA9PiAxMDEwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICAgICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc3RhbmNlU3EodmVjKVxuICAgIHtcbiAgICAgICAgdmFyIGR4ID0gdGhpcy5kaXN0YW5jZVgodmVjKSxcbiAgICAgICAgICAgIGR5ID0gdGhpcy5kaXN0YW5jZVkodmVjKTtcblxuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb3IgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aCgpO1xuICAgICAqICAgICAvLyA9PiAxMTEuODAzMzk4ODc0OTg5NDhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBsZW5ndGgoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU3F1YXJlZCBsZW5ndGggLyBtYWduaXR1ZGVcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAwLCA1MCk7XG4gICAgICpcbiAgICAgKiAgICAgdmVjLmxlbmd0aFNxKCk7XG4gICAgICogICAgIC8vID0+IDEyNTAwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgbGVuZ3RoU3EoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsZW5ndGhTcSh2ZWMpXG4gICAge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB2ZWMueCArIHZlYy55ICogdmVjLnk7XG4gICAgfVxuXG5cbiAgICBtYWduaXR1ZGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB2ZWN0b3IgaXMgKDAsIDApXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMuemVybygpO1xuICAgICAqXG4gICAgICogICAgIC8vID0+IHRydWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc1plcm8oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJ1ZSBpZiB0aGlzIHZlY3RvciBpcyB0aGUgc2FtZSBhcyBhbm90aGVyXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXM6XG4gICAgICogICAgIHZhciB2ZWMxID0gbmV3IFZlY3RvcigxMDAsIDUwKTtcbiAgICAgKiAgICAgdmFyIHZlYzIgPSBuZXcgVmVjdG9yKDEwMCwgNTApO1xuICAgICAqICAgICB2ZWMxLmlzRXF1YWxUbyh2ZWMyKTtcbiAgICAgKlxuICAgICAqICAgICAvLyA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgaXNFcXVhbFRvKHZlYzIpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSB2ZWMyLnggJiYgdGhpcy55ID09PSB2ZWMyLnk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAjIFV0aWxpdHkgTWV0aG9kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b1N0cmluZygpO1xuICAgICAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICByZXR1cm4gJ3g6JyArIHRoaXMueCArICcsIHk6JyArIHRoaXMueTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVzOlxuICAgICAqICAgICB2YXIgdmVjID0gbmV3IFZlY3RvcigxMCwgMjApO1xuICAgICAqXG4gICAgICogICAgIHZlYy50b0FycmF5KCk7XG4gICAgICogICAgIC8vID0+IFsxMCwgMjBdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHRvQXJyYXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFsgdGhpcy54LCB0aGlzLnkgXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlczpcbiAgICAgKiAgICAgdmFyIHZlYyA9IG5ldyBWZWN0b3IoMTAsIDIwKTtcbiAgICAgKlxuICAgICAqICAgICB2ZWMudG9PYmplY3QoKTtcbiAgICAgKiAgICAgLy8gPT4geyB4OiAxMCwgeTogMjAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgdG9PYmplY3QoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb20vVmVjdG9yLmpzIiwiaW1wb3J0IFZlY3RvciBmcm9tICcuLi9nZW9tL1ZlY3Rvcic7XG5pbXBvcnQgUGFpbnRlciBmcm9tICcuLi91dGlscy9QYWludGVyJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3JcbntcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRvIGNvbXB1dGUgYXZlcmFnZSBjZW50ZXIgKHJvdWdobHkpLiBJdCBtaWdodCBiZSBkaWZmZXJlbnQgZnJvbVxuICAgICAqIENlbnRlciBvZiBHcmF2aXR5LCBlc3BlY2lhbGx5IGZvciBib2RpZXMgd2l0aCBub251bmlmb3JtIGRlbnNpdHksXG4gICAgICogYnV0IHRoaXMgaXMgb2sgYXMgaW5pdGlhbCBkaXJlY3Rpb24gb2Ygc2ltcGxleCBzZWFyY2ggaW4gR0pLXG4gICAgICogQHBhcmFtIHZlcnRpY2VzXG4gICAgICogQHBhcmFtIGNvdW50XG4gICAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBhdmVyYWdlUG9pbnQodmVydGljZXMsIGNvdW50KVxuICAgIHtcbiAgICAgICAgY29uc3QgYXZnID0gbmV3IFZlY3RvcigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgYXZnLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2Zy55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBhdmcueCAvPSBjb3VudDtcbiAgICAgICAgYXZnLnkgLz0gY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIGF2ZztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBmdXJ0aGVzdCB2ZXJ0ZXggYWxvbmcgYSBjZXJ0YWluIGRpcmVjdGlvblxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSBjb3VudFxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5kZXhPZkZ1cnRoZXN0UG9pbnQodmVydGljZXMsIGNvdW50LCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgbWF4UHJvZHVjdCA9IFZlY3Rvci5kb3RQcm9kdWN0KGRpcmVjdGlvbiwgdmVydGljZXNbMF0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSBWZWN0b3IuZG90UHJvZHVjdChkaXJlY3Rpb24sIHZlcnRpY2VzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2R1Y3QgPiBtYXhQcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgbWF4UHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTWlua293c2tpIHN1bSBzdXBwb3J0IGZ1bmN0aW9uIGZvciBHSktcbiAgICAgKiBAcGFyYW0gdmVydGljZXMxXG4gICAgICogQHBhcmFtIGNvdW50MVxuICAgICAqIEBwYXJhbSB2ZXJ0aWNlczJcbiAgICAgKiBAcGFyYW0gY291bnQyXG4gICAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBzdXBwb3J0KHZlcnRpY2VzMSwgY291bnQxLCB2ZXJ0aWNlczIsIGNvdW50MiwgZGlyZWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gZ2V0IGZ1cnRoZXN0IHBvaW50IG9mIGZpcnN0IGJvZHkgYWxvbmcgYW4gYXJiaXRyYXJ5IGRpcmVjdGlvblxuICAgICAgICBjb25zdCBpID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczEsIGNvdW50MSwgZGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBnZXQgZnVydGhlc3QgcG9pbnQgb2Ygc2Vjb25kIGJvZHkgYWxvbmcgdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICBjb25zdCBqID0gdGhpcy5pbmRleE9mRnVydGhlc3RQb2ludCh2ZXJ0aWNlczIsIGNvdW50MiwgVmVjdG9yLm5lZ2F0ZShkaXJlY3Rpb24pKTtcblxuICAgICAgICBjb25zdCB2MSA9IHZlcnRpY2VzMVtpXVxuICAgICAgICAgICAgLCB2MiA9IHZlcnRpY2VzMltqXTtcblxuICAgICAgICBjb25zdCBkaWZmID0gVmVjdG9yLnN1YnRyYWN0KHYxLCB2Mik7XG5cbiAgICAgICAgY29uc3QgZCA9IGRpcmVjdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VwcG9ydCcsIGBNaW5rb3dza2kgc3VtWyR7ZGlmZi54fSwgJHtkaWZmLnl9XWAsIGB2MVske3YxLnh9LCAke3YxLnl9XWAsIGB2Mlske3YyLnh9LCAke3YyLnl9XWAsIGBkWyR7ZC54LnRvRml4ZWQoMil9LCAke2QueS50b0ZpeGVkKDIpfV1gKTtcblxuICAgICAgICBQYWludGVyLmRyYXdQb2ludCh3aW5kb3cuZywgZGlmZi5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKSwgZmFsc2UsIDIsIDB4ZGRkZGRkKTtcblxuICAgICAgICAvLyBzdWJ0cmFjdCAoTWlua293c2tpIHN1bSkgdGhlIHR3byBwb2ludHMgdG8gc2VlIGlmIGJvZGllcyAnb3ZlcmxhcCdcbiAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2prKHZlcnRpY2VzMSwgY291bnQxLCB2ZXJ0aWNlczIsIGNvdW50MilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnamsoJywgdmVydGljZXMxLCBjb3VudDEsIHZlcnRpY2VzMiwgY291bnQyLCAnKScpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgICAgIC8vIGNvbnN0IHZlcnRpY2VzID0gWy4uLnZlcnRpY2VzMSwgLi4udmVydGljZXMyXTtcblxuICAgICAgICBjb25zb2xlLmxvZygndmVydGljZXMxJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIHZlcnRpY2VzMS5mb3JFYWNoKCh2ZWMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCwgYHZlY1ske3ZlYy54fSwgJHt2ZWMueX1dYCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2ZXJ0aWNlczInKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgdmVydGljZXMyLmZvckVhY2goKHZlYywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4LCBgdmVjWyR7dmVjLnh9LCAke3ZlYy55fV1gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cblxuICAgICAgICAvLyDrlJTrsoTqt7jsmqlcbiAgICAgICAgY29uc3QgbGluZUFscGhhID0gMC41XG4gICAgICAgICAgICAvLyDruJTro6hcbiAgICAgICAgICAgICwgYWJCbHVlID0gMHgwMEJDRDRcbiAgICAgICAgICAgIC8vIOuLueq4iOyDiVxuICAgICAgICAgICAgLCBhY0NhcnJvdCA9IDB4ZTY3ZTIyO1xuXG4gICAgICAgIC8vIGluZGV4IG9mIGN1cnJlbnQgdmVydGV4IG9mIHNpbXBsZXhcbiAgICAgICAgbGV0IGl0ZXJfY291bnQgPSAwLCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBhLCBiLCBjLCBkLCBkbiwgYW8sIGFiLCBhYywgYWJwZXJwLCBhY3BlcnAsIHNpbXBsZXggPSBbXTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbjEgPSB0aGlzLmF2ZXJhZ2VQb2ludCh2ZXJ0aWNlczEsIGNvdW50MSk7IC8vIG5vdCBhIENvRyBidXRcbiAgICAgICAgY29uc3QgcG9zaXRpb24yID0gdGhpcy5hdmVyYWdlUG9pbnQodmVydGljZXMyLCBjb3VudDIpOyAvLyBpdCdzIG9rIGZvciBHSksgKVxuXG4gICAgICAgIGNvbnN0IGMxID0gcG9zaXRpb24xLmNsb25lKCkubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pXG4gICAgICAgICAgICAsIGMyID0gcG9zaXRpb24yLmNsb25lKCkubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pO1xuXG4gICAgICAgIFBhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsIGMxLCBjMiwgZmFsc2UsIDEsIDB4ZGRkZGRkLCAwLjMpO1xuXG4gICAgICAgIC8vIGluaXRpYWwgZGlyZWN0aW9uIGZyb20gdGhlIGNlbnRlciBvZiAxc3QgYm9keSB0byB0aGUgY2VudGVyIG9mIDJuZCBib2R5XG4gICAgICAgIGQgPSBWZWN0b3Iuc3VidHJhY3QocG9zaXRpb24xLCBwb3NpdGlvbjIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBjMVske3Bvc2l0aW9uMS54LnRvRml4ZWQoMil9LCAke3Bvc2l0aW9uMS55LnRvRml4ZWQoMil9XWAsIGBjMlske3Bvc2l0aW9uMi54LnRvRml4ZWQoMil9LCAke3Bvc2l0aW9uMi55LnRvRml4ZWQoMil9XWAsIGBkWyR7ZC54LnRvRml4ZWQoMil9LCAke2QueS50b0ZpeGVkKDIpfV1gKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgICAgICAvLyBpZiBpbml0aWFsIGRpcmVjdGlvbiBpcyB6ZXJvIOKAkyBzZXQgaXQgdG8gYW55IGFyYml0cmFyeSBheGlzICh3ZSBjaG9vc2UgWClcbiAgICAgICAgaWYgKChkLnggPT0gMCkgJiYgKGQueSA9PSAwKSkge1xuICAgICAgICAgICAgZC54ID0gMS4wO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKiogZGlyZWN0aW9uIGlzIHplcm8gKionKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZmlyc3Qgc3VwcG9ydCBhcyBpbml0aWFsIHBvaW50IG9mIHRoZSBuZXcgc2ltcGxleFxuICAgICAgICBhID0gc2ltcGxleFswXSA9IHRoaXMuc3VwcG9ydCh2ZXJ0aWNlczEsIGNvdW50MSwgdmVydGljZXMyLCBjb3VudDIsIGQpO1xuXG4gICAgICAgIGRuID0gZC5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2ltcGxleFske2luZGV4fV1gLCBgYVske2EueC50b0ZpeGVkKCl9LCAke2EueS50b0ZpeGVkKCl9XVswXWAsIGBkWyR7ZG4ueC50b0ZpeGVkKDIpfSwgJHtkbi55LnRvRml4ZWQoMil9XWAsIFZlY3Rvci5kb3RQcm9kdWN0KGEsIGQpKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2coYFZlY3Rvci5kb3RQcm9kdWN0KCgke2EueC50b0ZpeGVkKCl9LCAke2EueS50b0ZpeGVkKCl9KSwoJHtkbi54LnRvRml4ZWQoMil9LCAke2RuLnkudG9GaXhlZCgyKX0pKSA8PSAwYCwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkpO1xuXG4gICAgICAgIGlmIChWZWN0b3IuZG90UHJvZHVjdChhLCBkKSA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMS4gbm8gY29sbGlzaW9uJyk7XG4gICAgICAgICAgICByZXR1cm4gMDsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgIH1cblxuICAgICAgICBkID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gVGhlIG5leHQgc2VhcmNoIGRpcmVjdGlvbiBpcyBhbHdheXMgdG93YXJkcyB0aGUgb3JpZ2luLCBzbyB0aGUgbmV4dCBzZWFyY2ggZGlyZWN0aW9uIGlzIG5lZ2F0ZShhKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBWZWN0b3IubmVnYXRlKCR7YX0pID0gJHtkfWApO1xuXG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBpdGVyX2NvdW50Kys7XG5cbiAgICAgICAgICAgIGEgPSBzaW1wbGV4WysraW5kZXhdID0gdGhpcy5zdXBwb3J0KHZlcnRpY2VzMSwgY291bnQxLCB2ZXJ0aWNlczIsIGNvdW50MiwgZCk7XG5cbiAgICAgICAgICAgIGRuID0gZC5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaW1wbGV4WyR7aW5kZXh9XWAsIGBhWyR7YS54LnRvRml4ZWQoKX0sICR7YS55LnRvRml4ZWQoKX1dWzFdYCwgYGRbJHtkbi54LnRvRml4ZWQoMil9LCAke2RuLnkudG9GaXhlZCgyKX1dYCwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFZlY3Rvci5kb3RQcm9kdWN0KCgke2EueC50b0ZpeGVkKCl9LCAke2EueS50b0ZpeGVkKCl9KSwoJHtkbi54LnRvRml4ZWQoMil9LCAke2RuLnkudG9GaXhlZCgyKX0pKSA8PSAwYCwgVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkpO1xuXG4gICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYSwgZCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyLiBubyBjb2xsaXNpb24nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gbm8gY29sbGlzaW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFvID0gVmVjdG9yLm5lZ2F0ZShhKTsgLy8gZnJvbSBwb2ludCBBIHRvIE9yaWdpbiBpcyBqdXN0IG5lZ2F0aXZlIEFcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYGFvWyR7YW8ueC50b0ZpeGVkKDIpfSwgJHthby55LnRvRml4ZWQoMil9XWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcblxuICAgICAgICAgICAgLy8gc2ltcGxleCBoYXMgMiBwb2ludHMgKGEgbGluZSBzZWdtZW50LCBub3QgYSB0cmlhbmdsZSB5ZXQpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAyKSB7XG4gICAgICAgICAgICAgICAgYiA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICAgICAgYWIgPSBWZWN0b3Iuc3VidHJhY3QoYiwgYSk7IC8vIGZyb20gcG9pbnQgQSB0byBCXG4gICAgICAgICAgICAgICAgZCA9IFZlY3Rvci50cmlwbGVQcm9kdWN0KGFiLCBhbywgYWIpOyAvLyBub3JtYWwgdG8gQUIgdG93YXJkcyBPcmlnaW5cblxuICAgICAgICAgICAgICAgIGlmIChWZWN0b3IubGVuZ3RoU3EoZCkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkID0gVmVjdG9yLnBlcnBlbmRpY3VsYXIoYWIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGEgLT4gYlxuICAgICAgICAgICAgICAgIFBhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsIGEuY2xvbmUoKS5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbiksIGIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbiksIGZhbHNlLCAxLCBhYkJsdWUsIGxpbmVBbHBoYSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhYiAtPiBhb1xuICAgICAgICAgICAgICAgIFBhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsIHRoaXMubWlkcG9pbnQoYSwgYikubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pLCBkLCBmYWxzZSwgMSwgYWJCbHVlLCBsaW5lQWxwaGEpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NpbXBsZXggMuqwnCDroZzsp4EsIOyyqyDro6jtlITrp4wg7Jes6ri4IOyLpO2WiScpO1xuICAgICAgICAgICAgICAgIGRuID0gZC5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaW1wbGV4WyR7aW5kZXh9XWAsIGBhWyR7YS54LnRvRml4ZWQoKX0sICR7YS55LnRvRml4ZWQoKX1dWzFdYCwgYGJbJHtiLngudG9GaXhlZCgpfSwgJHtiLnkudG9GaXhlZCgpfV1bMF1gLCBgZFske2RuLngudG9GaXhlZCgyKX0sICR7ZG4ueS50b0ZpeGVkKDIpfV1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBza2lwIHRvIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGIgPSBzaW1wbGV4WzFdO1xuICAgICAgICAgICAgYyA9IHNpbXBsZXhbMF07XG4gICAgICAgICAgICBhYiA9IFZlY3Rvci5zdWJ0cmFjdChiLCBhKTsgLy8gZnJvbSBwb2ludCBBIHRvIEJcbiAgICAgICAgICAgIGFjID0gVmVjdG9yLnN1YnRyYWN0KGMsIGEpOyAvLyBmcm9tIHBvaW50IEEgdG8gQ1xuXG4gICAgICAgICAgICAvL2Fj7JmAIOyImOyngVxuICAgICAgICAgICAgYWNwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWIsIGFjLCBhYyk7XG5cbiAgICAgICAgICAgIC8vIGEgLT4gYlxuICAgICAgICAgICAgUGFpbnRlci5kcmF3TGluZSh3aW5kb3cuZywgYS5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKSwgYi5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKSwgZmFsc2UsIDEsIGFiQmx1ZSwgbGluZUFscGhhKTtcblxuICAgICAgICAgICAgLy8gYSAtPiBjXG4gICAgICAgICAgICBQYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLCBhLmNsb25lKCkubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pLCBjLmNsb25lKCkubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pLCBmYWxzZSwgMSwgYWNDYXJyb3QsIGxpbmVBbHBoYSk7XG5cbiAgICAgICAgICAgIC8vIGFjIC0+IGFjcGVycFxuICAgICAgICAgICAgUGFpbnRlci5kcmF3TGluZSh3aW5kb3cuZywgdGhpcy5taWRwb2ludChhLCBjKS5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKSwgYWNwZXJwLCBmYWxzZSwgMSwgYWNDYXJyb3QsIGxpbmVBbHBoYSk7XG4gICAgICAgICAgICAvLyBQYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLCB0aGlzLmF2ZXJhZ2VQb2ludChbYSwgYiwgY10sIDMpLm11bHRpcGx5U2NhbGFyKHdpbmRvdy5tYWduaWZpY2F0aW9uKSwgYWNwZXJwLCBmYWxzZSwgMSwgYWNCbHVlLCBsaW5lQWxwaGEpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU2ltcGxleCAz6rCcIOuhnOyngSwg65GQIOuyiOynuCDro6jtlITrtoDthLAg7Jes6riwIOqzhOyGjSDsi6TtloknKTtcbiAgICAgICAgICAgIGRuID0gZC5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNpbXBsZXhbJHtpbmRleH1dYCwgYGFbJHthLngudG9GaXhlZCgpfSwgJHthLnkudG9GaXhlZCgpfV1bMl1gLCBgYlske2IueC50b0ZpeGVkKCl9LCAke2IueS50b0ZpeGVkKCl9XVsxXWAsIGBjWyR7Yy54LnRvRml4ZWQoKX0sICR7Yy55LnRvRml4ZWQoKX1dWzBdYCwgYGRbJHtkbi54LnRvRml4ZWQoMil9LCAke2RuLnkudG9GaXhlZCgyKX1dYCwgYGFjcGVycFske2FjcGVycC5jbG9uZSgpLm5vcm1hbGl6ZSgpLngudG9GaXhlZCgyKX0sICR7YWNwZXJwLmNsb25lKCkubm9ybWFsaXplKCkueS50b0ZpeGVkKDIpfV1gLCBWZWN0b3IuZG90UHJvZHVjdChhY3BlcnAsIGFvKSwgVmVjdG9yLmRvdFByb2R1Y3QoYWNwZXJwLCBhbykgPj0gMCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgICAgICAgICAvLyBhYyDsiJjsp4Eg7ISg67aE7J20IOybkOygkOydhCDrs7Trj4TroZ0g67Cp7ZalIOyEpOyglVxuICAgICAgICAgICAgaWYgKFZlY3Rvci5kb3RQcm9kdWN0KGFjcGVycCwgYW8pID49IDApIHtcbiAgICAgICAgICAgICAgICBkID0gYWNwZXJwOyAvLyBuZXcgZGlyZWN0aW9uIGlzIG5vcm1hbCB0byBBQyB0b3dhcmRzIE9yaWdpblxuICAgICAgICAgICAgICAgIGRuID0gZC5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4nLCBgZFske2RuLnh9LCAke2RuLnl9XWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWJwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIGFiLCBhYik7XG4gICAgICAgICAgICAgICAgLy8gYWJwZXJwID0gVmVjdG9yLnRyaXBsZVByb2R1Y3QoYWMsIFZlY3Rvci5uZWdhdGUoYWIpLCBhYik7XG5cbiAgICAgICAgICAgICAgICBkbiA9IGFicGVycC5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGFicGVycFske2RuLngudG9GaXhlZCgyKX0sICR7ZG4ueS50b0ZpeGVkKDIpfV1gKTtcblxuICAgICAgICAgICAgICAgIC8vIGEgLT4gYlxuICAgICAgICAgICAgICAgIFBhaW50ZXIuZHJhd0xpbmUod2luZG93LmcsIGEuY2xvbmUoKS5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbiksIGIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcih3aW5kb3cubWFnbmlmaWNhdGlvbiksIGZhbHNlLCAxLCBhYkJsdWUsIGxpbmVBbHBoYSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhYiAtPiBhYnBlcnBcbiAgICAgICAgICAgICAgICBQYWludGVyLmRyYXdMaW5lKHdpbmRvdy5nLCB0aGlzLm1pZHBvaW50KGEsIGIpLmNsb25lKCkubXVsdGlwbHlTY2FsYXIod2luZG93Lm1hZ25pZmljYXRpb24pLCBhYnBlcnAsIGZhbHNlLCAxLCBhYkJsdWUsIGxpbmVBbHBoYSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhYiDsiJjsp4Eg7ISg67aE7J20IOybkOygkCDrsJjrjIAg67Cp7Zal7J2EIO2Wpe2VmOqzoCDsnojsnLzrqbQg7KaJLCDsm5DsoJDsnbQg7IK86rCB7ZiVIOyViOyXkCDsnojsnLzrqbRcbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmRvdFByb2R1Y3QoYWJwZXJwLCBhbykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4gY29sbGlzaW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxOyAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaW1wbGV4WzBdID0gc2ltcGxleFsxXTsgLy8gc3dhcCBmaXJzdCBlbGVtZW50IChwb2ludCBDKVxuICAgICAgICAgICAgICAgIGQgPSBhYnBlcnA7IC8vIG5ldyBkaXJlY3Rpb24gaXMgbm9ybWFsIHRvIEFCIHRvd2FyZHMgT3JpZ2luXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpbXBsZXhbMV0gPSBzaW1wbGV4WzJdOyAvLyBzd2FwIGVsZW1lbnQgaW4gdGhlIG1pZGRsZSAocG9pbnQgQilcbiAgICAgICAgICAgIC0taW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnMy4gbm8gY29sbGlzaW9uJyk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnZleEh1bGwocG9pbnRzKVxuICAgIHtcbiAgICAgICAgLy8gRmluZCB0aGUgcmlnaHQgbW9zdCBwb2ludCBvbiB0aGUgaHVsbFxuICAgICAgICB2YXIgaTAgPSAwO1xuICAgICAgICB2YXIgeDAgPSBwb2ludHNbMF0ueDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBpZiAoeCA+IHgwIHx8ICh4ID09IHgwICYmIHBvaW50c1tpXS55IDwgcG9pbnRzW2kwXS55KSkge1xuICAgICAgICAgICAgICAgIGkwID0gaTtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBodWxsID0gW107XG4gICAgICAgIHZhciBtID0gMDtcbiAgICAgICAgdmFyIGloID0gaTA7XG5cbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGh1bGxbbV0gPSBpaDtcblxuICAgICAgICAgICAgdmFyIGllID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGllID09IGloKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHIgPSBWZWN0b3Iuc3VidHJhY3QocG9pbnRzW2llXSwgcG9pbnRzW2h1bGxbbV1dKTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IFZlY3Rvci5zdWJ0cmFjdChwb2ludHNbal0sIHBvaW50c1todWxsW21dXSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBWZWN0b3IuY3Jvc3Mociwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGllID0gajtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb2xsaW5lYXJpdHkgY2hlY2tcbiAgICAgICAgICAgICAgICBpZiAoYyA9PSAwICYmIHYubGVuZ3RoU3EoKSA+IHIubGVuZ3RoU3EoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZSA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtKys7XG4gICAgICAgICAgICBpaCA9IGllO1xuXG4gICAgICAgICAgICBpZiAoaWUgPT0gaTApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgdmVydGljZXNcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2h1bGxbaV1dO1xuICAgICAgICAgICAgbmV3UG9pbnRzLnB1c2gobmV3IFZlY3Rvcihwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UG9pbnRzO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgbWlkcG9pbnQoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKChhLnggKyBiLngpIC8gMiwgKGEueSArIGIueSkgLyAyKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2prL0NhbGN1bGF0b3IuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0aW9uXG57XG4gICAgY29uc3RydWN0b3IobWluLCBtYXgpXG4gICAge1xuICAgICAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgfVxuXG5cbiAgICBnZXRPdmVybGFwKHByb2plY3Rpb24pXG4gICAge1xuICAgICAgICB2YXIgb3ZlcmxhcDtcblxuICAgICAgICBpZiAoIXRoaXMub3ZlcmxhcHMocHJvamVjdGlvbikpXG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICBpZiAodGhpcy5tYXggPiBwcm9qZWN0aW9uLm1heCkge1xuICAgICAgICAgICAgb3ZlcmxhcCA9IHByb2plY3Rpb24ubWF4IC0gdGhpcy5taW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvdmVybGFwID0gdGhpcy5tYXggLSBwcm9qZWN0aW9uLm1pbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3ZlcmxhcDtcbiAgICB9XG5cblxuICAgIG92ZXJsYXBzKHByb2plY3Rpb24pXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXggPiBwcm9qZWN0aW9uLm1pbiAmJiBwcm9qZWN0aW9uLm1heCA+IHRoaXMubWluO1xuICAgIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NhdC9Qcm9qZWN0aW9uLmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9nZW9tL1ZlY3Rvcic7XG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tICcuL1Byb2plY3Rpb24nO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi4vdXRpbHMvUGFpbnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiBleHRlbmRzIFNoYXBlXG57XG4gICAgY29uc3RydWN0b3IoY29udGV4dClcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludHMubGVuZ3RoICsgJyBQb2x5Z29uJztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOykkeygkCDsooztkZxcbiAgICAgKiBAcmV0dXJucyB7UElYSS5Qb2ludHwqfHN2Zy5Qb2ludH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXIoKVxuICAgIHtcbiAgICAgICAgdmFyIHBvaW50U3VtID0gbmV3IFBJWEkuUG9pbnQoKTtcblxuICAgICAgICBmb3IgKHZhciBpPTAsIHBvaW50OyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHBvaW50ID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgICAgICBwb2ludFN1bS54ICs9IHBvaW50Lng7XG4gICAgICAgICAgICBwb2ludFN1bS55ICs9IHBvaW50Lnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlBvaW50KHBvaW50U3VtLnggLyB0aGlzLnBvaW50cy5sZW5ndGgsXG4gICAgICAgICAgICBwb2ludFN1bS55IC8gdGhpcy5wb2ludHMubGVuZ3RoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOy2qeuPjCDssrTtgawgKOu2hOumrOy2leydtCDsl4bsnLzrqbQg7Lap64+MKSwgIXNlcGFyYXRpb25PbkF4ZXNcbiAgICAgKiBAcGFyYW0gc2hhcGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBjb2xsaWRlc1dpdGgoc2hhcGUpXG4gICAge1xuICAgICAgICBpZiAoc2hhcGUucmFkaXVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25Db2xsaWRlc1dpdGhDaXJjbGUodGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNvbGxpZGVzV2l0aFBvbHlnb24odGhpcywgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIGNvbGxpZGVzV2l0aChzaGFwZSlcbiAgICB7XG4gICAgICAgIHZhciBheGVzID0gc2hhcGUuZ2V0QXhlcygpO1xuXG4gICAgICAgIGlmIChheGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZS5wb2x5Z29uQ29sbGlkZXNXaXRoQ2lyY2xlKHRoaXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF4ZXMuY29uY2F0KHRoaXMuZ2V0QXhlcygpKTtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5zZXBhcmF0aW9uT25BeGVzKGF4ZXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiDtiKzsmIFcbiAgICAgKiBAcGFyYW0gYXhpc1xuICAgICAqIEByZXR1cm5zIHtQcm9qZWN0aW9ufVxuICAgICAqL1xuICAgIHByb2plY3QoYXhpcylcbiAgICB7XG4gICAgICAgIHZhciBzY2FsYXJzID0gW10sXG4gICAgICAgICAgICB2ID0gbmV3IFZlY3RvcigpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goIGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgdi54ID0gcG9pbnQueDtcbiAgICAgICAgICAgIHYueSA9IHBvaW50Lnk7XG4gICAgICAgICAgICBzY2FsYXJzLnB1c2godi5kb3RQcm9kdWN0KGF4aXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0aW9uKE1hdGgubWluLmFwcGx5KE1hdGgsIHNjYWxhcnMpLFxuICAgICAgICAgICAgTWF0aC5tYXguYXBwbHkoTWF0aCwgc2NhbGFycykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog7LaVIOq1rO2VmOq4sCAoZWRnZeyXkCDrhbjrp5DsnYQg7LaV7Jy866GcIO2VqeuLiOuLpClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0QXhlcygpXG4gICAge1xuICAgICAgICB2YXIgdjEgPSBuZXcgVmVjdG9yKCksXG4gICAgICAgICAgICB2MiA9IG5ldyBWZWN0b3IoKSxcbiAgICAgICAgICAgIGF4ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgICB2MS54ID0gdGhpcy5wb2ludHNbaV0ueDtcbiAgICAgICAgICAgIHYxLnkgPSB0aGlzLnBvaW50c1tpXS55O1xuXG4gICAgICAgICAgICB2Mi54ID0gdGhpcy5wb2ludHNbaSsxXS54O1xuICAgICAgICAgICAgdjIueSA9IHRoaXMucG9pbnRzW2krMV0ueTtcblxuICAgICAgICAgICAgLy8g66qo7ISc66as7JeQ7IScIOyImOyngeyduCDrhbjrp5Ao67KV7ISgKSDrsqHthLDrpbwg66eM65Ot64uI64ukLiAo7LaVIOyDneyEsSlcbiAgICAgICAgICAgIGF4ZXMucHVzaCh2MS5lZGdlKHYyKS5wZXJwZW5kaWN1bGFyKCkubm9ybWFsaXplKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdjEueCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS54O1xuICAgICAgICB2MS55ID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLnk7XG5cbiAgICAgICAgdjIueCA9IHRoaXMucG9pbnRzWzBdLng7XG4gICAgICAgIHYyLnkgPSB0aGlzLnBvaW50c1swXS55O1xuXG4gICAgICAgIC8vIOuqqOyEnOumrOyXkOyEnCDsiJjsp4Hsnbgg64W466eQKOuyleyEoCkg67Kh7YSw66W8IOunjOuTreuLiOuLpC4gKOy2lSDsg53shLEpXG4gICAgICAgIGF4ZXMucHVzaCh2MS5lZGdlKHYyKS5wZXJwZW5kaWN1bGFyKCkubm9ybWFsaXplKCkpO1xuICAgICAgICByZXR1cm4gYXhlcztcbiAgICB9XG5cblxuICAgIGNyZWF0ZVBhdGgoZ3JhcGhpY3MsIGxpbmVDb2xvciA9IDB4RkZGRkZGKVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIGxpbmVDb2xvcik7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8odGhpcy5wb2ludHNbaV0ueCwgdGhpcy5wb2ludHNbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuICAgIH1cblxuXG4gICAgbW92ZShkeCwgZHkpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgICAgIHBvaW50LnggKz0gZHg7XG4gICAgICAgICAgICBwb2ludC55ICs9IGR5O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpc1BvaW50SW5QYXRoKHgsIHkpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgICBjb25zdCBpc1BvaW50SW5QYXRoID0gdGhpcy5jb250ZXh0LmlzUG9pbnRJblBhdGgoeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiBpc1BvaW50SW5QYXRoO1xuICAgIH1cblxuXG4gICAgYWRkUG9pbnQoeCwgeSlcbiAgICB7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHgsIHkpKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wb2ludHMubGVuZ3RoICsgJyBQb2x5Z29uJztcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2F0L1BvbHlnb24uanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZVxue1xuICAgIHN0YXRpYyBnZXQgREVTS1RPUF9NT1VTRSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTU9CSUxFX01PVVNFKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQSVhJLkFwcGxpY2F0aW9uLnJlbmRlcmVyXG4gICAgICog656c642U65+s7JeQ7IScIGludGVyYWN0aW8g6rCd7LK066W8IOywuOyhsO2VoCDsiJgg7J6I7Ja07IScIOyCrOyaqe2VmOugpOuptCDroIzrjZTrn6zrpbwg7IWL7YyF7ZW07JW8IO2VqeuLiOuLpC5cbiAgICAgKiBAcGFyYW0gdmFsdWUge1BJWEkuV2ViR0xSZW5kZXJyZXJ8UElYSS5DYW52YXNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0IHJlbmRlcmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDrqqjrsJTsnbwg64yA7J2R7J2EIOychO2VtOyEnFxuICAgICAqIFBDIOuyhOyghOyXkOyEnOuKlCBtb3VzZSDqsJ3ssrTrpbwsIOuqqOuwlOydvCDrsoTsoITsl5DshJzripQgcG9pbnRlciDqsJ3ssrTrpbwg7IWL7YyF7ZWY66m0XG4gICAgICogZ2xvYmFsIOqwneyytOyXkOyEnCDssLjsobDtlbTshJwg7KKM7ZGc6rCS7J2EIOyghOuLrO2VmOuPhOuhnSDtlanri4jri6QuXG4gICAgICpcbiAgICAgKiDrp4zslb0g7ISk7KCV7ZWY7KeAIOyViuycvOuptCDquLDrs7ggUEPrp4wg64yA7J2R7ZWY64+E66GdIG1vdXNlIOqwneyytOulvCDshKTsoJXtlanri4jri6QuXG4gICAgICpcbiAgICAgKiBEZXNrdG9wIDogTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZVxuICAgICAqIE1vYmlsZSA6IE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ucG9pbnRlclxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQgbW91c2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbW91c2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBtb3VzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3VzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2UgPSB0aGlzLkRFU0tUT1BfTU9VU0U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdXNlO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBnbG9iYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlLmdsb2JhbDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnbG9iYWxZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZS5nbG9iYWwueTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzZXQgY3VycmVudEN1cnNvclN0eWxlKHZhbHVlKSB7XG4gICAgICAgIE1vdXNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24uY3VycmVudEN1cnNvclN0eWxlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgY3VycmVudEN1cnNvclN0eWxlKCkge1xuICAgICAgICByZXR1cm4gTW91c2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5jdXJyZW50Q3Vyc29yU3R5bGU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDsnbTrj5kg6rGw66as6rCAIDVweCDsnbTtlZjsnbTqs6AgNTAwbXMg7JWI7JeQIOuRkOuyiCDtgbTrpq3tlZjrqbQg642U67iUIO2BtOumreycvOuhnCDsnbjsoJVcbiAgICAgKiBAcGFyYW0gcHJldlBvaW50IOydtOyghOyijO2RnFxuICAgICAqIEBwYXJhbSBjdXJyZW50UG9pbnQg7ZiE7J6s7KKM7ZGcXG4gICAgICogQHBhcmFtIHByZXZUaW1lIOydtOyghCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHBhcmFtIGN1cnJlbnRUaW1lIO2YhOyerCDtgbTrpq0g7YOA7J6EXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOuNlOu4lCDtgbTrpq0g7Jes67aAXG4gICAgICovXG4gICAgc3RhdGljIGlzRG91YmxlQ2xpY2socHJldlBvaW50LCBjdXJyZW50UG9pbnQsIHByZXZUaW1lLCBjdXJyZW50VGltZSkge1xuICAgICAgICB2YXIgZGlmZlggPSBjdXJyZW50UG9pbnQueCAtIHByZXZQb2ludC54O1xuXG4gICAgICAgIGlmIChkaWZmWCA8IDApIHtcbiAgICAgICAgICAgIGRpZmZYID0gZGlmZlggKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaWZmWSA9IGN1cnJlbnRQb2ludC55IC0gcHJldlBvaW50Lnk7XG5cbiAgICAgICAgaWYgKGRpZmZZIDwgMCkge1xuICAgICAgICAgICAgZGlmZlkgPSBkaWZmWSAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZmZYID4gNSB8fCBkaWZmWSA+IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIHByZXZUaW1lID4gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvTW91c2UuanMiXSwic291cmNlUm9vdCI6IiJ9
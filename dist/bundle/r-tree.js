webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1);
	
	var _Test = __webpack_require__(328);
	
	var _Test2 = _interopRequireDefault(_Test);
	
	var _KeyCode = __webpack_require__(329);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	(function () {
	    window.onload = function () {
	        var main = new Main();
	    };
	})();
	
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
	            this.test = new _Test2.default();
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Test = function Test() {
	    _classCallCheck(this, Test);
	};
	
	exports.default = Test;

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3ItdHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3ItdHJlZS9UZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHMvS2V5Q29kZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJtYWluIiwiTWFpbiIsImluaXQiLCJhZGRFdmVudCIsIm9uUmVzaXplIiwidGVzdCIsIm9ucmVzaXplIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbktleVVwIiwiZSIsImtleUNvZGUiLCJUSUxERSIsIkVTQyIsIlNQQUNFIiwiRE9XTl9BUlJPVyIsIlVQX0FSUk9XIiwiTEVGVF9BUlJPVyIsIlJJR0hUX0FSUk9XIiwiQkFDS19TUEFDRSIsImNvbnNvbGUiLCJjbGVhciIsIlRlc3QiLCJLZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVDLGNBQVk7QUFDVEEsWUFBT0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGFBQUlDLE9BQU8sSUFBSUMsSUFBSixFQUFYO0FBQ0gsTUFGRDtBQUdILEVBSkEsR0FBRDs7S0FNTUEsSTtBQUNGLHFCQUFjO0FBQUE7O0FBQ1YsY0FBS0MsSUFBTDtBQUNBLGNBQUtDLFFBQUw7QUFDQSxjQUFLQyxRQUFMO0FBQ0g7Ozs7Z0NBRU07QUFDSCxrQkFBS0MsSUFBTCxHQUFZLG9CQUFaO0FBQ0g7OztvQ0FFVTtBQUNQUCxvQkFBT1EsUUFBUCxHQUFrQixLQUFLRixRQUFMLENBQWNHLElBQWQsQ0FBbUIsSUFBbkIsQ0FBbEI7QUFDQVQsb0JBQU9VLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLEtBQUtDLE9BQUwsQ0FBYUYsSUFBYixDQUFrQixJQUFsQixDQUFqQztBQUNIOzs7b0NBRVUsQ0FBRTs7O2lDQUVKRyxDLEVBQUc7QUFDUixxQkFBUUEsRUFBRUMsT0FBVjtBQUNJLHNCQUFLLGtCQUFRQyxLQUFiO0FBQ0k7O0FBRUosc0JBQUssa0JBQVFDLEdBQWI7QUFDSTs7QUFFSixzQkFBSyxrQkFBUUMsS0FBYjtBQUNJOztBQUVKLHNCQUFLLGtCQUFRQyxVQUFiO0FBQ0k7O0FBRUosc0JBQUssa0JBQVFDLFFBQWI7QUFDSTs7QUFFSixzQkFBSyxrQkFBUUMsVUFBYjtBQUNJOztBQUVKLHNCQUFLLGtCQUFRQyxXQUFiO0FBQ0k7O0FBRUosc0JBQUssa0JBQVFDLFVBQWI7QUFDSUMsNkJBQVFDLEtBQVI7QUFDQTtBQXhCUjtBQTBCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ3ZEZ0JDLEksR0FDakIsZ0JBQWM7QUFBQTtBQUNiLEU7O21CQUZnQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NBQUMsTzs7Ozs7Ozt5QkFDRTtBQUFFLGNBQU8sQ0FBUDtBQUFXOzs7eUJBQ1Q7QUFBRSxjQUFPLENBQVA7QUFBVzs7O3lCQUNuQjtBQUFFLGNBQU8sQ0FBUDtBQUFXOzs7eUJBQ1g7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDWjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2hCO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDWjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ1o7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNsQjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ1g7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNoQjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Y7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNaO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDWjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ3BCO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDYjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNoQjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ1g7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNmO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDWjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNaO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDckI7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDSjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2I7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNoQjtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2hCO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sRUFBUDtBQUFZOzs7eUJBQ2Q7QUFBRSxjQUFPLEVBQVA7QUFBWTs7O3lCQUNkO0FBQUUsY0FBTyxFQUFQO0FBQVk7Ozt5QkFDZDtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2Y7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNmO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDZjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2Y7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNmO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDUjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ3BCO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDYjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ1o7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNoQjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2hCO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDMUI7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNmO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDZjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2Y7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNmO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDZjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2Y7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNmO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDZjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2Q7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNmO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDZjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2Y7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNmO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDZjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ1Q7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNuQjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2Y7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNoQjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ2I7QUFBRSxjQUFPLEdBQVA7QUFBYTs7O3lCQUNaO0FBQUUsY0FBTyxHQUFQO0FBQWE7Ozt5QkFDZjtBQUFFLGNBQU8sR0FBUDtBQUFhOzs7eUJBQ25CO0FBQUUsY0FBTyxHQUFQO0FBQWE7O0FBR2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXhHaUJBLE8iLCJmaWxlIjoici10cmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi8uLi8uLi9zcmMvY29uc3RzL0tleUNvZGUnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYWluID0gbmV3IE1haW4oKTtcbiAgICB9XG59KCkpO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudGVzdCA9IG5ldyBUZXN0KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCkge31cblxuICAgIG9uS2V5VXAgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5USUxERTpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRE9XTl9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVQX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTEVGVF9BUlJPVzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUX0FSUk9XOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuQkFDS19TUEFDRTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9yLXRyZWUvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L3ItdHJlZS9UZXN0LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Q29kZSB7XG4gICAgc3RhdGljIGdldCBCUkVBSygpIHsgcmV0dXJuIDM7IH1cbiAgICBzdGF0aWMgZ2V0IEJBQ0tTUEFDRSgpIHsgcmV0dXJuIDg7IH1cbiAgICBzdGF0aWMgZ2V0IFRBQigpIHsgcmV0dXJuIDk7IH1cbiAgICBzdGF0aWMgZ2V0IENMRUFSKCkgeyByZXR1cm4gMTI7IH1cbiAgICBzdGF0aWMgZ2V0IEVOVEVSKCkgeyByZXR1cm4gMTM7IH1cbiAgICBzdGF0aWMgZ2V0IENPTU1BTkQoKSB7IHJldHVybiAxNTsgfVxuICAgIHN0YXRpYyBnZXQgU0hJRlQoKSB7IHJldHVybiAxNjsgfVxuICAgIHN0YXRpYyBnZXQgQ09OVFJPTCgpIHsgcmV0dXJuIDE3OyB9XG4gICAgc3RhdGljIGdldCBBTFRFUk5BVEUoKSB7IHJldHVybiAxODsgfVxuICAgIHN0YXRpYyBnZXQgUEFVU0UoKSB7IHJldHVybiAxODsgfVxuICAgIHN0YXRpYyBnZXQgQ0FQU0xPQ0soKSB7IHJldHVybiAxODsgfVxuICAgIHN0YXRpYyBnZXQgRVNDQVBFKCkgeyByZXR1cm4gMjc7IH1cbiAgICBzdGF0aWMgZ2V0IFNQQUNFKCkgeyByZXR1cm4gMzI7IH1cbiAgICBzdGF0aWMgZ2V0IFBBR0VfVVAoKSB7IHJldHVybiAzMzsgfVxuICAgIHN0YXRpYyBnZXQgUEFHRV9ET1dOKCkgeyByZXR1cm4gMzQ7IH1cbiAgICBzdGF0aWMgZ2V0IEVORCgpIHsgcmV0dXJuIDM1OyB9XG4gICAgc3RhdGljIGdldCBIT01FKCkgeyByZXR1cm4gMzY7IH1cbiAgICBzdGF0aWMgZ2V0IExFRlQoKSB7IHJldHVybiAzNzsgfVxuICAgIHN0YXRpYyBnZXQgVVAoKSB7IHJldHVybiAzODsgfVxuICAgIHN0YXRpYyBnZXQgUklHSFQoKSB7IHJldHVybiAzOTsgfVxuICAgIHN0YXRpYyBnZXQgRE9XTigpIHsgcmV0dXJuIDQwOyB9XG4gICAgc3RhdGljIGdldCBJTlNFUlQoKSB7IHJldHVybiA0NTsgfVxuICAgIHN0YXRpYyBnZXQgREVMRVRFKCkgeyByZXR1cm4gNDY7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl8wKCkgeyByZXR1cm4gNDg7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl8xKCkgeyByZXR1cm4gNDk7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl8yKCkgeyByZXR1cm4gNTA7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl8zKCkgeyByZXR1cm4gNTE7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl80KCkgeyByZXR1cm4gNTI7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl81KCkgeyByZXR1cm4gNTM7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl82KCkgeyByZXR1cm4gNTQ7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl83KCkgeyByZXR1cm4gNTU7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl84KCkgeyByZXR1cm4gNTY7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTUJFUl85KCkgeyByZXR1cm4gNTc7IH1cbiAgICBzdGF0aWMgZ2V0IEEoKSB7IHJldHVybiA2NTsgfVxuICAgIHN0YXRpYyBnZXQgQigpIHsgcmV0dXJuIDY2OyB9XG4gICAgc3RhdGljIGdldCBDKCkgeyByZXR1cm4gNjc7IH1cbiAgICBzdGF0aWMgZ2V0IEQoKSB7IHJldHVybiA2ODsgfVxuICAgIHN0YXRpYyBnZXQgRSgpIHsgcmV0dXJuIDY5OyB9XG4gICAgc3RhdGljIGdldCBGKCkgeyByZXR1cm4gNzA7IH1cbiAgICBzdGF0aWMgZ2V0IEcoKSB7IHJldHVybiA3MTsgfVxuICAgIHN0YXRpYyBnZXQgSCgpIHsgcmV0dXJuIDcyOyB9XG4gICAgc3RhdGljIGdldCBJKCkgeyByZXR1cm4gNzM7IH1cbiAgICBzdGF0aWMgZ2V0IEooKSB7IHJldHVybiA3NDsgfVxuICAgIHN0YXRpYyBnZXQgSygpIHsgcmV0dXJuIDc1OyB9XG4gICAgc3RhdGljIGdldCBMKCkgeyByZXR1cm4gNzY7IH1cbiAgICBzdGF0aWMgZ2V0IE0oKSB7IHJldHVybiA3NzsgfVxuICAgIHN0YXRpYyBnZXQgTigpIHsgcmV0dXJuIDc4OyB9XG4gICAgc3RhdGljIGdldCBPKCkgeyByZXR1cm4gNzk7IH1cbiAgICBzdGF0aWMgZ2V0IFAoKSB7IHJldHVybiA4MDsgfVxuICAgIHN0YXRpYyBnZXQgUSgpIHsgcmV0dXJuIDgxOyB9XG4gICAgc3RhdGljIGdldCBSKCkgeyByZXR1cm4gODI7IH1cbiAgICBzdGF0aWMgZ2V0IFMoKSB7IHJldHVybiA4MzsgfVxuICAgIHN0YXRpYyBnZXQgVCgpIHsgcmV0dXJuIDg0OyB9XG4gICAgc3RhdGljIGdldCBVKCkgeyByZXR1cm4gODU7IH1cbiAgICBzdGF0aWMgZ2V0IFYoKSB7IHJldHVybiA4NjsgfVxuICAgIHN0YXRpYyBnZXQgVygpIHsgcmV0dXJuIDg3OyB9XG4gICAgc3RhdGljIGdldCBYKCkgeyByZXR1cm4gODg7IH1cbiAgICBzdGF0aWMgZ2V0IFkoKSB7IHJldHVybiA4OTsgfVxuICAgIHN0YXRpYyBnZXQgWigpIHsgcmV0dXJuIDkwOyB9XG4gICAgc3RhdGljIGdldCBMRUZUX1dJTkRPVygpIHsgcmV0dXJuIDkxOyB9XG4gICAgc3RhdGljIGdldCBSSUdIVF9XSU5ET1coKSB7IHJldHVybiA5MjsgfVxuICAgIHN0YXRpYyBnZXQgUklHSFRfTUVOVSgpIHsgcmV0dXJuIDkzOyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfMCgpIHsgcmV0dXJuIDk2OyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfMSgpIHsgcmV0dXJuIDk3OyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfMigpIHsgcmV0dXJuIDk4OyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfMygpIHsgcmV0dXJuIDk5OyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfNCgpIHsgcmV0dXJuIDEwMDsgfVxuICAgIHN0YXRpYyBnZXQgTlVNUEFEXzUoKSB7IHJldHVybiAxMDE7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF82KCkgeyByZXR1cm4gMTAyOyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfNygpIHsgcmV0dXJuIDEwMzsgfVxuICAgIHN0YXRpYyBnZXQgTlVNUEFEXzgoKSB7IHJldHVybiAxMDQ7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF85KCkgeyByZXR1cm4gMTA1OyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfTVVMVElQTFkoKSB7IHJldHVybiAxMDY7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF9BREQoKSB7IHJldHVybiAxMDc7IH1cbiAgICBzdGF0aWMgZ2V0IE5VTVBBRF9FTlRFUigpIHsgcmV0dXJuIDEwODsgfVxuICAgIHN0YXRpYyBnZXQgTlVNUEFEX1NVQlRSQUNUKCkgeyByZXR1cm4gMTA5OyB9XG4gICAgc3RhdGljIGdldCBOVU1QQURfREVDSU1BTCgpIHsgcmV0dXJuIDExMDsgfVxuICAgIHN0YXRpYyBnZXQgTlVNUEFEX0RJVklERSgpIHsgcmV0dXJuIDExMTsgfVxuICAgIHN0YXRpYyBnZXQgRjEoKSB7IHJldHVybiAxMTI7IH1cbiAgICBzdGF0aWMgZ2V0IEYyKCkgeyByZXR1cm4gMTEzOyB9XG4gICAgc3RhdGljIGdldCBGMygpIHsgcmV0dXJuIDExNDsgfVxuICAgIHN0YXRpYyBnZXQgRjQoKSB7IHJldHVybiAxMTU7IH1cbiAgICBzdGF0aWMgZ2V0IEY1KCkgeyByZXR1cm4gMTE2OyB9XG4gICAgc3RhdGljIGdldCBGNigpIHsgcmV0dXJuIDExNzsgfVxuICAgIHN0YXRpYyBnZXQgRjcoKSB7IHJldHVybiAxMTg7IH1cbiAgICBzdGF0aWMgZ2V0IEY4KCkgeyByZXR1cm4gMTE5OyB9XG4gICAgc3RhdGljIGdldCBGOSgpIHsgcmV0dXJuIDEyMDsgfVxuICAgIHN0YXRpYyBnZXQgRjEwKCkgeyByZXR1cm4gMTIxOyB9XG4gICAgc3RhdGljIGdldCBGMTEoKSB7IHJldHVybiAxMjI7IH1cbiAgICBzdGF0aWMgZ2V0IEYxMigpIHsgcmV0dXJuIDEyMzsgfVxuICAgIHN0YXRpYyBnZXQgRjEzKCkgeyByZXR1cm4gMTI0OyB9XG4gICAgc3RhdGljIGdldCBGMTQoKSB7IHJldHVybiAxMjU7IH1cbiAgICBzdGF0aWMgZ2V0IEYxNSgpIHsgcmV0dXJuIDEyNjsgfVxuICAgIHN0YXRpYyBnZXQgU0VNSUNPTE9OKCkgeyByZXR1cm4gMTg2OyB9XG4gICAgc3RhdGljIGdldCBFUVVBTCgpIHsgcmV0dXJuIDE4NzsgfVxuICAgIHN0YXRpYyBnZXQgQ09NTUEoKSB7IHJldHVybiAxODg7IH1cbiAgICBzdGF0aWMgZ2V0IERBU0goKSB7IHJldHVybiAxODk7IH1cbiAgICBzdGF0aWMgZ2V0IFBFUklPRCgpIHsgcmV0dXJuIDE5MDsgfVxuICAgIHN0YXRpYyBnZXQgQkFDS1FVT1RFKCkgeyByZXR1cm4gMTkyOyB9XG4gICAgc3RhdGljIGdldCBCQUNLU0xBU0goKSB7IHJldHVybiAyMjA7IH1cbiAgICBzdGF0aWMgZ2V0IFFVT1RFKCkgeyByZXR1cm4gMjIyOyB9XG5cblxuICAgIC8qXG4gICAgIGNvbnN0IGtleUNvZGVzID0ge1xuICAgICAzIDogXCJicmVha1wiLFxuICAgICA4IDogXCJiYWNrc3BhY2UgLyBkZWxldGVcIixcbiAgICAgOSA6IFwidGFiXCIsXG4gICAgIDEyIDogJ2NsZWFyJyxcbiAgICAgMTMgOiBcImVudGVyXCIsXG4gICAgIDE2IDogXCJzaGlmdFwiLFxuICAgICAxNyA6IFwiY3RybFwiLFxuICAgICAxOCA6IFwiYWx0XCIsXG4gICAgIDE5IDogXCJwYXVzZS9icmVha1wiLFxuICAgICAyMCA6IFwiY2FwcyBsb2NrXCIsXG4gICAgIDI3IDogXCJlc2NhcGVcIixcbiAgICAgMzIgOiBcInNwYWNlYmFyXCIsXG4gICAgIDMzIDogXCJwYWdlIHVwXCIsXG4gICAgIDM0IDogXCJwYWdlIGRvd25cIixcbiAgICAgMzUgOiBcImVuZFwiLFxuICAgICAzNiA6IFwiaG9tZSBcIixcbiAgICAgMzcgOiBcImxlZnQgYXJyb3cgXCIsXG4gICAgIDM4IDogXCJ1cCBhcnJvdyBcIixcbiAgICAgMzkgOiBcInJpZ2h0IGFycm93XCIsXG4gICAgIDQwIDogXCJkb3duIGFycm93IFwiLFxuICAgICA0MSA6IFwic2VsZWN0XCIsXG4gICAgIDQyIDogXCJwcmludFwiLFxuICAgICA0MyA6IFwiZXhlY3V0ZVwiLFxuICAgICA0NCA6IFwiUHJpbnQgU2NyZWVuXCIsXG4gICAgIDQ1IDogXCJpbnNlcnQgXCIsXG4gICAgIDQ2IDogXCJkZWxldGVcIixcbiAgICAgNDggOiBcIjBcIixcbiAgICAgNDkgOiBcIjFcIixcbiAgICAgNTAgOiBcIjJcIixcbiAgICAgNTEgOiBcIjNcIixcbiAgICAgNTIgOiBcIjRcIixcbiAgICAgNTMgOiBcIjVcIixcbiAgICAgNTQgOiBcIjZcIixcbiAgICAgNTUgOiBcIjdcIixcbiAgICAgNTYgOiBcIjhcIixcbiAgICAgNTcgOiBcIjlcIixcbiAgICAgNTggOiBcIjpcIixcbiAgICAgNTkgOiBcInNlbWljb2xvbiAoZmlyZWZveCksIGVxdWFsc1wiLFxuICAgICA2MCA6IFwiPFwiLFxuICAgICA2MSA6IFwiZXF1YWxzIChmaXJlZm94KVwiLFxuICAgICA2MyA6IFwiw59cIixcbiAgICAgNjQgOiBcIkAgKGZpcmVmb3gpXCIsXG4gICAgIDY1IDogXCJhXCIsXG4gICAgIDY2IDogXCJiXCIsXG4gICAgIDY3IDogXCJjXCIsXG4gICAgIDY4IDogXCJkXCIsXG4gICAgIDY5IDogXCJlXCIsXG4gICAgIDcwIDogXCJmXCIsXG4gICAgIDcxIDogXCJnXCIsXG4gICAgIDcyIDogXCJoXCIsXG4gICAgIDczIDogXCJpXCIsXG4gICAgIDc0IDogXCJqXCIsXG4gICAgIDc1IDogXCJrXCIsXG4gICAgIDc2IDogXCJsXCIsXG4gICAgIDc3IDogXCJtXCIsXG4gICAgIDc4IDogXCJuXCIsXG4gICAgIDc5IDogXCJvXCIsXG4gICAgIDgwIDogXCJwXCIsXG4gICAgIDgxIDogXCJxXCIsXG4gICAgIDgyIDogXCJyXCIsXG4gICAgIDgzIDogXCJzXCIsXG4gICAgIDg0IDogXCJ0XCIsXG4gICAgIDg1IDogXCJ1XCIsXG4gICAgIDg2IDogXCJ2XCIsXG4gICAgIDg3IDogXCJ3XCIsXG4gICAgIDg4IDogXCJ4XCIsXG4gICAgIDg5IDogXCJ5XCIsXG4gICAgIDkwIDogXCJ6XCIsXG4gICAgIDkxIDogXCJXaW5kb3dzIEtleSAvIExlZnQg4oyYIC8gQ2hyb21lYm9vayBTZWFyY2gga2V5XCIsXG4gICAgIDkyIDogXCJyaWdodCB3aW5kb3cga2V5IFwiLFxuICAgICA5MyA6IFwiV2luZG93cyBNZW51IC8gUmlnaHQg4oyYXCIsXG4gICAgIDk2IDogXCJudW1wYWQgMCBcIixcbiAgICAgOTcgOiBcIm51bXBhZCAxIFwiLFxuICAgICA5OCA6IFwibnVtcGFkIDIgXCIsXG4gICAgIDk5IDogXCJudW1wYWQgMyBcIixcbiAgICAgMTAwIDogXCJudW1wYWQgNCBcIixcbiAgICAgMTAxIDogXCJudW1wYWQgNSBcIixcbiAgICAgMTAyIDogXCJudW1wYWQgNiBcIixcbiAgICAgMTAzIDogXCJudW1wYWQgNyBcIixcbiAgICAgMTA0IDogXCJudW1wYWQgOCBcIixcbiAgICAgMTA1IDogXCJudW1wYWQgOSBcIixcbiAgICAgMTA2IDogXCJtdWx0aXBseSBcIixcbiAgICAgMTA3IDogXCJhZGRcIixcbiAgICAgMTA4IDogXCJudW1wYWQgcGVyaW9kIChmaXJlZm94KVwiLFxuICAgICAxMDkgOiBcInN1YnRyYWN0IFwiLFxuICAgICAxMTAgOiBcImRlY2ltYWwgcG9pbnRcIixcbiAgICAgMTExIDogXCJkaXZpZGUgXCIsXG4gICAgIDExMiA6IFwiZjEgXCIsXG4gICAgIDExMyA6IFwiZjIgXCIsXG4gICAgIDExNCA6IFwiZjMgXCIsXG4gICAgIDExNSA6IFwiZjQgXCIsXG4gICAgIDExNiA6IFwiZjUgXCIsXG4gICAgIDExNyA6IFwiZjYgXCIsXG4gICAgIDExOCA6IFwiZjcgXCIsXG4gICAgIDExOSA6IFwiZjggXCIsXG4gICAgIDEyMCA6IFwiZjkgXCIsXG4gICAgIDEyMSA6IFwiZjEwXCIsXG4gICAgIDEyMiA6IFwiZjExXCIsXG4gICAgIDEyMyA6IFwiZjEyXCIsXG4gICAgIDEyNCA6IFwiZjEzXCIsXG4gICAgIDEyNSA6IFwiZjE0XCIsXG4gICAgIDEyNiA6IFwiZjE1XCIsXG4gICAgIDEyNyA6IFwiZjE2XCIsXG4gICAgIDEyOCA6IFwiZjE3XCIsXG4gICAgIDEyOSA6IFwiZjE4XCIsXG4gICAgIDEzMCA6IFwiZjE5XCIsXG4gICAgIDEzMSA6IFwiZjIwXCIsXG4gICAgIDEzMiA6IFwiZjIxXCIsXG4gICAgIDEzMyA6IFwiZjIyXCIsXG4gICAgIDEzNCA6IFwiZjIzXCIsXG4gICAgIDEzNSA6IFwiZjI0XCIsXG4gICAgIDE0NCA6IFwibnVtIGxvY2sgXCIsXG4gICAgIDE0NSA6IFwic2Nyb2xsIGxvY2tcIixcbiAgICAgMTYwIDogXCJeXCIsXG4gICAgIDE2MTogJyEnLFxuICAgICAxNjMgOiBcIiNcIixcbiAgICAgMTY0OiAnJCcsXG4gICAgIDE2NTogJ8O5JyxcbiAgICAgMTY2IDogXCJwYWdlIGJhY2t3YXJkXCIsXG4gICAgIDE2NyA6IFwicGFnZSBmb3J3YXJkXCIsXG4gICAgIDE2OSA6IFwiY2xvc2luZyBwYXJlbiAoQVpFUlRZKVwiLFxuICAgICAxNzA6ICcqJyxcbiAgICAgMTcxIDogXCJ+ICsgKiBrZXlcIixcbiAgICAgMTczIDogXCJtaW51cyAoZmlyZWZveCksIG11dGUvdW5tdXRlXCIsXG4gICAgIDE3NCA6IFwiZGVjcmVhc2Ugdm9sdW1lIGxldmVsXCIsXG4gICAgIDE3NSA6IFwiaW5jcmVhc2Ugdm9sdW1lIGxldmVsXCIsXG4gICAgIDE3NiA6IFwibmV4dFwiLFxuICAgICAxNzcgOiBcInByZXZpb3VzXCIsXG4gICAgIDE3OCA6IFwic3RvcFwiLFxuICAgICAxNzkgOiBcInBsYXkvcGF1c2VcIixcbiAgICAgMTgwIDogXCJlLW1haWxcIixcbiAgICAgMTgxIDogXCJtdXRlL3VubXV0ZSAoZmlyZWZveClcIixcbiAgICAgMTgyIDogXCJkZWNyZWFzZSB2b2x1bWUgbGV2ZWwgKGZpcmVmb3gpXCIsXG4gICAgIDE4MyA6IFwiaW5jcmVhc2Ugdm9sdW1lIGxldmVsIChmaXJlZm94KVwiLFxuICAgICAxODYgOiBcInNlbWktY29sb24gLyDDsVwiLFxuICAgICAxODcgOiBcImVxdWFsIHNpZ24gXCIsXG4gICAgIDE4OCA6IFwiY29tbWFcIixcbiAgICAgMTg5IDogXCJkYXNoIFwiLFxuICAgICAxOTAgOiBcInBlcmlvZCBcIixcbiAgICAgMTkxIDogXCJmb3J3YXJkIHNsYXNoIC8gw6dcIixcbiAgICAgMTkyIDogXCJncmF2ZSBhY2NlbnQgLyDDsSAvIMOmXCIsXG4gICAgIDE5MyA6IFwiPywgLyBvciDCsFwiLFxuICAgICAxOTQgOiBcIm51bXBhZCBwZXJpb2QgKGNocm9tZSlcIixcbiAgICAgMjE5IDogXCJvcGVuIGJyYWNrZXQgXCIsXG4gICAgIDIyMCA6IFwiYmFjayBzbGFzaCBcIixcbiAgICAgMjIxIDogXCJjbG9zZSBicmFja2V0IC8gw6VcIixcbiAgICAgMjIyIDogXCJzaW5nbGUgcXVvdGUgLyDDuFwiLFxuICAgICAyMjMgOiBcImBcIixcbiAgICAgMjI0IDogXCJsZWZ0IG9yIHJpZ2h0IOKMmCBrZXkgKGZpcmVmb3gpXCIsXG4gICAgIDIyNSA6IFwiYWx0Z3JcIixcbiAgICAgMjI2IDogXCI8IC9naXQgPlwiLFxuICAgICAyMzAgOiBcIkdOT01FIENvbXBvc2UgS2V5XCIsXG4gICAgIDIzMSA6IFwiw6dcIixcbiAgICAgMjMzIDogXCJYRjg2Rm9yd2FyZFwiLFxuICAgICAyMzQgOiBcIlhGODZCYWNrXCIsXG4gICAgIDI1NSA6IFwidG9nZ2xlIHRvdWNocGFkXCJcbiAgICAgfTtcbiAgICAgKi9cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RzL0tleUNvZGUuanMiXSwic291cmNlUm9vdCI6IiJ9
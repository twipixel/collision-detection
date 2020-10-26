/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		13:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"convexhull","1":"distance","2":"epa","3":"gjk","4":"gjk-distance","5":"line","6":"line-intersections","7":"popup","8":"popup-test","9":"priority-queue","10":"rbush","11":"sat","12":"triple-product"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./asset/";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(328);
	
	__webpack_require__(329);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(58);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(209);
	__webpack_require__(211);
	__webpack_require__(221);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(315);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(320);
	__webpack_require__(321);
	__webpack_require__(322);
	__webpack_require__(323);
	__webpack_require__(324);
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	module.exports = __webpack_require__(9);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var DESCRIPTORS = __webpack_require__(6);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var META = __webpack_require__(25).KEY;
	var $fails = __webpack_require__(7);
	var shared = __webpack_require__(21);
	var setToStringTag = __webpack_require__(26);
	var uid = __webpack_require__(19);
	var wks = __webpack_require__(27);
	var wksExt = __webpack_require__(28);
	var wksDefine = __webpack_require__(29);
	var enumKeys = __webpack_require__(30);
	var isArray = __webpack_require__(45);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var toObject = __webpack_require__(46);
	var toIObject = __webpack_require__(33);
	var toPrimitive = __webpack_require__(16);
	var createDesc = __webpack_require__(17);
	var _create = __webpack_require__(47);
	var gOPNExt = __webpack_require__(50);
	var $GOPD = __webpack_require__(52);
	var $GOPS = __webpack_require__(43);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(31);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f = $propertyIsEnumerable;
	  $GOPS.f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(22)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });
	
	$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return $GOPS.f(toObject(it));
	  }
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var ctx = __webpack_require__(23);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.6.11' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(16);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function () {
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(4).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(5);
	var SRC = __webpack_require__(19)('src');
	var $toString = __webpack_require__(20);
	var TO_STRING = 'toString';
	var TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21)('native-function-to-string', Function.toString);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(9);
	var global = __webpack_require__(4);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(22) ? 'pure' : 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = false;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(24);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(19)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(5);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(5);
	var TAG = __webpack_require__(27)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(21)('wks');
	var uid = __webpack_require__(19);
	var Symbol = __webpack_require__(4).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(27);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var LIBRARY = __webpack_require__(22);
	var wksExt = __webpack_require__(28);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(31);
	var gOPS = __webpack_require__(43);
	var pIE = __webpack_require__(44);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(32);
	var enumBugKeys = __webpack_require__(42);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var toIObject = __webpack_require__(33);
	var arrayIndexOf = __webpack_require__(37)(false);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34);
	var defined = __webpack_require__(36);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33);
	var toLength = __webpack_require__(38);
	var toAbsoluteIndex = __webpack_require__(40);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(21)('keys');
	var uid = __webpack_require__(19);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(36);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(48);
	var enumBugKeys = __webpack_require__(42);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(49).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(31);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(4).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33);
	var gOPN = __webpack_require__(51).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(32);
	var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(44);
	var createDesc = __webpack_require__(17);
	var toIObject = __webpack_require__(33);
	var toPrimitive = __webpack_require__(16);
	var has = __webpack_require__(5);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(47) });


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(48) });


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(33);
	var $getOwnPropertyDescriptor = __webpack_require__(52).f;
	
	__webpack_require__(57)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var fails = __webpack_require__(7);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(46);
	var $getPrototypeOf = __webpack_require__(59);
	
	__webpack_require__(57)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(5);
	var toObject = __webpack_require__(46);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(46);
	var $keys = __webpack_require__(31);
	
	__webpack_require__(57)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(57)('getOwnPropertyNames', function () {
	  return __webpack_require__(50).f;
	});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(25).onFreeze;
	
	__webpack_require__(57)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(25).onFreeze;
	
	__webpack_require__(57)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(25).onFreeze;
	
	__webpack_require__(57)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(57)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(57)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(57)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(69) });


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var DESCRIPTORS = __webpack_require__(6);
	var getKeys = __webpack_require__(31);
	var gOPS = __webpack_require__(43);
	var pIE = __webpack_require__(44);
	var toObject = __webpack_require__(46);
	var IObject = __webpack_require__(34);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { is: __webpack_require__(71) });


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(73).set });


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(23)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75);
	var test = {};
	test[__webpack_require__(27)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35);
	var TAG = __webpack_require__(27)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', { bind: __webpack_require__(77) });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction = __webpack_require__(24);
	var isObject = __webpack_require__(13);
	var invoke = __webpack_require__(78);
	var arraySlice = [].slice;
	var factories = {};
	
	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11).f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var isObject = __webpack_require__(13);
	var getPrototypeOf = __webpack_require__(59);
	var HAS_INSTANCE = __webpack_require__(27)('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(11).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !isObject(O)) return false;
	  if (!isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
	  return false;
	} });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt;
	var $trim = __webpack_require__(83).trim;
	var ws = __webpack_require__(84);
	var hex = /^[-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var defined = __webpack_require__(36);
	var fails = __webpack_require__(7);
	var spaces = __webpack_require__(84);
	var space = '[' + spaces + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');
	
	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat;
	var $trim = __webpack_require__(83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var cof = __webpack_require__(35);
	var inheritIfRequired = __webpack_require__(88);
	var toPrimitive = __webpack_require__(16);
	var fails = __webpack_require__(7);
	var gOPN = __webpack_require__(51).f;
	var gOPD = __webpack_require__(52).f;
	var dP = __webpack_require__(11).f;
	var $trim = __webpack_require__(83).trim;
	var NUMBER = 'Number';
	var $Number = global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = cof(__webpack_require__(47)(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var setPrototypeOf = __webpack_require__(73).set;
	module.exports = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toInteger = __webpack_require__(39);
	var aNumberValue = __webpack_require__(90);
	var repeat = __webpack_require__(91);
	var $toFixed = 1.0.toFixed;
	var floor = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';
	
	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR);
	    var f = toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(35);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(39);
	var defined = __webpack_require__(36);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this));
	  var res = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $fails = __webpack_require__(7);
	var aNumberValue = __webpack_require__(90);
	var $toPrecision = 1.0.toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(8);
	var _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(96) });


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(8);
	var isInteger = __webpack_require__(96);
	var abs = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8);
	var log1p = __webpack_require__(104);
	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8);
	var $asinh = Math.asinh;
	
	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8);
	var $atanh = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8);
	var sign = __webpack_require__(108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8);
	var exp = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8);
	var $expm1 = __webpack_require__(112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { fround: __webpack_require__(114) });


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var sign = __webpack_require__(108);
	var pow = Math.pow;
	var EPSILON = pow(2, -52);
	var EPSILON32 = pow(2, -23);
	var MAX32 = pow(2, 127) * (2 - EPSILON32);
	var MIN32 = pow(2, -126);
	
	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	module.exports = Math.fround || function fround(x) {
	  var $abs = Math.abs(x);
	  var $sign = sign(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8);
	var abs = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8);
	var $imul = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { log1p: __webpack_require__(104) });


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { sign: __webpack_require__(108) });


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(112);
	var exp = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(112);
	var exp = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x);
	    var b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toAbsoluteIndex = __webpack_require__(40);
	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(33);
	var toLength = __webpack_require__(38);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw);
	    var len = toLength(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(128)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(129)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39);
	var defined = __webpack_require__(36);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(22);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(130);
	var $iterCreate = __webpack_require__(131);
	var setToStringTag = __webpack_require__(26);
	var getPrototypeOf = __webpack_require__(59);
	var ITERATOR = __webpack_require__(27)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 130 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(47);
	var descriptor = __webpack_require__(17);
	var setToStringTag = __webpack_require__(26);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(27)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(128)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(38);
	var context = __webpack_require__(134);
	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(136)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(135);
	var defined = __webpack_require__(36);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13);
	var cof = __webpack_require__(35);
	var MATCH = __webpack_require__(27)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(27)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export = __webpack_require__(8);
	var context = __webpack_require__(134);
	var INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(136)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(38);
	var context = __webpack_require__(134);
	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(136)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH);
	    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(141)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(36);
	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(141)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(141)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(141)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(141)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(141)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(141)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(141)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(141)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(141)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(141)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(141)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(141)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(46);
	var toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject(this);
	    var pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8);
	var toISOString = __webpack_require__(157);
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
	});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var fails = __webpack_require__(7);
	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;
	
	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	module.exports = (fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var $toString = DateProto[TO_STRING];
	var getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(18)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(27)('toPrimitive');
	var proto = Date.prototype;
	
	if (!(TO_PRIMITIVE in proto)) __webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(160));


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	var NUMBER = 'number';
	
	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(45) });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(23);
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(46);
	var call = __webpack_require__(163);
	var isArrayIter = __webpack_require__(164);
	var toLength = __webpack_require__(38);
	var createProperty = __webpack_require__(165);
	var getIterFn = __webpack_require__(166);
	
	$export($export.S + $export.F * !__webpack_require__(167)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(130);
	var ITERATOR = __webpack_require__(27)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(75);
	var ITERATOR = __webpack_require__(27)('iterator');
	var Iterators = __webpack_require__(130);
	module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(27)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var createProperty = __webpack_require__(165);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(33);
	var arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(34) != Object || !__webpack_require__(170)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var fails = __webpack_require__(7);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var html = __webpack_require__(49);
	var cof = __webpack_require__(35);
	var toAbsoluteIndex = __webpack_require__(40);
	var toLength = __webpack_require__(38);
	var arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length);
	    var klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toAbsoluteIndex(begin, len);
	    var upTo = toAbsoluteIndex(end, len);
	    var size = toLength(upTo - start);
	    var cloned = new Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(24);
	var toObject = __webpack_require__(46);
	var fails = __webpack_require__(7);
	var $sort = [].sort;
	var test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(170)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $forEach = __webpack_require__(174)(0);
	var STRICT = __webpack_require__(170)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(23);
	var IObject = __webpack_require__(34);
	var toObject = __webpack_require__(46);
	var toLength = __webpack_require__(38);
	var asc = __webpack_require__(175);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(176);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var isArray = __webpack_require__(45);
	var SPECIES = __webpack_require__(27)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $map = __webpack_require__(174)(1);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $filter = __webpack_require__(174)(2);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $some = __webpack_require__(174)(3);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $every = __webpack_require__(174)(4);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(182);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(24);
	var toObject = __webpack_require__(46);
	var IObject = __webpack_require__(34);
	var toLength = __webpack_require__(38);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that);
	  var self = IObject(O);
	  var length = toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(182);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $indexOf = __webpack_require__(37)(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(33);
	var toInteger = __webpack_require__(39);
	var toLength = __webpack_require__(38);
	var $native = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this);
	    var length = toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { copyWithin: __webpack_require__(187) });
	
	__webpack_require__(188)('copyWithin');


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(46);
	var toAbsoluteIndex = __webpack_require__(40);
	var toLength = __webpack_require__(38);
	
	module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject(this);
	  var len = toLength(O.length);
	  var to = toAbsoluteIndex(target, len);
	  var from = toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
	};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(27)('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { fill: __webpack_require__(190) });
	
	__webpack_require__(188)('fill');


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(46);
	var toAbsoluteIndex = __webpack_require__(40);
	var toLength = __webpack_require__(38);
	module.exports = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject(this);
	  var length = toLength(O.length);
	  var aLen = arguments.length;
	  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  var end = aLen > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(174)(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(174)(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(194)('Array');


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var dP = __webpack_require__(11);
	var DESCRIPTORS = __webpack_require__(6);
	var SPECIES = __webpack_require__(27)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(188);
	var step = __webpack_require__(196);
	var Iterators = __webpack_require__(130);
	var toIObject = __webpack_require__(33);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(129)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 196 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var inheritIfRequired = __webpack_require__(88);
	var dP = __webpack_require__(11).f;
	var gOPN = __webpack_require__(51).f;
	var isRegExp = __webpack_require__(135);
	var $flags = __webpack_require__(198);
	var $RegExp = global.RegExp;
	var Base = $RegExp;
	var proto = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function () {
	  re2[__webpack_require__(27)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = isRegExp(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function () { return Base[key]; },
	      set: function (it) { Base[key] = it; }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(194)('RegExp');


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var regexpExec = __webpack_require__(200);
	__webpack_require__(8)({
	  target: 'RegExp',
	  proto: true,
	  forced: regexpExec !== /./.exec
	}, {
	  exec: regexpExec
	});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var regexpFlags = __webpack_require__(198);
	
	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;
	
	var patchedExec = nativeExec;
	
	var LAST_INDEX = 'lastIndex';
	
	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/,
	      re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
	})();
	
	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
	
	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
	
	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;
	
	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
	
	    match = nativeExec.call(re, str);
	
	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      // eslint-disable-next-line no-loop-func
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }
	
	    return match;
	  };
	}
	
	module.exports = patchedExec;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(202);
	var anObject = __webpack_require__(12);
	var $flags = __webpack_require__(198);
	var DESCRIPTORS = __webpack_require__(6);
	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];
	
	var define = function (fn) {
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(7)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(198)
	});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(12);
	var toLength = __webpack_require__(38);
	var advanceStringIndex = __webpack_require__(204);
	var regExpExec = __webpack_require__(205);
	
	// @@match logic
	__webpack_require__(206)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = defined(this);
	      var fn = regexp == undefined ? undefined : regexp[MATCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative($match, regexp, this);
	      if (res.done) return res.value;
	      var rx = anObject(regexp);
	      var S = String(this);
	      if (!rx.global) return regExpExec(rx, S);
	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regExpExec(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var at = __webpack_require__(128)(true);
	
	 // `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	module.exports = function (S, index, unicode) {
	  return index + (unicode ? at(S, index).length : 1);
	};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(75);
	var builtinExec = RegExp.prototype.exec;
	
	 // `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	module.exports = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw new TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }
	  if (classof(R) !== 'RegExp') {
	    throw new TypeError('RegExp#exec called on incompatible receiver');
	  }
	  return builtinExec.call(R, S);
	};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(199);
	var redefine = __webpack_require__(18);
	var hide = __webpack_require__(10);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(36);
	var wks = __webpack_require__(27);
	var regexpExec = __webpack_require__(200);
	
	var SPECIES = wks('species');
	
	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});
	
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
	  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
	})();
	
	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY);
	
	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });
	
	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;
	    re.exec = function () { execCalled = true; return null; };
	    if (KEY === 'split') {
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES] = function () { return re; };
	    }
	    re[SYMBOL]('');
	    return !execCalled;
	  }) : undefined;
	
	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var fns = exec(
	      defined,
	      SYMBOL,
	      ''[KEY],
	      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
	        if (regexp.exec === regexpExec) {
	          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	            // The native String method already delegates to @@method (this
	            // polyfilled function), leasing to infinite recursion.
	            // We avoid it by directly calling the native @@method method.
	            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	          }
	          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	        }
	        return { done: false };
	      }
	    );
	    var strfn = fns[0];
	    var rxfn = fns[1];
	
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(12);
	var toObject = __webpack_require__(46);
	var toLength = __webpack_require__(38);
	var toInteger = __webpack_require__(39);
	var advanceStringIndex = __webpack_require__(204);
	var regExpExec = __webpack_require__(205);
	var max = Math.max;
	var min = Math.min;
	var floor = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
	
	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};
	
	// @@replace logic
	__webpack_require__(206)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = defined(this);
	      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return fn !== undefined
	        ? fn.call(searchValue, O, replaceValue)
	        : $replace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      var res = maybeCallNative($replace, regexp, this, replaceValue);
	      if (res.done) return res.value;
	
	      var rx = anObject(regexp);
	      var S = String(this);
	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);
	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regExpExec(rx, S);
	        if (result === null) break;
	        results.push(result);
	        if (!global) break;
	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }
	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];
	        var matched = String(result[0]);
	        var position = max(min(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];
	
	    // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return $replace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(12);
	var sameValue = __webpack_require__(71);
	var regExpExec = __webpack_require__(205);
	
	// @@search logic
	__webpack_require__(206)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
	  return [
	    // `String.prototype.search` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.search
	    function search(regexp) {
	      var O = defined(this);
	      var fn = regexp == undefined ? undefined : regexp[SEARCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	    },
	    // `RegExp.prototype[@@search]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
	    function (regexp) {
	      var res = maybeCallNative($search, regexp, this);
	      if (res.done) return res.value;
	      var rx = anObject(regexp);
	      var S = String(this);
	      var previousLastIndex = rx.lastIndex;
	      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	      var result = regExpExec(rx, S);
	      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	      return result === null ? -1 : result.index;
	    }
	  ];
	});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isRegExp = __webpack_require__(135);
	var anObject = __webpack_require__(12);
	var speciesConstructor = __webpack_require__(210);
	var advanceStringIndex = __webpack_require__(204);
	var toLength = __webpack_require__(38);
	var callRegExpExec = __webpack_require__(205);
	var regexpExec = __webpack_require__(200);
	var fails = __webpack_require__(7);
	var $min = Math.min;
	var $push = [].push;
	var $SPLIT = 'split';
	var LENGTH = 'length';
	var LAST_INDEX = 'lastIndex';
	var MAX_UINT32 = 0xffffffff;
	
	// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
	var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });
	
	// @@split logic
	__webpack_require__(206)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return $split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy[LAST_INDEX];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
	    };
	  } else {
	    internalSplit = $split;
	  }
	
	  return [
	    // `String.prototype.split` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = defined(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
	      if (res.done) return res.value;
	
	      var rx = anObject(regexp);
	      var S = String(this);
	      var C = speciesConstructor(rx, RegExp);
	
	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (SUPPORTS_Y ? 'y' : 'g');
	
	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(24);
	var SPECIES = __webpack_require__(27)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(22);
	var global = __webpack_require__(4);
	var ctx = __webpack_require__(23);
	var classof = __webpack_require__(75);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var aFunction = __webpack_require__(24);
	var anInstance = __webpack_require__(212);
	var forOf = __webpack_require__(213);
	var speciesConstructor = __webpack_require__(210);
	var task = __webpack_require__(214).set;
	var microtask = __webpack_require__(215)();
	var newPromiseCapabilityModule = __webpack_require__(216);
	var perform = __webpack_require__(217);
	var userAgent = __webpack_require__(218);
	var promiseResolve = __webpack_require__(219);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(27)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();
	
	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(220)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(26)($Promise, PROMISE);
	__webpack_require__(194)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(167)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 212 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(23);
	var call = __webpack_require__(163);
	var isArrayIter = __webpack_require__(164);
	var anObject = __webpack_require__(12);
	var toLength = __webpack_require__(38);
	var getIterFn = __webpack_require__(166);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(23);
	var invoke = __webpack_require__(78);
	var html = __webpack_require__(49);
	var cel = __webpack_require__(15);
	var global = __webpack_require__(4);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(35)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var macrotask = __webpack_require__(214).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(35)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(24);
	
	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}
	
	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 217 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var navigator = global.navigator;
	
	module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var newPromiseCapability = __webpack_require__(216);
	
	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function (target, src, safe) {
	  for (var key in src) redefine(target, key, src[key], safe);
	  return target;
	};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(222);
	var validate = __webpack_require__(223);
	var MAP = 'Map';
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(224)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(11).f;
	var create = __webpack_require__(47);
	var redefineAll = __webpack_require__(220);
	var ctx = __webpack_require__(23);
	var anInstance = __webpack_require__(212);
	var forOf = __webpack_require__(213);
	var $iterDefine = __webpack_require__(129);
	var step = __webpack_require__(196);
	var setSpecies = __webpack_require__(194);
	var DESCRIPTORS = __webpack_require__(6);
	var fastKey = __webpack_require__(25).fastKey;
	var validate = __webpack_require__(223);
	var SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var redefineAll = __webpack_require__(220);
	var meta = __webpack_require__(25);
	var forOf = __webpack_require__(213);
	var anInstance = __webpack_require__(212);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var $iterDetect = __webpack_require__(167);
	var setToStringTag = __webpack_require__(26);
	var inheritIfRequired = __webpack_require__(88);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(222);
	var validate = __webpack_require__(223);
	var SET = 'Set';
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(224)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var each = __webpack_require__(174)(0);
	var redefine = __webpack_require__(18);
	var meta = __webpack_require__(25);
	var assign = __webpack_require__(69);
	var weak = __webpack_require__(227);
	var isObject = __webpack_require__(13);
	var validate = __webpack_require__(223);
	var NATIVE_WEAK_MAP = __webpack_require__(223);
	var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
	var WEAK_MAP = 'WeakMap';
	var getWeak = meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = weak.ufstore;
	var InternalMap;
	
	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(validate(this, WEAK_MAP), key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(224)(WEAK_MAP, wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (NATIVE_WEAK_MAP && IS_IE11) {
	  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll = __webpack_require__(220);
	var getWeak = __webpack_require__(25).getWeak;
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var anInstance = __webpack_require__(212);
	var forOf = __webpack_require__(213);
	var createArrayMethod = __webpack_require__(174);
	var $has = __webpack_require__(5);
	var validate = __webpack_require__(223);
	var arrayFind = createArrayMethod(5);
	var arrayFindIndex = createArrayMethod(6);
	var id = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(227);
	var validate = __webpack_require__(223);
	var WEAK_SET = 'WeakSet';
	
	// 23.4 WeakSet Objects
	__webpack_require__(224)(WEAK_SET, function (get) {
	  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate(this, WEAK_SET), value, true);
	  }
	}, weak, false, true);


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $typed = __webpack_require__(230);
	var buffer = __webpack_require__(231);
	var anObject = __webpack_require__(12);
	var toAbsoluteIndex = __webpack_require__(40);
	var toLength = __webpack_require__(38);
	var isObject = __webpack_require__(13);
	var ArrayBuffer = __webpack_require__(4).ArrayBuffer;
	var speciesConstructor = __webpack_require__(210);
	var $ArrayBuffer = buffer.ArrayBuffer;
	var $DataView = buffer.DataView;
	var $isView = $typed.ABV && ArrayBuffer.isView;
	var $slice = $ArrayBuffer.prototype.slice;
	var VIEW = $typed.VIEW;
	var ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength;
	    var first = toAbsoluteIndex(start, len);
	    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
	    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
	    var viewS = new $DataView(this);
	    var viewT = new $DataView(result);
	    var index = 0;
	    while (first < fin) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(194)(ARRAY_BUFFER);


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var uid = __webpack_require__(19);
	var TYPED = uid('typed_array');
	var VIEW = uid('view');
	var ABV = !!(global.ArrayBuffer && global.DataView);
	var CONSTR = ABV;
	var i = 0;
	var l = 9;
	var Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var DESCRIPTORS = __webpack_require__(6);
	var LIBRARY = __webpack_require__(22);
	var $typed = __webpack_require__(230);
	var hide = __webpack_require__(10);
	var redefineAll = __webpack_require__(220);
	var fails = __webpack_require__(7);
	var anInstance = __webpack_require__(212);
	var toInteger = __webpack_require__(39);
	var toLength = __webpack_require__(38);
	var toIndex = __webpack_require__(232);
	var gOPN = __webpack_require__(51).f;
	var dP = __webpack_require__(11).f;
	var arrayFill = __webpack_require__(190);
	var setToStringTag = __webpack_require__(26);
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH = 'Wrong length!';
	var WRONG_INDEX = 'Wrong index!';
	var $ArrayBuffer = global[ARRAY_BUFFER];
	var $DataView = global[DATA_VIEW];
	var Math = global.Math;
	var RangeError = global.RangeError;
	// eslint-disable-next-line no-shadow-restricted-names
	var Infinity = global.Infinity;
	var BaseBuffer = $ArrayBuffer;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;
	var BUFFER = 'buffer';
	var BYTE_LENGTH = 'byteLength';
	var BYTE_OFFSET = 'byteOffset';
	var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
	var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
	var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	function packIEEE754(value, mLen, nBytes) {
	  var buffer = new Array(nBytes);
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var i = 0;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  var e, m, c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	}
	function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = eLen - 7;
	  var i = nBytes - 1;
	  var s = buffer[i--];
	  var e = s & 127;
	  var m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	}
	
	function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	}
	function packI8(it) {
	  return [it & 0xff];
	}
	function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	}
	function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	}
	function packF64(it) {
	  return packIEEE754(it, 52, 8);
	}
	function packF32(it) {
	  return packIEEE754(it, 23, 4);
	}
	
	function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
	}
	
	function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	}
	function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	}
	
	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    var byteLength = toIndex(length);
	    this._b = arrayFill.call(new Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH];
	    var offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    $ArrayBuffer(1);
	  }) || !fails(function () {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(toIndex(length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/ecma262/#sec-toindex
	var toInteger = __webpack_require__(39);
	var toLength = __webpack_require__(38);
	module.exports = function (it) {
	  if (it === undefined) return 0;
	  var number = toInteger(it);
	  var length = toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
	};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(230).ABV, {
	  DataView: __webpack_require__(231).DataView
	});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	if (__webpack_require__(6)) {
	  var LIBRARY = __webpack_require__(22);
	  var global = __webpack_require__(4);
	  var fails = __webpack_require__(7);
	  var $export = __webpack_require__(8);
	  var $typed = __webpack_require__(230);
	  var $buffer = __webpack_require__(231);
	  var ctx = __webpack_require__(23);
	  var anInstance = __webpack_require__(212);
	  var propertyDesc = __webpack_require__(17);
	  var hide = __webpack_require__(10);
	  var redefineAll = __webpack_require__(220);
	  var toInteger = __webpack_require__(39);
	  var toLength = __webpack_require__(38);
	  var toIndex = __webpack_require__(232);
	  var toAbsoluteIndex = __webpack_require__(40);
	  var toPrimitive = __webpack_require__(16);
	  var has = __webpack_require__(5);
	  var classof = __webpack_require__(75);
	  var isObject = __webpack_require__(13);
	  var toObject = __webpack_require__(46);
	  var isArrayIter = __webpack_require__(164);
	  var create = __webpack_require__(47);
	  var getPrototypeOf = __webpack_require__(59);
	  var gOPN = __webpack_require__(51).f;
	  var getIterFn = __webpack_require__(166);
	  var uid = __webpack_require__(19);
	  var wks = __webpack_require__(27);
	  var createArrayMethod = __webpack_require__(174);
	  var createArrayIncludes = __webpack_require__(37);
	  var speciesConstructor = __webpack_require__(210);
	  var ArrayIterators = __webpack_require__(195);
	  var Iterators = __webpack_require__(130);
	  var $iterDetect = __webpack_require__(167);
	  var setSpecies = __webpack_require__(194);
	  var arrayFill = __webpack_require__(190);
	  var arrayCopyWithin = __webpack_require__(187);
	  var $DP = __webpack_require__(11);
	  var $GOPD = __webpack_require__(52);
	  var dP = $DP.f;
	  var gOPD = $GOPD.f;
	  var RangeError = global.RangeError;
	  var TypeError = global.TypeError;
	  var Uint8Array = global.Uint8Array;
	  var ARRAY_BUFFER = 'ArrayBuffer';
	  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  var PROTOTYPE = 'prototype';
	  var ArrayProto = Array[PROTOTYPE];
	  var $ArrayBuffer = $buffer.ArrayBuffer;
	  var $DataView = $buffer.DataView;
	  var arrayForEach = createArrayMethod(0);
	  var arrayFilter = createArrayMethod(2);
	  var arraySome = createArrayMethod(3);
	  var arrayEvery = createArrayMethod(4);
	  var arrayFind = createArrayMethod(5);
	  var arrayFindIndex = createArrayMethod(6);
	  var arrayIncludes = createArrayIncludes(true);
	  var arrayIndexOf = createArrayIncludes(false);
	  var arrayValues = ArrayIterators.values;
	  var arrayKeys = ArrayIterators.keys;
	  var arrayEntries = ArrayIterators.entries;
	  var arrayLastIndexOf = ArrayProto.lastIndexOf;
	  var arrayReduce = ArrayProto.reduce;
	  var arrayReduceRight = ArrayProto.reduceRight;
	  var arrayJoin = ArrayProto.join;
	  var arraySort = ArrayProto.sort;
	  var arraySlice = ArrayProto.slice;
	  var arrayToString = ArrayProto.toString;
	  var arrayToLocaleString = ArrayProto.toLocaleString;
	  var ITERATOR = wks('iterator');
	  var TAG = wks('toStringTag');
	  var TYPED_CONSTRUCTOR = uid('typed_constructor');
	  var DEF_CONSTRUCTOR = uid('def_constructor');
	  var ALL_CONSTRUCTORS = $typed.CONSTR;
	  var TYPED_ARRAY = $typed.TYPED;
	  var VIEW = $typed.VIEW;
	  var WRONG_LENGTH = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function () {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });
	
	  var toOffset = function (it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function (it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function (C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function (O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function (C, list) {
	    var index = 0;
	    var length = list.length;
	    var result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function (it, key, internal) {
	    dP(it, key, { get: function () { return this._d[internal]; } });
	  };
	
	  var $from = function from(source /* , mapfn, thisArg */) {
	    var O = toObject(source);
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var iterFn = getIterFn(O);
	    var i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/* ...items */) {
	    var index = 0;
	    var length = arguments.length;
	    var result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this;
	      var length = validate(that).length;
	      var middle = Math.floor(length / 2);
	      var index = 0;
	      var value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this);
	      var length = O.length;
	      var $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1);
	    var length = this.length;
	    var src = toObject(arrayLike);
	    var len = toLength(src.length);
	    var index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function (target, key) {
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };
	
	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });
	
	  if (fails(function () { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function () { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function () { return this[TYPED_ARRAY]; }
	  });
	
	  // eslint-disable-next-line max-statements
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + KEY;
	    var SETTER = 'set' + KEY;
	    var TypedArray = global[NAME];
	    var Base = TypedArray || {};
	    var TAC = TypedArray && getPrototypeOf(TypedArray);
	    var FORCED = !TypedArray || !$typed.ABV;
	    var O = {};
	    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function (that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function (that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function (that, index) {
	      dP(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0;
	        var offset = 0;
	        var buffer, byteLength, length, klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(function () {
	      TypedArray(1);
	    }) || !fails(function () {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function (iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR];
	    var CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    var $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function () { return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });
	
	    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });
	
	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
	
	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });
	
	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () { /* empty */ };


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(24);
	var anObject = __webpack_require__(12);
	var rApply = (__webpack_require__(4).Reflect || {}).apply;
	var fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function () {
	  rApply(function () { /* empty */ });
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target);
	    var L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(8);
	var create = __webpack_require__(47);
	var aFunction = __webpack_require__(24);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var bind = __webpack_require__(77);
	var rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () { /* empty */ });
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(11);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(8);
	var gOPD = __webpack_require__(52).f;
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var Enumerate = function (iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = [];      // keys
	  var key;
	  for (key in iterated) keys.push(key);
	};
	__webpack_require__(131)(Enumerate, 'Object', function () {
	  var that = this;
	  var keys = that._k;
	  var key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(52);
	var getPrototypeOf = __webpack_require__(59);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	
	function get(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var desc, proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(52);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(8);
	var getProto = __webpack_require__(59);
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(255) });


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(51);
	var gOPS = __webpack_require__(43);
	var anObject = __webpack_require__(12);
	var Reflect = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it));
	  var getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(11);
	var gOPD = __webpack_require__(52);
	var getPrototypeOf = __webpack_require__(59);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var createDesc = __webpack_require__(17);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	
	function set(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDesc = gOPD.f(anObject(target), propertyKey);
	  var existingDescriptor, proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
	      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
	      existingDescriptor.value = V;
	      dP.f(receiver, propertyKey, existingDescriptor);
	    } else dP.f(receiver, propertyKey, createDesc(0, V));
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(8);
	var setProto = __webpack_require__(73);
	
	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export = __webpack_require__(8);
	var $includes = __webpack_require__(37)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(188)('includes');


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(261);
	var toObject = __webpack_require__(46);
	var toLength = __webpack_require__(38);
	var aFunction = __webpack_require__(24);
	var arraySpeciesCreate = __webpack_require__(175);
	
	$export($export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen, A;
	    aFunction(callbackfn);
	    sourceLen = toLength(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
	});
	
	__webpack_require__(188)('flatMap');


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var isArray = __webpack_require__(45);
	var isObject = __webpack_require__(13);
	var toLength = __webpack_require__(38);
	var ctx = __webpack_require__(23);
	var IS_CONCAT_SPREADABLE = __webpack_require__(27)('isConcatSpreadable');
	
	function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  var element, spreadable;
	
	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
	
	      spreadable = false;
	      if (isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
	      }
	
	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }
	
	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	}
	
	module.exports = flattenIntoArray;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(261);
	var toObject = __webpack_require__(46);
	var toLength = __webpack_require__(38);
	var toInteger = __webpack_require__(39);
	var arraySpeciesCreate = __webpack_require__(175);
	
	$export($export.P, 'Array', {
	  flatten: function flatten(/* depthArg = 1 */) {
	    var depthArg = arguments[0];
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
	    return A;
	  }
	});
	
	__webpack_require__(188)('flatten');


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(128)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(265);
	var userAgent = __webpack_require__(218);
	
	// https://github.com/zloirock/core-js/issues/280
	var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
	
	$export($export.P + $export.F * WEBKIT_BUG, 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(38);
	var repeat = __webpack_require__(91);
	var defined = __webpack_require__(36);
	
	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that));
	  var stringLength = S.length;
	  var fillStr = fillString === undefined ? ' ' : String(fillString);
	  var intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength;
	  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(265);
	var userAgent = __webpack_require__(218);
	
	// https://github.com/zloirock/core-js/issues/280
	var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
	
	$export($export.P + $export.F * WEBKIT_BUG, 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export = __webpack_require__(8);
	var defined = __webpack_require__(36);
	var toLength = __webpack_require__(38);
	var isRegExp = __webpack_require__(135);
	var getFlags = __webpack_require__(198);
	var RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function (regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(131)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this);
	    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
	    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(29)('asyncIterator');


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(29)('observable');


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(8);
	var ownKeys = __webpack_require__(255);
	var toIObject = __webpack_require__(33);
	var gOPD = __webpack_require__(52);
	var createProperty = __webpack_require__(165);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object);
	    var getDesc = gOPD.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
	});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $values = __webpack_require__(274)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__(6);
	var getKeys = __webpack_require__(31);
	var toIObject = __webpack_require__(33);
	var isEnum = __webpack_require__(44).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS || isEnum.call(O, key)) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $entries = __webpack_require__(274)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(46);
	var aFunction = __webpack_require__(24);
	var $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(277), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(22) || !__webpack_require__(7)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call
	  __defineSetter__.call(null, K, function () { /* empty */ });
	  delete __webpack_require__(4)[K];
	});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(46);
	var aFunction = __webpack_require__(24);
	var $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(277), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(46);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(59);
	var getOwnPropertyDescriptor = __webpack_require__(52).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(277), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(46);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(59);
	var getOwnPropertyDescriptor = __webpack_require__(52).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(277), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(282)('Map') });


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75);
	var from = __webpack_require__(283);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(213);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(282)('Set') });


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	__webpack_require__(286)('Map');


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = new Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(286)('Set');


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
	__webpack_require__(286)('WeakMap');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
	__webpack_require__(286)('WeakSet');


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	__webpack_require__(291)('Map');


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(24);
	var ctx = __webpack_require__(23);
	var forOf = __webpack_require__(213);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(291)('Set');


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
	__webpack_require__(291)('WeakMap');


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
	__webpack_require__(291)('WeakSet');


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.G, { global: __webpack_require__(4) });


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', { global: __webpack_require__(4) });


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8);
	var cof = __webpack_require__(35);
	
	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clamp: function clamp(x, lower, upper) {
	    return Math.min(upper, Math.max(lower, x));
	  }
	});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var RAD_PER_DEG = 180 / Math.PI;
	
	$export($export.S, 'Math', {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
	});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var scale = __webpack_require__(302);
	var fround = __webpack_require__(114);
	
	$export($export.S, 'Math', {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
	});


/***/ }),
/* 302 */
/***/ (function(module, exports) {

	// https://rwaldron.github.io/proposal-math-extensions/
	module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  if (
	    arguments.length === 0
	      // eslint-disable-next-line no-self-compare
	      || x != x
	      // eslint-disable-next-line no-self-compare
	      || inLow != inLow
	      // eslint-disable-next-line no-self-compare
	      || inHigh != inHigh
	      // eslint-disable-next-line no-self-compare
	      || outLow != outLow
	      // eslint-disable-next-line no-self-compare
	      || outHigh != outHigh
	  ) return NaN;
	  if (x === Infinity || x === -Infinity) return x;
	  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
	};


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >> 16;
	    var v1 = $v >> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var DEG_PER_RAD = Math.PI / 180;
	
	$export($export.S, 'Math', {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
	});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { scale: __webpack_require__(302) });


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >>> 16;
	    var v1 = $v >>> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	// http://jfbastien.github.io/papers/Math.signbit.html
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { signbit: function signbit(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
	} });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var global = __webpack_require__(4);
	var speciesConstructor = __webpack_require__(210);
	var promiseResolve = __webpack_require__(219);
	
	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(8);
	var newPromiseCapability = __webpack_require__(216);
	var perform = __webpack_require__(217);
	
	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(221);
	var $export = __webpack_require__(8);
	var shared = __webpack_require__(21)('metadata');
	var store = shared.store || (shared.store = new (__webpack_require__(226))());
	
	var getOrCreateMetadataMap = function (target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function (target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  var keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
	  return keys;
	};
	var toMetaKey = function (it) {
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function (O) {
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var getOrCreateMetadataMap = metadata.map;
	var store = metadata.store;
	
	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
	  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	  if (metadataMap.size) return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryHasOwnMetadata = metadata.has;
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;
	
	var ordinaryGetMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(225);
	var from = __webpack_require__(283);
	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;
	
	var ordinaryMetadataKeys = function (O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P);
	  var parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;
	
	var ordinaryHasMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;
	
	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	var $metadata = __webpack_require__(314);
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(24);
	var toMetaKey = $metadata.key;
	var ordinaryDefineOwnMetadata = $metadata.set;
	
	$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	  return function decorator(target, targetKey) {
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	} });


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(8);
	var microtask = __webpack_require__(215)();
	var process = __webpack_require__(4).process;
	var isNode = __webpack_require__(35)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export = __webpack_require__(8);
	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var microtask = __webpack_require__(215)();
	var OBSERVABLE = __webpack_require__(27)('observable');
	var aFunction = __webpack_require__(24);
	var anObject = __webpack_require__(12);
	var anInstance = __webpack_require__(212);
	var redefineAll = __webpack_require__(220);
	var hide = __webpack_require__(10);
	var forOf = __webpack_require__(213);
	var RETURN = forOf.RETURN;
	
	var getMethod = function (fn) {
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function (subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function (subscription) {
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function (subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function (observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer);
	    var subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  } if (subscriptionClosed(this)) cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() { closeSubscription(this); }
	});
	
	var SubscriptionObserver = function (subscription) {
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function (value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var j = 0; j < items.length; ++j) {
	            observer.next(items[j]);
	            if (done) return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function () { return this; });
	
	$export($export.G, { Observable: $Observable });
	
	__webpack_require__(194)('Observable');


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var userAgent = __webpack_require__(218);
	var slice = [].slice;
	var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
	var wrap = function (set) {
	  return function (fn, time /* , ...args */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : false;
	    return set(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
	    } : fn, time);
	  };
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $task = __webpack_require__(214);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	var $iterators = __webpack_require__(195);
	var getKeys = __webpack_require__(31);
	var redefine = __webpack_require__(18);
	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(130);
	var wks = __webpack_require__(27);
	var ITERATOR = wks('iterator');
	var TO_STRING_TAG = wks('toStringTag');
	var ArrayValues = Iterators.Array;
	
	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};
	
	for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
	}


/***/ }),
/* 328 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(330);
	module.exports = __webpack_require__(9).RegExp.escape;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8);
	var $re = __webpack_require__(331)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 331 */
/***/ (function(module, exports) {

	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzgxOGZlM2RkY2E4M2M1ODhjZTAiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19iaW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtbnVtYmVyLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tcHJlY2lzaW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWxvZzFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jbHozMi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWV4cG0xLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1mcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaHlwb3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2luaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmF3LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMtaXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5iaWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRhbGljcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1Yi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1pc28tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kYXRlLXRvLWlzby1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGF0ZS10by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmV2ZXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWNvcHktd2l0aGluLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24td2Vhay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmFycmF5LWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3R5cGVkLWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1jbGFtcGVkLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQxNi1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQzMi1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDMyLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDY0LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX293bi1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmZsYXQtbWFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mbGF0dGVuLWludG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXBhZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1lbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcubWF0Y2gtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmRlZmluZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1mb3JjZWQtcGFtLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLXNldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0Lmxvb2t1cC1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtc2V0dGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWFwLm9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc2V0Lm9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy53ZWFrLW1hcC5vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcud2Vhay1zZXQub2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcud2Vhay1tYXAuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcud2Vhay1zZXQuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zeXN0ZW0uZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5lcnJvci5pcy1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5jbGFtcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5kZWctcGVyLXJhZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5kZWdyZWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLmZzY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pYWRkaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pc3ViaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pbXVsaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5yYWQtcGVyLWRlZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5yYWRpYW5zLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLnNjYWxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLnVtdWxoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLnNpZ25iaXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVmaW5lLW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hc2FwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvd2ViLmltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9mbi9yZWdleHAvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2NvcmUucmVnZXhwLmVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVwbGFjZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBZ0UsMk1BQTJNO0FBQzNRO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMzRkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7OztBQzNCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCLHVCQUFzQix1QkFBdUIsV0FBVyxJQUFJO0FBQzVELElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJEO0FBQzNEO0FBQ0EsTUFBSztBQUNMO0FBQ0EsdUJBQXNCLG1DQUFtQztBQUN6RCxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ1hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0EsRUFBQzs7Ozs7OztBQ1ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxlQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QztBQUN4QztBQUNBLCtCQUE4QjtBQUM5Qiw4QkFBNkI7QUFDN0IsZ0NBQStCO0FBQy9CLG9DQUFtQztBQUNuQyxVQUFTLGlDQUFpQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOzs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDVEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDVEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDVEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDVEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDVEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRLHNDQUFzQztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUM5QkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFxQyx5QkFBeUIsRUFBRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSwwQkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ3JJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBeUIsbUVBQW1FO0FBQzVGLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0wsSUFBRztBQUNIOzs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsc0JBQXFCO0FBQ3JCLDJCQUEw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QUFLO0FBQ0wseUVBQXdFO0FBQ3hFO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSCwwQkFBeUIsc0JBQXNCLEVBQUUsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQiwwQkFBMEI7QUFDaEQsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNURDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDYkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVU7QUFDVixFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQzdCRDs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDckJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLCtEQUErRDtBQUN6RztBQUNBLEVBQUM7Ozs7Ozs7QUNYRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEMsY0FBYztBQUM1RDtBQUNBLEVBQUM7Ozs7Ozs7QUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQywrREFBK0Q7QUFDekc7QUFDQSxFQUFDOzs7Ozs7O0FDWEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDOzs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQzs7Ozs7OztBQ2pCRDtBQUNBOztBQUVBLHdDQUF1QywwQ0FBa0Q7Ozs7Ozs7QUNIekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7O0FBRUEsd0NBQXVDLDBDQUFrRDs7Ozs7OztBQ0h6RjtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyxFQUFFO0FBQ0w7Ozs7Ozs7QUNYQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRyxFQUFFO0FBQ0w7Ozs7Ozs7QUMzQkE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7QUFFQSxxQkFBb0IsaUNBQStCOzs7Ozs7O0FDSG5EO0FBQ0E7O0FBRUEsK0JBQThCLGlDQUErQjs7Ozs7OztBQ0g3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDUkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBOztBQUVBLDZCQUE0Qiw2QkFBNkI7Ozs7Ozs7QUNIekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ1REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ1ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDVkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTs7QUFFQSw2QkFBNEIsNkJBQTZCOzs7Ozs7O0FDSHpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNSRDtBQUNBOztBQUVBLDZCQUE0QixrQ0FBa0M7Ozs7Ozs7QUNIOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTs7QUFFQSw2QkFBNEI7QUFDNUI7QUFDQTtBQUNBLEVBQUMsRUFBRTs7Ozs7OztBQ05IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUE4RCxVQUFVLEVBQUU7QUFDMUUsTUFBSztBQUNMO0FBQ0EsK0RBQThELFNBQVMsRUFBRTtBQUN6RSxNQUFLO0FBQ0w7QUFDQSxFQUFDLEVBQUU7Ozs7Ozs7QUNuQkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEVBQUU7Ozs7Ozs7QUNYSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjO0FBQ2Q7QUFDQSxFQUFDLEVBQUU7Ozs7Ozs7QUNQSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMEQsZ0JBQWdCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRUFBRTs7Ozs7OztBQ2RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYztBQUNkO0FBQ0EsRUFBQyxFQUFFOzs7Ozs7O0FDaEJIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBLEVBQUMsRUFBRTs7Ozs7OztBQ2xCSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBLEVBQUMsRUFBRTs7Ozs7OztBQ1JIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBLEVBQUMsRUFBRTs7Ozs7OztBQ1BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBLEVBQUMsRUFBRTs7Ozs7OztBQ2ZIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBO0FBQ0EsRUFBQyxFQUFFOzs7Ozs7O0FDUkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFQUFFOzs7Ozs7O0FDZEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLE1BQUs7QUFDTCxlQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0EsWUFBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx5Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCBjYWxsYmFja3MgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2guYXBwbHkoY2FsbGJhY2tzLCBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKGNhbGxiYWNrcy5sZW5ndGgpXG4gXHRcdFx0Y2FsbGJhY2tzLnNoaWZ0KCkuY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0aWYobW9yZU1vZHVsZXNbMF0pIHtcbiBcdFx0XHRpbnN0YWxsZWRNb2R1bGVzWzBdID0gMDtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0Ly8gQXJyYXkgbWVhbnMgXCJsb2FkaW5nXCIsIGFycmF5IGNvbnRhaW5zIGNhbGxiYWNrc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTM6MFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBhbiBhcnJheSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdLnB1c2goY2FsbGJhY2spO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbY2FsbGJhY2tdO1xuIFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuIFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgKHtcIjBcIjpcImNvbnZleGh1bGxcIixcIjFcIjpcImRpc3RhbmNlXCIsXCIyXCI6XCJlcGFcIixcIjNcIjpcImdqa1wiLFwiNFwiOlwiZ2prLWRpc3RhbmNlXCIsXCI1XCI6XCJsaW5lXCIsXCI2XCI6XCJsaW5lLWludGVyc2VjdGlvbnNcIixcIjdcIjpcInBvcHVwXCIsXCI4XCI6XCJwb3B1cC10ZXN0XCIsXCI5XCI6XCJwcmlvcml0eS1xdWV1ZVwiLFwiMTBcIjpcInJidXNoXCIsXCIxMVwiOlwic2F0XCIsXCIxMlwiOlwidHJpcGxlLXByb2R1Y3RcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIjtcbiBcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9hc3NldC9cIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjODE4ZmUzZGRjYTgzYzU4OGNlMCIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9zaGltXCIpO1xuXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9mbi9yZWdleHAvZXNjYXBlXCIpO1xuXG5pZiAoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIm9ubHkgb25lIGluc3RhbmNlIG9mIGJhYmVsLXBvbHlmaWxsIGlzIGFsbG93ZWRcIik7XG59XG5nbG9iYWwuX2JhYmVsUG9seWZpbGwgPSB0cnVlO1xuXG52YXIgREVGSU5FX1BST1BFUlRZID0gXCJkZWZpbmVQcm9wZXJ0eVwiO1xuZnVuY3Rpb24gZGVmaW5lKE8sIGtleSwgdmFsdWUpIHtcbiAgT1trZXldIHx8IE9iamVjdFtERUZJTkVfUFJPUEVSVFldKE8sIGtleSwge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5cbmRlZmluZShTdHJpbmcucHJvdG90eXBlLCBcInBhZExlZnRcIiwgXCJcIi5wYWRTdGFydCk7XG5kZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgXCJwYWRSaWdodFwiLCBcIlwiLnBhZEVuZCk7XG5cblwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcyxpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzLGpvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZixyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsXCIuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBbXVtrZXldICYmIGRlZmluZShBcnJheSwga2V5LCBGdW5jdGlvbi5jYWxsLmJpbmQoW11ba2V5XSkpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwicmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnNlYWwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnBhcnNlLWludCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnRvLWZpeGVkJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmVwc2lsb24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hY29zaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYXRhbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jYnJ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY2x6MzInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jb3NoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5mcm91bmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5oeXBvdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmltdWwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cxMCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnNpZ24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5zaW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgudGFuaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnRydW5jJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJhdycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5ibGluaycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnN1YicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmRhdGUubm93Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmRhdGUudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZGF0ZS50by1wcmltaXRpdmUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5qb2luJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnNsaWNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnNvcnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZm9yLWVhY2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkubWFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5zb21lJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmV2ZXJ5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UtcmlnaHQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuaW5kZXgtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maWxsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuZXhlYycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LndlYWstbWFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LndlYWstc2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmFycmF5LWJ1ZmZlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5kYXRhLXZpZXcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1jbGFtcGVkLWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQxNi1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5pbnQzMi1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuZmxvYXQzMi1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDY0LWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5hcnJheS5mbGF0LW1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5hcnJheS5mbGF0dGVuJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtZW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLm1hdGNoLWFsbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLWdldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLXNldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLWdldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLXNldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXAub2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc2V0Lm9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LndlYWstbWFwLm9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LndlYWstc2V0Lm9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hcC5mcm9tJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnNldC5mcm9tJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LndlYWstbWFwLmZyb20nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcud2Vhay1zZXQuZnJvbScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5nbG9iYWwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3lzdGVtLmdsb2JhbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5lcnJvci5pcy1lcnJvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXRoLmNsYW1wJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGguZGVnLXBlci1yYWQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWF0aC5kZWdyZWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGguZnNjYWxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGguaWFkZGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWF0aC5pc3ViaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXRoLmltdWxoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGgucmFkLXBlci1kZWcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWF0aC5yYWRpYW5zJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGguc2NhbGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWF0aC51bXVsaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXRoLnNpZ25iaXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVmaW5lLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLWtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS1rZXlzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LmFzYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JzZXJ2YWJsZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi50aW1lcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIuaW1tZWRpYXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL21vZHVsZXMvX2NvcmUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJEdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgISEkR09QUy5mO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkR09QUy5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9ICRmYWlscyhmdW5jdGlvbiAoKSB7ICRHT1BTLmYoMSk7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIEZBSUxTX09OX1BSSU1JVElWRVMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuICRHT1BTLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMTEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4zIC8gMTUuMi4zLjcgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnRpZXM6IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlOYW1lcycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpLmY7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKS5vbkZyZWV6ZTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbiAoJGZyZWV6ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KSB7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDE5LjEuMi4xNyBPYmplY3Quc2VhbChPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKS5vbkZyZWV6ZTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdzZWFsJywgZnVuY3Rpb24gKCRzZWFsKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KSB7XG4gICAgcmV0dXJuICRzZWFsICYmIGlzT2JqZWN0KGl0KSA/ICRzZWFsKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDE5LjEuMi4xNSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgncHJldmVudEV4dGVuc2lvbnMnLCBmdW5jdGlvbiAoJHByZXZlbnRFeHRlbnNpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCkge1xuICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMgJiYgaXNPYmplY3QoaXQpID8gJHByZXZlbnRFeHRlbnNpb25zKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMTkuMS4yLjEyIE9iamVjdC5pc0Zyb3plbihPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnaXNGcm96ZW4nLCBmdW5jdGlvbiAoJGlzRnJvemVuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc0Zyb3plbihpdCkge1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNGcm96ZW4gPyAkaXNGcm96ZW4oaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMTkuMS4yLjEzIE9iamVjdC5pc1NlYWxlZChPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnaXNTZWFsZWQnLCBmdW5jdGlvbiAoJGlzU2VhbGVkKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc1NlYWxlZChpdCkge1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNTZWFsZWQgPyAkaXNTZWFsZWQoaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMTkuMS4yLjExIE9iamVjdC5pc0V4dGVuc2libGUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uICgkaXNFeHRlbnNpYmxlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpIHtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZSA6IGZhbHNlO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBpc0VudW0uY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgaXM6IHJlcXVpcmUoJy4vX3NhbWUtdmFsdWUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NhbWUtdmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAxOS4yLjMuMiAvIDE1LjMuNC41IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKHRoaXNBcmcsIGFyZ3MuLi4pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0Z1bmN0aW9uJywgeyBiaW5kOiByZXF1aXJlKCcuL19iaW5kJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGFycmF5U2xpY2UgPSBbXS5zbGljZTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIChGLCBsZW4sIGFyZ3MpIHtcbiAgaWYgKCEobGVuIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBuID0gW10sIGkgPSAwOyBpIDwgbGVuOyBpKyspIG5baV0gPSAnYVsnICsgaSArICddJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBmYWN0b3JpZXNbbGVuXSA9IEZ1bmN0aW9uKCdGLGEnLCAncmV0dXJuIG5ldyBGKCcgKyBuLmpvaW4oJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1tsZW5dKEYsIGFyZ3MpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIGZuID0gYUZ1bmN0aW9uKHRoaXMpO1xuICB2YXIgcGFydEFyZ3MgPSBhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kID0gZnVuY3Rpb24gKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpIGJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2JpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSEFTX0lOU1RBTkNFID0gcmVxdWlyZSgnLi9fd2tzJykoJ2hhc0luc3RhbmNlJyk7XG52YXIgRnVuY3Rpb25Qcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxuaWYgKCEoSEFTX0lOU1RBTkNFIGluIEZ1bmN0aW9uUHJvdG8pKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKEZ1bmN0aW9uUHJvdG8sIEhBU19JTlNUQU5DRSwgeyB2YWx1ZTogZnVuY3Rpb24gKE8pIHtcbiAgaWYgKHR5cGVvZiB0aGlzICE9ICdmdW5jdGlvbicgfHwgIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIGlmICghaXNPYmplY3QodGhpcy5wcm90b3R5cGUpKSByZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XG4gIC8vIGZvciBlbnZpcm9ubWVudCB3L28gbmF0aXZlIGBAQGhhc0luc3RhbmNlYCBsb2dpYyBlbm91Z2ggYGluc3RhbmNlb2ZgLCBidXQgYWRkIHRoaXM6XG4gIHdoaWxlIChPID0gZ2V0UHJvdG90eXBlT2YoTykpIGlmICh0aGlzLnByb3RvdHlwZSA9PT0gTykgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRwYXJzZUludCA9IHJlcXVpcmUoJy4vX3BhcnNlLWludCcpO1xuLy8gMTguMi41IHBhcnNlSW50KHN0cmluZywgcmFkaXgpXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuRiAqIChwYXJzZUludCAhPSAkcGFyc2VJbnQpLCB7IHBhcnNlSW50OiAkcGFyc2VJbnQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wYXJzZS1pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykucGFyc2VJbnQ7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd3MgPSByZXF1aXJlKCcuL19zdHJpbmctd3MnKTtcbnZhciBoZXggPSAvXlstK10/MFt4WF0vO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRwYXJzZUludCh3cyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3cyArICcweDE2JykgIT09IDIyID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyLCByYWRpeCkge1xuICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpO1xuICByZXR1cm4gJHBhcnNlSW50KHN0cmluZywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3Qoc3RyaW5nKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNwYWNlcyA9IHJlcXVpcmUoJy4vX3N0cmluZy13cycpO1xudmFyIHNwYWNlID0gJ1snICsgc3BhY2VzICsgJ10nO1xudmFyIG5vbiA9ICdcXHUyMDBiXFx1MDA4NSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBBTElBUykge1xuICB2YXIgZXhwID0ge307XG4gIHZhciBGT1JDRSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuICB9KTtcbiAgdmFyIGZuID0gZXhwW0tFWV0gPSBGT1JDRSA/IGV4ZWModHJpbSkgOiBzcGFjZXNbS0VZXTtcbiAgaWYgKEFMSUFTKSBleHBbQUxJQVNdID0gZm47XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xufTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcbi8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuLy8gMyAtPiBTdHJpbmcjdHJpbVxudmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24gKHN0cmluZywgVFlQRSkge1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXRyaW0uanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJtb2R1bGUuZXhwb3J0cyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi9fcGFyc2UtZmxvYXQnKTtcbi8vIDE4LjIuNCBwYXJzZUZsb2F0KHN0cmluZylcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCB7IHBhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtZmxvYXQuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgJHBhcnNlRmxvYXQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5wYXJzZUZsb2F0O1xudmFyICR0cmltID0gcmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKS50cmltO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDEgLyAkcGFyc2VGbG9hdChyZXF1aXJlKCcuL19zdHJpbmctd3MnKSArICctMCcpICE9PSAtSW5maW5pdHkgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cikge1xuICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiBzdHJpbmcuY2hhckF0KDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcGFyc2UtZmxvYXQuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4vX3N0cmluZy10cmltJykudHJpbTtcbnZhciBOVU1CRVIgPSAnTnVtYmVyJztcbnZhciAkTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgQmFzZSA9ICROdW1iZXI7XG52YXIgcHJvdG8gPSAkTnVtYmVyLnByb3RvdHlwZTtcbi8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xudmFyIEJST0tFTl9DT0YgPSBjb2YocmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpKHByb3RvKSkgPT0gTlVNQkVSO1xudmFyIFRSSU0gPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuLy8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSBUUklNID8gaXQudHJpbSgpIDogJHRyaW0oaXQsIDMpO1xuICAgIHZhciBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgdmFyIHRoaXJkLCByYWRpeCwgbWF4Q29kZTtcbiAgICBpZiAoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSkge1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYgKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKSByZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmIChmaXJzdCA9PT0gNDgpIHtcbiAgICAgIHN3aXRjaCAoaXQuY2hhckNvZGVBdCgxKSkge1xuICAgICAgICBjYXNlIDY2OiBjYXNlIDk4OiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzk6IGNhc2UgMTExOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wb1swLTddKyQvaVxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgZGlnaXRzID0gaXQuc2xpY2UoMiksIGkgPSAwLCBsID0gZGlnaXRzLmxlbmd0aCwgY29kZTsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKSByZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG5pZiAoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKSB7XG4gICROdW1iZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBwcm90by52YWx1ZU9mLmNhbGwodGhhdCk7IH0pIDogY29mKHRoYXQpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSh0b051bWJlcihpdCkpLCB0aGF0LCAkTnVtYmVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BOKEJhc2UpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKykge1xuICAgIGlmIChoYXMoQmFzZSwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcygkTnVtYmVyLCBrZXkpKSB7XG4gICAgICBkUCgkTnVtYmVyLCBrZXksIGdPUEQoQmFzZSwga2V5KSk7XG4gICAgfVxuICB9XG4gICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGFOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4vX2EtbnVtYmVyLXZhbHVlJyk7XG52YXIgcmVwZWF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLXJlcGVhdCcpO1xudmFyICR0b0ZpeGVkID0gMS4wLnRvRml4ZWQ7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG52YXIgRVJST1IgPSAnTnVtYmVyLnRvRml4ZWQ6IGluY29ycmVjdCBpbnZvY2F0aW9uISc7XG52YXIgWkVSTyA9ICcwJztcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKG4sIGMpIHtcbiAgdmFyIGkgPSAtMTtcbiAgdmFyIGMyID0gYztcbiAgd2hpbGUgKCsraSA8IDYpIHtcbiAgICBjMiArPSBuICogZGF0YVtpXTtcbiAgICBkYXRhW2ldID0gYzIgJSAxZTc7XG4gICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gIH1cbn07XG52YXIgZGl2aWRlID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIGkgPSA2O1xuICB2YXIgYyA9IDA7XG4gIHdoaWxlICgtLWkgPj0gMCkge1xuICAgIGMgKz0gZGF0YVtpXTtcbiAgICBkYXRhW2ldID0gZmxvb3IoYyAvIG4pO1xuICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICB9XG59O1xudmFyIG51bVRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSA9IDY7XG4gIHZhciBzID0gJyc7XG4gIHdoaWxlICgtLWkgPj0gMCkge1xuICAgIGlmIChzICE9PSAnJyB8fCBpID09PSAwIHx8IGRhdGFbaV0gIT09IDApIHtcbiAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaV0pO1xuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQuY2FsbChaRVJPLCA3IC0gdC5sZW5ndGgpICsgdDtcbiAgICB9XG4gIH0gcmV0dXJuIHM7XG59O1xudmFyIHBvdyA9IGZ1bmN0aW9uICh4LCBuLCBhY2MpIHtcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xufTtcbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgbiA9IDA7XG4gIHZhciB4MiA9IHg7XG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgbiArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICghISR0b0ZpeGVkICYmIChcbiAgMC4wMDAwOC50b0ZpeGVkKDMpICE9PSAnMC4wMDAnIHx8XG4gIDAuOS50b0ZpeGVkKDApICE9PSAnMScgfHxcbiAgMS4yNTUudG9GaXhlZCgyKSAhPT0gJzEuMjUnIHx8XG4gIDEwMDAwMDAwMDAwMDAwMDAxMjguMC50b0ZpeGVkKDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCdcbikgfHwgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICAkdG9GaXhlZC5jYWxsKHt9KTtcbn0pKSwgJ051bWJlcicsIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciB4ID0gYU51bWJlclZhbHVlKHRoaXMsIEVSUk9SKTtcbiAgICB2YXIgZiA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIHMgPSAnJztcbiAgICB2YXIgbSA9IFpFUk87XG4gICAgdmFyIGUsIHosIGosIGs7XG4gICAgaWYgKGYgPCAwIHx8IGYgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcihFUlJPUik7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmICh4ICE9IHgpIHJldHVybiAnTmFOJztcbiAgICBpZiAoeCA8PSAtMWUyMSB8fCB4ID49IDFlMjEpIHJldHVybiBTdHJpbmcoeCk7XG4gICAgaWYgKHggPCAwKSB7XG4gICAgICBzID0gJy0nO1xuICAgICAgeCA9IC14O1xuICAgIH1cbiAgICBpZiAoeCA+IDFlLTIxKSB7XG4gICAgICBlID0gbG9nKHggKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8geCAqIHBvdygyLCAtZSwgMSkgOiB4IC8gcG93KDIsIGUsIDEpO1xuICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xuICAgICAgZSA9IDUyIC0gZTtcbiAgICAgIGlmIChlID4gMCkge1xuICAgICAgICBtdWx0aXBseSgwLCB6KTtcbiAgICAgICAgaiA9IGY7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseSgxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZSgxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZSgxIDw8IGopO1xuICAgICAgICBtdWx0aXBseSgxLCAxKTtcbiAgICAgICAgZGl2aWRlKDIpO1xuICAgICAgICBtID0gbnVtVG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBtdWx0aXBseSgxIDw8IC1lLCAwKTtcbiAgICAgICAgbSA9IG51bVRvU3RyaW5nKCkgKyByZXBlYXQuY2FsbChaRVJPLCBmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGYgPiAwKSB7XG4gICAgICBrID0gbS5sZW5ndGg7XG4gICAgICBtID0gcyArIChrIDw9IGYgPyAnMC4nICsgcmVwZWF0LmNhbGwoWkVSTywgZiAtIGspICsgbSA6IG0uc2xpY2UoMCwgayAtIGYpICsgJy4nICsgbS5zbGljZShrIC0gZikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gcyArIG07XG4gICAgfSByZXR1cm4gbTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgbXNnKSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ251bWJlcicgJiYgY29mKGl0KSAhPSAnTnVtYmVyJykgdGhyb3cgVHlwZUVycm9yKG1zZyk7XG4gIHJldHVybiAraXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYS1udW1iZXItdmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoZGVmaW5lZCh0aGlzKSk7XG4gIHZhciByZXMgPSAnJztcbiAgdmFyIG4gPSB0b0ludGVnZXIoY291bnQpO1xuICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkgdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xuICBmb3IgKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzICs9IHN0cjtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcmVwZWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGFOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4vX2EtbnVtYmVyLXZhbHVlJyk7XG52YXIgJHRvUHJlY2lzaW9uID0gMS4wLnRvUHJlY2lzaW9uO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICgkZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBJRTctXG4gIHJldHVybiAkdG9QcmVjaXNpb24uY2FsbCgxLCB1bmRlZmluZWQpICE9PSAnMSc7XG59KSB8fCAhJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgJHRvUHJlY2lzaW9uLmNhbGwoe30pO1xufSkpLCAnTnVtYmVyJywge1xuICB0b1ByZWNpc2lvbjogZnVuY3Rpb24gdG9QcmVjaXNpb24ocHJlY2lzaW9uKSB7XG4gICAgdmFyIHRoYXQgPSBhTnVtYmVyVmFsdWUodGhpcywgJ051bWJlciN0b1ByZWNpc2lvbjogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gICAgcmV0dXJuIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gJHRvUHJlY2lzaW9uLmNhbGwodGhhdCkgOiAkdG9QcmVjaXNpb24uY2FsbCh0aGF0LCBwcmVjaXNpb24pO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24uanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7IEVQU0lMT046IE1hdGgucG93KDIsIC01MikgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjEuMi4yIE51bWJlci5pc0Zpbml0ZShudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIF9pc0Zpbml0ZSA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmlzRmluaXRlO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNGaW5pdGU6IGZ1bmN0aW9uIGlzRmluaXRlKGl0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywgeyBpc0ludGVnZXI6IHJlcXVpcmUoJy4vX2lzLWludGVnZXInKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCkge1xuICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzSW50ZWdlciA9IHJlcXVpcmUoJy4vX2lzLWludGVnZXInKTtcbnZhciBhYnMgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uIGlzU2FmZUludGVnZXIobnVtYmVyKSB7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IDB4MWZmZmZmZmZmZmZmZmY7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHsgTUFYX1NBRkVfSU5URUdFUjogMHgxZmZmZmZmZmZmZmZmZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHsgTUlOX1NBRkVfSU5URUdFUjogLTB4MWZmZmZmZmZmZmZmZmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi9fcGFyc2UtZmxvYXQnKTtcbi8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksICdOdW1iZXInLCB7IHBhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi9fcGFyc2UtaW50Jyk7XG4vLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VJbnQgIT0gJHBhcnNlSW50KSwgJ051bWJlcicsIHsgcGFyc2VJbnQ6ICRwYXJzZUludCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMi4yLjMgTWF0aC5hY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBsb2cxcCA9IHJlcXVpcmUoJy4vX21hdGgtbG9nMXAnKTtcbnZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xudmFyICRhY29zaCA9IE1hdGguYWNvc2g7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYWNvc2hcbiAgLy8gVjggYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzUwOVxuICAmJiBNYXRoLmZsb29yKCRhY29zaChOdW1iZXIuTUFYX1ZBTFVFKSkgPT0gNzEwXG4gIC8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hY29zaChJbmZpbml0eSkgLT4gTmFOXG4gICYmICRhY29zaChJbmZpbml0eSkgPT0gSW5maW5pdHlcbiksICdNYXRoJywge1xuICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCkge1xuICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiB4ID4gOTQ5MDYyNjUuNjI0MjUxNTZcbiAgICAgID8gTWF0aC5sb2coeCkgKyBNYXRoLkxOMlxuICAgICAgOiBsb2cxcCh4IC0gMSArIHNxcnQoeCAtIDEpICogc3FydCh4ICsgMSkpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5sb2cxcCB8fCBmdW5jdGlvbiBsb2cxcCh4KSB7XG4gIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IE1hdGgubG9nKDEgKyB4KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWxvZzFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGFzaW5oID0gTWF0aC5hc2luaDtcblxuZnVuY3Rpb24gYXNpbmgoeCkge1xuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IE1hdGgubG9nKHggKyBNYXRoLnNxcnQoeCAqIHggKyAxKSk7XG59XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hc2luaCgwKSAtPiAtMFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhc2luaCAmJiAxIC8gJGFzaW5oKDApID4gMCksICdNYXRoJywgeyBhc2luaDogYXNpbmggfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjIuMi43IE1hdGguYXRhbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGF0YW5oID0gTWF0aC5hdGFuaDtcblxuLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmF0YW5oKC0wKSAtPiAwXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGF0YW5oICYmIDEgLyAkYXRhbmgoLTApIDwgMCksICdNYXRoJywge1xuICBhdGFuaDogZnVuY3Rpb24gYXRhbmgoeCkge1xuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IE1hdGgubG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hdGFuaC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4yLjIuOSBNYXRoLmNicnQoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNicnQ6IGZ1bmN0aW9uIGNicnQoeCkge1xuICAgIHJldHVybiBzaWduKHggPSAreCkgKiBNYXRoLnBvdyhNYXRoLmFicyh4KSwgMSAvIDMpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjIuMi4xMSBNYXRoLmNsejMyKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNsejMyOiBmdW5jdGlvbiBjbHozMih4KSB7XG4gICAgcmV0dXJuICh4ID4+Pj0gMCkgPyAzMSAtIE1hdGguZmxvb3IoTWF0aC5sb2coeCArIDAuNSkgKiBNYXRoLkxPRzJFKSA6IDMyO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBleHAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjb3NoOiBmdW5jdGlvbiBjb3NoKHgpIHtcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY29zaC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZXhwbTEgPSByZXF1aXJlKCcuL19tYXRoLWV4cG0xJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCRleHBtMSAhPSBNYXRoLmV4cG0xKSwgJ01hdGgnLCB7IGV4cG0xOiAkZXhwbTEgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG0xID0gTWF0aC5leHBtMTtcbm1vZHVsZS5leHBvcnRzID0gKCEkZXhwbTFcbiAgLy8gT2xkIEZGIGJ1Z1xuICB8fCAkZXhwbTEoMTApID4gMjIwMjUuNDY1Nzk0ODA2NzE5IHx8ICRleHBtMSgxMCkgPCAyMjAyNS40NjU3OTQ4MDY3MTY1MTY4XG4gIC8vIFRvciBCcm93c2VyIGJ1Z1xuICB8fCAkZXhwbTEoLTJlLTE3KSAhPSAtMmUtMTdcbikgPyBmdW5jdGlvbiBleHBtMSh4KSB7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBNYXRoLmV4cCh4KSAtIDE7XG59IDogJGV4cG0xO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1leHBtMS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4yLjIuMTYgTWF0aC5mcm91bmQoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHsgZnJvdW5kOiByZXF1aXJlKCcuL19tYXRoLWZyb3VuZCcpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpO1xudmFyIHBvdyA9IE1hdGgucG93O1xudmFyIEVQU0lMT04gPSBwb3coMiwgLTUyKTtcbnZhciBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKTtcbnZhciBNQVgzMiA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpO1xudmFyIE1JTjMyID0gcG93KDIsIC0xMjYpO1xuXG52YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmZyb3VuZCB8fCBmdW5jdGlvbiBmcm91bmQoeCkge1xuICB2YXIgJGFicyA9IE1hdGguYWJzKHgpO1xuICB2YXIgJHNpZ24gPSBzaWduKHgpO1xuICB2YXIgYSwgcmVzdWx0O1xuICBpZiAoJGFicyA8IE1JTjMyKSByZXR1cm4gJHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oJGFicyAvIE1JTjMyIC8gRVBTSUxPTjMyKSAqIE1JTjMyICogRVBTSUxPTjMyO1xuICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIGlmIChyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KSByZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcbiAgcmV0dXJuICRzaWduICogcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtZnJvdW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhYnMgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBoeXBvdDogZnVuY3Rpb24gaHlwb3QodmFsdWUxLCB2YWx1ZTIpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBzdW0gPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGxhcmcgPSAwO1xuICAgIHZhciBhcmcsIGRpdjtcbiAgICB3aGlsZSAoaSA8IGFMZW4pIHtcbiAgICAgIGFyZyA9IGFicyhhcmd1bWVudHNbaSsrXSk7XG4gICAgICBpZiAobGFyZyA8IGFyZykge1xuICAgICAgICBkaXYgPSBsYXJnIC8gYXJnO1xuICAgICAgICBzdW0gPSBzdW0gKiBkaXYgKiBkaXYgKyAxO1xuICAgICAgICBsYXJnID0gYXJnO1xuICAgICAgfSBlbHNlIGlmIChhcmcgPiAwKSB7XG4gICAgICAgIGRpdiA9IGFyZyAvIGxhcmc7XG4gICAgICAgIHN1bSArPSBkaXYgKiBkaXY7XG4gICAgICB9IGVsc2Ugc3VtICs9IGFyZztcbiAgICB9XG4gICAgcmV0dXJuIGxhcmcgPT09IEluZmluaXR5ID8gSW5maW5pdHkgOiBsYXJnICogTWF0aC5zcXJ0KHN1bSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4yLjIuMTggTWF0aC5pbXVsKHgsIHkpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRpbXVsID0gTWF0aC5pbXVsO1xuXG4vLyBzb21lIFdlYktpdCB2ZXJzaW9ucyBmYWlscyB3aXRoIGJpZyBudW1iZXJzLCBzb21lIGhhcyB3cm9uZyBhcml0eVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICRpbXVsKDB4ZmZmZmZmZmYsIDUpICE9IC01IHx8ICRpbXVsLmxlbmd0aCAhPSAyO1xufSksICdNYXRoJywge1xuICBpbXVsOiBmdW5jdGlvbiBpbXVsKHgsIHkpIHtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmO1xuICAgIHZhciB4biA9ICt4O1xuICAgIHZhciB5biA9ICt5O1xuICAgIHZhciB4bCA9IFVJTlQxNiAmIHhuO1xuICAgIHZhciB5bCA9IFVJTlQxNiAmIHluO1xuICAgIHJldHVybiAwIHwgeGwgKiB5bCArICgoVUlOVDE2ICYgeG4gPj4+IDE2KSAqIHlsICsgeGwgKiAoVUlOVDE2ICYgeW4gPj4+IDE2KSA8PCAxNiA+Pj4gMCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzEwOiBmdW5jdGlvbiBsb2cxMCh4KSB7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpICogTWF0aC5MT0cxMEU7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywgeyBsb2cxcDogcmVxdWlyZSgnLi9fbWF0aC1sb2cxcCcpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxcC5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCkge1xuICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4yO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IHNpZ246IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZXhwbTEgPSByZXF1aXJlKCcuL19tYXRoLWV4cG0xJyk7XG52YXIgZXhwID0gTWF0aC5leHA7XG5cbi8vIFY4IG5lYXIgQ2hyb21pdW0gMzggaGFzIGEgcHJvYmxlbSB3aXRoIHZlcnkgc21hbGwgbnVtYmVyc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICFNYXRoLnNpbmgoLTJlLTE3KSAhPSAtMmUtMTc7XG59KSwgJ01hdGgnLCB7XG4gIHNpbmg6IGZ1bmN0aW9uIHNpbmgoeCkge1xuICAgIHJldHVybiBNYXRoLmFicyh4ID0gK3gpIDwgMVxuICAgICAgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMlxuICAgICAgOiAoZXhwKHggLSAxKSAtIGV4cCgteCAtIDEpKSAqIChNYXRoLkUgLyAyKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpbmguanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBleHBtMSA9IHJlcXVpcmUoJy4vX21hdGgtZXhwbTEnKTtcbnZhciBleHAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0YW5oOiBmdW5jdGlvbiB0YW5oKHgpIHtcbiAgICB2YXIgYSA9IGV4cG0xKHggPSAreCk7XG4gICAgdmFyIGIgPSBleHBtMSgteCk7XG4gICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKGl0KSB7XG4gICAgcmV0dXJuIChpdCA+IDAgPyBNYXRoLmZsb29yIDogTWF0aC5jZWlsKShpdCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG4vLyBsZW5ndGggc2hvdWxkIGJlIDEsIG9sZCBGRiBwcm9ibGVtXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjIgU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cylcbiAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh4KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgcmVzID0gW107XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgY29kZTtcbiAgICB3aGlsZSAoYUxlbiA+IGkpIHtcbiAgICAgIGNvZGUgPSArYXJndW1lbnRzW2krK107XG4gICAgICBpZiAodG9BYnNvbHV0ZUluZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSkgdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XG4gICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMFxuICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXG4gICAgICApO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxuICByYXc6IGZ1bmN0aW9uIHJhdyhjYWxsU2l0ZSkge1xuICAgIHZhciB0cGwgPSB0b0lPYmplY3QoY2FsbFNpdGUucmF3KTtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgodHBsLmxlbmd0aCk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGxlbiA+IGkpIHtcbiAgICAgIHJlcy5wdXNoKFN0cmluZyh0cGxbaSsrXSkpO1xuICAgICAgaWYgKGkgPCBhTGVuKSByZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMS4zLjI1IFN0cmluZy5wcm90b3R5cGUudHJpbSgpXG5yZXF1aXJlKCcuL19zdHJpbmctdHJpbScpKCd0cmltJywgZnVuY3Rpb24gKCR0cmltKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAzKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0uanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykoZmFsc2UpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxuICBjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKSB7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKTtcbnZhciBFTkRTX1dJVEggPSAnZW5kc1dpdGgnO1xudmFyICRlbmRzV2l0aCA9ICcnW0VORFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMtaXMtcmVnZXhwJykoRU5EU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZyAvKiAsIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLykge1xuICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIEVORFNfV0lUSCk7XG4gICAgdmFyIGVuZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKTtcbiAgICB2YXIgZW5kID0gZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGxlbiA6IE1hdGgubWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKTtcbiAgICB2YXIgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRlbmRzV2l0aFxuICAgICAgPyAkZW5kc1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGVuZClcbiAgICAgIDogdGhhdC5zbGljZShlbmQgLSBzZWFyY2gubGVuZ3RoLCBlbmQpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKSB7XG4gIGlmIChpc1JlZ0V4cChzZWFyY2hTdHJpbmcpKSB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIHJlID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW0tFWV0ocmUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcbiAgICB9IGNhdGNoIChmKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy1pcy1yZWdleHAuanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJy4vX3N0cmluZy1jb250ZXh0Jyk7XG52YXIgSU5DTFVERVMgPSAnaW5jbHVkZXMnO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzLWlzLXJlZ2V4cCcpKElOQ0xVREVTKSwgJ1N0cmluZycsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHJldHVybiAhIX5jb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgSU5DTFVERVMpXG4gICAgICAuaW5kZXhPZihzZWFyY2hTdHJpbmcsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcbiAgcmVwZWF0OiByZXF1aXJlKCcuL19zdHJpbmctcmVwZWF0Jylcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuL19zdHJpbmctY29udGV4dCcpO1xudmFyIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnO1xudmFyICRzdGFydHNXaXRoID0gJydbU1RBUlRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzLWlzLXJlZ2V4cCcpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICB2YXIgdGhhdCA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBTVEFSVFNfV0lUSCk7XG4gICAgdmFyIGluZGV4ID0gdG9MZW5ndGgoTWF0aC5taW4oYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSk7XG4gICAgdmFyIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkc3RhcnRzV2l0aFxuICAgICAgPyAkc3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG4gICAgICA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMiBTdHJpbmcucHJvdG90eXBlLmFuY2hvcihuYW1lKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYW5jaG9yJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFuY2hvcihuYW1lKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnbmFtZScsIG5hbWUpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYW5jaG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgcXVvdCA9IC9cIi9nO1xuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG52YXIgY3JlYXRlSFRNTCA9IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCBleGVjKSB7XG4gIHZhciBPID0ge307XG4gIE9bTkFNRV0gPSBleGVjKGNyZWF0ZUhUTUwpO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdCA9ICcnW05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KSwgJ1N0cmluZycsIE8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjMgU3RyaW5nLnByb3RvdHlwZS5iaWcoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYmlnJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJpZygpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYmlnJywgJycsICcnKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJpZy5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy40IFN0cmluZy5wcm90b3R5cGUuYmxpbmsoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYmxpbmsnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gYmxpbmsoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2JsaW5rJywgJycsICcnKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjUgU3RyaW5nLnByb3RvdHlwZS5ib2xkKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2JvbGQnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gYm9sZCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYicsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ib2xkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjYgU3RyaW5nLnByb3RvdHlwZS5maXhlZCgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdmaXhlZCcsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmaXhlZCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAndHQnLCAnJywgJycpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNyBTdHJpbmcucHJvdG90eXBlLmZvbnRjb2xvcihjb2xvcilcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2ZvbnRjb2xvcicsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb250Y29sb3IoY29sb3IpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdjb2xvcicsIGNvbG9yKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy44IFN0cmluZy5wcm90b3R5cGUuZm9udHNpemUoc2l6ZSlcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2ZvbnRzaXplJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRzaXplKHNpemUpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdzaXplJywgc2l6ZSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mb250c2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy45IFN0cmluZy5wcm90b3R5cGUuaXRhbGljcygpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdpdGFsaWNzJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGl0YWxpY3MoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2knLCAnJywgJycpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRhbGljcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMCBTdHJpbmcucHJvdG90eXBlLmxpbmsodXJsKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnbGluaycsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMSBTdHJpbmcucHJvdG90eXBlLnNtYWxsKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ3NtYWxsJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNtYWxsKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzbWFsbCcsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMiBTdHJpbmcucHJvdG90eXBlLnN0cmlrZSgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdHJpa2UnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gc3RyaWtlKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdHJpa2UnLCAnJywgJycpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RyaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEzIFN0cmluZy5wcm90b3R5cGUuc3ViKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ3N1YicsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzdWIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N1YicsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdWIuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5zdXAoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnc3VwJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN1cCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3VwJywgJycsICcnKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMC4zLjMuMSAvIDE1LjkuNC40IERhdGUubm93KClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnRGF0ZScsIHsgbm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUubm93LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoTmFOKS50b0pTT04oKSAhPT0gbnVsbFxuICAgIHx8IERhdGUucHJvdG90eXBlLnRvSlNPTi5jYWxsKHsgdG9JU09TdHJpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDE7IH0gfSkgIT09IDE7XG59KSwgJ0RhdGUnLCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTihrZXkpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBwdiA9IHRvUHJpbWl0aXZlKE8pO1xuICAgIHJldHVybiB0eXBlb2YgcHYgPT0gJ251bWJlcicgJiYgIWlzRmluaXRlKHB2KSA/IG51bGwgOiBPLnRvSVNPU3RyaW5nKCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIwLjMuNC4zNiAvIDE1LjkuNS40MyBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvSVNPU3RyaW5nID0gcmVxdWlyZSgnLi9fZGF0ZS10by1pc28tc3RyaW5nJyk7XG5cbi8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgIT09IHRvSVNPU3RyaW5nKSwgJ0RhdGUnLCB7XG4gIHRvSVNPU3RyaW5nOiB0b0lTT1N0cmluZ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjAuMy40LjM2IC8gMTUuOS41LjQzIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKClcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZ2V0VGltZSA9IERhdGUucHJvdG90eXBlLmdldFRpbWU7XG52YXIgJHRvSVNPU3RyaW5nID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbnZhciBseiA9IGZ1bmN0aW9uIChudW0pIHtcbiAgcmV0dXJuIG51bSA+IDkgPyBudW0gOiAnMCcgKyBudW07XG59O1xuXG4vLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGhhcyBhIGJyb2tlbiBpbXBsZW1lbnRhdGlvbnNcbm1vZHVsZS5leHBvcnRzID0gKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICR0b0lTT1N0cmluZy5jYWxsKG5ldyBEYXRlKC01ZTEzIC0gMSkpICE9ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgJHRvSVNPU3RyaW5nLmNhbGwobmV3IERhdGUoTmFOKSk7XG59KSkgPyBmdW5jdGlvbiB0b0lTT1N0cmluZygpIHtcbiAgaWYgKCFpc0Zpbml0ZShnZXRUaW1lLmNhbGwodGhpcykpKSB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgdmFyIGQgPSB0aGlzO1xuICB2YXIgeSA9IGQuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG0gPSBkLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICB2YXIgcyA9IHkgPCAwID8gJy0nIDogeSA+IDk5OTkgPyAnKycgOiAnJztcbiAgcmV0dXJuIHMgKyAoJzAwMDAwJyArIE1hdGguYWJzKHkpKS5zbGljZShzID8gLTYgOiAtNCkgK1xuICAgICctJyArIGx6KGQuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICsgbHooZC5nZXRVVENEYXRlKCkpICtcbiAgICAnVCcgKyBseihkLmdldFVUQ0hvdXJzKCkpICsgJzonICsgbHooZC5nZXRVVENNaW51dGVzKCkpICtcbiAgICAnOicgKyBseihkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAobSA+IDk5ID8gbSA6ICcwJyArIGx6KG0pKSArICdaJztcbn0gOiAkdG9JU09TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kYXRlLXRvLWlzby1zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIERhdGVQcm90byA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRGF0ZVByb3RvW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90by5nZXRUaW1lO1xuaWYgKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShEYXRlUHJvdG8sIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gJHRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIFRPX1BSSU1JVElWRSA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1ByaW1pdGl2ZScpO1xudmFyIHByb3RvID0gRGF0ZS5wcm90b3R5cGU7XG5cbmlmICghKFRPX1BSSU1JVElWRSBpbiBwcm90bykpIHJlcXVpcmUoJy4vX2hpZGUnKShwcm90bywgVE9fUFJJTUlUSVZFLCByZXF1aXJlKCcuL19kYXRlLXRvLXByaW1pdGl2ZScpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgTlVNQkVSID0gJ251bWJlcic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhpbnQpIHtcbiAgaWYgKGhpbnQgIT09ICdzdHJpbmcnICYmIGhpbnQgIT09IE5VTUJFUiAmJiBoaW50ICE9PSAnZGVmYXVsdCcpIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0IGhpbnQnKTtcbiAgcmV0dXJuIHRvUHJpbWl0aXZlKGFuT2JqZWN0KHRoaXMpLCBoaW50ICE9IE5VTUJFUik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGF0ZS10by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjIuMS4yLjIgLyAxNS40LjMuMiBBcnJheS5pc0FycmF5KGFyZylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnQXJyYXknLCB7IGlzQXJyYXk6IHJlcXVpcmUoJy4vX2lzLWFycmF5JykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gV2ViS2l0IEFycmF5Lm9mIGlzbid0IGdlbmVyaWNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuICEoQXJyYXkub2YuY2FsbChGKSBpbnN0YW5jZW9mIEYpO1xufSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxuICBvZjogZnVuY3Rpb24gb2YoLyogLi4uYXJncyAqLykge1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgKHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXkpKGFMZW4pO1xuICAgIHdoaWxlIChhTGVuID4gaW5kZXgpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGFMZW47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmpvaW4oc2VwYXJhdG9yKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlKb2luID0gW10uam9pbjtcblxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIHN0cmluZ3NcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKHJlcXVpcmUoJy4vX2lvYmplY3QnKSAhPSBPYmplY3QgfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShhcnJheUpvaW4pKSwgJ0FycmF5Jywge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0b0lPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5qb2luLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbFxuICAgIGFyZyA/IG1ldGhvZC5jYWxsKG51bGwsIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgMSkgOiBtZXRob2QuY2FsbChudWxsKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U2xpY2UgPSBbXS5zbGljZTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgaWYgKGh0bWwpIGFycmF5U2xpY2UuY2FsbChodG1sKTtcbn0pLCAnQXJyYXknLCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKSB7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKHRoaXMubGVuZ3RoKTtcbiAgICB2YXIga2xhc3MgPSBjb2YodGhpcyk7XG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XG4gICAgaWYgKGtsYXNzID09ICdBcnJheScpIHJldHVybiBhcnJheVNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XG4gICAgdmFyIHN0YXJ0ID0gdG9BYnNvbHV0ZUluZGV4KGJlZ2luLCBsZW4pO1xuICAgIHZhciB1cFRvID0gdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuKTtcbiAgICB2YXIgc2l6ZSA9IHRvTGVuZ3RoKHVwVG8gLSBzdGFydCk7XG4gICAgdmFyIGNsb25lZCA9IG5ldyBBcnJheShzaXplKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBzaXplOyBpKyspIGNsb25lZFtpXSA9IGtsYXNzID09ICdTdHJpbmcnXG4gICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcbiAgICAgIDogdGhpc1tzdGFydCArIGldO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJHNvcnQgPSBbXS5zb3J0O1xudmFyIHRlc3QgPSBbMSwgMiwgM107XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gSUU4LVxuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIFY4IGJ1Z1xuICB0ZXN0LnNvcnQobnVsbCk7XG4gIC8vIE9sZCBXZWJLaXRcbn0pIHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoJHNvcnQpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMjUgQXJyYXkucHJvdG90eXBlLnNvcnQoY29tcGFyZWZuKVxuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpKVxuICAgICAgOiAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApO1xudmFyIFNUUklDVCA9IHJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5mb3JFYWNoLCB0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhU1RSSUNULCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xMCAvIDE1LjQuNC4xOCBBcnJheS5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZm9yLWVhY2guanNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDEpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10ubWFwLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLmZpbHRlciwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjcgLyAxNS40LjQuMjAgQXJyYXkucHJvdG90eXBlLmZpbHRlcihjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHNvbWUgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5zb21lLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMjMgLyAxNS40LjQuMTcgQXJyYXkucHJvdG90eXBlLnNvbWUoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZXZlcnkgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5ldmVyeSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZXZlcnkodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheS1yZWR1Y2UnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLnJlZHVjZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE4IC8gMTUuNC40LjIxIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzWzFdLCBmYWxzZSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIGNhbGxiYWNrZm4sIGFMZW4sIG1lbW8sIGlzUmlnaHQpIHtcbiAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoYXQpO1xuICB2YXIgc2VsZiA9IElPYmplY3QoTyk7XG4gIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gIHZhciBpbmRleCA9IGlzUmlnaHQgPyBsZW5ndGggLSAxIDogMDtcbiAgdmFyIGkgPSBpc1JpZ2h0ID8gLTEgOiAxO1xuICBpZiAoYUxlbiA8IDIpIGZvciAoOzspIHtcbiAgICBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgaW5kZXggKz0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpbmRleCArPSBpO1xuICAgIGlmIChpc1JpZ2h0ID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICB9XG4gIH1cbiAgZm9yICg7aXNSaWdodCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBzZWxmW2luZGV4XSwgaW5kZXgsIE8pO1xuICB9XG4gIHJldHVybiBtZW1vO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXJlZHVjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheS1yZWR1Y2UnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLnJlZHVjZVJpZ2h0LCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIHRydWUpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgJG5hdGl2ZSA9IFtdLmluZGV4T2Y7XG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoTkVHQVRJVkVfWkVSTyB8fCAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKCRuYXRpdmUpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTEgLyAxNS40LjQuMTQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciAkbmF0aXZlID0gW10ubGFzdEluZGV4T2Y7XG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmxhc3RJbmRleE9mKDEsIC0wKSA8IDA7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkbmF0aXZlKSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE0IC8gMTUuNC40LjE1IEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gQFsqLTFdICovKSB7XG4gICAgLy8gY29udmVydCAtMCB0byArMFxuICAgIGlmIChORUdBVElWRV9aRVJPKSByZXR1cm4gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSBsZW5ndGggLSAxO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgaW5kZXggPSBNYXRoLm1pbihpbmRleCwgdG9JbnRlZ2VyKGFyZ3VtZW50c1sxXSkpO1xuICAgIGlmIChpbmRleCA8IDApIGluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgZm9yICg7aW5kZXggPj0gMDsgaW5kZXgtLSkgaWYgKGluZGV4IGluIE8pIGlmIChPW2luZGV4XSA9PT0gc2VhcmNoRWxlbWVudCkgcmV0dXJuIGluZGV4IHx8IDA7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5JywgeyBjb3B5V2l0aGluOiByZXF1aXJlKCcuL19hcnJheS1jb3B5LXdpdGhpbicpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnY29weVdpdGhpbicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanNcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gW10uY29weVdpdGhpbiB8fCBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCAvKiA9IDAgKi8sIHN0YXJ0IC8qID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgdG8gPSB0b0Fic29sdXRlSW5kZXgodGFyZ2V0LCBsZW4pO1xuICB2YXIgZnJvbSA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuKTtcbiAgdmFyIGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgY291bnQgPSBNYXRoLm1pbigoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW4pKSAtIGZyb20sIGxlbiAtIHRvKTtcbiAgdmFyIGluYyA9IDE7XG4gIGlmIChmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpIHtcbiAgICBpbmMgPSAtMTtcbiAgICBmcm9tICs9IGNvdW50IC0gMTtcbiAgICB0byArPSBjb3VudCAtIDE7XG4gIH1cbiAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgaWYgKGZyb20gaW4gTykgT1t0b10gPSBPW2Zyb21dO1xuICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgIHRvICs9IGluYztcbiAgICBmcm9tICs9IGluYztcbiAgfSByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1jb3B5LXdpdGhpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKTtcbiAgdmFyIGVuZCA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZSAoZW5kUG9zID4gaW5kZXgpIE9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDUpO1xudmFyIEtFWSA9ICdmaW5kJztcbnZhciBmb3JjZWQgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNik7XG52YXIgS0VZID0gJ2ZpbmRJbmRleCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ0FycmF5Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xudmFyIEJhc2UgPSAkUmVnRXhwO1xudmFyIHByb3RvID0gJFJlZ0V4cC5wcm90b3R5cGU7XG52YXIgcmUxID0gL2EvZztcbnZhciByZTIgPSAvYS9nO1xuLy8gXCJuZXdcIiBjcmVhdGVzIGEgbmV3IG9iamVjdCwgb2xkIHdlYmtpdCBidWdneSBoZXJlXG52YXIgQ09SUkVDVF9ORVcgPSBuZXcgJFJlZ0V4cChyZTEpICE9PSByZTE7XG5cbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICghQ09SUkVDVF9ORVcgfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJlMltyZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKV0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuICRSZWdFeHAocmUxKSAhPSByZTEgfHwgJFJlZ0V4cChyZTIpID09IHJlMiB8fCAkUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpIHtcbiAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwLCBmKSB7XG4gICAgdmFyIHRpUkUgPSB0aGlzIGluc3RhbmNlb2YgJFJlZ0V4cDtcbiAgICB2YXIgcGlSRSA9IGlzUmVnRXhwKHApO1xuICAgIHZhciBmaVUgPSBmID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuICF0aVJFICYmIHBpUkUgJiYgcC5jb25zdHJ1Y3RvciA9PT0gJFJlZ0V4cCAmJiBmaVUgPyBwXG4gICAgICA6IGluaGVyaXRJZlJlcXVpcmVkKENPUlJFQ1RfTkVXXG4gICAgICAgID8gbmV3IEJhc2UocGlSRSAmJiAhZmlVID8gcC5zb3VyY2UgOiBwLCBmKVxuICAgICAgICA6IEJhc2UoKHBpUkUgPSBwIGluc3RhbmNlb2YgJFJlZ0V4cCkgPyBwLnNvdXJjZSA6IHAsIHBpUkUgJiYgZmlVID8gJGZsYWdzLmNhbGwocCkgOiBmKVxuICAgICAgLCB0aVJFID8gdGhpcyA6IHByb3RvLCAkUmVnRXhwKTtcbiAgfTtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGtleSBpbiAkUmVnRXhwIHx8IGRQKCRSZWdFeHAsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBCYXNlW2tleV07IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChpdCkgeyBCYXNlW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBrZXlzID0gZ09QTihCYXNlKSwgaSA9IDA7IGtleXMubGVuZ3RoID4gaTspIHByb3h5KGtleXNbaSsrXSk7XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJFJlZ0V4cDtcbiAgJFJlZ0V4cC5wcm90b3R5cGUgPSBwcm90bztcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShnbG9iYWwsICdSZWdFeHAnLCAkUmVnRXhwKTtcbn1cblxucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnUmVnRXhwJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mbGFncy5qc1xuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5yZXF1aXJlKCcuL19leHBvcnQnKSh7XG4gIHRhcmdldDogJ1JlZ0V4cCcsXG4gIHByb3RvOiB0cnVlLFxuICBmb3JjZWQ6IHJlZ2V4cEV4ZWMgIT09IC8uLy5leGVjXG59LCB7XG4gIGV4ZWM6IHJlZ2V4cEV4ZWNcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanNcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS8sXG4gICAgICByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMVtMQVNUX0lOREVYXSAhPT0gMCB8fCByZTJbTEFTVF9JTkRFWF0gIT09IDA7XG59KSgpO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIHJlZ2V4cEZsYWdzLmNhbGwocmUpKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmVbTEFTVF9JTkRFWF07XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChyZSwgc3RyKTtcblxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlW0xBU1RfSU5ERVhdID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanNcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQG1hdGNoIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ21hdGNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIE1BVENILCAkbWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJG1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4gLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gYXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmYCddfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmYCddfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkcmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxuICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgIH1cbiAgICByZXR1cm4gJHJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuL19zYW1lLXZhbHVlJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBTRUFSQ0gsICRzZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRzZWFyY2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJG1pbiA9IE1hdGgubWluO1xudmFyICRwdXNoID0gW10ucHVzaDtcbnZhciAkU1BMSVQgPSAnc3BsaXQnO1xudmFyIExFTkdUSCA9ICdsZW5ndGgnO1xudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbnZhciBNQVhfVUlOVDMyID0gMHhmZmZmZmZmZjtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdDtcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiAkc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiAkc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGludGVybmFsU3BsaXQgPSAkc3BsaXQ7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gJHNwbGl0KTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgIHZhciB6ID0gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gJG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qc1xuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMjE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qc1xuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTRVQgPSAnU2V0JztcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBTRVQpLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMCk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpO1xudmFyIHdlYWsgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBJU19JRTExID0gIWdsb2JhbC5BY3RpdmVYT2JqZWN0ICYmICdBY3RpdmVYT2JqZWN0JyBpbiBnbG9iYWw7XG52YXIgV0VBS19NQVAgPSAnV2Vha01hcCc7XG52YXIgZ2V0V2VhayA9IG1ldGEuZ2V0V2VhaztcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xudmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSB3ZWFrLnVmc3RvcmU7XG52YXIgSW50ZXJuYWxNYXA7XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn07XG5cbnZhciBtZXRob2RzID0ge1xuICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodmFsaWRhdGUodGhpcywgV0VBS19NQVApKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBkYXRhID8gZGF0YVt0aGlzLl9pXSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG4gIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHZhbGlkYXRlKHRoaXMsIFdFQUtfTUFQKSwga2V5LCB2YWx1ZSk7XG4gIH1cbn07XG5cbi8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG52YXIgJFdlYWtNYXAgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShXRUFLX01BUCwgd3JhcHBlciwgbWV0aG9kcywgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5cbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcbmlmIChOQVRJVkVfV0VBS19NQVAgJiYgSVNfSUUxMSkge1xuICBJbnRlcm5hbE1hcCA9IHdlYWsuZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgV0VBS19NQVApO1xuICBhc3NpZ24oSW50ZXJuYWxNYXAucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgZWFjaChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHByb3RvID0gJFdlYWtNYXAucHJvdG90eXBlO1xuICAgIHZhciBtZXRob2QgPSBwcm90b1trZXldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBrZXksIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBpbnRlcm5hbCB3ZWFrbWFwIHNoaW1cbiAgICAgIGlmIChpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKSB7XG4gICAgICAgIGlmICghdGhpcy5fZikgdGhpcy5fZiA9IG5ldyBJbnRlcm5hbE1hcCgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fZltrZXldKGEsIGIpO1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzZXQnID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxuICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgZ2V0V2VhayA9IHJlcXVpcmUoJy4vX21ldGEnKS5nZXRXZWFrO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpO1xudmFyICRoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBhcnJheUZpbmQgPSBjcmVhdGVBcnJheU1ldGhvZCg1KTtcbnZhciBhcnJheUZpbmRJbmRleCA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpO1xudmFyIGlkID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uICh0aGF0KSB7XG4gIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IFVuY2F1Z2h0RnJvemVuU3RvcmUoKSk7XG59O1xudmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbiAoc3RvcmUsIGtleSkge1xuICByZXR1cm4gYXJyYXlGaW5kKHN0b3JlLmEsIGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICB9KTtcbn07XG5VbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KSByZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KSBlbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2UgdGhpcy5hLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSxcbiAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYgKH5pbmRleCkgdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuICEhfmluZGV4O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGlkKys7ICAgICAgLy8gY29sbGVjdGlvbiBpZFxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgLy8gbGVhayBzdG9yZSBmb3IgdW5jYXVnaHQgZnJvemVuIG9iamVjdHNcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIE5BTUUpKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKSAmJiBkZWxldGUgZGF0YVt0aGlzLl9pXTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIE5BTUUpKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBkYXRhID0gZ2V0V2Vhayhhbk9iamVjdChrZXkpLCB0cnVlKTtcbiAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXdlYWsuanNcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHdlYWsgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBXRUFLX1NFVCA9ICdXZWFrU2V0JztcblxuLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcbnJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShXRUFLX1NFVCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha1NldCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjQuMy4xIFdlYWtTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gd2Vhay5kZWYodmFsaWRhdGUodGhpcywgV0VBS19TRVQpLCB2YWx1ZSwgdHJ1ZSk7XG4gIH1cbn0sIHdlYWssIGZhbHNlLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHR5cGVkID0gcmVxdWlyZSgnLi9fdHlwZWQnKTtcbnZhciBidWZmZXIgPSByZXF1aXJlKCcuL190eXBlZC1idWZmZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIEFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuQXJyYXlCdWZmZXI7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyICRBcnJheUJ1ZmZlciA9IGJ1ZmZlci5BcnJheUJ1ZmZlcjtcbnZhciAkRGF0YVZpZXcgPSBidWZmZXIuRGF0YVZpZXc7XG52YXIgJGlzVmlldyA9ICR0eXBlZC5BQlYgJiYgQXJyYXlCdWZmZXIuaXNWaWV3O1xudmFyICRzbGljZSA9ICRBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2U7XG52YXIgVklFVyA9ICR0eXBlZC5WSUVXO1xudmFyIEFSUkFZX0JVRkZFUiA9ICdBcnJheUJ1ZmZlcic7XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEFycmF5QnVmZmVyICE9PSAkQXJyYXlCdWZmZXIpLCB7IEFycmF5QnVmZmVyOiAkQXJyYXlCdWZmZXIgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISR0eXBlZC5DT05TVFIsIEFSUkFZX0JVRkZFUiwge1xuICAvLyAyNC4xLjMuMSBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJnKVxuICBpc1ZpZXc6IGZ1bmN0aW9uIGlzVmlldyhpdCkge1xuICAgIHJldHVybiAkaXNWaWV3ICYmICRpc1ZpZXcoaXQpIHx8IGlzT2JqZWN0KGl0KSAmJiBWSUVXIGluIGl0O1xuICB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlUgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICFuZXcgJEFycmF5QnVmZmVyKDIpLnNsaWNlKDEsIHVuZGVmaW5lZCkuYnl0ZUxlbmd0aDtcbn0pLCBBUlJBWV9CVUZGRVIsIHtcbiAgLy8gMjQuMS40LjMgQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgaWYgKCRzbGljZSAhPT0gdW5kZWZpbmVkICYmIGVuZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJHNsaWNlLmNhbGwoYW5PYmplY3QodGhpcyksIHN0YXJ0KTsgLy8gRkYgZml4XG4gICAgdmFyIGxlbiA9IGFuT2JqZWN0KHRoaXMpLmJ5dGVMZW5ndGg7XG4gICAgdmFyIGZpcnN0ID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW4pO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQsIGxlbik7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRBcnJheUJ1ZmZlcikpKHRvTGVuZ3RoKGZpbiAtIGZpcnN0KSk7XG4gICAgdmFyIHZpZXdTID0gbmV3ICREYXRhVmlldyh0aGlzKTtcbiAgICB2YXIgdmlld1QgPSBuZXcgJERhdGFWaWV3KHJlc3VsdCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB3aGlsZSAoZmlyc3QgPCBmaW4pIHtcbiAgICAgIHZpZXdULnNldFVpbnQ4KGluZGV4KyssIHZpZXdTLmdldFVpbnQ4KGZpcnN0KyspKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKEFSUkFZX0JVRkZFUik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgVFlQRUQgPSB1aWQoJ3R5cGVkX2FycmF5Jyk7XG52YXIgVklFVyA9IHVpZCgndmlldycpO1xudmFyIEFCViA9ICEhKGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBnbG9iYWwuRGF0YVZpZXcpO1xudmFyIENPTlNUUiA9IEFCVjtcbnZhciBpID0gMDtcbnZhciBsID0gOTtcbnZhciBUeXBlZDtcblxudmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnMgPSAoXG4gICdJbnQ4QXJyYXksVWludDhBcnJheSxVaW50OENsYW1wZWRBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheSdcbikuc3BsaXQoJywnKTtcblxud2hpbGUgKGkgPCBsKSB7XG4gIGlmIChUeXBlZCA9IGdsb2JhbFtUeXBlZEFycmF5Q29uc3RydWN0b3JzW2krK11dKSB7XG4gICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFRZUEVELCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG4gIH0gZWxzZSBDT05TVFIgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFCVjogQUJWLFxuICBDT05TVFI6IENPTlNUUixcbiAgVFlQRUQ6IFRZUEVELFxuICBWSUVXOiBWSUVXXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICR0eXBlZCA9IHJlcXVpcmUoJy4vX3R5cGVkJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBhcnJheUZpbGwgPSByZXF1aXJlKCcuL19hcnJheS1maWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEFSUkFZX0JVRkZFUiA9ICdBcnJheUJ1ZmZlcic7XG52YXIgREFUQV9WSUVXID0gJ0RhdGFWaWV3JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBXUk9OR19MRU5HVEggPSAnV3JvbmcgbGVuZ3RoISc7XG52YXIgV1JPTkdfSU5ERVggPSAnV3JvbmcgaW5kZXghJztcbnZhciAkQXJyYXlCdWZmZXIgPSBnbG9iYWxbQVJSQVlfQlVGRkVSXTtcbnZhciAkRGF0YVZpZXcgPSBnbG9iYWxbREFUQV9WSUVXXTtcbnZhciBNYXRoID0gZ2xvYmFsLk1hdGg7XG52YXIgUmFuZ2VFcnJvciA9IGdsb2JhbC5SYW5nZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG52YXIgSW5maW5pdHkgPSBnbG9iYWwuSW5maW5pdHk7XG52YXIgQmFzZUJ1ZmZlciA9ICRBcnJheUJ1ZmZlcjtcbnZhciBhYnMgPSBNYXRoLmFicztcbnZhciBwb3cgPSBNYXRoLnBvdztcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgbG9nID0gTWF0aC5sb2c7XG52YXIgTE4yID0gTWF0aC5MTjI7XG52YXIgQlVGRkVSID0gJ2J1ZmZlcic7XG52YXIgQllURV9MRU5HVEggPSAnYnl0ZUxlbmd0aCc7XG52YXIgQllURV9PRkZTRVQgPSAnYnl0ZU9mZnNldCc7XG52YXIgJEJVRkZFUiA9IERFU0NSSVBUT1JTID8gJ19iJyA6IEJVRkZFUjtcbnZhciAkTEVOR1RIID0gREVTQ1JJUFRPUlMgPyAnX2wnIDogQllURV9MRU5HVEg7XG52YXIgJE9GRlNFVCA9IERFU0NSSVBUT1JTID8gJ19vJyA6IEJZVEVfT0ZGU0VUO1xuXG4vLyBJRUVFNzU0IGNvbnZlcnNpb25zIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvaWVlZTc1NFxuZnVuY3Rpb24gcGFja0lFRUU3NTQodmFsdWUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgYnVmZmVyID0gbmV3IEFycmF5KG5CeXRlcyk7XG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxO1xuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgcnQgPSBtTGVuID09PSAyMyA/IHBvdygyLCAtMjQpIC0gcG93KDIsIC03NykgOiAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBzID0gdmFsdWUgPCAwIHx8IHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDAgPyAxIDogMDtcbiAgdmFyIGUsIG0sIGM7XG4gIHZhbHVlID0gYWJzKHZhbHVlKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICBpZiAodmFsdWUgIT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIG0gPSB2YWx1ZSAhPSB2YWx1ZSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBmbG9vcihsb2codmFsdWUpIC8gTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IHBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBwb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogcG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogcG93KDIsIGVCaWFzIC0gMSkgKiBwb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW2krK10gPSBtICYgMjU1LCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcbiAgZSA9IGUgPDwgbUxlbiB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbaSsrXSA9IGUgJiAyNTUsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuICBidWZmZXJbLS1pXSB8PSBzICogMTI4O1xuICByZXR1cm4gYnVmZmVyO1xufVxuZnVuY3Rpb24gdW5wYWNrSUVFRTc1NChidWZmZXIsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMTtcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDE7XG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMTtcbiAgdmFyIG5CaXRzID0gZUxlbiAtIDc7XG4gIHZhciBpID0gbkJ5dGVzIC0gMTtcbiAgdmFyIHMgPSBidWZmZXJbaS0tXTtcbiAgdmFyIGUgPSBzICYgMTI3O1xuICB2YXIgbTtcbiAgcyA+Pj0gNztcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG4gIG0gPSBlICYgKDEgPDwgLW5CaXRzKSAtIDE7XG4gIGUgPj49IC1uQml0cztcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiBzID8gLUluZmluaXR5IDogSW5maW5pdHk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBwb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfSByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIHBvdygyLCBlIC0gbUxlbik7XG59XG5cbmZ1bmN0aW9uIHVucGFja0kzMihieXRlcykge1xuICByZXR1cm4gYnl0ZXNbM10gPDwgMjQgfCBieXRlc1syXSA8PCAxNiB8IGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXTtcbn1cbmZ1bmN0aW9uIHBhY2tJOChpdCkge1xuICByZXR1cm4gW2l0ICYgMHhmZl07XG59XG5mdW5jdGlvbiBwYWNrSTE2KGl0KSB7XG4gIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZl07XG59XG5mdW5jdGlvbiBwYWNrSTMyKGl0KSB7XG4gIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZiwgaXQgPj4gMTYgJiAweGZmLCBpdCA+PiAyNCAmIDB4ZmZdO1xufVxuZnVuY3Rpb24gcGFja0Y2NChpdCkge1xuICByZXR1cm4gcGFja0lFRUU3NTQoaXQsIDUyLCA4KTtcbn1cbmZ1bmN0aW9uIHBhY2tGMzIoaXQpIHtcbiAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCAyMywgNCk7XG59XG5cbmZ1bmN0aW9uIGFkZEdldHRlcihDLCBrZXksIGludGVybmFsKSB7XG4gIGRQKENbUFJPVE9UWVBFXSwga2V5LCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpc1tpbnRlcm5hbF07IH0gfSk7XG59XG5cbmZ1bmN0aW9uIGdldCh2aWV3LCBieXRlcywgaW5kZXgsIGlzTGl0dGxlRW5kaWFuKSB7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleDtcbiAgdmFyIGludEluZGV4ID0gdG9JbmRleChudW1JbmRleCk7XG4gIGlmIChpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSkgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2I7XG4gIHZhciBzdGFydCA9IGludEluZGV4ICsgdmlld1skT0ZGU0VUXTtcbiAgdmFyIHBhY2sgPSBzdG9yZS5zbGljZShzdGFydCwgc3RhcnQgKyBieXRlcyk7XG4gIHJldHVybiBpc0xpdHRsZUVuZGlhbiA/IHBhY2sgOiBwYWNrLnJldmVyc2UoKTtcbn1cbmZ1bmN0aW9uIHNldCh2aWV3LCBieXRlcywgaW5kZXgsIGNvbnZlcnNpb24sIHZhbHVlLCBpc0xpdHRsZUVuZGlhbikge1xuICB2YXIgbnVtSW5kZXggPSAraW5kZXg7XG4gIHZhciBpbnRJbmRleCA9IHRvSW5kZXgobnVtSW5kZXgpO1xuICBpZiAoaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfSU5ERVgpO1xuICB2YXIgc3RvcmUgPSB2aWV3WyRCVUZGRVJdLl9iO1xuICB2YXIgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF07XG4gIHZhciBwYWNrID0gY29udmVyc2lvbigrdmFsdWUpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzOyBpKyspIHN0b3JlW3N0YXJ0ICsgaV0gPSBwYWNrW2lzTGl0dGxlRW5kaWFuID8gaSA6IGJ5dGVzIC0gaSAtIDFdO1xufVxuXG5pZiAoISR0eXBlZC5BQlYpIHtcbiAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG4gICAgdmFyIGJ5dGVMZW5ndGggPSB0b0luZGV4KGxlbmd0aCk7XG4gICAgdGhpcy5fYiA9IGFycmF5RmlsbC5jYWxsKG5ldyBBcnJheShieXRlTGVuZ3RoKSwgMCk7XG4gICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG4gIH07XG5cbiAgJERhdGFWaWV3ID0gZnVuY3Rpb24gRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkRGF0YVZpZXcsIERBVEFfVklFVyk7XG4gICAgYW5JbnN0YW5jZShidWZmZXIsICRBcnJheUJ1ZmZlciwgREFUQV9WSUVXKTtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYnVmZmVyWyRMRU5HVEhdO1xuICAgIHZhciBvZmZzZXQgPSB0b0ludGVnZXIoYnl0ZU9mZnNldCk7XG4gICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gYnVmZmVyTGVuZ3RoKSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG4gICAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckxlbmd0aCAtIG9mZnNldCA6IHRvTGVuZ3RoKGJ5dGVMZW5ndGgpO1xuICAgIGlmIChvZmZzZXQgKyBieXRlTGVuZ3RoID4gYnVmZmVyTGVuZ3RoKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgdGhpc1skQlVGRkVSXSA9IGJ1ZmZlcjtcbiAgICB0aGlzWyRPRkZTRVRdID0gb2Zmc2V0O1xuICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGFkZEdldHRlcigkQXJyYXlCdWZmZXIsIEJZVEVfTEVOR1RILCAnX2wnKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCVUZGRVIsICdfYicpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfTEVOR1RILCAnX2wnKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCWVRFX09GRlNFVCwgJ19vJyk7XG4gIH1cblxuICByZWRlZmluZUFsbCgkRGF0YVZpZXdbUFJPVE9UWVBFXSwge1xuICAgIGdldEludDg6IGZ1bmN0aW9uIGdldEludDgoYnl0ZU9mZnNldCkge1xuICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXSA8PCAyNCA+PiAyNDtcbiAgICB9LFxuICAgIGdldFVpbnQ4OiBmdW5jdGlvbiBnZXRVaW50OChieXRlT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MTY6IGZ1bmN0aW9uIGdldEludDE2KGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuICAgICAgcmV0dXJuIChieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF0pIDw8IDE2ID4+IDE2O1xuICAgIH0sXG4gICAgZ2V0VWludDE2OiBmdW5jdGlvbiBnZXRVaW50MTYoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSk7XG4gICAgICByZXR1cm4gYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MzI6IGZ1bmN0aW9uIGdldEludDMyKGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpO1xuICAgIH0sXG4gICAgZ2V0VWludDMyOiBmdW5jdGlvbiBnZXRVaW50MzIoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSkgPj4+IDA7XG4gICAgfSxcbiAgICBnZXRGbG9hdDMyOiBmdW5jdGlvbiBnZXRGbG9hdDMyKGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCAyMywgNCk7XG4gICAgfSxcbiAgICBnZXRGbG9hdDY0OiBmdW5jdGlvbiBnZXRGbG9hdDY0KGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCA1MiwgOCk7XG4gICAgfSxcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldEludDE2OiBmdW5jdGlvbiBzZXRJbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0VWludDE2OiBmdW5jdGlvbiBzZXRVaW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEludDMyOiBmdW5jdGlvbiBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0VWludDMyOiBmdW5jdGlvbiBzZXRVaW50MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSTMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEZsb2F0MzI6IGZ1bmN0aW9uIHNldEZsb2F0MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrRjMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEZsb2F0NjQ6IGZ1bmN0aW9uIHNldEZsb2F0NjQoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBwYWNrRjY0LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgaWYgKCFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgJEFycmF5QnVmZmVyKDEpO1xuICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyAkQXJyYXlCdWZmZXIoLTEpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICB9KSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3ICRBcnJheUJ1ZmZlcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5ldyAkQXJyYXlCdWZmZXIoMS41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBuZXcgJEFycmF5QnVmZmVyKE5hTik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgcmV0dXJuICRBcnJheUJ1ZmZlci5uYW1lICE9IEFSUkFZX0JVRkZFUjtcbiAgfSkpIHtcbiAgICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhpcywgJEFycmF5QnVmZmVyKTtcbiAgICAgIHJldHVybiBuZXcgQmFzZUJ1ZmZlcih0b0luZGV4KGxlbmd0aCkpO1xuICAgIH07XG4gICAgdmFyIEFycmF5QnVmZmVyUHJvdG8gPSAkQXJyYXlCdWZmZXJbUFJPVE9UWVBFXSA9IEJhc2VCdWZmZXJbUFJPVE9UWVBFXTtcbiAgICBmb3IgKHZhciBrZXlzID0gZ09QTihCYXNlQnVmZmVyKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOykge1xuICAgICAgaWYgKCEoKGtleSA9IGtleXNbaisrXSkgaW4gJEFycmF5QnVmZmVyKSkgaGlkZSgkQXJyYXlCdWZmZXIsIGtleSwgQmFzZUJ1ZmZlcltrZXldKTtcbiAgICB9XG4gICAgaWYgKCFMSUJSQVJZKSBBcnJheUJ1ZmZlclByb3RvLmNvbnN0cnVjdG9yID0gJEFycmF5QnVmZmVyO1xuICB9XG4gIC8vIGlPUyBTYWZhcmkgNy54IGJ1Z1xuICB2YXIgdmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSk7XG4gIHZhciAkc2V0SW50OCA9ICREYXRhVmlld1tQUk9UT1RZUEVdLnNldEludDg7XG4gIHZpZXcuc2V0SW50OCgwLCAyMTQ3NDgzNjQ4KTtcbiAgdmlldy5zZXRJbnQ4KDEsIDIxNDc0ODM2NDkpO1xuICBpZiAodmlldy5nZXRJbnQ4KDApIHx8ICF2aWV3LmdldEludDgoMSkpIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgJHNldEludDguY2FsbCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG59XG5zZXRUb1N0cmluZ1RhZygkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG5zZXRUb1N0cmluZ1RhZygkRGF0YVZpZXcsIERBVEFfVklFVyk7XG5oaWRlKCREYXRhVmlld1tQUk9UT1RZUEVdLCAkdHlwZWQuVklFVywgdHJ1ZSk7XG5leHBvcnRzW0FSUkFZX0JVRkZFUl0gPSAkQXJyYXlCdWZmZXI7XG5leHBvcnRzW0RBVEFfVklFV10gPSAkRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC1idWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbmRleFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09PSB1bmRlZmluZWQpIHJldHVybiAwO1xuICB2YXIgbnVtYmVyID0gdG9JbnRlZ2VyKGl0KTtcbiAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKG51bWJlcik7XG4gIGlmIChudW1iZXIgIT09IGxlbmd0aCkgdGhyb3cgUmFuZ2VFcnJvcignV3JvbmcgbGVuZ3RoIScpO1xuICByZXR1cm4gbGVuZ3RoO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL190eXBlZCcpLkFCViwge1xuICBEYXRhVmlldzogcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJykuRGF0YVZpZXdcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0ludDgnLCAxLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gSW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDgtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykpIHtcbiAgdmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG4gIHZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbiAgdmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbiAgdmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiAgdmFyICR0eXBlZCA9IHJlcXVpcmUoJy4vX3R5cGVkJyk7XG4gIHZhciAkYnVmZmVyID0gcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJyk7XG4gIHZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbiAgdmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xuICB2YXIgcHJvcGVydHlEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuICB2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbiAgdmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG4gIHZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG4gIHZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuICB2YXIgdG9JbmRleCA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG4gIHZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xuICB2YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbiAgdmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xuICB2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbiAgdmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4gIHZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xuICB2YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG4gIHZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG4gIHZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbiAgdmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG4gIHZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuICB2YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG4gIHZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbiAgdmFyIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpO1xuICB2YXIgY3JlYXRlQXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJyk7XG4gIHZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG4gIHZhciBBcnJheUl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG4gIHZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbiAgdmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbiAgdmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xuICB2YXIgYXJyYXlGaWxsID0gcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpO1xuICB2YXIgYXJyYXlDb3B5V2l0aGluID0gcmVxdWlyZSgnLi9fYXJyYXktY29weS13aXRoaW4nKTtcbiAgdmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xuICB2YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xuICB2YXIgZFAgPSAkRFAuZjtcbiAgdmFyIGdPUEQgPSAkR09QRC5mO1xuICB2YXIgUmFuZ2VFcnJvciA9IGdsb2JhbC5SYW5nZUVycm9yO1xuICB2YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbiAgdmFyIFVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheTtcbiAgdmFyIEFSUkFZX0JVRkZFUiA9ICdBcnJheUJ1ZmZlcic7XG4gIHZhciBTSEFSRURfQlVGRkVSID0gJ1NoYXJlZCcgKyBBUlJBWV9CVUZGRVI7XG4gIHZhciBCWVRFU19QRVJfRUxFTUVOVCA9ICdCWVRFU19QRVJfRUxFTUVOVCc7XG4gIHZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheVtQUk9UT1RZUEVdO1xuICB2YXIgJEFycmF5QnVmZmVyID0gJGJ1ZmZlci5BcnJheUJ1ZmZlcjtcbiAgdmFyICREYXRhVmlldyA9ICRidWZmZXIuRGF0YVZpZXc7XG4gIHZhciBhcnJheUZvckVhY2ggPSBjcmVhdGVBcnJheU1ldGhvZCgwKTtcbiAgdmFyIGFycmF5RmlsdGVyID0gY3JlYXRlQXJyYXlNZXRob2QoMik7XG4gIHZhciBhcnJheVNvbWUgPSBjcmVhdGVBcnJheU1ldGhvZCgzKTtcbiAgdmFyIGFycmF5RXZlcnkgPSBjcmVhdGVBcnJheU1ldGhvZCg0KTtcbiAgdmFyIGFycmF5RmluZCA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpO1xuICB2YXIgYXJyYXlGaW5kSW5kZXggPSBjcmVhdGVBcnJheU1ldGhvZCg2KTtcbiAgdmFyIGFycmF5SW5jbHVkZXMgPSBjcmVhdGVBcnJheUluY2x1ZGVzKHRydWUpO1xuICB2YXIgYXJyYXlJbmRleE9mID0gY3JlYXRlQXJyYXlJbmNsdWRlcyhmYWxzZSk7XG4gIHZhciBhcnJheVZhbHVlcyA9IEFycmF5SXRlcmF0b3JzLnZhbHVlcztcbiAgdmFyIGFycmF5S2V5cyA9IEFycmF5SXRlcmF0b3JzLmtleXM7XG4gIHZhciBhcnJheUVudHJpZXMgPSBBcnJheUl0ZXJhdG9ycy5lbnRyaWVzO1xuICB2YXIgYXJyYXlMYXN0SW5kZXhPZiA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2Y7XG4gIHZhciBhcnJheVJlZHVjZSA9IEFycmF5UHJvdG8ucmVkdWNlO1xuICB2YXIgYXJyYXlSZWR1Y2VSaWdodCA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHQ7XG4gIHZhciBhcnJheUpvaW4gPSBBcnJheVByb3RvLmpvaW47XG4gIHZhciBhcnJheVNvcnQgPSBBcnJheVByb3RvLnNvcnQ7XG4gIHZhciBhcnJheVNsaWNlID0gQXJyYXlQcm90by5zbGljZTtcbiAgdmFyIGFycmF5VG9TdHJpbmcgPSBBcnJheVByb3RvLnRvU3RyaW5nO1xuICB2YXIgYXJyYXlUb0xvY2FsZVN0cmluZyA9IEFycmF5UHJvdG8udG9Mb2NhbGVTdHJpbmc7XG4gIHZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbiAgdmFyIFRBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbiAgdmFyIFRZUEVEX0NPTlNUUlVDVE9SID0gdWlkKCd0eXBlZF9jb25zdHJ1Y3RvcicpO1xuICB2YXIgREVGX0NPTlNUUlVDVE9SID0gdWlkKCdkZWZfY29uc3RydWN0b3InKTtcbiAgdmFyIEFMTF9DT05TVFJVQ1RPUlMgPSAkdHlwZWQuQ09OU1RSO1xuICB2YXIgVFlQRURfQVJSQVkgPSAkdHlwZWQuVFlQRUQ7XG4gIHZhciBWSUVXID0gJHR5cGVkLlZJRVc7XG4gIHZhciBXUk9OR19MRU5HVEggPSAnV3JvbmcgbGVuZ3RoISc7XG5cbiAgdmFyICRtYXAgPSBjcmVhdGVBcnJheU1ldGhvZCgxLCBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGFsbG9jYXRlKHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsZW5ndGgpO1xuICB9KTtcblxuICB2YXIgTElUVExFX0VORElBTiA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3IFVpbnQxNkFycmF5KFsxXSkuYnVmZmVyKVswXSA9PT0gMTtcbiAgfSk7XG5cbiAgdmFyIEZPUkNFRF9TRVQgPSAhIVVpbnQ4QXJyYXkgJiYgISFVaW50OEFycmF5W1BST1RPVFlQRV0uc2V0ICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgVWludDhBcnJheSgxKS5zZXQoe30pO1xuICB9KTtcblxuICB2YXIgdG9PZmZzZXQgPSBmdW5jdGlvbiAoaXQsIEJZVEVTKSB7XG4gICAgdmFyIG9mZnNldCA9IHRvSW50ZWdlcihpdCk7XG4gICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICUgQllURVMpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9O1xuXG4gIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmIChpc09iamVjdChpdCkgJiYgVFlQRURfQVJSQVkgaW4gaXQpIHJldHVybiBpdDtcbiAgICB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIHR5cGVkIGFycmF5IScpO1xuICB9O1xuXG4gIHZhciBhbGxvY2F0ZSA9IGZ1bmN0aW9uIChDLCBsZW5ndGgpIHtcbiAgICBpZiAoIShpc09iamVjdChDKSAmJiBUWVBFRF9DT05TVFJVQ1RPUiBpbiBDKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJdCBpcyBub3QgYSB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvciEnKTtcbiAgICB9IHJldHVybiBuZXcgQyhsZW5ndGgpO1xuICB9O1xuXG4gIHZhciBzcGVjaWVzRnJvbUxpc3QgPSBmdW5jdGlvbiAoTywgbGlzdCkge1xuICAgIHJldHVybiBmcm9tTGlzdChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGlzdCk7XG4gIH07XG5cbiAgdmFyIGZyb21MaXN0ID0gZnVuY3Rpb24gKEMsIGxpc3QpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gYWxsb2NhdGUoQywgbGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uIChpdCwga2V5LCBpbnRlcm5hbCkge1xuICAgIGRQKGl0LCBrZXksIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kW2ludGVybmFsXTsgfSB9KTtcbiAgfTtcblxuICB2YXIgJGZyb20gPSBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcGZuLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChzb3VyY2UpO1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgaSwgbGVuZ3RoLCB2YWx1ZXMsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIWlzQXJyYXlJdGVyKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgdmFsdWVzID0gW10sIGkgPSAwOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGkrKykge1xuICAgICAgICB2YWx1ZXMucHVzaChzdGVwLnZhbHVlKTtcbiAgICAgIH0gTyA9IHZhbHVlcztcbiAgICB9XG4gICAgaWYgKG1hcHBpbmcgJiYgYUxlbiA+IDIpIG1hcGZuID0gY3R4KG1hcGZuLCBhcmd1bWVudHNbMl0sIDIpO1xuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTsgbGVuZ3RoID4gaTsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gPSBtYXBwaW5nID8gbWFwZm4oT1tpXSwgaSkgOiBPW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciAkb2YgPSBmdW5jdGlvbiBvZigvKiAuLi5pdGVtcyAqLykge1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSByZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gaU9TIFNhZmFyaSA2LnggZmFpbHMgaGVyZVxuICB2YXIgVE9fTE9DQUxFX0JVRyA9ICEhVWludDhBcnJheSAmJiBmYWlscyhmdW5jdGlvbiAoKSB7IGFycmF5VG9Mb2NhbGVTdHJpbmcuY2FsbChuZXcgVWludDhBcnJheSgxKSk7IH0pO1xuXG4gIHZhciAkdG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZygpIHtcbiAgICByZXR1cm4gYXJyYXlUb0xvY2FsZVN0cmluZy5hcHBseShUT19MT0NBTEVfQlVHID8gYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpKSA6IHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHZhciBwcm90byA9IHtcbiAgICBjb3B5V2l0aGluOiBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQgLyogLCBlbmQgKi8pIHtcbiAgICAgIHJldHVybiBhcnJheUNvcHlXaXRoaW4uY2FsbCh2YWxpZGF0ZSh0aGlzKSwgdGFyZ2V0LCBzdGFydCwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgICByZXR1cm4gYXJyYXlFdmVyeSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZmlsbDogZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiAsIHN0YXJ0LCBlbmQgKi8pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5RmlsbC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgICByZXR1cm4gc3BlY2llc0Zyb21MaXN0KHRoaXMsIGFycmF5RmlsdGVyKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLFxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCkpO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gZmluZChwcmVkaWNhdGUgLyogLCB0aGlzQXJnICovKSB7XG4gICAgICByZXR1cm4gYXJyYXlGaW5kKHZhbGlkYXRlKHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KHByZWRpY2F0ZSAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICAgIHJldHVybiBhcnJheUZpbmRJbmRleCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgICBhcnJheUZvckVhY2godmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCAqLykge1xuICAgICAgcmV0dXJuIGFycmF5SW5kZXhPZih2YWxpZGF0ZSh0aGlzKSwgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggKi8pIHtcbiAgICAgIHJldHVybiBhcnJheUluY2x1ZGVzKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlKb2luLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggKi8pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5TGFzdEluZGV4T2YuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uIG1hcChtYXBmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICAgIHJldHVybiAkbWFwKHZhbGlkYXRlKHRoaXMpLCBtYXBmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlSZWR1Y2UuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICByZWR1Y2VSaWdodDogZnVuY3Rpb24gcmVkdWNlUmlnaHQoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlSZWR1Y2VSaWdodC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIgbGVuZ3RoID0gdmFsaWRhdGUodGhhdCkubGVuZ3RoO1xuICAgICAgdmFyIG1pZGRsZSA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgd2hpbGUgKGluZGV4IDwgbWlkZGxlKSB7XG4gICAgICAgIHZhbHVlID0gdGhhdFtpbmRleF07XG4gICAgICAgIHRoYXRbaW5kZXgrK10gPSB0aGF0Wy0tbGVuZ3RoXTtcbiAgICAgICAgdGhhdFtsZW5ndGhdID0gdmFsdWU7XG4gICAgICB9IHJldHVybiB0aGF0O1xuICAgIH0sXG4gICAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgICAgcmV0dXJuIGFycmF5U29tZSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICAgIHJldHVybiBhcnJheVNvcnQuY2FsbCh2YWxpZGF0ZSh0aGlzKSwgY29tcGFyZWZuKTtcbiAgICB9LFxuICAgIHN1YmFycmF5OiBmdW5jdGlvbiBzdWJhcnJheShiZWdpbiwgZW5kKSB7XG4gICAgICB2YXIgTyA9IHZhbGlkYXRlKHRoaXMpO1xuICAgICAgdmFyIGxlbmd0aCA9IE8ubGVuZ3RoO1xuICAgICAgdmFyICRiZWdpbiA9IHRvQWJzb2x1dGVJbmRleChiZWdpbiwgbGVuZ3RoKTtcbiAgICAgIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pKShcbiAgICAgICAgTy5idWZmZXIsXG4gICAgICAgIE8uYnl0ZU9mZnNldCArICRiZWdpbiAqIE8uQllURVNfUEVSX0VMRU1FTlQsXG4gICAgICAgIHRvTGVuZ3RoKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbmd0aCkpIC0gJGJlZ2luKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyICRzbGljZSA9IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gc3BlY2llc0Zyb21MaXN0KHRoaXMsIGFycmF5U2xpY2UuY2FsbCh2YWxpZGF0ZSh0aGlzKSwgc3RhcnQsIGVuZCkpO1xuICB9O1xuXG4gIHZhciAkc2V0ID0gZnVuY3Rpb24gc2V0KGFycmF5TGlrZSAvKiAsIG9mZnNldCAqLykge1xuICAgIHZhbGlkYXRlKHRoaXMpO1xuICAgIHZhciBvZmZzZXQgPSB0b09mZnNldChhcmd1bWVudHNbMV0sIDEpO1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICB2YXIgc3JjID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgoc3JjLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBpZiAobGVuICsgb2Zmc2V0ID4gbGVuZ3RoKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgd2hpbGUgKGluZGV4IDwgbGVuKSB0aGlzW29mZnNldCArIGluZGV4XSA9IHNyY1tpbmRleCsrXTtcbiAgfTtcblxuICB2YXIgJGl0ZXJhdG9ycyA9IHtcbiAgICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgcmV0dXJuIGFycmF5RW50cmllcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9LFxuICAgIGtleXM6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gYXJyYXlLZXlzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH0sXG4gICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICByZXR1cm4gYXJyYXlWYWx1ZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpc1RBSW5kZXggPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGFyZ2V0KVxuICAgICAgJiYgdGFyZ2V0W1RZUEVEX0FSUkFZXVxuICAgICAgJiYgdHlwZW9mIGtleSAhPSAnc3ltYm9sJ1xuICAgICAgJiYga2V5IGluIHRhcmdldFxuICAgICAgJiYgU3RyaW5nKCtrZXkpID09IFN0cmluZyhrZXkpO1xuICB9O1xuICB2YXIgJGdldERlc2MgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSlcbiAgICAgID8gcHJvcGVydHlEZXNjKDIsIHRhcmdldFtrZXldKVxuICAgICAgOiBnT1BEKHRhcmdldCwga2V5KTtcbiAgfTtcbiAgdmFyICRzZXREZXNjID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICBpZiAoaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSlcbiAgICAgICYmIGlzT2JqZWN0KGRlc2MpXG4gICAgICAmJiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICAgICYmICFoYXMoZGVzYywgJ2dldCcpXG4gICAgICAmJiAhaGFzKGRlc2MsICdzZXQnKVxuICAgICAgLy8gVE9ETzogYWRkIHZhbGlkYXRpb24gZGVzY3JpcHRvciB3L28gY2FsbGluZyBhY2Nlc3NvcnNcbiAgICAgICYmICFkZXNjLmNvbmZpZ3VyYWJsZVxuICAgICAgJiYgKCFoYXMoZGVzYywgJ3dyaXRhYmxlJykgfHwgZGVzYy53cml0YWJsZSlcbiAgICAgICYmICghaGFzKGRlc2MsICdlbnVtZXJhYmxlJykgfHwgZGVzYy5lbnVtZXJhYmxlKVxuICAgICkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBkZXNjLnZhbHVlO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9IHJldHVybiBkUCh0YXJnZXQsIGtleSwgZGVzYyk7XG4gIH07XG5cbiAgaWYgKCFBTExfQ09OU1RSVUNUT1JTKSB7XG4gICAgJEdPUEQuZiA9ICRnZXREZXNjO1xuICAgICREUC5mID0gJHNldERlc2M7XG4gIH1cblxuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFBTExfQ09OU1RSVUNUT1JTLCAnT2JqZWN0Jywge1xuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldERlc2MsXG4gICAgZGVmaW5lUHJvcGVydHk6ICRzZXREZXNjXG4gIH0pO1xuXG4gIGlmIChmYWlscyhmdW5jdGlvbiAoKSB7IGFycmF5VG9TdHJpbmcuY2FsbCh7fSk7IH0pKSB7XG4gICAgYXJyYXlUb1N0cmluZyA9IGFycmF5VG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0aGlzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyICRUeXBlZEFycmF5UHJvdG90eXBlJCA9IHJlZGVmaW5lQWxsKHt9LCBwcm90byk7XG4gIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJGl0ZXJhdG9ycyk7XG4gIGhpZGUoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCBJVEVSQVRPUiwgJGl0ZXJhdG9ycy52YWx1ZXMpO1xuICByZWRlZmluZUFsbCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIHtcbiAgICBzbGljZTogJHNsaWNlLFxuICAgIHNldDogJHNldCxcbiAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gKCkgeyAvKiBub29wICovIH0sXG4gICAgdG9TdHJpbmc6IGFycmF5VG9TdHJpbmcsXG4gICAgdG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZ1xuICB9KTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J1ZmZlcicsICdiJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdieXRlT2Zmc2V0JywgJ28nKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVMZW5ndGgnLCAnbCcpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnbGVuZ3RoJywgJ2UnKTtcbiAgZFAoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCBUQUcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXNbVFlQRURfQVJSQVldOyB9XG4gIH0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtc3RhdGVtZW50c1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIEJZVEVTLCB3cmFwcGVyLCBDTEFNUEVEKSB7XG4gICAgQ0xBTVBFRCA9ICEhQ0xBTVBFRDtcbiAgICB2YXIgTkFNRSA9IEtFWSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5JztcbiAgICB2YXIgR0VUVEVSID0gJ2dldCcgKyBLRVk7XG4gICAgdmFyIFNFVFRFUiA9ICdzZXQnICsgS0VZO1xuICAgIHZhciBUeXBlZEFycmF5ID0gZ2xvYmFsW05BTUVdO1xuICAgIHZhciBCYXNlID0gVHlwZWRBcnJheSB8fCB7fTtcbiAgICB2YXIgVEFDID0gVHlwZWRBcnJheSAmJiBnZXRQcm90b3R5cGVPZihUeXBlZEFycmF5KTtcbiAgICB2YXIgRk9SQ0VEID0gIVR5cGVkQXJyYXkgfHwgISR0eXBlZC5BQlY7XG4gICAgdmFyIE8gPSB7fTtcbiAgICB2YXIgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXkgJiYgVHlwZWRBcnJheVtQUk9UT1RZUEVdO1xuICAgIHZhciBnZXR0ZXIgPSBmdW5jdGlvbiAodGhhdCwgaW5kZXgpIHtcbiAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcbiAgICAgIHJldHVybiBkYXRhLnZbR0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCBMSVRUTEVfRU5ESUFOKTtcbiAgICB9O1xuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiAodGhhdCwgaW5kZXgsIHZhbHVlKSB7XG4gICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG4gICAgICBpZiAoQ0xBTVBFRCkgdmFsdWUgPSAodmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKSkgPCAwID8gMCA6IHZhbHVlID4gMHhmZiA/IDB4ZmYgOiB2YWx1ZSAmIDB4ZmY7XG4gICAgICBkYXRhLnZbU0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCB2YWx1ZSwgTElUVExFX0VORElBTik7XG4gICAgfTtcbiAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uICh0aGF0LCBpbmRleCkge1xuICAgICAgZFAodGhhdCwgaW5kZXgsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGdldHRlcih0aGlzLCBpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHNldHRlcih0aGlzLCBpbmRleCwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIHtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGhhdCwgVHlwZWRBcnJheSwgTkFNRSwgJ19kJyk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgICB2YXIgYnVmZmVyLCBieXRlTGVuZ3RoLCBsZW5ndGgsIGtsYXNzO1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgbGVuZ3RoID0gdG9JbmRleChkYXRhKTtcbiAgICAgICAgICBieXRlTGVuZ3RoID0gbGVuZ3RoICogQllURVM7XG4gICAgICAgICAgYnVmZmVyID0gbmV3ICRBcnJheUJ1ZmZlcihieXRlTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKSB7XG4gICAgICAgICAgYnVmZmVyID0gZGF0YTtcbiAgICAgICAgICBvZmZzZXQgPSB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUyk7XG4gICAgICAgICAgdmFyICRsZW4gPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgaWYgKCRsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCRsZW4gJSBCWVRFUykgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9ICRsZW4gLSBvZmZzZXQ7XG4gICAgICAgICAgICBpZiAoYnl0ZUxlbmd0aCA8IDApIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9IHRvTGVuZ3RoKCRsZW5ndGgpICogQllURVM7XG4gICAgICAgICAgICBpZiAoYnl0ZUxlbmd0aCArIG9mZnNldCA+ICRsZW4pIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVuZ3RoID0gYnl0ZUxlbmd0aCAvIEJZVEVTO1xuICAgICAgICB9IGVsc2UgaWYgKFRZUEVEX0FSUkFZIGluIGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICRmcm9tLmNhbGwoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaGlkZSh0aGF0LCAnX2QnLCB7XG4gICAgICAgICAgYjogYnVmZmVyLFxuICAgICAgICAgIG86IG9mZnNldCxcbiAgICAgICAgICBsOiBieXRlTGVuZ3RoLFxuICAgICAgICAgIGU6IGxlbmd0aCxcbiAgICAgICAgICB2OiBuZXcgJERhdGFWaWV3KGJ1ZmZlcilcbiAgICAgICAgfSk7XG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkgYWRkRWxlbWVudCh0aGF0LCBpbmRleCsrKTtcbiAgICAgIH0pO1xuICAgICAgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IGNyZWF0ZSgkVHlwZWRBcnJheVByb3RvdHlwZSQpO1xuICAgICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBUeXBlZEFycmF5KTtcbiAgICB9IGVsc2UgaWYgKCFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICBUeXBlZEFycmF5KDEpO1xuICAgIH0pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICBuZXcgVHlwZWRBcnJheSgtMSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfSkgfHwgISRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7XG4gICAgICBuZXcgVHlwZWRBcnJheSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgbmV3IFR5cGVkQXJyYXkobnVsbCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICBuZXcgVHlwZWRBcnJheSgxLjUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgbmV3IFR5cGVkQXJyYXkoaXRlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfSwgdHJ1ZSkpIHtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGhhdCwgVHlwZWRBcnJheSwgTkFNRSk7XG4gICAgICAgIHZhciBrbGFzcztcbiAgICAgICAgLy8gYHdzYCBtb2R1bGUgYnVnLCB0ZW1wb3JhcmlseSByZW1vdmUgdmFsaWRhdGlvbiBsZW5ndGggZm9yIFVpbnQ4QXJyYXlcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvcHVsbC82NDVcbiAgICAgICAgaWYgKCFpc09iamVjdChkYXRhKSkgcmV0dXJuIG5ldyBCYXNlKHRvSW5kZXgoZGF0YSkpO1xuICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mICRBcnJheUJ1ZmZlciB8fCAoa2xhc3MgPSBjbGFzc29mKGRhdGEpKSA9PSBBUlJBWV9CVUZGRVIgfHwga2xhc3MgPT0gU0hBUkVEX0JVRkZFUikge1xuICAgICAgICAgIHJldHVybiAkbGVuZ3RoICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpLCAkbGVuZ3RoKVxuICAgICAgICAgICAgOiAkb2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBuZXcgQmFzZShkYXRhLCB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUykpXG4gICAgICAgICAgICAgIDogbmV3IEJhc2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFRZUEVEX0FSUkFZIGluIGRhdGEpIHJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuICRmcm9tLmNhbGwoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIGFycmF5Rm9yRWFjaChUQUMgIT09IEZ1bmN0aW9uLnByb3RvdHlwZSA/IGdPUE4oQmFzZSkuY29uY2F0KGdPUE4oVEFDKSkgOiBnT1BOKEJhc2UpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghKGtleSBpbiBUeXBlZEFycmF5KSkgaGlkZShUeXBlZEFycmF5LCBrZXksIEJhc2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IFR5cGVkQXJyYXlQcm90b3R5cGU7XG4gICAgICBpZiAoIUxJQlJBUlkpIFR5cGVkQXJyYXlQcm90b3R5cGUuY29uc3RydWN0b3IgPSBUeXBlZEFycmF5O1xuICAgIH1cbiAgICB2YXIgJG5hdGl2ZUl0ZXJhdG9yID0gVHlwZWRBcnJheVByb3RvdHlwZVtJVEVSQVRPUl07XG4gICAgdmFyIENPUlJFQ1RfSVRFUl9OQU1FID0gISEkbmF0aXZlSXRlcmF0b3JcbiAgICAgICYmICgkbmF0aXZlSXRlcmF0b3IubmFtZSA9PSAndmFsdWVzJyB8fCAkbmF0aXZlSXRlcmF0b3IubmFtZSA9PSB1bmRlZmluZWQpO1xuICAgIHZhciAkaXRlcmF0b3IgPSAkaXRlcmF0b3JzLnZhbHVlcztcbiAgICBoaWRlKFR5cGVkQXJyYXksIFRZUEVEX0NPTlNUUlVDVE9SLCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRZUEVEX0FSUkFZLCBOQU1FKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgREVGX0NPTlNUUlVDVE9SLCBUeXBlZEFycmF5KTtcblxuICAgIGlmIChDTEFNUEVEID8gbmV3IFR5cGVkQXJyYXkoMSlbVEFHXSAhPSBOQU1FIDogIShUQUcgaW4gVHlwZWRBcnJheVByb3RvdHlwZSkpIHtcbiAgICAgIGRQKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRBRywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5BTUU7IH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIE9bTkFNRV0gPSBUeXBlZEFycmF5O1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoVHlwZWRBcnJheSAhPSBCYXNlKSwgTyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgTkFNRSwge1xuICAgICAgQllURVNfUEVSX0VMRU1FTlQ6IEJZVEVTXG4gICAgfSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgQmFzZS5vZi5jYWxsKFR5cGVkQXJyYXksIDEpOyB9KSwgTkFNRSwge1xuICAgICAgZnJvbTogJGZyb20sXG4gICAgICBvZjogJG9mXG4gICAgfSk7XG5cbiAgICBpZiAoIShCWVRFU19QRVJfRUxFTUVOVCBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSkgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsIE5BTUUsIHByb3RvKTtcblxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFRF9TRVQsIE5BTUUsIHsgc2V0OiAkc2V0IH0pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhQ09SUkVDVF9JVEVSX05BTUUsIE5BTUUsICRpdGVyYXRvcnMpO1xuXG4gICAgaWYgKCFMSUJSQVJZICYmIFR5cGVkQXJyYXlQcm90b3R5cGUudG9TdHJpbmcgIT0gYXJyYXlUb1N0cmluZykgVHlwZWRBcnJheVByb3RvdHlwZS50b1N0cmluZyA9IGFycmF5VG9TdHJpbmc7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIG5ldyBUeXBlZEFycmF5KDEpLnNsaWNlKCk7XG4gICAgfSksIE5BTUUsIHsgc2xpY2U6ICRzbGljZSB9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBbMSwgMl0udG9Mb2NhbGVTdHJpbmcoKSAhPSBuZXcgVHlwZWRBcnJheShbMSwgMl0pLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIFR5cGVkQXJyYXlQcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcuY2FsbChbMSwgMl0pO1xuICAgIH0pKSwgTkFNRSwgeyB0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nIH0pO1xuXG4gICAgSXRlcmF0b3JzW05BTUVdID0gQ09SUkVDVF9JVEVSX05BTUUgPyAkbmF0aXZlSXRlcmF0b3IgOiAkaXRlcmF0b3I7XG4gICAgaWYgKCFMSUJSQVJZICYmICFDT1JSRUNUX0lURVJfTkFNRSkgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBJVEVSQVRPUiwgJGl0ZXJhdG9yKTtcbiAgfTtcbn0gZWxzZSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3R5cGVkLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQ4JywgMSwgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnVWludDgnLCAxLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gVWludDhDbGFtcGVkQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0sIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtY2xhbXBlZC1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdJbnQxNicsIDIsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQxNkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQxNicsIDIsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnSW50MzInLCA0LCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gSW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQzMi1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdVaW50MzInLCA0LCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gVWludDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDMyLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0Zsb2F0MzInLCA0LCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gRmxvYXQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnRmxvYXQ2NCcsIDgsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDY0QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgckFwcGx5ID0gKHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3QgfHwge30pLmFwcGx5O1xudmFyIGZBcHBseSA9IEZ1bmN0aW9uLmFwcGx5O1xuLy8gTVMgRWRnZSBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgckFwcGx5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGFwcGx5OiBmdW5jdGlvbiBhcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCkge1xuICAgIHZhciBUID0gYUZ1bmN0aW9uKHRhcmdldCk7XG4gICAgdmFyIEwgPSBhbk9iamVjdChhcmd1bWVudHNMaXN0KTtcbiAgICByZXR1cm4gckFwcGx5ID8gckFwcGx5KFQsIHRoaXNBcmd1bWVudCwgTCkgOiBmQXBwbHkuY2FsbChULCB0aGlzQXJndW1lbnQsIEwpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanNcbi8vIG1vZHVsZSBpZCA9IDI0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjYuMS4yIFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCBbLCBuZXdUYXJnZXRdKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vX2JpbmQnKTtcbnZhciByQ29uc3RydWN0ID0gKHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3QgfHwge30pLmNvbnN0cnVjdDtcblxuLy8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzIGFuZCBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4vLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG52YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuICEockNvbnN0cnVjdChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xufSk7XG52YXIgQVJHU19CVUcgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByQ29uc3RydWN0KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTkVXX1RBUkdFVF9CVUcgfHwgQVJHU19CVUcpLCAnUmVmbGVjdCcsIHtcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzIC8qICwgbmV3VGFyZ2V0ICovKSB7XG4gICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgYW5PYmplY3QoYXJncyk7XG4gICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG4gICAgaWYgKEFSR1NfQlVHICYmICFORVdfVEFSR0VUX0JVRykgcmV0dXJuIHJDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuICAgIGlmIChUYXJnZXQgPT0gbmV3VGFyZ2V0KSB7XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIG9wdGltaXphdGlvbiBmb3IgMC00IGFyZ3VtZW50c1xuICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0KCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKSgpO1xuICAgIH1cbiAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgcHJvdG8gPSBuZXdUYXJnZXQucHJvdG90eXBlO1xuICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpO1xuICAgIHZhciByZXN1bHQgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanNcbi8vIG1vZHVsZSBpZCA9IDI0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG5cbi8vIE1TIEVkZ2UgaGFzIGJyb2tlbiBSZWZsZWN0LmRlZmluZVByb3BlcnR5IC0gdGhyb3dpbmcgaW5zdGVhZCBvZiByZXR1cm5pbmcgZmFsc2VcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGRQLmYoe30sIDEsIHsgdmFsdWU6IDEgfSksIDEsIHsgdmFsdWU6IDIgfSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKSB7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKHByb3BlcnR5S2V5LCB0cnVlKTtcbiAgICBhbk9iamVjdChhdHRyaWJ1dGVzKTtcbiAgICB0cnkge1xuICAgICAgZFAuZih0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDI0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjYuMS40IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgdmFyIGRlc2MgPSBnT1BEKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgRW51bWVyYXRlID0gZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBhbk9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHZhciBrZXlzID0gdGhpcy5fayA9IFtdOyAgICAgIC8vIGtleXNcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gaXRlcmF0ZWQpIGtleXMucHVzaChrZXkpO1xufTtcbnJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJykoRW51bWVyYXRlLCAnT2JqZWN0JywgZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBrZXlzID0gdGhhdC5faztcbiAgdmFyIGtleTtcbiAgZG8ge1xuICAgIGlmICh0aGF0Ll9pID49IGtleXMubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH0gd2hpbGUgKCEoKGtleSA9IGtleXNbdGhhdC5faSsrXSkgaW4gdGhhdC5fdCkpO1xuICByZXR1cm4geyB2YWx1ZToga2V5LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KSB7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUodGFyZ2V0KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgLyogLCByZWNlaXZlciAqLykge1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXTtcbiAgdmFyIGRlc2MsIHByb3RvO1xuICBpZiAoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpIHJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBpZiAoZGVzYyA9IGdPUEQuZih0YXJnZXQsIHByb3BlcnR5S2V5KSkgcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgID8gZGVzYy52YWx1ZVxuICAgIDogZGVzYy5nZXQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGlmIChpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKSByZXR1cm4gZ2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7IGdldDogZ2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjYuMS43IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgIHJldHVybiBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZ2V0UHJvdG8gPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGdldFByb3RvKGFuT2JqZWN0KHRhcmdldCkpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDI1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gMjYuMS4xMCBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KSB7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICByZXR1cm4gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUodGFyZ2V0KSA6IHRydWU7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDI2LjEuMTEgUmVmbGVjdC5vd25LZXlzKHRhcmdldClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHsgb3duS2V5czogcmVxdWlyZSgnLi9fb3duLWtleXMnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgUmVmbGVjdCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnT1BOLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHJldHVybiBnZXRTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vd24ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyNi4xLjEyIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRwcmV2ZW50RXh0ZW5zaW9ucyA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KSB7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICB0cnkge1xuICAgICAgaWYgKCRwcmV2ZW50RXh0ZW5zaW9ucykgJHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIC8qICwgcmVjZWl2ZXIgKi8pIHtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB0YXJnZXQgOiBhcmd1bWVudHNbM107XG4gIHZhciBvd25EZXNjID0gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgdmFyIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XG4gIGlmICghb3duRGVzYykge1xuICAgIGlmIChpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKSB7XG4gICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBvd25EZXNjID0gY3JlYXRlRGVzYygwKTtcbiAgfVxuICBpZiAoaGFzKG93bkRlc2MsICd2YWx1ZScpKSB7XG4gICAgaWYgKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZXhpc3RpbmdEZXNjcmlwdG9yID0gZ09QRC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkpIHtcbiAgICAgIGlmIChleGlzdGluZ0Rlc2NyaXB0b3IuZ2V0IHx8IGV4aXN0aW5nRGVzY3JpcHRvci5zZXQgfHwgZXhpc3RpbmdEZXNjcmlwdG9yLndyaXRhYmxlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICAgIGRQLmYocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpO1xuICAgIH0gZWxzZSBkUC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgY3JlYXRlRGVzYygwLCBWKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG93bkRlc2Muc2V0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IChvd25EZXNjLnNldC5jYWxsKHJlY2VpdmVyLCBWKSwgdHJ1ZSk7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHsgc2V0OiBzZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qc1xuLy8gbW9kdWxlIGlkID0gMjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyAyNi4xLjE0IFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgc2V0UHJvdG8gPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKTtcblxuaWYgKHNldFByb3RvKSAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHNldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKSB7XG4gICAgc2V0UHJvdG8uY2hlY2sodGFyZ2V0LCBwcm90byk7XG4gICAgdHJ5IHtcbiAgICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1BcnJheS5wcm90b3R5cGUuZmxhdE1hcFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi9fZmxhdHRlbi1pbnRvLWFycmF5Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBmbGF0TWFwOiBmdW5jdGlvbiBmbGF0TWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgc291cmNlTGVuLCBBO1xuICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICBzb3VyY2VMZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICBmbGF0dGVuSW50b0FycmF5KEEsIE8sIE8sIHNvdXJjZUxlbiwgMCwgMSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdmbGF0TWFwJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5mbGF0LW1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1GbGF0dGVuSW50b0FycmF5XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gcmVxdWlyZSgnLi9fd2tzJykoJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuXG5mdW5jdGlvbiBmbGF0dGVuSW50b0FycmF5KHRhcmdldCwgb3JpZ2luYWwsIHNvdXJjZSwgc291cmNlTGVuLCBzdGFydCwgZGVwdGgsIG1hcHBlciwgdGhpc0FyZykge1xuICB2YXIgdGFyZ2V0SW5kZXggPSBzdGFydDtcbiAgdmFyIHNvdXJjZUluZGV4ID0gMDtcbiAgdmFyIG1hcEZuID0gbWFwcGVyID8gY3R4KG1hcHBlciwgdGhpc0FyZywgMykgOiBmYWxzZTtcbiAgdmFyIGVsZW1lbnQsIHNwcmVhZGFibGU7XG5cbiAgd2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG4gICAgaWYgKHNvdXJjZUluZGV4IGluIHNvdXJjZSkge1xuICAgICAgZWxlbWVudCA9IG1hcEZuID8gbWFwRm4oc291cmNlW3NvdXJjZUluZGV4XSwgc291cmNlSW5kZXgsIG9yaWdpbmFsKSA6IHNvdXJjZVtzb3VyY2VJbmRleF07XG5cbiAgICAgIHNwcmVhZGFibGUgPSBmYWxzZTtcbiAgICAgIGlmIChpc09iamVjdChlbGVtZW50KSkge1xuICAgICAgICBzcHJlYWRhYmxlID0gZWxlbWVudFtJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gICAgICAgIHNwcmVhZGFibGUgPSBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3ByZWFkYWJsZSAmJiBkZXB0aCA+IDApIHtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSBmbGF0dGVuSW50b0FycmF5KHRhcmdldCwgb3JpZ2luYWwsIGVsZW1lbnQsIHRvTGVuZ3RoKGVsZW1lbnQubGVuZ3RoKSwgdGFyZ2V0SW5kZXgsIGRlcHRoIC0gMSkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRhcmdldEluZGV4ID49IDB4MWZmZmZmZmZmZmZmZmYpIHRocm93IFR5cGVFcnJvcigpO1xuICAgICAgICB0YXJnZXRbdGFyZ2V0SW5kZXhdID0gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0SW5kZXgrKztcbiAgICB9XG4gICAgc291cmNlSW5kZXgrKztcbiAgfVxuICByZXR1cm4gdGFyZ2V0SW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkludG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZsYXR0ZW4taW50by1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1BcnJheS5wcm90b3R5cGUuZmxhdHRlblxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi9fZmxhdHRlbi1pbnRvLWFycmF5Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBmbGF0dGVuOiBmdW5jdGlvbiBmbGF0dGVuKC8qIGRlcHRoQXJnID0gMSAqLykge1xuICAgIHZhciBkZXB0aEFyZyA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBzb3VyY2VMZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgZmxhdHRlbkludG9BcnJheShBLCBPLCBPLCBzb3VyY2VMZW4sIDAsIGRlcHRoQXJnID09PSB1bmRlZmluZWQgPyAxIDogdG9JbnRlZ2VyKGRlcHRoQXJnKSk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmxhdHRlbicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuZmxhdHRlbi5qc1xuLy8gbW9kdWxlIGlkID0gMjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgYXQ6IGZ1bmN0aW9uIGF0KHBvcykge1xuICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcuYXQuanNcbi8vIG1vZHVsZSBpZCA9IDI2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHBhZCA9IHJlcXVpcmUoJy4vX3N0cmluZy1wYWQnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8yODBcbnZhciBXRUJLSVRfQlVHID0gL1ZlcnNpb25cXC8xMFxcLlxcZCsoXFwuXFxkKyk/KCBNb2JpbGVcXC9cXHcrKT8gU2FmYXJpXFwvLy50ZXN0KHVzZXJBZ2VudCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogV0VCS0lUX0JVRywgJ1N0cmluZycsIHtcbiAgcGFkU3RhcnQ6IGZ1bmN0aW9uIHBhZFN0YXJ0KG1heExlbmd0aCAvKiAsIGZpbGxTdHJpbmcgPSAnICcgKi8pIHtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuL19zdHJpbmctcmVwZWF0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KSB7XG4gIHZhciBTID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICB2YXIgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGg7XG4gIHZhciBmaWxsU3RyID0gZmlsbFN0cmluZyA9PT0gdW5kZWZpbmVkID8gJyAnIDogU3RyaW5nKGZpbGxTdHJpbmcpO1xuICB2YXIgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgaWYgKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGggfHwgZmlsbFN0ciA9PSAnJykgcmV0dXJuIFM7XG4gIHZhciBmaWxsTGVuID0gaW50TWF4TGVuZ3RoIC0gc3RyaW5nTGVuZ3RoO1xuICB2YXIgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuICBpZiAoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pIHN0cmluZ0ZpbGxlciA9IHN0cmluZ0ZpbGxlci5zbGljZSgwLCBmaWxsTGVuKTtcbiAgcmV0dXJuIGxlZnQgPyBzdHJpbmdGaWxsZXIgKyBTIDogUyArIHN0cmluZ0ZpbGxlcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcGFkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRwYWQgPSByZXF1aXJlKCcuL19zdHJpbmctcGFkJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMjgwXG52YXIgV0VCS0lUX0JVRyA9IC9WZXJzaW9uXFwvMTBcXC5cXGQrKFxcLlxcZCspPyggTW9iaWxlXFwvXFx3Kyk/IFNhZmFyaVxcLy8udGVzdCh1c2VyQWdlbnQpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIFdFQktJVF9CVUcsICdTdHJpbmcnLCB7XG4gIHBhZEVuZDogZnVuY3Rpb24gcGFkRW5kKG1heExlbmd0aCAvKiAsIGZpbGxTdHJpbmcgPSAnICcgKi8pIHtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBmYWxzZSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1lbmQuanNcbi8vIG1vZHVsZSBpZCA9IDI2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxucmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKSgndHJpbUxlZnQnLCBmdW5jdGlvbiAoJHRyaW0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1MZWZ0KCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAxKTtcbiAgfTtcbn0sICd0cmltU3RhcnQnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQuanNcbi8vIG1vZHVsZSBpZCA9IDI2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxucmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKSgndHJpbVJpZ2h0JywgZnVuY3Rpb24gKCR0cmltKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltUmlnaHQoKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDIpO1xuICB9O1xufSwgJ3RyaW1FbmQnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vU3RyaW5nLnByb3RvdHlwZS5tYXRjaEFsbC9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgZ2V0RmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIFJlZ0V4cFByb3RvID0gUmVnRXhwLnByb3RvdHlwZTtcblxudmFyICRSZWdFeHBTdHJpbmdJdGVyYXRvciA9IGZ1bmN0aW9uIChyZWdleHAsIHN0cmluZykge1xuICB0aGlzLl9yID0gcmVnZXhwO1xuICB0aGlzLl9zID0gc3RyaW5nO1xufTtcblxucmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKSgkUmVnRXhwU3RyaW5nSXRlcmF0b3IsICdSZWdFeHAgU3RyaW5nJywgZnVuY3Rpb24gbmV4dCgpIHtcbiAgdmFyIG1hdGNoID0gdGhpcy5fci5leGVjKHRoaXMuX3MpO1xuICByZXR1cm4geyB2YWx1ZTogbWF0Y2gsIGRvbmU6IG1hdGNoID09PSBudWxsIH07XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIG1hdGNoQWxsOiBmdW5jdGlvbiBtYXRjaEFsbChyZWdleHApIHtcbiAgICBkZWZpbmVkKHRoaXMpO1xuICAgIGlmICghaXNSZWdFeHAocmVnZXhwKSkgdGhyb3cgVHlwZUVycm9yKHJlZ2V4cCArICcgaXMgbm90IGEgcmVnZXhwIScpO1xuICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgIHZhciBmbGFncyA9ICdmbGFncycgaW4gUmVnRXhwUHJvdG8gPyBTdHJpbmcocmVnZXhwLmZsYWdzKSA6IGdldEZsYWdzLmNhbGwocmVnZXhwKTtcbiAgICB2YXIgcnggPSBuZXcgUmVnRXhwKHJlZ2V4cC5zb3VyY2UsIH5mbGFncy5pbmRleE9mKCdnJykgPyBmbGFncyA6ICdnJyArIGZsYWdzKTtcbiAgICByeC5sYXN0SW5kZXggPSB0b0xlbmd0aChyZWdleHAubGFzdEluZGV4KTtcbiAgICByZXR1cm4gbmV3ICRSZWdFeHBTdHJpbmdJdGVyYXRvcihyeCwgUyk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLm1hdGNoLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMjY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMjcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuL19vd24ta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICAgIHZhciBnZXREZXNjID0gZ09QRC5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXksIGRlc2M7XG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gaSkge1xuICAgICAgZGVzYyA9IGdldERlc2MoTywga2V5ID0ga2V5c1tpKytdKTtcbiAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkge1xuICAgICAga2V5ID0ga2V5c1tpKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBpc0VudW0uY2FsbChPLCBrZXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC10by1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGVudHJpZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpIHtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG5cbi8vIEIuMi4yLjIgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcilcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2RlZmluZUdldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcikge1xuICAgICRkZWZpbmVQcm9wZXJ0eS5mKHRvT2JqZWN0KHRoaXMpLCBQLCB7IGdldDogYUZ1bmN0aW9uKGdldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLWdldHRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIndXNlIHN0cmljdCc7XG4vLyBGb3JjZWQgcmVwbGFjZW1lbnQgcHJvdG90eXBlIGFjY2Vzc29ycyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKSB8fCAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBLID0gTWF0aC5yYW5kb20oKTtcbiAgLy8gSW4gRkYgdGhyb3dzIG9ubHkgZGVmaW5lIG1ldGhvZHNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmLCBuby11c2VsZXNzLWNhbGxcbiAgX19kZWZpbmVTZXR0ZXJfXy5jYWxsKG51bGwsIEssIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG4gIGRlbGV0ZSByZXF1aXJlKCcuL19nbG9iYWwnKVtLXTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWZvcmNlZC1wYW0uanNcbi8vIG1vZHVsZSBpZCA9IDI3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcblxuLy8gQi4yLjIuMyBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fZGVmaW5lU2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKSB7XG4gICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHsgc2V0OiBhRnVuY3Rpb24oc2V0dGVyKSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtc2V0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxuLy8gQi4yLjIuNCBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwR2V0dGVyX18oUClcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2xvb2t1cEdldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cEdldHRlcl9fKFApIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBLID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gICAgdmFyIEQ7XG4gICAgZG8ge1xuICAgICAgaWYgKEQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgSykpIHJldHVybiBELmdldDtcbiAgICB9IHdoaWxlIChPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtZ2V0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxuLy8gQi4yLjIuNSBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwU2V0dGVyX18oUClcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2xvb2t1cFNldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cFNldHRlcl9fKFApIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBLID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gICAgdmFyIEQ7XG4gICAgZG8ge1xuICAgICAgaWYgKEQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgSykpIHJldHVybiBELnNldDtcbiAgICB9IHdoaWxlIChPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtc2V0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSAyODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSkgdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanNcbi8vIG1vZHVsZSBpZCA9IDI4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXIsIElURVJBVE9SKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0JywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSAyODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5vZlxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tb2YnKSgnTWFwJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAub2YuanNcbi8vIG1vZHVsZSBpZCA9IDI4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIEEgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIEFbbGVuZ3RoXSA9IGFyZ3VtZW50c1tsZW5ndGhdO1xuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMjg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1NldCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc2V0Lm9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWttYXAub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1dlYWtNYXAnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LndlYWstbWFwLm9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWtzZXQub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1dlYWtTZXQnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LndlYWstc2V0Lm9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ01hcCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWFwLmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDI5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBmcm9tOiBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBtYXBwaW5nLCBBLCBuLCBjYjtcbiAgICBhRnVuY3Rpb24odGhpcyk7XG4gICAgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG1hcHBpbmcpIGFGdW5jdGlvbihtYXBGbik7XG4gICAgaWYgKHNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBuZXcgdGhpcygpO1xuICAgIEEgPSBbXTtcbiAgICBpZiAobWFwcGluZykge1xuICAgICAgbiA9IDA7XG4gICAgICBjYiA9IGN0eChtYXBGbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuICAgICAgICBBLnB1c2goY2IobmV4dEl0ZW0sIG4rKykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIEEucHVzaCwgQSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXNldC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ1NldCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc2V0LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDI5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha21hcC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ1dlYWtNYXAnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LndlYWstbWFwLmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDI5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha3NldC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ1dlYWtTZXQnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LndlYWstc2V0LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDI5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuRywgeyBnbG9iYWw6IHJlcXVpcmUoJy4vX2dsb2JhbCcpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTeXN0ZW0nLCB7IGdsb2JhbDogcmVxdWlyZSgnLi9fZ2xvYmFsJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zeXN0ZW0uZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtaXMtZXJyb3JcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnRXJyb3InLCB7XG4gIGlzRXJyb3I6IGZ1bmN0aW9uIGlzRXJyb3IoaXQpIHtcbiAgICByZXR1cm4gY29mKGl0KSA9PT0gJ0Vycm9yJztcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5lcnJvci5pcy1lcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gMjk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNsYW1wOiBmdW5jdGlvbiBjbGFtcCh4LCBsb3dlciwgdXBwZXIpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odXBwZXIsIE1hdGgubWF4KGxvd2VyLCB4KSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5jbGFtcC5qc1xuLy8gbW9kdWxlIGlkID0gMjk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IERFR19QRVJfUkFEOiBNYXRoLlBJIC8gMTgwIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5kZWctcGVyLXJhZC5qc1xuLy8gbW9kdWxlIGlkID0gMjk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIFJBRF9QRVJfREVHID0gMTgwIC8gTWF0aC5QSTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBkZWdyZWVzOiBmdW5jdGlvbiBkZWdyZWVzKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIFJBRF9QRVJfREVHO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGguZGVncmVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHNjYWxlID0gcmVxdWlyZSgnLi9fbWF0aC1zY2FsZScpO1xudmFyIGZyb3VuZCA9IHJlcXVpcmUoJy4vX21hdGgtZnJvdW5kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgZnNjYWxlOiBmdW5jdGlvbiBmc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XG4gICAgcmV0dXJuIGZyb3VuZChzY2FsZSh4LCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLmZzY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguc2NhbGUgfHwgZnVuY3Rpb24gc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XG4gIGlmIChcbiAgICBhcmd1bWVudHMubGVuZ3RoID09PSAwXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICB8fCB4ICE9IHhcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIHx8IGluTG93ICE9IGluTG93XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICB8fCBpbkhpZ2ggIT0gaW5IaWdoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICB8fCBvdXRMb3cgIT0gb3V0TG93XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICB8fCBvdXRIaWdoICE9IG91dEhpZ2hcbiAgKSByZXR1cm4gTmFOO1xuICBpZiAoeCA9PT0gSW5maW5pdHkgfHwgeCA9PT0gLUluZmluaXR5KSByZXR1cm4geDtcbiAgcmV0dXJuICh4IC0gaW5Mb3cpICogKG91dEhpZ2ggLSBvdXRMb3cpIC8gKGluSGlnaCAtIGluTG93KSArIG91dExvdztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLXNjYWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGlhZGRoOiBmdW5jdGlvbiBpYWRkaCh4MCwgeDEsIHkwLCB5MSkge1xuICAgIHZhciAkeDAgPSB4MCA+Pj4gMDtcbiAgICB2YXIgJHgxID0geDEgPj4+IDA7XG4gICAgdmFyICR5MCA9IHkwID4+PiAwO1xuICAgIHJldHVybiAkeDEgKyAoeTEgPj4+IDApICsgKCgkeDAgJiAkeTAgfCAoJHgwIHwgJHkwKSAmIH4oJHgwICsgJHkwID4+PiAwKSkgPj4+IDMxKSB8IDA7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pYWRkaC5qc1xuLy8gbW9kdWxlIGlkID0gMzAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBpc3ViaDogZnVuY3Rpb24gaXN1YmgoeDAsIHgxLCB5MCwgeTEpIHtcbiAgICB2YXIgJHgwID0geDAgPj4+IDA7XG4gICAgdmFyICR4MSA9IHgxID4+PiAwO1xuICAgIHZhciAkeTAgPSB5MCA+Pj4gMDtcbiAgICByZXR1cm4gJHgxIC0gKHkxID4+PiAwKSAtICgofiR4MCAmICR5MCB8IH4oJHgwIF4gJHkwKSAmICR4MCAtICR5MCA+Pj4gMCkgPj4+IDMxKSB8IDA7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pc3ViaC5qc1xuLy8gbW9kdWxlIGlkID0gMzA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBpbXVsaDogZnVuY3Rpb24gaW11bGgodSwgdikge1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmY7XG4gICAgdmFyICR1ID0gK3U7XG4gICAgdmFyICR2ID0gK3Y7XG4gICAgdmFyIHUwID0gJHUgJiBVSU5UMTY7XG4gICAgdmFyIHYwID0gJHYgJiBVSU5UMTY7XG4gICAgdmFyIHUxID0gJHUgPj4gMTY7XG4gICAgdmFyIHYxID0gJHYgPj4gMTY7XG4gICAgdmFyIHQgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+PiAxNik7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pbXVsaC5qc1xuLy8gbW9kdWxlIGlkID0gMzA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IFJBRF9QRVJfREVHOiAxODAgLyBNYXRoLlBJIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5yYWQtcGVyLWRlZy5qc1xuLy8gbW9kdWxlIGlkID0gMzA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIERFR19QRVJfUkFEID0gTWF0aC5QSSAvIDE4MDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICByYWRpYW5zOiBmdW5jdGlvbiByYWRpYW5zKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIERFR19QRVJfUkFEO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGgucmFkaWFucy5qc1xuLy8gbW9kdWxlIGlkID0gMzA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IHNjYWxlOiByZXF1aXJlKCcuL19tYXRoLXNjYWxlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLnNjYWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHVtdWxoOiBmdW5jdGlvbiB1bXVsaCh1LCB2KSB7XG4gICAgdmFyIFVJTlQxNiA9IDB4ZmZmZjtcbiAgICB2YXIgJHUgPSArdTtcbiAgICB2YXIgJHYgPSArdjtcbiAgICB2YXIgdTAgPSAkdSAmIFVJTlQxNjtcbiAgICB2YXIgdjAgPSAkdiAmIFVJTlQxNjtcbiAgICB2YXIgdTEgPSAkdSA+Pj4gMTY7XG4gICAgdmFyIHYxID0gJHYgPj4+IDE2O1xuICAgIHZhciB0ID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcbiAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+PiAxNik7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC51bXVsaC5qc1xuLy8gbW9kdWxlIGlkID0gMzA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwOi8vamZiYXN0aWVuLmdpdGh1Yi5pby9wYXBlcnMvTWF0aC5zaWduYml0Lmh0bWxcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHsgc2lnbmJpdDogZnVuY3Rpb24gc2lnbmJpdCh4KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuICh4ID0gK3gpICE9IHggPyB4IDogeCA9PSAwID8gMSAvIHggPT0gSW5maW5pdHkgOiB4ID4gMDtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLnNpZ25iaXQuanNcbi8vIG1vZHVsZSBpZCA9IDMxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBtZXRhZGF0YSA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG52YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IG1ldGFkYXRhLnNldDtcblxubWV0YWRhdGEuZXhwKHsgZGVmaW5lTWV0YWRhdGE6IGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSkge1xuICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCBhbk9iamVjdCh0YXJnZXQpLCB0b01ldGFLZXkodGFyZ2V0S2V5KSk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDMxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIE1hcCA9IHJlcXVpcmUoJy4vZXM2Lm1hcCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbWV0YWRhdGEnKTtcbnZhciBzdG9yZSA9IHNoYXJlZC5zdG9yZSB8fCAoc2hhcmVkLnN0b3JlID0gbmV3IChyZXF1aXJlKCcuL2VzNi53ZWFrLW1hcCcpKSgpKTtcblxudmFyIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXksIGNyZWF0ZSkge1xuICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgaWYgKCF0YXJnZXRNZXRhZGF0YSkge1xuICAgIGlmICghY3JlYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHN0b3JlLnNldCh0YXJnZXQsIHRhcmdldE1ldGFkYXRhID0gbmV3IE1hcCgpKTtcbiAgfVxuICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcbiAgaWYgKCFrZXlNZXRhZGF0YSkge1xuICAgIGlmICghY3JlYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHRhcmdldE1ldGFkYXRhLnNldCh0YXJnZXRLZXksIGtleU1ldGFkYXRhID0gbmV3IE1hcCgpKTtcbiAgfSByZXR1cm4ga2V5TWV0YWRhdGE7XG59O1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpO1xufTtcbnZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gZnVuY3Rpb24gKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XG59O1xudmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApIHtcbiAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCB0cnVlKS5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xufTtcbnZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSkge1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCBmYWxzZSk7XG4gIHZhciBrZXlzID0gW107XG4gIGlmIChtZXRhZGF0YU1hcCkgbWV0YWRhdGFNYXAuZm9yRWFjaChmdW5jdGlvbiAoXywga2V5KSB7IGtleXMucHVzaChrZXkpOyB9KTtcbiAgcmV0dXJuIGtleXM7XG59O1xudmFyIHRvTWV0YUtleSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xudmFyIGV4cCA9IGZ1bmN0aW9uIChPKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIE8pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0b3JlOiBzdG9yZSxcbiAgbWFwOiBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwLFxuICBoYXM6IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEsXG4gIGdldDogb3JkaW5hcnlHZXRPd25NZXRhZGF0YSxcbiAgc2V0OiBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhLFxuICBrZXlzOiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyxcbiAga2V5OiB0b01ldGFLZXksXG4gIGV4cDogZXhwXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fbWV0YWRhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDMxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcbnZhciBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gbWV0YWRhdGEubWFwO1xudmFyIHN0b3JlID0gbWV0YWRhdGEuc3RvcmU7XG5cbm1ldGFkYXRhLmV4cCh7IGRlbGV0ZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG4gIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pO1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSwgZmFsc2UpO1xuICBpZiAobWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCB8fCAhbWV0YWRhdGFNYXBbJ2RlbGV0ZSddKG1ldGFkYXRhS2V5KSkgcmV0dXJuIGZhbHNlO1xuICBpZiAobWV0YWRhdGFNYXAuc2l6ZSkgcmV0dXJuIHRydWU7XG4gIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuICB0YXJnZXRNZXRhZGF0YVsnZGVsZXRlJ10odGFyZ2V0S2V5KTtcbiAgcmV0dXJuICEhdGFyZ2V0TWV0YWRhdGEuc2l6ZSB8fCBzdG9yZVsnZGVsZXRlJ10odGFyZ2V0KTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMzE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhcztcbnZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0O1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5R2V0TWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICBpZiAoaGFzT3duKSByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiB1bmRlZmluZWQ7XG59O1xuXG5tZXRhZGF0YS5leHAoeyBnZXRNZXRhZGF0YTogZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuICByZXR1cm4gb3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDMxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vZXM2LnNldCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG52YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBtZXRhZGF0YS5rZXlzO1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5TWV0YWRhdGFLZXlzID0gZnVuY3Rpb24gKE8sIFApIHtcbiAgdmFyIG9LZXlzID0gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XG4gIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbCkgcmV0dXJuIG9LZXlzO1xuICB2YXIgcEtleXMgPSBvcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuICByZXR1cm4gcEtleXMubGVuZ3RoID8gb0tleXMubGVuZ3RoID8gZnJvbShuZXcgU2V0KG9LZXlzLmNvbmNhdChwS2V5cykpKSA6IHBLZXlzIDogb0tleXM7XG59O1xuXG5tZXRhZGF0YS5leHAoeyBnZXRNZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgcmV0dXJuIG9yZGluYXJ5TWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXQ7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoeyBnZXRPd25NZXRhZGF0YTogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuICByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBtZXRhZGF0YSA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXM7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoeyBnZXRPd25NZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgcmV0dXJuIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBtZXRhZGF0YSA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzO1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5SGFzTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICBpZiAoaGFzT3duKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IGZhbHNlO1xufTtcblxubWV0YWRhdGEuZXhwKHsgaGFzTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBtZXRhZGF0YSA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzO1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHsgaGFzT3duTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldClcbiAgICAsIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMzIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgJG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciB0b01ldGFLZXkgPSAkbWV0YWRhdGEua2V5O1xudmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSAkbWV0YWRhdGEuc2V0O1xuXG4kbWV0YWRhdGEuZXhwKHsgbWV0YWRhdGE6IGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKFxuICAgICAgbWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsXG4gICAgICAodGFyZ2V0S2V5ICE9PSB1bmRlZmluZWQgPyBhbk9iamVjdCA6IGFGdW5jdGlvbikodGFyZ2V0KSxcbiAgICAgIHRvTWV0YUtleSh0YXJnZXRLZXkpXG4gICAgKTtcbiAgfTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yd2FsZHJvbi90YzM5LW5vdGVzL2Jsb2IvbWFzdGVyL2VzNi8yMDE0LTA5L3NlcHQtMjUubWQjNTEwLWdsb2JhbGFzYXAtZm9yLWVucXVldWluZy1hLW1pY3JvdGFza1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIHByb2Nlc3MgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5wcm9jZXNzO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxuJGV4cG9ydCgkZXhwb3J0LkcsIHtcbiAgYXNhcDogZnVuY3Rpb24gYXNhcChmbikge1xuICAgIHZhciBkb21haW4gPSBpc05vZGUgJiYgcHJvY2Vzcy5kb21haW47XG4gICAgbWljcm90YXNrKGRvbWFpbiA/IGRvbWFpbi5iaW5kKGZuKSA6IGZuKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIE9CU0VSVkFCTEUgPSByZXF1aXJlKCcuL193a3MnKSgnb2JzZXJ2YWJsZScpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIFJFVFVSTiA9IGZvck9mLlJFVFVSTjtcblxudmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZm4gPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGFGdW5jdGlvbihmbik7XG59O1xuXG52YXIgY2xlYW51cFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgdmFyIGNsZWFudXAgPSBzdWJzY3JpcHRpb24uX2M7XG4gIGlmIChjbGVhbnVwKSB7XG4gICAgc3Vic2NyaXB0aW9uLl9jID0gdW5kZWZpbmVkO1xuICAgIGNsZWFudXAoKTtcbiAgfVxufTtcblxudmFyIHN1YnNjcmlwdGlvbkNsb3NlZCA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbi5fbyA9PT0gdW5kZWZpbmVkO1xufTtcblxudmFyIGNsb3NlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICBpZiAoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKSB7XG4gICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgfVxufTtcblxudmFyIFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChvYnNlcnZlciwgc3Vic2NyaWJlcikge1xuICBhbk9iamVjdChvYnNlcnZlcik7XG4gIHRoaXMuX2MgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX28gPSBvYnNlcnZlcjtcbiAgb2JzZXJ2ZXIgPSBuZXcgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIodGhpcyk7XG4gIHRyeSB7XG4gICAgdmFyIGNsZWFudXAgPSBzdWJzY3JpYmVyKG9ic2VydmVyKTtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gY2xlYW51cDtcbiAgICBpZiAoY2xlYW51cCAhPSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGNsZWFudXAudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgZWxzZSBhRnVuY3Rpb24oY2xlYW51cCk7XG4gICAgICB0aGlzLl9jID0gY2xlYW51cDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICByZXR1cm47XG4gIH0gaWYgKHN1YnNjcmlwdGlvbkNsb3NlZCh0aGlzKSkgY2xlYW51cFN1YnNjcmlwdGlvbih0aGlzKTtcbn07XG5cblN1YnNjcmlwdGlvbi5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuICB1bnN1YnNjcmliZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7IGNsb3NlU3Vic2NyaXB0aW9uKHRoaXMpOyB9XG59KTtcblxudmFyIFN1YnNjcmlwdGlvbk9ic2VydmVyID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICB0aGlzLl9zID0gc3Vic2NyaXB0aW9uO1xufTtcblxuU3Vic2NyaXB0aW9uT2JzZXJ2ZXIucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoe30sIHtcbiAgbmV4dDogZnVuY3Rpb24gbmV4dCh2YWx1ZSkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuICAgIGlmICghc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpIHtcbiAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLm5leHQpO1xuICAgICAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsb3NlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHZhbHVlKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYgKHN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKSB0aHJvdyB2YWx1ZTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG4gICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5lcnJvcik7XG4gICAgICBpZiAoIW0pIHRocm93IHZhbHVlO1xuICAgICAgdmFsdWUgPSBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYgKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSkge1xuICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuY29tcGxldGUpO1xuICAgICAgICB2YWx1ZSA9IG0gPyBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfSBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG59KTtcblxudmFyICRPYnNlcnZhYmxlID0gZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmVyKSB7XG4gIGFuSW5zdGFuY2UodGhpcywgJE9ic2VydmFibGUsICdPYnNlcnZhYmxlJywgJ19mJykuX2YgPSBhRnVuY3Rpb24oc3Vic2NyaWJlcik7XG59O1xuXG5yZWRlZmluZUFsbCgkT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihvYnNlcnZlciwgdGhpcy5fZik7XG4gIH0sXG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyAoY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBhRnVuY3Rpb24oZm4pO1xuICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoYXQuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmbih2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICBjb21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5yZWRlZmluZUFsbCgkT2JzZXJ2YWJsZSwge1xuICBmcm9tOiBmdW5jdGlvbiBmcm9tKHgpIHtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nID8gdGhpcyA6ICRPYnNlcnZhYmxlO1xuICAgIHZhciBtZXRob2QgPSBnZXRNZXRob2QoYW5PYmplY3QoeClbT0JTRVJWQUJMRV0pO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgIHZhciBvYnNlcnZhYmxlID0gYW5PYmplY3QobWV0aG9kLmNhbGwoeCkpO1xuICAgICAgcmV0dXJuIG9ic2VydmFibGUuY29uc3RydWN0b3IgPT09IEMgPyBvYnNlcnZhYmxlIDogbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZm9yT2YoeCwgZmFsc2UsIGZ1bmN0aW9uIChpdCkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0KTtcbiAgICAgICAgICAgICAgaWYgKGRvbmUpIHJldHVybiBSRVRVUk47XG4gICAgICAgICAgICB9KSA9PT0gUkVUVVJOKSByZXR1cm47XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGRvbmUpIHRocm93IGU7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgZG9uZSA9IHRydWU7IH07XG4gICAgfSk7XG4gIH0sXG4gIG9mOiBmdW5jdGlvbiBvZigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGgsIGl0ZW1zID0gbmV3IEFycmF5KGwpOyBpIDwgbDspIGl0ZW1zW2ldID0gYXJndW1lbnRzW2krK107XG4gICAgcmV0dXJuIG5ldyAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicgPyB0aGlzIDogJE9ic2VydmFibGUpKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbXNbal0pO1xuICAgICAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgICB9IG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgZG9uZSA9IHRydWU7IH07XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5oaWRlKCRPYnNlcnZhYmxlLnByb3RvdHlwZSwgT0JTRVJWQUJMRSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5HLCB7IE9ic2VydmFibGU6ICRPYnNlcnZhYmxlIH0pO1xuXG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKCdPYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZm4sIHRpbWUgLyogLCAuLi5hcmdzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogZmFsc2U7XG4gICAgcmV0dXJuIHNldChib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogZm4sIHRpbWUpO1xuICB9O1xufTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CICsgJGV4cG9ydC5GICogTVNJRSwge1xuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanNcbi8vIG1vZHVsZSBpZCA9IDMyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CLCB7XG4gIHNldEltbWVkaWF0ZTogJHRhc2suc2V0LFxuICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvY29yZS5yZWdleHAuZXNjYXBlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5SZWdFeHAuZXNjYXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZm4vcmVnZXhwL2VzY2FwZS5qc1xuLy8gbW9kdWxlIGlkID0gMzI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5nci9SZXhFeHAuZXNjYXBlXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRyZSA9IHJlcXVpcmUoJy4vX3JlcGxhY2VyJykoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVnRXhwJywgeyBlc2NhcGU6IGZ1bmN0aW9uIGVzY2FwZShpdCkgeyByZXR1cm4gJHJlKGl0KTsgfSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvY29yZS5yZWdleHAuZXNjYXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlZ0V4cCwgcmVwbGFjZSkge1xuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbiAocGFydCkge1xuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuICB9IDogcmVwbGFjZTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBTdHJpbmcoaXQpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVwbGFjZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIl0sInNvdXJjZVJvb3QiOiIifQ==
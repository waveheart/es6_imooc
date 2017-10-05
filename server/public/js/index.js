/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*********************
 ****let,const命令****
**********************/

// function test() {
// 	// let a = 1
// 	// console.log(a)
// 	// for (let i = 0; i < 3; i++) {
// 	// 	console.log(i)
// 	// }
// 	// console.log(i)
// 	// let a = 1;
// 	// let a = 2;
// }

// function last(){
// 	const PI = 3.1415926;
// 	// const PI;//不能只声明不赋值，会报错
// 	// PI = 8;//这种常量不允许修改
// 	const k = { a: 1}
// 	k.b = 3;
// 	console.log(PI,k)
// }

// // test();

// last();


/*********************
    ****解构赋值****
**********************/

// {
// 	let a,b,rest;
// 	[a, b] = [1, 2]
// 	console.log(a,b)
// }

// {
// 	let a, b, rest;
// 	[a, b, ...rest] = [1, 2, 3, 4, 5, 6]
// 	console.log(a,b,rest)
// }


// {
// 	let a, b;
// 	({a,b} = {a:1,b:2})
// 	console.log(a,b)
// }

// {
// 	let a,b,c,rest;
// 	[a, b, c=3] = [1, 2]
// 	console.log(a,b,c)
// }

// {
// 	let a = 1;
// 	let b = 2;
// 	[a,b] = [b,a]
// 	console.log(a,b)
// }

// {
// 	function f(){
// 		return [1,2]
// 	}

// 	let a,b;
// 	[a,b] = f();
// 	console.log(a,b,111)
// }

// {
// 	function f(){
// 		return [1,2,3,4,5]
// 	}
// 	let a,b,c;
// 	// [a,,,b] = f()
// 	// console.log(a,b)
// 	[a,,,b,...c] = f()
// 	console.log(a,b,c)
// }


// {
// 	function f(){
// 		return [1,2,3,4,5]
// 	}
// 	let a,b,c;
// 	// [a,,,b] = f()
// 	// console.log(a,b)
// 	[a,...b] = f()
// 	console.log(a,b,c)
// }


// {
// 	function f(){
// 		return [1,2,3,4,5]
// 	}
// 	let a,b;
// 	// [a,,,b] = f()
// 	// console.log(a,b)
// 	[a,,...b] = f()
// 	console.log(a,b)
// }

// {
// 	let o = {p:42,q:true};
// 	let {p,q} = o;
// 	console.log(p,q)
// }

// {
// 	let {a = 10, b= 5} = {a:3}
// 	console.log(a,b)
// }

// {
// 	let metaData = {
// 		title:'abc',
// 		test:[{
// 			title:'test',
// 			desc:'description'
// 		}]
// 	}

// 	let {title:esTitle,test:[{title:cnTitle}]} = metaData; 

// 	console.log(esTitle,cnTitle)
// }


/*********************
    ****正则扩展****
**********************/

{
	var regex = new RegExp('xyz', 'i');
	var regex2 = RegExp(/xyz/i);

	console.log(regex.test('xyz123'), regex2.test('xyz123'));

	var regex3 = RegExp(/xyz/ig, 'i');
	console.log(regex3.flags);
}

{
	var s = 'bbb_bb_b';
	var a1 = /b+/g;
	var a2 = new RegExp('b+', 'y');

	console.log('one:', a1.exec(s), a2.exec(s));
	console.log('two:', a1.exec(s), a2.exec(s));

	console.log(a1.sticky, a2.sticky);
}

{
	console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
	console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A'));

	console.log(/\u{61}/.test('a'));
	console.log(/a/.test('a'));

	console.log('\uD842\uDFB7');

	var _s = '𠮷';

	console.log('u?:  ', /^.$/.test(_s));
	console.log('u-2:  ', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_s));

	console.log('test', /𠮷{2}/.test('𠮷𠮷'));
	console.log('test-2', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷'));
}

/***/ })
/******/ ]);
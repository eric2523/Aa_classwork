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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: DOMNodeCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMNodeCollection\", function() { return DOMNodeCollection; });\nclass DOMNodeCollection {\n    constructor(HTMLEleArr){\n        this.HTMLArr = HTMLEleArr;\n    }\n}\n\nDOMNodeCollection.prototype.html = function(strArg){\n    if (strArg !== undefined) {\n        this.HTMLArr.forEach (node => node.innerHTML = strArg)\n    } else {\n        return this.HTMLArr[0].innerHTML;\n    }\n}\n\nDOMNodeCollection.prototype.empty = function(){\n    this.html(\"\")\n}\n\nDOMNodeCollection.prototype.append = function(ele) {\n    this.HTMLArr.forEach((outerNode) => {\n      let outerText = outerNode.innerHTML;\n\n      if (ele instanceof DOMNodeCollection) {\n        ele.HTMLArr.forEach((node) => {\n          let innerText = node.outerHTML;\n          outerText = outerText.concat(innerText);\n          outerNode.innerHTML = outerText;\n        });\n      } else {\n        (ele instanceof HTMLElement) ? \n            outerText = outerText.concat(ele.outerHTML) : \n            outerText = outerText.concat(ele)\n        outerNode.innerHTML = outerText;\n      }\n    });  \n}\n\nDOMNodeCollection.prototype.attr = function(attrName, attrVal){\n    if (attrVal === undefined){\n        for (let i = 0; i < this.HTMLArr.length; i++) {\n            let el = this.HTMLArr[i]\n            let name = el.getAttribute(attrName);   \n            if (name !== null) return name;\n        }\n    } else {\n        let eles = this.HTMLArr.filter(el => el.getAttribute(attrName))\n        eles.forEach(el => el.setAttribute(attrName, attrVal))\n    }\n}\n\nDOMNodeCollection.prototype.addClass = function(val) {\n    this.HTMLArr.forEach((el) => el.classList.add(val))\n}\n\nDOMNodeCollection.prototype.removeClass = function(className){\n    this.HTMLArr.forEach((el) => el.classList.remove(className))\n}\n\nDOMNodeCollection.prototype.children = function() {\n    let allChildren = [];\n    this.HTMLArr.forEach((el) => allChildren = allChildren.concat(Array.from(el.children)))\n    // let combined = allChildren.forEach\n    return new DOMNodeCollection(allChildren)\n}\n\nDOMNodeCollection.prototype.parent = function() {\n    let allparents = [];\n    this.HTMLArr.forEach((el) => allparents.push(el.parentNode))\n    return new DOMNodeCollection(allparents)\n}\n\nDOMNodeCollection.prototype.find = function(selector) {\n    let nodes = [];\n    this.HTMLArr.forEach(el => {\n        nodes = nodes.concat(Array.from(el.querySelectorAll(selector)))\n    })\n    return new DOMNodeCollection(nodes)\n}\n\nDOMNodeCollection.prototype.remove = function(){\n    this.HTMLArr.forEach(el => el.remove())\n}\n\nDOMNodeCollection.prototype.on = function(event, cb) {\n    this.HTMLArr.forEach((el) => {\n        el.callback = cb;\n        el.addEventListener(event, el.callback)\n    })\n}\n\nDOMNodeCollection.prototype.off = function(event) {\n    this.HTMLArr.forEach((el) => {\n        el.removeEventListener(event, el.callback)\n    })\n}\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n// const DOMNodeCollection = require(\"dom_node_collection.js\")\n\n\nwindow.$1 = function (arg){\n    if (arg instanceof HTMLElement) {\n        return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMNodeCollection\"]([arg])\n    } else {\n        let nodes = document.querySelectorAll(arg);\n        let nodeArr = [];\n        nodes.forEach(node => nodeArr.push(node))\n        return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMNodeCollection\"](nodeArr)\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
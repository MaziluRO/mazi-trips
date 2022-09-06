module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/trips/TripItem.js":
/*!**************************************!*\
  !*** ./components/trips/TripItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _TripItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TripItem.module.css */ "./components/trips/TripItem.module.css");
/* harmony import */ var _TripItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TripItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Dan\\Desktop\\NextJS projects\\next-trip\\components\\trips\\TripItem.js";




function TripItem(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  function showDetailPageHandler() {
    const titleNoSpace = props.title.trim().replace(/\s+/g, '-').toLowerCase();
    router.push('/' + titleNoSpace);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _TripItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TripItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TripItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: props.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TripItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: showDetailPageHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TripItem);

/***/ }),

/***/ "./components/trips/TripItem.module.css":
/*!**********************************************!*\
  !*** ./components/trips/TripItem.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "TripItem_item__14Bq5",
	"image": "TripItem_image__327km",
	"content": "TripItem_content__1nlvk",
	"actions": "TripItem_actions__AVz46"
};


/***/ }),

/***/ "./components/trips/TripList.js":
/*!**************************************!*\
  !*** ./components/trips/TripList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TripItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TripItem */ "./components/trips/TripItem.js");
/* harmony import */ var _TripList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TripList.module.css */ "./components/trips/TripList.module.css");
/* harmony import */ var _TripList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TripList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Dan\\Desktop\\NextJS projects\\next-trip\\components\\trips\\TripList.js";



function TripList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _TripList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: props.trips.map(trip => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TripItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: trip.id,
      image: trip.image,
      title: trip.title,
      address: trip.address
    }, trip.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TripList);

/***/ }),

/***/ "./components/trips/TripList.module.css":
/*!**********************************************!*\
  !*** ./components/trips/TripList.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "TripList_list__304P1"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Dan\\Desktop\\NextJS projects\\next-trip\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_trips_TripList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/trips/TripList */ "./components/trips/TripList.js");

var _jsxFileName = "C:\\Users\\Dan\\Desktop\\NextJS projects\\next-trip\\pages\\index.js";
//our-domain.com/

const DUMMY_TRIPS = [{
  id: 1,
  title: 'First Trip',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg/640px-Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg',
  address: 'Bucharest',
  description: 'This is my first trip'
}, {
  id: 2,
  title: 'Second Trip',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg/640px-Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg',
  address: 'Bucharest',
  description: 'This is my second trip'
}];

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_trips_TripList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    trips: props.trips
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

async function getStaticProps() {
  //fetch data from APIs
  //always return object
  return {
    props: {
      trips: DUMMY_TRIPS
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90cmlwcy9UcmlwSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RyaXBzL1RyaXBJdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90cmlwcy9UcmlwTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RyaXBzL1RyaXBMaXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVHJpcEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxQYWdlSGFuZGxlciIsInRpdGxlTm9TcGFjZSIsInRpdGxlIiwidHJpbSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJjbGFzc2VzIiwiaXRlbSIsImltYWdlIiwiY29udGVudCIsImFkZHJlc3MiLCJhY3Rpb25zIiwiVHJpcExpc3QiLCJsaXN0IiwidHJpcHMiLCJtYXAiLCJ0cmlwIiwiaWQiLCJDYXJkIiwiY2FyZCIsImNoaWxkcmVuIiwiRFVNTVlfVFJJUFMiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwiZ2V0U3RhdGljUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN4QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLHFCQUFULEdBQWlDO0FBQ2hDLFVBQU1DLFlBQVksR0FBR0osS0FBSyxDQUFDSyxLQUFOLENBQVlDLElBQVosR0FBbUJDLE9BQW5CLENBQTJCLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXdDQyxXQUF4QyxFQUFyQjtBQUNBUCxVQUFNLENBQUNRLElBQVAsQ0FBWSxNQUFNTCxZQUFsQjtBQUNBOztBQUVELHNCQUNDO0FBQUksYUFBUyxFQUFFTSwyREFBTyxDQUFDQyxJQUF2QjtBQUFBLDJCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFFRCwyREFBTyxDQUFDRSxLQUF4QjtBQUFBLCtCQUNDO0FBQUssYUFBRyxFQUFFWixLQUFLLENBQUNZLEtBQWhCO0FBQXVCLGFBQUcsRUFBRVosS0FBSyxDQUFDSztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBSUM7QUFBSyxpQkFBUyxFQUFFSywyREFBTyxDQUFDRyxPQUF4QjtBQUFBLGdDQUNDO0FBQUEsb0JBQUtiLEtBQUssQ0FBQ0s7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBQSxvQkFBVUwsS0FBSyxDQUFDYztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELGVBUUM7QUFBSyxpQkFBUyxFQUFFSiwyREFBTyxDQUFDSyxPQUF4QjtBQUFBLCtCQUNDO0FBQVEsaUJBQU8sRUFBRVoscUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWdCQTs7QUFFY0osdUVBQWYsRTs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUEsU0FBU2lCLFFBQVQsQ0FBa0JoQixLQUFsQixFQUF5QjtBQUN4QixzQkFDQztBQUFJLGFBQVMsRUFBRVUsMkRBQU8sQ0FBQ08sSUFBdkI7QUFBQSxjQUNFakIsS0FBSyxDQUFDa0IsS0FBTixDQUFZQyxHQUFaLENBQWdCQyxJQUFJLGlCQUNwQixxRUFBQyxpREFBRDtBQUVDLFFBQUUsRUFBRUEsSUFBSSxDQUFDQyxFQUZWO0FBR0MsV0FBSyxFQUFFRCxJQUFJLENBQUNSLEtBSGI7QUFJQyxXQUFLLEVBQUVRLElBQUksQ0FBQ2YsS0FKYjtBQUtDLGFBQU8sRUFBRWUsSUFBSSxDQUFDTjtBQUxmLE9BQ01NLElBQUksQ0FBQ0MsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFhQTs7QUFFY0wsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUEsU0FBU00sSUFBVCxDQUFjdEIsS0FBZCxFQUFxQjtBQUNuQixzQkFBTztBQUFLLGFBQVMsRUFBRVUsdURBQU8sQ0FBQ2EsSUFBeEI7QUFBQSxjQUErQnZCLEtBQUssQ0FBQ3dCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjRixtRUFBZixFOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFQSxNQUFNRyxXQUFXLEdBQUcsQ0FDbkI7QUFDQ0osSUFBRSxFQUFFLENBREw7QUFFQ2hCLE9BQUssRUFBRSxZQUZSO0FBR0NPLE9BQUssRUFDSixxTkFKRjtBQUtDRSxTQUFPLEVBQUUsV0FMVjtBQU1DWSxhQUFXLEVBQUU7QUFOZCxDQURtQixFQVNuQjtBQUNDTCxJQUFFLEVBQUUsQ0FETDtBQUVDaEIsT0FBSyxFQUFFLGFBRlI7QUFHQ08sT0FBSyxFQUNKLHFOQUpGO0FBS0NFLFNBQU8sRUFBRSxXQUxWO0FBTUNZLGFBQVcsRUFBRTtBQU5kLENBVG1CLENBQXBCOztBQW1CQSxTQUFTQyxRQUFULENBQWtCM0IsS0FBbEIsRUFBeUI7QUFDeEIsc0JBQU8scUVBQUMsa0VBQUQ7QUFBVSxTQUFLLEVBQUVBLEtBQUssQ0FBQ2tCO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNBOztBQUVNLGVBQWVVLGNBQWYsR0FBZ0M7QUFDdEM7QUFFQTtBQUNBLFNBQU87QUFDTjVCLFNBQUssRUFBRTtBQUNOa0IsV0FBSyxFQUFFTztBQUREO0FBREQsR0FBUDtBQUtBO0FBRWNFLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDckNBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9UcmlwSXRlbS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZnVuY3Rpb24gVHJpcEl0ZW0ocHJvcHMpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0ZnVuY3Rpb24gc2hvd0RldGFpbFBhZ2VIYW5kbGVyKCkge1xuXHRcdGNvbnN0IHRpdGxlTm9TcGFjZSA9IHByb3BzLnRpdGxlLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcblx0XHRyb3V0ZXIucHVzaCgnLycgKyB0aXRsZU5vU3BhY2UpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuXHRcdFx0PENhcmQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cblx0XHRcdFx0XHQ8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XG5cdFx0XHRcdFx0PGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzaG93RGV0YWlsUGFnZUhhbmRsZXJ9PlNob3cgRGV0YWlsczwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvQ2FyZD5cblx0XHQ8L2xpPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJUcmlwSXRlbV9pdGVtX18xNEJxNVwiLFxuXHRcImltYWdlXCI6IFwiVHJpcEl0ZW1faW1hZ2VfXzMyN2ttXCIsXG5cdFwiY29udGVudFwiOiBcIlRyaXBJdGVtX2NvbnRlbnRfXzFubHZrXCIsXG5cdFwiYWN0aW9uc1wiOiBcIlRyaXBJdGVtX2FjdGlvbnNfX0FWejQ2XCJcbn07XG4iLCJpbXBvcnQgVHJpcEl0ZW0gZnJvbSAnLi9UcmlwSXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1RyaXBMaXN0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBUcmlwTGlzdChwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG5cdFx0XHR7cHJvcHMudHJpcHMubWFwKHRyaXAgPT4gKFxuXHRcdFx0XHQ8VHJpcEl0ZW1cblx0XHRcdFx0XHRrZXk9e3RyaXAuaWR9XG5cdFx0XHRcdFx0aWQ9e3RyaXAuaWR9XG5cdFx0XHRcdFx0aW1hZ2U9e3RyaXAuaW1hZ2V9XG5cdFx0XHRcdFx0dGl0bGU9e3RyaXAudGl0bGV9XG5cdFx0XHRcdFx0YWRkcmVzcz17dHJpcC5hZGRyZXNzfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcExpc3Q7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiVHJpcExpc3RfbGlzdF9fMzA0UDFcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCIvL291ci1kb21haW4uY29tL1xyXG5pbXBvcnQgVHJpcExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90cmlwcy9UcmlwTGlzdCc7XHJcblxyXG5jb25zdCBEVU1NWV9UUklQUyA9IFtcclxuXHR7XHJcblx0XHRpZDogMSxcclxuXHRcdHRpdGxlOiAnRmlyc3QgVHJpcCcsXHJcblx0XHRpbWFnZTpcclxuXHRcdFx0J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yYi9QYWxhY2lvX0NFQyUyQ19CdWNhcmVzdCUyQ19SdW1hbiVDMyVBRGElMkNfMjAxNi0wNS0yOSUyQ19ERF85MS05M19IRFIuanBnLzY0MHB4LVBhbGFjaW9fQ0VDJTJDX0J1Y2FyZXN0JTJDX1J1bWFuJUMzJUFEYSUyQ18yMDE2LTA1LTI5JTJDX0REXzkxLTkzX0hEUi5qcGcnLFxyXG5cdFx0YWRkcmVzczogJ0J1Y2hhcmVzdCcsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgZmlyc3QgdHJpcCcsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMixcclxuXHRcdHRpdGxlOiAnU2Vjb25kIFRyaXAnLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMmIvUGFsYWNpb19DRUMlMkNfQnVjYXJlc3QlMkNfUnVtYW4lQzMlQURhJTJDXzIwMTYtMDUtMjklMkNfRERfOTEtOTNfSERSLmpwZy82NDBweC1QYWxhY2lvX0NFQyUyQ19CdWNhcmVzdCUyQ19SdW1hbiVDMyVBRGElMkNfMjAxNi0wNS0yOSUyQ19ERF85MS05M19IRFIuanBnJyxcclxuXHRcdGFkZHJlc3M6ICdCdWNoYXJlc3QnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdUaGlzIGlzIG15IHNlY29uZCB0cmlwJyxcclxuXHR9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuXHRyZXR1cm4gPFRyaXBMaXN0IHRyaXBzPXtwcm9wcy50cmlwc30+PC9UcmlwTGlzdD47XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHQvL2ZldGNoIGRhdGEgZnJvbSBBUElzXHJcblxyXG5cdC8vYWx3YXlzIHJldHVybiBvYmplY3RcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dHJpcHM6IERVTU1ZX1RSSVBTLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
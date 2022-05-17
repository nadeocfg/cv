/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap-grid.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap-grid.min.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/index.sass":
/*!*****************************!*\
  !*** ./src/sass/index.sass ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap-reboot.min.css */ "./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap-grid.min.css */ "./node_modules/bootstrap/dist/css/bootstrap-grid.min.css");
/* harmony import */ var _sass_index_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/index.sass */ "./src/sass/index.sass");




const overlay = document.querySelector(".overlay");
const avatar = document.querySelector(".avatar");

window.addEventListener("mousemove", (e) => {
  const x = Math.round(e.x / 100);
  const y = Math.round(e.y / 100);

  avatar.style.transform = `translate(${x - 5}px, ${Math.round(
    y - 5
  )}px) scale(1.1)`;
});

window.addEventListener("load", function () {
  overlay.style.display = "none";
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
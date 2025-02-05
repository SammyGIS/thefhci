"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-sanity";
exports.ids = ["vendor-chunks/next-sanity"];
exports.modules = {

/***/ "(action-browser)/./node_modules/next-sanity/dist/visual-editing/server-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-sanity/dist/visual-editing/server-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   revalidateRootLayout: () => (/* binding */ revalidateRootLayout)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(action-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(action-browser)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var next_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache.js */ \"(action-browser)/./node_modules/next/cache.js\");\n/* harmony import */ var next_headers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/headers.js */ \"(action-browser)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(action-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"7f5ca86292dc45bfe6b460a7514572454e99b4d690\":\"revalidateRootLayout\"} */ \n\n\n\nasync function revalidateRootLayout() {\n    if (!(await (0,next_headers_js__WEBPACK_IMPORTED_MODULE_3__.draftMode)()).isEnabled) {\n        console.warn(\"Skipped revalidatePath request because draft mode is not enabled\");\n        return;\n    }\n    await (0,next_cache_js__WEBPACK_IMPORTED_MODULE_2__.revalidatePath)(\"/\", \"layout\");\n}\n //# sourceMappingURL=server-actions.js.map\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__.ensureServerEntryExports)([\n    revalidateRootLayout\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(revalidateRootLayout, \"7f5ca86292dc45bfe6b460a7514572454e99b4d690\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0LXNhbml0eS9kaXN0L3Zpc3VhbC1lZGl0aW5nL3NlcnZlci1hY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJQSxlQUFzQix1QkFBc0M7SUFDMUQsSUFBSSxFQUFFLE1BQU0sMERBQVMsRUFBQyxFQUFHLFdBQVc7UUFFbEMsUUFBUSxLQUFLLGtFQUFrRTtRQUMvRTtJQUFBO0lBRUksbUVBQWMsQ0FBQyxLQUFLLFFBQVE7QUFDcEMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvMTcvRG9jdW1lbnRzL1dlYiBEZXYvc3JjL3Zpc3VhbC1lZGl0aW5nL3NlcnZlci1hY3Rpb25zL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuaW1wb3J0IHtyZXZhbGlkYXRlUGF0aH0gZnJvbSAnbmV4dC9jYWNoZS5qcydcbmltcG9ydCB7ZHJhZnRNb2RlfSBmcm9tICduZXh0L2hlYWRlcnMuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXZhbGlkYXRlUm9vdExheW91dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCEoYXdhaXQgZHJhZnRNb2RlKCkpLmlzRW5hYmxlZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKCdTa2lwcGVkIHJldmFsaWRhdGVQYXRoIHJlcXVlc3QgYmVjYXVzZSBkcmFmdCBtb2RlIGlzIG5vdCBlbmFibGVkJylcbiAgICByZXR1cm5cbiAgfVxuICBhd2FpdCByZXZhbGlkYXRlUGF0aCgnLycsICdsYXlvdXQnKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/next-sanity/dist/visual-editing/server-actions.js\n");

/***/ })

};
;
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/speedometer";
exports.ids = ["vendor-chunks/speedometer"];
exports.modules = {

/***/ "(ssr)/./node_modules/speedometer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/speedometer/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("var tick = 1\nvar maxTick = 65535\nvar resolution = 4\nvar inc = function () {\n  tick = (tick + 1) & maxTick\n}\n\nvar timer = setInterval(inc, (1000 / resolution) | 0)\nif (timer.unref) timer.unref()\n\nmodule.exports = function (seconds) {\n  var size = resolution * (seconds || 5)\n  var buffer = [0]\n  var pointer = 1\n  var last = (tick - 1) & maxTick\n\n  return function (delta) {\n    var dist = (tick - last) & maxTick\n    if (dist > size) dist = size\n    last = tick\n\n    while (dist--) {\n      if (pointer === size) pointer = 0\n      buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1]\n      pointer++\n    }\n\n    if (delta) buffer[pointer - 1] += delta\n\n    var top = buffer[pointer - 1]\n    var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer]\n\n    return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3BlZWRvbWV0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvbWFjYm9va3BybzE3L0RvY3VtZW50cy9XZWIgRGV2L1Byb2plY3RzL3RoZWZoY2kvbm9kZV9tb2R1bGVzL3NwZWVkb21ldGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0aWNrID0gMVxudmFyIG1heFRpY2sgPSA2NTUzNVxudmFyIHJlc29sdXRpb24gPSA0XG52YXIgaW5jID0gZnVuY3Rpb24gKCkge1xuICB0aWNrID0gKHRpY2sgKyAxKSAmIG1heFRpY2tcbn1cblxudmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoaW5jLCAoMTAwMCAvIHJlc29sdXRpb24pIHwgMClcbmlmICh0aW1lci51bnJlZikgdGltZXIudW5yZWYoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWNvbmRzKSB7XG4gIHZhciBzaXplID0gcmVzb2x1dGlvbiAqIChzZWNvbmRzIHx8IDUpXG4gIHZhciBidWZmZXIgPSBbMF1cbiAgdmFyIHBvaW50ZXIgPSAxXG4gIHZhciBsYXN0ID0gKHRpY2sgLSAxKSAmIG1heFRpY2tcblxuICByZXR1cm4gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgdmFyIGRpc3QgPSAodGljayAtIGxhc3QpICYgbWF4VGlja1xuICAgIGlmIChkaXN0ID4gc2l6ZSkgZGlzdCA9IHNpemVcbiAgICBsYXN0ID0gdGlja1xuXG4gICAgd2hpbGUgKGRpc3QtLSkge1xuICAgICAgaWYgKHBvaW50ZXIgPT09IHNpemUpIHBvaW50ZXIgPSAwXG4gICAgICBidWZmZXJbcG9pbnRlcl0gPSBidWZmZXJbcG9pbnRlciA9PT0gMCA/IHNpemUgLSAxIDogcG9pbnRlciAtIDFdXG4gICAgICBwb2ludGVyKytcbiAgICB9XG5cbiAgICBpZiAoZGVsdGEpIGJ1ZmZlcltwb2ludGVyIC0gMV0gKz0gZGVsdGFcblxuICAgIHZhciB0b3AgPSBidWZmZXJbcG9pbnRlciAtIDFdXG4gICAgdmFyIGJ0bSA9IGJ1ZmZlci5sZW5ndGggPCBzaXplID8gMCA6IGJ1ZmZlcltwb2ludGVyID09PSBzaXplID8gMCA6IHBvaW50ZXJdXG5cbiAgICByZXR1cm4gYnVmZmVyLmxlbmd0aCA8IHJlc29sdXRpb24gPyB0b3AgOiAodG9wIC0gYnRtKSAqIHJlc29sdXRpb24gLyBidWZmZXIubGVuZ3RoXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/speedometer/index.js\n");

/***/ })

};
;
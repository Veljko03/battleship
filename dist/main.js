/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  background-color: rgb(37, 37, 38);\n}\n\nh1 {\n  color: rgb(120, 255, 58);\n  font-size: 40px;\n  justify-self: center;\n}\n.make {\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: wrap;\n}\n.cell {\n  flex-grow: 1;\n  border: solid 1px black;\n}\n.board-constainers {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 100px;\n}\n.board-one,\n.board-two {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 500px;\n  height: 500px;\n}\n.ships {\n  display: flex;\n  gap: 20px;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n.ship {\n  background-color: black;\n}\n.placeShips {\n  color: rgb(120, 255, 58);\n\n  font-weight: bold;\n  font-size: 25px;\n}\n\n.randomBtn,\n.btnRotate,\n.btnClearAll,\n.startGameBtn {\n  color: black;\n  font-weight: 800;\n  font-size: 25px;\n  border-radius: 15px;\n}\n\n.start {\n  justify-content: center;\n  align-self: center;\n  color: black;\n  font-weight: 800;\n  font-size: 40px;\n  border-radius: 15px;\n\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.btnRotate {\n  margin-left: 50px;\n}\n\n.shipContainer {\n  display: flex;\n  gap: 20px;\n}\n.allS {\n  display: flex;\n  gap: 30px;\n}\n.btnClearAll {\n  margin-right: 50px;\n  margin-top: 20px;\n}\n.startGameBtn {\n  font-size: 40px;\n  margin-left: 40px;\n  background-color: aquamarine;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerMadeMove: () => (/* binding */ playerMadeMove)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ \"./src/players.js\");\n/* harmony import */ var _makeShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeShip */ \"./src/makeShip.js\");\n\n\n\n\nconst ships = document.querySelector(\".ships\");\n\nconst startBtn = document.querySelector(\".start\");\nconst btnRandom = document.querySelector(\".btnRandom\");\nconst btnRotate = document.querySelector(\".btnRotate\");\nconst btnClear = document.querySelector(\".btnClear\");\nconst clearBoard = document.querySelector(\".clearBoard\");\n\nfunction clearAfterPlace() {\n  document.querySelector(\".shipContainer\").style.display = \"none\";\n  const startGame = document.createElement(\"button\");\n  startGame.textContent = \"Start Game\";\n  startGame.classList.add(\"startGameBtn\");\n  btnClear.appendChild(startGame);\n  startGame.addEventListener(\"click\", () => {\n    playRound(board1, board2, b1, b2, \"player\");\n    btnClear.style.display = \"none\";\n    btnRotate.style.display = \"none\";\n    btnRandom.style.display = \"none\";\n    document.querySelector(\".clearBoard\").innerHTML = \"\";\n  });\n  //startGame.style.display = \"none\";\n}\n\nbtnRotate.style.display = \"none\";\nlet canClickAgain = true;\nlet shipsPlaced = 0;\nlet canDragShips = true;\n\nlet position = \"horizontal\";\nstartBtn.addEventListener(\"click\", () => {\n  if (canClickAgain) {\n    initializeGame();\n    canClickAgain = false;\n    startBtn.style.display = \"none\";\n    btnRotate.style.display = \"flex\";\n  }\n});\n\nlet currPlayer;\nconst b1 = document.querySelector(\".board-one\");\nconst b2 = document.querySelector(\".board-two\");\n\nconst player1 = new _players__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"player\");\nconst player2 = new _players__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"computer\");\nconst board1 = player1.board;\nconst board2 = player2.board;\n\nfunction initializeGame() {\n  board1.createBoard();\n  board2.createBoard();\n\n  const btnClearAll = document.createElement(\"button\");\n  btnClearAll.classList.add(\"btnClearAll\");\n  btnClearAll.textContent = \"Clear board\";\n  clearBoard.appendChild(btnClearAll);\n  btnClearAll.addEventListener(\"click\", () => {\n    b1.innerHTML = \"\";\n    shipsPlaced = 0;\n    let ss = document.querySelectorAll(\".ship\");\n    ss.forEach((s) => {\n      s.style.display = \"flex\";\n    });\n\n    btnClear.innerHTML = \"\";\n    document.querySelector(\".shipContainer\").style.display = \"flex\";\n    board1.createBoard();\n    board1.printBoard(b1, \"something\", \"left\");\n  });\n\n  const randomBtn = document.createElement(\"button\");\n  randomBtn.textContent = \"Random placement\";\n  randomBtn.classList.add(\"randomBtn\");\n  randomBtn.addEventListener(\"click\", () => {\n    b1.innerHTML = \"\";\n    btnClear.innerHTML = \"\";\n\n    board1.createBoard();\n    randomShipPlacment(board1, 5);\n    randomShipPlacment(board1, 3);\n    randomShipPlacment(board1, 3);\n    randomShipPlacment(board1, 2);\n    randomShipPlacment(board1, 2);\n    canDragShips = false;\n    board1.printBoard(b1, \"something\", \"left\");\n\n    clearAfterPlace();\n  });\n  btnRandom.appendChild(randomBtn);\n\n  randomShipPlacment(board2, 5);\n  randomShipPlacment(board2, 3);\n  randomShipPlacment(board2, 3);\n  randomShipPlacment(board2, 2);\n  randomShipPlacment(board2, 2);\n\n  shipsForDragAndDrop(board1);\n\n  let currBoard = [\"left\", \"right\"];\n  board1.printBoard(b1, \"something\", \"left\");\n  board2.printBoard(b2, \"something\");\n}\n\nfunction clearAll(b1, b2) {\n  b1.innerHTML = \"\";\n  b2.innerHTML = \"\";\n}\n\n//playRound if function that change order in game\nfunction playRound(board1, board2, b1, b2, currPlayer) {\n  clearAll(b1, b2);\n  // print both boards without eventlistener or computerattack\n\n  if (currPlayer === \"player\") {\n    //clear everything then print 1st board as it is and second with addEventlisterner function enabled\n    board1.printBoard(b1, \"something\", \"left\");\n    board2.printBoard(b2, currPlayer);\n    if (board2.clicked == true) {\n      if (!board1.over && !board2.over) {\n        board2.clicked = false;\n        currPlayer = \"computer\";\n        playRound(board1, board2, b1, b2, currPlayer, currBoard);\n      }\n    }\n  } else {\n    //random attack, and then print both boards\n\n    board1.computerRandomAttack();\n\n    board1.printBoard(b1, currPlayer, \"left\");\n    board2.printBoard(b2, \"something\");\n\n    currPlayer = \"player\";\n\n    if (!board1.over && !board2.over) {\n      playRound(board1, board2, b1, b2, currPlayer);\n    }\n  }\n}\n\nlet madeMove = false;\n\nfunction playerMadeMove(change) {\n  madeMove = change;\n\n  if (madeMove == true) {\n    madeMove = false;\n\n    playRound(board1, board2, b1, b2, \"computer\");\n  }\n}\n\nfunction randomShipPlacment(first, length) {\n  let ship1X = Math.floor(Math.random() * 10);\n\n  let ship1Y = Math.floor(Math.random() * 10);\n\n  let placment = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n\n  if (\n    first.placeShip(ship1X, ship1Y, new _makeShip__WEBPACK_IMPORTED_MODULE_2__[\"default\"](length), placment) ==\n    \"cant place boat here\"\n  ) {\n    randomShipPlacment(first, length);\n  } else first.placeShip(ship1X, ship1Y, new _makeShip__WEBPACK_IMPORTED_MODULE_2__[\"default\"](length), placment);\n}\n\nfunction shipsForDragAndDrop(first) {\n  ships.style.display = \"flex\";\n  let selected;\n  let currId;\n  let ship = document.querySelectorAll(\".ship\");\n  ship.forEach((s) => {\n    s.addEventListener(\"dragstart\", (e) => {\n      let s = e.target;\n      selected = parseInt(s.getAttribute(\"name\"));\n\n      currId = e.target.id;\n    });\n  });\n  b1.addEventListener(\"dragover\", (e) => {\n    e.preventDefault();\n  });\n\n  b1.addEventListener(\"drop\", (e) => {\n    b1.innerHTML = \"\";\n    e.preventDefault();\n    let newX = e.target;\n    let x = parseInt(newX.getAttribute(\"x\"));\n    let newY = e.target;\n    let y = parseInt(newY.getAttribute(\"y\"));\n    first.shipPlaced = false;\n    first.placeShip(x, y, new _makeShip__WEBPACK_IMPORTED_MODULE_2__[\"default\"](parseInt(selected)), position, \"b1\");\n\n    // removing elements after placing them\n    if (first.shipPlaced == true) {\n      document.getElementById(currId).style.display = \"none\";\n      shipsPlaced++;\n      if (shipsPlaced == 5) {\n        clearAfterPlace();\n      }\n    }\n    console.log(first.shipPlaced);\n    x = null;\n    y = null;\n    selected = null;\n\n    first.printBoard(b1, \"something\", \"left\");\n    //}\n  });\n}\n\nbtnRotate.addEventListener(\"click\", () => {\n  let shipss = document.querySelectorAll(\".ship\");\n\n  if (position == \"vertical\") {\n    shipss.forEach((ship) => {\n      if (ship.id == 5) {\n        ship.style.width = \"250px\";\n        ship.style.height = \"50px\";\n      } else if (ship.id == 3 || ship.id == 4) {\n        ship.style.width = \"150px\";\n        ship.style.height = \"50px\";\n      } else if (ship.id == 2 || ship.id == 1) {\n        ship.style.width = \"100px\";\n        ship.style.height = \"50px\";\n      }\n\n      position = \"horizontal\";\n      console.log(position);\n    });\n  } else {\n    shipss.forEach((ship) => {\n      if (ship.id == 5) {\n        ship.style.width = \"50px\";\n        ship.style.height = \"250px\";\n      } else if (ship.id == 3 || ship.id == 4) {\n        ship.style.width = \"50px\";\n        ship.style.height = \"150px\";\n      } else if (ship.id == 2 || ship.id == 1) {\n        ship.style.width = \"50px\";\n        ship.style.height = \"100px\";\n      }\n      position = \"vertical\";\n      console.log(position);\n    });\n  }\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/makeGmBoard.js":
/*!****************************!*\
  !*** ./src/makeGmBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _makeShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeShip */ \"./src/makeShip.js\");\n\n\n\nclass GameBoard {\n  constructor() {\n    this.board = [];\n    this.totalNumOfShips = 5;\n    this.numOfShipsSunk = 0;\n\n    this.position = \"vertical\";\n    this.over = false;\n    this.clicked = false;\n    this.shipPlaced = false;\n  }\n  createBoard() {\n    const size = 10;\n\n    for (let i = 0; i < size; i++) {\n      this.board[i] = [];\n\n      for (let j = 0; j < size; j++) {\n        this.board[i][j] = null;\n      }\n    }\n  }\n\n  placeShip(x, y, ship, position, b1) {\n    //for loop for preventing placing boats if full boat cant fit there\n    let canPlaceShip = false;\n    if (b1 == \"b1\") {\n      canPlaceShip = false;\n      if (position == \"horizontal\") {\n        let size = y + ship.length - 1;\n        if (size < 10) {\n          for (let i = 0; i < ship.length; i++) {\n            //console.log(this.board[x + i][y]);\n            if (this.board[x][y + i] != null) {\n              canPlaceShip = false;\n              this.shipPlaced = false;\n              return \"cant place boat here\";\n            } else {\n              canPlaceShip = true;\n              this.shipPlaced = true;\n            }\n          }\n        } else {\n          this.shipPlaced = false;\n          return \"cant place boat here\";\n        }\n      } else if (position == \"vertical\") {\n        let size = x + ship.length - 1;\n        if (size < 10) {\n          for (let i = 0; i < ship.length; i++) {\n            //console.log(this.board[x + i][y]);\n            if (this.board[x + i][y] != null) {\n              canPlaceShip = false;\n              this.canPlaceShip = false;\n              return \"cant place boat here\";\n            } else {\n              canPlaceShip = true;\n              this.shipPlaced = true;\n            }\n          }\n        } else {\n          this.canPlaceShip = false;\n          return \"cant place boat here\";\n        }\n      }\n    } else {\n      canPlaceShip = true;\n    }\n\n    if (canPlaceShip) {\n      canPlaceShip = false;\n      if (position == \"vertical\") {\n        let size = x + ship.length - 1;\n        if (size < 10) {\n          for (let i = 0; i < ship.length; i++) {\n            if (this.board[x + i][y] == null) {\n              this.board[x + i][y] = ship;\n            } else {\n              return \"cant place boat here\";\n            }\n          }\n        } else return \"cant place boat here\";\n      } else if (position == \"horizontal\") {\n        let size = y + ship.length - 1;\n        if (size < 10) {\n          for (let i = 0; i < ship.length; i++) {\n            if (this.board[x][y + i] == null) {\n              this.board[x][y + i] = ship;\n            } else {\n              return \"cant place boat here\";\n            }\n          }\n        } else return \"cant place boat here\";\n      }\n    }\n  }\n\n  getTailValue(x, y) {\n    return this.board[x][y];\n  }\n\n  reciveAttack(x, y) {\n    if (this.board[x][y] == null) {\n      this.board[x][y] = \"missed\";\n      return;\n    } else if (this.board[x][y] == \"missed\") {\n      return \"invalidMove\";\n    } else if (this.board[x][y] == \"you hitted ship\") {\n      return \"invalidMove\";\n    } else {\n      const ship = this.board[x][y];\n      ship.hit();\n\n      this.board[x][y] = \"you hitted ship\";\n\n      if (ship.sunk == true) this.numOfShipsSunk++;\n      this.gameOver();\n    }\n  }\n\n  gameOver() {\n    if (this.numOfShipsSunk == this.totalNumOfShips) {\n      this.over = true;\n      return alert(\"game ovee\");\n    }\n  }\n\n  printBoard(boardPlace, attackedBy, currBoard) {\n    const rows = 9;\n    this.clicked = false;\n    for (let i = 0; i <= rows; i++) {\n      const r = document.createElement(\"div\");\n      boardPlace.appendChild(r).className = \"make\";\n\n      for (let j = 0; j <= rows; j++) {\n        const c = document.createElement(\"div\");\n        c.setAttribute(\"class\", \"cell\");\n\n        if (this.board[i][j] == \"missed\") {\n          c.style.backgroundColor = \"gray\";\n        } else if (this.board[i][j] == \"you hitted ship\") {\n          c.style.backgroundColor = \"red\";\n        } else if (this.board[i][j] != null) {\n          //show hips on players(left) side\n          if (currBoard == \"left\") {\n            c.style.backgroundColor = \"black\";\n          } else {\n            c.style.backgroundColor = \"white\";\n          }\n        } else {\n          c.style.backgroundColor = \"white\";\n        }\n        c.setAttribute(\"x\", i);\n        c.setAttribute(\"y\", j);\n        // c.setAttribute(\"dragover\", dgOver());\n        // c.setAttribute(\"drop\", dgDrop());\n\n        r.appendChild(c);\n\n        c.addEventListener(\"click\", () => {\n          if (attackedBy == \"player\") {\n            if (!this.over) {\n              //player can attack only right board(enemy-computer)\n              if (\n                this.board[i][j] != \"missed\" &&\n                this.board[i][j] != \"you hitted ship\"\n              ) {\n                this.reciveAttack(i, j);\n                if (this.board[i][j] == null || this.board[i][j] == \"missed\") {\n                  c.style.backgroundColor = \"gray\";\n                } else if (this.board[i][j] == \"you hitted ship\") {\n                  c.style.backgroundColor = \"red\";\n                }\n                this.clicked = true;\n                attackedBy = \"block next move\";\n                (0,___WEBPACK_IMPORTED_MODULE_0__.playerMadeMove)(true);\n              }\n            }\n          }\n        });\n      }\n    }\n  }\n\n  computerRandomAttack() {\n    if (!this.over) {\n      let x = Math.floor(Math.random() * 10);\n      let y = Math.floor(Math.random() * 10);\n\n      if (\n        this.board[x][y] != \"missed\" &&\n        this.board[x][y] != \"you hitted ship\"\n      ) {\n        this.reciveAttack(x, y);\n      } else {\n        this.computerRandomAttack();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/makeGmBoard.js?");

/***/ }),

/***/ "./src/makeShip.js":
/*!*************************!*\
  !*** ./src/makeShip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.numOfTimesHit = 0;\n    this.sunk = false;\n  }\n\n  hit() {\n    this.numOfTimesHit++;\n    this.isSunk();\n  }\n\n  isSunk() {\n    if (this.numOfTimesHit == this.length) {\n      this.sunk = true;\n      return true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/makeShip.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _makeGmBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeGmBoard */ \"./src/makeGmBoard.js\");\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.board = new _makeGmBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/players.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
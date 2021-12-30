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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst divList = document.getElementById('list');\n\nlet dom = {\n    selectedList: 'defaultList',\n\n    clearList: () => {\n        divList.replaceChildren();\n    },\n    \n    updateList: () => {\n    \n        divList.replaceChildren();\n        const lists = _storage__WEBPACK_IMPORTED_MODULE_1__.storage.read();\n        let currentList = [];\n        const nav = document.createElement('nav');\n        lists.forEach((element) => {\n            if(element.name == dom.selectedList) {\n                currentList = element.todos;\n            };\n            const tempA = document.createElement('a');\n            tempA.textContent = element.name;\n            tempA.setAttribute('data-list-key', element.name);\n            nav.appendChild(tempA);\n        });\n        \n        const genList = document.createElement('div');\n        const newListDiv = document.createElement('div');\n        const newListButton = document.createElement('button');\n        newListButton.classList.add('new-list-button');\n        newListButton.textContent = 'New list';\n        const newListInput = document.createElement('input');\n        newListInput.classList.add('new-list-input');\n        newListDiv.append(newListButton, newListInput);\n\n        genList.appendChild(newListDiv);\n\n        genList.appendChild(nav);\n        const addButton = document.createElement('button');\n        addButton.textContent = 'Add';\n        addButton.classList.add('add-button');\n        const addForm = document.createElement('input');\n        addForm.classList.add('add-form');\n        genList.appendChild(addButton);\n        genList.appendChild(addForm);\n        \n        if(currentList && currentList[0]) {\n            currentList.forEach((element, index) => {\n                const tempDiv = document.createElement('div');\n                tempDiv.setAttribute('data-index', index);\n                tempDiv.textContent = element.title;\n                \n                const deleteButton = document.createElement('button');\n                deleteButton.textContent = 'Delete';\n                deleteButton.classList.add('delete-button');\n                tempDiv.appendChild(deleteButton);\n        \n                genList.appendChild(tempDiv);\n                \n            });\n        };\n        divList.appendChild(genList);\n\n        \n    },\n\n    changeList: (newSelectedList) => {\n        dom.selectedList = newSelectedList;\n        dom.updateList();\n    },\n\n    eventListener: () => {\n        window.addEventListener('click', e => {\n            console.log(e);\n            console.log(e.target.attributes);\n            if (e.target.classList.contains('delete-button')) {\n                const lists = _storage__WEBPACK_IMPORTED_MODULE_1__.storage.read();\n                const index = e.path[1].getAttribute('data-index');\n                lists[1].todos.splice(index, 1);\n                console.log('clicked delete button');\n                console.log(lists);\n                _storage__WEBPACK_IMPORTED_MODULE_1__.storage.write(lists[1]);\n        \n                dom.clearList();\n                dom.updateList();\n            } else if(e.target.classList.contains('add-button')) {\n                const input = document.querySelector('.add-form');\n                console.log(input.value);\n                const lists = _storage__WEBPACK_IMPORTED_MODULE_1__.storage.read();\n                const index = e.path[1].getAttribute('data-index');\n                lists[1].todos.push((0,_factories__WEBPACK_IMPORTED_MODULE_0__.todosFactory)(input.value));\n                _storage__WEBPACK_IMPORTED_MODULE_1__.storage.write(lists[1]);\n                dom.updateList();\n            } else if(e.target.classList.contains('new-list-button')) {\n                const input = document.querySelector('.new-list-input');\n                console.log(input.value);\n                _storage__WEBPACK_IMPORTED_MODULE_1__.storage.newList(input.value);\n                dom.updateList();            \n            } else if (e.target.hasAttribute('data-list-key')) {\n                const newSelectedList = e.target.getAttribute('data-list-key');\n                dom.changeList(newSelectedList);\n            };\n        });\n    },\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/dummyLists.js":
/*!***************************!*\
  !*** ./src/dummyLists.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dummyLists\": () => (/* binding */ dummyLists)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst dummyLists = () => {\n    let list = [];\n    for(let i = 0; i < 10; i++) {\n        \n        list.push((0,_factories__WEBPACK_IMPORTED_MODULE_0__.todosFactory)('Default list item ' + i));\n    }\n    let listObject = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.listsFactory)('defaultList', list);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.storage.write(listObject);\n\n    list = [];\n    for(let i = 0; i < 10; i++) {\n        list.push((0,_factories__WEBPACK_IMPORTED_MODULE_0__.todosFactory)('Other list item ' + i));\n    }\n    listObject = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.listsFactory)('otherList', list);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.storage.write(listObject);\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/dummyLists.js?");

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listsFactory\": () => (/* binding */ listsFactory),\n/* harmony export */   \"todosFactory\": () => (/* binding */ todosFactory)\n/* harmony export */ });\n\n\nconst listsFactory = (name, todos) => {\n    return { name, todos }\n};\n\nconst todosFactory = (title, description, dueDate, priority, notes, checklist) => {\n    return { title, description, dueDate, priority, notes, checklist };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/factories.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dummyLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummyLists */ \"./src/dummyLists.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n'use scrict';\n\n\n\n\n\n// localStorage.clear();\n// dummyLists();\n\n_dom__WEBPACK_IMPORTED_MODULE_1__.dom.updateList();\n_dom__WEBPACK_IMPORTED_MODULE_1__.dom.eventListener();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n\n\n\n\n\nlet storage = {\n    \n    write: function(listObject) {\n        const strList = JSON.stringify(listObject);\n        localStorage.setItem(listObject.name, strList);\n    },\n    read: function() {\n        let arr = [];\n        for (let i = 0; i < localStorage.length; i++)   {\n            arr.push(JSON.parse(\n                localStorage.getItem(localStorage.key(i))\n            ));\n        }\n        return arr;\n    },\n    newList: (listName) => {\n        const todos = {};\n        const listObject = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.listsFactory)(listName, todos);\n        storage.write(listObject);\n    },\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
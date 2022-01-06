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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListener */ \"./src/eventListener.js\");\n\n\n\n\n\n\nconst divList = document.getElementById('list');\n\nlet dom = {\n    selectedList: 'defaultList',\n\n    clearList: () => {\n        divList.replaceChildren();\n    },\n    \n    updateList: () => {\n    \n        divList.replaceChildren();\n        const lists = _storage__WEBPACK_IMPORTED_MODULE_1__.storage.read();\n        let currentList = [];\n        const nav = document.createElement('nav');\n        lists.forEach((element) => {\n           \n            const tempA = document.createElement('a');\n            tempA.textContent = element.name;\n            tempA.setAttribute('data-list-key', element.name);\n            if(element.name == dom.selectedList) {\n                currentList = element.todos;\n                tempA.classList.add('active');\n            };\n            nav.appendChild(tempA);\n        });\n        \n        const genList = document.createElement('div');\n        const newListDiv = document.createElement('div');\n        const newListButton = document.createElement('button');\n        newListButton.classList.add('new-list-button');\n        newListButton.textContent = 'New list';\n        const newListInput = document.createElement('input');\n        newListInput.classList.add('new-list-input');\n        newListDiv.append(newListButton, newListInput);\n\n        genList.appendChild(newListDiv);\n\n        genList.appendChild(nav);\n        const addButton = document.createElement('button');\n        addButton.textContent = 'Add';\n        addButton.classList.add('add-button');\n        const addForm = document.createElement('input');\n        addForm.classList.add('add-form');\n        genList.appendChild(addButton);\n        genList.appendChild(addForm);\n        \n        if(currentList && currentList[0]) {\n            currentList.forEach((element, index) => {\n                const tempDiv = document.createElement('div');\n                tempDiv.setAttribute('data-index', index);\n                const titleSpan = document.createElement('span');\n                titleSpan.classList.add('title-span');\n                titleSpan.textContent = element.title;\n                tempDiv.appendChild(titleSpan);\n                // tempDiv.textContent = element.title;\n\n                const editTitleDiv = document.createElement('div');\n                editTitleDiv.classList.add('edit', 'off');\n                editTitleDiv.classList.add('title-edit');\n                const titleInput = document.createElement('input');\n                titleInput.classList.add('title-input');\n                titleInput.value = element.title;\n                editTitleDiv.appendChild(titleInput);\n                tempDiv.appendChild(editTitleDiv);\n                \n                const editButton = document.createElement('button');\n                editButton.textContent = 'Edit';\n                editButton.classList.add('extension', 'edit-button', 'off');\n                tempDiv.appendChild(editButton);\n                \n                const deleteButton = document.createElement('button');\n                deleteButton.textContent = 'Delete';\n                deleteButton.classList.add('extension', 'delete-button', 'off');\n                tempDiv.appendChild(deleteButton);\n\n                const expandedDiv = document.createElement('div');\n                // expandedDiv.textContent = element.description;\n                const descSpan = document.createElement('span');\n                descSpan.textContent = element.description;\n                descSpan.classList.add('desc-span');\n                expandedDiv.appendChild(descSpan);\n                expandedDiv.classList.add('extension', 'off');\n\n                const editDescDiv = document.createElement('div');\n                editDescDiv.classList.add('edit', 'off');\n                editDescDiv.classList.add('desc-edit');\n                const descInput = document.createElement('input');\n                descInput.classList.add('desc-input');\n                descInput.value = element.description;\n                editDescDiv.appendChild(descInput);\n                expandedDiv.appendChild(editDescDiv);\n\n\n                tempDiv.appendChild(expandedDiv);\n\n        \n                genList.appendChild(tempDiv);\n                \n            });\n        };\n        divList.appendChild(genList);\n\n        \n    },\n\n    changeList: (newSelectedList) => {\n        dom.selectedList = newSelectedList;\n        dom.updateList();\n    },\n\n    eventListener: () => {\n        (0,_eventListener__WEBPACK_IMPORTED_MODULE_2__.eventListener)();\n    },\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/dummyLists.js":
/*!***************************!*\
  !*** ./src/dummyLists.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dummyLists\": () => (/* binding */ dummyLists)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst dummyLists = () => {\n    let list = [];\n    for(let i = 0; i < 10; i++) {\n        \n        list.push((0,_factories__WEBPACK_IMPORTED_MODULE_0__.todosFactory)('Default list item ' + i,\n                 'description ' + i));\n    }\n    let listObject = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.listsFactory)('defaultList', list);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.storage.write(listObject);\n\n    list = [];\n    for(let i = 0; i < 10; i++) {\n        list.push((0,_factories__WEBPACK_IMPORTED_MODULE_0__.todosFactory)('Other list item ' + i,\n                'description ' + i));\n    }\n    listObject = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.listsFactory)('otherList', list);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.storage.write(listObject);\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/dummyLists.js?");

/***/ }),

/***/ "./src/eventListener.js":
/*!******************************!*\
  !*** ./src/eventListener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListener\": () => (/* binding */ eventListener)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n\n\n\n\n\nconst eventListener = () => {\n        window.addEventListener('click', e => {\n            console.log(e.path);\n            if (e.target.classList.contains('delete-button')) {\n                const lists = _storage__WEBPACK_IMPORTED_MODULE_0__.storage.read();\n                const index = e.path[1].getAttribute('data-index');\n                let list = _storage__WEBPACK_IMPORTED_MODULE_0__.storage.fetchList(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.selectedList);\n                list.todos.splice(index, 1);\n                \n                _storage__WEBPACK_IMPORTED_MODULE_0__.storage.write(list);\n        \n                _dom__WEBPACK_IMPORTED_MODULE_1__.dom.clearList();\n                _dom__WEBPACK_IMPORTED_MODULE_1__.dom.updateList\n                ();\n            } else if(e.target.classList.contains('add-button')) {\n                const input = document.querySelector('.add-form');\n                console.log(input.value);\n                const lists = _storage__WEBPACK_IMPORTED_MODULE_0__.storage.read();\n                const index = e.path[1].getAttribute('data-index');\n                let list = _storage__WEBPACK_IMPORTED_MODULE_0__.storage.fetchList(_dom__WEBPACK_IMPORTED_MODULE_1__.dom.selectedList);\n                console.log(list.todos);\n                list.todos.push((0,_factories__WEBPACK_IMPORTED_MODULE_2__.todosFactory)(input.value));\n                _storage__WEBPACK_IMPORTED_MODULE_0__.storage.write(list);\n                _dom__WEBPACK_IMPORTED_MODULE_1__.dom.updateList();\n            } else if(e.target.classList.contains('new-list-button')) {\n                const input = document.querySelector('.new-list-input');\n                console.log(input.value);\n                _storage__WEBPACK_IMPORTED_MODULE_0__.storage.newList(input.value);\n                _dom__WEBPACK_IMPORTED_MODULE_1__.dom.updateList();            \n            } else if (e.target.hasAttribute('data-list-key')) {\n                const newSelectedList = e.target.getAttribute('data-list-key');\n                _dom__WEBPACK_IMPORTED_MODULE_1__.dom.changeList(newSelectedList);\n            } else if (e.target.hasAttribute('data-index')) {\n                e.target.querySelectorAll('.extension').forEach((e) => {\n                    e.classList.toggle('off');\n                });\n            } else if (e.target.classList.contains('title-span')) {\n                e.path[1].querySelectorAll('.extension').forEach((e) => {\n                    e.classList.toggle('off');\n                });\n            } else if (e.target.classList.contains('edit-button')) {\n                const divs = e.path[1].querySelectorAll('.title-edit, .desc-edit, .title-span, .desc-span');\n                console.log(divs);\n                divs.forEach((e) => { e.classList.toggle('off'); });\n            };\n        });\n    };\n\n\n\n//# sourceURL=webpack://todo-list/./src/eventListener.js?");

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listsFactory\": () => (/* binding */ listsFactory),\n/* harmony export */   \"todosFactory\": () => (/* binding */ todosFactory)\n/* harmony export */ });\n\n\nconst listsFactory = (name, todos) => {\n    if(todos == undefined) {\n        return { name, todos: [] }\n    };\n    return { name, todos }\n};\n\nconst todosFactory = (title, description, dueDate, priority, notes, checklist) => {\n    return { title, description, dueDate, priority, notes, checklist };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/factories.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n\n\n\n\n\nlet storage = {\n    \n    write: function(listObject) {\n        const strList = JSON.stringify(listObject);\n        localStorage.setItem(listObject.name, strList);\n    },\n    read: function() {\n        let arr = [];\n        for (let i = 0; i < localStorage.length; i++)   {\n            arr.push(JSON.parse(\n                localStorage.getItem(localStorage.key(i))\n            ));\n        }\n        return arr;\n    },\n    newList: (listName) => {\n        if(!storage.fetchList(listName)) {\n            const listObject = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.listsFactory)(listName);\n            storage.write(listObject);\n        }   \n    },\n    fetchList: (listName) => {\n        const arr = storage.read();\n        for (let i = 0; i < arr.length; i++)   {\n            let item = arr[i];\n            if(item.name == listName) {\n                return item;\n            };\n        }\n    },\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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
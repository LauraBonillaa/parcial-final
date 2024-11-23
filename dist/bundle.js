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

/***/ "./src/components/Event/event.ts":
/*!***************************************!*\
  !*** ./src/components/Event/event.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttributeEvents = void 0;\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\nvar AttributeEvents;\n(function (AttributeEvents) {\n    AttributeEvents[\"uid\"] = \"uid\";\n    AttributeEvents[\"event\"] = \"event\";\n    AttributeEvents[\"date\"] = \"date\";\n    AttributeEvents[\"location\"] = \"location\";\n    AttributeEvents[\"image\"] = \"image\";\n    AttributeEvents[\"attendees\"] = \"attendees\";\n})(AttributeEvents = exports.AttributeEvents || (exports.AttributeEvents = {}));\n;\nclass Event extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        return Object.keys(AttributeEvents);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case AttributeEvents.date:\n                this.date = newValue ? Number(newValue) : 0; // Convert to number\n                break;\n            case AttributeEvents.attendees:\n                this.attendees = newValue ? Number(newValue) : 0; // Convert to number\n                break;\n            default:\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n        (0, index_1.addObserver)(this);\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            const container = this.ownerDocument.createElement('div');\n            container.className = 'event-card';\n            const img = this.ownerDocument.createElement('img');\n            img.className = 'event-img';\n            img.src = this.image || 'No image available';\n            container.appendChild(img);\n            const event = this.ownerDocument.createElement('h2');\n            event.className = 'event-name';\n            event.textContent = this.event || 'No event available';\n            container.appendChild(event);\n            const location = this.ownerDocument.createElement('p');\n            location.className = 'event-location';\n            location.textContent = this.location || 'No location available';\n            container.appendChild(location);\n            const date = this.ownerDocument.createElement('p');\n            date.className = 'event-date';\n            date.textContent = `Date: ${this.date || 0}`;\n            container.appendChild(date);\n            const attendees = this.ownerDocument.createElement('p');\n            attendees.className = 'products-quantity';\n            attendees.textContent = `Attendees ${this.attendees || 0}`;\n            container.appendChild(attendees);\n            // const editButton = this.ownerDocument.createElement('edit-button') as EditButton;\n            // container.appendChild(editButton);\n            const DeleteButton = document.createElement('button');\n            DeleteButton.textContent = 'Delete';\n            DeleteButton.className = 'delete-button';\n            DeleteButton === null || DeleteButton === void 0 ? void 0 : DeleteButton.addEventListener('click', () => (0, index_1.dispatch)((0, actions_1.deleteProductAction)(this.uid)));\n        }\n    }\n}\ncustomElements.define('event-component', Event);\nexports[\"default\"] = Event;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Event/event.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// import * as components from './components/index';\nconst index_1 = __webpack_require__(/*! ./store/index */ \"./src/store/index.ts\");\nconst store_1 = __webpack_require__(/*! ./types/store */ \"./src/types/store.ts\");\n__webpack_require__(/*! ./screens/usuario/usuario */ \"./src/screens/usuario/usuario.ts\");\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0, index_1.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            switch (index_1.appState.screen) {\n                case store_1.Screens.USER:\n                    console.log('llego el user');\n                    const user = this.ownerDocument.createElement('user-page');\n                    this.shadowRoot.appendChild(user);\n                    break;\n                case store_1.Screens.ADMIN:\n                    const admin = this.ownerDocument.createElement('admin-page');\n                    this.shadowRoot.appendChild(admin);\n                    break;\n                default:\n                    break;\n            }\n            console.log('Current screen:', index_1.appState.screen);\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/usuario/usuario.ts":
/*!****************************************!*\
  !*** ./src/screens/usuario/usuario.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n__webpack_require__(/*! ../../components/Event/event */ \"./src/components/Event/event.ts\");\nconst event_1 = __webpack_require__(/*! ../../components/Event/event */ \"./src/components/Event/event.ts\");\nclass User extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0, index_1.addObserver)(this);\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (index_1.appState.products.length === 0) {\n                const action = yield (0, actions_1.getProductsAction)();\n                if (action) {\n                    (0, index_1.dispatch)(action);\n                }\n            }\n            this.render();\n        });\n    }\n    Events() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!this.productsContainer)\n                return; // Check if the container exists\n            if (!index_1.appState.products || !Array.isArray(index_1.appState.products)) {\n                console.log('No products found');\n                return;\n            }\n            this.productsContainer.innerHTML = ''; // Clean container\n            index_1.appState.products.forEach((product) => {\n                var _a;\n                const productComponent = this.ownerDocument.createElement('event-component');\n                productComponent.setAttribute(event_1.AttributeEvents.image, product.image);\n                productComponent.setAttribute(event_1.AttributeEvents.event, product.event);\n                productComponent.setAttribute(event_1.AttributeEvents.location, product.location);\n                productComponent.setAttribute(event_1.AttributeEvents.date, product.price.toString());\n                productComponent.setAttribute(event_1.AttributeEvents.attendees, product.quantity.toString());\n                (_a = this.productsContainer) === null || _a === void 0 ? void 0 : _a.appendChild(productComponent);\n            });\n        });\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '<h1>holi</h1>'; // Clean the shadowRoot\n            const homeContainer = this.ownerDocument.createElement('section');\n            homeContainer.className = 'home-container';\n            this.productsContainer = this.ownerDocument.createElement('div');\n            this.productsContainer.className = 'products-container';\n            homeContainer.appendChild(this.productsContainer);\n            this.shadowRoot.appendChild(homeContainer);\n            this.Events();\n        }\n    }\n}\ncustomElements.define('user-page', User);\nexports[\"default\"] = User;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/usuario/usuario.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteProductAction = exports.getProductsAction = exports.addProductAction = exports.navigate = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst firebase_1 = __webpack_require__(/*! ../utils/firebase */ \"./src/utils/firebase.ts\");\nconst navigate = (screen) => {\n    return {\n        action: store_1.Actions.NAVIGATE,\n        payload: screen,\n    };\n};\nexports.navigate = navigate;\nconst addProductAction = (product) => __awaiter(void 0, void 0, void 0, function* () {\n    const success = yield (0, firebase_1.addProducts)(product);\n    if (success) {\n        return {\n            action: store_1.Actions.ADDEVENTS,\n            payload: product,\n        };\n    }\n    return null;\n});\nexports.addProductAction = addProductAction;\nconst getProductsAction = () => __awaiter(void 0, void 0, void 0, function* () {\n    const products = yield (0, firebase_1.getProducts)();\n    return {\n        action: store_1.Actions.GETEVENTS,\n        payload: products,\n    };\n});\nexports.getProductsAction = getProductsAction;\nconst deleteProductAction = (uid) => __awaiter(void 0, void 0, void 0, function* () {\n    yield (0, firebase_1.deleteProduct)(uid);\n    return {\n        action: store_1.Actions.DELETEEVENT,\n        payload: uid,\n    };\n});\nexports.deleteProductAction = deleteProductAction;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addObserver = exports.dispatch = exports.appState = void 0;\nconst reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\nconst initialState = {\n    screen: 'USER',\n    products: [],\n};\nexports.appState = initialState;\nlet observers = [];\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(exports.appState));\n    const newState = (0, reducer_1.reducer)(action, clone);\n    exports.appState = newState;\n    observers.forEach((o) => o.render());\n};\nexports.dispatch = dispatch;\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\nexports.addObserver = addObserver;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reducer = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case store_1.Actions.NAVIGATE:\n            return Object.assign(Object.assign({}, currentState), { screen: payload });\n        case store_1.Actions.ADDEVENTS:\n            return Object.assign(Object.assign({}, currentState), { products: [...currentState.products, payload] });\n        case store_1.Actions.GETEVENTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload || [] });\n        case store_1.Actions.DELETEEVENT:\n            return Object.assign(Object.assign({}, currentState), { products: [...currentState.products.filter((product) => product.uid !== payload)] });\n        default:\n            return currentState;\n    }\n};\nexports.reducer = reducer;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Actions = exports.Screens = void 0;\nvar Screens;\n(function (Screens) {\n    Screens[\"USER\"] = \"USER\";\n    Screens[\"ADMIN\"] = \"ADMIN\";\n})(Screens = exports.Screens || (exports.Screens = {}));\nvar Actions;\n(function (Actions) {\n    Actions[\"NAVIGATE\"] = \"NAVIGATE\";\n    Actions[\"ADDEVENTS\"] = \"ADDEVENTS\";\n    Actions[\"GETEVENTS\"] = \"GETEVENTS\";\n    Actions[\"DELETEEVENT\"] = \"DELETEEVENT\";\n})(Actions = exports.Actions || (exports.Actions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/firebase.ts":
/*!*******************************!*\
  !*** ./src/utils/firebase.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteProduct = exports.getProducts = exports.addProducts = void 0;\nlet db;\n// Instance of Firebase FireStore\nconst getFirestoreInstance = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (!db) {\n        const { initializeApp } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"node_modules_firebase_app_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\"));\n        const { getFirestore } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const { firebaseConfig } = yield Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module '../firebaseConfig.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n        // Your web app's Firebase configuration\n        //IMPORTANT: delete the firebaseConfig when you push to a public repository\n        //firebaseConfig is in the .gitignore file\n        const app = initializeApp(firebaseConfig);\n        db = getFirestore(app);\n    }\n    return db;\n});\n// Functions\nconst addProducts = (product) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const db = yield getFirestoreInstance();\n        const { setDoc, doc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        // Use the product's ID when creating the document\n        const docRef = doc(db, 'Events', product.id);\n        yield setDoc(docRef, product);\n        return true;\n    }\n    catch (error) {\n        console.error(\"Error adding document:\", error);\n        return false;\n    }\n});\nexports.addProducts = addProducts;\nconst getProducts = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const db = yield getFirestoreInstance();\n        const { getDocs, collection } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const where = collection(db, 'Events');\n        const querySnapshot = yield getDocs(where);\n        const data = [];\n        querySnapshot.forEach((doc) => {\n            data.push(doc.data());\n        });\n        return data;\n    }\n    catch (error) {\n        console.error(\"Error getting document:\", error);\n    }\n    ;\n});\nexports.getProducts = getProducts;\nconst deleteProduct = (uid) => __awaiter(void 0, void 0, void 0, function* () {\n    const db = yield getFirestoreInstance();\n    const { doc, deleteDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n    const deleteRef = doc(db, 'Events', uid);\n    yield deleteDoc(deleteRef).then(() => {\n        console.log(\"Document successfully deleted!\");\n    }).catch((error) => {\n        console.log(\"IT IS THIS ERROR!vvvv\");\n        console.error(\"Error removing document: \", error);\n    });\n});\nexports.deleteProduct = deleteProduct;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/firebase.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dca_scoffolding:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdca_scoffolding"] = self["webpackChunkdca_scoffolding"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
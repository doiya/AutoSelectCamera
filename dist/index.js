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

/***/ "./src/Camera.ts":
/*!***********************!*\
  !*** ./src/Camera.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Camera = void 0;\nvar Camera = /** @class */ (function () {\n    function Camera() {\n    }\n    Camera.prototype.play = function (video) {\n        return __awaiter(this, void 0, void 0, function () {\n            var stream, err_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 3, , 4]);\n                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({\n                                video: { width: 1280, height: 720 },\n                                audio: false,\n                            })];\n                    case 1:\n                        stream = _a.sent();\n                        video.srcObject = stream;\n                        return [4 /*yield*/, video.play()];\n                    case 2:\n                        _a.sent();\n                        return [3 /*break*/, 4];\n                    case 3:\n                        err_1 = _a.sent();\n                        console.log(err_1);\n                        return [3 /*break*/, 4];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return Camera;\n}());\nexports.Camera = Camera;\n\n\n//# sourceURL=webpack://autoselectcamera/./src/Camera.ts?");

/***/ }),

/***/ "./src/FaceTracker.ts":
/*!****************************!*\
  !*** ./src/FaceTracker.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FaceTracker = void 0;\nvar faceapi = __importStar(__webpack_require__(/*! face-api.js */ \"face-api.js\"));\nvar FaceTracker = /** @class */ (function () {\n    function FaceTracker() {\n    }\n    FaceTracker.prototype.on = function (video, canvas) {\n        this.loadModel();\n        this.detect(video, canvas);\n    };\n    FaceTracker.prototype.loadModel = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, Promise.all([\n                            faceapi.nets.tinyFaceDetector.loadFromUri('models/weights'),\n                            faceapi.nets.faceLandmark68TinyNet.loadFromUri('models/weights'),\n                        ])];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    FaceTracker.prototype.detect = function (video, canvas) {\n        return __awaiter(this, void 0, void 0, function () {\n            function detect() {\n                return __awaiter(this, void 0, void 0, function () {\n                    var useTinyModel, detection, resizedDetection, landmarks, nose, leftEye, rightEye, jaw, leftMouth, rightMouth, leftOutline, rightOutline;\n                    return __generator(this, function (_a) {\n                        switch (_a.label) {\n                            case 0:\n                                requestAnimationFrame(detect);\n                                useTinyModel = true;\n                                return [4 /*yield*/, faceapi\n                                        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions({\n                                        inputSize: 160,\n                                    }))\n                                        .withFaceLandmarks(useTinyModel)];\n                            case 1:\n                                detection = _a.sent();\n                                if (!detection) {\n                                    return [2 /*return*/];\n                                }\n                                resizedDetection = faceapi.resizeResults(detection, {\n                                    width: video.width,\n                                    height: video.height,\n                                });\n                                // ランドマークをキャンバスに描画\n                                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);\n                                faceapi.draw.drawFaceLandmarks(canvas, resizedDetection);\n                                landmarks = resizedDetection.landmarks;\n                                nose = landmarks.getNose()[3];\n                                leftEye = landmarks.getLeftEye()[0];\n                                rightEye = landmarks.getRightEye()[3];\n                                jaw = landmarks.getJawOutline()[8];\n                                leftMouth = landmarks.getMouth()[0];\n                                rightMouth = landmarks.getMouth()[6];\n                                leftOutline = landmarks.getJawOutline()[0];\n                                rightOutline = landmarks.getJawOutline()[16];\n                                return [2 /*return*/];\n                        }\n                    });\n                });\n            }\n            return __generator(this, function (_a) {\n                return [2 /*return*/];\n            });\n        });\n    };\n    return FaceTracker;\n}());\nexports.FaceTracker = FaceTracker;\n\n\n//# sourceURL=webpack://autoselectcamera/./src/FaceTracker.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Camera_1 = __webpack_require__(/*! ./Camera */ \"./src/Camera.ts\");\nvar FaceTracker_1 = __webpack_require__(/*! ./FaceTracker */ \"./src/FaceTracker.ts\");\nvar video = document.getElementById('video');\nvar camera = new Camera_1.Camera();\ncamera.play(video);\nvar canvas = document.getElementById('canvas1');\nvar faceTracker = new FaceTracker_1.FaceTracker;\nfaceTracker.on(video, canvas);\n\n\n//# sourceURL=webpack://autoselectcamera/./src/index.ts?");

/***/ }),

/***/ "face-api.js":
/*!******************************!*\
  !*** external "face-api.js" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("face-api.js");;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
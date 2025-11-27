/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = require ('actions/core')

try {
    const nameToGreet = core.getInput('who-to-greet')
    console.log(`Hello', ${nameToGreet}!`)
    core.setOutput('time', new Date().toTimeString());
} catch (error) {
    core.setFailed(error.message);
}
module.exports = __webpack_exports__;
/******/ })()
;
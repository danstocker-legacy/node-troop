/**
 * Top-Level Library Namespace
 */
/*global require */
/** @namespace */
var node = {};

/**
 * Mock require for main Node modules
 * @param {string} moduleName
 * @return {troop.Base|undefined}
 */
function require(moduleName) {
    return node[moduleName];
}

var exports = {};

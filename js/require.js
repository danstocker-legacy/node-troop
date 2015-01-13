/*global dessert, troop */
window.require = function (modulePath, globalName) {
    "use strict";

    var moduleName = modulePath.match(/([^/.]+)(?=\.\w+|\s|$)/)[1];

    if (/.*?\.json$/.test(modulePath)) {
        // returning empty object in case we required a JSON
        return {};
    } else {
        // returning global variable in case we requested a module or js file
        return window[moduleName] || globalName && window[globalName];
    }
};

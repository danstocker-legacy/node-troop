/*jshint node:true */
module.exports = function (grunt) {
    "use strict";

    var params = {
        files: [
            'js/namespace.js',
            'js/crypto.js',
            'js/fs.js',
            'js/http.js',
            'js/os.js',
            'js/path.js',
            'js/Stats.js',
            'js/url.js'
        ],

        test: [],

        globals: {
            dessert: true,
            troop  : true
        }
    };

    // invoking common grunt process
    require('common-gruntfile')(grunt, params);
};

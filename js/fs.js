/*global dessert, troop */
(function () {
    "use strict";

    /**
     * @class
     * @extends troop.Base
     */
    window.fs = troop.Base.extend()
        .addMethods(/** @lends fs*/{
            /**
             * @param {string} path
             * @param {function} callback
             */
            exists: function (path, callback) {
                callback(true);
            },

            /**
             * @param {string} path
             * @returns {boolean}
             */
            existsSync: function (path) {
                return true;
            },

            /**
             * @param {string} filename
             * @param {object} [options]
             * @param {function} callback
             */
            readFile: function (filename, options, callback) {
                callback(null, '');
            },

            /**
             * @param {string} filename
             * @param {object} [options]
             * @returns {string}
             */
            readFileSync: function (filename, options) {
                return '';
            },

            /**
             * @param {string} path
             * @param {string} [mode]
             * @param {function} callback
             */
            mkdir: function (path, mode, callback) {
                callback(null);
            },

            /**
             * @param {string} path
             * @param {string} [mode]
             */
            mkdirSync: function (path, mode) {
            },

            /**
             * @param {string} path
             * @param {function} callback
             */
            readdir: function (path, callback) {
                callback(null, []);
            },

            /**
             * @param {string} path
             * @returns {Array}
             */
            readdirSync: function (path) {
                return [];
            }
        });
}());

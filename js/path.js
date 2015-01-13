/*global dessert, troop */
(function () {
    "use strict";

    /**
     * @class
     * @extends troop.Base
     */
    window.path = troop.Base.extend()
        .addMethods(/** @lends path */{
            /**
             * @returns {string}
             */
            resolve: function () {
                return Array.prototype.join.call(arguments, '/');
            },

            /**
             * @param {string} p
             * @param {string} [ext]
             * @returns {string}
             */
            basename: function (p, ext) {
                return '';
            },

            /**
             * @param {string} p
             * @returns {string}
             */
            extname: function (p) {
                return '';
            }
        });
}());

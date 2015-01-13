/*global troop */
(function () {
    "use strict";

    /**
     * @class
     * @extends troop.Base
     */
    window.process = troop.Base.extend()
        .addMethods(/** @lends process */{
            /** @returns {string} */
            cwd: function () {
                return '';
            }
        });
}());
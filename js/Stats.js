/*global dessert, troop, node */

/**
 * @class node.Stats
 * @extends troop.Base
 */
node.Stats = troop.Base.extend()
    .addMethods({
        init: function () {},

        isDirectory: function () {return false;},

        isFile: function () {return true;}
    });

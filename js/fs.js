/*global dessert, troop, node */

/**
 * @class node.fs
 * @extends troop.Base
 */
node.fs = troop.Base.extend()
    .addMethods(/** @lends node.fs*/{
        exists: function (filePath, handler) {
            handler(true);
        },

        existsSync: function (filePath) {return true;},

        readFile: function (filePath, mode, handler) {
            handler(false, '');
        },

        readFileSync: function (filePath) {return '';},

        statSync: function (filePath) {return node.Stats.create();},

        lstatSync: function (filePath) {return node.Stats.create();},

        mkdirSync: function (cachePath, attributeString) {},

        readdirSync: function (filePath) {return [];}
    });

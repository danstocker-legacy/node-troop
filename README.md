Node - Troop
============

Troop-based stubs and mocks for basic Node modules.

Heavily incomplete.

Example
-------

Mocking file reading:

    var fs = require('fs');

    fs.addMocks({
        readFile: function (fileName, handler) {
            handler(undefined, "file contents");
        }
    });

    // do stuff that calls fs.readFile

    fs.removeMocks();

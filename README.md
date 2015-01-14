Node - Troop
============

Troop-based stubs for testing server side code with browser-based tools such as jsTestDriver.

Heavily incomplete.

Usage
-----

Make sure `troop.testing = true;` is applied before managing mock methods.

Default methods have been included for convenience. You may add mock methods for functions that are not implemented on the stub.

Example
-------

Mocking file reading:

    var fs = require('fs');

    fs.addMocks({
        readFile: function (filename, callback) {
            callback(null, "file contents");
        }
    });

    // do stuff that calls fs.readFile

    fs.removeMocks();

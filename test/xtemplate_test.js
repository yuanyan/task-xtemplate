'use strict';

var assert = require('assert');
var Xtemplate = require('../lib/xtemplate');
var path = require('path');
var fs = require('fs');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

var filepath = path.join(__dirname, 'fixtures/foo-xtpl.html');

(new Xtemplate).run(
    [{
        contents: fs.readFileSync(filepath),
        path: filepath
    }], // inputs
    {}, // options
    console // logger
).then(function(inputs){

}).catch(errorHandler)

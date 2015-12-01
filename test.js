/* jshint node:true, browser:false */
'use strict';
var assert = require('chai').assert,
    quixote = require('quixote');

describe('Quixote should', function() {
    it('load', function() {
        assert.isNotNull(quixote, 'Expected library to be loaded');
    });
});

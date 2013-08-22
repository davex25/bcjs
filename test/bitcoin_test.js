'use strict';

var bitcoin = require('../lib/bitcoin.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
    setUp: function(done) {
        // setup here
        done();
    },
    'stringifies testnet addresses': function(test) {
        a = new Address(TestNet3Params.Get());
        test.equal(a.toString(), "fda79a24e50ff70ff42f7d89585da5bd19d9e5cc"));
    },
    'stringifies mainnet addresses': function(test) {
        a = new Address(MainNet3Params.Get());
        test.equal(a.toString(), "4a22c3c4cbb31e4d03b15550636762bda0baf85a"));
    }
};

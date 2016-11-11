var it = require('../src/main.js').it;
var assert = require('../src/main.js').assert;
var unitTest = require('../src/unitTest').unitTest;
var toEq = require('../src/matchers.js').toEq;
var test;

var name = 'mike';

function confirmTruth () {
  return true;
}

it("name returns mike", function () {
  assert(name); return toEq('mike');
});

it("confirmTruth returns true", function () {
  assert(confirmTruth()); return toEq(true);
});

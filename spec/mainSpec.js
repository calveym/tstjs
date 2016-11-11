// Required setup code to import functions:
var main = require('../src/main.js');
var unitTest = require('../src/unitTest').unitTest;
var matchers = require('../src/matchers.js');
var it = main.it;
var assert = main.assert;
var isTrue = matchers.isTrue;
var isFalse = matchers.isFalse;
var toEq = matchers.toEq;


// variables/ functions for tests
var name = 'mike';
var william = false;
var johnny = true;
function returnTrue () {
  return true;
}


// Example tests:
it("name returns mike", function () {
  assert(name); return toEq('mike');
});

it("returnTrue returns true", function () {
  assert(returnTrue()); return toEq(true);
});

it("johnny is true", function () {
  assert(johnny); return isTrue();
});

it("william is false", function () {
  assert(william); return isFalse();
});

// PLEASE NOTE: these tests are currently obsolete. Please disregard them for now.

// Required setup code to import functions:
var main = require('../src/main.js');
var unitTest = require('../src/unitTest').unitTest;
var matchers = require('../src/matchers.js');
var describe = main.describe;
var it = main.it;
var assert = main.assert;
var isTrue = matchers.isTrue;
var isFalse = matchers.isFalse;
var toEq = matchers.toEq;


// variables/ functions for tests
function multiplyByFive (varToMultiply) {
  return varToMultiply * 5;
}

function returnsTrue () {
  return true;
}


// Example tests:
describe("#multiplyByFive", function () {
  it("returns param multiplied by 5", function () {
    assert(multiplyByFive(2)); return toEq(10);
  });

  it("works with negative numbers", function () {
    assert(multiplyByFive(-2)); return toEq(-10);
  });
});

describe("#returnsTrue", function () {
  it("returns true", function () {
    assert(returnsTrue()); toEq(true);
  });
  it("does not return false", function () {

  });
});

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


// Example tests:
describe("#multiplyByFive", function () {
  it("returns param multiplied by 5", function () {
    assert(multiplyByFive(2)); return toEq(10);
  });
});

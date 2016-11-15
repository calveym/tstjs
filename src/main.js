var test = {};
var results = [];

function describe(testName, callback) {
  startTest(testName);
  callback();
  endTest(testName);
}

function it(testName, callback) {
  if(callback() === true) {
    processPass(testName, callback);
  } else {
    processFail(testName, callback);
  }
}

function assert(variable) {
  test = {};
  test.firstVariable = variable;
}

function to() {
  test.isPositive = true;
}

function toNot() {
  test.isPositive = false;
}

function be(variable) {
  test.firstVariable = variable;
  test.matcher = 'be';
  return runTest();
}

function runTest() {
  if(test.isPositive) {
    return(runPositive());
  } else {
    return(runNegative());
  }
}

function runNegative() {
  if(test.matcher === 'be') {
    return(test.firstVariable !== test.secondVariable);
  }
}

function runPositive() {
  if(test.matcher === 'be') {
    return(test.firstVariable === test.secondVariable);
  }
}

function processPass(testName) {
  results.push({
    name: testName,
    firstVariable: test.firstVariable,
    secondVariable: test.secondVariable,
    isPassed: true
  });
}

function processFail(testName) {
  results.push({
    name: testName,
    firstVariable: test.firstVariable,
    secondVariable: test.secondVariable,
    isPassed: false
  });
}

// variables/ functions for tests
function multiplyByFive (varToMultiply) {
  return varToMultiply * 5;
}

function returnsTrue () {
  return true;
}

function startTest (testName) {

}

function endTest (testName) {

}

// Example tests:
describe("#multiplyByFive", function () {
  it("returns param multiplied by 5", function () {
    assert(multiplyByFive(2)); to(); return be(10);
  });

  it("works with negative numbers", function () {
    assert(multiplyByFive(-2)); to(); return be(-10);
  });
});

describe("#returnsTrue", function () {
  it("returns true", function () {
    assert(returnsTrue()); to(); return be(true);
  });
  it("does not return false", function () {

  });
});

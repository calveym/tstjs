var chalk = require('chalk');

var test = {};
var results = [];

function describe(testName, testFunction) {
  startTest(testName);
  testFunction();
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

function to(matcher) {
  test.isPositive = true;
  return matcher();
}

function toNot(matcher) {
  test.isPositive = false;
  return matcher();
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

function startTest (testName) {
  logFunction(testName);
}

function endTest (testName) {
  logTests(testName);
}

function logFunction (testName) {
  console.log(chalk.green(testName));
}

function logTests (testName) {

}

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
    assert(multiplyByFive(2)); to(function () {
      be(10);
    });
  });

  it("works with negative numbers", function () {
    assert(multiplyByFive(-2)); to(function () {
      be(-10);
    });
  });
});

describe("#returnsTrue", function () {
  it("returns true", function () {
    assert(returnsTrue()); to(function () {
      be(true);
    });
  });

  it("does not return false", function () {
    assert(returnsTrue()); toNot(function () {
      be(true);
    });
  });
});

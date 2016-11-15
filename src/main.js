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
    return(runPostive());
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

var test = {};

function describe (testName, callback) {
  startTest (testName);
  callback ();
  endTest (testName);
}

function it (testName, callback) {
  if (callback () === true) {
    addPass (testName, callback());
  } else {
    addFail (testName, callback());
  }
}

function assert (variable) {
  test.firstVariable = variable;
}

function to () {
  test.isPositive = true;
}

function toNot () {
  test.isPositive = false;
}

function be (variable) {
  test.firstVariable = variable;
  test.matcher = 'be';
  return runTest();
}

function runTest () {
  if(test.isPositive) {
    return(runPostive());
  } else {
    return(runNegative());
  }
}

function runNegative () {
  if(test.matcher === 'be') {
    return(test.firstVariable !== test.secondVariable);
  }
}

function runPositive () {
  if(test.matcher === 'be') {
    return(test.firstVariable === test.secondVariable);
  }
}

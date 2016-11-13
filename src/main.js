var UnitTest = require('./unitTest.js').UnitTest;
var handler = require('./handler.js');

exports.it = function (testName, callback) {
  if(callback() === true) {
    handler.logSuccess(testName, callback);
  } else {
    handler.logFailure(testName, callback);
  }
};

exports.describe = function (functionName, callback) {
  handler.startNewTest(functionName, callback);
};

exports.assert = function (variable) {
  test = new UnitTest();
  test.addFirstComparator(variable);
  return test;
};

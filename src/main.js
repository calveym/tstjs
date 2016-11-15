var UnitTest = require('./unitTest.js').UnitTest;
var Logger = require('./logger.js').Logger;
var logger = new Logger();

exports.it = function (testName, callback) {
  if(callback() === true) {
    logger.logSuccess(testName, callback);
  } else {
    logger.logFailure(testName, callback);
  }
};

exports.describe = function (functionName, callback) {
  logger.startNewTest(functionName, callback);

};

exports.assert = function (variable) {
  test = new UnitTest();
  test.addFirstComparator(variable);
  return test;
};

var it = exports.it;

it("returns param multiplied by 5", function () {
  console.log("This works too hehehe");
});

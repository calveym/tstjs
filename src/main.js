var UnitTest = require('./unitTest.js').UnitTest;

exports.it = function (testName, callback) {
  if(callback() === true) {
    process.stdout.write("  " + testName + "  .\n");
  } else {
    process.stdout.write("  " + testName + "  Failed\n");
  }
};

exports.describe = function (functionName, callback) {
  process.stdout.write("\n" + functionName);
  callback();
};

exports.assert = function (variable) {
  test = new UnitTest();
  test.addFirstComparator(variable);
  return test;
};

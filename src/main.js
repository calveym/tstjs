var UnitTest = require('./unitTest.js').UnitTest;

exports.it = function (testName, callback) {
  if(callback() === true) {
    process.stdout.write(".\n");
  } else {
    process.stdout.write(testName + " Failed\n");
  }
};

exports.assert = function (variable) {
  test = new UnitTest();
  test.addFirstComparator(variable);
  return test;
};

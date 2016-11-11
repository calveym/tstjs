unitTest = function () {

};

unitTest.prototype.addFirstComparator = function (variable) {
  this.firstComparator = variable;
};

unitTest.prototype.addSecondComparator = function (variable) {
  this.secondComparator = variable;
};

unitTest.prototype.runComparison = function () {
  return this.firstComparator === this.secondComparator;
};

function it (testName, callback) {
  if(callback() === true) {
    console.log(testName + " . ");
  } else {
    console.log(testName + " Failed");
  }
}

function assert (variable) {
  test = new unitTest();
  test.addFirstComparator(variable);
}

function toEq (variable) {
  test.addSecondComparator(variable);
  return test.runComparison();
}

var chalk = require('chalk');

function Assert(variable) {
  this.firstComparator = variable;
}

Assert.prototype.toBe = function (variable) {
  this.secondComparator = variable;
  this.matcher = 'to be';
  this.result = this.firstComparator === this.secondComparator;
  return this;
};

Assert.prototype.toNotBe = function (variable) {
  this.secondComparator = variable;
  this.matcher = 'to not be';
  this.result = this.firstComparator !== this.secondComparator;
  return this;
};


function describe(testName, arrayOfTests) {
  startLog(testName);
  arrayOfTests.map(function (thisArg) {
    logTest(thisArg());
  });
  endLog(testName);
}

function it(testName, test) {
  if(test() === true) {
    processPass(testName, test);
  } else {
    processFail(testName, test);
  }
}

function processPass

function assert(variable) {
  return new Assert(variable);
}

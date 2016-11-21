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
  arrayOfTests.forEach(function(element) {
    element();
  });
}

function it(testName, test) {
  if(test() === true) {
    processPass(testName, test);
  } else {
    processFail(testName, test);
  }
}

function processPass(testName, test) {
  console.log(chalk.green("  " + testName));
}

function processFail(testName, test) {
  console.log(chalk.red("  " + testName));
  console.log(chalk.red("  Expected " + test.firstComparator + test.matcher + test.secondComparator));
}

function assert(variable) {
  return new Assert(variable);
}

function startLog(testName) {
  console.log(chalk.green(testName));
}

var name = 'john';

describe("#name", [function () {
  it("returns john", function () {
    assert(name).toBe('john');
  });
}]);

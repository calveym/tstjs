var chalk = require('chalk');

function Assert (variable) {
}

Assert.prototype.to = function () {

};

Assert.prototype.toNot = function () {

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

function assert(variable) {
  return new Assert(variable);
}

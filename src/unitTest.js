UnitTest = function () {};

UnitTest.prototype.addFirstComparator = function (variable) {
  this.firstComparator = variable;
};

UnitTest.prototype.addSecondComparator = function (variable) {
  this.secondComparator = variable;
};

UnitTest.prototype.runComparison = function () {
  return this.firstComparator === this.secondComparator;
};

exports.UnitTest = UnitTest;

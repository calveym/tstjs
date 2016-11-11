exports.toEq = function (variable) {
  test.addSecondComparator(variable);
  return test.runComparison();
};

exports.isTrue = function () {
  return test.firstComparator === true;
};

exports.isFalse = function () {
  return test.firstComparator === false;
};



// WIP:
exports.to = function () {
  return test;
};

exports.notTo = function () {
  return test;
};

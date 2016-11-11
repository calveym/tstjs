exports.toEq = function (variable) {
  test.addSecondComparator(variable);
  return test.runComparison();
};

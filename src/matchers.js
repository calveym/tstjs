exports = require(module.exports);

function toEq (variable) {
  test.addSecondComparator(variable);
  return test.runComparison();
}

function Logger() {

}

Logger.prototype.startNewTest = function (functionName, callback) {
  console.log("THIS IS WORKING MOUHAHAHAHAHA");
};

Logger.prototype.logPass = function (testName, callback) {

};

Logger.prototype.logFail = function (testName, callback) {

};

Logger.prototype.endTest = function (functionName, callback) {

};

exports.Logger = Logger;

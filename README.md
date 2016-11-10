# tst.js
A testing microframework for javascript.

## Authors:
Michael Calvey

## HOW TO USE:

Here is a code snippet that sets up a unit test:
```javascript
test("testName", function() {  # creates initial test object
  
  beforeEach(function() {  # callback runs before each test
    # setup code shared by all tests
  });

  describe("#testedFunctionName", function() {
    beforeEach(function() {

    })
  
    it("Does something", function() {
      expect().[to/notTo].[be/eq/include]();
    })

  
  })

});
```

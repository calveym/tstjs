# tst.js
A testing microframework for javascript.

## Authors:
Michael Calvey

## TODO:
This microframework is still in very early stages. Therefore, many features necessary for a fully functioning test suite are not yet implemented. Here is a list of the features that are up next in the pipeline:

- Export the methods(!!!)
- Add more matchers.

## HOW TO USE:
Unfortunately, at the moment the package is not yet importable as a module. This is coming soon! For the time being, the code in `src/main.js` needs to be copied into the file to be tested.
Here is a code snippet that sets up a unit test:

```javascript
var name = 'john';

describe("#name", function () {
  it("returns john", function () {
    assert(name).toBe('john');
  });
});
```

## License:
SEE LICENSE


NB while running, tests are stored in a hash of arrays

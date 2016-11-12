# tst.js
A testing microframework for javascript.

## Authors:
Michael Calvey

## TODO:
This microframework is still in very early stages. Therefore, many features necessary for a fully functioning test suite are not yet implemented. Here is a list of the features that are up next in the pipeline:

- Separation of .to/.notTo from the rest of the matchers.
- Create a handler function that can take care of all logging in the console, and keep track of tests between individual asserts.
- Add color to terminal outputs with chalk.

## HOW TO USE:
Here is a code snippet that sets up a unit test:

```javascript
var name = 'john';

describe("#name", function () {
  it("returns john", function () {
    assert(name); return toEq('john');
  )};
});
```

For more examples of testing syntax and matchers, please see `./spec`

## License:
SEE LICENSE

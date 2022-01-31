# x-is-type

`x-is-type` is a minimal package for simple type-checks of basic types.

Package is bundled using [microbundle](https://www.npmjs.com/package/microbundle)

## Installation

`npm i x-is-type`

### In Node.js

```js
// ESM:
import { isNum, isStr, isObj } from 'x-is-type';
// CommonJS:
const x = require('x-is-type');
// or:
const { isNum, isStr, isObj } = require('x-is-type');
```

## Usage

This package includes the following functions for type checking of one or more variables:

```js
/** Check if value(s) are of type 'number' and not NaN */
isNum(1);
// => true

/** Check if value(s) are of type 'number', not NaN and integer value(s) */
isInt(1);
// => true

/** Check if value(s) are of type 'number', not NaN and float value(s) */
isFloat(1.1);
// => true

/** Check if value(s) are of type 'string' */
isStr('Hello');
// => true

/** Check if value(s) are of type 'boolean' */
isBool(false);
// => true

/** Check if value(s) are of type 'object' and instance(s) of Object constructor */
isObj({ foo: 'bar' });
// => true

/** Check if value(s) are array(s), (uses Array.isArray) */
isArr([1, 2, 3]);
// => true

/** Check if value(s) are of type 'function' */
isFn(() => {});
// => true

/** Check if value(s) are equal to null */
isNull(null);
// => true

/** Check if value(s) are undefined */
isUndef(undefined);
// => true
```

All of the built in functions are created using [`createTypeChecker`](https://github.com/vinsjo/x-is-type/blob/main/src/typeChecker.ts).

Example:

```js
// This is how 'isStr' is initialized
const isStr = createTypeChecker((x) => typeof x === 'string');

isStr('Hello');
// => true
isStr('Hello', 'World');
// => true
isStr(1);
// => false
isStr('Hello', 1);
// => false
```

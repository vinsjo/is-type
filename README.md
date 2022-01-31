# @vinsjo/is-type

`@vinsjo/is-type` is a minimal package for simple type-checks of basic types.

Package is bundled using [microbundle](https://www.npmjs.com/package/microbundle)

## Installation

`npm install @vinsjo/is-type`

### In Node.js

```js
// CommonJS
const { isNum, isStr, isObj } = require('@vinsjo/is-type');
// ESM
import { isNum, isStr, isObj } from '@vinsjo/is-type';
```

## Usage

This package includes the following functions for type checking of one or more variables:

```js
/** Check if value(s) is of type 'number' and not NaN */
isNum(1);
// => true

/** Check if value(s) is of type 'number', not NaN and an integer */
isInt(1);
// => true

/** Check if value(s) is of type 'number', not NaN and not an integer */
isFloat(1.1);
// => true

/** Check if value(s) is of type 'string' */
isStr('Hello');
// => true

/** Check if value(s) is of type 'boolean' */
isBool(false);
// => true

/** Check if value(s) is of type 'object' and an Object instance */
isObj({ foo: 'bar' });
// => true

/** Check if value(s) are array(s), just a shorter version of Array.isArray */
isArr([1, 2, 3]);
// => true

/** Check if value(s) is of type 'function' */
isFn(() => {});
// => true

/** Check if value(s) is equal to null */
isNull(null);
// => true

/** Check if value(s) are undefined */
isUndef(undefined);
// => true
```

All of the built in functions are created using `createTypeChecker`.

Example:

```js
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

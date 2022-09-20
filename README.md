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
const { isNum, isStr, isObj } = require('x-is-type');
```

## Usage

This package includes the following functions for type checking of one or more variables.

```js
/** Check if typeof all values is 'number' and not NaN */
isNum(1);
// => true
isNum(1, NaN);
// => false

/**
 * Check if typeof all values is 'number',
 * not NaN and integers
 */
isInt(1);
// => true
isInt(1, 1.1);
// => false

/**
 * Check if typeof all values is 'number',
 * not NaN and floating point numbers
 */
isFloat(1.1);
// => true
isFloat(1.1, 1);
// => false

/** Check if typeof all values is 'string' */
isStr('Hello');
// => true
isStr("Hello", 1);
// => false

/** Check if typeof all values is 'boolean' */
isBool(false);
// => true
isBool(false, null);
// => false

/**
 * Check if typeof all values is 'object',
 * not null and instances of ObjectConstructor
 */
isObj({ foo: 'bar' });
// => true
isObj({ foo: 'bar' }, null);
// => false

/** Check if all values are arrays, (uses Array.isArray) */
isArr([1, 2, 3]);
// => true
isArr([1, 2, 3], {});
// => false

/** Check if typeof all values is 'function' */
isFn(() => {});
// => true
isFn(() => {}, []);
// => false

/** Check if all values are null */
isNull(null);
// => true
isNull(null, undefined);
// => false

/** Check if all values are undefined */
isUndef(undefined);
// => true
isUndef(undefined, null);
// => false

/** Check if all values are undefined or null */
isNullish(undefined, null);
// => true
isNullish(undefined, null, 0);
// => false

/** Check if all values are instances of DateConstructor */
isDate(new Date());
// => true
isDate(new Date(), Date.now());
// => false

/** 
 * Check if all values are instances of DateConstructor
 * and contains valid dates
 */
 isValidDate(new Date(1970, 1, 1))
 // => true
 isValidDate(new Date(1970, 1, 1), new Date("hello"))
 // => false
 
 /** Check if typeof all values is 'symbol' */
isSymbol(Symbol(123));
// => true
isSymbol(Symbol(123), 123);
// => false

/** Check if all values are instances of MapConstructor */
isMap(new Map());
// => true
isMap(new Map(), {foo: "bar"});
// => false

/** Check if all values are instances of SetConstructor */
isSet(new Set());
// => true
isSet(new Set(), []);
// => false
```

All of the functions listed above are created using [`createTypeChecker`](https://github.com/vinsjo/x-is-type/blob/main/src/index.ts#L5) and a corresponding [`callback function`](https://github.com/vinsjo/x-is-type/blob/main/src/callbacks.ts)

If performance or better TypeScript support in terms of return type (for supported types) is a priority over being able to check types of multiple values at once, the callbacks can be used instead:

## Import Callbacks only:
```js
// ESM:
import { isNum, isStr, isObj } from 'x-is-type/callbacks';
// CommonJS:
const { isNum, isStr, isObj } = require('x-is-type/callbacks');
```
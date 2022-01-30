# @vinsjo/is-type

`@vinsjo/is-type` is a minimal package for simple type-checks of basic types.

## Installation

    npm install @vinsjo/is-type

## Available Functions

```js
const isNum = x => typeof x === 'number' && !Number.isNaN(x);
const isInt = x => isNum(x) && x % 1 === 0;
const isFloat = x => isNum(x) && !isInt(x);
const isStr = x => typeof x === 'string';
const isObj = x => typeof x === 'object' && x instanceof Object;
const isArr = x => Array.isArray(x);
const isFn = x => typeof x === 'function';
const isBool = x => typeof x === 'boolean';
```

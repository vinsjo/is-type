import { createTypeChecker } from './typeChecker';

/** Check if value(s) is of type 'number' and not NaN */
const isNum = createTypeChecker(
	(x: any) => typeof x === 'number' && !Number.isNaN(x)
);
/** Check if value(s) is of type 'number', not NaN and an integer */
const isInt = createTypeChecker(
	(x: any) => typeof x === 'number' && !Number.isNaN(x) && x % 1 === 0
);
/** Check if value(s) is of type 'number', not NaN and not an integer */
const isFloat = createTypeChecker(
	(x: any) => typeof x === 'number' && !Number.isNaN(x) && x % 1 !== 0
);
/** Check if value(s) is of type 'string' */
const isStr = createTypeChecker((x: any) => typeof x === 'string');
/** Check if value(s) is of type 'boolean' */
const isBool = createTypeChecker((x: any) => typeof x === 'boolean');
/** Check if value(s) is of type 'object' and an Object instance */
const isObj = createTypeChecker(
	(x: any) => typeof x === 'object' && x instanceof Object
);
/** Check if value(s) are array(s), just a shorter version of Array.isArray */
const isArr = createTypeChecker((x: any) => Array.isArray(x));
/** Check if value(s) is of type 'function' */
const isFn = createTypeChecker((x: any) => typeof x === 'function');

export {
	createTypeChecker,
	isNum,
	isInt,
	isFloat,
	isStr,
	isBool,
	isObj,
	isArr,
	isFn,
};

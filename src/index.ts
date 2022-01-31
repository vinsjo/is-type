import { createTypeChecker } from './typeChecker';

/** Check if value(s) are of type 'number' and not NaN */
const isNum = createTypeChecker(
	(x: any) => typeof x === 'number' && !Number.isNaN(x)
);
/** Check if value(s) are of type 'number', not NaN and integer value(s) */
const isInt = createTypeChecker(
	(x: any) => typeof x === 'number' && !Number.isNaN(x) && x % 1 === 0
);
/** Check if value(s) are of type 'number', not NaN and float value(s) */
const isFloat = createTypeChecker(
	(x: any) => typeof x === 'number' && !Number.isNaN(x) && x % 1 !== 0
);
/** Check if value(s) are of type 'string' */
const isStr = createTypeChecker((x: any) => typeof x === 'string');
/** Check if value(s) are of type 'boolean' */
const isBool = createTypeChecker((x: any) => typeof x === 'boolean');
/** Check if value(s) are of type 'object' and instance(s) of Object constructor */
const isObj = createTypeChecker(
	(x: any) => typeof x === 'object' && x instanceof Object
);
/** Check if value(s) are array(s), (uses Array.isArray) */
const isArr = createTypeChecker(Array.isArray);
/** Check if value(s) are of type 'function' */
const isFn = createTypeChecker((x: any) => typeof x === 'function');
/** Check if value(s) are equal to null */
const isNull = createTypeChecker((x) => x === null);
/** Check if value(s) are undefined */
const isUndef = createTypeChecker((x) => typeof x === 'undefined');

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
	isNull,
	isUndef,
};

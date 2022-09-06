export type typeValidator = (x: any) => boolean;
export type typeChecker = (...values: any[]) => boolean;

/** Create typeChecker function */
const createTypeChecker = (validatorFn: typeValidator): typeChecker => {
	return (...values) => values.every(validatorFn);
};
/** Check if value(s) are of type 'number' and not NaN */
const isNum = createTypeChecker(
	(x) => typeof x === 'number' && !Number.isNaN(x)
);
/** Check if value(s) are of type 'number', not NaN and integer value(s) */
const isInt = createTypeChecker(
	(x) => typeof x === 'number' && !Number.isNaN(x) && x % 1 === 0
);
/** Check if value(s) are of type 'number', not NaN and float value(s) */
const isFloat = createTypeChecker(
	(x) => typeof x === 'number' && !Number.isNaN(x) && x % 1 !== 0
);
/** Check if value(s) are of type 'string' */
const isStr = createTypeChecker((x) => typeof x === 'string');
/** Check if value(s) are of type 'boolean' */
const isBool = createTypeChecker((x) => typeof x === 'boolean');
/** Check if value(s) are of type 'object' and instance(s) of Object constructor */
const isObj = createTypeChecker(
	(x) => typeof x === 'object' && x instanceof Object
);
/** Check if value(s) are array(s), (uses Array.isArray) */
const isArr = createTypeChecker(Array.isArray);
/** Check if value(s) are of type 'function' */
const isFn = createTypeChecker((x) => typeof x === 'function');
/** Check if value(s) are equal to null */
const isNull = createTypeChecker((x) => x === null);
/** Check if value(s) are undefined */
const isUndef = createTypeChecker((x) => typeof x === 'undefined');
/** Check if value(s) are Date objects */
const isDate = createTypeChecker((x) => x instanceof Date);
/** Check if value(s) are valid Date objects */
const isValidDate = createTypeChecker(
	(x) => x instanceof Date && !isNaN(Number(x))
);

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
	isDate,
	isValidDate,
};

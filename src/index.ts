export type ValidatorCallback = (x: any) => boolean;
export type Validator = (...args: any[]) => ReturnType<ValidatorCallback>;

/** Create typeChecker function */
export const createTypeChecker = (callback: ValidatorCallback): Validator => {
	return (...args: any[]) =>
		args.length === 0
			? false
			: args.length === 1
			? callback(args[0])
			: args.every((x) => callback(x));
};
/** Check if value(s) are of type 'number' and not NaN */
export const isNum = createTypeChecker(
	(x) => typeof x === 'number' && !Number.isNaN(x)
);
/** Check if value(s) are of type 'number',
 * smaller than Infinity, larger than -Infinity and not NaN
 */
export const isFinite = createTypeChecker(
	(x) =>
		typeof x === 'number' &&
		x < Infinity &&
		x > -Infinity &&
		!Number.isNaN(x)
);
/** Check if value(s) are of type 'number', not NaN and integer value(s) */
export const isInt = createTypeChecker(
	(x) => typeof x === 'number' && !Number.isNaN(x) && x % 1 === 0
);
/** Check if value(s) are of type 'number', not NaN and float value(s) */
export const isFloat = createTypeChecker(
	(x) => typeof x === 'number' && !Number.isNaN(x) && x % 1 !== 0
);
/** Check if value(s) are of type 'string' */
export const isStr = createTypeChecker((x) => typeof x === 'string');
/** Check if value(s) are of type 'boolean' */
export const isBool = createTypeChecker((x) => typeof x === 'boolean');
/** Check if value(s) are of type 'object' and instance(s) of Object export constructor */
export const isObj = createTypeChecker(
	(x) => typeof x === 'object' && x instanceof Object
);
/** Check if value(s) are array(s), (uses Array.isArray) */
export const isArr = createTypeChecker(Array.isArray);
/** Check if value(s) are of type 'function' */
export const isFn = createTypeChecker((x) => typeof x === 'function');
/** Check if value(s) are equal to null */
export const isNull = createTypeChecker((x) => x === null);
/** Check if value(s) are undefined */
export const isUndef = createTypeChecker((x) => typeof x === 'undefined');
/** Check if value(s) are Date objects */
export const isDate = createTypeChecker((x) => x instanceof Date);
/** Check if value(s) are valid Date objects */
export const isValidDate = createTypeChecker(
	(x) => x instanceof Date && !isNaN(Number(x))
);
/** Check if value(s) are "truthy" */
export const isTruthy = createTypeChecker((x) => !!x);
/** Check if value(s) are "falsy" */
export const isFalsy = createTypeChecker((x) => !x);

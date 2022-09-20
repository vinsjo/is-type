import * as callbacks from './callbacks';
export * as callbacks from './callbacks';

/** Create typeChecker function */
export const createTypeChecker = <T = unknown>(
	callback: callbacks.Validator<T>
) => {
	return (...values: unknown[]) =>
		values.length < 2
			? callback(values[0])
			: values.every((x) => callback(x));
};
/** Check if typeof all values is 'number' and not NaN */
export const isNum = createTypeChecker(callbacks.isNum);
/**
 * Check if typeof all values is 'number',
 * not NaN and integers
 */
export const isInt = createTypeChecker(callbacks.isInt);
/**
 * Check if typeof all values is 'number',
 * not NaN and floating point numbers
 */
export const isFloat = createTypeChecker(callbacks.isFloat);
/** Check if typeof all values is 'string' */
export const isStr = createTypeChecker(callbacks.isStr);
/** Check if typeof all values is 'boolean' */
export const isBool = createTypeChecker(callbacks.isBool);
/**
 * Check if typeof all values is 'object',
 * not null and instances of ObjectConstructor
 */
export const isObj = createTypeChecker(callbacks.isObj);
/** Check if all values are arrays, (uses Array.isArray) */
export const isArr = createTypeChecker(callbacks.isArr);
/** Check if typeof all values is 'function' */
export const isFn = createTypeChecker(callbacks.isFn);
/** Check if all values are null */
export const isNull = createTypeChecker(callbacks.isNull);
/** Check if all values are undefined */
export const isUndef = createTypeChecker(callbacks.isUndef);
/** Check if all values are undefined or null */
export const isNullish = createTypeChecker(callbacks.isNullish);
/** Check if all values are instances of DateConstructor */
export const isDate = createTypeChecker(callbacks.isDate);
/**
 * Check if all values are instances of DateConstructor
 * and contains valid dates
 */
export const isValidDate = createTypeChecker(callbacks.isValidDate);
/** Check if typeof all values is 'symbol' */
export const isSymbol = createTypeChecker(callbacks.isSymbol);
/** Check if all values are instances of MapConstructor */
export const isMap = createTypeChecker(callbacks.isMap);
/** Check if all values are instances of SetConstructor */
export const isSet = createTypeChecker(callbacks.isSet);

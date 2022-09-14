export type ValidatorCallback = (x?: unknown) => boolean;

/** Create typeChecker function */
export const createTypeChecker = (callback: ValidatorCallback) => {
	return (...args: unknown[]) =>
		args.length < 2 ? callback(args[0]) : args.every((x) => callback(x));
};
/** Check if typeof value(s) is 'number' and value(s) are not NaN */
export const isNum = createTypeChecker(
	(x?: unknown) => typeof x === 'number' && !Number.isNaN(x)
);
/** Check if typeof value(s) is 'number', value(s) are not NaN,
 * value(s) are not -Infinite or Infinite
 */
export const isFiniteNum = createTypeChecker(
	(x?: unknown) => typeof x === 'number' && !Number.isNaN(x) && isFinite(x)
);
/** Check if typeof value(s) is 'number', value(s) are not
 * NaN, value(s) are finite number(s) and integer value(s)
 */
export const isInt = createTypeChecker(
	(x?: unknown) =>
		typeof x === 'number' && !Number.isNaN(x) && isFinite(x) && x % 1 === 0
);
/** Check if typeof value(s) is 'number', value(s) are not
 * NaN, value(s) are finite numbers and float value(s)
 */
export const isFloat = createTypeChecker(
	(x?: unknown) =>
		typeof x === 'number' && !Number.isNaN(x) && isFinite(x) && x % 1 !== 0
);
/** Check if typeof value(s) is 'string' */
export const isStr = createTypeChecker((x?: unknown) => typeof x === 'string');
/** Check if typeof value(s) is 'boolean' */
export const isBool = createTypeChecker(
	(x?: unknown) => typeof x === 'boolean'
);
/** Check if value(s) are not null and typeof value(s) is 'object' */
export const isObj = createTypeChecker(
	(x?: unknown) => x !== null && typeof x === 'object'
);
/** Check if value(s) are array(s), (uses Array.isArray) */
export const isArr = createTypeChecker(Array.isArray);
/** Check if typeof value(s) is 'function' */
export const isFn = createTypeChecker((x?: unknown) => typeof x === 'function');
/** Check if value(s) are null */
export const isNull = createTypeChecker((x?: unknown) => x === null);
/** Check if value(s) are undefined */
export const isUndef = createTypeChecker((x?: unknown) => x === undefined);
/** Check if value(s) are Date objects */
export const isDate = createTypeChecker((x?: unknown) => x instanceof Date);
/** Check if value(s) are valid Date objects */
export const isValidDate = createTypeChecker(
	(x?: unknown) => x instanceof Date && !Number.isNaN(x.valueOf())
);
/** Check if typeof value(s) is 'symbol' */
export const isSymbol = createTypeChecker(
	(x?: unknown) => typeof x === 'symbol'
);
/** Check if value(s) are Map objects */
export const isMap = createTypeChecker((x?: unknown) => x instanceof Map);
/** Check if value(s) are Set objects */
export const isSet = createTypeChecker((x?: unknown) => x instanceof Set);

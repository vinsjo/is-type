/** Check if typeof x is 'number' and x is not NaN
 * TS return type incorrect if x is NaN
 */
export const isNum = (x: unknown): x is number =>
    typeof x === 'number' && !Number.isNaN(x);
/** Check if typeof x is 'string' */
export const isStr = (x: unknown): x is string => typeof x === 'string';
/** Check if typeof x is 'boolean' */
export const isBool = (x: unknown): x is boolean => typeof x === 'boolean';
/** Check if typeof x is 'object', x is not null and x is instanceof Object */
export const isObj = (
    x: unknown
): x is { [k: string | number | symbol]: unknown } =>
    x !== null && typeof x === 'object' && x instanceof Object;
/** Check if x is an array (uses Array.isArray) */
export const isArr = (x: unknown): x is unknown[] => Array.isArray(x);
/** Check if typeof x is 'function' */
export const isFn = (x: unknown): x is (...args: unknown[]) => unknown =>
    typeof x === 'function';
/** Check if x is null */
export const isNull = (x: unknown): x is null => x === null;
/** Check if x is undefined */
export const isUndef = (x: unknown): x is undefined => typeof x === 'undefined';
/** Check if x is instanceof DateConstructor */
export const isDate = (x: unknown): x is Date => x instanceof Date;
/** Check if typeof x is 'symbol' */
export const isSymbol = (x: unknown): x is symbol => typeof x === 'symbol';
/** Check if x is instanceof MapConstructor */
export const isMap = (x: unknown): x is Map<unknown, unknown> =>
    x instanceof Map;
/** Check if x is instanceof SetConstructor */
export const isSet = (x: unknown): x is Set<unknown> => x instanceof Set;

// TS UNCERTAIN RETURN TYPES
/**
 * Check if typeof x is 'number', x is not
 * NaN and x is an integer
 */
export const isInt = (x: unknown): x is number =>
    typeof x === 'number' && x % 1 === 0;
/**
 * Check if typeof x is 'number', x is not
 * NaN and x is a float value
 */
export const isFloat = (x: unknown): x is number =>
    typeof x === 'number' && !Number.isNaN(x % 1) && x % 1 !== 0;
/** Check if x is instanceof Date and contains a valid date */
export const isValidDate = (x: unknown): x is Date =>
    x instanceof Date && !Number.isNaN(x.getTime());

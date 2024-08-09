/**
 * Check if typeof x is 'number' and x is not NaN
 */
export const isNum = (x: unknown): x is number =>
    typeof x === 'number' && !Number.isNaN(x);

/** Check if typeof x is 'string' */
export const isStr = (x: unknown): x is string => typeof x === 'string';

/** Check if typeof x is 'boolean' */
export const isBool = (x: unknown): x is boolean => typeof x === 'boolean';

/** Check if typeof x is 'object', x is not null and x is instanceof Object */
export const isObj = (x: unknown): x is { [k: PropertyKey]: unknown } =>
    x !== null && typeof x === 'object' && x instanceof Object;

/** Check if x is an array (uses Array.isArray) */
export const isArr = (x: unknown): x is unknown[] => Array.isArray(x);

/** Check if typeof x is 'function' or x is instanceof Function */
export const isFn = (x: unknown): x is (...args: unknown[]) => unknown =>
    typeof x === 'function' || x instanceof Function;

/** Check if x is null */
export const isNull = (x: unknown): x is null => x === null;

/** Check if x is undefined */
export const isUndef = (x: unknown): x is undefined => x === undefined;

/** Check if x is undefined or null */
export const isNullish = (x: unknown): x is undefined | null => x == null;

/** Check if x is instanceof DateConstructor */
export const isDate = (x: unknown): x is Date => x instanceof Date;

/** Check if typeof x is 'symbol' */
export const isSymbol = (x: unknown): x is symbol => typeof x === 'symbol';

/** Check if x is instanceof MapConstructor */
export const isMap = (x: unknown): x is Map<unknown, unknown> =>
    x instanceof Map;

/** Check if x is instanceof SetConstructor */
export const isSet = (x: unknown): x is Set<unknown> => x instanceof Set;

/** Check if x is object and if x has no enumerable properties */
export function isEmptyObj(x: unknown): x is Record<PropertyKey, never>;
export function isEmptyObj(x: unknown[]): x is never[];
export function isEmptyObj(x: unknown): x is Record<PropertyKey, never> {
    if (!isObj(x)) return false;
    for (const _ in x) return false;
    return true;
}

// TS UNCERTAIN RETURN TYPES

/**
 * Check if typeof x is 'number', x is not
 * NaN and x is an integer
 */
export function isInt(x: number): boolean;
export function isInt(x: unknown): x is number;
export function isInt(x: unknown) {
    return typeof x === 'number' && x % 1 === 0;
}

/**
 * Check if typeof x is 'number', x is not
 * NaN and x is a float value
 */
export function isFloat(x: number): boolean;
export function isFloat(x: unknown): x is number;
export function isFloat(x: unknown) {
    if (typeof x !== 'number') return false;
    const r = x % 1;
    return !Number.isNaN(r) && r !== 0;
}

/** Check if x is instanceof Date and contains a valid date */
export function isValidDate(x: Date): boolean;
export function isValidDate(x: unknown): x is Date;
export function isValidDate(x: unknown) {
    return x instanceof Date && !Number.isNaN(x.getTime());
}

type Falsy = null | undefined | false | 0 | '';

/** Check if x is any non-falsy value */
export const isTruthy = <T>(x: T | Falsy): x is Exclude<typeof x, Falsy> => !!x;

/** Check if x is any falsy value */
export const isFalsy = (x: unknown): x is Falsy => !x;
